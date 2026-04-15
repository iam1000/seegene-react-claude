# Seegene LIS 전환 프로젝트 WBS (Work Breakdown Structure)
## Nexacro N → React + IBSheet8 + IBChart + MYSUIT + 오픈소스

**작성일**: 2026-03-28
**기준 문서**: Nexacro_to_React_Migration_Analysis_Report.md
**갱신 사유**: 회의 결과 반영 (화면 축소, 상용 라이브러리 확정, 인력/일정 확정, 다국어/RTL 범위 조정)

---

## 1. 변경 사항 요약 (기존 분석 보고서 대비)

| 항목 | 기존 분석 | 변경 후 | 영향 |
|------|----------|---------|------|
| 전환 대상 화면 | ~1,681개 | **~600개** (4월 중순 확정) | 전환 공수 약 64% 감소 |
| 차트 | rMateChartH5 유지 또는 Recharts | **IBChart** (상용) | 별도 오픈소스 대체 불필요 |
| 그리드 | IBSheet8 | **IBSheet8** (동일) | 변경 없음 |
| 리포트 | friendlyView/Print 등 | **MYSUIT** (상용) | 리포트 솔루션 단일화 |
| 기타 UI | MUI 등 상용 포함 검토 | **오픈소스 기반** 전환 | 라이선스 비용 절감 |
| 다국어 | 한국어, 러시아어, 아랍어(RTL) | **라벨에 다국어 슬롯만 준비** (RTL 없음) | i18n/RTL 공수 대폭 감소 |
| 백엔드/다국어 | 프론트엔드 팀 담당 | **알앤비소프트 담당**, 프론트엔드는 라벨 준비만 | 프론트엔드 범위 축소 |
| 개발 기간 | 17개월 (12명 팀) | **4월~11월 (8개월)** | 집중 개발 |
| 투입 인력 | ~123 M/M | **21 M/M** | 소규모 정예 팀 |

---

## 2. 투입 인력 및 기간 개요

| 월 | 기간 | 투입 M/M | 예상 인원 | 주요 작업 |
|----|------|---------|----------|----------|
| **4월** | 2026-04-01 ~ 04-30 | **2 M/M** | 2명 | 공통 개발 (아키텍처, 공통 컴포넌트, 인프라) |
| **5월** | 2026-05-01 ~ 05-31 | **4 M/M** | 4명 | 공통 완료 + 파일럿 + 1차 화면 전환 시작 |
| **6월** | 2026-06-01 ~ 06-30 | **4 M/M** | 4명 | 화면 전환 본격 진행 (1차 모듈) |
| **7월** | 2026-07-01 ~ 07-31 | **4 M/M** | 4명 | 화면 전환 가속 (2차 모듈) |
| **8월** | 2026-08-01 ~ 08-31 | **4 M/M** | 4명 | 화면 전환 완료 + 외부 연동 + **테스트 업체 인수인계** |
| **9월** | 2026-09-01 ~ 09-30 | **1 M/M** | 1명 | 유지보수 / 하자보수 (테스트 이슈 대응) |
| **10월** | 2026-10-01 ~ 10-31 | **1 M/M** | 1명 | 유지보수 / 하자보수 (테스트 이슈 대응) |
| **11월** | 2026-11-01 ~ 11-30 | **1 M/M** | 1명 | 유지보수 / 하자보수 + 운영 전환 지원 |
| **합계** | **8개월** | **21 M/M** | | |

> **참여 업체 구성**: 본 프로젝트에는 **아이비리더스**(프론트엔드 개발)와 **알앤비소프트**(백엔드, 다국어, 테스트)가 참여함.
> **테스트 주체**: 8월부터 **알앤비소프트**에서 통합 테스트, UAT, 안정화 테스트를 전담 진행.
> **9~11월 아이비리더스 역할**: 알앤비소프트 테스트에서 발견된 버그/이슈에 대한 **유지보수 및 하자보수** 대응.

---

## 3. 상용 라이브러리 → 오픈소스 대체 추천

### 3.1 확정된 상용 라이브러리 (유지)

| 용도 | 상용 라이브러리 | 비고 |
|------|---------------|------|
| 그리드 | **IBSheet8** | 핵심 데이터 그리드, 3,253개 Grid 인스턴스 |
| 차트 | **IBChart** | rMateChartH5 대체, 65개 화면 |
| 리포트 | **MYSUIT** | friendlyView/Print 대체, 218개 화면 |

### 3.2 Nexacro → 오픈소스 대체 추천 (핵심)

| Nexacro 컴포넌트 | 인스턴스 수 | 추천 오픈소스 | 대안 | 선정 이유 |
|-----------------|-----------|-------------|------|----------|
| **프레임워크 전체** | - | **React 18+ (TypeScript)** | - | 업계 표준, 생태계 최대, 인력 수급 용이 |
| **빌드 도구** | - | **Vite 6** | Webpack 5 | HMR 속도, 설정 간결, ESM 네이티브 |
| **라우팅** | - | **React Router v7** | TanStack Router | 안정성, 레퍼런스 풍부 |
| **상태관리 (전역)** | 11 Global DS | **Zustand** | Jotai, Redux Toolkit | 보일러플레이트 최소, 러닝커브 낮음, TypeScript 친화 |
| **서버 상태** | 8,944 API | **TanStack Query (React Query) v5** | SWR | 캐싱/동기화/뮤테이션 최강, 개발 도구 우수 |
| **API 통신** | 8,944건 | **Axios** | ky, ofetch | 인터셉터, 요청 취소, 에러 처리 성숙 |
| **Grid (핵심)** | 3,253개 | **IBSheet8** (상용 유지) | - | 요구사항 확정 |

### 3.3 UI 컴포넌트 → 오픈소스 대체 추천

| Nexacro 컴포넌트 | 인스턴스 수 | 추천 오픈소스 1순위 | 대안 | 선정 이유 |
|-----------------|-----------|------------------|------|----------|
| **Button** | 10,682 | HTML `<button>` + **Tailwind CSS** | Shadcn/ui Button | 의존성 최소, 커스터마이징 자유 |
| **Static (Label)** | 19,304 | HTML `<span>`/`<label>` | - | 네이티브 충분 |
| **Edit (Input)** | 5,397 | HTML `<input>` + **React Hook Form** | - | 폼 관리 통합 |
| **Combo (Select)** | 4,532 | **React Select v5** | Downshift | 검색, 멀티셀렉트, 비동기 로딩 지원 |
| **CheckBox** | 1,345 | HTML `<input type="checkbox">` | shadcn/ui | 네이티브 + 스타일링 |
| **Radio** | 568 | HTML `<input type="radio">` | shadcn/ui | 네이티브 + 스타일링 |
| **Calendar (DatePicker)** | 700 | **React DatePicker** | date-fns DatePicker | 가볍고 커스터마이징 용이, locale 지원 |
| **TextArea** | 618 | HTML `<textarea>` | - | 네이티브 충분 |
| **Tab** | 207 | **shadcn/ui Tabs** | Radix UI Tabs | 접근성(a11y) 내장, 스타일 자유 |
| **PopupDiv / Dialog** | 102 | **shadcn/ui Dialog** | Radix UI Dialog | WAI-ARIA 완벽 지원, 스타일 자유 |
| **MaskEdit** | 212 | **react-input-mask** 또는 **IMask** | - | 전화번호, 우편번호 등 마스크 입력 |
| **ImageViewer** | 53 | **react-medium-image-zoom** | Lightbox2 | 가볍고 접근성 좋음 |
| **ListBox** | 15 | HTML `<select multiple>` | - | 소수 사용, 네이티브 충분 |
| **FileUpload** | 4 | **react-dropzone** | - | 드래그&드롭, 파일 검증 |
| **Div (Layout)** | 6,842 | HTML `<div>` + **Tailwind CSS Flex/Grid** | - | 유틸리티 CSS로 빠른 레이아웃 |

### 3.4 기능 라이브러리 → 오픈소스 대체 추천

| 기존 기능 | 기존 라이브러리/방식 | 추천 오픈소스 1순위 | 대안 | 선정 이유 |
|----------|-------------------|------------------|------|----------|
| **폼 관리/검증** | Validation.xjs (23함수) | **React Hook Form + Zod** | Formik + Yup | 성능 우수 (비제어), 번들 작음, TypeScript 추론 최강 |
| **엑셀 처리** | Excel.xjs + ExcelEx DLL | **SheetJS (xlsx)** + IBSheet8 내장 Export | ExcelJS | 브라우저/서버 양쪽, 수식/스타일 지원 |
| **인쇄** | ExtPrintCommon.xjs + SEDAS | **react-to-print** | @media print CSS | 간단 사용, 커스텀 인쇄 영역 지정 |
| **메시지/알림** | Message.xjs (gfn_message) | **react-hot-toast** | Sonner, react-toastify | 가볍고 API 직관적, 커스터마이징 용이 |
| **날짜 처리** | gfn_getDate 등 | **Day.js** | date-fns | 경량(2KB), Moment.js 호환 API, locale/플러그인 |
| **다국어 (i18n)** | I18n.xjs (기본 구조만) | **react-i18next** | next-intl | 네임스페이스, lazy loading, ICU MessageFormat |
| **CSS 프레임워크** | Nexacro 내장 스타일 | **Tailwind CSS v4** | Vanilla Extract, CSS Modules | 유틸리티 퍼스트, 번들 최적화, 팀 일관성 |
| **아이콘** | Nexacro 내장 이미지 | **Lucide React** | Heroicons, Phosphor | 트리셰이킹, 일관된 디자인, 경량 |
| **HTTP 상태 코드/에러** | DataObject.xjs | **Axios 인터셉터** + TanStack Query onError | - | 표준화된 에러 처리 |
| **팝업 관리** | Popup.xjs (gfn_openPopup) | **shadcn/ui Dialog** + React Context | Radix UI | 스택형 모달 관리, 포커스 트랩 |
| **웹 에디터** | DEXT5Editor (84화면) | **TipTap** (ProseMirror 기반) | Quill, Slate | Headless, 확장성 최강, 협업 에디팅 가능 |
| **이미지 크롭** | Cropper | **react-cropper** | react-easy-crop | Cropper.js 래퍼, 기능 풍부 |
| **지도** | KakaoMap | **Kakao Maps JS SDK** (직접 연동) | react-kakao-maps-sdk | 한국 지도 → Kakao 유지 필수 |
| **TTS (텍스트→음성)** | Azure Cognitive Speech | **Web Speech API (SpeechSynthesis)** | - | 브라우저 내장 기능, 외부 라이브러리 불필요 |
| **알림음 재생** | PlaySound | **Web Audio API** (네이티브) | - | 브라우저 네이티브 |
| **코드 하이라이팅** | - | **Prism.js** (필요 시) | highlight.js | 의료 코드/검사항목 표시 가능 |

### 3.5 개발 도구 및 품질 관리

