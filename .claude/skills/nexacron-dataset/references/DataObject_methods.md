# DataObject Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | DataObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | DataObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 DataObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `clearChangedInfo()` | 변경 정보를 전부 삭제하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 DataObject 을(를) 삭제하는 메소드입니다. |
| `findEventHandler()` | DataObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getAllResponseHeaders()` | request 메소드 호출 후 Response header 정보를 반환하는 메소드입니다. |
| `getChangedInfo()` | 저장된 변경 정보를 반환하는 메소드입니다. |
| `getEventHandler()` | DataObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getObjectByPath()` | jsonpath값으로 필터링한 데이터 오브젝트를 반환하는 메소드입니다. |
| `getResponse()` | request 메소드 호출 후 response data 정보를 반환하는 메소드입니다. |
| `getResponseHeader()` | request 메소드 호출 후 특정 Response header 값을 반환하는 메소드입니다. |
| `insertEventHandler()` | DataObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `load()` | url 속성에 설정한 서비스에서 데이터를 로드하는 메소드입니다. |
| `removeChangedInfo()` | 변경 정보에서 특정 uid에 해당하는 item 정보를 삭제하는 메소드입니다. |
| `removeEvent()` | DataObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | DataObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | DataObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `request()` | 설정된 속성값에 따라 통신을 처리하는 메소드입니다. |
| `serializeToString()` | 데이터를 문자열로 반환하는 메소드입니다. |
| `setEventHadlerLookup()` | DataObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setEventHandler()` | DataObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |

---

## addEvent

DataObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
DataObject.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | DataObject 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- DataObject 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

DataObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
DataObject.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 이벤트 발생 시 수행될 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 -1 을 반환합니다.

---

## addEventHandlerLookup

함수를 검색하여 DataObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
DataObject.addEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 이벤트 발생 시 수행될 핸들러 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 핸들러 함수를 검색할 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**
- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
  검색된 함수가 있다면 이벤트에 핸들러 함수로 추가합니다.

---

## clearChangedInfo

변경 정보를 전부 삭제하는 메소드입니다.

**Syntax**
```javascript
DataObject.clearChangedInfo()
```

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
DataObject.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## destroy

스크립트에서 동적으로 생성한 DataObject 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
DataObject.destroy()
```

**Sample**
```javascript
var bSucc = this.DataObject00.destroy();
```

**Return**: `Boolean` — DataObject 이(가) 정상적으로 삭제되면 true 를 반환합니다.  DataObject 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 DataObject 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: init, removeChild, addChild, insertChild, show

---

## findEventHandler

DataObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
DataObject.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 찾을 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 찾으려고 하는 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 찾으려고 하는 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 찾은 핸들러 함수의 인덱스를 반환합니다.  특정 이벤트에 찾으려는 핸들러 함수가 존재하지 않으면 -1 을 반환합니다.

**Remark**
- 핸들러 함수의 인덱스는 0 부터 시작합니다.

---

## getAllResponseHeaders

request 메소드 호출 후 Response header 정보를 반환하는 메소드입니다.

**Syntax**
```javascript
DataObject00.getAllResponseHeaders()
```

**Return**: `Object` — header, value 쌍으로 구성된 오브젝트를 반환합니다.

**Remark**
- default 값은 undefind 입니다.
  onsuccess, onerror, onload 이벤트 핸들러 함수 내에서만 정보를 확인할 수 있습니다.

---

## getChangedInfo

저장된 변경 정보를 반환하는 메소드입니다.

**Syntax**
```javascript
DataObject.getChangedInfo()
```

**Return**: `Array` — Infoarray 형식의 배열을 반환합니다. Infoarray 각 속성은 아래 표를 참고하세요.

**Remark**
- 특정 이벤트가 발생하지 않는 상태에서 사용자가 임의로 변경 정보를 확인하고 처리할 때 실행합니다.

- Infoarray 속성 참조
	
		Property
		Type
		Description
	

	
		data

---

## getEventHandler

DataObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
DataObject.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getObjectByPath

