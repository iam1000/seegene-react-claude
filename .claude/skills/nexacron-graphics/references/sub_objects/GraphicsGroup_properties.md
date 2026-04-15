# GraphicsGroup Properties

| Property | Description |
|----------|-------------|
| `id` | GraphicsGroup 의 고유 식별자를 설정하는 속성입니다. |
| `parent` | GraphicsGroup 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `visible` | GraphicsGroup 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

---

## id

GraphicsGroup 의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsGroup.id
```

**Setting Syntax**
```javascript
GraphicsGroup 를 구별할 수 있는 유일값을 설정합니다.
```

**Remark**
-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsGroup 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.

---

## parent

GraphicsGroup 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GraphicsGroup.parent
```

**Remark**
- 일반적으로 addChild() 메소드를 사용하여 GraphicsGroup 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsGroup 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.

---

## visible

GraphicsGroup 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsGroup.set_visible(bVisible) // set
GraphicsGroup.visible // get
```

**Setting Syntax**
```javascript
Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsGroup 를 표시하지 않습니다.
```

**Remark**
- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsGroup 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.

---

## x

부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsGroup.set_x(nX) // set
GraphicsGroup.x // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsGroup 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.

---

## y

부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsGroup.set_y(nY) // set
GraphicsGroup.y // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsGroup 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.

---
