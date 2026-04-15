# ListView Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | ListView 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | ListView 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 ListView 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `bringToFront()` | 부모가 동일한 컴포넌트 중 ListView 이(가) 화면의 제일 앞에 표시되게 합니다. |
| `bringToPrev()` | 부모가 동일한 컴포넌트 중 ListView 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `clearSelect()` | ListView 에서 선택된 아이템의 선택상태를 해제하는 메소드입니다. |
| `createFormat()` | ListView 와 바인딩 된 DataSet 의 Column 정보를 기준으로 새로운 포맷을 생성하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 ListView 을(를) 삭제하는 메소드입니다. |
| `dropdown()` | ListView 컴포넌트의 Cell 편집상태에서 아이템 리스트를 표시하는 메서드입니다. |
| `dropdownCalendar()` | ListView 에서 edittype 속성값이 "date" 인 Cell 이 편집상태일 때 팝업달력을 표시하는 메소드입니다. |
| `dropdownCombo()` | ListView 에서 edittype 속성값이 "combo" 인 Cell 이 편집상태일 때 Combo 아이템 리스트를 표시하는 메소드입니다. |
| `findEventHandler()` | ListView 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getBandExpandStatus()` | ListView 에서 특정 아이템의 Detail 밴드 표시여부를 반환하는 메소드입니다. |
| `getBandProperty()` | 특정 밴드에서 지정된 속성의 값을 반환하는 메소드입니다. |
| `getBindCellId()` | DataSet 의 특정 Column 과 바인드된 Cell 의 ID 를 반환하는 메소드입니다. |
| `getBindDataset()` | ListView 의 binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환하는 메소드입니다. |
| `getCellCount()` | ListView 에서 특정 밴드에 정의된 Cell 의 갯수를 반환하는 메소드입니다. |
| `getCellProperty()` | Cell 의 특정 속성값을 반환하는 메소드입니다. |
| `getCellRect()` | 특정 Cell 의 위치영역 정보를 Rect 오브젝트로 반환하는 메소드입니다. |
| `getCellText()` | 특정 Cell 에 표시되는 텍스트값을 반환하는 메소드입니다. |
| `getCellValue()` | 특정 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다. |
| `getCurEditType()` | ListView 에서 선택된 Cell 의 edittype 속성값을 반환하는 메소드입니다. |
| `getCurFormatString()` | ListView 에 현재 표시되고 있는 포맷을 XML 형식의 문자열로 반환하는 메소드입니다. |
| `getDatasetRow()` | ListView 의 아이템 인덱스에 해당하는 DataSet 의 Row 인덱스를 반환하는 메소드입니다. |
| `getEditCaret()` | Cell 이 편집상태일 때 캐럿이 위치한 인덱스를 반환하는 메소드입니다. |
| `getEditingText()` | Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 text 값을 반환하는 메소드입니다. |
| `getEditingValue()` | Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 value 값을 반환하는 메소드입니다. |
| `getEditSelect()` | Cell 이 편집상태일 때 선택된 텍스트의 인덱스를 배열로 반환하는 메소드입니다. |
| `getEditSelectedText()` | Cell 이 편집상태일 때 선택된 텍스트를 반환하는 메소드입니다. |
| `getEditText()` | Cell 이 편집모드일 때 표시되는 컨트롤의 text 속성값을 반환하는 메소드입니다. |
| `getEditValue()` | Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성값을 반환하는 메소드입니다. |
| `getEventHandler()` | ListView 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getFormatIdList()` | Format id 배열값을 반환하는 메소드입니다. |
| `getFormatString()` | 디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환하는 메소드입니다. |
| `getOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetHeight()` | ListView 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | ListView 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getPixelBottom()` | ListView 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelHeight()` | ListView 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelLeft()` | ListView 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelRight()` | ListView 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelTop()` | ListView 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelWidth()` | ListView 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getSelectedRows()` | ListView 에 선택되어 있는 아이템의 인덱스를 배열로 반환하는 메소드입니다. |
| `getVScrollPos()` | ListViw 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| `hideDetailBand()` | ListView 에서 특정 아이템의 Detail 밴드를 숨기는 메소드입니다. |
| `init()` | 스크립트로 ListView 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| `insertEventHandler()` | ListView 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `isDropdown()` | ListView 컴포넌트에 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다. |
| `isDropdownCalendar()` | ListView 에 팝업달력이 표시되어 있는지 여부를 반환하는 메소드입니다. |
| `isDropdownCombo()` | ListView 에 Combo 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다. |
| `move()` | ListView 의 위치와 크기를 변경하는 메소드입니다. |
| `moveToNext()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 ListView 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `moveToNextCell()` | ListView 에서 Cell 포커스를 편집 가능한 다음 Cell 로 이동시키는 메소드입니다. |
| `moveToPrev()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 ListView 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `moveToPrevCell()` | ListView 에서 Cell 포커스를 편집 가능한 이전 Cell 로 이동시키는 메소드입니다. |
| `removeEvent()` | ListView 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | ListView 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | ListView 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `resize()` | ListView 의 크기를 변경하는 메소드입니다. |
| `selectRow()` | ListView 에서 인수로 전달된 위치의 아이템을 선택 또는 선택해제 하는 메소드입니다. |
| `sendToBack()` | 부모가 동일한 컴포넌트 중 ListView 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| `sendToNext()` | 부모가 동일한 컴포넌트 중 ListView 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `setBandProperty()` | 특정 밴드에서 지정된 속성의 값을 설정하는 메소드입니다. |
| `setBindDataset()` | ListView 의 binddataset 속성에 DataSet 오브젝트를 설정하는 메소드입니다. |
| `setCellPos()` | ListView 에서 현재 선택된 아이템에 속한 Cell 중 특정 Cell 에 포커스를 이동하는 메소드입니다. |
| `setCellProperty()` | ListView 에서 특정 Cell 의 속성값을 설정하는 메소드입니다. |
| `setEditingValue()` | Cell 이 편집모드일 때 표시되는 컨트롤 또는 서브컨트롤의 value 속성을 설정하는 메소드입니다. |
| `setEditSelect()` | Cell 이 편집상태일 때 편집기에 표시되는 텍스트를 인수로 전달된 영역만큼 선택하는 메소드입니다. |
| `setEditValue()` | Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성을 설정하는 메소드입니다. |
| `setEventHandler()` | ListView 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | ListView 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setFocus()` | ListView 에 포커스를 주는 메소드입니다. |
| `setFormat()` | ListView 에 표시 할 포맷의 ID 를 설정하는 메소드입니다. |
| `setOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetHeight()` | ListView 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | ListView 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| `show()` | 스크립트로 동적 생성한 ListView 을(를) 화면에 표시하는 메소드입니다. |
| `showDetailBand()` | ListView 에서 특정 아이템의 Detail 밴드를 표시하는 메소드입니다. |
| `showEditor()` | 현재 선택된 Cell 이 편집 가능할 경우 편집모드용 컨트롤을 표시하거나 숨기는 메소드입니다. |

