# ContactSet Events

| Event | Description |
|-------|-------------|
| `onerror` | 모바일 기기에서 연락처정보의 처리가 실패한 경우에 발생하는 이벤트입니다. |
| `onsuccess` | 모바일 기기에서 연락처정보의 처리가 성공했을 경우에 발생하는 이벤트입니다. |

---

## onerror

모바일 기기에서 연락처정보의 처리가 실패한 경우에 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.ContactSet,e:nexacro.ContactSetErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ContactSet | Event가 발생한 Object. |
| `e` | ContactSetErrorEventInfo | Event Object. |

---

## onsuccess

모바일 기기에서 연락처정보의 처리가 성공했을 경우에 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.ContactSet,e:nexacro.ContactSetEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ContactSet | Event가 발생한 Object. |
| `e` | ContactSetEventInfo | Event Object. |

---
