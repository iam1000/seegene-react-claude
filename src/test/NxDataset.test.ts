import { describe, expect, it, vi } from 'vitest'
import { NxDataset } from '#/lib/NxDataset'
import { RowType } from '#/types/dataset'

function createSampleDataset() {
  const ds = new NxDataset({
    id: 'ds_test',
    columns: [
      { id: 'name', type: 'string' },
      { id: 'age', type: 'int' },
      { id: 'score', type: 'float' },
    ],
    useclientlayout: true,
  })
  ds.loadData([
    { name: '홍길동', age: 30, score: 85.5 },
    { name: '김영희', age: 25, score: 92.0 },
    { name: '이철수', age: 35, score: 78.3 },
  ])
  return ds
}

describe('컬럼 스키마', () => {
  it('addColumn으로 컬럼 추가', () => {
    const ds = new NxDataset({ id: 'test' })
    ds.addColumn('col1', 'string', 256, '설명')
    ds.addColumn('col2', 'int')

    expect(ds.getColCount()).toBe(2)
    expect(ds.getColID(0)).toBe('col1')
    expect(ds.getColID(1)).toBe('col2')
  })

  it('getColumnInfo로 컬럼 정보 조회', () => {
    const ds = new NxDataset({
      id: 'test',
      columns: [{ id: 'name', type: 'string', size: 100, description: '이름' }],
    })

    const info = ds.getColumnInfo('name')
    expect(info).not.toBeNull()
    expect(info!.type).toBe('string')
    expect(info!.name).toBe('name')

    const info2 = ds.getColumnInfo(0)
    expect(info2!.id).toBe('name')
  })

  it('addConstColumn으로 상수 컬럼 추가', () => {
    const ds = new NxDataset({ id: 'test' })
    ds.addColumn('col1', 'string')
    ds.addConstColumn('CONST_VAL', 'string', 'FIXED')

    expect(ds.getColCount()).toBe(1)
    expect(ds.getConstCount()).toBe(1)

    ds.addRow({ col1: 'data' })
    expect(ds.getColumn(0, 'CONST_VAL')).toBe('FIXED')
  })

  it('중복 컬럼은 무시', () => {
    const ds = new NxDataset({ id: 'test' })
    ds.addColumn('col1', 'string')
    ds.addColumn('col1', 'int')
    expect(ds.getColCount()).toBe(1)
    expect(ds.getColumnInfo('col1')!.type).toBe('string')
  })
})

describe('행 관리', () => {
  it('addRow로 행 추가 → INSERT 상태', () => {
    const ds = createSampleDataset()
    const idx = ds.addRow({ name: '신규', age: 20, score: 0 })

    expect(ds.getRowCount()).toBe(4)
    expect(ds.getRowType(idx)).toBe(RowType.INSERT)
    expect(ds.getColumn(idx, 'name')).toBe('신규')
  })

  it('insertRow로 특정 위치에 삽입', () => {
    const ds = createSampleDataset()
    const idx = ds.insertRow(1, { name: '삽입', age: 28, score: 88 })

    expect(idx).toBe(1)
    expect(ds.getRowCount()).toBe(4)
    expect(ds.getColumn(1, 'name')).toBe('삽입')
    expect(ds.getColumn(2, 'name')).toBe('김영희')
  })

  it('deleteRow로 NORMAL 행 삭제 → 삭제 버퍼에 보관', () => {
    const ds = createSampleDataset()
    ds.deleteRow(1)

    expect(ds.getRowCount()).toBe(2)
    expect(ds.getDeletedRowCount()).toBe(1)
    expect(ds.getDeletedColumn(0, 'name')).toBe('김영희')
  })

  it('deleteRow로 INSERT 행 삭제 → 삭제 버퍼에 넣지 않음', () => {
    const ds = createSampleDataset()
    ds.addRow({ name: '신규', age: 0, score: 0 })
    ds.deleteRow(3)

    expect(ds.getRowCount()).toBe(3)
    expect(ds.getDeletedRowCount()).toBe(0)
  })

  it('deleteMultiRows', () => {
    const ds = createSampleDataset()
    ds.deleteMultiRows([0, 2])

    expect(ds.getRowCount()).toBe(1)
    expect(ds.getColumn(0, 'name')).toBe('김영희')
    expect(ds.getDeletedRowCount()).toBe(2)
  })

  it('clearData → 항상 컬럼 유지 (useclientlayout 무관)', () => {
    const ds = createSampleDataset()
    ds.clearData()

    expect(ds.getRowCount()).toBe(0)
    expect(ds.getColCount()).toBe(3)
    expect(ds.rowposition).toBe(-1)
  })

  it('clearData → useclientlayout=false여도 컬럼 유지', () => {
    const ds = new NxDataset({
      id: 'test',
      columns: [
        { id: 'name', type: 'string' },
        { id: 'age', type: 'int' },
      ],
      useclientlayout: false,
    })
    ds.loadData([{ name: '홍길동', age: 30 }])

    ds.clearData()
    expect(ds.getRowCount()).toBe(0)
    expect(ds.getColCount()).toBe(2)
  })

  it('clear → 컬럼도 제거', () => {
    const ds = createSampleDataset()
    ds.clear()

    expect(ds.getRowCount()).toBe(0)
    expect(ds.getColCount()).toBe(0)
  })
})

