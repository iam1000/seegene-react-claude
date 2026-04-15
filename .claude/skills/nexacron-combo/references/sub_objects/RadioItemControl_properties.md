# RadioItemControl Properties

| Property | Description |
|----------|-------------|
| `-nexa-border` | RadioItemControl 의 테두리를 설정하는 속성입니다. |
| `-nexa-edge` | RadioItemControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| `-nexa-icon` | RadioItemControl에서 텍스트와 함께 표시 될 아이콘 이미지를 설정하는 속성입니다. |
| `-nexa-icon-position` | RadioItemControl에서 텍스트와 함께 표시 될 아이콘 이미지의 위치를 설정하는 속성입니다. |
| `-nexa-padding` | RadioItemControl 영역의 안쪽 여백을 설정하는 속성입니다. |
| `-nexa-rtl-background-image` | RadioItemControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| `-nexa-rtl-edge-image` | RadioItemControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다 |
| `-nexa-rtl-icon` | RadioItemControl 의 rtl 속성이 true 로 적용될 때 표시될 아이콘 이미지를 설정하는 속성입니다. |
| `-nexa-text-align` | RadioItemControl 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다. |
| `-nexa-text-decoration` | RadioItemControl 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다. |
| `-nexa-text-padding` | RadioItemControl 에 표시되는 아이콘과 텍스트의 간격을 설정하는 속성입니다. |
| `-nexa-vertical-align` | RadioItemControl 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다. |
| `background` | RadioItemControl 의 배경 영역을 설정하는 속성입니다. |
| `border-radius` | RadioItemControl 의 모서리 모양을 설정하는 속성입니다. |
| `color` | RadioItemControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| `cursor` | RadioItemControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| `font` | RadioItemControl 에서 사용하는 폰트를 설정하는 속성입니다. |
| `letter-spacing` | RadioItemControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| `opacity` | RadioItemControl 영역의 투명도를 설정하는 속성입니다. |
| `word-spacing` | RadioItemControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

---

## -nexa-border

RadioItemControl 의 테두리를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-border
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


◆ Nexacro Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.

---

## -nexa-edge

RadioItemControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-edge
```

**Setting Syntax**
```javascript
이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
```

**Remark**
- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- RadioItemControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- <fixedwidth>,<fixedheight> 값이 이미지사이즈의 1/2을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.

---

## -nexa-icon

RadioItemControl에서 텍스트와 함께 표시 될 아이콘 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-icon
```

**Setting Syntax**
```javascript
웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
```

**Remark**
- -nexa-icon 속성값을 설정하지 않으면 undefined 가 설정됩니다.

- 아이콘 이미지가 표시되는 위치는 -nexa-icon-position 속성에서 설정합니다.

---

## -nexa-icon-position

RadioItemControl에서 텍스트와 함께 표시 될 아이콘 이미지의 위치를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-icon-position
```

**Setting Syntax**
```javascript
아이콘을 텍스트 아래쪽에 표시합니다.
```

**Remark**
- -nexa-icon-position 속성값을 설정하지 않으면 undefined 가 설정되고, "left" 로 동작합니다.

- 아이콘과 텍스트가 겹쳐지도록 설정할 수 없습니다.

---

## -nexa-padding

RadioItemControl 영역의 안쪽 여백을 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-padding
```

**Setting Syntax**
```javascript
RadioItemControl 영역의 안쪽 여백을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.
```

**Remark**
- -nexa-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- -nexa-padding 속성은 컴포넌트에 표시되는 아이콘과 텍스트의 영역에 적용됩니다.

- RadioItemControl 의 너비보다 표시되는 컨텐츠의 너비가 길면 "right" 방향의 padding 값이 무시됩니다.

- Div 와 같이 자식을 갖을 수 있는 컴포넌트에서 -nexa-padding 속성은 자식 컴포넌트의 위치에 영향을 주지 않습니다.

---

## -nexa-rtl-background-image

RadioItemControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-rtl-background-image
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

## -nexa-rtl-edge-image

RadioItemControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-rtl-edge-image
```

**Setting Syntax**
```javascript
웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
```

**Remark**
- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-edge-image 속성값을 설정하지 않으면 -nexa-edge 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 또는 -nexa-rtl-background-image 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-rtl-edge-image 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.

---

## -nexa-rtl-icon

RadioItemControl 의 rtl 속성이 true 로 적용될 때 표시될 아이콘 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-rtl-icon
```

**Setting Syntax**
```javascript
웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
```

**Remark**
- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-icon 속성값을 설정하지 않으면 -nexa-icon 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 아이콘 이미지가 표시되는 위치는 -nexa-icon-position 속성으로 설정합니다.

