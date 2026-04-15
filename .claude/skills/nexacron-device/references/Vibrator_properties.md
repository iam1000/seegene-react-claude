# Vibrator Properties

| Property | Description |
|----------|-------------|
| `id` | Vibrator의 고유 식별자를 설정하는 속성입니다. |
| `name` | Vibrator 의 이름을 설정하는 속성입니다. |
| `parent` | Vibrator 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `patterns` | 모바일 기기에서 진동 패턴을 배열로 설정하는 속성입니다. |
| `repeatcount` | 모바일 디바이스에 진동패턴의 반복 횟수를 설정하는 속성입니다. |
| `startpos` | patterns 속성에 설정된 진동 패턴의 시작위치를 설정하는 속성입니다. |

---

## id

Vibrator의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
Vibrator.id
```

**Setting Syntax**
```javascript
Vibrator를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

Vibrator 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Vibrator.set_name(strName) // set
Vibrator.name // get
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

Vibrator 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
Vibrator.parent
```

**Setting Syntax**
```javascript
var objParent = this.Vibrator00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Vibrator 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## patterns

모바일 기기에서 진동 패턴을 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
진동 패턴을 "무진동, 진동" 의 쌍으로 이루어진 배열로 설정합니다.

배열의 요소값은 밀리초(milliseconds)단위의 시간으로 설정합니다.
```

**Remark**
- patterns 속성값을 설정하지 않으면 "{100, 100}" 으로 적용됩니다.

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

---

## repeatcount

모바일 디바이스에 진동패턴의 반복 횟수를 설정하는 속성입니다.

**Setting Syntax**
```javascript
patterns 속성값에 설정된 진동패턴이 반복되는 횟수를 숫자로 설정합니다.

0 설정 시 진동패턴이 무한반복됩니다.
1 설정 시 반복없이 1회만 실행됩니다.
```

**Remark**
- repeatcount 속성값을 설정하지 않으면 1 로 적용됩니다.

- iOS/iPadOS 는 patterns 속성값이 무시되고, 디바이스에서 제공하는 진동패턴이 적용됩니다.

---

## startpos

patterns 속성에 설정된 진동 패턴의 시작위치를 설정하는 속성입니다.

**Setting Syntax**
```javascript
patterns 속성에 설정된 진동패턴 배열값에서 진동을 시작할 배열요소의 인덱스값을 설정합니다.

배열요소의 갯수보다 큰 값을 설정할 수 없습니다.
```

**Remark**
- startpos 속성값을 설정하지 않으면 0 으로 적용됩니다.

- 지정된 위치부터 패턴의 끝까지 반복 실행됩니다.

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

---
