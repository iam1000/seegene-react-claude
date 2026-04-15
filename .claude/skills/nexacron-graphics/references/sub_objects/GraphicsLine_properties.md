# GraphicsLine Properties

| Property | Description |
|----------|-------------|
| `id` | GraphicsLine 의 고유 식별자를 설정하는 속성입니다. |
| `opacity` | GraphicsLine 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsLine 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `strokecap` | GraphicsLIne 에 표시되는 직선의 양 끝 모양을 설정하는 속성입니다. |
| `strokepen` | GraphicsLine 에 표시되는 직선의 색과 형식을 설정하는 속성입니다. |
| `visible` | GraphicsLine 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsLine 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `x1` | 직선이 시작하는 위치의 x 좌표값을 설정하는 속성입니다. |
| `x2` | 직선이 끝나는 위치의 x 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsLine 가 표시될 y 축 좌표값을 설정하는 속성입니다. |
| `y1` | 직선이 시작하는 위치의 y 좌표값을 설정하는 속성입니다. |
| `y2` | 직선이 끝나는 위치의 y 좌표값을 설정하는 속성입니다. |

---

## id

GraphicsLine 의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.id
```

**Setting Syntax**
```javascript
GraphicsLine 를 구별할 수 있는 유일값을 설정합니다.
```

**Remark**
-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsLine 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.

---

## opacity

GraphicsLine 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_opacity(nOpacity) // set
GraphicsLine.opacity // get
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

GraphicsLine 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GraphicsLine.parent
```

**Remark**
- 일반적으로 addChild() 메소드를 사용하여 GraphicsLine 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsLine 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.

---

## strokecap

GraphicsLIne 에 표시되는 직선의 양 끝 모양을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_strokecap(enumCap) // set
GraphicsLine.strokecap // get
```

**Setting Syntax**
```javascript
직선의 끝점을 약간 벗어나고 끝을 각지게 표시합니다.
```

**Remark**
- strokecap 속성값을 설정하지 않으면 "butt" 로 적용됩니다.

---

## strokepen

GraphicsLine 에 표시되는 직선의 색과 형식을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_strokepen(strStrokePen) // set
GraphicsLine.strokepen // get
```

**Setting Syntax**
```javascript
"#"기호로 시작하는 6자리 hexadecimal 색상코드값으로 직선의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 직선의 색을 설정합니다. (ex-"rgb (255, 0, 255)")
```

**Remark**
- strokepen 속성값을 설정하지 않으면 GraphicsLine 에 직선이 표시되지 않습니다.

- strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


◆ Nexacro Runtime Environment 제약

- Nexacro Runtime Environment는 <line-style> 에 "solid" 값만 설정할 수 있습니다.

---

## visible

GraphicsLine 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_visible(bVisible) // set
GraphicsLine.visible // get
```

**Setting Syntax**
```javascript
Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsLine 를 표시하지 않습니다.
```

**Remark**
- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsLine 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.

---

## x

부모 오브젝트를 기준으로 GraphicsLine 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_x(nX) // set
GraphicsLine.x // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsLine 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsLine 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.

---

## x1

직선이 시작하는 위치의 x 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_x1(nX1) // set
GraphicsLine.x1 // get
```

**Setting Syntax**
```javascript
직선이 시작하는 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsLine 의 x 속성값을 기준으로 처리됩니다.
```

**Remark**
- y1 속성값을 함께 설정하여야 정상적으로 처리됩니다.

- 직선의 두께와 색을 설정하려면 strokepen 속성을 사용하여야 합니다.

**See Also**: y1

---

## x2

직선이 끝나는 위치의 x 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_x2(nX2) // set
GraphicsLine.x2 // get
```

**Setting Syntax**
```javascript
직선이 끝나는 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsLine 의 x 속성값을 기준으로 처리됩니다.
```

**Remark**
- y2 속성값을 함께 설정하여야 정상적으로 처리됩니다.

- 직선의 두께와 색을 설정하려면 strokepen 속성을 사용하여야 합니다.

**See Also**: y2

---

## y

부모 오브젝트를 기준으로 GraphicsLine 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_y(nY) // set
GraphicsLine.y // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsLine 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsLine 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.

---

## y1

직선이 시작하는 위치의 y 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_y1(nY1) // set
GraphicsLine.y1 // get
```

**Setting Syntax**
```javascript
직선이 시작하는 위치의 y 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsLine 의 y 속성값을 기준으로 처리됩니다.
```

**Remark**
- x1 속성값을 함께 설정하여야 정상적으로 처리됩니다.

- 직선의 두께와 색을 설정하려면 strokepen 속성을 사용하여야 합니다.

**See Also**: x1

---

## y2

직선이 끝나는 위치의 y 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsLine.set_y2(nY2) // set
GraphicsLine.y2 // get
```

**Setting Syntax**
```javascript
직선이 끝나는 위치의 y 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsLine 의 y 속성값을 기준으로 처리됩니다.
```

**Remark**
- x2 속성값을 함께 설정하여야 정상적으로 처리됩니다.

- 직선의 두께와 색을 설정하려면 strokepen 속성을 사용하여야 합니다.

---
