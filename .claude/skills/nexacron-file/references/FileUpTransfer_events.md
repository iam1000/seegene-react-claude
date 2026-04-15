# FileUpTransfer Events

| Event | Description |
|-------|-------------|
| `onerror` | 파일 업로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다. |
| `onprogress` | 파일이 업로드 중일 때 일정간격으로 발생하는 이벤트입니다. |
| `onsuccess` | 파일 업로드가 완료된 후 성공코드값이 전달 되었을 때 발생하는 이벤트입니다. |

---

## onerror

파일 업로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.FileUpTransfer,e:nexacro.FileUpTransferErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpTransfer | Event가 발생한 Object. |
| `e` | FileUpTransferErrorEventInfo | Event Object. |

**Remark**
- 서버와 통신이 성공한 이후 서버 측 코드에서 응답하는 에러코드, 메시지는 WRE, NRE 모두 같은 방식으로 처리합니다.
  서버에서 0 미만의 음수값이 결과코드로 반환되었을 때 실패로 처리됩니다.

◆ web runtime environment 제약
- WRE에서 일부 브라우저에서만 업로드의 실패, 취소 등의 상태를 부분적으로 확인할 수 있지만 정상적인 상태 정보를 보장할 수 없어 onerror 이벤트에서 HTTP Status Code 처리는 지원하지 않습니다.
  NRE는 파일 업로드 상태를 자체적으로 처리하며 해당 정보를 통해 HTTP Status Code에 대한 onerror 이벤트를 지원합니다.

---

## onprogress

파일이 업로드 중일 때 일정간격으로 발생하는 이벤트입니다.

**Syntax**
```javascript
onprogress(obj:nexacro.FileUpTransfer,e:nexacro.FileUpTransferProgressEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpTransfer | Event가 발생한 Object. |
| `e` | FileUpTransferProgressEventInfo | Event Object. |

**Remark**
- 이벤트가 발생하는 간격은 웹브라우저에 따라 달라질 수 있습니다.

---

## onsuccess

파일 업로드가 완료된 후 성공코드값이 전달 되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.FileUpTransfer,e:nexacro.FileUpTransferEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | FileUpTransfer | Event가 발생한 Object. |
| `e` | FileUpTransferEventInfo | Event Object. |

**Remark**
- 서버에서 0 이상의 결과코드값이 반환되었을 때 성공으로 처리됩니다.

- 파일 업로드 결과에 대한 응답을 FileUpTransferEventInfo 오브젝트의 datasets 속성에 XML, SSV, JSON 형식의 Dataset으로 전달할 수 있습니다.
  XML, SSV, JSON 구조에 적합하지 않은 정보는 누락될 수 있습니다.

---
