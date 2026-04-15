# ExcelExportObject Events

| Event | Description |
|-------|-------------|
| `onerror` | Export 도중 오류가 생겼을때 발생하는 이벤트입니다. |
| `onprogress` | Export 도중 진행상태에 따라 발생하는 이벤트입니다. |
| `onsuccess` | 모든 Export 가 완료되었을때 발생하는 이벤트입니다. |

---

## onerror

Export 도중 오류가 생겼을때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.ExcelExportObject,e:nexacro.ExcelExportErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ExcelExportObject | Event가 발생한 Object. |
| `e` | ExcelExportErrorEventInfo | Event Object. |

**Remark**
- onerror 이벤트가 발생하면 Export 기능이 종료됩니다.

---

## onprogress

Export 도중 진행상태에 따라 발생하는 이벤트입니다.

**Syntax**
```javascript
onprogress(obj:nexacro.ExcelExportObject,e:nexacro.ExcelExportProgressEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ExcelExportObject | Event가 발생한 Object. |
| `e` | ExcelExportProgressEventInfo | Event Object. |

**Remark**
- exporteventtype 속성값이 "none" 이면 onprogress 이벤트는 발생하지 않습니다.
  exporteventtype 속성값이 "item" 이면 Item 의 Export 가 완료되었을 때 onprogress 이벤트가 발생합니다.
  exporteventtype 속성값이 "totalrecord" 이면 각 Record 마다 Export 될 때 onprogress 이벤트가 발생합니다.
  exporteventtype 속성값이 "itemrecord" 이면 Item 의 Export 가 완료되었을 때와 Item 의 각 Record 마다 Export 될 때 onprogress 이벤트가 발생합니다.

---

## onsuccess

모든 Export 가 완료되었을때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.ExcelExportObject,e:nexacro.ExcelExportEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ExcelExportObject | Event가 발생한 Object. |
| `e` | ExcelExportEventInfo | Event Object. |

**Remark**
- 모든 Export 가 성공적으로 완료되었을때 발생합니다.

- exporteventtype 속성값과 관계없이 이벤트가 발생합니다.

---
