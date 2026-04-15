# ImagePicker Properties

| Property | Description |
|----------|-------------|
| `encodingtype` | 가져온 이미지의 타입 정보를 갖는 읽기전용 속성입니다. |
| `gettype` | 가져온 이미지가 전달된 방식을 갖는 읽기전용 속성입니다. |
| `id` | ImagePicker의 고유 식별자를 설정하는 속성입니다. |
| `imageheight` | 가져올 이미지의 높이를 설정하는 속성입니다. |
| `imagequality` | 가져올 이미지의 품질을 설정하는 속성입니다. |
| `imagewidth` | 가져올 이미지의 너비를 설정하는 속성입니다. |
| `name` | ImagePicker 의 이름을 설정하는 속성입니다. |
| `parent` | ImagePicker 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |

---

## encodingtype

가져온 이미지의 타입 정보를 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
가져온 이미지가 "PNG" 형식일 때 갖는 값입니다.
```

**Remark**
- ImagePicker 의 open 메소드에서 파라미터로 설정한 값을 갖습니다.

---

## gettype

가져온 이미지가 전달된 방식을 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
가져온 이미지가 오브젝트 형태일 때 갖는 값입니다.
```

**Remark**
- ImagePicker 의 open 메소드에서 파라미터로 설정한 값을 갖습니다.

---

## id

ImagePicker의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
ImagePicker.id
```

**Setting Syntax**
```javascript
ImagePicker를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## imageheight

가져올 이미지의 높이를 설정하는 속성입니다.

**Setting Syntax**
```javascript
이미지를 가져올 때 적용될 높이를 픽셀 단위의 숫자로 설정합니다.

0 으로 설정 시 원본 이미지의 높이를 변경하지 않습니다.
```

**Remark**
- imageheight 속성값을 설정하지 않으면 0 으로 적용됩니다.

- open 메소드로 이미지를 가져올 때 이미지의 높이를 imageheight 속성값으로 변경합니다.

- 이미지의 높이를 변경할 때 원본이미지의 너비와 비율이 맞지 않는 경우는 이미지가 왜곡될 수 있습니다.

- 원본 이미지의 크기는 모바일 기기의 종류에 따라 다르며 변경된 이미지의 용량이 사용가능한 메모리보다 큰 경우 오류가 발생합니다.

---

## imagequality

가져올 이미지의 품질을 설정하는 속성입니다.

**Setting Syntax**
```javascript
이미지를 가져올 때 적용될 품질을 "0 ~ 100" 범위의 값으로 설정합니다.
```

**Remark**
- imagequality 속성값을 설정하지 않으면 "100" 으로 적용됩니다.

- open 메소드의 두번째 파라미터를 "JPEG" 으로 설정했을 때만 적용되는 속성입니다.

---

## imagewidth

가져올 이미지의 너비를 설정하는 속성입니다.

**Setting Syntax**
```javascript
이미지를 가져올 때 적용될 너비를 픽셀 단위의 숫자로 설정합니다.

0 으로 설정 시 원본 이미지의 너비를 변경하지 않습니다.
```

**Remark**
- imagewidth 속성값을 설정하지 않으면 0 으로 적용됩니다.

- open 메소드로 이미지를 가져올 때 이미지의 너비를 imagewidth 속성값으로 변경합니다.

- 이미지의 너비를 변경할 때 원본이미지의 높이와 비율이 맞지 않는 경우는 이미지가 왜곡될 수 있습니다.

- 원본 이미지의 크기는 모바일 기기의 종류에 따라 다르며 변경된 이미지의 용량이 사용가능한 메모리보다 큰 경우 오류가 발생합니다.

---

## name

ImagePicker 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
ImagePicker.set_name(strName) // set
ImagePicker.name // get
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

ImagePicker 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
ImagePicker.parent
```

**Setting Syntax**
```javascript
var objParent = this.ImagePicker00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- ImagePicker 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---