describe('셀 접근', () => {
  it('getColumn / setColumn', () => {
    const ds = createSampleDataset()
    expect(ds.getColumn(0, 'name')).toBe('홍길동')

    ds.setColumn(0, 'name', '홍길동2')
    expect(ds.getColumn(0, 'name')).toBe('홍길동2')
  })

  it('인덱스로 컬럼 접근', () => {
    const ds = createSampleDataset()
    expect(ds.getColumn(0, 0)).toBe('홍길동')
  })

  it('상수 컬럼은 setColumn 무시', () => {
    const ds = new NxDataset({
      id: 'test',
      columns: [{ id: 'val', type: 'string' }],
      constColumns: [{ id: 'CONST', type: 'string', value: 'FIXED' }],
    })
    ds.loadData([{ val: 'data' }])

    ds.setColumn(0, 'CONST', 'CHANGED')
    expect(ds.getColumn(0, 'CONST')).toBe('FIXED')
  })
})

describe('변경 추적', () => {
  it('loadData 후 모든 행은 NORMAL', () => {
    const ds = createSampleDataset()
    for (let i = 0; i < ds.getRowCount(); i++) {
      expect(ds.getRowType(i)).toBe(RowType.NORMAL)
    }
  })

  it('NORMAL 행 setColumn → UPDATE로 전환', () => {
    const ds = createSampleDataset()
    ds.setColumn(0, 'name', '변경')

    expect(ds.getRowType(0)).toBe(RowType.UPDATE)
    expect(ds.getOrgColumn(0, 'name')).toBe('홍길동')
  })

  it('UPDATE 행에서 원래 값으로 복원 → NORMAL 복귀', () => {
    const ds = createSampleDataset()
    ds.setColumn(0, 'name', '변경')
    expect(ds.getRowType(0)).toBe(RowType.UPDATE)

    ds.setColumn(0, 'name', '홍길동')
    expect(ds.getRowType(0)).toBe(RowType.NORMAL)
  })

  it('updatecontrol=false이면 변경 추적 안 함', () => {
    const ds = createSampleDataset()
    ds.updatecontrol = false

    ds.setColumn(0, 'name', '변경')
    expect(ds.getRowType(0)).toBe(RowType.NORMAL)
  })

  it('updatecontrol=false이면 addRow → NORMAL', () => {
    const ds = createSampleDataset()
    ds.updatecontrol = false
    const idx = ds.addRow({ name: '신규', age: 0, score: 0 })
    expect(ds.getRowType(idx)).toBe(RowType.NORMAL)
  })

  it('updatecontrol=false이면 deleteRow → 삭제 버퍼 미포함', () => {
    const ds = createSampleDataset()
    ds.updatecontrol = false
    ds.deleteRow(0)
    expect(ds.getDeletedRowCount()).toBe(0)
  })

  it('addRow 행(INSERT)은 setColumn 후에도 INSERT 유지', () => {
    const ds = createSampleDataset()
    const idx = ds.addRow({ name: '신규', age: 0, score: 0 })

    ds.setColumn(idx, 'name', '수정')
    expect(ds.getRowType(idx)).toBe(RowType.INSERT)
  })

  it('Column 미정의 시 addRow → -1 반환', () => {
    const ds = new NxDataset({ id: 'empty' })
    expect(ds.addRow({ val: '1' })).toBe(-1)
  })

  it('존재하지 않는 행의 getRowType → 0 (EMPTY)', () => {
    const ds = createSampleDataset()
    expect(ds.getRowType(999)).toBe(0)
    expect(ds.getRowType(-1)).toBe(0)
  })

  it('삭제된 NORMAL 행은 원본 데이터로 삭제 버퍼 보관', () => {
    const ds = createSampleDataset()
    ds.setColumn(1, 'name', '수정된김영희')
    expect(ds.getRowType(1)).toBe(RowType.UPDATE)

    ds.deleteRow(1)
    expect(ds.getDeletedColumn(0, 'name')).toBe('김영희')
  })
})

