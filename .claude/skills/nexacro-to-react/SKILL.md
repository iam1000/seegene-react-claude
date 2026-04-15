---
name: nexacro-to-react
description: Nexacro N → React 19 변환 가이드. Nexacro XFDL 화면을 React로 전환할 때 사용. Trigger keywords: 변환, 전환, convert, xfdl, nexacro to react, 화면 변환, 화면 전환, 리액트로
---

# Nexacro N → React 19 변환 가이드

> **Core Principle**: **"Only what's in the original, exactly as the original"** — 원본 그대로 변환. 추가/삭제/변경/개선 금지.

---

## 1. Core Principles

- Nexacro 원본 화면에 있는 것만 변환
- 검색 필드, 버튼, 그리드 컬럼, 레이아웃 모두 원본과 일치해야 함
- "있으면 좋을 것 같은" 기능 추가 금지
- **UI 라이브러리**: shadcn/ui 우선. shadcn에 없거나 너무 복잡한 경우에만 MUI 사용.
- **원본 XFDL 파일을 반드시 읽은 후 변환 시작. 읽지 않고 변환 금지.**

---

## 2. File Path Rules

| AS-IS Path | TO-BE Path |
|------------|------------|
| `DT\BASSINFO\TST\UIDT1194M00.xfdl` | `src/pages/DT/bassinfo/tst/DT_1194M00.tsx` |
| `SL\CMMNPOP\UISL9507P.xfdl` | `src/pages/SL/cmmnpop/SL_9507P.tsx` |
| `BL\BILL\UIBL0360M.xfdl` | `src/pages/BL/bill/BL_0360M.tsx` |

**규칙:**
1. AS-IS 폴더 구조 그대로 유지
2. 모듈 코드(DT, SL, BL...)는 대문자 유지
3. 하위 폴더는 소문자 변환
4. 파일명: `모듈코드_화면ID.tsx` (예: `DT_1194M00.tsx`) — `UI`, `모듈코드` 접두어 제거

---

## 3. Pre-Conversion Tasks

### XFDL 파일 분석

변환 전 반드시 확인:

```
1. <Layout> 구조 분석
   ├── div 계층 → 화면 레이아웃 설계
   ├── 각 컴포넌트 left/top/width/height 좌표값
   ├── Button 위치와 text
   ├── Static 레이블 텍스트 (원문 그대로)
   └── Grid 컬럼 정의 (size, edittype, displaytype)

2. <Dataset> 정의 분석
   ├── ColumnInfo → 데이터 모델 파악
   └── <Rows> 기본값 → API 파라미터 기본값 확인 (누락 금지!)

3. <Bind> 분석
   └── 컴포넌트 ↔ Dataset 연결 관계

4. <Script> 분석
   ├── form_onload → useEffect / 초기화 로직
   ├── fn_search → handleSearch (API 호출)
   ├── fn_save → handleSave
   ├── fn_apiCallback → useNxQuery/useNxMutation 콜백
   ├── gfn_* 호출 → hooks/ 또는 utils/ 함수
   └── include 라인 → 모듈 전용 hook 확인
```

### 공통 라이브러리 확인

```
{module}_comm.xjs  → hooks/use{Module}Common.ts
{module}_commL.xjs → hooks/use{Module}CommL.ts
```

---

## 4. Absolutely Prohibited Actions

```
❌ 원본에 없는 "초기화" 버튼 추가
❌ 원본에 없는 검색 필드 추가
❌ "있으면 더 좋을 것 같아서" 기능 추가
❌ 버튼을 상단 헤더로 모아서 배치
❌ 레이아웃을 "더 보기 좋게" 재배치
❌ 레이블 텍스트 임의 변경
❌ 메뉴명 대신 XFDL titletext 사용
```

---

## 5. Common Mistakes

### 검색 조건 실수

| 유형 | 원본 | 잘못된 변환 |
|------|------|-------------|
| 필드 추가 | 센터, 부서 | 센터, 부서, **없는 필드 추가** |
| 레이블 변경 | 원본 레이블 | **다른 텍스트** |
| 필드 합치기 | 코드, 명칭 (별도) | **코드/명칭 (하나로 합침)** |

### 버튼 위치 실수

