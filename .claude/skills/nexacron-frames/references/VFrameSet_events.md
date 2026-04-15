# VFrameSet Events

| Event | Description |
|-------|-------------|
| `onactivate` | VFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다. |
| `onbeforeclose` | VFrameSet 이 종료되기 전에 발생하는 이벤트입니다. |
| `onclose` | VFrameSet 이 종료될 때 발생하는 이벤트입니다. |
| `ondeactivate` | VFrameSet 이 비활성화 되었을 때 발생하는 이벤트입니다. |
| `onmove` | VFrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| `onorientationchange` | 모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다. |
| `onsize` | VFrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| `onsyscommand` | VFrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다. |

---

## onactivate

VFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onactivate(obj:nexacro.VFrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VFrameSet | Event가 발생한 Object. |
| `e` | ActivateEventInfo | Event Object. |

**Remark**
- 앱이 활성화될 때 이벤트가 발생합니다.
- MainFrame > [Frameset] > ChildFrame > Form 순으로 이벤트가 발생합니다.
  ChildFrame 의 onactivate 이벤트가 발생한 후 ChildFrame 의 formurl 속성에 설정된 Form 에서 onactivate 이벤트가 발생합니다. 
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     앱 시작 시
     background 상태에서 다시 foreground 상태로 변경될 때
  > iOS
    앱 시작 시
    background 상태에서 다시 foreground 상태로 변경될 때
    키패드가 내려가면서 deactive 상태가 된 상태에서 Form에 포커스를 줄 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).

---

## onbeforeclose

VFrameSet 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**
```javascript
onbeforeclose(obj:nexacro.VFrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VFrameSet | Event가 발생한 Object. |
| `e` | CloseEventInfo | Event Object. |

**Remark**
- 일반적으로 어플리케이션 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- onbeforeclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   VFrameSet 의 하위 오브젝트에 onbeforeclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onbeforeclose 이벤트 수행 후 각 이벤트의 리턴값은 누적되어 종료를 위한 확인창에 모두 표시됩니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onclose 이벤트가 발생하고 VFrameSet 이 종료됩니다.
   종료를 위한 확인창에서 "취소"를 선택하면 onclose 이벤트가 발생하지 않고 VFrameSet 이 종료되지 않습니다.

---

## onclose

VFrameSet 이 종료될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onclose(obj:nexacro.VFrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VFrameSet | Event가 발생한 Object. |
| `e` | CloseEventInfo | Event Object. |

**Remark**
- onclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   VFrameSet 의 하위 오브젝트에 onclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onclose 이벤트 수행 후 VFrameSet 이 종료됩니다.

---

## ondeactivate

VFrameSet 이 비활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondeactivate(obj:nexacro.VFrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VFrameSet | Event가 발생한 Object. |
| `e` | ActivateEventInfo | Event Object. |

**Remark**
- 앱이 비활성화될 때 이벤트가 발생합니다.
- Form > ChildFrame > [Frameset] > MainFrame 순으로 이벤트가 발생합니다.
  ChildFrame 의 formurl 속성에 지정된 Form에서 ondeactivate 이벤트가 발생 한 후에 ChildFrame 의 ondeactivate 이벤트가 발생합니다.
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     다른 앱이 활성화될 때
     홈 키를 입력할 때
     화면을 끌 때
  > iOS
     다른 앱이 활성화될 때
     화면을 끌 때
     키패드가 내려갈 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).

---

## onmove

VFrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmove(obj:nexacro.VFrameSet,e:nexacro.MoveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VFrameSet | Event가 발생한 Object. |
| `e` | MoveEventInfo | Event Object. |

---

## onorientationchange

모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onorientationchange(obj:nexacro.VFrameSet,e:nexacro.OrientationChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VFrameSet | Event가 발생한 Object. |
| `e` | OrientationChangeEventInfo | Event Object. |

**Remark**
- onorientationchange  이벤트는 상위에서 하위로 이벤트가 발생합니다.
  모바일 기기의 방향 전환 시 MainFrame 의 onorientationchange 이벤트가 처음 발생한 후 Frame, Form 순서로 이벤트가 발생합니다.
  이때, preventDefault() 메소드로 이벤트 발생을 중지시킬 수 없습니다.

- onorientationchange 이벤트 내에서 MainFrame 크기 또는 시스템에서 값을 얻는 속성에 접근 시 변경된 값이 전달되지 않을 수 있습니다.
  모바일 기기마다 시스템 관련값의 갱신 시점이 다르고, onorientationchange 이벤트는 기기의 방향이 전환된 즉시 발생하기 때문입니다.

---

## onsize

VFrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsize(obj:nexacro.VFrameSet,e:nexacro.SizeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VFrameSet | Event가 발생한 Object. |
| `e` | SizeEventInfo | Event Object. |

---

## onsyscommand

VFrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsyscommand(obj:nexacro.VFrameSet,e:nexacro.SysCommandEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VFrameSet | Event가 발생한 Object. |
| `e` | SysCommandEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 프레임으로 이벤트가 전파됩니다.

- 이벤트가 상위로 전파되는 중간에 이벤트 리턴값으로 false 가 반환되면 상위 프레임으로 이벤트가 전파되지 않고 시스템명령이 취소됩니다.

- 프레임의 최소/최대 버튼이 클릭되었을 때 onsyscommand 이벤트에서 false 를 반환하면 최소/최대화 명령이 취소됩니다.

---
