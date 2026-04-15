# Form Methods

| Method | Description |
|--------|-------------|
| `addChild()` | 스크립트에서 동적으로 생성한 컴포넌트를 Form 의 자식 컴포넌트로 추가하는 메소드입니다. |
| `addEventHandler()` | Form 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 Form 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `alert()` | 경고 대화상자를 표시하는 메소드입니다. |
| `cancelTransaction()` | 진행중인 트랜잭션을 중지 시키는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `close()` | 실행된 Form을 종료하는 메소드입니다. |
| `confirm()` | 선택 대화상자를 표시하는 메소드입니다. |
| `findEventHandler()` | Form 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getCurrentLayoutID()` | Form에 정의된 레이아웃 중 현재 화면에 표시되는 레이아웃의 name 속성값을 반환하는 메소드입니다. |
| `getEventHandler()` | Form 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getFirstAccessibilityComponent()` | Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 작은 컴포넌트를 반환하는 메소드입니 |
| `getFirstComponent()` | Form 에서 탭키로 포커스 이동 시 제일 처음에 포커스를 받는 컴포넌트를 반환하는 메소드입니다. |
| `getFocus()` | Form 의 자식 컴포넌트 중 현재 포커스를 가지고 있는 컴포넌트를 반환하는 메소드입니다. |
| `getHScrollPos()` | Form 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| `getLastAccessibilityComponent()` | Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 큰 컴포넌트를 반환하는 메소드입니다 |
| `getLastComponent()` | Form 에서 탭키로 포커스 이동 시 제일 마지막에 포커스를 받는 컴포넌트를 반환하는 메소드입니다. |
| `getLayoutInfo()` | Form 에 정의된 레이아웃 중 특정 레이아웃의 속성값을 반환하는 메소드입니다. |
| `getNextComponent()` | Form 의 특정 컴포넌트에서 탭키 입력 시 포커스가 이동되는 컴포넌트를 반환하는 메소드입니다. |
| `getOffsetHeight()` | Form 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | Form 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOwnerFrame()` | Form 이 소속된 부모 Frame 을 반환하는 메소드입니다. |
| `getPrevComponent()` | Form 의 특정 컴포넌트에서 Shift+탭키 입력 시 포커스가 이동되는 컴포넌트를 반환하는 메소드입니다. |
| `getStepCount()` | Form 의 화면이 분할되었을 때 화면의 갯수를 반환하는 메소드입니다. |
| `getStepIndex()` | Form 이 화면분할 되었을 때 현재 표시되는 화면의 인덱스를 반환하는 메소드입니다. |
| `getVScrollPos()` | Form 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| `go()` | 화면에 표시된 Form 대신 인수로 전달된 Form을 로딩하는 메소드입니다. |
| `hasPopupFrame()` | 현재 Form에서 스크립트로 실행된 Form이 있는지 확인하는 메소드입니다. |
| `insertChild()` | 스크립트로 동적 생성한 컴포넌트를 Form 의 자식 컴포넌트로 특정 순서에 추가하는 메소드입니다. |
| `insertEventHandler()` | Form 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `isValidObject()` | Form 에 특정 오브젝트가 존재하는지 확인하는 메소드입니다. |
| `killTimer()` | setTimer() 메소드로 생성된 타이머를 삭제하는 메소드입니다. |
| `lookup()` | 인수로 전달된 오브젝트를 Form 영역부터 상위 영역으로 검색하여 반환하는 메소드입니다. |
| `reload()` | 현재 화면을 다시 로딩하는 메소드입니다. |
| `removeChild()` | Form에 동적으로 추가된 컴포넌트를 제거하는 메소드입니다. |
| `removeEventHandler()` | Form 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | Form 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `resetScroll()` | Form 의 스크롤바와 내부 컴포넌트를 현재 화면 상태에 맞게 갱신하는 메소드입니다. |
| `scrollBy()` | Form 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다. |
| `scrollTo()` | Form 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다. |
| `setEventHandler()` | Form 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | Form 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setFluidLayoutProperty()` | Form Layout 오브젝트의 속성 중 FluidLayout 관련 속성값을 동적으로 설정하는 메소드입니다. |
| `setFocus()` | Form 에 포커스를 주는 메소드입니다. |
| `setStepCount()` | 현재 레이아웃의 화면을 지정한 숫자만큼 분할하도록 설정하는 메소드입니다. |
| `setStepIndex()` | Form 이 화면분할 되었을 때 표시할 화면을 인덱스로 설정하는 메소드입니다. |
| `setTimer()` | 주기적으로 ontimer 이벤트를 발생시키기 위해 타이머를 생성하는 메소드입니다. |
| `setWaitCursor()` | Wait Cursor 를 표시하거나 해제하는 메소드입니다. |
| `sleep()` | 설정한 시간만큼 스크립트 실행을 멈추는 메소드입니다. |
| `transaction()` | DataSet 의 데이터를 갱신하기 위한 서비스를 호출하고,트랜잭션이 완료되면 콜백 함수를 수행하는 메소드입니다. |

