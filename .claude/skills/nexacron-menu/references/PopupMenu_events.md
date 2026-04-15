# PopupMenu Events

| Event | Description |
|-------|-------------|
| `oncloseup` | 화면에 표시된 PopupMenu가 닫힐 때 발생하는 이벤트입니다. |
| `oncontextmenu` | PopupMenu 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| `ondrag` | PopupMenu 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| `ondragenter` | PopupMenu 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| `ondragleave` | PopupMenu 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| `ondragmove` | PopupMenu 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| `ondrop` | PopupMenu 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| `oninnerdatachanged` | PopupMenu 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다. |
| `onkeydown` | PopupMenu 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| `onkeyup` | PopupMenu 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| `onlbuttondown` | PopupMenu 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onlbuttonup` | PopupMenu 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onmenuclick` | PopupMenu 의 메뉴 아이템을 마우스 왼쪽 버튼으로 클릭했을 때 발생하는 이벤트입니다. |
| `onmousedown` | PopupMenu 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다. |
| `onmouseenter` | PopupMenu 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| `onmouseleave` | PopupMenu 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| `onmousemove` | PopupMenu 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| `onmouseup` | 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다. |
| `onmove` | PopupMenu 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| `onpopup` | PopupMenu 가 화면에 표시될 때 발생하는 Event 입니다. |
| `onrbuttondown` | PopupMenu 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onrbuttonup` | PopupMenu 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onsize` | PopupMenu 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| `ontouchend` | PopupMenu 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| `ontouchmove` | PopupMenu 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| `ontouchstart` | PopupMenu 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |

---

## oncloseup

