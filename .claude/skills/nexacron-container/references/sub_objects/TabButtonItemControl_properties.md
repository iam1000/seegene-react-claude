# TabButtonItemControl Properties

| Property | Description |
|----------|-------------|
| `-nexa-border` | TabButtonIconControl 의 테두리를 설정하는 속성입니다. |
| `-nexa-border` | TabButtonItemControl 의 테두리를 설정하는 속성입니다. |
| `-nexa-edge` | TabButtonIconControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| `-nexa-edge` | TabButtonItemControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| `-nexa-icon` | TabButtonIconControl에서 텍스트와 함께 표시 될 아이콘 이미지를 설정하는 속성입니다. |
| `-nexa-padding` | TabButtonIconControl 영역의 안쪽 여백을 설정하는 속성입니다. |
| `-nexa-padding` | TabButtonItemControl 에서 텍스트와 테두리 사이의 여백을 설정하는 속성입니다. |
| `-nexa-rtl-background-image` | TabButtonIconControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| `-nexa-rtl-background-image` | TabButtonItemControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| `-nexa-rtl-edge-image` | TabButtonIconControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속 |
| `-nexa-rtl-edge-image` | TabButtonItemControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속 |
| `-nexa-rtl-icon` | TabButtonIconControl 의 rtl 속성이 true 로 적용될 때 표시될 아이콘 이미지를 설정하는 속성입니다. |
| `-nexa-text-align` | TabButtonIconControl 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다. |
| `-nexa-vertical-align` | TabButtonIconControl 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다. |
| `background` | TabButtonIconControl 의 배경 영역을 설정하는 속성입니다. |
| `background` | TabButtonItemControl 의 배경 영역을 설정하는 속성입니다. |
| `border-radius` | TabButtonIconControl 의 모서리 모양을 설정하는 속성입니다. |
| `border-radius` | TabButtonItemControl 의 모서리 모양을 설정하는 속성입니다. |
| `bottom` | TabButtonIconControl 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| `color` | TabButtonItemControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| `cursor` | TabButtonIconControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| `cursor` | TabButtonItemControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| `enable` | TabButtonIconControl 의 사용가능 여부를 설정하는 속성입니다. |
| `enableevent` | TabButtonIconControl 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| `font` | TabButtonItemControl 에서 사용하는 폰트를 설정하는 속성입니다. |
| `height` | TabButtonIconControl 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| `left` | TabButtonIconControl 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| `letter-spacing` | TabButtonItemControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| `name` | TabButtonIconControl 의 이름을 설정하는 속성입니다. |
| `opacity` | TabButtonIconControl 영역의 투명도를 설정하는 속성입니다. |
| `opacity` | TabButtonItemControl 영역의 투명도를 설정하는 속성입니다. |
| `right` | TabButtonIconControl 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| `top` | TabButtonIconControl 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| `width` | TabButtonIconControl 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| `word-spacing` | TabButtonItemControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

---

## -nexa-border

TabButtonIconControl 의 테두리를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_border(strborder) // set
TabButtonIconControl.border // get
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

## -nexa-border

TabButtonItemControl 의 테두리를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.-nexa-border
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

- -nexa-border 속성값에 따라 TabButtonItemControl 의 전체 크기가 자동으로 확대/축소 됩니다.
   TabButtonItemControl 에 표시되는 버튼과 텍스트의 크기는 변경되지 않습니다.


◆ NRE 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ WRE 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.

---

## -nexa-edge

TabButtonIconControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_edge(stredge) // set
TabButtonIconControl.edge // get
```

**Setting Syntax**
```javascript
이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
```

**Remark**
- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "edge" 를 사용해야 합니다.

- TabButtonIconControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.

---

## -nexa-edge

TabButtonItemControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.-nexa-edge
```

**Setting Syntax**
```javascript
이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
```

**Remark**
- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- TabButtonItemControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- <fixedwidth>,<fixedheight> 값이 이미지사이즈의 1/2을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.

---

## -nexa-icon