| 원본 | 잘못된 변환 |
|------|-------------|
| 행추가/행삭제: 그리드 위 좌측 | 상단 헤더에 배치 |
| 저장: 우측 패널 하단 | 상단 헤더에 배치 |
| 초기화 버튼 없음 | **초기화 버튼 추가** |

### 그리드/레이아웃 실수

```
원본: <Column size="0"/>  → hidden 컬럼 (visible로 바꾸지 말 것)
원본: <Column size="93"/> → Width: 93 그대로 (임의 변경 금지)
원본: Left panel width="500" → 고정값 유지 (% 변환 금지)
```

### Radio columncount 오해

```
원본: <Radio columncount="4" width="180"/>
- columncount="4"는 레이아웃 컬럼 수 (옵션 개수가 아님!)
- 실제 옵션은 공통코드에서 동적으로 가져옴
```

### Dataset 기본값 누락

```typescript
// ❌ 잘못 - useYn 누락 (비활성 데이터까지 조회됨)
dsSearch.setColumn(0, 'searchNm', searchNm)

// ✅ 올바름 - 원본 <Rows> 기본값 포함
dsSearch.setColumn(0, 'searchNm', searchNm)
dsSearch.setColumn(0, 'useYn', 'Y')
```

---

## 6. Component Conversion

### 컴포넌트 import 경로

| 상황 | import 경로 | 예시 |
|------|------------|------|
| shadcn 기본 컴포넌트 직접 사용 | `#/components/ui/*` | Dialog, Tabs, Popover |
| 프로젝트 래퍼 컴포넌트 | `#/components/common` | Button, Input, Select, Checkbox |
| 날짜 입력 | `#/components/date` | DatePicker, DateRangePicker |
| 파일 처리 | `#/components/file` | FileUpload, FileDownload |
| 리치 텍스트 에디터 | `#/components/editor` | RichEditor |

### ui/ vs common/ 구분

- **`ui/`** — shadcn CLI가 설치한 원본. Dialog, Tabs처럼 그대로 쓸 때 직접 import.
- **`common/`** — `ui/`를 감싼 래퍼. LIS 컴팩트 스타일(h-6) + `onChange(value: string)` 인터페이스 통일. Button, Input, Select 등은 반드시 `common/` 사용.

**`common/` 특징:**
- `onChange`가 native event가 아닌 **값(string/boolean/number)** 직접 반환
- 기본 높이 `h-6` (24px) — LIS 밀도 높은 화면 기준
- `forwardRef` 지원 — Input, TextArea는 ref 전달 가능

### Nexacro → React 컴포넌트 매핑

| Nexacro | React | import |
|---------|-------|--------|
| Grid | IBSheetReact | `@ibsheet/react` |
| Edit | Input | `#/components/common` |
| Button | Button | `#/components/common` |
| Combo (단일) | Select | `#/components/common` |
| Combo (다중) | React Select (isMulti) | `react-select` |
| Calendar | DatePicker | `#/components/date` |
| CheckBox | Checkbox | `#/components/common` |
| Radio | RadioGroup | `#/components/common` |
| Static | `<span>` | native |
| Tab | Tabs | `#/components/ui/tabs` |
| PopupDiv | Dialog | `#/components/ui/dialog` |
| MaskEdit | MaskEdit | `#/components/common` |
| TextArea | TextArea | `#/components/common` |
| Spin | Spin | `#/components/common` |
| DEXT5Editor | RichEditor | `#/components/editor` |
| WebBrowser | WebBrowser | `#/components/common` |
| WebView | WebBrowser | `#/components/common` |
| GroupBox | GroupBox | `#/components/common` |
| ImageViewer | ImageViewer | `#/components/common` |
| FileDialog | FileUpload | `#/components/file` |
| FileDownTransfer | FileDownload | `#/components/file` |
| ListBox | ListBox | `#/components/common` |
| PopupMenu | PopupMenu | `#/components/common` |
| CheckBoxSet | Checkbox 그룹 | `#/components/common` |
| ProgressBar | shadcn Progress | `#/components/ui/progress` |

### 이벤트 변환

| Nexacro | React |
|---------|-------|
| `onclick` | `onClick` |
| `onkeydown` | `onKeyDown` |
| `onkeyup` | `onKeyUp` |
| `onchange` / `onchanged` | `onChange` |

