# Application Events

| Event | Description |
|-------|-------------|
| `onafteruserconfirm` | UserConfirm 창이 닫힌 후에 발생하는 이벤트입니다. |
| `onbeforeexit` | Application 이 종료되기 전에 발생하는 이벤트입니다. |
| `onbeforeuserconfirm` | UserConfirm 창이 표시 되기 전에 발생하는 이벤트입니다. |
| `onduplicateexecution` | 중복실행 불가로 설정된 어플리케이션을 중복으로 실행 시 발생하는 이벤트입니다. |
| `onerror` | Application 에서 실행한 Transaction 에서 에러가 생겼을 때 발생하는 이벤트입니다. |
| `onexit` | Application 이 종료될 때 발생하는 이벤트입니다. |
| `onload` | Application 에 등록된 모든 오브젝트와 데이터가 로드된 후 발생하는 이벤트입니다. |
| `onloadforms` | ChildFrame 에 연결된 모든 Form 이 모두 로드되면 발생하는 이벤트입니다. |
| `onloadingappvariables` | Application 의 AppVariables 영역에 정의된 오브젝트가 모두 생성된 후에 발생하는 이벤트입니다. |
| `onnotification` | 모바일 기기에서 넥사크로에 대한 Notification 을 수신하였을 때 발생하는 이벤트입니다. |

---

## onafteruserconfirm

UserConfirm 창이 닫힌 후에 발생하는 이벤트입니다.

**Syntax**
```javascript
onafteruserconfirm(obj:nexacro.Application,e:nexacro.EventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | EventInfo | Event Object. |

**Remark**
- filesecurelevel 속성값이 "all" 일 때 허용된 경로나 파일 이외에 접근하면, 접근 허용여부를 확인하는 UserConfirm 창이 표시됩니다.

---

## onbeforeexit

Application 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**
```javascript
onbeforeexit(obj:nexacro.Application,e:nexacro.ExitEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | ExitEventInfo | Event Object. |

**Remark**
- 일반적으로 Application 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- onbeforeexit 이벤트 발생 후 모든 Frame 에서 onbeforeclose 이벤트가 발생합니다.

- onbeforeclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   ChildFrame 의 하위 오브젝트에 onbeforeclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onbeforeclose 이벤트 수행 후 각 이벤트의 리턴값은 누적되어 종료를 위한 확인창에 모두 표시됩니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onexit 이벤트가 발생하고 Application 이 종료됩니다.

- 종료를 위한 확인창에서 "취소"를 선택하면 onexit 이벤트가 발생하지 않고 Application 이 종료되지 않습니다.


◆ Desktop WRE 제약

- Edge, Chrome, FireFox 일 때 onbeforeexit 이벤트에 작성한 alert(), confirm() 메소드는 수행되지 않습니다.
   브라우저의 제약사항이므로 alert(), confirm() 메소드 사용에 주의하여야 합니다.

---

## onbeforeuserconfirm

UserConfirm 창이 표시 되기 전에 발생하는 이벤트입니다.

**Syntax**
```javascript
onbeforeuserconfirm(obj:nexacro.Application,e:nexacro.EventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | EventInfo | Event Object. |

**Remark**
- filesecurelevel 속성값이 "all" 일 때 허용된 경로나 파일 이외에 접근하면, 접근 허용여부를 확인하는 UserConfirm 창이 표시됩니다.

---

## onduplicateexecution

중복실행 불가로 설정된 어플리케이션을 중복으로 실행 시 발생하는 이벤트입니다.

**Syntax**
```javascript
onduplicateexecution(obj:nexacro.Application,e:nexacro.DuplicateExecutionEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | DuplicateExecutionEventInfo | Event Object. |

**Remark**
- Windows NRE 에서만 발생하는 이벤트입니다.

- 어플리케이션 실행 시 "-OO" 옵션값을 "true" 로 설정하면 "OnlyOne" 상태로 어플리케이션이 실행됩니다.
   "OnlyOne" 상태에서는 어플리케이션이 중복으로 실행되지 않고, 한 개만 실행할 수 있습니다.

- 사용자가 이미 실행된 어플리케이션을 중복 실행하려고 하는 경우 먼저 실행된 어플리케이션에서 이를 감지하고 처리할 수 있습니다.

---

## onerror

Application 에서 실행한 Transaction 에서 에러가 생겼을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.Application,e:nexacro.ErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | ErrorEventInfo | Event Object. |

**Remark**
- Application 의 Transaction 이 실행중일 때 ESC 키를 입력하여 Application 의 onerror 이벤트를 발생 시킬 수 있습니다.
   Form 의 Transaction 이 실행중일 때 ESC 키를 입력하면 Form 의 onerror 이벤트가 발생합니다.

- Application 에서 발생한 onerror 이벤트는 Form 으로 전파되지 않습니다.

---

## onexit

Application 이 종료될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onexit(obj:nexacro.Application,e:nexacro.ExitEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | ExitEventInfo | Event Object. |

**Remark**
- onexit 이벤트에서 트랜잭션을 비동기(Async) 방식으로 수행하면 넥사크로 애플리케이션이 종료되면서 통신을 모두 중지시키기 때문에 정상적으로 처리되지 않을 수 있습니다.
  이런 경우에는 트랜잭션을 동기(Sync) 방식으로 수행해서 처리합니다.


◆ Desktop WRE 제약

- Edge, Chrome, FireFox 일 때 onexit 이벤트에 작성한 alert(), confirm() 메소드는 수행되지 않습니다.
   브라우저의 제약사항이므로 alert(), confirm() 메소드 사용에 주의하여야 합니다.

---

## onload

Application 에 등록된 모든 오브젝트와 데이터가 로드된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onload(obj:nexacro.Application,e:nexacro.LoadEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | LoadEventInfo | Event Object. |

**Remark**
- Application 의 준비가 완료된 상태입니다.

- Environment 의 onload 이벤트 발생 후에 발생하는 이벤트입니다.

---

## onloadforms

ChildFrame 에 연결된 모든 Form 이 모두 로드되면 발생하는 이벤트입니다.

**Syntax**
```javascript
onloadforms(obj:nexacro.Application,e:nexacro.LoadEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | LoadEventInfo | Event Object. |

---

## onloadingappvariables

Application 의 AppVariables 영역에 정의된 오브젝트가 모두 생성된 후에 발생하는 이벤트입니다.

**Syntax**
```javascript
onloadingappvariables(obj:nexacro.Application,e:nexacro.LoadEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | LoadEventInfo | Event Object. |

**Remark**
- 이벤트가 발생하는 시점에는 생성된 DataSet 에 데이터나 Application 에 Form 이 로딩되기 전입니다.
  따라서 이벤트에서 나머지 오브젝트 로딩에 필요한 정보를 추가, 수정하면 변경된 값을 적용시킬 수 있습니다.

---

## onnotification

모바일 기기에서 넥사크로에 대한 Notification 을 수신하였을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onnotification(obj:nexacro.Application,e:nexacro.NotificationEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Application | Event가 발생한 Object. |
| `e` | NotificationEventInfo | Event Object. |

---
