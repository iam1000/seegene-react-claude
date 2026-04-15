# ExcelImportObject Events

| Event | Description |
|-------|-------------|
| `onerror` | Import 도중 오류가 생겼을때 발생하는 이벤트입니다. |
| `onsuccess` | Import 가 완료되었을때 발생하는 이벤트입니다. |

---

## onerror

Import 도중 오류가 생겼을때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.ExcelImportObject,e:nexacro.ExcelImportErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ExcelImportObject | Event가 발생한 Object. |
| `e` | ExcelImportErrorEventInfo | Event Object. |

**Remark**
- onerror 이벤트가 발생하면 Import 기능이 종료됩니다.

---

## onsuccess

Import 가 완료되었을때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.ExcelImportObject,e:nexacro.ExcelImportEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ExcelImportObject | Event가 발생한 Object. |
| `e` | ExcelImportEventInfo | Event Object. |

---
