# NexacroN 컴포넌트 레퍼런스

> Grid 상세 사용법은 [grid-guide.md](./grid-guide.md), Dataset 상세는 [dataset-and-data.md](./dataset-and-data.md)를 참조하세요.

## 목차

**★★★ 필수**
1. [Grid](#1-grid)
2. [Dataset](#2-dataset)
3. [Button](#3-button)
4. [Edit](#4-edit)
5. [Combo](#5-combo)
6. [Div](#6-div)
7. [Static](#7-static)

**★★☆ 권장**
8. [Calendar](#8-calendar)
9. [CheckBox](#9-checkbox)
10. [Radio](#10-radio)
11. [Tab](#11-tab)
12. [MaskEdit](#12-maskedit)
13. [PopupDiv](#13-popupdiv)
14. [GroupBox](#14-groupbox)
15. [TextArea](#15-textarea)

**★☆☆ 선택**
16. [Spin](#16-spin)
17. [ListBox](#17-listbox)
18. [ListView](#18-listview)
19. [ProgressBar](#19-progressbar)
20. [ImageViewer](#20-imageviewer)
21. [Menu](#21-menu)
22. [PopupMenu](#22-popupmenu)
23. [WebBrowser](#23-webbrowser)
24. [FileDialog](#24-filedialog)
25. [FileUpTransfer](#25-fileuptransfer)
26. [Animation](#26-animation)

---

## 1. Grid

데이터를 격자(테이블) 형태로 표현하는 컴포넌트. Dataset과 바인딩하여 사용하며 head/body/summary 3개 밴드로 구성.

> 상세 내용은 [grid-guide.md](./grid-guide.md) 참조.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `binddataset` | 바인딩할 Dataset ID |
| `selecttype` | 선택 방식 (row/cell/multirow/multiextend) |
| `autoenter` | 편집 시작 방식 (none/select/edit) |
| `autofittype` | 자동 크기 조정 (none/col/row/both) |
| `leftfixedcolcount` | 좌측 고정 컬럼 수 |
| `griduserproperty` | 사용자 속성 (checkbox 전체선택 등) |
| `fillareatype` | 빈 공간 채우기 방식 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `getCellProperty(band, cell, prop)` | 셀 속성 읽기 |
| `setCellProperty(band, cell, prop, val)` | 셀 속성 설정 |
| `createFormat()` | Dataset 컬럼으로 포맷 자동 생성 |
| `getBindDataset()` | 바인딩된 Dataset 반환 |
| `setCellPos(row, cell)` | 편집 위치 이동 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `oncellclick` | 바디 셀 클릭 시 (e.row, e.cell) |
| `onheadclick` | 헤더 클릭 시 (e.cell) |
| `oncellposchanged` | 현재 셀 위치 변경 시 |
| `oncelleditend` | 셀 편집 종료 시 |

### XFDL 선언 예시

```xml
<Grid id="grd_list" binddataset="ds_list"
      left="0" top="40" width="800" height="300"
      selecttype="row" autoenter="none"
      oncellclick="grd_list_oncellclick"
      onheadclick="grd_list_onheadclick">
  <Formats>
    <Format id="default">
      <Columns>
        <Column size="40"/>
        <Column size="120"/>
        <Column size="80"/>
        <Column size="100"/>
      </Columns>
      <Rows>
        <Row size="24" band="head"/>
        <Row size="24"/>
      </Rows>
      <Band id="head">
        <Cell text="No"/>
        <Cell col="1" text="이름"/>
        <Cell col="2" text="부서"/>
        <Cell col="3" text="등록일"/>
      </Band>
      <Band id="body">
        <Cell text="expr:currow+1"  textAlign="center"/>
        <Cell col="1" text="bind:user_nm"  textAlign="left"/>
        <Cell col="2" text="bind:dept_nm"  textAlign="center"/>
        <Cell col="3" text="bind:reg_dt"   displaytype="date" textAlign="center"/>
      </Band>
    </Format>
  </Formats>
</Grid>
```

### Script 사용 예시

```javascript
// 셀 클릭 이벤트
this.grd_list_oncellclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    var nRow  = e.row;
    var nCell = e.cell;
    if (nRow < 0) return;

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

    var sCurKey = obj.getBindDataset().keystring;
    var sDir = (sCurKey == "+" + sColId) ? "-" : "+";
    obj.getBindDataset().set_keystring(sDir + sColId);
};
```

---

## 2. Dataset

데이터를 표 형태로 관리하는 비연결형 데이터 객체. 서버 통신 시 데이터 송수신의 기본 단위.

> 상세 내용은 [dataset-and-data.md](./dataset-and-data.md) 참조.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `rowcount` | 전체 행 수 (읽기 전용) |
| `colcount` | 전체 컬럼 수 (읽기 전용) |
| `rowposition` | 현재 행 인덱스 |
| `enableevent` | 이벤트 발생 여부 |
| `keystring` | 정렬 키 설정 |
| `filter` | 필터 조건 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `addRow()` | 마지막에 행 추가, 인덱스 반환 |
| `deleteRow(pos)` | 행 삭제 (삭제 상태로 마킹) |
| `getColumn(row, col)` | 값 읽기 |
| `setColumn(row, col, val)` | 값 쓰기 |
| `clearData()` | 모든 행 삭제 (컬럼 유지) |
| `findRowExpr(expr)` | 표현식으로 행 검색 |
| `getSum(col)` | 컬럼 합계 |
| `getRowType(row)` | 행 상태 반환 (1=normal, 2=insert, 4=update) |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onrowposchanged` | 현재 행 변경 시 |
| `oncolumnchanged` | 컬럼 값 변경 시 |

### XFDL 선언 예시

```xml
<Objects>
  <Dataset id="ds_list">
    <ColumnInfo>
      <Column id="user_no"  type="INT"    size="10"/>
      <Column id="user_nm"  type="STRING" size="100"/>
      <Column id="dept_cd"  type="STRING" size="10"/>
      <Column id="reg_dt"   type="DATE"   size="8"/>
      <Column id="use_yn"   type="STRING" size="1"/>
    </ColumnInfo>
  </Dataset>
</Objects>
```

### Script 사용 예시

```javascript
// 행 추가 후 값 설정
var nRow = this.ds_list.addRow();
this.ds_list.setColumn(nRow, "user_nm", "홍길동");
this.ds_list.setColumn(nRow, "use_yn",  "Y");

// 전체 순회
for (var i = 0; i < this.ds_list.rowcount; i++) {
    var sName = this.ds_list.getColumn(i, "user_nm");
    trace(i + ": " + sName);
}

// 필터 적용
this.ds_list.set_filter("dept_cd == '10' && use_yn == 'Y'");

// 변경 감지
if (this.ds_list.getDeletedRowCount() > 0 ||
    this.ds_list.findRowExpr("dataset.getRowType(rowidx)==4 || dataset.getRowType(rowidx)==2") >= 0) {
    trace("변경 있음");
}
```

---

## 3. Button

사용자가 클릭하여 사전 정의된 동작을 수행하는 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `text` | 버튼에 표시할 텍스트 |
| `enable` | 활성화 여부 |
| `visible` | 표시 여부 |
| `icon` | 아이콘 이미지 경로 |
| `iconposition` | 아이콘 위치 (left/right/top/bottom) |
| `taborder` | 탭 순서 |
| `defaultbutton` | Enter 키로 동작 여부 |
| `escapebutton` | Esc 키로 동작 여부 |
| `hotkey` | 단축키 설정 |
| `cssclass` | CSS 클래스 이름 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_text(value)` | 버튼 텍스트 설정 |
| `set_enable(bool)` | 활성화 상태 설정 |
| `set_visible(bool)` | 표시 상태 설정 |
| `getSelectStatus()` | 토글 선택 상태 반환 (0: 미선택, 1: 선택) |
| `setSelectStatus(n)` | 토글 선택 상태 설정 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onclick` | 클릭 시 발생 |
| `onmouseover` | 마우스 오버 시 발생 |
| `onfocus` | 포커스 획득 시 발생 |
| `onkillfocus` | 포커스 해제 시 발생 |

### XFDL 선언 예시

```xml
<Button id="btn_save" taborder="0" text="저장"
        left="32" top="8" width="80" height="32"
        defaultbutton="true"
        onclick="btn_save_onclick"/>

<Button id="btn_cancel" taborder="1" text="취소"
        left="120" top="8" width="80" height="32"
        escapebutton="true"
        onclick="btn_cancel_onclick"/>

<!-- 아이콘 버튼 -->
<Button id="btn_search" text="조회"
        left="220" top="8" width="100" height="32"
        icon="URL(&quot;imagerc::img_search.png&quot;)"
        iconposition="left"/>
```

### Script 사용 예시

```javascript
this.btn_save_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    obj.set_enable(false);
    obj.set_text("저장 중...");

    // 저장 처리
    this.fn_save();

    obj.set_enable(true);
    obj.set_text("저장");
};

// 토글 버튼
this.btn_toggle_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    var nStatus = obj.getSelectStatus();
    obj.setSelectStatus(nStatus == 0 ? 1 : 0);
    obj.set_text(nStatus == 0 ? "ON" : "OFF");
};
```

---

## 4. Edit

한 줄 텍스트를 입력받거나 출력하는 컴포넌트. 여러 줄은 TextArea 사용.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 현재 입력/표시 값 |
| `maxlength` | 최대 입력 글자 수 |
| `password` | 비밀번호 마스크 여부 |
| `readonly` | 읽기 전용 여부 |
| `inputtype` | 입력 유형 (number/alpha/hangul 등) |
| `placeholdertext` | 입력 전 안내 텍스트 |
| `autoselect` | 포커스 시 전체 선택 |
| `enable` | 활성화 여부 |
| `maxlength` | 최대 입력 길이 |
| `lengthunit` | 길이 단위 (char/byte) |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_value(val)` | 값 설정 |
| `set_maxlength(n)` | 최대 길이 설정 |
| `set_readonly(bool)` | 읽기 전용 설정 |
| `setSelection(start, end)` | 텍스트 선택 범위 설정 |
| `setFocus()` | 포커스 설정 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onchange` | 포커스 이동 후 값 변경 시 |
| `onchanged` | 값이 변경될 때마다 |
| `onkeyup` | 키 업 시 (실시간 처리용) |
| `onfocus` | 포커스 획득 시 |
| `onkillfocus` | 포커스 해제 시 |

### XFDL 선언 예시

```xml
<!-- 일반 편집창 -->
<Edit id="edt_name" taborder="0" left="100" top="32" width="200" height="32"
      maxlength="50" placeholdertext="이름을 입력하세요"
      onchange="edt_name_onchange"/>

<!-- 비밀번호 입력 -->
<Edit id="edt_pwd" taborder="1" left="100" top="72" width="200" height="32"
      password="true" maxlength="20"/>

<!-- 숫자 전용 -->
<Edit id="edt_qty" taborder="2" left="100" top="112" width="100" height="32"
      inputtype="number" value="0"/>

<!-- Dataset 바인딩 -->
<Edit id="edt_user_nm" left="100" top="152" width="200" height="32"
      binddataset="ds_form" binditemid="user_nm"/>
```

### Script 사용 예시

```javascript
// 실시간 글자 수 표시
this.edt_input_onkeyup = function(obj:nexacro.Edit, e:nexacro.KeyEventInfo)
{
    this.stc_count.set_text(obj.value.length + " / 100");
};

// 유효성 검사
this.edt_email_onchange = function(obj:nexacro.Edit, e:nexacro.ChangeEventInfo)
{
    if (obj.value != "" && obj.value.indexOf("@") < 0) {
        alert("이메일 형식이 올바르지 않습니다.");
        obj.set_value("");
        obj.setFocus();
    }
};
```

---

## 5. Combo

여러 항목 중 하나를 선택하는 드롭다운 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 현재 선택된 코드값 |
| `index` | 현재 선택 행 인덱스 |
| `codecolumn` | 코드 컬럼 ID |
| `datacolumn` | 표시 텍스트 컬럼 ID |
| `innerdataset` | 고정 항목용 내부 Dataset |
| `dataset` | 외부 Dataset 연결 ID |
| `type` | 검색 방식 (dropdown/search/filter/filterlike) |
| `readonly` | 읽기 전용 여부 |
| `enable` | 활성화 여부 |
| `displayrowcount` | 드롭다운 표시 행 수 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_value(code)` | 코드값으로 선택 설정 |
| `set_index(n)` | 인덱스로 선택 설정 |
| `getitemcount()` | 전체 항목 수 반환 |
| `getitemdata(n)` | n번 인덱스 코드값 반환 |
| `getitemlabel(n)` | n번 인덱스 표시 텍스트 반환 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onchange` | 선택 값 변경 시 |
| `onchanged` | 값 변경될 때마다 |
| `onitemclick` | 항목 클릭 시 |

### XFDL 선언 예시

```xml
<!-- InnerDataset 사용 -->
<Combo id="cbo_gender" taborder="0" left="100" top="32" width="120" height="32"
       codecolumn="code" datacolumn="label" value=""
       onchange="cbo_gender_onchange">
  <Dataset id="innerdataset">
    <ColumnInfo>
      <Column id="code" size="10"/>
      <Column id="label" size="50"/>
    </ColumnInfo>
    <Rows>
      <Row><Col id="code">M</Col><Col id="label">남성</Col></Row>
      <Row><Col id="code">F</Col><Col id="label">여성</Col></Row>
    </Rows>
  </Dataset>
</Combo>

<!-- 외부 Dataset 연결 -->
<Combo id="cbo_dept" taborder="1" left="100" top="72" width="200" height="32"
       dataset="ds_dept" codecolumn="dept_cd" datacolumn="dept_nm"/>
```

### Script 사용 예시

```javascript
// 값 설정/읽기
this.cbo_status.set_value("01");
var sCode  = this.cbo_dept.value;  // 선택된 코드
var sLabel = this.cbo_dept.text;   // 표시 텍스트

// 연계 콤보 (상위 선택 시 하위 필터)
this.cbo_area_onchange = function(obj:nexacro.Combo, e:nexacro.ChangeEventInfo)
{
    this.ds_city.set_filter("area_cd == '" + obj.value + "'");
    this.cbo_city.set_index(0);
};
```

---

## 6. Div

화면을 여러 영역으로 분할하거나 다른 Form을 재사용하는 컨테이너 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `url` | 로드할 Form URL |
| `scrollbars` | 스크롤바 (none/vertical/horizontal/both) |
| `visible` | 표시 여부 |
| `enable` | 활성화 여부 |
| `cssclass` | CSS 클래스 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_url(url)` | 로드할 Form 설정 |
| `set_visible(bool)` | 표시/숨김 설정 |
| `getForm()` | 내부 Form 객체 반환 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onload` | 내부 Form 로드 완료 시 |
| `onclick` | 클릭 시 |

### XFDL 선언 예시

```xml
<!-- 검색 영역 Div (인라인 컴포넌트 배치) -->
<Div id="div_search" left="0" top="0" width="1024" height="80" scrollbars="none">
  <Layouts>
    <Layout>
      <Static id="stc_name" text="이름" left="10" top="24" width="50" height="24"/>
      <Edit id="edt_name" left="70" top="20" width="200" height="28"/>
      <Button id="btn_search" text="조회" left="280" top="20" width="80" height="28"
              onclick="btn_search_onclick"/>
    </Layout>
  </Layouts>
</Div>

<!-- 외부 Form 로드 -->
<Div id="div_content" left="0" top="80" width="1024" height="600"
     url="Forms::sub_form.xfdl"
     onload="div_content_onload"/>
```

### Script 사용 예시

```javascript
// 내부 Form 접근
var oForm = this.div_content.getForm();
oForm.fn_init();

// Div 내 컴포넌트 접근
this.div_search.edt_name.set_value("홍길동");

// 조건에 따른 패널 전환
this.fn_switchPanel = function(bDetail)
{
    this.div_basic.set_visible(!bDetail);
    this.div_detail.set_visible(bDetail);
};

// onload 이벤트
this.div_content_onload = function(obj:nexacro.Div, e:nexacro.LoadEventInfo)
{
    obj.getForm().fn_init();
};
```

---

## 7. Static

텍스트 정보를 화면에 출력하는 레이블 컴포넌트. 사용자가 직접 편집 불가.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `text` | 표시할 텍스트 |
| `wordwrap` | 자동 줄바꿈 여부 |
| `halign` | 수평 정렬 (left/center/right) |
| `valign` | 수직 정렬 (top/middle/bottom) |
| `font` | 폰트 설정 |
| `forecolor` | 텍스트 색상 |
| `visible` | 표시 여부 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_text(value)` | 텍스트 설정 |
| `set_visible(bool)` | 표시/숨김 |
| `set_forecolor(color)` | 텍스트 색상 설정 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onclick` | 클릭 시 (링크형 구현용) |

### XFDL 선언 예시

```xml
<Static id="stc_title" text="조회 조건"
        left="10" top="10" width="100" height="24"
        font="bold 11pt 굴림" forecolor="#333333"/>

<Static id="stc_desc" text="내용이 길면 자동으로 줄바꿈됩니다"
        left="10" top="40" width="200" height="60"
        wordwrap="true" halign="left" valign="top"/>
```

### Script 사용 예시

```javascript
this.stc_total.set_text("총 " + nCount + "건");

// 상태에 따른 색상 변경
this.fn_setStatus = function(sStatus)
{
    if (sStatus == "ERROR") {
        this.stc_status.set_forecolor("#FF0000");
        this.stc_status.set_text("오류");
    } else {
        this.stc_status.set_forecolor("#0000FF");
        this.stc_status.set_text("정상");
    }
};
```

---

## 8. Calendar

날짜를 입력하거나 선택하는 DatePicker 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 날짜값 (YYYYMMDD 형식) |
| `dateformat` | 날짜 표시 형식 (예: YYYY-MM-DD) |
| `locale` | 지역 설정 (ko/en 등) |
| `minvalue` | 최소 선택 날짜 |
| `maxvalue` | 최대 선택 날짜 |
| `enable` | 활성화 여부 |
| `readonly` | 읽기 전용 여부 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_value(dateStr)` | 날짜 값 설정 (YYYYMMDD) |
| `set_dateformat(fmt)` | 날짜 형식 설정 |
| `getToday()` | 오늘 날짜 반환 |
| `set_minvalue(dateStr)` | 최소 날짜 설정 |
| `set_locale(locale)` | 지역 설정 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onchange` | 날짜 선택/변경 시 |
| `onchanged` | 값이 변경될 때마다 |

### XFDL 선언 예시

```xml
<Calendar id="cal_start" taborder="0" left="100" top="32" width="120" height="32"
          dateformat="YYYY-MM-DD" value="20260101"
          onchange="cal_start_onchange"/>

<Calendar id="cal_end" taborder="1" left="100" top="72" width="120" height="32"
          dateformat="YYYY-MM-DD"
          minvalue="20260101" maxvalue="20261231"/>
```

### Script 사용 예시

```javascript
// 오늘 날짜로 초기화
this.cal_date.set_value(this.cal_date.getToday());

// 날짜 범위 제한
this.cal_start_onchange = function(obj:nexacro.Calendar, e:nexacro.ChangeEventInfo)
{
    this.cal_end.set_minvalue(obj.value);
};
```

---

## 9. CheckBox

선택/해제 두 가지 상태를 표시하고 설정하는 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 현재 값 |
| `truevalue` | 체크 상태 값 (기본: "true" 또는 "1") |
| `falsevalue` | 미체크 상태 값 (기본: "false" 또는 "0") |
| `text` | 체크박스 옆 텍스트 |
| `checked` | 체크 여부 (읽기 전용) |
| `readonly` | 읽기 전용 여부 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_value(value)` | 값 설정 |
| `set_checked(bool)` | 체크 상태 직접 설정 |
| `set_enable(bool)` | 활성화 설정 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onchange` | 체크 상태 변경 시 |

### XFDL 선언 예시

```xml
<!-- Y/N 값 사용 -->
<CheckBox id="chk_agree" taborder="0" left="10" top="32" width="150" height="24"
          text="약관에 동의합니다"
          truevalue="Y" falsevalue="N"
          onchange="chk_agree_onchange"/>

<!-- Dataset 바인딩 -->
<CheckBox id="chk_use" taborder="1" left="10" top="64" width="100" height="24"
          text="사용여부"
          truevalue="1" falsevalue="0"
          binddataset="ds_item" binditemid="use_yn"/>
```

### Script 사용 예시

```javascript
// 체크 상태 확인
if (this.chk_agree.value == "Y") {
    this.btn_submit.set_enable(true);
}

// 변경 이벤트 처리
this.chk_agree_onchange = function(obj:nexacro.CheckBox, e:nexacro.ChangeEventInfo)
{
    this.btn_submit.set_enable(obj.value == "Y");
};
```

---

## 10. Radio

여러 항목 중 하나만 선택하는 라디오 버튼 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 선택된 코드값 |
| `codecolumn` | 선택값 컬럼 ID |
| `datacolumn` | 표시 텍스트 컬럼 ID |
| `innerdataset` | 항목 Dataset |
| `direction` | 배열 방향 (vertical/horizontal) |
| `enable` | 활성화 여부 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_value(code)` | 선택 값 설정 |
| `getitemcount()` | 항목 수 반환 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onchange` | 선택 항목 변경 시 |

### XFDL 선언 예시

```xml
<Radio id="rdo_type" taborder="0" left="10" top="32" width="300" height="24"
       codecolumn="code" datacolumn="label"
       direction="horizontal"
       onchange="rdo_type_onchange">
  <Dataset id="innerdataset">
    <ColumnInfo>
      <Column id="code"  size="10"/>
      <Column id="label" size="50"/>
    </ColumnInfo>
    <Rows>
      <Row><Col id="code">01</Col><Col id="label">유형 A</Col></Row>
      <Row><Col id="code">02</Col><Col id="label">유형 B</Col></Row>
    </Rows>
  </Dataset>
</Radio>
```

### Script 사용 예시

```javascript
this.rdo_type.set_value("01");  // 기본값 설정

this.rdo_type_onchange = function(obj:nexacro.Radio, e:nexacro.ChangeEventInfo)
{
    this.div_typeA.set_visible(obj.value == "01");
    this.div_typeB.set_visible(obj.value == "02");
};
```

---

## 11. Tab

좁은 화면에 여러 논리적 영역을 탭 형태로 구성하는 컨테이너 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `tabindex` | 현재 선택된 탭 인덱스 |
| `multiline` | 탭 버튼 멀티라인 여부 |
| `tabposition` | 탭 버튼 위치 (top/bottom/left/right) |
| `preload` | 모든 탭 페이지 미리 로드 여부 |
| `showextrabutton` | 추가 버튼 표시 여부 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_tabindex(n)` | 활성 탭 변경 |
| `getTabpageCount()` | 탭 페이지 수 반환 |
| `insertTabpage(id, pos)` | 탭 페이지 동적 삽입 |
| `removeTabpage(n)` | 탭 페이지 제거 |
| `getTabpage(n)` | n번 탭 페이지 객체 반환 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `ontabchange` | 탭 전환 시 |
| `ontabchanged` | 탭 전환 완료 후 |

### XFDL 선언 예시

```xml
<Tab id="tab_main" taborder="0" left="0" top="0" width="1024" height="600"
     tabindex="0" tabposition="top"
     ontabchange="tab_main_ontabchange">
  <Tabpages>
    <Tabpage id="tabpage_search" text="조회"/>
    <Tabpage id="tabpage_detail" text="상세" url="Forms::detail.xfdl"/>
    <Tabpage id="tabpage_stat"   text="통계"/>
  </Tabpages>
</Tab>
```

### Script 사용 예시

```javascript
// 탭 이동
this.tab_main.set_tabindex(1);

// 탭 변경 이벤트
this.tab_main_ontabchange = function(obj:nexacro.Tab, e:nexacro.TabChangeEventInfo)
{
    var nNewIdx = e.tabpageindex;
    // 탭 전환 시 데이터 로드
    if (nNewIdx == 1) {
        this.fn_loadDetail();
    }
};

// 동적 탭 추가
this.fn_addTab = function(sId, sTitle)
{
    var nPos = this.tab_main.getTabpageCount();
    this.tab_main.insertTabpage(sId, nPos);
    this.tab_main.getTabpage(nPos).set_text(sTitle);
    this.tab_main.set_tabindex(nPos);
};
```

---

## 12. MaskEdit

정해진 형식으로 입출력하는 Edit 계열 컴포넌트. 전화번호, 주민등록번호, 날짜 등에 활용.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 현재 값 |
| `type` | 입력 유형 (number/string) |
| `format` | 마스크 형식 |
| `readonly` | 읽기 전용 여부 |
| `enable` | 활성화 여부 |

### format 주요 기호

| 기호 | string 타입 | number 타입 |
|------|------------|------------|
| `#` | 숫자 1자리 | 숫자 (빈값 허용) |
| `0` | - | 숫자 (빈값 시 0 표시) |
| `a` | 영문 소문자 | - |
| `A` | 영문 대문자 | - |
| `@` | 모든 문자 | - |
| `,` | 고정 문자 | 천 단위 구분자 |
| `.` | 고정 문자 | 소수점 |
| `{...}` | 숨김 처리 영역 | - |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_value(value)` | 값 설정 |
| `set_format(fmt)` | 마스크 형식 변경 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onchange` | 값 변경 시 |

### XFDL 선언 예시

```xml
<!-- 전화번호 -->
<MaskEdit id="medt_phone" taborder="0" left="100" top="32" width="140" height="32"
          type="string" format="###-####-####"/>

<!-- 주민등록번호 (뒷자리 마스킹) -->
<MaskEdit id="medt_jumin" taborder="1" left="100" top="72" width="160" height="32"
          type="string" format="###### - #{######}"/>

<!-- 금액 (천 단위 구분) -->
<MaskEdit id="medt_amount" taborder="2" left="100" top="112" width="130" height="32"
          type="number" format="#,###,###,###"/>
```

### Script 사용 예시

```javascript
var sPhone = this.medt_phone.value;   // "010-1234-5678"
this.medt_phone.set_value("01012345678");

// 동적 포맷 변경
this.medt_amount.set_format("#,###,###,###.##");
```

---

## 13. PopupDiv

필요할 때 오버레이 방식으로 표시되는 팝업 컨테이너. 포커스를 잃으면 자동 숨김.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `url` | 로드할 Form URL |
| `scrollbars` | 스크롤바 설정 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `trackPopup(x, y, w, h)` | 절대 좌표로 팝업 표시 |
| `trackPopupByComponent(comp, align, x, y)` | 컴포넌트 기준 팝업 표시 |
| `closePopup()` | 팝업 닫기 |

### XFDL 선언 예시

```xml
<PopupDiv id="pdiv_detail" left="0" top="0" width="300" height="200">
  <Layouts>
    <Layout>
      <Static id="stc_info" text="상세 정보"
              left="10" top="10" width="200" height="24"/>
      <Button id="btn_close" text="닫기"
              left="220" top="170" width="60" height="24"
              onclick="btn_close_onclick"/>
    </Layout>
  </Layouts>
</PopupDiv>
```

### Script 사용 예시

```javascript
// 버튼 기준으로 팝업 표시
this.btn_open_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.pdiv_detail.trackPopupByComponent(obj, "bottom-left", 0, 0);
};

// 팝업 닫기
this.btn_close_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.pdiv_detail.closePopup();
};
```

---

## 14. GroupBox

여러 컴포넌트를 시각적으로 그룹화하는 컨테이너.

### XFDL 선언 예시

```xml
<GroupBox id="grp_search" left="0" top="0" width="500" height="100"
          text="검색 조건" font="bold 10pt 굴림">
  <Static id="stc_name" text="이름" left="10" top="30" width="50" height="24"/>
  <Edit id="edt_name" left="70" top="28" width="150" height="28"/>
  <Button id="btn_search" text="조회" left="230" top="28" width="80" height="28"/>
</GroupBox>
```

---

## 15. TextArea

여러 줄의 텍스트를 입력받는 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 현재 입력값 |
| `readonly` | 읽기 전용 여부 |
| `wordwrap` | 자동 줄바꿈 여부 |
| `scrollbars` | 스크롤바 설정 |
| `maxlength` | 최대 입력 글자 수 |
| `placeholdertext` | 입력 전 안내 텍스트 |

### XFDL 선언 예시

```xml
<TextArea id="ta_memo" taborder="0" left="10" top="32" width="400" height="120"
          maxlength="1000" scrollbars="vertical" wordwrap="true"
          placeholdertext="메모를 입력하세요"/>
```

### Script 사용 예시

```javascript
var sMemo = this.ta_memo.value;
this.ta_memo.set_value("내용을 입력합니다.");
```

---

## 16. Spin

숫자 증감 버튼이 포함된 입력 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 현재 값 |
| `min` | 최솟값 |
| `max` | 최댓값 |
| `step` | 증감 단계 |
| `format` | 표시 형식 |

### XFDL 선언 예시

```xml
<Spin id="spn_qty" taborder="0" left="100" top="32" width="100" height="32"
      value="1" min="1" max="999" step="1"
      onchange="spn_qty_onchange"/>
```

### Script 사용 예시

```javascript
this.spn_qty_onchange = function(obj:nexacro.Spin, e:nexacro.ChangeEventInfo)
{
    var nQty = obj.value;
    var nPrice = parseInt(this.ds_form.getColumn(0, "unit_price") || 0);
    this.ds_form.setColumn(0, "amount", nQty * nPrice);
};
```

---

## 17. ListBox

항목 목록에서 하나 또는 여러 개를 선택하는 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 선택된 코드값 |
| `codecolumn` | 코드 컬럼 ID |
| `datacolumn` | 표시 텍스트 컬럼 ID |
| `innerdataset` | 항목 Dataset |
| `multiselect` | 다중 선택 여부 |
| `displayrowcount` | 표시 행 수 |

### XFDL 선언 예시

```xml
<ListBox id="lst_options" taborder="0" left="10" top="32" width="200" height="120"
         codecolumn="code" datacolumn="label"
         multiselect="false"
         onchange="lst_options_onchange">
  <Dataset id="innerdataset">
    <ColumnInfo>
      <Column id="code"  size="10"/>
      <Column id="label" size="50"/>
    </ColumnInfo>
    <Rows>
      <Row><Col id="code">01</Col><Col id="label">항목 1</Col></Row>
      <Row><Col id="code">02</Col><Col id="label">항목 2</Col></Row>
    </Rows>
  </Dataset>
</ListBox>
```

---

## 18. ListView

Dataset 데이터를 자유로운 레이아웃으로 표현하는 컴포넌트. Grid는 행/열 고정 형태이지만 ListView는 각 항목을 커스텀 레이아웃으로 배치 가능.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `binddataset` | 바인딩할 Dataset ID |
| `selecttype` | 선택 방식 (none/row/multirow) |
| `scrollbars` | 스크롤바 설정 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_binddataset(id)` | Dataset 바인딩 설정 |
| `createFormat()` | Dataset 기준 포맷 자동 생성 |
| `getBindDataset()` | 바인딩된 Dataset 반환 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `oncellclick` | 항목 클릭 시 (e.row) |
| `onbodysizechanged` | body 크기 변경 시 |

### XFDL 선언 예시

```xml
<ListView id="lsv_items" binddataset="ds_items"
          left="0" top="40" width="300" height="400"
          scrollbars="vertical"
          oncellclick="lsv_items_oncellclick">
  <Formats>
    <Format id="default">
      <Rows>
        <Row size="60" band="body"/>
      </Rows>
      <Band id="body">
        <!-- 왼쪽: 이미지, 오른쪽: 텍스트 자유 배치 -->
        <Cell id="cell_img" left="5"   top="5"  width="50" height="50"
              text="bind:img_url" displaytype="imagecontrol"/>
        <Cell id="cell_nm"  left="65"  top="8"  width="200" height="20"
              text="bind:item_nm"  font="bold 11pt 굴림"/>
        <Cell id="cell_desc" left="65" top="32" width="200" height="18"
              text="bind:description" forecolor="#666666"/>
      </Band>
    </Format>
  </Formats>
</ListView>
```

### Script 사용 예시

```javascript
// 항목 클릭 이벤트
this.lsv_items_oncellclick = function(obj:nexacro.ListView, e:nexacro.ListViewClickEventInfo)
{
    var nRow = e.row;
    if (nRow < 0) return;

    var sItemId = this.ds_items.getColumn(nRow, "item_id");
    this.fn_openItemDetail(sItemId);
};
```

---

## 19. ProgressBar

작업 진행 상태를 시각적으로 표시하는 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `value` | 현재 진행값 |
| `min` | 최솟값 (기본 0) |
| `max` | 최댓값 (기본 100) |
| `orientation` | 방향 (horizontal/vertical) |

### XFDL 선언 예시

```xml
<ProgressBar id="pgb_loading" left="10" top="32" width="300" height="20"
             value="0" min="0" max="100"/>
```

### Script 사용 예시

```javascript
// 진행률 업데이트
var nTotal = this.ds_items.rowcount;
for (var i = 0; i < nTotal; i++) {
    // 처리 로직
    this.pgb_loading.set_value(Math.round((i + 1) / nTotal * 100));
}
```

---

## 20. ImageViewer

이미지를 표시하는 컴포넌트. 클릭 이벤트 연결로 이미지 버튼으로도 사용.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `image` | 표시할 이미지 경로 |
| `stretch` | 이미지 크기 조정 (none/both/width/height) |
| `visible` | 표시 여부 |

### XFDL 선언 예시

```xml
<ImageViewer id="img_logo" left="10" top="10" width="100" height="50"
             image="URL(&quot;imagerc::logo.png&quot;)"
             stretch="both"/>
```

### Script 사용 예시

```javascript
// 동적 이미지 변경
this.img_photo.set_image('URL("imagerc::' + sFileName + '")');
```

---

## 21. Menu

수평/수직 형태의 메뉴 컴포넌트. innerdataset을 통해 메뉴 항목 구성.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `innerdataset` | 메뉴 항목 Dataset (captioncolumn, levelcolumn 필수) |
| `captioncolumn` | 화면에 표시할 텍스트 컬럼 |
| `levelcolumn` | 메뉴 레벨 컬럼 (0: 대메뉴, 1 이상: 하위메뉴) |
| `idcolumn` | 메뉴 식별자 컬럼 |
| `checkboxcolumn` | 체크박스 표시 컬럼 |
| `enablecolumn` | 활성화 여부 컬럼 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `findRow(col, val)` | 조건에 맞는 행 검색 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onmenuclick` | 메뉴 항목 클릭 시 (e.id, e.userdata) |

### XFDL 선언 예시

```xml
<Menu id="mnu_main" taborder="0" left="0" top="0" width="400" height="30"
      innerdataset="ds_menu"
      captioncolumn="caption" levelcolumn="level" idcolumn="id"
      onmenuclick="mnu_main_onmenuclick"/>

<!-- Dataset 선언 -->
<Dataset id="ds_menu">
  <ColumnInfo>
    <Column id="caption" size="100"/>
    <Column id="level"   size="10"/>
    <Column id="id"      size="50"/>
  </ColumnInfo>
  <Rows>
    <Row><Col id="caption">파일</Col><Col id="level">0</Col><Col id="id">file</Col></Row>
    <Row><Col id="caption">새 문서</Col><Col id="level">1</Col><Col id="id">file_new</Col></Row>
    <Row><Col id="caption">열기</Col><Col id="level">1</Col><Col id="id">file_open</Col></Row>
    <Row><Col id="caption">편집</Col><Col id="level">0</Col><Col id="id">edit</Col></Row>
    <Row><Col id="caption">복사</Col><Col id="level">1</Col><Col id="id">edit_copy</Col></Row>
  </Rows>
</Dataset>
```

### Script 사용 예시

```javascript
this.mnu_main_onmenuclick = function(obj:nexacro.Menu, e:nexacro.MenuClickEventInfo)
{
    trace("클릭된 메뉴 ID: " + e.id);

    switch (e.id) {
        case "file_new":  this.fn_newFile(); break;
        case "file_open": this.fn_openFile(); break;
        case "edit_copy": this.fn_copy(); break;
    }
};
```

---

## 22. PopupMenu

마우스 우클릭 또는 특정 이벤트 시 표시되는 컨텍스트 메뉴 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `innerdataset` | 메뉴 항목 Dataset |
| `captioncolumn` | 표시 텍스트 컬럼 |
| `levelcolumn` | 메뉴 레벨 컬럼 |
| `idcolumn` | 메뉴 식별자 컬럼 |
| `enablecolumn` | 활성화 여부 컬럼 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `trackPopup(x, y)` | 절대 좌표로 팝업 메뉴 표시 |
| `trackPopupByComponent(comp, x, y)` | 컴포넌트 기준 팝업 메뉴 표시 |
| `closePopup()` | 팝업 메뉴 닫기 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onmenuclick` | 메뉴 항목 클릭 시 (e.id) |

### XFDL 선언 예시

```xml
<!-- PopupMenu 컴포넌트 선언 (화면에 표시되지 않음) -->
<PopupMenu id="pmnu_context" innerdataset="ds_context"
           captioncolumn="caption" levelcolumn="level" idcolumn="id"
           onmenuclick="pmnu_context_onmenuclick"/>
```

### Script 사용 예시

```javascript
// Grid 마우스 우클릭 시 팝업 메뉴 표시
this.grd_list_onrbuttondown = function(obj:nexacro.Grid, e:nexacro.GridMouseEventInfo)
{
    this.pmnu_context.trackPopupByComponent(obj, e.clientx, e.clienty);
};

// Form 마우스 우클릭 시
this.Form_onrbuttondown = function(obj:nexacro.Form, e:nexacro.MouseEventInfo)
{
    this.pmnu_context.trackPopupByComponent(this, e.clientx, e.clienty);
};

// 메뉴 클릭 이벤트
this.pmnu_context_onmenuclick = function(obj:nexacro.PopupMenu, e:nexacro.MenuClickEventInfo)
{
    switch (e.id) {
        case "add":    this.fn_addRow();    break;
        case "delete": this.fn_deleteRow(); break;
        case "copy":   this.fn_copyRow();   break;
    }
};
```

---

## 23. WebBrowser

넥사크로 애플리케이션 내에서 웹 페이지나 HTML 컨텐츠를 표시하는 컴포넌트. 넥사크로 ↔ 웹 페이지 간 양방향 데이터 교환 가능.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `url` | 표시할 웹 페이지 URL |
| `scrollbars` | 스크롤바 설정 |
| `visible` | 표시 여부 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `set_url(url)` | URL 설정 및 로드 |
| `getProperty(objId, prop)` | 웹 페이지 엘리먼트 속성값 읽기 |
| `setProperty(objId, prop, val)` | 웹 페이지 엘리먼트 속성값 설정 |
| `callMethod(objId, method, args)` | 웹 페이지 JS 함수 호출 |
| `execScript(script)` | 웹 페이지에 JS 코드 실행 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onload` | 웹 페이지 로드 완료 시 |
| `usernotify` | 웹 페이지에서 데이터 전달 시 |

### XFDL 선언 예시

```xml
<WebBrowser id="wb_content" taborder="0"
            left="0" top="40" width="800" height="500"
            url="http://example.com"
            onload="wb_content_onload"/>
```

### Script 사용 예시

```javascript
// URL 동적 설정
this.wb_content.set_url("http://example.com/page");

// 웹 페이지 로드 완료 후 처리
this.wb_content_onload = function(obj:nexacro.WebBrowser, e:nexacro.LoadEventInfo)
{
    trace("웹 페이지 로드 완료");
};

// 웹 페이지의 input 값 읽기
var sInputVal = this.wb_content.getProperty("document.getElementById('inputId')", "value");

// 웹 페이지 JS 함수 호출
this.wb_content.callMethod("window", "updateData", ["param1", "param2"]);

// 웹 페이지 → 넥사크로 데이터 전달 (웹 페이지 JS에서)
// nexacro.usernotify("eventName", "data");
this.wb_content_usernotify = function(obj:nexacro.WebBrowser, e:nexacro.UserNotifyEventInfo)
{
    trace("웹 페이지에서 받은 데이터: " + e.userdata);
};
```

---

## 24. FileDialog

파일 선택 대화상자를 표시하는 Invisible Object 컴포넌트.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `filter` | 파일 확장자 필터 (예: "Image files(*.jpg;*.png)\|*.jpg;*.png") |
| `accept` | 허용 MIME 타입 (웹 브라우저 환경) |
| `defaultextension` | 기본 확장자 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `open(title, mode)` | 파일 선택 대화상자 표시 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onclose` | 대화상자 닫힐 때 (e.reason, e.virtualfiles) |

### XFDL 선언 예시

```xml
<Objects>
  <FileDialog id="fdlg_open"
              filter="Excel files(*.xlsx)|*.xlsx|All files(*.*)|*.*"
              onclose="fdlg_open_onclose"/>
</Objects>
```

### Script 사용 예시

```javascript
// 파일 선택 대화상자 열기
this.btn_fileopen_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.fdlg_open.open("파일 선택", nexacro.FileOpenMode.OPEN);
};

// 파일 선택 완료 이벤트
this.fdlg_open_onclose = function(obj:nexacro.FileDialog, e:nexacro.FileDialogEventInfo)
{
    if (e.reason != "ok") return;  // 취소 시

    var aFiles = e.virtualfiles;
    for (var i = 0; i < aFiles.length; i++) {
        var oFile = aFiles[i];
        trace("파일명: " + oFile.name + ", 크기: " + oFile.size);
    }
};
```

---

## 25. FileUpTransfer

파일을 서버에 업로드하는 Invisible Object. FileDialog와 연동하여 사용.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `url` | 업로드 대상 서버 URL |
| `method` | 전송 방식 (POST) |
| `filelist` | 업로드할 파일 목록 |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `addFile(vfile)` | VirtualFile 추가 |
| `removeFile(idx)` | 파일 목록에서 제거 |
| `upload()` | 파일 업로드 실행 |
| `clearFiles()` | 파일 목록 초기화 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onload` | 업로드 완료 시 |
| `onerror` | 업로드 오류 시 |
| `onprogress` | 업로드 진행 중 |

### XFDL 선언 예시

```xml
<Objects>
  <FileDialog id="fdlg_upload"
              filter="All files(*.*)|*.*"
              onclose="fdlg_upload_onclose"/>
  <FileUpTransfer id="fut_upload"
                  url="/upload/fileUpload"
                  onload="fut_upload_onload"
                  onerror="fut_upload_onerror"/>
</Objects>
```

### Script 사용 예시

```javascript
// 파일 선택 후 업로드
this.fdlg_upload_onclose = function(obj:nexacro.FileDialog, e:nexacro.FileDialogEventInfo)
{
    if (e.reason != "ok") return;

    var aFiles = e.virtualfiles;
    for (var i = 0; i < aFiles.length; i++) {
        this.fut_upload.addFile(aFiles[i]);
    }
};

// 업로드 실행
this.btn_upload_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    if (this.fut_upload.filelist.length == 0) {
        alert("업로드할 파일을 선택하세요.");
        return;
    }
    this.fut_upload.upload();
};

// 업로드 완료
this.fut_upload_onload = function(obj:nexacro.FileUpTransfer, e:nexacro.LoadEventInfo)
{
    alert("파일 업로드가 완료되었습니다.");
    this.fut_upload.clearFiles();
};

// 업로드 오류
this.fut_upload_onerror = function(obj:nexacro.FileUpTransfer, e:nexacro.ErrorEventInfo)
{
    alert("파일 업로드 오류: " + e.errormsg);
};
```

---

## 26. Animation

컴포넌트의 속성값을 시간에 따라 변화시키는 애니메이션 객체. 스크립트로 동적 생성하여 사용.

### 핵심 속성

| 속성 | 설명 |
|------|------|
| `loop` | 반복 여부 |
| `direction` | 방향 (normal/alternate/reverse) |
| `duration` | 애니메이션 총 시간 (ms) |
| `easing` | 가속도 유형 (linear/ease/ease-in/ease-out 등) |

### 핵심 메서드

| 메서드 | 설명 |
|--------|------|
| `addTarget(id, comp, props)` | 애니메이션 대상 컴포넌트와 속성 추가 |
| `play()` | 애니메이션 실행 |
| `pause()` | 일시 중지 |
| `stop()` | 중지 및 초기값 복원 |

### 핵심 이벤트

| 이벤트 | 설명 |
|--------|------|
| `oncomplete` | 애니메이션 완료 시 |
| `onprogress` | 애니메이션 진행 중 |

### Script 사용 예시 (스크립트로 생성)

```javascript
// Form onload에서 Animation 생성
this.Form_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    // Animation 객체 생성 및 등록
    var aniObj = new nexacro.Animation("Ani00", this);
    this.addChild("Ani00", aniObj);

    // 반복 및 방향 설정
    this.Ani00.set_loop(true);
    this.Ani00.set_direction("alternate");
    this.Ani00.set_duration(1000);  // 1초

    // 대상 컴포넌트와 속성 지정
    // "width:200, left:300" → Button의 width를 200px, left를 300px로 변경
    this.Ani00.addTarget("AniItem00", this.btn_highlight, "width:200, left:100");
};

// 버튼 클릭으로 애니메이션 제어
this.btn_play_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.Ani00.play();
};

this.btn_pause_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.Ani00.pause();
};

this.btn_stop_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    this.Ani00.stop();
};

// 숫자 카운터 효과 (Static 텍스트 숫자 증가)
this.fn_countUp = function(objComp, nStart, nEnd, nDuration)
{
    var aniCount = new nexacro.Animation("AniCount", this);
    this.addChild("AniCount", aniCount);
    aniCount.set_duration(nDuration);
    aniCount.addTarget("CountItem", objComp, "value:" + nEnd);
    aniCount.play();
};
```

---

## 공통 패턴

### 컴포넌트 참조

```javascript
// this를 통한 접근 (같은 Form 내)
this.btn_save.set_enable(false);

// Div 내부 컴포넌트 접근
this.div_search.edt_name.set_value("검색어");

// 동적 컴포넌트 참조
var sId = "edt_col" + nIdx;
this[sId].set_value("값");

// Tab 내 Form 접근
var oTabForm = this.tab_main.getTabpage(0).form;
oTabForm.fn_refresh();
```

### 권한에 따른 컴포넌트 제어

```javascript
this.fn_setAuthority = function(sRole)
{
    var bAdmin = (sRole == "ADMIN");

    this.btn_delete.set_enable(bAdmin);
    this.btn_approve.set_enable(bAdmin);
    this.edt_price.set_readonly(!bAdmin);
};
```

### Dataset 바인딩 패턴

```xml
<!-- XFDL에서 바인딩 선언 -->
<Edit     id="edt_name"  binddataset="ds_form" binditemid="user_nm"/>
<Calendar id="cal_birth" binddataset="ds_form" binditemid="birth_dt"/>
<Combo    id="cbo_dept"  binddataset="ds_form" binditemid="dept_cd"
          dataset="ds_dept" codecolumn="dept_cd" datacolumn="dept_nm"/>
<CheckBox id="chk_use"   binddataset="ds_form" binditemid="use_yn"
          truevalue="Y" falsevalue="N"/>
```
