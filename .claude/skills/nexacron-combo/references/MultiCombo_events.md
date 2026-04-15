# MultiCombo Events

| Event | Description |
|-------|-------------|
| `canitemchange` | MultiCombo 컴포넌트에서 아이템을 변경할 때 발생하는 이벤트입니다. |
| `oncloseup` | 화면에 표시된 아이템 리스트가 닫힐 때 발생하는 이벤트입니다. |
| `oncontextmenu` | MultiCombo 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| `ondevicebuttonup` | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `ondrag` | MultiCombo 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| `ondragenter` | MultiCombo 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| `ondragleave` | MultiCombo 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| `ondragmove` | MultiCombo 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| `ondrop` | MultiCombo 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| `ondropdown` | MultiCombo 컴포넌트의 아이템 리스트가 화면에 표시될 때 발생하는 이벤트입니다. |
| `oneditclick` | MultiCombo 컴포넌트의 편집 영역에서 마우스로 컴포넌트를 눌렀다가 떼었을 때 발생하는 이벤트입니다. |
| `oninnerdatachanged` | MultiCombo 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다. |
| `oninput` | MultiCombo 에서 입력을 시도할 때 발생하는 이벤트 입니다. |
| `onitemchanged` | MultiCombo 컴포넌트에서 아이템이 변경된 후 발생하는 이벤트입니다. |
| `onitemclick` | 아이템 리스트에서 아이템을 클릭했을 때 발생하는 이벤트입니다. |
| `onkeydown` | MultiCombo 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| `onkeyup` | MultiCombo 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| `onkillfocus` | MultiCombo 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| `onlbuttondown` | MultiCombo 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onlbuttonup` | MultiCombo 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onmouseenter` | MultiCombo 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| `onmouseleave` | MultiCombo 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| `onmousemove` | MultiCombo 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| `onmousewheel` | MultiCombo 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다. |
| `onmove` | MultiCombo 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| `onrbuttondown` | MultiCombo 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onrbuttonup` | MultiCombo 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onsetfocus` | MultiCombo 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| `onsize` | MultiCombo 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| `ontouchend` | MultiCombo 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| `ontouchmove` | MultiCombo 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| `ontouchstart` | MultiCombo 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |

---

## canitemchange