---

## -nexa-text-align

RadioItemControl 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-text-align
```

**Setting Syntax**
```javascript
텍스트 또는 컨텐츠를 오른쪽으로 정렬합니다.
```

**Remark**
- -nexa-text-align 속성값을 설정하지 않으면 undefined 가 설정되고, 동작되는 기본값이 컴포넌트에 따라 다릅니다.
   > FileDownload, Button, IconControl, IconTextControl 은 "center" 로 동작됩니다.
   > MaskEdit 는 type 속성값이 "number" 이면 "right" 로 동작되고, "string" 이면 "left" 로 동작됩니다.
   > Grid 는 displaytype 속성값에 따라 동작되는 값이 다릅니다.
   > 나머지 컴포넌트는 "left" 로 동작됩니다.

- RadioItemControl 의 너비보다 표시되는 텍스트의 길이가 크면 "right" 를 설정해도 "left" 로 동작됩니다.


◆ web runtime environment 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.

---

## -nexa-text-decoration

RadioItemControl 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-text-decoration
```

**Setting Syntax**
```javascript
텍스트에 적용할 효과를 설정합니다.

"underline" 설정 시 텍스트에 밑줄 효과가 적용됩니다.
"overline" 설정 시 텍스트에 윗줄 효과가 적용됩니다.
"line-through" 설정 시 텍스트에 취소선 효과가 적용됩니다.
```

**Remark**
- -nexa-text-decoration 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 각 효과는 공백(" ")을 구분자로 사용하여 여러번 설정할 수 있습니다.


◆ web runtime environment 제약

- 일부 웹브라우저는 속성값에 "none" 이 포함될 경우 텍스트에 효과가 적용되지 않습니다.

---

## -nexa-text-padding

RadioItemControl 에 표시되는 아이콘과 텍스트의 간격을 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-text-padding //get
```

**Setting Syntax**
```javascript
아이콘과 텍스트 영역의 간격을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.
```

**Remark**
- -nexa-text-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- RadioItemControl 에 표시되는 아이콘이 없을 경우 -nexa-text-padding 속성값은 무시됩니다.

- 일반적으로 아이콘과 텍스트에 간격을 주고자 할 때 사용하는 속성으로 아이콘의 위치에 맞게 속성값을 설정합니다.

---

## -nexa-vertical-align

RadioItemControl 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.-nexa-vertical-align
```

**Setting Syntax**
```javascript
텍스트 또는 컨텐츠를 아래쪽으로 정렬합니다.
```

**Remark**
- -nexa-vertical-align 속성값을 설정하지 않으면 undefined 가 설정되고, "middle" 로 동작합니다.

---

## background

RadioItemControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.background
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


◆ Web Runtime Environment 제약

- 브라우저 버전에 따라 투명 또는 불투명의 배경색만 지원되는 경우가 있습니다.
   배경색의 alpha 값이 0 인 경우는 투명, 0 보다 큰 경우는 불투명으로 적용됩니다.

- 브라우저(IE)에 따라 배경색이 투명(transparent)일 경우, 배경영역에서 마우스 관련 이벤트가 발생하지 않을 수 있습니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.

---

## border-radius

RadioItemControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.border-radius
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

- <horizontal-radius> 와 <vertical-radius> 는 "/" 문자로 구분하여 입력합니다.

◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.

---

## color

RadioItemControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.color
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
- color 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 으로 동작합니다.

---

## cursor

RadioItemControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.cursor // get
```

**Setting Syntax**
```javascript
역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
```

**Remark**
- cursor 속성값을 설정하지 않으면 undefined 가 설정되고 "auto" 로 동작합니다.

- disable 상태인 서브컨트롤이 있는 컴포넌트의 경우 마우스 포인터는 서브컨트롤 영역에서
   서브컨트롤의 disable status값이 적용되지 않고, 컴포넌트의 enable status 설정값이 적용됩니다.
   서브컨트롤과 컴포넌트가 모두 disable 상태일 때는 parent 의 enable status 설정값이 적용됩니다.

---

## font

RadioItemControl 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.font
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


◆ Web Runtime Environment 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.

---

## letter-spacing

RadioItemControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.letter-spacing
```

**Setting Syntax**
```javascript
문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

"px" 단위문자를 생략할 수 있습니다.
```

**Remark**
- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

---

## opacity

RadioItemControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.opacity
```

**Setting Syntax**
```javascript
0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.
```

**Remark**
- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.

---

## word-spacing

RadioItemControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**
```javascript
RadioItemControl.word-spacing
```

**Setting Syntax**
```javascript
pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.
```

**Remark**
- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

---
