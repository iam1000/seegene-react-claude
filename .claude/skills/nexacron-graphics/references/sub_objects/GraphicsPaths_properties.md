# GraphicsPaths Properties

| Property | Description |
|----------|-------------|
| `fillstyle` | GraphicsPaths 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다. |
| `id` | GraphicsPaths 의 고유 식별자를 설정하는 속성입니다. |
| `miterlimit` | strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다. |
| `opacity` | GraphicsPaths 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsPaths 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `strokecap` | GraphicsPaths 에 표시되는 경로의 양 끝 모양을 설정하는 속성입니다. |
| `strokejoin` | GraphicsPaths 에 표시되는 경로의 연결점 모양을 설정하는 속성입니다. |
| `strokepen` | GraphicsPaths 에 표시되는 경로의 색과 형식을 설정하는 속성입니다. |
| `visible` | GraphicsPaths 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

---

## fillstyle

GraphicsPaths 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.set_fillstyle(strFillStyle) // set
GraphicsPaths.fillstyle // get
```

**Setting Syntax**
```javascript
<color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

<percentage> 값은 0 에서 100 사이의 값을 설정해야 합니다.
<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
```

**Remark**
- GraphicsPaths, GraphicsPath 는 닫힌 경로가 존재할 경우에만 내부영역을 처리합니다.

---

## id

GraphicsPaths 의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.id
```

**Setting Syntax**
```javascript
GraphicsPaths 를 구별할 수 있는 유일값을 설정합니다.
```

**Remark**
-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsPaths 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.

---

## miterlimit

strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.set_miterlimit(nLimit) // set
GraphicsPaths.miterlimit // get
```

**Setting Syntax**
```javascript
strokejoin 속성값이 "bevel" 로 변경될 최소 비율을 1 이상의 숫자로 설정합니다.

1 설정 시 strokejoin 속성이 항상 "bevel" 로 적용됩니다.
1 보다 큰 값을 설정하면 연관 요소들을 함께 판단하여 "bevel" 로 적용됩니다.
```

**Remark**
- miterlimit 속성값을 설정하지 않으면 10 으로 적용됩니다.

- 일반적으로 miterlimit 속성값이 "miter_length / (stroke_width / 2)" 의 값보다 작으면 strokejoin 속성값이 "bevel" 로 적용됩니다.
   > miter_length : 두 선의 중심이 만나는 점에서 테두리가 만나 뾰족하게 돌출된 끝점까지의 거리
   > stroke_width : 선의 두께

---

## opacity

GraphicsPaths 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.set_opacity(nOpacity) // set
GraphicsPaths.opacity // get
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

GraphicsPaths 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GraphicsPaths.parent
```

**Remark**
- 일반적으로 addChild() 메소드를 사용하여 GraphicsPaths 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsPaths 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.

---

## strokecap

GraphicsPaths 에 표시되는 경로의 양 끝 모양을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.set_strokecap(enumCap) // set
GraphicsPaths.strokecap // get
```

**Setting Syntax**
```javascript
경로의 끝점을 약간 벗어나고 끝을 각지게 표시합니다.
```

**Remark**
- strokecap 속성값을 설정하지 않으면 "butt" 로 적용됩니다.

- strokecap 속성은 경로의 시작점과 끝점 모양을 결정하며 연결점의 모양은 strokejoin 속성으로 설정합니다.

- GraphicsPaths 에 닫힌 경로가 설정되어 있을 경우 strokecap 속성은 적용되지 않습니다.

---

## strokejoin

GraphicsPaths 에 표시되는 경로의 연결점 모양을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.set_strokejoin(enumJoin) // set
GraphicsPaths.strokejoin // get
```

**Setting Syntax**
```javascript
경로가 만나는 중심점에서 테두리가 만나는 바깥점쪽이 칼로 잘라낸것 처럼 표시됩니다.
```

**Remark**
- strokejoin 속성값을 설정하지 않으면 "miter" 로 적용됩니다.

- strokejoin 속성은 연결점의 모양을 결정하며 경로의 시작점과 끝점 모양은 strokecap 속성으로 설정합니다.

---

## strokepen

GraphicsPaths 에 표시되는 경로의 색과 형식을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.set_strokepen(strStrokePen) // set
GraphicsPaths.strokepen // get
```

**Setting Syntax**
```javascript
"#"기호로 시작하는 6자리 hexadecimal 색상코드값으로 경로의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 경로의 색을 설정합니다. (ex-"rgb (255, 0, 255)")
```

**Remark**
- strokepen 속성값을 설정하지 않으면 GraphicsPaths 에 경로가 표시되지 않습니다.

- strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


◆ Nexacro Runtime Environment 제약

- Nexacro Runtime Environment는 <line-style> 에 "solid" 값만 설정할 수 있습니다.

---

## visible

GraphicsPaths 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.set_visible(bVisible) // set
GraphicsPaths.visible // get
```

**Setting Syntax**
```javascript
Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsPaths 를 표시하지 않습니다.
```

**Remark**
- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsPaths 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.

---

## x

부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.set_x(nX) // set
GraphicsPaths.x // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsPaths 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.

---

## y

부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsPaths.set_y(nY) // set
GraphicsPaths.y // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsPaths 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.

---
