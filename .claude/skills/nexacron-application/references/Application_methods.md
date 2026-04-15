# Application Methods

| Method | Description |
|--------|-------------|
| `addEventHandler()` | Application 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 Application 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `addTray()` | 동적으로 생성한 Tray 를 Application 에 추가하는 메소드입니다. |
| `addVariable()` | Application 의 AppVariables 영역에 변수를 추가하는 메소드입니다. |
| `alert()` | Application 의 경고 대화상자를 표시하는 메소드입니다. |
| `cancelTransaction()` | 진행중인 트렌젝션을 중지 시키는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다 |
| `confirm()` | Application 의 선택 대화상자를 표시하는 메소드입니다. |
| `exit()` | 실행중인 넥사크로 어플리케이션을 종료시키는 메소드입니다. |
| `findEventHandler()` | Application 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getActiveForm()` | Application 에서 현재 활성화된 Form 객체를 반환하는 메소드입니다. |
| `getActiveFrame()` | Application 에서 현재 활성화된 Frame 객체를 반환하는 메소드입니다. |
| `getEventHandler()` | Application 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `insertEventHandler()` | Application 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `isExistVariable()` | Application 의 AppVariables 영역에 특정 변수의 존재여부를 반환하는 메소드입니다. |
| `lookup()` | 인수로 전달된 오브젝트를 Application 전체를 대상으로 검색하여 반환하는 메소드입니다. |
| `removeEventHandler()` | Application 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | Application 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `removeTray()` | Application 의 trays 속성에 등록된 Tray 오브젝트를 삭제하는 메소드입니다. |
| `removeVariable()` | Application 의 AppVariables 영역에서 변수를 제거하는 메소드입니다. |
| `setEventHandler()` | Application 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | Application 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setVariable()` | Application 의 AppVariables 영역에 변수를 추가 또는 값을 설정하는 메소드입니다. |
| `trace()` | 추적 로그를 남기는 메소드입니다. |
| `transaction()` | Application 영역에 정의된 Dataset 의 데이터를 갱신하기 위한 서비스를 호출하고, 트랜잭션이 완료되면 콜백함수을 실행하는 메소드입 |

---

## addEventHandler

Application 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
Application.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 이벤트 발생 시 수행될 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

---

## addEventHandlerLookup

함수를 검색하여 Application 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
Application.addEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 이벤트 발생 시 수행될 핸들러 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 핸들러 함수를 검색할 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다 |

**Return**: `Number` — 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**
- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
  검색된 함수가 있다면 이벤트에 핸들러 함수로 추가합니다.

---

## addTray

동적으로 생성한 Tray 를 Application 에 추가하는 메소드입니다.

**Syntax**
```javascript
Application.addTray(strTrayID, objTray)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strTrayID` | String | Application 에 추가될 Tray 오브젝트의 ID 를 설정합니다. |
| `objTray` | Object | Application 에 추가될 Tray 오브젝트를 설정합니다. |

**Return**: `Number` — trays 속성에 추가된 Tray 오브젝트의 인덱스를 반환합니다.  Tray 오브젝트 추가에 실패했을 경우 "-1" 을 반환합니다.

**Remark**
- trays 속성을 통해 현재 등록되어 있는 Tray 들을 확인할 수 있습니다.

---

## addVariable

Application 의 AppVariables 영역에 변수를 추가하는 메소드입니다.

