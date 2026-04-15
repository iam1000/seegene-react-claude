# WebBrowser Events

| Event | Description |
|-------|-------------|
| `ondevicebuttonup` | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| `onloadcompleted` | WebBrowser 에 웹페이지가 로딩 되었을 때 발생하는 이벤트입니다. |
| `onmove` | WebBrowser 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| `onsize` | WebBrowser 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| `onusernotify` | WebBrowser 에 로드된 웹페이지에서 넥사크로 쪽으로 정보를 전달할 때 발생하는 이벤트입니다. |

---

## ondevicebuttonup

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondevicebuttonup(obj:nexacro.WebBrowser,e:nexacro.DeviceButtonEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebBrowser | Event가 발생한 Object. |
| `e` | DeviceButtonEventInfo | Event Object. |

**Remark**
- 디바이스 버튼을 눌렀다 뗄 때 이벤트가 발생합니다.
- 버튼 형식은 MENU(1),  CANCEL(2) 2종류 입니다.
- 일부 기종에서 CANCEL 버튼을 long press 해야 MENU key event가 발생합니다.
- CANCEL 버튼이 눌려진 경우 preventDefault 메소드를 실행해 Default Action을 취소할 수 있습니다.

---

## onloadcompleted

WebBrowser 에 웹페이지가 로딩 되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onloadcompleted(obj:nexacro.WebBrowser,e:nexacro.WebLoadCompEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebBrowser | Event가 발생한 Object. |
| `e` | WebLoadCompEventInfo | Event Object. |

**Remark**
- url 속성값으로 "about:blank"를 설정하여 빈페이지가 로드될 때는 onloadcompleted 이벤트가 발생하지 않습니다.

◆ WRE 제약

- IE 웹브라우저에서 PDF 파일을 WebBrowser 컴포넌트에 로드할 때는 onloadcompleted 이벤트가 발생하지 않습니다.

---

## onmove

WebBrowser 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmove(obj:nexacro.WebBrowser,e:nexacro.MoveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebBrowser | Event가 발생한 Object. |
| `e` | MoveEventInfo | Event Object. |

---

## onsize

WebBrowser 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsize(obj:nexacro.WebBrowser,e:nexacro.SizeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebBrowser | Event가 발생한 Object. |
| `e` | SizeEventInfo | Event Object. |

---

## onusernotify

WebBrowser 에 로드된 웹페이지에서 넥사크로 쪽으로 정보를 전달할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onusernotify(obj:nexacro.WebBrowser,e:nexacro.WebUserNotifyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | WebBrowser | Event가 발생한 Object. |
| `e` | WebUserNotifyEventInfo | Event Object. |

**Remark**
- onusernotify 이벤트를 발생시키려면 아래와 같은 코드가 웹페이지에 정의되어야 합니다.
  실행 환경에 따라 이벤트 발생 시 사용하는 코드가 달라집니다.

  1. WRE, iOS/iPadOS NRE 일때
     if(window.NEXACROWEBBROWSER)
        window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, userdata)
  2. Windows NRE 일때
     if (typeof nexacro == "undefined")
        window.document.title = userdata;
  3. Android NRE, macOS NRE 일때
     if(nexacro)
        nexacro.fireUserNotify(userdata);

- Windows NRE는 userdata를 최대 259자까지만 설정할 수 있습니다.
  (window.document.title 속성이 Internet Explorer 의 길이 제약을 받으며 최대가 259자입니다).

- Windows NRE는 웹페이지 로드 시 window.document.title 속성값이 변경되면서 이벤트가 발생할 수 있습니다.
  이벤트 처리 시 전달되는 userdata를 조건문으로 설정해 웹페이지 자체에서 발생하는 이벤트와 구분해서 사용해야 합니다.

---
