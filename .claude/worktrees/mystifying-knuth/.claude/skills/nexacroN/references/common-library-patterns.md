# NexacroN 공통 라이브러리 패턴 참조 가이드

## 목차 (TOC)

1. [공통 라이브러리 목록 및 include 방법](#1-공통-라이브러리-목록-및-include-방법)
2. [유틸리티 함수 - 날짜](#2-유틸리티-함수---날짜)
3. [유틸리티 함수 - 문자열](#3-유틸리티-함수---문자열)
4. [유틸리티 함수 - 숫자](#4-유틸리티-함수---숫자)
5. [유틸리티 함수 - 타입/Null 검사](#5-유틸리티-함수---타입null-검사)
6. [Validation 패턴](#6-validation-패턴)
7. [Dataset 공통 함수](#7-dataset-공통-함수)
8. [Grid 공통 함수](#8-grid-공통-함수)
9. [Excel 공통 함수](#9-excel-공통-함수)
10. [메시지/팝업 공통 함수](#10-메시지팝업-공통-함수)
11. [프레임/화면 제어 공통 함수](#11-프레임화면-제어-공통-함수)
12. [사용자 정보 조회 함수](#12-사용자-정보-조회-함수)

---

## 1. 공통 라이브러리 목록 및 include 방법

### 1.1 cmmlib 파일 목록

모든 공통 함수는 `cmmlib/` 디렉토리에 위치하며, `nexacro.Form.prototype`에 추가된다.
별도 include 없이 모든 Form에서 `this.gfn_xxx()` 형태로 사용 가능하다.

| 파일 | 주요 내용 |
|------|----------|
| `Transaction.xjs` | 서버 통신 함수 (`gfn_transaction`, `gfn_transactionCallback`) |
| `Util.xjs` | 날짜, 문자열, 숫자, 배열, 로그, 개인화 유틸 |
| `Validation.xjs` | 데이터 정합성 검사 함수 |
| `Dataset.xjs` | Dataset 변경 감지, 행 추가/삭제 |
| `Grid.xjs` | Grid 정렬, 필터, 개인화, Excel 내보내기/가져오기 |
| `Excel.xjs` | 파일 기반 Excel export/import |
| `File.xjs` | 파일 업로드/다운로드 |
| `Frame.xjs` | Form 생명주기, MDI, 팝업, 메뉴 제어 |
| `Message.xjs` | 메시지 다이얼로그 |
| `Popup.xjs` | 팝업 오픈/닫기 |
| `Comp.xjs` | 컴포넌트 유틸 |
| `I18n.xjs` | 다국어 처리 |
| `DataObject.xjs` | Data Object 유틸 |

### 1.2 업무 공통 라이브러리 include

업무별 공통 라이브러리는 업무 XFDL 스크립트 최상단에 include한다.

```javascript
/***********************************************
 * Common Library
 ***********************************************/
include "SL::CMMN/sl_comm.xjs";         // 영업(SL) 업무 공통 함수
include "SL::CMMN/sl_stepComp.xjs";     // 단계별 콤보 초기화 공통
```

`cmmlib` 파일들은 자동으로 로드되므로 별도 include가 불필요하다.

---

## 2. 유틸리티 함수 - 날짜

모두 `Util.xjs`에 정의되어 있으며, `this.gfn_xxx()` 형태로 호출한다.

### 2.1 gfn_getDate - 현재 날짜 조회 (DB 서버 기준)

```javascript
/**
 * @param sGubn - "date" (기본) | "time" | "milli"
 * @return 8자리 날짜 문자열 (YYYYMMDD)
 */

// 오늘 날짜 (YYYYMMDD)
var today = this.gfn_getDate();           // "20241128"

// 날짜+시간 (YYYYMMDDHHmmss)
var now = this.gfn_getDate("time");       // "20241128093045"

// Milliseconds 포함
var ms = this.gfn_getDate("milli");       // "20241128093045123"

// 사용 예: 검색 조건 초기화
this.div_search.form.cal_searchDt.set_value(this.gfn_getDate());

// 사용 예: 전일 설정
this.ds_search.setColumn(0, "srchDt", this.gfn_addDate(today, -1));
```

### 2.2 gfn_addDate - 날짜에 일수 가감

```javascript
/**
 * @param strDate - YYYYMMDD 형식 날짜
 * @param nOffSet - 가감할 일수 (음수=과거, 양수=미래)
 * @return YYYYMMDD 형식 날짜
 */

var today  = this.gfn_getDate();
var prev   = this.gfn_addDate(today, -7);   // 7일 전
var next   = this.gfn_addDate(today, 30);   // 30일 후
```

### 2.3 gfn_addMonth - 날짜에 월수 가감

```javascript
/**
 * @param strDate - YYYYMMDD 형식 날짜
 * @param OffSet  - 가감할 월수
 * @return YYYYMMDD 형식 날짜
 */

var today       = this.gfn_getDate();
var prevMonth   = this.gfn_addMonth(today, -1);    // 1개월 전
var nextQuarter = this.gfn_addMonth(today, 3);     // 3개월 후
```

### 2.4 gfn_getDateFormat - 날짜 포맷 변환

```javascript
/**
 * @param sDate - YYYYMMDD 형식 날짜 (8자리)
 * @param sChar - 구분자 (예: "-", "/", ".")
 * @return 포맷 변환된 날짜 문자열
 */

var formatted = this.gfn_getDateFormat("20241128", "-");  // "2024-11-28"
var slashed   = this.gfn_getDateFormat("20241128", "/");  // "2024/11/28"
```

### 2.5 날짜 관련 기타 함수

```javascript
// 해당 월 마지막 일자
var lastDay = this.gfn_getMonthLastDate("20241128");   // 30

// 두 날짜 사이 일수 차이
var diff = this.gfn_getDiffDate("20241101", "20241128"); // 27

// 날짜 유효성 검사 (YYYYMMDD)
var isValid = this.gfn_isYMD("20241128");   // true
var isInvalid = this.gfn_isYMD("20241399"); // false

// 년월 유효성 검사 (YYYYMM)
var isYm = this.gfn_isYM("202411");    // true
```

---

## 3. 유틸리티 함수 - 문자열

### 3.1 gfn_trim / gfn_trimAll

```javascript
// 양쪽 공백 제거
var trimmed = this.gfn_trim("  hello  ");     // "hello"

// 전체 공백 제거
var noSpace = this.gfn_trimAll("h e l l o"); // "hello"
```

### 3.2 gfn_nvl - Null 대치값 반환

```javascript
/**
 * @param inVal   - 검사할 값
 * @param nullVal - null인 경우 대치할 값
 * @return inVal이 null/undefined이면 nullVal, 아니면 inVal
 */

var val = this.gfn_nvl(someValue, "N/A");    // null이면 "N/A"
var num = this.gfn_nvl(this.ds_search.getColumn(0, "cnt"), 0);
var bool = this.gfn_nvl(objTranData.bAsync, true);
```

### 3.3 gfn_left / gfn_right

```javascript
// 좌측 N자리
var left  = this.gfn_left("ABCDE", 3);   // "ABC"

// 우측 N자리
var right = this.gfn_right("ABCDE", 3);  // "CDE"
```

### 3.4 gfn_lpad / gfn_rpad

```javascript
// 좌측 패딩 (총 길이, 채울 문자)
var padded = this.gfn_lpad("5", 3, "0");   // "005"

// 우측 패딩
var rpadded = this.gfn_rpad("5", 3, "0");  // "500"
```

### 3.5 gfn_decode - 다중 조건 값 변환

Grid expression이나 코드값 변환에 주로 사용한다.

```javascript
/**
 * gfn_decode(표현식, 검색1, 결과1, [검색2, 결과2, ...], 기본값)
 */
var result = this.gfn_decode(statusCd, "01", "신규", "02", "처리중", "03", "완료", "미확인");
// statusCd가 "01"이면 "신규", "02"이면 "처리중", 없으면 "미확인"

// Grid cell expression에서 사용
// text="expr:dataset.parent.gfn_decode(statusCd, '01', '신규', '02', '처리중', '기타')"
```

### 3.6 gfn_toUpper / gfn_toLower

```javascript
var upper = this.gfn_toUpper("hello");  // "HELLO"
var lower = this.gfn_toLower("HELLO");  // "hello"
```

---

## 4. 유틸리티 함수 - 숫자

### 4.1 gfn_appendComma - 숫자에 쉼표 추가

```javascript
/**
 * @param nNumber  - 숫자
 * @param nDetail  - 소수점 이하 자릿수 (기본: 0)
 * @return 쉼표가 포함된 문자열
 */

var comma  = this.gfn_appendComma(1234567);        // "1,234,567"
var float  = this.gfn_appendComma(1234567.89, 2);  // "1,234,567.89"

// 사용 예: Static 건수 표시
this.sta_totalCnt.set_text(this.gfn_appendComma(totalCnt) + "건");
```

### 4.2 gfn_removeComma - 쉼표 제거

```javascript
var num = this.gfn_removeComma("1,234,567");  // "1234567"
```

### 4.3 gfn_getDigit - 숫자만 추출

```javascript
var digits = this.gfn_getDigit("ABC123DEF456");  // "123456"
```

---

## 5. 유틸리티 함수 - 타입/Null 검사

이 함수들은 가장 빈번하게 사용되는 공통 함수다.

### 5.1 gfn_isNull / gfn_isNotNull

```javascript
/**
 * null, undefined, 빈 문자열("")을 모두 null로 처리
 * @return boolean
 */

this.gfn_isNull(null);        // true
this.gfn_isNull(undefined);   // true
this.gfn_isNull("");          // true
this.gfn_isNull("value");     // false
this.gfn_isNull(0);           // false (0은 null이 아님)

this.gfn_isNotNull("value");  // true (gfn_isNull의 반대)

// 사용 예: Dataset 컬럼 값 체크
if (this.gfn_isNull(this.ds_list.getColumn(nRow, "custCd"))) {
    // 고객코드가 없는 경우
}
```

### 5.2 gfn_isEmpty / gfn_isNotEmpty

```javascript
// null, undefined, 빈 문자열, 빈 배열, 빈 객체 모두 empty 처리
this.gfn_isEmpty([]);        // true (빈 배열)
this.gfn_isEmpty({});        // true (빈 객체)
this.gfn_isEmpty("");        // true
this.gfn_isEmpty("value");   // false

this.gfn_isNotEmpty("val");  // true
```

### 5.3 타입 체크 함수

```javascript
this.gfn_isString("hello");    // true
this.gfn_isNumber(42);         // true
this.gfn_isBoolean(true);      // true
this.gfn_isArray([1, 2, 3]);   // true
this.gfn_isObject({});         // true
this.gfn_isFunction(fn);       // true
```

---

## 6. Validation 패턴

`Validation.xjs`의 함수를 사용한다.

### 6.1 저장 전 필수/형식 검증 표준 패턴

```javascript
this.fn_saveValid = function()
{
    // 1. 이전 Validation 규칙 초기화
    this.gfn_clearValidation(this.ds_info);

    // 2. 규칙 등록
    // gfn_setValidation(Dataset, 컬럼ID, 레이블명, 규칙, CSS에러표시여부)
    this.gfn_setValidation(this.ds_info, "tstCd",    "검사코드", "required", "Y");
    this.gfn_setValidation(this.ds_info, "tstNm",    "검사명",   "required", "Y");
    this.gfn_setValidation(this.ds_info, "aplyDt",   "적용일자", "required", "Y");
    this.gfn_setValidation(this.ds_info, "rcgnRte",  "인정률",   "required", "Y");
    this.gfn_setValidation(this.ds_info, "tstPrct",  "검사원가", "required", "Y");

    // 3. 유효성 검사 실행 ("A" = 전체 행 검사, "U" = 변경 행만)
    if (!this.gfn_validation(this.ds_info, "A")) return false;

    return true;
};

this.fn_save = function()
{
    if (!this.fn_saveValid()) return false;
    this.gfn_dsRequestSync(this.SVC_SAVE);
};
```

### 6.2 gfn_setValidation 규칙 종류

| 규칙 | 설명 |
|------|------|
| `"required"` | 필수 입력 (null/빈 값 불가) |
| `"length:N"` | 최대 길이 N 이하 |
| `"min:N"` | 최소값 N 이상 (숫자) |
| `"max:N"` | 최대값 N 이하 (숫자) |
| `"email"` | 이메일 형식 |
| `"phone"` | 전화번호 형식 |
| `"cellphone"` | 휴대폰번호 형식 |

### 6.3 개별 형식 검증 함수

```javascript
// 이메일 형식 검사
var bEmail = this.gfn_isEmail("test@example.com");   // true

// 휴대폰 번호 검사
var bCell  = this.gfn_isCellPhone("010-1234-5678");  // true

// 전화번호 검사
var bPhone = this.gfn_isPhone("02-123-4567");        // true

// 숫자만으로 구성되었는지 검사
var bDigit = this.gfn_isDigit("12345");              // true

// 주민등록번호 검사
var bSSN   = this.gfn_isSSN("900101-1234567");       // true

// 한글만으로 구성되었는지 검사
var bKorean = this.gfn_isKoreanChar("안녕하세요");   // true
```

---

## 7. Dataset 공통 함수

`Dataset.xjs`에 정의되어 있다.

### 7.1 gfn_dsIsUpdated - 변경 여부 확인

```javascript
/**
 * 신규(rowType=2), 수정(rowType=4), 삭제 행이 있으면 true
 */
if (!this.gfn_dsIsUpdated(this.ds_list)) {
    var sOption = {
        sPopId   : "alertNoChange",
        sMsgType : "A",
        sImgType : "A",
        sMsgId   : "00033"
    };
    this.gfn_message(sOption);
    return;
}
this.gfn_dsRequestSync(this.SVC_SAVE);
```

### 7.2 gfn_addRow - 그리드 행 추가

```javascript
/**
 * @param objDs - 행을 추가할 Dataset
 * @param sType - "A" = 최하단 추가, "B" = 최상단 추가, "C" = 선택 행 아래 추가
 * @return 추가된 행 번호 (-1 = 실패)
 */

// 하단에 행 추가
var newRow = this.gfn_addRow(this.ds_list, "A");

// 선택 행 아래 추가
var newRow = this.gfn_addRow(this.ds_list, "C");
```

### 7.3 gfn_dsGetUpdated - 변경 여부 + updateToDataset 처리

```javascript
/**
 * 현재 포커스된 컴포넌트의 값을 Dataset에 반영 후 변경 여부 확인
 * 저장 전 호출 시 사용 (gfn_dsIsUpdated보다 안전)
 */
var bUpdated = this.gfn_dsGetUpdated(this.ds_list);
```

### 7.4 gfn_isUpdatedRow - 특정 행 변경 여부 확인

```javascript
/**
 * @param objDs - Dataset
 * @param nRow  - 행 번호
 * @return 해당 행이 신규/수정이면 true
 */

for (var i = 0; i < this.ds_list.rowcount; i++) {
    if (this.gfn_isUpdatedRow(this.ds_list, i)) {
        // 변경된 행 처리
    }
}
```

---

## 8. Grid 공통 함수

`Grid.xjs`에 정의되어 있다.

### 8.1 gfn_setGrid - Grid 공통 기능 초기화

```javascript
/**
 * Grid에 정렬, 필터, 개인화, Excel export 등의 기능을 활성화
 * gfn_formOnLoad에서 자동 호출되므로, XFDL에서 griduserproperty 설정 시 자동 적용됨
 */

// XFDL에서 griduserproperty 설정 (필요 기능 콤마 구분)
// griduserproperty="sort,multisort,colhide"
// griduserproperty="sort,multisort,colhide,filter,personal,export"
```

### 8.2 griduserproperty 옵션 목록

| 옵션 | 기능 |
|------|------|
| `sort` | 컬럼 헤더 클릭 정렬 |
| `multisort` | 다중 컬럼 정렬 |
| `filter` | 셀 필터 (우클릭 메뉴) |
| `colhide` | 컬럼 숨기기/보이기 |
| `personal` | 그리드 개인화 (컬럼 순서, 크기 저장) |
| `export` | Excel export (우클릭 메뉴) |
| `import` | Excel import (우클릭 메뉴) |
| `replace` | 찾기/바꾸기 |
| `cellcopypaste` | 셀 복사/붙여넣기 |

### 8.3 gfn_deleteChkRow - 체크된 행 삭제

```javascript
/**
 * @param objDs   - Dataset
 * @param objGrid - Grid (선택)
 * 체크박스(_CHK == 1)인 행을 Dataset에서 삭제 처리
 */

this.fn_deleteRow = function()
{
    this.gfn_deleteChkRow(this.ds_list);
};
```

### 8.4 gfn_setGridCellFocus - 그리드 특정 셀로 포커스 이동

```javascript
/**
 * @param objGrid - Grid Object
 * @param nRow    - 행 번호
 * @param nCol    - 컬럼 번호
 */

this.gfn_setGridCellFocus(this.div_main.form.grd_list, 0, 0);
```

### 8.5 gfn_setGridTitleCnt - 그리드 헤더 건수 표시

```javascript
/**
 * 그리드 특정 헤더 셀에 "총 N건" 형식으로 건수 표시
 */
// gfn_formOnLoad에서 자동 처리되거나
// 조회 후 콜백에서 수동 호출 가능
this.sta_totalCnt.set_text("총 " + this.gfn_appendComma(totalCnt) + "건");
```

---

## 9. Excel 공통 함수

`Excel.xjs`에 정의되어 있다.

### 9.1 gfn_excelExportTransfer - 서버 Excel 다운로드

서버에서 Excel 파일을 생성하여 다운로드할 때 사용한다.

```javascript
/**
 * FileDownTransfer를 이용한 서버 생성 Excel 다운로드
 */
this.fn_excelDown = function()
{
    var objData = {
        svcId    : "excelDown"
      , url      : "GET::bl::daySell/excel"
      , inDs     : "ds_search"
      , filename : "일매출조회.xlsx"
      , callback : "fn_excelCallback"
    };
    this.gfn_excelExportTransfer(objData);
};

this.fn_excelCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) return;
    // 다운로드 완료 후처리
};
```

### 9.2 gfn_excelExport - 그리드 Excel export

Grid의 데이터를 클라이언트에서 Excel로 내보낸다.

```javascript
/**
 * @param objGrid  - Grid Object
 * @param sFileName - 저장 파일명
 * @param options  - 추가 옵션
 */

this.fn_excelExport = function()
{
    this.gfn_excelExport(
        this.div_main.form.grd_list,   // Grid
        "목록조회.xlsx"                  // 파일명
    );
};
```

### 9.3 gfn_excelImport - Excel에서 데이터 가져오기

```javascript
this.fn_excelImport = function()
{
    this.gfn_excelImport(
        this.ds_importList,   // 데이터를 저장할 Dataset
        "fn_importCallback"    // import 완료 콜백
    );
};

this.fn_importCallback = function(objDs)
{
    // import된 데이터 처리
    var rowCnt = this.ds_importList.rowcount;
};
```

---

## 10. 메시지/팝업 공통 함수

`Message.xjs`, `Popup.xjs`, `Frame.xjs`에 정의되어 있다.

### 10.1 gfn_message - 공통 메시지 팝업

```javascript
// Alert 메시지
var sOption = {
    sPopId   : "alertEx1",   // 팝업 ID (콜백 구분자)
    sMsgType : "A",           // A=Alert, C=Confirm
    sImgType : "A",           // A=Alert, C=Check, I=Info, W=Warning, E=Error
    sMsgId   : "00033"        // 메시지 ID
};
this.gfn_message(sOption);

// Confirm 메시지 (fn_messageCallback 필수)
var sOption = {
    sPopId   : "confirmSave",
    sMsgType : "C",
    sImgType : "W",
    sMsgId   : "msg.confirm.save"
};
this.gfn_message(sOption);

this.fn_messageCallback = function(strId, strVal)
{
    switch (strId) {
        case "confirmSave":
            if (strVal == "1") this.fn_save();   // "1" = 확인
            break;
    }
};
```

### 10.2 gfn_alert - 메시지 ID 기반 Alert

```javascript
// 단순 Alert
this.gfn_alert("msg.session.timeout");

// 치환 인자 포함
this.gfn_alert("BC0041", ["엑셀다운로드"], "excelPopup", "fn_msgCallback");
```

### 10.3 gfn_openPopup - 팝업 열기

```javascript
// 기본 Modal 팝업
var oArg    = { TITLE: "팝업제목", saveType: "I" };
var oOption = { titlebar: "false", width: "600", height: "540" };
this.gfn_openPopup("popupId", "BL::MODULE/UIBL0000P.xfdl", oArg, "fn_popupCallback", oOption);

// 팝업 콜백
this.fn_popupCallback = function(strId, strVal)
{
    switch (strId) {
        case "popupId":
            this.fn_search();   // 팝업 닫힌 후 재조회
            break;
    }
};
```

### 10.4 gfn_setCmnCd - 공통코드 Combo 초기화

```javascript
this.fn_searchComCode = function()
{
    this.param = [
          { ctgrId: "CD_CATEGORY_01", dsNm: "ds_cat01", compId: "div_search.form.cbo_cat01" }
        , { ctgrId: "CD_CATEGORY_02", dsNm: "ds_cat02", compId: "div_info.form.cbo_cat02", msgDiv: "" }
    ];
    this.gfn_setCmnCd(this, this.param, "fn_cmnCdCallback");
};

this.fn_cmnCdCallback = function()
{
    this.fn_search();   // 공통코드 로딩 후 초기 조회
};
```

---

## 11. 프레임/화면 제어 공통 함수

`Frame.xjs`에 정의되어 있다.

### 11.1 gfn_formOnLoad - Form 초기화 (필수 호출)

```javascript
// 모든 업무 Form의 form_onload 첫 줄에 반드시 호출
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    this.gfn_formOnLoad(this);   // [필수]
    // ...
};
```

### 11.2 gfn_findComp - 문자열 경로로 컴포넌트 찾기

```javascript
/**
 * @param sCompId - 컴포넌트 ID 또는 경로
 * @return 컴포넌트 객체 (없으면 null)
 */

var btn = this.gfn_findComp("div_search.form.btn_search");
if (!this.gfn_isNull(btn)) {
    btn.set_enable(false);
}
```

### 11.3 gfn_getGdsUserInfo - 로그인 사용자 정보 조회

```javascript
/**
 * @param sColId  - gds_userInfo Dataset의 컬럼명
 * @param sDefVal - 기본값 (선택)
 * @return 컬럼 값
 */

var userId   = this.gfn_getGdsUserInfo("userId");
var userNm   = this.gfn_getGdsUserInfo("userNm");
var deptCd   = this.gfn_getGdsUserInfo("deptCd");
var emplDivCd = this.gfn_getGdsUserInfo("emplDivCd");
var rspofcCd  = this.gfn_getGdsUserInfo("rspofcCd");
```

### 11.4 gfn_menuOpen - 메뉴 ID로 화면 열기

```javascript
// 특정 메뉴 ID에 해당하는 MDI 탭 오픈
this.gfn_menuOpen("MENU_BL_0010");
```

### 11.5 gfn_multicastOpenFormByUrl - 열린 화면에 함수 전달

```javascript
// 특정 URL로 열린 화면에 함수 호출
this.gfn_multicastOpenFormByUrl("BL::SELL/UIBL0010M.xfdl", "fn_refresh", null);

// 메뉴 ID 기준 화면에 함수 호출
this.gfn_multicastOpenFormByMenuId("MENU_ID", "fn_refresh", null);
```

---

## 12. 사용자 정보 조회 함수

### 12.1 gfn_getGdsUserInfo 주요 컬럼

```javascript
// 로그인 사용자 정보 (Application의 gds_userInfo Dataset에서 조회)
var userId     = this.gfn_getGdsUserInfo("userId");      // 사용자 ID
var userNm     = this.gfn_getGdsUserInfo("userNm");      // 사용자명
var deptCd     = this.gfn_getGdsUserInfo("deptCd");      // 부서코드
var deptNm     = this.gfn_getGdsUserInfo("deptNm");      // 부서명
var emplDivCd  = this.gfn_getGdsUserInfo("emplDivCd");   // 직원구분코드 (M=특영, L=정규직, S=씨젠 등)
var rspofcCd   = this.gfn_getGdsUserInfo("rspofcCd");    // 직책코드
var lhqrCd     = this.gfn_getGdsUserInfo("lhqrCd");      // 지역본부코드
var brncCd     = this.gfn_getGdsUserInfo("brncCd");      // 지점코드
```

### 12.2 sl_comm.xjs의 slfn 함수 (영업 공통)

```javascript
// Dataset 단일 컬럼값 Get/Set
var val = this.slfn_getDsVal(this.ds_search, "pageSize");
this.slfn_setDsVal(this.ds_search, "pageSize", 100);

// 전역 Dataset의 특정 컬럼값 조회
var deptCd = this.slfn_getDsVal(nexacro.getApplication()["gds_userInfo"], "deptCd");

// nvl 처리 (null이면 대치값)
var val = this.slfn_nvl(someValue, "");
```
