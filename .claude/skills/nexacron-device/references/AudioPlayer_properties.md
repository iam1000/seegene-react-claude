# AudioPlayer Properties

| Property | Description |
|----------|-------------|
| `currentpos` | 모바일기기에서 재생중인 오디오파일의 현재 재생위치를 밀리초(milliseconds) 단위로 갖는 읽기전용 속성입니다. |
| `duration` | 로드된 오디오파일의 총 재생시간을 밀리초(milliseconds)단위로 갖는 읽기전용 속성입니다. |
| `id` | AudioPlayer의 고유 식별자를 설정하는 속성입니다. |
| `name` | AudioPlayer 의 이름을 설정하는 속성입니다. |
| `pan` | 모바일 기기에서 스피커의 밸런스를 설정하는 속성입니다. |
| `parent` | AudioPlayer 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `repeatcount` | 모바일 기기에서 오디오 파일의 반복재생 횟수를 설정하는 속성입니다. |
| `startpos` | 모바일 기기에서 구간 반복 시 구간의 시작지점을 설정하는 속성입니다. |
| `stoppos` | 모바일 기기에서 구간 반복 시 구간의 끝지점을 설정하는 속성입니다. |
| `url` | AudioPlayer 에 로드된 오디오파일의 경로를 갖는 읽기전용 속성입니다. |
| `volume` | 모바일 기기에서 오디오 파일 재생 시 볼륨값을 설정하는 속성입니다. |

---

## currentpos

모바일기기에서 재생중인 오디오파일의 현재 재생위치를 밀리초(milliseconds) 단위로 갖는 읽기전용 속성입니다.

**Remark**
- currentpos 속성값은 onload 또는 onplaying 이벤트가 발생한 경우에 설정됩니다.

---

## duration

로드된 오디오파일의 총 재생시간을 밀리초(milliseconds)단위로 갖는 읽기전용 속성입니다.

**Remark**
- duration 속성값은 onload 또는 onplaying 이벤트가 발생한 경우에 설정됩니다.

---

## id

AudioPlayer의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
AudioPlayer.id
```

**Setting Syntax**
```javascript
AudioPlayer를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

AudioPlayer 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
AudioPlayer.set_name(strName) // set
AudioPlayer.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## pan

모바일 기기에서 스피커의 밸런스를 설정하는 속성입니다.

**Setting Syntax**
```javascript
오디오파일 재생 시작 시 적용될 왼쪽 스피커의 밸런스를 "0.0 ~ 1.0" 범위의 실수값으로 설정합니다.

"0" 설정 시 왼쪽 스피커만 사용합니다.
"0.5" 설정 시 좌우 스피커를 동일하게 사용합니다.
"1" 설정 시 오른쪽 스피커만 사용합니다.
"-1" 설정 시 모바일에 설정되어 있는 밸런스값이 적용됩니다
```

**Remark**
- pan 속성값을 설저하지 않으면 "-1" 로 적용됩니다.

- pan 속성값을 "0.3" 으로 설정 시 오른쪽 스피커에 30% 음량이, 왼쪽 스피커에 70% 의 음량이 적용됩니다.

---

## parent

AudioPlayer 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
AudioPlayer.parent
```

**Setting Syntax**
```javascript
var objParent = this.AudioPlayer00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- AudioPlayer 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## repeatcount

모바일 기기에서 오디오 파일의 반복재생 횟수를 설정하는 속성입니다.

**Setting Syntax**
```javascript
오디오 파일의 반복재생 횟수를 정수로 설정합니다.

"0" 설정 시 오디오 파일을 무한 반복재생합니다.
"1" 설정 시 오디오 파일을 반복재생하지 않습니다.
```

**Remark**
- repeatcount 속성값을 설정하지 않으면 "1" 로 적용됩니다.

---

## startpos

모바일 기기에서 구간 반복 시 구간의 시작지점을 설정하는 속성입니다.

**Setting Syntax**
```javascript
전체 오디오 재생시간 중 구간반복 시작지점의 시간을 밀리초(milliseconds) 단위의 숫자로 설정합니다.

"-1" 설정 시 구간반복의 시작지점을 설정하지 않습니다.
```

**Remark**
- startpos 속성값을 설정하지 않으면 -1 로 적용됩니다.

- 오디오파일이 로딩되면 -1 로 재설정 됩니다.

---

## stoppos

모바일 기기에서 구간 반복 시 구간의 끝지점을 설정하는 속성입니다.

**Setting Syntax**
```javascript
전체 오디오 재생시간 중 구간반복 끝지점의 시간을 밀리초(milliseconds) 단위의 숫자로 설정합니다.

"-1" 설정 시 구간반복의 끝지점을 설정하지 않습니다.
```

**Remark**
- stoppos 속성값을 설정하지 않으면 "-1" 로 적용됩니다.

- 오디오파일이 로딩되면 "-1"로 재설정 됩니다.

---

## url

AudioPlayer 에 로드된 오디오파일의 경로를 갖는 읽기전용 속성입니다.

**Remark**
- url 속성값은 load() 메소드가 수행될 때 설정됩니다.

---

## volume

모바일 기기에서 오디오 파일 재생 시 볼륨값을 설정하는 속성입니다.

**Setting Syntax**
```javascript
오디오파일 재생 시작 시 적용될 볼륨값을 0.0~1.0 범위의 실수값으로 설정합니다.

-1 설정 시 모바일에 설정되어 있는 볼륨값이 적용됩니다.
```

**Remark**
- volumn 속성값을 설정하지 않으면 -1 로 적용됩니다.

- iOS/iPadOS NRE 는 모바일 기기에 설정된 시스템 볼륨이 최대값으로 적용되므로 volumn 속성에 시스템 볼륨값보다 큰 값을 설정하여도 시스템 볼륨값으로 적용됩니다.

---
