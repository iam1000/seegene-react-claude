# NexacroN Dataset & Data 레퍼런스

## 목차

1. [Dataset 개요](#1-dataset-개요)
2. [XML 정의 (ColumnInfo)](#2-xml-정의-columninfo)
3. [CRUD 메서드](#3-crud-메서드)
4. [검색 및 필터링](#4-검색-및-필터링)
5. [정렬](#5-정렬)
6. [집계 함수](#6-집계-함수)
7. [행 상태 관리 (RowType)](#7-행-상태-관리-rowtype)
8. [변경 감지 패턴](#8-변경-감지-패턴)
9. [이벤트 제어](#9-이벤트-제어)
10. [데이터 바인딩 (BindItem)](#10-데이터-바인딩-binditem)
11. [데이터 포맷](#11-데이터-포맷)
12. [동적 Dataset 생성](#12-동적-dataset-생성)
13. [DataObject](#13-dataobject)
14. [ExcelExportObject / ExcelImportObject](#14-excelexportobject--excelimportobject)

---

## 1. Dataset 개요

Dataset은 NexacroN에서 데이터를 관리하는 핵심 객체입니다. 비연결형(disconnected) 방식으로 서버와의 연결 없이 클라이언트에서 데이터를 조작합니다.

**주요 특성:**
- 테이블 형태 (컬럼 + 행)로 데이터 관리
- Grid, Combo, ListBox 등 컴포넌트와 데이터 바인딩
- 행 상태(추가/수정/삭제) 자동 추적
- 서버 통신 시 변경 데이터만 전송 가능

**Dataset 선언 위치:**
- Form 내 Objects 섹션에 선언
- InnerDataset: 컴포넌트(Combo, Radio 등) 내부에 선언

### Dataset 핵심 속성

| 속성 | 타입 | 설명 |
|------|------|------|
| `rowcount` | Number | 전체 행 수 (읽기 전용) |
| `colcount` | Number | 전체 컬럼 수 (읽기 전용) |
| `rowposition` | Number | 현재 행 인덱스 (-1: 없음) |
| `enableevent` | Boolean | 이벤트 발생 여부 제어 |
| `updatecontrol` | Boolean | 행 상태 추적 여부 |
| `name` | String | Dataset 이름 |

---

## 2. XML 정의 (ColumnInfo)

### Column 타입

| 타입 | 설명 | 예시 |
|------|------|------|
| `STRING` | 문자열 | 이름, 코드 등 |
| `INT` | 정수 | 수량, 나이 등 |
| `BIGDECIMAL` | 소수 포함 숫자 | 금액, 비율 등 |
| `DATE` | 날짜 (YYYYMMDD) | 생년월일 등 |
| `BLOB` | 바이너리 데이터 | 파일 등 |

### XFDL Dataset 선언 예시

```xml
<Dataset id="ds_list">
  <ColumnInfo>
    <Column id="user_no"   type="INT"        size="10"/>
    <Column id="user_nm"   type="STRING"     size="100"/>
    <Column id="birth_dt"  type="DATE"       size="8"/>
    <Column id="salary"    type="BIGDECIMAL" size="20"/>
    <Column id="dept_cd"   type="STRING"     size="10"/>
    <Column id="use_yn"    type="STRING"     size="1"/>
  </ColumnInfo>
  <Rows>
    <Row>
      <Col id="user_no">1</Col>
      <Col id="user_nm">홍길동</Col>
      <Col id="birth_dt">19900101</Col>
      <Col id="salary">3500000</Col>
      <Col id="dept_cd">10</Col>
      <Col id="use_yn">Y</Col>
    </Row>
  </Rows>
</Dataset>
```

### 컬럼 메타데이터 접근

```javascript
// 컬럼 수
var nColCnt = this.ds_list.getColCount();

// 컬럼 ID 목록
for (var i = 0; i < nColCnt; i++) {
    var sColId = this.ds_list.getColID(i);
    trace(sColId);
}

// 컬럼 정보 객체 접근
var objColInfo = this.ds_list.getColumnInfo("user_nm");
trace(objColInfo.name + " / " + objColInfo.type + " / " + objColInfo.size);

// 컬럼 존재 여부 확인
var nColIdx = this.ds_list.getColIndex("user_nm");  // -1: 없음
```

---

## 3. CRUD 메서드

### 행 추가

| 메서드 | 설명 | 반환값 |
|--------|------|--------|
| `addRow()` | 마지막에 행 추가 | 추가된 행 인덱스 |
| `insertRow(pos)` | pos 위치에 행 삽입 | 삽입된 행 인덱스 |

```javascript
// 마지막에 행 추가
var nRow = this.ds_list.addRow();
this.ds_list.setColumn(nRow, "user_nm", "홍길동");
this.ds_list.setColumn(nRow, "dept_cd", "10");

// 현재 위치 다음에 삽입
var nCurRow = this.ds_list.rowposition;
var nNewRow = this.ds_list.insertRow(nCurRow + 1);
```

### 행 삭제

| 메서드 | 설명 |
|--------|------|
| `deleteRow(pos)` | pos 행 삭제 (삭제 상태로 마킹) |
| `removeRow(pos)` | pos 행 완전 제거 (삭제 기록 없음) |
| `clearData()` | 모든 행 삭제 (컬럼 유지) |
| `clear()` | 컬럼 포함 전체 초기화 |

```javascript
// 현재 행 삭제
this.ds_list.deleteRow(this.ds_list.rowposition);

// 선택된 행들 삭제 (역순으로)
for (var i = this.ds_list.rowcount - 1; i >= 0; i--) {
    if (this.ds_list.getColumn(i, "chk_yn") == "1") {
        this.ds_list.deleteRow(i);
    }
}

// 데이터 전체 초기화 (컬럼 구조 유지)
this.ds_list.clearData();
```

### 값 읽기/쓰기

| 메서드 | 설명 |
|--------|------|
| `getColumn(row, col)` | row행 col컬럼 값 반환 |
| `setColumn(row, col, value)` | row행 col컬럼에 값 설정 |
| `getColumnid(row, col)` | row행 col번째 컬럼 ID 반환 |

```javascript
// 현재 행의 값 읽기
var sName  = this.ds_list.getColumn(this.ds_list.rowposition, "user_nm");
var nSalary = this.ds_list.getColumn(this.ds_list.rowposition, "salary");

// 특정 행의 값 쓰기
this.ds_list.setColumn(0, "user_nm", "홍길동");
this.ds_list.setColumn(0, "salary", 3500000);

// 전체 행 순회
for (var i = 0; i < this.ds_list.rowcount; i++) {
    var sVal = this.ds_list.getColumn(i, "user_nm");
    trace(i + ": " + sVal);
}
```

### 컬럼 추가/삭제

```javascript
// 컬럼 추가
this.ds_list.addColumn("new_col", "STRING", 50);

// 컬럼 삭제
this.ds_list.removeColumn("new_col");
```

### Dataset 복사

```javascript
// 전체 복사 (구조 + 데이터)
this.ds_target.copyDataset(this.ds_source);

// 행 복사
this.ds_target.appendRow(this.ds_source, nSrcRow);

// 데이터만 복사 (구조 동일 시)
this.ds_target.clearData();
for (var i = 0; i < this.ds_source.rowcount; i++) {
    this.ds_target.appendRow(this.ds_source, i);
}
```

---

## 4. 검색 및 필터링

### findRow - 단순 값 검색

```javascript
// col 컬럼에서 value와 일치하는 첫 번째 행 인덱스 반환 (-1: 없음)
var nRow = this.ds_list.findRow("dept_cd", "10");

if (nRow >= 0) {
    this.ds_list.set_rowposition(nRow);
}
```

### findRowExpr - 표현식으로 검색

```javascript
// 복합 조건 검색
var nRow = this.ds_list.findRowExpr("user_nm == '홍길동' && dept_cd == '10'");

// 숫자 범위 검색
var nRow = this.ds_list.findRowExpr("salary >= 3000000 && salary <= 5000000");
```

### filter - 필터 적용

```javascript
// 단순 필터
this.ds_list.set_filter("dept_cd == '10'");

// LIKE 필터 (포함 검색)
this.ds_list.set_filter("user_nm like '%" + sKeyword + "%'");

// 복합 조건
this.ds_list.set_filter("dept_cd == '10' && use_yn == 'Y'");

// 필터 해제
this.ds_list.set_filter("");
```

**주의:** filter는 view를 제한할 뿐 실제 데이터는 유지됩니다.

### 필터 적용 후 전체 행 순회

```javascript
// 필터 해제 후 전체 행 순회
var sOldFilter = this.ds_list.filter;
this.ds_list.set_filter("");

for (var i = 0; i < this.ds_list.rowcount; i++) {
    // 전체 행 처리
}

// 원래 필터 복원
this.ds_list.set_filter(sOldFilter);
```

---

## 5. 정렬

### keystring으로 정렬

```javascript
// 오름차순 정렬
this.ds_list.set_keystring("+dept_cd");

// 내림차순 정렬
this.ds_list.set_keystring("-salary");

// 다중 컬럼 정렬
this.ds_list.set_keystring("+dept_cd -salary");

// 정렬 해제
this.ds_list.set_keystring("");
```

### 정렬 옵션 (sort 메서드)

```javascript
// 대소문자 무시 정렬
this.ds_list.set_keystring("+i:user_nm");  // 대소문자 무시

// 숫자로 정렬 (문자열 컬럼)
this.ds_list.set_keystring("+n:user_no");  // 숫자 정렬
```

---

## 6. 집계 함수

### 기본 집계

| 메서드 | 설명 |
|--------|------|
| `getSum(col, start, end)` | 합계 |
| `getAvg(col, start, end)` | 평균 |
| `getMax(col, start, end)` | 최대값 |
| `getMin(col, start, end)` | 최소값 |
| `getCount(col, start, end)` | 개수 (null 제외) |

```javascript
// 전체 합계
var nTotal = this.ds_list.getSum("salary");

// 범위 지정 (0~4행)
var nSubTotal = this.ds_list.getSum("salary", 0, 4);

// 평균 (소수점 2자리)
var nAvg = nexacro.round(this.ds_list.getAvg("salary"), 2);

// 최대/최소
var nMax = this.ds_list.getMax("salary");
var nMin = this.ds_list.getMin("salary");

// 행 수 (null이 아닌 값)
var nCount = this.ds_list.getCount("user_nm");
```

### 조건부 집계 (getCaseSum 등)

```javascript
// 조건 표현식으로 집계
var sExpr = "dept_cd == '10'";

var nSum   = this.ds_list.getCaseSum(sExpr, "salary");
var nAvg   = nexacro.round(this.ds_list.getCaseAvg(sExpr, "salary"), 2);
var nCount = this.ds_list.getCaseCount(sExpr, "salary");
var nMax   = this.ds_list.getCaseMax(sExpr, "salary");
var nMin   = this.ds_list.getCaseMin(sExpr, "salary");

// 조건식의 컬럼이 STRING인 경우 parseInt 필요
var nSum2 = this.ds_list.getCaseSum("salary > 3000000", "parseInt(salary)");
```

### 그룹 집계

```javascript
// 그룹별 범위 찾기
// keystring으로 먼저 정렬 후 사용
this.ds_list.set_keystring("+dept_cd");

var nGroupStart = this.ds_list.getGroupRangeStart("dept_cd", 0);
var nGroupCount = this.ds_list.getGroupRangeCount("dept_cd", 0);

trace("그룹 시작: " + nGroupStart + ", 그룹 크기: " + nGroupCount);
```

---

## 7. 행 상태 관리 (RowType)

### RowType 상수

| 상수 | 값 | 설명 |
|------|-----|------|
| `Dataset.ROWTYPE_NORMAL` | 1 | 일반 (변경 없음) |
| `Dataset.ROWTYPE_INSERT` | 2 | 추가된 행 |
| `Dataset.ROWTYPE_UPDATE` | 4 | 수정된 행 |
| `Dataset.ROWTYPE_DELETE` | 8 | 삭제된 행 (별도 관리) |

### 행 상태 확인

```javascript
// 특정 행의 상태 확인
var nRowType = this.ds_list.getRowType(nRow);

if (nRowType == Dataset.ROWTYPE_INSERT) {
    trace("신규 행");
} else if (nRowType == Dataset.ROWTYPE_UPDATE) {
    trace("수정된 행");
}

// 삭제 행 수 확인
var nDeletedCnt = this.ds_list.getDeletedRowCount();

// 삭제된 행의 컬럼값 접근
for (var i = 0; i < nDeletedCnt; i++) {
    var sVal = this.ds_list.getDeletedColumn(i, "user_nm");
    trace("삭제: " + sVal);
}
```

### 원본값 확인 (getOrgColumn)

```javascript
// 수정 전 원본값 확인
var sOrgName = this.ds_list.getOrgColumn(nRow, "user_nm");
var sCurName = this.ds_list.getColumn(nRow, "user_nm");

if (sOrgName != sCurName) {
    trace("변경됨: " + sOrgName + " -> " + sCurName);
}
```

### RowType 직접 변경

```javascript
// 행 상태 초기화 (NORMAL로)
this.ds_list.updateRow(nRow);  // UPDATE -> NORMAL

// updatecontrol 속성으로 행 상태 추적 비활성화
this.ds_list.set_updatecontrol(false);
this.ds_list.setColumn(nRow, "user_nm", "홍길동");
this.ds_list.set_updatecontrol(true);
```

---

## 8. 변경 감지 패턴

### gfn_dsIsUpdated 패턴 (실무 표준)

```javascript
/**
 * Dataset의 변경 여부를 판단하는 함수 (실무 표준 패턴)
 */
this.gfn_dsIsUpdated = function(objDs)
{
    if (objDs == null) return false;

    // 삭제 정보가 있으면 변경됨
    if (objDs.getDeletedRowCount() > 0) {
        return true;
    }

    // INSERT(2) 또는 UPDATE(4) 행이 있으면 변경됨
    var nRow = objDs.findRowExpr(
        "(dataset.getRowType(rowidx)==4) || (dataset.getRowType(rowidx)==2)"
    );
    return (nRow >= 0);
};

// 사용 예
if (this.gfn_dsIsUpdated(this.ds_list)) {
    // 저장 처리
    this.fn_save();
} else {
    alert("변경된 데이터가 없습니다.");
}
```

### 특정 컬럼 변경 여부 확인

```javascript
this.fn_isColumnChanged = function(objDs, nRow, sColId)
{
    var nRowType = objDs.getRowType(nRow);
    if (nRowType == Dataset.ROWTYPE_INSERT) {
        // 신규 행은 값이 있으면 변경으로 간주
        return (objDs.getColumn(nRow, sColId) != null &&
                objDs.getColumn(nRow, sColId) != "");
    }
    return (objDs.getColumn(nRow, sColId) != objDs.getOrgColumn(nRow, sColId));
};
```

### 저장 전 유효성 검사 + 변경 감지 패턴

```javascript
this.fn_save = function()
{
    // 이벤트가 Dataset에 반영되도록 강제 업데이트
    this.ds_form.updateToDataset();

    if (!this.gfn_dsIsUpdated(this.ds_form)) {
        alert("변경된 내용이 없습니다.");
        return;
    }

    // 유효성 검사
    if (!this.fn_validate()) return;

    // 트랜잭션 실행
    this.fn_callSave();
};
```

---

## 9. 이벤트 제어

### enableevent 제어

Dataset에 데이터를 대량으로 설정할 때 이벤트를 비활성화하면 성능이 개선됩니다.

```javascript
// 이벤트 비활성화 후 대량 처리
this.ds_list.set_enableevent(false);

for (var i = 0; i < this.ds_source.rowcount; i++) {
    var nRow = this.ds_list.addRow();
    this.ds_list.setColumn(nRow, "col1", this.ds_source.getColumn(i, "col1"));
    this.ds_list.setColumn(nRow, "col2", this.ds_source.getColumn(i, "col2"));
}

// 이벤트 재활성화
this.ds_list.set_enableevent(true);
```

### Dataset 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onrowposchanged` | 현재 행 변경 시 발생 |
| `oncolumnchanged` | 컬럼 값 변경 시 발생 |

```javascript
// rowposition 변경 이벤트
this.ds_list_onrowposchanged = function(obj:nexacro.NormalDataset, e:nexacro.DSRowPosChangedEventInfo)
{
    var nRow = e.newrow;
    if (nRow < 0) return;

    // 상세 폼에 선택 행 데이터 반영
    this.edt_name.set_value(obj.getColumn(nRow, "user_nm"));
};

// 컬럼 값 변경 이벤트
this.ds_list_oncolumnchanged = function(obj:nexacro.NormalDataset, e:nexacro.DSColChangedEventInfo)
{
    var sColId = e.columnid;
    var nRow   = e.row;
    var sNewVal = e.newvalue;
    trace(sColId + " 변경: " + sNewVal);
};
```

---

## 10. 데이터 바인딩 (BindItem)

### XFDL 바인딩 선언

```xml
<!-- Dataset 선언 -->
<Dataset id="ds_form">
  <ColumnInfo>
    <Column id="user_nm"  type="STRING" size="100"/>
    <Column id="birth_dt" type="DATE"   size="8"/>
    <Column id="dept_cd"  type="STRING" size="10"/>
  </ColumnInfo>
</Dataset>

<!-- 컴포넌트 바인딩 -->
<Edit id="edt_name"   binddataset="ds_form" binditemid="user_nm"/>
<Calendar id="cal_birth" binddataset="ds_form" binditemid="birth_dt"/>
<Combo id="cbo_dept"  binddataset="ds_form" binditemid="dept_cd"
       dataset="ds_dept" codecolumn="dept_cd" datacolumn="dept_nm"/>
```

### Script로 바인딩 설정/해제

```javascript
// 바인딩 설정
this.edt_name.set_binddataset("ds_form");
this.edt_name.set_binditemid("user_nm");

// 바인딩 해제
this.edt_name.set_binddataset("");

// 바인딩 즉시 반영 (edittext -> Dataset)
this.ds_form.updateToDataset();
```

### 바인딩 유형

| 유형 | 설명 |
|------|------|
| Full Binding | Grid - Dataset 1:1 완전 매핑 |
| Master-Detail | Grid 선택 행 → 단일 컴포넌트 |
| Lookup Binding | Combo의 InnerDataset 참조 |
| Presentation Binding | 스타일 속성에 Dataset 값 바인딩 |

---

## 11. 데이터 포맷

### XML 포맷 (서버 통신 기본값)

서버와 Dataset 간 데이터 교환 시 nexacro 고유 XML 포맷 사용:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Root xmlns="http://www.nexacroplatform.com/platform/dataset">
  <Parameters>
    <Parameter id="ErrorCode">0</Parameter>
    <Parameter id="ErrorMsg">Success</Parameter>
  </Parameters>
  <Dataset id="ds_list">
    <ColumnInfo>
      <Column id="user_no" type="INT" size="10"/>
      <Column id="user_nm" type="STRING" size="100"/>
    </ColumnInfo>
    <Rows>
      <Row>
        <Col id="user_no">1</Col>
        <Col id="user_nm">홍길동</Col>
      </Row>
    </Rows>
  </Dataset>
</Root>
```

### SSV 포맷

```
SSV:UTF-8
Dataset:ds_list
user_no:INTEGER	user_nm:STRING
1	홍길동
2	이순신
```

### JSON 포맷 (DataObject용)

```json
{
  "employees": [
    {"id": 1, "name": "홍길동", "dept": "개발팀"},
    {"id": 2, "name": "이순신", "dept": "기획팀"}
  ]
}
```

---

## 12. 동적 Dataset 생성

### Form 내 동적 생성

```javascript
// Form 내 Dataset 동적 생성
var objDs = new Dataset();
objDs.set_name("ds_temp");
this.addChild("ds_temp", objDs);

// 컬럼 추가
this.ds_temp.addColumn("col1", "STRING", 100);
this.ds_temp.addColumn("col2", "INT", 10);

// 데이터 추가
var nRow = this.ds_temp.addRow();
this.ds_temp.setColumn(nRow, "col1", "값1");
this.ds_temp.setColumn(nRow, "col2", 100);
```

### Application 전역 Dataset 생성

```javascript
// 전역 Dataset 생성 (Application 레벨)
var objApp = nexacro.getApplication();
var objGds = new Dataset();
objApp.addVariable("gds_shared", objGds);

objApp.gds_shared.addColumn("col1", "STRING", 100);
// 이후 어느 Form에서나 application.gds_shared로 접근 가능
```

---

## 13. DataObject

JSON 형태의 외부 데이터를 직접 가져와 Dataset과 바인딩하는 오브젝트.

### XFDL 선언 및 사용

```xml
<Objects>
  <DataObject id="DataObject00" url="http://api.example.com/data.json"
              dataset="ds_result" onload="DataObject00_onload"/>
  <Dataset id="ds_result">
    <ColumnInfo>
      <Column id="id"   type="INT"    size="10"/>
      <Column id="name" type="STRING" size="100"/>
    </ColumnInfo>
  </Dataset>
</Objects>
```

### Script 사용

```javascript
// DataObject로 데이터 로드
this.DataObject00_onload = function(obj:nexacro.DataObject, e:nexacro.LoadEventInfo)
{
    trace("데이터 로드 완료: " + this.ds_result.rowcount + "건");
    this.grd_list.createFormat();
};

// 양방향 통신 설정 (데이터 변경 시 자동 반영)
this.DataObject00.set_enablelivebinding(true);

// 요청 실행
this.DataObject00.request();
```

---

## 14. ExcelExportObject / ExcelImportObject

### ExcelExportObject - Grid를 Excel로 내보내기

```javascript
// Excel 내보내기 (nexacro-xeni 서버 필요)
this.btn_export_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    var exportObj = new ExcelExportObject("Export00", this);

    // 파일명 설정
    exportObj.set_exportfilename("조회결과_" + this.fn_getToday());

    // 파일 형식 (EXCEL2007 = xlsx)
    exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);

    // nexacro-xeni 서비스 URL
    exportObj.set_exporturl("/xeni/XExportImport");

    // 내보낼 Grid 추가 (Sheet명, 시작 셀)
    exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_list, "Sheet1!A1");

    // 이벤트 핸들러 등록
    exportObj.addEventHandler("onsuccess", this.fn_exportSuccess, this);
    exportObj.addEventHandler("onerror",   this.fn_exportError,   this);

    // 내보내기 실행
    exportObj.exportData();
};

this.fn_exportSuccess = function(obj, e)
{
    trace("내보내기 완료");
};

this.fn_exportError = function(obj, e)
{
    trace("내보내기 오류: " + e.errormsg);
};
```

### 여러 Grid를 하나의 파일로

```javascript
var exportObj = new ExcelExportObject("Export01", this);
exportObj.set_exportfilename("다중시트_내보내기");
exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
exportObj.set_exporturl("/xeni/XExportImport");

// 각 Grid를 다른 시트로
exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_list1, "목록!A1");
exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_list2, "통계!A1");

exportObj.exportData();
```

### ExcelImportObject - Excel을 Grid로 읽기

```javascript
// Excel 가져오기
this.btn_import_onclick = function(obj:nexacro.Button, e:nexacro.ClickEventInfo)
{
    var importObj = new ExcelImportObject("Import00", this);

    importObj.set_importtype(nexacro.ImportTypes.EXCEL);
    importObj.set_importurl("/xeni/XExportImport");

    importObj.addEventHandler("onsuccess", this.fn_importSuccess, this);
    importObj.addEventHandler("onerror",   this.fn_importError,   this);

    // 파일 선택 다이얼로그 후 처리
    // importData(파일경로, 범위, 대상Dataset)
    importObj.importData("", "Sheet1!A1:Z1000", "ds_import");
};

this.fn_importSuccess = function(obj, e)
{
    trace("가져오기 완료: " + this.ds_import.rowcount + "건");
    this.grd_list.createFormat();
};
```

---

## 부록: 실무 패턴 모음

### 신규 데이터 입력 폼 초기화

```javascript
this.fn_newForm = function()
{
    this.ds_form.clearData();
    var nRow = this.ds_form.addRow();
    this.ds_form.set_rowposition(nRow);

    // 기본값 설정
    this.ds_form.setColumn(nRow, "use_yn", "Y");
    this.ds_form.setColumn(nRow, "dept_cd", "10");
};
```

### 서버 응답 Dataset 검증

```javascript
this.fn_afterCallback = function(strSvcId, nErrorCode, strErrorMsg)
{
    if (nErrorCode != 0) {
        alert("오류: " + strErrorMsg);
        return;
    }

    var nCount = this.ds_list.rowcount;
    if (nCount == 0) {
        alert("조회된 데이터가 없습니다.");
        return;
    }

    trace("조회 완료: " + nCount + "건");
    this.grd_list.set_rowposition(0);
};
```

### 체크박스 선택 행 집계

```javascript
this.fn_getCheckedSum = function()
{
    var nTotal = 0;
    for (var i = 0; i < this.ds_list.rowcount; i++) {
        if (this.ds_list.getColumn(i, "chk_yn") == "1") {
            nTotal += parseInt(this.ds_list.getColumn(i, "amount") || 0);
        }
    }
    return nTotal;
};
```

### Dataset 필터 유지하며 정렬

```javascript
this.fn_sortWithFilter = function(sCol, sDir)
{
    var sCurFilter = this.ds_list.filter;
    this.ds_list.set_keystring(sDir + sCol);
    if (sCurFilter) {
        this.ds_list.set_filter(sCurFilter);
    }
};
```
