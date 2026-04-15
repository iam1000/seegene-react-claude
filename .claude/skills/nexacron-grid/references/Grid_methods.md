# Grid Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | Grid 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | Grid 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 Grid 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `appendContentsCol()` | Grid 에 현재 표시된 포맷에 Column 을 추가하는 메소드입니다. |
| `appendContentsRow()` | Grid 에 표시된 포맷에 Sub Row 를 추가하는 메소드입니다. |
| `autoFitCol()` | Grid 에 스크롤 없이 전체 Column 이 표시되도록 Column 의 너비를 자동으로 조절하는 메소드입니다. |
| `autoSizeCol()` | Grid 에서 텍스트가 모두 표시되도록 특정 Column 의 너비를 자동조절하는 메소드입니다. |
| `autoSizeRow()` | Grid 에 표시되고 있는 포맷에서 텍스트가 모두 표시되도록 특정 Row 의 높이를 자동조절하는 메소드입니다. |
| `blinkCell()` | Grid 에서 설정한 시간동안 특정 Cell 에 깜빡임(Blink) 효과를 주는 메소드입니다. |
| `blinkCellByInterval()` | Grid 에서 설정한 횟수만큼 특정 Cell 에 깜빡임(Blink) 효과를 주는 메소드입니다. |
| `bringToFront()` | 부모가 동일한 컴포넌트 중 Grid 이(가) 화면의 제일 앞에 표시되게 합니다. |
| `bringToPrev()` | 부모가 동일한 컴포넌트 중 Grid 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `clearSelect()` | Grid 에서 선택된 영역을 모두 해제하는 메소드입니다. |
| `createFormat()` | Grid 와 바인딩 된 DataSet 의 Column 정보를 기준으로 새로운 포맷을 생성하는 메소드입니다. |
| `deleteContentsCol()` | Grid 에 현재 표시된 포맷에서 특정 Column 을 삭제하는 메소드입니다. |
| `deleteContentsRow()` | Grid 에 현재 표시되는 포맷에서 특정 Sub Row 를 삭제하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 Grid 을(를) 삭제하는 메소드입니다. |
| `dropdown()` | Grid 컴포넌트의 Cell 편집상태에서 아이템 리스트를 표시하는 메서드입니다. |
| `dropdownCalendar()` | Grid 에서 edittype 속성값이 "date" 인 Cell 이 편집상태일 때 팝업달력을 표시하는 메소드입니다. |
| `dropdownCombo()` | Grid 에서 edittype 속성값이 "combo" 인 Cell 이 편집상태일 때 Combo 아이템 리스트를 표시하는 메소드입니다. |
| `findEventHandler()` | Grid 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getBandProperty()` | 특정 밴드에서 지정된 속성의 속성값을 반환하는 메소드입니다. |
| `getBindCellIndex()` | DataSet 의 특정 Column 과 바인드된 Cell 의 인덱스를 반환하는 메소드입니다. |
| `getBindDataset()` | Grid 의 binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환하는 메소드입니다. |
| `getCellCount()` | Grid 에서 특정 밴드에 정의된 Cell 의 갯수를 반환하는 메소드입니다. |
| `getCellPos()` | Grid 에서 선택된 Cell 의 Cell 인덱스 값을 반환하는 메소드입니다. |
| `getCellProperty()` | Cell 의 특정 속성값을 반환하는 메소드입니다. |
| `getCellPropertyValue()` | Grid 에 표시된 Cell 중 특정 Cell 에 적용된 속성값을 반환하는 메소드입니다. |
| `getCellRect()` | 인수로 전달된 위치의 Cell 영역을 Rect 오브젝트로 반환하는 메소드입니다. |
| `getCellText()` | 인수로 전달된 위치의 Cell 에 표시되는 텍스트값을 반환하는 메소드입니다. |
| `getCellValue()` | 인수로 전달된 위치의 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다. |
| `getCurEditType()` | Grid 에서 선택된 Cell 의 edittype 속성값을 반환하는 메소드입니다. |
| `getCurFormatString()` | Grid 에 현재 표시되고 있는 포맷을 XML 형식의 문자열로 반환하는 메소드입니다. |
| `getDatasetRow()` | Grid 의 Row 인덱스에 해당하는 DataSet 의 Row 인덱스를 반환하는 메소드입니다. |
| `getEditCaret()` | Cell 이 편집상태일 때 캐럿이 위치한 인덱스를 반환하는 메소드입니다. |
| `getEditingText()` | Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 text 값을 반환하는 메소드입니다. |
| `getEditingValue()` | Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 value 값을 반환하는 메소드입니다. |
| `getEditSelect()` | Cell 이 편집상태일 때 선택된 텍스트의 인덱스를 배열로 반환하는 메소드입니다. |
| `getEditSelectedText()` | Cell 이 편집상태일 때 선택된 텍스트를 반환하는 메소드입니다. |
| `getEditText()` | Cell 이 편집모드일 때 표시되는 컨트롤의 text 속성값을 반환하는 메소드입니다. |
| `getEditValue()` | Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성값을 반환하는 메소드입니다. |
| `getEventHandler()` | Grid 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getFormatColCount()` | Grid 에 표시되고 있는 포맷에 정의된 Column 의 갯수를 반환하는 메소드입니다. |
| `getFormatColProperty()` | Grid 에 표시되고 있는 포맷에 정의된 Column 의 특정 속성값을 반환하는 메소드입니다. |
| `getFormatColSize()` | Grid 의 포맷에 정의된 Column 의 너비를 반환하는 메소드입니다. |
| `getFormatIdList()` | Format id 배열값을 반환하는 메소드입니다. |
| `getFormatRowCount()` | Grid 에 표시되고 있는 포맷에 정의된 모든 Row 또는 Sub Row 의 갯수를 반환하는 메소드입니다. |
| `getFormatRowProperty()` | Grid 에 표시되고 있는 포맷에 정의된 Row 의 특정 속성값을 반환하는 메소드입니다. |
| `getFormatRowSize()` | Grid 의 포맷에 정의된 Row 또는 Sub Row 의 높이를 반환하는 메소드입니다. |
| `getFormatString()` | 디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환하는 메소드입니다. |
| `getHeadValue()` | Grid 컴포넌트의 Head 밴드 영역 내 특정 Cell의 text 속성값 또는 Cell 내부에서 관리하는 HeadValue 값을 반환하는 메서 |
| `getHScrollPos()` | Grid 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| `getOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetHeight()` | Grid 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | Grid 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getPixelBottom()` | Grid 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelHeight()` | Grid 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelLeft()` | Grid 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelRight()` | Grid 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelTop()` | Grid 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelWidth()` | Grid 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getRealColFullSize()` | Grid 에 표시되고 있는 포맷에서 전체 Column 의 너비를 반환하는 메소드입니다. |
| `getRealColSize()` | Grid 에 표시되고 있는 포맷에서 특정 Column 의 너비를 반환하는 메소드입니다. |
| `getRealRowFullSize()` | Grid 에 표시되고 있는 포맷에서 전체 Row 의 높이를 반환하는 메소드입니다. |
| `getRealRowSize()` | Grid 에 표시된 데이터 Row 에서 특정 Row 또는 SubRow 의 높이를 반환하는 메소드입니다. |
| `getSelectedDatasetRows()` | Grid 에 선택되어 있는 Row 들에 해당하는 DataSet 의 Row 인덱스를 배열로 반환하는 메소드입니다. |
| `getSelectedRows()` | Grid 에 선택되어 있는 Row 의 인덱스를 배열로 반환하는 메소드입니다. |
| `getSubCellCount()` | 인수로 전달 된 Cell 이 Sub Cell 구조일 때 Sub Cell 의 갯수를 반환하는 메소드입니다. |
| `getSubCellProperty()` | Cell 이 Sub Cell 구조일 때 특정 Sub Cell 의 속성값을 반환하는 메소드입니다. |
| `getSubCellPropertyValue()` | Grid 에 표시된 Cell 중 특정 SubCell 에 적용된 속성값을 반환하는 메소드입니다. |
| `getSubCellRect()` | 특정 Cell 에서 Sub Cell 영역을 Rect 오브젝트로 반환하는 메소드입니다. |
| `getSubCellText()` | 특정 Cell 의 Sub Cell 에 표시되는 텍스트값을 반환하는 메소드입니다. |
| `getSubCellValue()` | 특정 Sub Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다. |
| `getSummValue()` | Grid 의 Summary 밴드 영역에서 특정 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다. |
| `getTreeChildCount()` | Grid 가 트리 형식일 때 특정 Row 에 자식으로 존재하는 Row 의 갯수를 반환하는 메소드입니다. |
| `getTreeChildRow()` | Grid 가 트리 형식일 때 특정 Row 의 자식 Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다. |
| `getTreeParentRow()` | Grid 가 트리 형식일 때 특정 Row 의 부모 Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다. |
| `getTreePath()` | Grid 가 트리 형식일 때 뿌리(Root) Row 에서 특정 Row 까지 각 Row 의 text 속성값을 반환하는 메소드입니다. |
| `getTreeRow()` | 인수로 전달된 DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 반환하는 메소드입니다. |
| `getTreeSiblingRow()` | Grid 가 트리 형식일 때 특정 Row 의 형제(Sibling) Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다. |
| `getTreeStatus()` | Grid 가 트리 형식일 때 특정 Row 의 트리 상태를 반환하는 메소드입니다. |
| `getVScrollPos()` | Grid 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| `init()` | 스크립트로 Grid 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| `insertContentsCol()` | Grid 에 현재 표시된 포맷의 특정 위치에 Column 을 삽입하는 메소드입니다. |
| `insertContentsRow()` | Grid 에 현재 표시되는 포맷의 특정 위치에 Sub Row 를 삽입하는 메소드입니다. |
| `insertEventHandler()` | Grid 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `isDropdown()` | Grid 컴포넌트에 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다. |
| `isDropdownCalendar()` | Grid 에 팝업달력이 표시되어 있는지 여부를 반환하는 메소드입니다. |
| `isDropdownCombo()` | Grid 에 Combo 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다. |
| `isSelectedCell()` | 인수로 전달된 위치의 Cell 이 선택 상태인지 반환하는 메소드입니다. |
| `isTreeCollapsedRow()` | Grid 가 트리 형식일 때 특정 Row 가 Collapse 상태인지 반환하는 메소드입니다. |
| `isTreeExpandedRow()` | Grid 가 트리 형식일 때 특정 Row 가 Expand 상태인지 반환하는 메소드입니다. |
| `isTreeLeafRow()` | Grid 가 트리 형식일 때 특정 Row 가 단말(Leaf) Row 인지 반환하는 메소드입니다. |
| `isTreeRootRow()` | Grid 가 트리 형식일 때 특정 Row 가 뿌리(Root) Row 인지 반환하는 메소드입니다. |
| `mergeCell()` | Grid 에 표시된 Cell 중 특정 영역의 Cell 들을 병합하여 하나의 Cell 로 표시하는 메소드입니다. |
| `mergeContentsCell()` | Grid 에 표시되어 있는 포맷에서 특정 Cell 들을 병합(Merge) 하여 하나의 Cell로 만드는 메소드입니다. |
| `move()` | Grid 의 위치와 크기를 변경하는 메소드입니다. |
| `moveToNext()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Grid 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `moveToNextCell()` | Grid 의 Body 밴드 영역에서 Cell 포커스를 편집 가능한 다음 Cell로 이동시키는 메소드입니다. |
| `moveToPrev()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Grid 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `moveToPrevCell()` | Grid 의 Body 밴드 영역에서 Cell 포커스를 편집 가능한 이전 Cell로 이동시키는 메소드입니다. |
| `redrawExprCell()` | Grid 에서 Cell 에 설정된 Expr 값을 모두 갱신하는 메소드입니다. |
| `removeEvent()` | Grid 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | Grid 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | Grid 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `resize()` | Grid 의 크기를 변경하는 메소드입니다. |
| `scrollBy()` | Grid 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다. |
| `scrollTo()` | Grid 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다. |
| `selectArea()` | Grid 의 Body 밴드 영역에서 인수로 전달된 영역을 선택하는 메소드입니다. |
| `selectCell()` | Grid 의 Body 영역에서 인수로 전달된 위치의 Cell 을 선택 또는 선택해제 하는 메소드입니다. |
| `selectMultiRow()` | Grid의 body 밴드 영역에서 파라미터로 전달된 영역에 해당하는 Row를 선택하는 메소드입니다. |
| `selectRow()` | Grid 의 Body 영역에서 인수로 전달된 위치의 Row 를 선택 또는 선택해제 하는 메소드입니다. |
| `sendToBack()` | 부모가 동일한 컴포넌트 중 Grid 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| `sendToNext()` | 부모가 동일한 컴포넌트 중 Grid 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `setBandProperty()` | Row 관련 밴드의 특정 속성값을 설정하는 메소드입니다. |
| `setBindDataset()` | Grid 의 binddataset 속성에 DataSet 오브젝트를 설정하는 메소드입니다. |
| `setCellPos()` | Grid 에 표시된 Cell 중 특정 Cell 을 선택하는 메소드입니다. |
| `setCellProperty()` | Cell 의 특정 속성값을 설정하는 메소드입니다. |
| `setEditingValue()` | Cell 이 편집모드일 때 표시되는 컨트롤 또는 서브컨트롤의 value 속성을 설정하는 메소드입니다. |
| `setEditSelect()` | Cell 이 편집상태일 때 편집기에 표시되는 텍스트를 인수로 전달된 영역만큼 선택하는 메소드입니다. |
| `setEditValue()` | Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성을 설정하는 메소드입니다. |
| `setEventHandler()` | Grid 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | Grid 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setFixedRow()` | Grid 에서 스크롤 시 인수로 전달된 Row 까지 스크롤 되지 않고 행고정 시키는 메소드입니다. |
| `setFocus()` | Grid 에 포커스를 주는 메소드입니다. |
| `setFormat()` | Grid 에 여러개의 포맷이 정의되어 있을 때 화면에 표시할 포맷을 설정하는 메소드입니다. |
| `setFormatColProperty()` | Grid 에 표시되고 있는 포맷에 정의된 Column 의 속성값을 설정하는 메소드입니다. |
| `setFormatRowProperty()` | Grid 에 표시되고 있는 포맷에 정의된 Row 의 속성값을 설정하는 메소드입니다 |
| `setHeadValue()` | Grid 컴포넌트의 Head 밴드 영역 내 지정한 인덱스에 해당하는 Cell 내부에서 관리하는 HeadValue 값을 설정하는 메서드입니다. |
| `setOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetHeight()` | Grid 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | Grid 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| `setRealColSize()` | Grid 에 표시되고 있는 포맷에서 특정 Column 의 너비를 설정하는 메소드입니다. |
| `setRealRowSize()` | Grid 에 표시된 데이터 Row 에서 특정 Row 또는 SubRow 의 높이를 설정하는 메소드입니다. |
| `setSubCellProperty()` | Cell 이 Sub Cell 구조일 때 특정 Sub Cell 의 속성값을 설정하는 메소드입니다. |
| `setTreeStatus()` | Grid 가 트리 형식일 때 특정 Row 의 트리 상태를 설정하는 메소드입니다. |
| `show()` | 스크립트로 동적 생성한 Grid 을(를) 화면에 표시하는 메소드입니다. |
| `showEditor()` | 현재 선택된 Cell 이 편집 가능할 경우에 편집기 표시 여부를 설정하는 메소드입니다. |
| `splitCell()` | mergeCell() 메소드로 병합된 Cell 을 분할하는 메소드입니다. |
| `splitContentsCell()` | Grid 에 표시되어 있는 포맷의 Cell 중 병합(Merge) 된 Cell 을 분할하는 메소드입니다. |
| `updateToDataset()` | Grid 에서 편집중인 값을 바인드 된 DataSet 에 즉시 반영시키는 메소드입니다. |

---

## addEvent

Grid 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
Grid.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | Grid 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- Grid 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

Grid 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
Grid.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 Grid 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
Grid.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

## appendContentsCol

Grid 에 현재 표시된 포맷에 Column 을 추가하는 메소드입니다.

**Syntax**
```javascript
Grid.appendContentsCol( enumBand [, bBandAppend] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 표시된 Grid 포맷에 Column 이 추가될 밴드를 문자열로 설정합니다.  "left" 설정 시 Column 이 Left 밴드 영역에 추가됩니다. "body" 설정 시 Column 이 Body 밴드 영역에 추가됩니다. "right" 설정 시 Column 이 Right 밴드 영역에 추가됩니다. |
| `bBandAppend` | Boolean | 현재 표시된 Grid 포맷에 추가시킬 Column 이 밴드 영역에 속할 지 설정합니다.  true 설정 시 enumBand 에 설정한 밴드 영역의 마지막 Column 으로 추가됩니다. false 설정 시 밴드 영역에 관계없이 전체 Column 의 마지막에 추가됩니다.  값을 설정하지 않으면 true 로 적용됩니다. |

**Return**: `Number` — 전체 Column 을 기준으로 Column 이 추가된 위치의 인덱스 값을 반환합니다. enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.  정상적으로 추가하지 못했을 경우 -1 을 반환합니다.

**Remark**
- bBandAppend 값에 관계없이 추가된 Column 의 band 속성값은 enumBand 값으로 설정됩니다.

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시된 포맷에만 Column 을 추가합니다.

- 현재 표시된 Grid 포맷에 존재하는 Row 단위 밴드(Head, Body, Summary)만 Column 이 추가됩니다.
   현재 포맷에 Row 단위 밴드(Head, Body, Summary)가 모두 없다면 Column 은 추가되지 않습니다.

- 각 밴드의 마지막 Cell 이 합병(Merge)된 Cell 이어도 추가되는 Column 이 자동으로 합병되지 않습니다.

---

## appendContentsRow

Grid 에 표시된 포맷에 Sub Row 를 추가하는 메소드입니다.

**Syntax**
```javascript
Grid.appendContentsRow( enumBand )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 Grid 포맷에 Sub Row 가 추가될 밴드를 문자열로 설정합니다.  "head" 설정 시 Sub Row 가 Head 밴드 영역에 추가됩니다. "body" 설정 시 Sub Row 가 Body 밴드 영역에 추가됩니다. "summary" 설정 시 Sub Row 가 Summary 밴드 영역에 추가됩니다. |

