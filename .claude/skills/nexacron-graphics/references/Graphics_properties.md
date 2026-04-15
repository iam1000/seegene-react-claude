# Graphics Properties

| Property | Description |
|----------|-------------|
| `-nexa-border` | Graphics 의 테두리를 설정하는 속성입니다. |
| `-nexa-rtl-background-image` | Graphics 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| `background` | Graphics 의 배경 영역을 설정하는 속성입니다. |
| `border-radius` | Graphics 의 모서리 모양을 설정하는 속성입니다. |
| `bottom` | Graphics 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| `box-shadow` | Graphics 에 그림자 효과를 설정하는 속성입니다. |
| `cssclass` | Graphics 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| `enable` | Graphics 의 사용가능 여부를 설정하는 속성입니다. |
| `enableevent` | Graphics 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| `flexgrow` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `flexshrink` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `height` | Graphics 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| `id` | Graphics의 고유 식별자를 설정하는 속성입니다. |
| `initvalueid` | Graphics 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| `layoutorder` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `left` | Graphics 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| `maxheight` | Graphics 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| `maxwidth` | Graphics 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| `minheight` | Graphics 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| `minwidth` | Graphics 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| `name` | Graphics 의 이름을 설정하는 속성입니다. |
| `opacity` | Graphics 영역의 투명도를 설정하는 속성입니다. |
| `parent` | Graphics 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `positionstep` | 부모 오브젝트가 화면분할기능을 사용할 때 Graphics 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| `right` | Graphics 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| `tablecellarea` | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| `taborder` | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Graphics 의 순서를 설정하는 속성입니다. |
| `tabstop` | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Graphics 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| `top` | Graphics 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| `visible` | Graphics 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| `width` | Graphics 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |

---

## -nexa-border

Graphics 의 테두리를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_border(strborder) // set
Graphics.border // get
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
- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.

- 스크립트로 접근 시 속성명은 "border"를 사용해야 합니다.


◆ Nexacro Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.

---

## -nexa-rtl-background-image

Graphics 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.-nexa-rtl-background-image
```

**Setting Syntax**
```javascript
웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
```

**Remark**
- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image 속성값을 설정하지 않으면 background 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   background 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.

---

## background

Graphics 의 배경 영역을 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_background( strBackground ) // set 
Graphics.background // get
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
- background 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.


◆ WRE 제약

- 브라우저 버전에 따라 투명 또는 불투명의 배경색만 지원되는 경우가 있습니다.
   배경색의 alpha 값이 0 인 경우는 투명, 0 보다 큰 경우는 불투명으로 적용됩니다.

- 브라우저(IE)에 따라 배경색이 투명(transparent)일 경우, 배경영역에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.

---

## border-radius

Graphics 의 모서리 모양을 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_borderRadius(strborderradius) // set
Graphics.borderRadius // get
```

**Setting Syntax**
```javascript
모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
```

**Remark**
- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- 스크립트로 접근 시 속성명은 "borderRadius" 를 사용해야 합니다.

- <horizontal-radius>와 <vertical-radius>는 "/" 문자로 구분하여 입력합니다.

- Calendar, Combo 와 같이 하위 컨트롤이 존재하는 컴포넌트는 하위컨트롤에도 border-radius 속성을 설정해야 정상적으로 모서리가 표시됩니다.


◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.

---

## bottom

Graphics 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_bottom(nBottom) // set
Graphics.bottom // get
```

**Setting Syntax**
```javascript
Graphics 의 하단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 bottom 속성값을 기준으로 Graphics 의 하단 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 Graphics 의 하단 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 top 속성값을 기준으로 Graphics 의 하단 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 Graphics 의 하단 위치가 결정됩니다.
```

**Remark**
- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.

---

## box-shadow

Graphics 에 그림자 효과를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_boxShadow(strbshadow) // set
Graphics.boxShadow // get
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
- box-shadow 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "boxShadow" 를 사용해야 합니다.

- <blur> 값을 크게 설정하면 시스템 자원 요구량이 많아져 성능 저하의 원인이 됩니다.

- <inset>, <spread> 값은 NRE를 지원하지 않습니다. 
  넥사크로 스튜디오 디자인 창에서도 속성값 설정 시 변경된 디자인을 확인할 수 없습니다.


◆ web runtime environment 제약

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.

---

## cssclass

Graphics 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_cssclass(strcssclass) // set
Graphics.cssclass // get
```

**Setting Syntax**
```javascript
XCSS 에 정의된 classname 을 설정합니다.
```

**Remark**
- XCSS 에 정의된 ".classname" 형식에서 "." 를 제외하고 "classname" 만 설정합니다.

