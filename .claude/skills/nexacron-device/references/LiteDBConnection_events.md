# LiteDBConnection Events

| Event | Description |
|-------|-------------|
| `onerror` | LiteDBConnection 에 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| `onsuccess` | LiteDBConnection 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |

---

## onerror

LiteDBConnection 에 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.LiteDBConnection,e:nexacro.LiteDBErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | LiteDBConnection | Event가 발생한 Object. |
| `e` | LiteDBErrorEventInfo | Event Object. |

---

## onsuccess

LiteDBConnection 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.LiteDBConnection,e:nexacro.LiteDBEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | LiteDBConnection | Event가 발생한 Object. |
| `e` | LiteDBEventInfo | Event Object. |

---
