# Dataset Events

| Event | Description |
|-------|-------------|
| `cancolumnchange` | DataSet 의 Column 값이 변경될 때 발생하는 이벤트입니다. |
| `canrowposchange` | Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경될 때 발생하는 이벤트입니다. |
| `oncolumnchanged` | DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다. |
| `onload` | DataSet 에 데이터 로딩이 완료된 후 발생하는 이벤트입니다. |
| `onrowposchanged` | Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경된 후 발생하는 이벤트입니다. |
| `onrowsetchanged` | DataSet 에 데이터가 Insert, Delete 되거나 Row 의 위치, 상태 등이 변경된 후 발생하는 이벤트입니다. |
| `onvaluechanged` | DataSet 의 데이터가 Insert, Delete, Update 되거나 Row 의 위치, 상태 등이 변경될 때 마지막에 발생하는 이벤트입니다 |

---

## cancolumnchange

DataSet 의 Column 값이 변경될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
cancolumnchange(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Dataset | Event가 발생한 Object. |
| `e` | DSColChangeEventInfo | Event Object. |

**Remark**
- DataSet 을 바인딩 한 컴포넌트에서 값이 변경되면, DataSet 에 변경된 Column 값이 반영되기 전에 발생하는 이벤트입니다.

- setColumn() 또는 setConstColumn() 메소드로 Column 값을 변경하면 발생하는 이벤트입니다.

- cancolumnchange 이벤트 내에서 setColumn() 메소드 사용 시 Stack OverFlow 와 같은 치명적인 시스템 에러가 발생할 수 있습니다.
  따라서 cancolumnchange 이벤트 내에서 setColumn() 메소드를 실행할 수 없습니다.

---

## canrowposchange

Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
canrowposchange(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Dataset | Event가 발생한 Object. |
| `e` | DSRowPosChangeEventInfo | Event Object. |

**Remark**
- DataSet 을 바인딩 한 컴포넌트에서 Row 선택이 변경되면, DataSet 의 rowposition 속성에 변경된 값이 반영되기 전에 발생하는 이벤트입니다.

- addRow(), filter(), deleteRow() 메소드 수행 시 canrowposchange 이벤트가 발생합니다.

- clear(), clearData(), deleteAll(), deleteRow(), filterRow() 메소드를 수행한 결과 모든 Row 가 삭제되거나 표시되는 Row 가 없다면
  canrowposchange 이벤트는 발생하지 않습니다.

- Dataset 에서 데이터 로드로 인해 rowposition 속성값이 "-1" 에서 "0" 으로 변경된 경우는 canrowposchange 이벤트가 발생하지 않습니다.

---

## oncolumnchanged

DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
oncolumnchanged(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Dataset | Event가 발생한 Object. |
| `e` | DSColChangeEventInfo | Event Object. |

**Remark**
- cancolumnchange 이벤트에서 리턴값으로 "false" 를 반환하면 oncolumnchanged 이벤트는 발생하지 않습니다.

- DataSet 을 바인딩 한 컴포넌트에서 값이 변경되면, DataSet 에 변경된 Column 값을 반영한 후 발생하는 이벤트입니다.

- setColumn() 또는 setConstColumn() 메소드로 Column 값을 변경한 후 발생하는 이벤트입니다.

- oncolumnchanged 이벤트 내에서 setColumn() 메소드 사용 시 Stack OverFlow 와 같은 치명적인 시스템 에러가 발생할 수 있습니다.
  따라서 oncolumnchanged 이벤트 내에서 setColumn() 메소드를 사용하면 cancolumnchange 이벤트만 발생합니다.

---

## onload

DataSet 에 데이터 로딩이 완료된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onload(obj:nexacro.NormalDataset,e:nexacro.DSLoadEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Dataset | Event가 발생한 Object. |
| `e` | DSLoadEventInfo | Event Object. |

**Remark**
- onload 이벤트가 종료된 후 rowposition 속성값은 "0" 으로 변경됩니다.
	
- onload이벤트가 발생한 원인은 e 오브젝트(DSLoadEventInfo)의 reason 속성값을 참조하시기 바랍니다.

**See Also**: reason

---

## onrowposchanged

Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onrowposchanged(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Dataset | Event가 발생한 Object. |
| `e` | DSRowPosChangeEventInfo | Event Object. |

**Remark**
- canrowposchange 이벤트에서 리턴값으로 "false" 를 반환하면 onrowposchanged 이벤트는 발생하지 않습니다.

- DataSet 을 바인딩 한 컴포넌트에서 Row 선택이 변경되면, DataSet 의 rowposition 속성에 변경된 값이 반영된 후 발생하는 이벤트입니다.

---

## onrowsetchanged

DataSet 에 데이터가 Insert, Delete 되거나 Row 의 위치, 상태 등이 변경된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onrowsetchanged(obj:nexacro.NormalDataset,e:nexacro.DSRowsetChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Dataset | Event가 발생한 Object. |
| `e` | DSRowsetChangeEventInfo | Event Object. |

**Remark**
- onrowsetchanged 이벤트가 발생한 원인은 DSRowsetChangeEventInfo 오브젝트의 reason 속성값을 참조하시기 바랍니다.

◆ 주의

- onrowsetchanged 이벤트 핸들러 함수 내에서 Dataset 오브젝트의 enableevent 속성값을 false로 변경했다가 다시 true로 변경하면 이벤트가 반복해서 발생하며 무한 루프에 빠집니다.

**See Also**: reason

---

## onvaluechanged

DataSet 의 데이터가 Insert, Delete, Update 되거나 Row 의 위치, 상태 등이 변경될 때 마지막에 발생하는 이벤트입니다.

**Syntax**
```javascript
onvaluechanged(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Dataset | Event가 발생한 Object. |
| `e` | DSColChangeEventInfo | Event Object. |

**Remark**
아래와 같은 경우 onvaluechanged 이벤트가 발생합니다.
- Dataset 오브젝트에 데이터가 로드될 때
- setColumn 메소드를 실행해 데이터가 변경될 때
- enableevent 속성값이 true로 변경될 때

◆ 주의

- onvaluechanged 이벤트 핸들러 함수 내에서 Dataset 오브젝트의 enableevent 속성값을 false로 변경했다가 다시 true로 변경하면 이벤트가 반복해서 발생하며 무한 루프에 빠집니다.

---
