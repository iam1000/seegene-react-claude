# MultiCombo Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | MultiCombo 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | MultiCombo 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 MultiCombo 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `bringToFront()` | 부모가 동일한 컴포넌트 중 MultiCombo 이(가) 화면의 제일 앞에 표시되게 합니다. |
| `bringToPrev()` | 부모가 동일한 컴포넌트 중 MultiCombo 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `clearSelect()` | MultiCombo 컴포넌트에서 선택된 아이템의 선택상태를 모두 해제하는 메서드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 MultiCombo 을(를) 삭제하는 메소드입니다. |
| `dropdown()` | MultiCombo 컴포넌트의 아이템 리스트를 화면에 표시하는 메서드입니다. |
| `findEventHandler()` | MultiCombo 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getCaretPos()` | MultiCombo 컴포넌트의 편집영역에서 캐럿이 위치한 인덱스를 반환하는 메서드입니다. |
| `getCount()` | MultiCombo 컴포넌트에 표시되는 전체 아이템의 개수를 반환하는 메서드입니다. |
| `getEventHandler()` | MultiCombo 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getInnerDataset()` | MultiCombo 컴포넌트의 innerdataset 속성에 설정되어 있는 Dataset 오브젝트를 반환하는 메서드입니다. |
| `getOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetHeight()` | MultiCombo 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | MultiCombo 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getPixelBottom()` | MultiCombo 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelHeight()` | MultiCombo 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelLeft()` | MultiCombo 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelRight()` | MultiCombo 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelTop()` | MultiCombo 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelWidth()` | MultiCombo 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getSelect()` | MultiCombo 컴포넌트에서 인수로 전달된 인덱스의 아이템이 선택상태인지 반환하는 메서드입니다. |
| `getSelectedCount()` | MultiCombo 컴포넌트의 아이템 중 선택상태인 아이템의 개수를 반환하는 메서드입니다. |
| `getSelectedItems()` | MultiCombo 컴포넌트의 아이템 중 선택상태인 아이템의 인덱스를 배열로 반환하는 메서드입니다. |
| `getSelectedText()` | MultiCombo 컴포넌트의 편집영역에서 현재 선택된 텍스트를 반환하는 메서드입니다. |
| `init()` | 스크립트로 MultiCombo 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| `insertEventHandler()` | MultiCombo 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `isDropdown()` | MultiCombo 컴포넌트의 아이템 리스트가 화면에 표시되어 있는지 여부를 반환하는 메서드입니다. |
| `move()` | MultiCombo 의 위치와 크기를 변경하는 메소드입니다. |
| `moveToNext()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 MultiCombo 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `moveToPrev()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 MultiCombo 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `removeEvent()` | MultiCombo 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | MultiCombo 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | MultiCombo 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `resize()` | MultiCombo 의 크기를 변경하는 메소드입니다. |
| `sendToBack()` | 부모가 동일한 컴포넌트 중 MultiCombo 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| `sendToNext()` | 부모가 동일한 컴포넌트 중 MultiCombo 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `setEventHandler()` | MultiCombo 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | MultiCombo 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setFocus()` | MultiCombo 에 포커스를 주는 메소드입니다. |
| `setInnerDataset()` | MultiCombo 컴포넌트의 innerdataset 속성에 인수로 전달된 DataSet 오브젝트를 설정하는 메서드입니다. |
| `setOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetHeight()` | MultiCombo 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | MultiCombo 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| `setSelect()` | MultiCombo 컴포넌트에서 특정 아이템의 선택상태를 설정하는 메서드입니다. |
| `setSelectedText()` | MultiCombo 컴포넌트의 편집영역에서 현재 선택되어 있는 텍스트를 전달된 인수값으로 변경하는 메서드입니다. |
| `setSelectItems()` | MultiCombo 컴포넌트에서 여러 개의 아이템을 선택하는 메서드입니다. |
| `setSelectRange()` | MultiCombo 컴포넌트에서 지정된 인덱스 범위의 아이템 영역을 선택하는 메서드입니다. |
| `show()` | 스크립트로 동적 생성한 MultiCombo 을(를) 화면에 표시하는 메소드입니다. |
| `updateToDataset()` | MultiCombo 의 value 속성값을 바인딩 되어 있는 DataSet 에 즉시 반영시키는 메소드입니다. |

