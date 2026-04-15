# ExcelImportObject Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | ExcelImportObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | ExcelImportObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 ExcelImportObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 ExcelImportObject 을(를) 삭제하는 메소드입니다. |
| `findEventHandler()` | ExcelImportObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getEventHandler()` | ExcelImportObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `importData()` | 파일을 DataSet으로 Import 하는 메소드입니다. |
| `importDataEx()` | ID 로 구분하여 파일을 DataSet 으로 Import 하는 메소드입니다. |
| `insertEventHandler()` | ExcelImportObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `removeEvent()` | ExcelImportObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | ExcelImportObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | ExcelImportObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `setEventHandler()` | ExcelImportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | ExcelImportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |

---

## addEvent

ExcelImportObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | ExcelImportObject 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- ExcelImportObject 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

ExcelImportObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 ExcelImportObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.clearEventHandler( strEventID )
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

스크립트에서 동적으로 생성한 ExcelImportObject 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.destroy()
```

**Return**: `Boolean` — ExcelImportObject 이(가) 정상적으로 삭제되면 true 를 반환합니다.  ExcelImportObject 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 ExcelImportObject 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: removeChild, insertChild, addChild

---

## findEventHandler

ExcelImportObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.findEventHandler( strEventID, objFunc, objTarget )
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

ExcelImportObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## importData

