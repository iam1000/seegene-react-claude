# Network Properties

| Property | Description |
|----------|-------------|
| `availabletype` | 모바일 기기에서 사용가능한 네트워크에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| `id` | Network의 고유 식별자를 설정하는 속성입니다. |
| `name` | Network 의 이름을 설정하는 속성입니다. |
| `parent` | Network 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `timestamp` | 모바일 기기에서 사용가능한 네트워크를 확인한 시간정보를 갖는 읽기전용 속성입니다. |

---

## availabletype

모바일 기기에서 사용가능한 네트워크에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
"WIFI" 네트워크를 사용할 때 갖는 값입니다.
```

**Remark**
- onrecvsuccess 이벤트가 발생하면 최신값으로 갱신됩니다.

---

## id

Network의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
Network.id
```

**Setting Syntax**
```javascript
Network를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

Network 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Network.set_name(strName) // set
Network.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## parent

Network 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
Network.parent
```

**Setting Syntax**
```javascript
var objParent = this.Network00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Network 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## timestamp

모바일 기기에서 사용가능한 네트워크를 확인한 시간정보를 갖는 읽기전용 속성입니다.

**Remark**
- JavaScript 의 Date 자료형을 갖습니다.

- onrecvsuccess 이벤트가 발생하면 최신값으로 갱신됩니다.

---
