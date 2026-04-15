# Acceleration Events

| Event | Description |
|-------|-------------|
| `onrecverror` | 모바일 기기에서 가속도 정보 수신이 실패했을 때 발생하는 이벤트입니다. |
| `onrecvsuccess` | 모바일 기기에서 가속도 정보 수신이 성공했을 때 발생하는 이벤트입니다. |

---

## onrecverror

모바일 기기에서 가속도 정보 수신이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecverror(obj:nexacro.Acceleration,e:nexacro.AccelerationErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Acceleration | Event가 발생한 Object. |
| `e` | AccelerationErrorEventInfo | Event Object. |

---

## onrecvsuccess

모바일 기기에서 가속도 정보 수신이 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecvsuccess(obj:nexacro.Acceleration,e:nexacro.AccelerationEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Acceleration | Event가 발생한 Object. |
| `e` | AccelerationEventInfo | Event Object. |

---
