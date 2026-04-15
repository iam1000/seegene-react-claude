# DataObject Events

| Event | Description |
|-------|-------------|
| `ondatachanged` | DataObject 오브젝트의 data가 Row 단위로 변경됐을 때 발생하는 이벤트입니다. |
| `onerror` | load, request 메서드 호출 후 통신 실패 시 발생하는 이벤트입니다. |
| `onload` | 데이터 로딩이 완료된 후 발생하는 이벤트입니다. |
| `onloaddatasets` | DataObejct 오브젝트가 Dataset 오브젝트의 binddataobject 속성값으로 설정된 경우 Dataset 오브젝트의 데이터 로딩이 |
| `onsuccess` | request 메소드 호출 후 통신 성공 시 발생하는 이벤트입니다. |
| `onvaluechanged` | DataObject 오브젝트의 value 값(JSON 데이터에서 특정 key에 해당하는 value)이 변경됐을 때 발생하는 이벤트입니다. |

---

## ondatachanged

DataObject 오브젝트의 data가 Row 단위로 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondatachanged(obj:nexacro.DataObject,e:nexacro.DataObjectDataChangedEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | DataObject | Event가 발생한 Object. |
| `e` | DataObjectDataChangedEventInfo | Event Object. |

**Remark**
- 바인딩 된 Dataset 오브젝트의 dataobjectbindmode 속성값이 "twoway"일 때 아래와 같은 경우 이벤트가 발생합니다.
  - Row 단위 데이터 변경 시
  - updatecontrol 속성값이 true일 때 데이터 변경 후 applyChange 메소드 실행 시

- insert type으로 데이터가 변경된 경우 서버에 데이터 전송 후 다시 load 메소드로 가져와야 합니다. 그렇지 않으면 서버 데이터와 DataObject 오브젝트 사이의 차이가 생길 수 있습니다.

◆ 주의

- ondatachanged 이벤트 핸들러 함수 내에서 DataObject 오브젝트의 enableevent 속성값을 false로 변경했다가 다시 true로 변경하면 이벤트가 반복해서 발생하며 무한 루프에 빠집니다.

---

## onerror

load, request 메서드 호출 후 통신 실패 시 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.DataObject,e:nexacro.DataObjectErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | DataObject | Event가 발생한 Object. |
| `e` | DataObjectErrorEventInfo | Event Object. |

**Remark**
- 통신 실패 시 Environment 오브젝트의 onerror 이벤트가 발생하고 이벤트 핸들러 함수 내에서 true 값을 반환하지 않은 경우 DataObject 오브젝트의 oneror 이벤트가 발생합니다.

---

## onload

데이터 로딩이 완료된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onload(obj:nexacro.DataObject,e:nexacro.DataObjectLoadEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | DataObject | Event가 발생한 Object. |
| `e` | DataObjectLoadEventInfo | Event Object. |

**Remark**
- data 속성값이 반영된 후에 onload 이벤트가 발생합니다.

- Dataset 오브젝트의 bindDataobject 속성값으로 DataObject 오브젝트를 설정한 경우에는 Dataset 오브젝트의 onload 이벤트가 발생합니다.

---

## onloaddatasets

DataObejct 오브젝트가 Dataset 오브젝트의 binddataobject 속성값으로 설정된 경우 Dataset 오브젝트의 데이터 로딩이 처리된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onloaddatasets(obj:nexacro.DataObject,e:nexacro.DataObjectLoadDatasetsEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | DataObject | Event가 발생한 Object. |
| `e` | DataObjectLoadDatasetsEventInfo | Event Object. |

**Remark**
- 이벤트 발생 순서는 다음과 같습니다.
 (1) DataObject onsuccess
 (2) DataObject onload
 (3) Dataset onload(또는 onerror):
      binddataobject 속성값으로 DataObject를 설정한 모든 Dataset 오브젝트
 (4) DataObject onloaddatasets

---

## onsuccess

request 메소드 호출 후 통신 성공 시 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.DataObject,e:nexacro.DataObjectEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | DataObject | Event가 발생한 Object. |
| `e` | DataObjectEventInfo | Event Object. |

**Remark**
- 통신 성공 시에는 데이터가 없어도 이벤트가 발생합니다.
- 데이터가 없을 때 onload 이벤트가 발생하면서 기존 데이터는 삭제됩니다.
  onload 이벤트를 막으려면 preventDefault 메소드를 호출합니다.
  그 이후 getAllResponseHeaders, getResponse 메소드를 사용해 필요한 정보를 확인하고 처리할 수 있습니다.

  this.DataObject00_onsuccess = function(obj:nexacro.DataObject,e:nexacro.DataObjectEventInfo)
  {
    if (e.statuscode == 200)
        trace("getAllResponseHeaders:"+ obj.getAllResponseHeaders())
    else if (e.statuscode > 200)
    {
        e.preventDefault();
        trace(obj.getAllResponseHeaders())
        trace(obj.getResponse())
    }
  };

---

## onvaluechanged

DataObject 오브젝트의 value 값(JSON 데이터에서 특정 key에 해당하는 value)이 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onvaluechanged(obj:nexacro.DataObject,e:nexacro.DataObjectValueChangedEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | DataObject | Event가 발생한 Object. |
| `e` | DataObjectValueChangedEventInfo | Event Object. |

**Remark**
- 바인딩 된 Dataset 오브젝트의 dataobjectbindmode 속성값이 "twoway", updatecontrol 속성값이 false일 때 특정 Row의 Column 값 변경 시 이벤트가 발생합니다.

---