| 용도 | 추천 도구 | 비고 |
|------|----------|------|
| 패키지 매니저 | **pnpm** | 디스크 절약, 빠른 설치, 모노레포 지원 |
| 코드 포맷터 | **Biome** | Prettier + ESLint 통합, 빠른 속도 |
| Git 훅 | **Husky + lint-staged** | 커밋 전 린트/포맷 자동화 |
| 테스트 | **Vitest + Testing Library** | Vite 네이티브, Jest 호환 |
| E2E 테스트 | **Playwright** | 크로스 브라우저, 안정적 |
| API 목킹 | **MSW (Mock Service Worker)** | 개발/테스트 시 백엔드 독립 |
| 스토리북 | **Storybook** (선택) | 공통 컴포넌트 문서화 |

### 3.6 추천 기술 스택 요약 (최종)

```
┌─────────────────────────────────────────────────────────────┐
│                    Seegene LIS (React)                       │
├─────────────────────────────────────────────────────────────┤
│  Framework:  React 18 + TypeScript 5                        │
│  Build:      Vite 6                                         │
│  Routing:    React Router v7                                │
│  Styling:    Tailwind CSS v4                                │
├─────────────────────────────────────────────────────────────┤
│  상태관리:    Zustand (전역) + TanStack Query (서버)          │
│  폼:         React Hook Form + Zod                          │
│  API:        Axios                                          │
├─────────────────────────────────────────────────────────────┤
│  그리드:      IBSheet8 (상용)                                │
│  차트:        IBChart (상용)                                  │
│  리포트:      MYSUIT (상용)                                   │
├─────────────────────────────────────────────────────────────┤
│  UI:         shadcn ui + Tailwind (자체 디자인 시스템)      │
│  아이콘:      Lucide React                                   │
│  날짜:        Day.js + React DatePicker                      │
│  Select:     React Select v5                                │
│  토스트:      react-hot-toast                                │
│  에디터:      TipTap                                         │
│  엑셀:        SheetJS                                        │
│  인쇄:        react-to-print                                 │
│  i18n:       react-i18next                                  │
├─────────────────────────────────────────────────────────────┤
│  테스트:      Vitest + Testing Library + Playwright          │
│  도구:        pnpm + Biome + Husky                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. 상세 WBS (월별 작업 분해)

### 4.1 4월: 공통 개발 (2 M/M, 2명)

> **목표**: 전체 화면 전환의 기반이 되는 프로젝트 구조, cmmlib 공통 라이브러리, cmm 커스텀 컴포넌트를 React로 전환 완성한다.
> **전제**: 4월 중순 전환 대상 화면 ~600개 확정
> **핵심**: cmmlib(15개 xjs, 777함수)와 cmm(63개 xfdl 커스텀 컴포넌트)를 4월 내 전환해야 5월부터 화면 전환 가능

---

#### 4월 전환 대상: cmmlib 공통 라이브러리 (15개 xjs 파일)

> **소스 위치**: `seegene-mf-lis-nexacro/cmmlib/`
> **총 규모**: 15개 파일, **777개 함수**, 26,416 라인, ~910KB
> cmmlib의 함수들(gfn_*)은 전체 화면에서 호출하는 핵심 인프라이므로, 화면 전환 전에 반드시 React Hook/유틸로 전환 완료해야 함.

| 파일 | 라인 수 | 함수 수 | 전환 산출물 | 전환 시기 | 비고 |
|------|---------|---------|-----------|----------|------|
| **Util.xjs** | 5,542 | 203 | `utils/` 폴더 (순수 유틸 함수) | Week 1~2 | 최대 파일, 문자열/날짜/숫자/배열 유틸 |
| **DataObject.xjs** | 1,840 | 48 | `api/client.ts` (Axios + 인터셉터) | Week 2 | API 통신 핵심 — gfn_dsRequestSync/Async |
| **Transaction.xjs** | 410 | 9 | `api/client.ts` 내장 | Week 2 | 트랜잭션 래퍼 → Axios 통합 |
| **Dataset.xjs** | 383 | 13 | `utils/dataset.ts` 상태관리 유틸 | Week 2 | Dataset 조작 → 일반 배열/객체 유틸 |
| **Frame.xjs** | 3,756 | 101 | Layout 컴포넌트 + `hooks/useFrame.ts` | Week 3 | 메뉴/MDI/탭/권한 관리 |
| **Grid.xjs** | 3,789 | 87 | `hooks/useIBSheet.ts` IBSheet8 래퍼 | Week 2~3 | 그리드 정렬/필터/복사/우클릭메뉴 |
| **Excel.xjs** | 2,396 | 77 | `hooks/useExcel.ts` | Week 3 | IBSheet8 Export + SheetJS Import |
| **ExtExcelCommon.xjs** | 1,115 | 34 | `hooks/useExcel.ts` 통합 | Week 3 | DLL 엑셀 → SheetJS로 대체 |
| **Comp.xjs** | 1,441 | 55 | `hooks/useComponent.ts` + 각 컴포넌트 | Week 3~4 | 아코디언, TTS(브라우저 내장), DEXT5 연동 |
| **Message.xjs** | 847 | 23 | `hooks/useMessage.ts` (react-hot-toast) | Week 3 | gfn_message/gfn_alert → 토스트/모달 |
| **Popup.xjs** | 952 | 12 | `hooks/useModal.ts` (shadcn/ui Dialog) | Week 3~4 | gfn_openPopup → 모달 컴포넌트 |
| **Validation.xjs** | 1,616 | 21 | `hooks/useValidation.ts` (Zod) | Week 4 | 데이터 검증 → React Hook Form + Zod |
| **ExtPrintCommon.xjs** | 1,602 | 72 | `hooks/usePrint.ts` + 로컬 에이전트 | Week 4 (기초) | DLL 인쇄 → react-to-print + 에이전트 (완성은 7~8월) |
| **File.xjs** | 449 | 14 | `hooks/useFile.ts` + react-dropzone | Week 4 | 파일 업/다운로드 |
| **I18n.xjs** | 278 | 8 | `i18n/config.ts` (react-i18next) | Week 2 | 다국어 라벨 슬롯 |

#### 4월 전환 대상: cmm 커스텀 컴포넌트 (63개 xfdl 파일)

> **소스 위치**: `seegene-mf-lis-nexacro/cmm/`
> **총 규모**: 63개 xfdl 파일, ~1.1MB
> cmm 커스텀 컴포넌트는 업무 화면(600개)에서 직접 호출하는 공통 UI이므로, 화면 전환 전에 React 컴포넌트로 전환 완료 필요.
> 단, 사용하지 않는 파일과 운영에 불필요한 디버그 도구, 하드웨어 연동(후순위)은 제외/후순위 가능.

**카테고리별 분류 및 전환 계획:**

##### (1) Alert/Confirm/Message — 7개 → Week 3 전환 (필수, cmmlib Message.xjs와 연동)

| 파일 | 크기 | 설명 | React 전환 대상 |
|------|------|------|---------------|
| cmmAlert.xfdl | 5.0K | 알림 팝업 (자동닫기, 알림음) | `AlertDialog` 컴포넌트 |
| cmmAlertN.xfdl | 5.2K | 네이티브 알림 팝업 | `AlertDialog` 통합 |
| cmmConfirm.xfdl | 4.8K | 확인 다이얼로그 (Yes/No) | `ConfirmDialog` 컴포넌트 |
| cmmConfirmN.xfdl | 5.8K | 네이티브 확인 팝업 | `ConfirmDialog` 통합 |
| cmmMessage.xfdl | 11K | 메시지 팝업 (타이틀, 아이콘, 상세) | `MessageDialog` 컴포넌트 |
| cmmToast.xfdl | 5.2K | 토스트 알림 (자동 사라짐) | `Toast` (react-hot-toast 래퍼) |
| cmmToastNotice.xfdl | 7.3K | 화면 갱신 알림 토스트 | `ToastNotice` 컴포넌트 |

##### (2) Calendar/Date — 10개 → Week 3~4 전환 (필수, 거의 모든 화면에서 사용)

| 파일 | 크기 | 설명 | React 전환 대상 |
|------|------|------|---------------|
| cmmBtnCalendar.xfdl | 6.0K | 버튼형 달력 (이전/다음 월) | `ButtonCalendar` 컴포넌트 |
| cmmCalDDPopup.xfdl | 4.2K | 일 선택 팝업 (공휴일 표시) | `DayPickerPopup` 컴포넌트 |
| cmmCalFromTo.xfdl | 26K | 기간 선택 (시작~종료일) | `DateRangePicker` 컴포넌트 |
| cmmCalMM.xfdl | 6.4K | 월 선택 (YYYY-MM) | `MonthPicker` 컴포넌트 |
| cmmCalMMFromTo.xfdl | 20K | 월 기간 선택 | `MonthRangePicker` 컴포넌트 |
| cmmCalMMPopup.xfdl | 9.8K | 월 선택 팝업 | `MonthPickerPopup` (MonthPicker 내장) |
| cmmCalYYYY.xfdl | 6.4K | 연도 선택 (YYYY) | `YearPicker` 컴포넌트 |
| cmmCalYYYYFromTo.xfdl | 22K | 연도 기간 선택 | `YearRangePicker` 컴포넌트 |
| cmmCalYYYYPopup.xfdl | 11K | 연도 선택 팝업 | `YearPickerPopup` (YearPicker 내장) |
| cmmSpinCalendar.xfdl | 7.0K | 스핀 버튼 달력 (주간 표시) | `SpinCalendar` 컴포넌트 |

##### (3) Paging — 3개 → Week 3 전환 (필수, 목록 화면 대부분 사용)

| 파일 | 크기 | 설명 | React 전환 대상 |
|------|------|------|---------------|
| cmmPaging.xfdl | 12K | 페이지네이션 (Prev/Next) | `Pagination` 컴포넌트 |
| cmmPaging2.xfdl | 13K | 페이지네이션 (First/Prev/Next/Last) | `Pagination` 통합 (variant) |
| cmmPaging2Button.xfdl | 6.4K | 이전/다음 버튼 | `Pagination` 통합 (simple variant) |

##### (4) Popup/Search — 6개 → Week 4 전환 (필수, 업무 화면에서 빈번하게 호출)

| 파일 | 크기 | 설명 | React 전환 대상 |
|------|------|------|---------------|
| cmmCustPopup.xfdl | 15K | 거래처 검색 팝업 (부서/지점/이름) | `CustomerSearchPopup` 컴포넌트 |
| cmmDeptPopup.xfdl | 16K | 부서 검색 팝업 (업종/지역/지점) | `DepartmentSearchPopup` 컴포넌트 |
| cmmDeptTreePopup.xfdl | 9.3K | 부서 트리 팝업 (계층 구조) | `DepartmentTreePopup` 컴포넌트 |
| cmmUserPopup.xfdl | 15K | 직원 검색 팝업 (ID/이름/부서) | `UserSearchPopup` 컴포넌트 |
| cmmZipCodePopup.xfdl | 3.9K | 우편번호 검색 팝업 | `ZipCodePopup` 컴포넌트 |
| cmmBillPopup.xfdl | 742B | 청구 팝업 (최소) | 사용 여부 확인 후 전환 |

##### (5) Grid 유틸리티 — 3개 → Week 3 전환 (필수, IBSheet8 래퍼와 통합)

| 파일 | 크기 | 설명 | React 전환 대상 |
|------|------|------|---------------|
| cmmColumnHide.xfdl | 8.0K | 컬럼 표시/숨김 토글 | `ColumnVisibilityDialog` 컴포넌트 |
| cmmGridFilter.xfdl | 18K | 그리드 필터 다이얼로그 | `GridFilterDialog` 컴포넌트 |
| cmmGridSort.xfdl | 11K | 다중 컬럼 정렬 설정 | `GridSortDialog` 컴포넌트 |

##### (6) File 업/다운로드 — 3개 → Week 4 전환 (필수)

| 파일 | 크기 | 설명 | React 전환 대상 |
|------|------|------|---------------|
| cmmFileDownload.xfdl | 4.8K | 파일 다운로드 버튼 | `FileDownload` 컴포넌트 |
| cmmFileUpload.xfdl | 22K | 단일 파일 업로드 | `FileUpload` 컴포넌트 (react-dropzone) |
| cmmMultiFileUpload.xfdl | 24K | 다중 파일 업로드 (그리드 표시) | `MultiFileUpload` 컴포넌트 |

##### (7) 기타 필수 UI — 7개 → Week 4 전환

| 파일 | 크기 | 설명 | React 전환 대상 |
|------|------|------|---------------|
| cmmLoading.xfdl | 1.8K | 로딩 인디케이터 | `LoadingSpinner` 컴포넌트 |
| cmmProgress.xfdl | 5.4K | 프로그레스 바 | `ProgressBar` 컴포넌트 |
| cmmMultiCombo.xfdl | 38K | 멀티 셀렉트 콤보 (검색+그리드 팝업) | `MultiSelect` 컴포넌트 (React Select) |
| cmmEdtUser.xfdl | 3.0K | 사용자 선택 에디트 | `UserSelectInput` 컴포넌트 |
| cmmFindReplace.xfdl | 13K | 찾기/바꾸기 다이얼로그 | `FindReplaceDialog` 컴포넌트 |
| cmmPsnConfirm.xfdl | 10K | 화면 레이아웃 저장 확인 | `LayoutSaveConfirm` 컴포넌트 |
| cmmSelectSheet.xfdl | 6.0K | 엑셀 시트 선택 다이얼로그 | `SheetSelectDialog` 컴포넌트 |

##### (8) 후순위 — 5월 이후 또는 해당 화면 전환 시 함께 전환

| 파일 | 크기 | 설명 | 전환 시기 | 비고 |
|------|------|------|----------|------|
| cmmImageView.xfdl | 13K | 이미지 뷰어 (줌/회전) | 6~7월 | 해당 화면 전환 시 |
| cmmImageViewLC~LC5.xfdl | 31~42K (6개) | friendlyView 이미지 뷰어 변형 | 7~8월 | 대표 1개만 전환, 나머지 통합 |
| cmmImageEdit.xfdl | 8.8K | 이미지 편집 | 7~8월 | 사용 화면 확인 후 |
| cmmImgToBin.xfdl | 4.7K | 이미지→바이너리 변환 | 7~8월 | 사용 화면 확인 후 |
| cmmConvertTag.xfdl | 43K | 다국어 태그 변환 | 5~6월 | 다국어 작업 시 |
| cmmMultiLanguage.xfdl | 8.8K | 다국어 설정 초기화 | 5~6월 | 다국어 작업 시 |
| cmmTaskBass.xfdl | 34K | 업무 기준 관리 (그리드+상세) | 6~7월 | 해당 화면 전환 시 |
| cmmZiipCode.xfdl | 3.4K | 우편번호 컴포넌트 | Week 4 (ZipCodePopup과 함께) | |

##### (9) 하드웨어/장비 연동 — 7~8월 전환 (로컬 에이전트 개발 후)

| 파일 | 크기 | 설명 | 전환 시기 | 비고 |
|------|------|------|----------|------|
| cmmSerialBarCode.xfdl | 16K | 시리얼 바코드 리더 | 7~8월 | WebSerial/HID API 또는 로컬 에이전트 |
| cmmPrinter.xfdl | 5.8K | 프린터 선택 다이얼로그 | 7~8월 | 로컬 에이전트와 연동 |
| cmmPlaySound.xfdl | 3.0K | 알림음 재생 | 7~8월 | Web Audio API |
| cmmTTS.xfdl | 4.2K | 텍스트→음성 | 7~8월 | Web Speech API (SpeechSynthesis) — 브라우저 내장 |
| cmmVideoPlayer.xfdl | 4.3K | 비디오 플레이어 | 7~8월 | HTML5 `<video>` |

##### (10) 전환 제외 대상

| 파일 | 크기 | 제외 사유 |
|------|------|----------|
| cmmDebug.xfdl | 40K | 운영 불필요 (개발 디버그 도구) → React DevTools로 대체 |
| cmmDebugTrLog.xfdl | 17K | 운영 불필요 → 브라우저 Network 탭으로 대체 |
| cmmDebugTrView.xfdl | 13K | 운영 불필요 → 브라우저 DevTools로 대체 |
| cmmSTT.xfdl | 5.9K | STT 미지원 (이번 프로젝트 범위 제외) |
| cmmVoiceRecorder.xfdl | 8.4K | 음성 녹음 미지원 (이번 프로젝트 범위 제외) |
| cmmMultiCombo_copy.xfdl | 27K | 백업 파일 (cmmMultiCombo와 중복) |
| cmmImageViewLC4-save.xfdl | 40K | 백업 파일 (cmmImageViewLC4와 중복) |
| unused/ 폴더 (3개 파일) | - | 미사용 확인됨 |

> **4월 전환 요약**: cmm 63개 중 **필수 39개** (4월 내), 후순위 14개 (5~8월), 하드웨어 5개 (7~8월), 제외 8개 (디버그3+STT/녹음2+백업2+unused3)
> **미사용 파일 추가 제외**: 현업에서 미사용 확인된 파일은 추가 제외 가능 (4월 초 확인 필요)
> **STT 미지원**: cmmSTT, cmmVoiceRecorder는 이번 프로젝트 범위에서 제외. TTS(cmmTTS)는 브라우저 내장 Web Speech API(SpeechSynthesis)로 전환.

---

#### Week 1 (04/01~04/04): 프로젝트 초기 설정 + cmmlib 유틸리티 착수

| # | 작업 | 담당 | 산출물 | 완료 기준 | cmmlib 연관 |
|---|------|------|--------|----------|------------|
| W1-1 | React + Vite + TypeScript 프로젝트 생성 | 담당자A | 프로젝트 보일러플레이트 | 빌드/개발 서버 정상 동작 | - |
| W1-2 | 프로젝트 디렉토리 구조 설계 | 담당자A | src/ 구조 확정 | 팀 리뷰 통과 | - |
| W1-3 | Tailwind CSS v4 + Biome + Husky 설정 | 담당자A | 개발 환경 설정 | lint/format 자동화 | - |
| W1-4 | IBSheet8 라이선스 설치 및 React 래퍼 기초 PoC | 담당자B | IBSheet8 연동 PoC | 기본 그리드 렌더링 성공 | Grid.xjs 분석 착수 |
| W1-5 | IBChart 라이선스 설치 및 React 래퍼 기초 PoC | 담당자B | IBChart 연동 PoC | 기본 차트 렌더링 성공 | - |
| W1-6 | CI/CD 파이프라인 초기 구축 | 담당자A | 빌드/배포 자동화 | dev 환경 자동 배포 | - |
| W1-7 | **cmmlib/Util.xjs 전환 착수** (203함수→utils/) | 담당자A | `utils/string.ts`, `utils/date.ts`, `utils/number.ts`, `utils/array.ts` | 핵심 유틸 함수 70%+ 전환 | **Util.xjs** |
| W1-8 | 전환 대상 화면 목록 정리 + **cmm 미사용 파일 확인 요청** | 담당자B | 화면 목록 초안 + cmm 사용/미사용 분류 | 모듈별 화면 수 집계, cmm 제외 대상 확인 | - |

#### Week 2 (04/07~04/11): cmmlib 핵심 인프라 전환 (API, 인증, 상태, 그리드)

| # | 작업 | 담당 | 산출물 | 완료 기준 | cmmlib 연관 |
|---|------|------|--------|----------|------------|
| W2-1 | **cmmlib/DataObject.xjs + Transaction.xjs 전환** — Axios 인스턴스 + 인터셉터 | 담당자A | `api/client.ts` | JWT 주입, 401 처리, 환경별 URL, gfn_dsRequest 호환 | **DataObject.xjs** (48함수) + **Transaction.xjs** (9함수) |
| W2-2 | TanStack Query 설정 + API Hook 패턴 수립 | 담당자A | `api/hooks/` 패턴 | useQuery/useMutation 표준 패턴 | DataObject.xjs 연장 |
| W2-3 | gfn_dsRequestSync/Async → API Hook 변환 유틸 | 담당자A | SVC→Hook 변환 가이드 | 샘플 3개 화면 검증 | DataObject.xjs 연장 |
| W2-4 | **cmmlib/Dataset.xjs 전환** + Zustand 스토어 설계 | 담당자B | `utils/dataset.ts` + `store/` 구현 | Dataset 유틸 + 전역 상태(Auth, Menu, CommonCode, Config) CRUD | **Dataset.xjs** (13함수) |
| W2-5 | 로그인 → JWT 인증 흐름 구현 | 담당자B | AuthStore + 로그인 페이지 | 로그인/로그아웃/토큰 갱신 | Frame.xjs 인증 부분 참조 |
| W2-6 | 공통코드(gds_cmnCd) 로딩 + 캐싱 | 담당자B | `hooks/useCommonCode.ts` | 코드 조회/캐싱/갱신 | Util.xjs 코드 관련 함수 |
| W2-7 | **cmmlib/Util.xjs 전환 완료** (잔여 함수) | 담당자A | `utils/` 폴더 완성 | 203개 함수 전환 완료 | **Util.xjs** 마무리 |
| W2-8 | **cmmlib/I18n.xjs 전환** → react-i18next 설정 | 담당자B | `i18n/config.ts` + useTranslation 패턴 | t('key') 적용 가능 상태 | **I18n.xjs** (8함수) |

#### Week 3 (04/14~04/18): cmmlib UI 전환 + cmm 필수 컴포넌트 전환 (1차)

| # | 작업 | 담당 | 산출물 | 완료 기준 | cmmlib/cmm 연관 |
|---|------|------|--------|----------|---------------|
| W3-1 | **cmmlib/Frame.xjs 전환** → 레이아웃 + 라우팅 | 담당자A | Layout(Header+Sidebar+MDI Tab+Content) + React Router v7 | 프레임 구조 재현, 메뉴→화면 열기 | **Frame.xjs** (101함수) |
| W3-2 | **cmmlib/Grid.xjs 전환** → IBSheet8 래퍼 Hook 완성 | 담당자B | `hooks/useIBSheet.ts` | 초기화, 데이터 로드, 이벤트, CRUD, 정렬, 필터, 복사, 우클릭 | **Grid.xjs** (87함수) |
| W3-3 | **cmmlib/Excel.xjs + ExtExcelCommon.xjs 통합 전환** | 담당자B | `hooks/useExcel.ts` | IBSheet8 Export + SheetJS Import 동작 | **Excel.xjs** (77함수) + **ExtExcelCommon.xjs** (34함수) |
| W3-4 | **cmmlib/Message.xjs 전환** → 토스트/알림 시스템 | 담당자A | `hooks/useMessage.ts` (react-hot-toast) | gfn_message/gfn_alert 대체 | **Message.xjs** (23함수) |
| W3-5 | **cmm Alert/Confirm/Message 7개 전환** | 담당자A | `components/feedback/AlertDialog.tsx`, `ConfirmDialog.tsx`, `MessageDialog.tsx`, `Toast.tsx` | 7개 xfdl → 4개 React 컴포넌트 | cmmAlert~cmmToastNotice |
| W3-6 | **cmm Paging 3개 전환** | 담당자A | `components/common/Pagination.tsx` (3 variants) | 페이지네이션 동작 확인 | cmmPaging, cmmPaging2, cmmPaging2Button |
| W3-7 | **cmm Grid 유틸리티 3개 전환** | 담당자B | `components/grid/ColumnVisibilityDialog.tsx`, `GridFilterDialog.tsx`, `GridSortDialog.tsx` | IBSheet8 래퍼와 연동 동작 | cmmColumnHide, cmmGridFilter, cmmGridSort |
| W3-8 | **cmm Calendar/Date 10개 전환 착수** | 담당자B | `components/date/DateRangePicker.tsx`, `MonthPicker.tsx`, `YearPicker.tsx` 등 | 핵심 5개 컴포넌트 완성 | cmmCalFromTo, cmmCalMM, cmmCalYYYY 등 |
| W3-9 | 공통 Button, Input, Select, CheckBox, Radio 컴포넌트 | 담당자A | `components/common/` | Tailwind 스타일, 다국어 라벨 슬롯 | Comp.xjs 참조 |

#### Week 4 (04/21~04/25): cmm 필수 컴포넌트 전환 (2차) + cmmlib 마무리 + 전환 가이드

| # | 작업 | 담당 | 산출물 | 완료 기준 | cmmlib/cmm 연관 |
|---|------|------|--------|----------|---------------|
| W4-1 | **cmmlib/Popup.xjs 전환** → 팝업/모달 시스템 완성 | 담당자A | `hooks/useModal.ts` (shadcn/ui Dialog + Context) | 스택형 팝업 열기/닫기, 인자 전달 | **Popup.xjs** (12함수) |
| W4-2 | **cmmlib/Validation.xjs 전환** → React Hook Form + Zod | 담당자A | `hooks/useValidation.ts` | 폼 검증 표준, 에러 스타일링 | **Validation.xjs** (21함수) |
| W4-3 | **cmmlib/Comp.xjs 전환** → 컴포넌트 유틸리티 | 담당자A | `hooks/useComponent.ts` | 아코디언, 에디트 확장, DLL 로딩 대체 | **Comp.xjs** (55함수) |
| W4-4 | **cmmlib/ExtPrintCommon.xjs 전환 (기초)** | 담당자B | `hooks/usePrint.ts` | react-to-print 기본 인쇄 + MYSUIT 연동 | **ExtPrintCommon.xjs** (72함수, DLL부분은 7~8월) |
| W4-5 | **cmmlib/File.xjs 전환** | 담당자B | `hooks/useFile.ts` | 파일 업/다운로드, 사이즈 검증 | **File.xjs** (14함수) |
| W4-6 | **cmm Calendar/Date 잔여 5개 전환 완료** | 담당자B | 캘린더 컴포넌트 전체 완성 | 10개 캘린더 xfdl → React 컴포넌트 전환 완료 | cmmCalDDPopup, cmmSpinCalendar 등 잔여 |
| W4-7 | **cmm Popup/Search 6개 전환** | 담당자A | `components/popup/CustomerSearchPopup.tsx` 등 | 거래처/부서/직원/우편번호 검색 팝업 | cmmCustPopup~cmmZipCodePopup |
| W4-8 | **cmm File 3개 전환** | 담당자B | `components/file/FileUpload.tsx`, `MultiFileUpload.tsx` | 파일 업/다운로드 UI 컴포넌트 | cmmFileUpload~cmmMultiFileUpload |
| W4-9 | **cmm 기타 필수 UI 7개 전환** | 담당자A+B | `LoadingSpinner`, `ProgressBar`, `MultiSelect`, `FindReplaceDialog` 등 | 필수 UI 컴포넌트 전환 완료 | cmmLoading~cmmSelectSheet |
| W4-10 | **화면 전환 가이드 문서 작성 (CLAUDE.md)** | 담당자A+B | 전환 가이드 문서 | XFDL→React 변환 표준 절차 (cmm 컴포넌트 사용법 포함) | - |
| W4-11 | **전환 대상 ~600개 화면 확정 및 모듈별 배분** | 담당자A+B | 화면 목록 확정 | 모듈별/복잡도별 분류 완료 | - |
| W4-12 | Claude Code 자동 변환 프롬프트/도구 초안 | 담당자A | Claude Code 연동 가이드 | XFDL 파싱→React 코드 생성 패턴 | - |

#### 4월 전환 완료 산출물 요약

| 구분 | 대상 | 전환 산출물 수 | 완료 시기 |
|------|------|-------------|----------|
| **cmmlib 전환** | 15개 xjs 파일 (777함수) | React Hook 12개 + utils 4개 모듈 + api/client + i18n/config | Week 1~4 |
| **cmm 필수 전환** | 39개 xfdl 파일 | React 컴포넌트 ~25개 (유사 기능 통합) | Week 3~4 |
| **cmm 후순위** | 14개 xfdl 파일 | 5~8월 해당 모듈 전환 시 함께 | - |
| **cmm 하드웨어** | 7개 xfdl 파일 | 7~8월 로컬 에이전트 개발 후 | - |
| **제외** | 6개 xfdl 파일 | 전환 불필요 (디버그/백업/unused) | - |

#### 4월 주차별 cmmlib + cmm 전환 흐름도

```
Week 1: 프로젝트 설정 + Util.xjs 착수
         ↓
