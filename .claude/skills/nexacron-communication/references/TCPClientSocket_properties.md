# TCPClientSocket Properties

| Property | Description |
|----------|-------------|
| `address` | 연결한 서버의 주소값을 갖는 읽기전용 속성입니다. |
| `errorcode` | TCPClientSocket 에서 요청된 작업이 실패했을 때 발생한 에러코드값을 갖는 읽기전용 속성입니다. |
| `errormsg` | TCPClientSocket 에서 요청된 작업이 실패했을 때 발생한 에러메시지값을 갖는 읽기전용 속성입니다. |
| `isopen` | 서버와 연결된 상태값을 갖는 읽기전용 속성입니다. |
| `name` | TCPClientSocket 의 이름을 설정하는 속성입니다. |
| `port` | 연결된 서버의 Port 값을 갖는 읽기전용 속성입니다. |

---

## address

연결한 서버의 주소값을 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var strAddress = this.TCPClientSocket00.address;
```

**Remark**
- open() 메소드를 사용하여 서버에 연결했을 때 값을 갖는 속성입니다.

---

## errorcode

TCPClientSocket 에서 요청된 작업이 실패했을 때 발생한 에러코드값을 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var nErrCd = this.TCPClientSocket00.errorcode;
```

**Remark**
- TCPClientSocket 에서 마지막에 발생한 에러코드값을 갖습니다.

---

## errormsg

TCPClientSocket 에서 요청된 작업이 실패했을 때 발생한 에러메시지값을 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var nErrMsg = this.TCPClientSocket00.errormsg;
```

**Remark**
- TCPClientSocket 에서 마지막에 발생한 에러메시지값을 갖습니다.

- 에러 메시지는 운영체제 레벨에서 제공되는 시스템 메시지를 사용합니다.
   따라서, 운영체제의 버전에 따라 에러 메시지가 달라질 수 있습니다.

---

## isopen

서버와 연결된 상태값을 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
서버와 연결된 상태이면 "true" 값을 갖습니다.

서버와 연결된 상태가 아니면 "false" 값을 갖습니다.
```

**Remark**
- 서버와 연결하려면 open() 메소드를 사용하여야 합니다.

- 서버에서 연결을 끊었을 경우는 isopen 속성에 정확한 값이 설정되지 않습니다.

---

## name

TCPClientSocket 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
TCPClientSocket.set_name(strName) // set
TCPClientSocket.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## port

연결된 서버의 Port 값을 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var strPort = this.TCPClientSocket00.port;
```

**Remark**
- open() 메소드를 사용하여 서버에 연결했을 때 값을 갖는 속성입니다.

---
