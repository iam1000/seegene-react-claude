# Camera Events

| Event | Description |
|-------|-------------|
| `oncapture` | 모바일 기기의 카메라 앱과 연동하여 이미지 얻기에 성공했을 때 발생하는 이벤트입니다. |
| `onerror` | 모바일 기기의 카메라 앱 연동이 실패했을 때 발생하는 이벤트입니다. |

---

## oncapture

모바일 기기의 카메라 앱과 연동하여 이미지 얻기에 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncapture(obj:nexacro.Camera,e:nexacro.CameraEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Camera | Event가 발생한 Object. |
| `e` | CameraEventInfo | Event Object. |

---

## onerror

모바일 기기의 카메라 앱 연동이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.Camera,e:nexacro.CameraErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Camera | Event가 발생한 Object. |
| `e` | CameraErrorEventInfo | Event Object. |

---
