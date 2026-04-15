# VFrameSet Methods

| Method | Description |
|--------|-------------|
| `addChild()` | 스크립트로 동적 생성한 Frame 을 VFrameSet 의 자식 Frame 으로 추가하는 메소드입니다. |
| `addEventHandler()` | VFrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 VFrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `alert()` | VFrameSet 의 경고 대화상자를 표시하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `confirm()` | VFrameSet 의 선택 대화상자를 표시하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 VFrameSet 을(를) 삭제하는 메소드입니다. |
| `findEventHandler()` | VFrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getActiveFrame()` | VFrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다. |
| `getEventHandler()` | VFrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getNativeHandle()` | VFrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다. |
| `getOffsetBottom()` | 부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetHeight()` | VFrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetLeft()` | 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetRight()` | 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetTop()` | 부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | VFrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOwnerFrame()` | VFrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다. |
| `init()` | 스크립트로 VFrameSet 을 동적 생성한 후에 초기화하는 메소드입니다. |
| `insertChild()` | 스크립트로 동적 생성한 Frame 을 VFrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다. |
| `insertEventHandler()` | VFrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `move()` | VFrameSet 의 위치와 크기를 변경하는 메소드입니다. |
| `removeChild()` | VFrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다. |
| `removeEventHandler()` | VFrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | VFrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `setEventHandler()` | VFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | VFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setFocus()` | VFrameSet 을 활성화하고 포커스를 주는 메소드입니다. |
| `setOffsetBottom()` | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetHeight()` | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetRight()` | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| `show()` | 스크립트로 동적 생성한 VFrameSet 을 화면에 표시하는 메소드입니다 |

---

## addChild

스크립트로 동적 생성한 Frame 을 VFrameSet 의 자식 Frame 으로 추가하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.addChild( strChildID, objFrame )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strChildID` | String | 자식으로 추가될 Frame 의 ID를 설정합니다. |
| `objFrame` | Object | 자식으로 추가될 Frame 의 오브젝트를 설정합니다. |

**Return**: `Number` — 추가된 자식 Frame 의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**
- addChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 addChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

---

## addEventHandler

VFrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 VFrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

VFrameSet 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.alert( strText )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다. |

**Remark**
- VFrameSet 의 중앙에 대화상자를 표시합니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.clearEventHandler( strEventID )
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

VFrameSet 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다. |
| `strCaption` | String | 대화상자의 TitleBar에 표시할 텍스트를 설정합니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |
| `strType` | String | 대화상자의 왼쪽 영역에 표시될 아이콘 종류를 문자열로 설정합니다.  "error" 설정 시 빨간색 "X" 모양 아이콘이 표시됩니다. "question" 설정 시 물음표("?") 모양 아이콘이 표시됩니다. "warning" 설정 시 노랑색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다. "information" 설정 시 파란색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다.  값을 설정하지 않으면 아이콘을 표시하지 않습니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |

**Return**: `Boolean` — 표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다. 표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**
- VFrameSet 의 중앙에 선택 대화상자를 표시합니다.

---

## destroy

스크립트에서 동적으로 생성한 VFrameSet 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.destroy()
```

**Sample**
```javascript
var bSucc = this.VFrameSet00.destroy();
```

**Return**: `Boolean` — VFrameSet 이(가) 정상적으로 삭제되면 true 를 반환합니다.  VFrameSet 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 VFrameSet 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: removeChild, show, addChild, init, insertChild

---

## findEventHandler

VFrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.findEventHandler( strEventID, objFunc, objTarget )
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

## getActiveFrame

VFrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getActiveFrame() ;
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;
var objActiveFrame = objApp.mainframe.frame.getActiveFrame() ;
```

**Return**: `Object` — VFrameSet 의 자식 Frame 중 활성화 상태일 Frame 오브젝트를 반환합니다. VFrameSet 의 자식 Frame 중 활성화 상태인 Frame 이 없을 경우 "null"을 반환합니다.

**Remark**
- 가장 최근에 활성화되어 최상위에 위치한 Frame 오브젝트를 반환합니다.

---

## getEventHandler

VFrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getNativeHandle

VFrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getNativeHandle();
```

