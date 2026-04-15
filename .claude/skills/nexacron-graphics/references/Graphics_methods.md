# Graphics Methods

| Method | Description |
|--------|-------------|
| `addChild()` | Graphics 오브젝트를 Graphics 컴포넌트에 자식으로 추가하는 메소드입니다. |
| `addEvent()` | Graphics 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | Graphics 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 Graphics 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `bringToFront()` | 부모가 동일한 컴포넌트 중 Graphics 이(가) 화면의 제일 앞에 표시되게 합니다. |
| `bringToPrev()` | 부모가 동일한 컴포넌트 중 Graphics 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `clear()` | Graphics 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 Graphics 을(를) 삭제하는 메소드입니다. |
| `findEventHandler()` | Graphics 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getAllObjects()` | Graphics 에 추가된 모든 하위 오브젝트를 배열로 반환하는 메소드입니다. |
| `getEventHandler()` | Graphics 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getFirstChild()` | Graphics 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다. |
| `getLastChild()` | Graphics 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다. |
| `getNextObject()` | 특정 ID 에 해당하는 하위 오브젝트의 다음 순서 오브젝트를 반환하는 메소드입니다. |
| `getObjectByID()` | Graphics 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다. |
| `getOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetHeight()` | Graphics 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | Graphics 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getPixelBottom()` | Graphics 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelHeight()` | Graphics 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelLeft()` | Graphics 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelRight()` | Graphics 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelTop()` | Graphics 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelWidth()` | Graphics 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPrevObject()` | 특정 ID 에 해당하는 하위 오브젝트의 이전 순서 오브젝트를 반환하는 메소드입니다. |
| `hitTest()` | 인수로 전달된 좌표위치에 표시된 Graphics 오브젝트를 반환하는 메소드입니다. |
| `hitTestAll()` | 인수로 전달된 좌표위치에 표시된 Graphics 오브젝트를 모두 반환하는 메소드입니다. |
| `indexOf()` | Graphics 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다. |
| `init()` | 스크립트로 Graphics 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| `insertChild()` | Graphics 오브젝트를 Graphics 컴포넌트의 특정 위치에 자식으로 삽입하는 메소드입니다. |
| `insertEventHandler()` | Graphics 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `move()` | Graphics 의 위치와 크기를 변경하는 메소드입니다. |
| `moveToNext()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Graphics 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `moveToPrev()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Graphics 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `redraw()` | Graphics 의 변경사항을 화면에 반영하는 메소드입니다. |
| `removeChild()` | Graphics 의 자식 오브젝트 중 특정 ID 의 Graphics 오브젝트를 제거하는 메소드입니다. |
| `removeEventHandler()` | Graphics 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | Graphics 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `resize()` | Graphics 의 크기를 변경하는 메소드입니다. |
| `sendToBack()` | 부모가 동일한 컴포넌트 중 Graphics 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| `sendToNext()` | 부모가 동일한 컴포넌트 중 Graphics 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `setEventHandler()` | Graphics 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | Graphics 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setFocus()` | Graphics 에 포커스를 주는 메소드입니다. |
| `setOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetHeight()` | Graphics 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | Graphics 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| `show()` | 스크립트로 동적 생성한 Graphics 을(를) 화면에 표시하는 메소드입니다. |

---

## addChild

Graphics 오브젝트를 Graphics 컴포넌트에 자식으로 추가하는 메소드입니다.