TabButtonIconControl에서 텍스트와 함께 표시 될 아이콘 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_icon(strurl) // set
TabButtonIconControl.icon // get
```

**Setting Syntax**
```javascript
웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
```

**Remark**
- -nexa-icon 속성값을 설정하지 않으면 undefined 가 설정됩니다.

- 스크립트로 접근 시 속성명은 "icon" 을 사용해야 합니다.

- 아이콘 이미지가 표시되는 위치는 -nexa-icon-position 속성에서 설정합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.

---

## -nexa-padding

TabButtonIconControl 영역의 안쪽 여백을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_padding(strpadding) // set
TabButtonIconControl.padding // get
```

**Setting Syntax**
```javascript
TabButtonIconControl 영역의 안쪽 여백을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.
```

**Remark**
- -nexa-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "padding" 을 사용해야 합니다.

- -nexa-padding 속성은 내부 컨텐츠영역과 TabButtonIconControl 사이의 여백으로 적용됩니다.

- Div 와 같이 자식을 가질 수 있는 컴포넌트에서 -nexa-padding 속성은 자식 컴포넌트의 위치에 영향을 주지 않습니다.

---

## -nexa-padding

TabButtonItemControl 에서 텍스트와 테두리 사이의 여백을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.-nexa-padding
```

**Setting Syntax**
```javascript
TabButtonItemControl 에서 텍스트와 테두리 사이의 여백을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.
```

**Remark**
- -nexa-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- -nexa-padding 속성은 TabButtonItemControl 에 표시되는 버튼과 텍스트의 바깥영역에 적용됩니다.

- -nexa-padding 속성값에 따라 TabButtonItemControl 의 전체 크기가 자동으로 확대/축소 됩니다.
   TabButtonItemControl 에 표시되는 버튼과 텍스트의 크기는 변경되지 않습니다.

---

## -nexa-rtl-background-image

TabButtonIconControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.-nexa-rtl-background-image
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

## -nexa-rtl-background-image

TabButtonItemControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.-nexa-rtl-background-image
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

TabButtonIconControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.-nexa-rtl-edge-image
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

## -nexa-rtl-edge-image

TabButtonItemControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.-nexa-rtl-edge-image
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

TabButtonIconControl 의 rtl 속성이 true 로 적용될 때 표시될 아이콘 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.-nexa-rtl-icon
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

TabButtonIconControl 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_textAlign(strtextalign) // set
TabButtonIconControl.textAlign // get
```

**Setting Syntax**
```javascript
텍스트 또는 컨텐츠를 오른쪽으로 정렬합니다.
```

**Remark**
- -nexa-text-align 속성값을 설정하지 않으면 undefined 가 설정되고, XCSS 에 정의된 값으로 동작됩니다.
   XCSS 에도 정의된 값이 없을 경우 하단의 기준으로 컴포넌트에 따라 동작됩니다.
   > FileDownload, Button, IconControl, IconTextControl 은 "center" 로 동작됩니다.
   > MaskEdit 는 type 속성값이 "number" 이면 "right" 로 동작되고, "string" 이면 "left" 로 동작됩니다.
   > Grid 는 displaytype 속성값에 따라 동작되는 값이 다릅니다.
   > 나머지 컴포넌트는 "left" 로 동작됩니다.

- 스크립트로 접근 시 속성명은 "textAlign"을 사용해야 합니다.

- TabButtonIconControl 의 너비보다 표시되는 텍스트의 길이가 크면 "right" 를 설정해도 "left" 로 동작됩니다.


◆ web runtime environment 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.

---

## -nexa-vertical-align

TabButtonIconControl 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_verticalAlign(strvertalign) // set
TabButtonIconControl.verticalAlign // get
```

**Setting Syntax**
```javascript
텍스트 또는 컨텐츠를 아래쪽으로 정렬합니다.
```

**Remark**
- -nexa-vertical-align 속성값을 설정하지 않으면 undefined 가 설정되고, "middle" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "verticalAlign"을 사용해야 합니다.

---

## background

TabButtonIconControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_background( strBackground ) // set 
TabButtonIconControl.background // get
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

## background

TabButtonItemControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.background
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

TabButtonIconControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_borderRadius(strborderradius) // set
TabButtonIconControl.borderRadius // get
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

## border-radius

TabButtonItemControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.border-radius
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

## bottom

TabButtonIconControl 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_bottom(nBottom) // set
TabButtonIconControl.bottom // get
```

