# Image Events

| Event | Description |
|-------|-------------|
| `onerror` | src 속성에 설정한 이미지 로드에 실패했을때 발생하는 이벤트입니다. |
| `onload` | src 속성에 설정한 이미지 로드에 성공했을때 발생하는 이벤트입니다. |

---

## onerror

src 속성에 설정한 이미지 로드에 실패했을때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.Image,e:nexacro.ErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Image | Event가 발생한 Object. |
| `e` | ErrorEventInfo | Event Object. |

---

## onload

src 속성에 설정한 이미지 로드에 성공했을때 발생하는 이벤트입니다.

**Syntax**
```javascript
onload(obj:nexacro.Image,e:nexacro.LoadEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Image | Event가 발생한 Object. |
| `e` | LoadEventInfo | Event Object. |

**Remark**
- 이미지 데이터를 로드하지 않고 이미지 파일에 대한 핸들을 관리합니다.

---