describe('rowposition', () => {
  it('loadData 후 rowposition = 0', () => {
    const ds = createSampleDataset()
    expect(ds.rowposition).toBe(0)
  })

  it('set_rowposition으로 변경', () => {
    const ds = createSampleDataset()
    ds.set_rowposition(2)
    expect(ds.rowposition).toBe(2)
  })

  it('범위 밖이면 클램핑', () => {
    const ds = createSampleDataset()
    ds.set_rowposition(100)
    expect(ds.rowposition).toBe(2)

    ds.set_rowposition(-5)
    expect(ds.rowposition).toBe(-1)
  })

  it('onrowsetchanged 이벤트', () => {
    const handler = vi.fn()
    const ds = new NxDataset({
      id: 'test',
      columns: [{ id: 'val', type: 'string' }],
      events: { onrowsetchanged: handler },
    })
    ds.loadData([{ val: '1' }, { val: '2' }])

    handler.mockClear()
    ds.set_rowposition(1)

    expect(handler).toHaveBeenCalledOnce()
    expect(handler.mock.calls[0]![1]).toEqual({ oldrow: 0, newrow: 1 })
  })

  it('삭제 후 rowposition 재조정', () => {
    const ds = createSampleDataset()
    ds.set_rowposition(2)
    ds.deleteRow(2)
    expect(ds.rowposition).toBe(1)
  })
})

describe('이벤트', () => {
  it('oncolumnchanged 이벤트', () => {
    const handler = vi.fn()
    const ds = new NxDataset({
      id: 'test',
      columns: [{ id: 'val', type: 'string' }],
      events: { oncolumnchanged: handler },
    })
    ds.loadData([{ val: 'old' }])
    handler.mockClear()

    ds.setColumn(0, 'val', 'new')

    expect(handler).toHaveBeenCalledOnce()
    const e = handler.mock.calls[0]![1]
    expect(e.row).toBe(0)
    expect(e.columnid).toBe('val')
    expect(e.oldvalue).toBe('old')
    expect(e.newvalue).toBe('new')
  })

  it('enableevent=false이면 이벤트 안 발생', () => {
    const handler = vi.fn()
    const ds = new NxDataset({
      id: 'test',
      columns: [{ id: 'val', type: 'string' }],
      events: { oncolumnchanged: handler },
    })
    ds.loadData([{ val: 'old' }])
    handler.mockClear()

    ds.set_enableevent(false)
    ds.setColumn(0, 'val', 'new')

    expect(handler).not.toHaveBeenCalled()
  })
})

