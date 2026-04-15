# WebView Events

| Event | Description |
|-------|-------------|
| `ondevicebuttonup` | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onloadcompleted` | WebView 에 웹페이지가 로딩 되었을 때 발생하는 이벤트입니다. |
| `onmove` | WebView 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| `onsize` | WebView 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| `onusernotify` | WebView 컴포넌트에 로드된 웹페이지에서 넥사크로 쪽으로 정보를 전달할 때 발생하는 이벤트입니다. |

---

## ondevicebuttonup

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondevicebuttonup(obj:nexacro.WebView,e:nexacro.DeviceButtonEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebView | Event가 발생한 Object. |
| `e` | DeviceButtonEventInfo | Event Object. |

**Remark**
- 디바이스 버튼을 눌렀다 뗄 때 이벤트가 발생합니다.
- 버튼 형식은 MENU(1),  CANCEL(2) 2종류 입니다.
- 일부 기종에서 CANCEL 버튼을 long press 해야 MENU key event가 발생합니다.
- CANCEL 버튼이 눌려진 경우 preventDefault 메소드를 실행해 Default Action을 취소할 수 있습니다.

---

## onloadcompleted

WebView 에 웹페이지가 로딩 되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onloadcompleted(obj:nexacro.WebView,e:nexacro.WebLoadCompEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebView | Event가 발생한 Object. |
| `e` | WebLoadCompEventInfo | Event Object. |

**Remark**
- url 속성값으로 "about:blank"를 설정하여 빈페이지가 로드될 때는 onloadcompleted 이벤트가 발생하지 않습니다.

---

## onmove

WebView 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmove(obj:nexacro.WebView,e:nexacro.MoveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebView | Event가 발생한 Object. |
| `e` | MoveEventInfo | Event Object. |

---

## onsize

WebView 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsize(obj:nexacro.WebView,e:nexacro.SizeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebView | Event가 발생한 Object. |
| `e` | SizeEventInfo | Event Object. |

---

## onusernotify

WebView 컴포넌트에 로드된 웹페이지에서 넥사크로 쪽으로 정보를 전달할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onusernotify(obj:nexacro.WebView,e:nexacro.WebUserNotifyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebView | Event가 발생한 Object. |
| `e` | WebUserNotifyEventInfo | Event Object. |

**Remark**
- 로딩 한 웹페이지에서 아래 코드를 사용해 onusernotify 이벤트를 발생시킬 수 있습니다.
if(nexacro)
    nexacro.fireUserNotify("sendToNexacro TEST");

 * WRE에서는 WebBrowser 컴포넌트에서 사용하던 코드도 사용할 수 있습니다.
if(window.NEXACROWEBBROWSER)
    window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, userdata);

---
