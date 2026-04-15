# NexacroN Grid 가이드

## 목차

1. [Grid 개요](#1-grid-개요)
2. [Grid XML 구조](#2-grid-xml-구조)
3. [Grid 핵심 속성](#3-grid-핵심-속성)
4. [Cell 속성](#4-cell-속성)
5. [displaytype 종류](#5-displaytype-종류)
6. [edittype 종류](#6-edittype-종류)
7. [Head / Body / Summary Band 패턴](#7-head--body--summary-band-패턴)
8. [멀티 헤더 (rowspan, colspan)](#8-멀티-헤더-rowspan-colspan)
9. [소계/합계 행 (expr)](#9-소계합계-행-expr)
10. [체크박스 전체선택](#10-체크박스-전체선택)
11. [셀 병합 (mergeCell)](#11-셀-병합-mergecell)
12. [동적 스타일링 (setCellProperty / expr)](#12-동적-스타일링-setcellproperty--expr)
13. [Grid 이벤트](#13-grid-이벤트)
14. [정렬 (keystring)](#14-정렬-keystring)
15. [필터 (filter)](#15-필터-filter)
16. [Excel 내보내기 연동](#16-excel-내보내기-연동)
17. [Grid 메서드 레퍼런스](#17-grid-메서드-레퍼런스)

---

## 1. Grid 개요

Grid는 데이터를 격자(테이블) 형태로 표현하는 컴포넌트입니다. Grid 자체는 데이터를 보유하지 않으며, 반드시 Dataset과 바인딩하여 사용합니다.

**구성 요소:**
- **head band**: 컬럼 헤더 영역
- **body band**: 데이터 표시 영역 (Dataset의 각 행에 대응)
- **summary band**: 합계/평균 등 집계 영역

---

## 2. Grid XML 구조

### 기본 구조

```xml
<Grid id="grd_list" binddataset="ds_list"
      left="0" top="0" width="800" height="300"
      selecttype="row" autoenter="none">
  <Formats>
    <Format id="default">
      <!-- 컬럼 너비 정의 -->
      <Columns>
        <Column size="30"/>   <!-- 컬럼 0: 30px -->
        <Column size="60"/>   <!-- 컬럼 1: 60px -->
        <Column size="120"/>  <!-- 컬럼 2: 120px -->
        <Column size="80"/>   <!-- 컬럼 3: 80px -->
        <Column size="100"/>  <!-- 컬럼 4: 100px -->
      </Columns>
      <!-- 행 높이 정의 -->
      <Rows>
        <Row size="24" band="head"/>  <!-- 헤더 행 높이 -->
        <Row size="24"/>              <!-- 바디 행 높이 -->
      </Rows>
      <!-- 헤더 밴드 -->
      <Band id="head">
        <Cell text="No"/>
        <Cell col="1" text="부서코드"/>
        <Cell col="2" text="부서명"/>
        <Cell col="3" text="사용여부"/>
        <Cell col="4" text="등록일"/>
      </Band>
      <!-- 바디 밴드 -->
      <Band id="body">
        <Cell text="expr:currow+1" textAlign="center"/>
        <Cell col="1" text="bind:dept_cd" textAlign="center"/>
        <Cell col="2" text="bind:dept_nm" textAlign="left"/>
        <Cell col="3" text="bind:use_yn"  displaytype="checkboxcontrol" textAlign="center"/>
        <Cell col="4" text="bind:reg_dt"  displaytype="date" textAlign="center"/>
      </Band>
    </Format>
  </Formats>
</Grid>
```

### 컬럼(Column) 태그 주요 속성

| 속성 | 설명 |
|------|------|
| `size` | 컬럼 너비 (px) |
| `resizable` | 사용자 너비 조정 여부 |
| `visible` | 컬럼 표시 여부 (0: 숨김, 1: 표시) |
| `fixed` | 컬럼 고정 여부 |

### 행(Row) 태그 주요 속성

| 속성 | 설명 |
|------|------|
| `size` | 행 높이 (px) |
| `band` | 소속 밴드 (head/summary, 없으면 body) |

---

## 3. Grid 핵심 속성

| 속성 | 타입 | 설명 |
|------|------|------|
| `binddataset` | String | 바인딩할 Dataset ID |
| `selecttype` | String | 선택 방식 (none/row/cell/multirow/multiextend) |
| `autoenter` | String | 편집 시작 방식 (none/select/edit) |
| `edittype` | String | 기본 편집 타입 |
| `autofittype` | String | 자동 크기 조정 (none/col/row/both) |
| `autosizingtype` | String | 자동 크기 조정 방향 |
| `extendsizetype` | String | 크기 확장 방식 |
| `fillareatype` | String | 빈 공간 채우기 방식 |
| `cellsizingtype` | String | 셀 크기 조정 방식 |
| `cellmovingtype` | String | 셀 이동 방식 |
| `suppress` | Boolean | 동일 값 셀 병합 여부 |
| `selectchangetype` | String | 선택 변경 시점 (down/up) |
| `leftfixedcolcount` | Number | 좌측 고정 컬럼 수 |
| `topfixedrowcount` | Number | 상단 고정 행 수 |
| `griduserproperty` | String | 그리드 사용자 속성 (체크박스 전체선택 등) |

---

## 4. Cell 속성

Cell은 Grid의 기본 단위로 head/body/summary band 각각에 배치됩니다.

| 속성 | 설명 |
|------|------|
| `col` | 컬럼 인덱스 (0부터) |
| `row` | 행 인덱스 (Formats.Rows 기준) |
| `text` | 표시 텍스트 (`bind:colId`, `expr:expression`) |
| `displaytype` | 표시 방식 (normal, date, number, checkboxcontrol 등) |
| `edittype` | 편집 방식 (none, normal, calendar, combo 등) |
| `textAlign` | 텍스트 정렬 (left/center/right) |
| `wordWrap` | 줄바꿈 (none/char/english) |
| `colspan` | 컬럼 병합 수 |
| `rowspan` | 행 병합 수 |
| `maskeditformat` | 마스크 편집 형식 |
| `font` | 폰트 설정 |
| `forecolor` | 텍스트 색상 |
| `background` | 배경색/이미지 |
| `cssclass` | CSS 클래스 |
| `suppress` | 동일 값 셀 병합 |
| `suppresshorzCell` | 가로 방향 동일 값 병합 |

### text 속성 값 종류

| 형식 | 설명 | 예시 |
|------|------|------|
| `bind:colId` | Dataset 컬럼 값 바인딩 | `bind:user_nm` |
| `expr:expression` | 표현식 계산 | `expr:currow+1` |
| `"고정 텍스트"` | 고정 텍스트 | `text="이름"` |

### expr에서 사용 가능한 변수

| 변수 | 설명 |
|------|------|
| `currow` | 현재 행 인덱스 (0부터) |
| `currentcell` | 현재 셀 인덱스 |
| `dataset` | 바인딩된 Dataset 참조 |
| `comp` | Grid 컴포넌트 참조 |
| `parent` | 부모 Form 참조 |

---

## 5. displaytype 종류

| 값 | 설명 | 예시 |
|----|------|------|
| `normal` | 기본 텍스트 표시 | |
| `none` | 표시하지 않음 | |
| `date` | 날짜 형식으로 표시 | YYYYMMDD → YYYY-MM-DD |
| `number` | 숫자 형식 | 천단위 구분 등 |
| `currency` | 통화 형식 | ₩1,000,000 |
| `checkboxcontrol` | 체크박스로 표시 | 1/0 또는 Y/N |
| `combocontrol` | 콤보박스로 표시 | 코드 → 라벨 변환 |
| `buttoncontrol` | 버튼으로 표시 | |
| `imagecontrol` | 이미지로 표시 | URL로 이미지 경로 |
| `progressbarcontrol` | 프로그레스바 | 0~100 숫자 |
| `treeitemcontrol` | 트리 형태 표시 | |
| `text` | 서식 없는 텍스트 | |

```xml
<!-- date 표시 -->
<Cell col="3" text="bind:reg_dt" displaytype="date"
      dateformat="YYYY-MM-DD" textAlign="center"/>

<!-- number 표시 (천단위 구분) -->
<Cell col="4" text="bind:amount" displaytype="number"
      numberformat="#,###" textAlign="right"/>

<!-- currency 표시 -->
<Cell col="5" text="bind:price" displaytype="currency"
      textAlign="right"/>

<!-- checkboxcontrol 표시 (Y/N) -->
<Cell col="6" text="bind:use_yn" displaytype="checkboxcontrol"
      checkboxcodetype="string"
      checkboxtruevalue="Y" checkboxfalsevalue="N"
      textAlign="center"/>

<!-- combocontrol 표시 -->
<Cell col="7" text="bind:status_cd" displaytype="combocontrol"
      combodataset="ds_status"
      combocodecol="code" combodatacol="label"/>
```

---

## 6. edittype 종류

| 값 | 설명 |
|----|------|
| `none` | 편집 불가 |
| `normal` | 일반 텍스트 편집 |
| `calendar` | 날짜 선택 (달력 팝업) |
| `combo` | 콤보박스 선택 |
| `checkbox` | 체크박스 편집 |
| `maskedit` | 마스크 편집 |
| `number` | 숫자 편집 |

```xml
<!-- 날짜 편집 -->
<Cell col="3" text="bind:birth_dt" edittype="calendar"
      calendarformat="YYYY-MM-DD"/>

<!-- 콤보 편집 -->
<Cell col="4" text="bind:dept_cd" edittype="combo"
      combodataset="ds_dept"
      combocodecol="dept_cd" combodatacol="dept_nm"/>

<!-- 체크박스 편집 -->
<Cell col="5" text="bind:chk_yn" edittype="checkbox"
      checkboxcodetype="string"
      checkboxtruevalue="1" checkboxfalsevalue="0"/>

<!-- 마스크 편집 -->
<Cell col="6" text="bind:phone" edittype="maskedit"
      maskeditformat="###-####-####" maskedittype="string"/>
```

---

## 7. Head / Body / Summary Band 패턴

### 완전한 Grid 예시 (head + body + summary)

```xml
<Grid id="grd_order" binddataset="ds_order"
      left="0" top="0" width="700" height="300"
      selecttype="row">
  <Formats>
    <Format id="default">
      <Columns>
        <Column size="40"/>   <!-- 0: 순번 -->
        <Column size="100"/>  <!-- 1: 품목명 -->
        <Column size="80"/>   <!-- 2: 단가 -->
        <Column size="60"/>   <!-- 3: 수량 -->
        <Column size="100"/>  <!-- 4: 금액 -->
      </Columns>
      <Rows>
        <Row size="24" band="head"/>
        <Row size="24"/>
        <Row size="24" band="summary"/>
      </Rows>
      <Band id="head">
        <Cell text="No"   textAlign="center"/>
        <Cell col="1" text="품목명"/>
        <Cell col="2" text="단가"   textAlign="right"/>
        <Cell col="3" text="수량"   textAlign="right"/>
        <Cell col="4" text="금액"   textAlign="right"/>
      </Band>
      <Band id="body">
        <Cell text="expr:currow+1"        textAlign="center"/>
        <Cell col="1" text="bind:item_nm" textAlign="left"/>
        <Cell col="2" text="bind:unit_price" displaytype="number"
              numberformat="#,###" textAlign="right"/>
        <Cell col="3" text="bind:qty"        textAlign="right"
              edittype="normal"/>
        <Cell col="4" text="expr:dataset.getColumn(currow,'unit_price') * dataset.getColumn(currow,'qty')"
              displaytype="number" numberformat="#,###" textAlign="right"/>
      </Band>
      <Band id="summary">
        <Cell colspan="4" text="합계" textAlign="right"/>
        <Cell col="4" text="expr:comp.getBindDataset().getSum('amount')"
              displaytype="number" numberformat="#,###" textAlign="right"/>
      </Band>
    </Format>
  </Formats>
</Grid>
```

---

## 8. 멀티 헤더 (rowspan, colspan)

Head band에서 여러 행으로 헤더를 구성하거나 셀을 병합하여 그룹 헤더를 만들 수 있습니다.

```xml
<Columns>
  <Column size="40"/>   <!-- 0: 순번 -->
  <Column size="100"/>  <!-- 1: 이름 -->
  <Column size="80"/>   <!-- 2: 기본급 -->
  <Column size="80"/>   <!-- 3: 성과급 -->
  <Column size="80"/>   <!-- 4: 공제 -->
  <Column size="100"/>  <!-- 5: 실지급액 -->
</Columns>
<Rows>
  <Row size="24" band="head"/>  <!-- 헤더 1행 -->
  <Row size="24" band="head"/>  <!-- 헤더 2행 -->
  <Row size="24"/>              <!-- 바디 행 -->
</Rows>
<Band id="head">
  <!-- 1행: 순번, 이름은 2행 병합 -->
  <Cell row="0" col="0" rowspan="2" text="No"    textAlign="center"/>
  <Cell row="0" col="1" rowspan="2" text="이름"  textAlign="center"/>
  <!-- 급여 그룹 헤더: 3열 병합 -->
  <Cell row="0" col="2" colspan="3" text="급여"  textAlign="center"/>
  <!-- 실지급액: 2행 병합 -->
  <Cell row="0" col="5" rowspan="2" text="실지급액" textAlign="center"/>
  <!-- 2행: 급여 세부항목 -->
  <Cell row="1" col="2" text="기본급"  textAlign="center"/>
  <Cell row="1" col="3" text="성과급"  textAlign="center"/>
  <Cell row="1" col="4" text="공제"    textAlign="center"/>
</Band>
<Band id="body">
  <Cell col="0" text="expr:currow+1"           textAlign="center"/>
  <Cell col="1" text="bind:emp_nm"             textAlign="left"/>
  <Cell col="2" text="bind:base_pay"           displaytype="number" textAlign="right"/>
  <Cell col="3" text="bind:bonus"              displaytype="number" textAlign="right"/>
  <Cell col="4" text="bind:deduction"          displaytype="number" textAlign="right"/>
  <Cell col="5" text="bind:net_pay"            displaytype="number" textAlign="right"/>
</Band>
```

---

## 9. 소계/합계 행 (expr)

### Summary Band로 합계 표시

```xml
<Band id="summary">
  <Cell text="합계" textAlign="right" colspan="2"/>
  <Cell col="2" text="expr:comp.getBindDataset().getSum('base_pay')"
        displaytype="number" textAlign="right"/>
  <Cell col="3" text="expr:comp.getBindDataset().getSum('bonus')"
        displaytype="number" textAlign="right"/>
  <Cell col="4" text="expr:comp.getBindDataset().getSum('deduction')"
        displaytype="number" textAlign="right"/>
  <Cell col="5" text="expr:comp.getBindDataset().getSum('net_pay')"
        displaytype="number" textAlign="right"/>
</Band>
```

### 그룹별 소계 (keystring + suppress)

```xml
<Grid id="grd_subtotal" binddataset="ds_order">
  <!-- ... Columns/Rows 생략 ... -->
  <Band id="body">
    <!-- suppress=1: 같은 값이면 하나의 셀로 병합 -->
    <Cell col="0" text="bind:dept_nm" suppress="1"/>
    <Cell col="1" text="bind:item_nm"/>
    <Cell col="2" text="bind:amount" displaytype="number" textAlign="right"/>
    <!-- 부서별 소계: dept_nm이 바뀔 때 새 값 표시 -->
    <Cell col="3"
      text="expr:comp.getBindDataset().getCaseSum('dept_nm==&quot;'+dataset.getColumn(currow,'dept_nm')+'&quot;', 'amount')"
      displaytype="number" textAlign="right"/>
  </Band>
</Grid>
```

### Script로 keystring 설정 후 소계

```javascript
// 부서별 정렬 후 소계 집계
this.ds_order.set_keystring("+dept_nm");

// Grid에 소계 행 추가 패턴
this.fn_addSubtotal = function()
{
    var sCurDept = "";
    var nSubTotal = 0;

    for (var i = 0; i < this.ds_order.rowcount; i++) {
        var sDept = this.ds_order.getColumn(i, "dept_nm");
        if (sCurDept != "" && sCurDept != sDept) {
            // 소계 행 삽입
            var nRow = this.ds_order.insertRow(i);
            this.ds_order.setColumn(nRow, "dept_nm", sCurDept + " 소계");
            this.ds_order.setColumn(nRow, "amount",  nSubTotal);
            i++;  // 삽입된 행 다음으로 이동
            nSubTotal = 0;
        }
        sCurDept = sDept;
        nSubTotal += parseInt(this.ds_order.getColumn(i, "amount") || 0);
    }
};
```

---

## 10. 체크박스 전체선택

### griduserproperty를 이용한 전체선택

Grid의 `griduserproperty` 속성에 `checkboxall` 포함 시 헤더 클릭으로 전체 선택/해제 가능.

```xml
<Grid id="grd_list" binddataset="ds_list"
      griduserproperty="checkbox"
      onheadclick="grd_list_onheadclick">
  <Formats>
    <Format id="default">
      <Columns>
        <Column size="30"/>   <!-- 0: 체크박스 -->
        <Column size="100"/>  <!-- 1: 이름 -->
      </Columns>
      <Rows>
        <Row size="24" band="head"/>
        <Row size="24"/>
      </Rows>
      <Band id="head">
        <!-- 헤더에 체크박스 (전체선택용) -->
        <Cell col="0" text="0" displaytype="checkboxcontrol"
              checkboxcodetype="number"
              checkboxtruevalue="1" checkboxfalsevalue="0"/>
        <Cell col="1" text="이름"/>
      </Band>
      <Band id="body">
        <Cell col="0" text="bind:chk_yn"
              displaytype="checkboxcontrol"
              edittype="checkboxcontrol"
              checkboxcodetype="string"
              checkboxtruevalue="1" checkboxfalsevalue="0"
              textAlign="center"/>
        <Cell col="1" text="bind:user_nm" textAlign="left"/>
      </Band>
    </Format>
  </Formats>
</Grid>
```

### onheadclick 이벤트로 전체선택 구현

```javascript
// Grid 헤더 클릭으로 체크박스 전체선택/해제
this.grd_list_onheadclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    // 0번 컬럼(체크박스)만 처리
    if (e.cell != 0) return;

    // 현재 헤더 체크 상태 가져오기
    var nCurVal = parseInt(obj.getCellProperty("head", 0, "text")) || 0;
    var nNewVal = (nCurVal == 1) ? 0 : 1;

    // 헤더 체크박스 상태 변경
    obj.setCellProperty("head", 0, "text", nNewVal);

    // 바디 컬럼 ID 가져오기
    var sColId = obj.getCellProperty("body", 0, "text").replace(/bind:/i, "");

    // 모든 행 체크박스 변경
    var objDs = obj.getBindDataset();
    objDs.set_enableevent(false);
    for (var i = 0; i < objDs.rowcount; i++) {
        objDs.setColumn(i, sColId, nNewVal);
    }
    objDs.set_enableevent(true);
};

// 체크된 행 삭제
this.btn_delete_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    var objDs = this.ds_list;
    var nDelCnt = 0;

    for (var i = objDs.rowcount - 1; i >= 0; i--) {
        if (objDs.getColumn(i, "chk_yn") == "1") {
            objDs.deleteRow(i);
            nDelCnt++;
        }
    }

    if (nDelCnt == 0) {
        alert("삭제할 항목을 선택하세요.");
    }
};
```

---

## 11. 셀 병합 (mergeCell)

### 정적 병합 (XFDL에서 선언)

```xml
<Band id="body">
  <!-- colspan: 가로 방향 병합 -->
  <Cell col="0" colspan="2" text="병합된 셀"/>
  <!-- rowspan: 세로 방향 병합 - 특정 포맷 내에서 -->
</Band>
```

### 동적 병합 (Script)

```javascript
// 특정 셀 범위 병합
this.grd_list.mergeCell("body", 0, 0, 2, 3);  // (band, startRow, startCol, endRow, endCol)

// 병합 해제
this.grd_list.splitCell("body", 0, 0);

// 선택 범위 병합
this.grd_list.mergeCell("body",
    this.grd_list.selectstartrow, this.grd_list.selectstartcol,
    this.grd_list.selectendrow,   this.grd_list.selectendcol);
```

### suppress (동일 값 병합)

```xml
<!-- 같은 값이 연속될 때 하나의 셀로 표시 -->
<Cell col="0" text="bind:dept_nm" suppress="1"/>
```

---

## 12. 동적 스타일링 (setCellProperty / expr)

### setCellProperty로 조건부 스타일 변경

```javascript
// oncellclick 이벤트에서 셀 스타일 동적 변경
this.grd_list_oncellclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    var nRow  = e.row;
    var nCell = e.cell;

    // 특정 컬럼 클릭 시 배경색 변경
    if (nCell == 2) {
        obj.setCellProperty("body", nCell, "background", "#FFFF00");
    }
};

// oncolumnchanged 이벤트에서 Dataset 변경에 따른 스타일
this.ds_list_oncolumnchanged = function(obj:nexacro.NormalDataset, e:nexacro.DSColChangedEventInfo)
{
    if (e.columnid == "amount") {
        var nVal = parseInt(e.newvalue) || 0;
        var sColor = nVal < 0 ? "#FF0000" : "#000000";
        this.grd_list.setCellProperty("body", 4, "forecolor", sColor);
    }
};
```

### expr로 조건부 스타일 설정

```xml
<!-- expr로 조건부 배경색 (음수는 빨간색) -->
<Cell col="4" text="bind:amount"
      displaytype="number" textAlign="right"
      forecolor="expr:dataset.getColumn(currow,'amount') &lt; 0 ? '#FF0000' : '#000000'"/>

<!-- expr로 조건부 텍스트 (상태 코드를 텍스트로 변환) -->
<Cell col="5" text="expr:dataset.getColumn(currow,'status_cd') == '01' ? '대기' :
                    dataset.getColumn(currow,'status_cd') == '02' ? '진행' :
                    dataset.getColumn(currow,'status_cd') == '03' ? '완료' : '알 수 없음'"/>

<!-- cssclass로 조건부 스타일 -->
<Cell col="6" text="bind:priority"
      cssclass="expr:dataset.getColumn(currow,'priority') == 'H' ? 'cell_high' :
                dataset.getColumn(currow,'priority') == 'M' ? 'cell_mid' : 'cell_low'"/>
```

### getCellProperty / getCellPropertyValue

```javascript
// 현재 셀의 특정 속성값 읽기
var sText    = this.grd_list.getCellProperty("body", 2, "text");
var sDType   = this.grd_list.getCellProperty("body", 2, "displaytype");

// 현재 실제 적용된 속성값 (expr 계산 후 값)
var sActual  = this.grd_list.getCellPropertyValue("body", 2, "forecolor");
```

---

## 13. Grid 이벤트

### 주요 이벤트

| 이벤트 | 설명 | 주요 파라미터 |
|--------|------|--------------|
| `oncellclick` | 바디 셀 클릭 시 | `e.row`, `e.cell`, `e.clickcount` |
| `onheadclick` | 헤더 셀 클릭 시 | `e.cell` |
| `oncellposchanged` | 현재 셀 위치 변경 시 | `e.newrow`, `e.newcell` |
| `oncellchanged` | 셀 값 변경 완료 시 | `e.row`, `e.cell` |
| `oncelleditbegin` | 셀 편집 시작 시 | `e.row`, `e.cell` |
| `oncelleditend` | 셀 편집 종료 시 | `e.row`, `e.cell` |
| `onselectchanged` | 선택 행 변경 시 | |
| `onvscroll` | 수직 스크롤 시 | `e.pos`, `e.oldpos` |
| `onkeydown` | 키 입력 시 | `e.keycode`, `e.ctrlkey` |

### 이벤트 핸들러 예시

```javascript
// 셀 클릭 이벤트
this.grd_list_oncellclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    var nRow  = e.row;   // 클릭된 행 인덱스
    var nCell = e.cell;  // 클릭된 셀 인덱스

    if (nRow < 0) return;  // 헤더 클릭 등 무효 행

    // 더블클릭으로 상세 팝업
    if (e.clickcount == 2) {
        this.fn_openDetail(nRow);
    }
};

// 헤더 클릭으로 정렬
this.grd_list_onheadclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    var nCell = e.cell;
    var sColId = obj.getCellProperty("body", nCell, "text").replace(/bind:/i, "");

    if (!sColId || sColId.indexOf("expr:") >= 0) return;

    // 현재 정렬 방향 확인 후 토글
    var sCurKey = this.ds_list.keystring;
    var sNewKey;

    if (sCurKey == "+" + sColId) {
        sNewKey = "-" + sColId;
    } else {
        sNewKey = "+" + sColId;
    }

    this.ds_list.set_keystring(sNewKey);
};

// 셀 위치 변경 이벤트 (행 이동 감지)
this.grd_list_oncellposchanged = function(obj:nexacro.Grid, e:nexacro.GridCellPosChangedEventInfo)
{
    var nNewRow = e.newrow;
    if (nNewRow < 0) return;

    // 선택 행 데이터를 상세 폼에 반영
    this.fn_loadDetail(nNewRow);
};

// 셀 편집 종료 후 계산
this.grd_list_oncelleditend = function(obj:nexacro.Grid, e:nexacro.GridEditEventInfo)
{
    var nRow  = e.row;
    var nCell = e.cell;

    // 단가 또는 수량 변경 시 금액 재계산
    if (nCell == 2 || nCell == 3) {
        var nPrice = parseInt(this.ds_list.getColumn(nRow, "unit_price") || 0);
        var nQty   = parseInt(this.ds_list.getColumn(nRow, "qty") || 0);
        this.ds_list.setColumn(nRow, "amount", nPrice * nQty);
    }
};
```

---

## 14. 정렬 (keystring)

```javascript
// 단일 컬럼 정렬
this.ds_list.set_keystring("+user_nm");   // 오름차순
this.ds_list.set_keystring("-reg_dt");    // 내림차순

// 다중 컬럼 정렬
this.ds_list.set_keystring("+dept_cd -salary");

// 특수 정렬 옵션
this.ds_list.set_keystring("+i:user_nm");  // 대소문자 무시 (ignore case)
this.ds_list.set_keystring("+n:amount");   // 숫자로 정렬 (string 컬럼)

// 정렬 해제
this.ds_list.set_keystring("");

// 헤더 클릭으로 정렬 토글 (정렬 마커 표시 포함)
this.fn_sortByHeader = function(objGrid, nCell)
{
    var sColId = objGrid.getCellProperty("body", nCell, "text").replace(/bind:/i, "");
    var sCurKey = objGrid.getBindDataset().keystring;
    var sDir = (sCurKey == "+" + sColId) ? "-" : "+";

    objGrid.getBindDataset().set_keystring(sDir + sColId);

    // 헤더에 정렬 표시 업데이트
    var nColCnt = objGrid.getFormatColCount();
    for (var i = 0; i < nColCnt; i++) {
        var sCurText = objGrid.getCellProperty("head", i, "text");
        // 기존 마커 제거 후 현재 컬럼에만 추가
        sCurText = sCurText.replace("▲", "").replace("▼", "").trim();
        if (i == nCell) {
            sCurText = sCurText + (sDir == "+" ? " ▲" : " ▼");
        }
        objGrid.setCellProperty("head", i, "text", sCurText);
    }
};
```

---

## 15. 필터 (filter)

```javascript
// 단순 필터
this.ds_list.set_filter("dept_cd == '10'");

// 검색어 포함 필터 (LIKE)
this.edt_search_onchanged = function(obj:nexacro.Edit, e:nexacro.ChangeEventInfo)
{
    var sKeyword = obj.value.trim();
    if (sKeyword == "") {
        this.ds_list.set_filter("");
    } else {
        this.ds_list.set_filter("user_nm like '%" + sKeyword + "%'");
    }
};

// 복합 조건
this.ds_list.set_filter("dept_cd == '10' && use_yn == 'Y'");

// 날짜 범위 필터
var sStart = this.cal_start.value;
var sEnd   = this.cal_end.value;
this.ds_list.set_filter("reg_dt >= '" + sStart + "' && reg_dt <= '" + sEnd + "'");

// 필터 해제
this.ds_list.set_filter("");

// 현재 필터 확인
var sFilter = this.ds_list.filter;
```

---

## 16. Excel 내보내기 연동

Grid와 ExcelExportObject를 연동하는 방법은 [dataset-and-data.md](./dataset-and-data.md)를 참조하세요.

### 간단한 Grid 내보내기 패턴

```javascript
this.btn_excel_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    var exportObj = new ExcelExportObject("ExcelExport00", this);

    exportObj.set_exportfilename("목록_" + this.fn_getToday());
    exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
    exportObj.set_exporturl("/xeni/XExportImport");

    // Grid 전체 내보내기
    exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_list, "Sheet1!A1");

    exportObj.addEventHandler("onsuccess", function(obj, e) {
        trace("내보내기 완료");
    }, this);

    exportObj.exportData();
};
```

---

## 17. Grid 메서드 레퍼런스

### Dataset 접근

| 메서드 | 설명 |
|--------|------|
| `getBindDataset()` | 바인딩된 Dataset 반환 |
| `set_binddataset(id)` | Dataset 바인딩 설정 |
| `createFormat()` | Dataset 컬럼 구조로 포맷 자동 생성 |

### 셀 정보 접근

| 메서드 | 설명 |
|--------|------|
| `getCellProperty(band, cell, prop)` | 셀 속성 반환 |
| `setCellProperty(band, cell, prop, val)` | 셀 속성 설정 |
| `getCellPropertyValue(band, cell, prop)` | 실제 적용된 속성값 반환 |
| `getCellCount(band)` | 밴드의 셀 수 반환 |
| `getCellText(band, row, cell)` | 셀 표시 텍스트 반환 |
| `getCellValue(band, row, cell)` | 셀 값 반환 |
| `getFormatColCount()` | 포맷 컬럼 수 반환 |
| `getFormatColSize(nCol)` | 컬럼 너비 반환 |

### 행 이동/선택

| 메서드 | 설명 |
|--------|------|
| `set_rowposition(n)` | 현재 행 이동 |
| `getRowCount()` | 바디 행 수 반환 |
| `moveRow(from, to)` | 행 위치 이동 |
| `selectMultiRow(row, bSel)` | 멀티 선택 행 추가/제거 |
| `getSelectedDatasetRows()` | 선택된 행 Dataset 반환 |
| `deleteMultiRows()` | 다중 선택 행 삭제 |

### 크기 조정

| 메서드 | 설명 |
|--------|------|
| `getRealRowFullSize()` | 모든 행의 전체 높이 반환 |
| `setRealRowSize(row, size)` | 특정 행 높이 설정 |
| `setFormatColProperty(col, prop, val)` | 컬럼 속성 설정 |

### 편집

| 메서드 | 설명 |
|--------|------|
| `setCellPos(row, cell)` | 편집 위치 이동 |
| `getEditingValue()` | 현재 편집 중인 값 반환 |
| `setEditingValue(val)` | 편집 중인 값 설정 |
| `getEditingText()` | 현재 편집 중인 텍스트 반환 |

### 기타

| 메서드 | 설명 |
|--------|------|
| `appendData(ds)` | 다른 Dataset의 데이터 추가 |
| `scrollTo(row)` | 특정 행으로 스크롤 |
| `blinkCell(band, row, cell)` | 셀 깜박임 효과 |
| `redrawExprCell()` | expr 셀 재계산/재렌더링 |
| `mergeCell(band, r1, c1, r2, c2)` | 셀 병합 |
| `splitCell(band, row, col)` | 셀 병합 해제 |
| `getTextSize(text, font)` | 텍스트 크기 반환 |

---

## 부록: 실무 패턴 모음

### 행 추가 후 편집 포커스 이동

```javascript
this.btn_add_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    var nRow = this.ds_list.addRow();

    // 기본값 설정
    this.ds_list.setColumn(nRow, "use_yn", "Y");
    this.ds_list.setColumn(nRow, "reg_dt", this.fn_getToday());

    // Grid에서 새 행으로 이동 후 편집 시작
    this.grd_list.set_rowposition(nRow);
    this.grd_list.setCellPos(nRow, 1);  // 1번 셀 편집 시작
};
```

### Grid 행 이동 (Up/Down 버튼)

```javascript
this.btn_up_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    var nRow = this.ds_list.rowposition;
    if (nRow <= 0) return;
    this.grd_list.moveRow(nRow, nRow - 1);
};

this.btn_down_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    var nRow = this.ds_list.rowposition;
    if (nRow >= this.ds_list.rowcount - 1) return;
    this.grd_list.moveRow(nRow, nRow + 1);
};
```

### Grid에 데이터 없을 때 메시지 표시

```javascript
this.fn_afterSearch = function(nCount)
{
    if (nCount == 0) {
        // fillareatype을 활용하거나 summary band에 메시지 표시
        this.stc_nodata.set_visible(true);
        this.grd_list.set_visible(false);
    } else {
        this.stc_nodata.set_visible(false);
        this.grd_list.set_visible(true);
        this.grd_list.set_rowposition(0);
    }
};
```

### 컬럼 숨기기/보이기

```javascript
// 특정 컬럼 숨기기 (visible 속성 = 0)
this.grd_list.setFormatColProperty(3, "visible", "0");

// 특정 컬럼 보이기
this.grd_list.setFormatColProperty(3, "visible", "1");
```

### createFormat 사용 패턴

```javascript
// Dataset 구조 변경 후 Grid 포맷 자동 생성
this.fn_reloadGrid = function()
{
    this.ds_list.clearData();
    this.grd_list.createFormat();  // Dataset 컬럼으로 포맷 재생성

    // 서버에서 데이터 조회 후 다시 표시
    this.fn_search();
};
```
