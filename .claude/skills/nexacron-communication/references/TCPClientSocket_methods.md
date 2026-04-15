# TCPClientSocket Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | TCPClientSocket 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | TCPClientSocket 의 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 검색된 함수를 TCPClientSocket 의 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `clearEventHandler()` | TCPClientSocket 의 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `close()` | 연결된 서버에 연결해제를 요청하는 메소드입니다. |
| `findEventHandler()` | TCPClientSocket 의 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getEventHandler()` | TCPClientSocket 의 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `insertEventHandler()` | TCPClientSocket 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `open()` | TCP 를 이용하여 서버에 소켓연결을 요청하는 메소드입니다. |
| `read()` | 연결된 서버에서 데이터를 수신하는 메소드입니다. |
| `readLine()` | 연결된 서버에서 줄단위로 데이터를 수신하는 메소드입니다. |
| `removeEvent()` | TCPClientSocket 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | TCPClientSocket 의 이벤트에서 전달된 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | TCPClientSocket 의 이벤트에 정의된 핸들러 함수에서 검색된 함수를 제거하는 메소드입니다. |
| `setEventHandler()` | TCPClientSocket 의 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | TCPClientSocket 의 이벤트에 정의된 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `write()` | 연결된 서버로 데이터를 송신하는 메소드입니다. |

---

## addEvent

TCPClientSocket 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | TCPClientSocket 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- TCPClientSocket 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

TCPClientSocket 의 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 이벤트 발생 시 수행될 핸들러 함수를 오브젝트 형태로 설정합니다. |
| `objTarget` | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1" 을 반환합니다.

---

## addEventHandlerLookup

검색된 함수를 TCPClientSocket 의 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.addEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 이벤트 발생 시 수행될 핸들러 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 핸들러 함수를 검색할 영역을 설정합니다.  해당 영역에 핸들러 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1" 을 반환합니다.

**Remark**
- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
  검색된 함수가 있다면 이벤트에 핸들러 함수로 추가합니다.

---

## clearEventHandler

TCPClientSocket 의 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 모두 제거할 이벤트의 ID 를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## close

연결된 서버에 연결해제를 요청하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.close()
```

**Sample**
```javascript
var bSucc = this.TCPClientSocket00.close();
```

**Return**: `Boolean` — 연결해제 요청이 정상적으로 실행되었으면 "true" 를 반환합니다.  연결해제 요청이 정상적으로 실행되지 않았으면 "false" 를 반환합니다.

**Remark**
- 서버와 연결해제에 성공하면 onsuccess 이벤트가 발생합니다.
   서버와 연결해제에 실패하면 onerror 이벤트가 발생합니다.

- 연결된 서버의 설정에 따라 연결을 해제하지 않으면, 마지막에 보낸 내용이 실제로 보내지지 않을 수도 있습니다.
 
- 서버 연결을 더 이상 사용하지 않으면 시스템 자원 절약과 데이터 송신 마무리를 위해 close() 메서드를 사용하여 연결을 해제하는게 좋습니다.

---

## findEventHandler

TCPClientSocket 의 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 찾을 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 찾으려고 하는 핸들러 함수를 오브젝트 형태로 설정합니다. |
| `objTarget` | Object | 찾으려고 하는 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에서 찾으려고 하는 핸들러 함수의 인덱스를 반환합니다.  찾으려고 하는 핸들러 함수가 존재하지 않는다면 "-1" 을 반환합니다.

**Remark**
- 인덱스는 "0" 부터 시작합니다.

---

## getEventHandler

TCPClientSocket 의 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  인덱스는 "0" 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## insertEventHandler

TCPClientSocket 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## open

