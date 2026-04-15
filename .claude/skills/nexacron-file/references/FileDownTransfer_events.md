# FileDownTransfer Events

| Event | Description |
|-------|-------------|
| `onerror` | 파일 다운로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다. |
| `onsuccess` | 파일 다운로드가 완료된 후 성공코드가 반환 되었을 때 발생하는 이벤트입니다. |

---

## onerror

파일 다운로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.FileDownTransfer,e:nexacro.FileDownTransferErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileDownTransfer | Event가 발생한 Object. |
| `e` | FileDownTransferErrorEventInfo | Event Object. |

**Remark**
- 서버에서 0 미만의 음수값이 결과코드로 반환되었을 때 실패로 처리됩니다.

◆ web runtime environment 제약
- web runtime environment 는 지원하지 않는 이벤트입니다.
- WRE에서는 파일 다운로드의 성공 또는 실패, 취소 등의 상태를 확인할 수 없어 onerror, onsuccess 이벤트를 지원하지 않습니다.
  개발 단계에서 필요하다면 WRE에서는 개발자도구(콘솔, 네트워크)를 통해 파일 다운로드 상태를 확인할 수 있습니다.
  NRE는 파일 다운로드 상태를 자체적으로 처리하며 해당 정보를 통해 onerror, onsuccess 이벤트를 지원합니다.
- 파일 다운로드 동작은 서버 측 코드 없이 직접 다운로드할 파일 URL을 지정해서 다운로드를 시도할 수 있기 때문에 WRE에서는 서버 측 코드에서 응답하는 에러코드, 메시지를 처리하지 않도록 구현됐습니다.

---

## onsuccess

파일 다운로드가 완료된 후 성공코드가 반환 되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.FileDownTransfer,e:nexacro.FileDownTransferEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileDownTransfer | Event가 발생한 Object. |
| `e` | FileDownTransferEventInfo | Event Object. |

**Remark**
- 서버에서 0 이상의 결과코드가 반환되었을 때 성공으로 처리됩니다.

- web runtime environment 는 지원하지 않는 이벤트입니다.

---