Week 2: cmmlib 핵심 인프라 (DataObject, Transaction, Dataset, I18n, Util 완료)
         ↓ (API/인증/상태 기반 완성)
Week 3: cmmlib UI (Frame, Grid, Excel, Message) + cmm 1차 (Alert 7개, Paging 3개, Grid유틸 3개, Calendar 착수)
         ↓ (레이아웃+그리드+메시지 기반 완성)
Week 4: cmmlib 마무리 (Popup, Validation, Comp, Print, File) + cmm 2차 (Calendar 완료, Search팝업 6개, File 3개, 기타 7개)
         ↓
         5월: 화면 전환 시작 가능 상태 ✅
```

> **왜 이 순서인가?**
> - Week 1~2에서 Util/DataObject/Transaction을 먼저 전환하는 이유: 이후 모든 Hook과 컴포넌트가 이 유틸과 API 클라이언트를 사용하기 때문
> - Week 3에서 Frame/Grid/Message를 전환하면서 cmm Alert/Paging/Grid유틸을 동시에 전환하는 이유: 이들은 서로 의존성이 있어 함께 개발하면 효율적
> - Week 4에서 Popup/Validation을 전환하면서 cmm Search팝업/File을 동시에 전환하는 이유: Popup.xjs의 gfn_openPopup이 cmm 팝업 컴포넌트들의 기반

#### 4월 우려 사항 및 리스크

| 우려 | 영향도 | 대응 방안 |
|------|--------|----------|
| **cmmlib 777함수 + cmm 39개 컴포넌트를 2명이 4주에 완료 가능성** | 🔴 높음 | Claude Code 활용하여 xjs→ts 변환 초안 자동 생성 (70%+), 1:1 전환 아닌 기능 통합으로 실제 산출물 수 축소 |
| **cmm 미사용 파일 미확인 상태** | 🟠 중간 | Week 1에서 현업에 cmm 사용/미사용 확인 요청, 미사용 확인되면 즉시 제외하여 공수 절감 |
| IBSheet8 + React 래퍼 개발 난이도 예상 초과 | 🔴 높음 | Week 1에서 즉시 PoC 착수, 벤더 기술 지원 확보 |
| IBChart React 연동 경험 부족 | 🟠 중간 | IBChart 벤더 문서/샘플 조기 확보, PoC 우선 |
| MYSUIT 리포트 연동 방식 불확실 | 🟠 중간 | MYSUIT 벤더와 React 환경 연동 방식 사전 협의 |
| 4월 중순까지 화면 목록 미확정 | 🟠 중간 | 우선 공통(cmmlib/cmm) 개발 집중, 모듈별 예상 비율로 가계획 수립 |
| **cmmlib 함수 중 Nexacro 전용 API 의존 함수 비율 불확실** | 🟠 중간 | 1:1 전환이 아닌 React 패턴 재설계 접근. Nexacro 전용(setColumn, setCellProperty 등)은 IBSheet8 API로 재매핑 |
| **cmm Calendar 10개 컴포넌트의 변형 다양성** | 🟠 중간 | Day/Month/Year 각각 Picker + RangePicker + Popup 조합으로 3~4개 컴포넌트에 통합 설계 |

---

### 4.2 5월: 파일럿 + 1차 화면 전환 시작 (4 M/M, 4명)

> **목표**: 파일럿 모듈로 전환 패턴 검증 후, 본격적인 화면 전환 착수
> **인원 증가**: 4월 2명 → 5월 4명 (2명 추가 합류)

#### 전환 대상 화면 예상 배분 (~600개 기준)

> 원래 1,681개에서 ~600개로 축소 시, 각 모듈의 비율을 유지한다고 가정한 추정치.
> 실제 화면 목록은 4월 중순 확정 후 조정.

| 모듈 | 원래 화면 수 | 축소 비율(~36%) | 예상 전환 대상 | 평균 복잡도 | 전환 순서 |
|------|------------|---------------|-------------|-----------|----------|
| DT (검체검사) | 741 | 36% | **~265** | 중~고 | 3순위 (7~8월) |
| LM (LIS관리) | 228 | 36% | **~82** | 중 | 3순위 (7월) |
| SL (영업) | 150 | 36% | **~54** | 중 | 2순위 (6월) |
| QC (정도관리) | 112 | 36% | **~40** | 고 | 3순위 (7~8월) |
| LA (검사실관리) | 82 | 36% | **~30** | 중하 | 2순위 (6월) |
| BL (청구) | 77 | 36% | **~28** | 중 | 2순위 (6월) |
| DI (검사장비) | 74 | 36% | **~27** | 고 | 3순위 (8월) |
| cmm (공통) | 66 | - | **4월 필수 39개 완료** | 하~중 | 4월 공통개발 (필수), 5~8월 (후순위/하드웨어) |
| RM (결과관리) | 65 | 36% | **~23** | 중 | 2순위 (6월) |
| RC (접수) | 44 | 36% | **~16** | 중 | 1순위 (5월) |
| IM (면역) | 43 | 36% | **~15** | 중 | 2순위 (6월) |
| OP (운영) | 21 | 36% | **~8** | 하 | **파일럿** (5월) |
| **합계** | 1,703 | | **~612** | | |

#### Week 1~2 (05/01~05/09): 파일럿 전환 (OP 모듈) + 신규 인원 온보딩 + 4월 공통 보완

| # | 작업 | 담당 | 산출물 | 완료 기준 |
|---|------|------|--------|----------|
| W5-1 | 신규 2명 온보딩 (프로젝트 구조, cmmlib Hook/cmm 컴포넌트 사용법 숙지) | 담당자A | - | 가이드 기반 샘플 화면 1개 전환 가능 |
| W5-2 | **OP 모듈 파일럿 전환 (~8개 화면)** | 담당자B + 담당자C | OP 화면 React 전환 | 8개 화면 전환 완료 (cmm 컴포넌트 실전 사용 검증 포함) |
| W5-3 | 파일럿 결과 리뷰 및 전환 가이드 보완 | 전원 | 가이드 v2 | 패턴/속도/이슈 정리, **cmm 컴포넌트 사용 피드백 반영** |
| W5-4 | Claude Code 자동 변환 도구 실전 검증 | 담당자A | 변환 도구 v1 | 자동화율 측정 |
| W5-5 | **4월 cmmlib/cmm 미완료 항목 보완** | 담당자A | 공통 컴포넌트 보완 | 파일럿에서 발견된 누락/버그 수정 |
| W5-6 | **cmm 후순위 — 다국어 관련 2개 전환** (cmmConvertTag, cmmMultiLanguage) | 담당자D | 다국어 컴포넌트 | 다국어 라벨 관련 컴포넌트 준비 |

#### Week 3~4 (05/12~05/30): 1차 화면 전환 (소규모 모듈)

| # | 작업 | 담당 | 화면 수 | 완료 기준 |
|---|------|------|---------|----------|
| W5-7 | **RC (접수) 모듈 전환** | 담당자B | ~16개 | 접수 화면 전환 완료 |
| W5-8 | 모듈별 공통 라이브러리 전환 (RC) | 담당자C | Hook/유틸 | RC 전용 공통 전환 |
| W5-9 | 전환 완료 화면 기능 테스트 | 담당자D | 테스트 결과 | 기존 기능 동일 동작 확인 |
| W5-10 | **cmm 후순위 — 이미지 뷰어 기초** (cmmImageView 1개 대표 전환) | 담당자A | `ImageViewer` 컴포넌트 | 기본 이미지 줌/회전 동작 |

> **cmm 관련 변경**: 기존 WBS에 있던 "cmm (공통 팝업) 모듈 전환 ~24개"는 4월 공통 개발에서 이미 **필수 39개를 전환 완료**했으므로 삭제. 5월에는 파일럿에서 발견된 보완 사항과 후순위 cmm 컴포넌트(다국어, 이미지 뷰어)만 처리.

#### 5월 목표 산출량

| 항목 | 목표 | 비고 |
|------|------|------|
| 파일럿 완료 | OP 모듈 ~8개 화면 | 전환 패턴 확립 + **cmm 컴포넌트 실전 검증** |
| 1차 화면 전환 | RC = ~16개 화면 | 소규모 모듈 완료 |
| cmm 후순위 | 다국어 2개 + 이미지 뷰어 1개 | 후순위 cmm 전환 시작 |
| 4월 보완 | cmmlib/cmm 버그 수정 | 파일럿 피드백 반영 |
| **5월 누적** | **~24개 화면** + cmm 후순위 3개 | 전체의 약 4% (공통 품질 확보 우선) |

#### 5월 우려 사항 및 리스크

| 우려 | 영향도 | 대응 방안 |
|------|--------|----------|
| 신규 인원 온보딩으로 초기 1~2주 생산성 저하 | 🟠 중간 | 페어 프로그래밍으로 빠른 적응, 파일럿에 참여시켜 실전 학습 |
| 파일럿에서 예상 외 패턴 발견 (공통 보완 필요) | 🟠 중간 | 파일럿 기간에 즉시 공통 보완, 가이드 업데이트 |
| Claude Code 자동 변환 정확도 미달 | 🟡 낮음 | 수동 보정 비율 측정 후 프롬프트 개선, 화면 유형별 템플릿 |
| cmm 공통 팝업 의존성 복잡 | 🟠 중간 | cmm 우선 전환으로 다른 모듈 전환 시 즉시 활용 가능 |

---

### 4.3 6월: 화면 전환 본격 진행 (4 M/M, 4명)

> **목표**: 중규모 모듈 5개 병렬 전환 (SL, LA, BL, RM, IM)

#### 월간 작업 계획

| # | 작업 | 담당 | 화면 수 | 기간 |
|---|------|------|---------|------|
| W6-1 | **SL (영업) 모듈 전환** | 담당자A | ~54개 | 4주 |
| W6-2 | **LA (검사실관리) 모듈 전환** | 담당자B | ~30개 | 2주 |
| W6-3 | **BL (청구) 모듈 전환** | 담당자C | ~28개 | 3주 |
| W6-4 | **RM (결과관리) 모듈 전환** | 담당자D | ~23개 | 2.5주 |
| W6-5 | **IM (면역) 모듈 전환** | 담당자B | ~15개 | 1.5주 |
| W6-6 | 모듈별 공통 라이브러리 전환 (sl_comm, lm_comm 등) | 전원 | Hook/유틸 | 각 모듈 착수 전 |
| W6-7 | 전환 완료 화면 기능 테스트 | 전원 | 테스트 결과 | 주 단위 테스트 |
| W6-8 | TipTap 에디터 연동 (DEXT5Editor 대체) | 담당자A | 에디터 컴포넌트 | 84개 화면에서 사용하는 에디터 |
| W6-9 | IBChart 연동 (rMateChartH5 대체) 본격 적용 | 담당자B | 차트 컴포넌트 패턴 | 차트 포함 화면 전환 기반 |

#### 6월 목표 산출량

| 항목 | 목표 | 비고 |
|------|------|------|
| 6월 전환 | SL+LA+BL+RM+IM = **~150개 화면** | 중규모 5개 모듈 |
| cmm 후순위 | cmmTaskBass 등 해당 모듈 전환 시 함께 | 업무 화면에서 사용하는 cmm 컴포넌트 |
| **6월 누적** | **~174개 화면** (5월 24 + 6월 150) | 전체의 약 29% |

#### 6월 우려 사항 및 리스크

| 우려 | 영향도 | 대응 방안 |
|------|--------|----------|
| SL 모듈 54개 화면 1명이 4주 내 완료 가능성 | 🟠 중간 | Claude Code 활용 극대화, 단순 화면은 일 2~3개 전환 목표 |
| TipTap으로 DEXT5Editor 기능 완전 대체 가능 여부 | 🟠 중간 | DEXT5Editor 사용 기능 범위 먼저 분석, 필수 기능만 TipTap으로 구현 |
| 모듈 간 화면 연동 (팝업 호출 등) 누락 | 🟠 중간 | 팝업 호출 매핑 테이블 사전 작성, cmm 팝업 우선 전환 완료 상태 |
| 4명이 월 150개 화면 전환은 높은 목표 | 🔴 높음 | 1인당 월 37.5개 = 일 1.7개. 단순 화면 비율(76%)로 실현 가능하나 복잡 화면에서 지연 가능. 복잡 화면은 경험자 전담 |

---

### 4.4 7월: 화면 전환 가속 — 대규모 모듈 (4 M/M, 4명)

> **목표**: DT 모듈(최대 규모) 및 LM 모듈 전환 착수

#### 월간 작업 계획

| # | 작업 | 담당 | 화면 수 | 기간 |
|---|------|------|---------|------|
| W7-1 | **DT 모듈 공통 전환** (dt_comm, dt_commL, dt_commP, dt_barcode) | 담당자A | 공통 Hook | 1주 |
| W7-2 | **DT-TST (검사 수행) 전환** | 담당자A + 담당자C | ~71개 | 3주 |
| W7-3 | **DT-RSLT (결과 관리) 전환** | 담당자B | ~61개 | 3주 |
| W7-4 | **DT-BASSINFO (기준정보) 일부 전환** | 담당자D | ~40개 | 3주 |
| W7-5 | **LM (LIS관리) 모듈 전환** | 담당자C (DT-TST 완료 후) + 담당자D | ~82개 | 3~4주 |
| W7-6 | 장비 연동 로컬 에이전트 설계/PoC | 담당자B | 에이전트 PoC | 바코드 프린터 WebSocket 연동 |
| W7-7 | 전환 완료 화면 기능 테스트 | 전원 | 테스트 결과 | 주 단위 |

#### 7월 목표 산출량

| 항목 | 목표 | 비고 |
|------|------|------|
| 7월 전환 | DT 일부(~172) + LM(~82) = **~254개 화면** (일부 8월 이월) | 최대 모듈 집중 |
| cmm 후순위 | cmmImageViewLC 시리즈 통합, cmmImageEdit 등 | DT/LM 이미지 관련 화면 전환 시 함께 |
| cmm 하드웨어 | cmmSerialBarCode, cmmPrinter PoC 착수 | 장비 에이전트 PoC와 동시 진행 |
| **7월 누적** | **~428개 화면** | 전체의 약 71% |

#### 7월 우려 사항 및 리스크

| 우려 | 영향도 | 대응 방안 |
|------|--------|----------|
| **DT 모듈 복잡도** — 화면당 평균 1,189라인 | 🔴 높음 | DT 전용 공통 Hook 선행 개발, 복잡 화면은 전담 배정 |
| DT 모듈 공통 라이브러리 4개 파일 전환 공수 | 🟠 중간 | dt_comm.xjs(664화면 사용)를 1주 집중 전환, 이후 화면 전환 가속 |
| LM 82개 화면 + DT 병행 시 4명 부하 | 🔴 높음 | DT/LM 간 우선순위 조정, 일부 LM 화면은 8월 이월 가능 |
| 장비 연동 PoC 실패 시 대안 필요 | 🟠 중간 | WebSocket + 로컬 에이전트(Electron 경량) 우선, 실패 시 ActiveX→ Chrome Extension 검토 |
| **cmm 이미지 뷰어 LC 시리즈(6개 변형) 통합 난이도** | 🟠 중간 | 대표 1개만 전환 후 variant prop으로 통합, friendlyView 의존성은 별도 검토 |

---

### 4.5 8월: 화면 전환 완료 + 외부 연동 (4 M/M, 4명)

> **목표**: 나머지 모듈 전환 완료, 외부 시스템 연동 마무리

#### 월간 작업 계획

| # | 작업 | 담당 | 화면 수 | 기간 |
|---|------|------|---------|------|
| W8-1 | **DT 모듈 잔여 전환** (BASSINFO 잔여, RSLTRPRT, TSTBEFRPRCS, ANALSTCS, INFC) | 담당자A + 담당자C | ~93개 | 3주 |
| W8-2 | **QC (정도관리) 모듈 전환** | 담당자B | ~40개 | 3주 |
| W8-3 | **DI (검사장비) 모듈 전환** | 담당자D | ~27개 | 2.5주 |
| W8-4 | 7월 이월 화면 전환 | 전원 | ~40개 | 병행 |
| W8-5 | 바코드/라벨 프린터 로컬 에이전트 개발 | 담당자B | 에이전트 v1 | 2주 |
| W8-6 | **cmm TTS 전환** (브라우저 내장 SpeechSynthesis API) | 담당자D | TTS 컴포넌트 | 0.5주 |
| W8-7 | MYSUIT 리포트 연동 최종 완성 | 담당자A | 리포트 모듈 | 1주 |
| W8-8 | **cmm 하드웨어 잔여 전환** (cmmSerialBarCode, cmmPrinter, cmmPlaySound, cmmVideoPlayer) | 담당자B | 하드웨어 연동 컴포넌트 | 에이전트 완성 후 |
| W8-9 | 전체 화면 1차 통합 점검 | 전원 | 이슈 목록 | 주요 흐름 테스트 |
| W8-10 | **알앤비소프트 테스트 인수인계** | 담당자A+B | 인수인계 문서, 테스트 환경 | 테스트 범위/절차/환경 설명, 빌드 배포 방법 |
| W8-11 | **알앤비소프트 테스트 지원** (8월 중순~) | 전원 | 이슈 대응 | 테스트 중 발견 이슈 즉시 수정 |

#### 8월 목표 산출량

| 항목 | 목표 | 비고 |
|------|------|------|
| 8월 전환 | DT 잔여 + QC + DI + 이월 = **~172개 화면** | 전환 마무리 |
| cmm 하드웨어/후순위 | 잔여 cmm 7개 전환 완료 | 전체 cmm 전환 완료 |
| 테스트 인수인계 | 알앤비소프트에 테스트 환경/범위 인수인계 | 8월 중순 이후 테스트 시작 |
| **8월 누적** | **~600개 화면 (전체 완료)** + **cmm 63개 전환 완료** (제외 6개 외) | 전체의 100% |

#### 8월 우려 사항 및 리스크

| 우려 | 영향도 | 대응 방안 |
|------|--------|----------|
| **QC 모듈 복잡도 최고** (화면당 1,819라인, 최대 30,216라인) | 🔴 높음 | 전담 배정, QC 전용 보고서 화면은 별도 일정 확보 |
| DI 장비 연동 화면 — 하드웨어 의존 | 🔴 높음 | 로컬 에이전트 완성 후 DI 화면 전환, 에이전트 미완 시 Mock으로 진행 |
| 8월 말까지 600개 화면 100% 완료 압박 | 🔴 높음 | 7~8월 이월 화면 현황 주 단위 추적, 부족 시 9월 유지보수 기간에 잔여 전환 병행 |
| 외부 연동과 화면 전환 병행 시 리소스 분산 | 🟠 중간 | 외부 연동은 화면 전환과 독립적으로 진행 가능한 부분 우선 |
| **알앤비소프트 테스트 인수인계 시 개발 미완 화면 존재** | 🟠 중간 | 완료된 모듈부터 순차 인수인계, 테스트 우선순위 협의 |

---

### 4.6 9~11월: 유지보수 / 하자보수 (각 1 M/M, 1명)

> **역할**: 8월부터 **알앤비소프트**가 통합 테스트/UAT/안정화 테스트를 전담 진행.
> 아이비리더스(프론트엔드 개발)는 9~11월 동안 테스트에서 발견된 버그/이슈에 대한 **유지보수 및 하자보수**를 수행한다.
> 테스트 주도권은 알앤비소프트에 있으며, 아이비리더스는 이슈 리포트 수신 → 수정 → 배포의 반복 사이클로 대응한다.

#### 9월 작업 계획 (유지보수, 1 M/M)

| # | 작업 | 담당 | 기간 | 비고 |
|---|------|------|------|------|
| W9-1 | 알앤비소프트 테스트 이슈 수신 및 분류 | 담당자 | 전 기간 | Critical/Major/Minor 분류 |
| W9-2 | Critical/Major 버그 수정 및 패치 배포 | 담당자 | 전 기간 | 발견 즉시 수정, Staging 배포 |
| W9-3 | 8월 이월 전환/연동 마무리 (있을 경우) | 담당자 | 1주 | 미완료 항목 정리 |
| W9-4 | 공통 컴포넌트 회귀 테스트 | 담당자 | 수정 시 | 공통 수정 → 영향 범위 확인 |
| W9-5 | 성능 이슈 대응 (대용량 그리드, API 응답) | 담당자 | 발생 시 | 알앤비소프트 성능 테스트 결과 기반 |

#### 10월 작업 계획 (유지보수, 1 M/M)

| # | 작업 | 담당 | 기간 | 비고 |
|---|------|------|------|------|
| W10-1 | 알앤비소프트 테스트 이슈 지속 대응 | 담당자 | 전 기간 | UAT 단계 이슈 포함 |
| W10-2 | Major 이하 버그 수정 및 패치 배포 | 담당자 | 전 기간 | 우선순위별 대응 |
| W10-3 | UI/UX 개선 요청 대응 | 담당자 | 발생 시 | 테스트 피드백 반영 |
| W10-4 | 다국어 라벨 데이터 연동 확인 (알앤비소프트 백엔드) | 담당자 | 0.5주 | 백엔드 다국어 API 연동 점검 |

#### 11월 작업 계획 (하자보수 + 운영 전환 지원, 1 M/M)

| # | 작업 | 담당 | 기간 | 비고 |
|---|------|------|------|------|
| W11-1 | 잔여 이슈 수정 마무리 | 담당자 | 1주 | Minor 이슈 정리 |
| W11-2 | 운영 환경 배포 지원 | 담당자 | 0.5주 | 환경 설정, 최종 빌드 |
| W11-3 | 운영 전환 기간 긴급 대응 | 담당자 | 2주 | 운영 중 발생 이슈 즉시 대응 |
| W11-4 | 운영 가이드 문서 및 인수인계 | 담당자 | 1주 | 유지보수 가이드, 코드 설명서 |
| W11-5 | 하자보수 기간 종료 확인 | 담당자 | - | 잔여 이슈 현황 정리 |

#### 9~11월 우려 사항 및 리스크

| 우려 | 영향도 | 대응 방안 |
|------|--------|----------|
| 알앤비소프트 테스트에서 대량 이슈 발생 시 1명 대응 한계 | 🔴 높음 | Critical은 즉시 대응, Major 이하는 우선순위 조정. 필요 시 5~8월 투입 인력 단기 재투입 협의 |
| 공통 컴포넌트(cmmlib/cmm) 수정 시 광범위 회귀 발생 | 🟠 중간 | 공통 수정 전 영향 범위 분석 필수, 수정 후 관련 화면 스모크 테스트 |
| 알앤비소프트와의 이슈 커뮤니케이션 지연 | 🟠 중간 | 이슈 트래커(Jira/Redmine 등) 활용, 일일/주간 이슈 현황 공유 |
| 8월 전환 미완료분 이월로 유지보수와 개발 병행 | 🟠 중간 | 9월 첫 주에 이월분 집중 마무리, 이후 유지보수 전념 |

---

## 5. 화면 전환 속도 분석 (21 M/M로 600개 화면 + cmmlib/cmm 전환)

### 5.1 가용 전환 공수 계산

| 구간 | M/M | 공통/인프라 (cmmlib + cmm 포함) | 실제 화면 전환 가용 | 비고 |
|------|-----|-------------------------------|-----------------|------|
| 4월 (2 M/M) | 2 | **2 M/M** (cmmlib 15개 + cmm 필수 39개 + 프로젝트 설정) | **0** | 공통 전용 — cmmlib/cmm 전환이 핵심 |
| 5월 (4 M/M) | 4 | 1.5 M/M (파일럿 + cmmlib/cmm 보완 + cmm 후순위 3개) | **2.5 M/M** | 파일럿 + RC 전환 |
| 6월 (4 M/M) | 4 | 0.5 M/M (에디터/차트 + cmm 후순위) | **3.5 M/M** | 본격 전환 |
| 7월 (4 M/M) | 4 | 0.5 M/M (장비 에이전트 PoC + cmm 이미지뷰어/하드웨어) | **3.5 M/M** | DT/LM 대규모 |
| 8월 (4 M/M) | 4 | 0.5 M/M (외부연동 + cmm 하드웨어 잔여) | **3.5 M/M** | 전환 마무리 |
| **합계** | **18** | **5 M/M** | **13 M/M** | |

### 5.2 전환 속도 요구치

- **가용 전환 공수**: 13 M/M = 약 **260 M/D** (1 M/M = 20 M/D)
- **전환 대상**: ~600개 업무 화면 (cmm 컴포넌트는 4월 공통에서 별도 처리)
- **화면당 평균 공수**: 260 ÷ 600 = **0.43 M/D/화면**
- 복잡도별 보정:
  - 단순 화면 (76%, ~456개): **0.3일/화면** — Claude Code 활용 시 실현 가능
  - 보통 화면 (21%, ~126개): **0.7일/화면** — 반나절 자동 + 반나절 수동 보정
  - 복잡 화면 (3%, ~18개): **2일/화면** — 전담 수동 전환
- 보정 후 총 공수: (456×0.3) + (126×0.7) + (18×2) = 136.8 + 88.2 + 36 = **261 M/D** ≈ 260 M/D (타이트하나 실현 가능)

### 5.3 핵심 전제 조건

> ⚠️ 위 산출은 다음 조건이 충족되어야 달성 가능합니다:

1. **Claude Code 자동 변환 도구가 단순 화면 70%+ 자동 생성** — 5월 파일럿에서 반드시 검증
2. **4월 cmmlib(15개 xjs) + cmm 필수(39개 xfdl) 전환이 일정 내 완성** — 5월부터 즉시 화면 전환 가능한 상태. cmmlib/cmm 미완 시 5월 화면 전환 착수 불가
3. **화면 600개가 실제로 확정** — 더 늘어날 경우 일정 재산정 필요
4. **4월 투입 2명이 처음부터 끝까지 유지** — 핵심 인력 이탈 시 치명적
5. **백엔드 API가 변경 없이 그대로 사용 가능** — API 스펙 변경 시 추가 공수 발생
6. **알앤비소프트가 8월부터 테스트를 정상 수행** — 테스트 인수인계가 원활해야 9~11월 유지보수 체제 안정
7. **cmm 미사용 파일이 빠르게 식별됨** — 4월 1주차에 현업 확인하여 불필요한 전환 공수 절감

---

## 6. 프로젝트 전체 타임라인 (간트 차트)

```
2026    4월         5월         6월         7월         8월         9월     10월     11월
        |-----------|-----------|-----------|-----------|-----------|-------|-------|-------|
