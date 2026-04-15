# GoogleMap Events

| Event | Description |
|-------|-------------|
| `onclick` | GoogleMap 컴포넌트를 클릭 또는 터치할 때 발생하는 이벤트입니다. |
| `onerror` | GoogleMap 동작이 실패하는 경우에 발생하는 이벤트입니다. |
| `onload` | GoogleMap 에 지도가 로드됐을 때 발생하는 이벤트입니다. |
| `onmapdrag` | GoogleMap 에 표시된 GoogleMapMarker 를 드래그하여 움직일 때 발생하는 이벤트입니다. |
| `onmapdragend` | GoogleMap 에서 드래그 상태인 GoogleMapMarker 를 떼었을 때 발생하는 이벤트입니다. |
| `onmapdragstart` | GoogleMap 에 표시된 GoogleMapMarker 의 드래그가 시작될 때 발생하는 이벤트입니다. |
| `onrecvsuccess` | GoogleMap 의 getAddress() 메소드 수행이 성공한 경우 발생하는 이벤트입니다. |

---

## onclick

GoogleMap 컴포넌트를 클릭 또는 터치할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onclick(obj:nexacro.GoogleMap,e:nexacro.GoogleMapClickEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | GoogleMap | Event가 발생한 Object. |
| `e` | GoogleMapClickEventInfo | Event Object. |

---

## onerror

GoogleMap 동작이 실패하는 경우에 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.GoogleMap,e:nexacro.GoogleMapErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | GoogleMap | Event가 발생한 Object. |
| `e` | GoogleMapErrorEventInfo | Event Object. |

---

## onload

GoogleMap 에 지도가 로드됐을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onload(obj:nexacro.GoogleMap,e:nexacro.GoogleMapEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | GoogleMap | Event가 발생한 Object. |
| `e` | GoogleMapEventInfo | Event Object. |

---

## onmapdrag

GoogleMap 에 표시된 GoogleMapMarker 를 드래그하여 움직일 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmapdrag(obj:nexacro.GoogleMap,e:nexacro.GoogleMapDragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | GoogleMap | Event가 발생한 Object. |
| `e` | GoogleMapDragEventInfo | Event Object. |

**Remark**
- Android 일 경우 GoogleMapMarker를 1초 이상 터치하면 드래그가 가능합니다.

---

## onmapdragend

GoogleMap 에서 드래그 상태인 GoogleMapMarker 를 떼었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmapdragend(obj:nexacro.GoogleMap,e:nexacro.GoogleMapDragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | GoogleMap | Event가 발생한 Object. |
| `e` | GoogleMapDragEventInfo | Event Object. |

**Remark**
- Android 일 경우 GoogleMapMarker를 1초 이상 터치하면 드래그가 가능합니다.

---

## onmapdragstart

GoogleMap 에 표시된 GoogleMapMarker 의 드래그가 시작될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmapdragstart(obj:nexacro.GoogleMap,e:nexacro.GoogleMapDragEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | GoogleMap | Event가 발생한 Object. |
| `e` | GoogleMapDragEventInfo | Event Object. |

**Remark**
- Android 일 경우 GoogleMapMarker를 1초 이상 터치하면 드래그가 가능합니다.

---

## onrecvsuccess

GoogleMap 의 getAddress() 메소드 수행이 성공한 경우 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecvsuccess(obj:nexacro.GoogleMap,e:nexacro.GoogleMapEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | GoogleMap | Event가 발생한 Object. |
| `e` | GoogleMapEventInfo | Event Object. |

**Remark**
- 특정 좌표의 주소를 반환합니다.

---
