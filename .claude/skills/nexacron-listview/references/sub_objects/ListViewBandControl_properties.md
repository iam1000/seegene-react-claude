# ListViewBandControl Properties

| Property | Description |
|----------|-------------|
| `-nexa-border` | ListViewBandControl 의 테두리를 설정하는 속성입니다. |
| `-nexa-edge` | ListViewBandControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| `-nexa-rtl-background-image` | ListViewBandControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| `-nexa-rtl-edge-image` | ListViewBandControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성 |
| `accessibilityaction` | ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상 |
| `accessibilitydesclevel` | ListViewBandControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| `accessibilitydescription` | ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상 |
| `accessibilityenable` | ListViewBandControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| `accessibilitylabel` | ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상 |
| `accessibilityrole` | ListViewBandControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| `background` | ListViewBandControl 의 배경 영역을 설정하는 속성입니다. |
| `border-radius` | ListViewBandControl 의 모서리 모양을 설정하는 속성입니다. |
| `color` | ListViewBandControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| `cssclass` | ListViewBandControl 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| `cursor` | ListViewBandControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| `expandbarsize` | ListViewBandControl 의 오른쪽 끝에 표시되는 확장바(ExpandBar)의 크기를 설정하는 속성입니다. |
| `expandbartype` | ListViewBandControl 의 오른쪽 끝에 확장바(ExpandBar)의 표시 여부를 설정하는 속성입니다. |
| `font` | ListViewBandControl 에서 사용하는 폰트를 설정하는 속성입니다. |
| `height` | ListViewBandControl 의 높이를 설정하는 속성입니다. |
| `letter-spacing` | ListViewBandControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| `name` | ListViewBandControl 의 이름을 설정하는 속성입니다. |
| `opacity` | ListViewBandControl 영역의 투명도를 설정하는 속성입니다. |
| `tooltiptext` | ListViewBandControl 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| `tooltiptype` | ListViewBandControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| `width` | ListViewBandControl 의 너비를 설정하는 속성입니다. |
| `word-spacing` | ListViewBandControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

---

## -nexa-border

ListViewBandControl 의 테두리를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_border(strborder) // set
ListViewBandControl.border // get
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

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.

---

## -nexa-edge

ListViewBandControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_edge(stredge) // set
ListViewBandControl.edge // get
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

- ListViewBandControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.

---

## -nexa-rtl-background-image

ListViewBandControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.-nexa-rtl-background-image
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

ListViewBandControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.-nexa-rtl-edge-image
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

## accessibilityaction

ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_accessibilityaction(strAction) // set
ListViewBandControl.accessibilityaction // get
```

**Setting Syntax**
```javascript
accessibilitydescreadtype 속성값에 "action"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
```

**Remark**
- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 컴포넌트에 선택상자 이동 시 사용자가 추가적인 정보를 얻기 위해 필요한 동작을 안내하는 용도로 사용합니다. 
  예를 들어 컴포넌트 특성에 따라 다음과 같이 속성값을 설정할 수 있습니다.
  
  - CheckBox 컴포넌트의 경우 아래와 같은 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "선택 상태를 전환하려면 스페이스 바를 누릅니다."
  
  - WebBrowser, WebView 컴포넌트의 경우 스크린 리더 사용자를 위한 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "웹 브라우저 컴포넌트 내 콘텐츠를 이용하기 위해서는 가상커서를 해제해 주세요."
  그리고 WebBrowser, WebView 컴포넌트를 벗어났을 때 필요한 안내문을 accessibilityleavemessage 속성값으로 설정합니다.
  "가상커서를 설정해 주세요"

---

## accessibilitydesclevel

ListViewBandControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_accessibilitydesclevel(enumLevel) // set
ListViewBandControl.accessibilitydesclevel // get
```

**Setting Syntax**
```javascript
ListViewBandControl 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.
```

**Remark**
- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 ListViewBandControl 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.

---

## accessibilitydescription

ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_accessibilitydescription(strDescription) // set
ListViewBandControl.accessibilitydescription // get
```

**Setting Syntax**
```javascript
accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
```

**Remark**
- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

---

## accessibilityenable

ListViewBandControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_accessibilityenable(bEnable) // set
ListViewBandControl.accessibilityenable // get
```

**Setting Syntax**
```javascript
ListViewBandControl 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 ListViewBandControl 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 ListViewBandControl 에 이동되지 않습니다.
```