**Syntax**
```javascript
Application.addVariable( strID, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 추가될 변수의 ID를 설정합니다. |
| `varValue` | String | 추가될 변수가 갖는 값을 설정합니다. |

**Return**: `Number` — 변수 추가에 성공하면 "1" 을 반환합니다. 변수 추가에 실패하면 "0" 을 반환합니다. 동일한 변수가 존재하면 "-1" 을 반환합니다.

**Remark**
- AppVariables 영역에 이미 존재하는 변수명일 경우에는 메소드가 수행되지 않습니다.

- Environment 영역에 변수를 추가하기 위해서는 setEnvironmentVariable() 메소드를 사용하여야 합니다.

- 통신 시 사용되는 Cookie 를 추가하기 위해서는 setCookieVariable() 메소드를 사용하여야 합니다.

---

## alert

Application 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
Application.alert( strText )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다 |

**Remark**
- 현재 활성화되어 있는 Form 의 중앙에 대화상자를 표시합니다.

---

## cancelTransaction

진행중인 트렌젝션을 중지 시키는 메소드입니다.

**Syntax**
```javascript
cancelTransaction( [strSvcID] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSvcID` | String | 중지 시킬 트랜잭션의 ID 를 설정합니다.  값 생략 시 트랜잭션 중 ESC 키를 입력했을 때와 동일하게 통신을 강제로 중지시킵니다. |

**Remark**
- Sync 로 동작되는 트렌잭션에는 적용되지 않습니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다

**Syntax**
```javascript
Application.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID 를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하시기 바랍니다.

---

## confirm

Application 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
Application.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다. |
| `strCaption` | String | 대화상자의 TitleBar 에 표시할 텍스트를 설정합니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |
| `strType` | String | 대화상자의 왼쪽 영역에 표시될 아이콘 종류를 문자열로 설정합니다.  "error" 설정 시 빨간색 "X" 모양 아이콘이 표시됩니다. "question" 설정 시 물음표("?") 모양 아이콘이 표시됩니다. "warning" 설정 시 노랑색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다. "information" 설정 시 파란색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다.  값을 설정하지 않으면 아이콘을 표시하지 않습니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |

**Return**: `Boolean` — 표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다. 표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**
- 현재 활성화되어 있는 Form 의 중앙에 대화상자를 표시합니다.

---

## exit

실행중인 넥사크로 어플리케이션을 종료시키는 메소드입니다.

**Syntax**
```javascript
Application.exit()
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;
objApp.exit() ;
```

**Remark**
- exit() 메소드 이후에 정의된 스크립트까지 실행하고 어플리케이션을 종료합니다.
   단, exit() 메소드 이후 스크립트에 정의된 alert(), confirm() 메소드는 실행되지 않습니다.

◆ WRE 제약

- 애플리케이션을 외부 페이지 링크 또는 window.open 함수로 열지 않고 직접 브라우저 주소창에 URL을 입력하고 실행할 때 발생하는 제약사항입니다.
- 스크립트에서 exit 메소드 실행 시 IE를 제외한 브라우저에서는 열려있는 Form이 종료되고 실행 중인 넥사크로 애플리케이션을 종료시키지만 현재 브라우저 탭은 닫히지 않으며 콘솔에 스크립트 에러가 표시됩니다.
- 브라우저 탭은 닫히지 않지만 애플리케이션 종료 요청은 처리되기 때문에 exit 메소드 실행 시 onexit, onbeforeexit 이벤트가 발생합니다.

**See Also**: userNotify

---

## findEventHandler

Application 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Application.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 찾을 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 찾으려고 하는 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 찾으려고 하는 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에서 찾으려고 하는 핸들러 함수의 인덱스를 반환합니다.  찾으려고 하는 핸들러 함수가 존재하지 않는다면 "-1"을 반환합니다.

**Remark**
- 이벤트에 등록된 핸들러 함수의 인덱스는 "0"부터 시작합니다.

---

## getActiveForm

Application 에서 현재 활성화된 Form 객체를 반환하는 메소드입니다.

**Syntax**
```javascript
Application.getActiveForm()
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ; 
var objForm = objApp.getActiveForm() ;
```

**Return**: `Object` — 현재 포커스를 가진 컴포넌트의 부모 Form 을 반환합니다.  Div 와 같은 컨테이너 컴포넌트에 속한 컴포넌트에 포커스가 있을 경우 Div 의 부모 Form 을 반환합니다.

---

## getActiveFrame

Application 에서 현재 활성화된 Frame 객체를 반환하는 메소드입니다.

**Syntax**
```javascript
Application.getActiveFrame()
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;
var objForm = objApp.getActiveFrame() ;
```

**Return**: `Object` — 현재 포커스를 가진 Form 의 부모 Frame 을 반환합니다.  Modal, Modeless 자식 Frame 을 포함하여 현재 포커스를 가진 Frame 이 반환됩니다.

**Remark**
모달, 모덜리스 자식프레임을 포함하여 현재 포커스를 가진 프레임이 반환됩니다.

프레임세트내 프레임이 활성화된 경우, 활성화된 폼을 담고 있는 프레임이 반환됩니다.

---

## getEventHandler

Application 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
Application.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  인덱스는 "0"부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 "null"을 반환합니다.

---

## insertEventHandler

Application 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
Application.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## isExistVariable

Application 의 AppVariables 영역에 특정 변수의 존재여부를 반환하는 메소드입니다.

**Syntax**
```javascript
Application.isExistVariable( strID );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 존재여부를 확인할 변수의 ID 를 설정합니다. |

**Return**: `Boolean` — 변수가 AppVariables 영역에 존재하면 "true" 를 반환합니다. 변수가 AppVariables 영역에 존재하지 않으면 "false" 를 반환합니다.

---

## lookup

인수로 전달된 오브젝트를 Application 전체를 대상으로 검색하여 반환하는 메소드입니다.

**Syntax**
```javascript
Application.lookup( strObjectID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strObjectID` | String | 검색하여 찾고자 하는 오브젝트의 ID를 문자열로 설정합니다. |

**Return**: `Object` — 검색하여 찾아낸 오브젝트를 반환합니다.

---

## removeEventHandler

Application 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Application.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 제거할 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 "1"을 반환합니다. 핸들러 함수 제거에 실패하면 "0"을 반환합니다.

**Remark**
- 추가된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하시기 바랍니다.

---

## removeEventHandlerLookup

Application 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Application.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 제거할 핸들러 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 "1"을 반환합니다. 핸들러 함수 제거에 실패하면 "0"을 반환합니다

**Remark**
- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0" 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## removeTray

Application 의 trays 속성에 등록된 Tray 오브젝트를 삭제하는 메소드입니다.

**Syntax**
```javascript
application.removeTray([strID]);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strId` | String | Application 의 trays 속성에서 삭제될 Tray 오브젝트의 ID 를 설정합니다.  값을 설정하지 않으면 등록된 전체 Tray 오브젝트가 삭제됩니다. |

---

## removeVariable

Application 의 AppVariables 영역에서 변수를 제거하는 메소드입니다.

**Syntax**
```javascript
Application.removeVariable( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 제거될 변수의 ID를 설정합니다. |

**Remark**
- Environment 영역에 있는 변수를 제거하기 위해서는 removeEnvironmentVariable() 메소드를 사용하여야 합니다.

- 통신 시 사용되는 Cookie 를 제거하기 위해서는 removeCookieVariable() 메소드를 사용하여야 합니다.

---

## setEventHandler

Application 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
Application.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 기존 핸들러 함수를 대체할 함수를 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 "0"을 반환합니다. 첫번째 핸들러 함수 변경에 실패하면 "-1"을 반환합니다.

**Remark**
- 인덱스가 "0"번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 "0"번인 핸들러 함수가 없다면 "0"번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.

---

## setEventHandlerLookup

Application 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
Application.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 기존 핸들러 함수를 대체할 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수를 검색할 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 "0"을 반환합니다. 첫번째 핸들러 함수 변경에 실패하면 "-1"을 반환합니다.

**Remark**
- 인덱스가 "0"번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 "0"번인 핸들러 함수가 없다면 "0"번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.

---

## setVariable

Application 의 AppVariables 영역에 변수를 추가 또는 값을 설정하는 메소드입니다.

**Syntax**
```javascript
Application.setVariable( strID, varValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 추가될 변수명을 설정합니다. |
| `varValue` | String | 추가될 변수가 갖는 값을 설정합니다. |

**Return**: `Number` — 변수 추가에 성공하면 "1" 을 반환합니다. 변수 추가에 실패하면 "0" 을 반환합니다. 동일한 변수가 존재하면 "-1" 을 반환합니다.

**Remark**
- AppVariables 영역에 이미 존재하는 변수명일 경우에는 값을 변경합니다.

- Environment 영역에 변수를 추가하기 위해서는 setEnvironmentVariable() 메소드를 사용하여야 합니다.

- 통신 시 사용되는 Cookie 를 추가하기 위해서는 setCookieVariable() 메소드를 사용하여야 합니다.

---

## trace

추적 로그를 남기는 메소드입니다.

**Syntax**
```javascript
Application.trace( strLog )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strLog` | String | 로그로 출력할 문자열을 설정합니다. |

**Remark**
- trace() 메소드로 출력할 수 있는 로그의 최대 길이는 브라우저 버전 및 종류에 따라 달라질 수 있습니다.

**See Also**: tracemode

---

## transaction

Application 영역에 정의된 Dataset 의 데이터를 갱신하기 위한 서비스를 호출하고, 트랜잭션이 완료되면 콜백함수을 실행하는 메소드입니다.

**Syntax**
```javascript
Application.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArgument,strCallbackFunc[,bAsync[,nDataType[,bCompress]]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSvcID` | String | 트랜잭션을 구분하기 위한 ID를 문자열로 설정합니다. |
| `strURL` | String | 트랜잭션을 요청할 서버페이지 주소를 문자열로 설정합니다.  strURL ::= <absolute-url> | <relative-url>  <absolute-url> 서버에 배포된 페이지 주소를 문자열로 설정합니다. 웹에 접근 가능한 환경이어야 하고, Cross Domain 상황이면 사용에 제한이 있습니다.  <relative-url> TypeDefinition 의 Services 영역에 정의된 Prefix 를 사용한 형식으로 설정합니다. 또는 ADL 위치를 기준으로 한 상대경로를 사용하여 설정합니다. |
| `strInDatasets` | String | 데이터 처리를 위해 서버로 보낼 DataSet 의 ID를 문자열로 설정합니다. DataSet 은 Application 의 AppVariables 영역에 정의되어 있어야 합니다. "입력ID=DataSet ID" 형식으로 설정하며, 빈칸으로 구분하여 여러개의 DataSet 을 보낼 수 있습니다.  ex) "input1=DataSet00 input2=DataSet01"  Application 하위 오브젝트의 Dataset 오브젝트는 아래와 같이 설정할 수 있습니다.  ex) "input1=mainframe.frame.form.Dataset00 input2=Dataset01" |
| `strOutDatasets` | String | 서버에서 보내는 데이터를 받을 DataSet 의 ID를 문자열로 설정합니다. DataSet 은 Application 의 AppVariables 영역에 정의되어 있어야 합니다. "DataSet ID=출력ID" 형식으로 설정하며, 빈칸으로 구분하여 여러개의 DataSet 을 받을 수 있습니다.  ex) "DataSet00=output0 DataSet01=output1"  아래와 같은 형식으로 하나의 Ouput Dataset(출력ID)을 여러 개의 Dataset에서 받을 수 있습니다.  ex) "DataSet00=output0 DataSet01=output0"  Application 하위 오브젝트의 Dataset 오브젝트는 아래와 같이 설정할 수 있습니다.  ex) "mainframe.frame.form.Dataset00=ouput0 Dataset01=output1" |
| `strArgument` | String | 서버페이지에 보낼 정보를 문자열로 설정합니다. "변수ID=변수값" 형식으로 설정하며, 빈칸으로 구분하여 여러개의 인수값을 보낼 수 있습니다.  ex) "argu0=test argu1=30" |
| `strCallbackFunc` | String | 트랜젝션 결과를 받을 때 호출될 콜백함수명을 문자열로 설정합니다. 콜백함수는 Application 영역에 정의되어 있어야 합니다. |
| `bAsync` | Boolean | 트랜잭션을 비동기(ASync)로 처리할지 설정합니다.  "true" 설정 시 트랜잭션을 비동기(ASync)로 처리하여 트랜잭션의 완료와 관계없이 스크립트가 수행됩니다. "false" 설정 시 트랜잭션을 동기(Sync)로 처리하여 트랜잭션이 완료될 때까지 스크립트 수행이 중단됩니다.  값을 설정하지 않으면 "true" 로 적용됩니다. |
| `nDataType` | Number | 트랜잭션 시 클라이언트에서 서버로 보내는 데이터의 형태를 설정합니다.  "0" : XML 형식 "1" : Binary 형식 "2" : SSV 형식 "3" : JSON 형식  값을 설정하지 않으면 "0" 으로 적용됩니다. |
| `bCompress` | Boolean | 트랜잭션 시 데이터를 압축시킬 지 설정합니다.  "true" 설정 시 데이터를 압축하여 송수신합니다. "false" 설정 시 데이터를 압축하지 않고 송수신합니다.  값을 설정하지 않으면 "false" 로 적용됩니다. |

**Remark**
- Application 과 Form 에 정의된 transaction() 메소드는 기본적인 기능은 동일하지만 DataSet 과 콜백함수를 찾는 영역이 다릅니다.
  > Application 의 transaction() 메소드는 DataSet 과 콜백함수가 Application 영역에 정의되어 있어야 합니다.
  > 반면 Form 의 transaction() 메소드는 Form 영역에서 DataSet 과 콜백함수를 우선적으로 검색하지만,
  > Form 영역에 DataSet 과 콜백함수가 정의되어 있지 않으면 상위 영역으로 검색을 확장시킵니다.
  > Form 이 Container Component 에 연결되어 있으면 상위 컴포넌트도 검색 영역에 포함됩니다.
  > Form 영역에서 strInDatasets, strOutDatasets 파라미터 설정 시 "."을 포함한 형식을 사용하는 경우에는 상위 영역으로 검색을 확장하지 않습니다.

- 트랜잭션은 기본적으로 비동기 방식으로 동작합니다.
   예외적으로 strURL 에 로컬 경로를 설정하는 경우에는 bAsync 옵션과 무관하게 동기(Sync) 방식으로 동작합니다.

- strInDatasets 의 추가 옵션
   strInDatasets 에 각각의 DataSet ID 뒤에 ":U", ":A", ":N" 의 옵션을 붙일 수 있습니다.
  > ":U" 는 갱신된 정보만을 보냅니다.
  > ":A" 는 모든 정보를 보냅니다.
  > ":N" 은 현재 삭제한 데이터를 제외한 정보를 Normal 상태로 보냅니다. 지정하지 않은 DataSet 은 Normal 로 동작합니다.

- strOutDatasets 관련 주의사항
   strOutDatasets 으로 입력받는 DataSet 은 Datasetid.load() 와 마찬가지로 
   기존에 가진 열/레코드 대신 수신받은 DataSet 의 열/레코드로 모두 변경됩니다.

- strCallbackFunc 에 관한 주의사항
   strCallbackFunc 를 "Transaction_Callback" 으로 설정할 경우,
   해당 Application 영역에는 반드시 this.transaction_Callback = function(strSvcID, nErrorCode, strErrorMag) 이 존재해야 합니다.
   이 콜백 함수는 위와 같은 형태이며, 콜백 함수의 strSvcID 는 입력된 strSvcID 와 동일합니다.

- 트랜잭션 수행 후 서버로 부터 전달된 파라미터가 있을 경우 처리되는 사항
  > 파라미터의 변수명을 Application > Environment 영역 순서로 찾아 처음 일치하는 영역의 변수값만 업데이트합니다.
     전체 영역에서 일치하는 변수가 없을 경우에는 전달된 파라미터값이 무시됩니다.

- 트랜잭션 수행 후 서버로 부터 전달된 Return XML 의 ErrorCode 파라미터 관련 주의사항
  > ErrorCode 가 0 미만의 음수이면 트랜잭션이 실패로 처리되고, Input DataSet 의 상태와 바인딩된 컴포넌트는 리드로(redraw) 되지 않습니다.
     단, Environment 의 datasetloadtype 속성값이 "errorallow" 인 경우는 Output DataSet 에 데이터를 로드합니다.
  > ErrorCode 가 0 이상이면 트랜잭션이 성공으로 처리되고, Input DataSet 의 상태는 "Normal" 로 변경되며 바인딩된 컴포넌트는 리드로(redraw) 됩니다.
  > 서버로 부터 전달된 데이터가 없을 경우 (서버에서 HttpPlatformResponse 자체를 실행하지 않음)에는
     ErrorCode 는 -1 값으로, ErrorMsg 는 "Stream Data is null!" 값으로 설정된 후 콜백 함수가 호출됩니다.

- 통신을 강제로 중지시키는 방법
   트랜잭션 처리 중이라도 ESC 키를 누르면 통신을 강제로 중지시킬 수 있습니다.

- Get/Post 방식관련 참고사항  
   1. strArgument 와 strInDatasets 이 "" 이고, Environment 의 Cookies 영역에 변수가 없으면 GET 방식으로 동작합니다.
   2. strArgument 나 strInDatasets 에 값이 있거나 Environment 의 Cookies 영역에 변수가 있으면 POST로 동작합니다.
   3. 위 1번의 상태에서 addcookietovariable 값이 "true" 이면 서버와의 첫 통신시에는 GET 방식으로 동작하고 이후부터는 서버에서 유입되는
      Cookie 의 유무에 따라 Cookie 가 있으면 POST, 없으면 GET 방식으로 동작합니다.
     (addcookietovariable 값이 "true"이면 Cookie 가 Environment 의 Cookies 영역에 변수로 자동 추가 되기 때문.)

- 서버로부터 데이터를 Chunked 방식으로 여러번에 걸쳐서 받을 경우 progressload 속성으로 데이터를 로드하는 방식을 설정할 수 있습니다.
   자세한 내용은 "Dataset > progressload" 항목을 참고하시기 바랍니다.

- 트랜잭션을 위한 통신 프로토콜은 HTTP/1.1 입니다.

- 넥사크로 스튜디오를 사용해 넥사크로를 실행했을 때 트랜잭션을 수행하면 CacheLevel 의 설정과 상관없이 "none" 으로 동작합니다.

- SSV 타입 참고사항
   > 넥사크로 Web 버전 과 Mobile 버전 연동을 위하여 CSV 포맷을 확장하여 사용합니다.
   > 확장내역 : RowType 추가, 구분자 변경(콤마 -> US, 줄바꿈(CR/LF) -> RS)
   > Empty String 과 undefined 의 구분을 위하여 undefined 는 ETX(end of text)[code:0x03] 값으로 대체되어 서버로 전송됩니다. 


◆ web runtime environment 제약
 
- web runtime environment 는 nDataType 값 중 "Binary" 형식을 지원하지 않습니다.

- web runtime environment 는 데이터 압축을 지원하지 않아 bCompress 값이 적용되지 않습니다.

- bAsync 값을 false 로 설정하면 Environment 의 httptimeout 속성에 설정된 대기시간이 적용되지 않습니다.

 
◆ Mobile 제약
 
- iOS/iPadOS 는 비동기(Async) 방식만 지원하여 bAsync 값이 적용되지 않습니다.

---
