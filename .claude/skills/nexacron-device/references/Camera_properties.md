# Camera Properties

| Property | Description |
|----------|-------------|
| `encodingtype` | 모바일 기기에서 카메라 앱을 통해 얻은 이미지의 타입을 설정하는 속성입니다. |
| `gettype` | 모바일 기기에서 촬영된 이미지가 전달되는 방식을 설정하는 속성입니다. |
| `id` | Camera의 고유 식별자를 설정하는 속성입니다. |
| `imageheight` | 모바일 기기에서 카메라 앱을 통해 얻은 이미지의 높이를 설정하는 속성입니다. |
| `imagequality` | 모바일 기기에서 카메라 앱을 통해 얻은 이미지의 품질을 설정하는 속성입니다. |
| `imagewidth` | 모바일 기기에서 카메라 앱을 통해 얻은 이미지의 너비를 설정하는 속성입니다. |
| `name` | Camera 의 이름을 설정하는 속성입니다. |
| `parent` | Camera 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `usegallery` | 모바일 기기에서 촬영된 이미지를 사진앨범에 저장할 지 여부를 설정하는 속성입니다. |

---

## encodingtype

모바일 기기에서 카메라 앱을 통해 얻은 이미지의 타입을 설정하는 속성입니다.

**Setting Syntax**
```javascript
카메라 앱을 통해 얻은 이미지를 PNG 형식으로 저장합니다.
```

**Remark**
- encodingtype 속성값을 설정하지 않으면 "JPEG" 으로 적용됩니다.

---

## gettype

모바일 기기에서 촬영된 이미지가 전달되는 방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
촬영된 이미지가 오브젝트로 전달됩니다.
```

**Remark**
- gettype 속성값을 설정하지 않으면 "url" 로 적용됩니다.

---

## id

Camera의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
Camera.id
```

**Setting Syntax**
```javascript
Camera를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## imageheight

모바일 기기에서 카메라 앱을 통해 얻은 이미지의 높이를 설정하는 속성입니다.

**Setting Syntax**
```javascript
촬영된 이미지의 높이를 pixel 단위의 숫자로 설정합니다.

"0" 으로 설정 시 촬영된 이미지의 높이를 변경하지 않습니다.
```

**Remark**
- imageheight 속성값을 설정하지 않으면 "0" 으로 적용됩니다.

- 이미지의 높이와 너비 비율이 맞지 않는 경우는 이미지가 왜곡될 수 있습니다.

- 이미지의 원본 크기는 모바일 기기의 종류에 따라 다르며 변경된 이미지의 용량이 사용가능한 메모리보다 큰 경우 오류가 발생합니다.

---

## imagequality

모바일 기기에서 카메라 앱을 통해 얻은 이미지의 품질을 설정하는 속성입니다.

**Setting Syntax**
```javascript
이미지의 품질을 "0 ~ 100" 범위의 값으로 설정합니다.
```

**Remark**
- imagequality 속성값을 설정하지 않으면 "100" 으로 적용됩니다.

- encodingtype 속성값이 "JPEG"인 경우만 적용되는 속성입니다.

---

## imagewidth

모바일 기기에서 카메라 앱을 통해 얻은 이미지의 너비를 설정하는 속성입니다.

**Setting Syntax**
```javascript
촬영된 이미지의 너비를 pixel 단위의 숫자로 설정합니다.

"0" 으로 설정 시 촬영된 이미지의 너비를 변경하지 않습니다.
```

**Remark**
- imagewidth 속성값을 설정하지 않으면 "0" 으로 적용됩니다.

- 이미지의 높이와 너비 비율이 맞지 않는 경우는 이미지가 왜곡될 수 있습니다.

- 이미지의 원본 크기는 모바일 기기의 종류에 따라 다르며 변경된 이미지의 용량이 사용가능한 메모리보다 큰 경우 오류가 발생합니다.

---

## name

Camera 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Camera.set_name(strName) // set
Camera.name // get
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

Camera 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
Camera.parent
```

**Setting Syntax**
```javascript
var objParent = this.Camera00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Camera 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## usegallery

모바일 기기에서 촬영된 이미지를 사진앨범에 저장할 지 여부를 설정하는 속성입니다.

**Setting Syntax**
```javascript
모바일 기기에서 촬영된 이미지를 사진앨범 영역에 저장하지 않습니다.
```

**Remark**
- usegallery 속성값을 설정하지 않으면 true 로 적용됩니다.

- 촬영된 이미지는 usegallery 속성값과 관계없이 앱의 캐시영역에 저장됩니다.

---
