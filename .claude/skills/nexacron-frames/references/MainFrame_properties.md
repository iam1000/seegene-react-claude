# MainFrame Properties

| Property | Description |
|----------|-------------|
| `-nexa-border` | MainFrame 의 테두리를 설정하는 속성입니다. |
| `-nexa-edge` | MainFrame 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| `-nexa-rtl-background-image` | MainFrame 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| `-nexa-rtl-edge-image` | MainFrame 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| `all` | MainFrame 에 등록된 Frame 을 갖는 읽기전용 속성입니다. |
| `background` | MainFrame 의 배경 영역을 설정하는 속성입니다. |
| `border-radius` | MainFrame 의 모서리 모양을 설정하는 속성입니다. |
| `color` | MainFrame 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| `cssclass` | MainFrame 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| `cursor` | MainFrame 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| `enable` | MainFrame 의 사용가능 여부를 설정하는 속성입니다. |
| `enableevent` | MainFrame 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| `font` | MainFrame 에서 사용하는 폰트를 설정하는 속성입니다. |
| `frame` | MainFrame 에 등록된 Frame 을 갖는 읽기전용 속성입니다. |
| `height` | MainFrame 을 표시하기 위한 높이를 설정하는 속성입니다. |
| `hotkey` | MainFrame 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| `id` | MainFrame의 고유 식별자를 설정하는 속성입니다. |
| `layered` | MainFrame 의 윈도우를 투명으로 설정하는 속성입니다. |
| `left` | MainFrame 을 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| `letter-spacing` | MainFrame 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| `name` | MainFrame 의 이름을 설정하는 속성입니다. |
| `opacity` | MainFrame 영역의 투명도를 설정하는 속성입니다. |
| `openalign` | 어플리케이션이 실행될 때 전체화면에서 표시될 위치를 설정하는 속성입니다. |
| `openstatus` | MainFrame 의 창 크기를 설정하는 속성입니다. |
| `progressbardirection` | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다. |
| `progressbargap` | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다. |
| `progressbarsize` | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다. |
| `progressbarsmooth` | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다. |
| `resizable` | MainFrame 의 리사이즈 가능 여부를 설정하는 속성입니다. |
| `showcascadestatustext` | MainFrame 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| `showcascadetitletext` | MainFrame 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| `showstatusbar` | MainFrame 에 StatusBar 표시 여부를 설정하는 속성입니다. |
| `showtitlebar` | MainFrame 의 TitleBar 표시 여부를 설정하는 속성입니다. |
| `showtitleicon` | MainFrame 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다. |
| `statusbar` | MainFrame 의 상태바 오브젝트를 갖는 속성입니다. |
| `statusbarheight` | MainFrame 의 StatusBar 높이를 설정하는 속성입니다. |
| `statustext` | MainFrame 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다. |
| `titlebar` | MainFrame 의 타이틀바 오브젝트를 갖는 속성입니다. |
| `titlebarbuttongap` | MainFrame 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다. |
| `titlebarbuttonsize` | MainFrame 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다. |
| `titlebarheight` | MainFrame 의 TitleBar 높이를 설정하는 속성입니다. |
| `titletext` | MainFrame 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다. |
| `top` | MainFrame 을 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| `visible` | MainFrame 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| `width` | MainFrame 을 표시하기 위한 너비를 설정하는 속성입니다. |
| `word-spacing` | MainFrame 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

---

## -nexa-border

MainFrame 의 테두리를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_border(strborder) // set
MainFrame.border // get
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

## -nexa-edge

MainFrame 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_edge(stredge) // set
MainFrame.edge // get
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

- MainFrame 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.

---

## -nexa-rtl-background-image

MainFrame 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.-nexa-rtl-background-image
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

MainFrame 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.-nexa-rtl-edge-image
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

## all

MainFrame 에 등록된 Frame 을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
MainFrame.all
```

**Setting Syntax**
```javascript
var objApp = nexacro.getApplication();
var objFrames = objApp.mainframe.[Frame구조].all;
```

**Remark**
- all 속성은 Collection 접근방식을 사용할 수 있습니다.
  MainFrame.all[0], MainFrame.all["ChildFrame0"], MainFrame.all.length 등의 방법을 사용합니다.

---

## background

MainFrame 의 배경 영역을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_background( strBackground ) // set 
MainFrame.background // get
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

MainFrame 의 모서리 모양을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_borderRadius(strborderradius) // set
MainFrame.borderRadius // get
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

## color

MainFrame 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_color(strcolor) // set
MainFrame.color // get
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


◆ web runtime environment 제약

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.

---

## cssclass

MainFrame 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_cssclass(strcssclass) // set
MainFrame.cssclass // get
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

## cursor

MainFrame 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_cursor(strCursor) // set
MainFrame.cursor // get
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

MainFrame 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_enable(benable) // set
MainFrame.enable // get
```

