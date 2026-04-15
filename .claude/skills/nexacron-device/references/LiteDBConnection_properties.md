# LiteDBConnection Properties

| Property | Description |
|----------|-------------|
| `async` | LiteDBConnection 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다. |
| `busytimeout` | LiteDBConnection 에 연결된 데이터베이스에서 응답을 받기 위한 최대 대기시간을 설정하는 속성입니다. |
| `datasource` | LiteDBConnection 에 연결할 데이터베이스의 위치정보를 설정하는 속성입니다. |
| `id` | LiteDBConnection의 고유 식별자를 설정하는 속성입니다. |
| `name` | LiteDBConnection 의 이름을 설정하는 속성입니다. |
| `openflag` | LiteDBConnection 에 데이터베이스를 연결하는 옵션을 설정하는 속성입니다. |
| `parent` | LiteDBConnection 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `preconnect` | LiteDBConnection 생성 시 데이터베이스를 연결할지 설정하는 속성입니다. |

---

## async

LiteDBConnection 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
LiteDBConnection 에 요청된 작업이 동기(Sync) 로 동작됩니다.
```

**Remark**
- async 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Mobile 제약

- 모바일 환경에서는 항상 비동기(Async) 로 동작합니다.

---

## busytimeout

LiteDBConnection 에 연결된 데이터베이스에서 응답을 받기 위한 최대 대기시간을 설정하는 속성입니다.

**Setting Syntax**
```javascript
응답을 받기위한 최대시간을 밀리초(milliseconds) 단위의 숫자로 설정합니다.

200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다.
```

**Remark**
- busytimeout 속성값을 설정하지 않으면 60000 으로 적용됩니다.

- Android NRE 는 지원하지 않는 속성입니다.

---

## datasource

LiteDBConnection 에 연결할 데이터베이스의 위치정보를 설정하는 속성입니다.

**Setting Syntax**
```javascript
연결할 데이터베이스의 위치정보를 문자열로 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다.
```

**Remark**
- strPath 에 사용할 수 있는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---

## id

LiteDBConnection의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
LiteDBConnection.id
```

**Setting Syntax**
```javascript
LiteDBConnection를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

LiteDBConnection 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
LiteDBConnection.set_name(strName) // set
LiteDBConnection.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## openflag

LiteDBConnection 에 데이터베이스를 연결하는 옵션을 설정하는 속성입니다.

**Setting Syntax**
```javascript
데이터베이스와 연결하는 옵션을 설정합니다.

LiteDBConnection.openReadWrite 또는 0 설정 시 데이터베이스를 읽기/쓰기가 가능하도록 연결합니다.
LiteDBConnection.openReadWriteCreate 또는 1 설정 시 데이터베이스를 읽기/쓰기/파일생성이 가능하도록 연결합니다.
```

**Remark**
- openflag 속성값을 설정하지 않으면 LiteDBConnection.openReadWriteCreate 로 적용됩니다.

- 넥사크로 스튜디오는 "openReadWrite", "openReadWriteCreate" 의 Enum 형태로 값을 설정하면 Generate 시 상수값이 설정됩니다.

---

## parent

LiteDBConnection 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
LiteDBConnection.parent
```

**Setting Syntax**
```javascript
var objParent = this.LiteDBConnection00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- LiteDBConnection 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## preconnect

LiteDBConnection 생성 시 데이터베이스를 연결할지 설정하는 속성입니다.

**Setting Syntax**
```javascript
LiteDBConnection 생성 시 데이터베이스를 자동으로 연결하지 않습니다.
```

**Remark**
- preconnect 속성값을 설정하지 않으면 "false" 로 적용됩니다.

---