describe('검색 / 집계', () => {
  it('findRow', () => {
    const ds = createSampleDataset()
    expect(ds.findRow('name', '김영희')).toBe(1)
    expect(ds.findRow('name', '없는사람')).toBe(-1)
  })

  it('findRowExpr', () => {
    const ds = createSampleDataset()
    const idx = ds.findRowExpr((row) => Number(row.age) > 30)
    expect(idx).toBe(2)
  })

  it('getSum / getAvg', () => {
    const ds = createSampleDataset()
    expect(ds.getSum('age')).toBe(90)
    expect(ds.getAvg('age')).toBeCloseTo(30)
  })
})

describe('keystring (정렬)', () => {
  it('오름차순 정렬', () => {
    const ds = createSampleDataset()
    ds.keystring = 'age:A'

    expect(ds.getColumn(0, 'name')).toBe('김영희')
    expect(ds.getColumn(1, 'name')).toBe('홍길동')
    expect(ds.getColumn(2, 'name')).toBe('이철수')
  })

  it('내림차순 정렬', () => {
    const ds = createSampleDataset()
    ds.keystring = 'score:D'

    expect(ds.getColumn(0, 'name')).toBe('김영희')
    expect(ds.getColumn(1, 'name')).toBe('홍길동')
    expect(ds.getColumn(2, 'name')).toBe('이철수')
  })

  it('정렬 해제', () => {
    const ds = createSampleDataset()
    ds.keystring = 'age:A'
    ds.keystring = ''

    expect(ds.getColumn(0, 'name')).toBe('홍길동')
  })
})

describe('filterstr (필터)', () => {
  it('조건에 맞는 행만 표시', () => {
    const ds = createSampleDataset()
    ds.filterstr = 'age >= 30'

    expect(ds.getRowCount()).toBe(2)
    expect(ds.getColumn(0, 'name')).toBe('홍길동')
    expect(ds.getColumn(1, 'name')).toBe('이철수')
  })

  it('필터 해제하면 전체 행 복원', () => {
    const ds = createSampleDataset()
    ds.filterstr = 'age >= 30'
    expect(ds.getRowCount()).toBe(2)

    ds.filterstr = ''
    expect(ds.getRowCount()).toBe(3)
  })

  it('필터 + 정렬 동시 적용', () => {
    const ds = createSampleDataset()
    ds.filterstr = 'age >= 30'
    ds.keystring = 'age:D'

    expect(ds.getRowCount()).toBe(2)
    expect(ds.getColumn(0, 'name')).toBe('이철수')
    expect(ds.getColumn(1, 'name')).toBe('홍길동')
  })
})

describe('toObjectList / toChangedObjectList', () => {
  it('toObjectList("U") — 변경행만', () => {
    const ds = createSampleDataset()
    ds.setColumn(0, 'name', '수정됨')
    ds.addRow({ name: '신규', age: 0, score: 0 })
    ds.deleteRow(2)

    const list = ds.toObjectList('U')
    const types = list.map((r) => r._rowtype)
    expect(types).toEqual(['D', 'U', 'I'])
    expect(list.find((r) => r._rowtype === 'U')!['name']).toBe('수정됨')
  })

  it('toObjectList("A") — 전체행', () => {
    const ds = createSampleDataset()
    ds.setColumn(0, 'name', '수정됨')

    const list = ds.toObjectList('A')
    expect(list.length).toBe(3)
    expect(list[0]!._rowtype).toBe('U')
    expect(list[1]!._rowtype).toBe('N')
    expect(list[2]!._rowtype).toBe('N')
  })

  it('toObjectList("N") — 삭제 제외', () => {
    const ds = createSampleDataset()
    ds.deleteRow(0)

    const list = ds.toObjectList('N')
    expect(list.length).toBe(2)
    expect(list.every((r) => r._rowtype !== 'D')).toBe(true)
  })

  it('toChangedObjectList — I/U/D 분리', () => {
    const ds = createSampleDataset()
    ds.setColumn(0, 'name', '수정됨')
    ds.addRow({ name: '추가', age: 0, score: 0 })
    ds.deleteRow(1)

    const { I, U, D } = ds.toChangedObjectList()
    expect(I.length).toBe(1)
    expect(U.length).toBe(1)
    expect(D.length).toBe(1)
    expect(I[0]!['name']).toBe('추가')
    expect(U[0]!['name']).toBe('수정됨')
    expect(D[0]!['name']).toBe('김영희')
  })

  it('toQueryString', () => {
    const ds = createSampleDataset()
    const qs = ds.toQueryString(0)
    expect(qs).toContain('name=홍길동')
    expect(qs).toContain('age=30')
  })
})