---

## addEvent

MultiCombo 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | MultiCombo 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- MultiCombo 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

MultiCombo 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 MultiCombo 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

부모가 동일한 컴포넌트 중 MultiCombo 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**
```javascript
MultiCombo.bringToFront()
```

**Sample**
```javascript
this.MultiCombo.bringToFront();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 MultiCombo 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.

---

## bringToPrev

부모가 동일한 컴포넌트 중 MultiCombo 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
MultiCombo.bringToPrev()
```

**Sample**
```javascript
this.MultiCombo.bringToPrev();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 MultiCombo 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## clearSelect

MultiCombo 컴포넌트에서 선택된 아이템의 선택상태를 모두 해제하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.clearSelect()
```

**Sample**
```javascript
this.MultiCombo00.clearSelect() ;
```

---

## destroy

스크립트에서 동적으로 생성한 MultiCombo 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.destroy()
```

**Sample**
```javascript
var bSucc = this.MultiCombo00.destroy();
```

**Return**: `Boolean` — MultiCombo 이(가) 정상적으로 삭제되면 true 를 반환합니다.  MultiCombo 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 MultiCombo 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: init, show, removeChild, addChild, insertChild

---

## dropdown

MultiCombo 컴포넌트의 아이템 리스트를 화면에 표시하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.dropdown()
```

**Sample**
```javascript
this.MultiCombo00.dropdown();
```

**Remark**
- MultiCombo 컴포넌트의 visible 속성값이 false 이거나 enable 속성값이 false 이면 메서드가 동작하지 않습니다.

- 화면에 아이템 리스트가 표시되어 있다면 메서드가 동작하지 않습니다.

- type 속성값이 "search" 또는 "filter" 일 때 검색 기능이 활성화된 상태에서 dropdown() 메서드를 실행하면
  자동으로 표시되어 있던 검색된 아이템 리스트가 닫히고, 전체 아이템이 있는 리스트가 화면에 표시됩니다.


◆ Mobile 제약

- Android 에서 입력패드가 표시되어 있을 때는 dropdown() 메서드가 곧바로 적용되지 않습니다.

---

## findEventHandler

MultiCombo 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.findEventHandler( strEventID, objFunc, objTarget )
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

## getCaretPos

MultiCombo 컴포넌트의 편집영역에서 캐럿이 위치한 인덱스를 반환하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.getCaretPos()
```

**Sample**
```javascript
var nCaretpos = this.MultiCombo00.getCaretPos();
```

**Return**: `Number` — 캐럿이 위치한 인덱스를 반환합니다. 읽기 전용 상태이거나 MultiCombo 컴포넌트에 포커스가 없으면 "-1"을 반환합니다.  첫 번째 위치의 인덱스는 0입니다.

**Remark**
- type 속성값이 "search" 또는 "filter"이고 편집영역에 캐럿이 표시되고 있어야 합니다.

---

## getCount

MultiCombo 컴포넌트에 표시되는 전체 아이템의 개수를 반환하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.getCount()
```

**Sample**
```javascript
var nCount = this.MultiCombo00.getCount();
```

**Return**: `Number` — MultiCombo 컴포넌트에 표시되는 전체 아이템의 개수를 반환합니다.

**Remark**
- innerdataset 속성에 설정된 Dataset 오브젝트가 필터링되어 있다면 필터링된 결과만 아이템 개수에 포함됩니다.

---

## getEventHandler

MultiCombo 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getInnerDataset

MultiCombo 컴포넌트의 innerdataset 속성에 설정되어 있는 Dataset 오브젝트를 반환하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.getInnerDataset()
```

**Sample**
```javascript
var objDataset = this.MultiCombo00.getInnerDataset();
```

**Return**: `Object` — innerdataset 속성에 설정되어 있는 Dataset 오브젝트를 반환합니다.

---

## getOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getOffsetBottom();
```

