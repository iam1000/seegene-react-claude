# Geolocation Properties

| Property | Description |
|----------|-------------|
| `coords` | 모바일 기기에서 마지막으로 수신된 위치정보 객체를 갖는 읽기전용 속성입니다. |
| `id` | Geolocation의 고유 식별자를 설정하는 속성입니다. |
| `name` | Geolocation 의 이름을 설정하는 속성입니다. |
| `parent` | Geolocation 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `sourcetype` | 모바일 기기에서 수신된 위치정보를 제공한 소스를 갖는 읽기전용 속성입니다. |
| `timestamp` | 모바일 기기에서 위치정보를 수신한 시간을 갖는 읽기전용 속성입니다. |

---

## coords

모바일 기기에서 마지막으로 수신된 위치정보 객체를 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
위치정보 중 속도정보를 Meter/Second 단위의 숫자로 갖는 하위속성입니다.
```

**Remark**
- Android 일 경우 altitudeaccuracy 하위속성을 지원하지 않습니다.
- 하위 속성 중 speed 속성값이 유효하지 않은 값인 경우(0 또는 0보다 작은 값)에는 speed 속성값을 undefined로 반환합니다.

---

## id

Geolocation의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
Geolocation.id
```

**Setting Syntax**
```javascript
Geolocation를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

Geolocation 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Geolocation.set_name(strName) // set
Geolocation.name // get
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

Geolocation 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
Geolocation.parent
```

**Setting Syntax**
```javascript
var objParent = this.Geolocation00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Geolocation 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## sourcetype

모바일 기기에서 수신된 위치정보를 제공한 소스를 갖는 읽기전용 속성입니다.

**Remark**
- GPS 에서 수신된 위치정보일 경우 1 로 설정됩니다.
   WPS 에서 수신된 위치정보일 경우 2 로 설정됩니다.

- iOS/iPadOS NRE 는 사용할 수 없는 속성입니다.

---

## timestamp

모바일 기기에서 위치정보를 수신한 시간을 갖는 읽기전용 속성입니다.

---
