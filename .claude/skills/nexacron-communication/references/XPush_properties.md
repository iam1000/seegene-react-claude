# XPush Properties

| Property | Description |
|----------|-------------|
| `controlretry` | X-PUSH 서버에 Topic 등록/삭제 시 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다. |
| `debug` | 넥사크로 스튜디오의 output 윈도우에 디버그용 XPush 메시지를 보여줄지 여부를 설정하는 속성입니다. |
| `errorcode` | 에러가 발생한 경우 에러코드를 갖는 읽기전용 속성입니다. |
| `errormsg` | 에러가 발생한 경우 에러 메시지를 갖는 읽기전용 속성입니다. |
| `iplist` | 연결할 X-PUSH 서버의 IP 와 Port 를 설정하는 속성입니다. |
| `keepalivetime` | X-PUSH 서버와 연결을 유지하기 위한 메시지를 보낼 주기를 설정하는 속성입니다. |
| `keeptimeout` | X-PUSH 서버와 연결유지를 위해 보낸 메시지의 응답을 기다리는 시간을 설정하는 속성입니다. |
| `layouturl` | Message Layout 정의 파일의 위치를 설정하는 속성입니다. |
| `name` | XPush 의 이름을 설정하는 속성입니다. |
| `projectid` | X-PUSH 서버와 통신할 때 사용할 Project ID 를 설정하는 속성입니다. |
| `protocolversion` | X-PUSH 서버와 통신 시 사용할 Protocol 의 버전을 설정하는 속성입니다. |
| `retry` | X-PUSH 서버에 연결을 시도할 때 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다. |
| `sessionid` | X-PUSH 서버 연결 시 사용할 Session ID를 설정하는 속성입니다. |
| `timeout` | X-PUSH 서버와 연결을 위해 보낸 메시지의 응답을 기다리는 시간을 설정하는 속성입니다. |
| `userid` | X-PUSH 서버 연결 시 사용할 User ID를 설정하는 속성입니다. |

---

## controlretry

X-PUSH 서버에 Topic 등록/삭제 시 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다.

**Setting Syntax**
```javascript
에러 발생 시 재시도 할 횟수를 숫자로 설정합니다.
```

**Remark**
- controlretry 속성값을 설정하지 않으면 5 로 적용됩니다.

- subscribe(), unsubscribe() 메소드 수행중 또는 서버 연결 후 인증중에 Head 데이터가 잘못된 경우 재시도합니다.


◆ web runtime environment 제약

- web runtime environment 는 지원하지 않는 속성입니다.

---

## debug

넥사크로 스튜디오의 output 윈도우에 디버그용 XPush 메시지를 보여줄지 여부를 설정하는 속성입니다.

**Setting Syntax**
```javascript
넥사크로 스튜디오의 output 윈도우에 디버그용 XPush 메시지를 표시하지 않습니다.
```

**Remark**
- debug 속성값을 설정하지 않으면 false 로 적용됩니다.

- Windows NRE 만 지원하는 속성입니다.

---

## errorcode

에러가 발생한 경우 에러코드를 갖는 읽기전용 속성입니다.

**Remark**
- X-PUSH 서버와 연결 실패 시 발생할 수 있는 에러코드입니다.
  > 300 : 서버와 접속에 실패했을 때 반환합니다.
  > 301 : 패킷 전송 (send / recv) 오류가 발생하면 반환합니다.
  > 202 : Data 전송 채널 인증 (authentication)에 오류가 발생하면 반환합니다.
  > 201 : iplist 속성에 설정된 Push 서버에 접속을 모두 실패했을 때 반환합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## errormsg

에러가 발생한 경우 에러 메시지를 갖는 읽기전용 속성입니다.

**Remark**
◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## iplist

연결할 X-PUSH 서버의 IP 와 Port 를 설정하는 속성입니다.

**Setting Syntax**
```javascript
연결할 X-PUSH 서버의 Port 를 설정합니다.
```

**Remark**
- 하나 이상의 X-PUSH 서버를 콤마(",")로 구분하여 설정할 수 있습니다.

- connect() 메소드 실행 시 설정된 서버 중 무작위로 선택하여 연결을 시도합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## keepalivetime

X-PUSH 서버와 연결을 유지하기 위한 메시지를 보낼 주기를 설정하는 속성입니다.

**Setting Syntax**
```javascript
X-PUSH 서버와 연결유지를 위한 메시지를 보내는 주기를 초(Second) 단위의 숫자로 설정합니다.
```

**Remark**
- keepalivetime 속성값을 설정하지 않으면 30 으로 적용됩니다.

- X-PUSH 서버에 연결된 클라이언트는 서로 연결되어 있는 상태를 확인하기 위해 주기적으로 메시지를 보냅니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## keeptimeout

X-PUSH 서버와 연결유지를 위해 보낸 메시지의 응답을 기다리는 시간을 설정하는 속성입니다.

**Setting Syntax**
```javascript
X-PUSH 서버와 연결유지를 위해 보낸 메시지의 응답을 기다리는 시간을 초(Second) 단위의 숫자로 설정합니다.

"1" 이상의 정수값을 설정할 수 있습니다.
X-PUSH 서버에 설정된 응답시간보다 크거나 같게 설정하여야 합니다.
```

**Remark**
- keeptimeout 속성값을 설정하지 않으면 60 으로 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 지원하지 않는 속성입니다.

---

