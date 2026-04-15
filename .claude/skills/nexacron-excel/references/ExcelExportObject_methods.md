# ExcelExportObject Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | ExcelExportObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | ExcelExportObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 ExcelExportObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `addExportItem()` | Export 할 Item을 ExcelExportObject 에 추가하는 메소드입니다. |
| `clear()` | ExcelExportObject 에 추가된 모든 Item 을 삭제하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `clearExportItems()` | ExcelExportObject 에서 지정한 타입의 Item 만 삭제하는 메소드입니다. |
| `count()` | ExcelExportObject 에 등록된 Item 의 갯수를 반환하는 메소드입니다. |
| `countExportItems()` | ExcelExportObject 에서 지정한 타입의 Item 갯수를 반환하는 메소드입니다. |
| `delExportItem()` | ExcelExportObject 에서 지정한 타입의 특정 Item 을 삭제하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 ExcelExportObject 을(를) 삭제하는 메소드입니다. |
| `exportData()` | ExcelExportObject 에 설정된 Item 을 모두 Export 하는 메소드입니다. |
| `exportDataEx()` | Cell 에 표시된 값을 기준으로 ExcelExportObject 에 설정된 Item 을 모두 Export 하는 메소드입니다. |
| `exportItems()` | ExcelExportObject 에서 지정한 타입의 Item 만 Export 하는 메소드입니다. |
| `findEventHandler()` | ExcelExportObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getEventHandler()` | ExcelExportObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getExportItem()` | ExcelExportObject 에서 지정한 타입의 특정 Item 을 반환하는 메소드입니다. |
| `insertEventHandler()` | ExcelExportObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `removeEvent()` | ExcelExportObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | ExcelExportObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | ExcelExportObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `setEventHandler()` | ExcelExportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | ExcelExportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setExportItem()` | Export 할 Item을 ExcelExportObject 의 특정 위치에 추가하는 메소드입니다. |

---

## addEvent

ExcelExportObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | ExcelExportObject 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- ExcelExportObject 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

ExcelExportObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 ExcelExportObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

## addExportItem

Export 할 Item을 ExcelExportObject 에 추가하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.addExportItem( constExportItemType, objExportItem )
ExcelExportObject.addExportItem( constExportItemType, varExportSource, strRange [,strExportHead [,strExportSelect [,strExportMerge [,strExportValue [,strExportImage [,strExceptStyle [,strExportSize [,arrCellIndex, [strBandId]]]]]]]]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `constExportItemType` | Constant | Export 대상이 되는 컴포넌트의 종류를 상수값으로 설정합니다.  현재 Grid 만 Export 할 수 있으며 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다. |
| `objExportItem` | Object | Export 정보를 설정한 ExportItem 오브젝트를 설정합니다. |
| `varExportSource` | Object | Export 대상이 되는 컴포넌트를 오브젝트로 설정합니다.  현재 Grid 만 Export 할 수 있으며 "this.Grid00" 형태로 설정하여야 합니다. |
| `strRange` | String | "시트명!셀영역" 또는 "셀영역" 형태로 오브젝트 내용이 Export 되는 위치를 지정합니다.  * 2개 이상의 Item을 추가하는 경우에는 각 데이터의 Row 위치가 겹치지 않게 파라미터를 지정해야 합니다. 같은 시트 내에서 중복되는 Row를 strRange 파라미터로 지정할 수는 없습니다. 예를 들어 아래와 같은 코드는 첫 번째 코드에서 두 번째 Row(A2)를 Export 위치로 지정하면 다음 코드에서 컬럼이 다르더라도 두 번째 Row(P2)를 지정할 수는 없습니다. addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A2"); addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet1!P2");  2개 이상의 Item을 출력하는 경우 세로 방향으로 Row가 겹치지 않게 출력할 수는 있지만 가로 방향으로 Item을 배치해 출력할 수는 없습니다. |
| `strExportHead` | String | Grid 의 Head, Summary 영역에 대한 Export 방식을 설정합니다.  "allband" 설정 시 Head, Summary 영역을 모두 Export 합니다. "nohead" 설정 시 Head 영역은 Export 하지 않고, Summary 영역만 Export 합니다. "nosumm" 설정 시 Head 영역만 Export 하고, Summary 영역은 Export 하지 않습니다. "nohead,nosumm" 설정 시 Head, Summary 영역을 모두 Export 하지 않습니다.  값 생략 시 strExportSelect 값이 "allrecord" 이면 "allband" 로 적용되고, "selectrecord" 이면 "nohead,nosumm" 으로 적용됩니다.  * Grid 의 selecttype 속성값이 "area", 'multiarea" 이면 설정값과 관계없이 항상 "nohead,nosumm" 으로 적용됩니다. |
| `strExportSelect` | String | Grid 에서 선택영역에 대한 Export 방식을 설정합니다.  "allrecord" 설정 시 선택영역에 관계없이 모든 Row 를 Export 합니다. "selectrecord" 설정 시 선택된 Row, Cell, Area 만 Export 합니다.  값 생략 시 "allrecord" 로 적용됩니다. |
| `strExportMerge` | String | Grid 에서 포맷과 관계없이 논리적으로 병합된 Cell 의 Export 방식을 설정합니다. strExportSelect 값을 "selectrecord" 로 설정 시 항상 "nosuppress" 로 적용됩니다.  "suppress" 설정 시 병합된 결과대로 1 개 Cell 만 값을 Export 합니다. 나머지 Cell 은 병합되지 않으며 모두 공백으로 처리됩니다.  "nosuppress" 설정 시 병합된 결과를 무시하고 각 Cell 에 모두 값을 Export 합니다.  "merge" 설정 시 병합된 결과대로 1 개 Cell 만 값을 Export 합니다. 나머지 Cell 은 병합되어 처리됩니다.  값 생략 시 "suppress" 로 적용됩니다.  * 논리적인 병합이란 suppress 속성 또는 mergeCell() 메소드에 의해 Grid 에 표시된 데이터가 병합된 것을 의미합니다. |
| `strExportValue` | String | 엑셀 파일로 Export 시킬 경우 Export 되는 내용과 형식을 설정합니다.  "allstyle" 설정 시 선택된 영역이 있을 경우 선택에 의해 변경된 속성은 Export 되지 않습니다. "selectstyle" 설정 시 선택된 영역이 있을 경우 선택에 의해 변경된 속성도 Export 됩니다.  값 설정 시 value, format, calendardateformat, font, color, background(color), -nexa-text-aign, -nexa-vertical-align, -nexa-border(style,color) 속성이 Export 됩니다.  값 생략 시 "allstyle" 로 적용됩니다. |
| `strExportImage` | String | Grid 의 Cell 에 설정된 이미지의 Export 방식을 설정합니다.  "none" 설정 시 설정된 이미지 정보를 무시하고 공백으로 Export 합니다. "url" 설정 시 설정된 이미지의 위치정보를 URL 형식의 문자열로 Export 합니다. "image" 설정 시 설정된 이미지의 위치가 "http://", "https://" 로 시작하는 인터넷 URL 경로일 경우만 이미지를 그대로 Export 합니다.  값 생략 시 "none" 으로 적용됩니다. |
| `strExceptStyle` | String | Grid 의 Cell 에 적용된 CSS 관련 속성 중 Export 시 제외할 속성을 설정합니다.  "none" 설정 시 Export 에서 제외되는 속성이 없습니다. "align" 설정 시 Align 관련 -nexa-text-align, -nexa-vertical-align 속성값을 Export 에서 제외됩니다. "background" 설정 시 background 의 color 관련 속성값을 Export 에서 제외됩니다. "color" 설정 시 color 속성값을 Export 에서 제외됩니다. "font" 설정 시 font 속성값을 Export 에서 제외됩니다. "border" 설정 시 -nexa-border 속성값을 Export 에서 제외됩니다.  각 설정값을 콤마(",")로 구분하여 중복 설정할 수 있습니다. |
| `strExportSize` | String | Grid Cell 의 Column size(width), Row size(height) 값을 엑셀에 적용할지 설정합니다.  "width" 설정 시 너비를 같게 Export 합니다. "height" 설정 시 높이를 같게 Export 합니다. "both" 설정 시 너비와 높이를 같게 Export 합니다.  값 생략 시 "width"로 적용됩니다.  "height" 또는 "both"로 설정하더라도 autofittype, autosizingtype, extendsizetype 등 데이터에 따라 Grid Cell 높이에 영향을 미치는 속성을 설정했다면 화면에 표시되는 Grid Cell 높이와 Export 처리된 파일 내 Cell 높이를 같게 처리할 수 없습니다. |
| `arrCellIndex` | Array | Export 시 바인드된 Column 값을 적용할 Cell 의 인덱스를 배열로 설정합니다.  인덱스가 설정된 Cell 은 표시된 텍스트값이 아닌 바인드된 Column 값을 Export 합니다.  인덱스가 설정되지 않은 Cell 은 사용 Method 에 따라 결과가 달라질 수 있습니다. * exportData() : nOrgValue 파라미터값에 따라 Export 값이 결정됩니다. * exportDataEx() : Cell 에 표시된 텍스트값이 Export 됩니다. |
| `strBandId` | String | arrCellIndex로 설정한 값을 적용할 Band를 설정하는 속성입니다.  "head", "body", "summ" 중 하나의 값을 설정할 수 있습니다.  값 생략 시 모든 Band를 대상으로 적용됩니다. |

**Return**: `Number` — ExcelExportObject 에 추가된 Item 의 인덱스를 반환합니다.  추가에 실패하였을 경우 "-1" 을 반환합니다.

**Remark**
- Export 정보를 설정한 ExportItem 오브젝트 또는 Export 정보를 파라미터로 전달하여 Item 을 추가할 수 있습니다.
- arrCellIndex 파라미터 설정 시 Export 값의 일관성을 위하여 exportDataEx() 메소드를 사용하는 것을 권장합니다.

* 스타일 처리 시 주의 사항
생성할 파일 특성에 따라 일부 스타일 속성이 화면과 다르게 처리될 수 있습니다.

- -nexa-border 속성은 처리되지 않습니다.
- background 속성에 Gradation 이 지정된 경우 Gradation의 중간값(50%위치값) 색상으로 처리됩니다.
- 색상값을 RGBA, HSLA 형태로 설정한 경우 Alpha 값은 무시하고 RGB, HSL 형태로 처리됩니다. 단, Alpha 값이 0인 경우에는 투명색(transparent)으로 처리됩니다.
- font-family 스타일 속성이 2개 이상이면 마지막에 정의된 font로 처리됩니다.

---

## clear

ExcelExportObject 에 추가된 모든 Item 을 삭제하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.clear()
```