인원:    2명         4명         4명         4명         4명         1명     1명     1명
M/M:    2           4           4           4           4           1       1       1

cmmlib   ████████████
전환      [W1:Util]
         [W2:DataObject,Transaction,Dataset,I18n]
         [W3:Frame,Grid,Excel,Message]
         [W4:Popup,Validation,Comp,Print,File]

cmm              ██████████
컴포넌트          [W3:Alert7,Paging3,GridUtil3,Calendar착수]
전환              [W4:Calendar완료,Search6,File3,기타7]
                                   ░░░░░░░░░░░░████████████  (후순위/하드웨어)
                                   [5~6월:다국어,이미지] [7~8월:TTS,바코드,프린터]

공통개발 ████████████
         [아키텍처/CI-CD]
         [API/인증/상태]
         [IBSheet8/IBChart PoC]
         [i18n슬롯]

파일럿              ████
                   [OP 8개 + cmm 실전검증]

화면전환            ░░░░████████████████████████████████████
         5월:~24개  6월:~150개  7월:~254개  8월:~172개
         RC         SL,LA,BL    DT,LM       DT잔여,QC
                    RM,IM                    DI

외부연동                                    ░░░░████████████
                                           [장비에이전트]
                                           [TTS/리포트]

알앤비소프트                                         ████████████████████████████████
(테스트)                                            [통합테스트] [UAT]    [안정화]

