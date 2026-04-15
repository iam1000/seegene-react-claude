# ChildFrame Methods

| Method | Description |
|--------|-------------|
| `addEventHandler()` | ChildFrame 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 ChildFrame 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `alert()` | ChildFrame 의 경고 대화상자를 표시하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `confirm()` | ChildFrame 의 선택 대화상자를 표시하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 ChildFrame 을(를) 삭제하는 메소드입니다. |
| `findEventHandler()` | ChildFrame 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getEventHandler()` | ChildFrame 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getForm()` | ChildFrame 이 갖고 있는 Form 의 오브젝트를 반환하는 메소드입니다. |
| `getNativeHandle()` | ChildFrame이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다. |
| `getOffsetBottom()` | 부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetHeight()` | ChildFrame 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetLeft()` | 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetRight()` | 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetTop()` | 부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | ChildFrame 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOwnerFrame()` | ChildFrame 이 소속된 부모 Frame 을 반환하는 메소드입니다. |
| `init()` | 스크립트로 ChildFrame 을 동적 생성한 후에 초기화하는 메소드입니다. |
| `insertEventHandler()` | ChildFrame 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `move()` | ChildFrame 의 위치와 크기를 변경하는 메소드입니다. |
| `removeEventHandler()` | ChildFrame 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | ChildFrame 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `setEventHandler()` | ChildFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | ChildFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setFocus()` | ChildFrame 을 활성화하고 포커스를 주는 메소드입니다. |
| `setOffsetBottom()` | ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 bottom 을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetHeight()` | ChildFrame 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 left 를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetRight()` | ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 right 를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 top 을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | ChildFrame 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| `show()` | 스크립트로 동적 생성한 ChildFrame 을 화면에 표시하는 메소드입니다. |
| `showModal()` | 동적으로 생성한 ChildFrame 을 Modal 형태로 표시하는 메소드입니다. |

---

## addEventHandler

ChildFrame 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 ChildFrame 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

ChildFrame 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.alert( strText )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다. |

**Remark**
- ChildFrame 의 중앙에 대화상자를 표시합니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.clearEventHandler( strEventID )
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

ChildFrame 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다. |
| `strCaption` | String | 대화상자의 TitleBar에 표시할 텍스트를 설정합니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |
| `strType` | String | 대화상자의 왼쪽 영역에 표시될 아이콘 종류를 문자열로 설정합니다.  "error" 설정 시 빨간색 "X" 모양 아이콘이 표시됩니다. "question" 설정 시 물음표("?") 모양 아이콘이 표시됩니다. "warning" 설정 시 노랑색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다. "information" 설정 시 파란색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다.  값을 설정하지 않으면 아이콘을 표시하지 않습니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |

**Return**: `Boolean` — 표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다. 표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**
- ChildFrame 의 중앙에 선택 대화상자를 표시합니다.

---

## destroy

스크립트에서 동적으로 생성한 ChildFrame 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.destroy()
```

**Sample**
```javascript
var bSucc = this.ChildFrame00.destroy();
```

**Return**: `Boolean` — ChildFrame 이(가) 정상적으로 삭제되면 true 를 반환합니다.  ChildFrame 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 ChildFrame 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: init, show, removeChild, addChild, insertChild

---

## findEventHandler

ChildFrame 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.findEventHandler( strEventID, objFunc, objTarget )
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

ChildFrame 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getForm

ChildFrame 이 갖고 있는 Form 의 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getForm()
```

**Sample**
```javascript
var objForm = ChildFrame00.getForm();
```

**Return**: `Object` — ChildFrame 이 갖고 있는 Form 을 Object 형태로 반환합니다.  Form 이 없거나 생성되기 전이면 "null"을 반환합니다.

**Remark**
- ChildFrame 을 동적으로 생성하는 경우 show(), showModal() 메소드를 호출하기 전에는 Form이 생성되지 않습니다.

---

## getNativeHandle

ChildFrame이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getNativeHandle();
```

**Sample**
```javascript
var nHwnd = this.parent.getNativeHandle();
```

**Return**: `Number` — ChildFrame이 속한 윈도우 핸들(HWND)값

---

## getOffsetBottom

부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getOffsetBottom();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nBottom = objApp.mainframe.frame.getOffsetBottom();
```