**Setting Syntax**
```javascript
MainFrame 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.
```

**Remark**
- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.

---

## enableevent

MainFrame 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_enableevent(bEvent) // set
MainFrame.enableevent // get
```

**Setting Syntax**
```javascript
MainFrame 에서 이벤트가 발생하지 않도록 설정합니다.
```

**Remark**
- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.

---

## font

MainFrame 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_font(strfont) // set
MainFrame.font // get
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

## frame

MainFrame 에 등록된 Frame 을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
MainFrame.frame
```

**Setting Syntax**
```javascript
var objApp = nexacro.getApplication();
var objFrame = objApp.mainframe.frame.name;
```

---

## height

MainFrame 을 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_height(nheight) // set
MainFrame.height // get
```

**Setting Syntax**
```javascript
MainFrame 의 높이를 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- 높이값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

---

## hotkey

MainFrame 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_hotkey(strHotkey) // set
MainFrame.hotkey // get
```

**Setting Syntax**
```javascript
수식키(CTRL, ALT, SHIFT)와 일반키의 조합으로 설정합니다.
수식키는 중복으로 조합하여 설정할 수 있습니다.
각 키는 "+" 를 사용하여 조합을 설정합니다.
```

**Remark**
(1) 컴포넌트 기본 액션

hotkey 속성값 설정 시 컴포넌트의 기본 액션이 수행됩니다. 컴포넌트 기본 액션은 다음과 같습니다.
- onclick : Button, CheckBox
- 포커스 이동 (접근성 설정 시) : GroupBox, Static
- onsetfocus : 나머지 Frame 오브젝트 및 컴포넌트
* GroupBox, Static 컴포넌트는 접근성 설정 환경이 아닌 경우 hotkey 속성은 처리되지 않습니다.

(2) 예외 조건

(2-1) 같은 hotkey 속성값을 가진 컴포넌트가 있을 때
Form 내에 같은 hotkey 속성값을 가진 컴포넌트가 2개 이상 있는 경우 components 속성 인덱스 순서에 따라 먼저 생성된 컴포넌트의 hotkey 속성만 처리됩니다.

(2-2) 단축키가 설정된 입력장치를 사용할 때
단축키 설정 기능이 있는 입력장치를 사용하는 경우 입력장치에서 설정된 단축키와 같은 값을 hotkey 속성값으로 설정하면 hotkey 속성은 처리되지 않습니다.
예를 들어 "CTRL+M" 키 입력을 ENTER 키 입력으로 변환해 처리하는 키보드를 사용한다면 hotkey 속성값을 "CTRL+M"으로 설정하고 해당 키를 입력해도 기본 액션이 수행되지 않습니다.

(2-3) 상위 프레임 또는 Form이 활성화되지 않았을 때
hotkey 속성은 상위 프레임 또는 Form이 활성화된 경우에만 동작합니다. 

(2-4) enable 속성값이 false 일 때
컴포넌트의 enable 속성값이 false이면 hotkey 속성은 처리되지 않습니다.

(2-5) hotkeycolumn 속성값을 설정했을 때
Menu 컴포넌트의 hotkey 속성값과 hotkeycolumn 속성값을 같은 속성값으로 설정하면 hotkeycolumn 속성은 처리되지 않습니다.

---

## id

MainFrame의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.id
```

**Setting Syntax**
```javascript
MainFrame를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## layered

MainFrame 의 윈도우를 투명으로 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_layered(bLayered) // set
MainFrame.layered // get
```

**Setting Syntax**
```javascript
MainFrame 의 배경이 불투명 윈도우로 표시됩니다.
```

**Remark**
- layered 속성값을 설정하지 않으면 "false"로 적용됩니다.

- 동적으로 변경이 불가능 한 속성입니다.

---

## left

MainFrame 을 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_left(nleft) // set
MainFrame.left // get
```

**Setting Syntax**
```javascript
MainFrame 의 좌측 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- Windows NRE 와 macOS NRE 만 적용되는 속성입니다.

---

## letter-spacing

MainFrame 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_letterSpacing(strspace) // set
MainFrame.letterSpacing // get
```

**Setting Syntax**
```javascript
문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

"px" 단위문자를 생략할 수 있습니다.
```

**Remark**
- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "letterSpacing"을 사용해야 합니다.

---

## name

MainFrame 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_name(strName) // set
MainFrame.name // get
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

MainFrame 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_opacity(strOpacity) // set
MainFrame.opacity // get
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

## openalign

어플리케이션이 실행될 때 전체화면에서 표시될 위치를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_openalign(strAlign) // set
MainFrame.openalign // get
```

