# Calendar Events

| Event | Description |
|-------|-------------|
| `canchange` | Calendar에서 선택된 날짜와 value 속성값이 다를 때 발생하는 이벤트입니다. |
| `onchanged` | Calendar 의 날짜가 변경된 후 발생하는 이벤트입니다. |
| `oncloseup` | 화면에 표시된 팝업달력이 닫힐 때 발생하는 이벤트입니다. |
| `oncontextmenu` | Calendar 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| `ondayclick` | Calendar의 날짜를 클릭할 때 발생하는 이벤트입니다. |
| `ondevicebuttonup` | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `ondrag` | Calendar 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| `ondragenter` | Calendar 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| `ondragleave` | Calendar 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| `ondragmove` | Calendar 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| `ondrop` | Calendar 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| `ondropdown` | Calendar 의 달력버튼을 클릭하여 팝업달력이 화면에 표시될 때 발생하는 이벤트입니다. |
| `oneditclick` | Calendar 의 편집 영역에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |
| `oninnerdatachanged` | Calendar 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다. |
| `oninput` | Calendar 에서 입력을 시도할 때 발생하는 이벤트 입니다. |
| `onkeydown` | Calendar 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| `onkeyup` | Calendar 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| `onkillfocus` | Calendar 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| `onlbuttondown` | Calendar 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onlbuttonup` | Calendar 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onmouseenter` | Calendar 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| `onmouseleave` | Calendar 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| `onmousemove` | Calendar 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| `onmove` | Calendar 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| `onrbuttondown` | Calendar 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onrbuttonup` | Calendar 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onsetfocus` | Calendar 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| `onsize` | Calendar 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| `onspin` | type속성값이 "spin"인 Calendar의 스핀버튼을 클릭할때 발생하는 이벤트입니다. |
| `ontouchend` | Calendar 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| `ontouchmove` | Calendar 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| `ontouchstart` | Calendar 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |

---

## canchange

Calendar에서 선택된 날짜와 value 속성값이 다를 때 발생하는 이벤트입니다.

