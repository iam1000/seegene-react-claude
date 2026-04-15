# TabpageControl Methods

| Method | Description |
|--------|-------------|
| `addChild()` | 스크립트에서 동적으로 생성한 컴포넌트를 TabpageControl 의 자식 컴포넌트로 추가하는 메소드입니다. |
| `addEvent()` | TabpageControl 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | TabpageControl 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 TabPage 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `findEventHandler()` | TabpageControl 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getEventHandler()` | TabpageControl 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `insertChild()` | 스크립트로 동적 생성한 컴포넌트를 TabpageControl 의 자식 컴포넌트로 특정 순서에 추가하는 메소드입니다. |
| `insertEventHandler()` | TabpageControl 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `reload()` | TabpageControl 에 url 속성으로 연결된 Form 을 다시 로딩하는 메소드입니다. |
| `removeChild()` | TabpageControl 에 동적으로 추가된 컴포넌트를 제거하는 메소드입니다. |
| `removeEvent()` | TabpageControl 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | TabpageControl 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | TabpageControl 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `setContents()` | TabpageControl 의 내부 구성 컨텐츠를 동적으로 설정하는 메소드입니다. |
| `setEventHandler()` | TabpageControl 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | TabpageControl 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setFocus()` | TabpageControl 에 포커스를 주는 메소드입니다. |

---

## addChild

스크립트에서 동적으로 생성한 컴포넌트를 TabpageControl 의 자식 컴포넌트로 추가하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.addChild( strChildID, objComp )
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

**See Also**: -nexa-rtl-background-image, insertChild, removeChild, init, destroy, show

---

## addEvent

TabpageControl 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | TabpageControl 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- TabpageControl 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

TabpageControl 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.addEventHandler( strEventID, objFunc, objTarget )
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

함수를 검색하여 TabPage 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
TabPage.addEventHandlerLookup( strEventID, strFunc, objTarget )
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
TabpageControl.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## findEventHandler

TabpageControl 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 찾을 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 찾으려고 하는 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 찾으려고 하는 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에서 찾으려고 하는 핸들러 함수의 인덱스를 반환합니다. 찾으려고 하는 핸들러 함수가 존재하지 않는다면 "-1"을 반환합니다.

**Remark**
- 인덱스는 "0"부터 시작합니다.

---

## getEventHandler

TabpageControl 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## insertChild

스크립트로 동적 생성한 컴포넌트를 TabpageControl 의 자식 컴포넌트로 특정 순서에 추가하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.insertChild( nIdx, strChildID, objComp )
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

**See Also**: addChild, removeChild, init, destroy, show

---

## insertEventHandler

TabpageControl 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

## reload

TabpageControl 에 url 속성으로 연결된 Form 을 다시 로딩하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.reload()
```

**Sample**
```javascript
this.TabpageControl00.reload();
```

**Remark**
- url 속성으로 Form 이 연결되어 있을 경우만 메소드가 정상동작 합니다.
   TabpageControl 이 자체 컨텐츠로 구성되어 있는 경우는 메소드 실행 시 모든 컨텐츠가 삭제됩니다.

- TabpageControl 의 form 컨트롤에 정의된 reload() 메소드와 동일한 메소드입니다.

- 메소드 실행 시 연결된 Form 은 초기화 상태로 로딩 됩니다.

---

## removeChild

TabpageControl 에 동적으로 추가된 컴포넌트를 제거하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.removeChild( strChildID )
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

**See Also**: addChild, insertChild, init, destroy, show

---

## removeEvent

TabpageControl 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | TabpageControl 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- TabpageControl 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- TabpageControl 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

TabpageControl 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 제거할 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 "1"을 반환합니다. 핸들러 함수 제거에 실패하면 "0"을 반환합니다.

**Remark**
- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0"번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## removeEventHandlerLookup

TabpageControl 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 제거할 핸들러 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 "1"을 반환합니다. 핸들러 함수 제거에 실패하면 "0"을 반환합니다.

**Remark**
- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0"번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## setContents

TabpageControl 의 내부 구성 컨텐츠를 동적으로 설정하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.setContents( strCont );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCont` | String | TabpageControl 의 내부 구성 컨텐츠 정보를 XML 형태의 문자열로 설정합니다.  "<Layout> ... </Layout>" 형태로 레이아웃 태그를 포함하여 설정하여야 합니다.  컨텐츠 정보에 User Property 를 포함할 수 있습니다. 컨텐츠 정보에 Invisible Object, Bind Object, InitValue Object 는 포함할 수 없습니다. |

**Return**: `Boolean` — 컨텐츠 생성에 성공하면 true 를 반환합니다. 컨텐츠 생성에 실패하면 false 를 반환합니다.  문자열 파싱 중 오류가 발생하거나 잘못된 컴포넌트(오타 포함) 정의에 의해 오류가 발생할 경우 컨텐츠 생성에 실패하게 됩니다.

**Remark**
- setContents() 메소드는 동기(Sync)로 수행되며 메소드 수행이 완료될 때까지 스크립트 수행이 중단됩니다.

---

## setEventHandler

TabpageControl 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.setEventHandler( strEventID, objFunc, objTarget )
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

TabpageControl 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
TabpageControl.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `strFunc` | Object | 기존 핸들러 함수를 대체할 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수를 검색할 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 "0"을 반환합니다. 첫번째 핸들러 함수 변경에 실패하면 "-1"을 반환합니다.

**Remark**
- 인덱스가 "0"번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 "0"번인 핸들러 함수가 없다면 "0"번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.

---

## setFocus

TabpageControl 에 포커스를 주는 메소드입니다.

**Syntax**
```javascript
TabpageControl.setFocus( [bMoveScroll [, bInnerFocus]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bMoveScroll` | Boolean | 부모 컴포넌트에 스크롤이 있을 경우 TabpageControl 기준으로 스크롤을 이동할지 설정합니다.  true 설정 시 TabpageControl 이(가) 화면에 표시되도록 스크롤을 이동시킵니다. false 설정 시 TabpageControl 의 위치에 관계없이 스크롤을 이동시키지 않습니다.  값을 설정하지 않으면 true 로 동작합니다. |
| `bInnerFocus` | Boolean | TabpageControl 이(가) 컨테이너 컴포넌트 일 때 자식 컴포넌트에게 포커스를 이동할지 설정합니다.  true 설정 시 자식 컴포넌트 중 포커스를 받을 수 있는 첫번째 컴포넌트가 포커스 됩니다. false 설정 시 TabpageControl 에 포커스 됩니다.  TabpageControl 이(가) 컨테이너 컴포넌트 일 때 값을 설정하지 않으면 true 로 동작합니다. |

**Return**: `Object` — TabpageControl 이(가) 포커스되기 전에 포커스를 가졌던 컴포넌트를 반환합니다.  포커스를 가진 컴포넌트가 없었거나 메소드 수행이 실패하는 경우에는 null 을 반환합니다.

**Remark**
- setFocus() 메소드는 enableaccessibility 속성값에 관계없이 파라미터값을 기준으로 동작합니다.

- TabpageControl 이(가) 컨테이너 컴포넌트가 아니거나 자식 컴포넌트 중 포커스를 가질 수 있는 컴포넌트가
   존재하지 않을 경우에는 bInnerFocus 파라미터값에 관계없이 TabpageControl 에 포커스 됩니다.

---