---

## 7. IBSheet8 Rules

### 기본 사용법

```tsx
import { IBSheetReact, type IBSheetInstance, type IBSheetOptions } from '@ibsheet/react'
import { useRef } from 'react'

function MyScreen() {
  const sheetRef = useRef<IBSheetInstance | null>(null)

  const sheetOptions: IBSheetOptions = {
    Cfg: { SearchMode: 0, CanEdit: 0, HeaderMerge: 3, CanSort: 1 },
    Cols: [
      { Header: 'No', Name: 'SEQ', Type: 'Int', Width: 50, Align: 'Center' },
      { Header: '코드', Name: 'code', Type: 'Text', Width: 80, Align: 'Center' },
      { Header: '명칭', Name: 'name', Type: 'Text', RelWidth: 1, MinWidth: 100, Align: 'Left' },
    ],
    Events: {
      onRenderFirstFinish: () => handleSearch(),  // 초기 데이터 로드는 여기서
      onClick: (evt) => { const row = evt.row }
    }
  }

  return <IBSheetReact ref={sheetRef} options={sheetOptions} style={{ width: '100%', height: '100%' }} />
}
```

### 초기 데이터 로드: onRenderFirstFinish

```typescript
// ❌ 잘못 - 타이밍 이슈 (시트 렌더링 전일 수 있음)
useEffect(() => { if (sheetRef.current) handleSearch() }, [])

// ✅ 올바름
Events: { onRenderFirstFinish: () => handleSearch() }
```

- 자동 조회 화면, 팝업 오픈 시 → `onRenderFirstFinish` 사용
- "조회" 버튼으로 로드하는 경우 → 불필요

### addRow 파라미터

```typescript
// ❌ 잘못
sheetRef.current.addRow({ pos: 0 })

// ✅ 올바름
const firstRow = sheetRef.current.getFirstRow()
sheetRef.current.addRow({ next: firstRow })
```

### Date 컬럼 값 변환 (timestamp → YYYYMMDD)

```typescript
let dateval = sheetRef.current.getValue(row, 'dateCol')
if (typeof dateval === 'number') {
  const date = new Date(dateval)
  dateval = date.getFullYear().toString() +
    String(date.getMonth() + 1).padStart(2, '0') +
    String(date.getDate()).padStart(2, '0')
} else if (typeof dateval === 'string' && dateval.includes('-')) {
  dateval = dateval.replace(/-/g, '')
}
```

### 동적 Enum 설정 (setAttribute)

```typescript
// ✅ 동적 콤보는 setAttribute 사용
sheetRef.current.setAttribute(null, 'catCd', 'EnumKeys', '|A|B', 1)
sheetRef.current.setAttribute(null, 'catCd', 'Enum', '|옵션A|옵션B', 1)
// render:1 — 즉시 반영 필수
```

### IB_Preset 사용

```typescript
import { IBSheetReact, IB_Preset } from '@ibsheet/react'

const cols = [
  { Header: '접수일', Name: 'recpDt', ...IB_Preset.YMD },
  { Header: '금액', Name: 'amt', ...IB_Preset.AMT },
  { Header: '사용여부', Name: 'useYn', ...IB_Preset.YN },
]
```

---

## 8. Nexacro Grid → IBSheet8 Conversion

### Grid 속성 매핑

```typescript
// autofittype="col" → 남은 공간을 채울 컬럼에만 RelWidth: 1 설정
// selecttype="row"  → SelectionRowType: 1
// cellsizingtype="none" → CanColResize: 0

Cfg: { SearchMode: 0, CanEdit: 0, SelectionRowType: 1, CanColResize: 0, HeaderMerge: 3, CanSort: 1 }
```

### edittype → Type 매핑

| Nexacro edittype | IBSheet8 |
|------------------|----------|
| `none`, `readonly` | `Type: 'Text', CanEdit: 0` |
| `normal` | `Type: 'Text', CanEdit: 1` |
| `combo` | `Type: 'Enum'` |
| `checkbox` | `Type: 'Bool'` |
| `date` | `Type: 'Date'` |
| `mask` | `Type: 'Text', Format: '...'` |

### displaytype → IBSheet 표시 형식