TCP 를 이용하여 서버에 소켓연결을 요청하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.open( strAddress, nPort )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strAddress` | String | 연결할 서버의 도메인명 또는 IPv4 형식의 IP 를 문자열로 설정합니다. |
| `nPort` | Number | 연결할 서버의 Port 값을 숫자로 설정합니다. |

**Return**: `Boolean` — 연결요청이 정상적으로 실행되었으면 true 를 반환합니다.  연결요청이 정상적으로 실행되지 않았으면 false 를 반환합니다.

**Remark**
- 서버와 연결에 성공하면 onsuccess 이벤트가 발생합니다.
   서버와 연결에 실패하면 onerror 이벤트가 발생합니다.

- 연결할 서버의 주소가 잘못되었거나 허용하지 않는 주소이면 "false"를 반환하고 이벤트가 발생하지 않습니다.

- 넥사크로 스튜디오에서 개발중인 경우는 모든 서버 주소에 대하여 연결을 허용하지만,
   어플리케이션이 운영중인 경우는 연결할 서버의 주소가 ADL 주소와 C-Class 대역이 같아야 합니다.
   주소의 C-Class 영역이 다를 경우 연결에 문제가 발생할 수 있습니다.

- ADL 주소와 서버의 주소가 모두 도메인명이거나 IP 주소 형식일 경우 URL 검사를 수행합니다.
   두 주소의 형식이 다른 경우에는 연결에 문제가 발생할 수 있습니다.

- 샌드박스(sandbox) 옵션인 Environment 의 networksecurelevel 속성값이 "all" 인 경우는 모든 경로의 접근을 허용합니다.
   이 경우 사용자에게 접근 허용 여부를 확인 한 후 사용자가 승인한 경우에만 기능을 수행합니다.

---

## read

연결된 서버에서 데이터를 수신하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.read( nSize [, nTimeOut [, strCharSet]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nSize` | Number | 수신될 데이터의 최대 크기를 바이트 단위의 숫자로 설정합니다.  설정값은 수신될 데이터의 최대 크기로 적용되며 실제 수신된 데이터는 설정값보다 작을 수 있습니다.  0 을 설정하면 수신 할 데이터가 있는지 검사만 수행합니다. 음수값을 설정하면 메소드 실행 시 실패로 처리됩니다. |
| `nTimeOut` | Number | 데이터가 수신될 때까지 대기하는 시간을 초단위의 숫자로 설정합니다.  0 이하값을 설정하면 대기시간이 무한대로 적용됩니다.  값 생략 시 0 으로 적용됩니다. |
| `strCharSet` | String | 데이터가 수신될 때 적용될 문자셋을 설정합니다.  값 생략 시 시스템의 문자셋이 적용됩니다.  특별히 문자셋을 변환할 필요가 있을 때만 설정하는 것을 권장합니다. |

**Return**: `Array` — 데이터의 수신 성공여부와 수신데이터를 배열형태로 반환합니다.  배열의 첫번째 원소에 데이터 수신여부를 Boolean 값으로 반환합니다. 배열의 두번째 원소에 수신된 데이터를 반환합니다.

**Remark**
- 데이터 수신에 실패하면 onerror 이벤트가 발생합니다.

- 반환되는 배열의 두번째 원소는 데이터 수신에 성공하고 데이터가 존재하는 경우만 설정됩니다.

- 데이터를 줄단위로 수신하려면 readLine() 메소드를 사용하여야 합니다.

---

## readLine

