import { describe, expect, it } from 'vitest'
import { buildPostBody, buildQueryString, parseInDs } from '#/api/inDsParser'
import { mapResponseToDatasets, parseOutDs } from '#/api/outDsParser'
import { parseSvcUrl } from '#/api/urlParser'
import { NxDataset } from '#/lib/NxDataset'

describe('parseSvcUrl', () => {
  it('정상 파싱: "GET::bl::rcpt/list"', () => {
    const parsed = parseSvcUrl('GET::bl::rcpt/list')
    expect(parsed.method).toBe('GET')
    expect(parsed.group).toBe('bl')
    expect(parsed.path).toBe('rcpt/list')
  })

  it('POST 대문자 변환', () => {
    const parsed = parseSvcUrl('post::dt::test/save')
    expect(parsed.method).toBe('POST')
  })

  it('형식 오류 시 에러', () => {
    expect(() => parseSvcUrl('invalid')).toThrow()
    expect(() => parseSvcUrl('GET::bl')).toThrow()
  })
})

describe('parseInDs', () => {
  it('단순 Dataset ID', () => {
    const entries = parseInDs('ds_search')
    expect(entries).toHaveLength(1)
    expect(entries[0]!.datasetId).toBe('ds_search')
    expect(entries[0]!.key).toBeUndefined()
    expect(entries[0]!.option).toBeUndefined()
  })

  it('옵션 포함: "ds_data:U"', () => {
    const entries = parseInDs('ds_data:U')
    expect(entries[0]!.datasetId).toBe('ds_data')
    expect(entries[0]!.option).toBe('U')
  })

  it('키 + 옵션: "key=ds_data:U"', () => {
    const entries = parseInDs('key=ds_data:U')
    expect(entries[0]!.key).toBe('key')
    expect(entries[0]!.datasetId).toBe('ds_data')
    expect(entries[0]!.option).toBe('U')
  })

  it('복수 토큰: "ds_a key=ds_b:U"', () => {
    const entries = parseInDs('ds_a key=ds_b:U')
    expect(entries).toHaveLength(2)
    expect(entries[0]!.datasetId).toBe('ds_a')
    expect(entries[1]!.key).toBe('key')
    expect(entries[1]!.datasetId).toBe('ds_b')
    expect(entries[1]!.option).toBe('U')
  })

  it('행 번호 옵션: "ds_data:0"', () => {
    const entries = parseInDs('ds_data:0')
    expect(entries[0]!.option).toBe('0')
  })

  it('빈 문자열', () => {
    expect(parseInDs('')).toHaveLength(0)
    expect(parseInDs('  ')).toHaveLength(0)
  })
})

describe('buildQueryString', () => {
  it('Row 0을 queryString으로 변환', () => {
    const ds = new NxDataset({
      id: 'ds_search',
      columns: [
        { id: 'startDt', type: 'string' },
        { id: 'endDt', type: 'string' },
      ],
    })
    ds.loadData([{ startDt: '20260301', endDt: '20260331' }])

    const entries = parseInDs('ds_search')
    const qs = buildQueryString(entries, { ds_search: ds })

    expect(qs).toContain('startDt=20260301')
    expect(qs).toContain('endDt=20260331')
  })

  it('특정 행 지정: "ds:1"', () => {
    const ds = new NxDataset({
      id: 'ds',
      columns: [{ id: 'val', type: 'string' }],
    })
    ds.loadData([{ val: 'first' }, { val: 'second' }])

    const entries = parseInDs('ds:1')
    const qs = buildQueryString(entries, { ds })

    expect(qs).toContain('val=second')
  })
})