**Setting Syntax**
```javascript
TabButtonIconControl 의 하단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 bottom 속성값을 기준으로 TabButtonIconControl 의 하단 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 TabButtonIconControl 의 하단 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 top 속성값을 기준으로 TabButtonIconControl 의 하단 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 TabButtonIconControl 의 하단 위치가 결정됩니다.
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

## color

TabButtonItemControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.color
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

TabButtonIconControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_cursor(strCursor) // set
TabButtonIconControl.cursor // get
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

## cursor

TabButtonItemControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.cursor // get
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

## enable

TabButtonIconControl 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_enable(benable) // set
TabButtonIconControl.enable // get
```

**Setting Syntax**
```javascript
TabButtonIconControl 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.
```

**Remark**
- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.

---

## enableevent

TabButtonIconControl 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_enableevent(bEvent) // set
TabButtonIconControl.enableevent // get
```

**Setting Syntax**
```javascript
TabButtonIconControl 에서 이벤트가 발생하지 않도록 설정합니다.
```

**Remark**
- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.

---

## font

TabButtonItemControl 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.font
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

## height

TabButtonIconControl 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_height(nHeight) // set
TabButtonIconControl.height // get
```

**Setting Syntax**
```javascript
TabButtonIconControl 의 높이를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 설정값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 TabButtonIconControl 의 높이가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 값은 무시되고 설정값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 TabButtonIconControl 의 높이가 결정됩니다.
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

## left

TabButtonIconControl 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_left(nLeft) // set
TabButtonIconControl.left // get
```

**Setting Syntax**
```javascript
TabButtonIconControl 의 좌측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 left 속성값을 기준으로 TabButtonIconControl 의 좌측 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 TabButtonIconControl 의 좌측 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 right 속성값을 기준으로 TabButtonIconControl 의 좌측 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 TabButtonIconControl 의 좌측 위치가 결정됩니다.
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

## letter-spacing

TabButtonItemControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.letter-spacing
```

**Setting Syntax**
```javascript
문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

"px" 단위문자를 생략할 수 있습니다.
```

**Remark**
- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

---

## name

TabButtonIconControl 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_name(strName) // set
TabButtonIconControl.name // get
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

TabButtonIconControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_opacity(strOpacity) // set
TabButtonIconControl.opacity // get
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

## opacity

TabButtonItemControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.opacity
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

## right

TabButtonIconControl 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_right(nRight) // set
TabButtonIconControl.right // get
```

**Setting Syntax**
```javascript
TabButtonIconControl 의 우측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 right 속성값을 기준으로 TabButtonIconControl 의 우측 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 TabButtonIconControl 의 우측 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 left 속성값을 기준으로 TabButtonIconControl 의 우측 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 TabButtonIconControl 의 우측 위치가 결정됩니다.
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

## top

TabButtonIconControl 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_top(nTop) // set
TabButtonIconControl.top // get
```

**Setting Syntax**
```javascript
TabButtonIconControl 의 상단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 top 속성값을 기준으로 TabButtonIconControl 의 상단 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 TabButtonIconControl 의 상단 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 bottom 속성값을 기준으로 TabButtonIconControl 의 상단 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 TabButtonIconControl 의 상단 위치가 결정됩니다.
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

## width

TabButtonIconControl 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonIconControl.set_width(nWidth) // set
TabButtonIconControl.width // get
```

**Setting Syntax**
```javascript
TabButtonIconControl 의 너비를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 설정값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 TabButtonIconControl 의 너비가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 값은 무시되고 설정값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 TabButtonIconControl 의 너비가 결정됩니다.
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

## word-spacing

TabButtonItemControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**
```javascript
TabButtonItemControl.word-spacing
```

**Setting Syntax**
```javascript
pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.
```

**Remark**
- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

---