- Style 에 적용되는 방식은 XCSS Attribute 지정과 동일하게 XCSS 내의 순서대로 적용됩니다.

- Status 를 적용하고자 할 경우는 "classname" 에 Status 를 붙여서 사용합니다.

- ',' 를 사용하여 class 를 다중으로 지정하게 되면 class 가 중첩되어 적용됩니다.
   중첩된 class 의 내용에 중복이 있다면 XCSS 내의 순서상 마지막으로 기술된 것이 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 cssclass 명의 첫문자가 숫자일 경우 속성값이 적용되지 않으므로 주의하여야 합니다.

---

## enable

Graphics 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_enable(benable) // set
Graphics.enable // get
```

**Setting Syntax**
```javascript
Graphics 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.
```

**Remark**
- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.

---

## enableevent

Graphics 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_enableevent(bEvent) // set
Graphics.enableevent // get
```

**Setting Syntax**
```javascript
Graphics 에서 이벤트가 발생하지 않도록 설정합니다.
```

**Remark**
- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.

---

## flexgrow

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_flexgrow(fVal) // set
Graphics.flexgrow // get
```

**Setting Syntax**
```javascript
컴포넌트의 크기를 재조정할 비율을 설정합니다.
```

**Remark**
- flexgrow 속성값을 설정하지 않으면 undefined로 설정되고 0 값으로 동작합니다.
  속성값이 0이면 크기를 재조정하지 않습니다.
    
- Layout 컨테이너 내 배치된 컴포넌트 중 flexgrow 속성값이 0보다 큰 값으로 설정된 컴포넌트를 대상으로 Main Axis의 여백을 설정한 비율만큼 나누어 크기에 적용합니다.

- maxwidth, maxheight 속성값을 설정한 경우에는 해당 크기보다 크게 크기가 조정되지는 않습니다.

---

## flexshrink

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_flexshrink(fVal) // set
Graphics.flexshrink // get
```

**Setting Syntax**
```javascript
컴포넌트의 크기를 재조정할 비율을 설정합니다.
```

**Remark**
- flexshrink 속성값을 설정하지 않으면 undefined로 설정되고 1 값으로 동작합니다.
  속성값이 0이면 크기를 재조정하지 않습니다.
    
- Layout 컨테이너 내 배치된 컴포넌트 중 flexshrink 속성값이 0보다 큰 값으로 설정된 컴포넌트를 대상으로 Main Axis의 초과 영역을 설정한 비율만큼 나누어 크기에 적용합니다.

- minwidth, minheight 속성값을 설정한 경우에는 해당 크기보다 작게 크기가 조정되지는 않습니다.

---

## height

Graphics 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_height(nHeight) // set
Graphics.height // get
```

**Setting Syntax**
```javascript
Graphics 의 높이를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 설정값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 Graphics 의 높이가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 값은 무시되고 설정값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 Graphics 의 높이가 결정됩니다.
```

**Remark**
- 높이값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 높이값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.

---

## id

Graphics의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.id
```

**Setting Syntax**
```javascript
Graphics를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## initvalueid

Graphics 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_initvalueid(strValueID) // set
Graphics.initvalueid // get
```

**Setting Syntax**
```javascript
InitValueDefinition 영역에 정의된 InitValue 파일에서 Graphics 에 적용할 항목의 ID 를 문자열로 설정합니다.
```

**Remark**
- Graphics 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   Graphics 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.

---

## layoutorder

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**
```javascript
Graphics.set_layoutorder(nVal) // set
Graphics.layoutorder // get
```

**Setting Syntax**
```javascript
컴포넌트의 배치 순서를 설정합니다.
```

**Remark**
- layoutorder 속성값을 설정하지 않으면 0으로 설정됩니다.

- 속성값이 음수인 경우에는 0으로 설정됩니다.

- 같은 값으로 2개 이상의 컴포넌트의 속성값을 설정할 수 있습니다. 
  속성값이 같은 경우에는 생성 순서(Z-Order)에 따라 배치 순서가 달라집니다.

---

## left

Graphics 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_left(nLeft) // set
Graphics.left // get
```

**Setting Syntax**
```javascript
Graphics 의 좌측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 left 속성값을 기준으로 Graphics 의 좌측 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 Graphics 의 좌측 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 right 속성값을 기준으로 Graphics 의 좌측 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 Graphics 의 좌측 위치가 결정됩니다.
```

**Remark**
- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.

---

## maxheight

Graphics 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_maxheight(nMaxHeight) // set
Graphics.maxheight // get
```

