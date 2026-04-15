# FileUpload Events

| Event | Description |
|-------|-------------|
| `onappenditem` | FileUpload 에 아이템이 추가된 후 발생하는 이벤트입니다. |
| `oncontextmenu` | FileUpload 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| `ondeleteitem` | FileUpload 에서 아이템이 삭제된 후 발생하는 이벤트입니다. |
| `ondevicebuttonup` | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onerror` | 파일 업로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다. |
| `onfindclick` | FileUpload 의 파일찾기버튼(fileitembutton)을 클릭했을 때 발생하는 이벤트입니다. |
| `onitemchanged` | FileUpload 에서 아이템 값이 변경된 후 발생하는 이벤트입니다. |
| `onitemclick` | FileUpload 의 파일경로 표시영역(fileitemedit)을 클릭했을 때 발생하는 이벤트입니다. |
| `onkeydown` | FileUpload 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| `onkeyup` | FileUpload 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| `onkillfocus` | FileUpload 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| `onlbuttondown` | FileUpload 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onlbuttonup` | FileUpload 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onmouseenter` | FileUpload 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| `onmouseleave` | FileUpload 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| `onmousemove` | FileUpload 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| `onmousewheel` | FileUpload 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다. |
| `onmove` | FileUpload 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| `onrbuttondown` | FileUpload 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onrbuttonup` | FileUpload 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| `onsetfocus` | FileUpload 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| `onsize` | FileUpload 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| `onsuccess` | 파일 업로드가 완료되었을 때 발생하는 이벤트입니다. |
| `ontouchend` | FileUpload 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| `ontouchmove` | FileUpload 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| `ontouchstart` | FileUpload 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |

---

## onappenditem