---

## addEvent

ListView 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
ListView.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | ListView 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- ListView 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

ListView 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
ListView.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 ListView 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
ListView.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

부모가 동일한 컴포넌트 중 ListView 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**
```javascript
ListView.bringToFront()
```

**Sample**
```javascript
this.ListView.bringToFront();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 ListView 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.

---

## bringToPrev

부모가 동일한 컴포넌트 중 ListView 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
ListView.bringToPrev()
```

**Sample**
```javascript
this.ListView.bringToPrev();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 ListView 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
ListView.clearEventHandler( strEventID )
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

ListView 에서 선택된 아이템의 선택상태를 해제하는 메소드입니다.

**Syntax**
```javascript
ListView.clearSelect()
```

**Sample**
```javascript
this.ListView00.clearSelect()
```

**Remark**
- 아이템은 Body 밴드와 Detail 밴드를 포함하는 영역입니다.

---

## createFormat

ListView 와 바인딩 된 DataSet 의 Column 정보를 기준으로 새로운 포맷을 생성하는 메소드입니다.

**Syntax**
```javascript
ListView.createFormat()
```

**Sample**
```javascript
this.ListView00.createFormat();
```

**Remark**
- createFomat() 메소드를 실행하여 생성된 포맷은 ListView 에 즉시 표시됩니다.
   ListView 의 현재 포맷정보를 확인하려면 getCurFormatString() 메소드나 formats 속성을 사용하여야 합니다.

- 포맷은 ListView 에 표시되는 형식으로 Body, Detail 로 구성됩니다.
   넥사크로 스튜디오에서 ListView Contents Editor 를 사용하여 한개 이상의 포맷을 설정할 수 있습니다.

---

## destroy

스크립트에서 동적으로 생성한 ListView 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
ListView.destroy()
```

**Sample**
```javascript
var bSucc = this.ListView00.destroy();
```

**Return**: `Boolean` — ListView 이(가) 정상적으로 삭제되면 true 를 반환합니다.  ListView 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 ListView 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: show, init, insertChild, addChild, removeChild

---

## dropdown

ListView 컴포넌트의 Cell 편집상태에서 아이템 리스트를 표시하는 메서드입니다.

**Syntax**
```javascript
ListView.dropdown()
```

**Sample**
```javascript
var bSucc = this.ListView00.dropdown();
```

**Return**: `Boolean` — 아이템 리스트가 정상적으로 표시되면 true를 반환합니다. 아이템 리스트가 정상적으로 표시되지 않으면 false를 반환합니다.

**Remark**
- Cell edittype 속성값을 "combo", "date", "multicombo"처럼 아이템 리스트를 가지는 형태로 설정한 경우 지원하는 메서드입니다.
  
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor 메서드를 사용하여 편집상태로 전환해야 합니다.

---

## dropdownCalendar

ListView 에서 edittype 속성값이 "date" 인 Cell 이 편집상태일 때 팝업달력을 표시하는 메소드입니다.

**Syntax**
```javascript
ListView.dropdownCalendar()
```

**Sample**
```javascript
var bSucc = this.ListView00.dropdownCalendar();
```

**Return**: `Boolean` — 팝업달력이 정상적으로 표시되면 true 를 반환합니다.  팝업달력이 정상적으로 표시되지 않으면 false 를 반환합니다.

**Remark**
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor() 메소드를 사용하여 편집상태로 전환해야 합니다.


◆ Mobile 제약

- 모바일 환경에서 cellcalendarpopuptype 또는 calendarpopuptype 속성값이 "system" 일 때는 dropdownCalendar() 메소드가 실행되지 않습니다.

- Android 에서 입력패드가 표시될 때는 포커스가 입력패드로 이동되면서 dropdownCalendar() 메소드가 실행되지 않는 것처럼 보일 수 있습니다.

---

## dropdownCombo

ListView 에서 edittype 속성값이 "combo" 인 Cell 이 편집상태일 때 Combo 아이템 리스트를 표시하는 메소드입니다.

**Syntax**
```javascript
ListView.dropdownCombo()
```

**Sample**
```javascript
var bSucc = this.ListView00.dropdownCombo();
```

**Return**: `Boolean` — Combo 아이템 리스트가 정상적으로 표시되면 true 를 반환합니다.  Combo 아이템 리스트가 정상적으로 표시되지 않으면 false 를 반환합니다.

**Remark**
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor() 메소드를 사용하여 편집상태로 전환해야 합니다.

---

## findEventHandler

ListView 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.findEventHandler( strEventID, objFunc, objTarget )
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

## getBandExpandStatus

ListView 에서 특정 아이템의 Detail 밴드 표시여부를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getBandExpandStatus( nRow )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | Detail 밴드의 표시여부를 확인하려는 아이템의 인덱스를 숫자로 설정합니다. |

**Return**: `Boolean` — 특정 아이템의 Detail 밴드가 표시되어 있으면 true 를 반환합니다. 특정 아이템의 Detail 밴드가 표시되어 있지 않으면 false 를 반환합니다.  Detail 밴드가 존재하지 않거나 nRow 파라미터를 잘 못 설정한 경우 false 를 반환합니다.

**Remark**
- bandexpandtype 속성값에 관계없이 Detail 밴드의 표시여부를 반환합니다.

---

## getBandProperty