| Nexacro displaytype | IBSheet8 |
|--------------------|----------|
| `normal` | `Type: 'Text'` |
| `number` | `Type: 'Int'` 또는 `Type: 'Float'` |
| `date` | `Type: 'Date', Format: 'yyyy-MM-dd'` |
| `combo` | `Type: 'Enum', EnumKeys, Enum` |
| `checkbox` | `Type: 'Bool'` |

### 이벤트/메서드 매핑

| Nexacro | IBSheet8 |
|---------|----------|
| `oncellclick` | `onClick` |
| `ondblclick` | `onDblClick` |
| `onheadclick` | `onHeaderClick` |
| `getCellValue(row, col)` | `getValue(row, col)` |
| `setCellValue(row, col, val)` | `setValue(row, col, val)` |
| `getRowCount()` | `getTotalRowCount()` |
| `selectRow(row)` | `setFocusedRow(row)` |
| `getSelectedRow()` | `getFocusedRow()` |

---

## 9. API / NxDataset Pattern

상세 사용법은 `docs/NxDataset-Usage.md` 참조.

### SVC 정의 변환

```typescript
// Nexacro 원본 → React 그대로 옮김
const SVC_SEARCH: SvcDefinition = {
  svcId: 'searchList',
  url: 'GET::bl::cust/selectCustList',
  inDs: 'ds_search',
  outDs: 'ds_list=result ds_page=pagination',
}
```

### Dataset 선언

```typescript
const { dataset: dsSearch } = useNxDataset({
  id: 'ds_search',
  columns: [{ id: 'custNm', type: 'string' }, { id: 'useYn', type: 'string' }],
  initialRows: [{ useYn: 'Y' }],  // 원본 <Rows> 기본값 그대로
})
```

### 조회 / 저장

```typescript
// 조회
const { refetch, isFetching } = useNxQuery(SVC_SEARCH, { ds_search: dsSearch, ds_list: dsList })
const handleSearch = () => { dsSearch.setColumn(0, 'custNm', val); void refetch() }

// 저장
const { mutate: save } = useNxMutation({
  onSuccess: (result) => {
    if (!isApiSuccess(result)) { toast.error(getApiErrorMessage(result)); return }
    toast.success('저장되었습니다.')
    void refetch()
  },
})
const handleSave = () => save({ svc: SVC_SAVE, datasetMap: { ds_list: dsList } })

// 훅 밖에서 직접 호출
const result = await dsRequest(SVC_SEARCH, { ds_search: dsSearch, ds_list: dsList })
if (isApiSuccess(result)) { /* 성공 처리 */ }
```

### inDs 접미사

| 접미사 | 설명 |
|--------|------|
| (없음) | 전체 행 |
| `:U` | 변경 행만 (저장 시) |
| `:A` | 전체 + 상태 포함 |
| `:N` | DELETE 제외 |
| `:0` | 첫 번째 행만 |

---

## 10. Nexacro Function Mapping

> 현재 구현된 hook: `useNxDataset`, `useNxRequest`. 나머지(`useMessage`, `useModal`, `useCommonCode`, `useExcel`)는 미구현.

### 유틸리티 함수 (Util.xjs → utils/)

| Nexacro | React |
|---------|-------|
| `gfn_isNull(val)` | `isNull(val)` |
| `gfn_isNotNull(val)` | `isNotNull(val)` |
| `gfn_isEmpty(val)` | `isEmpty(val)` |
| `gfn_nvl(val, def)` | `nvl(val, def)` |
| `gfn_trim(str)` | `str.trim()` |
| `gfn_lpad/rpad/left/right` | 동명 함수 |
| `gfn_appendComma(num)` | `appendComma(num)` |
| `gfn_removeComma(str)` | `removeComma(str)` |
| `gfn_getDate()` | `getDate()` — YYYYMMDD |
| `gfn_addDate(dt, n)` | `addDate(dt, n)` |
| `gfn_addMonth(dt, n)` | `addMonth(dt, n)` |
| `gfn_getDateFormat(dt, sep)` | `formatDate(dt, sep)` |
| `gfn_getLastDate(dt)` | `getLastDate(dt)` |

### 메시지/다이얼로그 (미구현)