describe('loadData / appendData', () => {
  it('loadData — 기존 데이터 교체, 모두 NORMAL', () => {
    const ds = createSampleDataset()
    ds.addRow({ name: 'temp', age: 0, score: 0 })

    ds.loadData([{ name: '새로운', age: 1, score: 1 }])
    expect(ds.getRowCount()).toBe(1)
    expect(ds.getRowType(0)).toBe(RowType.NORMAL)
    expect(ds.getColumn(0, 'name')).toBe('새로운')
    expect(ds.rowposition).toBe(0)
    expect(ds.getDeletedRowCount()).toBe(0)
  })

  it('appendData — 기존 뒤에 추가, NORMAL', () => {
    const ds = createSampleDataset()
    ds.appendData([{ name: '추가', age: 0, score: 0 }])

    expect(ds.getRowCount()).toBe(4)
    expect(ds.getRowType(3)).toBe(RowType.NORMAL)
  })

  it('loadData — 스키마 없이 자동 컬럼 생성', () => {
    const ds = new NxDataset({ id: 'auto' })
    ds.loadData([{ col_a: 'hello', col_b: 123 }])

    expect(ds.getColCount()).toBe(2)
    expect(ds.getColumnInfo('col_a')!.type).toBe('string')
    expect(ds.getColumnInfo('col_b')!.type).toBe('float')
    expect(ds.getColumn(0, 'col_a')).toBe('hello')
  })
})

describe('subscribe / getSnapshot', () => {
  it('변경 시 구독자 호출', () => {
    const ds = createSampleDataset()
    const cb = vi.fn()
    ds.subscribe(cb)

    ds.setColumn(0, 'name', '변경')
    expect(cb).toHaveBeenCalled()
  })

  it('구독 해제', () => {
    const ds = createSampleDataset()
    const cb = vi.fn()
    const unsub = ds.subscribe(cb)
    unsub()

    ds.setColumn(0, 'name', '변경')
    expect(cb).not.toHaveBeenCalled()
  })

  it('getSnapshot 참조 안정성', () => {
    const ds = createSampleDataset()
    const snap1 = ds.getSnapshot()
    const snap2 = ds.getSnapshot()
    expect(snap1).toBe(snap2)

    ds.setColumn(0, 'name', '변경')
    const snap3 = ds.getSnapshot()
    expect(snap3).not.toBe(snap1)
  })
})

describe('IBSheet8 연동', () => {
  it('toSheetData', () => {
    const ds = createSampleDataset()
    const sheet = ds.toSheetData()

    expect(sheet.data.length).toBe(3)
    expect(sheet.data[0]!['name']).toBe('홍길동')
  })
})

describe('toString', () => {
  it('[object NxDataset]', () => {
    const ds = new NxDataset({ id: 'test' })
    expect(ds.toString()).toBe('[object NxDataset]')
  })
})

// ─────────────────────────────────────────────────
// 버그 수정 검증 테스트
// ─────────────────────────────────────────────────

describe('필터 적용 상태에서 셀 조작', () => {
  it('필터 후 setColumn → 올바른 원본 행 변경', () => {
    const ds = createSampleDataset()
    ds.filterstr = 'age >= 30'

    ds.setColumn(0, 'name', '변경된홍길동')
    ds.filterstr = ''

    expect(ds.getColumn(0, 'name')).toBe('변경된홍길동')
    expect(ds.getColumn(1, 'name')).toBe('김영희')
  })

  it('필터 후 deleteRow → 올바른 원본 행 삭제', () => {
    const ds = createSampleDataset()
    ds.filterstr = 'age >= 30'

    ds.deleteRow(1)
    ds.filterstr = ''

    expect(ds.getRowCount()).toBe(2)
    expect(ds.getDeletedColumn(0, 'name')).toBe('이철수')
  })
})

