# XFDL 파일 구조 레퍼런스

## 목차

- [1. XFDL 파일 개요](#1-xfdl-파일-개요)
- [2. 전체 파일 구조](#2-전체-파일-구조)
- [3. Form 태그 핵심 속성](#3-form-태그-핵심-속성)
- [4. Layouts 섹션](#4-layouts-섹션)
- [5. Objects 섹션 — Dataset 선언](#5-objects-섹션--dataset-선언)
- [6. Bind 섹션](#6-bind-섹션)
- [7. Script 섹션](#7-script-섹션)
- [8. 컴포넌트 배치 패턴](#8-컴포넌트-배치-패턴)
- [9. Grid 구조 상세](#9-grid-구조-상세)
- [10. 조회 화면 템플릿 (Main Form)](#10-조회-화면-템플릿-main-form)
- [11. 등록/수정 팝업 템플릿 (Popup Form)](#11-등록수정-팝업-템플릿-popup-form)

---

## 1. XFDL 파일 개요

XFDL(eXtensible Form Definition Language)은 Nexacro N에서 화면을 정의하는 XML 기반 파일 형식이다.
파일 확장자는 `.xfdl`이며, FDL(Form Definition Language) 버전 2.0 또는 2.1 을 사용한다.

### 파일 네이밍 규칙

```
UI[모듈코드][번호][타입].xfdl
```

| 타입 | 의미 | 예시 |
|------|------|------|
| M    | Main(조회/목록) 화면 | UIBL0360M.xfdl |
| P    | Popup 화면 | UIBL0690P.xfdl |
| L    | List 화면 | UIBL0100L.xfdl |

### 모듈 코드 예시 (Seegene LIS 기준)

| 코드 | 모듈명 |
|------|--------|
| BL   | BILL (청구/수금) |
| CM   | Common (공통) |
| SL   | Sales (영업) |
| TS   | Test (검사) |

---

## 2. 전체 파일 구조

XFDL 파일은 다음 순서의 최상위 섹션으로 구성된다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<FDL version="2.1">
  <Form id="..." width="..." height="..." titletext="..." onload="...">

    <!-- 1) 화면 레이아웃 및 컴포넌트 배치 -->
    <Layouts>
      <Layout ...>
        <!-- 컴포넌트 선언 -->
      </Layout>
    </Layouts>

    <!-- 2) 데이터셋 선언 (화면에 보이지 않는 데이터 오브젝트) -->
    <Objects>
      <Dataset id="..." ...>
        <ColumnInfo> ... </ColumnInfo>
        <Rows> ... </Rows>
      </Dataset>
    </Objects>

    <!-- 3) 컴포넌트 ↔ 데이터셋 바인딩 -->
    <Bind>
      <BindItem id="..." compid="..." propid="value" datasetid="..." columnid="..."/>
    </Bind>

    <!-- 4) XScript 5.1 스크립트 -->
    <Script type="xscript5.1"><![CDATA[
      // 스크립트 코드
    ]]></Script>

  </Form>
</FDL>
```

> **주의**: `Bind` 섹션은 `Objects` 섹션 앞에 위치하는 경우도 있다. 넥사크로 스튜디오가 자동으로 순서를 관리하므로 수동 편집 시 위치에 주의한다.

---

## 3. Form 태그 핵심 속성

```xml
<Form
  id="UIBL0360M"
  width="1672"
  height="894"
  titletext="접수가격 변경"
  cssclass="frm_POP"
  onload="form_onload"
  locale="ko_KR"
>
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `id` | String | Form 고유 식별자. 파일명과 일치시킨다. |
| `width` | Number | Form 기본 너비 (px) |
| `height` | Number | Form 기본 높이 (px) |
| `titletext` | String | 창 제목 표시 문자열 |
| `cssclass` | String | 적용할 CSS 클래스명. 팝업은 `frm_POP` 사용 |
| `onload` | EventHandler | Form 로드 완료 시 호출할 함수명 |
| `locale` | String | 언어/지역 설정. 예: `ko_KR`, `en_US` |
| `left`, `top` | Number | Form 위치. 보통 `0, 0` |

---

## 4. Layouts 섹션

### 기본 구조

```xml
<Layouts>
  <Layout height="894" width="1672" mobileorientation="landscape">
    <!-- 컴포넌트들 -->
  </Layout>
</Layouts>
```

`Layout` 태그는 화면 크기 또는 디바이스 방향에 따라 여러 개 정의할 수 있다.
기본 레이아웃은 이름이 없거나 `default`이다. 추가 레이아웃은 `maxwidth`, `minwidth` 등의 조건으로 활성화된다.

### 멀티 레이아웃 예시

```xml
<Layouts>
  <!-- 기본 레이아웃: 1024px 이상 -->
  <Layout height="768" width="1024">
    <Button id="btn1" left="10" top="10" width="120" height="30"/>
    <Button id="btn2" left="140" top="10" width="120" height="30"/>
  </Layout>
  <!-- 모바일 레이아웃: 640px 이하 -->
  <Layout height="768" maxwidth="640">
    <Button id="btn1" left="10" top="10" width="300" height="40"/>
    <Button id="btn2" left="10" top="60" width="300" height="40"/>
  </Layout>
</Layouts>
```

### 컴포넌트 위치 지정 방식

컴포넌트는 절대좌표 또는 다른 컴포넌트를 기준으로 상대 위치를 지정할 수 있다.

```xml
<!-- 절대좌표 -->
<Button id="btn_search" left="200" top="20" width="88" height="34"/>

<!-- 상대좌표: 다른 컴포넌트 id를 기준으로 지정 -->
<!-- "컴포넌트ID:오프셋" 형식 -->
<Static id="sta_label" left="20" top="20" width="58" height="30"/>
<Edit   id="edt_value" left="sta_label:0" top="20" width="145" height="30"/>

<!-- right/bottom: 우측/하단 기준 고정 -->
<Button id="btn_ok" right="10" bottom="10" width="88" height="34"/>
```

---

## 5. Objects 섹션 — Dataset 선언

Dataset은 Form 내 데이터를 저장하는 오브젝트이다. 화면에 보이지 않으며 Grid나 컴포넌트에 바인딩하여 사용한다.

### 기본 Dataset 구조

```xml
<Objects>
  <Dataset id="ds_search">
    <ColumnInfo>
      <Column id="recpDt"   type="STRING" size="256" description="접수일자"/>
      <Column id="recpNo"   type="STRING" size="256" description="접수번호"/>
      <Column id="pageSize" type="INT"    size="256" description="페이지크기"/>
    </ColumnInfo>
    <Rows>
      <Row>
        <Col id="pageSize">50</Col>
      </Row>
    </Rows>
  </Dataset>
</Objects>
```

### Column 타입

| type | 설명 |
|------|------|
| `STRING` | 문자열 (기본값. 대부분의 경우 사용) |
| `INT` | 정수 |
| `FLOAT` | 부동소수점 |
| `DATE` | 날짜 |
| `BLOB` | 이진 데이터 |

> 실무에서는 숫자형 데이터도 대부분 `STRING` 타입으로 선언하고 스크립트에서 변환하여 사용한다.

### Dataset 주요 속성

| 속성 | 설명 |
|------|------|
| `id` | Dataset 식별자. `ds_` 접두사 사용 |
| `useclientlayout` | `"true"` 설정 시 서버에서 레이아웃을 내려받지 않고 클라이언트 선언을 사용 |
| `oncolumnchanged` | 특정 컬럼 값이 변경될 때 호출되는 이벤트 핸들러 |

### 페이지네이션 Dataset 패턴

```xml
<Dataset id="ds_pagination" useclientlayout="true">
  <ColumnInfo>
    <Column id="totalDataCount" type="STRING" size="256" description="전체 건수"/>
    <Column id="totalPageCount" type="STRING" size="256" description="전체 페이지수"/>
    <Column id="pageIndex"      type="STRING" size="256" description="현재 페이지"/>
    <Column id="pageSize"       type="STRING" size="256" description="페이지 크기"/>
    <Column id="startRowNum"    type="STRING" size="256" description="시작 행번호"/>
    <Column id="endRowNum"      type="STRING" size="256" description="종료 행번호"/>
  </ColumnInfo>
</Dataset>
```

### 공통코드(Combo) Dataset 패턴

```xml
<Dataset id="ds_useYn" useclientlayout="true">
  <ColumnInfo>
    <Column id="cd"  type="STRING" size="256"/>
    <Column id="cdNm" type="STRING" size="256"/>
  </ColumnInfo>
  <Rows>
    <Row><Col id="cd">Y</Col><Col id="cdNm">사용</Col></Row>
    <Row><Col id="cd">N</Col><Col id="cdNm">미사용</Col></Row>
  </Rows>
</Dataset>
```

---

## 6. Bind 섹션

Bind 섹션은 컴포넌트의 속성(주로 `value`)과 Dataset의 컬럼을 연결한다.
바인딩된 컴포넌트는 Dataset 행 포인터가 이동하면 자동으로 값이 갱신된다.

### BindItem 구조

```xml
<Bind>
  <BindItem
    id="item0"
    compid="edt_recpNo"
    propid="value"
    datasetid="ds_search"
    columnid="recpNo"
  />
</Bind>
```

| 속성 | 설명 |
|------|------|
| `id` | BindItem 고유 식별자. `item0`, `item1`... 자동 부여 |
| `compid` | 바인딩할 컴포넌트 ID. Div 내부 컴포넌트는 `div_search.form.edt_value` 형식 |
| `propid` | 바인딩할 컴포넌트 속성. 주로 `value` |
| `datasetid` | 연결할 Dataset ID |
| `columnid` | 연결할 Dataset 컬럼 ID |

### Div 내부 컴포넌트 참조

```xml
<!-- div_search 안의 cal_recpDt 컴포넌트를 바인딩 -->
<BindItem id="item5"
  compid="div_search.form.cal_recpDt"
  propid="value"
  datasetid="ds_search"
  columnid="recpDt"
/>
```

---

## 7. Script 섹션

Script 섹션은 CDATA 블록으로 감싸진 XScript 5.1 코드를 포함한다.
XScript 5.1은 JavaScript ES5를 기반으로 Nexacro 전용 API가 추가된 언어이다.

### 기본 구조

```xml
<Script type="xscript5.1"><![CDATA[
/**
*  화면명
*  @MenuPath    모듈 > 서브모듈
*  @FileName    UIXX0000M.xfdl
*  @Creator     개발자명
*  @CreateDate  YYYY.MM.DD
*  @Desction    화면 설명
************** 소스 수정 이력 *************************************************************
*  date                 Modifier                Description
*******************************************************************************************
*  YYYY.MM.DD           개발자명                최초 생성
*******************************************************************************************
*/

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

]]></Script>
```

### include 문

공통 라이브러리를 포함하는 `include` 문은 스크립트 최상단에 선언한다.

```javascript
include "SL::CMMN/sl_comm.xjs";      // 공통 함수 라이브러리
include "SL::CMMN/sl_stepComp.xjs";  // 단계 컴포넌트 라이브러리
```

### 이벤트 핸들러 함수 형식

```javascript
// Form 이벤트
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    // Form 로드 시 실행
};

// Button onclick
this.btn_search_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fn_search();
};

// Dataset 컬럼 변경
this.ds_search_oncolumnchanged = function(obj:nexacro.NormalDataset, e:nexacro.DSColChangeEventInfo)
{
    // 컬럼 값 변경 처리
};

// Grid 셀 클릭
this.grd_list_oncellclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    var nRow = e.row;
    var sValue = obj.getCellText(nRow, "colId");
};
```

---

## 8. 컴포넌트 배치 패턴

### 기본 컴포넌트 속성

모든 컴포넌트는 다음 공통 속성을 가진다.

| 속성 | 설명 |
|------|------|
| `id` | 컴포넌트 고유 ID (필수) |
| `taborder` | Tab 키로 이동하는 순서 |
| `left`, `top` | 절대 좌표 또는 상대 참조 |
| `width`, `height` | 크기 (px). `right`/`bottom`으로 대체 가능 |
| `right`, `bottom` | 우/하 기준 고정. `left`/`top`과 혼용 가능 |
| `cssclass` | 적용할 CSS 클래스 |
| `visible` | 표시 여부. `true`/`false` |
| `enable` | 활성화 여부. `true`/`false` |

### 주요 컴포넌트 선언 예시

```xml
<!-- 레이블 -->
<Static id="sta_label" taborder="0"
  text="고객명" left="20" top="20" width="58" height="30"
  cssclass="sta_WF_InputLabel"/>

<!-- 입력 필드 -->
<Edit id="edt_custNm" taborder="1"
  left="sta_label:0" top="20" width="145" height="30"
  onkeyup="fn_enterSearch" maxlength="50" imemode="hangul"/>

<!-- 날짜 선택 -->
<Calendar id="cal_recpDt" taborder="2"
  left="edt_custNm:10" top="20" width="145" height="30"
  displaynulltext="YYYY-MM-DD" dateformat="yyyy-MM-dd"
  onkeyup="fn_enterSearch"/>

<!-- 드롭다운 -->
<Combo id="cbo_useYn" taborder="3"
  left="cal_recpDt:10" top="20" width="80" height="30"
  binddataset="ds_useYn" codecolumn="cd" datacolumn="cdNm"/>

<!-- 버튼 -->
<Button id="btn_search" taborder="4"
  text="조회" width="88" height="34"
  cssclass="btn_WF_Search"
  right="10" bottom="17"
  onclick="div_search_btn_search_onclick"/>

<!-- Div 컨테이너 (검색 영역) -->
<Div id="div_search" taborder="0"
  left="0" top="0" height="70" right="0"
  cssclass="div_WF_Search" text="">
  <Layouts>
    <Layout>
      <!-- 검색 영역 컴포넌트들 -->
    </Layout>
  </Layouts>
</Div>
```

### CSS 클래스 명명 패턴

| 클래스명 | 용도 |
|----------|------|
| `sta_WF_InputLabel` | 입력 필드 앞의 레이블 Static |
| `sta_WF_Sention` | 섹션 제목 Static |
| `div_WF_Search` | 검색 영역 Div |
| `div_WF_BgWhite` | 흰색 배경 Div (결과 영역) |
| `btn_WF_Search` | 조회 버튼 |
| `btn_WF_ExcelUp` | 엑셀 업로드 버튼 |
| `btn_WF_FileDownload` | 파일 다운로드 버튼 |
| `btn_POP_Close` | 팝업 닫기 버튼 |
| `sta_POP_Title` | 팝업 제목 Static |
| `frm_POP` | 팝업 Form의 cssclass |
| `Secondary` | 보조 버튼 (회색 계열) |
| `SecondaryLine` | 보조 라인 버튼 |

---

## 9. Grid 구조 상세

### Grid 기본 구조

```xml
<Grid id="grd_list" taborder="0"
  left="10" top="40" right="10" bottom="10"
  binddataset="ds_rcptList"
  autofittype="col"
  showselection="false"
  selecttype="row"
  griduserproperty="checkboxall">

  <Formats>
    <Format id="default">

      <!-- 열 너비 정의 -->
      <Columns>
        <Column size="90"/>
        <Column size="200"/>
        <Column size="80"/>
      </Columns>

      <!-- 행 높이 정의 -->
      <Rows>
        <Row size="24" band="head"/>   <!-- 헤더 행 -->
        <Row size="30"/>               <!-- 데이터 행 (band 미지정 = body) -->
        <Row size="24" band="summ"/>   <!-- 합계 행 -->
      </Rows>

      <!-- 헤더 밴드 -->
      <Band id="head">
        <Cell text="접수일자"/>
        <Cell col="1" text="고객명"/>
        <Cell col="2" text="금액"/>
      </Band>

      <!-- 데이터 밴드 -->
      <Band id="body">
        <Cell displaytype="date" calendardateformat="yyyy-MM-dd"
              textAlign="center" text="bind:recpDt"/>
        <Cell col="1" text="bind:custNm" textAlign="left"
              tooltiptext="bind:custNm"/>
        <Cell col="2" text="bind:amt" displaytype="number"
              textAlign="right"/>
      </Band>

      <!-- 합계 밴드 -->
      <Band id="summary">
        <Cell colspan="2" text="합 계" textAlign="center"
              border="1px solid, 3px solid, 1px solid, 1px solid"/>
        <Cell col="2" displaytype="mask" maskeditformat="#,###"
              text="expr:dataset.getSum('parseInt(amt)')"
              textAlign="right" border="1px solid"/>
      </Band>

    </Format>
  </Formats>
</Grid>
```

### Grid 주요 속성

| 속성 | 값/설명 |
|------|---------|
| `binddataset` | 연결할 Dataset ID |
| `autofittype` | `"col"`: 열 너비 자동 조정, `"none"`: 고정 |
| `selecttype` | `"row"`: 행 선택, `"cell"`: 셀 선택 |
| `showselection` | 선택 강조 표시 여부 |
| `griduserproperty` | `"checkboxall"`: 헤더에 전체 선택 체크박스 표시 |
| `autosizingtype` | `"row"`: 행 높이 자동 조정 |

### Cell 주요 속성

| 속성 | 설명 |
|------|------|
| `col` | 열 인덱스 (0부터 시작. 미지정 시 0) |
| `row` | 행 인덱스 (멀티 헤더 행에서 사용) |
| `colspan` | 가로 셀 병합 수 |
| `rowspan` | 세로 셀 병합 수 |
| `text` | 표시 텍스트 또는 `bind:컬럼명` |
| `displaytype` | `"normal"`, `"date"`, `"number"`, `"currency"`, `"combocontrol"`, `"maskeditcontrol"`, `"expr:..."` |
| `edittype` | `"none"`, `"text"`, `"combo"`, `"mask"` |
| `textAlign` | `"left"`, `"center"`, `"right"` |
| `tooltiptext` | 툴팁. `"bind:컬럼명"` 형식 사용 |

### Grid 동적 displaytype (expr 사용)

```xml
<!-- 컬럼 값에 따라 다른 displaytype 적용 -->
<Cell col="9"
  text="bind:realAmt"
  displaytype="expr:(apybsCd == 'FIXED_AMOUNT')?'maskeditcontrol':'mask'"
  edittype="expr:(apybsCd == 'FIXED_AMOUNT')?'mask':'none'"
  maskeditformat="+###,###,##9"
  maskeditlimitbymask="integer"
/>
```

### 멀티 헤더 행 패턴

```xml
<Rows>
  <Row size="24" band="head"/>  <!-- head row 0 -->
  <Row size="24" band="head"/>  <!-- head row 1 -->
  <Row size="30"/>               <!-- body -->
</Rows>
<Band id="head">
  <!-- row 0, col 0: 2행 병합 -->
  <Cell rowspan="2" text="접수일자"/>
  <!-- row 0, col 7: 2열 병합 -->
  <Cell col="7" colspan="2" text="수가"/>
  <!-- row 1, col 7: 세부 헤더 -->
  <Cell row="1" col="7" text="기준가"/>
  <Cell row="1" col="8" text="금액"/>
</Band>
```

---

## 10. 조회 화면 템플릿 (Main Form)

조회/목록 화면의 완전한 XFDL 템플릿이다.
구조: 검색 영역 Div + 결과 Grid + Dataset + 트랜잭션

```xml
<?xml version="1.0" encoding="utf-8"?>
<FDL version="2.1">
  <Form id="UIXX0000M" width="1460" height="894"
        titletext="[화면명]" onload="form_onload">
    <Layouts>
      <Layout height="894" mobileorientation="landscape" width="1460">

        <!-- ===== 검색 영역 ===== -->
        <Div id="div_search" taborder="0"
             left="0" top="0" height="70" right="0"
             cssclass="div_WF_Search" text="">
          <Layouts>
            <Layout>
              <Static id="sta_label1" taborder="1"
                text="조회조건1" left="20" top="20" width="58" height="30"
                cssclass="sta_WF_InputLabel"/>
              <Edit id="edt_cond1" taborder="2"
                left="sta_label1:0" top="20" width="145" height="30"
                onkeyup="fn_enterSearch"/>
              <Static id="sta_label2" taborder="3"
                text="조회조건2" left="edt_cond1:20" top="20" width="58" height="30"
                cssclass="sta_WF_InputLabel"/>
              <Calendar id="cal_cond2" taborder="4"
                left="sta_label2:0" top="20" width="145" height="30"
                displaynulltext="YYYY-MM-DD" dateformat="yyyy-MM-dd"
                onkeyup="fn_enterSearch"/>
              <Button id="btn_search" taborder="0"
                text="조회" width="88" height="34"
                cssclass="btn_WF_Search"
                right="10" bottom="17"
                onclick="div_search_btn_search_onclick"/>
            </Layout>
          </Layouts>
        </Div>

        <!-- ===== 결과 영역 ===== -->
        <Div id="div_main" taborder="1"
             left="0" top="70" right="0" bottom="0"
             cssclass="div_WF_BgWhite" text="">
          <Layouts>
            <Layout>
              <Static id="sta_title" taborder="0"
                text="[목록 제목]" left="10" top="-10" width="200" height="60"
                cssclass="sta_WF_Sention" fittocontents="width"/>
              <Static id="sta_txt1"    taborder="1" text="총"   left="sta_title:10" top="10" width="18" height="20"/>
              <Static id="sta_totalCnt" taborder="2" text="0"   left="sta_txt1:0"   top="10" width="50" height="20" textAlign="right" fittocontents="width"/>
              <Static id="sta_txt2"    taborder="3" text="건"   left="sta_totalCnt:10" top="10" width="18" height="20"/>
              <Button id="btn_save" taborder="4"
                text="저장" width="62" height="30"
                cssclass="Secondary"
                top="6" right="10"
                onclick="div_main_btn_save_onclick"/>
              <Grid id="grd_list" taborder="5"
                left="10" top="40" right="10" bottom="10"
                binddataset="ds_list"
                autofittype="col"
                showselection="false"
                griduserproperty="checkboxall">
                <Formats>
                  <Format id="default">
                    <Columns>
                      <Column size="80"/>
                      <Column size="200"/>
                      <Column size="100"/>
                      <Column size="120"/>
                    </Columns>
                    <Rows>
                      <Row size="24" band="head"/>
                      <Row size="30"/>
                    </Rows>
                    <Band id="head">
                      <Cell text="항목1"/>
                      <Cell col="1" text="항목2"/>
                      <Cell col="2" text="항목3"/>
                      <Cell col="3" text="항목4"/>
                    </Band>
                    <Band id="body">
                      <Cell text="bind:col1" textAlign="center"/>
                      <Cell col="1" text="bind:col2" textAlign="left" tooltiptext="bind:col2"/>
                      <Cell col="2" text="bind:col3" textAlign="center"/>
                      <Cell col="3" text="bind:col4" displaytype="number" textAlign="right"/>
                    </Band>
                  </Format>
                </Formats>
              </Grid>
            </Layout>
          </Layouts>
        </Div>

      </Layout>
    </Layouts>

    <!-- ===== Bind ===== -->
    <Bind>
      <BindItem id="item0" compid="div_search.form.edt_cond1" propid="value" datasetid="ds_search" columnid="cond1"/>
      <BindItem id="item1" compid="div_search.form.cal_cond2" propid="value" datasetid="ds_search" columnid="cond2"/>
    </Bind>

    <!-- ===== Objects (Dataset) ===== -->
    <Objects>
      <Dataset id="ds_search">
        <ColumnInfo>
          <Column id="cond1" type="STRING" size="256" description="조회조건1"/>
          <Column id="cond2" type="STRING" size="256" description="조회조건2"/>
        </ColumnInfo>
        <Rows>
          <Row/>
        </Rows>
      </Dataset>
      <Dataset id="ds_list" useclientlayout="true">
        <ColumnInfo>
          <Column id="col1" type="STRING" size="256" description="항목1"/>
          <Column id="col2" type="STRING" size="256" description="항목2"/>
          <Column id="col3" type="STRING" size="256" description="항목3"/>
          <Column id="col4" type="STRING" size="256" description="항목4"/>
        </ColumnInfo>
      </Dataset>
      <Dataset id="ds_pagination" useclientlayout="true">
        <ColumnInfo>
          <Column id="totalDataCount" type="STRING" size="256"/>
          <Column id="totalPageCount" type="STRING" size="256"/>
          <Column id="pageIndex"      type="STRING" size="256"/>
          <Column id="pageSize"       type="STRING" size="256"/>
        </ColumnInfo>
      </Dataset>
    </Objects>

    <!-- ===== Script ===== -->
    <Script type="xscript5.1"><![CDATA[
/**
*  [화면명]
*  @MenuPath    [모듈] > [서브모듈]
*  @FileName    UIXX0000M.xfdl
*  @Creator     개발자명
*  @CreateDate  YYYY.MM.DD
*  @Desction    [화면 설명]
************** 소스 수정 이력 *************************************************************
*  date                 Modifier                Description
*******************************************************************************************
*  YYYY.MM.DD           개발자명                최초 생성
*******************************************************************************************
*/

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
    this.fn_searchComCode();   // 공통코드 조회
};

/********************************************************************************************
* TRANSACTION 서비스 호출 처리
********************************************************************************************/
/**
* @description 공통코드 조회
* @return N/A
*/
this.fn_searchComCode = function()
{
    this.param = [
        {ctgrId : "USE_YN", dsNm : "ds_useYn", compId : "div_search.form.cbo_useYn"}
    ];
    this.gfn_setCmnCd(this, this.param, "fn_cmnCdCallback");
};

/**
* @description 공통코드 콜백
* @return N/A
*/
this.fn_cmnCdCallback = function()
{
    // 공통코드 로드 완료 후 초기 조회
    this.fn_search();
};

/**
* @description 목록 조회
* @return N/A
*/
this.fn_search = function()
{
    this.SVC_SEARCH = {
        svcId : "searchList"
      , url   : "GET::xx::sample/selectSampleList"
      , inDs  : "ds_search"
      , outDs : "ds_list=result ds_pagination=pagination"
    };
    this.ds_list.clearData();
    this.gfn_dsRequestAsync(this.SVC_SEARCH);
};

/********************************************************************************************
* EVENT 핸들러 영역
********************************************************************************************/
/**
* @description 조회 버튼 클릭
*/
this.div_search_btn_search_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fn_search();
};

/**
* @description 검색 조건에서 엔터 키 입력 시 조회
*/
this.fn_enterSearch = function(obj:nexacro.Edit, e:nexacro.KeyEventInfo)
{
    if (e.keycode == 13) {
        this.fn_search();
    }
};

/********************************************************************************************
* CALLBACK 콜백 처리부분
********************************************************************************************/
/**
* @description 트랜잭션 후처리
* @param {String} strSvcId       서비스 ID
* @param {Number} nErrorCode     결과값 (0:성공, -1:실패)
* @param {Object} objResolveData response data
*/
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) {
        return;
    }

    switch (strSvcId) {
        case "searchList":
            var totalDataCount = this.slfn_getDsVal(this.ds_pagination, "totalDataCount");
            this.fn_setTotalCnt(totalDataCount, this.div_main.form);
            this.gfn_initCheckboxAll(this.div_main.form.grd_list);
            break;
    }
};

    ]]></Script>
  </Form>
</FDL>
```

---

## 11. 등록/수정 팝업 템플릿 (Popup Form)

팝업 화면의 XFDL 템플릿이다. `cssclass="frm_POP"`을 Form에 설정한다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<FDL version="2.1">
  <Form id="UIXX0000P" width="800" height="600"
        titletext="[팝업명]" cssclass="frm_POP" onload="form_onload">
    <Layouts>
      <Layout height="600" width="800">

        <!-- ===== 팝업 헤더 ===== -->
        <Static id="sta_popTitle" taborder="0"
          text="[팝업명]" left="30" top="20" width="200" height="30"
          cssclass="sta_POP_Title"/>
        <Button id="btn_close" taborder="1"
          top="20" width="30" height="30"
          cssclass="btn_POP_Close"
          right="30"
          onclick="btn_close_onclick"/>

        <!-- ===== 입력 영역 ===== -->
        <Div id="div_input" taborder="2"
             left="10" top="60" right="10" bottom="50"
             text="">
          <Layouts>
            <Layout>
              <Static id="sta_field1" taborder="0"
                text="항목1" left="20" top="20" width="80" height="30"
                cssclass="sta_WF_InputLabel"/>
              <Edit id="edt_field1" taborder="1"
                left="sta_field1:0" top="20" width="200" height="30"
                maxlength="100"/>

              <Static id="sta_field2" taborder="2"
                text="항목2" left="20" top="60" width="80" height="30"
                cssclass="sta_WF_InputLabel"/>
              <Combo id="cbo_field2" taborder="3"
                left="sta_field2:0" top="60" width="150" height="30"
                binddataset="ds_codeList" codecolumn="cd" datacolumn="cdNm"/>
            </Layout>
          </Layouts>
        </Div>

        <!-- ===== 하단 버튼 영역 ===== -->
        <Button id="btn_save" taborder="3"
          text="저장" width="88" height="34"
          cssclass="Secondary"
          bottom="10" right="10"
          onclick="btn_save_onclick"/>
        <Button id="btn_cancel" taborder="4"
          text="취소" width="88" height="34"
          cssclass="SecondaryLine"
          bottom="10" right="btn_save:10"
          onclick="btn_cancel_onclick"/>

      </Layout>
    </Layouts>

    <!-- ===== Bind ===== -->
    <Bind>
      <BindItem id="item0" compid="div_input.form.edt_field1" propid="value" datasetid="ds_form" columnid="field1"/>
      <BindItem id="item1" compid="div_input.form.cbo_field2" propid="value" datasetid="ds_form" columnid="field2"/>
    </Bind>

    <!-- ===== Objects (Dataset) ===== -->
    <Objects>
      <Dataset id="ds_form" useclientlayout="true">
        <ColumnInfo>
          <Column id="keyId"   type="STRING" size="256" description="키 ID"/>
          <Column id="field1"  type="STRING" size="256" description="항목1"/>
          <Column id="field2"  type="STRING" size="256" description="항목2"/>
        </ColumnInfo>
        <Rows>
          <Row/>
        </Rows>
      </Dataset>
      <Dataset id="ds_codeList" useclientlayout="true">
        <ColumnInfo>
          <Column id="cd"   type="STRING" size="256"/>
          <Column id="cdNm" type="STRING" size="256"/>
        </ColumnInfo>
      </Dataset>
      <Dataset id="ds_result" useclientlayout="true">
        <ColumnInfo>
          <Column id="resultCnt" type="STRING" size="256" description="처리건수"/>
        </ColumnInfo>
        <Rows><Row/></Rows>
      </Dataset>
    </Objects>

    <!-- ===== Script ===== -->
    <Script type="xscript5.1"><![CDATA[
/**
*  [팝업명]
*  @MenuPath    [모듈] > [서브모듈]
*  @FileName    UIXX0000P.xfdl
*  @Creator     개발자명
*  @CreateDate  YYYY.MM.DD
*  @Desction    [팝업 설명]
************** 소스 수정 이력 *************************************************************
*  date                 Modifier                Description
*******************************************************************************************
*  YYYY.MM.DD           개발자명                최초 생성
*******************************************************************************************
*/

/********************************************************************************************
* Common Library
********************************************************************************************/
include "SL::CMMN/sl_comm.xjs";
include "SL::CMMN/sl_stepComp.xjs";

/********************************************************************************************
* FORM EVENT 영역(onload)
********************************************************************************************/
this.form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    this.gfn_formOnLoad(this); // 초기화[필수]
    this.fn_initData();
};

/********************************************************************************************
* TRANSACTION 서비스 호출 처리
********************************************************************************************/
/**
* @description 초기 데이터 로드 (수정 모드: 기존 데이터 조회)
* @return N/A
*/
this.fn_initData = function()
{
    // 부모 Form에서 전달받은 파라미터
    var oArg = this.gfn_getPopupArg(this);

    if (oArg != null && oArg.keyId) {
        // 수정 모드: 기존 데이터 조회
        this.ds_form.setColumn(0, "keyId", oArg.keyId);
        this.fn_selectDetail();
    }
    // 등록 모드: ds_form 초기 행이 그대로 사용됨
};

/**
* @description 상세 조회
* @return N/A
*/
this.fn_selectDetail = function()
{
    this.SVC_SELECT = {
        svcId : "selectDetail"
      , url   : "GET::xx::sample/selectSampleDetail"
      , inDs  : "ds_form"
      , outDs : "ds_form=result"
    };
    this.gfn_dsRequestAsync(this.SVC_SELECT);
};

/**
* @description 저장 처리
* @return N/A
*/
this.fn_save = function()
{
    // 유효성 검사
    if (!this.fn_validate()) {
        return;
    }

    var sOption = {
        sPopId   : "saveConfirm",
        sMsgType : "C",
        sImgType : "C",
        sMsgId   : "02133",
        arrArg   : ["저장 하시겠습니까?"]
    };

    var rtn = this.gfn_message(sOption);
    if (!rtn) {
        return;
    }

    this.SVC_SAVE = {
          svcId    : "saveData"
        , url      : "POST::xx::sample/saveSampleData"
        , inDs     : "ds_form:A"
        , outDs    : "ds_result=result"
        , callback : "fn_saveCallback"
    };
    this.gfn_dsRequestSync(this.SVC_SAVE);
};

/**
* @description 입력값 유효성 검사
* @return {Boolean} 유효하면 true
*/
this.fn_validate = function()
{
    if (this.gfn_isEmpty(this.ds_form.getColumn(0, "field1"))) {
        this.gfn_alert("항목1을 입력해 주세요.");
        this.div_input.form.edt_field1.setFocus();
        return false;
    }
    return true;
};

/********************************************************************************************
* EVENT 핸들러 영역
********************************************************************************************/
/**
* @description 저장 버튼 클릭
*/
this.btn_save_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fn_save();
};

/**
* @description 취소/닫기 버튼 클릭
*/
this.btn_close_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.close();
};

this.btn_cancel_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.close();
};

/********************************************************************************************
* CALLBACK 콜백 처리부분
********************************************************************************************/
/**
* @description 저장 콜백
* @param {String} strSvcId       서비스 ID
* @param {Number} nErrorCode     결과값 (0:성공, -1:실패)
* @param {Object} objResolveData response data
*/
this.fn_saveCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) {
        return;
    }

    switch (strSvcId) {
        case "saveData":
            var sOption = {
                sPopId   : "saveResult",
                sMsgType : "A",
                sImgType : "I",
                sMsgId   : "02133",
                arrArg   : ["저장되었습니다."]
            };
            this.gfn_message(sOption);
            // 저장 성공 후 팝업 닫기 (부모 Form에 결과 전달)
            this.close("SAVED");
            break;
    }
};

/**
* @description 트랜잭션 후처리
* @param {String} strSvcId       서비스 ID
* @param {Number} nErrorCode     결과값 (0:성공, -1:실패)
* @param {Object} objResolveData response data
*/
this.fn_apiCallback = function(strSvcId, nErrorCode, objResolveData)
{
    if (nErrorCode < 0) {
        return;
    }

    switch (strSvcId) {
        case "selectDetail":
            // 조회 완료 - 바인딩으로 자동 반영됨
            break;
    }
};

    ]]></Script>
  </Form>
</FDL>
```

---

*작성일: 2026-03-28 | 기반 소스: Nexacro N Developer Guide, Seegene LIS XFDL 실무 코드*
