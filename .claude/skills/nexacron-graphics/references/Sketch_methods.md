# Sketch Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | Sketch 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | Sketch 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 Sketch 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `bringToFront()` | 부모가 동일한 컴포넌트 중 Sketch 이(가) 화면의 제일 앞에 표시되게 합니다. |
| `bringToPrev()` | 부모가 동일한 컴포넌트 중 Sketch 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `clear()` | Sketch 의 value 속성값과 입력 상태를 초기화하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 Sketch 을(를) 삭제하는 메소드입니다. |
| `drawErase()` | 인수로 전달된 좌표정보를 바탕으로 Erase 객체값에 맞게 지우는 메소드입니다. |
| `drawStroke()` | 인수로 전달된 좌표정보를 바탕으로 Brush 객체값에 맞게 선을 그리는 메소드입니다. |
| `drawText()` | 인수로 전달된 좌표 위치에 TextFont 객체값에 맞게 텍스트를 표시하는 메소드입니다. |
| `findEventHandler()` | Sketch 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getEventHandler()` | Sketch 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetHeight()` | Sketch 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | Sketch 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getPixelBottom()` | Sketch 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelHeight()` | Sketch 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelLeft()` | Sketch 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelRight()` | Sketch 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelTop()` | Sketch 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelWidth()` | Sketch 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `hideTextEditor()` | Sketch 에 표시되어 있는 텍스트 입력창을 숨기는 메소드입니다. |
| `init()` | 스크립트로 Sketch 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| `insertEventHandler()` | Sketch 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `loadSketch()` | 인수로 전달된 이미지를 value 속성에 설정하고 화면에 표시하는 메소드입니다. |
| `move()` | Sketch 의 위치와 크기를 변경하는 메소드입니다. |
| `moveToNext()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Sketch 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `moveToPrev()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Sketch 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `redo()` | Sketch 에서 Undo 된 입력을 다시 처리하는 메소드입니다. |
| `removeEvent()` | Sketch 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | Sketch 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | Sketch 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `resize()` | Sketch 의 크기를 변경하는 메소드입니다. |
| `saveSketch()` | Sketch 에 표시되는 이미지를 Base64 로 인코딩 된 데이터로 value 속성에 저장하는 메소드입니다. |
| `saveSketchToFile()` | Sketch 에 표시되는 이미지를 파일로 저장하는 메소드입니다. |
| `sendToBack()` | 부모가 동일한 컴포넌트 중 Sketch 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| `sendToNext()` | 부모가 동일한 컴포넌트 중 Sketch 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `setBrushColor()` | Brush 객체의 색상을 설정하는 메소드입니다. |
| `setBrushSize()` | Brush 객체의 크기를 설정하는 메소드입니다. |
| `setBrushType()` | Brush 객체의 형태를 설정하는 메소드입니다. |
| `setEraseSize()` | Erase 객체의 지름을 설정하는 메소드입니다. |
| `setEventHandler()` | Sketch 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | Sketch 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setFocus()` | Sketch 에 포커스를 주는 메소드입니다. |
| `setOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetHeight()` | Sketch 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | Sketch 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| `setTextFont()` | Sketch 의 텍스트 입력창에서 사용하는 폰트를 설정하는 메소드입니다. |
| `show()` | 스크립트로 동적 생성한 Sketch 을(를) 화면에 표시하는 메소드입니다. |
| `showTextEditor()` | 인수로 전달된 좌표위치에 텍스트 입력창을 표시하는 메소드입니다. |
| `undo()` | Sketch 에서 마지막으로 입력된 값을 취소하는 메소드입니다. |

---

## addEvent

Sketch 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
Sketch.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | Sketch 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- Sketch 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

Sketch 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
Sketch.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 Sketch 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
Sketch.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

부모가 동일한 컴포넌트 중 Sketch 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**
```javascript
Sketch.bringToFront()
```

**Sample**
```javascript
this.Sketch.bringToFront();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 Sketch 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.

---

## bringToPrev

부모가 동일한 컴포넌트 중 Sketch 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
Sketch.bringToPrev()
```

**Sample**
```javascript
this.Sketch.bringToPrev();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 Sketch 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.

---

## clear

Sketch 의 value 속성값과 입력 상태를 초기화하는 메소드입니다.

**Syntax**
```javascript
Sketch.clear()
```

**Sample**
```javascript
this.Sketch00.clear();
```