**Remark**
- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : ListViewBandControl 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 ListViewBandControl 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 ListViewBandControl 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ Mobile 제약

- 모바일 환경에서는 Div 와 같은 컨테이너 컴포넌트 자체에 선택상자가 이동하지 않습니다.

---

## accessibilitylabel

ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_accessibilitylabel(strLabel) // set
ListViewBandControl.accessibilitylabel // get
```

**Setting Syntax**
```javascript
accessibilitydescreadtype 속성값에 "label"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
문자열로 설정하거나 부모가 같은 컴포넌트의 accessibilitylabel 속성값을 참조할 수 있습니다.
다른 컴포넌트 참조 시에는 "[@ComponentID]" 형식으로 컴포넌트의 id를 대괄호와 "@" 문자를 사용하여 설정합니다.
참조하는 참조값에 해당하는 컴포넌트를 찾을 수 없는 경우에는 참조값 자체가 문자열로 처리됩니다.
```

**Remark**
- enableaccessibility 속성값이 true인 경우만 적용되는 속성입니다.

- accessibilitydescreadtype 속성값에 "label"이 포함되었으나 accessibilitylabel 속성값을 설정하지 않으면 스크린 리더의 음성 출력 대상에 포함하지 않습니다.
accessibilitylabel 속성값을 설정하지 않더라도 컴포넌트의 name, value, text 속성값을 설정한 경우 해당 속성값이 스크린 리더의 음성 출력 대상으로 포함할 label 정보로 적용됩니다.

---

## accessibilityrole

ListViewBandControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_accessibilityrole(enumRole) // set
ListViewBandControl.accessibilityrole // get
```

**Setting Syntax**
```javascript
- "none": 스크린 리더에서 Role 정보를 처리하지 않습니다.

- 속성값을 설정하지 않으면 컴포넌트/오브젝트에 따라 기본 accessibilityrole 값이 적용됩니다.
"application": Application, MainFrame
"button": Button, FileDownload
"calendar": Calendar
"checkbox": CheckBox
"combobox": ComboBox
"edit": Edit, MaskEdit
"frame": FrameSet, ChildFrame
"fileupload": FileUpload
"form": Form, Div, PopupDiv
"groupbox": GroupBox
"image": ImageViewer, Sketch
"listbox": ListBox
"menubar": Menu
"menu": PopupMenu
"progressbar": ProgressBar
"radio": Radio
"spin": Spin
"static": Static
"tab": Tab
"tabpage": TabPage
"textarea": TextArea
"webbrowser": WebBrower

- Grid 컴포넌트의 경우 하위 오브젝트까지 Role을 적용합니다.
"grid": Grid
"gridcell": Grid Cell
"columnheader": Grid Column Head
"rowheader": Grid Row Head
"treegrid": TreeGrid
"treeitem": TreeItem, TreeCell

- 기능에 따라 컴포넌트 또는 오브젝트의 하위 오브젝트 영역에 아래와 같은 Role이 적용됩니다.
"alert": Alert, Confirm, UserConfirm
"chart": Chart
"datepicker": DatePicker
"link": Link
"scrollbar": ScrollBar
"statusbar": StatusBar
"titlebar": TitleBar
"toolbar": ToolBar
"tooltip": Tooltip

- "heading"은 특정 컨테이너 컴포넌트에 설정 시 accessibilityheadingnexthotkey, accessibilityheadingprevhotkey 속성값의 단축키로 이동 시 사용할 수 있습니다.
```

**Remark**
- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilityenable 속성값을 설정하지 않으면 ListViewBandControl의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 ListViewBandControl에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.

---

## background

ListViewBandControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_background( strBackground ) // set 
ListViewBandControl.background // get
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

ListViewBandControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_borderRadius(strborderradius) // set
ListViewBandControl.borderRadius // get
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

ListViewBandControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_color(strcolor) // set
ListViewBandControl.color // get
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

ListViewBandControl 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_cssclass(strcssclass) // set
ListViewBandControl.cssclass // get
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

ListViewBandControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_cursor(strCursor) // set
ListViewBandControl.cursor // get
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

## expandbarsize