**Return**: `Number` — 전체 Row 를 기준으로 Row 가 추가된 위치의 인덱스 값을 반환합니다. enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.  정상적으로 추가하지 못했을 경우 "-1"을 반환합니다.

**Remark**
- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시되는 포맷에만 Sub Row 를 추가합니다.

- 바인드 된 DataSet 에 Row 를 추가하는 기능이 아닙니다.
  Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 해당 영역의 Row를 여러줄로 구성하게 하는 기능입니다. 

- 포맷에 enumBand 값에 해당하는 밴드가 정의되지 않았다면 해당 밴드에 새로운 Row 가 추가됩니다.
  enumBand 값에 해당하는 밴드가 정의되어 있다면 해당 밴드의 Row 에  Sub Row 가 추가됩니다.

- Sub Row 가 추가되는 밴드에 합병(Merge)된 Cell 이 있어도 추가되는 Sub Row 는 자동으로 합병되지 않습니다.

---

## autoFitCol

Grid 에 스크롤 없이 전체 Column 이 표시되도록 Column 의 너비를 자동으로 조절하는 메소드입니다.

**Syntax**
```javascript
Grid.autoFitCol()
```

**Sample**
```javascript
var bSucc = this.Grid00.autoFitCol();
```

**Return**: `Boolean` — Column 너비 자동조절에 성공하면 "true"를 반환합니다. Column 너비 자동조절에 실패하면 "false"를 반환합니다.

**Remark**
- 수시로 변동되는 데이터에 대해서 Column 너비를 자동으로 Grid 영역에 맞게 조절할 필요가 있을 때 사용합니다.

- Grid 에 Left/Right Band 로 설정된 Column은 자동조절되지 않고, 설정된 너비를 유지합니다.

- autofittype 속성이 "none"일 때 Column 자동조절이 필요하면 autoFitCol() 메소드를 사용합니다.
  autoFitCol() 메소드 수행 후 사용자가 Column 너비를 조절할 경우 사용자 변경값을 유지합니다.

---

## autoSizeCol

Grid 에서 텍스트가 모두 표시되도록 특정 Column 의 너비를 자동조절하는 메소드입니다.

