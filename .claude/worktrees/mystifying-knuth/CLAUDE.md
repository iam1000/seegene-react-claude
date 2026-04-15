# Seegene LIS — Nexacro → React 전환 프로젝트

## 프로젝트 개요

씨젠의료재단 LIS(Laboratory Information System)를 Nexacro N 플랫폼에서 React 기반 웹으로 전환하는 프로젝트.
기존 Nexacro 소스는 `C:\workspace\seegene-mf-lis-nexacro`에 위치.

- 전환 대상: ~600개 화면 (전체 1,681개 중 축소)
- 기간: 2026-04 ~ 2026-11 (8개월)
- 상용 유지: IBSheet8(그리드), IBChart(차트), MYSUIT(리포트)

## 기술 스택

| 분류 | 기술 | 비고 |
|------|------|------|
| Framework | React 19 + TypeScript 6 | |
| Build | Vite 8 | HMR, ESM 네이티브 |
| Routing | React Router v7 | |
| Styling | Tailwind CSS v4 | 유틸리티 퍼스트 |
| 전역 상태 | Zustand | |
| 서버 상태 | TanStack Query v5 | |
| 폼 | React Hook Form + Zod | |
| API | Axios | 인터셉터, JWT 자동 주입 |
| i18n | react-i18next | 라벨 슬롯 준비 (RTL 제외) |
| 날짜 | Day.js | |
| 아이콘 | Lucide React | |
| 토스트 | react-hot-toast | |
| Lint/Format | Biome | ESLint + Prettier 대체 |
| Git Hook | Husky + lint-staged | |
| Test | Vitest + Testing Library | |
| 패키지매니저 | pnpm | |

### 별도 설치 예정 (세부 라이브러리)

- IBSheet8 / IBChart / MYSUIT (상용 라이선스)
- React Select v5 (콤보박스)
- TipTap (웹 에디터)
- react-datepicker (캘린더)
- SheetJS (엑셀 처리)
- react-to-print (인쇄)
- react-dropzone (파일 업로드)
- react-input-mask / IMask (마스크 입력)
- shadcn/ui (Dialog, Tabs 등 컴포넌트)
- Playwright (E2E 테스트)
- MSW (API 목킹)

## 디렉토리 구조

```
src/
├── lib/
│   └── NxDataset.ts        # Nexacro NormalDataset 대응 클래스 (핵심)
├── api/                    # API 클라이언트 및 엔드포인트
│   ├── client.ts           # Axios 인스턴스 (JWT + LIS 헤더 인터셉터)
│   ├── urlParser.ts        # "METHOD::GROUP::PATH" 파싱
│   ├── inDsParser.ts       # inDs 문자열 파싱 + queryString/postBody 변환
│   ├── outDsParser.ts      # outDs 문자열 파싱 + 응답 → Dataset 매핑
│   ├── request.ts          # executeRequest (gfn_dsRequest 핵심 로직)
│   ├── hooks/              # TanStack Query 기반 API Hook
│   └── endpoints/          # 모듈별 API 엔드포인트
├── components/             # 공통 UI 컴포넌트
│   ├── layout/             # Header, Sidebar, MDI Tab, Layout
│   ├── grid/               # IBSheet8 래퍼 컴포넌트
│   ├── form/               # 검색 폼, 입력 폼 공통
│   ├── modal/              # 팝업/다이얼로그
│   ├── common/             # Button, Calendar, Combo 등
│   ├── feedback/           # Alert, Confirm, Toast
│   ├── date/               # DatePicker, RangePicker 등
│   ├── file/               # FileUpload, FileDownload
│   └── popup/              # 업무 검색 팝업 (거래처, 부서 등)
├── hooks/                  # 커스텀 Hook (cmmlib 전환)
│   ├── useNxDataset.ts     # NxDataset ↔ React 리렌더 연동 훅
│   ├── useNxRequest.ts     # TanStack Query 기반 API 호출 훅 (useNxQuery, useNxMutation, dsRequest)
│   ├── useIBSheet.ts       # Grid.xjs → IBSheet8 래퍼
│   ├── useExcel.ts         # Excel.xjs → SheetJS + IBSheet8
│   ├── useMessage.ts       # Message.xjs → react-hot-toast
│   ├── useModal.ts         # Popup.xjs → Dialog + Context
│   ├── useValidation.ts    # Validation.xjs → RHF + Zod
│   ├── useFile.ts          # File.xjs → react-dropzone
│   ├── usePrint.ts         # ExtPrintCommon.xjs → react-to-print
│   ├── useComponent.ts     # Comp.xjs → 컴포넌트 유틸
│   └── useCommonCode.ts    # 공통코드 관리
├── pages/                  # 업무 화면 (모듈별)
│   ├── BL/                 # 청구/수납
│   ├── DT/                 # 검체검사
│   ├── DI/                 # 검사장비
│   ├── IM/                 # 재고관리
│   ├── LA/                 # 검사실관리
│   ├── LM/                 # LIS 관리
│   ├── OP/                 # 병리 운영
│   ├── QC/                 # 정도관리
│   ├── RC/                 # 접수
│   ├── RM/                 # 결과관리
│   └── SL/                 # 영업
├── store/                  # Zustand 전역 상태
├── utils/                  # 유틸리티 함수 (Util.xjs 전환)
├── types/                  # TypeScript 타입 정의
│   ├── dataset.ts          # RowType, ColumnInfo, RowData, DatasetEvents 등
│   └── dataobject.ts       # SvcDefinition, ParsedUrl, InDsEntry, OutDsEntry
└── i18n/                   # 다국어 (react-i18next)
    ├── config.ts
    ├── locales/ko/         # 한국어 (기본)
    └── hooks/              # useDirection, useLocaleFormat
```

