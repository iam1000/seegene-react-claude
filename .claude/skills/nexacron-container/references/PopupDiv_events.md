# PopupDiv Events

| Event | Description |
|-------|-------------|
| `onclick` | PopupDiv 영역 내에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |
| `oncloseup` | 화면에 표시된 PopupDiv 가 닫힐 때 발생하는 이벤트입니다. |
| `oncontextmenu` | PopupDiv 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| `ondevicebuttonup` | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `ondrag` | PopupDiv 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| `ondragenter` | PopupDiv 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| `ondragleave` | PopupDiv 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| `ondragmove` | PopupDiv 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| `ondrop` | PopupDiv 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onhscroll` | PopupDiv 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |
| `onkeydown` | PopupDiv 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| `onkeyup` | PopupDiv 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| `onkillfocus` | PopupDiv 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| `onlbuttondown` | PopupDiv 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onlbuttonup` | PopupDiv 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onmousedown` | PopupDiv 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다. |
| `onmouseenter` | PopupDiv 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| `onmouseleave` | PopupDiv 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| `onmousemove` | PopupDiv 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| `onmouseup` | 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다. |
| `onmousewheel` | PopupDiv 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다. |
| `onmove` | PopupDiv 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| `onpopup` | PopupDiv 가 화면에 표시될 때 발생하는 Event 입니다. |
| `onrbuttondown` | PopupDiv 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onrbuttonup` | PopupDiv 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onsetfocus` | PopupDiv 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| `onsize` | PopupDiv 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| `ontouchend` | PopupDiv 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| `ontouchmove` | PopupDiv 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| `ontouchstart` | PopupDiv 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |
| `onvscroll` | PopupDiv 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |

---

## onclick

PopupDiv 영역 내에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onclick(obj:nexacro.PopupDiv,e:nexacro.ClickEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | ClickEventInfo | Event Object. |

**Remark**
- PopupDiv 영역 내에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

- 일부 컴포넌트는 아래 조건에서 onclick 이벤트가 발생하는 경우 ClickEventInfo 오브젝트의 좌표 관련 속성값은 모두 -1로 처리합니다.
  * 컴포넌트에 포커스가 주어진 상태에서 Basic Key Action에 설정된 키 입력 시
    - Space 또는 Enter 키: Button, FileDownload, ImageViewer   
    - Space 키: CheckBox  
  * hotkey 속성을 설정하고 해당 키 입력 시: Button, CheckBox  
  * defaultbutton, escapebutton 속성을 설정하고 Form에서 해당 키 입력 시: Button  
  * click 메소드 실행 시: Button

◆ Desktop WRE 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

---

## oncloseup

화면에 표시된 PopupDiv 가 닫힐 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncloseup(obj:nexacro.PopupDiv,e:nexacro.EventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | EventInfo | Event Object. |

**Remark**
- 화면에 표시된 PopupDiv를 닫는 방법은 아래와 같습니다.
  1. closePopup() 메소드를 실행했을 경우.
  2. 마우스로 PopupDiv 영역이 아닌 부분을 선택했을 경우.

---

## oncontextmenu

PopupDiv 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncontextmenu(obj:nexacro.PopupDiv,e:nexacro.ContextMenuEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | ContextMenuEventInfo | Event Object. |

**Remark**
- 모바일 환경에서는 터치를 일정시간 유지하면 oncontextmenu 이벤트가 발생합니다.

- PopupDiv 컴포넌트는 마우스 우클릭이나 터치에 의해 표시되는 기본팝업메뉴가 제공되지 않습니다.

◆ Desktop WRE 제약

- Chrome, Edge, Firefox 브라우저에서 오른쪽 마우스 클릭 시 이벤트 핸들러 함수 내에서 PopupDiv 컴포넌트의 trackPopup 또는 trackPopupByComponent 메소드를 실행해 PopupDiv 컴포넌트가 표시되면 PopupDiv 컴포넌트의 oncontextmenu 이벤트가 발생합니다.
  넥사크로에서 의도된 동작은 아니며 브라우저 특성에 따라 이벤트가 발생하는 현상입니다.

---

## ondevicebuttonup

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondevicebuttonup(obj:nexacro.PopupDiv,e:nexacro.DeviceButtonEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | DeviceButtonEventInfo | Event Object. |

**Remark**
- 디바이스 버튼을 눌렀다 뗄 때 이벤트가 발생합니다.

- 버튼 형식은 MENU(1),  CANCEL(2) 2종류 입니다.

- 일부 기종에서 CANCEL 버튼을 long press 해야 MENU key event가 발생합니다.

---

## ondrag

PopupDiv 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondrag(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- PopupDiv 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.

---

## ondragenter

PopupDiv 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragenter(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 PopupDiv 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.

---

## ondragleave

PopupDiv 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragleave(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 PopupDiv 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.

---

## ondragmove

PopupDiv 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondragmove(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 PopupDiv 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.

---

## ondrop

PopupDiv 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondrop(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | DragEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- PopupDiv 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

---

## onhscroll

PopupDiv 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onhscroll(obj:nexacro.PopupDiv,e:nexacro.ScrollEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | ScrollEventInfo | Event Object. |

---

## onkeydown

PopupDiv 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeydown(obj:nexacro.PopupDiv,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
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

PopupDiv 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeyup(obj:nexacro.PopupDiv,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | KeyEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeyup 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.

---

## onkillfocus

PopupDiv 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkillfocus(obj:nexacro.PopupDiv,e:nexacro.KillFocusEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | KillFocusEventInfo | Event Object. |

**Remark**
- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 PopupDiv 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 PopupDiv 에서 포커스 관련 이벤트가 발생하지 않습니다.

---

## onlbuttondown

PopupDiv 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttondown(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- PopupDiv 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment 는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onlbuttonup

PopupDiv 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttonup(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onlbuttonup 이벤트는 마우스의 왼쪽버튼을 떼었을 때 마우스의 위치와 관계없이 onlbuttondown 이벤트가 발생했던 컴포넌트에서 발생합니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onmousedown

PopupDiv 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousedown(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onmouseenter

PopupDiv 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseenter(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
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

PopupDiv 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseleave(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
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

PopupDiv 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousemove(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
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

## onmouseup

마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseup(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onmouseup 이벤트는 onmousedown 이벤트와 관계없이 마우스 나머지 버튼을 떼었을 때 마우스가 위치한 컴포넌트에서 발생합니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onmousewheel

PopupDiv 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousewheel(obj:nexacro.PopupDiv,e:nexacro.MouseWheelEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | MouseWheelEventInfo | Event Object. |

**Remark**
- 다른 컴포넌트와 달리 PopupDiv 컴포넌트의 onmousewheel 이벤트는 상위 컴포넌트로 전파되지 않습니다.

- Control 키를 누른 상태에서 휠버튼을 회전시키면 환경에 따라 아래와 같이 Zoom 이 발생합니다.
   > Windows NRE 는 window 화면단위로 50%~200% 범위 내에서 10% 단위로 Zoom 이 변경됩니다.
   > Desktop WRE는 웹 브라우저에서 지원하는 범위/간격에 따라 Zoom이 변경됩니다.

- Zoom 상태로 전환될 때 PopupDiv 에서 이벤트가 발생하고 팝업이 닫히므로 스크립트 작성 시 주의하여야 합니다.
   이 때, 스크롤은 처리되지 않으며 e.ctrlkey 속성값이 true 로 설정됩니다.

---

## onmove

PopupDiv 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmove(obj:nexacro.PopupDiv,e:nexacro.MoveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | MoveEventInfo | Event Object. |

---

## onpopup

PopupDiv 가 화면에 표시될 때 발생하는 Event 입니다.

**Syntax**
```javascript
onpopup(obj:nexacro.PopupDiv,e:nexacro.EventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | EventInfo | Event Object. |

---

## onrbuttondown

PopupDiv 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttondown(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
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

PopupDiv 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttonup(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
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

PopupDiv 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsetfocus(obj:nexacro.PopupDiv,e:nexacro.SetFocusEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | SetFocusEventInfo | Event Object. |

**Remark**
- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 PopupDiv 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 PopupDiv 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 PopupDiv 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
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

PopupDiv 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsize(obj:nexacro.PopupDiv,e:nexacro.SizeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | SizeEventInfo | Event Object. |

---

## ontouchend

PopupDiv 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchend(obj:nexacro.PopupDiv,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchmove

PopupDiv 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchmove(obj:nexacro.PopupDiv,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchstart

PopupDiv 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchstart(obj:nexacro.PopupDiv,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## onvscroll

PopupDiv 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onvscroll(obj:nexacro.PopupDiv,e:nexacro.ScrollEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | PopupDiv | Event가 발생한 Object. |
| `e` | ScrollEventInfo | Event Object. |

---