**Syntax**
```javascript
Graphics.addChild( strID, objGObject )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 자식으로 추가하려는 Graphics 오브젝트의 ID 를 문자열로 설정합니다. |
| `objGObject` | Object | 자식으로 추가하려는 Graphics 오브젝트를 설정합니다. |

**Return**: `Number` — Graphics 에 추가된 Graphics 오브젝트의 인덱스를 반환합니다.

**Remark**
- addChild() 메소드로 오브젝트가 추가되어도 화면에 오브젝트가 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- addChild() 로 추가된 Graphics 오브젝트는 자식 오브젝트 중 순서상 마지막에 위치합니다.

- Graphics 오브젝트는 Graphics 컴포넌트에 추가된 순서대로 화면에 표시됩니다.
   따라서 Graphics 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

---

## addEvent

Graphics 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
Graphics.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | Graphics 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- Graphics 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

Graphics 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
Graphics.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 Graphics 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
Graphics.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

## bringToFront

부모가 동일한 컴포넌트 중 Graphics 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**
```javascript
Graphics.bringToFront()
```

**Sample**
```javascript
this.Graphics.bringToFront();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 Graphics 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.

---

## bringToPrev

부모가 동일한 컴포넌트 중 Graphics 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
Graphics.bringToPrev()
```

**Sample**
```javascript
this.Graphics.bringToPrev();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 Graphics 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.

---

## clear

Graphics 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**
```javascript
Graphics.clear()
```

**Remark**
- Graphics 에 추가된 오브젝트만 삭제되고 Graphics 는 삭제되지 않습니다.

- clear() 메소드로 오브젝트가 삭제되어도 화면에서 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
Graphics.clearEventHandler( strEventID )
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

스크립트에서 동적으로 생성한 Graphics 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
Graphics.destroy()
```

**Sample**
```javascript
var bSucc = this.Graphics00.destroy();
```

**Return**: `Boolean` — Graphics 이(가) 정상적으로 삭제되면 true 를 반환합니다.  Graphics 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 Graphics 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: addChild, init, insertChild, removeChild, show

---

## findEventHandler

Graphics 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.findEventHandler( strEventID, objFunc, objTarget )
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

## getAllObjects

Graphics 에 추가된 모든 하위 오브젝트를 배열로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getAllObjects()
```

**Return**: `Array` — Graphics 에 추가된 모든 하위 오브젝트를 배열로 반환합니다.

**Remark**
- GraphicsGroup 에 속한 하위 오브젝트를 포함하여 Graphics 에 속한 모든 오브젝트를 반환합니다.

---

## getEventHandler

Graphics 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getFirstChild

Graphics 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getFirstChild()
```

**Return**: `Object` — Graphics 에 추가된 첫번째 오브젝트를 반환합니다.

**Remark**
- Graphics 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

---

## getLastChild

Graphics 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getLastChild()
```

**Return**: `Object` — Graphics 에 추가된 마지막 오브젝트를 반환합니다.

**Remark**
- Graphics 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

---

## getNextObject