아이비리더스                                                  ████████████████████████
유지보수                                                    [하자보수]  [하자보수] [운영지원]
(9~11월)                                                    이슈대응    이슈대응   인수인계
```

---

## 7. AI 기반 화면 변환 자동화 프로세스

> 21 M/M로 ~600개 화면을 8개월 내 전환하려면 **AI 자동화**가 필수이다.
> Claude Code + Sub-Agent + Playwright를 결합한 **6단계 자동화 파이프라인**으로 화면당 전환 공수를 최소화한다.
> 이 프로세스는 5월 파일럿에서 검증 후, 6~8월 대량 전환 시 본격 적용한다.

### 7.1 전체 프로세스 흐름

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ ① 현황   │    │ ② 전환   │    │ ③ 코드   │    │ ④ 자동   │    │ ⑤ AI    │    │ ⑥ 사용자│
│ 수집/분석│───>│ 표준 정의│───>│ 자동 변환│───>│ 테스트  │───>│ 보정    │───>│ 테스트  │
│          │    │          │    │          │    │          │    │          │    │          │
│ Nexacro  │    │ React 기반│    │ Claude   │    │Playwright│    │ AI Agent │    │ 사용자  │
│ 소스 파싱│    │ 공통 설정 │    │ Code +   │    │ E2E 자동 │    │ 자동 보정│    │ 테스트/ │
│          │    │ + Skill  │    │ AI Agent │    │ 검증     │    │ 반복 수렴│    │ 확인    │
└──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
```