파일을 DataSet으로 Import 하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.importData( strSource,strRange,strOutDatasets [,strArgument] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSource` | String | Import 할 파일의 위치를 URL 형식의 문자열로 설정합니다.  importfilemode 속성값이 "server" 일 경우 "http://", "https://" 형식으로 파일의 위치를 설정합니다. importfilemode 속성값이 "server" 일 때 상대경로를 설정 시 importurl 속성에 설정된 경로를 기준으로 처리됩니다. importfilemode 속성값이 "local" 이거나 strSource 값을 설정하지 않았을 경우 FileDialog 가 표시되고 파일을 선택합니다. |
| `strRange` | String | strSource 에 설정한 파일에서 DataSet 으로 Import 할 영역을 "시트명!셀영역:셀영역" 또는 Import 할 파일의 형식이 CSV, TXT 인 경우에 "시작영역:끝영역" 형식으로 설정합니다.  여러 영역을 지정해야 할 경우 아래 형식으로 반복 설정합니다.  strRange ::= '[Command=<strCommand>; Output=<dsName>; Head=<strArea>; Body=<strArea>]'  <strCommand> ::= 'getsheetlist' | 'getsheetdata'   "getsheetlist" 설정 시 strSource 에 설정한 파일에서 시트목록을 Import 합니다.   "getsheetdata" 설정 시  strSource 에 설정한 파일에서 <strArea> 의 데이터를 Import 합니다.   값을 생략 할 경우 "getsheetdata"로 적용됩니다.  <dsName>    Import 한 데이터를 갖는 변수명입니다.   strOutDatasets 에서 오른쪽 대입변수로 사용됩니다.   값을 생략 할 경우 "output1", "output2" ... 로 자동설정됩니다.  <strArea> ::= '시트명!셀영역:셀영역'   Import 할 데이터 영역을 설정합니다.   "Head" 항목에 정의된 영역은 Import 시 DataSet 의 Column 명으로 사용됩니다.   "Head" 항목 생략 시 "Column0", "Column1" ... 으로 자동설정됩니다.   "Body" 항목에 정의된 영역은 DataSet 의 Row 데이터로 Import 됩니다.   "Body" 항목 생략 시 모든 레코드가 Import 됩니다.   * 시트명을 생략하면 첫 번째 시트가 작업 대상이 됩니다.   * 첫 번째 시트가 아닌 다른 시트를 지정하는 경우에는 "Head", "Body" 모두 설정해주어야 합니다.     아래와 같이 설정한 경우에는 Head는 첫 번째 시트에서 처리되고 Body만 지정한 시트에서 처리됩니다.     Body에서 설정한 셀영역이 Head에 없는 경우에는 에러가 발생할 수 있습니다.     [Command=getData;Output=output2;Body=Sheet2!A1;]  * Import 할 파일의 형식이 CSV, TXT 인 경우에는 아래와 같이 적용합니다.  <strCommand> 지원하지 않습니다. <strArea> ::= StartCol[,StartRow[:EndCol[,EndRow]]]   "Head" 항목에서 StartRow, EndCol, EndRow를 생략하면 아래와 같이 처리합니다.   - StartRow=0, EndCol=ColumnCount-1, EndRow=0   "Head" 항목에서 EndRow 설정값은 무시하고 StartRow 설정값 기준으로 동작합니다.   "Body" 항목에서 StartRow, EndCol, EndRow를 생략하면 아래와 같이 처리합니다.   - StartRow=0, EndCol=ColumnCount-1, EndRow=RowCount-1 |
| `strOutDatasets` | String | Import 한 데이터를 저장할 DataSet 의 ID 를 "DataSet명=변수명" 의 형식으로 설정합니다.  DataSet 을 1개 이상 설정할 수 있으며 공백으로 구분합니다. 우측의 "변수명" 은 strRange 에 설정한 변수명을 설정하거나 "output1" ... 으로 자동생성된 변수명을 설정합니다. |
| `strArgument` | String | Import 시 필요한 정보를 "변수명=변수값" 형태로 설정합니다.  파라미터쌍을 1개 이상 설정할 수 있으며 공백으로 구분합니다. 비밀번호가 설정된 엑셀파일을 Import 할 경우 "filepassword=엑셀파일비밀번호" 를 입력해야 정상동작합니다. |

**Remark**
- Import 중 ESC 키를 입력하면 Import 를 중지시킬 수 있습니다.

- Local 에 위치한 파일을 importurl 속성에 설정된 서버로 보낸 후 트랜잭션처럼 DataSet 으로 수신받습니다.

- importDataEx() 메소드와의 차이는 Import 를 구분할 수 있는 ID 파라미터의 유무입니다.

- Import 할 파일에 포함된 개체(이미지, 차트, 수식 등)는 Import 대상에 포함하지 않으며 개체가 포함된 경우 개체는 무시하고 처리합니다.

---

## importDataEx

ID 로 구분하여 파일을 DataSet 으로 Import 하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.importDataEx( strImportID, strSource,strRange,strOutDatasets [,strArgument] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strImportID` | String | Import 를 구분하기 위한 ID 를 문자열로 설정합니다.  설정값은 onsuccess 이벤트에서 ExcelImportEventInfo 오브젝트의 importid 속성으로 전달됩니다. |
| `strSource` | String | Import 할 파일의 위치를 URL 형식의 문자열로 설정합니다.  importfilemode 속성값이 "server" 일 경우 "http://", "https://" 형식으로 파일의 위치를 설정합니다. importfilemode 속성값이 "server" 일 때 상대경로를 설정 시 importurl 속성에 설정된 경로를 기준으로 처리됩니다. importfilemode 속성값이 "local" 이거나 strSource 값을 설정하지 않았을 경우 FileDialog 가 표시되고 파일을 선택합니다. |
| `strRange` | String | strSource 에 설정한 파일에서 DataSet 으로 Import 할 영역을 "시트명!셀영역:셀영역" 또는 Import 할 파일의 형식이 CSV, TXT 인 경우에 "시작영역:끝영역" 형식으로 설정합니다.  여러 영역을 지정해야 할 경우 아래 형식으로 반복 설정합니다.  strRange ::= '[Command=<strCommand>; Output=<dsName>; Head=<strArea>; Body=<strArea>]'  <strCommand> ::= 'getsheetlist' | 'getsheetdata'   "getsheetlist" 설정 시 strSource 에 설정한 파일에서 시트목록을 Import 합니다.   "getsheetdata" 설정 시  strSource 에 설정한 파일에서 <strArea> 의 데이터를 Import 합니다.   값을 생략 할 경우 "getsheetdata"로 적용됩니다.  <dsName>    Import 한 데이터를 갖는 변수명입니다.   strOutDatasets 에서 오른쪽 대입변수로 사용됩니다.   값을 생략 할 경우 "output1", "output2" ... 로 자동설정됩니다.  <strArea> ::= '시트명!셀영역:셀영역'   Import 할 데이터 영역을 설정합니다.   "Head" 항목에 정의된 영역은 Import 시 DataSet 의 Column 명으로 사용됩니다.   "Head" 항목 생략 시 "Column0", "Column1" ... 으로 자동설정됩니다.   "Body" 항목에 정의된 영역은 DataSet 의 Row 데이터로 Import 됩니다.   "Body" 항목 생략 시 모든 레코드가 Import 됩니다.   * 시트명을 생략하면 첫 번째 시트가 작업 대상이 됩니다.   * 첫 번째 시트가 아닌 다른 시트를 지정하는 경우에는 "Head", "Body" 모두 설정해주어야 합니다.     아래와 같이 설정한 경우에는 Head는 첫 번째 시트에서 처리되고 Body만 지정한 시트에서 처리됩니다.     Body에서 설정한 셀영역이 Head에 없는 경우에는 에러가 발생할 수 있습니다.     [Command=getData;Output=output2;Body=Sheet2!A1;]  * Import 할 파일의 형식이 CSV, TXT 인 경우에는 아래와 같이 적용합니다.  <strCommand> 지원하지 않습니다. <strArea> ::= StartCol[,StartRow[:EndCol[,EndRow]]]   "Head" 항목에서 StartRow, EndCol, EndRow를 생략하면 아래와 같이 처리합니다.   - StartRow=0, EndCol=ColumnCount-1, EndRow=0   "Head" 항목에서 EndRow 설정값은 무시하고 StartRow 설정값 기준으로 동작합니다.   "Body" 항목에서 StartRow, EndCol, EndRow를 생략하면 아래와 같이 처리합니다.   - StartRow=0, EndCol=ColumnCount-1, EndRow=RowCount-1 |
| `strOutDatasets` | String | Import 한 데이터를 저장할 DataSet 의 ID 를 "DataSet명=변수명" 의 형식으로 설정합니다.  DataSet 을 1개 이상 설정할 수 있으며 공백으로 구분합니다. 우측의 "변수명" 은 strRange 에 설정한 변수명을 설정하거나 "output1" ... 으로 자동생성된 변수명을 설정합니다. |
| `strArgument` | String | Import 시 필요한 정보를 "변수명=변수값" 형태로 설정합니다.  파라미터쌍을 1개 이상 설정할 수 있으며 공백으로 구분합니다. 비밀번호가 설정된 엑셀파일을 Import 할 경우 "filepassword=엑셀파일비밀번호" 를 입력해야 정상동작합니다. |

**Remark**
- Import 중 ESC 키를 입력하면 Import 를 중지시킬 수 있습니다.

- Local 에 위치한 파일을 importurl 속성에 설정된 서버로 보낸 후 트랜잭션처럼 DataSet 으로 수신받습니다.

- importData() 메소드와의 차이는 Import 를 구분할 수 있는 ID 파라미터의 유무입니다.

- Import 할 파일에 포함된 개체(이미지, 차트, 수식 등)는 Import 대상에 포함하지 않으며 개체가 포함된 경우 개체는 무시하고 처리합니다.

---

## insertEventHandler

ExcelImportObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

ExcelImportObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | ExcelImportObject 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- ExcelImportObject 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- ExcelImportObject 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

ExcelImportObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.removeEventHandler( strEventID, objFunc, objTarget )
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

ExcelImportObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

ExcelImportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.setEventHandler( strEventID, objFunc, objTarget )
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

ExcelImportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
ExcelImportObject.setEventHandlerLookup( strEventID, strFunc, objTarget )
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
