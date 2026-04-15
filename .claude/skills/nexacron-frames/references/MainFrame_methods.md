# MainFrame Methods

| Method | Description |
|--------|-------------|
| `addEventHandler()` | MainFrame 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 MainFrame 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `alert()` | MainFrame 의 경고 대화상자를 표시하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `confirm()` | MainFrame 의 선택 대화상자를 표시하는 메소드입니다. |
| `findEventHandler()` | MainFrame 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getEventHandler()` | MainFrame 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getNativeHandle()` | MainFrame이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다. |
| `getOffsetHeight()` | MainFrame 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | MainFrame 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `insertEventHandler()` | MainFrame 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `removeEventHandler()` | MainFrame 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | MainFrame 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `setEventHandler()` | MainFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | MainFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setOffsetHeight()` | MainFrame 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | MainFrame 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | MainFrame 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | MainFrame 의 너비를 픽셀단위로 설정하는 메소드입니다. |

---

## addEventHandler

MainFrame 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
MainFrame.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 MainFrame 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
MainFrame.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

## alert

MainFrame 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
MainFrame.alert( strText )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다. |

**Remark**
- MainFrame 의 중앙에 대화상자를 표시합니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
MainFrame.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## confirm

MainFrame 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
MainFrame.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다. |
| `strCaption` | String | 대화상자의 TitleBar에 표시할 텍스트를 설정합니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |
| `strType` | String | 대화상자의 왼쪽 영역에 표시될 아이콘 종류를 문자열로 설정합니다.  "error" 설정 시 빨간색 "X" 모양 아이콘이 표시됩니다. "question" 설정 시 물음표("?") 모양 아이콘이 표시됩니다. "warning" 설정 시 노랑색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다. "information" 설정 시 파란색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다.  값을 설정하지 않으면 아이콘을 표시하지 않습니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |

**Return**: `Boolean` — 표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다. 표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**
- MainFrame 의 중앙에 선택 대화상자를 표시합니다.

---

## findEventHandler

MainFrame 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
MainFrame.findEventHandler( strEventID, objFunc, objTarget )
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

MainFrame 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
MainFrame.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getNativeHandle

MainFrame이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다.

**Syntax**
```javascript
MainFrame.getNativeHandle();
```

**Sample**
```javascript
var nHwnd = this.parent.getNativeHandle();
```

**Return**: `Number` — MainFrame이 속한 윈도우 핸들(HWND)값

---

## getOffsetHeight

MainFrame 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
MainFrame.getOffsetHeight();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nWidth = objApp.mainframe.getOffsetHeight();
```

**Return**: `Number` — MainFrame 의 height 속성값을 픽셀단위의 값으로 변경하여 반환합니다.  MainFrame 의 height 속성값을 설정하지 않으면 top, bottom 속성값을 기준으로 높이를 반환합니다.

**Remark**
- 화면에 표시된 MainFrame 의 높이를 동적으로 계산합니다.

---

## getOffsetWidth

MainFrame 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
MainFrame.getOffsetWidth();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nWidth = objApp.mainframe.getOffsetWidth();
```

**Return**: `Number` — MainFrame 의 width 속성값을 픽셀단위의 값으로 변경하여 반환합니다.  MainFrame 의 width 속성값을 설정하지 않으면 left, right 속성값을 기준으로 너비를 반환합니다.

**Remark**
- 화면에 표시된 MainFrame 의 너비를 동적으로 계산합니다.

---

## insertEventHandler

MainFrame 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
MainFrame.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## removeEventHandler

MainFrame 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
MainFrame.removeEventHandler( strEventID, objFunc, objTarget )
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

MainFrame 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
MainFrame.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

## setEventHandler

MainFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
MainFrame.setEventHandler( strEventID, objFunc, objTarget )
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

MainFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
MainFrame.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

## setOffsetHeight

MainFrame 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MainFrame.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | MainFrame 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- Windows NRE, macOS NRE 만 지원하는 메소드입니다.

- 메소드 실행 후 MainFrame 의 height 속성값이 변경됩니다.

---

## setOffsetLeft

MainFrame 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MainFrame.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | MainFrame 의 left 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- Windows NRE, macOS NRE 만 지원하는 메소드입니다.

- 메소드 실행 후 MainFrame 의 left 속성값이 변경됩니다.

---

## setOffsetTop

MainFrame 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MainFrame.setOffsetLeft( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | MainFrame 의 top 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- Windows NRE, macOS NRE 만 지원하는 메소드입니다.

- 메소드 실행 후 MainFrame 의 top 속성값이 변경됩니다.

---

## setOffsetWidth

MainFrame 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MainFrame.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | MainFrame 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- Windows NRE, macOS NRE 만 지원하는 메소드입니다.

- 메소드 실행 후 MainFrame 의 width 속성값이 변경됩니다.

---
