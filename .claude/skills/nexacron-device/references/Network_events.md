# Network Events

| Event | Description |
|-------|-------------|
| `onrecverror` | 모바일 기기에서 네트워크 상태 확인에 실패했을 때 발생하는 이벤트입니다. |
| `onrecvsuccess` | 모바일 기기에서 네트워크 상태 확인에 성공했을 때 발생하는 이벤트입니다. |

---

## onrecverror

모바일 기기에서 네트워크 상태 확인에 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecverror(obj:nexacro.Network,e:nexacro.NetworkErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Network | Event가 발생한 Object. |
| `e` | NetworkErrorEventInfo | Event Object. |

---

## onrecvsuccess

모바일 기기에서 네트워크 상태 확인에 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecvsuccess(obj:nexacro.Network,e:nexacro.NetworkEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Network | Event가 발생한 Object. |
| `e` | NetworkEventInfo | Event Object. |

**Remark**
- 네트워크 상태가 확인되면 네트워크 정보를 availabletype, timestamp 속성에 저장합니다.

---
