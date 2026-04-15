# LiteDBStatement Events

| Event | Description |
|-------|-------------|
| `onerror` | LiteDBStatement 에 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| `onsuccess` | LiteDBStatement 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |

---

## onerror

LiteDBStatement 에 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.LiteDBStatement,e:nexacro.LiteDBErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | LiteDBStatement | Event가 발생한 Object. |
| `e` | LiteDBErrorEventInfo | Event Object. |

---

## onsuccess

LiteDBStatement 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.LiteDBStatement,e:nexacro.LiteDBEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | LiteDBStatement | Event가 발생한 Object. |
| `e` | LiteDBEventInfo | Event Object. |

---
