# ExternalAPI Properties

| Property | Description |
|----------|-------------|
| `id` | ExternalAPI의 고유 식별자를 설정하는 속성입니다. |
| `name` | ExternalAPI 의 이름을 설정하는 속성입니다. |
| `parent` | ExternalAPI 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |

---

## id

ExternalAPI의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
ExternalAPI.id
```

**Setting Syntax**
```javascript
ExternalAPI를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

ExternalAPI 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
ExternalAPI.set_name(strName) // set
ExternalAPI.name // get
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

ExternalAPI 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
ExternalAPI.parent
```

**Setting Syntax**
```javascript
var objParent = this.ExternalAPI00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- ExternalAPI 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---