describe('buildPostBody', () => {
  function createTestDs() {
    const ds = new NxDataset({
      id: 'ds_data',
      columns: [
        { id: 'id', type: 'int' },
        { id: 'name', type: 'string' },
      ],
      useclientlayout: true,
    })
    ds.loadData([
      { id: 1, name: '홍길동' },
      { id: 2, name: '김영희' },
    ])
    return ds
  }

  it('키 없이 "ds_data:U" → 변경행 배열 직접 반환', () => {
    const ds = createTestDs()
    ds.setColumn(0, 'name', '수정')

    const body = buildPostBody(parseInDs('ds_data:U'), { ds_data: ds })
    expect(Array.isArray(body)).toBe(true)
    const arr = body as Array<Record<string, unknown>>
    expect(arr.some((r) => r._rowtype === 'U')).toBe(true)
  })

  it('키 있으면 "key=ds_data:U" → { key: [...] }', () => {
    const ds = createTestDs()
    ds.setColumn(0, 'name', '수정')

    const body = buildPostBody(parseInDs('key=ds_data:U'), { ds_data: ds }) as Record<
      string,
      unknown
    >
    expect(body['key']).toBeDefined()
    expect(Array.isArray(body['key'])).toBe(true)
  })

  it('옵션 없으면 기본 "N" (DELETE 제외)', () => {
    const ds = createTestDs()
    ds.deleteRow(0)

    const body = buildPostBody(parseInDs('ds_data'), { ds_data: ds })
    const arr = body as Array<Record<string, unknown>>
    expect(arr.every((r) => r._rowtype !== 'D')).toBe(true)
  })

  it('숫자 옵션: 특정 행 단일 객체', () => {
    const ds = createTestDs()
    const body = buildPostBody(parseInDs('ds_data:0'), { ds_data: ds })
    expect(body).toHaveProperty('id', 1)
    expect(body).toHaveProperty('name', '홍길동')
  })

  it('args 적용', () => {
    const body = buildPostBody([], {}, 'mode=save flag=Y') as Record<string, unknown>
    expect(body['mode']).toBe('save')
    expect(body['flag']).toBe('Y')
  })
})

describe('parseOutDs', () => {
  it('단일 매핑: "ds_list=result"', () => {
    const entries = parseOutDs('ds_list=result')
    expect(entries).toHaveLength(1)
    expect(entries[0]!.datasetId).toBe('ds_list')
    expect(entries[0]!.responseKey).toBe('result')
  })

  it('복수 매핑: "ds_list=result ds_page=pagination"', () => {
    const entries = parseOutDs('ds_list=result ds_page=pagination')
    expect(entries).toHaveLength(2)
  })

  it('중첩 키: "ds_data=result.items"', () => {
    const entries = parseOutDs('ds_data=result.items')
    expect(entries[0]!.responseKey).toBe('result.items')
  })

  it('빈 문자열', () => {
    expect(parseOutDs('')).toHaveLength(0)
  })
})

describe('mapResponseToDatasets', () => {
  it('응답 JSON을 Dataset에 매핑', () => {
    const dsList = new NxDataset({ id: 'ds_list' })
    const dsPage = new NxDataset({ id: 'ds_page' })

    const response = {
      httpStatus: '200',
      result: [
        { id: 1, name: '홍길동' },
        { id: 2, name: '김영희' },
      ],
      pagination: { totalDataCount: 100, pageIndex: 1, pageSize: 50 },
    }

    const entries = parseOutDs('ds_list=result ds_page=pagination')
    mapResponseToDatasets(response, entries, { ds_list: dsList, ds_page: dsPage })

    expect(dsList.getRowCount()).toBe(2)
    expect(dsList.getColumn(0, 'name')).toBe('홍길동')

    expect(dsPage.getRowCount()).toBe(1)
    expect(dsPage.getColumn(0, 'totalDataCount')).toBe(100)
  })

  it('중첩 키 접근: "result.items"', () => {
    const ds = new NxDataset({ id: 'ds' })

    const response = {
      result: {
        items: [{ val: 'nested' }],
      },
    }

    const entries = parseOutDs('ds=result.items')
    mapResponseToDatasets(response, entries, { ds })

    expect(ds.getRowCount()).toBe(1)
    expect(ds.getColumn(0, 'val')).toBe('nested')
  })

  it('단일 객체 응답도 처리 (배열 아닌 경우)', () => {
    const ds = new NxDataset({ id: 'ds_result' })

    const response = {
      result: { status: 'ok', count: 5 },
    }

    const entries = parseOutDs('ds_result=result')
    mapResponseToDatasets(response, entries, { ds_result: ds })

    expect(ds.getRowCount()).toBe(1)
    expect(ds.getColumn(0, 'status')).toBe('ok')
  })

  it('없는 키는 무시', () => {
    const ds = new NxDataset({ id: 'ds' })
    const response = { other: 'data' }

    const entries = parseOutDs('ds=result')
    mapResponseToDatasets(response, entries, { ds })

    expect(ds.getRowCount()).toBe(0)
  })
})
