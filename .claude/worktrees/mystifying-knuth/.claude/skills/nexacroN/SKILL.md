---
name: nexacron
description: >
  NexacroN 애플리케이션 개발을 지원하는 skill.
  XFDL 폼 작성, 컴포넌트 배치, Dataset/Grid 조작, 서비스 트랜잭션 호출,
  이벤트 핸들링, 공통 라이브러리 패턴 등 NexacroN 개발 전반을 가이드한다.
  nexacro, tobesoft, xfdl, xjs, xcss, dataset, grid, transaction, form,
  combo, edit, button, div, static, calendar, checkbox, radio 키워드가
  포함된 요청 또는 NexacroN 프로젝트 컨텍스트에서 트리거된다.
  XFDL 파일을 생성하거나 수정할 때, Dataset이나 Grid를 다룰 때,
  서비스 호출 코드를 작성할 때, NexacroN 컴포넌트 사용법을 물어볼 때 사용한다.
---

# NexacroN Skill

NexacroN(Nexacro N) 엔터프라이즈 RIA 프레임워크 기반 애플리케이션 개발을 지원한다.
XFDL 폼 생성, 컴포넌트 사용, 데이터 바인딩, 서비스 호출, 이벤트 처리 등
실무에서 바로 사용할 수 있는 코드를 생성하고 가이드를 제공한다.

## 1. NexacroN 플랫폼 개요

NexacroN은 TOBESOFT에서 개발한 엔터프라이즈 RIA(Rich Internet Application) 프레임워크다.

- **화면 정의**: XFDL (eXtensible Form Definition Language) — XML 기반, FDL 2.1
- **스크립트**: XScript 5.1 (JavaScript 기반)
- **스타일**: XCSS (Nexacro CSS)
- **지원 플랫폼**: Web(브라우저), Windows NRE, Android, iOS, macOS
- **기준 버전**: v21.0.0.2000

핵심 구조:
```
Application (.xadl)
  └─ Form (.xfdl)
       ├─ Layouts     — 컴포넌트 배치 (좌표, 크기)
       ├─ Objects     — Dataset, 비시각 객체 선언
       ├─ Bind        — 컴포넌트 ↔ Dataset 바인딩
       └─ Script      — 이벤트 핸들러, 비즈니스 로직
```

## 2. 프로젝트 구조

```
프로젝트/
├── Application_Desktop.xadl   # 앱 정의 (프레임 구성, 전역 스크립트)
├── environment.xml            # 환경 설정 (테마, 스크린, 로케일)
├── typedefinition.xml         # 컴포넌트 모듈 정의
├── appvariables.xml           # 전역 Dataset/Variable
├── frame/                     # 프레임 (login, top, left, mdi)
├── BL/                        # 비즈니스 로직 (업무 화면)
├── DI/                        # 데이터 인터페이스
├── SL/                        # 서비스 레이어
├── cmmlib/                    # 공통 라이브러리 (.xjs)
├── _resource_/                # 이미지, 폰트, 테마, XCSS
└── service/                   # 서비스 연동
```

## 3. XFDL 폼 기본 구조

> **상세**: `references/xfdl-structure.md` 참조

XFDL 파일의 5개 섹션 순서와 역할:

```xml
<?xml version="1.0" encoding="utf-8"?>
<FDL version="2.1">
  <Form id="UIBL0100M" classname="UIBL0100M"
        left="0" top="0" width="1024" height="768" titletext="고객 목록 조회">

    <Layouts>  <!-- 1. 컴포넌트 배치 (좌표, 크기) -->
      <Layout>
        <Div id="div_search" left="0" top="0" width="100%" height="45">
          <Layouts><Layout>
            <Static id="sta_custNm" left="10" top="12" width="70" height="20" text="고객명"/>
            <Edit id="edt_custNm" left="80" top="10" width="150" height="24"/>
            <Button id="btn_search" left="240" top="8" width="70" height="28"
                    text="조회" onclick="div_search_btn_search_onclick"/>
          </Layout></Layouts>
        </Div>
        <Grid id="grd_list" left="0" top="45" width="100%" height="100%"
              binddataset="ds_list" autofittype="col"/>
      </Layout>
    </Layouts>

    <Objects>  <!-- 2. Dataset, 비시각 객체 -->
      <Dataset id="ds_search">
        <ColumnInfo>
          <Column id="custNm" type="STRING" size="256"/>
          <Column id="fromDt" type="STRING" size="8"/>
        </ColumnInfo>
        <Rows><Row/></Rows>
      </Dataset>
      <Dataset id="ds_list">
        <ColumnInfo>
          <Column id="custCd" type="STRING" size="256"/>
          <Column id="custNm" type="STRING" size="256"/>
        </ColumnInfo>
      </Dataset>
    </Objects>

    <Bind>  <!-- 3. 컴포넌트 ↔ Dataset 바인딩 -->
      <BindItem id="item0" compid="edt_custNm" propid="value"
                datasetid="ds_search" columnid="custNm"/>
    </Bind>

    <Script type="xscript5.1"><![CDATA[  /* 4. 이벤트 핸들러, 비즈니스 로직 */
include "SL::CMMN/sl_comm.xjs";

this.SVC_SEARCH = {svcId:"searchCustList", url:"GET::bl::cust/selectCustList",
    inDs:"ds_search", outDs:"ds_list=result"};

this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo) {
    this.gfn_formOnLoad(this);
    this.ds_search.setColumn(0, "fromDt", this.gfn_getDate());
    this.fn_search();
};
this.fn_search = function() { this.gfn_dsRequestAsync(this.SVC_SEARCH); };
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData) {
    if (nErrorCode < 0) return;
    switch (strSvcId) { case "searchCustList": break; }
};
this.div_search_btn_search_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo) {
    this.fn_search();
};
    ]]></Script>
  </Form>
</FDL>
```

> 완전한 조회/팝업 XFDL 템플릿은 `references/xfdl-structure.md` 참조

## 4. 컴포넌트 요약

> **상세**: `references/components.md` 참조

### 핵심 컴포넌트 (★★★)

| 컴포넌트 | 용도 | ID 접두사 | 핵심 이벤트 |
|----------|------|-----------|-------------|
| Button | 클릭 액션 | `btn_` | onclick |
| Edit | 텍스트 입력 | `edt_` | onchanged, onkeyup |
| Combo | 드롭다운 선택 | `cbo_` | onitemchanged |
| Static | 레이블 표시 | `sta_`/`stc_` | — |
| Div | 화면 영역 분할 | `div_` | — |
| Calendar | 날짜 입력 | `cal_` | onchanged |
| CheckBox | 체크 입력 | `chk_` | onchanged |
| Radio | 라디오 선택 | `rdo_` | onitemchanged |
| Grid | 데이터 격자 | `grd_` | oncellclick, onheadclick |
| Dataset | 데이터 관리 | `ds_` | oncolumnchanged, onrowposchanged |

### 자주 쓰는 컴포넌트 (★★☆)

| 컴포넌트 | 용도 | ID 접두사 |
|----------|------|-----------|
| Tab | 탭 컨테이너 | `tab_` |
| MaskEdit | 형식화 입력 (전화번호 등) | `msk_` |
| PopupDiv | 드롭다운 팝업 영역 | `pdv_` |
| GroupBox | 그룹 컨테이너 | `grp_` |
| TextArea | 여러 줄 텍스트 | `txa_` |

### 주요 컴포넌트 선언 예시

```xml
<Combo id="cbo_status" innerdatasetid="ds_statusCd" codecolumn="cd" datacolumn="cdNm"/>
<Calendar id="cal_fromDt" dateformat="yyyy-MM-dd"/>
<CheckBox id="chk_useYn" text="사용여부" truevalue="Y" falsevalue="N"/>
```

## 5. Dataset & 데이터 처리

> **상세**: `references/dataset-and-data.md` 참조

### Column 타입: `STRING`(기본), `INT`, `BIGDECIMAL`(금액), `DATE`, `BLOB`