**Setting Syntax**
```javascript
어플리케이션이 표시될 세로 위치를 설정합니다.

"top" 설정 시 현재 스크린의 윗쪽에 정렬되어 표시됩니다.
"middle" 설정 시 현재 스크린의 중앙에 정렬되어 표시됩니다.
"bottom" 설정 시 현재 스크린의 아랫쪽에 정렬되어 표시됩니다.
```

**Remark**
- openalign 속성값을 설정하지 않으면 "left top"으로 적용됩니다.

- <hAlign> 값과 <vAlign> 값은 공백문자로 구분하여 설정합니다.

---

## openstatus

MainFrame 의 창 크기를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_openstatus(stropenstatus) // set
MainFrame.openstatus // get
```

**Setting Syntax**
```javascript
MainFrame 의 창 크기를 최대화 합니다.
```

---

## progressbardirection

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_progressbardirection(enumDirection) // set
MainFrame.progressbardirection // get
```

**Setting Syntax**
```javascript
ProgressBar 의 진행바가 오른쪽에서 왼쪽으로 증가합니다.
```

**Remark**
- direction 속성값을 설정하지 않으면 "forward"로 적용됩니다.

- 진행중인 통신 상태는 StatusBar 의 ProgressBar 를 통해 확인할 수 있습니다.

---

## progressbargap

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_progressbargap(nSize) // set
MainFrame.progressbargap // get
```

**Setting Syntax**
```javascript
ProgressBar 의 오른쪽 공간 크기를 pixel 단위로 설정합니다.
```

---

## progressbarsize

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_progressbarsize(nSize) // set
MainFrame.progressbarsize // get
```

**Setting Syntax**
```javascript
ProgressBar 의 너비를 pixel 단위로 설정합니다.
```

---

## progressbarsmooth

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_progressbarsmooth(bSmooth) // set
MainFrame.progressbarsmooth // get
```

**Setting Syntax**
```javascript
진행바가 블럭형태로 표시됩니다.
```

---

## resizable

MainFrame 의 리사이즈 가능 여부를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_resizable(bResizable) // set
MainFrame.resizable // get
```

**Setting Syntax**
```javascript
MainFrame 의 크기 변경이 불가능합니다.
```

**Remark**
- resizable 속성값을 설정하지 않으면 "true" 로 적용됩니다.

---

## showcascadestatustext

MainFrame 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_showcascadestatustext(bShow) // set
MainFrame.showcascadestatustext // get
```

**Setting Syntax**
```javascript
MainFrame 의 statustext 속성값만 표시합니다.
```

**Remark**
- MainFrame 의 showstatusbar 속성값이 "true" 일 경우만 적용됩니다.

- MainFrame 보다 상위 Frame 의 StatusBar 는 상위 Frame 의 showcascadestatustext 속성값에 따라 표시됩니다.

---

## showcascadetitletext

MainFrame 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_showcascadetitletext(bShow) // set
MainFrame.showcascadetitletext // get
```

**Setting Syntax**
```javascript
MainFrame 의 titletext 속성값만 표시합니다.
```

**Remark**
- MainFrame 의 showtitlebar 속성값이 "true" 일 경우만 적용됩니다.

- MainFrame 보다 상위 Frame 의 TtileBar 는 상위 Frame 의 showcascadetitletext 속성값에 따라 표시됩니다.

---

## showstatusbar

MainFrame 에 StatusBar 표시 여부를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_showstatusbar(bshowstatus) // set
MainFrame.showstatusbar // get
```

**Setting Syntax**
```javascript
MainFrame 에 StatusBar 를 표시하지 않습니다.
```

**Remark**
- showstatusbar 속성값을 설정하지 않으면 false 로 적용됩니다.

---

## showtitlebar

MainFrame 의 TitleBar 표시 여부를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_showtitlebar(bshowtitlebar) // set
MainFrame.showtitlebar // get
```

**Setting Syntax**
```javascript
MainFrame 에 TitleBar 를 표시하지 않습니다.
```

**Remark**
- TitleBar 에는 MainFrame을(를) 최소화, 최대화, 종료할 수 있는 버튼이 있습니다.

---

## showtitleicon

MainFrame 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_showtitleicon(bshowtitleicon) // set
MainFrame.showtitleicon // get
```

**Setting Syntax**
```javascript
MainFrame 의 타이틀바에 아이콘을 표시하지 않습니다.
```

**Remark**
- Theme 의 TitleBarControl > titleicon > -nexa-icon 속성에 설정된 아이콘 이미지를 아이콘으로 표시합니다.

---

## statusbar

MainFrame 의 상태바 오브젝트를 갖는 속성입니다.

**Syntax**
```javascript
MainFrame.statusbar
```

**Setting Syntax**
```javascript
var objApp = nexacro.getAppplication();
var objStatusBar = objApp.mainframe.statusbar;
```

**Remark**
- MainFrame 의 showstatusbar 속성값이 "true" 일 경우만 상태바 오브젝트가 생성됩니다.

---

## statusbarheight

MainFrame 의 StatusBar 높이를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_statusbarheight(nHeight) // set
MainFrame.statusbarheight // get
```

