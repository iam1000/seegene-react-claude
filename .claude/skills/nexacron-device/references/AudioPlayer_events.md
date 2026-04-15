# AudioPlayer Events

| Event | Description |
|-------|-------------|
| `onerror` | 모바일 기기에서 오디오파일에 대한 처리가 실패했을 때 발생하는 이벤트입니다. |
| `onload` | 모바일 기기에서 오디오파일이 로드됐을 때 발생하는 이벤트입니다. |
| `onmovepos` | 모바일 기기에서 오디오파일의 재생 위치가 이동됐을 때 발생하는 이벤트입니다. |
| `onplay` | 모바일 기기에서 오디오파일의 재생이 시작됐을 때 발생하는 이벤트입니다. |
| `onplaying` | 모바일 기기에서 오디오파일이 재생중일 때 발생하는 이벤트입니다. |
| `onstop` | 모바일 기기에서 오디오파일의 재생이 중지됐을 때 발생하는 이벤트입니다. |

---

## onerror

모바일 기기에서 오디오파일에 대한 처리가 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.AudioPlayer,e:nexacro.AudioErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | AudioPlayer | Event가 발생한 Object. |
| `e` | AudioErrorEventInfo | Event Object. |

---

## onload

모바일 기기에서 오디오파일이 로드됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onload(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | AudioPlayer | Event가 발생한 Object. |
| `e` | AudioEventInfo | Event Object. |

**Remark**
- 오디오파일이 로딩 된 후 url, duration, currentpos 속성값이 파일정보에 맞게 설정됩니다.

---

## onmovepos

모바일 기기에서 오디오파일의 재생 위치가 이동됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmovepos(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | AudioPlayer | Event가 발생한 Object. |
| `e` | AudioEventInfo | Event Object. |

---

## onplay

모바일 기기에서 오디오파일의 재생이 시작됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onplay(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | AudioPlayer | Event가 발생한 Object. |
| `e` | AudioEventInfo | Event Object. |

---

## onplaying

모바일 기기에서 오디오파일이 재생중일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onplaying(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | AudioPlayer | Event가 발생한 Object. |
| `e` | AudioEventInfo | Event Object. |

---

## onstop

모바일 기기에서 오디오파일의 재생이 중지됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onstop(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | AudioPlayer | Event가 발생한 Object. |
| `e` | AudioEventInfo | Event Object. |

---
