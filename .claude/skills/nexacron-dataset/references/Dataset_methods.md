# Dataset Methods

| Method | Description |
|--------|-------------|
| `addColumn()` | DataSet 에 Column 을 추가하는 메소드입니다. |
| `addColumnInfo()` | DataSet 에서 ColumnInfo 객체를 사용하여 Column 을 추가하는 메소드입니다. |
| `addConstColumn()` | DataSet 에 Const Column(상수 컬럼)을 추가하는 메소드입니다. |
| `addEvent()` | Dataset 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | Dataset 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 Dataset 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `addRow()` | DataSet 의 마지막 Row 에 새로운 데이터(Row)를 추가하는 메소드입니다. |
| `append()` | 인수로 전달된 서비스경로(URL)에서 데이터를 로드하여 현재 DataSet 의 마지막 Row 뒤에 추가하는 메소드입니다. |
| `appendData()` | 현재 Dataset 의 마지막 Row 다음에 지정한 Dataset 의 데이터(Row)를 추가하는 메소드입니다. |
| `applyChange()` | DataSet 오브젝트의 Row의 타입을  "Dataset.ROWTYPE_NORMAL"로 바꾸는 메소드입니다. |
| `assign()` | 현재 DataSet 에 지정한 DataSet 의 Row, Column 정보와 모든 데이터를 부여하는 메소드입니다. |
| `clear()` | DataSet 의 Row, Column 정보와 데이터를 모두 삭제하는 메소드입니다. |
| `clearData()` | DataSet 의 Column 정보 이외에 모든 데이터(Row) 를 삭제하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `copyData()` | 현재 DataSet 에 지정한 DataSet 의 데이터(Row)를 복사하는 메소드입니다. |
| `copyRow()` | 현재 Dataset 의 특정 데이터(Row)를 지정한 Dataset 의 데이터(Row)로 갱신하는 메소드입니다. |
| `createDataset()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환하는 메소드입니다. |
| `createDatasetNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환하는 메소드입니다. |
| `deleteAll()` | DataSet 의 모든 데이터(Row)를 삭제하는 메소드입니다. |
| `deleteColumn()` | DataSet 에서 지정한 Column 또는 Const Column 을 삭제하는 메소드입니다. |
| `deleteMultiRows()` | 배열로 된 Row 목록을 입력 받아 해당 Row 들을 삭제하는 메소드입니다. |
| `deleteRow()` | DataSet 에서 지정한 데이터(Row)를 삭제하는 메소드입니다. |
| `exchangeRow()` | DataSet 에서 지정된 두 Row 의 위치(RowPosition)를 서로 바꾸는 메소드입니다. |
| `extractRows()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다. |
| `extractRowsNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다. |
| `filter()` | DataSet 에 로드된 데이터를 조건에 만족하는 데이터(Row) 만 보이게 필터링하는 메소드입니다. |
| `filterRow()` | DataSet 에서 특정 Row 를 보이지 않게 필터링하는 메소드입니다. |
| `findEventHandler()` | Dataset 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `findMaxLengthRow()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 의 데이터 길이가 가장 긴 Row 의 인덱스를 반환하는 메소드입니다. |
| `findMaxLengthRowNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 의 데이터 길이가 가장 긴 Row 의 인덱스를 반환하는 메소드입니다. |
| `findNFRowIndex()` | 필터링 된 DataSet 의 Row 인덱스를 필터링 되지 않은 DataSet 의 Row 인덱스로 반환하는 메소드입니다. |
| `findRow()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달된 값과 일치하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다 |
| `findRowAs()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달된 값으로 시작되는 첫번째 Row 의 인덱스를 반환하는 메소드입니 |
| `findRowAsNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달된 값으로 시작되는 첫번째 Row 의 인덱스를 반환하는 메소드입니 |
| `findRowExpr()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다. |
| `findRowExprNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다. |
| `findRowNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달된 값과 일치하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다 |
| `getAvg()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| `getAvgNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| `getCaseAvg()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다 |
| `getCaseAvgNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다 |
| `getCaseCount()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 Row 의 전체 갯수를 반환하는 메소드입니다. |
| `getCaseCountNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 Row 의 전체 갯수를 반환하는 메소드입니다. |
| `getCaseMax()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니 |
| `getCaseMaxNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니 |
| `getCaseMin()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니 |
| `getCaseMinNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니 |
| `getCaseSum()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다 |
| `getCaseSumNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 합계값를 반환하는 메소드입니다 |
| `getColCount()` | DataSet 에서 Const Column 을 포함한 전체 Column 의 갯수를 구하는 메소드입니다. |
| `getColID()` | DataSet 에서 전달된 인덱스에 해당하는 Column 의 ID 를 반환하는 메소드입니다. |
| `getColIndex()` | DataSet 에서 전달된 ID 에 해당하는 Column 의 인덱스를 반환하는 메소드입니다. |
| `getColumn()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 Row 와 Column 의 현재값을 반환하는 메소드입니다. |
| `getColumnInfo()` | DataSet 에서 지정한 Column 의 ColumnInfo 객체를 반환하는 메소드입니다. |
| `getColumnNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 Row 와 Column 의 현재값을 반환하는 메소드입니다. |
| `getConstColID()` | DataSet 에서 전달된 인덱스에 해당하는 Const Column 의 ID 를 반환하는 메소드입니다. |
| `getConstColIndex()` | DataSet 에서 전달된 ID 에 해당하는 Const Column 의 인덱스를 반환하는 메소드입니다. |
| `getConstColumn()` | DataSet 에서 지정한 Const Column 의 값을 구하는 메소드입니다. |
| `getConstCount()` | DataSet 에 정의된 Const Column 의 갯수를 구하는 메소드입니다. |
| `getCount()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다. |
| `getCountNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다. |
| `getDeletedColumn()` | DataSet 에서 삭제된 Row 중에서 지정된 Row 의 Column 값을 구하는 메소드입니다. |
| `getDeletedRowCount()` | Dataset 오브젝트에서 삭제된 Row의 개수를 구하는 메서드입니다. |
| `getDeletedRowset()` | Dataset 오브젝트에서 삭제된 전체 Row를 배열로 반환하는 메서드입니다. |
| `getEventHandler()` | Dataset 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getGroupRangeCount()` | DataSet 이 그룹화되어 있을 때 그룹정보를 포함하고 있는 Row 가 참조한 Row 의 갯수를 구하는 메소드입니다. |
| `getGroupRangeStart()` | DataSet 이 그룹화되어 있을 때 그룹정보를 포함하고 있는 Row 가 참조한 Row 의 시작 인덱스를 구하는 메소드입니다. |
| `getMax()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| `getMaxNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| `getMin()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| `getMinNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| `getOrgColumn()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 Row 와 Column 의 초기값을 반환하는 메소드입니다. |
| `getOrgColumnNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 Row 와 Column 의 초기값을 반환하는 메소드입니다. |
| `getRowCount()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 Row 의 전체 갯수를 반환하는 메소드입니다. |
| `getRowCountNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 Row 의 전체 갯수를 반환하는 메소드입니다. |
| `getRowLevel()` | DataSet 이 그룹화되어 있을 경우에 지정한 Row 의 레벨을 구하는 메소드입니다. |
| `getRowsAvg()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 % Row 의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| `getRowsAvgNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다. |
| `getRowsCount()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 중 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다. |
| `getRowsCountNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 중 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다. |
| `getRowsMax()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| `getRowsMaxNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다. |
| `getRowsMin()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| `getRowsMinNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다. |
| `getRowsSum()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다. |
| `getRowsSumNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다. |
| `getRowType()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정된 Row 의 타입을 반환하는 메소드입니다. |
| `getRowTypeNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정된 Row 의 타입을 반환하는 메소드입니다. |
| `getSum()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다. |
| `getSumNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다. |
| `insertEventHandler()` | Dataset 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `insertRow()` | DataSet 에서 지정된 Row 의 위치에 새로운 Row 를 삽입하는 메소드입니다. |
| `load()` | DataSet 의 url 속성에 설정된 Business Service 에서 데이터를 로드하는 메소드입니다. |
| `loadBIN()` | DataSet 에 Binary 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| `loadCSV()` | DataSet 에 CSV 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| `loadFromDataObject()` | binddataobject, dataobjectpath 속성에 설정된 값을 Dataset 오브젝트에 즉시 반영시키는 메소드입니다. |
| `loadJSON()` | Dataset 오브젝트에 JSON 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| `loadSSV()` | DataSet 에 SSV 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| `loadXML()` | DataSet 에 XML 형식으로 만들어진 데이터를 로드하는 메소드입니다. |
| `lookup()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달값과 일치하는 첫번째 Row 의 지정된 Column 값을 반환하는 |
| `lookupAs()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달값으로 시작하는 첫번째 Row 의 지정된 Column 값을 반환하 |
| `lookupAsNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달값으로 시작하는 첫번째 Row 의 지정된 Column 값을 반환하 |
| `lookupNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달값과 일치하는 첫번째 Row 의 지정된 Column 값을 반환하는 |
| `mergeData()` | 현재 Dataset 에 지정한 Dataset 을 통합하는 메소드입니다. |
| `moveRow()` | DataSet 에서 지정한 Row 를 특정 위치로 이동하는 메소드입니다. |
| `removeEvent()` | Dataset 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | Dataset 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | Dataset 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `reset()` | DataSet 의 데이터를 마지막 저장 상태로 복구하는 메소드입니다. |
| `saveBIN()` | DataSet 의 데이터를 Binary 형식으로 반환하는 메소드입니다. |
| `saveCSV()` | DataSet 의 데이터를 CSV 형식으로 반환하는 메소드입니다. |
| `saveJSON()` | Dataset 오브젝트의 데이터를 JSON 형식으로 반환하는 메소드입니다. |
| `saveSSV()` | DataSet 의 데이터를 SSV 형식으로 반환하는 메소드입니다. |
| `saveXML()` | DataSet 의 데이터를 XML 형식으로 반환하는 메소드입니다. |
| `setColumn()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값을 변경하는 메소드입니다. |
| `setColumnNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값을 변경하는 메소드입니다. |
| `setConstColumn()` | DataSet 에 정의된 Const Column 의 상수값을 변경하는 메소드입니다. |
| `setContents()` | Dataset 의 내부 구성 컨텐츠를 동적으로 설정하는 메소드입니다. |
| `setEventHandler()` | Dataset 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | Dataset 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setRowType()` | 필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 타입값을 변경하는 메소드입니다. |
| `setRowTypeNF()` | 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 타입값을 변경하는 메소드입니다. |
| `updateColID()` | Const Column 을 포함하여 DataSet 에 정의된 Column 의 ID 를 변경하는 메소드입니다. |
| `updateConstColID()` | DataSet 에서 지정한 Const Column 의 ID를 변경하는 메소드입니다. |
| `updateSortGroup()` | DataSet 에 로드된 데이터를 그룹핑 또는 정렬하는 메소드입니다. |

---

## addColumn

DataSet 에 Column 을 추가하는 메소드입니다.

**Syntax**
```javascript
Dataset.addColumn( strColID, strColType [,nColSize [, strDatapath]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | DataSet 에 추가할 Column 의 ID 를 문자열로 설정합니다. |
| `strColType` | String | DataSet 에 추가할 Column 의 타입을 설정합니다. |
| `nColSize` | Number | DataSet 에 추가할 Column 의 데이터 길이를 설정합니다.  값을 생략하면 "256" 으로 적용됩니다. |
| `strDatapath` | String | 데이터에서 컬럼 값으로 가져올 datapath를 설정합니다. |

**Return**: `Number` — DataSet 에 추가된 Column 의 인덱스를 반환합니다. 만약, Column 의 추가에 실패하면 "-1" 을 반환합니다.

**Remark**
- Column 의 ID 생성 규칙은 JavaScript Id 생성규칙과 동일합니다.

- Column 의 추가에 성공하면 onrowsetchanged 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- Column 의 추가에 실패하면 onrowsetchanged 이벤트가 발생하지 않습니다.

- 넥사크로 스튜디오에서 Dataset 오브젝트의 dataobjectpath 속성을 선택하고 Data Path Editor를 실행하면 Json Contents에서 컬럼으로 추가할 항목을 선택하고 추가하면 datapath 속성값을 자동으로 설정합니다.

**See Also**: reason

---

## addColumnInfo

DataSet 에서 ColumnInfo 객체를 사용하여 Column 을 추가하는 메소드입니다.

**Syntax**
```javascript
Dataset.addColumnInfo( strID, objColInfo )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | DataSet 에 추가할 Column 의 ID 를 문자열로 설정합니다. |
| `objColInfo` | Object | DataSet 에 추가할 ColumnInfo 객체를 설정합니다. |

**Return**: `Number` — DataSet 에 추가된 Column 의 인덱스를 반환합니다. 만약, Column 의 추가에 실패하면 "-1" 을 반환합니다.

**Remark**
- ColumnInfo 객체는 Column 의 ID, Type, Size 정보를 갖습니다.

- Column 의 추가에 성공하면 onrowsetchanged 이벤트가 발생합니다.
  이 때 onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.
  만약, 실패하면 Event가 발생하지 않습니다.

**See Also**: reason

---

## addConstColumn

DataSet 에 Const Column(상수 컬럼)을 추가하는 메소드입니다.