### 7.2 단계별 상세

#### ① 현황 수집/분석 (XFDL 소스 파싱)

| 항목 | 내용 |
|------|------|
| **입력** | 원본 XFDL 파일 (XML + 인라인 JavaScript) |
| **도구** | Claude Code 내장 Read/Grep 도구 |
| **산출물** | 화면별 분석 MD 파일 |

**파싱 대상:**
- 화면 구성요소: Static, Button, Edit, Combo, Grid, Tab 등 컴포넌트 목록 및 속성
- 이벤트 핸들러: onclick, onload, oncolumnchanged 등 이벤트-함수 매핑
- Dataset 정의: 컬럼 스키마, 초기 데이터, 이벤트 바인딩
- SVC 정의: svcId, url(METHOD::GROUP::PATH), inDs, outDs 매핑
- 서비스 호출 목록: gfn_dsRequestSync/Async 호출 건수 및 콜백 함수
- 팝업 호출: gfn_openPopup 호출 대상 및 인자
- 공통 라이브러리 참조: cmmlib 함수, 모듈별 공통(dt_comm 등) 함수 사용 현황

**산출물 예시 (화면별 분석 MD):**
```markdown
# UIBL0360M (접수가격 변경)
## 컴포넌트: Button 8개, Grid 1개, Edit 3개, Combo 2개, Calendar 1개
## Dataset: ds_search, ds_rcptList(useclientlayout), ds_pagination, ds_result
## SVC:
  - searchRcpt: GET::bl::rcpt/selectRcptAmtList (inDs: ds_search, outDs: ds_rcptList=result)
  - save: POST::bl::rcpt/applyRcptAmt (inDs: ds_rcptList:U, outDs: ds_result=result)
## 이벤트: onclick 8건, oncolumnchanged 1건 (dcRate→realAmt 자동 계산)
## 팝업 호출: cmmCustPopup (거래처 검색)
## 난이도: 보통 (Grid 편집 + 계산 로직)
```