**Syntax**
```javascript
Grid.autoSizeCol( enumBand, nColIndex [,bBandIndex] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 Grid 포맷에서 너비를 자동조절 할 Column 이 속한 밴드를 문자열로 설정합니다.  "left" 설정 시 Left 밴드 영역의 Column 이 적용됩니다. "body" 설정 시 Body 밴드 영역의 Column 이 적용됩니다. "right" 설정 시 Right 밴드 영역의 Column 이 적용됩니다. |
| `nColIndex` | Number | 텍스트가 모두 표시되도록 자동조절 할 Column 의 인덱스를 숫자로 설정합니다. |
| `bBandIndex` | Boolean | nColIndex 에 설정한 인덱스값이 밴드 기준인지 전체 Column 기준인지 설정합니다.  "true" 설정 시 enumBand 에 설정한 밴드 영역 기준으로 nColIndex 값을 처리합니다. "false" 설정 시 enumBand 값에 관계없이 전체 Column 기준으로 nColIndex 값을 처리합니다.  값을 설정하지 않으면 "false"로 적용됩니다. |

**Remark**
- autosizebandtype 속성값에 따라 적용되는 밴드가 제한됩니다.

---

## autoSizeRow

Grid 에 표시되고 있는 포맷에서 텍스트가 모두 표시되도록 특정 Row 의 높이를 자동조절하는 메소드입니다.

**Syntax**
```javascript
Grid.autoSizeRow( nRowIndex [, nSubRowIndex [, bDatasetRow]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 텍스트가 모두 표시되도록 높이를 자동조절 할 Row 의 인덱스를 설정합니다.  "0~Row 인덱스" 설정 시 Body 밴드 영역의 Row 인덱스로 적용됩니다. "-1" 설정 시 Head 밴드 영역으로 적용됩니다. "-2" 설정 시 Summary 밴드 영역으로 적용됩니다.  Row 인덱스는 "0" 부터 시작합니다. |
| `nSubRowIndex` | Number | nRowIndex 에 해당하는 Row 에서 높이를 자동조절 할 Sub Row 의 인덱스를 설정합니다.  "0~Sub Row 인덱스" 설정 시 특정 Sub Row 만 높이가 자동조절 됩니다. "-1" 설정 시 nRowIndex 에 해당하는 Row 의 모든 Sub Row 의 높이가 자동조절 됩니다.  값 생략 시 "-1"로 적용됩니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다 |

**Remark**
- Grid 의 특정 밴드나 Row 의 높이를 자동 조절할 때 사용합니다.

---

## blinkCell

Grid 에서 설정한 시간동안 특정 Cell 에 깜빡임(Blink) 효과를 주는 메소드입니다.

**Syntax**
```javascript
Grid.blinkCell( nRow, vCell, nKeepMSec, nBlinkCnt );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 깜빡임(Blink) 효과가 적용될 데이터 Row 의 인덱스를 숫자로 설정합니다.  음수, 잘못된 값, 존재하지 않는 인덱스값 설정 시 메소드가 실행되지 않습니다. |
| `vCell` | String, Number | 깜빡임(Blink) 효과가 적용될 Cell 의 인덱스 또는 ID 를 설정합니다.  인덱스 설정 시 한 개의 Cell 만 설정할 수 있습니다. 한 개 이상의 Cell 에 깜빡임 효과를 적용하려면 Cell 의 ID 를 콤마(",")로 구분하여 설정합니다.  음수, 빈값, 존재하지 않는 인덱스값, 존재하지 않는 아이디 설정 시 메소드가 실행되지 않습니다. |
| `nKeepMSec` | Number | 깜빡임(Blink) 효과가 적용될 전체 시간을 밀리초 단위의 숫자로 설정합니다.  0 설정 시 nRow, vCell 에 설정된 Cell 영역에 적용된 깜빡임(Blink) 효과를 취소합니다.  음수, 잘못된 값 설정 시 메소드가 실행되지 않습니다. |
| `nBlinkCnt` | Number | nKeepMSec 에 설정한 시간동안 깜빡임(Blink) 효과가 적용될 횟수를 숫자로 설정합니다.  0 설정 시 nRow, vCell 에 설정된 Cell 영역에 적용된 깜빡임(Blink) 효과를 취소합니다.  음수, 잘못된 값 설정 시 메소드가 실행되지 않습니다. |

**Remark**
- 깜빡임(Blink) 효과는 CSS 에 정의된 Cell 의 blinked userstatus 를 적용했다 해제하는 것으로 표현됩니다.
   따라서 깜빡임(Blink) 효과를 주려면 CSS 에 Cell 의 blinked userstatus 가 정의되어 있어야 합니다.

- nKeepMSec 에 설정한 시간을 nBlinkCnt 에 설정한 횟수로 균등 분할하여 깜빡임 효과가 적용됩니다.
   예를 들어 nKeepMSec 값을 10,000 으로 설정하고 nBlinckCnt 값을 5로 설정하여 메소드를 실행하면,
   1,000 밀리초 동안 blinked userstatus 가 해제되고, 1,000 밀리초 동안 blinked userstatus 가 적용되는 것을 5번 반복합니다.

- blinkCell() 메소드는 깜빡임(Blink) 효과가 적용되는 전체시간과 횟수를 설정합니다.
   blinkCellByInterval() 메소드는 깜빡임(Blink) 효과가 적용되는 횟수와 효과가 적용되는 시간간격을 설정합니다.

- blinkCell() 메소드 실행 시 nRow, vCell 에 설정된 Cell 영역에 적용되어 있던 깜빡임(Blink) 효과는 취소되고 새로운 효과가 적용됩니다.

- blinkCell() 메소드는 Cell 단위로 설정할 수 있습니다.
   Row 전체에 깜빡임(Blink) 효과를 적용하려면 전체 Cell 의 ID 를 콤마(",")로 구분하여 설정하거나
   예제와 같이 for 문을 사용하여 전체 Cell 갯수만큼 blinkCell() 메소드를 실행하여야 합니다.

**See Also**: blinkCellByInterval

---

## blinkCellByInterval

Grid 에서 설정한 횟수만큼 특정 Cell 에 깜빡임(Blink) 효과를 주는 메소드입니다.

**Syntax**
```javascript
Grid.blinkCellByInterval( nRow, vCell, nInterMSec, nBlinkCnt );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 깜빡임(Blink) 효과가 적용될 행의 인덱스를 숫자로 설정합니다.  음수, 잘못된 값, 존재하지 않는 인덱스값 설정 시 메소드가 실행되지 않습니다. |
| `vCell` | String, Number | 깜빡임(Blink) 효과가 적용될 Cell 의 인덱스 또는 ID 를 설정합니다.  인덱스 설정 시 한 개의 Cell 만 설정할 수 있습니다. 한 개 이상의 Cell 에 깜빡임 효과를 적용하려면 Cell 의 ID 를 콤마(",")로 구분하여 설정합니다.  음수, 빈값, 존재하지 않는 인덱스값, 존재하지 않는 아이디 설정 시 메소드가 실행되지 않습니다. |
| `nInterMSec` | Number | 깜빡임(Blink) 효과가 적용될 시간 간격을 밀리초 단위의 숫자로 설정합니다.  깜빡임(Blink) 효과가 꺼진 후 다음 깜빡임(Blink) 효과가 적용될 때까지의 사이 시간을 설정합니다. 0 설정 시 nRow, vCell 에 설정된 Cell 영역에 적용된 깜빡임(Blink) 효과를 취소합니다.  음수, 잘못된 값 설정 시 메소드가 실행되지 않습니다. |
| `nBlinkCnt` | Number | 깜빡임(Blink) 효과가 적용되어 Cell 이 깜빡이는 횟수를 숫자로 설정합니다.  깜빡임(Blink) 효과는 500 밀리초 동안 적용되며, 적용시간을 변경할 수 없습니다.  음수, 잘못된 값 설정 시 메소드가 실행되지 않습니다. |

**Remark**
- 깜빡임(Blink) 효과는 CSS 에 정의된 Cell 의 blinked userstatus 를 적용했다 해제하는 것으로 표현됩니다.
   따라서 깜빡임(Blink) 효과를 주려면 CSS 에 Cell 의 blinked userstatus 가 정의되어 있어야 합니다.

- nInterMSec 에 설정한 시간 간격을 두고 nBlinkCnt 에 설정한 횟수로 깜빡임 효과가 적용됩니다.
   예를 들어 nInterMSec 값을 1000 으로 설정하고 nBlinckCnt 값을 5로 설정하여 메소드를 실행하면,
   500 밀리초 동안 blinked userstatus 가 적용되고, 1000 밀리초 동안 blinked userstatus 가 해제되는 것을 5번 반복합니다.

- blinkCell() 메소드는 깜빡임(Blink) 효과가 적용되는 전체시간과 횟수를 설정합니다.
   blinkCellByInterval() 메소드는 깜빡임(Blink) 효과가 적용되는 횟수와 효과가 적용되는 시간간격을 설정합니다.

- blinkCellByInterval() 메소드 실행 시 nRow, vCell 에 설정된 Cell 영역에 적용되어 있던 깜빡임(Blink) 효과는 취소되고 새로운 효과가 적용됩니다.

- blinkCellByInterval() 메소드는 Cell 단위로 설정할 수 있습니다.
   Row 전체에 깜빡임(Blink) 효과를 적용하려면 전체 Cell 의 ID 를 콤마(",")로 구분하여 설정하거나
   예제와 같이 for 문을 사용하여 전체 Cell 갯수만큼 blinkCellByInterval() 메소드를 실행하여야 합니다.

**See Also**: blinkCell

---

## bringToFront

부모가 동일한 컴포넌트 중 Grid 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**
```javascript
Grid.bringToFront()
```

**Sample**
```javascript
this.Grid.bringToFront();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 Grid 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.

---

## bringToPrev

부모가 동일한 컴포넌트 중 Grid 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
Grid.bringToPrev()
```

**Sample**
```javascript
this.Grid.bringToPrev();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 Grid 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
Grid.clearEventHandler( strEventID )
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

Grid 에서 선택된 영역을 모두 해제하는 메소드입니다.

**Syntax**
```javascript
Grid.clearSelect()
```

**Sample**
```javascript
this.Grid00.clearSelect()
```

**Remark**
- clearSelect() 메소드가 정상적으로 실행되면 selectstartrow, selectendrow, selectstartcol, selectendcol, selectstartsubrow, selectendsubrow 속성값이 초기화 됩니다.

---

## createFormat

Grid 와 바인딩 된 DataSet 의 Column 정보를 기준으로 새로운 포맷을 생성하는 메소드입니다.

**Syntax**
```javascript
Grid.createFormat()
```

**Sample**
```javascript
this.Grid00.createFormat();
```

**Remark**
- createFomat() 메소드는 수행 후 생성된 포맷은 Grid 에 즉시 표시됩니다.
   Grid 의 현재 포맷정보를 확인하려면 getCurFormatString() 메소드나 formats 속성을 사용합니다.

- 포맷은 Grid 에 표시되는 형식으로 Column, Head, Body, Summary 로 구성됩니다.
   넥사크로 스튜디오에서 Grid Contents Editor 를 사용하여 포맷을 설정할 수 있습니다.
   Grid 에 여러개의 포맷을 정의할 수 있습니다.

---

## deleteContentsCol

Grid 에 현재 표시된 포맷에서 특정 Column 을 삭제하는 메소드입니다.

**Syntax**
```javascript
Grid.deleteContentsCol( enumBand, nColIndex [, bBandIndex] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 표시된 Grid 포맷에서 삭제될 Column 이 속한 밴드를 문자열로 설정합니다.  "left" 설정 시 Column 이 Left 밴드 영역에서 삭제됩니다. "body" 설정 시 Column 이 Body 밴드 영역에서 삭제됩니다. "right" 설정 시 Column 이 Right 밴드 영역에서 삭제됩니다. |
| `nColIndex` | Number | 삭제될 Column 의 인덱스를 숫자로 설정합니다. |
| `bBandIndex` | Boolean | nColIndex 에 설정한 인덱스값이 밴드 기준인지 전체 Column 기준인지 설정합니다.  true 설정 시 enumBand 에 설정한 밴드 영역 기준으로 nColIndex 값을 처리합니다. false 설정 시 enumBand 값에 관계없이 전체 Column 기준으로 nColIndex 값을 처리합니다.  값을 설정하지 않으면 false 로 적용됩니다. |

**Return**: `Number` — 전체 Column 을 기준으로 삭제된 Column 의 인덱스 값을 반환합니다. enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.  정상적으로 삭제하지 못했을 경우 -1 을 반환합니다.

**Remark**
- nColIndex 값에 해당하는 Column 이 없을 경우 메소드는 실행되지 않습니다.

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시된 포맷만 Column 을 삭제합니다.

- 현재 표시된 Grid 포맷에 존재하는 모든 Row 관련 밴드(Head,Body,Summary)에서 해당 Column 위치의 Cell 을 삭제합니다.

- 삭제할 Column 에 합병(Merge)된 Cell 이 있는 경우 Cell 의 크기가 작아집니다.

---

## deleteContentsRow

Grid 에 현재 표시되는 포맷에서 특정 Sub Row 를 삭제하는 메소드입니다.

**Syntax**
```javascript
Grid.deleteContentsRow( enumBand, nSubRowIndex )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 Grid 포맷에서 삭제할 Sub Row 가 속한 밴드를 문자열로 설정합니다.  "head" 설정 시 Sub Row 가 Head 밴드 영역에서 삭제됩니다. "body" 설정 시 Sub Row 가 Body 밴드 영역에서 삭제됩니다. "summary" 설정 시 Sub Row 가 Summary 밴드 영역에서 삭제됩니다. |
| `nSubRowIndex` | Number | 삭제할 Sub Row 의 인덱스를 숫자로 설정합니다. |

**Return**: `Number` — 삭제된 Sub Row 가 밴드 내에서 위치했던 인덱스 값을 반환합니다.  정상적으로 삭제하지 못했을 경우 "-1"을 반환합니다.

**Remark**
- 바인드 된 DataSet 에 Row 를 삭제하는 기능이 아닙니다.
  Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 해당 Row 가 Sub Row로 구성되어 있을 때 Sub Row 를 삭제하는 기능입니다.

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시된 포맷에서 Sub Row 를 삭제합니다.

- enumBand 값에 해당하는 밴드에 Sub Row가 없고, nSubRowIndex 값이 "0" 이면 해당 밴드가 삭제됩니다.

- 삭제할 Sub Row 에 합병(Merge)된 Cell이 있는 경우 Cell 의 크기가 작아집니다.

---

## destroy

스크립트에서 동적으로 생성한 Grid 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
Grid.destroy()
```

**Sample**
```javascript
var bSucc = this.Grid00.destroy();
```

**Return**: `Boolean` — Grid 이(가) 정상적으로 삭제되면 true 를 반환합니다.  Grid 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 Grid 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: show, init, addChild, removeChild, insertChild

---

## dropdown

Grid 컴포넌트의 Cell 편집상태에서 아이템 리스트를 표시하는 메서드입니다.

**Syntax**
```javascript
Grid.dropdown()
```

**Sample**
```javascript
var bSucc = this.Grid00.dropdown();
```

**Return**: `Boolean` — 아이템 리스트가 정상적으로 표시되면 true를 반환합니다. 아이템 리스트가 정상적으로 표시되지 않으면 false를 반환합니다.

**Remark**
- Cell edittype 속성값을 "combo", "date", "multicombo"처럼 아이템 리스트를 가지는 형태로 설정한 경우 지원하는 메서드입니다.
  
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor 메서드를 사용하여 편집상태로 전환해야 합니다.

---

## dropdownCalendar

Grid 에서 edittype 속성값이 "date" 인 Cell 이 편집상태일 때 팝업달력을 표시하는 메소드입니다.

**Syntax**
```javascript
Grid.dropdownCalendar()
```

**Sample**
```javascript
var bSucc = this.Grid00.dropdownCalendar();
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

Grid 에서 edittype 속성값이 "combo" 인 Cell 이 편집상태일 때 Combo 아이템 리스트를 표시하는 메소드입니다.

**Syntax**
```javascript
Grid.dropdownCombo()
```

**Sample**
```javascript
var bSucc = this.Grid00.dropdownCombo();
```

**Return**: `Boolean` — Combo 아이템 리스트가 정상적으로 표시되면 true 를 반환합니다.  Combo 아이템 리스트가 정상적으로 표시되지 않으면 false 를 반환합니다.

**Remark**
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor() 메소드를 사용하여 편집상태로 전환해야 합니다.

---

## findEventHandler

Grid 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.findEventHandler( strEventID, objFunc, objTarget )
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

## getBandProperty

특정 밴드에서 지정된 속성의 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getBandProperty( enumBand, strPropID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 속성값을 가져올 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드에서 속성값을 반환합니다. "body" 설정 시 Body 밴드에서 속성값을 반환합니다. "summary" 설정 시 Summary 밴드에서 속성값을 반환합니다. |
| `strPropID` | String | 값을 가져올 속성의 속성명을 문자열로 설정합니다. |

**Return**: `String` — 특정 밴드에서 지정된 속성의 속성값을 반환합니다.

**Remark**
- 테마에 설정한 Style 속성의 값은 반환되지 않습니다.
  Style 관련 속성은 스크립트나 넥사크로 스튜디오에서 직접 설정한 값만 반환됩니다.

---

## getBindCellIndex

DataSet 의 특정 Column 과 바인드된 Cell 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getBindCellIndex( enumBand, strColID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 Grid 포맷에서 특정 Column 과 바인드 된 Cell 을 검색할 밴드 영역을 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역에서 Cell 을 검색합니다. "body" 설정 시 Body 밴드 영역에서 Cell 을 검색합니다. "summary" 설정 시 Summary 밴드 영역에서 Cell 을 검색합니다. |
| `strColID` | String | DataSet 의 Column ID 를 문자열로 설정합니다. |

**Return**: `Number` — ID 가 strColID 인 Column 과 바인드 된 첫번째 Cell 의 인덱스를 반환합니다.  ID 가 strColID 인 Column 과 바인드 된 Cell 이 없다면 -1 을 반환합니다.

**Remark**
- Cell 의 text 속성에 바인드된 Column ID 가 strColID 값과 같은 Cell 을 enumBand 값에 해당하는 영역에서 검색합니다.
   Cell 의 text 속성에 바인드된 Column ID 가 strColID 값과 같은 Cell 이 여러개 있을 경우 첫번째 Cell 의 인덱스를 반환합니다.

- Cell 인덱스는 row, col, rowspan, colspan 속성값과는 별도로 밴드내에서 Cell 이 위치한 인덱스 값입니다.
   getCellProperty(), setCellProperty() 메소드에서 파라미터로 사용하는 Cell 인덱스와 같습니다.

---

## getBindDataset

Grid 의 binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getBindDataset()
```

**Sample**
```javascript
this.Grid00.getBindDataset()
```

**Return**: `Object` — binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환합니다.

---

## getCellCount

Grid 에서 특정 밴드에 정의된 Cell 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getCellCount( enumBand )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 Grid 포맷에 정의된 Cell 의 갯수를 구할 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역에 정의된 Cell 의 갯수를 구합니다. "body" 설정 시 Body 밴드 영역에 정의된 Cell 의 갯수를 구합니다. "summary" 설정 시 Summary 밴드 영역에 정의된 Cell 의 갯수를 구합니다. |

**Return**: `Number` — enumBand 에 설정한 밴드 영역에 정의된 Cell 의 갯수를 반환합니다.

**Remark**
- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와 밴드의 Sub Row 갯수는 관계가 없습니다.

- 합병(Merge) 된 Cell 은 한개로 처리됩니다.

---

## getCellPos

Grid 에서 선택된 Cell 의 Cell 인덱스 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getCellPos()
```

**Sample**
```javascript
var nIndex = this.Grid00.getCellPos();
```

**Return**: `Number` — 선택된 Cell 의 Cell 인덱스 값을 반환합니다.

**Remark**
- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

---

## getCellProperty

Cell 의 특정 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getCellProperty( enumBand, nCellIdx, strPropID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 속성값을 가져올 Cell 이 속한 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드의 Cell 에서 속성값을 반환합니다. "body" 설정 시 Body 밴드의 Cell 에서 속성값을 반환합니다. "summary" 설정 시 Summary 밴드의 Cell 에서 속성값을 반환합니다. |
| `nCellIdx` | Number | 속성값을 가져올 Cell 의 Cell 인덱스를 설정합니다. |
| `strPropID` | String | 값을 가져올 속성명을 문자열로 설정합니다. |

**Return**: `String` — 특정 Cell 의 특정 속성값을 반환합니다.

**Remark**
- 스크립트나 넥사크로 스튜디오에서 직접 설정한 속성값만 저장됩니다.
  테마에 정의된 속성값은 적용은 되지만 속성에 저장되지 않습니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- 병합되었지만 각 Cell 정보가 유지되는 Sub Cell 은 getSubCellProperty() 메소드를 사용하여 각 Sub Cell 의 속성값을 가져올 수 있습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

---

## getCellPropertyValue

Grid 에 표시된 Cell 중 특정 Cell 에 적용된 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getCellPropertyValue( nRowIdx, nCellIdx, strPropID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | 속성값을 얻을 Cell 이 Grid 에서 위치한 Row 의 인덱스를 설정합니다.  "0 ~ Row 갯수-1" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다. "-1" 설정 시 Head 밴드로 적용됩니다. "-2" 설정 시 Summary 밴드로 적용됩니다. |
| `nCellIdx` | Number | 속성값을 얻을 Cell 의 Cell 인덱스를 설정합니다. |
| `strPropID` | String | 값을 가져올 속성명을 문자열로 설정합니다. |

**Return**: `String` — Cell 의 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다. Cell 의 속성이 EXPR 형식으로 설정되어 있다면 EXPR 이 적용된 값을 반환합니다. Cell 의 속성에 값이 설정되어 있다면 설정된 값을 반환합니다.

**Remark**
- Cell 인덱스는 Grid 의 포맷을 기준으로 설정되며 DataSet 의 데이터 갯수와는 관계없습니다.
   Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 포맷으로 구성되어 있고, Row 는 여러개의 SubRow 를 가질 수 있습니다.
   SubRow 를 갖는 밴드의 Cell 인덱스는 "SubRow 인덱스 * Column 갯수 + Cell 의 col 속성값" 으로 설정됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
   병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 0 부터 시작합니다.

---

## getCellRect

인수로 전달된 위치의 Cell 영역을 Rect 오브젝트로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getCellRect( nRow, nCellIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 영역 정보를 얻을 Cell 이 위치한 Row의 인덱스를 설정합니다.  "0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다. "-1" 설정 시 Head 밴드로 적용됩니다. "-2" 설정 시 Summary 밴드로 적용됩니다. |
| `nCellIdx` | Number | 영역 정보를 얻을 Cell 의 Cell 인덱스를 설정합니다. |

**Return**: `Object` — 인수로 전달된 위치의 Cell 영역 정보를 갖는 Rect 오브젝트를 반환합니다. 잘못된 위치의 Cell 지정 시 모든 속성값이 "0" 인 Rect 오브젝트를 반환합니다.  Rect 오브젝트는 "left", "top", "right", "bottom", "width", "height" 속성을 갖습니다. Cell 영역의 정보는 Rect 오브젝트의 각 속성에 저장됩니다.

**Remark**
- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

---

## getCellText

인수로 전달된 위치의 Cell 에 표시되는 텍스트값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getCellText( nRow, nCellIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 텍스트값을 얻을 Cell 이 위치한 Row의 인덱스를 설정합니다.  "0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다. "-1" 설정 시 Head 밴드로 적용됩니다. "-2" 설정 시 Summary 밴드로 적용됩니다. |
| `nCellIdx` | Number | 텍스트값을 얻을 Cell 의 Cell 인덱스를 설정합니다. |

**Return**: `String` — 인수로 전달된 위치의 Cell 에 표시되는 텍스트값을 반환합니다.

**Remark**
- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

---

## getCellValue

인수로 전달된 위치의 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getCellValue( nRow, nCellIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | text 속성값을 얻을 Cell 이 위치한 Row의 인덱스를 설정합니다.  "0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다. "-1" 설정 시 Head 밴드로 적용됩니다. "-2" 설정 시 Summary 밴드로 적용됩니다. |
| `nCellIdx` | Number | text 속성값을 얻을 Cell 의 Cell 인덱스를 설정합니다. |

**Return**: `String` — Cell 의 text 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다. Cell 의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다. Cell 의 text 속성이 EXPR 형식으로 설정되어 있다면 EXPR 이 적용된 값을 반환합니다.

**Remark**
- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

---

## getCurEditType

Grid 에서 선택된 Cell 의 edittype 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getCurEditType()
```

**Sample**
```javascript
var strEditType = this.Grid00.getCurEditType();
```

**Return**: `String` — 선택된 Cell 의 editytype 속성값을 반환합니다.

**Remark**
- Body 밴드에 속한 Cell 만 getCurEditType() 메소드를 사용할 수 있습니다.

---

## getCurFormatString

Grid 에 현재 표시되고 있는 포맷을 XML 형식의 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getCurFormatString( [bOrginal] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bOrginal` | Boolean | 동적으로 변경된 포맷을 반영하여 반환할 지 여부를 설정합니다.  true 설정 시 동적으로 변경된 포맷은 무시하고, 디자인 시 설정한 포맷을 반환합니다. false 설정 시 동적으로 변경된 포맷을 반영하여 반환합니다.  값을 설정하지 않으면 false 로 적용됩니다. |

**Return**: `String` — 현재 Grid 에 표시되고 있는 포맷을 XML 형식의 문자열로 반환합니다.  기본적인 XML 형식은 아래와 같으며 Head, Body, Summary 정의는 포맷에 따라 없을 수 있습니다.  <Format id="default">   <Columns>....</Columns>   <Rows>....</Rows>   <Band id="head">...</Band>   <Band id="body">...</Band>   <Band id="summary">..</Band> </Format>

**Remark**
- Grid 에 여러개의 포맷이 정의되어 있는 경우 현재 화면에 표시되는 포맷을 반환합니다.

- Grid 에 정의된 전체 포맷을 확인하려면 getFormatString() 메소드를 사용하여야 합니다.

**See Also**: getFormatString

---

## getDatasetRow

Grid 의 Row 인덱스에 해당하는 DataSet 의 Row 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getDatasetRow( nRowIndex )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | Grid 의 Row 인덱스를 숫자로 설정합니다. |

**Return**: `Number` — Grid 의 Row 인덱스에 해당하는 DataSet 의 Row 인덱스값을 반환합니다.  정상적으로 값을 구할 수 없을 경우는 -1 을 반환합니다.

**Remark**
- Grid 가 트리 형식일 때는 Collapse/Expand 에 따라 Grid 의 Row 인덱스와 DataSet 의 Row 인덱스가 일치하지 않을 수 있습니다.
   getDatasetRow() 메소드는 Row 인덱스가 서로 일치하지 않는 상황에서 사용하는 메소드입니다.

---

## getEditCaret

Cell 이 편집상태일 때 캐럿이 위치한 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getEditCaret()
```

**Sample**
```javascript
var nCaretPos = this.Grid00.getEditCaret();
```

**Return**: `Number` — 인덱스는 0 부터 시작하며 캐럿이 위치한 인덱스를 반환합니다.  Cell 이 편집상태가 아니면 -1 을 반환합니다.

**Remark**
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.

---

## getEditingText

Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 text 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getEditingText()
```

**Sample**
```javascript
var strInputText = this.Grid00.getEditingText();
```

**Return**: `String` — Cell 에 표시된 편집모드용 컨트롤에 입력중인 text 값을 문자열로 반환합니다.  Cell 의 edittype 속성값이 "checkbox", "tree" 이면 undefined 를 반환합니다. Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자가 포함된 입력중인 값을 반환합니다.

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 text 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 text 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   getEdiingText() 메소드는 하위컨트롤인 comboedit, calendaredit 의 text 속성값을 반환하므로 입력중인 값이 반환됩니다.

- Cell 의 edittype 속성값이 "date", "mask" 이면 getEditingValue() 메소드와 getEditingText() 메소드의 반환값이 달라질 수 있습니다.

**See Also**: setEditingValue, setEditValue, getEditingValue, getEditText, getEditValue

---

## getEditingValue

Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 value 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getEditingValue()
```

**Sample**
```javascript
var strInputValue = this.Grid00.getEditingValue();
```

**Return**: `String` — Cell 에 표시된 편집모드용 컨트롤에 입력중인 value 값을 문자열로 반환합니다.  Cell 의 edittype 속성값이 "button", "checkbox", "tree" 이면 undefined 를 반환합니다. Cell 의 edittype 속성값이 "date" 이면 마스크 문자가 제외된 입력중인 원본값을 날짜형식에 맞게 보정하여 반환합니다. Cell 의 edittype 속성값이 "mask" 이면 마스크 문자가 제외된 입력중인 원본값만 반환합니다.

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   getEditngValue() 메소드는 하위컨트롤인 comboedit, calendaredit 의 value 속성값을 반환하므로 입력중인 값이 반환됩니다.

- Cell 의 edittype 속성값이 "date", "mask" 이면 getEditingValue() 메소드와 getEditingText() 메소드의 반환값이 달라질 수 있습니다.

**See Also**: setEditingValue, setEditValue, getEditingText, getEditText, getEditValue

---

## getEditSelect

Cell 이 편집상태일 때 선택된 텍스트의 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getEditSelect()
```

**Sample**
```javascript
var varArrSelect = this.Grid00.getEditSelect();
```

**Return**: `Array` — 선택된 텍스트의 시작 인덱스와 끝 인덱스를 각각 배열의 0번, 1번 원소로 반환합니다. 선택된 텍스트가 없는 경우 현재 캐럿 위치를 배열의 0번, 1번 원소로 반환합니다.  인덱스는 0 부터 시작합니다

**Remark**
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.

---

## getEditSelectedText

Cell 이 편집상태일 때 선택된 텍스트를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getEditSelectedText()
```

**Sample**
```javascript
var strText = this.Grid00.getEditSelectedText();
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
Grid.getEditText()
```

**Sample**
```javascript
var strText = this.Grid00.getEditText();
```

**Return**: `String` — Cell 에 표시된 편집모드용 컨트롤의 text 속성값을 문자열로 반환합니다.  Grid 의 edittype 속성값이 "checkbox", "tree" 이면 undefined 를 반환합니다. Grid 의 edittype 속성값이 "combo", "date" 이면 컨트롤에 입력중인 값이 아닌 원본 text 속성값을 반환합니다.

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 text 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 text 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   따라서, Cell 의 edittype 속성값이 "combo", "date" 일 때 getEditText() 메소드는 입력중인 값을 반환하지 않습니다.

- Cell 의 edittype 속성값이 "combo", "date" 일 때 컨트롤에 입력중인 text 값을 반환 받으려면 getEditingText() 메소드를 사용하여야 합니다.

- Cell 의 edittype 속성값이 "combo", "date", "mask" 이면 getEditValue() 메소드와 getEditText() 메소드의 반환값이 달라질 수 있습니다.

**See Also**: setEditingValue, setEditValue, getEditingText, getEditingValue, getEditValue

---

## getEditValue

Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getEditValue()
```

**Sample**
```javascript
var strValue = this.Grid00.getEditValue();
```

**Return**: `String` — Cell 에 표시된 편집모드용 컨트롤의 value 속성값을 문자열로 반환합니다.  Cell 의 edittype 속성값이 "button", "checkbox", "tree" 이면 undefined 를 반환합니다. Cell 의 edittype 속성값이 "combo", "date" 이면 컨트롤에 입력중인 값이 아닌 원본 value 속성값을 반환합니다.

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   따라서, Cell 의 edittype 속성값이 "combo", "date" 일 때 getEditVaue() 메소드는 입력중인 값을 반환하지 않습니다.

- Cell 의 edittype 속성값이 "combo", "date" 일 때 컨트롤에 입력중인 value 값을 반환 받으려면 getEditingValue() 메소드를 사용하여야 합니다.

- Cell 의 edittype 속성값이 "combo", "date", "mask" 이면 getEditValue() 메소드와 getEditText() 메소드의 반환값이 달라질 수 있습니다.

**See Also**: setEditingValue, setEditValue, getEditingText, getEditingValue, getEditText

---

## getEventHandler

Grid 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getFormatColCount

Grid 에 표시되고 있는 포맷에 정의된 Column 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getFormatColCount()
```

**Sample**
```javascript
var nColCount = this.Grid00.getFormatColCount();
```

**Return**: `Number` — 현재 Grid 에 표시되고 있는 포맷에 정의된 Column 의 갯수를 반환합니다.

**Remark**
- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시되어 있는 포맷의 Column 갯수를 반환합니다.

---

## getFormatColProperty

Grid 에 표시되고 있는 포맷에 정의된 Column 의 특정 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getFormatColProperty( nColIdx, strPropId )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nColIdx` | Number | 현재 포맷에 정의된 전체 Column 을 기준으로 속성값을 가져올 Column 인덱스 값을 설정합니다.  Column 인덱스는 "0" 부터 시작합니다. |
| `strPropId` | String | 값을 가져올 속성명을 문자열로 설정합니다.  Grid 의 Column 에는 "band"와 "size" 두가지 속성이 정의되어 있습니다. |

**Return**: `String` — 특정 Column 의 특정 속성값을 반환합니다.

---

## getFormatColSize

Grid 의 포맷에 정의된 Column 의 너비를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getFormatColSize( nColIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nColIdx` | Number | 현재 포맷에 정의된 전체 Column 을 기준으로 속성값을 가져올 Column 인덱스 값을 설정합니다.  Column 인덱스는 "0"부터 시작합니다. |

**Return**: `Number` — 디자인 시 설정한 Column 의 너비를 반환합니다. 존재하지 않는 인덱스를 지정하면 "-1"을 반환합니다.

**Remark**
- getFormatColProperty() 메소드에서 "size" 속성값을 얻는 것과 같습니다.

- getFormatColSize() 메소드는 동적으로 변경된 값은 반영되지 않고, 디자인 시 설정한 Column 의 너비를 반환합니다.
  동적으로 변경된 값이 반영된 Column 너비는 getRealColSize() 메소드를 사용하여야 합니다.

---

## getFormatIdList

Format id 배열값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getFormatIdList();
```

**Sample**
```javascript
var arrFormatIdList = this.Grid00.getFormatIdList();
```

**Return**: `Object` — Format id 목록을 배열로 반환합니다. 값이 없는 경우에는 빈 배열을 반환합니다.

---

## getFormatRowCount

Grid 에 표시되고 있는 포맷에 정의된 모든 Row 또는 Sub Row 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getFormatRowCount()
```

**Sample**
```javascript
var nCurrnetRowCount = this.Grid00.getFormatRowCount();
```

**Return**: `Number` — 현재 Grid 에 표시되고 있는 포맷에 정의된 Row 또는 Sub Row 의 총 갯수를 반환합니다.  Head, Body, Summary 밴드에 정의된 각 Row 의 총 갯수의 합을 반환합니다. Row 에 Sub Row 가 정의되어 있다면 Sub Row 의 갯수를 반영합니다.

**Remark**
- Summary 밴드는 정의되지 않았고, Head 밴드에 1개 Row, Body 밴드에 두줄로 된 Row 가 정의되어 있다면 "3" 이 반환됩니다.

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시되어 있는 포맷의 Row 갯수를 반환합니다.

- Grid 의 formats 속성에 정의된 <Rows>의 <Row> 태그 갯수와 일치합니다.

---

## getFormatRowProperty

Grid 에 표시되고 있는 포맷에 정의된 Row 의 특정 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getFormatRowProperty( nRowIdx, strPropId )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | 현재 포맷에 정의된 전체 Row 를 기준으로 속성값을 가져올 Row의 인덱스 값을 설정합니다.  Head, Body, Summary 밴드에 정의된 전체 Row를 기준으로 인덱스를 설정합니다. Row 에 Sub Row 가 정의되어 있다면 Sub Row 도 인덱스에 포함됩니다. Row 인덱스는 "0"부터 시작합니다. |
| `strPropId` | String | 값을 가져올 속성명을 문자열로 설정합니다.  Grid 의 Row 에는 "band"와 "size" 두가지 속성이 정의되어 있습니다. |

**Return**: `String` — 특정 Row 의 특정 속성값을 반환합니다.

**Remark**
- Summary 밴드는 정의되지 않았고, Head 밴드에 1개 Row, Body 밴드에 두줄로 된 Row 가 정의된 포맷에서
  nRowIdx 값을 "2" 로 설정하면 Body 밴드의 마지막 Sub Row 를 의미합니다.

---

## getFormatRowSize

Grid 의 포맷에 정의된 Row 또는 Sub Row 의 높이를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getFormatRowSize( nRowIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | 얻고자 하는 Format Rows의 Row 에 대한 Index 입니다.  현재 포맷에 정의된 전체 Row 를 기준으로 높이를 가져올 Row 의 인덱스 값을 설정합니다.  Head, Body, Summary 밴드에 정의된 전체 Row를 기준으로 인덱스를 설정합니다. Row 에 Sub Row 가 정의되어 있다면 Sub Row 도 인덱스에 포함됩니다. Row 인덱스는 "0"부터 시작합니다. |

**Return**: `Number` — 디자인 시 설정한 Row 또는 Sub Row 의 높이를 반환합니다. 존재하지 않는 인덱스를 지정하면 "-1"을 반환합니다.

**Remark**
- getFormatRowProperty() 메소드에서 "size" 속성값을 얻는 것과 같습니다.

- Summary 밴드는 정의되지 않았고, Head 밴드에 1개 Row, Body 밴드에 두줄로 된 Row 가 정의된 포맷에서
  nRowIdx 값을 "2" 로 설정하면 Body 밴드의 마지막 Sub Row 를 의미합니다.

- 동적으로 변경된 Row 의 높이는 반영되지 않고, 디자인 시 설정한 Row 의 높이를 반환합니다.

---

## getFormatString

디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getFormatString()
```

**Sample**
```javascript
var strContents = this.Grid00.getFormatString();
```

**Return**: `String` — 디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환합니다. 동적으로 변경된 포맷값은 반영되지 않습니다.  기본적인 XML 형식은 아래와 같으며 Head, Body, Summary 정의는 포맷에 따라 없을 수 있습니다.  <Formats>   <Format id="default">     <Columns>....</Columns>     <Rows>....</Rows>     <Band id="head">...</Band>     <Band id="body">...</Band>     <Band id="summary">..</Band>   </Format>   <Format id="format00">     <Columns>....</Columns>     <Rows>....</Rows>     <Band id="head">...</Band>     <Band id="body">...</Band>     <Band id="summary">..</Band>   </Format> </Formats>

---

## getHeadValue

Grid 컴포넌트의 Head 밴드 영역 내 특정 Cell의 text 속성값 또는 Cell 내부에서 관리하는 HeadValue 값을 반환하는 메서드입니다.

**Syntax**
```javascript
Grid.getHeadValue( nCellIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCellIdx` | Number | text 속성값 또는 Cell 내부에서 관리하는 HeadValue 값을 얻을 Cell 인덱스를 설정합니다. |

**Return**: `String` — Cell의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다. Cell의 expr 속성이 설정되어 있다면 text 속성값에 EXPR 이 적용된 값을 반환합니다. Cell의 text 속성이 Dataset 오브젝트에 바인드되어 있다면 바인드된 Dataset 오브젝트에서 현재 선택된 Row의 Column 값을 반환합니다. Cell 내부에서 관리하는 HeadValue 값이 undefined가 아닌 경우에는 HeadValue 값을 반환합니다.  존재하지 않는 Cell 인덱스를 설정하면 "null"을 반환합니다.

**Remark**
◆ HeadValue 값 반환

- Cell edittype 속성값이 "none"이 아니고 편집 상태에서 값을 변경하거나 setHeadValue 메서드로 값을 변경한 경우에는 text 속성값이 아닌 Cell 내부에서 관리하는 HeadValue 값을 반환합니다.

- Cell 내부에서 관리하는 HeadValue 초기값은 undefined입니다.
  Cell text 속성값이 변경되거나 Grid 컴포넌트의 format 변경 시 HeadValue 값은 undefined로 변경됩니다.
  HeadValue 값이 undefined인 경우에는 메서드 호출 시 text 속성값을 반환합니다.

◆ nCellIdx 매개 변수 참고

- Grid 의 Head 밴드는 한 개의 Row로 구성되어 있고, Row는 여러개의 Sub Row를 가질 수 있습니다.
  Dataset 오브젝트의 데이터 개수와는 관계없습니다.
  Sub Row를 갖는 Row에서 Cell 인덱스는 (Sub Row 인덱스 * Column 개수 + Cell의 col 속성값) 이 됩니다.

- Head 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫 번째 Cell의 Cell 인덱스를 갖습니다.

- Cell의 col 속성값을 수정하지 않았다면 Cell 인덱스는 0부터 시작합니다.

---

## getHScrollPos

Grid 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getHScrollPos()
```

**Sample**
```javascript
var nScrollPos = this.Grid00.getHScrollPos();
```

**Return**: `Number` — 수평스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**
- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수직스크롤바의 트랙바 위치값을 구하려면 getVScrollPos() 메소드를 사용하여야 합니다.

**See Also**: getVScrollPos, scrollbartype

---

## getOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getOffsetBottom();
```

**Sample**
```javascript
var nBottom = this.Grid.getOffsetBottom();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 동적으로 계산합니다.

---

## getOffsetHeight

Grid 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getOffsetHeight();
```

**Sample**
```javascript
var nHeight = this.Grid.getOffsetHeight();
```

**Return**: `Number` — Grid 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Grid 의 높이를 동적으로 계산합니다.

---

## getOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getOffsetLeft();
```

**Sample**
```javascript
var nleft = this.Grid.getOffsetLeft();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 동적으로 계산합니다.

---

## getOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getOffsetRight();
```

**Sample**
```javascript
var nRight = this.Grid.getOffsetRight();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 동적으로 계산합니다.

---

## getOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getOffsetTop();
```

**Sample**
```javascript
var nTop = this.Grid.getOffsetTop();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 동적으로 계산합니다.

---

## getOffsetWidth

Grid 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getOffsetWidth();
```

**Sample**
```javascript
var nWidth = this.Grid.getOffsetWidth();
```

**Return**: `Number` — Grid 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Grid 의 너비를 동적으로 계산합니다.

---

## getPixelBottom

Grid 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getPixelBottom();
```

**Sample**
```javascript
var nbottom = this.Grid.getPixelBottom();
```

**Return**: `Number` — Grid 의 bottom 속성값을 픽셀단위로 반환합니다.  bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelHeight

Grid 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getPixelHeight();
```

**Sample**
```javascript
var nheight = this.Grid.getPixelHeight();
```

**Return**: `Number` — Grid 의 height 속성값을 픽셀단위로 반환합니다.  height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelLeft

Grid 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getPixelLeft();
```

**Sample**
```javascript
var nleft = this.Grid.getPixelLeft();
```

**Return**: `Number` — Grid 의 left 속성값을 픽셀단위로 반환합니다.  left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelRight

Grid 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getPixelRight();
```

**Sample**
```javascript
var nright = this.Grid.getPixelRight();
```

**Return**: `Number` — Grid 의 right 속성값을 픽셀단위로 반환합니다.  right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelTop

Grid 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getPixelTop();
```

**Sample**
```javascript
var ntop = this.Grid.getPixelTop();
```

**Return**: `Number` — Grid 의 top 속성값을 픽셀단위로 반환합니다.  top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelWidth

Grid 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getPixelWidth();
```

**Sample**
```javascript
var nwidth = this.Grid.getPixelWidth();
```

**Return**: `Number` — Grid 의 width 속성값을 픽셀단위로 반환합니다.  width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getRealColFullSize

Grid 에 표시되고 있는 포맷에서 전체 Column 의 너비를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getRealColFullSize( [enumBand] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 Grid 포맷에서 전체 Column 의 너비를 구할 밴드를 문자열로 설정합니다.  "left" 설정 시 Left 밴드 영역의 전체 Column 너비를 구합니다. "body" 설정 시 Body 밴드 영역의 전체 Column 너비를 구합니다. "right" 설정 시 Right 밴드 영역의 전체 Column 너비를 구합니다.  값을 지정하지 않으면 밴드 영역에 관계없이 전체 Column 의 너비를 구합니다. |

**Return**: `Number` — 지정된 영역에서 전체 Column의 너비를 반환합니다. Column 의 너비를 구하지 못했을 경우 "0" 을 반환합니다.

**Remark**
- 사용자가 Column 의 너비를 변경하거나 자동조절 된 경우 변경된 너비가 반영됩니다.

---

## getRealColSize

Grid 에 표시되고 있는 포맷에서 특정 Column 의 너비를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getRealColSize( nColIdx [, bBodyIdx] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nColIdx` | Number | 너비를 가져 올 Column 의 인덱스를 설정합니다.  Column 인덱스는 "0" 부터 시작합니다. |
| `bBodyIdx` | Boolean | nColIdx 에 설정한 인덱스값이 Body 밴드 기준인지 전체 Column 기준인지 설정합니다.  "true" 설정 시 Body 밴드 영역을 기준으로 nColIdx 값을 처리합니다. "false" 설정 시 밴드 영역에 관계없이 전체 Column 기준으로 nColIdx 값을 처리합니다.  값을 설정하지 않으면 "false"로 적용됩니다. |

**Return**: `Number` — 현재 표시되는 포맷에서 특정 Column의 너비를 반환합니다. Column 의 너비를 구하지 못했을 경우 "0" 을 반환합니다.

**Remark**
- 사용자가 Column 의 너비를 변경하거나 자동조절 된 경우 변경된 너비가 적용됩니다.

- getRealColSize() 메소드는 동적으로 변경된 값을 반영하여 Column 너비를 반환합니다.
  동적으로 변경된 값이 반영되지 않은 디자인 시 설정한 Column 너비는 getFormatColSize() 메소드를 사용하여야 합니다.

---

## getRealRowFullSize

Grid 에 표시되고 있는 포맷에서 전체 Row 의 높이를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getRealRowFullSize( [enumBand] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 Grid 포맷에서 전체 Row 의 높이를 구할 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역의 전체 Row 높이를 구합니다. "body" 설정 시 Body 밴드 영역의 전체 Row 높이를 구합니다. "summary" 설정 시 Summary 밴드 영역의 전체 Row 높이를 구합니다.  값을 지정하지 않으면 밴드 영역에 관계없이 전체 Row 의 높이를 구합니다. |

**Return**: `Number` — 지정된 영역에서 전체 Row 의 높이를 반환합니다. Row 의 높이를 구하지 못했을 경우 "0" 을 반환합니다.

**Remark**
- 사용자가 Row 의 높이를 변경하거나 자동조절 된 경우 변경된 높이가 반영됩니다.

---

## getRealRowSize

Grid 에 표시된 데이터 Row 에서 특정 Row 또는 SubRow 의 높이를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getRealRowSize( nRowIdx [, nSubRowIdx [, bBody]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | 높이를 가져 올 Row 의 인덱스 또는 밴드영역을 설정합니다.  "0~Row 갯수" 설정 시 bBody 값이 true 이면 Body 밴드영역의 Row 인덱스로 적용됩니다. "0~Row 갯수" 설정 시 bBody 값이 false 이면 밴드영역에 관계 없이 전체 Row 의 인덱스로 적용됩니다. -1 설정 시 bBody 값이 true 이면 Head 밴드영역으로 적용됩니다. -2 설정 시 bBody 값이 true 이면 Summary 밴드영역으로 적용됩니다.  Row 인덱스는 0 부터 시작합니다. |
| `nSubRowIdx` | Number | nRowIdx 값에 해당하는 Row 에서 높이를 가져 올 SubRow 의 인덱스를 설정합니다.  "0~SubRow 갯수" 설정 시 해당 SubRow 의 높이를 반환합니다. -1 설정 시 nRowIdx 값에 해당하는 Row 의 전체 높이를 반환합니다.  SubRow 의 인덱스는 0 부터 시작합니다. 값을 생략하면 -1 로 적용됩니다. |
| `bBody` | Boolean | nRowIdx 값이 적용될 영역을 설정합니다.  true 설정 시 nRowIdx 값은 Body 밴드영역의 Row 인덱스로 적용됩니다. false 설정 시 nRowIdx 값은 밴드영역에 관계없이 전체 Row 의 인덱스로 적용됩니다.  값을 생략하면 true 로 적용됩니다. |

**Return**: `Number` — 파라미터로 지정한 Row 또는 SubRow 의 높이를 반환합니다.  Row 또는 SubRow 의 높이를 구하지 못했을 경우 0 을 반환합니다.

**Remark**
- nRowIdx 값에 해당하는 Row 에 SubRow 가 없는 경우 nSubRowIdx 값은 무시됩니다.

- extendsizetype 속성값이 "none" 이면 Body 밴드의 Row 또는 SubRow 는 각 Row 마다 동일한 높이를 갖습니다.

- getRealRowSize() 메소드는 동적으로 변경된 값을 반영하여 Row 높이를 반환합니다.
   따라서 Row 의 높이가 자동조절 되었거나 사용자가 높이를 변경한 경우 변경된 높이가 반환됩니다.
   동적으로 변경된 값이 반영되지 않은 디자인에서 설정한 포맷의 Row 높이를 구하려면 getFormatRowSize() 메소드를 사용하여야 합니다.

**See Also**: getFormatRowSize

---

## getSelectedDatasetRows

Grid 에 선택되어 있는 Row 들에 해당하는 DataSet 의 Row 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getSelectedDatasetRows()
```

**Sample**
```javascript
var aDSRowidx = this.Grid00.getSelectedDatasetRows();
```

**Return**: `Array` — Grid 에 선택된 Row 들에 해당하는 DataSet 의 Row 인덱스를 배열로 반환합니다.

**Remark**
- Grid 가 트리 형식일 때는 Collapse/Expand 에 따라 Grid 의 Row 인덱스와 DataSet 의 Row 인덱스가 일치하지 않을 수 있습니다.

---

## getSelectedRows

Grid 에 선택되어 있는 Row 의 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getSelectedRows()
```

**Sample**
```javascript
var arrRowidx = this.Grid00.getSelectedRows()
```

**Return**: `Array` — Grid 에 선택되어 있는 Row 의 인덱스를 배열로 반환합니다.  선택된 Row 가 없을 경우 빈 배열을 반환합니다.

**Remark**
- selecttype 속성값이 "cell" 이면 선택된 Cell 을 포함하는 Row 가 getSelectedRows() 메소드 호출 시 포함됩니다.

- Grid 가 트리 형식일 때는 Collapse/Expand 에 따라 Grid 의 Row 인덱스와 DataSet 의 Row 인덱스가 일치하지 않을 수 있습니다.
  getSelectedRows() 메소드는 DataSet 과 관계없이 현재 Grid 에 표시되는 Row 를 기준으로 인덱스를 반환합니다.

---

## getSubCellCount

인수로 전달 된 Cell 이 Sub Cell 구조일 때 Sub Cell 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getSubCellCount( enumBand, nCellIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | nCellIdx 에 해당하는 Cell 이 속한 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. "body" 설정 시 Body 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. "summary" 설정 시 Summary 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. |
| `nCelIldx` | Number | Sub Cell 의 갯수를 확인 할 Cell 의 인덱스를 설정합니다. |

**Return**: `Number` — 인수로 전달 된 Cell 의 Sub Cell 갯수를 반환합니다.  Sub Cell 이 아닐 경우 "0" 을 반환합니다.

**Remark**
- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

---

## getSubCellProperty

Cell 이 Sub Cell 구조일 때 특정 Sub Cell 의 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getSubCellProperty( enumBand, nCellIdx, nSubCellIdx, strPropID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | nCellIdx 에 해당하는 Cell 이 속한 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. "body" 설정 시 Body 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. "summary" 설정 시 Summary 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. |
| `nCellIdx` | Number | Sub Cell 로 구성된 Cell 의 인덱스를 설정합니다. |
| `nSubCellIdx` | Number | 속성값을 가져 올 Sub Cell 의 인덱스를 설정합니다. |
| `strPropID` | String | 값을 가져 올 Sub Cell 의 속성명을 문자열로 설정합니다. |

**Return**: `String` — 특정 Sub Cell 의 속성값을 반환합니다.

**Remark**
- getSubCellProperty() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.

---

## getSubCellPropertyValue

Grid 에 표시된 Cell 중 특정 SubCell 에 적용된 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getSubCellPropertyValue( nRowIdx, nCellIdx, nSubCellIdx, strPropID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | 속성값을 얻을 SubCell 이 Grid 에서 위치한 Row 의 인덱스를 설정합니다.  "0 ~ Row 갯수-1" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다. "-1" 설정 시 Head 밴드로 적용됩니다. "-2" 설정 시 Summary 밴드로 적용됩니다. |
| `nCellIdx` | Number | 속성값을 얻을 SubCell 이 속한 Cell 의 인덱스를 설정합니다. |
| `nSubCellIdx` | Number | 속성값을 얻을 SubCell 의 인덱스를 설정합니다. |
| `strPropID` | String | 값을 가져올 속성명을 문자열로 설정합니다. |

**Return**: `String` — SubCell 의 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다. SubCell 의 속성이 EXPR 형식으로 설정되어 있다면 EXPR 이 적용된 값을 반환합니다. SubCell 의 속성에 값이 설정되어 있다면 설정된 값을 반환합니다.

**Remark**
- Cell 인덱스는 Grid 의 포맷을 기준으로 설정되며 DataSet 의 데이터 갯수와는 관계없습니다.
   Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 포맷으로 구성되어 있고, Row 는 여러개의 SubRow 를 가질 수 있습니다.
   SubRow 를 갖는 밴드의 Cell 인덱스는 "SubRow 인덱스 * Column 갯수 + Cell 의 col 속성값" 으로 설정됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
   병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 0 부터 시작합니다.

---

## getSubCellRect

특정 Cell 에서 Sub Cell 영역을 Rect 오브젝트로 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getSubCellRect(nRow,nCellIdx,nSubCellIdx)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 영역 정보를 얻을 Sub Cell 이 위치한 Row의 인덱스를 설정합니다.  "0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다. "-1" 설정 시 Head 밴드로 적용됩니다. "-2" 설정 시 Summary 밴드로 적용됩니다. |
| `nCellIdx` | Number | 영역 정보를 얻을 Sub Cell 을 가진 Cell 의 Cell 인덱스를 설정합니다. |
| `nSubCellIdx` | Number | 영역 정보를 얻을 Sub Cell 의 Sub Cell 인덱스를 설정합니다. |

**Return**: `Object` — 특정 Cell 의 Sub Cell 영역 정보를 갖는 Rect 오브젝트를 반환합니다. Sub Cell 이 아니거나 잘못된 위치의 Sub Cell 지정 시 모든 속성값이 "0" 인 Rect 오브젝트를 반환합니다.  Rect 오브젝트는 "left", "top", "right", "bottom", "width", "height" 속성을 갖습니다. Cell 영역의 정보는 Rect 오브젝트의 각 속성에 저장됩니다.

**Remark**
- getSubCellRect() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.

---

## getSubCellText

특정 Cell 의 Sub Cell 에 표시되는 텍스트값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getSubCellText( nRow, nCellIdx, nSubCellIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 텍스트값을 얻을 Sub Cell 이 위치한 Row 의 인덱스를 설정합니다.  "0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다. "-1" 설정 시 Head 밴드로 적용됩니다. "-2" 설정 시 Summary 밴드로 적용됩니다. |
| `nCellIdx` | Number | 텍스트값을 얻을 Sub Cell 을 가진 Cell 의 Cell 인덱스를 설정합니다. |
| `nSubCellIdx` | Number | 텍스트값을 얻을 Sub Cell 의 Sub Cell 인덱스를 설정합니다. |

**Return**: `String` — 특정 Cell 의 Sub Cell 에 표시되는 텍스트값을 반환합니다.

**Remark**
- getSubCellText() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.

---

## getSubCellValue

특정 Sub Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getSubCellValue( nRow, nCellIdx, nSubCellIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | text 속성값을 얻을 Sub Cell 이 위치한 Row의 인덱스를 설정합니다.  "0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다. "-1" 설정 시 Head 밴드로 적용됩니다. "-2" 설정 시 Summary 밴드로 적용됩니다. |
| `nCellIdx` | Number | text 속성값을 얻을 Sub Cell 을 가진 Cell 의 Cell 인덱스를 설정합니다. |
| `nSubCellIdx` | Number | text 속성값을 얻을 Sub Cell 의 Sub Cell 인덱스를 설정합니다. |

**Return**: `String` — Sub Cell 의 text 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다. Sub Cell 의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다. Sub Cell 의 expr 속성이 설정되어 있다면 text 속성값에 EXPR 이 적용된 값을 반환합니다.

**Remark**
- getSubCellValue() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.

---

## getSummValue

Grid 의 Summary 밴드 영역에서 특정 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getSummValue( nCellIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCellIdx` | Number | text 속성값을 얻을 Cell 의 Cell 인덱스를 설정합니다. |

**Return**: `String` — Cell 의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다. Cell 의 expr 속성이 설정되어 있다면 text 속성값에 EXPR 이 적용된 값을 반환합니다. Cell 의 text 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 에서 현재 선택된 Row의 Column 값을 반환합니다.  존재하지 않는 Cell 인덱스를 설정하면 "null"을 반환합니다.

**Remark**
- Grid 의 Summary 밴드는 한개의 Row 로 구성되어 있고, Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 Row 에서 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- Summary 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

---

## getTreeChildCount

Grid 가 트리 형식일 때 특정 Row 에 자식으로 존재하는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getTreeChildCount( nRowIndex [,bDatasetRow] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 자식 Row 의 갯수를 확인할 Row 의 인덱스를 설정합니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `Number` — 특정 Row 의 자식 Row 갯수를 반환합니다.  자식 Row 의 갯수를 구할 수 없거나 존재하는 자식 Row 가 없을 경우 "0"을 반환합니다. Grid 가 트리 형식이 아니어도 "0"을 반환합니다.

---

## getTreeChildRow

Grid 가 트리 형식일 때 특정 Row 의 자식 Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getTreeChildRow( nRowIndex, nChildIndex [,bDatasetRow] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 자식 Row 의 DataSet Row 값을 확인할 Row 의 인덱스를 설정합니다. |
| `nChildIndex` | Number | nRowIndex 값에 해당하는 Row 의 자식 Row 중 DataSet Row 값을 확인 할 자식 Row 의 인덱스를 설정합니다.  "-1" 설정 시 nRowIndex 값에 해당하는 Row 의 마지막 자식 Row 로 처리됩니다. "0~자식 Row 갯수" 설정 시 nRowIndex 값에 해당하는 Row 의 자식 Row 인덱스로 처리됩니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `Number` — 특정 Row 의 자식 Row 에 해당하는 DataSet Row 값을 반환합니다.  Grid 가 트리 형식이 아니거나 nRowIndex 에 해당하는 Row 가 단말(Leaf) Row 일 경우 "-1"을 반환합니다.

**Remark**
- DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 구할 때는 getTreeRow() 메소드를 사용해야 합니다.

- 특정 Row 가 단말(Leaf) Row 인지 확인하지 위해서는 isTreeLeafRow() 메소드를 사용해야 합니다.

---

## getTreeParentRow

Grid 가 트리 형식일 때 특정 Row 의 부모 Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getTreeParentRow( nRowIndex[,bDatasetRow] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 부모 Row 의 DataSet Row 값을 확인할 Row 의 인덱스를 설정합니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `Number` — 특정 Row 의 부모 Row 에 해당하는 DataSet Row 값을 반환합니다.  Grid 가 트리 형식이 아니거나 nRowIndex 에 해당하는 Row 가 뿌리(Root) Row 일 경우 "-1"을 반환합니다.

**Remark**
- DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 구할 때는 getTreeRow() 메소드를 사용해야 합니다.

- 특정 Row 가 뿌리(Root) Row 인지 확인하지 위해서는 isTreeRootRow() 메소드를 사용해야 합니다.

---

## getTreePath

Grid 가 트리 형식일 때 뿌리(Root) Row 에서 특정 Row 까지 각 Row 의 text 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getTreePath( nRowIndex [,bDatasetRow] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 뿌리(Root) Row 부터 경로를 구할 Row 의 인덱스를 설정합니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `String` — 뿌리(Root) Row 에서 특정 Row 까지 트리 Cell 에 표시되는 텍스트를 마침표(".")로 연결하여 반환합니다.  Grid 가 트리  형식이 아니거나 뿌리(Root) Row 까지의 경로를 구할 수 없을 때는 빈 문자열을 반환합니다.

---

## getTreeRow

인수로 전달된 DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getTreeRow( nDSRowIndex )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nDSRowIndex` | Number | DataSet 의 Row 인덱스 값을 설정합니다. |

**Return**: `Number` — DataSet 의 Row 값에 해당하는 데이터가 Grid 에 표시되는 위치의 Row 값을 반환합니다.  트리 Cell 이 Collapse 되어 Grid 에 데이터가 표시되지 않으면 "-1"을 반환합니다. Grid 가 트리 형식이 아니어도 "-1"을 반환합니다.

---

## getTreeSiblingRow

Grid 가 트리 형식일 때 특정 Row 의 형제(Sibling) Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getTreeSiblingRow( nRowIndex [,nOffset [,bDatasetRow]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 형제(Sibling) Row 의 DataSet Row 값을 확인할 Row 의 인덱스를 설정합니다. |
| `nOffset` | Number | nRowIndex 값에 해당하는 Row 에서 떨어진 위치를 설정합니다.  양수로 설정 시 nRowIndex 값에 해당하는 Row 에서 아랫쪽에 위치한 형제(Sibling) Row를 찾습니다. 음수로 설정 시 nRowIndex 값에 해당하는 Row 에서 윗쪽에 위치한 형제(Sibling) Row를 찾습니다.  값을 설정하지 않으면 "1"로 적용됩니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `Number` — 특정 Row 의 형제 Row 에 해당하는 DataSet Row 값을 반환합니다.  Grid 가 트리 형식이 아니거나 형제(Sibling) Row 가 없을 경우 "-1"을 반환합니다

**Remark**
- DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 구할 때는 getTreeRow() 메소드를 사용해야 합니다.

---

## getTreeStatus

Grid 가 트리 형식일 때 특정 Row 의 트리 상태를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getTreeStatus( nRowIndex )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 트리 상태를 확인할 Row 의 인덱스를 현재 화면에 표시되는 Grid 기준으로 설정합니다. |

**Return**: `Number` — Row 가 Collapse 상태이면 "0"을 반환합니다. Row 가 Expand 상태이면 "1"을 반환합니다. Row 가 Collapse/Expand 상태를 가질 수 없는 단말(Leaf) Row 이면 "3"을 반환합니다.  Row 의 트리 상태를 얻지 못했을 경우 "-1"을 반환합니다.

**Remark**
- nRowIndex 는 Grid 에 표시되는 Row 를 기준(Collapse 된 Row는 인덱스가 없음)으로 인덱스값을 설정합니다.
  따라서, oncellclick 이벤트에서 e.row 를 getTreeStatus() 메소드에 사용할 수 없으므로 주의하셔야 합니다.

- DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 구할 때는 getTreeRow() 메소드를 사용해야 합니다.

- Grid 트리 Cell 의 초기값은 Cell 의 treestate 속성에 바인딩된 DataSet 의 값으로 설정됩니다.
  이 후, 사용자의 입력에 의해 변경된 트리 상태값은 바인딩된 DataSet 에 반영되지 않고 그리드 내부에서 별도로 유지됩니다.
  따라서 특정 Row 의 트리 상태를 얻거나 설정하고자 할 때는 getTreeStatus(), setTreeStatus() 메소드를 사용하여야 합니다.

---

## getVScrollPos

Grid 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.getVScrollPos()
```

**Sample**
```javascript
var nScrollPos = this.Grid00.getVScrollPos();
```

**Return**: `Number` — 수직스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**
- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수평스크롤바의 트랙바 위치값을 구하려면 getHScrollPos() 메소드를 사용하여야 합니다.

**See Also**: getHScrollPos, scrollbartype

---

## init

스크립트로 Grid 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
Grid.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | Grid 의 ID를 문자열로 설정합니다. |
| `vLeft` | String, Number | Grid 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Grid 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 left 가 결정됩니다. |
| `vTop` | String, Number | Grid 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Grid 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 top 이 결정됩니다. |
| `vWidth` | String, Number | Grid 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Grid 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Grid 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Grid 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 height 가 결정됩니다. |
| `vRight` | String, Number | Grid 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Grid 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 right 가 결정됩니다. |
| `vBottom` | String, Number | Grid 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Grid 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 bottom 이 결정됩니다. |
| `vMinWidth` | String, Number | Grid 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxWidth` | String, Number | Grid 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.  vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| `vMinHeight` | String, Number | Grid 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxHeight` | String, Number | Grid 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.  vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 Grid 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Grid 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: show, destroy, addChild, removeChild, insertChild

---

## insertContentsCol

Grid 에 현재 표시된 포맷의 특정 위치에 Column 을 삽입하는 메소드입니다.

**Syntax**
```javascript
Grid.insertContentsCol( enumBand, nColIndex [, bBandIndex] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 표시된 Grid 포맷에 Column 이 삽입될 밴드를 문자열로 설정합니다.  "left" 설정 시 Column 이 Left 밴드 영역에 삽입됩니다. "body" 설정 시 Column 이 Body 밴드 영역에 삽입됩니다. "right" 설정 시 Column 이 Right 밴드 영역에 삽입됩니다. |
| `nColIndex` | Number | 삽입될 Column 의 인덱스를 숫자로 설정합니다.  nColIndex 값이 enumBand 영역 또는 전체 영역의 마지막 Column 인덱스보다 큰 경우 "마지막 인덱스+1" 로 처리됩니다. |
| `bBandIndex` | Boolean | nColIndex 에 설정한 인덱스값이 밴드 기준인지 전체 Column 기준인지 설정합니다.  true 설정 시 enumBand 에 설정한 밴드 영역 기준으로 nColIndex 값을 처리합니다. false 설정 시 밴드 영역에 관계없이 전체 Column 기준으로 nColIndex 값을 처리합니다.  값을 설정하지 않으면 false 로 적용됩니다. |

**Return**: `Number` — 전체 Column 을 기준으로 Column 이 삽입된 위치의 인덱스 값을 반환합니다. enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.  정상적으로 삽입하지 못했을 경우 -1 을 반환합니다.

**Remark**
- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시된 포맷에만 Column 을 삽입합니다.

- 현재 표시된 Grid 포맷에 존재하는 Row 단위 밴드(Head, Body, Summary)만 Column 이 삽입됩니다.
   현재 포맷에 Row 단위 밴드(Head, Body, Summary)가 모두 없다면 Column 은 삽입되지 않습니다.

- 합병(Merge)된 Cell 의 중간에 Column 이 삽입된 경우 자동으로 Cell 이 합병(Merge) 됩니다.

---

## insertContentsRow

Grid 에 현재 표시되는 포맷의 특정 위치에 Sub Row 를 삽입하는 메소드입니다.

**Syntax**
```javascript
Grid.insertContentsRow( enumBand, nSubRowIndex )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 Grid 포맷에 Sub Row 가 추가될 밴드를 문자열로 설정합니다.  "head" 설정 시 Sub Row 가 Head 밴드 영역에 추가됩니다. "body" 설정 시 Sub Row 가 Body 밴드 영역에 추가됩니다. "summary" 설정 시 Sub Row 가 Summary 밴드 영역에 추가됩니다. |
| `nSubRowIndex` | Number | enumBand 값에 해당하는 영역에서 Sub Row 가 삽입될 위치의 인덱스를 설정합니다.  nSubRowIndex 값이 enumBand 영역의 마지막 Sub Row 인덱스보다 큰 경우 "마지막 인덱스+1"로 처리됩니다. |

**Return**: `Number` — 전체 Sub Row 를 기준으로 Sub Row 가 삽입된 위치의 인덱스 값을 반환합니다. enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.  정상적으로 추가하지 못했을 경우 "-1"을 반환합니다.

**Remark**
- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시되는 포맷에만 Sub Row 를 삽입합니다.

- 바인드 된 DataSet 에 Row 를 추가하는 기능이 아닙니다.
  Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 해당 영역의 Row를 여러줄로 구성하게 하는 기능입니다. 

- 포맷에 enumBand 값에 해당하는 밴드가 정의되지 않았다면 해당 밴드에 새로운 Row 가 추가됩니다.
  enumBand 값에 해당하는 밴드가 정의되어 있다면 해당 밴드의 Row 에  Sub Row 가 추가됩니다.

- 병합(Merge)된 Cell 의 중간에 Sub Row 가 삽입된 경우 자동으로 Cell 이 합병(Merge) 됩니다.

---

## insertEventHandler

Grid 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
Grid.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

Grid 컴포넌트에 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.isDropdown()
```

**Sample**
```javascript
var bRtn = this.Grid00.isDropdown()
```

**Return**: `Boolean` — Grid 컴포넌트에 아이템 리스트가 표시되어 있으면 true를 반환합니다. Grid 컴포넌트에 아이템 리스트가 표시되어 있지 않으면 false를 반환합니다.

**Remark**
- Cell edittype 속성값을 "combo", "date", "multicombo"처럼 아이템 리스트를 가지는 형태로 설정한 경우 지원하는 메서드입니다.

---

## isDropdownCalendar

Grid 에 팝업달력이 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.isDropdownCalendar()
```

**Sample**
```javascript
var bRtn = this.Grid00.isDropdownCalendar()
```

**Return**: `Boolean` — Grid 에 팝업달력이 표시되어 있으면 true 를 반환합니다.  Grid 에 팝업달력이 표시되어 있지 않으면 false 를 반환합니다.

---

## isDropdownCombo

Grid 에 Combo 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.isDropdownCombo()
```

**Sample**
```javascript
var bRtn = this.Grid00.isDropdownCombo()
```

**Return**: `Boolean` — Grid 에 Combo 아이템 리스트가 표시되어 있으면 true 를 반환합니다.  Grid 에 Combo 아이템 리스트가 표시되어 있지 않으면 false 를 반환합니다.

---

## isSelectedCell

인수로 전달된 위치의 Cell 이 선택 상태인지 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.isSelectedCell( nCellIdx [,enumBand, [nRowIdx]] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCellIdx` | Number | 선택상태를 확인 할 Cell 의 Cell 인덱스를 설정합니다. |
| `enumBand` | String | nCellIdx 값에 해당하는 Cell 이 속한 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. "body" 설정 시 Body 밴드 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. "summary" 설정 시 Summary 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.  값을 생략하면 "body" 로 적용됩니다. |
| `nRowIdx` | Number | nCellIdx 값에 해당하는 Cell 이 속한 Row 의 Row 인덱스를 설정합니다.  값을 생략하면 "0"으로 적용됩니다. |

**Return**: `Boolean` — 인수로 전달된 위치의 Cell 이 선택상태이면 "true"를 반환합니다. 인수로 전달된 위치의 Cell 이 선택상태가 아니면 "false"를 반환합니다.

**Remark**
- Body 밴드 영역은 selecttype 속성값에 따라 다중 선택이 가능하며 Head,Summary 영역은 선택(Select)을 지원하지 않습니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

---

## isTreeCollapsedRow

Grid 가 트리 형식일 때 특정 Row 가 Collapse 상태인지 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.isTreeCollapsedRow( nRowIndex [,bDatasetRow] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | Collapse 상태 여부를 확인할 Row 의 Row 인덱스를 설정합니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `Boolean` — 특정 Row 의 부모 Row 가 Collapse 되어 Grid 에 특정 Row 가 표시되지 않으면 "true"를 반환합니다.  특정 Row 의 부모 Row 가 Expand 되어 Grid 에 특정 Row 가 표시되어 있으면 "false"를 반환합니다. Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.

---

## isTreeExpandedRow

Grid 가 트리 형식일 때 특정 Row 가 Expand 상태인지 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.isTreeExpandedRow( nRowIndex [,bDatasetRow] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | Expand 상태 여부를 확인할 Row 의 Row 인덱스를 설정합니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `Boolean` — 특정 Row 의 부모 Row 가 Expand 되어 Grid 에 특정 Row 가 표시되면 "true"를 반환합니다.  특정 Row 의 부모 Row 가 Collapse 되어 Grid 에 특정 Row 가 표시되지 않으면 "false"를 반환합니다. Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.

---

## isTreeLeafRow

Grid 가 트리 형식일 때 특정 Row 가 단말(Leaf) Row 인지 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.isTreeLeafRow( nRowIndex[,bDatasetRow] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 단말(Leaf) Row 여부를 확인할 Row 의 Row 인덱스를 설정합니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `Boolean` — 특정 Row 가 자식 Row 가 없는 단말(Leaf) Row 이면 "true"를 반환합니다.  특정 Row 가 자식 Row 를 갖는 비단말 Row 이면 "false"를 반환합니다. Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.

---

## isTreeRootRow

Grid 가 트리 형식일 때 특정 Row 가 뿌리(Root) Row 인지 반환하는 메소드입니다.

**Syntax**
```javascript
Grid.isTreeRootRow( nRowIndex [,bDatasetRow] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 뿌리(Root) Row 여부를 확인할 Row 의 Row 인덱스를 설정합니다. |
| `bDatasetRow` | Boolean | nRowIndex 값에 설정한 인덱스의 기준을 설정합니다.  "true" 설정 시 nRowIndex 값은 DataSet 의 Row 인덱스를 의미합니다. "false" 설정 시 nRowIndex 값은 Grid 에 표시되는 Row 의 인덱스를 의미합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `Boolean` — 특정 Row 가 부모 Row 가 없는 뿌리(Root) Row 이면 "true"를 반환합니다.  특정 Row 가 부모 Row 를 갖는 Row 이면 "false"를 반환합니다. Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.

---

## mergeCell

Grid 에 표시된 Cell 중 특정 영역의 Cell 들을 병합하여 하나의 Cell 로 표시하는 메소드입니다.

**Syntax**
```javascript
Grid.mergeCell( nStartCol, nEndCol, nStartRow, nEndRow )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nStartCol` | Number | 병합 하려는 Cell 중 왼쪽에 위치한 Cell 의 Column 인덱스를 숫자로 설정합니다.  Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다. |
| `nEndCol` | Number | 병합 하려는 Cell 중 오른쪽에 위치한 Cell 의 Column 인덱스를 숫자로 설정합니다.  Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다. |
| `nStartRow` | Number | 병합 하려는 Cell 중 상단에 위치한 Cell 이 속한 Row 의 인덱스를 숫자로 설정합니다.  "0 ~ Row 갯수-1" 범위로 설정하면 Body 밴드를 대상으로 병합됩니다.  -1 설정 시 Head 밴드를 대상으로 병합됩니다. -2 설정 시 Summary 밴드를 대상으로 병합됩니다. |
| `nEndRow` | Number | 병합 하려는 Cell 중 하단에 위치한 Cell 이 속한 Row 의 인덱스를 숫자로 설정합니다.  "0 ~ Row 갯수-1" 범위로 설정하면 Body 밴드를 대상으로 병합됩니다.  -1 설정 시 Head 밴드를 대상으로 병합됩니다. -2 설정 시 Summary 밴드를 대상으로 병합됩니다.  -1 또는 -2 설정 시 nStartRow 값과 다를 경우 메소드가 정상적으로 수행되지 않습니다. |

**Return**: `Boolean` — 메소드가 정상적으로 수행되면 true 를 반환합니다.  메소드가 정상적으로 수행되지 않으면 false 를 반환합니다.

**Remark**
- Grid 에 데이터가 로딩된 상태에서 Grid 의 포맷과 관계없이 화면에 표시된 Cell 을 병합하여 표시할 때 사용되는 메소드입니다.

- mergeCell() 메소드로 병합할 Cell 영역에 GridContentsEditor 에서 병합된 Cell 의 일부만 포함되어 있어도
   GridContentEditor 에서 병합된 Cell 영역을 모두 포함하여 병합됩니다.

- 동일한 밴드(Head, Body, Summary)와 동일한 영역(Left, Body, Right)에 속한 Cell 만 병합될 수 있습니다.
   동일하지 않은 밴드 또는 영역의 Cell 은 병합되지 않습니다.

- suppress 속성이 설정되어 있는 Cell 이 포함된 경우 병합되지 않습니다.
   Grid 의 suppresshorzcell 속성에 의해 가로 Suppress 기능이 적용된 Cell 이 포함된 경우 병합되지 않습니다.
   
- mergeCell() 메소드로 병합된 Cell 영역을 선택 시 selecttype 속성값에 따라 Row 또는 Cell 단위로 선택됩니다.

- mergeCell() 메소드로 병합된 Cell 은 해당 영역의 좌상단 Cell 에 설정된 Style 관련 속성과 edittype, expr 속성 등이 동일하게 적용됩니다.
   또한 병합된 Cell 의 displaytype 속성값은 "text" 로 적용됩니다.

- 병합할 Cell 영역에서 좌상단에 위치한 Cell 의 text 속성이 DataSet 컬럼에 바인드 되어 있다면 다음과 같이 적용됩니다.
   > 병합할 나머지 Cell 중 text 속성값이 DataSet 컬럼에 바인드 되어 있는 Cell 의 값은 좌상단 Cell 의 값으로 모두 변경됩니다.
   > 병합된 Cell 값을 편집 시 text 속성값이 DataSet 컬럼에 바인드 되어 있는 모든 Cell 에 편집한 값이 동일하게 적용됩니다.

- mergeCell() 메소드로 병합된 Cell 의 복잡도가 높을 때 autosizingtype 속성값을 적용할 경우 설정하는 순서에 따라 결과가 동일하지 않을 수 있습니다.
   즉, autosizingtype 속성값 설정 후 mergeCell() 메소드를 실행한 것과 mergeCell() 메소드를 실행한 후 autosizingtype 속성을 설정한 결과가 다를 수 있습니다.
   병합된 Cell 의 복잡도가 높을 경우 성능향상을 위한 조치이며, 이런 경우 mergeCell() 메소드 실행 후 autosizingtype 속성을 설정하는 것을 권장합니다.

---

## mergeContentsCell

Grid 에 표시되어 있는 포맷에서 특정 Cell 들을 병합(Merge) 하여 하나의 Cell로 만드는 메소드입니다.

**Syntax**
```javascript
Grid.mergeContentsCell( enumBand, nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, bKeepSubCell )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 병합(Merge) 하려는 Cell 이 속한 밴드 영역을 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역의 Cell 을 병합(Merge) 합니다. "body" 설정 시 Body 밴드 영역의 Cell 을 병합(Merge) 합니다. "summary" 설정 시 Summary 밴드 영역의 Cell 을 병합(Merge) 합니다. |
| `nStartSubRow` | Number | 병합(Merge) 하려는 Cell 중 좌상단 Cell 의 Sub Row 인덱스를 설정합니다.  enumBand 값에 해당하는 밴드영역을 기준으로 Sub Row 인덱스를 설정하여야 합니다. 유효하지 않은 인덱스 설정 시 가장 가까운 유효한 값으로 대치되어 적용됩니다. |
| `nStartCol` | Number | 병합(Merge) 하려는 Cell 중 좌상단 Cell 의 Column 인덱스를 설정합니다.  Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다. 유효하지 않은 인덱스 설정 시 가장 가까운 유효한 값으로 대치되어 적용됩니다. |
| `nEndSubRow` | Number | 병합(Merge) 하려는 Cell 중 우하단 Cell 의 Sub Row 인덱스를 설정합니다  enumBand 값에 해당하는 밴드영역을 기준으로 Sub Row 인덱스를 설정하여야 합니다.. 유효하지 않은 인덱스 설정 시 가장 가까운 유효한 값으로 대치되어 적용됩니다. |
| `nEndCol` | Number | 병합(Merge) 하려는 Cell 중 우하단 Cell 의 Column 인덱스를 설정합니다.  Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다. 유효하지 않은 인덱스 설정 시 가장 가까운 유효한 값으로 대치되어 적용됩니다. |
| `nFirstCell` | Number | 병합(Merge) 된 Cell 에 적용할 속성의 기준이 되는 Cell 의 Cell 인덱스를 설정합니다.  enumBand 값에 해당하는 밴드영역을 기준으로 Cell 인덱스를 설정하여야 합니다.. |
| `bKeepSubCell` | Boolean | "true" 설정 시 병합(Merge) 된 Cell 은 Cell 인덱스는 공유 하지만 각 Cell 의 속성은 각자 유지합니다. "true" 설정 시 병합(Merge) 된 Cell 은 nFirstCell 값에 설정된 Cell 의 background 속성이 각 Sub Cell 에 적용됩니다.  "false" 설정 시 병합(Merge) 된 Cell 은 하나의 Cell 이 되어 Cell 인덱스와 속성을 하나로 유지합니다. "false" 설정 시 병합(Merge) 된 Cell 은 nFirstCell 값에 설정된 Cell 의 속성이 모두 적용됩니다. |

**Return**: `Number` — 병합(Merge) 한 Cell 이 속한 밴드 영역을 기준으로 Cell 인덱스를 반환합니다.  병합(Merge)에 실패했을 경우 "-1"을 반환합니다.

---

## move

Grid 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
Grid.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vLeft` | String, Number | Grid 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Grid 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 left 가 결정됩니다. |
| `vTop` | String, Number | Grid 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Grid 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 top 이 결정됩니다. |
| `vWidth` | String, Number | Grid 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Grid 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Grid 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Grid 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 height 가 결정됩니다. |
| `vRight` | String, Number | Grid 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Grid 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 right 가 결정됩니다. |
| `vBottom` | String, Number | Grid 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Grid 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 bottom 이 결정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 Grid 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Grid 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## moveToNext

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Grid 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
Grid.moveToNext( objComp )
Grid.moveToNext( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 Grid 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 Grid 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.

---

## moveToNextCell

Grid 의 Body 밴드 영역에서 Cell 포커스를 편집 가능한 다음 Cell로 이동시키는 메소드입니다.

**Syntax**
```javascript
Grid.moveToNextCell()
```

**Sample**
```javascript
var bSuccess = this.Grid00.moveToNextCell();
```

**Return**: `Boolean` — Cell 포커스 이동에 성공하면 "true"를 반환합니다. Cell 포커스 이동에 실패하면 "false"를 반환합니다.

**Remark**
- Cell 의 col 속성값 순서대로 포커스가 이동합니다.

- 현재 포커스 된 Cell 이 마지막 Cell 일 경우 첫 Cell 로 이동하지 않습니다.

- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.

---

## moveToPrev

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Grid 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
Grid.moveToPrev( objComp )
Grid.moveToPrev( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 Grid 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 Grid 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.

---

## moveToPrevCell

Grid 의 Body 밴드 영역에서 Cell 포커스를 편집 가능한 이전 Cell로 이동시키는 메소드입니다.

**Syntax**
```javascript
Grid.moveToPrevCell()
```

**Sample**
```javascript
var bSuccess = this.Grid00.moveToPrevCell();
```

**Return**: `Boolean` — Cell 포커스 이동에 성공하면 "true"를 반환합니다. Cell 포커스 이동에 실패하면 "false"를 반환합니다.

**Remark**
- Cell 의 col 속성값 순서대로 포커스가 이동합니다.

- 현재 포커스 된 Cell 이 첫 Cell 일 경우 마지막 Cell 로 이동하지 않습니다.

- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.

---

## redrawExprCell

Grid 에서 Cell 에 설정된 Expr 값을 모두 갱신하는 메소드입니다.

**Syntax**
```javascript
Grid.redrawExprCell( [enumBand] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | Cell 에 설정된 Expr 값을 갱신할 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역의 Cell 에 설정된 Expr 값을 갱신합니다. "body" 설정 시 Body 밴드 영역의 Cell 에 설정된 Expr 값을 갱신합니다. "summary" 설정 시 Summary 밴드 영역의 Cell 에 설정된 Expr 값을 갱신합니다.  값을 설정하지 않으면 전체 밴드 영역의 Cell 에 설정된 Expr 값을 모두 갱신합니다. |

**Remark**
- Body 밴드 영역은 Row 별로 Expr 값이 각각 적용됩니다.

---

## removeEvent

Grid 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
Grid.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | Grid 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- Grid 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- Grid 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

Grid 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Grid.removeEventHandler( strEventID, objFunc, objTarget )
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

Grid 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Grid.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

Grid 의 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
Grid.resize( vWidth, vHeight )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vWidth` | String, Number | Grid 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Grid 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Grid 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Grid 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 height 가 결정됩니다. |

**Remark**
- Grid 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 Grid 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- Grid 의 left 속성값이 null 이면 resize() 메소드 실행 후 Grid 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- Grid 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 Grid 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- Grid 의 top 속성값이 null 이면 resize() 메소드 실행 후 Grid 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 Grid 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Grid 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## scrollBy

Grid 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다.

**Syntax**
```javascript
Grid.scrollBy( nHoffsetpos, nVoffsetpos )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHoffsetpos` | Number | 수평스크롤바의 스크롤을 현재위치에서 이동시킬 값을 숫자로 설정합니다.  음수로 설정 시 스크롤의 위치가 감소합니다. 양수로 설정 시 스크롤의 위치가 증가합니다.  값을 적용했을 때 수평스크롤바의 min 속성값보다 작을 경우 min 값으로 적용됩니다. 값을 적용했을 때 수평스크롤바의 max 속성값보다 클 경우 max 값으로 적용됩니다. |
| `nVoffsetpos` | Number | 수직스크롤바의 스크롤을 현재위치에서 이동시킬 값을 숫자로 설정합니다.  음수로 설정 시 스크롤의 위치가 감소합니다. 양수로 설정 시 스크롤의 위치가 증가합니다.  값을 적용했을 때 수직스크롤바의 min 속성값보다 작을 경우 min 값으로 적용됩니다. 값을 적용했을 때 수직스크롤바의 max 속성값보다 클 경우 max 값으로 적용됩니다. |

**Remark**
- 수평/수직 스크롤바의 스크롤 위치를 현재 위치에 관계없이 특정 위치로 이동하려면 scrollTo() 메소드를 사용하여야 합니다.

**See Also**: scrollTo

---

## scrollTo

Grid 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다.

**Syntax**
```javascript
Grid.scrollTo( nHpos, nVpos )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHpos` | Number | 수평스크롤바의 스크롤이 위치할 값을 숫자로 설정합니다.  설정값이 수평스크롤바의 min 속성값보다 작을 경우 min 값으로 적용됩니다. 설정값이 수평스크롤바의 max 속성값보다 클 경우 max 값으로 적용됩니다. |
| `nVpos` | Number | 수직스크롤바의 스크롤이 위치할 값을 숫자로 설정합니다.  설정값이 수직스크롤바의 min 속성값보다 작을 경우 min 값으로 적용됩니다. 설정값이 수직스크롤바의 max 속성값보다 클 경우 max 값으로 적용됩니다. |

**Remark**
- 수평/수직 스크롤바의 스크롤 위치를 현재 위치에서 특정값만큼 이동하려면 scrollBy() 메소드를 사용하여야 합니다.

**See Also**: scrollBy

---

## selectArea

Grid 의 Body 밴드 영역에서 인수로 전달된 영역을 선택하는 메소드입니다.

**Syntax**
```javascript
Grid.selectArea( nStartRow, nStartCellIdx, nEndRow, nEndCellIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nStartRow` | Number | 선택할 영역의 시작 Row  Index 를 숫자로 설정합니다. |
| `nStartCellIdx` | Number | 선택할 영역의 시작 Cell Index 를 숫자로 설정합니다. |
| `nEndRow` | Number | 선택할 영역의 마지막 Row Index 를 숫자로 설정합니다. |
| `nEndCellIdx` | Number | 선택할 영역의 마지막 Cell Index 를 숫자로 설정합니다. |

**Return**: `Boolean` — 인수로 전달된 영역이 정상적으로 선택되면 true 를 반환합니다.  인수로 전달된 영역의 선택에 실패하면 false 를 반환합니다.

**Remark**
- selecttype 속성값이 "area" 또는 "multiarea" 인 경우만 수행되는 메소드입니다.

- selecttype 속성값이 "area" 일때 메소드를 수행하면 기존에 선택되어 있던 영역은 선택해제 됩니다.

- selecttype 속성값이 "multiarea" 일때 메소드를 수행하면 기존에 선택되어 있던 영역이 유지된 상태에서 선택영역이 추가됩니다.

---

## selectCell

Grid 의 Body 영역에서 인수로 전달된 위치의 Cell 을 선택 또는 선택해제 하는 메소드입니다.

**Syntax**
```javascript
Grid.selectCell( nRowIdx, nCellIdx [,bSelect] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | Body 밴드 영역에서 선택상태를 변경 할 Cell 이 속한 Row 의 Row 인덱스를 설정합니다. |
| `nCellIdx` | Number | Body 밴드 영역에서 선택상태를 변경 할 Cell 의 Cell 인덱스를 설정합니다. |
| `bSelect` | Boolean | "true" 설정 시 Cell 의 선택상태와 관계없이 Cell 을 선택 합니다. "false" 설정 시 Cell 의 선택상태와 관계없이 Cell 을 선택해제 합니다.  값 생략 시 "true"로 적용됩니다. |

**Return**: `Boolean` — 메소드 수행 후 Cell 이 선택상태이면 "true" 를 반환합니다. 메소드 수행 후 Cell 이 선택해제 상태이면 "false" 를 반환합니다.

**Remark**
- selecttype 속성값이 cell 인 경우만 수행되는 메소드입니다.

- selectCell() 메소드가 수행되면 기존에 선택되어 있던 Cell 은 선택해제 됩니다.

---

## selectMultiRow

Grid의 body 밴드 영역에서 파라미터로 전달된 영역에 해당하는 Row를 선택하는 메소드입니다.

**Syntax**
```javascript
Grid.selectMultiRow(nStrarRow, nEndRow)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nStrarRow` | Number | 선택할 영역의 시작 Row index를 숫자로 설정합니다. |
| `nEndRow` | Number | 선택할 영역의 마지막 Row index를 숫자로 설정합니다. |

**Return**: `Boolean` — 파라미터로 전달된 영역이 정상적으로 선택되면 true를 반환합니다.  파라미터로 전달된 영역 선택에 실패하면 fasle를 반환합니다.

**Remark**
- selecttype 속성값을 "multirow"로 설정한 경우만 사용할 수 있습니다.

---

## selectRow

Grid 의 Body 영역에서 인수로 전달된 위치의 Row 를 선택 또는 선택해제 하는 메소드입니다.

**Syntax**
```javascript
Grid.selectRow( nRowIdx [,bSelect] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | Body 영역에서 선택상태를 변경 할 Grid 의 Row  인덱스를 숫자로 설정합니다. |
| `bSelect` | Boolean | true 설정 시 Row 의 선택상태와 관계없이 Row 를 선택 합니다. false 설정 시 Row 의 선택상태와 관계없이 Row 를 선택해제 합니다.  값 생략 시 true 로 적용됩니다. |

**Return**: `Boolean` — Row 의 선택상태가 메소드 실행 전과 반대 상태로 변경되면 true 를 반환합니다.  Row 의 선택상태가 메소드 실행 전과 동일하면 false 를 반환합니다.

**Remark**
- selecttype 속성값이 "row" 또는 "multirow" 인 경우만 수행되는 메소드입니다.

- selecttype 속성값이 "row" 일 때 메소드 실행 결과로 다른 Row 가 선택되면 기존에 선택되어 있던 Row 는 선택해제 됩니다.

---

## sendToBack

부모가 동일한 컴포넌트 중 Grid 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**
```javascript
Grid.sendToBack()
```

**Sample**
```javascript
this.Grid.sendToBack();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 Grid 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다

---

## sendToNext

부모가 동일한 컴포넌트 중 Grid 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
Grid.sendToNext()
```

**Sample**
```javascript
this.Grid.sendToNext();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 Grid 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.

---

## setBandProperty

Row 관련 밴드의 특정 속성값을 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setBandProperty( enumBand, strPropID, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 속성값을 설정하려는 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드의 속성값을 설정합니다. "body" 설정 시 Body 밴드의 속성값을 설정합니다. "summary" 설정 시 Summary 밴드의 속성값을 설정합니다. |
| `strPropID` | String | 값을 설정하려는 속성명을 문자열로 설정합니다. |
| `varValue` | String | strProgID 값에 해당하는 속성에 설정할 속성값 입니다. |

**Return**: `Boolean` — 특정 밴드의 속성값 설정에 성공하면 "true"를 반환합니다. 특정 밴드의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**
- setBandProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.

---

## setBindDataset

Grid 의 binddataset 속성에 DataSet 오브젝트를 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setBindDataset( objDataset )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDataset` | Object | binddataset 속성에 설정할 DataSet을 오브젝트 형식으로 설정합니다. |

---

## setCellPos

Grid 에 표시된 Cell 중 특정 Cell 을 선택하는 메소드입니다.

**Syntax**
```javascript
Grid.setCellPos( nCellIdx [, nRowIdx] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCellIdx` | Number | 선택하려는 Cell 의 Cell 인덱스를 설정합니다.  Body 밴드의 Cell 을 대상으로 합니다. |
| `nRowIdx` | Number | 선택하려는 Cell 이 Grid 에서 위치한 Row 의 인덱스를 설정합니다.  "0 ~ Row 갯수-1" 범위로 설정하며 Body 밴드를 대상으로 합니다. 값 생략 시 현재 선택된 Row 의 인덱스가 적용됩니다. |

**Return**: `Boolean` — 특정 Cell 선택에 성공하면 true 를 반환합니다.  특정 Cell 선택에 실패하면 false 를 반환합니다.

**Remark**
- Cell 의 선택위치가 변경된 후 oncellposchanged 이벤트가 발생합니다.
   oncellposchanged 이벤트 발생 후 selecttype 속성값에 따라 onselectchanged 이벤트가 발생할 수 있습니다.

- Cell 인덱스는 Grid 의 포맷을 기준으로 설정되며 DataSet 의 데이터 갯수와는 관계없습니다.
   Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 포맷으로 구성되어 있고, Row 는 여러개의 SubRow 를 가질 수 있습니다.
   SubRow 를 갖는 밴드의 Cell 인덱스는 "SubRow 인덱스 * Column 갯수 + Cell 의 col 속성값" 으로 설정됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
   병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 0 부터 시작합니다.

---

## setCellProperty

Cell 의 특정 속성값을 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setCellProperty( enumBand, nCellIdx, strPropID, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 속성값을 설정하려는 Cell 이 속한 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드에 속한 Cell 의 속성값을 설정합니다. "body" 설정 시 Body 밴드에 속한 Cell 의 속성값을 설정합니다. "summary" 설정 시 Summary 밴드에 속한 Cell 의 속성값을 설정합니다. |
| `nCellIdx` | Number | 속성값을 설정할 Cell 의 Cell 인덱스를 설정합니다. |
| `strPropID` | String | 값을 설정하려는 속성명을 문자열로 설정합니다. |
| `varValue` | Variant | strPropID 파라미터값에 해당하는 속성에 설정할 속성값 입니다 |

**Return**: `Boolean` — Cell 의 특정 속성값 설정에 성공하면 "true"를 반환합니다. Cell 의 특정 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**
- setCellProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

---

## setEditingValue

Cell 이 편집모드일 때 표시되는 컨트롤 또는 서브컨트롤의 value 속성을 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setEditingValue( strValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strValue` | String | Cell 에 표시된 편집모드용 컨트롤 또는 서브컨트롤의 value 속성값을 문자열로 설정합니다.  Cell 의 edittype 속성값이 "combo" 이면 combodatacol 속성에 적용된 데이터값을 설정합니다. Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자를 제외한 원본값을 설정합니다. |

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "button", "checkbox", "tree" 인 경우 메소드를 사용할 수 없습니다.

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
Grid.setEditSelect( nBegin [,nEnd] )
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
Grid.setEditValue( strValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strValue` | String | Cell 에 표시된 편집모드용 컨트롤의 value 속성값을 문자열로 설정합니다.  Cell 의 edittype 속성값이 "combo" 이면 combocodecol 속성에 적용된 코드값을 설정합니다. Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자를 제외한 원본값을 설정합니다. |

**Remark**
- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "button", "checkbox", "tree" 인 경우 메소드를 사용할 수 없습니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   setEditValue() 메소드는 Combo, Calendar 컨트롤의 value 속성에 값을 설정하며, 하위컨트롤인 comboeidt, calendaredit 의 value 속성에도 함께 반영됩니다.

**See Also**: setEditingValue, getEditingText, getEditingValue, getEditText, getEditValue

---

## setEventHandler

Grid 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
Grid.setEventHandler( strEventID, objFunc, objTarget )
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

Grid 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
Grid.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

## setFixedRow

Grid 에서 스크롤 시 인수로 전달된 Row 까지 스크롤 되지 않고 행고정 시키는 메소드입니다.

**Syntax**
```javascript
Grid.setFixedRow( nRowIndex );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | Body 밴드영역에서 스크롤 되지않고 고정되어 표시될 Row 의 인덱스를 설정합니다.  "-1" 설정 시 기존에 설정된 행고정이 해제됩니다. |

**Remark**
- nRowIndex 에 해당하는 Row 가 Grid 에 표시되고 있을 때만 메소드가 수행됩니다.

- 스크롤이 이동 되어 있을 경우 이동된 상태로 고정됩니다.

- Grid 가 트리 형태일 경우는 메소드가 수행되지 않습니다.

---

## setFocus

Grid 에 포커스를 주는 메소드입니다.

**Syntax**
```javascript
Grid.setFocus( [bMoveScroll [, bInnerFocus]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bMoveScroll` | Boolean | 부모 컴포넌트에 스크롤이 있을 경우 Grid 기준으로 스크롤을 이동할지 설정합니다.  true 설정 시 Grid 이(가) 화면에 표시되도록 스크롤을 이동시킵니다. false 설정 시 Grid 의 위치에 관계없이 스크롤을 이동시키지 않습니다.  값을 설정하지 않으면 true 로 동작합니다. |
| `bInnerFocus` | Boolean | Grid 이(가) 컨테이너 컴포넌트 일 때 자식 컴포넌트에게 포커스를 이동할지 설정합니다.  true 설정 시 자식 컴포넌트 중 포커스를 받을 수 있는 첫번째 컴포넌트가 포커스 됩니다. false 설정 시 Grid 에 포커스 됩니다.  Grid 이(가) 컨테이너 컴포넌트 일 때 값을 설정하지 않으면 true 로 동작합니다. |

**Return**: `Object` — Grid 이(가) 포커스되기 전에 포커스를 가졌던 컴포넌트를 반환합니다.  포커스를 가진 컴포넌트가 없었거나 메소드 수행이 실패하는 경우에는 null 을 반환합니다.

**Remark**
- setFocus() 메소드는 enableaccessibility 속성값에 관계없이 파라미터값을 기준으로 동작합니다.

- Grid 이(가) 컨테이너 컴포넌트가 아니거나 자식 컴포넌트 중 포커스를 가질 수 있는 컴포넌트가
   존재하지 않을 경우에는 bInnerFocus 파라미터값에 관계없이 Grid 에 포커스 됩니다.

---

## setFormat

Grid 에 여러개의 포맷이 정의되어 있을 때 화면에 표시할 포맷을 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setFormat( strFormatID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strFormatID` | String | Grid 에 표시할 포맷의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 화면에 표시되는 포맷 설정에 성공했을 경우 "true"를 반환합니다. 화면에 표시되는 포맷 설정에 실패했을 경우 "false"를 반환합니다.

**Remark**
- 하나의 Grid 에서 데이터를 여러 형식으로 표현하고자 할 때 사용합니다.
   포맷별로 Head, Body, Summary, Column 을 다양하게 구성할 수 있습니다.
   넥사크로 스튜디오의 Grid Contents Editor 를 통해 여러개의 포맷을 추가할 수 있습니다.

- Grid 의 formatid 속성값을 변경해도 동일한 결과를 얻을 수 있습니다.

---

## setFormatColProperty

Grid 에 표시되고 있는 포맷에 정의된 Column 의 속성값을 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setFormatColProperty( nColIdx, strPropID, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nColIdx` | Number | 현재 포맷에 정의된 전체 Column 을 기준으로 속성값을 설정할 Column 의 인덱스를 설정합니다.  Column 인덱스는 "0" 부터 시작합니다. |
| `strPropID` | String | 값을 설정할 속성명을 문자열로 설정합니다.  Grid 의 Column 에는 "band"와 "size" 두가지 속성이 정의되어 있습니다. |
| `varValue` | Variant | strPropID 값이 "band" 일 경우 값을 문자열로 설정합니다. strPropID 값이 "size" 일 경우 값을 숫자로 설정합니다. |

**Return**: `Boolean` — Column 의 속성값 설정에 성공하면 "true"를 반환합니다. Column 의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**
- setFormatColProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.

---

## setFormatRowProperty

Grid 에 표시되고 있는 포맷에 정의된 Row 의 속성값을 설정하는 메소드입니다

**Syntax**
```javascript
Grid.setFormatRowProperty( nRowIdx, strPropID, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | 현재 포맷에 정의된 전체 Row 를 기준으로 속성값을 설정할 Row의 인덱스 값을 설정합니다.  Head, Body, Summary 밴드에 정의된 전체 Row를 기준으로 인덱스를 설정합니다. Row 에 Sub Row 가 정의되어 있다면 Sub Row 도 인덱스에 포함됩니다. Row 인덱스는 "0"부터 시작합니다. |
| `strPropID` | String | 값을 설정할 속성명을 문자열로 설정합니다.  Grid 의 Row 에는 "band"와 "size" 두가지 속성이 정의되어 있지만 "size" 속성만 변경할 수 있습니다. |
| `varValue` | Variant | strPropID 값이 "size" 일 경우 값을 숫자로 설정합니다. |

**Return**: `Boolean` — Row 의 속성값 설정에 성공하면 "true"를 반환합니다. Row 의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**
- setFormatRowProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.

---

## setHeadValue

Grid 컴포넌트의 Head 밴드 영역 내 지정한 인덱스에 해당하는 Cell 내부에서 관리하는 HeadValue 값을 설정하는 메서드입니다.

**Syntax**
```javascript
Grid.setHeadValue( nCellIdx, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCellIdx` | Number | HeadValue 값을 설정하려는 Head 밴드 영역의 Cell 인덱스를 설정합니다. |
| `varValue` | String | 설정할 HeadValue 값입니다. |

**Remark**
- 지정한 인덱스에 해당하는 Cell의 edittype 속성값이 "none"이 아닌 경우에만 사용할 수 있습니다.

---

## setOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setOffsetBottom( nBottom );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBottom` | Number | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetHeight

Grid 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | Grid 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위의 숫자로 설정합니다 |

**Remark**
- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > Grid 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.

---

## setOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setOffsetRight( nRight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRight` | Number | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setOffsetTop( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > Grid 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.

---

## setOffsetWidth

Grid 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | Grid 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setRealColSize

Grid 에 표시되고 있는 포맷에서 특정 Column 의 너비를 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setRealColSize( enumBand, nColIndex, nSize [, bBandIndex] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 현재 Grid 포맷에서 너비를 변경 할 Column 이 속한 밴드를 문자열로 설정합니다.  "left" 설정 시 Left 밴드 영역의 Column 이 적용됩니다. "body" 설정 시 Body 밴드 영역의 Column 이 적용됩니다. "right" 설정 시 Right 밴드 영역의 Column 이 적용됩니다. |
| `nColIndex` | Number | 너비를 설정 할 Column 의 인덱스를 설정합니다.  "0~Column 인덱스" 설정 시 Column 인덱스로 적용됩니다. "-1" 설정 시 Column 에 동일하게 nSize 값이 적용됩니다. Column 인덱스는 "0" 부터 시작합니다. |
| `nSize` | Number | Column 의 너비를 pixel 단위의 숫자로 설정합니다. |
| `bBandIndex` | Boolean | nColIndex 에 설정한 인덱스값이 밴드 기준인지 전체 Column 기준인지 설정합니다.  "true" 설정 시 enumBand 에 설정한 밴드 영역 기준으로 nColIndex 값을 처리합니다. "false" 설정 시 enumBand 값에 관계없이 전체 Column 기준으로 nColIndex 값을 처리합니다.  값을 설정하지 않으면 "false"로 적용됩니다. |

**Return**: `Boolean` — 특정 Column 의 너비 설정에 성공하면 "true"를 반환합니다. 특정 Column 의 너비 설정에 실패하면 "false"를 반환합니다.

**Remark**
- getRealColSize() 메소드는 동적으로 변경된 값을 반영하여 Column 너비를 반환합니다.
  동적으로 변경된 값이 반영되지 않은 디자인 시 설정한 Column 너비는 getFormatColSize() 메소드를 사용하여야 합니다.

---

## setRealRowSize

Grid 에 표시된 데이터 Row 에서 특정 Row 또는 SubRow 의 높이를 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setRealRowSize( nRowIdx, nSize [, nSubRowIdx [, bBody]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIdx` | Number | 높이를 설정 할 Row 의 인덱스 또는 밴드영역을 설정합니다.  "0~Row 갯수" 설정 시 bBody 값이 true 이면 Body 밴드영역의 Row 인덱스로 적용됩니다. "0~Row 갯수" 설정 시 bBody 값이 false 이면 밴드영역에 관계 없이 전체 Row 의 인덱스로 적용됩니다. -1 설정 시 bBody 값이 true 이면 Head 밴드영역으로 적용됩니다. -2 설정 시 bBody 값이 true 이면 Summary 밴드영역으로 적용됩니다.  Row 인덱스는 0 부터 시작합니다. |
| `nSize` | Number | Row 또는 SubRow 의 높이를 Pixel 단위의 숫자로 설정합니다. |
| `nSubRowIdx` | Number | nRowIdx 값에 해당하는 Row 에서 높이를 설정 할 SubRow 의 인덱스를 설정합니다.  "0~SubRow 갯수" 설정 시 해당 SubRow 의 높이를 설정합니다. -1 설정 시 nRowIdx 값에 해당하는 Row 가 가진 전체 SubRow 의 높이를 설정합니다.  SubRow 의 인덱스는 0 부터 시작합니다. 값을 생략하면 -1 로 적용됩니다. |
| `bBody` | Boolean | nRowIdx 값이 적용될 영역을 설정합니다.  true 설정 시 nRowIdx 값은 Body 밴드영역의 Row 인덱스로 적용됩니다. false 설정 시 nRowIdx 값은 밴드영역에 관계없이 전체 Row 의 인덱스로 적용됩니다.  값을 생략하면 true 로 적용됩니다. |

**Return**: `Boolean` — 특정 Row 또는 SubRow 의 높이 설정에 성공하면 true 를 반환합니다.  특정 Row 또는 SubRow 의 높이 설정에 실패하거나 동일한 높이를 설정하면 false 를 반환합니다.

**Remark**
- nRowIdx 값에 해당하는 Row 에 SubRow 가 없는 경우 nSubRowIdx 값을 생략하거나 0 또는 -1 을 설정하여야 합니다.

- extendsizetype 속성값이 "none" 이면 Body 밴드의 특정 Row 또는 SubRow 높이 설정 시 모든 Row 에 동일하게 적용됩니다.

- setRealRowSize() 메소드는 Grid 에 표시된 데이터 Row 의 높이를 변경합니다.
   따라서 Grid 에 표시된 데이터 Row 또는 SubRow 의 높이를 각각 설정할 수 있습니다.
   Grid 에 정의된 포맷을 변경하려면 setFormatRowProperty() 메소드를 사용하여야 합니다.

**See Also**: setFormatRowProperty

---

## setSubCellProperty

Cell 이 Sub Cell 구조일 때 특정 Sub Cell 의 속성값을 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setSubCellProperty( enumBand, nCelIdx, nSubCellIdx, strPropID, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | nCellIdx 에 해당하는 Cell 이 속한 밴드를 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. "body" 설정 시 Body 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. "summary" 설정 시 Summary 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다. |
| `nCelIdx` | Number | Sub Cell 로 구성된 Cell 의 인덱스를 설정합니다. |
| `nSubCellIdx` | Number | 속성값을 설정 할 Sub Cell 의 인덱스를 설정합니다. |
| `strPropID` | String | 값을 설정 할 Sub Cell 의 속성명을 문자열로 설정합니다. |
| `varValue` | String | strPropID 속성에 설정할 값을 설정합니다. |

**Return**: `Boolean` — 특정 Sub Cell 의 속성값 설정에 성공하면 "true"를 반환합니다. 특정 Sub Cell 의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**
- setSubCellProperty() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- setSubCellProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.

---

## setTreeStatus

Grid 가 트리 형식일 때 특정 Row 의 트리 상태를 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.setTreeStatus( nRowIndex, bTreeStatus )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowIndex` | Number | 트리 상태를 설정 할 Row 의 인덱스를 현재 화면에 표시되는 Grid 기준으로 설정합니다. |
| `bTreeStatus` | Boolean | nRowIndex 에 해당하는 Row 의 트리 상태를 설정합니다.  "true" 설정 시 Row 의 트리 상태를 Expand 로 설정합니다. "false" 설정 시 Row 의 트리 상태를 Collapse 로 설정합니다. |

**Return**: `Boolean` — 특정 Row 의 트리 상태 설정에 성공하면 "true"를 반환합니다.  특정 Row 의 트리 상태 설정에 실패하면 "false"를 반환합니다. Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.

**Remark**
- nRowIndex 는 Grid 에 표시되는 Row 를 기준(Collapse 된 Row는 인덱스가 없음)으로 인덱스 값을 설정합니다.
  따라서, oncellclick 이벤트에서 e.row 를 setTreeStatus() 메소드에 사용할 수 없으므로 주의하셔야 합니다.

- Grid 트리 Cell 의 초기값은 Cell 의 treestate 속성에 바인딩된 DataSet 의 값으로 설정됩니다.
  이 후, 사용자의 입력에 의해 변경된 트리 상태값은 바인딩된 DataSet 에 반영되지 않고 그리드 내부에서 별도로 유지됩니다.
  따라서 특정 Row 의 트리 상태를 얻거나 설정하고자 할 때는 getTreeStatus(), setTreeStatus() 메소드를 사용하여야 합니다.

- setTreeStatus() 메소드가 정상적으로 수행되면 cantreestatuschange 이벤트와 ontreestatuschanged 이벤트가 발생합니다.

---

## show

스크립트로 동적 생성한 Grid 을(를) 화면에 표시하는 메소드입니다.

**Syntax**
```javascript
Grid.show()
```

**Sample**
```javascript
this.Grid00.show();
```

**Remark**
- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: destroy, init, addChild, removeChild, insertChild

---

## showEditor

현재 선택된 Cell 이 편집 가능할 경우에 편집기 표시 여부를 설정하는 메소드입니다.

**Syntax**
```javascript
Grid.showEditor( bShow )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bShow` | Boolean | 현재 선택된 Cell 에 편집기를 표시할지 설정합니다.  true 설정 시 현재 선택된 Cell 이 편집상태가 되며 편집기가 표시됩니다. false 설정 시 현재 선택된 Cell 의 편집상태가 해제되고 편집기가 표시되지 않습니다. |

**Return**: `Boolean` — 메소드가 정상적으로 수행되면 true 를 반환합니다. 메소드가 정상적으로 수행되지 못하면 false 를 반환합니다.

**Remark**
- 선택된 Cell 의 edittype 속성값에 따라 Combo 아이템 리스트, 팝업달력, 체크박스, 에디트 등이 표시됩니다.

- Grid 의 readonly 속성값이 true 이거나 편집이 불가능한 Cell 을 선택했을 경우 편집기가 표시되지 않습니다.

- Grid 의 autoenter 속성값이 "select" 이면 Cell 을 선택 할때 자동으로 편집기가 표시됩니다.


◆ Mobile 제약

- iOS/iPadOS 에서 edittype 속성값이 "date" 이고, cellcalendarpopuptype 또는 calendarpopuptype 속성값이 "system" 일 때
   showEditor 메소드로 Cell 을 편집상태로 하면 팝업달력이 자동으로 표시되므로 사용에 주의하여야 합니다.

---

## splitCell

mergeCell() 메소드로 병합된 Cell 을 분할하는 메소드입니다.

**Syntax**
```javascript
Grid.splitCell( nStartCol, nEndCol, nStartRow, nEndRow )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nStartCol` | Number | 병합 Cell 내에서 왼쪽에 위치한 Cell 의 Column 인덱스를 숫자로 설정합니다.  Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다. |
| `nEndCol` | Number | 병합 Cell 내에서 오른쪽에 위치한 Cell 의 Column 인덱스를 숫자로 설정합니다.  Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다. |
| `nStartRow` | Number | 병합 Cell 내에서 상단에 위치한 Cell 이 속한 Row 의 인덱스를 숫자로 설정합니다.  "0 ~ Row 갯수-1" 범위로 설정하면 Body 밴드를 대상으로 분할됩니다.  -1 설정 시 Head 밴드를 대상으로 분할됩니다. -2 설정 시 Summary 밴드를 대상으로 분할됩니다. |
| `nEndRow` | Number | 병합 Cell 내에서 하단에 위치한 Cell 이 속한 Row 의 인덱스를 숫자로 설정합니다.  "0 ~ Row 갯수-1" 범위로 설정하면 Body 밴드를 대상으로 분할됩니다.  -1 설정 시 Head 밴드를 대상으로 분할됩니다. -2 설정 시 Summary 밴드를 대상으로 분할됩니다.  -1 또는 -2 설정 시 nStartRow 값과 다를 경우 메소드가 정상적으로 수행되지 않습니다. |

**Return**: `Boolean` — 메소드가 정상적으로 수행되면 true 를 반환합니다.  메소드가 정상적으로 수행되지 않으면 false 를 반환합니다.

**Remark**
- mergeCell() 메소드로 병합된 Cell 을 원래대로 분할할 때 사용되는 메소드입니다.
   mergeContentsCell() 메소드로 병합된 Cell 은 splitContentsCell() 메소드를 사용하여야 합니다.

- 인수로 전달된 영역이 병합된 Cell 과 일치하지 않아도 Cell 을 분할합니다.
   즉, 인수로 전달된 영역에 병합된 Cell 의 일부만 속해 있어도 병합 Cell 을 분할합니다.

---

## splitContentsCell

Grid 에 표시되어 있는 포맷의 Cell 중 병합(Merge) 된 Cell 을 분할하는 메소드입니다.

**Syntax**
```javascript
Grid.splitContentsCell( enumBand, nStartSubRow, nStartCol, nEndSubRow, nEndCol, bMakeSubCell )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumBand` | String | 분할 하려는 Cell 이 속한 밴드 영역을 문자열로 설정합니다.  "head" 설정 시 Head 밴드 영역의 Cell 을 분할 합니다. "body" 설정 시 Body 밴드 밴드 영역의 Cell 을 분할 합니다. "summary" 설정 시 Summary 밴드 영역의 Cell 을 분할 합니다. |
| `nStartRow` | Number | 분할 하려는 Cell 의 Sub Cell 중 좌상단 Sub Cell 의 Sub Row 인덱스를 설정합니다.  enumBand 값에 해당하는 밴드영역을 기준으로 Sub Row 인덱스를 설정하여야 합니다. 유효하지 않은 인덱스 설정 시 가장 가까운 유효한 값으로 대치되어 적용됩니다. |
| `nStartCol` | Number | 분할 하려는 Cell 의 Sub Cell 중 좌상단 Sub Cell 의 Column 인덱스를 설정합니다.  Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다. 유효하지 않은 인덱스 설정 시 가장 가까운 유효한 값으로 대치되어 적용됩니다. |
| `nEndSubRow` | Number | 분할 하려는 Cell 의 Sub Cell 중 우하단 Sub Cell 의 Sub Row 인덱스를 설정합니다  enumBand 값에 해당하는 밴드영역을 기준으로 Sub Row 인덱스를 설정하여야 합니다.. 유효하지 않은 인덱스 설정 시 가장 가까운 유효한 값으로 대치되어 적용됩니다. |
| `nEndCol` | Number | 분할 하려는 Cell 의 Sub Cell 중 우하단 Sub Cell 의 Column 인덱스를 설정합니다.  Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다. 유효하지 않은 인덱스 설정 시 가장 가까운 유효한 값으로 대치되어 적용됩니다. |
| `bMakeSubCell` | Boolean | Sub Cell 이 없는 Merge Cell을 분할할지 여부를 설정합니다.  "true" 설정 시 Sub Cell 이 없는 Merge Cell 도 분할합니다. "false" 설정 시 Sub Cell 이 없는 Merge Cell 은 분할하지 않습니다. |

**Return**: `Number` — 병합(Merge) Cell 이 분할되어 생성된 Cell 의 갯수를 반환합니다. 메소드가 정상적으로 수행되지 않은 경우 "-1"을 반환합니다.

**Remark**
- 주어진 영역 내에 병합된 Cell 이 여러 개가 있는 경우 모두 분할 처리됩니다.

---

## updateToDataset

Grid 에서 편집중인 값을 바인드 된 DataSet 에 즉시 반영시키는 메소드입니다.

**Syntax**
```javascript
Grid.updateToDataset()
```

**Sample**
```javascript
var bSucc = this.Grid00.updateToDataset();
```

**Return**: `Boolean` — Grid 에서 편집중인 값을 바인드 된 DataSet 에 반영하면 "true" 를 반환합니다.  Grid 에서 편집중인 값을 바인드 된 DataSet 에 반영하지 못하거나 Grid 가 편집중이 아니면 "false" 를 반환합니다.

**Remark**
- Grid 가 DataSet 에 바인딩 되어 있어야 합니다.

- Grid 에서 편집중인 값이 바인딩 되어있는 Dataset 의 값과 같으면 Dataset 에 값이 반영되지 않고 "false"를 반환합니다.

---