**Setting Syntax**
```javascript
StatusBar 의 높이를 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- showstatubar 속성값이 "true" 일 경우 적용되는 속성입니다.

미지정시 기본값 : default : undefinded
값이 undefinded 일 경우  메인프레임은 30으로, 메인프레임이 아닌 프레임들은 20으로 동작

---

## statustext

MainFrame 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_statustext(strStatustext) // set
MainFrame.statustext // get
```

**Setting Syntax**
```javascript
StatusBar 에 표시될 텍스트를 설정합니다.
```

**Remark**
- showcascadestatustext 속성값이 true 이면 하위 Frame 또는 Form 의 statustext 속성값을 MainFrame 의 StatusBar 에 함께 표시합니다.
   MainFrame 하위에 여러개의 Frame 이 있을 경우엔 현재 활성화 된 Frame 의 statustext 속성값이 표시됩니다.

 
◆ web runtime environment 제약
 
- Chrome, Firefox, Opera, Edge 브라우저는 보안상의 이유로 StatusBar 의 텍스트 변경을 지원하지 않습니다.

- IE 브라우저는 보안설정에 신뢰할 수 있는 사이트 등록이 되어있어야 StatusBar 의 텍스트를 변경할 수 있습니다.

- 현재 StatusBar 의 텍스트를 변경할 수 있는 브라우저도 향후 기능이 차단될 수 있습니다.

---

## titlebar

MainFrame 의 타이틀바 오브젝트를 갖는 속성입니다.

**Syntax**
```javascript
MainFrame.titlebar
```

**Setting Syntax**
```javascript
var objApp = nexacro.getApplication();
var objTitleBar = objApp.mainframe.titlebar
```

**Remark**
- MainFrame 의 showtitlebar 속성값이 "true" 일 경우만 타이틀바 오브젝트가 생성됩니다.

---

## titlebarbuttongap

MainFrame 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_titlebarbuttongap(nGap) // set
MainFrame.titlebarbuttongap // get
```

**Setting Syntax**
```javascript
TitleBar 에 표시되는 시스템 버튼(최소/최대/종료)의 간격을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.

---

## titlebarbuttonsize

MainFrame 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_titlebarbuttonsize(strSize) // set
MainFrame.titlebarbuttonsize // get
```

**Setting Syntax**
```javascript
타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.
```

**Remark**
- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.

---

## titlebarheight

MainFrame 의 TitleBar 높이를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_titlebarheight(nHeight) // set
MainFrame.titlebarheight // get
```

**Setting Syntax**
```javascript
MainFrame 의 TitleBar 높이를 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- titlebarheight 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 가 적용되면 MainFrame 은 "30px" 로  표시되고, 다른 Frame 은 "20px" 로 표시됩니다.

---

## titletext

MainFrame 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_titletext(strTitletext) // set
MainFrame.titletext // get
```

**Setting Syntax**
```javascript
TitleBar 에 표시될 텍스트를 설정합니다.
```

**Remark**
- showcascadetitletext  속성값이 "true"이면 하위 Frame 또는 Form 의 titletext 속성값을 MainFrame 의 TitleBar 에 함께 표시합니다.
  MainFrame 하위에 여러개의 Frame 이 있을 경우 현재 활성화 된 Frame 의 titletext 속성값이 표시됩니다.

---

## top

MainFrame 을 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_top(ntop) // set
MainFrame.top // get
```

**Setting Syntax**
```javascript
MainFrame 의 상단 좌표값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- 좌표값에 "px" 문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- Windows NRE 와 macOS NRE 만 적용되는 속성입니다.

---

## visible

MainFrame 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_visible(bVisible) // set
MainFrame.visible // get
```

**Setting Syntax**
```javascript
MainFrame 을(를) 화면에 표시하지 않습니다.
```

**Remark**
- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.

---

## width

MainFrame 을 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_width(nwidth) // set
MainFrame.width // get
```

**Setting Syntax**
```javascript
MainFrame 의 너비를 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- 너비값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

---

## word-spacing

MainFrame 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**
```javascript
MainFrame.set_wordSpacing(strWordSpacing) // set
MainFrame.wordSpacing // get
```

**Setting Syntax**
```javascript
pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.
```

**Remark**
- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.

◆ WRE 제약

- IE10, IE11 브라우저에서 word-spacing 속성값이 음수일 경우 모든 컴포넌트의 텍스트는 Word 가 겹쳐지지 않는 범위내에서 처리됩니다.

---