**Sample**
```javascript
var nCnt = this.ExcelExportObject00.clear();
```

**Return**: `Number` — 삭제된 Item 의 갯수를 반환합니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## clearExportItems

ExcelExportObject 에서 지정한 타입의 Item 만 삭제하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.clearExportItems(constExportItemType)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `constExportItemType` | Constant | 삭제대상이 되는 Item 의 타입을 상수값으로 설정합니다.  현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다. |

**Return**: `Number` — 삭제된 Item의 갯수를 반환합니다.

---

## count

ExcelExportObject 에 등록된 Item 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.count()
```

**Sample**
```javascript
var nCnt = this.ExcelExportObject00.count();
```

**Return**: `Number` — 모든 item의 갯수를 반환합니다.

---

## countExportItems

ExcelExportObject 에서 지정한 타입의 Item 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.countExportItems(constExportItemType)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `constExportItemType` | Constant | 갯수를 확인하려는 Item 의 타입을 상수값으로 설정합니다.  현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다 |

**Return**: `Number` — 지정한 타입의 item 갯수를 반환합니다.

---

## delExportItem

ExcelExportObject 에서 지정한 타입의 특정 Item 을 삭제하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.delExportItem(constExportItemType,nItemIndex)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `constExportItemType` | Constant | 삭제대상이 되는 Item 의 타입을 상수값으로 설정합니다.  현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다. |
| `nItemIndex` | Number | 삭제하려는 Item 의 인덱스를 설정합니다. |

**Return**: `Boolean` — Item 삭제에 성공하면 "true" 를 반환합니다. 파라미터가 유효하지 않거나 Item 삭제에 실패하면 "false" 를 반환합니다.

**Remark**
- Item 의 인덱스값은 addExportItem() 메소드의 반환값을 이용합니다.

---

## destroy

스크립트에서 동적으로 생성한 ExcelExportObject 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.destroy()
```