#### ② 전환 표준 정의 (Skill + 변환 규칙)

| 항목 | 내용 |
|------|------|
| **입력** | 분석 결과 + 공통 전환 가이드 (CLAUDE.md) |
| **도구** | Claude Code CLAUDE.md 프로젝트 설정 |
| **산출물** | 화면별 변환 지시서 (프롬프트) |

**CLAUDE.md에 정의하는 전환 규칙:**
- Nexacro 컴포넌트 → React 컴포넌트 매핑 테이블
- Dataset → NxDataset 클래스 사용 패턴
- SVC 정의 → useNxQuery/useNxMutation Hook 패턴
- Grid → IBSheet8 useIBSheet Hook 패턴
- 이벤트 핸들러 → React 이벤트/useEffect 매핑
- 팝업 → useModal Hook 패턴
- 공통 함수(gfn_*) → React Hook/유틸 매핑

**변환 규칙 예시:**
```
Nexacro Static      → <label> 또는 <span>
Nexacro Button      → <Button onClick={...}>
Nexacro Edit        → <input> (React Hook Form 연동)
Nexacro Combo       → <CommonCodeSelect> (공통코드 연동)
Nexacro Calendar    → <DateRangePicker> (cmm 전환 컴포넌트)
Nexacro Grid        → <IBSheetGrid dataset={ds} config={...}>
Nexacro Dataset     → useNxDataset<T>({ id, columns, events })
gfn_dsRequestAsync  → useNxQuery(SVC, datasetMap)
gfn_dsRequestSync   → useNxMutation(SVC, datasetMap)
gfn_message         → useMessage().showMessage()
gfn_openPopup       → useModal().open(<Component>)
```

#### ③ AI 기반 코드 자동 변환

| 항목 | 내용 |
|------|------|
| **입력** | 원본 XFDL + 분석 MD + CLAUDE.md 변환 규칙 |
| **도구** | Claude Code (AI Agent) |
| **산출물** | React TSX 컴포넌트 + Hook + 타입 정의 |

**변환 프로세스:**
1. Claude Code에 원본 XFDL 파일과 분석 MD를 제공
2. CLAUDE.md의 변환 규칙에 따라 AI Agent가 React 코드 자동 생성
3. 생성되는 파일:
   - `pages/{Module}/{ScreenId}.tsx` — 페이지 컴포넌트
   - `pages/{Module}/{ScreenId}.types.ts` — TypeScript 인터페이스 (Dataset 컬럼 → 타입)
   - `pages/{Module}/{ScreenId}.hooks.ts` — 화면 전용 API Hook (SVC → useNxQuery/useNxMutation)

**Sub-Agent 활용 (누락 검증):**
- 변환 완료 후 별도 Sub-Agent가 원본 XFDL과 변환 결과를 비교
- 누락된 컴포넌트, 미변환 이벤트, 미매핑 Dataset, 미연결 API 자동 감지
- 누락 항목 리스트 생성 → AI Agent가 자동 보완

#### ④ 자동 테스트 (Playwright E2E)

| 항목 | 내용 |
|------|------|
| **입력** | 변환된 React 코드 (로컬 dev 서버 실행 상태) |
| **도구** | Playwright MCP (Sub-Agent) |
| **산출물** | 테스트 결과 리포트 + 스크린샷 |

**자동 테스트 항목:**
- 화면 렌더링 정상 여부 (레이아웃 깨짐, 컴포넌트 누락 감지)
- IBSheet8 그리드 데이터 로딩 확인
- 주요 시나리오 E2E: 조회 버튼 클릭 → API 호출 → 그리드 데이터 표시
- CRUD 동작: 행 추가 → 셀 편집 → 저장 → 결과 확인
- 팝업 열기/닫기 동작 확인
- 유효성 검증 동작 확인
- 스크린샷 캡처 → 시각적 이상 여부 판단

#### ⑤ AI 자동 보정 (반복 수렴)

| 항목 | 내용 |
|------|------|
| **입력** | 테스트 실패 리포트 + 스크린샷 |
| **도구** | Claude Code (AI Agent) |
| **산출물** | 보정된 React 코드 |

**보정 프로세스:**
1. ④단계 테스트에서 발견된 이슈를 AI Agent에게 피드백
2. AI Agent가 코드를 자동 수정 (레이아웃 조정, 누락 이벤트 추가, API 매핑 수정 등)
3. 수정 후 ④단계 테스트 재실행 → 통과할 때까지 반복
4. **최대 3회 반복** 후에도 미해결 시 개발자가 수동 개입

```
[③ 변환] → [④ 테스트] → 실패 → [⑤ 보정] → [④ 재테스트] → 실패 → [⑤ 재보정] → ... → 통과 ✅
                         ↓
                        통과 → [⑥ 사용자 테스트]
```

#### ⑥ 사용자 테스트 / 확인

| 항목 | 내용 |
|------|------|
| **입력** | 자동 테스트 통과된 React 화면 |
| **도구** | 브라우저 (수동) |
| **산출물** | 최종 승인 또는 피드백 |

**사용자 확인 항목:**
- 변환된 화면이 기존 Nexacro 화면과 동일하게 동작하는지 비교
- 업무 시나리오별 기능 정상 동작 확인
- 테스터(알앤비소프트) 피드백 → 수정 필요 시 AI Agent에 피드백 → ⑤ 보정 재실행

### 7.3 단계별 자동화율 및 소요 시간 (목표)

| 단계 | 자동화율 | 단순 화면 소요 | 보통 화면 소요 | 복잡 화면 소요 |
|------|---------|-------------|-------------|-------------|
| ① 분석 | **90%** (자동 파싱) | 5분 | 10분 | 20분 |
| ② 표준 정의 | **100%** (CLAUDE.md 사전 정의) | 0분 | 0분 | 0분 |
| ③ 코드 변환 | **70~80%** (AI 생성) | 10분 | 30분 | 2시간 |
| ④ 자동 테스트 | **80%** (Playwright) | 5분 | 10분 | 20분 |
| ⑤ AI 보정 | **50~60%** (자동 수정) | 5분 | 20분 | 1시간 |
| ⑥ 사용자 확인 | **0%** (수동) | 10분 | 20분 | 1시간 |
| **전체** | **~70%** | **~35분 (0.3일)** | **~1.5시간 (0.7일)** | **~4.5시간 (2일)** |

> 자동화율 70%는 5월 파일럿에서 검증할 목표치이며, 미달 시 인력 추가 또는 일정 재조정 필요.

### 7.4 자동화 파이프라인 구축 일정

| 시기 | 작업 | 비고 |
|------|------|------|
| **4월 W4** | CLAUDE.md 전환 규칙 작성 + 변환 프롬프트 초안 | ②단계 완성 |
| **5월 W1~2** | 파일럿(OP 8개) — 6단계 전 과정 수동 실행으로 검증 | 자동화율 실측 |
| **5월 W2** | 파일럿 결과 기반 프롬프트/규칙 개선 | 피드백 반영 |
| **5월 W3~4** | RC 모듈(16개) — 개선된 파이프라인으로 전환 | 속도 실측 |
| **6월~** | 본격 적용 — 화면 유형별 프롬프트 템플릿 운용 | 월 150~250개 전환 |

