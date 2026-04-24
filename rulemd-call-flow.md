# Nexacro → React 변환 MD 파일 호출 흐름

전체 MD 가이드(skill) 생태계를 역할별로 한눈에 정리.

## 변환 작업 흐름도

```
[ 원본 XFDL 분석 ] → [ 변환 규칙 적용 ] → [ React 코드 생성 ] → [ 상용 라이브러리 연동 ]
   ↓                    ↓                    ↓                    ↓
 nexacroN +         nexacro-to-react      CLAUDE.md             ibsheet8 /
 nexacron-*         (마스터 플레이북)      (프로젝트 컨벤션)      ibchart
 (원본 API 레퍼)
```

## 핵심 MD 파일 3계층

### 🟢 Layer 1 — 프로젝트 규범 (루트)

| 파일 | 역할 | 트리거 |
|---|---|---|
| `CLAUDE.md` | 프로젝트 전체 컨벤션, 디렉토리, 기술 스택, NxDataset 사용 예 | 항상 로드 |
| `CLAUDE.local.md` | 원본 Nexacro 소스 경로(`C:\workspace\seegene-mf-lis-nexacro-master`), 사용자 정보 | 항상 로드 |

### 🔴 Layer 2 — 변환 마스터 플레이북

| 파일 | 역할 |
|---|---|
| **`.claude/skills/nexacro-to-react/SKILL.md`** | Nexacro → React 변환의 **메인 가이드**. 아래 12개 섹션으로 구성 |

**12개 섹션 흐름**

```
1.  Core Principles           — "원본에 있는 것만, 원본 그대로"
2.  File Path Rules           — XFDL → tsx 경로 매핑 규칙
3.  Pre-Conversion Tasks      — Layout/Dataset/Bind/Script 4단계 분석
4.  Absolutely Prohibited     — 금지 사항(초기화 버튼 추가 등)
5.  Common Mistakes           — 검색조건·버튼위치·Radio columncount 함정
6.  Component Conversion      — Nexacro ↔ React 컴포넌트 매핑표
7.  IBSheet8 Rules            — Grid → IBSheet8 사용법
8.  Nexacro Grid → IBSheet8   — edittype/displaytype 매핑표
9.  API / NxDataset Pattern   — SVC·Dataset·useNxQuery 변환
10. Function Mapping          — gfn_* → utils/hooks 매핑
11. Popup Conversion          — gfn_openPopup → useModal
12. Screen Layout Patterns    — 조회+그리드, 마스터-디테일, 탭+그리드, MDI
```

> 트리거: "변환", "전환", "convert", "xfdl" 등 키워드

### 🟡 Layer 3 — 원본 Nexacro API 레퍼런스 (분석 시 참조)

트리거 키워드가 포함된 요청에서만 해당 스킬이 로드됩니다.

**종합 가이드 1개**

| 스킬 | 내용 |
|---|---|
| `nexacroN` | XFDL 구조 / Dataset / Grid / 라이프사이클 / 트랜잭션 / 공통 라이브러리 / 코딩 컨벤션 (총 7,738줄, 8개 파일) |

**컴포넌트별 상세 API 19개** (`nexacron-*`)

```
데이터·통신
 ├─ nexacron-dataset          — Dataset/DataObject/ColumnInfo (Prop 26/Method 125/Event 7)
 ├─ nexacron-communication    — TCPClientSocket, XPush, NexacroAPI
 └─ nexacron-excel            — ExcelExport/Import

컨테이너·프레임
 ├─ nexacron-application      — Application, Environment, Screen
 ├─ nexacron-form             — Form 라이프사이클
 ├─ nexacron-frames           — MainFrame, ChildFrame, FrameSet*
 └─ nexacron-container        — Div, PopupDiv, Tab, View, GroupBox

입력·표시 컴포넌트
 ├─ nexacron-button-static    — Button, Static, ImageViewer, ProgressBar
 ├─ nexacron-edit             — Edit, MaskEdit, TextArea, Spin
 ├─ nexacron-combo            — Combo, MultiCombo, ListBox, CheckBox*, Radio
 ├─ nexacron-calendar         — Calendar
 ├─ nexacron-menu             — Menu, PopupMenu
 └─ nexacron-listview         — ListView

복합·시각화
 ├─ nexacron-grid             — Grid (Prop 129/Method 148/Event 52 — 최대)
 ├─ nexacron-graphics         — Graphics, Sketch
 └─ nexacron-web              — WebBrowser, WebView, GoogleMap, VideoPlayer

유틸리티
 ├─ nexacron-events           — EventObject, BindItem, System
 ├─ nexacron-script-objects   — Date, Decimal, DomParser, XmlSerializer
 ├─ nexacron-device           — Camera, Geolocation, BluetoothLE 등 20종
 └─ nexacron-file             — FileUpload/Download/Dialog/VirtualFile
```

각 스킬 폴더 구조:

```
nexacron-xxx/
├─ SKILL.md                   # 요약 + Property/Method/Event 목록
└─ references/
   ├─ XXX_properties.md       # 전체 속성
   ├─ XXX_methods.md          # 전체 메서드
   ├─ XXX_events.md           # 전체 이벤트
   ├─ XXX_summary.json        # 구조화 인덱스
   └─ sub_objects/            # 하위 객체 API
```

### 🔵 Layer 4 — 타겟 상용 라이브러리 가이드

| 스킬 | 내용 |
|---|---|
| `ibsheet8` | IBSheet8 공식 매뉴얼 + Cfg/Cols/Events, React/Vue 연동, **IBSheet7→8 마이그레이션 가이드** |
| `ibchart` | IBChart(Highcharts 기반) 옵션·데이터 로드·이벤트 |

## 실제 변환 작업 시 MD 로드 순서

```
사용자 "DT_1194M00 변환해줘"
        │
        ▼
① nexacro-to-react (자동 트리거)           ← 변환 규칙·금지사항 확인
        │
        ▼
② 원본 XFDL 파일 Read                      ← C:\workspace\seegene-mf-lis-nexacro-master
        │
        ▼
③ XFDL에 나타난 컴포넌트에 따라 서브스킬 로드
   - Dataset 사용 → nexacron-dataset
   - Grid → nexacron-grid + ibsheet8
   - Combo/Edit → nexacron-combo / nexacron-edit
   - gfn_* 호출 → nexacroN (common-library-patterns.md)
        │
        ▼
④ 변환 결과 tsx 생성 (CLAUDE.md 컨벤션 적용)
   - src/pages/{모듈}/{소분류}/{모듈}_{화면ID}.tsx
   - useNxDataset + useNxQuery 패턴
   - #/components/common 우선
```

## 요약 한 줄

`nexacro-to-react`(변환 규칙) → `nexacroN` + `nexacron-*`(원본 이해) → `CLAUDE.md`(타겟 컨벤션) → `ibsheet8`·`ibchart`(상용 라이브러리) — **"규칙 읽기 → 원본 해석 → 프로젝트 패턴으로 쓰기 → 상용 연동"** 4단 계층.