### 핵심 API

```javascript
// 행 추가/삭제
var nRow = ds.addRow();
ds.insertRow(0);
ds.deleteRow(nRow);
ds.deleteMultiRows(ds.rowposition);

// 값 읽기/쓰기
var val = ds.getColumn(nRow, "custNm");
ds.setColumn(nRow, "custNm", "홍길동");

// 검색
var nIdx = ds.findRow("custCd", "C001");
var nIdx = ds.findRowExpr("custNm == '홍길동' && amt > 10000");

// 필터
ds.filter("amt > 10000");
ds.filter("");  // 필터 해제

// 집계
var nSum = ds.getSum("amt");
var nAvg = ds.getAvg("amt");
var nCnt = ds.getCount("amt");

// 행 상태 (1=normal, 2=insert, 4=update)
var nType = ds.getRowType(nRow);
var nDelCnt = ds.getDeletedRowCount();
```

### 변경 감지 & 이벤트 제어

```javascript
this.gfn_dsIsUpdated(ds);       // 추가/수정/삭제 행 있으면 true
ds.set_enableevent(false);      // 대량 조작 전 이벤트 끄기
// ... 대량 setColumn ...
ds.set_enableevent(true);       // 완료 후 이벤트 켜기
```

## 6. Grid

> **상세**: `references/grid-guide.md` 참조

### Grid 기본 구조

```xml
<Grid id="grd_list" binddataset="ds_list" autofittype="col">
  <Formats>
    <Format id="default">
      <Columns>
        <Column size="30"/>
        <Column size="120"/>
        <Column size="80"/>
      </Columns>
      <Rows>
        <Row size="24" band="head"/>
        <Row size="30"/>
        <Row size="24" band="summary"/>
      </Rows>
      <Band id="head">
        <Cell text="No"/>
        <Cell col="1" text="고객명"/>
        <Cell col="2" text="금액"/>
      </Band>
      <Band id="body">
        <Cell text="expr:currow+1"/>
        <Cell col="1" text="bind:custNm"/>
        <Cell col="2" text="bind:amt" displaytype="number"
              maskeditformat="#,##0"/>
      </Band>
      <Band id="summary">
        <Cell text="합계" colspan="2"/>
        <Cell col="2" text="expr:dataset.getSum('amt')"
              displaytype="number" maskeditformat="#,##0"/>
      </Band>
    </Format>
  </Formats>
</Grid>
```

### Cell text 패턴

| 패턴 | 예시 | 설명 |
|------|------|------|
| 리터럴 | `text="고객명"` | 고정 문자열 |
| bind: | `text="bind:custNm"` | Dataset 컬럼 바인딩 |
| expr: | `text="expr:currow+1"` | 표현식 (행번호, 조건, 집계) |

### Cell displaytype / edittype

| displaytype | 용도 | edittype |
|-------------|------|----------|
| `normal` | 일반 텍스트 | `normal` |
| `number` | 숫자 (maskeditformat 적용) | `mask` |
| `date` | 날짜 | `date` |
| `combo` | 드롭다운 | `combo` |
| `checkbox` | 체크박스 | `checkbox` |
| `image` | 이미지 | — |
| `button` | 버튼 | `button` |

### 체크박스 전체선택

head 밴드 첫 셀을 체크박스로 설정하고 `onheadclick`에서 전체 행의 chk 컬럼 값을 토글한다.
`getCellProperty/setCellProperty`로 head 체크 상태를, `set_enableevent(false/true)`로 감싸서 대량 변경한다.
상세 코드는 `references/grid-guide.md` 섹션 10 참조.

## 7. 서비스 트랜잭션

> **상세**: `references/transaction-patterns.md` 참조

### SVC 객체 정의

```javascript
this.SVC_SEARCH = {svcId:"searchList", url:"GET::bl::cust/selectCustList",
    inDs:"ds_search", outDs:"ds_list=result ds_pagination=pagination"};
this.SVC_SAVE   = {svcId:"saveList", url:"POST::bl::cust/saveCustList",
    inDs:"ds_list:U", outDs:""};    // :U = 변경 행만 전송
this.SVC_DELETE  = {svcId:"deleteItem", url:"POST::bl::cust/deleteCust",
    inDs:"ds_search", outDs:""};
```