특정 ID 에 해당하는 하위 오브젝트의 다음 순서 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getNextObject( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 기준 오브젝트의 ID 를 문자열로 설정합니다. |

**Return**: `Object` — strID 에 해당하는 오브젝트의 다음 순서 오브젝트를 반환합니다.  다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

---

## getObjectByID

Graphics 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getObjectByID( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다. |

**Return**: `Object` — strID 에 해당하는 오브젝트를 반환합니다.

**Remark**
- GraphicsGroup 에 속한 하위 오브젝트를 포함하여 Graphics 에 속한 모든 오브젝트를 대상으로 검색합니다.

---

## getOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getOffsetBottom();
```

**Sample**
```javascript
var nBottom = this.Graphics.getOffsetBottom();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 동적으로 계산합니다.

---

## getOffsetHeight

Graphics 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getOffsetHeight();
```

**Sample**
```javascript
var nHeight = this.Graphics.getOffsetHeight();
```

**Return**: `Number` — Graphics 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Graphics 의 높이를 동적으로 계산합니다.

---

## getOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getOffsetLeft();
```

**Sample**
```javascript
var nleft = this.Graphics.getOffsetLeft();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 동적으로 계산합니다.

---

## getOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getOffsetRight();
```

**Sample**
```javascript
var nRight = this.Graphics.getOffsetRight();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 동적으로 계산합니다.

---

## getOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getOffsetTop();
```

**Sample**
```javascript
var nTop = this.Graphics.getOffsetTop();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 동적으로 계산합니다.

---

## getOffsetWidth

Graphics 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getOffsetWidth();
```

**Sample**
```javascript
var nWidth = this.Graphics.getOffsetWidth();
```

**Return**: `Number` — Graphics 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Graphics 의 너비를 동적으로 계산합니다.

---

## getPixelBottom

Graphics 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getPixelBottom();
```

**Sample**
```javascript
var nbottom = this.Graphics.getPixelBottom();
```

**Return**: `Number` — Graphics 의 bottom 속성값을 픽셀단위로 반환합니다.  bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelHeight

Graphics 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getPixelHeight();
```

**Sample**
```javascript
var nheight = this.Graphics.getPixelHeight();
```

**Return**: `Number` — Graphics 의 height 속성값을 픽셀단위로 반환합니다.  height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelLeft

Graphics 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getPixelLeft();
```

**Sample**
```javascript
var nleft = this.Graphics.getPixelLeft();
```

**Return**: `Number` — Graphics 의 left 속성값을 픽셀단위로 반환합니다.  left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelRight

Graphics 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getPixelRight();
```

**Sample**
```javascript
var nright = this.Graphics.getPixelRight();
```

**Return**: `Number` — Graphics 의 right 속성값을 픽셀단위로 반환합니다.  right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelTop

Graphics 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getPixelTop();
```

**Sample**
```javascript
var ntop = this.Graphics.getPixelTop();
```

**Return**: `Number` — Graphics 의 top 속성값을 픽셀단위로 반환합니다.  top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelWidth

Graphics 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getPixelWidth();
```

**Sample**
```javascript
var nwidth = this.Graphics.getPixelWidth();
```

**Return**: `Number` — Graphics 의 width 속성값을 픽셀단위로 반환합니다.  width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPrevObject

특정 ID 에 해당하는 하위 오브젝트의 이전 순서 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.getPrevObject( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 기준 오브젝트의 ID 를 문자열로 설정합니다. |

**Return**: `Object` — strID 에 해당하는 오브젝트의 이전 순서 오브젝트를 반환합니다.  이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

---

## hitTest

인수로 전달된 좌표위치에 표시된 Graphics 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.hitTest( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | 오브젝트를 확인하려는 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |
| `nY` | Number | 오브젝트를 확인하려는 위치의 y 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |

**Return**: `Object` — 인수로 전달된 좌표위치에 표시된 Graphics 오브젝트 중 제일 위에 표시된 오브젝트를 반환합니다.  즉, 해당 위치에 표시된 Graphics 오브젝트 중 순서상 제일 마지막에 추가된 오브젝트를 반환합니다.

**Remark**
- 인수로 전달된 좌표위치에 존재하는 Graphics 오브젝트 판단기준은 각 Graphics 오브젝트의 isHitTest() 메소드 리턴값을 따릅니다.

---

## hitTestAll

인수로 전달된 좌표위치에 표시된 Graphics 오브젝트를 모두 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.hitTestAll( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | 오브젝트를 확인하려는 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |
| `nY` | Number | 오브젝트를 확인하려는 위치의 y 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |

**Return**: `Object` — 인수로 전달된 좌표위치에 표시된 모든 Graphics 오브젝트를 배열로 반환합니다.

**Remark**
- 인수로 전달된 좌표위치에 존재하는 Graphics 오브젝트 판단기준은 각 Graphics 오브젝트의 isHitTest() 메소드 리턴값을 따릅니다.

---

## indexOf

Graphics 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Graphics.indexOf( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 인덱스를 얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다. |

**Return**: `Number` — strID 에 해당하는 오브젝트의 인덱스를 반환합니다.

---

## init

스크립트로 Graphics 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
Graphics.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | Graphics 의 ID를 문자열로 설정합니다. |
| `vLeft` | String, Number | Graphics 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Graphics 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Graphics 의 left 가 결정됩니다. |
| `vTop` | String, Number | Graphics 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Graphics 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Graphics 의 top 이 결정됩니다. |
| `vWidth` | String, Number | Graphics 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Graphics 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Graphics 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Graphics 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Graphics 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Graphics 의 height 가 결정됩니다. |
| `vRight` | String, Number | Graphics 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Graphics 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Graphics 의 right 가 결정됩니다. |
| `vBottom` | String, Number | Graphics 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Graphics 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Graphics 의 bottom 이 결정됩니다. |
| `vMinWidth` | String, Number | Graphics 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxWidth` | String, Number | Graphics 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.  vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| `vMinHeight` | String, Number | Graphics 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxHeight` | String, Number | Graphics 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.  vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 Graphics 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Graphics 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: addChild, destroy, insertChild, removeChild, show

---

## insertChild

Graphics 오브젝트를 Graphics 컴포넌트의 특정 위치에 자식으로 삽입하는 메소드입니다.

**Syntax**
```javascript
Graphics.insertChild( nIdx, strID, objGObject )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIdx` | Number | Graphics 오브젝트가 삽입될 위치의 인덱스를 숫자로 설정합니다. |
| `strID` | String | 삽입하려는 Graphics 오브젝트의 ID 를 문자열로 설정합니다. |
| `objGObject` | Object | 삽입하려는 Graphics 오브젝트를 설정합니다. |

**Return**: `Number` — Graphics 컴포넌트에 자식으로 삽입된 Graphics 오브젝트의 인덱스를 반환합니다.

**Remark**
- insertChild() 메소드로 Graphics 오브젝트가 추가되어도 화면에 오브젝트가 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- Graphics 오브젝트는 Graphics 컴포넌트에 추가된 순서대로 화면에 표시됩니다.
   따라서 Graphics 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

---

## insertEventHandler

Graphics 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
Graphics.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

Graphics 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
Graphics.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vLeft` | String, Number | Graphics 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Graphics 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Graphics 의 left 가 결정됩니다. |
| `vTop` | String, Number | Graphics 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Graphics 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Graphics 의 top 이 결정됩니다. |
| `vWidth` | String, Number | Graphics 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Graphics 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Graphics 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Graphics 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Graphics 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Graphics 의 height 가 결정됩니다. |
| `vRight` | String, Number | Graphics 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Graphics 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Graphics 의 right 가 결정됩니다. |
| `vBottom` | String, Number | Graphics 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Graphics 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Graphics 의 bottom 이 결정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 Graphics 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Graphics 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## moveToNext

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Graphics 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
Graphics.moveToNext( objComp )
Graphics.moveToNext( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 Graphics 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 Graphics 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.

---

## moveToPrev

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Graphics 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
Graphics.moveToPrev( objComp )
Graphics.moveToPrev( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 Graphics 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 Graphics 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.

---

## redraw

Graphics 의 변경사항을 화면에 반영하는 메소드입니다.

**Syntax**
```javascript
GraphicsControl.redraw( )
```

**Remark**
- Graphics 에 하위 오브젝트를 추가하거나 변경한 후 redraw() 메소드를 호출하여야 화면에 변경사항이 반영됩니다.

---

## removeChild

Graphics 의 자식 오브젝트 중 특정 ID 의 Graphics 오브젝트를 제거하는 메소드입니다.

**Syntax**
```javascript
Graphics.removeChild( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 제거하려는 Graphics 오브젝트의 ID 를 문자열로 설정합니다. |

**Return**: `Object` — Graphics 컴포넌트에서 제거된 Graphics 오브젝트를 반환합니다.

**Remark**
- removeChild() 메소드로 Graphics 오브젝트가 제거되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- removeChild() 메소드로 제거된 Graphics 오브젝트를 메모리에서 삭제하려면 destroy() 메소드를 사용해야 합니다.

---

## removeEventHandler

Graphics 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Graphics.removeEventHandler( strEventID, objFunc, objTarget )
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

Graphics 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Graphics.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

## resize

Graphics 의 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
Graphics.resize( vWidth, vHeight )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vWidth` | String, Number | Graphics 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Graphics 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Graphics 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Graphics 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Graphics 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Graphics 의 height 가 결정됩니다. |

**Remark**
- Graphics 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 Graphics 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- Graphics 의 left 속성값이 null 이면 resize() 메소드 실행 후 Graphics 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- Graphics 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 Graphics 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- Graphics 의 top 속성값이 null 이면 resize() 메소드 실행 후 Graphics 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 Graphics 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Graphics 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## sendToBack

부모가 동일한 컴포넌트 중 Graphics 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**
```javascript
Graphics.sendToBack()
```

**Sample**
```javascript
this.Graphics.sendToBack();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 Graphics 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다

---

## sendToNext

부모가 동일한 컴포넌트 중 Graphics 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
Graphics.sendToNext()
```

**Sample**
```javascript
this.Graphics.sendToNext();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 Graphics 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.

---

## setEventHandler

Graphics 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
Graphics.setEventHandler( strEventID, objFunc, objTarget )
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

Graphics 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
Graphics.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

Graphics 에 포커스를 주는 메소드입니다.

**Syntax**
```javascript
Graphics.setFocus( [bMoveScroll [, bInnerFocus]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bMoveScroll` | Boolean | 부모 컴포넌트에 스크롤이 있을 경우 Graphics 기준으로 스크롤을 이동할지 설정합니다.  true 설정 시 Graphics 이(가) 화면에 표시되도록 스크롤을 이동시킵니다. false 설정 시 Graphics 의 위치에 관계없이 스크롤을 이동시키지 않습니다.  값을 설정하지 않으면 true 로 동작합니다. |
| `bInnerFocus` | Boolean | Graphics 이(가) 컨테이너 컴포넌트 일 때 자식 컴포넌트에게 포커스를 이동할지 설정합니다.  true 설정 시 자식 컴포넌트 중 포커스를 받을 수 있는 첫번째 컴포넌트가 포커스 됩니다. false 설정 시 Graphics 에 포커스 됩니다.  Graphics 이(가) 컨테이너 컴포넌트 일 때 값을 설정하지 않으면 true 로 동작합니다. |

**Return**: `Object` — Graphics 이(가) 포커스되기 전에 포커스를 가졌던 컴포넌트를 반환합니다.  포커스를 가진 컴포넌트가 없었거나 메소드 수행이 실패하는 경우에는 null 을 반환합니다.

**Remark**
- setFocus() 메소드는 enableaccessibility 속성값에 관계없이 파라미터값을 기준으로 동작합니다.

- Graphics 이(가) 컨테이너 컴포넌트가 아니거나 자식 컴포넌트 중 포커스를 가질 수 있는 컴포넌트가
   존재하지 않을 경우에는 bInnerFocus 파라미터값에 관계없이 Graphics 에 포커스 됩니다.

---

## setOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Graphics.setOffsetBottom( nBottom );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBottom` | Number | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetHeight

Graphics 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Graphics.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | Graphics 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Graphics.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위의 숫자로 설정합니다 |

**Remark**
- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > Graphics 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.

---

## setOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Graphics.setOffsetRight( nRight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRight` | Number | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Graphics.setOffsetTop( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > Graphics 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.

---

## setOffsetWidth

Graphics 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Graphics.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | Graphics 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## show

스크립트로 동적 생성한 Graphics 을(를) 화면에 표시하는 메소드입니다.

**Syntax**
```javascript
Graphics.show()
```

**Sample**
```javascript
this.Graphics00.show();
```

**Remark**
- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: addChild, destroy, init, insertChild, removeChild

---
