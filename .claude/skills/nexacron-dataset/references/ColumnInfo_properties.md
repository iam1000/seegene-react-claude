# ColumnInfo Properties

| Property | Description |
|----------|-------------|
| `datapath` | Dataset 오브젝트의 컬럼에서 가져올 데이터에 해당하는 datapath를 설정하는 속성입니다. |
| `name` | ColumnInfo 의 이름을 갖는 읽기전용 속성입니다. |
| `prop` | keystring 속성에 의해 그룹핑되면 생성되는 논리적 레코드에 표시될 값의 유형을 설정하는 속성입니다. |
| `size` | DataSet 의 Column 에 저장할 수 있는 데이터의 최대길이를 설정하는 속성입니다. |
| `sumtext` | Column 의 prop 속성값이 "TEXT" 일 때 논리적 레코드의 해당 컬럼에 표시되는 값을 설정하는 속성입니다. |
| `type` | DataSet 의 Column 에 저장되는 데이터의 형식을 설정하는 속성입니다. |

---

## datapath

Dataset 오브젝트의 컬럼에서 가져올 데이터에 해당하는 datapath를 설정하는 속성입니다.

**Syntax**
```javascript
ColumnInfo.set_datapath(strDatapath) // set 
ColumnInfo.datapath // get
```

**Setting Syntax**
```javascript
데이터에서 컬럼 값으로 가져올 datapath를 설정합니다.
```

**Remark**
- 넥사크로 스튜디오에서 Dataset 오브젝트의 dataobjectpath 속성을 선택하고 Data Path Editor를 실행하면 Json Contents에서 컬럼으로 추가할 항목을 선택하고 추가하면 datapath 속성값을 자동으로 설정합니다.

- datapath 속성값을 $형태로 설정한 경우 column 정보가 변경되고 이벤트 발생 시 변경 정보에서 dataobjectpath = "", index = -1, key=datapath로 전달됩니다. 
  DataObject, Dataset 오브젝트의 데이터는 정상적으로 처리되지만 변경된 정보를 받는 Dataset 오브젝트에서 변경 정보를 정확하게 확인할 수 없어 Dataset 오브젝트는 DataObject 오브젝트로부터 reload를 수행하게 됩니다.

---

## name

ColumnInfo 의 이름을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
ColumnInfo.name
```

**Remark**
- getColumnInfo() 메소드로 반환된 ColumnInfo 오브젝트는 DataSet 의 Column ID 가 설정됩니다.

**See Also**: addColumnInfo, getColumnInfo

---

## prop

keystring 속성에 의해 그룹핑되면 생성되는 논리적 레코드에 표시될 값의 유형을 설정하는 속성입니다.

**Syntax**
```javascript
ColumnInfo.set_prop(enumProp) // set
ColumnInfo.prop // get
```

**Setting Syntax**
```javascript
논리적 레코드(Logical Record) 의 해당 컬럼에 sumtext 속성값을 표시합니다.
```

**Remark**
- prop 속성값을 설정하지 않으면 "NONE" 으로 적용됩니다.

**See Also**: keystring

---

## size

DataSet 의 Column 에 저장할 수 있는 데이터의 최대길이를 설정하는 속성입니다.

**Syntax**
```javascript
ColumnInfo.set_size(nColSize) // set
ColumnInfo.size // get
```

**Setting Syntax**
```javascript
Column 에 저장할 수 있는 데이터의 최대길이를 숫자로 설정합니다.
```

---

## sumtext

Column 의 prop 속성값이 "TEXT" 일 때 논리적 레코드의 해당 컬럼에 표시되는 값을 설정하는 속성입니다.

**Syntax**
```javascript
ColumnInfo.set_sumtext(strSumtext) // set
ColumnInfo.sumtext // get
```

**Setting Syntax**
```javascript
Grid 에 표시되는 Row 가 논리적 레코드일 때 해당 컬럼에 표시되는 값을 문자열로 설정합니다.
```

**Remark**
- prop 속성값이 "TEXT" 일 때만 유효한 속성입니다.

- Array 속성으로 사용하는 "constructor","length","prototype" 항목은 값으로 지정할 수 없습니다.

- 논리적 레코드(Logical Record)는 keystring 속성에 의해 데이터가 그룹핑되었을 때 생성되는 Row 입니다.

---

## type

DataSet 의 Column 에 저장되는 데이터의 형식을 설정하는 속성입니다.

**Syntax**
```javascript
ColumnInfo.set_type(strType) // set
ColumnInfo.type // get
```

**Setting Syntax**
```javascript
바이너리 데이터, 대용량 데이터

* NRE 만 지원합니다.
* 넥사크로 X-API 사용 시 BLOB 타입 Column에 이미지 데이터를 설정하는 경우 Data URI 형태는 지원하지 않으며 Base64 인코딩 데이터만 설정할 수 있습니다.
 (X) data:image/png;base64,iVBORw0~...
 (O) iVBORw0~....
```

**Remark**
- type 속성값을 설정하지 않으면 "STRING" 으로 적용됩니다.

- Column 에 데이터가 존재하지 않을 경우 undefined 로 적용됩니다.

---