describe('findRowExpr 문자열 표현식', () => {
  it('문자열 표현식으로 검색', () => {
    const ds = createSampleDataset()
    const idx = ds.findRowExpr('age > 30')
    expect(idx).toBe(2)
  })

  it('복합 조건', () => {
    const ds = createSampleDataset()
    const idx = ds.findRowExpr('age >= 25 && score > 80')
    expect(idx).toBe(0)
  })

  it('함수로도 동작 (기존 호환)', () => {
    const ds = createSampleDataset()
    const idx = ds.findRowExpr((row) => Number(row.age) > 30)
    expect(idx).toBe(2)
  })
})

describe('cancolumnchange 이벤트', () => {
  it('cancolumnchange에서 false 반환 → 변경 취소', () => {
    const ds = new NxDataset({
      id: 'test',
      columns: [{ id: 'val', type: 'string' }],
      events: { cancolumnchange: () => false },
    })
    ds.loadData([{ val: 'original' }])

    const result = ds.setColumn(0, 'val', 'changed')
    expect(result).toBe(false)
    expect(ds.getColumn(0, 'val')).toBe('original')
    expect(ds.getRowType(0)).toBe(RowType.NORMAL)
  })
})

describe('deleteMultiRows 배치 최적화', () => {
  it('한 번의 알림만 발생', () => {
    const ds = createSampleDataset()
    const cb = vi.fn()
    ds.subscribe(cb)
    cb.mockClear()

    ds.deleteMultiRows([0, 2])
    expect(cb).toHaveBeenCalledTimes(1)
  })
})

describe('setColumn / deleteRow 반환값', () => {
  it('setColumn 성공 시 true', () => {
    const ds = createSampleDataset()
    expect(ds.setColumn(0, 'name', '변경')).toBe(true)
  })

  it('setColumn 범위 밖 → false', () => {
    const ds = createSampleDataset()
    expect(ds.setColumn(999, 'name', '변경')).toBe(false)
  })

  it('setColumn 상수 컬럼 → false', () => {
    const ds = new NxDataset({
      id: 'test',
      columns: [{ id: 'val', type: 'string' }],
      constColumns: [{ id: 'CONST', type: 'string', value: 'X' }],
      useclientlayout: true,
    })
    ds.loadData([{ val: 'data' }])
    expect(ds.setColumn(0, 'CONST', 'Y')).toBe(false)
  })

  it('deleteRow 성공 시 true', () => {
    const ds = createSampleDataset()
    expect(ds.deleteRow(0)).toBe(true)
  })

  it('deleteRow 범위 밖 → false', () => {
    const ds = createSampleDataset()
    expect(ds.deleteRow(999)).toBe(false)
    expect(ds.deleteRow(-1)).toBe(false)
  })
})

describe('getAvg NaN 처리', () => {
  it('유효값 없으면 NaN 반환', () => {
    const ds = new NxDataset({
      id: 'test',
      columns: [{ id: 'val', type: 'string' }],
    })
    ds.loadData([{ val: 'abc' }, { val: 'def' }])
    expect(isNaN(ds.getAvg('val'))).toBe(true)
  })

  it('일부 NaN → 유효값 기준 평균', () => {
    const ds = new NxDataset({
      id: 'test',
      columns: [{ id: 'num', type: 'float' }],
    })
    ds.loadData([{ num: 10 }, { num: 'abc' }, { num: 20 }])
    expect(ds.getAvg('num')).toBe(15)
  })
})

describe('enableevent 구독자 독립성', () => {
  it('enableevent=false 상태에서도 React 구독자 알림은 동작', () => {
    const ds = createSampleDataset()
    const subscriber = vi.fn()
    ds.subscribe(subscriber)
    subscriber.mockClear()

    ds.set_enableevent(false)
    ds.setColumn(0, 'name', '변경')

    expect(subscriber).toHaveBeenCalled()
  })
})