**Return**: `Number` — 부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 ChildFrame 의 bottom 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.

---

## getOffsetHeight

ChildFrame 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getOffsetHeight();
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;

var nHeight = objApp.mainframe.frame.getOffsetHeight( ) ;
```

**Return**: `Number` — ChildFrame 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 ChildFrame 의 높이를 동적으로 계산합니다.

---

## getOffsetLeft

부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getOffsetLeft();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nLeft = objApp.mainframe.frame.getOffsetLeft();
```

**Return**: `Number` — 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 left 값을 동적으로 계산합니다.

---

## getOffsetRight

부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getOffsetLeft();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nRight = objApp.mainframe.frame.getOffsetRight();
```

**Return**: `Number` — 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 right 값을 동적으로 계산합니다.

---

## getOffsetTop

부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getOffsetTop();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nTop = objApp.mainframe.frame.getOffsetTop();
```

**Return**: `Number` — 부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 ChildFrame 의 top 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.

---

## getOffsetWidth

ChildFrame 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getOffsetWidth();
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;

var nWidth = objApp.mainframe.frame.getOffsetWidth( ) ;
```

**Return**: `Number` — ChildFrame 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 ChildFrame 의 너비를 동적으로 계산합니다.

---

## getOwnerFrame

ChildFrame 이 소속된 부모 Frame 을 반환하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.getOwnerFrame()
```

**Sample**
```javascript
var objFrame = this.getOwnerFrame().getOwnerFrame() ;
```

**Return**: `Object` — ChildFrame 이 소속된 부모 Frame 오브젝트를 반환합니다. ChildFrame 이 소속된 Frame 이 없을 경우 "null"을 반환합니다.

---

## init

스크립트로 ChildFrame 을 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom [,strUrl]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | ChildFrame 의 ID를 문자열로 설정합니다. |
| `nLeft` | Number | 부모 Frame 의 좌상단을 기준으로 ChildFrame 의 left 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| `nTop` | Number | 부모 Frame 의 좌상단을 기준으로 ChildFrame 의 top 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| `nWidth` | Number | ChildFrame 의 width 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| `nHeight` | Number | ChildFrame 의 height 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| `nRight` | Number | 부모 Frame 의 우하단을 기준으로 ChildFrame 의 right 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. nLeft, nWidth 값을 모두 설정했을 경우 nRight 값은 무시됩니다. |
| `nBottom` | Number | 부모 Frame 의 우하단을 기준으로 ChildFrame 의 bottom 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. nTop, nHeight 값을 모두 설정했을 경우 nBottom 값은 무시됩니다 |
| `strURL` | String | ChildFrame 에 속할 Form 의 위치정보를 문자열로 설정합니다. |

**Remark**
- 위치관련 인수값에 단위를 사용할 경우 문자열로 설정하여야 합니다.

- 이미 show() 메소드가 호출된 경우에는 초기화가 끝난 상태입니다. 
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 스크립트로 ChildFrame 을 동적 생성한 후에 사용할 수 있습니다.
  동적으로 생성한 ChildFrame 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 ChildFrame 을 부모 Frame 에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

---

## insertEventHandler

ChildFrame 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## move