**Syntax**
```javascript
Dataset.addConstColumn( strColID, varVal [, strColType [, nColSize [, strDatapath]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | DataSet 에 추가할 Const Column 의 ID 를 문자열로 설정합니다.  설정한 값과 동일한 Const Column 이 이미 존재하면 해당 Const Column 의 값을 변경합니다. |
| `varVal` | Variant | DataSet 에 추가할 Const Column 의 값을 설정합니다. |
| `strColType` | String | DataSet 에 추가할 Const Column 의 타입을 설정합니다.  값을 생략하면 타입이 설정되지 않거나 잘못된 값이 설정될 수 있습니다. |
| `nColSize` | Number | DataSet 에 추가할 Const Column 의 데이터 길이를 설정합니다.  값을 생략하면 size 가 설정되지 않습니다. |
| `strDatapath` | String | JSON 데이터에서 컬럼 값으로 가져올 datapath를 설정합니다. $를 사용한 루트 경로를 설정합니다. @를 사용해 반복 데이터를 선택한 경우 첫 번째 값을 가져옵니다. |

**Return**: `Number` — DataSet 에 추가된 Const Column 의 인덱스를 반환합니다.  Const Column 의 추가에 실패하면 -1 을 반환합니다.

**Remark**
- Const Column 추가에 성공하면 onrowsetchanged 이벤트가 발생합니다.
   이 때, onnrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- 넥사크로 스튜디오에서 Dataset 오브젝트의 dataobjectpath 속성을 선택하고 Data Path Editor를 실행하면 Json Contents에서 컬럼으로 추가할 항목을 선택하고 추가하면 datapath 속성값을 자동으로 설정합니다.
- varVal, strDatapath 파라미터가 같이 설정된 경우에는 varVal 파라미터 값은 무시합니다.

---

## addEvent

Dataset 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
Dataset.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | Dataset 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- Dataset 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

Dataset 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
Dataset.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 Dataset 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
Dataset.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

## addRow

DataSet 의 마지막 Row 에 새로운 데이터(Row)를 추가하는 메소드입니다.

**Syntax**
```javascript
Dataset.addRow()
```

**Sample**
```javascript
var nRow = this.Dataset00.addRow();
```

**Return**: `Number` — DataSet 에 추가된 Row 의 인덱스를 반환합니다. 만약, Row 의 추가에 실패하면 "-1" 을 반환합니다.

**Remark**
- DataSet 에 Column 이 정의되어 있지 않다면 메소드는 수행되지 않습니다.

- 새로운 Row 추가 후 onrowsetchanged → canrowposchange → onrowposchanged → onvaluechanged 순서로 이벤트가 발생됩니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_APPEND" 가 됩니다.

- updatecontrol 속성값이 "true"이면 추가된 Row 의 타입은 "ROWTYPE_INSERT"가 되고, "false"이면 "ROWTYPE_NORMAL" 이 됩니다.

- 새로운 Row 가 추가되면 rowposition 속성값이 추가된 Row로 변경되고 canrowposchange 이벤트가 발생합니다.
  canrowposchange 이벤트에서 "false"를 반환하면 rowposition 속성이 변경되지 않습니다.
  canrowposchange 이벤트에서 "true"를 반환하면 rowposition 속성이 변경되고 onrowposchanged 이벤트가 발생합니다.

**See Also**: getRowType, setRowType, reason

---

## append

인수로 전달된 서비스경로(URL)에서 데이터를 로드하여 현재 DataSet 의 마지막 Row 뒤에 추가하는 메소드입니다.

**Syntax**
```javascript
Dataset.append([strUrl])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strUrl` | String | 데이터를 로드하기 위한 서비스경로(URL)을 설정합니다. 허용되는 형식은 DataSet 의 url 속성을 참고하시기 바랍니다.  값을 설정하지 않을 경우 DataSet 의 url 속성값이 적용됩니다. |

**Remark**
- 데이터 로드를 위한 통신 중 에러가 발생하면 Application 의 onerror 이벤트가 발생합니다.

- strUrl 값이 생략되었을 때 DataSet 의 url 속성값이 설정되어 있지 않으면 onload 이벤트가 발생하며 e.errorcode, e.errormsg 에 에러 내역이 전달됩니다.

- 데이터 로드에 성공하면 onload 이벤트가 발생하며 e.reason 속성값은 "REASON_APPEND" 가 됩니다.

- 데이터 추가 시 DataSet 상태에 따라 아래와 같이 동작합니다.

  1) 현재 DataSet 에 Column 정보가 없다면 추가할 DataSet 의 Column 정보가 현재 DataSet 에 복사되고 모든 데이터가 추가됩니다.
  2) 현재 DataSet 에 Column 정보가 있다면 추가할 DataSet 의 Column 명과 현재 DataSet 의 Column 명이 일치하는 Column 에만 데이터가 추가됩니다.

**See Also**: url

---

## appendData

현재 Dataset 의 마지막 Row 다음에 지정한 Dataset 의 데이터(Row)를 추가하는 메소드입니다.

**Syntax**
```javascript
Dataset.appendData( objDataset [,bCheckCol [,bUpdateConstCol]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDataset` | Object | 추가될 데이터(Row)를 갖고 있는 DataSet 을 오브젝트로 설정합니다. |
| `bCheckCol` | Boolean | true 설정 시 동일한 Column 에 데이터가 추가됩니다. false 설정 시 Column 순서에 맞게 데이터가 추가됩니다.  값 생략 시 false 로 적용됩니다. |
| `bUpdateConstCol` | Boolean | true 설정 시 동일한 ID 의 Const Column 에 상수값을 수정합니다. false 설정 시 동일한 ID 의 Const Column 에 상수값을 수정하지 않습니다.  값 생략 시 false 로 적용됩니다. |

**Return**: `Number` — 새로 추가된 데이터를 포함하여 현재 Dataset 의 전체 Row 갯수를 반환합니다.

**Remark**
- appendData() 메소드는 bCheckCol, bUpdateConstCol 매개변수의 설정에 따라 아래와 같이 동작합니다.

  1) bUpdateConstCol 이 false 이고, bCheckCol 이 true 이면
      objDataset 과 현재 Dataset 의 Column ID 를 비교하여 같은 ID 를 가진 Column 에만 데이터를 추가합니다.
      만약 같은 ID 를 가진 Column 이 없으면 추가되지 않습니다.

  2) bUpdateConstCol 이 false 이고, bCheckCol 이 false 이면
      Column ID 와는 상관없이 Column 의 인덱스 순서에 따라 순차적으로 데이터를 추가합니다.

  3) bUpdateConstCol 이 true 이고, bCheckCol 이 true 이면
      objDataset 과 현재 Dataset 의 Const Column ID 를 비교하여 같은 ID 를 가진 Const Column 의 값을 변경합니다.
      만약 같은 ID 를 가진 Const Column 이 없으면 Const Column 의 값이 변경되지 않습니다.

  4) bUpdateConstCol 이 true 이고, bCheckCol 이 false 이면
      Const Column ID 와는 상관없이 Const Column 의 인덱스 순서에 따라 순차적으로 데이터를 추가합니다.


- 현재 Dataset 에 Const Column 을 포함한 어떤 Column 도 정의되어 있지 않으면 objDataset 의 모든 Column 이 추가됩니다.
   단, Const Column 은 bUpdateConstCol 속성값이 true 일 때만 추가됩니다.

- appendData() 메소드가 수행된 후에는 onrowsetchanged 이벤트가 발생합니다.
   이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_APPEND" 가 됩니다.

- appendData() 메소드는 rowposition 속성의 값을 변경하지 않습니다. 
   다만 메소드를 수행하기 전의 rowposition 속성값이 -1 인 경우는 rowposition 을 0 으로 변경하기 위해 canrowposchange 이벤트를 호출합니다.

- canrowposchange 이벤트에서 true 를 반환하면 새로운 Row 위치로 변경하고 onrowposchanged 이벤트가 호출됩니다.
   그러나 false 를 반환하면 rowposition 속성이 변경되지 않습니다.

- canrowposchange 이벤트는 onrowsetchanged 이벤트가 수행된 후 호출됩니다.

- keystring 또는 filterstr 속성으로 그룹핑/정렬/필터링 되어 있는 경우 appendData() 메소드 수행 후 자동으로 재적용되지 않습니다.
   따라서 그룹핑/정렬/필터링을 재적용하려면 updateSortGroup() 또는 filter() 메소드를 명시적으로 수행하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

**See Also**: reason

---

## applyChange

DataSet 오브젝트의 Row의 타입을  "Dataset.ROWTYPE_NORMAL"로 바꾸는 메소드입니다.

**Syntax**
```javascript
Dataset.applyChange()
```

**Sample**
```javascript
this.Dataset00.applyChange();
```

**Remark**
- Row 의 타입을 "Dataset.ROWTYPE_NORMAL (1)"로 변경합니다.
  만약 특정한 Row 의 타입만 변경하려면 DataSet 의 setRowType() 메소드를 사용하시기 바랍니다.
  단, Row 의 타입이 다음과 같은 경우에는 "Dataset.ROWTYPE_NORMAL"로 변경되지 않고 현재 상태를 유지합니다.
  - Dataset.ROWTYPE_EMPTY (0)
  - Dataset.ROWTYPE_DELETE (8)
  - Dataset.ROWTYPE_GROUP (16)

- applyChange 메소드가 처리되고 onrowsetchanged 이벤트가 발생합니다.

**See Also**: setRowType

---

## assign

현재 DataSet 에 지정한 DataSet 의 Row, Column 정보와 모든 데이터를 부여하는 메소드입니다.

**Syntax**
```javascript
Dataset.assign( objDataset )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDataset` | Object | Row, Column 정보와 모든 데이터를 가져올 DataSet 을 오브젝트로 설정합니다. |

**Return**: `Number` — 현재 DataSet 에 부여된 Row 의 갯수를 반환합니다.

**Remark**
- assign() 메소드를 수행하면 대상 DataSet 의 모든 Row, Column 정보는 삭제됩니다.

- assign() 메소드는 수행 시 onrowsetchanged → canrowposchange → onrowposchanged → onvaluechanged 순서로 이벤트가 발생합니다.

- onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_ASSIGN" 가 됩니다.
  onrowsetchanged 이벤트가 수행된 후 rowposition 속성값은 "-1" 로 설정됩니다.

- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값을 "0"으로 설정하기 위해 canrowposchange 이벤트를 호출합니다.

- canrowposchange 이벤트에서 "false"를 반환하는 경우에는 rowposition 속성값은 변경되지 않습니다.
  canrowposchange 이벤트에서 "true"를 반환하는 경우에는 새로운 rowposition 속성값을 "0" 으로 변경하고 onrowposchanged 이벤트를 호출합니다.

- DataSet 의 Row, Column 정보를 제외한 필터, 그룹 정보 등은 부여되지 않습니다.

**See Also**: reason

---

## clear

DataSet 의 Row, Column 정보와 데이터를 모두 삭제하는 메소드입니다.

**Syntax**
```javascript
Dataset.clear()
```

**Sample**
```javascript
var nRowCnt = this.Dataset00.clear();
```

**Return**: `Number` — 삭제된 데이터(Row) 의 갯수를 반환합니다.

**Remark**
- clear() 메소드를 수행하면 현재 DataSet 의 모든 정보는 삭제되므로 reset() 메소드를 수행하여도 복구할 수 없습니다.
  만약, DataSet 의 데이터(Row) 만 삭제하려면 clearData() 메소드를 사용하시기 바랍니다.
  clearData() 메소드는 Column 정보는 삭제하지 않습니다.

- clear() 메소드의 수행이 완료되면 onrowsetchanged 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CLEAR" 가 됩니다.
- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값은 "-1" 로 설정됩니다. 
  rowposition 속성값이 "-1" 로 설정된 후 onrowposchanged 이벤트를 호출합니다.

**See Also**: reason

---

## clearData

DataSet 의 Column 정보 이외에 모든 데이터(Row) 를 삭제하는 메소드입니다.

**Syntax**
```javascript
Dataset.clearData()
```

**Sample**
```javascript
var nRowCnt = this.Dataset00.clearData();
```

**Return**: `Number` — 삭제된 데이터(Row) 의 갯수를 반환합니다.

**Remark**
- clearData() 메소드가 수행되고 나면 모든 데이터(Row)가 제거되므로 reset() 메소드를 수행하여도 복구할 수 없습니다.
  만약, 다시 복구할 필요가 있다면 deleteAll() 메소드를 사용하시기 바랍니다.

- clearData() 메소드가 수행되면 onrowsetchanged 이벤트가 발생합니다. 
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CLEARDATA" 가 됩니다.
- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값은 "-1"이 됩니다.  
  rowposition 속성값이 "-1" 로 설정된 후 onrowposchanged 이벤트를 호출합니다.

**See Also**: reason

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
Dataset.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## copyData

현재 DataSet 에 지정한 DataSet 의 데이터(Row)를 복사하는 메소드입니다.

**Syntax**
```javascript
Dataset.copyData( objDataset [, bFilteredOnly] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDataset` | Object | 복사할 데이터(Row)를 갖고 있는 DataSet 을 오브젝트로 설정합니다. |
| `bFilteredOnly` | Boolean | "true" 설정 시 objDataset 이 필터링 되어 있다면 필터링 된 데이터만 복사합니다. "false" 설정 시 objDataset 의 필터링 여부와 관계없이 모든 데이터를 복사합니다.  값 생략 시 "false" 로 적용됩니다. |

**Return**: `Number` — 복사된 데이터(Row) 의 갯수를 반환합니다. 복사된 데이터(Row) 가 없다면 "null" 을 반환합니다.

**Remark**
- copyData() 메소드를 수행하면 현재 DataSet 의 모든 Row, Column 정보는 삭제됩니다.
  DataSet 이 복사될 때 삭제된 데이터(Row)는 복사하지 않습니다.
  또한, copyData() 메소드를 수행하여 복사된 데이터(Row)의 타입은 "ROWTYPE_NORMAL" 가 됩니다.

- copyData() 메소드를 수행하면 onrowsetchanged → canrowposchange → onrowposchanged → onvaluechanged 순서로 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 상태값은 "REASON_COPY" 가 됩니다.

- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값을 "0" 으로 설정하기 위해 canrowposchange 이벤트를 호출합니다.

- canrowposchange 이벤트에서 "false" 를 반환하면 rowposition 속성이 변경되지 않습니다.
  그리고 "true" 를 반환하면 새로운 Row 의 위치로 변경하고 onrowposchanged 이벤트를 호출합니다.

**See Also**: reason

---

## copyRow

현재 Dataset 의 특정 데이터(Row)를 지정한 Dataset 의 데이터(Row)로 갱신하는 메소드입니다.

**Syntax**
```javascript
Dataset.copyRow( nToRow, objDataset, nFromRow [,strColInfo] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nToRow` | Number | 새로운 데이터로 갱신될 현재 DataSet 의 Row 인덱스를 설정합니다. |
| `objDataset` | Object | 복사해 올 데이터를 가진 DataSet 을 오브젝트로 설정합니다. |
| `nFromRow` | Number | objDataset 에서 복사해 올 Row 의 인덱스를 설정합니다. |
| `strColInfo` | String | 데이터를 갱신할 때 "ToColumnID=FromColumnID,ToColumnID1=FromColumnID1" 형식으로 Column 을 매칭시키는 조건을 설정합니다.  값 생략 시 동일한 Column ID를 가진 데이터만 갱신됩니다. |

**Return**: `Boolean` — 메소드 수행에 성공하면 true 를 반환합니다. 메소드 수행에 실패하면 false 를 반환합니다.

**Remark**
- 복사할 Column 이 서로 다를 경우 복사될 Column 을 지정할 수 있습니다.
   매개변수인 strColInfo를 설정하면 지정된 Column 만 복사합니다.
   만약 Column 을 지정하지 않으면 같은 ID 를 가진 모든 Column 의 값을 복사합니다.

- copyRow() 메소드가 성공하면 oncolumnchanged 이벤트가 발생합니다.
   이 때, oncolumnchanged 이벤트의 DSColChangeEventInfo 객체 속성 중 Row 관련 속성만 유효합니다.

- updatecontrol 속성값이 true 이면 복사된 Row 의 타입은 "ROWTYPE_UPDATE" 가 되고, false 이면 "ROWTYPE_NORMAL" 가 됩니다.

- copyRow() 메소드는 지정된 위치의 Row 를 변경하므로, 복사하여 추가하기 위해서는 addRow() 메소드를 사용하여 새로운 Row 를 생성한 후 copyRow() 메소드를 수행해야 합니다.

- 매개변수인 nToRow 또는 nFromRow 에 undefined, null 등의 NaN 값을 입력하면 ECMA 정수 변환 규칙에 따라 0 이 되므로 주의하여야 합니다.

- nToRow가 현재 선택된 Row 인 경우 onvaluechanged 이벤트가 발생합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

**See Also**: row

---

## createDataset

필터링 되어 보이지 않는 Row 를 제외한 범위에서 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.createDataset( strDatasetID, arrColList [ , strWhereExpr [ , nStartIdx [ , nEndIdx ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strDatasetID` | String | 새로 생성될 Dataset 의 ID 를 설정합니다. |
| `arrColList` | Array | 새로 생성될 Dataset 의 Column 구조와 데이터 생성방법을 배열형태로 설정합니다.  배열의 각 인자에 아래와 같은 형식으로 정의할 수 있습니다. "ColID" : 새로운 Dataset 에 "ColID" 로 Column 을 생성하고, 원본 Dataset 의 "ColID" 값을 설정합니다.              원본 Dataset 에 "ColID" 이름을 갖는 Column 이 없다면, 데이터가 null 값으로 설정됩니다. "NewColID : OldColID" : 새로운 Dataset 에 "NewColID" 로 Column 을 생성하고 , 원본 Dataset 의 "OldColID" 값을 설정합니다.                                   원본 Dataset 에 "OldColID" 이름을 갖는 Column 이 없다면, 데이터가 null 값으로 설정됩니다. "NewColID : strExpr" : 새로운 Dataset 에 "NewColID" 로 Column 을 생성하고 , "strExpr" 로 정의된 표현식의 결과값을 설정합니다. |
| `strWhereExpr` | String | 새로 생성될 Dataset 에 복사될 Row 를 선택하는 조건을 설정합니다. |
| `nStartIdx` | Number | 원본 Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | 원본 Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Object` — 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환합니다.  Dataset 을 생성할 수 없는 경우에는 null 을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 createDatasetNF() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## createDatasetNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.createDatasetNF( strDatasetID, arrColList [ , strWhereExpr [ , nStartIdx [ , nEndIdx ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strDatasetID` | String | 새로 생성될 Dataset 의 ID 를 설정합니다. |
| `arrColList` | Array | 새로 생성될 Dataset 의 Column 구조와 데이터 생성방법을 배열형태로 설정합니다.  배열의 각 인자에 아래와 같은 형식으로 정의할 수 있습니다. "ColID" : 새로운 Dataset 에 "ColID" 로 Column 을 생성하고, 원본 Dataset 의 "ColID" 값을 설정합니다.              원본 Dataset 에 "ColID" 이름을 갖는 Column 이 없다면, 데이터가 null 값으로 설정됩니다. "NewColID : OldColID" : 새로운 Dataset 에 "NewColID" 로 Column 을 생성하고 , 원본 Dataset 의 "OldColID" 값을 설정합니다.                                   원본 Dataset 에 "OldColID" 이름을 갖는 Column 이 없다면, 데이터가 null 값으로 설정됩니다. "NewColID : strExpr" : 새로운 Dataset 에 "NewColID" 로 Column 을 생성하고 , "strExpr" 로 정의된 표현식의 결과값을 설정합니다. |
| `strWhereExpr` | String | 새로 생성될 Dataset 에 복사될 Row 를 선택하는 조건을 설정합니다. |
| `nStartIdx` | Number | 원본 Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | 원본 Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Object` — 설정한 조건을 만족하는 Row 로 이루어진 Dataset 을 반환합니다.  Dataset 을 생성할 수 없는 경우에는 null 을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 createDataset() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## deleteAll

DataSet 의 모든 데이터(Row)를 삭제하는 메소드입니다.

**Syntax**
```javascript
Dataset.deleteAll()
```

**Sample**
```javascript
var nRowCnt = this.Dataset00.deleteAll();
```

**Return**: `Number` — 삭제된 데이터(Row) 의 갯수를 반환합니다.

**Remark**
- deleteAll() 메소드가 수행되면 모든 데이터가 삭제되므로 rowposition 속성값은 "-1" 이 됩니다.

- updatecontrol 속성값이 "true"이면 삭제된 Row 의 타입은 "ROWTYPE_DELETE"가 되고, "false"이면 원본 데이터가 삭제되므로 복구할 수 없습니다.

- deleteAll() 메소드가 성공하면 onrowsetchanged 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_DELETEALL" 가 됩니다.
- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값을 "-1" 로 설정합니다. 
  rowposition 속성값이 "-1" 로 설정된 후 onrowposchanged 이벤트를 호출합니다.

**See Also**: reason

---

## deleteColumn

DataSet 에서 지정한 Column 또는 Const Column 을 삭제하는 메소드입니다.

**Syntax**
```javascript
Dataset.deleteColumn(nCol)
Dataset.deleteColumn(strColID)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCol` | Number | 삭제할 Column 의 인덱스를 설정합니다. |
| `strColID` | String | 삭제할 Column 의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — Column 삭제에 성공하면 "true"를 반환합니다. Column 삭제에 실패하면 "false"를 반환합니다.

**Remark**
- deleteColumn() 메소드는 원본 데이터를 삭제하기 때문에 updatecontrol 속성값이 "false"일 때만 동작합니다.
  만약 updatecontrol 속성값이 "true"면 지정한 Column 을 삭제하지 않습니다.

- 지정한 Column 이 삭제되면 onrowsetchanged 이벤트가 발생합니다.
  이때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- 만약, 모든 Column 이 삭제되었으면 rowposition 속성값은 "-1" 이 됩니다.

**See Also**: reason

---

## deleteMultiRows

배열로 된 Row 목록을 입력 받아 해당 Row 들을 삭제하는 메소드입니다.

**Syntax**
```javascript
Dataset.deleteMultiRows( arrRowlist );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRowlist` | Array | Row 인덱스값을 배열 형태로 설정합니다. |

**Remark**
- Grid 의 getSelectedDatasetRows() 메소드 결과값을 인수로 사용할 수 있습니다.

---

## deleteRow

DataSet 에서 지정한 데이터(Row)를 삭제하는 메소드입니다.

**Syntax**
```javascript
Dataset.deleteRow(nRow)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 삭제할 데이터의 Row 인덱스 값을 설정합니다. |

**Return**: `Boolean` — 데이터(Row) 삭제에 성공하면 "true" 를 반환합니다. 데이터(Row) 삭제에 실패하면 "false" 를 반환합니다.

**Remark**
- deleteRow() 메소드가 성공하면 onrowsetchanged 이벤트가 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_DELETE" 가 됩니다.
- onrowsetchanged 이벤트가 수행된 후 rowposition 속성값이 변경됩니다.
- 마지막 위치의 Row가 삭제되었으면 rowposition 속성값은 새로운 마지막 Row 를 가리키게 됩니다.
  만약 모든 Row 가 삭제되었으면 rowposition 속성값은 "-1" 이 됩니다.
- rowposition의 변경상태에 관계없이 canrowposchange 이벤트는 발생하지 않고 onrowposchanged 이벤트가 발생합니다.

- updatecontrol 속성값이 "true" 인 경우에 삭제된 Row 의 타입은 "ROWTYPE_DELETE" 가 되고, "false" 인 경우에는 원본 데이터가 삭제되므로 복구할 수 없습니다.

- nRow에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**: reason

---

## exchangeRow

DataSet 에서 지정된 두 Row 의 위치(RowPosition)를 서로 바꾸는 메소드입니다.

**Syntax**
```javascript
Dataset.exchangeRow(nRow1,nRow2)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow1` | Number | 위치를 교환할 첫번째 데이터의 Row 인덱스를 설정합니다. |
| `nRow2` | Number | 위치를 교환할 두번째 데이터의 Row 인덱스를 설정합니다. |

**Return**: `Boolean` — 위치 교환에 성공하면 "true"를 반환합니다. 위치 교환에 실패하면 "false"를 반환합니다.

**Remark**
- exchangeRow() 메소드는 교환된 Row의 타입을 변경하지 않습니다.

- 성공하면 onrowsetchanged 이벤트가 각 Row 별로 두 번 발생합니다.
  이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_EXCHANGE" 가 됩니다.

- nRow1, nRow2 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**: reason

---

## extractRows

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.extractRows( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Array` — 주어진 조건표현식을 만족하는 Row 의 인덱스 배열을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 extractRows() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## extractRowsNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 Row 의 인덱스 배열을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.extractRowsNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Array` — 주어진 조건표현식을 만족하는 Row 의 인덱스 배열을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 extractRowsNF() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## filter

DataSet 에 로드된 데이터를 조건에 만족하는 데이터(Row) 만 보이게 필터링하는 메소드입니다.

**Syntax**
```javascript
Dataset.filter([strFilterExpr])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strFilterExpr` | String | DataSet 의 데이터가 필터링 될 조건을 문자열로 설정합니다.  빈 문자열("") 설정 시 필터링 조건이 해제됩니다. 값 생략 시 filterstr 속성값에 설정된 조건식을 사용합니다. |

**Remark**
- filter() 메소드를 수행하면 DataSet 의 filterstr 속성값이 strFilterExpr 인자에 설정된 값으로 변경됩니다.
   strFilterExpr 인자값을 생략하면 filterstr 속성값이 filter() 메소드의 인자값으로 사용됩니다.

- filter() 메소드를 수행하면 onrowsetchanged 이벤트가 발생하며 e.reason 속성값은 "REASON_FILTER" 가 됩니다.

- filter() 메소드 수행 후 rowposition 속성값은 필터링하기 이전 값에 해당하는 위치로 이동하며, 만일 이전 값이 없으면 "-1"로 바뀝니다.

- 이미 필터링되어 있는 DataSet 에 filter() 메소드를 수행하면 전체 데이터에서 strFilterExpr 조건으로 다시 필터링됩니다.

- strFilterExpr 은 조건식의 수행결과가 "true" 또는 "false" 이어야 합니다.

- Grid 의 selecttype 속성값이 "row" 의 동작에 의한 필터링 후 currentrow 의 select 가 "true" 로 설정되면서 onrowsetchanged가 발생 합니다.
   이때 e.reason이 40(stat:row type [select])인것과 31(filter)인 것이 이어서 두번 발생되는데 이는 정상적인 동작입니다.
   그러나 Multi Select가 그리드에 의해 자동 재설정될 때는 DataSet select에 의한 이벤트가 발생 하지 않습니다.

**See Also**: reason

---

## filterRow

DataSet 에서 특정 Row 를 보이지 않게 필터링하는 메소드입니다.

**Syntax**
```javascript
Dataset.filterRow(nRow)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 필터링할 Row 의 인덱스를 설정합니다. |

**Remark**
- filterRow() 메소드를 수행하면 onrowsetchanged 이벤트가 발생하며 e.reason 속성값은 "REASON_FILTER" 가 됩니다.
  만약, 필터링된 행을 다시 보이게 하려면 filter() 메소드를 참조하시기 바랍니다.

- nRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

---

## findEventHandler

Dataset 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findEventHandler( strEventID, objFunc, objTarget )
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

## findMaxLengthRow

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 의 데이터 길이가 가장 긴 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findMaxLengthRow( strColID [ ,nStartIdx [ , nEndIdx] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Number` — 특정 Column 값 중 데이터 길이가 가장 긴 Row 의 인덱스를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 findMaxLengthRowNF() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## findMaxLengthRowNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 의 데이터 길이가 가장 긴 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findMaxLengthRowNF( strColID [ ,nStartIdx [ , nEndIdx] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Number` — 특정 Column 값 중 데이터 길이가 가장 긴 Row 의 인덱스를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 findMaxLengthRow() 메소드를 사용하여야 합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## findNFRowIndex

필터링 된 DataSet 의 Row 인덱스를 필터링 되지 않은 DataSet 의 Row 인덱스로 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findNFRowIndex( nRowPos )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRowPos` | Number | 필터링 된 DataSet 을 기준으로 한 Row 인덱스를 설정합니다. |

**Return**: `Number` — 필터링되지 않은 데이터를 기준으로 한 Row 인덱스를 반환합니다.  잘못된 nRowPos 값을 인수로 전달했을 경우 -1 을 반환합니다.

**Remark**
- 필터링 된 DataSet 에서 특정 Row 가 갖는 인덱스값을 전달하면 해당 Row 가 필터링 되지 않은 원본 DataSet 에서 갖는 인덱스값을 반환합니다.

- 필터링 되지 않은 DataSet 에서는 전달된 값과 동일한 값을 반환합니다.

---

## findRow

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달된 값과 일치하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findRow( strColID, strVal [ ,nStartIdx [ ,nEndIdx ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다. |
| `strVal` | String | strColID 에 해당하는 Column 에서 검색할 값을 설정합니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Number` — 전달된 값과 일치하는 데이터를 갖는 첫번째 Row 의 인덱스를 반환합니다.  만약 일치하는 데이터가 없을 경우에는 -1 을 반환합니다. 검색대상이 되는 Column 이 Const Column 인 경우 nStartIdx 값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 findRowNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## findRowAs

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달된 값으로 시작되는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findRowAs( strColID, strVal, [ ,nStartIdx [ ,nEndIdx ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다. |
| `strVal` | String | strColID 에 해당하는 Column 에서 검색할 값을 설정합니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Number` — 전달된 값으로 시작되는 Column 값을 갖는 첫번째 Row 의 인덱스를 반환합니다.  만약 일치하는 데이터가 없을 경우에는 -1 을 반환합니다. 검색대상이 되는 Column 이 Const Column 인 경우 nStartIdx 값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 findRowAsNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## findRowAsNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달된 값으로 시작되는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findRowAsNF( strColID, strVal, [ ,nStartIdx [ ,nEndIdx ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다. |
| `strVal` | String | strColID 에 해당하는 Column 에서 검색할 값을 설정합니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Number` — 전달된 값으로 시작되는 Column 값을 갖는 첫번째 Row 의 인덱스를 반환합니다.  만약 일치하는 데이터가 없을 경우에는 -1 을 반환합니다. 검색대상이 되는 Column 이 Const Column 인 경우 nStartIdx 값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 findRowAs() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## findRowExpr

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findRowExpr( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs] ] ])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 주어진 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환합니다.  주어진 조건표현식을 만족하는 Row 가 없을 경우에는 -1 을 반환합니다. 주어진 조건표현식이 Const Column 을 대상으로 한 경우 nStartIdx 값을 반환합니다.

**Remark**
- findRowExpr() 메소드는 설정한 조건표현식을 만족하는 Row 를 찾아 그 중 첫번째 Row 의 인덱스를 반환합니다.

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 findRowExprNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## findRowExprNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findRowExprNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs] ] ])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 주어진 조건표현식을 만족하는 첫번째 Row 의 인덱스를 반환합니다.  주어진 조건표현식을 만족하는 Row 가 없을 경우에는 -1 을 반환합니다. 주어진 조건표현식이 Const Column 을 대상으로 한 경우 nStartIdx 값을 반환합니다.

**Remark**
- findRowExprNF() 메소드는 설정한 조건표현식을 만족하는 Row 를 찾아 그 중 첫번째 Row 의 인덱스를 반환합니다.

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 findRowExpr() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## findRowNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달된 값과 일치하는 첫번째 Row 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.findRowNF( strColID, strVal [ ,nStartIdx [ ,nEndIdx ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | Dataset 에서 검색 대상이 되는 Column 의 ID 또는 인덱스를 설정합니다. |
| `strVal` | String | strColID 에 해당하는 Column 에서 검색할 값을 설정합니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Number` — 전달된 값과 일치하는 데이터를 갖는 첫번째 Row 의 인덱스를 반환합니다.  만약 일치하는 데이터가 없을 경우에는 -1 을 반환합니다. 검색대상이 되는 Column 이 Const Column 인 경우 nStartIdx 값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 findRow() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

---

## getAvg

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getAvg( strExpr [ ,nStartIdx [ ,nEndIdx [ ,bExcludeNaN [ ,arrArgs ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 평균을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 계산을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 계산합니다. |
| `nEndIdx` | Number | Dataset 에서 계산을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 계산합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 계산합니다. |
| `bExcludeNaN` | Boolean | Column 값 또는 계산값이 null, undefined, ""(Empty String), NaN 값 일 때 평균값 계산에서 제외할 지 여부를 설정합니다. 평균값 계산에 포함되면 분모에 해당하는 전체갯수값이 증가합니다.  true 설정 시 평균값 계산에서 제외합니다. false 설정 시 평균값 계산에 포함합니다.  값 생략 시 true 로 적용됩니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다.  배열에 Column 의 ID 를 설정해도 Column 값으로 치환되지 않습니다. strExpr 에 Column 의 ID 를 직접 설정하여야 Column 값이 적용됩니다. 즉, arrArgs[0] 에 Column ID 설정 시 "$0" 는 문자열로 치환되며, Column ID 에 해당하는 값으로 치환되지 않습니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값의 평균값을 반환합니다.  평균값을 구할 수 없는 경우에는 NaN 값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getAvgNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getAvgNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getAvgNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,bExcludeNaN [ ,arrArgs ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 평균을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 계산을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 계산을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `bExcludeNaN` | Boolean | Column 값 또는 계산값이 null, undefined, ""(Empty String), NaN 값 일 때 평균값 계산에서 제외할 지 여부를 설정합니다. 평균값 계산에 포함되면 분모에 해당하는 전체갯수값이 증가합니다.  true 설정 시 평균값 계산에서 제외합니다. false 설정 시 평균값 계산에 포함합니다.  값 생략 시 true 로 적용됩니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다.  배열에 Column 의 ID 를 설정해도 Column 값으로 치환되지 않습니다. strExpr 에 Column 의 ID 를 직접 설정하여야 Column 값이 적용됩니다. 즉, arrArgs[0] 에 Column ID 설정 시 "$0" 는 문자열로 치환되며, Column ID 에 해당하는 값으로 치환되지 않습니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값의 평균값을 반환합니다.  평균값을 구할 수 없는 경우에는 NaN 값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getAvg() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getCaseAvg

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseAvg( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,bExcludeNaN [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCmpExpr` | String | Dataset 에서 대상 Row 를 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다. |
| `strValExpr` | String | Dataset 에서 평균을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `bExcludeNaN` | Boolean | Column 값 또는 계산값이 null, undefined, ""(Empty String), NaN 값 일 때 평균값 계산에서 제외할 지 여부를 설정합니다. 평균값 계산에 포함되면 분모에 해당하는 전체갯수값이 증가합니다.  true 설정 시 평균값 계산에서 제외합니다. false 설정 시 평균값 계산에 포함합니다.  값 생략 시 true 로 적용됩니다. |
| `arrCmpArgs` | Array | strCmpExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrCmpArgs[0] 값으로, "$2" 는 arrCmpArgs[2] 값으로 치환됩니다.  배열에 Column 의 ID 를 설정해도 Column 값으로 치환되지 않습니다. strCmpExpr 에 Column 의 ID 를 직접 설정하여야 Column 값이 적용됩니다. 즉, arrCmpArgs[0] 에 Column ID 설정 시 "$0" 는 문자열로 치환되며, Column ID 에 해당하는 값으로 치환되지 않습니다. |
| `arrValArgs` | Array | strValExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrValArgs[0] 값으로, "$2" 는 arrValArgs[2] 값으로 치환됩니다.  배열에 Column 의 ID 를 설정해도 Column 값으로 치환되지 않습니다. strValExpr 에 Column 의 ID 를 직접 설정하여야 Column 값이 적용됩니다. 즉, arrValArgs[0] 에 Column ID 설정 시 "$0" 는 문자열로 치환되며, Column ID 에 해당하는 값으로 치환되지 않습니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값의 평균값을 반환합니다.  평균값을 구할 수 없는 경우에는 NaN 값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getCaseAvgNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getCaseAvgNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseAvgNF( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,bExcludeNaN [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCmpExpr` | String | Dataset 에서 대상 Row 를 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다. |
| `strValExpr` | String | Dataset 에서 평균을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `bExcludeNaN` | Boolean | Column 값 또는 계산값이 null, undefined, ""(Empty String), NaN 값 일 때 평균값 계산에서 제외할 지 여부를 설정합니다. 평균값 계산에 포함되면 분모에 해당하는 전체갯수값이 증가합니다.  true 설정 시 평균값 계산에서 제외합니다. false 설정 시 평균값 계산에 포함합니다.  값 생략 시 true 로 적용됩니다. |
| `arrCmpArgs` | Array | strCmpExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrCmpArgs[0] 값으로, "$2" 는 arrCmpArgs[2] 값으로 치환됩니다.  배열에 Column 의 ID 를 설정해도 Column 값으로 치환되지 않습니다. strCmpExpr 에 Column 의 ID 를 직접 설정하여야 Column 값이 적용됩니다. 즉, arrCmpArgs[0] 에 Column ID 설정 시 "$0" 는 문자열로 치환되며, Column ID 에 해당하는 값으로 치환되지 않습니다. |
| `arrValArgs` | Array | strValExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrValArgs[0] 값으로, "$2" 는 arrValArgs[2] 값으로 치환됩니다.  배열에 Column 의 ID 를 설정해도 Column 값으로 치환되지 않습니다. strValExpr 에 Column 의 ID 를 직접 설정하여야 Column 값이 적용됩니다. 즉, arrValArgs[0] 에 Column ID 설정 시 "$0" 는 문자열로 치환되며, Column ID 에 해당하는 값으로 치환되지 않습니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값의 평균값을 반환합니다.  평균값을 구할 수 없는 경우에는 NaN 값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getCaseAvg() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getCaseCount

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건표현식을 만족하는 Row 의 전체 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseCount( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 주어진 조건표현식을 만족하는 Row 의 전체 갯수를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getCaseCountNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.

---

## getCaseCountNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건표현식을 만족하는 Row 의 전체 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseCountNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 주어진 조건표현식을 만족하는 Row 의 전체 갯수를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getCaseCount() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.

---

## getCaseMax

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseMax( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCmpExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다. |
| `strValExpr` | String | Dataset 에서 최대값을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrCmpArgs` | Array | strCmpExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrCmpArgs[0] 값으로, "$2" 는 arrCmpArgs[2] 값으로 치환됩니다. |
| `arrValArgs` | Array | strValExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrValArgs[0] 값으로, "$2" 는 arrValArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값 중 최대값을 반환합니다.  최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getCaseMaxNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strValExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strValExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getCaseMaxNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseMaxNF( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCmpExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다. |
| `strValExpr` | String | Dataset 에서 최대값을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrCmpArgs` | Array | strCmpExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrCmpArgs[0] 값으로, "$2" 는 arrCmpArgs[2] 값으로 치환됩니다. |
| `arrValArgs` | Array | strValExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrValArgs[0] 값으로, "$2" 는 arrValArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값 중 최대값을 반환합니다.  최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getCaseMax() 메소드를 사용하여야 합니다..

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strValExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strValExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getCaseMin

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseMin( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCmpExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다. |
| `strValExpr` | String | Dataset 에서 최소값을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrCmpArgs` | Array | strCmpExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrCmpArgs[0] 값으로, "$2" 는 arrCmpArgs[2] 값으로 치환됩니다. |
| `arrValArgs` | Array | strValExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrValArgs[0] 값으로, "$2" 는 arrValArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값 중 최소값을 반환합니다.  최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getCaseMinNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strValExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strValExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getCaseMinNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseMinNF( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCmpExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다. |
| `strValExpr` | String | Dataset 에서 최소값을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrCmpArgs` | Array | strCmpExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrCmpArgs[0] 값으로, "$2" 는 arrCmpArgs[2] 값으로 치환됩니다. |
| `arrValArgs` | Array | strValExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrValArgs[0] 값으로, "$2" 는 arrValArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값 중 최소값을 반환합니다.  최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getCaseMin() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 일 때 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 일 때 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strValExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strValExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getCaseSum

필터링 되어 보이지 않는 Row 를 제외한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseSum( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCmpExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다. |
| `strValExpr` | String | Dataset 에서 합계를 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrCmpArgs` | Array | strCmpExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrCmpArgs[0] 값으로, "$2" 는 arrCmpArgs[2] 값으로 치환됩니다. |
| `arrValArgs` | Array | strValExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrValArgs[0] 값으로, "$2" 는 arrValArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값의 합계값을 반환합니다.  합계값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getCaseSumNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 합계값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getCaseSumNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 조건을 만족하는 Row 의 특정 Column 값 또는 계산값의 합계값를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCaseSumNF( strCmpExpr, strValExpr [ ,nStartIdx [ ,nEndIdx [ ,arrCmpArgs [ ,arrValArgs ] ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCmpExpr` | String | Dataset 에서 검색할 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrCmpArgs 에 정의된 값으로 치환됩니다. |
| `strValExpr` | String | Dataset 에서 합계를 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrCmpArgs` | Array | strCmpExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrCmpArgs[0] 값으로, "$2" 는 arrCmpArgs[2] 값으로 치환됩니다. |
| `arrValArgs` | Array | strValExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrValArgs[0] 값으로, "$2" 는 arrValArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값의 합계값을 반환합니다.  합계값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getCaseSum() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 합계값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getColCount

DataSet 에서 Const Column 을 포함한 전체 Column 의 갯수를 구하는 메소드입니다.

**Syntax**
```javascript
Dataset.getColCount()
```

**Sample**
```javascript
var nColCnt = this.Dataset00.getColCount();
```

**Return**: `Number` — DataSet 에 정의된 전체 Column 의 갯수를 반환합니다.

---

## getColID

DataSet 에서 전달된 인덱스에 해당하는 Column 의 ID 를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getColID( nColIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nColIdx` | Number | ID 를 구하려는 Column 의 인덱스를 설정합니다.  Const Column 에 해당하는 인덱스를 설정할 수 있습니다. |

**Return**: `String` — 전달된 인덱스에 해당하는 Column 의 ID 를 반환합니다.  해당하는 Column 이 없을 경우에는 "undefined" 를 반환합니다.

**Remark**
- Column 의 인덱스값은 추가된 순서에 따라 0 부터 1 씩 증가합니다.

- getColID() 메소드는 일반 Column 과 Const Column 을 합한 인덱스를 사용합니다.
   Const Column 만으로 정의된 인덱스를 사용하여 Const Column 의 ID 를 구하려면 getConstColID() 메소드를 사용하여야 합니다.

- Const Column 은 일반 Column 다음에 순서대로 추가됩니다.
   따라서, Const Column 의 인덱스는 마지막 일반 Column 의 인덱스에서 순서대로 1씩 증가한 값을 갖습니다.

- nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

---

## getColIndex

DataSet 에서 전달된 ID 에 해당하는 Column 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getColIndex( strColID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | 인덱스를 구하려는 일반 Column 또는 Const Column 의 ID 를 설정합니다. |

**Return**: `Number` — 전달된 ID 에 해당하는 Column 의 인덱스를 반환합니다.  해당하는 Column 이 없을 경우에는 "-1" 을 반환합니다.

**Remark**
- Column 의 인덱스값은 추가된 순서에 따라 0 부터 1 씩 증가합니다.

- getColIndex() 메소드는 일반 Column 과 Const Column 을 합한 인덱스를 사용합니다.
   Const Column 만으로 정의된 인덱스를 구하려면 getConstColIndex() 메소드를 사용하여야 합니다.

- Const Column 은 일반 Column 다음에 순서대로 추가됩니다.
   따라서, Const Column 의 인덱스는 마지막 일반 Column 의 인덱스에서 순서대로 1씩 증가한 값을 갖습니다.

---

## getColumn

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 Row 와 Column 의 현재값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getColumn( nRow, nColIdx )
Dataset.getColumn( nRow, strColID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | DataSet 에서 값을 구하려는 Row 의 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |
| `nColIdx` | Number | DataSet 에서 값을 구하려는 Column 의 인덱스를 설정합니다. |
| `strColID` | String | DataSet 에서 값을 구하려는 Column 의 ID 를 설정합니다. |

**Return**: `Variant` — 지정한 Row 와 Column 의 현재값을 반환합니다.  지정한 Row 와 Column 이 존재하지 않으면 "undefined" 를 반환합니다.

**Remark**
- Const Column 과 일반 Column 의 값을 모두 구할 수 있습니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 의 Column 값도 구할 수 있습니다.

- keystring 속성을 사용하여 정렬한 경우, nRow 는 정렬된 순서를 가리킵니다.

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 getColumnNF() 메소드를 사용하여야 합니다.

- 매개변수인 nRow, nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

---

## getColumnInfo

DataSet 에서 지정한 Column 의 ColumnInfo 객체를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getColumnInfo( nColIdx )
Dataset.getColumnInfo( strColName )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nColIdx` | Number | 대상 Column 의 인덱스를 설정합니다. |
| `strColName` | String | 대상 Column 의 ID 를 설정합니다. |

**Return**: `Object` — 지정한 인덱스 또는 ID 에 해당하는 Column 의 ColumnInfo 객체를 반환합니다.  지정한 인덱스 또는 ID 에 해당하는 Column 이 없을 경우에는 undefined 를 반환합니다.

**Remark**
- 인자값으로 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 으로 변환됩니다.
   사용 시 주의하시기 바랍니다.

**See Also**: size

---

## getColumnNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 Row 와 Column 의 현재값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getColumnNF( nRow, nColIdx )
Dataset.getColumnNF( nRow, strColID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | DataSet 에서 값을 구하려는 Row 의 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |
| `nColIdx` | Number | DataSet 에서 값을 구하려는 Column 의 인덱스를 설정합니다. |
| `strColID` | String | DataSet 에서 값을 구하려는 Column 의 ID 를 설정합니다. |

**Return**: `Variant` — 지정한 Row 와 Column 의 현재값을 반환합니다.  지정한 Row 와 Column 이 존재하지 않으면 "undefined" 를 반환합니다.

**Remark**
- Const Column 과 일반 Column 의 값을 모두 구할 수 있습니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 의 Column 값도 구할 수 있습니다.

- keystring 속성을 사용하여 정렬한 경우, nRow 는 정렬된 순서를 가리킵니다.

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 getColumn() 메소드를 사용하여야 합니다.

- 매개변수인 nRow, nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

---

## getConstColID

DataSet 에서 전달된 인덱스에 해당하는 Const Column 의 ID 를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getConstColID( nColIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nColIdx` | Number | ID 를 구하려는 Const Column 의 인덱스를 설정합니다. |

**Return**: `String` — 전달된 인덱스에 해당하는 Const Column 의 ID 를 반환합니다.  해당하는 Const Column 이 없을 경우에는 "undefined" 를 반환합니다.

**Remark**
- Const Column 의 인덱스값은 추가된 순서에 따라 0 부터 1 씩 증가합니다.

- getConstColID() 메소드는 Const Column 만으로 정의된 인덱스를 사용합니다.
   일반 Column 과 Const Column 을 합한 인덱스를 사용하여 전체 Column 의 ID 를 구하려면 getColID() 메소드를 사용하여야 합니다.

- nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

---

## getConstColIndex

DataSet 에서 전달된 ID 에 해당하는 Const Column 의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getConstColIndex( strColID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | 인덱스를 구하려는 Const Column 의 ID 를 설정합니다. |

**Return**: `Number` — 전달된 ID 에 해당하는 Const Column 의 인덱스를 반환합니다.  해당하는 Const Column 이 없을 경우에는 "-1" 을 반환합니다.

**Remark**
- Const Column 의 인덱스값은 추가된 순서에 따라 0 부터 1 씩 증가합니다.

- getConstColIndex() 메소드는 Const Column 만으로 정의된 인덱스를 반환합니다.
   일반 Column 과 Const Column 을 합한 인덱스를 구하려면 getColIndex() 메소드를 사용하여야 합니다.

---

## getConstColumn

DataSet 에서 지정한 Const Column 의 값을 구하는 메소드입니다.

**Syntax**
```javascript
Dataset.getConstColumn(nColIdx)
Dataset.getConstColumn(strColID)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nColIdx` | Number | DataSet 에서 값을 구하려는 Const Column 의 인덱스를 설정합니다. |
| `strColID` | String | DataSet 에서 값을 구하려는 Const Column 의 ID 를 설정합니다. |

**Return**: `Variant` — 지정한 Const Column 의 값을 반환합니다. 만약, 지정한 Const Column 이 존재하지 않으면 "undefined"를 반환합니다.

**Remark**
- 매개변수인 nColIdx 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

---

## getConstCount

DataSet 에 정의된 Const Column 의 갯수를 구하는 메소드입니다.

**Syntax**
```javascript
Dataset.getConstCount()
```

**Sample**
```javascript
var nConstCnt = this.Dataset00.getConstCount();
```

**Return**: `Number` — DataSet 에 정의된 Const Column 의 갯수를 반환합니다.

---

## getCount

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCount( [ strColID [ ,nStartIdx [ ,nEndIdx ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | 데이터의 유무를 확인하려는 Column 의 ID 또는 인덱스를 설정합니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 계산합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Number` — 특정 Column 의 값이 null 이 아닌 Row 의 갯수를 반환합니다.  Column 의 ID 나 인덱스를 설정하지 않으면 Row 의 전체 갯수를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getCountNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.

---

## getCountNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getCountNF( [ strColID [ ,nStartIdx [ ,nEndIdx ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strColID` | String | 데이터의 유무를 확인하려는 Column 의 ID 또는 인덱스를 설정합니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 계산합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |

**Return**: `Number` — 특정 Column 의 값이 null 이 아닌 Row 의 갯수를 반환합니다.  Column 의 ID 나 인덱스를 설정하지 않으면 Row 의 전체 갯수를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getCount() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.

---

## getDeletedColumn

DataSet 에서 삭제된 Row 중에서 지정된 Row 의 Column 값을 구하는 메소드입니다.

**Syntax**
```javascript
Dataset.getDeletedColumn(nRow,nColIdx)
Dataset.getDeletedColumn(nRow,strColID)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 삭제된 Row 중에서 값을 구하려는 Row 의 인덱스를 설정합니다. |
| `nColIdx` | Number | 삭제된 Row 중에서 값을 구하려는 Column 의 인덱스를 설정합니다. |
| `strColID` | String | 삭제된 행중에서 값을 구하려는 열의 ID입니다. |

**Return**: `Variant` — 삭제된 Row 중에서 지정된 Row, Column 에 해당하는 값을 반환합니다. 해당하는 Row 나 Column 이 존재하지 않는 경우에는 "undefined"를 반환합니다.

**Remark**
- getDeletedColumn() 메소드는 삭제된 Row 중에서 지정된 Row 의 Column 에 해당하는 값을 구할 수 있습니다.
  단, updatecontrol 속성값이 "true" 일 경우 삭제된 Row 만을 대상으로 합니다.

---

## getDeletedRowCount

Dataset 오브젝트에서 삭제된 Row의 개수를 구하는 메서드입니다.

**Syntax**
```javascript
Dataset.getDeletedRowCount()
```

**Sample**
```javascript
var nRowCnt = this.Dataset00.getDeletedRowCount();
```

**Return**: `Number` — Dataset 오브젝트에서 삭제된 Row의 개수를 반환합니다.

**Remark**
- Dataset 오브젝트의 updatecontrol 속성값이 true로 설정된 경우 Row를 삭제해 Row 타입이 Dataset.ROWTYPE_DELETE(8)로 변경된 Row가 대상입니다.
getDeletedRowset 메서드 실행 시 반환되는 배열의 length 속성값과 같습니다.

---

## getDeletedRowset

Dataset 오브젝트에서 삭제된 전체 Row를 배열로 반환하는 메서드입니다.

**Syntax**
```javascript
Dataset.getDeletedRowset()
```

**Sample**
```javascript
var objArr = this.Dataset00.getDeletedRowset();
```

**Return**: `Array` — 삭제된 전체 Row의 내용을 배열 오브젝트로 반환합니다.

**Remark**
- Dataset 오브젝트의 updatecontrol 속성값이 true로 설정된 경우 Row를 삭제해 Row 타입이 Dataset.ROWTYPE_DELETE(8)로 변경된 Row가 대상입니다.

- 반환값은 [Row][Column] 형식의 2차원 배열입니다.
  예를 들어 0번째 index Row, 1번째 index Column 데이터는 아래와 같은 형태로 접근할 수 있습니다.
  this.Dataset.getDeletedRowset()[0][1]


◆ addRow, insertRow 메서드

- addRow, insertRow 메서드를 실행해 추가한 Row를 삭제한 경우에는 추가 작업이 취소되며 데이터가 삭제되기 때문에 getDeletedRowset 메서드 실행 시 반환되는 배열에 포함되지 않습니다.

- addRow, insertRow 메서드 실행 후 applyChange 메서드를 실행한 경우에는 Row 타입이 Dataset.ROWTYPE_NORMAL(1)로 변경되며 그 후 해당 Row를 삭제하면 Row 타입이 Dataset.ROWTYPE_DELETE(8)로 처리되기 때문에 getDeletedRowset 메서드 실행 시 반환되는 배열에 포함됩니다.

---

## getEventHandler

Dataset 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getGroupRangeCount

DataSet 이 그룹화되어 있을 때 그룹정보를 포함하고 있는 Row 가 참조한 Row 의 갯수를 구하는 메소드입니다.

**Syntax**
```javascript
Dataset.getGroupRangeCount(nRow)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 대상 Row 의 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |

**Return**: `Number` — 그룹소계 Row 의 참조 대상이 된 Row 의 갯수를 반환합니다. 만약, 지정한 Row 가 존재하지 않으면 "0" 을 반환합니다.

**Remark**
- DataSet 이 그룹화되어 있을 경우 그룹 정보를 포함하고 있는 Row 가 참조하는 Row 의 갯수를 반환합니다.
  만약, 지정한 Row 가 그룹 정보를 포함하고 있는 Row 가 아니면 "1" 을 반환합니다.
  그룹화에 대해서는 keystring 속성을 참조하시기 바랍니다.

- getGroupRangeStart() 메소드와 함께 사용하여 참조 대상이 된 Row 의 범위를 구할 수 있습니다.

- nRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**: getGroupRangeStart

---

## getGroupRangeStart

DataSet 이 그룹화되어 있을 때 그룹정보를 포함하고 있는 Row 가 참조한 Row 의 시작 인덱스를 구하는 메소드입니다.

**Syntax**
```javascript
Dataset.getGroupRangeStart(nRow)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 대상 Row 의 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |

**Return**: `Number` — 그룹소계 Row 의 참조 대상이 된 Row 의 시작 인덱스를 반환합니다. 지정한 Row 가 그룹 정보를 포함하고 있는 Row 가 아닐 경우에는 Row 의 인덱스를 반환합니다. 만약, 지정한 Row 가 존재하지 않으면 "-1" 을 반환합니다.

**Remark**
- getRroupRangeStart() 메소드는 DataSet 이 그룹화되어 있을 경우 그룹 정보를 포함하고 있는 Row 가 참조하는 Row 의 시작위치를 구합니다.
  만약, 지정한 Row 가 그룹 정보를 포함하고 있는 Row 가 아니면 지정한 Row 의 인덱스를 반환합니다.
  그룹화에 대해서는 keystring 속성을 참조하시기 바랍니다.

- getGroupRangeCount() 메소드와 함께 사용하여 참조 대상이 된 Row 의 범위를 구할 수 있습니다.

- 매개변수인 nRow에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**: getGroupRangeCount

---

## getMax

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getMax( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 최대값을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값 중 최대값을 반환합니다.  최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getMaxNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getMaxNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getMaxNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 최대값을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값 중 최대값을 반환합니다.  최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getMax() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getMin

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getMin( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 최소값을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값 중 최소값을 반환합니다.  최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getMinNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getMinNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getMinNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 최소값을 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrValArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 검색을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 검색합니다. |
| `nEndIdx` | Number | Dataset 에서 검색을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 검색합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 검색합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값 중 최소값을 반환합니다.  최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getMin() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 검색 대상에서 제외합니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getOrgColumn

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 Row 와 Column 의 초기값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getOrgColumn( nRow ,nColIdx )
Dataset.getOrgColumn( nRow ,strColID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 초기값을 구하려는 Row 의 인덱스를 설정합니다. |
| `nColIdx` | Number | 초기값을 구하려는 Column 의 인덱스를 설정합니다. |
| `strColID` | String | 초기값을 구하려는 Column 의 ID 를 설정합니다. |

**Return**: `Variant` — 지정한 Row 와 Column 의 초기값을 반환합니다.  지정한 Row 와 Column 이 존재하지 않으면 undefined 를 반환합니다.

**Remark**
- 초기값은 transaction(), load() 와 같은 메소드를 사용하여 DataSet 에 처음으로 설정된 값을 의미합니다.

- 지정한 Row 가 수정되지 않았으면(Row 의 타입값이 "ROWTYPE_NORMAL"이면) 현재값을 반환합니다.
   지정한 Row 가 추가된 Row 인 경우(Row 의 타입값이 "ROWTYPE_INSERT"이면) 현재값을 반환합니다.

- updatecontrol 속성이 false 인 경우는 데이터를 변경하여도 Row 의 타입값이 "ROWTYPE_NORMAL" 로 유지됩니다.
   타입값이 "ROWTYPE_NORMAL" 인 Row 는 변경되지 않은 것으로 처리되어 초기값을 구할 수 없으므로 현재값을 반환합니다.

- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 getOrgColumnNF() 메소드를 사용하여야 합니다.

- Const Column 이나 그룹정보를 포함하고 있는 논리적 Row 에 대한 초기값은 구할 수 없습니다.

- 매개변수인 nRow, nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 되므로 사용 시 주의하여야 합니다.

---

## getOrgColumnNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 Row 와 Column 의 초기값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getOrgColumnNF( nRow ,nColIdx )
Dataset.getOrgColumnNF( nRow ,strColID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 초기값을 구하려는 Row 의 인덱스를 설정합니다. |
| `nColIdx` | Number | 초기값을 구하려는 Column 의 인덱스를 설정합니다. |
| `strColID` | String | 초기값을 구하려는 Column 의 ID 를 설정합니다. |

**Return**: `Variant` — 지정한 Row 와 Column 의 초기값을 반환합니다.  지정한 Row 와 Column 이 존재하지 않으면 undefined 를 반환합니다.

**Remark**
- 초기값은 transaction(), load() 와 같은 메소드를 사용하여 DataSet 에 처음으로 설정된 값을 의미합니다.

- 지정한 Row 가 수정되지 않았으면(Row 의 타입값이 "ROWTYPE_NORMAL"이면) 현재값을 반환합니다.
   지정한 Row 가 추가된 Row 인 경우(Row 의 타입값이 "ROWTYPE_INSERT"이면) 현재값을 반환합니다.
  
- updatecontrol 속성이 "false" 인 경우는 데이터를 변경하여도 Row 의 타입값이 "ROWTYPE_NORMAL" 로 유지됩니다.
   타입값이 "ROWTYPE_NORMAL" 인 Row 는 변경되지 않은 것으로 처리되어 초기값을 구할 수 없으므로 현재값을 반환합니다.

- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 getOrgColumn() 메소드를 사용하여야 합니다.

- Const Column 이나 그룹정보를 포함하고 있는 논리적 Row 에 대한 초기값은 구할 수 없습니다.

- 매개변수인 nRow, nColIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 되므로 사용 시 주의하여야 합니다.

---

## getRowCount

필터링 되어 보이지 않는 Row 를 제외한 범위에서 Row 의 전체 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowCount()
```

**Sample**
```javascript
var nRowCount = this.Dataset00.getRowCount();
```

**Return**: `Number` — DataSet 에서 Row 의 전체 갯수를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 갯수에서 제외합니다.
   필터링 된 Row 를 갯수에 포함하려면 getRowCountNF() 메소드를 사용하여야 합니다.

- 삭제된 Row 는 갯수에서 제외합니다.

---

## getRowCountNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 Row 의 전체 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowCountNF()
```

**Sample**
```javascript
var nRowCount = this.Dataset00.getRowCountNF();
```

**Return**: `Number` — DataSet 에서 Row 의 전체 갯수를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 갯수에 포함합니다.
   필터링 된 Row 를 갯수에서 제외하려면 getRowCount() 메소드를 사용하여야 합니다.

- 삭제된 Row 는 갯수에서 제외합니다.

---

## getRowLevel

DataSet 이 그룹화되어 있을 경우에 지정한 Row 의 레벨을 구하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowLevel(nRow)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 대상 Row 의 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |

**Return**: `Number` — DataSet 에서 지정한 Row 의 레벨값을 반환합니다. 만약 지정한 Row 가 없으면 "0" 을 반환합니다.

**Remark**
- 지정한 Row 가 그룹 정보를 포함하고 있는 Row (즉, ROWTYPE_GROUP 타입의 Row)가 아니면 "0" 을 반환합니다.
  그렇지않고 keystring 속성에서 하나 또는 여러 개의 키를 사용하여 그룹화된 경우 ROW_GROUP 타입의 Row 의 레벨은 "1" 이상입니다.

- 매개변수인 nRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

---

## getRowsAvg

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 % Row 의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsAvg( arrRows, strColExpr [ ,bExcludeNaN [ ,arrArgs ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 평균값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 평균을 구할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `bExcludeNaN` | Boolean | Column 값 또는 계산값이 null, undefined, ""(Empty String), NaN 값 일 때 평균값 계산에서 제외할 지 여부를 설정합니다. 평균값 계산에 포함되면 분모에 해당하는 전체갯수값이 증가합니다.  true 설정 시 평균값 계산에서 제외합니다. false 설정 시 평균값 계산에 포함합니다.  값 생략 시 true 로 적용됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다.  배열에 Column 의 ID 를 설정해도 Column 값으로 치환되지 않습니다. strColExpr 에 Column 의 ID 를 직접 설정하여야 Column 값이 적용됩니다. 즉, arrArgs[0] 에 Column ID 설정 시 "$0" 는 문자열로 치환되며, Column ID 에 해당하는 값으로 치환되지 않습니다. |

**Return**: `Number` — 특정 Row 의 Column 값 또는 계산값의 평균값을 반환합니다.  평균값을 구할 수 없는 경우에는 POSITIVE_INFINITY 값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getRowsAvgNF() 메소드를 사용하여야 합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getRowsAvgNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값의 평균값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsAvgNF( arrRows, strColExpr [ ,bExcludeNaN [ ,arrArgs ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 평균값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 평균을 구할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `bExcludeNaN` | Boolean | Column 값 또는 계산값이 null, undefined, ""(Empty String), NaN 값 일 때 평균값 계산에서 제외할 지 여부를 설정합니다. 평균값 계산에 포함되면 분모에 해당하는 전체갯수값이 증가합니다.  true 설정 시 평균값 계산에서 제외합니다. false 설정 시 평균값 계산에 포함합니다.  값 생략 시 true 로 적용됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다.  배열에 Column 의 ID 를 설정해도 Column 값으로 치환되지 않습니다. strColExpr 에 Column 의 ID 를 직접 설정하여야 Column 값이 적용됩니다. 즉, arrArgs[0] 에 Column ID 설정 시 "$0" 는 문자열로 치환되며, Column ID 에 해당하는 값으로 치환되지 않습니다. |

**Return**: `Number` — 특정 Row 의 Column 값 또는 계산값의 평균값을 반환합니다.  평균값을 구할 수 없는 경우에는 POSITIVE_INFINITY  값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getRowsAvg() 메소드를 사용하여야 합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 평균값을 구할 수 있습니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 평균값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 평균값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 평균값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getRowsCount

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 중 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsCount( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 특정 Column 의 데이터 유무를 확인할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 데이터 유무를 확인할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 전달된 Row 에서 특정 Column 의 값이 null 이 아닌 Row 의 갯수를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getRowsCountNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.

---

## getRowsCountNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 중 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsCountNF( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 특정 Column 의 데이터 유무를 확인할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 데이터 유무를 확인할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 전달된 Row 에서 특정 Column 의 값이 null 이 아닌 Row 의 갯수를 반환합니다.  * datatyperule 속성값이 "2.0" 인 경우 undefined, null, EmptyString(""), NaN, "invalid date" 를 제외한 Row 의 갯수를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getRowsCount() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Row 갯수 계산 시 undefined, null, EmptyString(""), NaN, "invalid date" 값을 제외합니다.

---

## getRowsMax

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsMax( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 최대값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 최대값을 구할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 전달된 Row 에서 Column 값 또는 계산값 중 최대값을 반환합니다.  최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getRowsMaxNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strColExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strColExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getRowsMaxNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최대값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsMaxNF( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 최대값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 최대값을 구할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 전달된 Row 에서 Column 값 또는 계산값 중 최대값을 반환합니다.  최대값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getRowsMaxNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최대값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 +Infinity 가 있을 경우 최대값은 +Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strColExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strColExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getRowsMin

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsMin( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 최소값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 최소값을 구할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 전달된 Row 에서 Column 값 또는 계산값 중 최소값을 반환합니다.  최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색 대상에서 제외합니다.
   필터링 된 Row 를 검색 대상에 포함하려면 getRowsMinNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strColExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strColExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getRowsMinNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값 중 최소값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsMinNF( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 최소값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 최소값을 구할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 전달된 Row 에서 Column 값 또는 계산값 중 최소값을 반환합니다.  최소값을 구할 수 없는 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색 대상에 포함합니다.
   필터링 된 Row 를 검색 대상에서 제외하려면 getRowsMin() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 검색 대상에 ±Infinity 가 있을 경우 최소값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 검색 대상에 -Infinity 가 있을 경우 최소값은 -Infinity 가 됩니다.

- 앱 실행 중 Dataset ColumnInfo 오브젝트 컬럼의 type 속성값을 변경할 수 있습니다.
  해당 컬럼을 strColExpr 파라미터로 지정하고 메소드 실행 시 변경한 type에 맞게 연산을 처리합니다. 
  하지만, strColExpr 파라미터를 계산식으로 설정한 경우에는 변경된 컬럼 type 정보를 확인할 수 없으며 정확한 결과가 나오지 않을 수 있습니다.

---

## getRowsSum

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsSum( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 합계값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 합계값을 구할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 전달된 Row 에서 Column 값 또는 계산값의 합계값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getRowsSumNF() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getRowsSumNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowsSumNF( arrRows, strColExpr [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrRows` | Array | 합계값을 구할 Row 의 Index 를 숫자형 배열형태로 설정합니다. |
| `strColExpr` | String | arrRows 에 해당하는 Row 에서 합계값을 구할 Column 의 ID, Index 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `arrArgs` | Array | strColExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 전달된 Row 에서 Column 값 또는 계산값의 합계값을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getRowsSum() 메소드를 사용하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getRowType

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정된 Row 의 타입을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowType( nRow )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 대상 Row 의 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |

**Return**: `Number` — DataSet 에서 지정된 Row 의 타입을 반환합니다.  지정한 Row 가 존재하지 않으면 "ROWTYPE_EMPTY" 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 getRowTypeNF() 메소드를 사용하여야 합니다.

- Row 의 타입은 다음과 같습니다.

	
		Row Type
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	

 
- nRow  에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

---

## getRowTypeNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정된 Row 의 타입을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getRowTypeNF( nRow )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 대상 Row 의 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |

**Return**: `Number` — DataSet 에서 지정된 Row 의 타입을 반환합니다.  지정한 Row 가 존재하지 않으면 "ROWTYPE_EMPTY" 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 getRowType() 메소드를 사용하여야 합니다..

- Row 의 타입은 다음과 같습니다.

	
		Row Type
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	

 
- nRow  에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

---

## getSum

필터링 되어 보이지 않는 Row 를 제외한 범위에서 지정한 영역의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getSum( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 합계를 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 계산을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 계산합니다. |
| `nEndIdx` | Number | Dataset 에서 계산을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 계산합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 계산합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값의 합계값을 반환합니다.  합계값을 구할 수 없는 경우에는 0 을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 계산 대상에서 제외합니다.
   필터링 된 Row 를 계산 대상에 포함하려면 getSumNF() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 합계값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.

---

## getSumNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 지정한 영역의 Column 값 또는 계산값의 합계값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.getSumNF( strExpr [ ,nStartIdx [ ,nEndIdx [ ,arrArgs ] ] ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strExpr` | String | Dataset 에서 합계를 구할 Column 의 ID 또는 계산식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `nStartIdx` | Number | Dataset 에서 계산을 시작할 Row 의 인덱스를 설정합니다.  음수값을 설정하거나 값을 생략하면 0 으로 적용되어 첫번째 Row 부터 계산합니다. |
| `nEndIdx` | Number | Dataset 에서 계산을 종료할 Row 의 인덱스에 1 을 더한 값을 설정합니다. 즉, 설정한 인덱스값보다 1 작은 인덱스의 Row 까지 계산합니다.  nStartIdx 에 설정한 값보다 큰 값을 설정하여야 합니다. 음수값을 설정하거나 값을 생략하면 -1 로 적용되어 마지막 Row 까지 계산합니다. |
| `arrArgs` | Array | strExpr 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Number` — 특정 Column 값 또는 계산값의 합계값을 반환합니다.  합계값을 구할 수 없는 경우에는 0 을 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 계산 대상에 포함합니다.
   필터링 된 Row 를 계산 대상에서 제외하려면 getSum() 메소드를 사용하여야 합니다.

- keystring 속성을 사용하여 그룹화한 경우, 그룹정보를 가진 논리적 Row 는 계산 대상에서 제외합니다.

- Column 값 또는 계산값의 합계가 "INT", "FLOAT", "BIGDECIMAL" 타입인 경우만 합계값을 구할 수 있습니다.

- nStartIdx, nEndIdx 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 적용되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "INT" 이면 계산 대상에 ±Infinity 가 있을 경우 합계값을 구할 수 없습니다.
   > Column 타입이 "FLOAT", "BIGDECIMAL" 이면 계산 대상에 +Infinity 와 -Infinity 가 모두 있을 경우 합계값은 NaN 이 됩니다.
      계산 대상에 +Infinity 또는 -Infinity 가 있을 경우 합계값은 각각 +Infinity, -Infinity 가 됩니다.

---

## insertEventHandler

Dataset 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
Dataset.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## insertRow

DataSet 에서 지정된 Row 의 위치에 새로운 Row 를 삽입하는 메소드입니다.

**Syntax**
```javascript
Dataset.insertRow(nRow)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 삽입할 위치의 Row 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |

**Return**: `Number` — DataSet 에 삽입된 Row 의 인덱스를 반환합니다. 만약, Row 의 삽입에 실패하면 "-1" 을 반환합니다.

**Remark**
- Row 를 삽입하기 전에 하나 이상의 Column 이 정의되어 있어야 합니다.
  지정한 삽입 위치가 전체 Row 의 개수보다 크거나 같으면 맨 끝에 새 Row 를 추가합니다.

- 그룹 소계 Row 를 선택하여 삽입하면 해당 그룹의 맨 끝에 추가됩니다.
  만약, 선택한 그룹 하위의 데이터가 그룹이면 새로운 그룹을 추가하고 추가된 그룹에 삽입합니다.

- insertRow() 메소드를 수행하면 onrowsetchanged → canrowposchange → onrowposchanged → onvaluechanged  순서로 이벤트가 발생합니다.
  이때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_APPEND" 가 됩니다.

- 만약 updatecontrol 속성이 "true"인 경우에는 추가된 Row 의 타입은 "ROWTYPE_INSERT"가 되고, "false"이면 "ROWTYPE_NORMAL"이 됩니다.

- Row 의 타입들은 다음과 같습니다.

	
		Row Type
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	


- nRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용 시 주의하시기 바랍니다.

**See Also**: reason

---

## load

DataSet 의 url 속성에 설정된 Business Service 에서 데이터를 로드하는 메소드입니다.

**Syntax**
```javascript
Dataset.load( [bAsync [, bBinary]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bAsync` | Boolean | true 설정 시 비동기(Async)로 데이터를 로드합니다. false 설정 시 동기(Sync)로 데이터를 로드합니다.  값 생략 시 true 로 적용됩니다. |
| `bBinary` | Boolean | true 설정 시 Binary 형태로 데이터를 로드합니다. false 설정 시 일반적인 형태로 데이터를 로드합니다.  값 생략 시 false 로 적용됩니다.  * web runtime environment 는 false 값만 설정할 수 있습니다. |

**Remark**
- 만약, 현재 DataSet 이 다른 DataSet 정보를 포함하고 있었다면 이전의 DataSet 정보는 삭제됩니다.

- load() 메소드로 로딩된 데이터가 없거나 정상적으로 완료되지 않으면 onload 이벤트가 발생하지 않습니다.
   load() 메소드로 데이터 로딩이 정상적으로 완료되면 onload 이벤트가 발생하며
   onload 이벤트의 e.reason 속성은 "REASON_LOAD", e.errorcode 속성은 0 값을 갖습니다.

- DataSet 의 url 속성값을 설정하지 않고 load() 메소드를 실행한 경우 onload 이벤트는 발생하지만 
   onload 이벤트의 e.errorcode 속성은 -1, e.errormsg 속성은 "empty url" 값을 갖습니다.

- load() 메소드 실행 시 serverdatasetid 속성에 설정된 DataSet 이 유효하다면 아래의 경우 데이터가 로드되고 onload 이벤트가 발생할 수 있습니다.
   > 수신된 에러코드가 음수이지만 Environment 의 datasetloadtype 속성값이 "errorallow" 인 경우
   > 데이터가 로딩중 중단되어 일부 데이터만 파싱되었지만 수신된 에러코드가 0 이상 인 경우


◆ Get/Post 방식 관련 참고사항

1. strArgument 와 strInDatasets 이 "" 이고, Environment 의 Cookies 영역에 변수가 없으면 GET 방식으로 동작합니다.

2. strArgument 나 strInDatasets 에 값이 있거나 Environment 의 Cookies 영역에 변수가 있으면 POST로 동작합니다.

3. 위 1번의 상태에서 addcookietovariable 값이 true 이면 서버와의 첫 통신시에는 GET 방식으로 동작하고 이후부터는 서버에서 유입되는
    Cookie 의 유무에 따라 Cookie 가 있으면 POST 없으면 GET 방식으로 동작합니다.
    (addcookietovariable 값이 true 이면 Cookie가 Environment 의 Cookies 영역에 변수로 자동 추가 되기 때문.)

**See Also**: errorcode, reason

---

## loadBIN

DataSet 에 Binary 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**
```javascript
Dataset.loadBin(varBinData)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `varBinData` | Object | Binary 형식으로 만들어진 데이터를 설정합니다. |

**Return**: `Number` — Dataset 에 로드된 데이터의 갯수를 반환합니다.

**Remark**
- 만약, 현재 Dataset 이 다른 Dataset 정보를 포함하고 있었다면 이전의 Dataset 정보는 Clear 됩니다.
   Dataset 의 id 속성값은 변경되지 않습니다.

- loadBin() 메소드를 수행하면 onload Event가 발생합니다. 
   이 때, e.reason 속성값은 "REASON_LOAD" 가 됩니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

- web runtime environment 는 지원하지 않는 메소드입니다.

---

## loadCSV

DataSet 에 CSV 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**
```javascript
Dataset.loadCSV(varCsvData[,bClear])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `varCsvData` | Object | CSV 형식으로 만들어진 데이터를 설정합니다.  "Dataset:Dataset_id" 형식으로 시작하며, Column 정보를 헤더로 가지는 CSV 데이터를 설정해야 합니다. "Dataset_id" 와 "Column Infos" 는 CR/LF 또는 LF 로 구분합니다. |
| `bClear` | Boolean | true 설정 시 DataSet 에 로드 되어 있던 기존 데이터를 삭제합니다. false 설정 시 DataSet 에 로드 되어 있던 기존 데이터를 삭제하지 않습니다.  값 생략 시 true 로 적용됩니다. |

**Return**: `Number` — DataSet 에 로드된 데이터의 갯수를 반환합니다.

**Remark**
- loadCSV() 메소드를 수행하면 onload 이벤트가 발생합니다.
   두 번째 인수 bClear가 true 이면 e.reason 속성값은 "REASON_LOAD"가 되고, false 이면 "REASON_APPEND"가 됩니다.

- bClear 가 false 인 경우 Dataset 에 새로 입력받은 데이터를 추가합니다.
   데이터를 추가할 때 Dataset 에 추가될 데이터의 Column 이 없는 경우 Column 을 생성한 후 데이터를 추가합니다. 
   id 속성은 변경되지 않습니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.

- 멀티바이트 문자를 처리하기 위해서는 이진(Binary) 형태로 저장된 CSV 데이터를 인수로 설정해야 합니다.

- CSV/SSV에서 "UTF-8" 만 지원합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

---

## loadFromDataObject

binddataobject, dataobjectpath 속성에 설정된 값을 Dataset 오브젝트에 즉시 반영시키는 메소드입니다.

**Syntax**
```javascript
DataObject00.loadFromDataObject()
```

**Remark**
- DataObject 오브젝트의 data 속성값을 직접 수정하는 경우 수정된 값을 Dataset에 반영하기 위해 사용합니다.

---

## loadJSON

Dataset 오브젝트에 JSON 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**
```javascript
Dataset.loadJSON(strJsonData[,bClear]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strJsonData` | String | JSON 형식으로 만들어진 데이터를 설정합니다. |
| `bClear` | Boolean | true 설정 시 Dataset 오브젝트에 로드된 기존 데이터를 삭제합니다. false 설정 시 Dataset 오브젝트에 로드된 기존 데이터를 삭제하지 않습니다.  값 생략 시 true 로 적용됩니다. |

**Return**: `Number` — DataSet 에 로드된 데이터의 갯수를 반환합니다.

**Remark**
- loadJSON() 메소드를 수행하면 onload 이벤트가 발생합니다. 
   두 번째 인수 bClear가 true 이면 e.reason 속성값은 "REASON_LOAD"가 되고, false 이면 "REASON_APPEND"가 됩니다.

- bClear 가 false 인 경우 Dataset 오브젝트에 새로 입력받은 데이터를 추가합니다.
   데이터를 추가할 때 Dataset 오브젝트에 추가될 데이터의 Column 이 없는 경우 Column 을 생성한 후 데이터를 추가합니다. 
   id 속성은 변경되지 않습니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.

---

## loadSSV

DataSet 에 SSV 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**
```javascript
Dataset.loadSSV ( varSsvData [,bClear] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `varSsvData` | String | SSV 형식으로 만들어진 데이터를 설정합니다. |
| `bClear` | Boolean | true 설정 시 DataSet 에 로드 되어 있던 기존 데이터를 삭제합니다. false 설정 시 DataSet 에 로드 되어 있던 기존 데이터를 삭제하지 않습니다.  값 생략 시 true 로 적용됩니다. |

**Return**: `Number` — DataSet 에 로드된 데이터의 갯수를 반환합니다.

**Remark**
- loadSSV() 메소드를 수행하면 onload 이벤트가 발생합니다.
   두 번째 인수 bClear가 true 이면 e.reason 속성값은 "REASON_LOAD"가 되고, false 이면 "REASON_APPEND"가 됩니다.

- bClear 가 false 인 경우 Dataset 에 새로 입력받은 데이터를 추가합니다.
   데이터를 추가할 때 Dataset 에 추가될 데이터의 Column 이 없는 경우 Column 을 생성한 후 데이터를 추가합니다. 
   id 속성은 변경되지 않습니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.

- 멀티바이트 문자를 처리하기 위해서는 이진(Binary) 형태로 저장된 SSV 데이터를 인수로 설정해야 합니다.

- CSV/SSV 에서 "UTF-8" 만 지원합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

---

## loadXML

DataSet 에 XML 형식으로 만들어진 데이터를 로드하는 메소드입니다.

**Syntax**
```javascript
Dataset.loadXML(strXmlData[,bClear]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strXmlData` | String | XML 형식으로 만들어진 데이터를 설정합니다. |
| `bClear` | Boolean | true 설정 시 DataSet 에 로드 되어 있던 기존 데이터를 삭제합니다. false 설정 시 DataSet 에 로드 되어 있던 기존 데이터를 삭제하지 않습니다.  값 생략 시 true 로 적용됩니다. |

**Return**: `Number` — DataSet 에 로드된 데이터의 갯수를 반환합니다.

**Remark**
- loadXML() 메소드를 수행하면 onload 이벤트가 발생합니다. 
   두 번째 인수 bClear가 true 이면 e.reason 속성값은 "REASON_LOAD"가 되고, false 이면 "REASON_APPEND"가 됩니다.

- bClear 가 false 인 경우 Dataset 에 새로 입력받은 데이터를 추가합니다.
   데이터를 추가할 때 Dataset 에 추가될 데이터의 Column 이 없는 경우 Column 을 생성한 후 데이터를 추가합니다. 
   id 속성은 변경되지 않습니다.

- 로드한 Row 가 한개 이상이면 rowposition 속성값은 0 이 됩니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

---

## lookup

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달값과 일치하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.lookup( varCol, varCmpVal, strOutputColID [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `varCol` | String, Number | DataSet 에서 varCmpVal 값과 비교할 Column 의 ID, Index 또는 조건표현식을 설정합니다.  "$ + 숫자" 형식의 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `varCmpVal` | String | DataSet 에서 varCol 에 해당하는 Column 값과 비교할 값을 설정합니다. |
| `strOutputColID` | String | varCol 값과 varCmpVal 값이 일치하는 Row 에서 값을 가져올 Column 의 ID 를 설정합니다. |
| `arrArgs` | Array | varCol 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Variant` — 주어진 조건에 만족하는 첫번째 Row 의 지정된 Column 값을 반환합니다.  값을 구할 수 없을 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 lookupNF() 메소드를 사용하여야 합니다.

- lookup() 메소드는 Column 값과 전달된 값이 일치하는 Row 를 찾습니다.
   Column 값이 전달된 값으로 시작하는 Row 를 찾기 위해서는 lookupAs() 메소드를 사용하여야 합니다.

- 검색 결과가 여러개 있을 경우에는 첫 번째 Row 에서 지정된 Column 의 값을 구합니다.

---

## lookupAs

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Column 값이 전달값으로 시작하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.lookupAs( varCol, varCmpVal, strOutputColID [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `varCol` | String, Number | DataSet 에서 varCmpVal 값과 비교할 Column 의 ID, Index 또는 조건표현식을 설정합니다.  "$ + 숫자" 형식의 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `varCmpVal` | Variant | DataSet 에서 varCol 에 해당하는 Column 값과 비교할 값을 설정합니다. |
| `strOutputColID` | String | varCol 값이 varCmpVal 값으로 시작하는 Row 에서 값을 가져올 Column 의 ID 를 설정합니다. |
| `arrArgs` | Array | varCol 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Variant` — 주어진 조건에 만족하는 첫번째 Row 의 지정된 Column 값을 반환합니다.  값을 구할 수 없을 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 검색대상에서 제외합니다.
   필터링 된 Row 를 검색대상에 포함하려면 lookupAsNF() 메소드를 사용하여야 합니다.

- lookupAs() 메소드는 Column 값이 전달된 값으로 시작하는 Row 를 찾습니다.
   Column 값과 전달된 값이 일치하는 Row 를 찾기 위해서는 lookup() 메소드를 사용하여야 합니다.

- 검색 결과가 여러개 있을 경우에는 첫 번째 Row 에서 지정된 Column 의 값을 구합니다.

---

## lookupAsNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달값으로 시작하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.lookupAsNF( varCol, varCmpVal, strOutputColID [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `varCol` | String, Number | DataSet 에서 varCmpVal 값과 비교할 Column 의 ID, Index 또는 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `varCmpVal` | Variant | DataSet 에서 varCol 에 해당하는 Column 값과 비교할 값을 설정합니다. |
| `strOutputColID` | String | varCol 값이 varCmpVal 값으로 시작하는 Row 에서 값을 가져올 Column 의 ID 를 설정합니다. |
| `arrArgs` | Array | varCol 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Variant` — 주어진 조건에 만족하는 첫번째 Row 의 지정된 Column 값을 반환합니다.  값을 구할 수 없을 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 lookupAs() 메소드를 사용하여야 합니다.

- lookupAsNF() 메소드는 Column 값이 전달된 값으로 시작하는 Row 를 찾습니다.
   Column 값과 전달된 값이 일치하는 Row 를 찾기 위해서는 lookupNF() 메소드를 사용하여야 합니다.

- 검색 결과가 여러개 있을 경우에는 첫 번째 Row 에서 지정된 Column 의 값을 구합니다.

---

## lookupNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 값이 전달값과 일치하는 첫번째 Row 의 지정된 Column 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.lookupNF( varCol, varCmpVal, strOutputColID [ ,arrArgs ] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `varCol` | String, Number | DataSet 에서 varCmpVal 값과 비교할 Column 의 ID, Index 또는 조건표현식을 설정합니다.  "$ + 숫자" 형식으로 치환문을 사용할 수 있습니다. 치환문은 arrArgs 에 정의된 값으로 치환됩니다. |
| `varCmpVal` | String | DataSet 에서 varCol 에 해당하는 Column 값과 비교할 값을 설정합니다. |
| `strOutputColID` | String | varCol 값과 varCmpVal 값이 일치하는 Row 에서 값을 가져올 Column 의 ID 를 설정합니다. |
| `arrArgs` | Array | varCol 에 정의된 치환문에 치환 될 값을 배열형태로 설정합니다.  "$ + 숫자" 형식에서 숫자값이 배열의 인자값으로 사용됩니다. 즉, "$0" 은 arrArgs[0] 값으로, "$2" 는 arrArgs[2] 값으로 치환됩니다. |

**Return**: `Variant` — 주어진 조건에 만족하는 첫번째 Row 의 지정된 Column 값을 반환합니다.  값을 구할 수 없을 경우에는 undefined 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 를 검색대상에 포함합니다.
   필터링 된 Row 를 검색대상에서 제외하려면 lookup() 메소드를 사용하여야 합니다.

- lookupNF() 메소드는 Column 값과 전달된 값이 일치하는 Row 를 찾습니다.
   Column 값이 전달된 값으로 시작하는 Row 를 찾기 위해서는 lookupAsNF() 메소드를 사용하여야 합니다.

- 검색 결과가 여러개 있을 경우에는 첫 번째 Row 에서 지정된 Column 의 값을 구합니다.

---

## mergeData

현재 Dataset 에 지정한 Dataset 을 통합하는 메소드입니다.

**Syntax**
```javascript
Dataset.mergeData( objDataset )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDataset` | Object | 현재 Dataset 에 통합할 Dataset 을 오브젝트로 설정합니다. |

**Return**: `Number` — 메소드 수행 후 Dataset 의 Row 갯수를 반환합니다.

**Remark**
- mergeData() 메소드를 호출하면 기존 Dataset 의 마지막 부분에 합치려는 Dataset 의 모든 Row 가 추가됩니다.

- 합쳐질 Dataset 과 기존 Dataset 에서 서로 같은 Column ID 에 한해서만 Row 가 합쳐집니다.
   다른 Column 의 ID 값은 무시되고, Const Column 값은 변경되지 않습니다.

- mergeData() 메소드의 수행이 완료되면 Dataset 의 onrowsetchanged 이벤트가 발생합니다.
   이때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_MERGE" 가 됩니다.
   rowposition 속성값은 변경되지 않습니다. 
   다만 메소드를 수행하기 전의 rowposition 속성값이 -1 인 경우는 rowposition 을 0 으로 변경하기 위해 canrowposchange 이벤트를 호출합니다.

- canrowposchange 이벤트에서 true 를 반환하면 새로운 Row 위치로 변경하고 onrowposchanged 이벤트가 호출됩니다.
   그러나 false 를 반환하면 rowposition 속성이 변경되지 않습니다.

- canrowposchange 이벤트는 onrowsetchanged 이벤트가 수행된 후 호출됩니다.

- keystring 또는 filterstr 속성으로 그룹핑/정렬/필터링 되어 있는 경우 mergeData() 메소드 수행 후 자동으로 재적용되지 않습니다.
   따라서 그룹핑/정렬/필터링을 재적용하려면 updateSortGroup() 또는 filter() 메소드를 명시적으로 수행하여야 합니다.

- datatyperule 속성값이 "2.0" 인 경우 변경된 Data Validation 규칙이 적용됩니다.
   Column 타입에 따라 유효하지 않은 데이터로 처리될 수 있으므로 주의하여야 합니다.

**See Also**: reason

---

## moveRow

DataSet 에서 지정한 Row 를 특정 위치로 이동하는 메소드입니다.

**Syntax**
```javascript
Dataset.moveRow(nOldRow,nNewRow)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nOldRow` | Number | 위치를 이동하려고 하는 Row 의 현재 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |
| `nNewRow` | Number | Row 가 이동할 위치의 Row 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 "0" 입니다. |

**Return**: `Number` — Row 이동에 성공하면 새로운 위치의 Row 인덱스를 반환합니다. Row 이동에 실패하면 "-1" 을 반환합니다.

**Remark**
- moveRow() 메소드를 수행하면 DataSet 의 onrowsetchanged 이벤트가 발생되며 e.reason 상태값은 "REASON_MOVE" 가 됩니다.

- 매개변수인 nOldRow가 nNewRow보다 큰 경우에는 nOldRow와 nNewRow사이의 Row 들은 하나씩 아래로 이동합니다.
  nOldRow가 nNewRow보다 작은 경우에는 nOldRow와 nNewRow사이의 Row 들은 하나씩 위로 이동합니다.
  이동된 RowType은 변경되지 않습니다.

- nOldRow,nNewRow 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용시 주의하시기 바랍니다.

---

## removeEvent

Dataset 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
Dataset.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | Dataset 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- Dataset 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- Dataset 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

Dataset 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Dataset.removeEventHandler( strEventID, objFunc, objTarget )
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

Dataset 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Dataset.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

## reset

DataSet 의 데이터를 마지막 저장 상태로 복구하는 메소드입니다.

**Syntax**
```javascript
Dataset.reset()
```

**Sample**
```javascript
this.Dataset00.reset();
```

**Remark**
- updatecontrol 속성값이 "false" 일 경우 Insert, Delete, Update 된 데이터는 복구되지 않습니다.

- reset() 메소드가 수행되면 onload 이벤트가 발생합니다.
  이 때, onload 이벤트의 e.reason 속성값은 "REASON_RESET" 가 됩니다.

- rowposition 속성값은 변경되지 않습니다.
  단, rowposition의 값이 reset() 메소드 수행 후의 Row 개수보다 크거나 같으면 rowposition 속성값은 "0" 이 됩니다.

- applyChange() 메소드가 수행된 후에 변경 작업이 이루어 졌을 때, reset() 메소드를 호출하면 초기 로드되었던 DataSet 의 상태로 되돌리는게 아니라 applyChange() 메소드를 통해 적용된 DataSet 의 최종 상태로 되돌립니다.

---

## saveBIN

DataSet 의 데이터를 Binary 형식으로 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.saveBIN( [strID [, strSaveType [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | Binary 형식의 파일 내부에 정의될 DataSet ID 를 설정합니다. 실제 DataSet ID 와 저장 시 사용할 ID 를 다르게 사용할 때 설정합니다.  값 생략 시 현재 DataSet 의 ID 가 적용됩니다. |
| `strSaveType` | String | Binary 형식으로 변환할 대상이 되는 데이터를 선정하는 기준을 설정합니다.  "n","N","normal","Normal" 설정 시 Delete 된 데이터를 제외하고 변환합니다. "u","U","update","Update" 설정 시 Update 된 데이터만 변환합니다. "a","A","all","All" 설정 시 Insert/Update/Delete 된 모든 데이터를 변환합니다.  값 생략 시 "Normal" 로 적용됩니다. |
| `strSaveNaN` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 변환 방법을 설정합니다.  "include" 설정 시 NaN 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 savenan 속성값이 적용됩니다. |
| `strSaveInfinity` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 변환 방법을 설정합니다.  "include" 설정 시 Infinity 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinfinity 속성값이 적용됩니다. |
| `strSaveDate` | String | 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 변환 방법을 설정합니다.  "include" 설정 시 "Invalid Date" 문자열로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinvaliddate 속성값이 적용됩니다. |

**Return**: `String` — DataSet 의 데이터를 Binary 형식으로 변환한 문자열을 반환합니다.

**Remark**
- Binary 파일포맷은 Column 정보 및 데이터를 XML이 아닌 Binary 행태로 가집니다.

- Binary 파일로 저장하고자 할때에는 File을 Binary 형태로 Open 하여 Binary 로 저장해야 합니다.

- 저장된 Binary 파일의 데이타는 LoadBIN() 메소드를 사용하여 DataSet 에 로드할 수 있습니다.

- web runtime environment 는 지원하지 않는 메소드입니다.

---

## saveCSV

DataSet 의 데이터를 CSV 형식으로 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.saveCSV( [strID [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | CSV 형식의 파일 내부에 정의될 DataSet ID 를 설정합니다. 실제 DataSet ID 와 저장 시 사용할 ID 를 다르게 사용할 때 설정합니다.  값 생략 시 현재 DataSet 의 ID가 적용됩니다. |
| `strSaveNaN` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 변환 방법을 설정합니다.  "include" 설정 시 NaN 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 savenan 속성값이 적용됩니다. |
| `strSaveInfinity` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 변환 방법을 설정합니다.  "include" 설정 시 Infinity 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinfinity 속성값이 적용됩니다. |
| `strSaveDate` | String | 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 변환 방법을 설정합니다.  "include" 설정 시 "Invalid Date" 문자열로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinvaliddate 속성값이 적용됩니다. |

**Return**: `String` — DataSet 의 데이터를 CSV 형식으로 변환한 문자열을 반환합니다.

**Remark**
- CSV는 Column 정보를 헤더로 갖는 포맷입니다.

- CSV 파일로 저장하고자 할 경우에는 파일을 Binary 형태로 열어 Binary 형태로 저장해야 한글 등의 멀티바이트코드가 보존됩니다.

- 저장된 CSV 파일을 로드하고자 할 경우에는 loadCSV() 메소드를 사용합니다.

- CSV 로 저장하는 경우에는 "Normal" 타입으로만 가능합니다.

- CSV/SSV 에서 "UTF-8" 만 지원합니다.

- Const Column 은 CSV 형식으로 저장되지 않습니다.

---

## saveJSON

Dataset 오브젝트의 데이터를 JSON 형식으로 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.saveJSON( [strID [, strSaveType [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | JSON 형식의 파일 내부에 정의될 Dataset 오브젝트 ID를 설정합니다. 실제 Dataset 오브젝트 ID와 저장 시 사용할 ID를 다르게 사용할 때 설정합니다.  값 생략 시 현재 Dataset 오브젝트의 ID가 적용됩니다. |
| `strSaveType` | String | JSON 형식으로 변환할 대상이 되는 데이터를 선정하는 기준을 설정합니다.  "n","N","normal","Normal" 설정 시 Delete 된 데이터를 제외하고 변환합니다. "u","U","update","Update" 설정 시 Update 된 데이터만 변환합니다. "a","A","all","All" 설정 시 Insert/Update/Delete 된 모든 데이터를 변환합니다. "v","V","view","View" 설정 시 "Normal" 조건의 데이터를 Grid 에 표시된 순서대로 변환합니다.  값 생략 시 "Normal"로 적용됩니다. |
| `strSaveNaN` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 변환 방법을 설정합니다.  "include" 설정 시 NaN 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 savenan 속성값이 적용됩니다. |
| `strSaveInfinity` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 변환 방법을 설정합니다.  "include" 설정 시 Infinity 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinfinity 속성값이 적용됩니다. |
| `strSaveDate` | String | 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 변환 방법을 설정합니다.  "include" 설정 시 "Invalid Date" 문자열로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinvaliddate 속성값이 적용됩니다. |

**Return**: `String` — Dataset 오브젝트의 데이터를 JSON 형식으로 변환한 문자열을 반환합니다.

---

## saveSSV

DataSet 의 데이터를 SSV 형식으로 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.saveSSV( [strID [, strSaveType [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | SSV 형식의 파일 내부에 정의될 DataSet ID 를 설정합니다. 실제 DataSet ID 와 저장 시 사용할 ID 를 다르게 사용할 때 설정합니다.  값 생략 시 현재 DataSet 의 ID가 적용됩니다. |
| `strSaveType` | String | SSV 형식으로 변환할 대상이 되는 데이터를 선정하는 기준을 설정합니다.  "n","N","normal","Normal" 설정 시 Delete 된 데이터를 제외하고 변환합니다. "u","U","update","Update" 설정 시 Update 된 데이터만 변환합니다. "a","A","all","All" 설정 시 Insert/Update/Delete 된 모든 데이터를 변환합니다. "v","V","view","View" 설정 시 "Normal" 조건의 데이터를 Grid 에 표시된 순서대로 변환합니다.  값 생략 시 "Normal"로 적용됩니다. |
| `strSaveNaN` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 변환 방법을 설정합니다.  "include" 설정 시 NaN 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 savenan 속성값이 적용됩니다. |
| `strSaveInfinity` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 변환 방법을 설정합니다.  "include" 설정 시 Infinity 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinfinity 속성값이 적용됩니다. |
| `strSaveDate` | String | 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 변환 방법을 설정합니다.  "include" 설정 시 "Invalid Date" 문자열로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinvaliddate 속성값이 적용됩니다. |

**Return**: `String` — DataSet 의 데이터를 SSV 형식으로 변환한 문자열을 반환합니다.

**Remark**
- 매개변수인 strSaveType은 4가지 종류 중 하나로 설정할 수 있습니다.
  (View 타입을 제외한 나머지 타입은 필터링된 레코드를 포함합니다. 
  그리고 물리적으로 데이터가 들어가 있는 순서대로 문자열로 변환됩니다)

    1) Normal 타입인 경우에는 Insert, Update된 레코드를 포함합니다.
       레코드별 열의 형태는 원래 데이터셋 구성과 같습니다.

    2) All 타입인 경우에는 Insert, Update, Delete된 모든 레코드를 포함합니다. 
       Record 태그에 Type 속성(attribute)이 추가되어 있습니다.
       Insert된 레코드는 Type이 Insert, Update된 레코드는 Type이 Update, Delete된 레코드는 Type이 Delete로 표현됩니다.
       그리고 Update된 레코드는 Org_Record 태그가 추가되어 있어 변경사항을 알 수 있습니다.

    3) Update 타입인 경우에는 변경된 레코드만 포함합니다.
       Record 태그에 Type 속성이 추가되어 있습니다.
       Insert된 레코드는 Type이 Insert, Update된 레코드는 Type이 Update, Delete된 레코드는 Type이 Delete로 표현됩니다.
       그리고 Update된 레코드는 Org_Record 태그가 추가되어 있어 변경사항을 알 수 있습니다.

    4) View 타입인 경우에는 현재 보이는 레코드 순서대로 Normal 형식으로 저장해 줍니다.

---

## saveXML

DataSet 의 데이터를 XML 형식으로 반환하는 메소드입니다.

**Syntax**
```javascript
Dataset.saveXML( [strID [, strSaveType [, strSaveNaN [, strSaveInfinity [, strSaveDate]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | XML 형식의 파일 내부에 정의될 DataSet ID 를 설정합니다. 실제 DataSet ID 와 저장 시 사용할 ID 를 다르게 사용할 때 설정합니다.  값 생략 시 현재 DataSet 의 ID가 적용됩니다. |
| `strSaveType` | String | XML 형식으로 변환할 대상이 되는 데이터를 선정하는 기준을 설정합니다.  "n","N","normal","Normal" 설정 시 Delete 된 데이터를 제외하고 변환합니다. "u","U","update","Update" 설정 시 Update 된 데이터만 변환합니다. "a","A","all","All" 설정 시 Insert/Update/Delete 된 모든 데이터를 변환합니다. "v","V","view","View" 설정 시 "Normal" 조건의 데이터를 Grid 에 표시된 순서대로 변환합니다.  값 생략 시 "Normal"로 적용됩니다. |
| `strSaveNaN` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 변환 방법을 설정합니다.  "include" 설정 시 NaN 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 savenan 속성값이 적용됩니다. |
| `strSaveInfinity` | String | 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 변환 방법을 설정합니다.  "include" 설정 시 Infinity 값으로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinfinity 속성값이 적용됩니다. |
| `strSaveDate` | String | 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 변환 방법을 설정합니다.  "include" 설정 시 "Invalid Date" 문자열로 변환합니다. "exclude" 설정 시 빈문자열("")로 변환합니다.  값 생략 시 saveinvaliddate 속성값이 적용됩니다. |

**Return**: `String` — DataSet 의 데이터를 XML 형식으로 변환한 문자열을 반환합니다.

**Remark**
- 저장시 XML의 인코딩은 "utf-8" 형식으로 합니다.

- 매개변수인 strSaveType은 4가지 종류 중 하나로 설정할 수 있습니다.
  (View 타입을 제외한 나머지 타입은 필터링된 레코드를 포함합니다. 
  그리고 물리적으로 데이터가 들어가 있는 순서대로 문자열로 변환됩니다)

    1) Normal 타입인 경우에는 Insert, Update된 레코드를 포함합니다.
       레코드별 열의 형태는 원래 데이터셋 구성과 같습니다.

    2) All 타입인 경우에는 Insert, Update, Delete된 모든 레코드를 포함합니다. 
       Record 태그에 Type 속성(attribute)이 추가되어 있습니다.
       Insert된 레코드는 Type이 Insert, Update된 레코드는 Type이 Update, Delete된 레코드는 Type이 Delete로 표현됩니다.
       그리고 Update된 레코드는 Org_Record 태그가 추가되어 있어 변경사항을 알 수 있습니다.

    3) Update 타입인 경우에는 변경된 레코드만 포함합니다.
       Record 태그에 Type 속성이 추가되어 있습니다.
       Insert된 레코드는 Type이 Insert, Update된 레코드는 Type이 Update, Delete된 레코드는 Type이 Delete로 표현됩니다.
       그리고 Update된 레코드는 Org_Record 태그가 추가되어 있어 변경사항을 알 수 있습니다.

    4) View 타입인 경우에는 현재 보이는 레코드 순서대로 Normal 형식으로 저장해 줍니다.

---

## setColumn

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 Column 값을 변경하는 메소드입니다.

**Syntax**
```javascript
Dataset.setColumn( nRow, nColIdx, varVal )
Dataset.setColumn( nRow, strColID, varVal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 값을 변경하려는 Column 의 Row 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 0 입니다. |
| `nColIdx` | Number | 값을 변경하려는 Column 의 인덱스를 설정합니다. |
| `strColID` | String | 값을 변경하려는 Column 의 ID 를 설정합니다. |
| `varVal` | Variant | 변경하려는 Column 의 값을 설정합니다. |

**Return**: `Boolean` — Column 값 변경에 성공하면 true 를 반환합니다.  Column 값 변경에 실패하면 false 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 변경 대상에서 제외합니다.
   필터링 된 Row 를 변경 대상에 포함하려면 setColumnNF() 메소드를 사용하여야 합니다.

- setColumn() 메소드는 특정 Row 에 Column 이 존재하는 경우에만 정상적으로 실행됩니다.
   새로운 Row 를 추가하려면 addRow() 또는 InsertRow() 메소드를 사용하여야 합니다.

- nRow 에 설정한 인덱스값이 유효할 경우 setColumn() 메소드로 Const Column 의 값을 변경할 수 있습니다.

- keystring 속성을 사용하여 그룹화한 경우 그룹정보를 가진 논리적 Row 의 Column 값은 변경할 수 없습니다.

- setColumn() 메소드로 Column 값이 변경되면 cancolumnchange → oncolumnchanged 순서로 이벤트가 발생합니다.
   단, 기존 Column 값과 동일한 값을 설정하면 변경처리가 되지 않으므로 이벤트가 발생하지 않습니다.

- cancolumnchange 이벤트에서 false 를 리턴하면 oncolumnchanged 이벤트가 발생하지 않으며 
   Column 값이 변경되지 않으므로 setColumn() 메소드도 false 를 반환합니다.

- nRow, nColIdx 에 undefined, null 와 같은 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 일 때 유효하지 않은 값을 설정하면 Column 값이 변경되지 않고 false 를 반환합니다.

---

## setColumnNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 Column 값을 변경하는 메소드입니다.

**Syntax**
```javascript
Dataset.setColumnNF( nRow, nColIdx, varVal )
Dataset.setColumnNF( nRow, strColID, varVal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 값을 변경하려는 Column 의 Row 인덱스를 설정합니다.  첫번째 Row 의 인덱스값은 0 입니다. |
| `nColIdx` | Number | 값을 변경하려는 Column 의 인덱스를 설정합니다. |
| `strColID` | String | 값을 변경하려는 Column 의 ID 를 설정합니다. |
| `varVal` | Variant | 변경하려는 Column 의 값을 설정합니다. |

**Return**: `Boolean` — Column 값 변경에 성공하면 true 를 반환합니다.  Column 값 변경에 실패하면 false 를 반환합니다.

**Remark**
- 필터링 되어 보이지 않는 Row 는 변경 대상에 포함합니다.
   필터링 된 Row 를 변경 대상에서 제외하려면 setColumn() 메소드를 사용하여야 합니다.

- setColumnNF() 메소드는 특정 Row 에 Column 이 존재하는 경우에만 정상적으로 실행됩니다.
   새로운 Row 를 추가하려면 addRow() 또는 InsertRow() 메소드를 사용하여야 합니다.

- nRow 에 설정한 인덱스값이 유효할 경우 setColumnNF() 메소드로 Const Column 의 값을 변경할 수 있습니다.

- keystring 속성을 사용하여 그룹화한 경우 그룹정보를 가진 논리적 Row 의 Column 값은 변경할 수 없습니다.

- setColumnNF() 메소드로 Column 값이 변경되면 cancolumnchange → oncolumnchanged 순서로 이벤트가 발생합니다.
   단, 기존 Column 값과 동일한 값을 설정하면 변경처리가 되지 않으므로 이벤트가 발생하지 않습니다.

- cancolumnchange 이벤트에서 false 를 리턴하면 oncolumnchanged 이벤트가 발생하지 않으며 
   Column 값이 변경되지 않으므로 setColumnNF() 메소드도 false 를 반환합니다.

- nRow, nColIdx 에 undefined, null 와 같은 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 되므로 주의하여야 합니다.

- datatyperule 속성값이 "2.0" 일 때 유효하지 않은 값을 설정하면 Column 값이 변경되지 않고 false 를 반환합니다.

---

## setConstColumn

DataSet 에 정의된 Const Column 의 상수값을 변경하는 메소드입니다.

**Syntax**
```javascript
Dataset.setConstColumn(nColIdx,varVal)
Dataset.setConstColumn(strColID,varVal)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nColIdx` | Number | 값을 변경할 Const Column 의 인덱스를 설정합니다. |
| `strColID` | String | 값을 변경할 Const Column 의 ID 를 설정합니다. |
| `varVal` | Variant | 변경할 값을 설정합니다. |

**Return**: `Boolean` — 상수값 변경에 성공하면 true 를 반환합니다. 상수값 변경에 실패하면 false 를 반환합니다.

**Remark**
- setConstColumn() 메서드가 호출되면 Dataset 오브젝트에서 다음과 같이 이벤트가 발생합니다. 
  cancolumnchange 이벤트에서 true를 반환하면 oncolumnchanged 이벤트가 발생합니다. 
  cancolumnchange 이벤트에서 false를 반환하면 값은 변경되지 않으므로 oncolumnchanged 이벤트가 발생하지 않습니다. 
  이때, setConstColumn() 메서드의 반환값도 false 가 됩니다. 
  같은 값으로 변경하면 변경처리가 되지 않으므로 Dataset 오브젝트의 이벤트가 발생하지 않습니다. 

- nColIdx에 undefined, null 등의 NaN 값을 입력하면 ECMA 정수 변환 규칙에 따라 0이 되므로 주의해야 합니다.

---

## setContents

Dataset 의 내부 구성 컨텐츠를 동적으로 설정하는 메소드입니다.

**Syntax**
```javascript
Dataset.setContents( strContents );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCont` | String | Dataset 의 내부 구성 컨텐츠 정보를 XML 형태의 문자열로 설정합니다.  "<ColumnInfo> ... </ColumnInfo> <Rows> ... </Rows>" 형태로 ColumnInfo 와 Rows 태그를 포함하여 설정하여야 합니다. |

**Return**: `Boolean` — 컨텐츠 생성에 성공하면 true 를 반환합니다. 컨텐츠 생성에 실패하면 false 를 반환합니다.  문자열 파싱 중 오류가 발생하거나 잘못된 태그(오타 포함) 정의에 의해 오류가 발생할 경우 컨텐츠 생성에 실패하게 됩니다.

**Remark**
- setContents() 메소드는 동기(Sync)로 수행되며 메소드 수행이 완료될 때까지 스크립트 수행이 중단됩니다.

- 컨텐츠 생성에 성공하면 기존의 Column 정보와 데이터(Row)는 삭제되고 strCont 에 설정한 컨텐츠가 Dataset 에 로드됩니다.

---

## setEventHandler

Dataset 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
Dataset.setEventHandler( strEventID, objFunc, objTarget )
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

Dataset 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
Dataset.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

## setRowType

필터링 되어 보이지 않는 Row 를 제외한 범위에서 특정 Row 의 타입값을 변경하는 메소드입니다.

**Syntax**
```javascript
Dataset.setRowType( nRow, nRowType )
Dataset.setRowType( nRow, strRowType )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 타입을 변경할 Row 의 인덱스를 설정합니다. |
| `nRowType` | Number | 변경할 Row 타입값을 숫자로 설정합니다. |
| `strRowType` | String | 변경할 Row 타입값을 문자로 설정합니다.  "i", "I" 설정 시 "Dataset.ROWTYPE_INSERT" 로 적용됩니다. "u", "U" 설정 시 "Dataset.ROWTYPE_UPDATE" 로 적용됩니다. "d", "D" 설정 시 "Dataset.ROWTYPE_DELETE" 로 적용됩니다.  이외의 값 설정 시 "Dataset.ROWTYPE_NORMAL" 로 적용됩니다. |

**Return**: `Boolean` — 타입 변환에 성공하면 "true" 를 반환합니다. 타입 변환에 실패하면 "false"를 반환합니다.

**Remark**
- setRowType() 메소드는 updatecontrol 속성값이 "false" 일 때만 동작합니다.
   updatecontrol 속성이 "true" 이면 setRowType() 메소드는 항상 "false" 를 반환합니다.

- 필터링 되어 보이지 않는 Row 는 변경대상에서 제외합니다.
   필터링 된 Row 를 변경대상에 포함하려면 setRowTypeNF() 메소드를 사용하여야 합니다.

- setRowType() 메소드로 Row  의 타입을 변경하면 onrowsetchanged 이벤트가 발생합니다.
   이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGESTATUS"가 됩니다.

- nRowType 또는 strRowType 에는 다음과 같은 값을 지정할 수 있습니다.

	
		Row Type
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	


- 매개변수인 nRow 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

**See Also**: setRowTypeNF

---

## setRowTypeNF

필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Row 의 타입값을 변경하는 메소드입니다.

**Syntax**
```javascript
Dataset.setRowTypeNF( nRow, nRowType )
Dataset.setRowTypeNF( nRow, strRowType )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRow` | Number | 타입을 변경할 Row 의 인덱스를 설정합니다. |
| `nRowType` | Number | 변경할 Row 타입값을 숫자로 설정합니다. |
| `strRowType` | String | 변경할 Row 타입값을 문자로 설정합니다.  "i", "I" 설정 시 "Dataset.ROWTYPE_INSERT" 로 적용됩니다. "u", "U" 설정 시 "Dataset.ROWTYPE_UPDATE" 로 적용됩니다. "d", "D" 설정 시 "Dataset.ROWTYPE_DELETE" 로 적용됩니다.  이외의 값 설정 시 "Dataset.ROWTYPE_NORMAL" 로 적용됩니다. |

**Return**: `Boolean` — 타입 변환에 성공하면 "true" 를 반환합니다. 타입 변환에 실패하면 "false"를 반환합니다.

**Remark**
- setRowTypeNF() 메소드는 updatecontrol 속성값이 "false" 일 때만 동작합니다.
   updatecontrol 속성이 "true" 이면 setRowTypeNF() 메소드는 항상 "false" 를 반환합니다.

- 필터링 되어 보이지 않는 Row 를 변경대상에 포함합니다.
   필터링 된 Row 를 변경대상에서 제외하려면 setRowType() 메소드를 사용하여야 합니다.

- setRowTypeNF() 메소드로 Row 의 타입을 변경하면 onrowsetchanged 이벤트가 발생합니다.
   이 때, onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_CHANGESTATUS"가 됩니다.

- nRowType 또는 strRowType 에는 다음과 같은 값을 지정할 수 있습니다.

	
		Row Type
		Value
		Description
	

	
		Dataset.ROWTYPE_EMPTY
		0
		존재하지 않는 행의 상태
	

	
		Dataset.ROWTYPE_NORMAL
		1
		초기 행의 상태
	

	
		Dataset.ROWTYPE_INSERT
		2
		추가된 행의 상태
	

	
		Dataset.ROWTYPE_UPDATE
		4
		수정된 행의 상태
	

	
		Dataset.ROWTYPE_DELETE
		8
		삭제된 행의 상태
	

	
		Dataset.ROWTYPE_GROUP
		16
		그룹 정보 행의 상태
	


- 매개변수인 nRow 에 undefined, null 등의 NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 "0" 이 됩니다.
   사용 시 주의하시기 바랍니다.

**See Also**: setRowType

---

## updateColID

Const Column 을 포함하여 DataSet 에 정의된 Column 의 ID 를 변경하는 메소드입니다.

**Syntax**
```javascript
Dataset.updateColID(nCol, strNewColID)
Dataset.updateColID(strOldColID, strNewColID)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCol` | Number | ID 를 변경할 Column 의 인덱스를 설정합니다.  첫번째 Column 의 인덱스값은 "0" 입니다. |
| `strOldColID` | String | ID 를 변경할 Column 의 ID 를 설정합니다. |
| `strNewColID` | String | 변경할 Column 의 새 ID 를 문자열로 설정합니다. |

**Return**: `Number` — ID 가 변경된 Column 의 인덱스를 반환합니다. 만일 지정한 Column 이 존재하지 않거나 ID 가 동일한 Column 이 있을 경우 "-1" 을 반환합니다.

**Remark**
- 지정한 Column 이 존재하는 경우에만 수행됩니다.

- Const Column 과 일반 Column 모두를 대상으로 합니다.
  때문에 지정한 Column 이 Const Column 일 경우 반환되는 Column 의 인덱스는 
  "일반 Column 갯수" + "Const Column" 의 위치입니다.

- ID 변경이 성공하면 onrowsetchanged 이벤트가 발생하며 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- nCol 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용시 주의하시기 바랍니다.

---

## updateConstColID

DataSet 에서 지정한 Const Column 의 ID를 변경하는 메소드입니다.

**Syntax**
```javascript
Dataset.updateConstColID(nCol, strNewColID)
Dataset.updateConstColID(strOldColID, strNewColID)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCol` | Number | ID 를 변경할 Const Column 의 인덱스를 설정합니다.  첫번째 Column 의 인덱스값은 "0" 입니다. |
| `strNewColID` | String | 변경할 Const Column 의 새 ID 를 문자열로 설정합니다. |
| `strOldColID` | String | ID 를 변경할 Const Column 의 ID 를 설정합니다. |

**Return**: `Number` — ID 가 변경된 Const Column 의 인덱스를 반환합니다. 만일 지정한 Const Column 이 존재하지 않거나 ID 가 동일한 Const Column 이 있을 경우 "-1" 을 반환합니다.

**Remark**
- 지정한 Const Column 이 존재하는 경우에만 수행됩니다.

- Const Column 의 ID 변경이 성공하면 onrowsetchanged 이벤트가 발생하며 e.reason 속성값은 "REASON_CHANGELAYOUT" 가 됩니다.

- nCol 에 "undefined, null" 등의 "NaN" 값을 입력하면 ECMA의 정수 변환 규칙에 따라 "0" 이 됩니다.
  사용시 주의하시기 바랍니다.

---

## updateSortGroup

DataSet 에 로드된 데이터를 그룹핑 또는 정렬하는 메소드입니다.

**Syntax**
```javascript
Dataset.updateSortGroup( [strKeyString] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strKeyString` | String | 그룹핑 또는 정렬의 기준이 되는 조건식을 문자열로 설정합니다.  값 생략 시 keystring 속성에 설정된 값이 조건식으로 적용됩니다. |

**Return**: `Boolean` — 그룹핑 또는 정렬에 성공하면 true 를 반환합니다. 그룹핑 또는 정렬에 실패하면 false 를 반환합니다.  두개 이상의 파라미터를 지정한 경우 false 를 반환합니다. keystring 속성값이 설정되지 않은 상태에서 파라미터를 생략하면 false 를 반환합니다.

**Remark**
- <strKeyString> 파라미터의 조건식 작성방법은 "keystring" 속성을 참고하세요.

- updateSortGroup() 메소드 실행으로 데이터가 그룹핑 또는 정렬되면 onrowsetchanged 이벤트가 발생합니다.
   이 때, onrowsetchanged 이벤트에 전달되는 DSRowsetChangeEventInfo 의 reason 속성은 "REASON_SORTGROUP" 값을 갖습니다.

- datatyperule 속성값이 "2.0" 인 경우 정렬 시 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
   > Column 타입이 "STRING" 이면 EmptyString("") < [Value] < undefined==null==NaN 순서로 정렬됩니다.
   > Column 타입이 "INT", "FLOAT", "BIGDECIMAL" 이면 -Infinity < [-Number] < 0 < [+Number] < Infinity < EmptyString("") < undefined==null==NaN 순서로 정렬됩니다.
   > Column 타입이 "DATE", "TIME", "DATETIME" 이면 EmptyString("") < [Date] < [Invalid Date] < undefined==null==NaN 순서로 정렬됩니다.


◆ web runtime environment 제약

- 조건식에 사용된 Column 의 데이터형이 "String" 인 경우 데이터 정렬 시 웹브라우저에서 제공하는 javascript 내장함수 localCompare() 메소드를 사용합니다.
   웹브라우저에서 제공하는 내장함수를 사용하므로 웹브라우저에 따라 정렬결과에 차이가 날 수 있습니다.

---
