# Vibrator Events

| Event | Description |
|-------|-------------|
| `onerror` | 모바일 기기에서 진동 처리가 실패했을 때 발생하는 이벤트입니다. |
| `onplay` | 모바일 기기에서 진동 처리가 완료된 후 발생하는 이벤트입니다. |
| `onstop` | 모바일 기기에서 진동 처리가 중단된 후 발생하는 이벤트입니다. |

---

## onerror

모바일 기기에서 진동 처리가 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.Vibrator,e:nexacro.VibratorErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Vibrator | Event가 발생한 Object. |
| `e` | VibratorErrorEventInfo | Event Object. |

---

## onplay

모바일 기기에서 진동 처리가 완료된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onplay(obj:nexacro.Vibrator,e:nexacro.VibratorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Vibrator | Event가 발생한 Object. |
| `e` | VibratorEventInfo | Event Object. |

---

## onstop

모바일 기기에서 진동 처리가 중단된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onstop(obj:nexacro.Vibrator,e:nexacro.VibratorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Vibrator | Event가 발생한 Object. |
| `e` | VibratorEventInfo | Event Object. |

---