**Return**: `Boolean` — ExcelExportObject 이(가) 정상적으로 삭제되면 true 를 반환합니다.  ExcelExportObject 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 ExcelExportObject 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: insertChild, addChild, removeChild

---

## exportData

ExcelExportObject 에 설정된 Item 을 모두 Export 하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.exportData( [strParam, strParamDS, nOrgValue, bFileDown] ) ;
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strParam` | String | 서버 통신시에 파라미터로 전달 될 값을 설정합니다.  DB key 와 같은 값을 전달할 때 사용하는 확장기능입니다. |
| `strParamDS` | String | 서버에 전달될 DataSet 을 "Param_DataSet=export_DataSet" 형태로 설정합니다.  개발환경에 따라 서버에 추가적인 기능구현을 위해 DataSet 을 전달할 때 사용하는 확장기능입니다. |
| `nOrgValue` | Number | Export 시 Cell 값으로 처리될 대상을 설정합니다.  0 또는 false 설정 시 Cell 에 표시되는 텍스트값을 Export 합니다. 1 또는 true 설정 시 Cell 에 바인드된 Column 값을 Export 합니다. 2 설정 시 Cell 의 displaytype 속성값이 "date" 이면 0 으로 적용되고, "date" 가 아니면 1 로 적용됩니다.  값 생략 시 0 으로 적용됩니다.  * valuetypecellindex 속성에 설정된 Cell 은 nOrgValue 파라미터값에 상관없이 바인드 된 Column 값을 Export 합니다.    valuetypecellindex 속성에 설정되지 않은 Cell 은 nOrgValue 파라미터값에 맞게 Export 됩니다.  * Export 결과의 일관성을 위하여 valuetypecellindex 속성과 exportDataEx() 메소드를 사용하는 것을 권장합니다. |
| `bFileDown` | Boolean | Export 가 완료된 후 생성된 파일의 다운로드 여부를 설정합니다.  true 설정 시 파일을 자동으로 다운로드 받습니다. false 설정 시 파일을 자동으로 다운로드 받지 않습니다.  값 생략 시 true 로 적용됩니다. |

**Return**: `Number` — Export 요청에 성공한 Item 의 갯수를 반환합니다.  Export 시킬 Item 이 없는 경우 0 을 반환합니다.  파라미터가 유효하지 않은 값일 경우 -1 을 반환합니다.

**Remark**
- exportmessagealert 속성이 설정되어 있으면 경고창이 닫힌 후 Export 가 시작됩니다. 

- Export 중에는 exporteventtype 속성에 설정된 값에 맞게 이벤트가 발생합니다.

- bFileDown 파라미터를 true 로 설정 시 환경에 따라 다운로드를 위한 팝업창이 표시될 수 있습니다.

- Export 중 에러가 발생한 경우 onerror 이벤트가 발생됩니다.

- Cell 의 displaytype 속성값이 "decoratetext" 일 때 설정된 Tag 는 HTML 형식이므로 Export 시 Decorate 효과가 적용되지 않습니다.
   > valuetypecellindex 속성에 설정된 Cell 은 Tag 가 텍스트로 Export 됩니다.
   > valuetypecellindex 속성에 설정되지 않은 Cell 은 nOrgValue 값에 따라 Tag 가 텍스트로 Export 되거나 Tag 가 제거된 텍스트가 Export 됩니다.

- GridCellControl 에 설정한 CSS 관련 속성값만 Export 시 적용됩니다.

- transferrowcount 속성에 의한 분할 전송은 비동기로 진행됩니다.
   분할 전송이 진행되는 동안 Grid 속성이나 Dataset 의 데이터 변경 시 Export 데이터에 반영될 수 있으므로 주의하여야 합니다.
   예를 들어 exportData() 메소드 다음에 Grid 의 formatid 속성 변경 시 분할된 데이터의 포맷이 변경될 수 있습니다.


◆ web runtime environment 제약

- 웹브라우저에 팝업차단이 설정되어 있을 경우 메소드가 정상적으로 수행되지 않습니다.

---

## exportDataEx

Cell 에 표시된 값을 기준으로 ExcelExportObject 에 설정된 Item 을 모두 Export 하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.exportDataEx( [strParam, strParamDS, bFileDown] ) ;
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strParam` | String | 서버 통신시에 파라미터로 전달 될 값을 설정합니다.  DB key 와 같은 값을 전달할 때 사용하는 확장기능입니다. |
| `strParamDS` | String | 서버에 전달될 DataSet 을 "Param_DataSet=export_DataSet" 형태로 설정합니다.  개발환경에 따라 서버에 추가적인 기능구현을 위해 DataSet 을 전달할 때 사용하는 확장기능입니다. |
| `bFileDown` | Boolean | Export 가 완료된 후 생성된 파일의 자동 다운로드 여부를 설정합니다.  true 설정 시 파일을 자동으로 다운로드 받습니다. true 설정 시 환경에 따라 다운로드를 위한 팝업창이 표시될 수 있습니다.  false 설정 시 파일을 자동으로 다운로드 받지 않습니다.  값 생략 시 true 로 적용됩니다. |