**Syntax**
```javascript
canchange(obj:nexacro.Calendar,e:nexacro.ChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | ChangeEventInfo | Event Object. |

**Remark**
- type 속성값이 "normal" 또는 "monthonly" 일 때 발생하는 이벤트입니다.

- 날짜를 키보드로 입력하는 경우는 엔터키가 입력되거나 포커스가 나갈 때 이벤트가 발생합니다.

- 마우스 왼쪽 버튼으로 팝업달력에 Down&Up 하면 이벤트가 발생합니다.

- type 속성값이 "normal"일 때 이벤트의 리턴값으로 false를 반환하면 화면에 표시된 팝업달력이 닫히지 않고 날짜도 변경되지 않습니다.
  canchange 이벤트의 리턴값이 true이지만 바인딩된 Dataset 오브젝트의 setColumn 실행 결과가 false 인 경우에는 팝업달력은 닫히고 날짜는 변경되지 않습니다.

- type 속성값이 "monthonly"일 때 이벤트의 리턴값으로 false를 반환하면 선택한 날짜로 변경되지 않습니다.

---

## onchanged

Calendar 의 날짜가 변경된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onchanged(obj:nexacro.Calendar,e:nexacro.ChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | ChangeEventInfo | Event Object. |

**Remark**
- type 속성값이 "normal" 또는 "monthonly" 일 때 발생하는 이벤트입니다.

- type 속성값이 "normal"이면 canchange -> oncloseup -> onchanged 순서로 이벤트가 발생합니다.

- type 속성값이 "monthonly"이면 oncloseup 이벤트는 발생하지 않습니다.

- canchange 이벤트에서 "false"를 반환하면 onchanged 이벤트는 발생하지 않습니다.

---

## oncloseup

화면에 표시된 팝업달력이 닫힐 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncloseup(obj:nexacro.Calendar,e:nexacro.CalendarCloseUpEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | CalendarCloseUpEventInfo | Event Object. |

**Remark**
- type 속성값이 "normal" 일때만 발생하는 이벤트입니다.

- DropDown 된 달력을 닫는 방법은 아래와 같습니다.
  1. 마우스로 팝업달력의 날자를 선택하는 경우.
  2. 마우스로 팝업달력 영역이 아닌 부분을 선택했을 경우.
  3. 키보드로 Esc 키를 누를 경우.

---

## oncontextmenu

Calendar 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncontextmenu(obj:nexacro.Calendar,e:nexacro.ContextMenuEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | ContextMenuEventInfo | Event Object. |

**Remark**
- 모바일 환경에서는 터치를 일정시간 유지하면 oncontextmenu 이벤트가 발생합니다.


◆ web runtime environment 제약

- web runtime environment 에서 기본팝업메뉴(ContextMenu)는 사용하는 브라우저에 따라 다르게 보입니다.

---

## ondayclick

Calendar의 날짜를 클릭할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondayclick(obj:nexacro.Calendar,e:nexacro.CalendarDayClickEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | CalendarDayClickEventInfo | Event Object. |

**Remark**
- 마우스 왼쪽 버튼으로 Down&Up 하면 이벤트가 발생합니다.

- type 속성값이 "normal" 또는 "monthonly" 일 때 발생하는 이벤트입니다.

- Calendar에서 선택된 날짜와 value값이 다르면  ondayclick -> canchange -> onchanged 순서로 이벤트가 발생합니다.
  선택된 날짜와 value값이 같으면 canchange 이벤트는 발생하지 않습니다.

- type 속성값이 "normal"이면 ondayclick -> canchange -> oncloseup -> onchanged 순서로 이벤트가 발생합니다.

- type 속성값이 "monthonly"이면 oncloseup 이벤트는 발생하지 않습니다.

---

## ondevicebuttonup

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondevicebuttonup(obj:nexacro.Calendar,e:nexacro.DeviceButtonEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | DeviceButtonEventInfo | Event Object. |

**Remark**
- 디바이스 버튼을 눌렀다 뗄 때 이벤트가 발생합니다.

- 버튼 형식은 MENU(1),  CANCEL(2) 2종류 입니다.

- 일부 기종에서 CANCEL 버튼을 long press 해야 MENU key event가 발생합니다.

---

## ondrag

Calendar 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondrag(obj:nexacro.Calendar,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Calendar 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.

---

## ondragenter

Calendar 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragenter(obj:nexacro.Calendar,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 Calendar 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.

---

## ondragleave

Calendar 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragleave(obj:nexacro.Calendar,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 Calendar 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.

---

## ondragmove

Calendar 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragmove(obj:nexacro.Calendar,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 Calendar 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.

---

## ondrop

Calendar 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondrop(obj:nexacro.Calendar,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Calendar 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

---

## ondropdown

Calendar 의 달력버튼을 클릭하여 팝업달력이 화면에 표시될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondropdown(obj:nexacro.Calendar,e:nexacro.EventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | EventInfo | Event Object. |

**Remark**
- Calendar의 dropdown() 메소드 호출 시  ondropdown 이벤트가 발생하고 팝업달력이 표시됩니다.

---

## oneditclick

Calendar 의 편집 영역에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oneditclick(obj:nexacro.Calendar,e:nexacro.EditClickEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | EditClickEventInfo | Event Object. |

**Remark**
- Calendar 의 편집 영역에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

---

## oninnerdatachanged

Calendar 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
oninnerdatachanged(obj:nexacro.Calendar,e:nexacro.InnerdataChangedEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | InnerdataChangedEventInfo | Event Object. |

**Remark**
- innerdataset 속성에 바인딩된 DataSet 의 Data 가 변경되면 oninnerdatachanged 이벤트가 발생합니다.
  일반적으로 DataSet 에서 onvaluechanged 이벤트가 발생한 후 변경된 값이 바인딩된 객체에 영향을 미칠때 이벤트가 발생합니다.
  예를 들어 DataSet 의 Data 변경에 의해 Calendar 의 아이템 길이가 변경되면 이벤트가 발생합니다.

- 컴포넌트 크기가 innerdataset 속성에 바인딩된 DataSet 값에 의해 변경되어 화면의 재배열이 필요할 경우 해당 이벤트에 정의합니다.

---

## oninput

Calendar 에서 입력을 시도할 때 발생하는 이벤트 입니다.

**Syntax**
```javascript
oninput(obj:nexacro.Calendar,e:nexacro.InputEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | InputEventInfo | Event Object. |

**Remark**
- 조합문자 입력시 oninput 이벤트가 한번 이상 발생할 수 있습니다.

- oninput 이벤트에서 입력중인 값을 확인하려면 하위컨트롤인 calendaredit 의 value 속성에 접근하여야 합니다.
   입력중인 값은 하위컨트롤인 calendaredit 의 value 속성에 반영되며, Calendar 의 value 속성엔 입력한 값을 확정하면 반영됩니다.

- Calendar 의 value 속성값이 변경된 후 발생하는 이벤트는 onchanged 이벤트 입니다.


◆ web runtime environment 제약

- 동일한 입력에 대해 브라우저의 특성에 따라 oninput 이벤트 발생횟수가 다를 수 있습니다.

- 조합문자 입력확정 동작에서 oninput 이벤트가 발생하지 않는 브라우저가 있을 수 있습니다.
   조합문자 입력확정 동작은 입력시도로 볼 수 없기 때문에 oninput 이벤트의 발생을 보장하지 않습니다.

---

## onkeydown

Calendar 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeydown(obj:nexacro.Calendar,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | KeyEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeydown 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.

- onkeydown 이벤트는 키보드 관련 이벤트 중 키가 눌렸을 때 제일 먼저 발생하는 이벤트입니다.

- 키를 누르고 있을 경우 연속적으로 이벤트가 발생합니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.

---

## onkeyup

Calendar 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeyup(obj:nexacro.Calendar,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | KeyEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeyup 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.

---

## onkillfocus

Calendar 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkillfocus(obj:nexacro.Calendar,e:nexacro.KillFocusEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | KillFocusEventInfo | Event Object. |

**Remark**
- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Calendar 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Calendar 에서 포커스 관련 이벤트가 발생하지 않습니다.

---

## onlbuttondown

Calendar 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttondown(obj:nexacro.Calendar,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Calendar 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment 는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onlbuttonup

Calendar 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttonup(obj:nexacro.Calendar,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onlbuttonup 이벤트는 마우스의 왼쪽버튼을 떼었을 때 마우스의 위치와 관계없이 onlbuttondown 이벤트가 발생했던 컴포넌트에서 발생합니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onmouseenter

Calendar 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseenter(obj:nexacro.Calendar,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- onmouseenter 이벤트 발생 후 onmousemove 이벤트가 발생합니다.
  https://www.w3.org/TR/DOM-Level-3-Events/#events-mouseevent-event-order
  하지만 IE 브라우저는 onmousemove 이벤트가 먼저 발생합니다.
  실행 환경에 따라 이벤트 발생 순서가 달라질 수 있으니 주의해주세요.

◆ iPad 운영체제 제약 (블루투스 마우스 사용 시)

- iPadOS 14 이상 버전에서 블루투스 마우스 사용 시 onmouseenter 이벤트를 지원합니다.
  iPadOS 14 미만 버전은 onmouseenter 이벤트를 지원하지 않습니다.

---

## onmouseleave

Calendar 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseleave(obj:nexacro.Calendar,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

◆ iPad 운영체제 제약 (블루투스 마우스 사용 시)

- iPadOS 14 이상 버전에서 블루투스 마우스 사용 시 onmouseleave 이벤트를 지원합니다.
  iPadOS 14 미만 버전은 onmouseleave 이벤트를 지원하지 않습니다.

---

## onmousemove

Calendar 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousemove(obj:nexacro.Calendar,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

◆ iPad 운영체제 제약 (블루투스 마우스 사용 시)

- iPadOS 14 이상 버전에서 블루투스 마우스 사용 시 onmousemove 이벤트를 지원합니다.
  iPadOS 14 미만 버전은 onmousemove 이벤트를 지원하지 않습니다.

---

## onmove

Calendar 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmove(obj:nexacro.Calendar,e:nexacro.MoveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | MoveEventInfo | Event Object. |

---

## onrbuttondown

Calendar 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttondown(obj:nexacro.Calendar,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- Web Runtime Environment에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttondown 이벤트를 정의하지 않습니다.
   
- Safari 브라우저는 RButtonDown 액션에서 기본팝업메뉴가 표시되는 특성이 있습니다.
   기본팝업메뉴가 표시되면 onrbuttonup 이벤트가 발생하지 않습니다.
   onrbuttonup 이벤트 발생이 필요하다면 onrbuttondown 또는 oncontextmenu 이벤트에서 preventDefault() 메소드로
   Default Action 을 취소하거나 usecontextmenu 속성을 사용하여 기본팝업메뉴를 비활성화 시켜야 합니다.

---

## onrbuttonup

Calendar 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttonup(obj:nexacro.Calendar,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onrbuttonup 이벤트는 onrbuttondown 이벤트와 관계없이 마우스 오른쪽버튼을 떼었을 때 마우스가 위치한 컴포넌트에서 발생합니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- Web Runtime Environment에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttonup 이벤트를 정의하지 않습니다.

- Safari 브라우저는 RButtonDown 액션에서 기본팝업메뉴가 표시되는 특성이 있습니다.
   기본팝업메뉴가 표시되면 onrbuttonup 이벤트가 발생하지 않습니다.
   onrbuttonup 이벤트 발생이 필요하다면 onrbuttondown 또는 oncontextmenu 이벤트에서 preventDefault() 메소드로
   Default Action 을 취소하거나 usecontextmenu 속성을 사용하여 기본팝업메뉴를 비활성화 시켜야 합니다.

---

## onsetfocus

Calendar 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsetfocus(obj:nexacro.Calendar,e:nexacro.SetFocusEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | SetFocusEventInfo | Event Object. |

**Remark**
- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Calendar 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Calendar 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 Calendar 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
   > Nexacro Runtime Environment
       : 부모 Form 이 활성화 되어 onactivate 이벤트가 발생합니다.
         부모 Form 으로 포커스가 이동하며 "Frame 정렬"이 수행됩니다.
   > Web Runtime Environment
       : 브라우저 제약 때문에 부모 Form 은 활성화 되지 않으며 onactivate 이벤트가 발생하지 않습니다.
         부모 Form 으로 포커스가 이동하지 않지만 "Frame 정렬"은 수행됩니다.
   * "Frame 정렬" : FrameSet 의 자식 Frame 중 하나로 포커스가 이동하면 해당 Frame 이 동일레벨 Frame 중 상위에 표시됩니다.
         이 때, Frame 간 포커스 이동이 발생했다면 해당 Frame 의 Form 에서 onsetfocus 이벤트가 발생합니다.
         Frame 간 포커스 이동이 없다면 onsetfocus 이벤트가 발생하지 않습니다.

---

## onsize

Calendar 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsize(obj:nexacro.Calendar,e:nexacro.SizeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | SizeEventInfo | Event Object. |

---

## onspin

type속성값이 "spin"인 Calendar의 스핀버튼을 클릭할때 발생하는 이벤트입니다.

**Syntax**
```javascript
onspin(obj:nexacro.Calendar,e:nexacro.CalendarSpinEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | CalendarSpinEventInfo | Event Object. |

---

## ontouchend

Calendar 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchend(obj:nexacro.Calendar,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchmove

Calendar 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchmove(obj:nexacro.Calendar,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchstart

Calendar 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchstart(obj:nexacro.Calendar,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Calendar | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---
