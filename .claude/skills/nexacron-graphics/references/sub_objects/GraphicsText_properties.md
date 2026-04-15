# GraphicsText Properties

| Property | Description |
|----------|-------------|
| `color` | GraphicsText 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| `font` | GraphicsText 에서 사용하는 폰트를 설정하는 속성입니다. |
| `id` | GraphicsText 의 고유 식별자를 설정하는 속성입니다. |
| `opacity` | GraphicsText 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsText 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `text` | GraphicsText 에 표시될 텍스트를 설정하는 속성입니다. |
| `textAlign` | GraphicsText 의 x 속성값 위치를 기준으로 텍스트가 표시되는 가로위치를 설정하는 속성입니다. |
| `textwidth` | wordWrap 속성값이 "char" 일 때 GraphicsText 에 텍스트가 표시되는 영역의 너비를 설정하는 속성입니다. |
| `verticalAlign` | GraphicsText 의 y 속성값 위치를 기준으로 텍스트가 표시되는 세로위치를 설정하는 속성입니다. |
| `visible` | GraphicsText 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `wordWrap` | GraphicsText 에 표시되는 텍스트가 textwidth 속성값보다 길 경우 줄바꿈 되도록 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsText 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsText 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

---

## color

GraphicsText 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_color(strColor) // set
GraphicsText.color // get
```

**Setting Syntax**
```javascript
표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")
```

**Remark**
- color 속성값을 설정하지 않으면 undefined 가 설정되고 "#000000" 으로 동작합니다.


◆ web runtime environment 제약

- rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.

---

## font

GraphicsText 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_font(strfont) // set
GraphicsText.font // get
```

**Setting Syntax**
```javascript
폰트의 이름을 설정합니다.
```

**Remark**
- font 속성값을 설정하지 않으면 undefined 가 설정되고, "12pt/normal Verdana" 로 동작합니다.

- font 속성의 폰트 크기가 변경되면 <line-height> 에 적용된 값에 따라 줄간격이 변경될 수 있습니다.

- <font-weight> 를 수치로 설정 시 "400" 값이 일반적인 굵기로 적용되고, "700" 값이 "bold" 로 적용됩니다.
   폰트에 수치값에 해당하는 폰트굵기가 없다면 "400" 과 "700" 중 가까운 값으로 표시됩니다.

- UserFont 사용 시 환경별로 지원하는 포맷정보는 "Appendix > Supported UserFont" 항목을 참고하세요.


◆ WRE 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.

---

## id

GraphicsText 의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.id
```

**Setting Syntax**
```javascript
GraphicsText 를 구별할 수 있는 유일값을 설정합니다.
```

**Remark**
-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsText 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.

---

## opacity

GraphicsText 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_opacity(nOpacity) // set
GraphicsText.opacity // get
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

GraphicsText 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GraphicsText.parent
```

**Remark**
- 일반적으로 addChild() 메소드를 사용하여 GraphicsText 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsText 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.

---

## text

GraphicsText 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_text(strText) // set
GraphicsText.text // get
```

**Setting Syntax**
```javascript
GraphicsText 에 표시될 텍스트를 설정합니다.
```

---

## textAlign

GraphicsText 의 x 속성값 위치를 기준으로 텍스트가 표시되는 가로위치를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_textAlign(enumTextAlign) // set
GraphicsText.textAlign // get
```

**Setting Syntax**
```javascript
텍스트가 x 속성값 위치의 왼쪽에 표시됩니다.
```

**Remark**
- textAlign 속성값을 설정하지 않으면 "left" 로 적용됩니다.

- GraphicsText 의 x 속성값이 텍스트 표시의 x 축 기준위치로 처리됩니다.

---

## textwidth

wordWrap 속성값이 "char" 일 때 GraphicsText 에 텍스트가 표시되는 영역의 너비를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_textwidth(nTextWidth) // set
GraphicsText.textwidth // get
```

**Setting Syntax**
```javascript
텍스트가 표시되는 영역의 너비를 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- wordWrap 속성값이 "none" 이면 textwidth 속성값은 무시됩니다.

- wordWrap 속성값이 "char" 일 때 표시할 텍스트의 길이가 textwidth 속성값보다 크면 자동 줄바꿈 처리됩니다.

**See Also**: wordWrap

---

## verticalAlign

GraphicsText 의 y 속성값 위치를 기준으로 텍스트가 표시되는 세로위치를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_verticalAlign(enumVAlign) // set
GraphicsText.verticalAlign // get
```

**Setting Syntax**
```javascript
텍스트가 y 속성값 위치의 윗쪽에 표시됩니다.
```

**Remark**
- verticalAlign 속성값을 설정하지 않으면 "top" 으로 적용됩니다.

- GraphicsText 의 y 속성값이 텍스트 표시의 y 축 기준위치로 처리됩니다.

---

## visible

GraphicsText 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_visible(bVisible) // set
GraphicsText.visible // get
```

**Setting Syntax**
```javascript
Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsText 를 표시하지 않습니다.
```

**Remark**
- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsText 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.

---

## wordWrap

GraphicsText 에 표시되는 텍스트가 textwidth 속성값보다 길 경우 줄바꿈 되도록 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_wordWrap(enumWordwrap) // set
GraphicsText.wordWrap // get
```

**Setting Syntax**
```javascript
표시되는 텍스트가 textwidth 속성값보다 길면 글자 단위로 줄바꿈을 수행합니다.
```

**Remark**
- wordWrap 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

**See Also**: textwidth

---

## x

부모 오브젝트를 기준으로 GraphicsText 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_x( nX ) // set
GraphicsText.x // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsText 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- GraphicsText 의 x 속성은 left 를 의미하지 않습니다.
   textAlign, verticalAlign 속성값에 따라 x 속성값을 기준으로 텍스트가 표시될 위치가 결정됩니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsText 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.

**See Also**: textAlign, verticalAlign

---

## y

부모 오브젝트를 기준으로 GraphicsText 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GraphicsText.set_y(nY) // set
GraphicsText.y // get
```

**Setting Syntax**
```javascript
부모 오브젝트를 기준으로 GraphicsText 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- GraphicsText 의 y 속성은 top 을 의미하지 않습니다.
   textAlign, verticalAlign 속성값에 따라 y 속성값을 기준으로 텍스트가 표시될 위치가 결정됩니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsText 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.

**See Also**: textAlign, verticalAlign

---