MultiCombo 컴포넌트에서 아이템을 변경할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
canitemchange(obj:nexacro.MultiCombo,e:nexacro.ItemChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | ItemChangeEventInfo | Event Object. |

**Remark**
- Dataset 오브젝트가 바인딩되어 있다면 Dataset 오브젝트에 변경된 아이템이 적용되기 전에 이벤트가 발생합니다.

- 사용자의 입력에 의해 아이템이 변경되었을 때만 canitemchange 이벤트가 발생합니다.
  스크립트에 의해 아이템이 변경되었을 때는 이벤트가 발생하지 않습니다.

- 검색기능을 이용해 키보드로 아이템을 변경하는 경우는 엔터키로 아이템을 선택하거나 포커스가 MultiCombo 컴포넌트에서 나갈 때 이벤트가 발생합니다.

---

## oncloseup

화면에 표시된 아이템 리스트가 닫힐 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncloseup(obj:nexacro.MultiCombo,e:nexacro.ComboCloseUpEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | ComboCloseUpEventInfo | Event Object. |

**Remark**
- 화면에 표시된 아이템 리스트를 닫는 방법은 아래와 같습니다.
  1. 마우스로 아이템 리스트 영역이 아닌 부분을 선택했을 경우.
  2. 키보드로 Esc 키를 누를 경우.

- MultiCombo 컴포넌트의 아이템이 변경되면 canitemchange -> onitemchanged -> oncloseup 순서로 이벤트가 발생합니다.

---

## oncontextmenu

MultiCombo 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncontextmenu(obj:nexacro.MultiCombo,e:nexacro.ContextMenuEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | ContextMenuEventInfo | Event Object. |

**Remark**
- 모바일 환경에서는 터치를 일정시간 유지하면 oncontextmenu 이벤트가 발생합니다.

- MultiCombo 컴포넌트는 마우스 우클릭이나 터치에 의해 표시되는 기본팝업메뉴가 제공되지 않습니다.

---

## ondevicebuttonup

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondevicebuttonup(obj:nexacro.MultiCombo,e:nexacro.DeviceButtonEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | DeviceButtonEventInfo | Event Object. |

**Remark**
- 디바이스 버튼을 눌렀다 뗄 때 이벤트가 발생합니다.

- 버튼 형식은 MENU(1),  CANCEL(2) 2종류 입니다.

- 일부 기종에서 CANCEL 버튼을 long press 해야 MENU key event가 발생합니다.

---

## ondrag

MultiCombo 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondrag(obj:nexacro.MultiCombo,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- MultiCombo 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.

---

## ondragenter

MultiCombo 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragenter(obj:nexacro.MultiCombo,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 MultiCombo 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.

---

## ondragleave

MultiCombo 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragleave(obj:nexacro.MultiCombo,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 MultiCombo 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.

---

## ondragmove

MultiCombo 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragmove(obj:nexacro.MultiCombo,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 MultiCombo 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.

---

## ondrop

MultiCombo 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondrop(obj:nexacro.MultiCombo,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- MultiCombo 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

---

## ondropdown

MultiCombo 컴포넌트의 아이템 리스트가 화면에 표시될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondropdown(obj:nexacro.MultiCombo,e:nexacro.EventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | EventInfo | Event Object. |

**Remark**
- MultiCombo 컴포넌트의 dropdown() 메서드로 아이템 리스트가 화면에 표시되어도 ondropdown 이벤트가 발생합니다.

- MultiCombo 컴포넌트의 검색기능에 의해 자동으로 아이템 리스트가 표시되어도 ondropdown 이벤트가 발생합니다.

---

## oneditclick

MultiCombo 컴포넌트의 편집 영역에서 마우스로 컴포넌트를 눌렀다가 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oneditclick(obj:nexacro.MultiCombo,e:nexacro.EditClickEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | EditClickEventInfo | Event Object. |

**Remark**
oneditclick 이벤트는 컴포넌트 내부의 편집 영역에서 마우스의 lbuttondown & lbuttonup이 동시에 발생되었을 경우 발생됩니다.  예외적으로 컴포넌트 내부에서 드래그가 발생된 경우 이벤트가 발생되지 않습니다.

---

## oninnerdatachanged

MultiCombo 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
oninnerdatachanged(obj:nexacro.MultiCombo,e:nexacro.InnerdataChangedEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | InnerdataChangedEventInfo | Event Object. |

**Remark**
- innerdataset 속성에 바인딩된 DataSet 의 Data 가 변경되면 oninnerdatachanged 이벤트가 발생합니다.
  일반적으로 DataSet 에서 onvaluechanged 이벤트가 발생한 후 변경된 값이 바인딩된 객체에 영향을 미칠때 이벤트가 발생합니다.
  예를 들어 DataSet 의 Data 변경에 의해 MultiCombo 의 아이템 길이가 변경되면 이벤트가 발생합니다.

- 컴포넌트 크기가 innerdataset 속성에 바인딩된 DataSet 값에 의해 변경되어 화면의 재배열이 필요할 경우 해당 이벤트에 정의합니다.

---

## oninput

MultiCombo 에서 입력을 시도할 때 발생하는 이벤트 입니다.

**Syntax**
```javascript
oninput(obj:nexacro.MultiCombo,e:nexacro.InputEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | InputEventInfo | Event Object. |

**Remark**
- 조합문자 입력시 oninput 이벤트가 한번 이상 발생할 수 있습니다.


◆ web runtime environment 제약

- 동일한 입력에 대해 브라우저의 특성에 따라 oninput 이벤트 발생횟수가 다를 수 있습니다.

- 조합문자 입력확정 동작에서 oninput 이벤트가 발생하지 않는 브라우저가 있을 수 있습니다.
   조합문자 입력확정 동작은 입력시도로 볼 수 없기 때문에 oninput 이벤트의 발생을 보장하지 않습니다.

---

## onitemchanged

MultiCombo 컴포넌트에서 아이템이 변경된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onitemchanged(obj:nexacro.MultiCombo,e:nexacro.ItemChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | ItemChangeEventInfo | Event Object. |

**Remark**
- 사용자의 입력에 의해 아이템이 변경되었을 때만 onitemchanged 이벤트가 발생합니다.
  스크립트에 의해 아이템이 변경되었을 때는 이벤트가 발생하지 않습니다.

- index, value, text 속성값이 한 개 이상 변경되면 onitemchanged 이벤트가 발생합니다.

- Dataset 오브젝트가 바인딩되어 있다면 변경된 아이템이 Dataset 오브젝트에 적용된 후 onitemchanged 이벤트가 발생합니다.

- MultiCombo 컴포넌트의 아이템이 변경되면 canitemchange -> onitemchanged -> oncloseup 순서로 이벤트가 발생합니다.

---

## onitemclick

아이템 리스트에서 아이템을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onitemclick(obj:nexacro.MultiCombo,e:nexacro.ItemClickEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | ItemClickEventInfo | Event Object. |

**Remark**
- 아이템 리스트에서 마우스 왼쪽 버튼을 Down&Up 하면 이벤트가 발생합니다.

- 마우스 선택으로 아이템이 변경되었다면 onitemclick -> canitemchange 순서로 이벤트가 발생합니다.

---

## onkeydown

MultiCombo 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeydown(obj:nexacro.MultiCombo,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | KeyEventInfo | Event Object. |

---

## onkeyup

MultiCombo 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeyup(obj:nexacro.MultiCombo,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | KeyEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeyup 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.

---

## onkillfocus

MultiCombo 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkillfocus(obj:nexacro.MultiCombo,e:nexacro.KillFocusEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | KillFocusEventInfo | Event Object. |

**Remark**
- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 MultiCombo 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 MultiCombo 에서 포커스 관련 이벤트가 발생하지 않습니다.

---

## onlbuttondown

MultiCombo 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttondown(obj:nexacro.MultiCombo,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- MultiCombo 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment 는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onlbuttonup

MultiCombo 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttonup(obj:nexacro.MultiCombo,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
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

MultiCombo 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseenter(obj:nexacro.MultiCombo,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
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

MultiCombo 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseleave(obj:nexacro.MultiCombo,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
◆ 웹브라우저 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
  마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- 웹브라우저에서는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onmousemove

MultiCombo 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousemove(obj:nexacro.MultiCombo,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
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

## onmousewheel

MultiCombo 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousewheel(obj:nexacro.MultiCombo,e:nexacro.MouseWheelEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | MouseWheelEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값과 스크롤 조건에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- MultiCombo 에서 마우스의 휠버튼 회전값을 처리할 필요가 없을 때 상위 컴포넌트로 휠버튼 회전값과 이벤트가 전파됩니다.
   즉, MultiCombo 에서 스크롤이 이동될 때는 상위로 이벤트가 전파되지 않고, 스크롤이 처음이나 마지막 상태일 때 상위로 이벤트가 전파됩니다.

- Control 키를 누른 상태에서 휠버튼을 회전시키면 환경에 따라 아래와 같이 Zoom 이 발생합니다.
   > Windows NRE 는 window 화면단위로 50%~200% 범위 내에서 10% 단위로 Zoom 이 변경됩니다.
   > Desktop WRE는 웹 브라우저에서 지원하는 범위/간격에 따라 Zoom이 변경됩니다.

- Zoom 상태에서도 MultiCombo 에서 이벤트가 발생하고 리턴값에 따라 상위로 전파되므로 스크립트 작성 시 주의하여야 합니다.
   이 때, 스크롤은 처리되지 않으며 e.ctrlkey 속성값이 true 로 설정됩니다.

---

## onmove

MultiCombo 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmove(obj:nexacro.MultiCombo,e:nexacro.MoveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | MoveEventInfo | Event Object. |

---

## onrbuttondown

MultiCombo 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttondown(obj:nexacro.MultiCombo,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- Web Runtime Environment에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttondown 이벤트를 정의하지 않습니다.

---

## onrbuttonup

MultiCombo 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttonup(obj:nexacro.MultiCombo,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onrbuttonup 이벤트는 onrbuttondown 이벤트와 관계없이 마우스 오른쪽버튼을 떼었을 때 마우스가 위치한 컴포넌트에서 발생합니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- Web Runtime Environment에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttonup 이벤트를 정의하지 않습니다.

---

## onsetfocus

MultiCombo 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsetfocus(obj:nexacro.MultiCombo,e:nexacro.SetFocusEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | SetFocusEventInfo | Event Object. |

**Remark**
- 서로 다른 애플리케이션을 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showMoadl(), open() 메소드에 의해 표시된 프레임으로 포커스가 이동되어도 포커스 관련 이벤트가 발생하지 않습니다.

- alert(), confirm() 메소드에 의해 표시된 팝업창으로 포커스가 이동되어도 포커스 관련 이벤트가 발생하지 않습니다.

---

## onsize

MultiCombo 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsize(obj:nexacro.MultiCombo,e:nexacro.SizeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | SizeEventInfo | Event Object. |

---

## ontouchend

MultiCombo 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchend(obj:nexacro.MultiCombo,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchmove

MultiCombo 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchmove(obj:nexacro.MultiCombo,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchstart

MultiCombo 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchstart(obj:nexacro.MultiCombo,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | MultiCombo | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---
