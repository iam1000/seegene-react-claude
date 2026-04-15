# XPush Events

| Event | Description |
|-------|-------------|
| `onerror` | XPush 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| `onkeepalive` | X-PUSH 서버에서 통신유지를 위해 메시지를 받았을 때 발생하는 이벤트입니다. |
| `onsuccess` | XPush 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |

---

## onerror

XPush 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.XPush,e:nexacro.XPushErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | XPush | Event가 발생한 Object. |
| `e` | XPushErrorEventInfo | Event Object. |

**Remark**
◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## onkeepalive

X-PUSH 서버에서 통신유지를 위해 메시지를 받았을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onkeepalive(obj:nexacro.XPush,e:nexacro.XPushKeepAliveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | XPush | Event가 발생한 Object. |
| `e` | XPushKeepAliveEventInfo | Event Object. |

**Remark**
- XPush 클라이언트는 서버와 통신유지를 위해 keepalivetime 속성에 설정된 시간 간격으로 메시지를 주고 받습니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## onsuccess

XPush 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.XPush,e:nexacro.XPushEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | XPush | Event가 발생한 Object. |
| `e` | XPushEventInfo | Event Object. |

**Remark**
◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---
