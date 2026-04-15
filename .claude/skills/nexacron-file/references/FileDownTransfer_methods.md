# FileDownTransfer Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | FileDownTransfer 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | FileDownTransfer 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 FileDownTransfer 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `clearPostDataList()` | postdatalist 속성에 설정된 데이터를 모두 삭제하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 FileDownTransfer 을(를) 삭제하는 메소드입니다. |
| `download()` | 서버에서 HTTP/HTTPS 프로토콜의 POST 방식으로 특정 파일을 다운로드 하는 메소드입니다. |
| `findEventHandler()` | FileDownTransfer 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getEventHandler()` | FileDownTransfer 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getPostData()` | postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 반환하는 메소드입니다. |
| `insertEventHandler()` | FileDownTransfer 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `removeEvent()` | FileDownTransfer 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | FileDownTransfer 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | FileDownTransfer 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `removePostData()` | postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 제거하는 메소드입니다. |
| `setEventHandler()` | FileDownTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | FileDownTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setPostData()` | 파일 다운로드 요청 시 서버로 전송할 데이터를 postdatalist 속성에 추가하는 메소드입니다. |

---

## addEvent

FileDownTransfer 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | FileDownTransfer 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- FileDownTransfer 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

FileDownTransfer 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 FileDownTransfer 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## clearPostDataList

postdatalist 속성에 설정된 데이터를 모두 삭제하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.clearPostDataList()
```

**Sample**
```javascript
this.FileDownTransfer00.clearPostDataList();
```

**Remark**
- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 으로 setPostData() 메소드를 사용하여 설정할 수 있습니다.

---

## destroy

스크립트에서 동적으로 생성한 FileDownTransfer 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.destroy()
```

**Return**: `Boolean` — FileDownTransfer 이(가) 정상적으로 삭제되면 true 를 반환합니다.  FileDownTransfer 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 FileDownTransfer 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: addChild, removeChild, insertChild

---

## download

서버에서 HTTP/HTTPS 프로토콜의 POST 방식으로 특정 파일을 다운로드 하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.download( [strUrl [, strTargetpath]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strUrl` | String | 다운로드 받을 파일의 경로를 설정합니다.  값을 생략할 경우 url 속성에 설정된 값이 적용됩니다. 값을 설정하면 url 속성에 설정된 값이 무시됩니다. |
| `strTargetPath` | String | 다운로드 받은 파일이 저장될 경로와 파일명을 설정합니다.  값 설정 시 저장경로를 물어보지 않고 해당 위치로 파일을 다운로드합니다. 존재하지 않는 경로를 지정한 경우 다운로드 되지 않습니다.  샌드박스(SandBox) 옵션인 Environment 의 filesecurelevel 속성값이 "all" 일 때 모든 경로에 접근을 허용합니다. 이 경우 사용자에게 접근 허용 여부를 확인 한 후 사용자가 승인한 경우에만 메소드를 수행합니다.  * Windows NRE 만 지원되는 파라미터입니다. |

**Remark**
- 서버에 다운로드 요청 시 postdatalist 속성에 설정된 데이터를 HTTP/HTTPS 프로토콜을 사용하여 POST 방식으로 전송합니다.


◆ web runtime environment 제약

- Image, PDF 와 같은 특정 컨텐츠는 다운로드 시 웹브라우저가 파일을 수신하여 오픈 할 수 있습니다.
   웹브라우저의 파일 수신을 막으려면 strUrl 파라미터에 다운로드를 위한 모듈경로를 설정하고 
   실제 파일정보는 PostData 에 설정하여 다운로드 모듈에서 파일을 전송하는 방법을 사용하여야 합니다.

---

## findEventHandler

FileDownTransfer 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.findEventHandler( strEventID, objFunc, objTarget )
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

## getEventHandler

FileDownTransfer 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getPostData

postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 반환하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.getPostData( strKey )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strKey` | String | 반환 받으려는 데이터의 Key 값을 문자열로 설정합니다. |

**Return**: `Variant` — strKey 값에 해당하는 데이터를 반환합니다.  strKey 값에 해당하는 데이터가 없을 경우 null 을 반환합니다.

**Remark**
- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 입니다.

---

## insertEventHandler

FileDownTransfer 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## removeEvent

FileDownTransfer 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | FileDownTransfer 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- FileDownTransfer 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- FileDownTransfer 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

FileDownTransfer 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.removeEventHandler( strEventID, objFunc, objTarget )
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

FileDownTransfer 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

## removePostData

postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 제거하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.removePostData( strKey );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strKey` | String | 제거할 데이터의 Key 값을 문자열로 설정합니다. |

**Remark**
- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 입니다.

---

## setEventHandler

FileDownTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.setEventHandler( strEventID, objFunc, objTarget )
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

## setEventHandlerLookup

FileDownTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

## setPostData

파일 다운로드 요청 시 서버로 전송할 데이터를 postdatalist 속성에 추가하는 메소드입니다.

**Syntax**
```javascript
FileDownTransfer.setPostData( strKey, varVal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strKey` | String | 서버로 전송할 데이터의 Key 값을 문자열로 설정합니다.  동일한 Key 값이 존재할 경우 새로운 데이터로 변경됩니다. |
| `varVal` | Variant | 서버로 전송할 데이터를 설정합니다.  기본 자료형(number, string, boolean 등)을 설정할 수 있습니다. |

**Remark**
- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 입니다.

---
