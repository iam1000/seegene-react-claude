# 코딩 규칙 레퍼런스

## 목차

- [1. 파일 네이밍 규칙](#1-파일-네이밍-규칙)
- [2. 파일 헤더 주석 템플릿](#2-파일-헤더-주석-템플릿)
- [3. 함수 JSDoc 주석 형식](#3-함수-jsdoc-주석-형식)
- [4. 코드 섹션 구분 주석](#4-코드-섹션-구분-주석)
- [5. 네이밍 규칙 전체 표](#5-네이밍-규칙-전체-표)
  - 함수 접두사 (fn_, fn_[action]Callback, gfn_, _gfn_, slfn_)
  - 컴포넌트 ID 접두사 (btn_, edt_, sta_/stc_, grd_, ...)
  - Dataset 패턴 (ds_, gds_)
  - 전역 변수 (gv_, gds_, Form 멤버변수)
- [6. 변수 선언 규칙](#6-변수-선언-규칙)
- [7. 트랜잭션 객체 선언 패턴](#7-트랜잭션-객체-선언-패턴)
- [8. 함수 분류 및 구성 규칙](#8-함수-분류-및-구성-규칙)
- [9. 이벤트 핸들러 네이밍 패턴](#9-이벤트-핸들러-네이밍-패턴)
- [10. 공통 함수 (gfn_) 사용 규칙](#10-공통-함수-gfn_-사용-규칙)
- [11. 모듈 코드 체계](#11-모듈-코드-체계)

---

## 1. 파일 네이밍 규칙

### XFDL 파일

```
UI[모듈코드][4자리번호][타입].xfdl
```

| 타입 | 의미 | 예시 |
|------|------|------|
| `M` | Main — 조회/목록/편집 메인 화면 | `UIBL0360M.xfdl` |
| `P` | Popup — 팝업 화면 | `UIBL0690P.xfdl` |
| `L` | List — 독립적인 목록 화면 | `UIBL0100L.xfdl` |

> 번호는 4자리. 예: `0360`, `0690`

### XJS 파일 (공통 라이브러리)

```
[기능명].xjs       // cmmlib 디렉토리: 공통 라이브러리
sl_[기능명].xjs    // SL::CMMN: 시스템 레벨 공통 스크립트
```

예시:
```
cmmlib/Transaction.xjs
cmmlib/Util.xjs
cmmlib/Popup.xjs
cmmlib/Validation.xjs
cmmlib/Dataset.xjs
cmmlib/Grid.xjs
SL::CMMN/sl_comm.xjs
SL::CMMN/sl_stepComp.xjs
```

### 디렉토리 구조

```
[프로젝트]/
  BL/                       // Business Layer 화면 (모듈별 서브디렉토리)
    BILL/                   // 청구 모듈
      UIBL0360M.xfdl
      UIBL0690P.xfdl
    00sample/               // 개발 샘플
      sample00.xfdl
  cmmlib/                   // 공통 라이브러리 XJS
  SL/                       // 시스템 레벨 공통
    CMMN/
      sl_comm.xjs
```

---

## 2. 파일 헤더 주석 템플릿

### XFDL Script 섹션 헤더

XFDL 파일의 `<Script>` 섹션 최상단에 작성한다.

```javascript
/**
*  [화면 제목]
*  @MenuPath    [모듈명] > [서브모듈명]
*  @FileName    UI[모듈코드][번호][타입].xfdl
*  @Creator     [작성자 이름 또는 ID]
*  @CreateDate  YYYY.MM.DD
*  @Desction    [화면 기능 설명]
************** 소스 수정 이력 *************************************************************
*  date                 Modifier                Description
*******************************************************************************************
*  YYYY.MM.DD           [작성자명]              최초 생성
*******************************************************************************************
*/
```

실무 예시 (UIBL0370M.xfdl):
```javascript
/**
*  실제가재처리
*  @MenuPath    BL > BILL
*  @FileName    UIBL0370M.xfdl
*  @Creator     yhkim
*  @CreateDate  2023.10.12
*  @Desction
************** 소스 수정 이력 *************************************************************
*  date                 Modifier                Description
*******************************************************************************************
*  2023.10.12           yhkim                   최초 생성
*******************************************************************************************
*/
```

### XJS 파일 헤더

```javascript
/***************************************************************************************
 * 시스템명  : [시스템명]
 * 업무명    : [업무명]
 * 파일명    : [파일명].xjs
 * 작성자    : [작성자]
 * 작성일    : YYYY/MM/DD
 * 설  명    : [파일 설명]
 *---------------------------------------------------------------------------------------
 * 변경일      변경자          변경내역
 *---------------------------------------------------------------------------------------
 * YYYY/MM/DD  [작성자]        최초 프로그램 작성
 ****************************************************************************************/
```

실무 예시 (Transaction.xjs):
```javascript
/***************************************************************************************
 * 시스템명   : 차세대LIS 시스템
 * 업무명     : 공통
 * 파일명     : Transaction.xjs
 * 작성자     : consulting
 * 작성일     : 2022/11/04
 * 설  명     : Transaction 관련 공통 함수 모음
 *---------------------------------------------------------------------------------------
 * 변경일      변경자          변경내역
 *---------------------------------------------------------------------------------------
 * 2022/11/04  consulting      최초 프로그램 작성
 * 2024/08/30  최성철          exPrototype::Transaction.js -> cmmlib::Transaction.xjs 경로변경
 ****************************************************************************************/
```

---

## 3. 함수 JSDoc 주석 형식

함수 선언 바로 위에 JSDoc 스타일로 작성한다.

### 기본 형식

```javascript
/**
* @description [함수 기능 설명]
* @param {타입} [파라미터명] [설명]
* @return {타입} [반환값 설명] / N/A (반환값 없음)
*/
this.fn_functionName = function(param1, param2)
{
    // ...
};
```

### 단일 설명 형식 (파라미터 없는 경우)

```javascript
/**
* @description 공통코드 조회
* @return N/A
*/
this.fn_searchComCode = function()
{
    // ...
};
```

### 파라미터 있는 형식

```javascript
/**
* @description 목록 조회
* @param {Number} pageNum 출력될 페이지 번호
* @return N/A
*/
this.fn_search = function(pageNum)
{
    // ...
};
```

### 콜백 함수 형식

트랜잭션 콜백 함수는 파라미터 설명 앞에 `{String}` 등 타입 표기와 `: ` 구분자를 사용한다.

```javascript
/*
 * 트랜잭션 후처리
 * @param {String} strSvcId       : 서비스 ID
 * @param {Number} nErrorCode     : 결과 값 (0:성공 -1:실패)
 * @param {Object} objResolveData : response data
 */
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    // ...
};
```

---

## 4. 코드 섹션 구분 주석

Script 섹션 내부는 기능에 따라 명확하게 구분한다.

```javascript
/********************************************************************************************
* Common Library
********************************************************************************************/
include "SL::CMMN/sl_comm.xjs";
include "SL::CMMN/sl_stepComp.xjs";

/********************************************************************************************
* FORM 변수 선언 영역
********************************************************************************************/
this.pageSize = 50;

/********************************************************************************************
* FORM EVENT 영역(onload)
********************************************************************************************/
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    this.gfn_formOnLoad(this); // 초기화[필수]
    this.fn_searchComCode();
};

/********************************************************************************************
* TRANSACTION 서비스 호출 처리
********************************************************************************************/

/********************************************************************************************
* EVENT 핸들러 영역
********************************************************************************************/

/********************************************************************************************
* 사용자 FUNCTION 영역
********************************************************************************************/

/********************************************************************************************
* CALLBACK 콜백 처리부분
********************************************************************************************/
```

> **규칙**: `*` 문자를 96개 사용한 가로선으로 섹션을 구분한다.

---

## 5. 네이밍 규칙 전체 표

### 함수 접두사 (Function Prefix)

| 접두사 | 의미 | 예시 |
|--------|------|------|
| `fn_` | 일반 업무 함수 (Form 스크립트 내 함수) | `fn_search`, `fn_save`, `fn_validate` |
| `fn_[action]Callback` | 트랜잭션/팝업 콜백 함수 | `fn_apiCallback`, `fn_saveCallback`, `fn_popupCallback`, `fn_cmnCdCallback` |
| `gfn_` | 전역(Global) 공통 함수 (cmmlib에 `nexacro.Form.prototype`으로 정의) | `gfn_formOnLoad`, `gfn_openPopup` |
| `_gfn_` | 공통 라이브러리 내부 함수 (외부 직접 호출 금지) | `_gfn_makePostData`, `_gfn_setBeforeRequest` |
| `slfn_` | 시스템 레벨 공통 함수 (sl_comm.xjs에 정의) | `slfn_getDsVal`, `slfn_dsIsUpdated` |

**콜백 함수 네이밍 패턴:**

```javascript
// 트랜잭션 공통 콜백 (조회/비저장 처리 결과)
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData) { };

// 저장 전용 콜백 (저장/삭제 처리 결과)
this.fn_saveCallback = function(strSvcId, nErrorCode, objResolveData) { };

// 공통코드 조회 완료 콜백
this.fn_cmnCdCallback = function() { };

// 팝업 닫기 결과 콜백
this.fn_popupCallback = function(sPopupId, oArg) { };
```

### 컴포넌트 ID 접두사 (Component ID Prefix)

| 접두사 | 컴포넌트 | 예시 |
|--------|----------|------|
| `btn_` | Button | `btn_search`, `btn_save`, `btn_close` |
| `edt_` | Edit | `edt_custNm`, `edt_recpNo` |
| `sta_` / `stc_` | Static (레이블) | `sta_label1`, `stc_title` |
| `cal_` | Calendar | `cal_recpDt`, `cal_jobYm` |
| `cbo_` | Combo | `cbo_useYn`, `cbo_apybsCd` |
| `grd_` | Grid | `grd_list`, `grd_deposit` |
| `div_` | Div | `div_search`, `div_main` |
| `msk_` | MaskEdit | `msk_amt`, `msk_bizrno` |
| `rdo_` | Radio | `rdo_div`, `rdo_gender` |
| `chk_` | CheckBox | `chk_useYn`, `chk_grdToggle` |
| `txt_` | TextArea | `txt_remark` |
| `img_` | Image | `img_logo` |
| `tab_` | Tab | `tab_main` |
| `pop_` | PopupDiv | `pop_calendar` |

> `sta_`와 `stc_` 모두 Static 컴포넌트에 사용된다. 프로젝트 내에서 한 가지로 통일하되, Seegene LIS 프로젝트 기준으로는 `sta_`가 주로 사용된다.

### Dataset 접두사 (Dataset Prefix)

| 접두사 | 의미 | 예시 |
|--------|------|------|
| `ds_` | 일반 Dataset | `ds_search`, `ds_list`, `ds_form` |
| `ds_search` | 검색 조건 Dataset | `ds_search` |
| `ds_list` | 목록 결과 Dataset | `ds_list`, `ds_rcptList` |
| `ds_pagination` | 페이지네이션 Dataset | `ds_pagination` |
| `ds_result` | 처리 결과 Dataset | `ds_result` |
| `ds_[코드명]` | 공통코드 Dataset | `ds_useYn`, `ds_apybsCd`, `ds_dpstTypeCd` |

### Dataset 패턴 (용도별 네이밍)

| Dataset ID 패턴 | 용도 | 예시 |
|----------------|------|------|
| `ds_search` | 검색 조건 (1행) | `ds_search` |
| `ds_[entity]List` | 목록 조회 결과 | `ds_rcptList`, `ds_custList` |
| `ds_[entity]` | 단건 조회/등록/수정용 | `ds_form`, `ds_detail` |
| `ds_pagination` | 페이지네이션 정보 | `ds_pagination` |
| `ds_result` | 저장/처리 결과 (resultCnt 등) | `ds_result` |
| `ds_[코드카테고리]` | 공통코드 Combo 소스 | `ds_useYn`, `ds_dpstTypeCd` |
| `gds_[이름]` | Application 전역 Dataset (App 레벨 선언) | `gds_userInfo`, `gds_domain` |

### 전역 변수 접두사 (Global Variable Prefix)

#### Application 레벨 전역 변수 (`gv_`)

`nexacro.getApplication().gv_*` 형태로 접근한다. Application.xadl의 스크립트에서 선언된다.

| 변수명 | 의미 | 예시 |
|--------|------|------|
| `gv_runMode` | 실행 환경 (local/dev/qa/prod) | `objApp.gv_runMode` |
| `gv_langCode` | 현재 언어 코드 | `objApp.gv_langCode` |
| `gv_accessToken` | 인증 토큰 | `objApp.gv_accessToken` |
| `gv_tranInfo` | 트랜잭션 추적 정보 Object | `objApp.gv_tranInfo` |
| `gv_ip` | 클라이언트 IP | `objApp.gv_ip` |
| `gv_seqNo` | 트랜잭션 시퀀스 번호 | `objApp.gv_seqNo` |

```javascript
// Application 전역 변수 접근 방법
var objApp = nexacro.getApplication();
var sLangCode = objApp.gv_langCode;
var oUserInfo = objApp["gds_userInfo"];  // 전역 Dataset 접근
```

#### Application 레벨 전역 Dataset (`gds_`)

Application.xadl Objects에 선언된 Dataset. 모든 Form에서 `nexacro.getApplication().gds_*`로 접근한다.

| Dataset ID | 의미 |
|------------|------|
| `gds_userInfo` | 로그인 사용자 정보 (userId, userNm, deptCd, rspofcCd 등) |
| `gds_domain` | 서비스 도메인 URL 정보 |

```javascript
// 전역 Dataset에서 사용자 정보 읽기
var objApp   = nexacro.getApplication();
var userId   = this.slfn_getDsVal(objApp["gds_userInfo"], "userId");
var userNm   = this.slfn_getDsVal(objApp["gds_userInfo"], "userNm");
var rspofcCd = this.slfn_getDsVal(objApp["gds_userInfo"], "rspofcCd");
var deptCd   = objApp.gds_userInfo.getColumn(0, "deptCd");
```

#### Form 레벨 멤버 변수

Form 스크립트에서 `this.[이름]`으로 선언하는 Form 인스턴스 변수.

| 패턴 | 의미 | 예시 |
|------|------|------|
| `this.pageSize` | 페이지 크기 | `this.pageSize = 50;` |
| `this.SVC_[대문자명]` | 서비스 객체 상수 | `this.SVC_SEARCH`, `this.SVC_SAVE` |
| `this.param` | 공통코드 파라미터 배열 | `this.param = [...]` |
| `this.is[Flag명]Inited` | 초기화 완료 플래그 | `this.isMultiComboLhqrInited = false;` |

### 지역 변수 명명 규칙 (XScript 5.1)

```javascript
// 문자열: s 또는 str 접두사
var sValue = "text";
var strSvcId = "searchList";

// 숫자: n 또는 i 접두사
var nRow = 0;
var nErrorCode = -1;
var i = 0;

// 불리언: b 접두사
var bAsync = true;
var bResult = false;

// 객체: o 또는 obj 접두사
var oArg = { keyId: "001" };
var objApp = nexacro.getApplication();

// 배열: a 또는 arr 접두사
var arrData = [];
var aDsList = [];

// Dataset: ds 접두사
var dsTarget = this.ds_list;

// 옵션 객체: 'option' 또는 'sOption' 이름 사용
var sOption = { sPopId: "confirm", sMsgType: "C" };
```

---

## 6. 변수 선언 규칙

### var vs let

- 구형 코드: `var` 사용
- 신규 공통 라이브러리: `let` 사용

```javascript
// 구형 XFDL 스크립트 (var 사용)
this.fn_search = function()
{
    var toDate = this.gfn_getDate();
    var sOption = { ... };
};

// 신규 XJS 라이브러리 (let 사용)
pForm.gfn_transaction = function(objTranData, bAsync)
{
    let sController = objTranData.controller;
    let bAsync = (this.gfn_isNull(bAsync)) ? true : bAsync;
};
```

> **권장**: 새로 작성하는 XFDL 스크립트는 `var`를 사용한다. 공통 라이브러리 추가/수정 시에는 `let`을 사용한다.

### Form 레벨 멤버 변수

```javascript
/********************************************************************************************
* FORM 변수 선언 영역
********************************************************************************************/
this.pageSize = 50;               // 페이지 크기
this.isSearched = false;           // 조회 완료 여부

// 서비스 객체 상수 선언 (트랜잭션 반복 사용 시)
this.BILL_SEARCH = {
      svcId : "searchBillList"
    , url   : "GET::bl::bill-collect/by-deposit-type"
    , inDs  : "ds_search"
    , outDs : "ds_list=result"
    , callback : "fn_apiCallback"
};
```

---

## 7. 트랜잭션 객체 선언 패턴

### 인라인 선언 (일회성 호출)

```javascript
this.fn_search = function()
{
    this.SVC_SEARCH = {
          svcId : "searchList"
        , url   : "GET::bl::rcpt/selectRcptAmtList"
        , inDs  : "ds_search"
        , outDs : "ds_list=result ds_pagination=pagination"
    };
    this.ds_list.clearData();
    this.gfn_dsRequestAsync(this.SVC_SEARCH);
};
```

### 멤버 변수 선언 (반복 호출)

```javascript
// FORM 변수 선언 영역에서 선언
this.EXCEL_DOWN = {
      svcId : "excelDown"
    , url   : "GET::bl::bill-collect/by-deposit-type"
    , inDs  : "ds_search"
    , outDs : ""
    , callback : "fn_apiCallback"
};

// 사용
this.fn_excelDown = function()
{
    this.gfn_dsRequestAsync(this.EXCEL_DOWN);
};
```

### 서비스 URL 패턴

```
[HTTP메서드]::[영역]::[경로]
```

| 패턴 | 설명 | 예시 |
|------|------|------|
| `GET::bl::path` | GET 조회 | `GET::bl::rcpt/selectRcptAmtList` |
| `POST::bl::path` | POST 저장/처리 | `POST::bl::rcpt/applyRcptAmt` |
| `PUT::bl::path` | PUT 수정 | `PUT::bl::item/updateItem` |
| `DELETE::bl::path` | DELETE 삭제 | `DELETE::bl::item/deleteItem` |

### Dataset 전송 옵션

```javascript
inDs  : "ds_search"         // 전체 행 전송 (기본)
inDs  : "ds_list:U"         // 변경(Update)된 행만 전송
inDs  : "ds_list:A"         // 모든 변경 내역(추가/수정/삭제) 전송
outDs : "ds_list=result"    // 단일 Dataset 수신
outDs : "ds_list=result ds_pagination=pagination"  // 복수 Dataset 수신
```

---

## 8. 함수 분류 및 구성 규칙

Script 내 함수는 다음 순서로 배치한다.

### 1단계: 공통 라이브러리 include

```javascript
include "SL::CMMN/sl_comm.xjs";
include "SL::CMMN/sl_stepComp.xjs";
```

### 2단계: Form 변수 선언

```javascript
this.pageSize = 50;
this.SVC_SEARCH = { ... };
```

### 3단계: Form 이벤트 (onload)

```javascript
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    this.gfn_formOnLoad(this); // 초기화[필수] — 항상 첫 번째 줄
    this.fn_searchComCode();
};
```

### 4단계: 트랜잭션 서비스 함수

```javascript
this.fn_searchComCode = function() { ... };
this.fn_search = function() { ... };
this.fn_save = function() { ... };
this.fn_delete = function() { ... };
```

### 5단계: UI 이벤트 핸들러

```javascript
this.btn_search_onclick = function(obj, e) { this.fn_search(); };
this.grd_list_oncellclick = function(obj, e) { ... };
this.fn_enterSearch = function(obj, e) { if(e.keycode == 13) this.fn_search(); };
```

### 6단계: 사용자 FUNCTION (유틸리티)

```javascript
this.fn_validate = function() { ... };
this.fn_setTotalCnt = function(nCnt, form) { ... };
this.fn_initSearch = function() { ... };
```

### 7단계: Callback 함수

```javascript
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData) { ... };
this.fn_saveCallback = function(strSvcId, nErrorCode, objResolveData) { ... };
this.fn_cmnCdCallback = function() { ... };
this.fn_popupCallback = function(sPopupId, oArg) { ... };
```

---

## 9. 이벤트 핸들러 네이밍 패턴

### Form 레벨 컴포넌트

```
[컴포넌트ID]_[이벤트명]
```

```javascript
this.btn_search_onclick  = function(obj:nexacro.Button, e:nexacro.ClickEventInfo) { };
this.grd_list_oncellclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo) { };
this.edt_value_onkeyup   = function(obj:nexacro.Edit, e:nexacro.KeyEventInfo) { };
this.ds_list_oncolumnchanged = function(obj:nexacro.NormalDataset, e:nexacro.DSColChangeEventInfo) { };
```

### Div 내부 컴포넌트

Div 내부 컴포넌트의 이벤트는 `[Div ID]_[컴포넌트ID]_[이벤트명]` 형식이다.

```javascript
// div_search 안의 btn_search 버튼 onclick
this.div_search_btn_search_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fn_search();
};

// div_main 안의 btn_apply 버튼 onclick
this.div_main_btn_apply_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fn_apply();
};
```

### 공통 엔터키 검색 패턴

```javascript
this.fn_enterSearch = function(obj:nexacro.Edit, e:nexacro.KeyEventInfo)
{
    if (e.keycode == '13') {
        this.fn_search();
    }
};
```

---

## 10. 공통 함수 (gfn_) 사용 규칙

모든 Form에 prototype으로 주입되는 공통 함수들이다.

### Form 초기화 — 반드시 호출

```javascript
this.form_onload = function(obj, e)
{
    this.gfn_formOnLoad(this); // [필수] 항상 첫 번째 줄에 호출
    // ...
};
```

### 공통코드 조회

```javascript
this.param = [
    {ctgrId : "USE_YN",       dsNm : "ds_useYn",   compId : "div_search.form.cbo_useYn"},
    {ctgrId : "DPST_TYPE_CD", dsNm : "ds_dpstType", compId : "grd_list", gridBindCol: "dpstTypeCd"}
];
this.gfn_setCmnCd(this, this.param, "fn_cmnCdCallback");
```

### 팝업 열기

```javascript
var oArg = {
    keyId    : this.ds_list.getColumn(this.ds_list.rowposition, "keyId"),
    custNm   : this.ds_list.getColumn(this.ds_list.rowposition, "custNm")
};
var oOption = { titlebar: "false", width: "800", height: "600" };
this.gfn_openPopup("popupId", "BL::MODULE/UIXX0000P.xfdl", oArg, "fn_popupCallback", oOption);
```

### 비동기/동기 트랜잭션

```javascript
// 비동기 조회 (화면이 블록되지 않음 — 조회에 사용)
this.gfn_dsRequestAsync(this.SVC_SEARCH);

// 동기 저장 (처리 완료까지 대기 — 저장/삭제에 사용)
this.gfn_dsRequestSync(this.SVC_SAVE);
```

### 메시지/확인 다이얼로그

```javascript
// 확인 다이얼로그 (C: Confirm)
var sOption = {
    sPopId   : "saveConfirm",
    sMsgType : "C",
    sImgType : "C",
    sMsgId   : "02133",
    arrArg   : ["저장 하시겠습니까?"]
};
var rtn = this.gfn_message(sOption);
if (!rtn) { return; }  // 취소 시 중단

// 알림 다이얼로그 (A: Alert)
var sOption = {
    sPopId   : "resultAlert",
    sMsgType : "A",
    sImgType : "I",  // I: Info, W: Warning, E: Error
    sMsgId   : "02133",
    arrArg   : ["처리되었습니다."]
};
this.gfn_message(sOption);
```

### Null/Empty 체크

```javascript
if (this.gfn_isNull(value)) { /* null 또는 빈 문자열 */ }
if (this.gfn_isNotNull(value)) { /* 값이 있음 */ }
if (this.gfn_isEmpty(value)) { /* null, undefined, 빈 문자열 */ }
if (this.gfn_isNotEmpty(value)) { /* 값이 있음 */ }
```

### 날짜 유틸

```javascript
var today  = this.gfn_getDate();                  // "20240101" 형식 반환
var lastMon = this.gfn_addMonth(today, -1);        // 1개월 전
var lastDay = this.gfn_getMonthLastDate(today);    // 해당 월 마지막 날
```

---

## 11. 모듈 코드 체계

프로젝트별로 정의되는 모듈 코드 예시 (Seegene LIS 기준).

### 화면 파일 모듈 코드 (Seegene LIS 실무 기준)

파일명에서 `UI` 뒤 2자리가 모듈 코드이다. 예: `UIBL0360M.xfdl` → 모듈 `BL`

| 코드 | 모듈명 | 디렉토리 |
|------|--------|----------|
| `BL` | BILL (청구/수금) | `BL/BILL/`, `BL/CLOSING/` |
| `DI` | DI (진단검사 관련) | `BL/DI/` |
| `DT` | 데이터 관련 | `BL/DT/` |
| `LA` | Lab (검사실) | `BL/LA/` |
| `LM` | LM (검사 관리) | `BL/LM/` |
| `QC` | QC (품질관리) | `BL/QC/` |
| `RC` | RECP (접수) | `BL/RECP/` |
| `RM` | RM 관련 | `BL/RM/` |
| `SL` | SELL (영업) | `BL/SELL/` |
| `CM` | Common (공통) | `BL/CMMN/` |

> 모듈 코드는 프로젝트마다 다르게 정의된다. 위는 Seegene LIS 프로젝트 기준이며, 신규 프로젝트에서는 프로젝트 명세에 따른다.

### 서비스 URL 영역 코드

```
[HTTP메서드]::[영역코드]::[서비스경로]
```

| 영역코드 | 의미 | 예시 |
|----------|------|------|
| `bl` | 청구(BILL) 관련 API | `GET::bl::rcpt/selectRcptAmtList` |
| `sl` | 영업(SELL) 관련 API | `GET::sl::cust/selectCustList` |
| `la` | 검사실 관련 API | `GET::la::test/selectTestList` |
| `cm` | 공통 API | `GET::cm::code/selectCmnCd` |

### 공통코드 카테고리 ID 패턴

```javascript
{ctgrId : "USE_YN"}          // 사용여부 (Y/N)
{ctgrId : "DPST_TYPE_CD"}    // 입금유형
{ctgrId : "MDCT_APYBS_CD"}   // 수가적용기준
{ctgrId : "CSTAT_CD"}        // 계약상태
```

---

## 코딩 스타일 요약

### 들여쓰기

탭(Tab) 1개를 들여쓰기 단위로 사용한다.

### 중괄호 스타일

함수 시작 `{`는 함수 선언과 같은 줄에 오지 않고 다음 줄에 위치한다.

```javascript
// 올바른 스타일
this.fn_search = function()
{
    var nRow = 0;
    if (nRow > 0)
    {
        // ...
    }
};

// 잘못된 스타일 (금지)
this.fn_search = function() {
    // ...
};
```

### 세미콜론

모든 문장 끝에 세미콜론(`;`)을 작성한다.

### 문자열 따옴표

문자열은 단따옴표(`'`) 또는 쌍따옴표(`"`) 중 일관성 있게 사용한다.
실무 코드에서는 양쪽 모두 혼용되므로 한 파일 내에서는 통일한다.

### 비교 연산자

동등 비교는 `==`를 사용한다. (XScript 5.1에서 `===`도 지원되나 기존 코드는 `==` 사용)

```javascript
if (e.keycode == '13') { }
if (nErrorCode < 0) { }
if (this.ds_list.rowcount <= 0) { }
```

---

*작성일: 2026-03-28 | 기반 소스: Seegene LIS XFDL 실무 코드, cmmlib XJS 분석*