### URL 형식

```
METHOD::prefix::path
```
- METHOD: `GET`, `POST`
- prefix: 서비스 영역 코드 (`bl`, `di`, `sl` 등)
- path: Controller 경로

### 비동기/동기 호출

```javascript
// 비동기 (권장 — UI 블로킹 없음)
this.gfn_dsRequestAsync(this.SVC_SEARCH);

// 동기 (저장 후 연쇄 조회 등 순서 보장 필요 시)
this.gfn_dsRequestSync(this.SVC_SAVE);
```

### 콜백 패턴

```javascript
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData) {
    if (nErrorCode < 0) return;
    switch (strSvcId) {
        case "searchList": break;
        case "saveList":
            this.gfn_message({sMsgType:"A", sImgType:"I", arrArg:["저장되었습니다."]});
            this.fn_search();
            break;
    }
};
```

### 에러 코드: `0`=성공, `-10`=비즈니스, `-20`=SQL, `-30`=세션만료

### inDs 접미사: (없음)=전체행, `:U`=변경행만(저장용), `:A`=전체+상태포함

## 8. Form 생명주기 & 이벤트

> **상세**: `references/form-lifecycle.md` 참조

### form_onload 표준 패턴

```javascript
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    // 1. 공통 초기화
    this.gfn_formOnLoad(this);

    // 2. 기본값 설정
    var sToday = this.gfn_getDate();
    this.ds_search.setColumn(0, "fromDt", this.gfn_addMonth(sToday, -1));
    this.ds_search.setColumn(0, "toDt", sToday);

    // 3. 공통코드 로드
    this.fn_searchComCode();

    // 4. 초기 조회
    this.fn_search();
};
```

### 이벤트 핸들러 시그니처

```javascript
this.btn_search_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo) {};
this.div_search_btn_search_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo) {};  // Div 내부
this.ds_list_oncolumnchanged = function(obj:nexacro.NormalDataset, e:nexacro.DSColChangeEventInfo) {};
this.grd_list_oncellclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo) {};
this.edt_custNm_onkeyup = function(obj:nexacro.Edit, e:nexacro.KeyEventInfo) {
    if (e.keycode == 13) this.fn_search();  // Enter 검색
};
```

### 메시지 다이얼로그

```javascript
// Alert (알림)
this.gfn_message({
    sPopId  : "alertSave",
    sMsgType: "A",       // A=Alert
    sImgType: "I",       // I=Info, W=Warning, E=Error
    arrArg  : ["저장되었습니다."]
});

// Confirm (확인/취소)
var bResult = this.gfn_message({
    sPopId  : "confirmDelete",
    sMsgType: "C",       // C=Confirm
    sImgType: "Q",       // Q=Question
    arrArg  : ["삭제하시겠습니까?"]
});
if (!bResult) return;
```

### 팝업 폼

```javascript
// 팝업 열기
var oArg = {custCd: this.ds_list.getColumn(nRow, "custCd")};
var oOption = {title:"고객 상세", width:800, height:600};
this.gfn_openPopup("popCustDetail", "BL::CUST/UIBL0100P.xfdl", oArg, "", oOption);

// 팝업에서 파라미터 수신
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo) {
    var sCustCd = this.getOwnerFrame().args["custCd"];
};

// 팝업 닫기 + 반환값
this.close(this.getOwnerFrame().form, "SAVE_OK");
```

## 9. 코딩 규칙

> **상세**: `references/coding-conventions.md` 참조

### 파일 헤더: `@MenuPath`, `@FileName`, `@Creator`, `@CreateDate`, `@Desction`, 변경이력 테이블 포함

### 네이밍 규칙 요약

