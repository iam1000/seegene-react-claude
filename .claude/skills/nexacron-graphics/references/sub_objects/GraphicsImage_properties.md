# GraphicsImage Properties

| Property | Description |
|----------|-------------|
| `height` | GraphicsImage 영역의 높이를 설정하는 속성입니다. |
| `id` | GraphicsImage 의 고유 식별자를 설정하는 속성입니다. |
| `image` | GraphicsImage 에 로드 할 이미지 파일의 위치 경로를 설정하는 속성입니다. |
| `imageheight` | GraphicsImage 에 로드된 이미지의 실제 높이값을 갖는 읽기전용 속성입니다. |
| `imagewidth` | GraphicsImage 에 로드된 이미지의 실제 너비값을 갖는 읽기전용 속성입니다. |
| `opacity` | GraphicsImage 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsImage 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `visible` | GraphicsImage 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `width` | GraphicsImage 영역의 너비를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsImage 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsImage 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

---

## height

GraphicsImage 영역의 높이를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsImage.set_height(nHeight) // set
GraphicsImage.height // get
```

**Setting Syntax**
```javascript
GraphicsImage 영역의 높이를 pixel 단위의 숫자로 설정합니다.

"px" 단위 없이 숫자값만 설정하여야 합니다.
```

---

## id

GraphicsImage 의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsImage.id
```

**Setting Syntax**
```javascript
GraphicsImage 를 구별할 수 있는 유일값을 설정합니다.
```

**Remark**
-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsImage 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.

---

## image

GraphicsImage 에 로드 할 이미지 파일의 위치 경로를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsImage.set_image(strImage) // set
GraphicsImage.image // get
```

**Setting Syntax**
```javascript
Form 의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.
```

**Remark**
- 이미지 데이터를 로드하지 않고 이미지 파일에 대한 핸들을 관리합니다.

- GraphicsImage 에 이미지가 비동기로 로드됩니다.
   이미지 용량과 위치에 따라서 image 속성 설정 후 곧바로 화면에 표시되지 않을 수 있습니다.

---

## imageheight

GraphicsImage 에 로드된 이미지의 실제 높이값을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GraphicsImage.imageheight
```

**Remark**
- GraphicsImage 에 이미지가 비동기로 로드됩니다.
   따라서 image 속성에 값 설정 후 곧바로 imageheight 속성에 접근 시 잘못된 값을 얻을 수 있습니다.
   이미지 로드가 완료된 후 imageheight 속성에 접근하여야 합니다.

**See Also**: imagewidth

---

## imagewidth

GraphicsImage 에 로드된 이미지의 실제 너비값을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GraphicsImage.imagewidth
```

**Remark**
- GraphicsImage 에 이미지가 비동기로 로드됩니다.
   따라서 image 속성에 값설정 후 곧바로 imagewidth 속성에 접근 시 잘못된 값을 얻을 수 있습니다.
   이미지 로드가 완료된 후 imagewidth 속성에 접근하여야 합니다.

**See Also**: imageheight

---

## opacity

GraphicsImage 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsImage.set_opacity(nOpacity) // set
GraphicsImage.opacity // get
```

**Setting Syntax**
```javascript
0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.
```

**Remark**
- opacity 속성값을 설정하지 않으면 undefined 가 설정되고 1 로 동작합니다.

- GraphicsGroup 의 경우 하위 오브젝트에 투명도가 동일하게 적용됩니다.

- 부모와 자식 오브젝트에 각각 opacity 속성이 설정되어 있으면 자식 오브젝트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity 값이 0.5 이고 자식의 opacity 값이 0.4 이면 결과적으로 자식 오브젝트는 0.2 의 투명도가 적용됩니다.

---

## parent

GraphicsImage 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GraphicsImage.parent
```

**Remark**
- 일반적으로 addChild() 메소드를 사용하여 GraphicsImage 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsImage 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.

---

## visible

GraphicsImage 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsImage.set_visible(bVisible) // set
GraphicsImage.visible // get
```

**Setting Syntax**
```javascript
Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsImage 를 표시하지 않습니다.
```

**Remark**
- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsImage 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.

---

## width

GraphicsImage 영역의 너비를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsImage.set_width(nWidth) // set
GraphicsImage.width // get
```

**Setting Syntax**
```javascript
GraphicsImage 영역의 너비를 pixel 단위의 숫자로 설정합니다.

"px" 단위 없이 숫자값만 설정하여야 합니다.
```

---

## x

부모 오브젝트를 기준으로 GraphicsImage 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsImage.set_x(nX) // set
GraphicsImage.x // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsImage 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsImage 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.

---

## y

부모 오브젝트를 기준으로 GraphicsImage 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsImage.set_y(nY) // set
GraphicsImage.y // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsImage 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsImage 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.

---
