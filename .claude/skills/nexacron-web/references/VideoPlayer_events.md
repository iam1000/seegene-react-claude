# VideoPlayer Events

| Event | Description |
|-------|-------------|
| `oncurrenttimechanged` | VideoPlayer 에서 비디오 재생위치가 변경되거나 재생중일때 발생하는 이벤트입니다. |
| `onerror` | VideoPlayer 에서 비디오 파일에 대한 처리가 실패했을 때 발생하는 이벤트입니다. |
| `onmove` | VideoPlayer 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| `onplaystatuschanged` | VideoPlayer 의 재생상태가 변경되었을 때 발생하는 이벤트입니다. |
| `onsize` | VideoPlayer 의 크기가 변경됐을 때 발생하는 이벤트입니다. |

---

## oncurrenttimechanged

VideoPlayer 에서 비디오 재생위치가 변경되거나 재생중일때 발생하는 이벤트입니다.

**Syntax**
```javascript
oncurrenttimechanged(obj:nexacro.VideoPlayer,e:nexacro.VideoCurrentTimeChangedEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VideoPlayer | Event가 발생한 Object. |
| `e` | VideoCurrentTimeChangedEventInfo | Event Object. |

**Remark**
- Nexacro Runtime Environment는 currenttime 속성값이 변경되었을 때만 oncurrenttimechanged 이벤트가 발생합니다.

- Web Runtime Environment는 비디오가 재생되는 동안 oncurrenttimechanged 이벤트가 지속적으로 발생합니다.

---

## onerror

VideoPlayer 에서 비디오 파일에 대한 처리가 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.VideoPlayer,e:nexacro.VideoErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VideoPlayer | Event가 발생한 Object. |
| `e` | VideoErrorEventInfo | Event Object. |

---

## onmove

VideoPlayer 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmove(obj:nexacro.VideoPlayer,e:nexacro.MoveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VideoPlayer | Event가 발생한 Object. |
| `e` | MoveEventInfo | Event Object. |

---

## onplaystatuschanged

VideoPlayer 의 재생상태가 변경되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onplaystatuschanged(obj:nexacro.VideoPlayer,e:nexacro.VideoPlayStateChangedEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VideoPlayer | Event가 발생한 Object. |
| `e` | VideoPlayStateChangedEventInfo | Event Object. |

**Remark**
- VideoPlayStateChangedEvenInfo 오브젝트의 newstate 속성에 이벤트가 발생한 원인값이 전달됩니다.

- 재생이 시작되거나 완료되었을 때 onplaystatuschanged 이벤트가 발생합니다.
  기본 UI(ControlBar)를 사용하거나 메소드를 사용하여 재생상태가 변경되었을 때도 onplaystatuschanged 이벤트가 발생합니다.

---

## onsize

VideoPlayer 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsize(obj:nexacro.VideoPlayer,e:nexacro.SizeEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VideoPlayer | Event가 발생한 Object. |
| `e` | SizeEventInfo | Event Object. |

---
