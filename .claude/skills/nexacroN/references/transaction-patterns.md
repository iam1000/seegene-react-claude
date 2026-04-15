# NexacroN 트랜잭션 패턴 참조 가이드

## 목차 (TOC)

1. [트랜잭션 아키텍처 개요](#1-트랜잭션-아키텍처-개요)
2. [서비스 호출 객체 정의 패턴](#2-서비스-호출-객체-정의-패턴)
3. [URL 형식 규칙](#3-url-형식-규칙)
4. [비동기 / 동기 요청 함수](#4-비동기--동기-요청-함수)
5. [콜백 패턴](#5-콜백-패턴)
6. [에러 코드 처리](#6-에러-코드-처리)
7. [CRUD별 완전한 트랜잭션 예시](#7-crud별-완전한-트랜잭션-예시)
8. [페이징(스크롤) 처리 패턴](#8-페이징스크롤-처리-패턴)
9. [inDs 데이터셋 필터 접미사](#9-inds-데이터셋-필터-접미사)
10. [valDs 유효성 검사 옵션](#10-valds-유효성-검사-옵션)
11. [args 파라미터 패턴](#11-args-파라미터-패턴)
12. [공통 주의사항 및 실무 팁](#12-공통-주의사항-및-실무-팁)

---

## 1. 트랜잭션 아키텍처 개요

NexacroN 프로젝트에서 서버 통신은 `cmmlib/Transaction.xjs`에 정의된 공통 함수를 통해
일원화된다. 핵심 함수 흐름은 아래와 같다.

```
SVC 객체 정의
    ↓
gfn_dsRequestAsync / gfn_dsRequestSync 호출
    ↓
gfn_transaction (내부 공통 처리)
    ↓
nexacro.Form.transaction() 실행
    ↓
gfn_transactionCallback (공통 Callback)
    ↓
fn_apiCallback (업무 Callback)
```

`Transaction.xjs`는 `pForm = nexacro.Form.prototype` 에 함수를 추가하므로
모든 Form 인스턴스에서 `this.gfn_transaction(...)` 형태로 호출할 수 있다.

---

## 2. 서비스 호출 객체 정의 패턴

### 2.1 기본 구조

서비스 호출 객체(SVC 객체)는 Form 변수 선언 영역 최상단에 `this.SVC_XXX = {...}` 형태로
정의한다. 각 CRUD 작업마다 하나의 SVC 객체를 선언하는 것이 원칙이다.

```javascript
/************************************************
 * FORM 변수 선언 영역
 ************************************************/
// 목록 조회
this.SVC_SEARCH = {
      svcId    : "searchList"          // [필수] 트랜잭션 서비스 ID (콜백 switch case에서 사용)
    , url      : "GET::bl::module/selectList"  // [필수] METHOD::prefix::path
    , inDs     : "ds_search"           // 송신 Dataset
    , outDs    : "ds_list=result ds_pagination=pagination"  // 수신 Dataset
    , callback : "fn_apiCallback"      // 콜백 함수명 (생략 시 fn_callback)
};

// 저장
this.SVC_SAVE = {
      svcId    : "saveList"
    , url      : "PUT::bl::module/save"
    , inDs     : "ds_list:U"           // :U = 변경된 행만 전송
    , outDs    : ""
    , callback : "fn_apiCallback"
};

// 삭제
this.SVC_DELETE = {
      svcId    : "deleteItem"
    , url      : "DELETE::bl::module/delete"
    , inDs     : "ds_list:U"
    , outDs    : ""
    , callback : "fn_apiCallback"
};
```

### 2.2 전체 SVC 객체 프로퍼티 목록

| 프로퍼티 | 필수 | 설명 |
|---------|------|------|
| `svcId` | 필수 | 서비스 ID. 콜백의 `switch(strSvcId)` 케이스 값과 일치해야 함 |
| `url` | 필수 | `METHOD::prefix::path` 형식의 서비스 URL |
| `inDs` | 선택 | 송신 Dataset. 없으면 생략 또는 `""` |
| `outDs` | 선택 | 수신 Dataset 매핑. `로컬명=서버명` 형식, 공백으로 복수 구분 |
| `callback` | 선택 | 콜백 함수명. 생략 시 `fn_callback`으로 자동 설정 |
| `args` | 선택 | URL 인자값. `key=value` 형식, 공백으로 복수 구분 |
| `valDs` | 선택 | 유효성 검사 대상 Dataset 지정 |
| `outArgs` | 선택 | response variables 변수명. 공백으로 복수 구분 |
| `userArgs` | 선택 | 콜백으로 전달할 사용자 인자 객체 |
| `showProgress` | 선택 | ProgressBar 표시 여부 (기본값: `true`) |

---

## 3. URL 형식 규칙

### 3.1 기본 형식

```
METHOD::prefix::path
```

- **METHOD**: HTTP 메서드 (대소문자 구분 없음)
  - `GET` - 조회
  - `POST` - 등록
  - `PUT` - 수정 / 저장 (신규+수정 통합 처리 시)
  - `DELETE` - 삭제
- **prefix**: 서비스 그룹 식별자
  - `bl` - Business Layer (업무 서비스)
  - `sl` - Search Layer (검색 필터 서비스)
- **path**: REST API 엔드포인트 경로

### 3.2 실무 예시

```javascript
// 목록 조회 (GET)
url: "GET::bl::daySell"
url: "GET::bl::reception-medical-cost"
url: "GET::sl::search-filter/region-headquarters"

// URL 경로 파라미터 (런타임에 동적 교체)
url: "GET::sl::search-filter/region-headquarters/{lhqrCd}/branch-office"

// 저장 (PUT - 신규/수정 통합)
url: "PUT::bl::itmGrupMgmt/groupList/save"
url: "PUT::bl::itmPrctMgmt/save"

// 처리 (POST)
url: "POST::bl::ctstMgmt-amtItrp"
```

### 3.3 URL 경로 파라미터 동적 교체

SVC 객체의 `url`에 `{변수명}` 자리 표시자를 쓰고, 호출 전에 실제 값으로 교체한다.

```javascript
this.SVC_SEARCH_DETAIL = {
      svcId    : "searchDetail"
    , outDs    : "ds_patntstList=result"
    , callback : "fn_apiCallback"
};

// 호출 전 URL 동적 구성
this.fn_searchDetail = function(sRecpDt, sRecpNo)
{
    this.SVC_SEARCH_DETAIL.url = "GET::bl::reception-medical-cost/" + sRecpDt + "/" + sRecpNo;
    this.gfn_dsRequestAsync(this.SVC_SEARCH_DETAIL);
};
```

---

## 4. 비동기 / 동기 요청 함수

### 4.1 gfn_dsRequestAsync (비동기 - 권장)

```javascript
/**
 * 비동기 서비스 호출 - 화면 블로킹 없이 서버 통신
 * UI 응답성을 유지해야 하는 조회 화면에 사용
 */
this.fn_search = function(pageNum)
{
    this.slfn_setDsVal(this.ds_search, 'pageSize', this.pageSize);
    this.slfn_setDsVal(this.ds_search, 'pageIndex', pageNum);
    this.ds_listScroll.clearData();

    this.gfn_dsRequestAsync(this.SVC_SEARCH);
};
```

### 4.2 gfn_dsRequestSync (동기)

```javascript
/**
 * 동기 서비스 호출 - 결과를 받은 후 다음 코드 실행
 * 초기화 시 공통코드 로딩, 권한 확인 등 순서가 중요한 경우에 사용
 */
this.fn_checkAuth = function()
{
    this.slfn_setDsVal(this.ds_searchAuth, "userId", userId);
    this.slfn_setDsVal(this.ds_searchAuth, "scrnGubun", "SELL");

    this.gfn_dsRequestSync(this.SVC_AUTH);
    // 이 아래 코드는 통신 완료 후 실행됨
};
```

### 4.3 사용 지침

| 상황 | 권장 함수 |
|------|----------|
| 화면 초기 조회 (사용자 액션) | `gfn_dsRequestAsync` |
| form_onload 내 공통코드/권한 초기화 | `gfn_dsRequestSync` |
| 저장/삭제 후 재조회 | `gfn_dsRequestSync` (연쇄 처리 시) |
| 스크롤 페이징 추가 로딩 | `gfn_dsRequestAsync` |

---

## 5. 콜백 패턴

### 5.1 fn_apiCallback 표준 시그니처

```javascript
/************************************************
 * CALLBACK 콜백 처리부분
 ************************************************/
/**
 * 트랜잭션 후처리
 * @param {String} strSvcId       - 서비스 ID (SVC 객체의 svcId 값)
 * @param {Number} nErrorCode     - 결과 코드 (0: 성공, 음수: 에러)
 * @param {Object} objResolveData - response data 객체
 */
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return; // 통신에러 - 공통 콜백에서 처리됨

    switch(strSvcId) {
        case "searchList":
            // 조회 후처리
            break;

        case "saveList":
            // 저장 성공 후 재조회
            this.fn_search();
            break;

        case "deleteItem":
            // 삭제 성공 후 재조회
            this.fn_search();
            break;
    }
};
```

### 5.2 objResolveData 활용

```javascript
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return;

    switch(strSvcId) {
        case "saveCalcRecpTst":
            // 서버 응답 데이터에서 messageId 추출
            var messageId = objResolveData.data.messageId;
            var sOption = {
                sPopId   : "msgId",
                sMsgType : "A",
                sImgType : "A",
                sMsgId   : messageId
            };
            this.gfn_message(sOption);
            break;
    }
};
```

### 5.3 서비스별 별도 콜백 지정

콜백을 분리해야 하는 경우 SVC 객체의 `callback` 프로퍼티로 다른 함수명을 지정한다.

```javascript
this.SVC_NCDC_GROUP_SEARCH = {
      svcId    : "selectNcdcGroup"
    , url      : "GET::bl::ncdc-ncdcGroupSearch"
    , inDs     : "ds_search"
    , outDs    : "ds_ncdcGroup=result"
    , callback : "fn_searchCallback"   // 별도 콜백 지정
};

this.fn_searchCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return;

    switch(strSvcId) {
        case "selectNcdcGroup":
            // 그룹 조회 후처리
            break;
    }
};
```

---

## 6. 에러 코드 처리

### 6.1 에러 코드 정의표

공통 콜백 `gfn_transactionCallback`에서 에러 코드에 따라 자동 처리된다.

| 에러 코드 | 구분 | 처리 방식 |
|----------|------|----------|
| `0` 이상 | 성공 | 업무 콜백(`fn_apiCallback`) 호출 |
| `-10` | 비즈니스 예외 | `alert(strErrorMsg)` 표시 후 업무 콜백 호출 안 함 |
| `-20` | SQL 예외 | `alert(strErrorMsg)` 표시 후 업무 콜백 호출 안 함 |
| `-12` | Excel 바인딩 예외 | 메시지 없이 종료 |
| `-13` | 업무 마감 예외 | `gfn_alertMsg(strErrorMsg)` 표시 후 종료 |
| `-30` | 세션 만료 | `gfn_alert("msg.session.timeout")` 후 종료 |
| `-99999` | 세션 만료(강제) | 타임아웃 알림 후 `location.reload()` |
| 기타 음수(`-1` 등) | 서버 에러 | "서버 에러" 다이얼로그 표시 후 종료 |

### 6.2 업무 콜백에서의 에러 처리

업무 콜백(`fn_apiCallback`)은 `nErrorCode < 0` 인 경우 이미 공통 콜백에서 처리가
완료된 상태이므로 단순히 `return` 한다.

```javascript
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return; // 에러는 공통 콜백(gfn_transactionCallback)에서 처리됨

    // nErrorCode >= 0 인 경우만 아래 실행
    switch(strSvcId) {
        // ...
    }
};
```

---

## 7. CRUD별 완전한 트랜잭션 예시

### 7.1 조회 (READ) - 비동기

```javascript
/*** SVC 객체 정의 ***/
this.SVC_SEARCH = {
      svcId    : "searchList"
    , url      : "GET::bl::module/list"
    , inDs     : "ds_search"
    , outDs    : "ds_list=result"
    , callback : "fn_apiCallback"
};

/*** 조회 함수 ***/
this.fn_search = function()
{
    this.ds_list.clearData();
    this.gfn_dsRequestAsync(this.SVC_SEARCH);
};

/*** 조회 버튼 클릭 이벤트 ***/
this.div_search_btn_search_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fn_search();
};

/*** 콜백 처리 ***/
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return;

    switch(strSvcId) {
        case "searchList":
            // ds_list에 결과 자동 바인딩됨
            // 추가 처리 필요 시 여기에 작성
            break;
    }
};
```

### 7.2 저장 (CREATE/UPDATE) - 동기, 변경행만 전송

```javascript
/*** SVC 객체 정의 ***/
this.SVC_SAVE = {
      svcId    : "saveList"
    , url      : "PUT::bl::module/save"
    , inDs     : "ds_list:U"    // :U = 신규(insert) + 수정(update) 행만 전송
    , outDs    : ""
    , callback : "fn_apiCallback"
};

/*** 저장 함수 ***/
this.fn_save = function()
{
    // 변경 여부 확인
    if (!this.gfn_dsIsUpdated(this.ds_list)) {
        var sOption = {
            sPopId   : "alertEx1",
            sMsgType : "A",
            sImgType : "A",
            sMsgId   : "00033"   // "변경된 내용이 없습니다"
        };
        this.gfn_message(sOption);
        return;
    }

    this.gfn_dsRequestSync(this.SVC_SAVE);
};

/*** 저장 버튼 클릭 이벤트 ***/
this.div_main_btn_save_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fn_save();
};

/*** 콜백 처리 ***/
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return;

    switch(strSvcId) {
        case "saveList":
            this.fn_search(); // 저장 후 재조회
            break;
    }
};
```

### 7.3 삭제 (DELETE) - 체크박스 선택 행 삭제

```javascript
/*** SVC 객체 정의 ***/
this.SVC_DELETE = {
      svcId    : "deleteItem"
    , url      : "PUT::bl::module/save"   // 논리 삭제는 PUT 메서드 사용
    , inDs     : "ds_list:U"
    , outDs    : ""
    , callback : "fn_apiCallback"
};

/*** 삭제 함수 ***/
this.fn_delete = function()
{
    // 체크된 행 추출
    var exRow = this.ds_list.extractRows("_CHK == 1");

    if (exRow.length == 0) {
        var sOption = {
            sPopId   : "alertEx1",
            sMsgType : "A",
            sImgType : "A",
            sMsgId   : "00034"   // "삭제할 항목을 선택해주세요"
        };
        this.gfn_message(sOption);
        return;
    }

    // Dataset에서 행 삭제 (rowType을 delete로 변경)
    this.ds_list.deleteMultiRows(exRow);

    this.gfn_dsRequestSync(this.SVC_DELETE);
};

/*** 콜백 처리 ***/
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return;

    switch(strSvcId) {
        case "deleteItem":
            this.fn_search(); // 삭제 후 재조회
            break;
    }
};
```

### 7.4 복합 처리 - 조회 후 연쇄 트랜잭션

```javascript
/*** SVC 객체 정의 ***/
this.SVC_SEARCH_HEADER = {
      svcId    : "searchHeader"
    , url      : "GET::bl::module/header"
    , inDs     : "ds_search"
    , outDs    : "ds_header=result"
    , callback : "fn_apiCallback"
};

this.SVC_SEARCH_DETAIL = {
      svcId    : "searchDetail"
    , outDs    : "ds_detail=result"
    , callback : "fn_apiCallback"
};

/*** 헤더 조회 후 상세 자동 조회 ***/
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return;

    switch(strSvcId) {
        case "searchHeader":
            // 헤더 조회 완료 후 자동으로 상세 조회
            this.fn_searchDetail();
            break;

        case "searchDetail":
            // 상세 조회 완료 후처리
            this.fn_bindDetailView();
            break;
    }
};

/*** 상세 조회 - 동적 URL 구성 ***/
this.fn_searchDetail = function()
{
    if (this.ds_header.rowcount < 1) return;

    var sKey1 = this.ds_header.getColumn(this.ds_header.rowposition, "key1");
    var sKey2 = this.ds_header.getColumn(this.ds_header.rowposition, "key2");

    this.SVC_SEARCH_DETAIL.url = "GET::bl::module/detail/" + sKey1 + "/" + sKey2;
    this.gfn_dsRequestAsync(this.SVC_SEARCH_DETAIL);
};
```

---

## 8. 페이징(스크롤) 처리 패턴

### 8.1 ScrollPage 초기화

스크롤 페이징은 `ScrollPage` 클래스를 사용한다. `form_onload`에서 초기화한다.

```javascript
this.pageSize = 100; // 페이지당 로딩 건수

/*** form_onload에서 초기화 ***/
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    this.gfn_formOnLoad(this);

    // ScrollPage(현재폼, 그리드, 누적Dataset, 페이지Dataset, 조회함수명)
    this.scrollPage = new ScrollPage(
        this,
        this.div_main.form.grd_list,   // 바인딩된 Grid
        this.ds_list,                   // 화면 표시용 Dataset (그리드에 바인딩)
        this.ds_listScroll,             // 서버에서 받은 데이터 누적 Dataset
        "fn_search"                     // 페이지 로딩 시 호출 함수명
    );
};
```

### 8.2 SVC 객체 - 페이징 outDs 설정

```javascript
this.SVC_SEARCH = {
      svcId    : "searchList"
    , url      : "GET::bl::module/list"
    , inDs     : "ds_search"
      // ds_listScroll에 result를, ds_pagination에 pagination 바인딩
    , outDs    : "ds_listScroll=result ds_pagination=pagination"
    , callback : "fn_apiCallback"
};
```

### 8.3 조회 함수 - pageNum 파라미터

```javascript
/**
 * @description 목록 조회
 * @param {Number} pageNum - 페이지 번호 (ScrollPage에서 자동 전달)
 */
this.fn_search = function(pageNum)
{
    this.slfn_setDsVal(this.ds_search, 'pageSize',  this.pageSize);
    this.slfn_setDsVal(this.ds_search, 'pageIndex', pageNum);
    this.ds_listScroll.clearData();

    this.gfn_dsRequestAsync(this.SVC_SEARCH);
};
```

### 8.4 콜백 - 페이징 정보 처리

```javascript
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return;

    switch(strSvcId) {
        case "searchList":
            var totalDataCount = this.slfn_getDsVal(this.ds_pagination, 'totalDataCount');
            var pageSize       = this.slfn_getDsVal(this.ds_pagination, 'pageSize');
            var pageIndex      = this.slfn_getDsVal(this.ds_pagination, 'pageIndex');

            // 스크롤 페이지 재설정
            this.scrollPage.gfn_resetPaging(totalDataCount);

            // 건수 표시 업데이트
            this.fn_updateTotalCount(totalDataCount, pageSize, pageIndex);
            break;
    }
};

/*** 건수 표시 업데이트 ***/
this.fn_updateTotalCount = function(totalCnt, pageSize, pageIndex)
{
    var nowCnt = parseInt(pageSize) * pageIndex > parseInt(totalCnt)
               ? parseInt(totalCnt)
               : parseInt(pageSize) * pageIndex;

    this.div_search.form.sta_totalCnt.set_text(
        this.gfn_appendComma(nowCnt) + " / " + this.gfn_appendComma(totalCnt)
    );
};
```

---

## 9. inDs 데이터셋 필터 접미사

`inDs`에 `:` 접미사를 붙여 전송할 행 유형을 필터링할 수 있다.

| 접미사 | 전송 대상 | 사용 예 |
|--------|----------|---------|
| (없음) | 전체 행 | `"ds_search"` |
| `:U` | 신규/수정/삭제 변경행 | `"ds_list:U"` |
| `:A` | 전체 행 (명시적) | `"ds_search:A"` |

```javascript
// 변경된 행만 전송 (저장, 삭제 시)
this.SVC_SAVE = {
    inDs : "ds_list:U"
};

// inDs에 서버측 파라미터명 = 로컬Dataset 형식
this.SVC_MULTI_SAVE = {
    inDs : "amtItrpList=ds_amtItrp:U"   // 서버에서는 amtItrpList로 수신
};
```

---

## 10. valDs 유효성 검사 옵션

`valDs` 프로퍼티로 전송 전 Dataset의 유효성 검사 적용 여부를 지정한다.

```javascript
this.SVC_SEARCH = {
      svcId : "selectDaySell"
    , url   : "GET::bl::daySell"
    , inDs  : "ds_search"
    , outDs : "ds_daySellScroll=result ds_pagination=pagination"
    , valDs : "ds_search:A"   // ds_search 전체 행에 대해 유효성 검사 수행
};
```

---

## 11. args 파라미터 패턴

Dataset 없이 단순 key=value 파라미터를 전달할 때 사용한다.

```javascript
// SVC 객체에 미리 정의
this.SVC_SEARCH_DETAIL = {
      svcId : "searchDetail"
    , url   : "GET::bl::module/detail"
    , args  : "jobYm=202401 userId=USER001"   // 공백으로 구분
    , outDs : "ds_detail=result"
};

// 런타임에 동적으로 args 설정
this.fn_searchDetail = function()
{
    var jobYm = this.slfn_getDsVal(this.ds_search, "recpYm");
    this.SVC_AMT_ITRP.args = "jobYm=" + jobYm;
    this.gfn_dsRequestSync(this.SVC_AMT_ITRP);
};
```

---

## 12. 공통 주의사항 및 실무 팁

### 12.1 svcId와 콜백 case 일치

SVC 객체의 `svcId` 값과 `fn_apiCallback` 내 `switch(strSvcId)` case 값은
반드시 동일해야 한다.

```javascript
// 올바른 예
this.SVC_SEARCH = { svcId: "searchList", ... };
// ...
case "searchList":  // svcId와 일치
    break;
```

### 12.2 outDs 매핑 형식

`outDs`는 `로컬Dataset명=서버응답키명` 형식으로 작성한다.
서버 응답의 `result` 키는 주로 `result`, 페이징 정보는 `pagination`으로 온다.

```javascript
outDs: "ds_list=result ds_pagination=pagination"
//     로컬명  서버명  로컬명         서버명
```

### 12.3 clearData 타이밍

조회 시 이전 데이터가 남지 않도록 `gfn_dsRequestAsync` 호출 전에
결과 Dataset의 `clearData()`를 먼저 호출한다.

```javascript
this.fn_search = function()
{
    this.ds_list.clearData();        // 반드시 호출 전에 초기화
    this.gfn_dsRequestAsync(this.SVC_SEARCH);
};
```

### 12.4 SVC 객체는 Form 변수 선언 영역 최상단에 배치

가독성과 유지보수를 위해 모든 SVC 객체를 Form 스크립트의 최상단 변수 선언 영역에
모아서 정의한다. 개별 함수 내부에 SVC 객체를 정의하지 않는다.

```javascript
/************************************************
 * FORM 변수 선언 영역
 ************************************************/
this.pageSize = 100;

this.SVC_SEARCH        = { svcId: "searchList",   url: "GET::bl::...", ... };
this.SVC_SAVE          = { svcId: "saveList",     url: "PUT::bl::...", ... };
this.SVC_DELETE        = { svcId: "deleteItem",   url: "PUT::bl::...", ... };

/************************************************
 * FORM EVENT 영역(onload)
 ************************************************/
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    // ...
};
```

### 12.5 동기/비동기 선택 기준 요약

- **form_onload에서 초기화 데이터 로딩**: `gfn_dsRequestSync` (순서 보장 필요)
- **사용자 조회 버튼 클릭**: `gfn_dsRequestAsync` (UI 응답성 유지)
- **저장/삭제 → 재조회 연쇄**: `gfn_dsRequestSync` 후 콜백에서 `gfn_dsRequestAsync`