화면에 표시된 PopupMenu가 닫힐 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncloseup(obj:nexacro.PopupMenu,e:nexacro.EventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | EventInfo | Event Object. |

**Remark**
- 화면에 표시된 PopupMenu를 닫는 방법은 아래와 같습니다.
  1. 마우스로 메뉴 아이템을 선택하는 경우.
  2. 마우스로 PopupMenu 영역이 아닌 부분을 선택했을 경우.

---

## oncontextmenu

PopupMenu 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncontextmenu(obj:nexacro.PopupMenu,e:nexacro.MenuContextMenuEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuContextMenuEventInfo | Event Object. |

**Remark**
- 모바일 환경에서는 터치를 일정시간 유지하면 oncontextmenu 이벤트가 발생합니다.

- PopupMenu 컴포넌트는 마우스 우클릭이나 터치에 의해 표시되는 기본팝업메뉴가 제공되지 않습니다.

◆ Desktop WRE 제약

- Chrome, Edge, Firefox 브라우저에서 오른쪽 마우스 클릭 시 이벤트 핸들러 함수 내에서 PopupMenu 컴포넌트의 trackPopup 또는 trackPopupByComponent 메소드를 실행해 PopupMenu 컴포넌트가 표시되면 PopupMenu 컴포넌트의 oncontextmenu 이벤트가 발생합니다.
  넥사크로에서 의도된 동작은 아니며 브라우저 특성에 따라 이벤트가 발생하는 현상입니다.

---

## ondrag

PopupMenu 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondrag(obj:nexacro.PopupMenu,e:nexacro.MenuDragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuDragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- PopupMenu 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.

---

## ondragenter

PopupMenu 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragenter(obj:nexacro.PopupMenu,e:nexacro.MenuDragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuDragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 PopupMenu 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.

---

## ondragleave

PopupMenu 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragleave(obj:nexacro.PopupMenu,e:nexacro.MenuDragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuDragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 PopupMenu 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.

---

## ondragmove

PopupMenu 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragmove(obj:nexacro.PopupMenu,e:nexacro.MenuDragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuDragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 PopupMenu 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.

---

## ondrop

PopupMenu 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondrop(obj:nexacro.PopupMenu,e:nexacro.MenuDragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuDragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- PopupMenu 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

---

## oninnerdatachanged

PopupMenu 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
oninnerdatachanged(obj:nexacro.PopupMenu,e:nexacro.InnerdataChangedEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | InnerdataChangedEventInfo | Event Object. |

**Remark**
- innerdataset 속성에 바인딩된 DataSet 의 Data 가 변경되면 oninnerdatachanged 이벤트가 발생합니다.
  일반적으로 DataSet 에서 onvaluechanged 이벤트가 발생한 후 변경된 값이 바인딩된 객체에 영향을 미칠때 이벤트가 발생합니다.
  예를 들어 DataSet 의 Data 변경에 의해 PopupMenu 의 아이템 길이가 변경되면 이벤트가 발생합니다.

- 컴포넌트 크기가 innerdataset 속성에 바인딩된 DataSet 값에 의해 변경되어 화면의 재배열이 필요할 경우 해당 이벤트에 정의합니다.

---

## onkeydown

PopupMenu 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeydown(obj:nexacro.PopupMenu,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
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

PopupMenu 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeyup(obj:nexacro.PopupMenu,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | KeyEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeyup 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.

---

## onlbuttondown

PopupMenu 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttondown(obj:nexacro.PopupMenu,e:nexacro.MenuMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuMouseEventInfo | Event Object. |

**Remark**
- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- PopupMenu 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onlbuttonup

PopupMenu 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttonup(obj:nexacro.PopupMenu,e:nexacro.MenuMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuMouseEventInfo | Event Object. |

**Remark**
- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onlbuttonup 이벤트는 마우스의 왼쪽버튼을 떼었을 때 마우스의 위치와 관계없이 onlbuttondown 이벤트가 발생했던 컴포넌트에서 발생합니다.


◆ WRE 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onmenuclick

PopupMenu 의 메뉴 아이템을 마우스 왼쪽 버튼으로 클릭했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmenuclick(obj:nexacro.PopupMenu,e:nexacro.MenuClickEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuClickEventInfo | Event Object. |

**Remark**
- 메뉴 아이템 영역 내에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

- 하위 메뉴가 있는 아이템은 마우스 클릭을 해도 onmenuclick 이벤트가 발생되지 않습니다.

---

## onmousedown

PopupMenu 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousedown(obj:nexacro.PopupMenu,e:nexacro.MenuMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuMouseEventInfo | Event Object. |

**Remark**
- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onmouseenter

PopupMenu 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseenter(obj:nexacro.PopupMenu,e:nexacro.MenuMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuMouseEventInfo | Event Object. |

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

PopupMenu 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseleave(obj:nexacro.PopupMenu,e:nexacro.MenuMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuMouseEventInfo | Event Object. |

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

PopupMenu 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousemove(obj:nexacro.PopupMenu,e:nexacro.MenuMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuMouseEventInfo | Event Object. |

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

## onmouseup

마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseup(obj:nexacro.PopupMenu,e:nexacro.MenuMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuMouseEventInfo | Event Object. |

**Remark**
- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onmouseup 이벤트는 onmousedown 이벤트와 관계없이 마우스 나머지버튼을 떼었을 때 마우스가 위치한 컴포넌트에서 발생합니다.


◆ WRE 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onmove

PopupMenu 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmove(obj:nexacro.PopupMenu,e:nexacro.MoveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MoveEventInfo | Event Object. |

---

## onpopup

PopupMenu 가 화면에 표시될 때 발생하는 Event 입니다.

**Syntax**
```javascript
onpopup(obj:nexacro.PopupMenu,e:nexacro.EventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | EventInfo | Event Object. |

---

## onrbuttondown

PopupMenu 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttondown(obj:nexacro.PopupMenu,e:nexacro.MenuMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuMouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- Web Runtime Environment에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttondown 이벤트를 정의하지 않습니다.

---

## onrbuttonup

PopupMenu 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttonup(obj:nexacro.PopupMenu,e:nexacro.MenuMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | MenuMouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onrbuttonup 이벤트는 onrbuttondown 이벤트와 관계없이 마우스 오른쪽버튼을 떼었을 때 마우스가 위치한 컴포넌트에서 발생합니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- Web Runtime Environment에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttonup 이벤트를 정의하지 않습니다.

---

## onsize

PopupMenu 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsize(obj:nexacro.PopupMenu,e:nexacro.SizeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | SizeEventInfo | Event Object. |

---

## ontouchend

PopupMenu 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchend(obj:nexacro.PopupMenu,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchmove

PopupMenu 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchmove(obj:nexacro.PopupMenu,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchstart

PopupMenu 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchstart(obj:nexacro.PopupMenu,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupMenu | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---