FileUpload 에 아이템이 추가된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onappenditem(obj:nexacro.FileUpload,e:nexacro.FileUploadItemEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadItemEventInfo | Event Object. |

**Remark**
- appendItem() 메소드로 아이템이 추가되면 발생하는 이벤트입니다.

---

## oncontextmenu

FileUpload 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncontextmenu(obj:nexacro.FileUpload,e:nexacro.FileUploadContextMenuEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadContextMenuEventInfo | Event Object. |

**Remark**
- 모바일 환경에서는 터치를 일정시간 유지하면 oncontextmenu 이벤트가 발생합니다.

- FileUpload 컴포넌트는 마우스 우클릭이나 터치에 의해 표시되는 기본팝업메뉴가 제공되지 않습니다.

---

## ondeleteitem

FileUpload 에서 아이템이 삭제된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
ondeleteitem(obj:nexacro.FileUpload,e:nexacro.FileUploadItemEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadItemEventInfo | Event Object. |

**Remark**
- deleteItem() 메소드로 아이템이 삭제되면 발생하는 이벤트입니다.

---

## ondevicebuttonup

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondevicebuttonup(obj:nexacro.FileUpload,e:nexacro.DeviceButtonEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | DeviceButtonEventInfo | Event Object. |

**Remark**
- 디바이스 버튼을 눌렀다 뗄 때 이벤트가 발생합니다.

- 버튼 형식은 MENU(1),  CANCEL(2) 2종류 입니다.

- 일부 기종에서 CANCEL 버튼을 long press 해야 MENU key event가 발생합니다.

---

## onerror

파일 업로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.FileUpload,e:nexacro.FileUploadErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadErrorEventInfo | Event Object. |

**Remark**
- 서버와 통신이 성공한 이후 서버 측 코드에서 응답하는 에러코드, 메시지는 WRE, NRE 모두 같은 방식으로 처리합니다.
  서버에서 0 미만의 음수값이 결과코드로 반환되었을 때 실패로 처리됩니다.

◆ web runtime environment 제약
- WRE에서 일부 브라우저에서만 업로드의 실패, 취소 등의 상태를 부분적으로 확인할 수 있지만 정상적인 상태 정보를 보장할 수 없어 onerror 이벤트에서 HTTP Status Code 처리는 지원하지 않습니다.
  NRE는 파일 업로드 상태를 자체적으로 처리하며 해당 정보를 통해 HTTP Status Code에 대한 onerror 이벤트를 지원합니다.

---

## onfindclick

FileUpload 의 파일찾기버튼(fileitembutton)을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onfindclick(obj:nexacro.FileUpload,e:nexacro.FileUploadItemEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadItemEventInfo | Event Object. |

---

## onitemchanged

FileUpload 에서 아이템 값이 변경된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onitemchanged(obj:nexacro.FileUpload,e:nexacro.FileUploadItemChangeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadItemChangeEventInfo | Event Object. |

---

## onitemclick

FileUpload 의 파일경로 표시영역(fileitemedit)을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onitemclick(obj:nexacro.FileUpload,e:nexacro.FileUploadItemEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadItemEventInfo | Event Object. |

---

## onkeydown

FileUpload 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeydown(obj:nexacro.FileUpload,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
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

FileUpload 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeyup(obj:nexacro.FileUpload,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | KeyEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeyup 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.

---

## onkillfocus

FileUpload 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkillfocus(obj:nexacro.FileUpload,e:nexacro.KillFocusEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | KillFocusEventInfo | Event Object. |

**Remark**
- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 FileUpload 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 FileUpload 에서 포커스 관련 이벤트가 발생하지 않습니다.

---

## onlbuttondown

FileUpload 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttondown(obj:nexacro.FileUpload,e:nexacro.FileUploadMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadMouseEventInfo | Event Object. |

**Remark**
- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- FileUpload 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onlbuttonup

FileUpload 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttonup(obj:nexacro.FileUpload,e:nexacro.FileUploadMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadMouseEventInfo | Event Object. |

**Remark**
- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onlbuttonup 이벤트는 마우스의 왼쪽버튼을 떼었을 때 마우스의 위치와 관계없이 onlbuttondown 이벤트가 발생했던 컴포넌트에서 발생합니다.


◆ WRE 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

---

## onmouseenter

FileUpload 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseenter(obj:nexacro.FileUpload,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
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

FileUpload 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmouseleave(obj:nexacro.FileUpload,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
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

FileUpload 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousemove(obj:nexacro.FileUpload,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
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

FileUpload 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmousewheel(obj:nexacro.FileUpload,e:nexacro.MouseWheelEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | MouseWheelEventInfo | Event Object. |

**Remark**
- 이벤트의 리턴값과 스크롤 조건에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- FileUpload 에서 마우스의 휠버튼 회전값을 처리할 필요가 없을 때 상위 컴포넌트로 휠버튼 회전값과 이벤트가 전파됩니다.
   즉, FileUpload 에서 스크롤이 이동될 때는 상위로 이벤트가 전파되지 않고, 스크롤이 처음이나 마지막 상태일 때 상위로 이벤트가 전파됩니다.

- Control 키를 누른 상태에서 휠버튼을 회전시키면 환경에 따라 아래와 같이 Zoom 이 발생합니다.
   > Windows NRE 는 window 화면단위로 50%~200% 범위 내에서 10% 단위로 Zoom 이 변경됩니다.
   > Desktop WRE는 웹 브라우저에서 지원하는 범위/간격에 따라 Zoom이 변경됩니다.

- Zoom 상태에서도 FileUpload 에서 이벤트가 발생하고 리턴값에 따라 상위로 전파되므로 스크립트 작성 시 주의하여야 합니다.
   이 때, 스크롤은 처리되지 않으며 e.ctrlkey 속성값이 true 로 설정됩니다.

---

## onmove

FileUpload 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmove(obj:nexacro.FileUpload,e:nexacro.MoveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | MoveEventInfo | Event Object. |

---

## onrbuttondown

FileUpload 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttondown(obj:nexacro.FileUpload,e:nexacro.FileUploadMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadMouseEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ Web Runtime Environment 제약

- 컴포넌트의 배경색이 투명색(transparent)이면 IE 브라우저에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.
   마우스 관련 이벤트를 사용하실 경우에 투명색상이 설정되면 문제가 발생할 수 있습니다.

- Web Runtime Environment는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- Web Runtime Environment에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttondown 이벤트를 정의하지 않습니다.

---

## onrbuttonup

FileUpload 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttonup(obj:nexacro.FileUpload,e:nexacro.FileUploadMouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadMouseEventInfo | Event Object. |

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

FileUpload 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsetfocus(obj:nexacro.FileUpload,e:nexacro.SetFocusEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | SetFocusEventInfo | Event Object. |

**Remark**
- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 FileUpload 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 FileUpload 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 FileUpload 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
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

FileUpload 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsize(obj:nexacro.FileUpload,e:nexacro.SizeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | SizeEventInfo | Event Object. |

---

## onsuccess

파일 업로드가 완료되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.FileUpload,e:nexacro.FileUploadEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | FileUploadEventInfo | Event Object. |

**Remark**
- 파일 업로드 결과에 대한 응답을 FileUploadEventInfo 오브젝트의 datasets 속성에 XML, SSV, JSON 형식의 Dataset으로 전달할 수 있습니다.
  XML, SSV, JSON 구조에 적합하지 않은 정보는 누락될 수 있습니다.

- Cross Domain 이 가능한 환경에서는 window.postMessage 방식을 사용하여야 정상동작합니다.

---

## ontouchend

FileUpload 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchend(obj:nexacro.FileUpload,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchmove

FileUpload 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchmove(obj:nexacro.FileUpload,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---

## ontouchstart

FileUpload 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ontouchstart(obj:nexacro.FileUpload,e:nexacro.TouchEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpload | Event가 발생한 Object. |
| `e` | TouchEventInfo | Event Object. |

**Remark**
- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

---