| 대상 | 패턴 | 예시 |
|------|------|------|
| 전역 함수 | `gfn_` | `gfn_getDate()` |
| 로컬 함수 | `fn_` | `fn_search()` |
| 콜백 | `fn_apiCallback` | `fn_apiCallback(svcId, errCode, data)` |
| 내부 전용 | `_gfn_` | `_gfn_validate()` |
| Form 파일 | `UI[모듈][번호][M/P/L]` | `UIBL0100M.xfdl` |
| 전역 변수 | `gv_` | `gv_langCode` |
| 전역 Dataset | `gds_` | `gds_userInfo` |

### 스크립트 섹션 순서

`Common Library` (include) → `Form Variables` (SVC 객체) → `Form Event` (onload 등) → `User Function` (fn_search, fn_apiCallback) → `Component Event` (onclick 등)

각 섹션은 `/****... 섹션명 ...****/` 주석으로 구분한다. 상세 형식은 `references/coding-conventions.md` 참조.

## 10. 공통 라이브러리

> **상세**: `references/common-library-patterns.md` 참조

cmmlib의 모든 함수는 `nexacro.Form.prototype`에 추가되어 `this.gfn_xxx()` 형태로 호출 가능하다.

### 주요 유틸리티 함수

```javascript
// 날짜
this.gfn_getDate();                    // "20250328" (오늘)
this.gfn_addDate("20250328", 7);       // "20250404" (+7일)
this.gfn_addMonth("20250328", -1);     // "20250228" (-1개월)
this.gfn_getDateFormat("20250328", "-"); // "2025-03-28"

// 문자열
this.gfn_trim(" abc ");               // "abc"
this.gfn_nvl(val, "");                // null → 기본값
this.gfn_lpad("5", 3, "0");           // "005"
this.gfn_isEmpty(val);                // true/false

// 숫자
this.gfn_appendComma("1234567");       // "1,234,567"
this.gfn_removeComma("1,234,567");     // "1234567"

// Null 검사
this.gfn_isNull(val);                 // undefined/null/"" → true
```

### Validation / Excel / 공통코드

```javascript
// 유효성 검사
this.gfn_setValidation(ds, [{colId:"custNm", valType:"require", msg:"필수"}]);
if (!this.gfn_validation(ds)) return;

// Excel 내보내기
this.gfn_excelExportTransfer(this.grd_list, "고객목록.xlsx");

// 공통코드 로드 → Combo innerdataset 바인딩
this.SVC_CMM_CD = {svcId:"searchCmmCd", url:"GET::cm::cmmn/selectCmmCdList",
    inDs:"ds_cmmCdSearch", outDs:"ds_statusCd=resultStatusCd"};
```

## 참고 문서
- 공식 메뉴얼: `./references/offical-manual/index.md`
- 컴포넌트 예제: `./references/component-samples/index.md` 

## 코드 생성 시 주의사항

XFDL 또는 XScript 코드를 생성할 때 반드시 지켜야 할 규칙:

1. **XFDL은 유효한 XML**: 모든 태그 닫힘, 속성값 인코딩 (`&amp;`, `&lt;`)
2. **Script는 CDATA**: `<Script type="xscript5.1"><![CDATA[ ... ]]></Script>`
3. **네이밍 규칙 준수**: 컴포넌트 ID 접두사, 함수 접두사, Dataset 접두사
4. **바인딩 정합성**: BindItem의 compid/datasetid/columnid가 실제 존재하는 ID와 일치
5. **Grid Cell 수 일치**: Columns 개수 × Rows 개수 = Band 내 Cell 개수
6. **이벤트 시그니처**: `obj:nexacro.[Type]`, `e:nexacro.[EventType]` 형식 준수
7. **SVC 객체 패턴**: svcId/url/inDs/outDs를 포함한 표준 구조 사용
8. **fn_apiCallback**: 모든 트랜잭션의 응답은 이 함수의 switch-case로 처리
9. **스크립트 섹션 구분**: Common Library → Form Variables → Form Event → User Function → Component Event
10. **set_enableevent**: 대량 데이터 조작 시 반드시 false → 작업 → true
