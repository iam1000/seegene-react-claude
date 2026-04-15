# NexacroN Form 생명주기 참조 가이드

## 목차 (TOC)

1. [Application 시작 흐름](#1-application-시작-흐름)
2. [Form 생명주기 이벤트](#2-form-생명주기-이벤트)
3. [form_onload 표준 패턴](#3-form_onload-표준-패턴)
4. [include 문 패턴](#4-include-문-패턴)
5. [이벤트 핸들러 시그니처](#5-이벤트-핸들러-시그니처)
6. [메시지 다이얼로그 패턴](#6-메시지-다이얼로그-패턴)
7. [팝업 폼 패턴](#7-팝업-폼-패턴)
8. [팝업 파라미터 수신 및 opener 접근](#8-팝업-파라미터-수신-및-opener-접근)
9. [프레임 제어 (MDI / ChildFrame)](#9-프레임-제어-mdi--childframe)
10. [공통코드 초기화 패턴](#10-공통코드-초기화-패턴)
11. [단축키 처리](#11-단축키-처리)
12. [Form 닫기 전 처리 (onbeforeclose)](#12-form-닫기-전-처리-onbeforeclose)

---

## 1. Application 시작 흐름

NexacroN 애플리케이션의 전체 시작 흐름은 다음과 같다.

```
nexacro.Application.onload
    │
    ├─ 환경 설정 로드 (Environment)
    ├─ 공통 Dataset 초기화 (gds_userInfo, gds_menu, gds_message 등)
    ├─ 로그인 화면 오픈
    │
로그인 성공
    │
    ├─ Main Frame 생성 (MDI 구조)
    │    ├─ 상단 헤더 영역
    │    ├─ 좌측 메뉴 트리
    │    └─ workFrameSet (업무 화면 영역)
    │
메뉴 클릭
    │
    └─ ChildFrame 생성
         └─ Form.onload 이벤트 → form_onload 함수 호출
```

### 1.1 전역 Application 객체 접근

```javascript
// 전역 Application 인스턴스
var objApp = nexacro.getApplication();

// 전역 Dataset 접근
var gds_userInfo = objApp.gds_userInfo;
var gds_menu     = objApp.gds_menu;
var gds_message  = objApp.gds_message;

// 전역 변수 접근
var gv_langCode  = objApp.gv_langCode;
var gv_runMode   = objApp.gv_runMode;   // "local" | "dev" | "prod"
```

---

## 2. Form 생명주기 이벤트

### 2.1 주요 Form 이벤트 순서

| 순서 | 이벤트 | 트리거 시점 |
|-----|--------|------------|
| 1 | `onload` | Form 최초 로드 완료 시 |
| 2 | `onactivate` | Form이 활성화(포커스 획득)될 때 |
| 3 | `ondeactivate` | Form이 비활성화(포커스 이탈)될 때 |
| 4 | `onbeforeclose` | Form 닫기 요청 직전 (취소 가능) |
| 5 | `onclose` | Form 닫힐 때 |

### 2.2 이벤트 핸들러 등록

XFDL의 `<Form>` 태그에 이벤트 속성으로 핸들러를 지정한다.

```xml
<Form id="UIBL0010M" width="1834" height="894"
      titletext="일매출조회"
      onload="form_onload">
```

---

## 3. form_onload 표준 패턴

### 3.1 표준 순서

모든 업무 Form의 `form_onload`는 아래 순서를 따른다.

```javascript
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    // [1] 필수 - 권한, 다국어, Validation 등 공통 초기화
    this.gfn_formOnLoad(this);

    // [2] 기본값 설정 (날짜, 로그인 사용자 정보 등)
    this.div_search.form.cal_searchDt.set_value(this.gfn_getDate());

    // [3] 공통코드 조회 (Combo 등)
    this.fn_searchComCode();

    // [4] 스크롤 페이징 초기화 (페이징 화면의 경우)
    this.scrollPage = new ScrollPage(
        this,
        this.div_main.form.grd_list,
        this.ds_list,
        this.ds_listScroll,
        "fn_search"
    );

    // [5] 권한 확인 (필요한 경우 동기 조회)
    this.fn_checkAuth();

    // [6] 초기 조회 (자동 조회가 필요한 경우)
    // this.fn_search();
};
```

### 3.2 gfn_formOnLoad 내부 처리 항목

`gfn_formOnLoad(this)` 한 줄이 다음 내용을 자동으로 처리한다.

- 권한 정보 기반 버튼/콤보 활성화 제어
- MDI ChildFrame 크기 설정
- Floating 팝업 처리
- 단축키 이벤트 등록 (`onkeydown`)
- 컴포넌트 초기화 (`gfn_initComp`)
- Grid 권한 처리 (`gfn_setAuthGrid`)
- 다국어 적용 (`gfn_applyI18n`)
- Validation 설정 (`gfn_setCompValidation`)

### 3.3 팝업 Form의 form_onload

팝업 Form은 `gfn_formOnLoad` 이후에 부모 Form(`this.opener`)에서 데이터를 복사한다.

```javascript
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    this.gfn_formOnLoad(this);

    // 공통코드 초기화
    this.fn_searchComCode();
};

this.fn_searchComCode = function()
{
    this.param = [
        { ctgrId: "MD_TST_GRUP_CD", dsNm: "ds_grupCd", compId: "div_info.form.cbo_grupCd" }
    ];
    this.gfn_setCmnCd(this, this.param, "fn_cmnCdCallback");

    // 수정 모드: 부모 Form에서 데이터 복사
    if (this.parent.saveType == "U") {
        this.ds_info.copyRow(0, this.opener.ds_list, this.opener.ds_list.rowposition);
        this.div_info.form.edt_key.set_enable(false);   // 키 필드 비활성화
    } else {
        // 신규 모드: 기본값 설정
        this.div_info.form.cal_aplyDt.set_value(this.gfn_getDate());
    }
    this.ds_info.setColumn(0, "saveType", this.parent.saveType);
};
```

---

## 4. include 문 패턴

### 4.1 공통 라이브러리 include

업무 XFDL 파일의 스크립트 섹션 최상단에 위치한다. 사용하는 모듈에 따라 선택적으로 포함한다.

```javascript
/************************************************
 * Common Library
 ************************************************/
// BL 업무 공통 (대부분의 BL 화면에서 사용)
include "SL::CMMN/sl_comm.xjs";

// 단계별 콤보 (지역본부 → 지점 등 연계 콤보)
include "SL::CMMN/sl_stepComp.xjs";
```

### 4.2 include 경로 규칙

- `SL::` - 세일즈 레이어 공통 모듈 prefix
- `BL::` - 비즈니스 레이어 모듈 prefix
- `LM::` - LIS 마스터 모듈 prefix
- `cmm::` - 공통(cmm) 화면 prefix

```javascript
// 업무별 공통 라이브러리 예시
include "SL::CMMN/sl_comm.xjs";         // 영업 공통
include "SL::CMMN/sl_stepComp.xjs";     // 단계 콤보

// 팝업 화면 열기 예시
this.gfn_openPopup("tstCd", "LM::CMMNPOP/UILM1000P01.xfdl", oArg, "fn_popupCallback", oOption);
this.gfn_openPopup("info",  "BL::MKRT/UIBL0411P01.xfdl", oArg, "fn_popupCallback", oOption);
```

---

## 5. 이벤트 핸들러 시그니처

### 5.1 Form 이벤트

```javascript
// Form onload
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo) { };

// Form onclose
this.form_onclose = function(obj:nexacro.Form, e:nexacro.CloseEventInfo) { };

// Form onbeforeclose
this.form_onbeforeclose = function(obj:nexacro.Form, e:nexacro.CloseEventInfo) { };
```

### 5.2 Button 이벤트

```javascript
// Button onclick - 네이밍: {상위Div}_{컴포넌트ID}_onclick
this.div_search_btn_search_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fn_search();
};

this.div_main_btn_save_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fn_save();
};
```

### 5.3 Grid 이벤트

```javascript
// Grid 셀 클릭
this.div_main_grd_list_oncellclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    var nRow = e.row;
    this.fn_selectRow(nRow);
};

// Grid 셀 더블클릭 - 수정 팝업 오픈
this.div_main_grd_list_oncelldblclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    this.fn_infoPopup("U");
};
```

### 5.4 Edit / Calendar 이벤트

```javascript
// Edit onkeyup - Enter 키 조회 처리
this.fn_search_onkeyup = function(obj:nexacro.Edit, e:nexacro.KeyEventInfo)
{
    if (e.keycode != 13) return;
    this.fn_search();
};

// Combo onitemchanged
this.div_search_cbo_type_onitemchanged = function(obj:nexacro.Combo, e:nexacro.ItemChangeEventInfo)
{
    var sValue = e.postvalue;
    this.fn_onChangeType(sValue);
};
```

### 5.5 주요 EventInfo 타입 목록

| 이벤트 | EventInfo 타입 | 주요 속성 |
|--------|---------------|----------|
| Button `onclick` | `nexacro.ClickEventInfo` | - |
| Grid `oncellclick` | `nexacro.GridClickEventInfo` | `row`, `col`, `celltext` |
| Edit `onkeyup` | `nexacro.KeyEventInfo` | `keycode` |
| Form `onload` | `nexacro.LoadEventInfo` | - |
| Combo `onitemchanged` | `nexacro.ItemChangeEventInfo` | `prevalue`, `postvalue` |

---

## 6. 메시지 다이얼로그 패턴

### 6.1 gfn_message - 공통 메시지 팝업 (표준)

`gfn_message`는 메시지 ID 기반의 다국어 지원 메시지 팝업이다. 모든 업무 화면에서 이 함수를 사용한다.

```javascript
/**
 * oOption 프로퍼티:
 *   sPopId   : 팝업 ID (콜백 switch case 구분자, 중복 방지)
 *   sMsgType : "A" = Alert, "C" = Confirm
 *   sImgType : "C" = Check, "I" = Info, "A" = Alert, "W" = Warning, "E" = Error
 *   sMsgId   : 메시지 ID (gds_message Dataset에서 조회)
 *   arrArg   : 메시지 치환 인자 배열 (예: {0}, {1} 치환)
 */

// Alert 메시지 (확인 버튼만)
var sOption = {
    sPopId   : "alertEx1",
    sMsgType : "A",
    sImgType : "A",
    sMsgId   : "00033"    // "변경된 내용이 없습니다"
};
this.gfn_message(sOption);

// Confirm 메시지 (확인/취소 버튼) - 콜백 필요
var sOption = {
    sPopId   : "confirmDelete",
    sMsgType : "C",
    sImgType : "W",
    sMsgId   : "msg.confirm.delete"
};
this.gfn_message(sOption);

// 확인/취소 Confirm 결과 처리
this.fn_messageCallback = function(strId, strVal)
{
    switch(strId) {
        case "confirmDelete":
            if (strVal == "1") {    // "1" = 확인, "0" = 취소
                this.fn_delete();
            }
            break;
    }
};
```

### 6.2 sMsgType 및 sImgType 값

| 상수 | sMsgType 의미 | sImgType 의미 |
|------|-------------|--------------|
| `"A"` | Alert (확인 버튼만) | Alert 아이콘 |
| `"C"` | Confirm (확인/취소) | - |
| `"S"` | System (Framework 내부용) | - |
| `"C"` | - | Check (성공) 아이콘 |
| `"I"` | - | Info (정보) 아이콘 |
| `"W"` | - | Warning (경고) 아이콘 |
| `"E"` | - | Error (오류) 아이콘 |

### 6.3 서버 응답 messageId로 메시지 표시

서버 API 응답에 포함된 `messageId`를 직접 `sMsgId`로 사용한다.

```javascript
case "saveInfo":
    var messageId = objResolveData.data.messageId;
    var sOption = {
        sPopId   : "msgId",
        sMsgType : "A",
        sImgType : "A",
        sMsgId   : messageId   // 서버에서 내려온 메시지 ID
    };
    this.gfn_message(sOption);
    break;
```

### 6.4 gfn_alert - 메시지 ID 기반 Alert

간단한 Alert에 사용한다. Confirm 메시지 타입도 지원한다.

```javascript
// 단순 Alert
this.gfn_alert("msg.session.timeout");

// 치환 인자 포함
this.gfn_alert("BC0041", ["엑셀다운로드"], "excelDown", "fn_msgCallback");

// Confirm (메시지 타입이 C인 경우 콜백 필수)
this.gfn_alert("msg.confirm.save", [], "confirmSave", "fn_msgCallback");
```

---

## 7. 팝업 폼 패턴

### 7.1 gfn_openPopup - 팝업 열기

```javascript
/**
 * @param sPopupId      - 팝업 ID (콜백 switch case 구분자)
 * @param sUrl          - 팝업 XFDL 경로 ("모듈::경로/파일명.xfdl")
 * @param oArg          - 팝업에 전달할 파라미터 객체
 * @param sPopupCallback - 팝업 닫힐 때 호출할 콜백 함수명 (생략 시 "fn_popupCallback")
 * @param oOption       - 팝업 옵션 (크기, 타이틀바, 팝업타입 등)
 */
this.gfn_openPopup(sPopupId, sUrl, oArg, sPopupCallback, oOption);
```

### 7.2 Modal 팝업 (기본)

```javascript
this.fn_infoPopup = function(saveType)
{
    var oArg = {
        pageType : "BTN",
        TITLE    : "검사코드 등록",    // 팝업 타이틀
        saveType : saveType           // "I" = 신규, "U" = 수정
    };
    var oOption = {
        titlebar : "false",           // 커스텀 타이틀바 사용
        width    : "600",
        height   : "540"
    };
    this.gfn_openPopup("info", "BL::MKRT/UIBL0411P01.xfdl", oArg, "fn_popupCallback", oOption);
};
```

### 7.3 ModalWindow 팝업 (동기 반환값 처리)

```javascript
this.fn_searchTstPopup = function()
{
    var oArg = {
        pageType : "BTN",
        TITLE    : "검사코드 조회",
        schCd    : this.edt_tstCd.value
    };
    var oOption = {
        titlebar  : "false",
        width     : "800",
        height    : "900",
        popuptype : "modalwindow"    // 동기 팝업 - 팝업 닫힐 때 반환값 수신
    };

    // 반환값은 팝업에서 JSON.stringify로 전달한 값
    var tstInfo = JSON.parse(
        this.gfn_openPopup("tstCd", "LM::CMMNPOP/UILM1000P01.xfdl", oArg, "fn_popupCallback", oOption)
    );

    if (!this.gfn_isNull(tstInfo.tstCd)) {
        this.edt_tstCd.set_value(tstInfo.tstCd);
        this.edt_tstNm.set_value(tstInfo.tstNm);
    }
};
```

### 7.4 oOption 주요 속성

| 속성 | 값 | 설명 |
|-----|-----|------|
| `titlebar` | `"true"` / `"false"` | 기본 타이틀바 표시 여부 |
| `width` | `"600"` | 팝업 너비 (px) |
| `height` | `"540"` | 팝업 높이 (px) |
| `popuptype` | `"modal"` (기본) | Modal 팝업 (부모 비활성화) |
| `popuptype` | `"modeless"` | Modeless 팝업 (부모 활성 유지) |
| `popuptype` | `"modalwindow"` | Modal + 동기 반환값 |
| `popuptype` | `"floating"` | Floating 팝업 (항상 위) |
| `resizable` | `"true"` | 크기 조절 허용 |

### 7.5 팝업 콜백 처리

팝업이 닫힐 때 부모 Form의 `fn_popupCallback`이 호출된다.

```javascript
/**
 * 팝업 후처리
 * @param {String} strId  - 팝업 ID (gfn_openPopup의 sPopupId)
 * @param {String} strVal - 팝업에서 전달한 반환값
 */
this.fn_popupCallback = function(strId, strVal)
{
    switch(strId) {
        case "info":
            // 등록/수정 팝업 닫힌 후 재조회
            this.fn_search();
            break;

        case "tstCd":
            // 검사코드 선택 팝업 반환값 처리
            var tstInfo = JSON.parse(strVal);
            this.edt_tstCd.set_value(tstInfo.tstCd);
            break;
    }
};
```

---

## 8. 팝업 파라미터 수신 및 opener 접근

### 8.1 팝업 Form에서 파라미터 접근

`gfn_openPopup`의 `oArg`로 전달한 값은 팝업 Form에서 `this.parent` 또는
`this.gfn_getPopupArguments()`로 접근한다.

```javascript
// 부모에서 oArg = { saveType: "U", TITLE: "수정" } 로 전달한 경우

// 팝업 Form에서 접근 방법 1: this.parent (권장)
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    this.gfn_formOnLoad(this);

    var saveType = this.parent.saveType;   // "U"
    var title    = this.parent.TITLE;      // "수정"
};
```

### 8.2 opener로 부모 Form 접근

팝업 Form에서 `this.opener`를 통해 부모 Form의 Dataset, 컴포넌트, 함수에 접근한다.

```javascript
// 팝업 Form 내부

// 부모 Form의 Dataset에서 현재 행 데이터 복사
this.ds_info.copyRow(0, this.opener.ds_list, this.opener.ds_list.rowposition);

// 저장 성공 후 부모 Form 재조회 + 팝업 닫기
case "saveInfo":
    if (objResolveData.data.messageId == "00025") {
        this.opener.fn_search();   // 부모 Form의 fn_search 호출
        this.close();               // 팝업 닫기
    }
    break;
```

### 8.3 팝업 닫기

```javascript
// 팝업 Form 내부에서 닫기
this.close();

// 값을 반환하며 닫기 (modalwindow 타입인 경우)
this.close(JSON.stringify({ tstCd: "T001", tstNm: "혈액검사" }));

// 공통 팝업 닫기 함수 (개인화 저장 포함)
this.gfn_closePopup();
```

---

## 9. 프레임 제어 (MDI / ChildFrame)

### 9.1 MDI 탭 열기 (메뉴 오픈)

메뉴 클릭 시 MDI 탭을 생성하고 해당 XFDL을 로드한다. 이 처리는 공통 Frame 함수에서 자동으로 수행된다.

```javascript
// 메뉴 ID로 화면 열기
this.gfn_menuOpen(sMenuId);

// 현재 열린 MDI 탭 수 제한 확인
// pForm.FRAME_MDI_MAX_CNT = 15 (최대 15개)
```

### 9.2 현재 Form의 OwnerFrame 접근

```javascript
// 현재 Form을 감싸고 있는 ChildFrame 접근
var ownerFrame = this.getOwnerFrame();

// ChildFrame ID, 메뉴 정보
var frameId  = ownerFrame.id;
var menuId   = ownerFrame.menuId;
var prgmId   = ownerFrame.prgmId;
```

### 9.3 특정 화면에 함수 전달 (Multicast)

열려있는 다른 MDI 화면이나 팝업에 함수를 호출한다.

```javascript
// URL로 열린 화면에 함수 호출
this.gfn_multicastOpenFormByUrl("BL::SELL/UIBL0010M.xfdl", "fn_refresh", null);

// 메뉴 ID로 열린 화면에 함수 호출
this.gfn_multicastOpenFormByMenuId("MENU_SELL_001", "fn_refresh", null);

// 프로그램 ID로 열린 화면에 함수 호출
this.gfn_multicastOpenFormByPrgmId("UIBL0010M", "fn_refresh", null);
```

### 9.4 MDI 화면 크기 설정 상수

```javascript
pForm.FRAME_SIZE_LOGIN = "*,  0, 0, 0";   // 로그인 화면 (메인만)
pForm.FRAME_SIZE_MAIN  = "0, 79, *, 0";   // 메인 화면 (헤더 + 워크)
pForm.FRAME_SIZE_WORK  = "0, 79, 0, *";   // 업무 화면 (사이드바 + 워크)
```

---

## 10. 공통코드 초기화 패턴

### 10.1 gfn_setCmnCd - Combo 공통코드 로딩

```javascript
/**
 * @param objForm   - 현재 Form (this)
 * @param param     - 공통코드 설정 배열
 * @param sCallback - 로딩 완료 후 콜백 함수명 (선택)
 */
this.fn_searchComCode = function()
{
    this.param = [
        // ctgrId: 공통코드 카테고리, dsNm: 바인딩할 Dataset명, compId: Combo 컴포넌트 경로
        { ctgrId: "DC_CHNG_RESN_CD", dsNm: "ds_dcChngResnCd", compId: "div_search.form.cbo_dcChngResnCd" },
        { ctgrId: "MD_TST_GRUP_CD",  dsNm: "ds_grupCd",       compId: "div_info.form.cbo_grupCd" }
    ];

    // 콜백이 필요한 경우
    this.gfn_setCmnCd(this, this.param, "fn_cmnCdCallback");

    // 콜백 없이 로딩만 할 경우
    // this.gfn_setCmnCd(this, this.param);
};

// 공통코드 로딩 완료 콜백
this.fn_cmnCdCallback = function()
{
    // 초기 조회
    this.fn_search();
};
```

### 10.2 연계 콤보 초기화 (지역본부 → 지점)

```javascript
this.fn_initSalsComCombo = function()
{
    this.comboParam = [
          { "compId": "div_search.form.cbo_lhqr", "dsNm": "ds_lhqr", "msgDiv": "A", "sCallback": "fn_apiCallback" }
        , { "compId": "div_search.form.cbo_brnc", "dsNm": "ds_brnc", "msgDiv": "A", "sCallback": "fn_apiCallback" }
    ];
    this.slfn_stepCompDeptInit(this, this.comboParam);
};
```

---

## 11. 단축키 처리

### 11.1 지원 단축키 목록

```javascript
// 사용 가능한 단축키 상수 (Frame.xjs 정의)
pForm.HOTKEY_LIST = [
    "CS",  // Ctrl+S (저장)
    "CQ",  // Ctrl+Q (닫기)
    "CN",  // Ctrl+N (신규)
    "CW",  // Ctrl+W (닫기)
    "CI",  // Ctrl+I
    "F1",  // F1
    "F2",  // F2
    "F3",  // F3
    "F4",  // F4
    "F5",  // F5 (조회)
    "F8",  // F8
    "F9",  // F9
    "F10", // F10
    "ESC", // ESC
    "PL",  // PageLeft
    "PR",  // PageRight
    "C1",  // Ctrl+1
    "C2",  // Ctrl+2
    "C3"   // Ctrl+3
];
```

### 11.2 onkeydown 이벤트 처리

```javascript
// gfn_formOnLoad 호출 시 자동 등록됨
// 업무 화면에서 단축키 처리가 필요한 경우 fn_hotkey 함수 구현
this.fn_hotkey = function(sKey)
{
    switch(sKey) {
        case "F5":   // 조회
            this.fn_search();
            break;

        case "CS":   // Ctrl+S 저장
            this.fn_save();
            break;

        case "ESC":  // 팝업 닫기
            this.close();
            break;
    }
};
```

---

## 12. Form 닫기 전 처리 (onbeforeclose)

### 12.1 변경 내용 확인 후 닫기

```javascript
// gfn_checkEventOnBeforeClose - 저장 확인 메시지 자동 처리
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    this.gfn_formOnLoad(this);

    // 닫기 전 변경 내용 확인 Confirm 등록
    this.gfn_checkEventOnBeforeClose(this, "ds_list", "msg.confirm.close");
};
```

### 12.2 onbeforeclose 직접 처리

```javascript
this.form_onbeforeclose = function(obj:nexacro.Form, e:nexacro.CloseEventInfo)
{
    // Dataset 변경 여부 확인
    if (this.gfn_dsIsUpdated(this.ds_list)) {
        var sOption = {
            sPopId   : "confirmClose",
            sMsgType : "C",
            sImgType : "W",
            sMsgId   : "msg.confirm.close"
        };
        this.gfn_message(sOption);
        e.cancel = true;    // 닫기 취소
        return;
    }
};

this.fn_messageCallback = function(strId, strVal)
{
    switch(strId) {
        case "confirmClose":
            if (strVal == "1") {   // 확인 클릭
                // onbeforeclose 이벤트 제거 후 닫기
                this.gfn_clearEventOnBeforeClose(this);
                this.close();
            }
            break;
    }
};
```