```typescript
// 예상 (구현 후 검증 필요)
import { useMessage } from '#/hooks/useMessage'
const { alert, confirm } = useMessage()
await alert('저장되었습니다.')
const ok = await confirm('삭제하시겠습니까?')
```

### Excel (미구현)

| Nexacro | 설명 |
|---------|------|
| `gfn_excelExport(objGrid, sheetName, fileName)` | 클라이언트 그리드 → 엑셀 |
| `gfn_excelExportTransfer(objData)` | **서버사이드** 다운로드 (`objData.url`, `objData.filename`) |

### Dataset 관련 (Dataset.xjs → NxDataset)

| Nexacro | NxDataset |
|---------|-----------|
| `gfn_dsIsUpdated(ds)` | `ds.isUpdated()` |
| `gfn_addRow(ds, "A")` | `ds.addRow()` — 최하단 |
| `gfn_addRow(ds, "B")` | `ds.insertRow(0)` — 최상단 |
| `ds.getRowCount()` | `ds.rowCount` |
| `ds.getColumn/setColumn` | 동일 |
| `ds.findRow/findRowExpr/filter` | 동일 |
| `ds.clearData/getSum` | 동일 |
| `ds.set_enableevent(false)` | `ds.setEnableEvent(false)` |

---

## 11. Popup Conversion

> `useModal` hook 미구현. 구현 후 API 확인 필요.

### Nexacro 원본 패턴

```javascript
var oArg = { custCd: this.ds_list.getColumn(nRow, 'custCd') }
this.gfn_openPopup('popCust', 'SL::CMMNPOP/UISL9507P.xfdl', oArg, 'fn_popupCallback', { width: 800, height: 600 })
// 팝업에서 수신
var sCustCd = this.gfn_getPopupArguments(this, 'custCd')
// 팝업 닫기
this.gfn_closePopup({ custCd: sCustCd, custNm: sCustNm })
```

### React 변환 방향

```typescript
// gfn_openPopup  → useModal (미구현) 또는 shadcn Dialog
// gfn_getPopupArguments → props로 수신
// gfn_closePopup → onClose/onSelect 콜백
```

### 팝업 구조

```
┌── popup-header ──────────────────────┐
│  제목 (sta_title)    [닫기(btn_close)] │
├── popup-body ────────────────────────┤
│  검색 조건 + 그리드 또는 폼             │
├── popup-footer ──────────────────────┤
│              [취소(btn_cancel)] [확인] │
└─────────────────────────────────────┘
```

원본 XFDL의 `width`, `height` 값 그대로 사용.

### 돋보기 버튼 패턴

```tsx
<Input value={searchParams.deptNm} onChange={v => setSearchParams({...searchParams, deptNm: v})}
  onKeyDown={e => { if (e.key === 'Enter') handleDeptPopup() }} />
<Button onClick={() => { setSearchParams({...searchParams, deptCd: '', deptNm: ''}); handleDeptPopup() }}>🔍</Button>
```

---

## 12. Screen Layout Patterns

### Pattern 1: 조회 + 그리드

```
┌── search-area (flex-shrink:0) ──────────┐
│  [조건1] [조건2] [조회]                  │
├── grid-area (flex:1) ───────────────────┤
│  IBSheetReact (width:100%, height:100%) │
└─────────────────────────────────────────┘
```

### Pattern 2: 마스터-디테일

```
┌── search-area ──────────────────────────────────┐
├── left-panel (고정 width) ──┬── right-panel ─────┤
│  IBSheetReact (목록)        │  상세 폼 또는 그리드 │
└─────────────────────────────┴────────────────────┘
```

### Pattern 3: 탭 + 그리드

```tsx
<Tabs defaultValue="tab1">
  <TabsList>...</TabsList>
  <TabsContent value="tab1" className="flex-1 overflow-hidden">
    <IBSheetReact ref={sheet1Ref} options={sheet1Options} style={{ width: '100%', height: '100%' }} />
  </TabsContent>
</Tabs>
```

### 탭 UI 아키텍처 (MDI)

> **탭 전환은 URL 라우팅이 아닌 상태 기반으로 처리. URL이 바뀌면 안 됨.**

```typescript
// ❌ navigate(`/main/${menuId}`)
// ✅ menuStore.activateTab(menuId)
```
