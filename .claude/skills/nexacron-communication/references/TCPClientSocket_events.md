# TCPClientSocket Events

| Event | Description |
|-------|-------------|
| `ondataarrived` | 연결된 서버에 수신 가능한 데이터가 있을 경우에 발생하는 이벤트입니다. |
| `onerror` | TCPClientSocket 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| `onsuccess` | TCPClientSocket 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |

---

## ondataarrived

연결된 서버에 수신 가능한 데이터가 있을 경우에 발생하는 이벤트입니다.

**Syntax**
```javascript
ondataarrived(obj:nexacro.TCPClientSocket,e:nexacro.SocketReceiveEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | TCPClientSocket | Event가 발생한 Object. |
| `e` | SocketReceiveEventInfo | Event Object. |

**Remark**
- ondataarrived 이벤트는 수신 가능한 데이터가 있는 경우 1회만 발생하며 실제 데이터를 수신하지 않습니다.
  read(), readLine() 메소드를 실행하여 데이터를 직접 수신하여야 합니다.

- read(), readLine() 메소드를 실행하여 데이터를 수신하지 않으면 수신 가능한 데이터가 누적되어도 이벤트가 추가로 발생하지 않습니다.

- read(), readLine() 메소드를 실행하여 데이터를 수신한 후 수신 가능한 데이터가 남아 있으면 다시 ondataarrived 이벤트가 1회 발생합니다.

---

## onerror

TCPClientSocket 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.TCPClientSocket,e:nexacro.SocketErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | TCPClientSocket | Event가 발생한 Object. |
| `e` | SocketErrorEventInfo | Event Object. |

**Remark**
- 이벤트가 발생한 원인은 EventInfo 의 statuscode 속성을 참조하여야 합니다.

---

## onsuccess

TCPClientSocket 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.TCPClientSocket,e:nexacro.SocketEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | TCPClientSocket | Event가 발생한 Object. |
| `e` | SocketEventInfo | Event Object. |

**Remark**
- onsuccess 이벤트는 비동기로 동작하므로 메소드 실행이 완료된 후에 발생합니다.

- write() 메소드를 실행하여 대용량 데이터를 송신하는 경우 패킷을 송신 가능한 크기로 나누어 송신합니다.
   이 때, 송신 후 남은 데이터가 있는 경우 onsuccess 이벤트가 여러번 발생할 수 있습니다.
   송신 후 남은 데이터가 있는지 여부는 EventInfo 의 bytesremain 속성을 참조하여야 합니다.

---
