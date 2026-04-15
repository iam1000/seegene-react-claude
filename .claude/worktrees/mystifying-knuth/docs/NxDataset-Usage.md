# NxDataset 사용 가이드

Nexacro NormalDataset/DataObject의 React 대응 컴포넌트.
기존 Nexacro 코드의 Dataset/API 호출 패턴을 최소한의 수정으로 React에서 사용할 수 있다.

## 파일 구조

```
src/
├── lib/NxDataset.ts          # 핵심: Nexacro NormalDataset 대응 클래스
├── types/
│   ├── dataset.ts            # RowType, ColumnInfo, RowData, DatasetEvents 등
│   └── dataobject.ts         # SvcDefinition, ParsedUrl, InDsEntry, OutDsEntry
├── api/
│   ├── client.ts             # Axios 인스턴스 (JWT + LIS 헤더 인터셉터)
│   ├── urlParser.ts          # "METHOD::GROUP::PATH" 파싱
│   ├── inDsParser.ts         # inDs 문자열 파싱 + queryString/postBody 변환
│   ├── outDsParser.ts        # outDs 문자열 파싱 + 응답 → Dataset 매핑
│   └── request.ts            # executeRequest (gfn_dsRequest 핵심 로직)
├── hooks/
│   ├── useNxDataset.ts       # NxDataset ↔ React 리렌더 연동 훅
│   └── useNxRequest.ts       # TanStack Query 기반 API 호출 훅
└── store/
    ├── useConfigStore.ts     # Zustand: 도메인 맵, resolveUrl
    └── useAuthStore.ts       # Zustand: JWT 토큰 + 사용자 정보 관리
```

---

## 1. 기본 사용법: useNxDataset

```tsx
import { useNxDataset } from '#/hooks/useNxDataset'

function SearchForm() {
  const { dataset: dsSearch, rows, rowCount } = useNxDataset({
    id: 'ds_search',
    columns: [
      { id: 'startDt', type: 'string' },
      { id: 'endDt', type: 'string' },
      { id: 'keyword', type: 'string' },
    ],
    initialRows: [{ startDt: '20260301', endDt: '20260331', keyword: '' }],
  })

  // 값 변경 → 자동 리렌더
  const handleChange = (colId: string, value: string) => {
    dsSearch.setColumn(0, colId, value)
  }

  return (
    <div>
      <input
        value={String(rows[0]?.startDt ?? '')}
        onChange={(e) => handleChange('startDt', e.target.value)}
      />
      <input
        value={String(rows[0]?.endDt ?? '')}
        onChange={(e) => handleChange('endDt', e.target.value)}
      />
    </div>
  )
}
```

---

## 2. API 조회: useNxQuery

기존 Nexacro의 `gfn_dsRequestAsync` (조회용) 패턴을 그대로 사용한다.

```tsx
import { useNxDataset } from '#/hooks/useNxDataset'
import { useNxQuery } from '#/hooks/useNxRequest'
import type { SvcDefinition } from '#/types/dataobject'

// Nexacro SVC 정의를 그대로 옮김
const SVC_SEARCH: SvcDefinition = {
  svcId: 'searchRcptList',
  url: 'GET::bl::rcpt/selectRcptAmtList',
  inDs: 'ds_search',
  outDs: 'ds_list=result ds_page=pagination',
}

function RcptListPage() {
  const { dataset: dsSearch } = useNxDataset({
    id: 'ds_search',
    columns: [
      { id: 'startDt', type: 'string' },
      { id: 'endDt', type: 'string' },
    ],
    initialRows: [{ startDt: '20260301', endDt: '20260331' }],
  })

  const { dataset: dsList, rows } = useNxDataset({
    id: 'ds_list',
    useclientlayout: true,
  })

  const { dataset: dsPage } = useNxDataset({ id: 'ds_page' })

  // useNxQuery: 기본 enabled=false → refetch()로 실행
  const { refetch, isFetching } = useNxQuery(
    SVC_SEARCH,
    { ds_search: dsSearch, ds_list: dsList, ds_page: dsPage },
    {
      onSuccess: (result) => {
        console.log('조회 완료:', result.svcId)
      },
    },
  )

  return (
    <div>
      <button onClick={() => void refetch()} disabled={isFetching}>
        조회
      </button>
      <table>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{String(row.name)}</td>
              <td>{String(row.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

---

## 3. API 저장: useNxMutation

기존 Nexacro의 `gfn_dsRequestAsync` (저장/삭제용) 패턴을 그대로 사용한다.

```tsx
import { useNxMutation } from '#/hooks/useNxRequest'
import type { SvcDefinition } from '#/types/dataobject'