jsonpath값으로 필터링한 데이터 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
DataObject00.getObjectByPath(strJsonpath)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strJsonpath` | String | jsonpath 값을 설정합니다. |

**Return**: `Object` — 필터링된 데이터 오브젝트를 반환합니다.

**Remark**
- strJsonpath 파라미터의 상세한 문법은 아래 링크를 참고하세요.
https://github.com/dchester/jsonpath#jsonpath-syntax

---

## getResponse

request 메소드 호출 후 response data 정보를 반환하는 메소드입니다.

**Syntax**
```javascript
DataObject00.getResponse()
```

**Return**: `String` — 데이터 통신 후 서버에서 받은 데이터값을 반환합니다.

**Remark**
- default 값은 undefind 입니다.
  onsuccess, onerror, onload 이벤트 핸들러 함수 내에서만 정보를 확인할 수 있습니다.
- onerror 이벤트 발생 시에 서버 측에서 제공하는 정보를 확인하기 위해 사용할 수 있습니다.

---

## getResponseHeader

request 메소드 호출 후 특정 Response header 값을 반환하는 메소드입니다.

**Syntax**
```javascript
DataObject.getResponseHeader(strHeaderName)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strHeaderName` | String | 반환 받을 header 이름을 설정합니다. |

**Return**: `String` — 파라미터로 설정한 header 이름에 해당하는 값을 반환합니다. 대소문자 구분 없이 설정한 header 이름과 일치하는 값을 반환합니다. 일치하는 header 정보가 없는 경우에는 null을 반환합니다.

**Remark**
- 실행 환경에 따라 지원하는 header 정보가 다를 수 있습니다.

---

## insertEventHandler

DataObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
DataObject.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 삽입될 이벤트의 ID 를 설정합니다. |
| `nIndex` | Number | 핸들러 함수가 삽입될 위치를 인덱스로 설정합니다.  -1 값 설정 시 마지막에 추가됩니다. 이벤트에 설정된 핸들러 함수의 갯수보다 큰 값을 설정한 경우 마지막에 추가됩니다. NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 설정됩니다. |
| `objFunc` | Object | 이벤트 발생 시 수행될 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에 삽입된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.  핸들러 함수가 정상적으로 삽입되지 않은 경우에는 -1 을 반환합니다.

**Remark**
- 첫번째 핸들러 함수의 인덱스는 0 입니다.

---

## load

url 속성에 설정한 서비스에서 데이터를 로드하는 메소드입니다.

**Syntax**
```javascript
DataObject00.load([bAsync])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bAsync` | Boolean | 비동기 처리 여부를 설정합니다. 기본값은 true이며 비동기 방식으로 동작합니다. 데이터 로드 완료와 관계없이 스크립트가 수행됩니다. |

**Remark**
- load 메소드는 GET 방식으로 데이터를 로드합니다.
- 로드한 데이터를 정상적으로 받은 경우에는 onload 이벤트가 발생합니다.
  호출한 URL에서 데이터를 반환하지 않거나 url 속성값 또는 strUrl 파라미터를 지정하지 않은 경우에는 onload 이벤트를 발생하지 않습니다.
- 에러 발생 시 Environment.onerror 이벤트 발생 후 DataObject 오브젝트의 onerror 이벤트가 발생합니다.

- Dataset 오브젝트의 binddataobject 속성값으로 DataObject 오브젝트를 설정한 경우에는 Dataset 오브젝트의 onload 이벤트가 발생합니다.

---

## removeChangedInfo

변경 정보에서 특정 uid에 해당하는 item 정보를 삭제하는 메소드입니다.

**Syntax**
```javascript
DataObject.removeChangedInfo(uid)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `uid` | String | 삭제할 변경 정보의 uid를 설정합니다. |

**Remark**
- 변경 정보가 서버로 모두 정상 전송되었거나 더 이상 데이터의 가치가 없을 때 실행합니다.

---

## removeEvent

DataObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
DataObject.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | DataObject 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- DataObject 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- DataObject 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

DataObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
DataObject.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 제거할 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 1 을 반환합니다.  핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**
- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## removeEventHandlerLookup

DataObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
DataObject.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 제거할 핸들러 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 1 을 반환합니다.  핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**
- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## request

설정된 속성값에 따라 통신을 처리하는 메소드입니다.

**Syntax**
```javascript
DataObject00.request(strServiceid, strMethod, strUrl[, objParam])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strServiceid` | String | 서비스 ID 값을 설정합니다. |
| `strMethod` | String | 요청 시 처리할 메소드를 설정합니다. 아래 메소드를 지정할 수 있습니다. GET, POST, PUT, DELETE, HEAD, PATCH |
| `strUrl` | String | JSON 데이터를 호출할 URL을 설정합니다. |
| `objParam` | Object | header, postdata, async 정보를 저장한 JSON 오브젝트를 설정합니다. JSON 오브젝트는 아래와 같은 형식으로 처리할 수 있습니다. var json_param = {     "httpheader" : header,     "postdata" : "test",     "async" : true } async 정보를 설정하지 않으면 true로 처리합니다. |

**Remark**
- 데이터를 정상적으로 받은 경우에는 onsuccess 이벤트가 발생합니다.
  onsuccess 이벤트 발생 시 DataObjectEventInfo 오브젝트가 response 속성값을 가지고 있다면 onload 이벤트가 발생합니다.
  strMethod 파라미터값이 HEAD인 경우에는 onload 이벤트가 발생하지 않습니다.
- 에러 발생 시 Environment.onerror 이벤트 발생 후 DataObject 오브젝트의 onerror 이벤트가 발생합니다.

- strMethod 파라미터값이 "GET", "HEAD" 인 경우 objParam 파라미터 내 postdata 값을 설정하더라도 서버로 전달되지 않습니다. XMLHttpRequest send 메소드 명세에 따른 동작 방식입니다.
  https://xhr.spec.whatwg.org/#the-send()-method

---

## serializeToString

데이터를 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
DataObject00.serializeToString([funcReplacer | arrReplacer[, strSpace | nSpace]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `funcReplacer` | Object | key, value 값을 매개변수로 받는 함수로 반환값에 따라 문자열 결과에 포함할 속성을 설정합니다. |
| `arrReplacer` | Array | 문자열 결과에 포함할 속성 이름을 배열로 설정합니다. |
| `strSpace` | String | 문자열 출력 시 공백을 대체할 문자열을 설정합니다. 문자열의 길이가 10보다 큰 경우에는 10번째 문자까지만 사용합니다. |
| `nSpace` | Number | 문자열 출력 시 사용할 공백문자의 숫자를 설정합니다. 10보다 큰 경우에는 10으로 설정합니다. |

**Return**: `String` — 데이터를 변환한 문자열

**Remark**
- 전달인자 값에 대한 세부 동작은 아래 링크 정보를 참고하세요.
프레임워크 내에서 JSON.stringify 메소드의 value 파라미터를 제외한 두 번째, 세 번째 파라미터로 전달되어 처리합니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

---

## setEventHadlerLookup

DataObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
DataObject.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `strFunc` | Object | 기존 핸들러 함수를 대체할 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수를 검색할 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.  첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**
- 인덱스가 0 번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.

---

## setEventHandler

DataObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
DataObject.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 기존 핸들러 함수를 대체할 함수를 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.  첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**
- 인덱스가 0 번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.

---
