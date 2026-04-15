# BluetoothLE Properties

| Property | Description |
|----------|-------------|
| `id` | BluetoothLE의 고유 식별자를 설정하는 속성입니다. |
| `name` | BluetoothLE 의 이름을 설정하는 속성입니다. |

---

## id

BluetoothLE의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
BluetoothLE.id
```

**Setting Syntax**
```javascript
BluetoothLE를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

BluetoothLE 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
BluetoothLE.set_name(strName) // set
BluetoothLE.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---