**Sample**
```javascript
var nBottom = this.MultiCombo.getOffsetBottom();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 bottom 값을 동적으로 계산합니다.

---

## getOffsetHeight

MultiCombo 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getOffsetHeight();
```

**Sample**
```javascript
var nHeight = this.MultiCombo.getOffsetHeight();
```

**Return**: `Number` — MultiCombo 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 MultiCombo 의 높이를 동적으로 계산합니다.

---

## getOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getOffsetLeft();
```

**Sample**
```javascript
var nleft = this.MultiCombo.getOffsetLeft();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 left 값을 동적으로 계산합니다.

---

## getOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getOffsetRight();
```

**Sample**
```javascript
var nRight = this.MultiCombo.getOffsetRight();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 right 값을 동적으로 계산합니다.

---

## getOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getOffsetTop();
```

**Sample**
```javascript
var nTop = this.MultiCombo.getOffsetTop();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 top 값을 동적으로 계산합니다.

---

## getOffsetWidth

MultiCombo 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getOffsetWidth();
```

**Sample**
```javascript
var nWidth = this.MultiCombo.getOffsetWidth();
```

**Return**: `Number` — MultiCombo 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 MultiCombo 의 너비를 동적으로 계산합니다.

---

## getPixelBottom

MultiCombo 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getPixelBottom();
```

**Sample**
```javascript
var nbottom = this.MultiCombo.getPixelBottom();
```

**Return**: `Number` — MultiCombo 의 bottom 속성값을 픽셀단위로 반환합니다.  bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelHeight

MultiCombo 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getPixelHeight();
```

**Sample**
```javascript
var nheight = this.MultiCombo.getPixelHeight();
```

**Return**: `Number` — MultiCombo 의 height 속성값을 픽셀단위로 반환합니다.  height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelLeft

MultiCombo 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getPixelLeft();
```

**Sample**
```javascript
var nleft = this.MultiCombo.getPixelLeft();
```

**Return**: `Number` — MultiCombo 의 left 속성값을 픽셀단위로 반환합니다.  left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelRight

MultiCombo 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getPixelRight();
```

**Sample**
```javascript
var nright = this.MultiCombo.getPixelRight();
```

**Return**: `Number` — MultiCombo 의 right 속성값을 픽셀단위로 반환합니다.  right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelTop

MultiCombo 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getPixelTop();
```

**Sample**
```javascript
var ntop = this.MultiCombo.getPixelTop();
```

**Return**: `Number` — MultiCombo 의 top 속성값을 픽셀단위로 반환합니다.  top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelWidth

MultiCombo 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.getPixelWidth();
```

**Sample**
```javascript
var nwidth = this.MultiCombo.getPixelWidth();
```

**Return**: `Number` — MultiCombo 의 width 속성값을 픽셀단위로 반환합니다.  width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getSelect

MultiCombo 컴포넌트에서 인수로 전달된 인덱스의 아이템이 선택상태인지 반환하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.getSelect( nIndex );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIndex` | Number | 선택상태를 확인하려는 아이템의 인덱스를 숫자로 설정합니다. 인덱스는 0부터 시작합니다. |

**Return**: `Boolean` — nIndex에 해당하는 아이템이 선택된 상태이면 true를 반환합니다. nIndex에 해당하는 아이템이 선택된 상태가 아니면 false를 반환합니다. 잘못된 nIndex 값을 설정하면 -1을 반환합니다.

---

## getSelectedCount

MultiCombo 컴포넌트의 아이템 중 선택상태인 아이템의 개수를 반환하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.getSelectedCount();
```

**Sample**
```javascript
var nCount = this.MultiCombo00.getSelectedCount();
```

**Return**: `Number` — 선택상태인 아이템의 전체 개수를 반환합니다.

---

## getSelectedItems

MultiCombo 컴포넌트의 아이템 중 선택상태인 아이템의 인덱스를 배열로 반환하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.getSelectedItems();
```