**Setting Syntax**
```javascript
Graphics 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- height 속성값이 maxheight 보다 크면 화면에 표시되는 Graphics 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Graphics 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.

---

## maxwidth

Graphics 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_maxwidth(nMaxWidth) // set
Graphics.maxwidth // get
```

**Setting Syntax**
```javascript
Graphics 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- width 속성값이 maxwidth 보다 크면 화면에 표시되는 Graphics 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Graphics 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.

---

## minheight

Graphics 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_minheight(nMinHeight) // set
Graphics.minheight // get
```

**Setting Syntax**
```javascript
Graphics 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- height 속성값이 minheight 보다 작다면 화면에 표시되는 Graphics 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Graphics 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.

---

## minwidth

Graphics 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_minwidth(nMinWidth) // set
Graphics.minwidth // get
```

**Setting Syntax**
```javascript
Graphics 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- width 속성값이 minwidth 보다 작으면 화면에 표시되는 Graphics 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Graphics 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.

---

## name

Graphics 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_name(strName) // set
Graphics.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## opacity

Graphics 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_opacity(strOpacity) // set
Graphics.opacity // get
```

**Setting Syntax**
```javascript
0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.
Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.
```

**Remark**
- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.

---

## parent

Graphics 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
Graphics.parent
```

**Setting Syntax**
```javascript
var objParent = this.Graphics00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Graphics 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## positionstep

부모 오브젝트가 화면분할기능을 사용할 때 Graphics 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_positionstep(nStep) // set
Graphics.positionstep // get
```

**Setting Syntax**
```javascript
Graphics 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 Graphics 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.
```

**Remark**
- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.

---

## right

Graphics 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_right(nRight) // set
Graphics.right // get
```

**Setting Syntax**
```javascript
Graphics 의 우측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 right 속성값을 기준으로 Graphics 의 우측 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 Graphics 의 우측 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 left 속성값을 기준으로 Graphics 의 우측 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 Graphics 의 우측 위치가 결정됩니다.
```

**Remark**
- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.

---

## tablecellarea

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**
```javascript
Graphics.set_tablecellarea(strArea) // set
Graphics.tablecellarea // get
```

**Setting Syntax**
```javascript
컴포넌트를 배치할 tabletemplatearea 속성에서 설정한 Cell 이름을 설정합니다.
```

**Remark**
- 유효하지 않은 값을 설정한 경우에는 layoutorder, tabledirection 속성값에 따라 배치됩니다.

- 같은 영역에 2개 이상의 컴포넌트를 배치할 수 있습니다.

- row와 column의 start, end는 반대 방향으로 설정할 수 있습니다.
  예를 들어 "2 0 / 2 0"과 "0 2 / 0 2"은 같은 영역으로 처리합니다.

---

## taborder

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Graphics 의 순서를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_taborder(nTabOrder) // set
Graphics.taborder // get
```

**Setting Syntax**
```javascript
0 이상의 정수로 설정합니다.
```

**Remark**
- taborder 속성값이 작은 컴포넌트에 포커스가 먼저 이동되고, 속성값이 클수록 나중에 포커스가 이동됩니다.

- taborder 속성값이 동일한 컴포넌트는 폼에 먼저 생성된 컴포넌트에 포커스가 먼저 이동됩니다.

- 스크립트로 taborder 속성값 변경 시 포커스 이동 순서가 변경됩니다.

- Div 와 같은 컨테이너 컴포넌트는 자식 컴포넌트 레벨에서 포커스 이동 순서가 별도로 정의됩니다.

---

## tabstop

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Graphics 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_tabstop(bTabStop) // set
Graphics.tabstop // get
```

**Setting Syntax**
```javascript
Graphics 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.
```

**Remark**
- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.

---

## top

Graphics 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_top(nTop) // set
Graphics.top // get
```

**Setting Syntax**
```javascript
Graphics 의 상단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 top 속성값을 기준으로 Graphics 의 상단 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 Graphics 의 상단 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 bottom 속성값을 기준으로 Graphics 의 상단 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 Graphics 의 상단 위치가 결정됩니다.
```

**Remark**
- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.

---

## visible

Graphics 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_visible(bVisible) // set
Graphics.visible // get
```

**Setting Syntax**
```javascript
Graphics 을(를) 화면에 표시하지 않습니다.
```

**Remark**
- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.

---

## width

Graphics 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**
```javascript
Graphics.set_width(nWidth) // set
Graphics.width // get
```

**Setting Syntax**
```javascript
Graphics 의 너비를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 설정값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 Graphics 의 너비가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 값은 무시되고 설정값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 Graphics 의 너비가 결정됩니다.
```

**Remark**
- 너비값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 너비값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.

---