**Sample**
```javascript
var nHwnd = this.parent.getNativeHandle();
```

**Return**: `Number` — VFrameSet이 속한 윈도우 핸들(HWND)값

---

## getOffsetBottom

부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getOffsetBottom();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nBottom = objApp.mainframe.frame.getOffsetBottom();
```

**Return**: `Number` — 부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 VFrameSet 의 bottom 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.

---

## getOffsetHeight

VFrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getOffsetHeight();
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;

var nHeight = objApp.mainframe.frame.getOffsetHeight( ) ;
```

**Return**: `Number` — VFrameSet 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 VFrameSet 의 높이를 동적으로 계산합니다.

---

## getOffsetLeft

부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getOffsetLeft();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nLeft = objApp.mainframe.frame.getOffsetLeft();
```

**Return**: `Number` — 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 left 값을 동적으로 계산합니다.

---

## getOffsetRight

부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getOffsetLeft();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nRight = objApp.mainframe.frame.getOffsetRight();
```

**Return**: `Number` — 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 right 값을 동적으로 계산합니다.

---

## getOffsetTop

부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getOffsetTop();
```

**Sample**
```javascript
var objApp = nexacro.getApplication();

var nTop = objApp.mainframe.frame.getOffsetTop();
```

**Return**: `Number` — 부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 VFrameSet 의 top 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.

---

## getOffsetWidth

VFrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getOffsetWidth();
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;

var nWidth = objApp.mainframe.frame.getOffsetWidth( ) ;
```

**Return**: `Number` — VFrameSet 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 VFrameSet 의 너비를 동적으로 계산합니다.

---

## getOwnerFrame

VFrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.getOwnerFrame()
```

**Sample**
```javascript
var objFrame = this.getOwnerFrame().getOwnerFrame() ;
```

**Return**: `Object` — VFrameSet 이 소속된 부모 Frame 오브젝트를 반환합니다. VFrameSet 이 소속된 Frame 이 없을 경우 "null"을 반환합니다.

---

## init

스크립트로 VFrameSet 을 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | VFrameSet 의 ID를 문자열로 설정합니다. |
| `nLeft` | Number | 부모 Frame 의 좌상단을 기준으로 VFrameSet 의 left 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| `nTop` | Number | 부모 Frame 의 좌상단을 기준으로 VFrameSet 의 top 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| `nWidth` | Number | VFrameSet 의 width 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| `nHeight` | Number | VFrameSet 의 height 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| `nRight` | Number | 부모 Frame 의 우하단을 기준으로 VFrameSet 의 right 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. nLeft, nWidth 값을 모두 설정했을 경우 nRight 값은 무시됩니다. |
| `nBottom` | Number | 부모 Frame 의 우하단을 기준으로 VFrameSet 의 bottom 속성값을 설정합니다. Pixel 단위 또는 비율("%")로 설정할 수 있습니다. nTop, nHeight 값을 모두 설정했을 경우 nBottom 값은 무시됩니다 |

**Remark**
- 위치관련 인수값에 단위를 사용할 경우 문자열로 설정하여야 합니다.

- 이미 show() 메소드가 호출된 경우에는 초기화가 끝난 상태입니다. 
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다. 

- 스크립트로 VFrameSet 을 동적 생성한 후에 사용할 수 있습니다.
  동적으로 생성한 XComponenet 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 VFrameSet 을 부모 Frame 에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

---

## insertChild

스크립트로 동적 생성한 Frame 을 VFrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.insertChild( nIdx, strChildID, objComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIdx` | Number | 부모 Frame 에 추가 될 순서를 설정합니다. "-1"로 설정할 경우 자식 Frame 중 제일 마지막에 추가됩니다. |
| `strChildID` | String | 자식으로 추가될 Frame 의 ID를 설정합니다. |
| `objComp` | Object | 자식으로 추가될 Frame 의 오브젝트를 설정합니다. |

**Return**: `Number` — 추가된 자식 Frame 의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**
- 자식 Frame 은 선언된 순서에 따라 화면에 표시됩니다.
  따라서 nIdx 값에 따라 추가되는 Frame 의 화면표시 순서가 정해집니다.
  Frame 이 겹칠 경우 nIdx 값이 작은 Frame 이 nIdx 값이 큰 Frame 에게 가려지게 됩니다.

- insertChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 insertChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

---

## insertEventHandler

VFrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

VFrameSet 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.move( nLeft, nTop [, nWidth, nHeight [, nRight, nBottom]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vLeft` | String, Number | VFrameSet 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. |
| `vTop` | String, Number | VFrameSet 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. |
| `vWidth` | String, Number | VFrameSet 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. |
| `vHeight` | String, Number | VFrameSet 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. |
| `vRight` | String, Number | VFrameSet 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다. |
| `vBottom` | String, Number | VFrameSet 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다. |

**Remark**
- 인수값에 "px" 또는 "%" 단위를 사용할 경우 문자열로 설정하여야 합니다.

- VFrameSet 이 고정된 형태를 갖는 HFrameSet, VFrameSet, TileFrameSet 의 자식 Frame 일 경우 move() 메소드는 동작하지 않습니다.

---

## removeChild

VFrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.removeChild( strChildID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strChildID` | String | 제거할 자식 Frame 의 ID를 문자열로 설정합니다. |

**Return**: `Object` — Frame 제거에 성공하면 제거된 Frame 의 오브젝트를 반환합니다. Frame 제거에 실패하면 "null"을 반환합니다.

**Remark**
- removeChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- addChild() 또는 insertChild() 메소드를 사용하여 동적으로 추가한 Frame 만 제거할 수 있습니다.
  동적으로 추가한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

---

## removeEventHandler

VFrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.removeEventHandler( strEventID, objFunc, objTarget )
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

VFrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

VFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.setEventHandler( strEventID, objFunc, objTarget )
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

VFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

VFrameSet 을 활성화하고 포커스를 주는 메소드입니다.

**Syntax**
```javascript
VFrameSet.setFocus()
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

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.setOffsetBottom( nBottom );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBottom` | Number | 부모 FrameSet 의 Top 위치를 기준으로 VFrameSet 의 bottom 을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 bottom 이 변경되지 않습니다.

---

## setOffsetHeight

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | VFrameSet 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 후 VFrameSet 의 height 속성에 값이 설정됩니다.

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 높이가 변경되지 않습니다.

---

## setOffsetLeft

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | 부모 FrameSet 의 Left 위치를 기준으로 VFrameSet 의 left 를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 후 VFrameSet 의 left 속성에 값이 설정됩니다.

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 left 가 변경되지 않습니다.

---

## setOffsetRight

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.setOffsetRight( nRight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRight` | Number | 부모 FrameSet 의 Left 위치를 기준으로 VFrameSet 의 right 를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 right 가 변경되지 않습니다.

---

## setOffsetTop

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.setOffsetTop( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | 부모 FrameSet 의 Top 위치를 기준으로 VFrameSet 의 top 을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 후 VFrameSet 의 top 속성에 값이 설정됩니다.

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 top 이 변경되지 않습니다.

---

## setOffsetWidth

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
VFrameSet.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | VFrameSet 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 후 VFrameSet 의 width 속성에 값이 설정됩니다.

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 너비가 변경되지 않습니다.

---

## show

스크립트로 동적 생성한 VFrameSet 을 화면에 표시하는 메소드입니다

**Syntax**
```javascript
VFrameSet.show()
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;

var objFrame = new FrameSet();
objFrame.init( "FrameSet00", 30, 120, 196, 46 );

objApp.mainframe.frame.addChild( 0, "FrameSet00", objFrame ) ;
objFrame.show();
```

**Remark**
- 스크립트로 VFrameSet 을 동적 생성한 후에 사용 가능합니다.
  동적으로 생성한 VFrameSet 이 아닌 경우에는 오동작 할 수 있습니다.

- 동적 생성한 VFrameSet 을 추가하기 위해 부모 Frame 의 addChild() 메소드나 insertChild() 메소드를 사용합니다.
  추가된 VFrameSet 을 표시하기 위해 show() 메소드를 사용합니다.
  부모 Frame 에 추가되지 않고 show() 메소드를 사용할 경우 에러가 발생합니다.

---