연결된 서버에서 줄단위로 데이터를 수신하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.readLine( nSize [, nTimeOut [, strCharSet]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nSize` | Number | 수신될 데이터의 최대 크기를 바이트 단위의 숫자로 설정합니다.  설정값은 수신될 데이터의 최대 크기로 적용되며 실제 수신된 데이터는 설정값보다 작을 수 있습니다.  0 이하값을 설정하면 메소드가 정상적으로 실행되지 않습니다. |
| `nTimeOut` | Number | 데이터가 수신될 때까지 대기하는 시간을 초단위의 숫자로 설정합니다..  수신된 데이터에 줄바꿈 문자가 없을 경우 대기시간이 다시 적용되므로 값 설정에 주의하여야 합니다.  0 이하값을 설정하면 대기시간이 무한대로 적용됩니다. 값을 설정하지 않으면 0 으로 적용됩니다. |
| `strCharSet` | String | 데이터가 수신될 때 적용될 문자셋을 설정합니다.  값 생략 시 시스템의 문자셋이 적용됩니다.  특별히 문자셋을 변환할 필요가 있을 때만 설정하는 것을 권장합니다. |

**Return**: `Array` — 데이터의 수신 성공여부와 수신데이터를 배열형태로 반환합니다.  배열의 첫번째 원소에 데이터 수신여부를 Boolean 값으로 반환합니다. 배열의 두번째 원소에 수신된 데이터를 반환합니다.

**Remark**
- 데이터 수신에 실패하면 onerror 이벤트가 발생합니다.

- 반환되는 배열의 두번째 원소는 데이터 수신에 성공하고 데이터가 존재하는 경우만 설정됩니다.

- 정상적으로 수신된 데이터의 마지막은 줄바꿈 문자로 끝납니다.
   그러나, 아래의 이유로 수신된 데이터의 마지막이 줄바꿈 문자가 아닌 경우가 발생할 수 있습니다.
   > nSize 로 설정한 값보다 한 줄의 데이터가 큰 경우
   > 시간내에 데이터를 수신 받지 못한 경우
   > 서버와 연결이 끊긴 경우

- readLine() 메소드에서 nTimeOut 값은 데이터를 한번 수신하는데 대기하는 시간으로만 적용되지 않습니다.
   수신된 데이터에 줄바꿈 문자가 없을 경우 nTimeout 값은 다음 데이터를 대기하는 시간으로 여러번 재설정될 수 있습니다.
   따라서 nTimeOut 값이나 nSize 값을 너무 길게 설정하면 화면이 멈춘것처럼 보일 수 있으니 주의하셔야 합니다.

- 데이터를 바이트 단위로 수신하려면 read() 메소드를 사용하여야 합니다.

---

## removeEvent

TCPClientSocket 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | TCPClientSocket 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- TCPClientSocket 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- TCPClientSocket 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

TCPClientSocket 의 이벤트에서 전달된 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 제거할 핸들러 함수를 오브젝트 형태로 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 "1" 을 반환합니다.  핸들러 함수 제거에 실패하면 "0" 을 반환합니다.

**Remark**
- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0" 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## removeEventHandlerLookup

TCPClientSocket 의 이벤트에 정의된 핸들러 함수에서 검색된 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 제거할 핸들러 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다.  해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 "1" 을 반환합니다.  핸들러 함수 제거에 실패하면 "0" 을 반환합니다.

**Remark**
- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
   검색된 함수가 이벤트에 핸들러 함수로 추가되어 있다면 해당 핸들러 함수를 제거합니다.

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0" 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## setEventHandler

TCPClientSocket 의 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 기존 핸들러 함수를 대체할 함수를 오브젝트 형태로 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 "0" 을 반환합니다.  첫번째 핸들러 함수 변경에 실패하면 "-1" 을 반환합니다.

**Remark**
- 인덱스가 "0" 번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 "0" 번인 핸들러 함수가 없다면 "0" 번 인덱스에 대체할 함수를 핸들러 함수로 추가합니다.

---

## setEventHandlerLookup

TCPClientSocket 의 이벤트에 정의된 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `strFunc` | Object | 기존 핸들러 함수를 대체할 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수를 검색할 영역을 설정합니다.  해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 "0"을 반환합니다. 첫번째 핸들러 함수 변경에 실패하면 "-1"을 반환합니다.

**Remark**
- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
   검색된 함수가 있다면 이벤트의 첫번째 핸들러 함수를 검색된 함수로 변경합니다.

- 인덱스가 "0" 번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 "0" 번인 핸들러 함수가 없다면 "0" 번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.

---

## write

연결된 서버로 데이터를 송신하는 메소드입니다.

**Syntax**
```javascript
TCPClientSocket.write( strData [, strCharset] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strData` | String | 연결된 서버로 송신 할 데이터를 설정합니다. |
| `strCharset` | String | 연결된 서버로 송신 할 데이터의 문자셋을 설정합니다.  값을 설정하지 않으면 시스템의 문자셋이 설정됩니다.  특별히 데이터의 문자셋을 변환할 필요가 있을 때만 설정하는 것을 권장합니다. |

**Return**: `Boolean` — 연결된 서버로 데이터 송신을 시작하면 "true" 를 반환합니다.  연결된 서버로 데이터 송신을 시작하지 못하면 "false" 를 반환합니다.

**Remark**
- 데이터 송신에 성공하면 onsuccess 이벤트가 발생합니다.
   데이터 송신에 실패하면 onerror 이벤트가 발생합니다.

- write() 메소드를 실행하여 대용량 데이터를 송신하는 경우 패킷을 송신 가능한 크기로 나누어 송신합니다.
   이 때, 송신 후 남은 데이터가 있는 경우 onsuccess 이벤트가 여러번 발생할 수 있습니다.

---