ChildFrame 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.move( nLeft, nTop [, nWidth, nHeight [, nRight, nBottom]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vLeft` | String, Number | ChildFrame 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. |
| `vTop` | String, Number | ChildFrame 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. |
| `vWidth` | String, Number | ChildFrame 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. |
| `vHeight` | String, Number | ChildFrame 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. |
| `vRight` | String, Number | ChildFrame 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다. |
| `vBottom` | String, Number | ChildFrame 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다. |

**Remark**
- 인수값에 "px" 또는 "%" 단위를 사용할 경우 문자열로 설정하여야 합니다.

- ChildFrame 이 고정된 형태를 갖는 HFrameSet, VFrameSet, TileFrameSet 의 자식 Frame 일 경우 move() 메소드는 동작하지 않습니다.

---

## removeEventHandler

ChildFrame 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.removeEventHandler( strEventID, objFunc, objTarget )
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

ChildFrame 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

ChildFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.setEventHandler( strEventID, objFunc, objTarget )
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

ChildFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

## setFocus

ChildFrame 을 활성화하고 포커스를 주는 메소드입니다.

**Syntax**
```javascript
ChildFrame.setFocus()
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;
var objRemoveFrame = objApp.mainframe.frame.setFocus() ;
```

**Remark**
- Frame 에 다수의 자식 Frame 을 갖고 있을 때 특정 Frame 을 활성화하고 다른 Frame 보다 앞에 표시하는 메소드입니다.

- Frame 이 포커스 되면 Frame 내의 컴포넌트 중 마지막에 포커스를 가진 컴포넌트가 포커스를 갖습니다.

---

## setOffsetBottom

ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 bottom 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.setOffsetBottom( nBottom );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBottom` | Number | 부모 FrameSet 의 Top 위치를 기준으로 ChildFrame 의 bottom 을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- ChildFrame 의 부모 Frame 이 FrameSet 이 아니면 ChidFrame 의 bottom 은 변경되지 않습니다.

- open(), showModal() 과 같은 메소드에 의해 표시된 ChildFrame 창에서는 지원하지 않는 메소드입니다.

---

## setOffsetHeight

ChildFrame 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | ChildFrame 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- ChildFrame 이 FrameSet 의 하위에 속해 있거나 open(), showModal() 과 같은 메소드에 의해 표시된 팝업창인 경우만 메소드가 정상 수행됩니다.

---

## setOffsetLeft

ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 left 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | 부모 FrameSet 의 Left 위치를 기준으로 ChildFrame 의 left 를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- ChildFrame 이 FrameSet 의 하위에 속해 있거나 open(), showModal() 과 같은 메소드에 의해 표시된 팝업창인 경우만 메소드가 정상 수행됩니다.

---

## setOffsetRight

ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 right 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.setOffsetRight( nRight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRight` | Number | 부모 FrameSet 의 Left 위치를 기준으로 ChildFrame 의 right 를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- ChildFrame 의 부모 Frame 이 FrameSet 이 아니면 ChidFrame 의 right 는 변경되지 않습니다.

- open(), showModal() 과 같은 메소드에 의해 표시된 ChildFrame 창에서는 지원하지 않는 메소드입니다.

---

## setOffsetTop

ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 top 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.setOffsetTop( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | 부모 FrameSet 의 Top 위치를 기준으로 ChildFrame 의 top 을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- ChildFrame 이 FrameSet 의 하위에 속해 있거나 open(), showModal() 과 같은 메소드에 의해 표시된 팝업창인 경우만 메소드가 정상 수행됩니다.

---

## setOffsetWidth

ChildFrame 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | ChildFrame 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- ChildFrame 이 FrameSet 의 하위에 속해 있거나 open(), showModal() 과 같은 메소드에 의해 표시된 팝업창인 경우만 메소드가 정상 수행됩니다.

---

## show

스크립트로 동적 생성한 ChildFrame 을 화면에 표시하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.show()
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;

var objFrame = new ChildFrame();
objFrame.init( "ChildFrame00", 30, 120, 196, 46, "Base::Form00.xfdl" );

objApp.mainframe.frame.addChild( 0, "ChildFrame00", objFrame ) ;
objFrame.show();
```

**Remark**
- show() 메소드가 호출되면 ChildFrame 의 formurl 속성에 설정된 Form 이 비동기(Async)로 로딩됩니다.
  로딩 완료 후의 작업은 Form 의 onload 이벤트에서 처리합니다.

- 스크립트로 ChildFrame 을 동적 생성한 후에 사용 가능합니다.
  동적으로 생성한 ChildFrame 이 아닌 경우에는 오동작 할 수 있습니다.

- 동적 생성한 ChildFrame 을 추가하기 위해 부모 Frame 의 addChild() 메소드나 insertChild() 메소드를 사용합니다.
  추가된 ChildFrame 을 표시하기 위해 show() 메소드를 사용합니다.
  부모 Frame 에 추가되지 않고 show() 메소드를 사용할 경우 에러가 발생합니다.

---

## showModal

동적으로 생성한 ChildFrame 을 Modal 형태로 표시하는 메소드입니다.

**Syntax**
```javascript
ChildFrame.showModal( [strID,] objParentFrame, [{objArguList} [, objOpener [, callbackFunc]]] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | Modal 로 표시할 ChildFrame 의 ID 를 문자열로 설정합니다.  값 생략 시 ChildFrame 에 설정된 name 속성값으로 설정됩니다. |
| `objParentFrame` | Object | Modal 로 표시할 ChildFrame 의 부모 Frame 을 Object 형태로 설정합니다.  null 설정 시 MainFrame 이 부모로 설정됩니다. |
| `objArguList` | Object | Modal 로 표시할 ChildFrame 에 추가될 변수리스트를 "{변수명:변수값 , 변수명:변수값}" 형식으로 설정합니다. |
| `objOpener` | Object | Modal 로 표시할 ChildFrame 의 Opener 로 설정될 Form 을 오브젝트로 설정합니다.  값 생략 시 objParentFrame 파라미터에 설정된 Frame 의 Form 이 설정됩니다. objParentFrame 파라미터를 null 로 설정하면 undefined 가 설정됩니다. |
| `callbackFunc` | String | Modal 로 표시된 ChildFrame 이 종료된 후 결과를 받을 때 호출될 콜백 함수를 설정합니다.  콜백 함수는 strID 값과 반환값을 인수로 갖습니다. strID 값은 showModal() 메소드 실행 시 설정한 strID 값을 갖습니다. 반환값은 Modal 로 표시된 ChildFrame 에서 close() 메소드에 설정한 파라미터값을 갖습니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 true 를 반환합니다.  메소드 실행에 실패하면 false 를 반환합니다.

**Remark**
* 동적 생성 처리 방식

- showModal() 메소드는 스크립트에서 동적으로 생성한 ChildFrame 만 사용할 수 있습니다.
   동적으로 생성한 ChildFrame 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 ChildFrame 은 autosize 속성값에 따라 표시되는 Modal 의 크기가 결정됩니다.
   autosize 속성값을 설정하지 않으면 true 로 적용됩니다.


* 파라미터 설정 시 참고사항

- objArguList 파라미터로 설정한 변수값은 Modal 로 표시된 ChildFrame 에서 "this.parent.[변수명]" 형태로 접근할 수 있습니다.

- strID 파라미터는 getPopupFrames() 메소드에서 결과값으로 받은 Collection 에 인자로 사용할 수 있습니다.


* 기타 참고사항

- showModal() 메소드는 Modal 의 표시와 관계없이 메소드 호출 이후의 스크립트를 계속해서 수행합니다.
   메소드 호출 위치에서 스크립트가 중지되었다가 Modal 종료 후 다음 스크립트가 수행되게 하려면 showModalSync() 메소드를 사용하여야 합니다.

- showModal() 메소드 실행 시 objParentFrame 파라미터에 설정한 Frame 이 속한 Window 의 팝업 리스트에 Modal 로 표시된 ChildFrame 이 추가됩니다.
   또한, Modal 로 표시된 ChildFrame 이 종료되면 자동으로 팝업 리스트에서 제거되고 내부적으로 destroy 까지 수행됩니다.

- Modal 로 표시될 ChildFrame 의 left, top 속성값이 음수일 경우 0 으로 적용됩니다.
   또한, Modal 이 표시될 공간이 부족한 경우 TitleBar 가 표시되도록 left, top 위치가 보정됩니다.

- objParentFrame 파라미터에 설정한 Frame 이 속한 window 영역을 기준으로 Modal 이 표시됩니다.
   objParentFrame 파라미터에 설정한 Frame 이 Modeless 인 경우 해당 Frame 이 포함된 Window 를 기준으로 표시됩니다.
   objParentFrame 파라미터에 null 이 설정된 경우 MainFrame 을 기준으로 표시됩니다.

- Modal 로 표시될 ChildFrame 의 openstatus 속성값을 "minimize" 로 설정해도 "normal" 로 표시됩니다.

---