## 코딩 컨벤션

### 파일/폴더 명명

- 컴포넌트: `PascalCase.tsx` (예: `DateRangePicker.tsx`)
- Hook: `useCamelCase.ts` (예: `useIBSheet.ts`)
- 유틸: `camelCase.ts` (예: `dateUtils.ts`)
- 타입: `camelCase.ts` (예: `api.ts`)
- 테스트: `*.test.ts` 또는 `*.test.tsx`
- 페이지: `모듈코드_화면ID.tsx` (예: `DT_M00_010.tsx`)

### 코드 스타일

- Biome이 자동 처리: 싱글쿼트, 세미콜론 없음, 2칸 들여쓰기
- import 정렬: Biome organizeImports 자동
- 한 줄 최대 100자

### 컴포넌트 패턴

- 함수형 컴포넌트만 사용
- Props는 interface로 정의, `컴포넌트명Props` 네이밍
- 상태: 로컬(useState) → 서버(TanStack Query) → 전역(Zustand) 순으로 판단

### API 패턴 (NxDataset 기반)

Nexacro SVC 정의를 NxDataset + useNxQuery/useNxMutation으로 전환한다.
**상세 사용법은 `docs/NxDataset-Usage.md` 참조.**

```typescript
// SVC 정의 (Nexacro 원본 그대로 옮김)
const SVC_SEARCH: SvcDefinition = {
  svcId: 'searchRcptList',
  url: 'GET::bl::rcpt/selectRcptAmtList',
  inDs: 'ds_search',
  outDs: 'ds_list=result ds_page=pagination',
}

// Dataset 선언
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

// 조회: useNxQuery (기본 enabled=false → refetch()로 실행)
const { refetch, isFetching } = useNxQuery(
  SVC_SEARCH,
  { ds_search: dsSearch, ds_list: dsList },
)

// 저장: useNxMutation
const { mutate: save } = useNxMutation({ invalidateKeys: [['nx', 'searchRcptList']] })
save({ svc: SVC_SAVE, datasetMap: { ds_list: dsList } })

// 훅 밖에서 직접 호출
const result = await dsRequest(SVC_SEARCH, { ds_search: dsSearch, ds_list: dsList })
```

#### NxDataset 핵심 개념

- **NxDataset** (`src/lib/NxDataset.ts`): Nexacro NormalDataset과 동일한 API 제공 (행 CRUD, 변경 추적, 정렬/필터, 이벤트)
- **useNxDataset**: NxDataset 인스턴스를 React 리렌더와 연동하는 훅. `rows`, `rowCount`, `isUpdated` 등 반환
- **useNxQuery / useNxMutation**: TanStack Query 기반, SvcDefinition + datasetMap을 받아 API 호출 처리
- **dsRequest**: 훅 밖(이벤트 핸들러, 유틸 함수)에서 직접 호출하는 비동기 함수
- **SvcDefinition**: `{ svcId, url, inDs, outDs }` — Nexacro SVC 정의와 1:1 대응
- **inDs 옵션**: `"ds:U"` (변경분), `"ds:A"` (전체), `"ds:N"` (DELETE 제외), `"ds:0"` (특정 행)

### 백엔드 응답 구조

```json
{
  "httpStatus": "200",
  "messageTitle": "",
  "messageContent": "",
  "result": [],
  "pagination": { "page": 1, "size": 20, "totalCount": 100, "totalPages": 5 },
  "code": 0,
  "message": "",
  "detail": ""
}
```

### 서비스 그룹 (마이크로서비스)

| 서비스 | 포트 | API 수 | 경로 |
|--------|------|--------|------|
| dt (검체검사) | 8090 | 708 | /dt/ |
| lm (LIS관리) | 8087 | 628 | /lm/ |
| sl (영업) | 8089 | 393 | /sl/ |
| qc (정도관리) | 8080 | 328 | /qc/ |
| di (검사장비) | 8181 | 214 | /di/ |
| rm (결과관리) | 8182 | 197 | /rm/ |
| rc (접수) | 8088 | 191 | /rc/ |
| bl (청구) | 8086 | 168 | /bl/ |
| la (검사실관리) | 8081 | 162 | /la/ |
| im (재고) | 8091 | 128 | /im/ |

### Path Alias

- `#` → `src/` (package.json `imports` + Vite alias)
- 예: `import apiClient from '#/api/client'`

## 전환 원칙

1. **cmmlib 함수 → React Hook/유틸**: `gfn_*` 함수는 `hooks/` 또는 `utils/`로 전환
2. **cmm 컴포넌트 → React 컴포넌트**: `cmm*.xfdl`은 `components/`로 전환
3. **Dataset → NxDataset**: Nexacro Dataset은 NxDataset 클래스로 전환 (동일 API 유지, `docs/NxDataset-Usage.md` 참조)
4. **gfn_dsRequest → useNxQuery/useNxMutation/dsRequest**: API 호출은 SvcDefinition + NxDataset 기반으로 통합
5. **다국어**: 모든 UI 텍스트는 `t('key')` 슬롯 사용, JSON 파일은 알앤비소프트 담당
6. **네이티브 우선**: HTML 기본 요소로 충분한 경우 별도 라이브러리 사용 금지
7. 개발/리뷰(테스트) 중에 **.claude/skills/** 아래 md파일에 잘못된 내용이 있다면 수정할 것.


## 명령어

```bash
pnpm dev          # 개발 서버 (포트 3000)
pnpm build        # 프로덕션 빌드
pnpm test         # 테스트 실행
pnpm test:watch   # 테스트 워치 모드
pnpm lint         # Biome 린트 체크
pnpm lint:fix     # Biome 자동 수정
pnpm format       # Biome 포맷
```
