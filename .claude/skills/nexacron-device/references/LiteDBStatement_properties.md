# LiteDBStatement Properties

| Property | Description |
|----------|-------------|
| `async` | LiteDBStatement 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다. |
| `id` | LiteDBStatement의 고유 식별자를 설정하는 속성입니다. |
| `ldbconnection` | 데이터베이스 연결을 위해 LiteDBConnection 객체를 설정하는 속성입니다. |
| `name` | LiteDBStatement 의 이름을 설정하는 속성입니다. |
| `parameters` | 쿼리문에 사용된 파라미터를 배열로 설정하는 속성입니다. |
| `parent` | LiteDBStatement 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `query` | executeQuery() 또는 executeUpdate() 메소드 수행 시 사용되는 쿼리문을 설정하는 속성입니다. |

---

## async

LiteDBStatement 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
LiteDBStatement 에 요청된 작업이 동기(Sync) 로 동작됩니다.
```

**Remark**
- async 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Mobile 제약

- 모바일 환경에서는 항상 비동기(Async) 로 동작합니다.

---

## id

LiteDBStatement의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
LiteDBStatement.id
```

**Setting Syntax**
```javascript
LiteDBStatement를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## ldbconnection

데이터베이스 연결을 위해 LiteDBConnection 객체를 설정하는 속성입니다.

**Setting Syntax**
```javascript
데이터베이스 연결정보가 설정된 LiteDBConnection 객체를 설정합니다.
```

---

## name

LiteDBStatement 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
LiteDBStatement.set_name(strName) // set
LiteDBStatement.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## parameters

쿼리문에 사용된 파라미터를 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
쿼리문에 사용된 파라미터를 LiteDBParameter 객체의 배열로 설정합니다.
```

**Remark**
- parameters 속성은 Collection 접근방식을 사용할 수 있습니다.
  LiteDBStatement.parameters[0], LiteDBStatement.parameters["ChildFrame0"], LiteDBStatement.parameters.length 등의 방법을 사용합니다.

---

## parent

LiteDBStatement 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
LiteDBStatement.parent
```

**Setting Syntax**
```javascript
var objParent = this.LiteDBStatement00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- LiteDBStatement 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## query

executeQuery() 또는 executeUpdate() 메소드 수행 시 사용되는 쿼리문을 설정하는 속성입니다.

**Setting Syntax**
```javascript
executeQuery() 또는 executeUpdate() 메소드 수행 시 사용되는 쿼리문을 문자열로 설정합니다.
```

**Remark**
- 쿼리 문장에 ":ParameterName" 형식으로 설정하면 LiteDBStatement 의 parameters 속성을 통해 접근할 수 있습니다.

---