## layouturl

Message Layout 정의 파일의 위치를 설정하는 속성입니다.

**Setting Syntax**
```javascript
TypeDefinition 의 Services 영역에 정의된 Prefix 를 사용한 형식으로 설정합니다.

Form 의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.
```

**Remark**
- layouturl 속성을 설정하지 않으면 정상적인 메시지 수신이 불가능하므로 반드시 설정해야 하는 속성입니다.

- Message Layout 정의 파일의 첫줄은 Header 정보로 XML 선언문을 설정합니다.

- Message Layout 정의 파일은 <message_layout> Element 하위에 <message> Element 로 정의됩니다.
  <message> Element 는 "type" Attribute 를 가지며 반드시 4 자리 영문자로 메시지 타입을 정의하여야 합니다.

- 하나의 메시지를 의미하는 <message> Element 는 하위에 <field> Element 를 갖습니다.
  <field> Element 는 메시지에 정의된 Field 값이며 가질 수 있는 Attribute 는 아래 표와 같습니다.

	
		attribute
		Description
	

	
		id
		필드명을 설정합니다.
	

	
		type
		필드의 타입을 설정합니다.
"string", "int", "float", "bigdecimal", "date", "time", "datetime" 을 설정할 수 있습니다.
	

	
		size
		필드의 데이터 크기를 설정합니다.
	

	
		key
		현재 필드가 키가 되는 여부를 설정합니다.
정의하지 않으면 "false" 로 적용됩니다.
하나 이상의 필드가 키로 설정될 수 있습니다.
	

	
		check
		Push 서버로 부터 받은 메시지를 DataSet 에 저장할 지 결정하는 필드인지 설정합니다.
정의하지 않으면 "false" 로 적용됩니다.
	



◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## name

XPush 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
XPush.set_name(strName) // set
XPush.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## projectid

X-PUSH 서버와 통신할 때 사용할 Project ID 를 설정하는 속성입니다.

**Syntax**
```javascript
XPush.set_projectid( strID ) // set 
XPush.projectid // get
```

**Setting Syntax**
```javascript
X-PUSH 서버와 통신할 때 사용할 Project ID 를 문자열로 설정합니다.
```

**Remark**
- projectid 속성값을 설정하지 않으면 빈문자열("')로 적용됩니다.

- Project ID 로 구분하여 메시지를 수신하여야 할 때 사용하는 속성입니다.

- projectid 속성은 X-PUSH 서버의 버전이 v2.8 이상일때만 적용됩니다.

---

## protocolversion

X-PUSH 서버와 통신 시 사용할 Protocol 의 버전을 설정하는 속성입니다.

**Syntax**
```javascript
XPush.set_protocolversion( nVer ) // set 
XPush.protocolversion // get
```

**Setting Syntax**
```javascript
X-Push 서버와 통신 시 사용할 Protocol 의 버전을 숫자로 설정합니다.

2 설정 시 v2.8 미만 버전의 X-PUSH 서버 기능을 사용 할 수 있습니다.
3 설정 시 v2.8 이상 버전의 X-PUSH 서버 기능을 사용 할 수 있습니다.

* X-PUSH 서버의 버전이 V2.8 미만일 경우 2 만 설정할 수 있습니다.
```

**Remark**
- protocolversion 속성값을 설정하지 않으면 2 로 적용됩니다.

- X-PUSH v2.8 이상에서 제공하는 신규기능을 사용하려면 protocolversion 속성값을 3 으로 설정하여야 합니다.
   > User 별로 Project ID 로 구분된 메시지를 전송할 수 있습니다.
   > Mobile 에서 동일 디바이스의 서로 다른 App 에 Notification 을 구분하여 전송할 수 있습니다.

---

## retry

X-PUSH 서버에 연결을 시도할 때 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다.

**Setting Syntax**
```javascript
에러 발생 시 재시도할 횟수를 숫자로 설정합니다.

"0" 설정 시 재시도 없이 연결을 종료합니다.
```

**Remark**
- retry 속성값을 설정하지 않으면 1 로 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 지원하지 않는 속성입니다.

---

## sessionid

X-PUSH 서버 연결 시 사용할 Session ID를 설정하는 속성입니다.

**Setting Syntax**
```javascript
X-PUSH 서버 연결 시 사용할 Session ID 를 문자열로 설정합니다.
```

**Remark**
- connect() 메소드에서 파라미터 생략 시 sessionid 속성값을 사용합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## timeout

X-PUSH 서버와 연결을 위해 보낸 메시지의 응답을 기다리는 시간을 설정하는 속성입니다.

**Setting Syntax**
```javascript
X-PUSH 서버와 연결을 위해 보낸 메시지의 응답을 기다리는 시간을 초(Second) 단위의 숫자로 설정합니다.

"1" 이상의 정수값을 설정할 수 있습니다.
X-PUSH 서버에 설정된 응답시간보다 크거나 같게 설정하여야 합니다.
```

**Remark**
- timeout 속성값을 설정하지 않으면 30 으로 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 지원하지 않는 속성입니다.

---

## userid

X-PUSH 서버 연결 시 사용할 User ID를 설정하는 속성입니다.

**Setting Syntax**
```javascript
X-PUSH 서버 연결 시 사용할 User ID 를 문자열로 설정합니다.
```

**Remark**
- connect() 메소드에서 파라미터 생략 시 userid 속성값을 사용합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---
