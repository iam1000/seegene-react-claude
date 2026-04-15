# AudioRecorder Events

| Event | Description |
|-------|-------------|
| `onerror` | 모바일 기기에서 오디오 데이터의 녹음이 실패했을 때 발생하는 이벤트입니다. |
| `onrecording` | 모바일 기기에서 오디오 데이터를 녹음중일때 발생하는 이벤트입니다. |
| `onstop` | 모바일 기기에서 오디오 데이터의 녹음이 종료되었을때 발생하는 이벤트입니다. |

---

## onerror

모바일 기기에서 오디오 데이터의 녹음이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.AudioRecorder,e:nexacro.AudioErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | AudioRecorder | Event가 발생한 Object. |
| `e` | AudioErrorEventInfo | Event Object. |

---

## onrecording

모바일 기기에서 오디오 데이터를 녹음중일때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecording(obj:nexacro.AudioRecorder,e:nexacro.AudioEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | AudioRecorder | Event가 발생한 Object. |
| `e` | AudioEventInfo | Event Object. |

---

## onstop

모바일 기기에서 오디오 데이터의 녹음이 종료되었을때 발생하는 이벤트입니다.

**Syntax**
```javascript
onstop(obj:nexacro.AudioRecorder,e:nexacro.AudioEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | AudioRecorder | Event가 발생한 Object. |
| `e` | AudioEventInfo | Event Object. |

---