### 7.5 MCP/도구 활용 맵

| 단계 | 사용 MCP/도구 | 역할 |
|------|-------------|------|
| ① 분석 | Claude Code 내장 (Read, Grep, Glob) | XFDL 파싱, 컴포넌트/이벤트/SVC 추출 |
| ② 표준 | CLAUDE.md + Context7 MCP | 변환 규칙 정의, 라이브러리 API 참조 |
| ③ 변환 | Claude Code (AI Agent) + Sequential Thinking MCP | 복잡 로직 단계적 변환 |
| ④ 테스트 | Playwright MCP (Sub-Agent) | 브라우저 렌더링 검증, E2E 시나리오 자동 실행 |
| ⑤ 보정 | Claude Code (AI Agent) | 테스트 실패 피드백 기반 코드 자동 수정 |
| ⑥ 확인 | 브라우저 (수동) / Firecrawl MCP (문서 참조) | 사용자 최종 확인 |

---

## 8. 전체 리스크 매트릭스

### 8.1 Critical 리스크 (프로젝트 실패 가능성)

| # | 리스크 | 발생 확률 | 영향 | 대응 방안 |
|---|--------|----------|------|----------|
| R1 | **알앤비소프트 테스트에서 대량 이슈 발생 시 1명 유지보수 대응 한계** | 중간 | 높음 | Critical 즉시 대응, Major 이하 우선순위 조정, 필요 시 5~8월 인력 단기 재투입 |
| R2 | **DT 모듈 265개 화면 2개월 내 전환 불가** | 중간 | 높음 | 7~8월 DT 집중 배치, Claude Code 자동화율 극대화, 일부 화면 스코프 아웃 |
| R3 | **핵심 인력 이탈** | 낮음 | 치명적 | 전환 가이드/코드 표준화로 지식 분산, 백업 인력 사전 확보 |
| R4 | **IBSheet8/IBChart React 래퍼 개발 난이도** | 중간 | 높음 | 4월 1주차 즉시 PoC, 벤더 기술 지원 계약 |

### 8.2 High 리스크

| # | 리스크 | 발생 확률 | 영향 | 대응 방안 |
|---|--------|----------|------|----------|
| R5 | QC 모듈 복잡도 과소평가 (최대 30,216라인 화면) | 중간 | 높음 | QC 복잡 화면 별도 일정 버퍼, 전담 배정 |
| R6 | DLL 장비 연동 웹 전환 실패 | 중간 | 높음 | WebSocket 로컬 에이전트 PoC 7월 조기 착수, 실패 시 별도 에이전트 앱 |
| R7 | 화면 600개 초과 확정 | 중간 | 높음 | 4월 중순 확정 즉시 일정 재산정, 700개 이상 시 인력 추가 또는 기간 연장 요청 |
| R8 | 5~8월 4명이 월 150~200개 화면 전환 속도 미달 | 중간 | 높음 | Claude Code 자동화율 모니터링, 주간 속도 추적, 지연 시 즉시 에스컬레이션 |

### 8.3 Medium 리스크

| # | 리스크 | 발생 확률 | 영향 | 대응 방안 |
|---|--------|----------|------|----------|
| R9 | DEXT5Editor → TipTap 대체 시 기능 갭 | 중간 | 중간 | 사용 기능 범위 분석 후 TipTap 확장으로 대응, 불가 시 Quill 검토 |
| R10 | MYSUIT 리포트 React 연동 방식 불확실 | 중간 | 중간 | MYSUIT 벤더와 4월 초 연동 방식 확정 |
| R11 | 알앤비소프트 백엔드 다국어 작업 지연 | 낮음 | 중간 | 프론트엔드는 라벨 슬롯만 준비하므로 영향 최소화, 연동 테스트만 지연 |
| R12 | 공통코드 Combo의 다국어 대응 (백엔드 의존) | 중간 | 중간 | 프론트엔드는 locale별 코드명 표시 구조만 준비, 백엔드 API 스펙 사전 협의 |

---

## 9. 주요 마일스톤 및 체크포인트

| 날짜 | 마일스톤 | 완료 기준 | 의사결정 포인트 |
|------|---------|----------|---------------|
| **04/04** | IBSheet8 + IBChart PoC 완료 | React에서 기본 그리드/차트 렌더링 성공 | 벤더 래퍼 문제 시 대안 검토 |
| **04/15** | 전환 대상 화면 ~600개 확정 | 모듈별 화면 목록 확정 | 600개 초과 시 인력/일정 재협의 |
| **04/25** | 공통 개발 완료 | API, 인증, 레이아웃, 공통 컴포넌트 동작 | 미완 시 5월 초 보완 일정 확보 |
| **05/09** | 파일럿(OP) 완료 | 8개 화면 전환 + 가이드 확정 | 전환 속도 실측 → 전체 일정 보정 |
| **05/30** | 1차 전환 완료 (RC, cmm) | ~48개 화면 전환 | 속도 미달 시 5~8월 계획 재조정 |
| **06/30** | 중규모 모듈 전환 완료 | ~198개 화면 누적 (33%) | 목표 대비 진도 점검 |
| **07/31** | 대규모 모듈 착수 중간 점검 | ~398개 화면 누적 (65%) | DT 잔여+QC+DI 일정 현실성 판단 |
| **08/15** | **알앤비소프트 테스트 인수인계 완료** | 테스트 환경/범위/절차 전달 | 인수인계 누락 시 테스트 지연 |
| **08/31** | **전체 화면 전환 완료** | **~600개 화면 100%** | 미완 시 9월 유지보수 기간에 잔여 전환 병행 |
| **09/30** | 유지보수 1차 — 알앤비소프트 통합 테스트 이슈 대응 | Critical 이슈 처리 완료 | 이슈량 과다 시 추가 인력 투입 판단 |
| **10/31** | 유지보수 2차 — UAT 이슈 대응 | Major 이슈 처리 완료 | 잔여 이슈 현황 점검 |
| **11/30** | 하자보수 완료 + 운영 전환 지원 | 인수인계 문서 완료 | 안정화 확인, 하자보수 종료 |

---

## 10. 전환 전 필수 확인 체크리스트 (갱신)

### 10.1 4월 1주차까지 확인 필수 (Blocker)

- [ ] IBSheet8 라이선스 확보 및 React 환경 지원 확인
- [ ] IBChart 라이선스 확보 및 React 환경 연동 방식 확인
- [ ] MYSUIT 리포트 React 환경 연동 방식 확인 (iframe? API? SDK?)
- [ ] 백엔드 API 변경 없이 프론트엔드만 전환 가능 여부 확인
- [ ] 백엔드 API 스펙 문서 (Swagger/OpenAPI) 존재 여부 확인
- [ ] 개발/스테이징 환경 접근 권한 확보
- [ ] Git 저장소 및 CI/CD 환경 준비

### 10.2 4월 중순까지 확인 필수

- [ ] 전환 대상 화면 ~600개 최종 확정 (모듈별 목록)
- [ ] Nexacro 소스 코드 변경 동결 시점 합의
- [ ] 다국어 라벨 구조 협의 (알앤비소프트 백엔드 팀과)
- [ ] 알앤비소프트 테스트 인수인계 일정 협의 (8월 중순 목표)
- [ ] 알앤비소프트와 이슈 트래커/커뮤니케이션 채널 확정

### 10.3 기술 검증 (PoC) — 4월 내 완료

- [ ] IBSheet8 + React: 그리드 CRUD, 엑셀 Export/Import, 멀티 헤더
- [ ] IBChart + React: 기본 차트 유형 (Line, Bar, Pie) 렌더링
- [ ] MYSUIT + React: 리포트 뷰어 호출 연동
- [ ] MDI 탭 화면 관리: 탭 열기/닫기/전환 + 화면 상태 유지
- [ ] Claude Code 자동 변환: XFDL → React 코드 생성 정확도 측정

---

## 11. 결론 및 핵심 권장 사항

### 11.1 프로젝트 요약 (갱신)

| 항목 | 값 |
|------|-----|
| 전환 대상 화면 | **~600개** (4월 중순 확정) |
| 상용 라이브러리 | **IBSheet8** (그리드) + **IBChart** (차트) + **MYSUIT** (리포트) |
| 오픈소스 스택 | React 18 + Vite + Tailwind CSS + Zustand + TanStack Query |
| 다국어 | **라벨 슬롯 준비만** (react-i18next), RTL 불필요 |
| 개발 기간 | **4월~11월 (8개월)** |
| 총 투입 인력 | **21 M/M** |
| 화면당 평균 전환 공수 | **~0.45 M/D** (Claude Code 활용 시) |

### 11.2 핵심 권장 사항

1. **4월 공통 개발에 집중 투자**: 2명이 4주 안에 프로젝트 기반을 완성해야 5월부터 4명이 즉시 화면 전환 가능. IBSheet8/IBChart PoC를 1주차에 반드시 착수.

2. **Claude Code 자동 변환이 성패를 좌우**: 21 M/M로 600개 화면은 Claude Code 없이는 불가능. 5월 파일럿에서 자동화율 70%+ 달성 여부를 반드시 검증하고, 미달 시 즉시 인력 추가 요청.

3. **알앤비소프트 테스트 인수인계를 철저히**: 8월 중순 알앤비소프트에 테스트를 넘길 때, 테스트 환경 구축/배포 방법/모듈별 기능 범위/알려진 이슈 목록을 문서화하여 전달. 인수인계 부실 시 불필요한 이슈 리포트가 증가하여 9~11월 유지보수 부하 가중. **9~11월 이슈량이 1명 대응 한계를 초과할 경우 단기 재투입 필요**.

4. **DT 모듈(~265개) 전략**: 전체의 44%를 차지하는 DT 모듈은 7~8월 2개월에 집중 투입. dt_comm 등 DT 전용 공통을 먼저 전환해야 화면 전환 속도 확보.

5. **주간 진도 추적 필수**: 5~8월 화면 전환 속도를 주 단위로 추적하고, 목표 대비 80% 미만 시 즉시 원인 분석 및 대응. 지연은 초기에 잡아야 후반 부담 방지.

6. **DEXT5Editor → TipTap 전환 검토**: 84개 화면에서 사용하는 웹 에디터를 TipTap으로 대체 시, 실제 사용 기능 범위를 먼저 분석하여 TipTap으로 커버 가능한지 4월에 확인 필요.

7. **DLL 장비 연동은 별도 트랙**: 바코드 프린터, 시리얼 리더 등 DLL 기반 연동은 웹 전환 시 가장 불확실한 영역. 7월 PoC, 8월 개발로 일정 확보. WebSocket + 로컬 에이전트(Electron 경량) 접근 권장.

---

*본 WBS는 회의 결과(2026-03-28 기준)를 반영하여 작성되었으며, 4월 중순 화면 목록 확정 후 재조정이 필요합니다.*