특정 밴드에서 지정된 속성의 값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getBandProperty( enumBand, strPropID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 속성값을 가져올 밴드를 문자열로 설정합니다.  "body" 설정 시 Body 밴드에서 속성값을 반환합니다. "detail" 설정 시 Detail 밴드에서 속성값을 반환합니다. |
| `strPropID` | String | 값을 가져올 속성의 속성명을 문자열로 설정합니다. |

**Return**: `String` — 특정 밴드에서 지정된 속성의 값을 반환합니다.

**Remark**
- Style 관련 속성은 스크립트나 넥사크로 스튜디오에서 속성에 직접 설정한 값만 반환됩니다.
   테마에 정의된 값이 적용된 Style 속성의 값은 반환되지 않습니다.

---

## getBindCellId

DataSet 의 특정 Column 과 바인드된 Cell 의 ID 를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getBindCellId( enumBand, strColID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 ListView 포맷에서 특정 Column 과 바인드 된 Cell 을 검색할 밴드 영역을 문자열로 설정합니다.  "body" 설정 시 Body 밴드 영역에서 Cell 을 검색합니다. "detail" 설정 시 Detail 밴드 영역에서 Cell 을 검색합니다. |
| `strColID` | String | DataSet 의 Column ID 를 문자열로 설정합니다. |

**Return**: `String` — ID 가 strColID 인 Column 과 바인드 된 첫번째 Cell 의 ID 를 반환합니다.  ID 가 strColID 인 Column 과 바인드 된 Cell 이 없다면 빈문자열(Empty String) 을 반환합니다.

**Remark**
- Cell 의 text 속성에 바인드된 Column ID 가 strColID 값과 같은 Cell 을 enumBand 값에 해당하는 영역에서 검색합니다.
   Cell 의 text 속성에 바인드된 Column ID 가 strColID 값과 같은 Cell 이 여러개 있을 경우 첫번째 Cell 의 ID 를 반환합니다.

---

## getBindDataset

ListView 의 binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getBindDataset()
```

**Sample**
```javascript
this.ListView00.getBindDataset()
```

**Return**: `Object` — binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환합니다.

---

## getCellCount

ListView 에서 특정 밴드에 정의된 Cell 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getCellCount( enumBand )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 ListView 포맷에 정의된 Cell 의 갯수를 구할 밴드를 문자열로 설정합니다.  "body" 설정 시 Body 밴드 영역에 정의된 Cell 의 갯수를 구합니다. "detail" 설정 시 Detail 밴드 영역에 정의된 Cell 의 갯수를 구합니다. |

**Return**: `Number` — enumBand 에 설정한 밴드 영역에 정의된 Cell 의 갯수를 반환합니다.

**Remark**
- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.

---

## getCellProperty

Cell 의 특정 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getCellProperty( enumBand, strCellID, strPropID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 속성값을 가져올 Cell 이 속한 밴드를 문자열로 설정합니다.  "body" 설정 시 Body 밴드의 Cell 에서 속성값을 반환합니다. "detail" 설정 시 Detail 밴드의 Cell 에서 속성값을 반환합니다. |
| `strCellID` | String | 속성값을 가져올 Cell 의 ID 를 문자열로 설정합니다. |
| `strPropID` | String | 값을 가져올 속성명을 문자열로 설정합니다. |

**Return**: `String` — 특정 Cell 의 특정 속성값을 반환합니다.

**Remark**
- Style 관련 속성은 스크립트나 넥사크로 스튜디오에서 속성에 직접 설정한 값만 반환됩니다.
   테마에 정의된 값이 적용된 Style 속성의 값은 반환되지 않습니다.

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.

---

## getCellRect

특정 Cell 의 위치영역 정보를 Rect 오브젝트로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getCellRect( nRow, strBandID, strCellID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 영역 정보를 얻을 Cell 이 위치한 아이템의 인덱스를 설정합니다. |
| `strBandID` | String | 영역 정보를 얻을 Cell 이 위치한 밴드를 문자열로 설정합니다.  "body" 설정 시 Body 밴드로 적용됩니다. "detail" 설정 시 Detail 밴드로 적용됩니다. |
| `strCellID` | String | 영역 정보를 얻을 Cell 의 ID 를 설정합니다. |

**Return**: `Object` — 인수로 전달된 Cell 의 위치영역 정보를 갖는 Rect 오브젝트를 반환합니다. 잘못된 Cell 지정 시 모든 속성값이 "0" 인 Rect 오브젝트를 반환합니다.  Rect 오브젝트는 "left", "top", "right", "bottom", "width", "height" 속성을 갖습니다. Cell 영역의 정보는 Rect 오브젝트의 각 속성에 저장됩니다.

**Remark**
- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.

---

## getCellText

특정 Cell 에 표시되는 텍스트값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getCellText( nRow, strBandID, strCellID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 텍스트값을 얻을 Cell 이 위치한 아이템의 인덱스를 설정합니다. |
| `strBandID` | String | 텍스트값을 얻을 Cell 이 위치한 밴드를 문자열로 설정합니다.  "body" 설정 시 Body 밴드로 적용됩니다. "detail" 설정 시 Detail 밴드로 적용됩니다. |
| `strCellID` | String | 텍스트값을 얻을 Cell 의 ID 를 문자열로 설정합니다. |

**Return**: `String` — 인수로 전달된 Cell 에 표시되는 텍스트값을 반환합니다.

**Remark**
- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.

- expr 과 같은 속성에 의해 실제값과 화면에 표시되는 값이 다를 수 있습니다.
   getCellText() 메소드는 화면에 표시되는 값을 반환합니다.
   실제 데이터값을 확인하려면 getCellValue() 메소드를 사용하여야 합니다.

---

## getCellValue

특정 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getCellValue( nRow, strBandID, strCellID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | text 속성값을 얻을 Cell 이 위치한 아이템의 인덱스를 설정합니다. |
| `strCellID` | String | text 속성값을 얻을 Cell 의 ID 를 문자열로 설정합니다. |
| `strBandID` | String | text 속성값을 얻을 Cell 이 위치한 밴드를 문자열로 설정합니다.  "body" 설정 시 Body 밴드로 적용됩니다. "detail" 설정 시 Detail 밴드로 적용됩니다. |

**Return**: `String` — Cell 의 text 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다. Cell 의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다. Cell 의 text 속성이 EXPR 형식으로 설정되어 있다면 EXPR 이 적용된 값을 반환합니다.

**Remark**
- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.

- expr 과 같은 속성에 의해 실제값과 화면에 표시되는 값이 다를 수 있습니다.
   getCellValue() 메소드는 실제 text 속성값을 반환합니다.
   화면에 표시되는 값을 확인하려면 getCellText() 메소드를 사용하여야 합니다.

---

## getCurEditType

ListView 에서 선택된 Cell 의 edittype 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getCurEditType()
```

**Sample**
```javascript
var strEditType = this.ListView00.getCurEditType();
```

**Return**: `String` — 현재 선택된 Cell 의 editytype 속성값을 반환합니다.

---

## getCurFormatString

ListView 에 현재 표시되고 있는 포맷을 XML 형식의 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getCurFormatString( [bOrginal] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bOrginal` | Boolean | 동적으로 변경된 포맷을 반영하여 반환할 지 여부를 설정합니다.  true 설정 시 동적으로 변경된 포맷은 무시하고, 디자인 시 설정한 포맷을 반환합니다. false 설정 시 동적으로 변경된 포맷을 반영하여 반환합니다.  값을 설정하지 않으면 false 로 적용됩니다. |

**Return**: `String` — 현재 ListView 에 표시되고 있는 포맷을 XML 형식의 문자열로 반환합니다.  기본적인 XML 형식은 아래와 같으며 Body, Detail 정의는 포맷에 따라 없을 수 있습니다.  <Format id="default">   <Band id="body">...</Band>   <Band id="detail">..</Band> </Format>

**Remark**
- ListView 에 여러개의 포맷이 정의되어 있는 경우 현재 화면에 표시되는 포맷을 반환합니다.

- ListView 에 정의된 전체 포맷을 확인하려면 getFormatString() 메소드를 사용하여야 합니다.

**See Also**: getFormatString

---

## getDatasetRow

ListView 의 아이템 인덱스에 해당하는 DataSet 의 Row 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getDatasetRow( nRowIndex )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | ListView 의 아이템 인덱스를 숫자로 설정합니다. |

**Return**: `Number` — ListView 의 아이템 인덱스에 해당하는 DataSet 의 Row 인덱스값을 반환합니다.  정상적으로 값을 구할 수 없을 경우는 -1 을 반환합니다.

---

## getEditCaret

Cell 이 편집상태일 때 캐럿이 위치한 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getEditCaret()
```

**Sample**
```javascript
var nCaretPos = this.ListView00.getEditCaret();
```

**Return**: `Number` — 인덱스는 0 부터 시작하며 캐럿이 위치한 인덱스를 반환합니다.  Cell 이 편집상태가 아니면 -1 을 반환합니다.

**Remark**
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.

---

## getEditingText

Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 text 값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getEditingText()
```

**Sample**
```javascript
var strInputText = this.ListView00.getEditingText();
```

**Return**: `String` — Cell 에 표시된 편집모드용 컨트롤에 입력중인 text 값을 문자열로 반환합니다.  Cell 의 edittype 속성값이 "checkbox" 이면 undefined 를 반환합니다. Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자가 포함된 입력중인 값을 반환합니다.

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 text 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 text 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   getEdiingText() 메소드는 하위컨트롤인 comboedit, calendaredit 의 text 속성값을 반환하므로 입력중인 값이 반환됩니다.

- Cell 의 edittype 속성값이 "date", "mask" 이면 getEditingValue() 메소드와 getEditingText() 메소드의 반환값이 달라질 수 있습니다.

---

## getEditingValue

Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 value 값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getEditingValue()
```

**Sample**
```javascript
var strInputValue = this.ListView00.getEditingValue();
```

**Return**: `String` — Cell 에 표시된 편집모드용 컨트롤에 입력중인 value 값을 문자열로 반환합니다.  Cell 의 edittype 속성값이 "button", "checkbox" 이면 undefined 를 반환합니다. Cell 의 edittype 속성값이 "date" 이면 마스크 문자가 제외된 입력중인 원본값을 날짜형식에 맞게 보정하여 반환합니다. Cell 의 edittype 속성값이 "mask" 이면 마스크 문자가 제외된 입력중인 원본값만 반환합니다.

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   getEditngValue() 메소드는 하위컨트롤인 comboedit, calendaredit 의 value 속성값을 반환하므로 입력중인 값이 반환됩니다.

- Cell 의 edittype 속성값이 "date", "mask" 이면 getEditingValue() 메소드와 getEditingText() 메소드의 반환값이 달라질 수 있습니다.

---

## getEditSelect

Cell 이 편집상태일 때 선택된 텍스트의 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getEditSelect()
```

**Sample**
```javascript
var varArrSelect = this.ListView00.getEditSelect();
```

**Return**: `Array` — 선택된 텍스트의 시작 인덱스와 끝 인덱스를 각각 배열의 0번, 1번 원소로 반환합니다. 선택된 텍스트가 없는 경우 현재 캐럿 위치를 배열의 0번, 1번 원소로 반환합니다.  인덱스는 0 부터 시작합니다

**Remark**
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.

---

## getEditSelectedText

Cell 이 편집상태일 때 선택된 텍스트를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getEditSelectedText()
```

**Sample**
```javascript
var strText = this.ListView00.getEditSelectedText();
```

**Return**: `String` — 선택된 텍스트를 반환합니다.  선택된 텍스트가 없을 경우 빈문자열(Empty String)을 반환합니다.

**Remark**
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.

- 한글과 같이 다국어 문자의 경우 조합중인 문자는 선택된 상태가 아니므로 선택문자로 처리하지 않습니다.

---

## getEditText

Cell 이 편집모드일 때 표시되는 컨트롤의 text 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getEditText()
```

**Sample**
```javascript
var strText = this.ListView00.getEditText();
```

**Return**: `String` — Cell 에 표시된 편집모드용 컨트롤의 text 속성값을 문자열로 반환합니다.  ListView 의 edittype 속성값이 "checkbox" 인 경우 undefined 를 반환합니다. ListView 의 edittype 속성값이 "combo", "date" 인 경우 컨트롤에 입력중인 값이 아닌 원본 text 속성값을 반환합니다.

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 text 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 text 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   따라서, Cell 의 edittype 속성값이 "combo", "date" 일 때 getEditText() 메소드는 입력중인 값을 반환하지 않습니다.

- Cell 의 edittype 속성값이 "combo", "date" 일 때 컨트롤에 입력중인 text 값을 반환 받으려면 getEditingText() 메소드를 사용하여야 합니다.

- Cell 의 edittype 속성값이 "combo", "date", "mask" 이면 getEditValue() 메소드와 getEditText() 메소드의 반환값이 달라질 수 있습니다.

---

## getEditValue

Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getEditValue()
```

**Sample**
```javascript
var strValue = this.ListView00.getEditValue();
```

**Return**: `String` — Cell 에 표시된 편집모드용 컨트롤의 value 속성값을 문자열로 반환합니다.  Cell 의 edittype 속성값이 "button", "checkbox" 이면 undefined 를 반환합니다. Cell 의 edittype 속성값이 "combo", "date" 이면 컨트롤에 입력중인 값이 아닌 원본 value 속성값을 반환합니다.

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   따라서, Cell 의 edittype 속성값이 "combo", "date" 일 때 getEditVaue() 메소드는 입력중인 값을 반환하지 않습니다.

- Cell 의 edittype 속성값이 "combo", "date" 일 때 컨트롤에 입력중인 value 값을 반환 받으려면 getEditingValue() 메소드를 사용하여야 합니다.

- Cell 의 edittype 속성값이 "combo", "date", "mask" 이면 getEditValue() 메소드와 getEditText() 메소드의 반환값이 달라질 수 있습니다.

---

## getEventHandler

ListView 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getFormatIdList

Format id 배열값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getFormatIdList();
```

**Sample**
```javascript
var arrFormatIdList = this.ListView00.getFormatIdList();
```

**Return**: `Object` — Format id 목록을 배열로 반환합니다. 값이 없는 경우에는 빈 배열을 반환합니다.

---

## getFormatString

디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getFormatString()
```

**Sample**
```javascript
var strContents = this.ListView00.getFormatString();
```

**Return**: `String` — 디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환합니다. 동적으로 변경된 포맷값은 반영되지 않습니다.  기본적인 XML 형식은 아래와 같으며 Body, Detail 정의는 포맷에 따라 없을 수 있습니다.  <Formats>   <Format id="default">     <Band id="body">...</Band>     <Band id="detail">..</Band>   </Format>   <Format id="format00">     <Band id="body">...</Band>     <Band id="detail">..</Band>   </Format> </Formats>

**Remark**
- ListView 에 현재 표시되고 있는 포맷을 확인하려면 getCurFormatString() 메소드를 사용하여야 합니다.

---

## getOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getOffsetBottom();
```

**Sample**
```javascript
var nBottom = this.ListView.getOffsetBottom();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 동적으로 계산합니다.

---

## getOffsetHeight

ListView 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getOffsetHeight();
```

**Sample**
```javascript
var nHeight = this.ListView.getOffsetHeight();
```

**Return**: `Number` — ListView 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 ListView 의 높이를 동적으로 계산합니다.

---

## getOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getOffsetLeft();
```

**Sample**
```javascript
var nleft = this.ListView.getOffsetLeft();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 동적으로 계산합니다.

---

## getOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getOffsetRight();
```

**Sample**
```javascript
var nRight = this.ListView.getOffsetRight();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 동적으로 계산합니다.

---

## getOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getOffsetTop();
```

**Sample**
```javascript
var nTop = this.ListView.getOffsetTop();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 동적으로 계산합니다.

---

## getOffsetWidth

ListView 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getOffsetWidth();
```

**Sample**
```javascript
var nWidth = this.ListView.getOffsetWidth();
```

**Return**: `Number` — ListView 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 ListView 의 너비를 동적으로 계산합니다.

---

## getPixelBottom

ListView 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getPixelBottom();
```

**Sample**
```javascript
var nbottom = this.ListView.getPixelBottom();
```

**Return**: `Number` — ListView 의 bottom 속성값을 픽셀단위로 반환합니다.  bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelHeight

ListView 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getPixelHeight();
```

**Sample**
```javascript
var nheight = this.ListView.getPixelHeight();
```

**Return**: `Number` — ListView 의 height 속성값을 픽셀단위로 반환합니다.  height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelLeft

ListView 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getPixelLeft();
```

**Sample**
```javascript
var nleft = this.ListView.getPixelLeft();
```

**Return**: `Number` — ListView 의 left 속성값을 픽셀단위로 반환합니다.  left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelRight

ListView 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getPixelRight();
```

**Sample**
```javascript
var nright = this.ListView.getPixelRight();
```

**Return**: `Number` — ListView 의 right 속성값을 픽셀단위로 반환합니다.  right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelTop

ListView 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getPixelTop();
```

**Sample**
```javascript
var ntop = this.ListView.getPixelTop();
```

**Return**: `Number` — ListView 의 top 속성값을 픽셀단위로 반환합니다.  top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelWidth

ListView 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getPixelWidth();
```

**Sample**
```javascript
var nwidth = this.ListView.getPixelWidth();
```

**Return**: `Number` — ListView 의 width 속성값을 픽셀단위로 반환합니다.  width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getSelectedRows

ListView 에 선택되어 있는 아이템의 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getSelectedRows()
```

**Sample**
```javascript
var arrRowidx = this.ListView00.getSelectedRows()
```

**Return**: `Array` — ListView 에 선택되어 있는 아이템의 인덱스를 배열로 반환합니다.  선택된 아이템이 없을 경우 빈 배열을 반환합니다.

---

## getVScrollPos

ListViw 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.getVScrollPos()
```

**Sample**
```javascript
var nScrollPos = this.ListView00.getVScrollPos();
```

**Return**: `Number` — 수직스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**
- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

---

## hideDetailBand

ListView 에서 특정 아이템의 Detail 밴드를 숨기는 메소드입니다.

**Syntax**
```javascript
ListView.hideDetailBand( nRow )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | Detail 밴드를 숨기려는 아이템의 인덱스를 설정합니다. |

**Remark**
- bandexpandtype 속성값 "none" 인 경우 Detail 밴드를 숨길 수 없습니다.

---

## init

스크립트로 ListView 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
ListView.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | ListView 의 ID를 문자열로 설정합니다. |
| `vLeft` | String, Number | ListView 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 ListView 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 left 가 결정됩니다. |
| `vTop` | String, Number | ListView 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 ListView 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 top 이 결정됩니다. |
| `vWidth` | String, Number | ListView 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListView 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 width 가 결정됩니다. |
| `vHeight` | String, Number | ListView 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListView 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 height 가 결정됩니다. |
| `vRight` | String, Number | ListView 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 ListView 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 right 가 결정됩니다. |
| `vBottom` | String, Number | ListView 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 ListView 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 bottom 이 결정됩니다. |
| `vMinWidth` | String, Number | ListView 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxWidth` | String, Number | ListView 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.  vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| `vMinHeight` | String, Number | ListView 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxHeight` | String, Number | ListView 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.  vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 ListView 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 ListView 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: show, destroy, insertChild, addChild, removeChild

---

## insertEventHandler

ListView 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
ListView.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

ListView 컴포넌트에 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.isDropdown()
```

**Sample**
```javascript
var bRtn = this.ListView00.isDropdown()
```

**Return**: `Boolean` — ListView 컴포넌트에 아이템 리스트가 표시되어 있으면 true를 반환합니다. ListView 컴포넌트에 아이템 리스트가 표시되어 있지 않으면 false를 반환합니다.

**Remark**
- Cell edittype 속성값을 "combo", "date", "multicombo"처럼 아이템 리스트를 가지는 형태로 설정한 경우 지원하는 메서드입니다.

---

## isDropdownCalendar

ListView 에 팝업달력이 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.isDropdownCalendar()
```

**Sample**
```javascript
var bRtn = this.ListView00.isDropdownCalendar()
```

**Return**: `Boolean` — ListView 에 팝업달력이 표시되어 있으면 true 를 반환합니다.  ListView 에 팝업달력이 표시되어 있지 않으면 false 를 반환합니다.

---

## isDropdownCombo

ListView 에 Combo 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
ListView.isDropdownCombo()
```

**Sample**
```javascript
var bRtn = this.ListView00.isDropdownCombo()
```

**Return**: `Boolean` — ListView 에 Combo 아이템 리스트가 표시되어 있으면 true 를 반환합니다.  ListView 에 Combo 아이템 리스트가 표시되어 있지 않으면 false 를 반환합니다.

---

## move

ListView 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
ListView.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vLeft` | String, Number | ListView 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 ListView 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 left 가 결정됩니다. |
| `vTop` | String, Number | ListView 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 ListView 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 top 이 결정됩니다. |
| `vWidth` | String, Number | ListView 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListView 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 width 가 결정됩니다. |
| `vHeight` | String, Number | ListView 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListView 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 height 가 결정됩니다. |
| `vRight` | String, Number | ListView 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 ListView 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 right 가 결정됩니다. |
| `vBottom` | String, Number | ListView 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 ListView 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 bottom 이 결정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 ListView 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 ListView 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## moveToNext

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 ListView 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
ListView.moveToNext( objComp )
ListView.moveToNext( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 ListView 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 ListView 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.

---

## moveToNextCell

ListView 에서 Cell 포커스를 편집 가능한 다음 Cell 로 이동시키는 메소드입니다.

**Syntax**
```javascript
ListView.moveToNextCell()
```

**Sample**
```javascript
var bSuccess = this.ListView00.moveToNextCell();
```

**Return**: `Boolean` — Cell 포커스 이동에 성공하면 true 를 반환합니다.  Cell 포커스 이동에 실패하면 false 를 반환합니다.

**Remark**
- Cell 의 taborder 속성값 순서대로 포커스가 이동합니다.

- Cell 에 포커스가 이동했을 때 autoenter 속성값에 따라 편집모드용 컨트롤이 표시될 수 있습니다.

- 현재 포커스 된 Cell 이 밴드에서 편집 가능한 마지막 Cell 일 경우 다음 밴드 또는 아이템으로 포커스가 이동합니다.
   다음 아이템의 편집 가능한 Cell 로 포커스가 이동하면 DataSet 의 rowposition 속성값도 변경됩니다.

- 현재 포커스 된 Cell 이 마지막 아이템의 마지막 편집 가능한 Cell 일 경우 첫 번째 아이템으로 포커스가 이동하지 않습니다.

- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.

---

## moveToPrev

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 ListView 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
ListView.moveToPrev( objComp )
ListView.moveToPrev( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 ListView 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 ListView 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.

---

## moveToPrevCell

ListView 에서 Cell 포커스를 편집 가능한 이전 Cell 로 이동시키는 메소드입니다.

**Sample**
```javascript
var bSuccess = this.ListView00.moveToPrevCell();
```

**Return**: `Boolean` — Cell 포커스 이동에 성공하면 true 를 반환합니다.  Cell 포커스 이동에 실패하면 false 를 반환합니다.

**Remark**
- Cell 의 taborder 속성값 역순으로 포커스가 이동합니다.

- Cell 에 포커스가 이동했을 때 autoenter 속성값에 따라 편집모드용 컨트롤이 표시될 수 있습니다.

- 현재 포커스 된 Cell 이 밴드에서 편집 가능한 첫번째 Cell 일 경우 이전 밴드 또는 아이템으로 포커스가 이동합니다.
   이전 아이템의 편집 가능한 Cell 로 포커스가 이동하면 DataSet 의 rowposition 속성값도 변경됩니다.

- 현재 포커스 된 Cell 이 첫번째 아이템의 첫번째 편집 가능한 Cell 일 경우 마지막 아이템으로 포커스가 이동하지 않습니다.

- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.

---

## removeEvent

ListView 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
ListView.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | ListView 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- ListView 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- ListView 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

ListView 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
ListView.removeEventHandler( strEventID, objFunc, objTarget )
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

ListView 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
ListView.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

ListView 의 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
ListView.resize( vWidth, vHeight )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vWidth` | String, Number | ListView 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListView 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 width 가 결정됩니다. |
| `vHeight` | String, Number | ListView 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListView 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 height 가 결정됩니다. |

**Remark**
- ListView 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 ListView 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- ListView 의 left 속성값이 null 이면 resize() 메소드 실행 후 ListView 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- ListView 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 ListView 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- ListView 의 top 속성값이 null 이면 resize() 메소드 실행 후 ListView 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 ListView 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 ListView 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## selectRow

ListView 에서 인수로 전달된 위치의 아이템을 선택 또는 선택해제 하는 메소드입니다.

**Syntax**
```javascript
ListView.selectRow( nRowIdx [,bSelect] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | 선택상태를 변경 할 ListView 아이템의 인덱스를 숫자로 설정합니다.  전체 아이템 갯수보다 큰값 또는 음수를 설정할 경우 선택이 모두 해제됩니다. |
| `bSelect` | Boolean | true 설정 시 아이템의 선택상태와 관계없이 아이템을 선택 합니다. false 설정 시 아이템의 선택상태와 관계없이 아이템을 선택해제 합니다.  값 생략 시 true 로 적용됩니다. |

**Return**: `Boolean` — 아이템의 선택상태가 메소드 실행 전과 반대 상태로 변경되면 true 를 반환합니다.  아이템의 선택상태가 메소드 실행 전과 동일하면 false 를 반환합니다.

**Remark**
- 메소드 실행 결과로 다른 아이템이 선택되면 기존에 선택되어 있던 아이템은 선택해제 됩니다.

---

## sendToBack

부모가 동일한 컴포넌트 중 ListView 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**
```javascript
ListView.sendToBack()
```

**Sample**
```javascript
this.ListView.sendToBack();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 ListView 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다

---

## sendToNext

부모가 동일한 컴포넌트 중 ListView 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
ListView.sendToNext()
```

**Sample**
```javascript
this.ListView.sendToNext();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 ListView 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.

---

## setBandProperty

특정 밴드에서 지정된 속성의 값을 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setBandProperty( enumBand, strPropID, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 속성값을 설정하려는 밴드를 문자열로 설정합니다.  "body" 설정 시 Body 밴드의 속성값을 설정합니다. "detail" 설정 시 Detail 밴드의 속성값을 설정합니다. |
| `strPropID` | String | 값을 설정하려는 속성명을 문자열로 설정합니다. |
| `varValue` | String | strProgID 로 지정한 속성에 설정할 속성값을 설정합니다. |

**Return**: `Boolean` — 지정한 밴드의 속성값 설정에 성공하면 "true" 를 반환합니다.  지정한 밴드의 속성값 설정에 실패하면 "false" 를 반환합니다.

**Remark**
- setBandProperty() 메소드가 정상적으로 수행되면 ListView 에 변경내용이 즉시 반영됩니다.

---

## setBindDataset

ListView 의 binddataset 속성에 DataSet 오브젝트를 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setBindDataset( objDataset )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDataset` | Object | binddataset 속성에 설정할 DataSet 을 오브젝트 형식으로 설정합니다. |

---

## setCellPos

ListView 에서 현재 선택된 아이템에 속한 Cell 중 특정 Cell 에 포커스를 이동하는 메소드입니다.

**Syntax**
```javascript
ListView.setCellPos( strBandID, strCellID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strBandID` | String | 포커스를 이동할 Cell 이 속한 밴드를 문자열로 설정합니다.  "body" 설정 시 Body 밴드의 Cell 로 포커스가 이동합니다. "detail" 설정 시 Detail 밴드의 Cell 로 포커스가 이동합니다. |
| `strCellID` | String | 포커스를 이동시킬 Cell 의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — Cell 포커스 이동에 성공하면 "true"를 반환합니다.  Cell 포커스 이동에 실패하면 "false"를 반환합니다.

**Remark**
- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.

---

## setCellProperty

ListView 에서 특정 Cell 의 속성값을 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setCellProperty( enumBand, strCellID, strPropID, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 속성값을 설정하려는 Cell 이 속한 밴드를 문자열로 설정합니다.  "body" 설정 시 Body 밴드에 속한 Cell 의 속성값을 설정합니다. "detail" 설정 시 Detail 밴드에 속한 Cell 의 속성값을 설정합니다. |
| `strCellID` | String | 속성값을 설정할 Cell 의 ID 를 문자열로 설정합니다. |
| `strPropID` | String | 값을 설정하려는 속성명을 문자열로 설정합니다. |
| `varValue` | Variant | strPropID 파라미터값에 해당하는 속성에 설정할 속성값 입니다 |

**Return**: `Boolean` — 특정 Cell 의 속성값 설정에 성공하면 "true"를 반환합니다.  특정 Cell 의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**
- setCellProperty() 메소드가 정상적으로 수행되면 ListView 에 변경내용이 즉시 반영됩니다.

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.

---

## setEditingValue

Cell 이 편집모드일 때 표시되는 컨트롤 또는 서브컨트롤의 value 속성을 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setEditingValue( strValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strValue` | String | Cell 에 표시된 편집모드용 컨트롤 또는 서브컨트롤의 value 속성값을 문자열로 설정합니다.  Cell 의 edittype 속성값이 "combo" 이면 combodatacol 속성에 적용된 데이터값을 설정합니다. Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자를 제외한 원본값을 설정합니다. |

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "button", "checkbox" 인 경우 메소드를 사용할 수 없습니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   setEditingValue() 메소드는 하위컨트롤인 comboeidt, calendaredit 의 value 속성에 값을 설정합니다.
   따라서, setEditingValue() 메소드 실행 후 getEditValue() 메소드와 getEditingValue() 메소드의 반환값이 달라질 수 있습니다.

---

## setEditSelect

Cell 이 편집상태일 때 편집기에 표시되는 텍스트를 인수로 전달된 영역만큼 선택하는 메소드입니다.

**Syntax**
```javascript
ListView.setEditSelect( nBegin [,nEnd] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBegin` | Number | 선택할 영역의 시작 인덱스를 숫자로 설정합니다.  인덱스는 0 부터 시작하며 "0 ~ 텍스트길이"까지 설정할 수 있습니다. -1 을 설정하면 캐럿이 0 번 인덱스에 위치하고 영역을 선택하지 않습니다. |
| `nEnd` | Number | 선택할 영역의 끝 인덱스를 숫자로 설정합니다.  인덱스는 0 부터 시작하며 "0 ~ 텍스트길이"까지 설정할 수 있습니다. -1 을 설정하면 선택할 영역의 끝 위치가 텍스트의 오른쪽 끝으로 설정됩니다.  값 생략 시 -1 로 적용됩니다. |

**Return**: `Boolean` — 텍스트의 영역선택에 성공하면 true 를 반환합니다.  텍스트의 영역선택에 실패하면 false 를 반환합니다.

**Remark**
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.

---

## setEditValue

Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성을 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setEditValue( strValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strValue` | String | Cell 에 표시된 편집모드용 컨트롤의 value 속성값을 문자열로 설정합니다.  Cell 의 edittype 속성값이 "combo" 이면 combocodecol 속성에 적용된 코드값을 설정합니다. Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자를 제외한 원본값을 설정합니다. |

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "button", "checkbox" 인 경우 메소드를 사용할 수 없습니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   setEditValue() 메소드는 Combo, Calendar 컨트롤의 value 속성에 값을 설정하며, 하위컨트롤인 comboeidt, calendaredit 의 value 속성에도 함께 반영됩니다.

---

## setEventHandler

ListView 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
ListView.setEventHandler( strEventID, objFunc, objTarget )
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

ListView 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
ListView.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

ListView 에 포커스를 주는 메소드입니다.

**Syntax**
```javascript
ListView.setFocus( [bMoveScroll [, bInnerFocus]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bMoveScroll` | Boolean | 부모 컴포넌트에 스크롤이 있을 경우 ListView 기준으로 스크롤을 이동할지 설정합니다.  true 설정 시 ListView 이(가) 화면에 표시되도록 스크롤을 이동시킵니다. false 설정 시 ListView 의 위치에 관계없이 스크롤을 이동시키지 않습니다.  값을 설정하지 않으면 true 로 동작합니다. |
| `bInnerFocus` | Boolean | ListView 이(가) 컨테이너 컴포넌트 일 때 자식 컴포넌트에게 포커스를 이동할지 설정합니다.  true 설정 시 자식 컴포넌트 중 포커스를 받을 수 있는 첫번째 컴포넌트가 포커스 됩니다. false 설정 시 ListView 에 포커스 됩니다.  ListView 이(가) 컨테이너 컴포넌트 일 때 값을 설정하지 않으면 true 로 동작합니다. |

**Return**: `Object` — ListView 이(가) 포커스되기 전에 포커스를 가졌던 컴포넌트를 반환합니다.  포커스를 가진 컴포넌트가 없었거나 메소드 수행이 실패하는 경우에는 null 을 반환합니다.

**Remark**
- setFocus() 메소드는 enableaccessibility 속성값에 관계없이 파라미터값을 기준으로 동작합니다.

- ListView 이(가) 컨테이너 컴포넌트가 아니거나 자식 컴포넌트 중 포커스를 가질 수 있는 컴포넌트가
   존재하지 않을 경우에는 bInnerFocus 파라미터값에 관계없이 ListView 에 포커스 됩니다.

---

## setFormat

ListView 에 표시 할 포맷의 ID 를 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setFormat( strFormatID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strFormatID` | String | ListView 에 표시 할 포맷의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — ListView 에 표시할 포맷의 ID 설정에 성공했을 경우 "true"를 반환합니다.  ListView 에 표시할 포맷의 ID 설정에 실패했을 경우 "false"를 반환합니다.

**Remark**
- 포맷은 하나의 ListView 에서 데이터를 여러 형식으로 표현하고자 할 때 사용합니다.
   포맷별로 Body, Detail 을 다양하게 구성할 수 있습니다.
   넥사크로 스튜디오의 ListView Contents Editor 를 사용하려 여러개의 포맷을 추가할 수 있습니다.

- setFormat() 메소드로 포맷이 성공적으로 변경되면 formatid 속성값이 변경된 포맷의 ID 로 설정됩니다.

- ListView 의 formatid 속성값을 변경해도 동일한 결과를 얻을 수 있습니다.

---

## setOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setOffsetBottom( nBottom );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBottom` | Number | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetHeight

ListView 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | ListView 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위의 숫자로 설정합니다 |

**Remark**
- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > ListView 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.

---

## setOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setOffsetRight( nRight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRight` | Number | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setOffsetTop( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > ListView 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.

---

## setOffsetWidth

ListView 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
ListView.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | ListView 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## show

스크립트로 동적 생성한 ListView 을(를) 화면에 표시하는 메소드입니다.

**Syntax**
```javascript
ListView.show()
```

**Sample**
```javascript
this.ListView00.show();
```

**Remark**
- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: destroy, init, insertChild, addChild, removeChild

---

## showDetailBand

ListView 에서 특정 아이템의 Detail 밴드를 표시하는 메소드입니다.

**Syntax**
```javascript
ListView.showDetailBand( nRow );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | Detail 밴드를 표시하려는 아이템의 인덱스를 설정합니다. |

**Remark**
- bandexpandtype 속성값이 "accordion" 일 경우 다른 아이템에 표시된 Detail 밴드가 자동으로 숨겨집니다.

---

## showEditor

현재 선택된 Cell 이 편집 가능할 경우 편집모드용 컨트롤을 표시하거나 숨기는 메소드입니다.

**Syntax**
```javascript
ListView.showEditor( bShow )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bShow` | Boolean | 현재 선택된 Cell 에 편집모드용 컨트롤을 표시할지 설정합니다.  true 설정 시 현재 선택된 Cell 이 편집가능한 상태이면 편집모드용 컨트롤을 표시합니다. false 설정 시 현재 선택된 Cell 의 편집모드가 해제되고 편집모드용 컨트롤을 표시하지 않습니다. |

**Return**: `Boolean` — 메소드가 정상적으로 수행되면 true 를 반환합니다.  메소드가 정상적으로 수행되지 못하면 false 를 반환합니다.

**Remark**
- 선택된 Cell 의 edittype 속성값에 따라 Combo 아이템 리스트, 팝업달력, 체크박스, 에디트 등의 편집모드용 컨트롤이 표시됩니다.

- ListView 의 readonly 속성값이 true 이거나 편집이 불가능한 Cell 을 선택했을 경우 편집모드용 컨트롤이 표시되지 않습니다.

- ListView 의 autoenter 속성값이 "select" 이면 Cell 을 선택 할때 자동으로 편집모드용 컨트롤이 표시됩니다.   


◆ Mobile 제약

- iOS/iPadOS 에서 edittype 속성값이 "date" 이고, calendarpopuptype 속성값이 "system" 일 때
   showEditor() 메소드로 Cell 을 편집모드로 하면 팝업달력이 자동으로 표시되므로 사용에 주의하여야 합니다.

---