**Sample**
```javascript
var arrIdx = this.MultiCombo00.getSelectedItems();
```

**Return**: `Array` — 선택상태인 아이템의 인덱스를 배열로 반환합니다.

---

## getSelectedText

MultiCombo 컴포넌트의 편집영역에서 현재 선택된 텍스트를 반환하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.getSelectedText()
```

**Sample**
```javascript
var strText = this.MultiCombo00.getSelectedText();
```

**Return**: `String` — 편집영역에서 선택된 텍스트를 반환합니다. 선택된 텍스트가 없을 경우 빈값을 반환합니다.

**Remark**
- MultiCombo 컴포넌트의 편집영역이 포커스 되어 있어야 합니다.

---

## init

스크립트로 MultiCombo 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | MultiCombo 의 ID를 문자열로 설정합니다. |
| `vLeft` | String, Number | MultiCombo 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 MultiCombo 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 left 가 결정됩니다. |
| `vTop` | String, Number | MultiCombo 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 MultiCombo 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 top 이 결정됩니다. |
| `vWidth` | String, Number | MultiCombo 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiCombo 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 width 가 결정됩니다. |
| `vHeight` | String, Number | MultiCombo 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiCombo 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 height 가 결정됩니다. |
| `vRight` | String, Number | MultiCombo 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 MultiCombo 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 right 가 결정됩니다. |
| `vBottom` | String, Number | MultiCombo 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 MultiCombo 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 bottom 이 결정됩니다. |
| `vMinWidth` | String, Number | MultiCombo 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxWidth` | String, Number | MultiCombo 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.  vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| `vMinHeight` | String, Number | MultiCombo 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxHeight` | String, Number | MultiCombo 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.  vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 MultiCombo 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 MultiCombo 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 MultiCombo 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: destroy, show, removeChild, addChild, insertChild

---

## insertEventHandler

MultiCombo 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## isDropdown

MultiCombo 컴포넌트의 아이템 리스트가 화면에 표시되어 있는지 여부를 반환하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.isDropdown()
```

**Sample**
```javascript
var bVal = this.MultiCombo00.isDropdown();
```

**Return**: `Boolean` — 화면에 아이템 리스트가 표시되어 있으면 true를 반환합니다. 화면에 아이템 리스트가 표시되어 있지 않으면 false를 반환합니다.

**Remark**
- MultiCombo 컴포넌트의 검색기능에 의해 자동으로 아이템 리스트가 표시되어도 true를 반환합니다.

---

## move

MultiCombo 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vLeft` | String, Number | MultiCombo 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 MultiCombo 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 left 가 결정됩니다. |
| `vTop` | String, Number | MultiCombo 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 MultiCombo 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 top 이 결정됩니다. |
| `vWidth` | String, Number | MultiCombo 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiCombo 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 width 가 결정됩니다. |
| `vHeight` | String, Number | MultiCombo 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiCombo 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 height 가 결정됩니다. |
| `vRight` | String, Number | MultiCombo 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 MultiCombo 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 right 가 결정됩니다. |
| `vBottom` | String, Number | MultiCombo 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 MultiCombo 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 bottom 이 결정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 MultiCombo 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 MultiCombo 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 MultiCombo 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## moveToNext

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 MultiCombo 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
MultiCombo.moveToNext( objComp )
MultiCombo.moveToNext( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 MultiCombo 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 MultiCombo 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.

---

## moveToPrev

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 MultiCombo 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
MultiCombo.moveToPrev( objComp )
MultiCombo.moveToPrev( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 MultiCombo 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 MultiCombo 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.

---

## removeEvent

MultiCombo 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | MultiCombo 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- MultiCombo 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- MultiCombo 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

MultiCombo 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.removeEventHandler( strEventID, objFunc, objTarget )
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

MultiCombo 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

MultiCombo 의 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.resize( vWidth, vHeight )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vWidth` | String, Number | MultiCombo 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiCombo 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 width 가 결정됩니다. |
| `vHeight` | String, Number | MultiCombo 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiCombo 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 height 가 결정됩니다. |