ListViewBandControl 의 오른쪽 끝에 표시되는 확장바(ExpandBar)의 크기를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_expandbarsize(strSize) // set
ListViewBandControl.expandbarsize // get
```

**Setting Syntax**
```javascript
확장바(ExpandBar)의 높이를 픽셀 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.
```

**Remark**
- expandbarsize 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 설정 시 너비와 높이는 모두 "17" 로 적용됩니다.

- <strWidth> 값이 ListView 의 width 속성값보다 클 경우 ListView 너비에 맞게 확장바가 표시됩니다.

- <strHeight> 값과 <strWidth> 값은 공백문자로 구분하여 문자열로 설정합니다.

- 확장바는 Cell 의 오른쪽에 표시되는 확장버튼과 다른 컨트롤입니다.

- 확장바는 Body 밴드에세만 지원하는 기능입니다.

---

## expandbartype

ListViewBandControl 의 오른쪽 끝에 확장바(ExpandBar)의 표시 여부를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_expandbartype(bBar) // set
ListViewBandControl.expandbartype // get
```

**Setting Syntax**
```javascript
확장바(ExpandBar)를 ListViewBandControl 에 표시하지 않습니다.
```

**Remark**
- expandbartype 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- 확장바는 Cell 의 오른쪽에 표시되는 확장버튼과 다른 컨트롤입니다.

- 확장바는 Body 밴드에서만 지원하는 기능입니다.

---

## font

ListViewBandControl 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_font(strfont) // set
ListViewBandControl.font // get
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

## height

ListViewBandControl 의 높이를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_height(nHeight) // set
ListViewBandControl.height // get
```

**Setting Syntax**
```javascript
ListViewBandControl 의 높이를 픽셀 또는 비율("%") 단위의 숫자로 설정합니다.

픽셀 단위로 설정 시 설정한 값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 ListView 의 height 속성값을 기준으로 ListViewBandControl 의 높이가 결정됩니다.
```

---

## letter-spacing

ListViewBandControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_letterSpacing(strspace) // set
ListViewBandControl.letterSpacing // get
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

ListViewBandControl 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.name
```

**Setting Syntax**
```javascript
Control 의 이름을 설정합니다.
```

**Remark**
- 컴포넌트 내부에 정의된 Control 은 name 을 설정할 수 없습니다.

---

## opacity

ListViewBandControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_opacity(strOpacity) // set
ListViewBandControl.opacity // get
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

## tooltiptext

ListViewBandControl 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_tooltiptext(strToolTipText) // set
ListViewBandControl.tooltiptext // get
```

**Setting Syntax**
```javascript
풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 ListView 컴포넌트의 풍선도움말이 표시됩니다.
```

**Remark**
- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- tooltiptext 속성이 undefined 로 적용되면 상위 영역(ListView)의 tooltiptext 속성값이 적용됩니다.
   상위 영역의 tooltiptext 속성값이 undefined 일 경우는 다시 상위 영역의 tooltiptext 속성값이 적용됩니다. 

- 마우스 포인터가 ListViewBandControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.

---

## tooltiptype

ListViewBandControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_tooltiptype(enumTooltipType) // set
ListViewBandControl.tooltiptype // get
```

**Setting Syntax**
```javascript
ListViewBandControl 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.
```

**Remark**
- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 ListViewBandControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 ListViewBandControl 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 ListViewBandControl 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.

---

## width

ListViewBandControl 의 너비를 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_width(nWidth) // set
ListViewBandControl.width // get
```

**Setting Syntax**
```javascript
ListViewBandControl 의 너비를 픽셀 또는 비율("%") 단위의 숫자로 설정합니다.

픽셀 단위로 설정 시 설정한 값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 ListView 의 width 속성값을 기준으로 ListViewBandControl 의 너비가 결정됩니다.
```

**Remark**
- width 속성값을 ListView 컴포넌트 너비의 50% 이하로 설정하면 아이템이 바둑판 모양으로 표시됩니다.

- 아이템이 바둑판 모양으로 표시될 때 아래와 같은 규칙이 적용됩니다.
   > 같은 줄에 표시되는 아이템의 갯수는 ListView 의 width 를 ListViewBandControl 의 width 로 나눈값으로 결정됩니다.
   > ListViewDetailBandControl 의 width 값과 표시여부에 따라 같은 줄에 표시되는 아이템의 갯수가 동적으로 변경될 수 있습니다.
   > 바둑판 모양으로 표시될 때 남는 공간은 각 ListViewBandControl 간의 공백으로 처리됩니다.

---

## word-spacing

ListViewBandControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**
```javascript
ListViewBandControl.set_wordSpacing(strWordSpacing) // set
ListViewBandControl.wordSpacing // get
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
