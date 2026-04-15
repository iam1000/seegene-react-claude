# ImagePicker Events

| Event | Description |
|-------|-------------|
| `onerror` | 이미지 가져오기에 실패했을 때 발생하는 이벤트입니다. |
| `onsuccess` | 이미지 가져오기에 성공했을 때 발생하는 이벤트입니다. |

---

## onerror

이미지 가져오기에 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.ImagePicker,e:nexacro.ImagePickerErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ImagePicker | Event가 발생한 Object. |
| `e` | ImagePickerErrorEventInfo | Event Object. |

---

## onsuccess

이미지 가져오기에 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.ImagePicker,e:nexacro.ImagePickerEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ImagePicker | Event가 발생한 Object. |
| `e` | ImagePickerEventInfo | Event Object. |

---