**Return**: `Number` — Export 요청에 성공한 Item 의 갯수를 반환합니다.  Export 시킬 Item 이 없는 경우 0 을 반환합니다.  파라미터가 유효하지 않은 값일 경우 -1 을 반환합니다.

**Remark**
- exportDataEx() 메소드는 Cell 에 표시된 텍스트값을 Export 합니다.
   Cell 에 바인드된 Column 값을 Export 하려면 valuetypecellindex 속성에 해당 Cell 의 인덱스를 설정하여야 합니다.

- valuetypecellindex 속성에 설정된 Cell 은 바인드된 Column 값이 Export 됩니다.
   valuetypecellindex 속성에 설정되지 않은 Cell 은 표시된 텍스트값이 Export 됩니다.

- Cell 의 displaytype 속성값이 "decoratetext" 일 때 설정된 Tag 는 HTML 형식이므로 Export 시 Decorate 효과가 적용되지 않습니다.
   > valuetypecellindex 속성에 설정된 Cell 은 Tag 가 텍스트로 Export 됩니다.
   > valuetypecellindex 속성에 설정되지 않은 Cell 은 Tag 가 제거된 텍스트가 Export 됩니다.

- exportmessagealert 속성이 설정되어 있으면 경고창이 닫힌 후 Export 가 시작됩니다. 