**Remark**
- MultiCombo 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 MultiCombo 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- MultiCombo 의 left 속성값이 null 이면 resize() 메소드 실행 후 MultiCombo 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- MultiCombo 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 MultiCombo 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- MultiCombo 의 top 속성값이 null 이면 resize() 메소드 실행 후 MultiCombo 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 MultiCombo 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 MultiCombo 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 MultiCombo 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## sendToBack

부모가 동일한 컴포넌트 중 MultiCombo 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**
```javascript
MultiCombo.sendToBack()
```

**Sample**
```javascript
this.MultiCombo.sendToBack();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 MultiCombo 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다

---

## sendToNext

부모가 동일한 컴포넌트 중 MultiCombo 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
MultiCombo.sendToNext()
```

**Sample**
```javascript
this.MultiCombo.sendToNext();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 MultiCombo 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.

---

## setEventHandler

MultiCombo 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.setEventHandler( strEventID, objFunc, objTarget )
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

MultiCombo 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

MultiCombo 에 포커스를 주는 메소드입니다.

**Syntax**
```javascript
MultiCombo.setFocus( [bMoveScroll [, bInnerFocus]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bMoveScroll` | Boolean | 부모 컴포넌트에 스크롤이 있을 경우 MultiCombo 기준으로 스크롤을 이동할지 설정합니다.  true 설정 시 MultiCombo 이(가) 화면에 표시되도록 스크롤을 이동시킵니다. false 설정 시 MultiCombo 의 위치에 관계없이 스크롤을 이동시키지 않습니다.  값을 설정하지 않으면 true 로 동작합니다. |
| `bInnerFocus` | Boolean | MultiCombo 이(가) 컨테이너 컴포넌트 일 때 자식 컴포넌트에게 포커스를 이동할지 설정합니다.  true 설정 시 자식 컴포넌트 중 포커스를 받을 수 있는 첫번째 컴포넌트가 포커스 됩니다. false 설정 시 MultiCombo 에 포커스 됩니다.  MultiCombo 이(가) 컨테이너 컴포넌트 일 때 값을 설정하지 않으면 true 로 동작합니다. |

**Return**: `Object` — MultiCombo 이(가) 포커스되기 전에 포커스를 가졌던 컴포넌트를 반환합니다.  포커스를 가진 컴포넌트가 없었거나 메소드 수행이 실패하는 경우에는 null 을 반환합니다.

**Remark**
- setFocus() 메소드는 enableaccessibility 속성값에 관계없이 파라미터값을 기준으로 동작합니다.

- MultiCombo 이(가) 컨테이너 컴포넌트가 아니거나 자식 컴포넌트 중 포커스를 가질 수 있는 컴포넌트가
   존재하지 않을 경우에는 bInnerFocus 파라미터값에 관계없이 MultiCombo 에 포커스 됩니다.

---

## setInnerDataset

MultiCombo 컴포넌트의 innerdataset 속성에 인수로 전달된 DataSet 오브젝트를 설정하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.setInnerDataset( objDataset )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDataset` | Object | innerdataset 속성에 설정할 Dataset 오브젝트입니다. |

**Remark**
- innerdataset 속성에 Dataset 오브젝트 설정 후 codecolumn, datacolumn 속성을 설정하여야 MultiCombo 컴포넌트에 데이터가 정상 반영됩니다.

---

## setOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.setOffsetBottom( nBottom );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBottom` | Number | 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 bottom 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 MultiCombo 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiCombo 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiCombo 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiCombo 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetHeight

MultiCombo 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | MultiCombo 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 MultiCombo 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiCombo 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiCombo 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiCombo 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 left 값을 픽셀단위의 숫자로 설정합니다 |

**Remark**
- 메소드 실행 전 MultiCombo 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiCombo 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiCombo 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > MultiCombo 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.

---

## setOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.setOffsetRight( nRight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRight` | Number | 부모 컴포넌트의 Left 위치를 기준으로 MultiCombo 의 right 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 MultiCombo 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiCombo 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiCombo 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiCombo 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.setOffsetTop( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | 부모 컴포넌트의 Top 위치를 기준으로 MultiCombo 의 top 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 MultiCombo 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiCombo 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiCombo 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > MultiCombo 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.

---

## setOffsetWidth

MultiCombo 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | MultiCombo 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 MultiCombo 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiCombo 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiCombo 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiCombo 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setSelect

MultiCombo 컴포넌트에서 특정 아이템의 선택상태를 설정하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.setSelect( nIndex, bSelect );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIndex` | Number | 선택상태를 설정할 아이템의 인덱스를 숫자로 설정합니다. -1 설정 시 bSelect 값에 관계없이 전체 아이템의 선택상태를 해제합니다. |
| `bSelect` | Boolean | 아이템의 선택상태를 Boolean 값으로 설정합니다. true 설정 시 아이템이 선택상태로 설정됩니다. false 설정 시  아이템의 선택상태가 해제됩니다. |

---

## setSelectedText

MultiCombo 컴포넌트의 편집영역에서 현재 선택되어 있는 텍스트를 전달된 인수값으로 변경하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.setSelectedText( strText )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 편집영역에 선택되어 있는 텍스트를 대체할 문자열을 설정합니다. |

**Return**: `String` — 편집영역에 선택되어 있던 텍스트를 문자열로 반환합니다.

**Remark**
- type 속성값이 "search" 또는 "filter"이고 텍스트 편집이 가능한 상태여야 합니다.

- 편집영역에 선택된 텍스트가 없으면 setSelectedText() 메서드는 동작하지 않습니다.

---

## setSelectItems

MultiCombo 컴포넌트에서 여러 개의 아이템을 선택하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.setSelectItems(items,  bSelect);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `items` | Array | 선택상태를 설정할 아이템의 인덱스 배열을 설정합니다. |
| `bSelect` | Boolean | 아이템의 선택상태를 Boolean 값으로 설정합니다. true 설정 시 아이템이 선택상태로 설정됩니다. false 설정 시  아이템의 선택상태가 해제됩니다. |

---

## setSelectRange

MultiCombo 컴포넌트에서 지정된 인덱스 범위의 아이템 영역을 선택하는 메서드입니다.

**Syntax**
```javascript
MultiCombo.setSelectRange(startIndex, endIndex, bSelect);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `startIndex` | Number | 선택상태를 설정할 아이템의 시작 인덱스를 숫자로 설정합니다. |
| `endIndex` | Number | 선택상태를 설정할 아이템의 마지막 인덱스를 숫자로 설정합니다. |
| `bSelect` | Boolean | 아이템의 선택상태를 Boolean 값으로 설정합니다. true 설정 시 아이템이 선택상태로 설정됩니다. false 설정 시  아이템의 선택상태가 해제됩니다. |

---

## show

스크립트로 동적 생성한 MultiCombo 을(를) 화면에 표시하는 메소드입니다.

**Syntax**
```javascript
MultiCombo.show()
```

**Sample**
```javascript
this.MultiCombo00.show();
```

**Remark**
- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: destroy, init, removeChild, addChild, insertChild

---

## updateToDataset

MultiCombo 의 value 속성값을 바인딩 되어 있는 DataSet 에 즉시 반영시키는 메소드입니다.

**Syntax**
```javascript
MultiCombo.updateToDataset()
```

**Sample**
```javascript
var bSucc = this.MultiCombo00.updateToDataset();
```

**Return**: `Boolean` — 반영에 성공하면 "true"를 반환합니다.  반영에 실패하면 "false"를 반환합니다.

**Remark**
- MultiCombo 의 value 속성이 DataSet 에 바인딩 되어 있어야 합니다.

- MultiCombo 의 value 속성값이 바인딩 되어있는 Dataset 의 값과 같으면 Dataset 에 값이 반영되지 않고 "false"를 반환합니다.

---
