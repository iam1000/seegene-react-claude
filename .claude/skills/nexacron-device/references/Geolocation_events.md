# Geolocation Events

| Event | Description |
|-------|-------------|
| `onrecverror` | 모바일 기기에서 위치정보 수신이 실패했을 때 발생하는 이벤트입니다. |
| `onrecvsuccess` | 모바일 기기에서 위치정보 수신이 성공했을 때 발생하는 이벤트입니다. |

---

## onrecverror

모바일 기기에서 위치정보 수신이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecverror(obj:nexacro.Geolocation,e:nexacro.GeolocationErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Geolocation | Event가 발생한 Object. |
| `e` | GeolocationErrorEventInfo | Event Object. |

---

## onrecvsuccess

모바일 기기에서 위치정보 수신이 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecvsuccess(obj:nexacro.Geolocation,e:nexacro.GeolocationEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Geolocation | Event가 발생한 Object. |
| `e` | GeolocationEventInfo | Event Object. |

---