**Remark**
- clear() 메소드 수행 후 redoable 속성값과 undoable 속성값이 "false"로 설정됩니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
Sketch.clearEventHandler( strEventID )
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

스크립트에서 동적으로 생성한 Sketch 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
Sketch.destroy()
```

**Sample**
```javascript
var bSucc = this.Sketch00.destroy();
```

**Return**: `Boolean` — Sketch 이(가) 정상적으로 삭제되면 true 를 반환합니다.  Sketch 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 Sketch 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: init, show, addChild, insertChild, removeChild

---

## drawErase

인수로 전달된 좌표정보를 바탕으로 Erase 객체값에 맞게 지우는 메소드입니다.

**Syntax**
```javascript
Sketch.drawErase( nXpos, nYpos [, bStart] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nXpos` | Number | Sketch 의 좌상단을 기준으로 한 x 좌표값을 설정합니다. |
| `nYpos` | Number | Sketch 의 좌상단을 기준으로 한 y 좌표값을 설정합니다. |
| `bStart` | Boolean | "true"로 설정 시 전달된 좌표를 새로운 시작점으로 설정합니다. "false"로 설정 시 이전 좌표값과 전달된 좌표값을 가상의 선으로 연결한 후 선을 따라 입력값을 지웁니다. |

**Remark**
- drawErase() 메소드는 전달된 좌표위치와 이전에 실행된 좌표위치를 가상의 선으로 연결하여 해당 영역을 지우는 메소드입니다.
  따라서, bStart 값을 "true"로 설정하지 않으면 가상의 선이 Erase 객체값에 맞게 계속 연결되며 지워지게 됩니다.
  bStart 값을 "true"로 설정하면 이전 좌표위치와 연결하지 않고 새로운 시작점으로 처리됩니다.

- bStart 값을 설정하지 않으면 기본적으로 "false"로 적용되지만, drawErase() 메소드가 처음 수행될 때는 "true"로 적용됩니다.

- Sketch 영역을 마우스 클릭이나 터치하게 되면 새로운 시작점으로 저장됩니다.

---

## drawStroke

인수로 전달된 좌표정보를 바탕으로 Brush 객체값에 맞게 선을 그리는 메소드입니다.

**Syntax**
```javascript
Sketch.drawStroke( nXpos, nYpos [, bStart] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nXpos` | Number | Sketch 의 좌상단을 기준으로 한 x 좌표값을 설정합니다. |
| `nYpos` | Number | Sketch 의 좌상단을 기준으로 한 y 좌표값을 설정합니다. |
| `bStart` | Boolean | true 로 설정 시 전달된 좌표를 새로운 시작점으로 설정합니다. false 로 설정 시 이전 좌표값과 전달된 좌표값을 연결한 선을 그립니다. |

**Remark**
- drawStroke() 메소드는 전달된 좌표위치와 이전에 실행된 좌표위치를 선으로 연결하여 그리는 메소드입니다.
   따라서, bStart 값을 true 로 설정하지 않으면 Brush 객체값에 맞게 계속 선을 연결하여 그리게 됩니다.
   bStart 값을 true 로 설정하면 이전 좌표위치와 연결하지 않고 새로운 시작점으로 처리됩니다.

- bStart 값을 설정하지 않으면 기본적으로 false 로 적용되지만, drawStroke() 메소드가 처음 수행될 때는 true 로 적용됩니다.

- Sketch 영역을 마우스 클릭이나 터치하게 되면 새로운 시작점으로 저장됩니다.

---

## drawText

인수로 전달된 좌표 위치에 TextFont 객체값에 맞게 텍스트를 표시하는 메소드입니다.

**Syntax**
```javascript
Sketch.drawText( nXpos, nYpos, strText [, bMultiline] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nXpos` | Number | Sketch 의 좌상단을 기준으로 한 x 좌표값을 설정합니다. |
| `nYpos` | Number | Sketch 의 좌상단을 기준으로 한 y 좌표값을 설정합니다. |
| `strText` | String | 전달된 좌표 위치에 표시할 텍스트를 설정합니다. |
| `bMultiline` | Boolean | "true" 설정 시 텍스트 내의 개행문자를 줄바꿈 처리합니다. "false" 설정 시 텍스트 내의 개행문자를 무시하고 한줄로 처리합니다. |

---

## findEventHandler

Sketch 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.findEventHandler( strEventID, objFunc, objTarget )
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

Sketch 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getOffsetBottom();
```

**Sample**
```javascript
var nBottom = this.Sketch.getOffsetBottom();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 bottom 값을 동적으로 계산합니다.

---

## getOffsetHeight

Sketch 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getOffsetHeight();
```

**Sample**
```javascript
var nHeight = this.Sketch.getOffsetHeight();
```

**Return**: `Number` — Sketch 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Sketch 의 높이를 동적으로 계산합니다.

---

## getOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getOffsetLeft();
```

**Sample**
```javascript
var nleft = this.Sketch.getOffsetLeft();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 left 값을 동적으로 계산합니다.

---

## getOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getOffsetRight();
```

**Sample**
```javascript
var nRight = this.Sketch.getOffsetRight();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 right 값을 동적으로 계산합니다.

---

## getOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getOffsetTop();
```

**Sample**
```javascript
var nTop = this.Sketch.getOffsetTop();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 top 값을 동적으로 계산합니다.

---

## getOffsetWidth

Sketch 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getOffsetWidth();
```

**Sample**
```javascript
var nWidth = this.Sketch.getOffsetWidth();
```

**Return**: `Number` — Sketch 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Sketch 의 너비를 동적으로 계산합니다.

---

## getPixelBottom

Sketch 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getPixelBottom();
```

**Sample**
```javascript
var nbottom = this.Sketch.getPixelBottom();
```

**Return**: `Number` — Sketch 의 bottom 속성값을 픽셀단위로 반환합니다.  bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelHeight

Sketch 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getPixelHeight();
```

**Sample**
```javascript
var nheight = this.Sketch.getPixelHeight();
```

**Return**: `Number` — Sketch 의 height 속성값을 픽셀단위로 반환합니다.  height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelLeft

Sketch 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getPixelLeft();
```

**Sample**
```javascript
var nleft = this.Sketch.getPixelLeft();
```

**Return**: `Number` — Sketch 의 left 속성값을 픽셀단위로 반환합니다.  left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelRight

Sketch 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getPixelRight();
```

**Sample**
```javascript
var nright = this.Sketch.getPixelRight();
```

**Return**: `Number` — Sketch 의 right 속성값을 픽셀단위로 반환합니다.  right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelTop

Sketch 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getPixelTop();
```

**Sample**
```javascript
var ntop = this.Sketch.getPixelTop();
```

**Return**: `Number` — Sketch 의 top 속성값을 픽셀단위로 반환합니다.  top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelWidth

Sketch 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Sketch.getPixelWidth();
```

**Sample**
```javascript
var nwidth = this.Sketch.getPixelWidth();
```

**Return**: `Number` — Sketch 의 width 속성값을 픽셀단위로 반환합니다.  width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## hideTextEditor

Sketch 에 표시되어 있는 텍스트 입력창을 숨기는 메소드입니다.

**Syntax**
```javascript
Sketch.hideTextEditor( [bClear] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bClear` | Boolean | "true" 설정 시 텍스트 입력창에 입력된 텍스트를 삭제합니다. "false" 설정 시 텍스트 입력창에 입력된 텍스트를 유지합니다. |

**Return**: `String` — 텍스트 입력창에 입력되어 있던 텍스트값을 반환합니다.

**Remark**
- bClear 값을 생략하면 "true"로 적용됩니다.

---

## init

스크립트로 Sketch 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
Sketch.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | Sketch 의 ID를 문자열로 설정합니다. |
| `vLeft` | String, Number | Sketch 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Sketch 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 left 가 결정됩니다. |
| `vTop` | String, Number | Sketch 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Sketch 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 top 이 결정됩니다. |
| `vWidth` | String, Number | Sketch 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Sketch 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Sketch 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Sketch 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 height 가 결정됩니다. |
| `vRight` | String, Number | Sketch 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Sketch 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 right 가 결정됩니다. |
| `vBottom` | String, Number | Sketch 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Sketch 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 bottom 이 결정됩니다. |
| `vMinWidth` | String, Number | Sketch 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxWidth` | String, Number | Sketch 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.  vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| `vMinHeight` | String, Number | Sketch 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxHeight` | String, Number | Sketch 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.  vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 Sketch 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Sketch 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Sketch 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: destroy, show, addChild, insertChild, removeChild

---

## insertEventHandler

Sketch 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
Sketch.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## loadSketch

인수로 전달된 이미지를 value 속성에 설정하고 화면에 표시하는 메소드입니다.

**Syntax**
```javascript
Sketch.loadSketch( strData )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strUrl` | String | Sketch 에 표시할 이미지의 경로 또는 데이터를 문자열로 설정합니다.  테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다. 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다. TypeDefinition 영역의 Services 에 정의된 Prefix를 사용한 형식으로 설정합니다.  폼의 위치를 기준으로 한 "./경로/이미지명" 형식의 상대경로를 사용하여 설정합니다. Base64 로 인코딩 된 이미지 데이터를 문자열로 설정합니다. |

**Return**: `Boolean` — 이미지 로드에 성공하면 true 를 반환하고, onload 이벤트가 발생합니다. 이미지 로드에 실패하면 false 를 반환하고, onerror 이벤트가 발생합니다.  지원하지 않는 파일형식, 존재하지 않는 파일, 통신오류 인 경우 false 를 반환합니다.

**Remark**
- loadSketch() 메소드로 로딩된 이미지는 Erase 객체를 사용하여 지울 수 없습니다.

- "BMP", "PNG", "JPG", "GIF", "TIF", "BMP,Mono" 형식의 이미지를 사용할 수 있습니다.

- saveSketch() 메소드로 저장된 value 속성값을 loadSketch() 메소드의 파라미터로 사용할 수 있습니다.

- 이미지 로드에 성공하면 redoable 속성값과 undoable 속성값이 "false"로 설정됩니다.

---

## move

Sketch 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
Sketch.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vLeft` | String, Number | Sketch 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Sketch 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 left 가 결정됩니다. |
| `vTop` | String, Number | Sketch 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Sketch 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 top 이 결정됩니다. |
| `vWidth` | String, Number | Sketch 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Sketch 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Sketch 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Sketch 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 height 가 결정됩니다. |
| `vRight` | String, Number | Sketch 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Sketch 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 right 가 결정됩니다. |
| `vBottom` | String, Number | Sketch 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Sketch 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 bottom 이 결정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 Sketch 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Sketch 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Sketch 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## moveToNext

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Sketch 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
Sketch.moveToNext( objComp )
Sketch.moveToNext( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 Sketch 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 Sketch 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.

---

## moveToPrev

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Sketch 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
Sketch.moveToPrev( objComp )
Sketch.moveToPrev( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 Sketch 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 Sketch 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.

---

## redo

Sketch 에서 Undo 된 입력을 다시 처리하는 메소드입니다.

**Syntax**
```javascript
Sketch.redo()
```

**Sample**
```javascript
this.Sketch00.redo();
```

**Remark**
- redoable 속성값이 "true"일 경우만 사용할 수 있는 메소드입니다.

- Sketch 에서 undo() 메소드가 1회이상 실행되었을 때 Redo가 가능합니다.

---

## removeEvent

Sketch 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
Sketch.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | Sketch 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- Sketch 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- Sketch 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

Sketch 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Sketch.removeEventHandler( strEventID, objFunc, objTarget )
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

Sketch 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Sketch.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

Sketch 의 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
Sketch.resize( vWidth, vHeight )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vWidth` | String, Number | Sketch 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Sketch 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Sketch 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Sketch 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 height 가 결정됩니다. |

**Remark**
- Sketch 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 Sketch 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- Sketch 의 left 속성값이 null 이면 resize() 메소드 실행 후 Sketch 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- Sketch 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 Sketch 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- Sketch 의 top 속성값이 null 이면 resize() 메소드 실행 후 Sketch 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 Sketch 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Sketch 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Sketch 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## saveSketch

Sketch 에 표시되는 이미지를 Base64 로 인코딩 된 데이터로 value 속성에 저장하는 메소드입니다.

**Syntax**
```javascript
Sketch.saveSketch([strFormat [, nOption]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strFormat` | String | 저장할 파일의 형식을 문자열로 설정합니다. 지원하는 파일 형식은 Remark 항목의 표를 참고하세요.  값을 설정하지 않으면 "PNG" 로 적용됩니다. |
| `nOption` | Number | 파일 형식이 "JPG"일 때 압축비율을 숫자로 설정합니다. 압축비율은 0~100 범위의 정수값으로 설정합니다.  값을 설정하지 않으면 100 으로 적용됩니다. |

**Return**: `Boolean` — 이미지 저장에 성공하면 true 를 반환하고, onsuccess 이벤트가 발생합니다. 이미지 저장에 실패하면 false 를 반환하고, onerror 이벤트가 발생합니다.

**Remark**
- 이미지를 value 속성에 저장해도 redoable 속성값과 undoable 속성값은 현재 상태를 유지합니다.
   따라서 입력값에 대한 Undo/Redo 수행이 가능합니다.

- strFormat 파라미터에 설정할 수 있는 값은 표를 참고해주세요.
   * 표에서 두 번째 컬럼의 WRE는 IE10, IE11, Safari(masOS, iOS/iPadOS) 브라우저를 제외한 WRE를 의미합니다.

	
		strFormat
		Desktop NRE
		WRE *
		IE10, IE11
		iOS/iPadOS NRE, Safari
		Android NRE
	

	
		PNG

---

## saveSketchToFile

Sketch 에 표시되는 이미지를 파일로 저장하는 메소드입니다.

**Syntax**
```javascript
Sketch.saveSketchToFile( strPath [, strFormat [, nOption]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPath` | String | 저장할 파일의 경로와 파일명을 문자열로 설정합니다.  Windows NRE 는 파일명만 설정할 수 있으며 파일은 "내 문서" 폴더에 저장됩니다. Android NRE 는 "%USERAPP%" 와 "%SD_CARD%" Alias를 사용하여 경로와 파일명을 설정합니다. iOS/iPadOS NRE 는 지원하지 않습니다. |
| `strFormat` | String | 출력할 이미지 파일의 형식을 설정합니다. "BMP", "BMP_MONO", "JPG", "TIF", "TIF_24", "TIF_MONO", "GIF", "PNG" 를 설정할 수 있습니다.  안드로이드 NRE에서는 "JPG", "PNG" 형식만 지원합니다. 값을 설정하지 않으면 "BMP" 로 적용됩니다. |
| `nOption` | Number | 파일 형식이 "JPG"일 때 압축비율을 숫자로 설정합니다.  압축비율은 0~100 범위의 정수값으로 설정합니다. 값을 설정하지 않으면 100 으로 적용됩니다. |

**Return**: `Boolean` — 이미지 저장에 성공하면 true 를 반환하고 onsuccss 이벤트가 발생합니다. 이미지 저장에 실패하면 false 를 반환하고 onerror 이벤트가 발생합니다.

**Remark**
- saveSketchToFile() 메소드를 실행하면 이미지를 파일로 저장하고, Nexaco Objects 의 Image 오브젝트 형태로 value 속성에도 저장합니다.
   value 속성에 저장된 Image 오브젝트는 "Script > Nexacro Objects > Image" 항목을 참고하셔야 합니다.

- 이미지를 파일로 저장해도 redoable 속성값과 undoable 속성값은 현재 상태를 유지합니다.
   따라서 입력값에 대한 Undo/Redo 수행이 가능합니다.

- Android 에서 "%USERAPP%"의 실제 위치는 "/data/data/packageName/files/nexacro/" 이고, "%SD_CARD%"의 실제 위치는 "/mnt/sdcard" 입니다.


◆ Web Runtime Environment 제약

- Web Runtime Environment는 사용할 수 없는 메소드입니다.

---

## sendToBack

부모가 동일한 컴포넌트 중 Sketch 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**
```javascript
Sketch.sendToBack()
```

**Sample**
```javascript
this.Sketch.sendToBack();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 Sketch 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다

---

## sendToNext

부모가 동일한 컴포넌트 중 Sketch 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
Sketch.sendToNext()
```

**Sample**
```javascript
this.Sketch.sendToNext();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 Sketch 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.

---

## setBrushColor

Brush 객체의 색상을 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setBrushColor( strColor )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColor` | String | Brush 객체의 색상을 미리 정의된 색상이름 또는 색상코드로 설정합니다.  "red","blue"와 같이 문자열로 해당 색상을 설정합니다. "#"기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. ("#FF00FF") |

---

## setBrushSize

Brush 객체의 크기를 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setBrushSize( nSize )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nSize` | Number | Brush 객체의 크기를 pixel 단위의 숫자로 설정합니다. 음수값으로 설정할 수 없습니다. |

**Remark**
- Sketch 에서 Brush 객체가 사용되면 Brush의 type에 맞게 해당 영역이 그려집니다.

---

## setBrushType

Brush 객체의 형태를 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setBrushType( enumType )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumType` | String | Brush 객체의 형태를 아래값 중 하나로 설정합니다. 잘못된 값을 설정하면 "round"로 적용됩니다.  "round" 설정 시 Brush 객체가 원형으로 그려집니다. "square" 설정 시 Brush 객체가 사각형으로 그려집니다. "butt" 설정 시 Brush 객체가 선으로 그려집니다. |

---

## setEraseSize

Erase 객체의 지름을 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setEraseSize( nSize )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nSize` | Number | Erase 객체의 지름을 pixel 단위의 숫자로 설정합니다. 음수값으로 설정할 수 없습니다. |

**Remark**
- Sketch 에서 Erase 객체가 사용되면 원형으로 해당 영역을 지웁니다.

---

## setEventHandler

Sketch 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
Sketch.setEventHandler( strEventID, objFunc, objTarget )
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

Sketch 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
Sketch.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

Sketch 에 포커스를 주는 메소드입니다.

**Syntax**
```javascript
Sketch.setFocus( [bMoveScroll [, bInnerFocus]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bMoveScroll` | Boolean | 부모 컴포넌트에 스크롤이 있을 경우 Sketch 기준으로 스크롤을 이동할지 설정합니다.  true 설정 시 Sketch 이(가) 화면에 표시되도록 스크롤을 이동시킵니다. false 설정 시 Sketch 의 위치에 관계없이 스크롤을 이동시키지 않습니다.  값을 설정하지 않으면 true 로 동작합니다. |
| `bInnerFocus` | Boolean | Sketch 이(가) 컨테이너 컴포넌트 일 때 자식 컴포넌트에게 포커스를 이동할지 설정합니다.  true 설정 시 자식 컴포넌트 중 포커스를 받을 수 있는 첫번째 컴포넌트가 포커스 됩니다. false 설정 시 Sketch 에 포커스 됩니다.  Sketch 이(가) 컨테이너 컴포넌트 일 때 값을 설정하지 않으면 true 로 동작합니다. |

**Return**: `Object` — Sketch 이(가) 포커스되기 전에 포커스를 가졌던 컴포넌트를 반환합니다.  포커스를 가진 컴포넌트가 없었거나 메소드 수행이 실패하는 경우에는 null 을 반환합니다.

**Remark**
- setFocus() 메소드는 enableaccessibility 속성값에 관계없이 파라미터값을 기준으로 동작합니다.

- Sketch 이(가) 컨테이너 컴포넌트가 아니거나 자식 컴포넌트 중 포커스를 가질 수 있는 컴포넌트가
   존재하지 않을 경우에는 bInnerFocus 파라미터값에 관계없이 Sketch 에 포커스 됩니다.

---

## setOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setOffsetBottom( nBottom );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBottom` | Number | 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 bottom 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Sketch 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Sketch 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Sketch 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Sketch 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetHeight

Sketch 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | Sketch 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Sketch 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Sketch 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Sketch 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Sketch 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 left 값을 픽셀단위의 숫자로 설정합니다 |

**Remark**
- 메소드 실행 전 Sketch 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Sketch 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Sketch 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > Sketch 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.

---

## setOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setOffsetRight( nRight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRight` | Number | 부모 컴포넌트의 Left 위치를 기준으로 Sketch 의 right 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Sketch 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Sketch 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Sketch 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Sketch 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setOffsetTop( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | 부모 컴포넌트의 Top 위치를 기준으로 Sketch 의 top 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Sketch 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Sketch 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Sketch 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > Sketch 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.

---

## setOffsetWidth

Sketch 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | Sketch 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Sketch 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Sketch 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Sketch 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Sketch 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setTextFont

Sketch 의 텍스트 입력창에서 사용하는 폰트를 설정하는 메소드입니다.

**Syntax**
```javascript
Sketch.setTextFont( strTextFont )


strTextFont ::= [<font-style>] [<font-weight>] <font-size> ['/'<line-height>] <font-family>

<font-style> ::= 'normal' | 'italic'
<font-weight> ::= 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
<font-size> ::= <nSize> 'px'|'pt'
<line-height> ::= 'normal' | <nValue> | <nPixel>'px' | <nPercent>'%'
<font-family> ::= <font-name> [',' <font-name>]*
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `<font-style>` | String | 폰트의 스타일을 설정합니다.  "normal" 설정 시 스타일이 적용되지 않습니다. "italic" 설정 시 기울임 스타일이 적용됩니다. |
| `<font-weight>` | String | 폰트의 굵기를 설정합니다.  "normal" 설정 시 굵기가 적용되지 않습니다. "bold" 설정 시 굵은 폰트가 적용됩니다.  "100"~"900" 로 설정 시 설정한 굵기로 폰트가 적용됩니다. "100"~"900" 로 설정 시 굵기에 해당하는 폰트가 정의되어 있어야 합니다. |
| `<font-size>` | String | 폰트의 크기를 pixel 또는 point 단위로 설정합니다.  단위에 맞게 "px" 또는 "pt" 단위를 설정하여야 합니다. |
| `<nSize>` | String | point 단위의 정수값으로 폰트 크기를 설정합니다.  음수값을 설정할 수 없습니다. |
| `<line-height>` | String | 텍스트가 여러줄로 표시되는 경우 줄 사이의 간격을 설정합니다.  음수값을 설정할 수 없습니다.  "normal" 설정 시 줄 사이의 간격을 설정하지 않습니다. "normal" 설정 시 웹브라우저마다 줄 사이의 간격이 다르게 적용됩니다. "normal" 설정 시 Nexacro Runtime Environment는 폰트 크기에 곱할 값(값)이 "1.5" 일 때와 동일하게 동작합니다. |
| `<nValue>` | String | 폰트 크기에 곱할 값을 설정합니다.  계산 결과값이 줄 사이 간격으로 적용됩니다. |
| `<nPixel>` | String | 줄 사이의 간격을 pixel 단위의 숫자로 설정합니다.  "px" 단위를 생략할 수 없습니다. |
| `<nPercent>` | String | 폰트 크기에 곱할 비율값을 설정합니다.  계산 결과값이 줄 사이 간격으로 적용됩니다. "%" 단위를 생략할 수 없습니다. |
| `<font-family>` | String | 폰트 이름을 리스트로 설정합니다.  콤마(",")로 구분하여 폰트 이름을 여러개 설정할 수 있습니다. 먼저 선언된 폰트가 우선적으로 적용됩니다. 선언된 폰트가 시스템에 없을 경우 선언된 순서대로 사용 가능한 폰트를 적용합니다. 선언된 폰트가 모두 없을 경우 시스템 기본 폰트가 적용됩니다. |
| `<font-name>` | String | 폰트의 이름을 설정합니다. |

**Remark**
- font 속성의 폰트 크기가 변경되면 <line-height> 에 적용된 값에 따라 줄간격이 변경될 수 있습니다.

- <font-weight> 를 수치로 설정 시 "400" 값이 일반적인 굵기로 적용되고, "700" 값이 "bold" 로 적용됩니다.
   폰트에 수치값에 해당하는 폰트굵기가 없다면 "400" 과 "700" 중 가까운 값으로 표시됩니다.

---

## show

스크립트로 동적 생성한 Sketch 을(를) 화면에 표시하는 메소드입니다.

**Syntax**
```javascript
Sketch.show()
```

**Sample**
```javascript
this.Sketch00.show();
```

**Remark**
- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: destroy, init, addChild, insertChild, removeChild

---

## showTextEditor

인수로 전달된 좌표위치에 텍스트 입력창을 표시하는 메소드입니다.

**Syntax**
```javascript
Sketch.showTextEditor( nXpos, nYpos, nWidth, nHeight, [strText] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nXpos` | Number | Sketch 의 좌상단을 기준으로 한 x 좌표값을 설정합니다. |
| `nYpos` | Number | Sketch 의 좌상단을 기준으로 한 y 좌표값을 설정합니다. |
| `nWidth` | Number | 텍스트 입력창의 너비를 pixel 단위의 숫자로 설정합니다. |
| `nHeight` | Number | 텍스트 입력창의 높이를 pixel 단위의 숫자로 설정합니다. |
| `strText` | String | 텍스트 입력창에 표시될 텍스트를 설정합니다. |

**Return**: `String` — 텍스트 입력창에 입력되어 있던 텍스트값을 반환합니다.

**Remark**
- 표시되는 텍스트 입력창에 포커스가 설정되고, strText 을 설정했다면 텍스트가 전체 선택됩니다.

---

## undo

Sketch 에서 마지막으로 입력된 값을 취소하는 메소드입니다.

**Syntax**
```javascript
Sketch.undo()
```

**Sample**
```javascript
this.Sketch00.undo();
```

**Remark**
- undoable 속성값이 "true"일 경우만 사용할 수 있는 메소드입니다.

- 사용자에 의해 Sketch 에 입력값이 발생했을 때 Undo가 가능합니다.

---