const SVC_SAVE: SvcDefinition = {
  svcId: 'saveRcpt',
  url: 'POST::bl::rcpt/applyRcptAmt',
  inDs: 'ds_list:U',         // 변경분(I+U+D)만 전송
  outDs: 'ds_result=result',
}

function SaveButton({ dsList, dsResult }) {
  const { mutate: save, isPending } = useNxMutation({
    onSuccess: (result) => {
      if (result.errorCode === 0) alert('저장 완료')
    },
    invalidateKeys: [['nx', 'searchRcptList']], // 저장 후 목록 자동 갱신
  })

  const handleSave = () => {
    // gfn_dsIsUpdated 대응: 변경 여부 확인
    if (dsList.getDeletedRowCount() === 0 &&
        dsList.findRowExpr((_r, i) => dsList.getRowType(i) !== 1) < 0) {
      alert('변경된 데이터가 없습니다.')
      return
    }

    save({
      svc: SVC_SAVE,
      datasetMap: { ds_list: dsList, ds_result: dsResult },
    })
  }

  return (
    <button onClick={handleSave} disabled={isPending}>
      저장
    </button>
  )
}
```

---

## 4. 훅 밖에서 직접 호출: dsRequest

이벤트 핸들러나 유틸 함수에서 훅을 사용할 수 없을 때 `dsRequest`를 직접 호출한다.

```ts
import { dsRequest, isApiSuccess, getApiErrorMessage } from '#/hooks/useNxRequest'

async function doSearch(dsSearch, dsList) {
  const result = await dsRequest(
    {
      svcId: 'search',
      url: 'GET::bl::rcpt/list',
      inDs: 'ds_search',
      outDs: 'ds_list=result',
    },
    { ds_search: dsSearch, ds_list: dsList },
  )

  if (isApiSuccess(result)) {
    console.log('성공:', dsList.getRowCount(), '건')
  } else {
    alert(getApiErrorMessage(result))
  }
}
```

---

## 5. NxDataset 주요 API

### 행 관리

| 메서드 | 설명 |
|--------|------|
| `addRow(data?)` | 행 추가 (INSERT 상태), 인덱스 반환 |
| `insertRow(idx?, data?)` | 특정 위치에 삽입 |
| `deleteRow(idx)` | 행 삭제 (삭제 버퍼 보관) |
| `deleteMultiRows(indices)` | 복수 행 삭제 |
| `clearData()` | 데이터 초기화 (useclientlayout=true면 컬럼 유지) |
| `clear()` | 컬럼 포함 전체 초기화 |
| `loadData(data)` | JSON 배열로 데이터 로드 (NORMAL 상태) |
| `appendData(data)` | 기존 데이터 뒤에 추가 |

### 셀 접근

| 메서드 | 설명 |
|--------|------|
| `getColumn(row, colId)` | 현재 값 조회 |
| `setColumn(row, colId, value)` | 값 설정 (변경 추적 자동) |
| `getOrgColumn(row, colId)` | 수정 전 원본 값 |

### 변경 추적

| 메서드/속성 | 설명 |
|------------|------|
| `getRowType(row)` | NORMAL(1), INSERT(2), UPDATE(4) |
| `getDeletedRowCount()` | 삭제된 행 수 |
| `getDeletedColumn(idx, colId)` | 삭제된 행의 값 |
| `updatecontrol` | 변경 추적 ON/OFF |

### 검색 / 집계

| 메서드 | 설명 |
|--------|------|
| `findRow(colId, value)` | 매칭 행 인덱스 (-1: 없음) |
| `findRowExpr(predicate)` | 함수로 행 검색 |
| `getSum(colId)` | 컬럼 합계 |
| `getAvg(colId)` | 컬럼 평균 |

### 정렬 / 필터

| 속성 | 설명 | 예시 |
|------|------|------|
| `keystring` | 정렬 기준 | `'age:A'`, `'name:D+age:A'` |
| `filterstr` | 필터 조건 | `'age >= 30'`, `"name !== ''"` |

### 이벤트

| 이벤트 | 파라미터 |
|--------|---------|
| `oncolumnchanged` | `{ row, columnid, oldvalue, newvalue }` |
| `onrowsetchanged` | `{ oldrow, newrow }` |

---

## 6. inDs 옵션 (SVC 정의 시)

| 형식 | 동작 |
|------|------|
| `"ds_search"` | GET: Row 0 → queryString / POST: DELETE 제외 전체 |
| `"ds_list:U"` | INSERT + UPDATE + DELETE 행 전송 (변경분) |
| `"ds_list:A"` | 전체 행 전송 |
| `"ds_list:N"` | DELETE 제외 전체 |
| `"ds_list:0"` | 특정 행 인덱스만 |
| `"key=ds_list:U"` | `{ key: [...] }` 형태로 래핑 |

---

## 7. IBSheet8 연동

```tsx
// Dataset → IBSheet8
const sheetData = dsList.toSheetData()
ibsheet.loadSearchData(sheetData)