- Export 중에는 exporteventtype 속성에 설정된 값에 맞게 이벤트가 발생합니다.

- Export 중 에러가 발생한 경우 onerror 이벤트가 발생됩니다.

- GridCellControl 에 설정한 CSS 관련 속성값만 Export 시 적용됩니다.

- transferrowcount 속성에 의한 분할 전송은 비동기로 진행됩니다.
   분할 전송이 진행되는 동안 Grid 속성이나 Dataset 의 데이터 변경 시 Export 데이터에 반영될 수 있으므로 주의하여야 합니다.
   예를 들어 exportDataEx() 메소드 다음에 Grid 의 formatid 속성 변경 시 분할된 데이터의 포맷이 변경될 수 있습니다.


◆ web runtime environment 제약

- 웹브라우저에 팝업차단이 설정되어 있을 경우 메소드가 정상적으로 수행되지 않습니다.

---

## exportItems

ExcelExportObject 에서 지정한 타입의 Item 만 Export 하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.exportItems(constExportItemType)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `constExportItemType` | Constant | Export 하려는 Item 의 타입을 상수값으로 설정합니다.  현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다. |

**Return**: `Number` — Export 요청에 성공한 Item 의 갯수를 반환합니다. Export 시킬 Item 이 없는 경우 "0" 을 반환합니다. 파라미터가 유효하지 않은 값일 경우 "-1" 을 반환합니다.

**Remark**
- exportmessagealert 속성이 설정되어 있으면 경고창이 닫힌 후 Export가 시작됩니다. 

- Export 중에는 exporteventtype 속성에 설정된 값에 맞게 이벤트가 발생합니다.

- Export 중 에러가 발생한 경우 onerror 이벤트가 발생됩니다.

- 웹브라우저에 팝업차단이 설정되어 있을 경우 메소드가 정상적으로 수행되지 않습니다.

---

## findEventHandler

ExcelExportObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.findEventHandler( strEventID, objFunc, objTarget )
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

ExcelExportObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getExportItem

ExcelExportObject 에서 지정한 타입의 특정 Item 을 반환하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.getExportItem(constExportItemType,nItemIndex)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `constExportItemType` | Constant | 반환 받으려는 Item 의 타입을 상수값으로 설정합니다.  현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다. |
| `nItemIndex` | Number | 반환 받으려는 Item 의 인덱스를 설정합니다. |

**Return**: `Object` — 지정된 인덱스에 해당하는 Item 을 ExportItem 오브젝트로 반환합니다. 지정된 인덱스에 해당하는 Item 이 없을 경우 "null" 을 반환합니다.

**Remark**
- Item 의 인덱스값은 addExportItem() 메소드의 반환값을 이용합니다.

---

## insertEventHandler

ExcelExportObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

ExcelExportObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | ExcelExportObject 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- ExcelExportObject 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- ExcelExportObject 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

ExcelExportObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.removeEventHandler( strEventID, objFunc, objTarget )
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

ExcelExportObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

ExcelExportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.setEventHandler( strEventID, objFunc, objTarget )
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

ExcelExportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

## setExportItem

Export 할 Item을 ExcelExportObject 의 특정 위치에 추가하는 메소드입니다.

**Syntax**
```javascript
ExcelExportObject.setExportItem( constExportItemType,nItemIndex,objExportItem )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `constExportItemType` | Constant | Export 대상이 되는 컴포넌트의 종류를 상수값으로 설정합니다.  현재 Grid 만 Export 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다 |
| `nItemIndex` | Number | 추가하려는 Item 이 위치할 인덱스를 설정합니다. |
| `objExportItem` | Object | Export 정보를 설정한 ExportItem 오브젝트를 설정합니다. |

**Return**: `Boolean` — Item 추가에 성공하면 "true" 를 반환합니다. 파라미터가 유효하지 않거나 Item 추가에 실패하면 "false" 를 반환합니다.

---