---

## addChild

스크립트에서 동적으로 생성한 컴포넌트를 Form 의 자식 컴포넌트로 추가하는 메소드입니다.

**Syntax**
```javascript
Form.addChild( strChildID, objComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strChildID` | String | 자식으로 추가될 컴포넌트의 ID를 설정합니다. |
| `objComp` | Object | 자식으로 추가될 컴포넌트의 오브젝트를 설정합니다. |

**Return**: `Number` — 추가된 자식 컴포넌트의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**
- addChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 컴포넌트만 추가할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 컴포넌트의 세부 속성은 addChild() 메소드로 자식 컴포넌트를 추가 후 설정해야 합니다.

- 자식 컴포넌트로 추가된 컴포넌트를 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 추가된 컴포넌트에 의해 부모 컴포넌트의 스크롤바가 갱신되야 할 때는 resetScroll() 메소드를 사용해야 합니다.
  추가된 컴포넌트에 의해 스크롤바가 자동으로 갱신되지 않습니다.

- 동적으로 추가된 컴포넌트를 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 컴포넌트를 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

- Div, PopupDiv, Tabpagecontrol 에서 제공하는  addChild() 메소드는 form 컨트롤에 자식 컴포넌트를 추가합니다.
   this.Div00.addChild("mysubbutton", Button00);
  수행 시  this.Div00.form.Button00  로  접근 가능합니다.

**See Also**: insertChild, removeChild, -nexa-rtl-background-image

---

## addEventHandler

Form 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
Form.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 Form 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
Form.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

경고 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
Form.alert( strText )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다. |

---

## cancelTransaction

진행중인 트랜잭션을 중지 시키는 메소드입니다.

**Syntax**
```javascript
cancelTransaction( [strSvcID] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSvcID` | String | 중지할 트랜잭션의 ID를 문자열로 설정합니다. transaction() 메소드 수행 시 설정한 ID값입니다. |

**Remark**
- transaction() 메소드 수행 시 bAsync 파라미터를 "false"로 지정했다면 cancelTransaction() 메소드가 수행되지 않습니다.

- strSvcID 값을 생략하면 현재 진행중인 트랜잭션을 중지시킵니다.
  트랜잭션 진행 중 ESC키를 입력한 것과 동일하게 동작합니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
Form.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## close

실행된 Form을 종료하는 메소드입니다.

**Syntax**
```javascript
Form.close( [strReturn] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strReturn` | String | Form 이 종료될 때 자신을 호출했던 부모 Form 에게 넘겨줄 값을 문자열로 설정합니다.  기본형(Primitive Type) 데이터형만 지정 가능합니다. 특히, Form이 종료되면 Form에 정의됐던 오브젝트(Component, DataSet 등)도 소멸되므로 해당 오브젝트를 설정할 수 없습니다. |

**Remark**
- close() 메소드를 호출하면 Form 에서 관리하던 부분을 종료하고 Form 을 연속하여 종료합니다.
   따라서 close() 메소드 이후의 스크립트에서 해당 Form 이 관리하던 부분이나 Form 에 접근 시 스크립트 오류가 발생할 수 있습니다.

- Form 이 Div, PopupDiv, TabPageControl 의 url 속성으로 연결되어 있을 경우 close() 메소드는 수행되지 않습니다.

---

## confirm

선택 대화상자를 표시하는 메소드입니다.

**Syntax**
```javascript
Form.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strText` | String | 대화상자에 표시할 텍스트를 설정합니다. |
| `strCaption` | String | 대화상자의 TitleBar에 표시할 텍스트를 설정합니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |
| `strType` | String | 대화상자의 왼쪽 영역에 표시될 아이콘 종류를 문자열로 설정합니다.  "error" 설정 시 빨간색 "X" 모양 아이콘이 표시됩니다. "question" 설정 시 물음표("?") 모양 아이콘이 표시됩니다. "warning" 설정 시 노랑색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다. "information" 설정 시 파란색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다.  값을 설정하지 않으면 아이콘을 표시하지 않습니다.  - WRE에서 지원하지 않는 파라미터입니다.   WRE에서는 설정된 값을 무시하고 처리합니다. |

**Return**: `Boolean` — 표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다. 표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

---

## findEventHandler

Form 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.findEventHandler( strEventID, objFunc, objTarget )
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

## getCurrentLayoutID

Form에 정의된 레이아웃 중 현재 화면에 표시되는 레이아웃의 name 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getCurrentLayoutID()
```

**Return**: `String` — 현재 레이아웃 name 속성값을 반환합니다.

**Remark**
- getLayoutInfo 메소드를 사용해 현재 화면에 표시되는 레이아웃 속성 정보를 확인할 수 있습니다.
  this.getLayoutInfo(this.getCurrentLayoutID(), "mobileorientation");

---

## getEventHandler

Form 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getFirstAccessibilityComponent

Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 작은 컴포넌트를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getFirstAccessibilityComponent( [bStepIn] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bStepIn` | Boolean | Form 오브젝트 내에서 taborder가 가장 작은 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다. true 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다. false 설정 시 컨테이너 컴포넌트를 반환합니다. |

