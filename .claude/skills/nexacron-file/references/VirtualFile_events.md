# VirtualFile Events

| Event | Description |
|-------|-------------|
| `onerror` | VirtualFile 에 요청된 작업이 실패했을 때 발생되는 이벤트입니다. |
| `onsuccess` | VirtualFile 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |

---

## onerror

VirtualFile 에 요청된 작업이 실패했을 때 발생되는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.VirtualFile,e:nexacro.VirtualFileErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VirtualFile | Event가 발생한 Object. |
| `e` | VirtualFileErrorEventInfo | Event Object. |

**Remark**
◆ web runtime environment 제약

- web runtime environment 는 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

- Safari 브라우저에서는 지원되지 않는 이벤트입니다.

---

## onsuccess

VirtualFile 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.VirtualFile,e:nexacro.VirtualFileEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | VirtualFile | Event가 발생한 Object. |
| `e` | VirtualFileEventInfo | Event Object. |

**Remark**
◆ web runtime environment 제약

- web runtime environment 는 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

- Safari 브라우저에서는 지원되지 않는 이벤트입니다.

---
