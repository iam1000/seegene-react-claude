# EventObject Properties

| Property | Description |
|----------|-------------|
| `length` | 이벤트에 정의된 이벤트 핸들러 함수의 갯수를 갖는 읽기전용 속성입니다. |
| `name` | EventObject 의 이름을 설정하는 속성입니다. |

---

## length

이벤트에 정의된 이벤트 핸들러 함수의 갯수를 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var nCnt = this.Button00.onclick.length;
```

**Remark**
- 이벤트 핸들러 함수는 넥사크로 스튜디오에서 정의하거나 addEventHandler() 와 같은 메소드를 사용하여 정의할 수 있습니다.

---

## name

EventObject 의 이름을 설정하는 속성입니다.

**Setting Syntax**
```javascript
EventObject 의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 Object 의 이름으로 논리적으로 중복이 가능합니다.

---