**Return**: `Object` — Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 작은 컴포넌트를 반환합니다.

**Remark**
- environment.enableaccessibility 속성값의 영향을 받지 않습니다.
  컴포넌트의 accessibilityenable 속성값 또는 visible 속성값을 false로 설정한 경우에는 검색 대상에서 제외됩니다.

- bStepIn 파라미터 값을 생략하면 false로 적용됩니다.

---

## getFirstComponent

Form 에서 탭키로 포커스 이동 시 제일 처음에 포커스를 받는 컴포넌트를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getFirstComponent( [bStepIn] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bStepIn` | Boolean | 처음으로 포커스를 받는 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다. "true" 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다. "false" 설정 시 컨테이너 컴포넌트를 반환하도록 합니다. |

**Return**: `Object` — 포커스를 제일 처음에 받는 컴포넌트를 반환합니다.

**Remark**
- 일반적으로 tabstop 속성값이 true인 컴포넌트 중 taborder 속성값이 제일 작은 컴포넌트가 반환됩니다.

- bStepIn 값을 생략 할 경우 "false" 로 적용됩니다.

- 처음으로 포커스를 받는 컴포넌트가 컨테이너 컴포넌트가 아닐 경우 bStepIn 값에 관계 없이 해당 컴포넌트를 반환합니다.

---

## getFocus

Form 의 자식 컴포넌트 중 현재 포커스를 가지고 있는 컴포넌트를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getFocus()
```

**Sample**
```javascript
var objComp = this.getFocus();
```

**Return**: `Object` — 포커스를 가진 자식 컴포넌트가 있으면 해당 컴포넌트를 반환합니다.  포커스를 가진 자식 컴포넌트가 없으면 null 을 반환합니다.

---

## getHScrollPos

Form 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getHScrollPos()
```

**Sample**
```javascript
var nScrollPos = this.getHScrollPos();
```

**Return**: `Number` — 수평스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**
- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수직스크롤바의 트랙바 위치값을 구하려면 getVScrollPos() 메소드를 사용하여야 합니다.

**See Also**: getVScrollPos, scrollbartype

---

## getLastAccessibilityComponent

Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 큰 컴포넌트를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getLastAccessibilityComponent( [bStepIn] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bStepIn` | Boolean | Form 오브젝트 내에서 taborder가 가장 큰 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다. true 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다. false 설정 시 컨테이너 컴포넌트를 반환합니다. |

**Return**: `Object` — Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 큰 컴포넌트를 반환합니다.

**Remark**
- environment.enableaccessibility 속성값의 영향을 받지 않습니다.
  컴포넌트의 accessibilityenable 속성값 또는 visible 속성값을 false로 설정한 경우에는 검색 대상에서 제외됩니다.

- bStepIn 파라미터 값을 생략하면 false로 적용됩니다.

---

## getLastComponent

Form 에서 탭키로 포커스 이동 시 제일 마지막에 포커스를 받는 컴포넌트를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getLastComponent( [bStepIn] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bStepIn` | Boolean | 마지막으로 포커스를 받는 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다. "true" 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다. "false" 설정 시 컨테이너 컴포넌트를 반환하도록 합니다. |

**Return**: `Object` — 포커스를 제일 마지막에 받는 컴포넌트를 반환합니다.

**Remark**
- 일반적으로 tabstop 속성값이 true인 컴포넌트 중 taborder 속성값이 제일 큰 컴포넌트가 반환됩니다.

- bStepIn 값을 생략 할 경우 "false" 로 적용됩니다.

- 마지막으로 포커스를 받는 컴포넌트가 컨테이너 컴포넌트가 아닐 경우 bStepIn 값에 관계 없이 해당 컴포넌트를 반환합니다.

---

## getLayoutInfo

Form 에 정의된 레이아웃 중 특정 레이아웃의 속성값을 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getLayoutInfo ( strLayoutID, strPropID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strLayoutID` | String | 레이아웃의 이름을 문자열로 설정합니다. |
| `strPropID` | String | 값을 얻으려 하는 속성의 이름을 문자열로 설정합니다. |

**Return**: `String` — strPropID 속성에 설정된 값을 반환합니다.

**Remark**
- strPropID 파라미터값으로 설정할 수 있는 Layout 오브젝트 속성은 Form > Objects > Layout 항목을 참고하세요.

---

## getNextComponent

Form 의 특정 컴포넌트에서 탭키 입력 시 포커스가 이동되는 컴포넌트를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getNextComponent( objComp [, bStepIn] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 포커스 이동 시 기준이 되는 컴포넌트를 설정합니다. |
| `bStepIn` | Boolean | 포커스가 이동되는 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다. "true" 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다. "false" 설정 시 컨테이너 컴포넌트를 반환하도록 합니다. |

**Return**: `Object` — objComp 컴포넌트에서 탭키로 포커스가 이동되는 컴포넌트를 반환합니다.

**Remark**
- 탭키 입력에 의한 포커스 이동은 taborder 속성값이 작은 컴포넌트에서 큰 컴포넌트 순서로 포커스가 이동합니다.
  getNextComponent() 메소드는 기준 컴포넌트 이후 포커스를 받을 컴포넌트 중 tabstop 속성이 true인 첫번째 컴포넌트를 반환합니다.

- bStepIn 값을 생략 할 경우 "false" 로 적용됩니다.

- 포커스가 이동되는 컴포넌트가 컨테이너 컴포넌트가 아닐 경우 bStepIn 값에 관계 없이 해당 컴포넌트를 반환합니다.

---

## getOffsetHeight

Form 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getOffsetHeight();
```

**Sample**
```javascript
var nWidth = this.getOffsetHeight( ) ;
```

**Return**: `Number` — Form 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Form 의 높이를 동적으로 계산합니다.

- Form 의 크기는 부모 ChildFrame 의 크기와 동일합니다.

---

## getOffsetWidth

Form 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getOffsetWidth();
```

**Sample**
```javascript
var nWidth = this.getOffsetWidth( ) ;
```

**Return**: `Number` — Form 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Form 의 너비를 동적으로 계산합니다.

- Form 의 크기는 부모 ChildFrame 의 크기와 동일합니다.

---

## getOwnerFrame

Form 이 소속된 부모 Frame 을 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getOwnerFrame()
```

**Sample**
```javascript
var objOwnerFrame = this.getOwnerFrame();
```

**Return**: `Object` — Form 이 소속된 부모 Frame 오브젝트를 반환합니다. Form 이 소속된 Frame 이 없을 경우 "null"을 반환합니다.

---

## getPrevComponent

Form 의 특정 컴포넌트에서 Shift+탭키 입력 시 포커스가 이동되는 컴포넌트를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getPrevtComponent( objComp [, bStepIn] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 포커스 이동 시 기준이 되는 컴포넌트를 설정합니다. |
| `bStepIn` | Boolean | 포커스가 이동되는 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다. "true" 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다. "false" 설정 시 컨테이너 컴포넌트를 반환하도록 합니다. |

**Return**: `Object` — objComp 컴포넌트에서 Shift+탭키로 포커스가 이동되는 컴포넌트를 반환합니다.

**Remark**
- Shift+탭키 입력에 의한 포커스 이동은 taborder 속성값이 큰 컴포넌트에서 작은 컴포넌트 순서로 포커스가 이동합니다.
  getPrevComponent() 메소드는 기준 컴포넌트 이후 포커스를 받을 컴포넌트 중 tabstop 속성이 true인 첫번째 컴포넌트를 반환합니다.

- bStepIn 값을 생략 할 경우 "false" 로 적용됩니다.

- 포커스가 이동되는 컴포넌트가 컨테이너 컴포넌트가 아닐 경우 bStepIn 값에 관계 없이 해당 컴포넌트를 반환합니다.

- 탭키 입력으로 포커스 이동 중 특정컴포넌트로 포커스가 오기 전 포커스를 가지고 있던 컴포넌트를 반환합니다.

---

## getStepCount

Form 의 화면이 분할되었을 때 화면의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getStepCount();
```

**Return**: `Number` — 분할된 화면의 갯수를 반환합니다.

**Remark**
- stepcount 속성값이 반환됩니다.

---

## getStepIndex

Form 이 화면분할 되었을 때 현재 표시되는 화면의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getStepIndex()
```

**Sample**
```javascript
this.getStepIndex() ;
```

**Return**: `Number` — 현재 표시되는 화면의 인덱스값이 반환됩니다.

**Remark**
- 넥사크로 스튜디오에서 stepcount 속성을 설정하여 Form의 화면을 분할하여 사용할 때만 수행되는 메소드입니다.

- StepControl 의 stepindex 속성값을 반환합니다.

---

## getVScrollPos

Form 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**
```javascript
Form.getVScrollPos()
```

**Sample**
```javascript
var nScrollPos = this.getVScrollPos();
```

**Return**: `Number` — 수직스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**
- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수평스크롤바의 트랙바 위치값을 구하려면 getHScrollPos() 메소드를 사용하여야 합니다.

**See Also**: getHScrollPos, scrollbartype

---

## go

화면에 표시된 Form 대신 인수로 전달된 Form을 로딩하는 메소드입니다.

**Syntax**
```javascript
Form.go( strURL )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strURL` | String | 화면에 로딩할 Form(xfdl 파일)의 URL을 문자열로 설정합니다. |

---

## hasPopupFrame

현재 Form에서 스크립트로 실행된 Form이 있는지 확인하는 메소드입니다.

**Syntax**
```javascript
Form.hasPopupFrame()
```

**Sample**
```javascript
var bHas = this.hasPopupFrame();
```

**Return**: `Boolean` — 현재 Form에서 스크립트로 실행된 Form이 있다면 "true"를 반환합니다. 현재 Form에서 스크립트로 실행된 Form이 없다면 "false"를 반환합니다.

**Remark**
- 스크립트로 실행되었다가 종료된 Form은 확인할 수 없습니다.

---

## insertChild

스크립트로 동적 생성한 컴포넌트를 Form 의 자식 컴포넌트로 특정 순서에 추가하는 메소드입니다.

**Syntax**
```javascript
Form.insertChild( nIdx, strChildID, objComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIdx` | Number | 부모 컴포넌트에 추가 될 순서를 설정합니다. "-1"로 설정할 경우 자식 컴포넌트 중 제일 마지막에 추가됩니다. |
| `strChildID` | String | 자식으로 추가될 컴포넌트의 ID를 설정합니다. |
| `objComp` | Object | 자식으로 추가될 컴포넌트의 오브젝트를 설정합니다. |

**Return**: `Number` — 추가된 자식 컴포넌트의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**
- 자식 컴포넌트는 선언된 순서에 따라 화면에 표시됩니다.
  따라서 nIdx 값에 따라 추가되는 컴포넌트의 화면표시 순서가 정해집니다.
  컴포넌트가 겹칠 경우 nIdx 값이 작은 컴포넌트가 nIdx 값이 큰 컴포넌트에게 가려지게 됩니다.

- insertChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 컴포넌트만 추가할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 컴포넌트의 세부 속성은 insertChild() 메소드로 자식 컴포넌트를 추가 후 설정해야 합니다.

- 자식 컴포넌트로 추가된 컴포넌트를 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 추가된 컴포넌트에 의해 부모 컴포넌트의 스크롤바가 갱신되야 할 때는 resetScroll() 메소드를 사용해야 합니다.
  추가된 컴포넌트에 의해 스크롤바가 자동으로 갱신되지 않습니다.

- 동적으로 추가된 컴포넌트를 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 컴포넌트를 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

**See Also**: addChild, removeChild

---

## insertEventHandler

Form 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
Form.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## isValidObject

Form 에 특정 오브젝트가 존재하는지 확인하는 메소드입니다.

**Syntax**
```javascript
Form.isValidObject( objName )
Form.isValidObject( strName )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objName` | Object | 존재 여부를 확인할 오브젝트를 설정합니다. |
| `strName` | String | 존재 여부를 확인할 오브젝트의 이름을 문자열로 설정합니다. |

**Return**: `Boolean` — 인수로 전달된 오브젝트가 Form 에 존재하면 "true"를 반환합니다. 인수로 전달된 오브젝트가 Form 에 존재하지 않으면 "false"를 반환합니다. 잘못된 값을 인수로 전달했을 경우도 "false"를 반환합니다.

---

## killTimer

setTimer() 메소드로 생성된 타이머를 삭제하는 메소드입니다.

**Syntax**
```javascript
Form.killTimer( nTimerID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTimerID` | Number | setTimer() 메소드에서 타이머 생성 시 설정했던 ID를 숫자로 설정합니다. |

---

## lookup

인수로 전달된 오브젝트를 Form 영역부터 상위 영역으로 검색하여 반환하는 메소드입니다.

**Syntax**
```javascript
Form.lookup( strObjectID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strObjectID` | String | 검색하여 찾고자 하는 오브젝트의 ID를 문자열로 설정합니다. |

**Return**: `Object` — 검색하여 찾아낸 오브젝트를 반환합니다.

---

## reload

현재 화면을 다시 로딩하는 메소드입니다.

**Syntax**
```javascript
Form.reload()
```

**Sample**
```javascript
this.reload();
```

**Remark**
- 로딩이 완료되면 원래 Form 상태로 초기화됩니다.

---

## removeChild

Form에 동적으로 추가된 컴포넌트를 제거하는 메소드입니다.

**Syntax**
```javascript
Form.removeChild( strChildID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strChildID` | String | 제거할 자식 컴포넌트의 ID를 설정합니다. |

**Return**: `Object` — 컴포넌트 제거에 성공하면 제거된 컴포넌트의 오브젝트를 반환합니다. 컴포넌트 제거에 실패하면 "null"을 반환합니다.

**Remark**
- removeChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- addChild() 또는 insertChild() 메소드를 사용하여 동적으로 추가한 컴포넌트만 제거할 수 있습니다.
  동적으로 추가한 컴포넌트가 아닌 경우 오동작이 발생할 수 있습니다.

- 제거된 컴포넌트에 의해 부모 컴포넌트의 스크롤바가 갱신되야 할 때는 resetScroll() 메소드를 사용해야 합니다.
  제거된 컴포넌트에 의해 스크롤바가 자동으로 갱신되지 않습니다.

- removeChild() 메소드로 제거된 컴포넌트를 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

**See Also**: addChild, insertChild

---

## removeEventHandler

Form 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Form.removeEventHandler( strEventID, objFunc, objTarget )
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

Form 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
Form.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

## resetScroll

Form 의 스크롤바와 내부 컴포넌트를 현재 화면 상태에 맞게 갱신하는 메소드입니다.

**Syntax**
```javascript
Form.resetScroll()
```

**Sample**
```javascript
this.resetScroll();
```

**Remark**
- 다음과 같은 경우 resetScroll 메소드를 실행해야 합니다.

Form 오브젝트 또는 컨테이너 컴포넌트의 자식 컴포넌트를 생성, 삭제하거나 위치나 크기, visible 속성값을 동적으로 변경한 경우 스크롤바를 갱신하기 위해 resetScroll 메소드를 실행해야 합니다.
resetScroll 메소드를 실행하지 않으면 스크롤바가 정상적으로 동작하지 않을 수 있습니다.
컴포넌트의 left, right, top, bottom, width, height 속성값을 기준 컴포넌트를 참조하도록  설정하고 스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경하는 경우 변경된 기준 컴포넌트의 위치나 크기 속성값에 맞게 컴포넌트의 위치, 크기를 반영하기 위해 resetScroll 메소드를 실행해야 합니다.
예외적으로 ListView 컴포넌트의 ListViewCellControl 오브젝트의 경우에는 setCellProperty 메소드로 기준 컴포넌트의 위치나 크기 변경 시 내부적으로 resetScroll 메소드에서 수행하는 조정 기능을 처리하고 있습니다. 때문에 resetScroll 메소드를 따로 실행하지 않아도 됩니다.
컴포넌트의 fittocontents 속성값을 설정하고 스크립트로 내부 콘텐츠 변경 시 변경된 콘텐츠 영역 크기에 맞게 반영하기 위해 resetScroll 메소드를 실행해야 합니다.

---

## scrollBy

Form 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다.

**Syntax**
```javascript
Form.scrollBy( nHoffsetpos, nVoffsetpos )
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

Form 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다.

**Syntax**
```javascript
Form.scrollTo( nHpos, nVpos )
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

## setEventHandler

Form 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
Form.setEventHandler( strEventID, objFunc, objTarget )
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

Form 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
Form.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

## setFluidLayoutProperty

Form Layout 오브젝트의 속성 중 FluidLayout 관련 속성값을 동적으로 설정하는 메소드입니다.

**Syntax**
```javascript
Form.setFluidLayoutProperty(strLayoutName, strPropID, strValue)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strLayoutName` | String | 레이아웃 이름을 문자열로 설정합니다. |
| `strPropID` | String | 설정하려는 속성 이름을 문자열로 설정합니다. tabletemplate 속성만 지원합니다. |
| `strValue` | String | 설정하려는 속성의 속성값을 문자열로 설정합니다. |

**Remark**
- strPropId 파라미터값으로 "tabletemplate" 속성만 설정할 수 있습니다.
  나머지 FluidLayout 관련 속성은 미지원입니다.

◆ tabletemplate 속성 관련

- tabletemplatearea 속성값을 넥사크로 스튜디오에서 설정한 경우에는 tabletemplate 속성값을 동적으로 설정할 수 없습니다.
  tabletemplatearea 속성값을 설정하지 않은 경우에만 지원합니다.

---

## setFocus

Form 에 포커스를 주는 메소드입니다.

**Syntax**
```javascript
Form.setFocus( [bMoveScroll [, bInnerFocus]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bMoveScroll` | Boolean | 부모 컴포넌트에 스크롤이 있을 경우 Form 기준으로 스크롤을 이동할지 설정합니다.  true 설정 시 Form 이(가) 화면에 표시되도록 스크롤을 이동시킵니다. false 설정 시 Form 의 위치에 관계없이 스크롤을 이동시키지 않습니다.  값을 설정하지 않으면 true 로 동작합니다. |
| `bInnerFocus` | Boolean | Form 이(가) 컨테이너 컴포넌트 일 때 자식 컴포넌트에게 포커스를 이동할지 설정합니다.  true 설정 시 자식 컴포넌트 중 포커스를 받을 수 있는 첫번째 컴포넌트가 포커스 됩니다. false 설정 시 Form 에 포커스 됩니다.  Form 이(가) 컨테이너 컴포넌트 일 때 값을 설정하지 않으면 true 로 동작합니다. |

**Return**: `Object` — Form 이(가) 포커스되기 전에 포커스를 가졌던 컴포넌트를 반환합니다.  포커스를 가진 컴포넌트가 없었거나 메소드 수행이 실패하는 경우에는 null 을 반환합니다.

**Remark**
- setFocus() 메소드는 enableaccessibility 속성값에 관계없이 파라미터값을 기준으로 동작합니다.

- Form 이(가) 컨테이너 컴포넌트가 아니거나 자식 컴포넌트 중 포커스를 가질 수 있는 컴포넌트가
   존재하지 않을 경우에는 bInnerFocus 파라미터값에 관계없이 Form 에 포커스 됩니다.

---

## setStepCount

현재 레이아웃의 화면을 지정한 숫자만큼 분할하도록 설정하는 메소드입니다.

**Syntax**
```javascript
Form.setStepCount(nStepcount)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nStepcount` | Number | 분할할 화면 개수를 설정합니다. |

**Remark**
- 음수값을 지정하는 경우에는 이전값을 유지합니다.
- 설정값에 따라 stepindex 속성값이 달라질 수 있습니다.
  설정한 값에서 1을 뺀 값이 stepindex 속성값보다 작은 경우 설정한 값에서 1을 뺀 값으로 stepindex 속성값이 처리됩니다.
- 컴포넌트의 positionstep 속성값보다 nStepcount를 작게 설정하는 경우 해당 컴포넌트는 화면에 표시되지 않습니다.
  nStepcount를 0으로 설정하는 경우에는 컴포넌트의 positionstep 속성값은 무시됩니다.

---

## setStepIndex

Form 이 화면분할 되었을 때 표시할 화면을 인덱스로 설정하는 메소드입니다.

**Syntax**
```javascript
Form.setStepIndex( nIndex )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIndex` | Number | 분할된 화면 중 표시할 화면의 인덱스를 설정합니다.  인덱스는 "0" 부터 시작하며 "stepcount속성값 - 1"까지 설정할 수 있습니다. |

**Return**: `Boolean` — 분할된 화면 이동에 성공하면 "true"가 반환됩니다. 분할된 화면 이동에 실패하면 "false"가 반환됩니다.

**Remark**
- 넥사크로 스튜디오에서 stepcount 속성을 설정하여 Form의 화면을 분할하여 사용할 때만 적용되는 메소드입니다.

- setStepIndex() 메소드 수행에 성공하면 StepControl 의 stepindex 속성값이 해당 화면의 인덱스로 설정됩니다.

---

## setTimer

주기적으로 ontimer 이벤트를 발생시키기 위해 타이머를 생성하는 메소드입니다.

**Syntax**
```javascript
Form.setTimer( nTimerID, nElapse )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTimerID` | Number | ontimer 이벤트를 발생시킨 타이머를 구분하기 위한 ID를 숫자로 설정합니다. ID값은 "0~65535" 사이의 값을 설정할 수 있습니다. |
| `nElapse` | Number | ontimer 이벤트를 발생시킬 주기를 밀리초(milliseconds) 단위의 숫자로 설정합니다. |

**Remark**
- setTimer() 메소드로 생성한 타이머는 ontimer 이벤트를 발생시킵니다.

- nElapse의 간격은 Windows98 이상에서는 약 55ms 이상, Windows NT/2000 이상에서는 약 10ms 이상으로 설정해야 정상적으로 작동합니다.

- ontimer 이벤트 발생 주기는 환경에 따라 약간의 오차가 발생할 수 있습니다.

---

## setWaitCursor

Wait Cursor 를 표시하거나 해제하는 메소드입니다.

**Syntax**
```javascript
Form.setWaitCursor( [bWaitFlag [, bForcely]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bWaitFlag` | Boolean | 화면에 Wait Cursor의 표시 여부를 설정합니다.  true 설정 시 Wait Cursor가 화면에 표시됩니다. false 설정 시 화면에 표시된 Wait Cursor 를 해제합니다.  값 생략 시 true 로 적용됩니다. |
| `bForcely` | Boolean | Environment 의 usewaitcursor 속성값에 관계없이 메소드를 실행 시킬지 여부를 설정합니다.  true 설정 시 userwaitcursor 속성값에 관계없이 Wait Cursor 를 표시/해제 합니다. false 설정 시 usewaitcursor 속성값이 true 이면 Wait Cursor 를 표시/해제 합니다. false 설정 시 usewaitcursor 속성값이 false 이면 메소드가 실행되지 않습니다.  값 생략 시 false 로 적용됩니다. |

**Remark**
- loadingimage 속성에 설정된 이미지가 Wait Cursor 로 표시됩니다.
   loadingimage 속성을 설정하지 않아도 기본 Wait Cursor 가 표시됩니다.
   애니메이션 "GIF" 파일 설정 시 애니메이션이 플레이 됩니다.

- setWaitCursor() 메소드는 usewaitcursor 속성에 제약을 받습니다.
   usewaitcursor 속성값이 false 일 경우 bForcely 값을 설정하지 않으면 메소드가 실행되지 않습니다.

- WaitCursor 가 화면에 표시되어 있으면 입력과 선택이 모두 제한됩니다.

---

## sleep

설정한 시간만큼 스크립트 실행을 멈추는 메소드입니다.

**Syntax**
```javascript
Form.sleep( nMilliseconds )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nMilliseconds` | Number | 스크립트 실행을 멈출 시간을 밀리초(milliseconds) 단위의 숫자로 설정합니다. |

---

## transaction

DataSet 의 데이터를 갱신하기 위한 서비스를 호출하고,트랜잭션이 완료되면 콜백 함수를 수행하는 메소드입니다.

**Syntax**
```javascript
Form.transaction( strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc [,bAsync [,nDataType [,bCompress]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSvcID` | String | 트랜잭션을 구분하기 위한 ID를 문자열로 설정합니다. |
| `strURL` | String | 트랜잭션을 요청할 서버페이지 주소를 문자열로 설정합니다.  strURL ::= <absolute-url> | <relative-url>  <absolute-url> 서버에 배포된 페이지 주소를 문자열로 설정합니다. 웹에 접근 가능한 환경이어야 하고, Cross Domain 상황이면 사용에 제한이 있습니다.  <relative-url> TypeDefinition 의 Services 영역에 정의된 Prefix 를 사용한 형식으로 설정합니다. 또는 현재 Form 위치를 기준으로 한 상대경로를 사용하여 설정합니다. |
| `strInDatasets` | String | 데이터 처리를 위해 서버로 보낼 DataSet 의 ID를 문자열로 설정합니다. DataSet 은 Form 영역 또는 Application 의 AppVariables 영역에 정의되어 있어야 합니다. "입력ID=DataSet ID" 형식으로 설정하며, 빈칸으로 구분하여 여러개의 DataSet 을 보낼 수 있습니다.  ex) "input1=DataSet00 input2=DataSet01"  Container Component(Div, View 등)의 Dataset 오브젝트는 아래와 같이 설정할 수 있습니다.  ex) "input1=View00.form.Dataset00 input2=Div00.form.Dataset01" |
| `strOutDatasets` | String | 서버에서 보내는 데이터를 받을 DataSet 의 ID를 문자열로 설정합니다. DataSet 은 Form 영역 또는 Application 의 AppVariables 영역에 정의되어 있어야 합니다. "DataSet ID=출력ID" 형식으로 설정하며, 빈칸으로 구분하여 여러개의 DataSet 을 받을 수 있습니다.  ex) "DataSet00=output0 DataSet01=output1"  아래와 같은 형식으로 하나의 Ouput Dataset(출력ID)을 여러 개의 Dataset에서 받을 수 있습니다.  ex) "DataSet00=output0 DataSet01=output0"  Container Component(Div, View 등)의 Dataset 오브젝트는 아래와 같이 설정할 수 있습니다.  ex) "View00.form.Dataset00=ouput0 Div00.form.Dataset01=output1" |
| `strArgument` | String | 서버페이지에 보낼 정보를 문자열로 설정합니다. "변수ID=변수값" 형식으로 설정하며, 빈칸으로 구분하여 여러개의 인수값을 보낼 수 있습니다.  ex) "argu0=test argu1=30" |
| `strCallbackFunc` | String | 트랜잭션 결과를 받을 때 호출될 콜백함수명을 문자열로 설정합니다. 콜백함수는 Form 영역 또는 Application 영역에 정의되어 있어야 합니다. |
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
   해당 Form 또는 상위영역에는 this.transaction_Callback = function(strSvcID, nErrorCode, strErrorMag) 이 존재해야 합니다.
   이 콜백 함수는 위와 같은 형태이며, 콜백 함수의 strSvcID 는 입력된 strSvcID 와 동일합니다.

- 트랜잭션 수행 후 서버로 부터 전달된 파라미터가 있을 경우 처리되는 사항
  > 파라미터의 변수명을 Form > Application > Environment 영역 순서로 찾아 처음 일치하는 영역의 변수값만 업데이트합니다.
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
   1. strArgument 와 strInDatasets 이 ""이고, Environment 의 Cookies 영역에 변수가 없으면 GET 방식으로 동작합니다.
   2. strArgument 나 strInDatasets 에 값이 있거나 Environment 의 Cookies 영역에 변수가 있으면 POST로 동작합니다.
   3. 위 1번의 상태에서 addcookietovariable 값이 "true" 이면 서버와의 첫 통신시에는 GET 방식으로 동작하고 이후부터는 서버에서 유입되는
      Cookie 의 유무에 따라 Cookie 가 있으면 POST 없으면 GET 방식으로 동작합니다.
     (addcookietovariable 값이 "true"이면 Cookie 가 Environment 의 Cookies 영역에 변수로 자동 추가 되기 때문.)

- 서버로부터 데이터를 Chunked 방식으로 여러번에 걸쳐서 받을 경우 progressload 속성으로 데이터를 로드하는 방식을 설정할 수 있습니다.
   자세한 내용은 "Dataset > progressload" 항목을 참고하시기 바랍니다.

- 트랜잭션을 위한 통신 프로토콜은 HTTP/1.1 입니다.

- 넥사크로 스튜디오를 사용해 넥사크로를 실행했을 때 트랜잭션을 수행하면 CacheLevel 의 설정과 상관없이 "none"으로 동작합니다.

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
