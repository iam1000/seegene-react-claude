# FileDialog Events

| Event | Description |
|-------|-------------|
| `onclose` | FileDialog 를 닫았을 때 발생하는 이벤트입니다. |

---

## onclose

FileDialog 를 닫았을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onclose(obj:nexacro.FileDialog,e:nexacro.FileDialogEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileDialog | Event가 발생한 Object. |
| `e` | FileDialogEventInfo | Event Object. |

**Remark**
◆ web runtime environment 제약

- "FileDialog.LOAD" 또는 "FileDialog.MULTILOAD" 옵션으로 open() 메소드 실행 후 파일을 선택했을 때 onclose 이벤트가 발생합니다.
   FileDialog 를 "취소" 또는 "X" 버튼으로 닫았을 경우 onclose 이벤트가 발생하지 않습니다.

---