// IBSheet8 → Dataset (셀 편집 후)
const changedRows = ibsheet.getChangeRowData()
dsList.fromSheetData(changedRows)
```

---

## 8. 환경 설정 (초기화)

앱 시작 시 도메인 맵을 설정한다.

```ts
import { useConfigStore } from '#/store/useConfigStore'

// main.tsx 또는 App.tsx에서
useConfigStore.getState().setDomainMap({
  bl: { dev: '/api', prod: 'https://api.lis.seegene.com/bl' },
  dt: { dev: '/api', prod: 'https://api.lis.seegene.com/dt' },
  rc: { dev: '/api', prod: 'https://api.lis.seegene.com/rc' },
  // ... 서비스 그룹별 설정
})
useConfigStore.getState().setEnv('dev')
```

---

## 9. Nexacro → React 전환 매핑표

| Nexacro 패턴 | React 대응 |
|--------------|-----------|
| `this.ds_search = new Dataset(...)` | `const { dataset: dsSearch } = useNxDataset({...})` |
| `this.ds_search.setColumn(0, 'col', val)` | `dsSearch.setColumn(0, 'col', val)` |
| `this.SVC_SEARCH = { url, inDs, outDs }` | `const SVC_SEARCH: SvcDefinition = { svcId, url, inDs, outDs }` |
| `this.gfn_dsRequestAsync(SVC)` | `useNxQuery(SVC, datasetMap)` + `refetch()` |
| `this.gfn_dsRequestSync(SVC)` | `await dsRequest(SVC, datasetMap)` |
| `gfn_dsIsUpdated(ds)` | `isUpdated` (useNxDataset 반환값) |
| `gfn_dataset2ObjectList(ds, "U")` | `ds.toObjectList('U')` |
| `gfn_changedDataset2ObjectList(ds)` | `ds.toChangedObjectList()` |
| `gfn_datasetRow2Object(ds, row)` | `ds.toRowObject(row)` |
| `gfn_object2Dataset(ds, data)` | `ds.loadData(data)` |
| `ds.set_keystring("col:A")` | `ds.keystring = 'col:A'` |
| `ds.set_filterstr("age > 30")` | `ds.filterstr = 'age > 30'` |

---

## 10. 테스트 실행

```bash
pnpm test                    # 전체 테스트
pnpm test -- NxDataset       # Dataset 테스트만
pnpm test -- parsers         # 파서 테스트만
```
