# GoogleMap Properties

| Property | Description |
|----------|-------------|
| `-nexa-border` | GoogleMap 의 테두리를 설정하는 속성입니다. |
| `accessibilityaction` | GoogleMap에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 act |
| `accessibilitydesclevel` | GoogleMap 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| `accessibilitydescription` | GoogleMap에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 des |
| `accessibilityenable` | GoogleMap 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| `accessibilitylabel` | GoogleMap에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 lab |
| `accessibilityrole` | GoogleMap에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| `apikey` | GoogleMap 컴포넌트에 지도 로드 시 사용될 API Key 를 설정하는 속성입니다. |
| `bottom` | GoogleMap 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| `enable` | GoogleMap 의 사용가능 여부를 설정하는 속성입니다. |
| `flexgrow` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `flexshrink` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `height` | GoogleMap 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| `id` | GoogleMap의 고유 식별자를 설정하는 속성입니다. |
| `initvalueid` | GoogleMap 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| `items` | GoogleMap 위에 표시되는 아이템을 배열 형태로 갖는 읽기전용 속성입니다. |
| `language` | GoogleMap 에 적용될 언어를 설정하는 속성입니다. |
| `latitude` | GoogleMap 에 로드된 지도의 중앙위치 위도값을 갖는 읽기전용 속성입니다. |
| `layoutorder` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `left` | GoogleMap 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| `longitude` | GoogleMap 에 로드된 지도의 중앙위치 경도값을 갖는 읽기전용 속성입니다. |
| `maxheight` | GoogleMap 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| `maxwidth` | GoogleMap 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| `minheight` | GoogleMap 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| `minwidth` | GoogleMap 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| `name` | GoogleMap 의 이름을 설정하는 속성입니다. |
| `parent` | GoogleMap 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `positionstep` | 부모 오브젝트가 화면분할기능을 사용할 때 GoogleMap 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| `region` | GoogleMap 에 적용될 지역을 설정하는 속성입니다. |
| `right` | GoogleMap 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| `showzoom` | GoogleMap 컴포넌트에 로드된 지도에 Zoom 관련 컨트롤의 표시여부를 설정하는 속성입니다. |
| `tablecellarea` | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| `taborder` | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 GoogleMap 의 순서를 설정하는 속성입니다. |
| `top` | GoogleMap 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| `viewmode` | GoogleMap 에 로드된 지도의 표시모드값을 갖는 읽기전용 속성입니다. |
| `visible` | GoogleMap 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| `width` | GoogleMap 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| `zoomlevel` | GoogleMap 에 로딩된 지도의 Zoom Level 값을 갖는 읽기전용 속성입니다. |

---

## -nexa-border

GoogleMap 의 테두리를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_border(strborder) // set
GoogleMap.border // get
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

## accessibilityaction

GoogleMap에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_accessibilityaction(strAction) // set
GoogleMap.accessibilityaction // get
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

GoogleMap 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_accessibilitydesclevel(enumLevel) // set
GoogleMap.accessibilitydesclevel // get
```

**Setting Syntax**
```javascript
GoogleMap 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.
```

**Remark**
- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 GoogleMap 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.

---

## accessibilitydescription

GoogleMap에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_accessibilitydescription(strDescription) // set
GoogleMap.accessibilitydescription // get
```

**Setting Syntax**
```javascript
accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
```

**Remark**
- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

---

## accessibilityenable

GoogleMap 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_accessibilityenable(bEnable) // set
GoogleMap.accessibilityenable // get
```

**Setting Syntax**
```javascript
GoogleMap 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 GoogleMap 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 GoogleMap 에 이동되지 않습니다.
```

**Remark**
- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : GoogleMap 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 GoogleMap 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 GoogleMap 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ Mobile 제약

- 모바일 환경에서는 Div 와 같은 컨테이너 컴포넌트 자체에 선택상자가 이동하지 않습니다.

---

## accessibilitylabel

GoogleMap에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_accessibilitylabel(strLabel) // set
GoogleMap.accessibilitylabel // get
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

GoogleMap에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_accessibilityrole(enumRole) // set
GoogleMap.accessibilityrole // get
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

- accessibilityenable 속성값을 설정하지 않으면 GoogleMap의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 GoogleMap에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.

---

## apikey

GoogleMap 컴포넌트에 지도 로드 시 사용될 API Key 를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_apikey(strApiKey) // set
GoogleMap.apikey // get
```

**Setting Syntax**
```javascript
Google 에서 발급받은 API Key 를 문자열로 설정합니다.
```

**Remark**
- apikey 에 설정된 Key 값은 load() 메소드 최초 실행 시 한번 적용됩니다.

- GoogleMap 컴포넌트별로 서로 다른 Key 를 설정할 수 있습니다.

- Android NRE 는 "AndroidManifest.xml" 에 Key 를 설정하므로 apikey 속성이 적용되지 않습니다.

---

## bottom

GoogleMap 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_bottom(nBottom) // set
GoogleMap.bottom // get
```

**Setting Syntax**
```javascript
GoogleMap 의 하단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 bottom 속성값을 기준으로 GoogleMap 의 하단 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 GoogleMap 의 하단 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 top 속성값을 기준으로 GoogleMap 의 하단 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 GoogleMap 의 하단 위치가 결정됩니다.
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

## enable

GoogleMap 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_enable(benable) // set
GoogleMap.enable // get
```

**Setting Syntax**
```javascript
GoogleMap 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.
```

**Remark**
- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.

---

## flexgrow

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_flexgrow(fVal) // set
GoogleMap.flexgrow // get
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
GoogleMap.set_flexshrink(fVal) // set
GoogleMap.flexshrink // get
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

GoogleMap 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_height(nHeight) // set
GoogleMap.height // get
```

**Setting Syntax**
```javascript
GoogleMap 의 높이를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 설정값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 GoogleMap 의 높이가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 값은 무시되고 설정값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 GoogleMap 의 높이가 결정됩니다.
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

GoogleMap의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.id
```

**Setting Syntax**
```javascript
GoogleMap를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## initvalueid

GoogleMap 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_initvalueid(strValueID) // set
GoogleMap.initvalueid // get
```

**Setting Syntax**
```javascript
InitValueDefinition 영역에 정의된 InitValue 파일에서 GoogleMap 에 적용할 항목의 ID 를 문자열로 설정합니다.
```

**Remark**
- GoogleMap 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   GoogleMap 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.

---

## items

GoogleMap 위에 표시되는 아이템을 배열 형태로 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GoogleMap.items
```

**Setting Syntax**
```javascript
var objItem = this.GoogleMap00.items[0];
```

**Remark**
- GoogleMapMarker, GoogleMapPolyline, GoogleMapPolygon 오브젝트를 배열형태로 갖는 속성입니다.

- 아이템의 추가와 삭제는 addItem(). removeItem() 메소드를 사용하여야 합니다.

---

## language

GoogleMap 에 적용될 언어를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_language( strLang ) // set 
GoogleMap.language // get
```

**Setting Syntax**
```javascript
GoogleMap 에 적용할 언어의 코드를 문자열로 설정합니다.
```

**Remark**
- language 속성값을 설정하지 않으면 브라우저에 설정된 언어가 적용됩니다.

- 설정할 수 있는 언어별 코드는 다음과 같습니다.

	
		Code
		Language
		Code
		Language
		Code
		Language
	

	
		af

---

## latitude

GoogleMap 에 로드된 지도의 중앙위치 위도값을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GoogleMap.latitude
```

**Setting Syntax**
```javascript
var nLatitude = this.GoogleMap00.latitude;
```

---

## layoutorder

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**
```javascript
GoogleMap.set_layoutorder(nVal) // set
GoogleMap.layoutorder // get
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

GoogleMap 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_left(nLeft) // set
GoogleMap.left // get
```

**Setting Syntax**
```javascript
GoogleMap 의 좌측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 left 속성값을 기준으로 GoogleMap 의 좌측 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 GoogleMap 의 좌측 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 right 속성값을 기준으로 GoogleMap 의 좌측 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 GoogleMap 의 좌측 위치가 결정됩니다.
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

## longitude

GoogleMap 에 로드된 지도의 중앙위치 경도값을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GoogleMap.longitude
```

**Setting Syntax**
```javascript
var nLongitude = this.GoogleMap00.longitude;
```

---

## maxheight

GoogleMap 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_maxheight(nMaxHeight) // set
GoogleMap.maxheight // get
```

**Setting Syntax**
```javascript
GoogleMap 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- height 속성값이 maxheight 보다 크면 화면에 표시되는 GoogleMap 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 GoogleMap 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.

---

## maxwidth

GoogleMap 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_maxwidth(nMaxWidth) // set
GoogleMap.maxwidth // get
```

**Setting Syntax**
```javascript
GoogleMap 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- width 속성값이 maxwidth 보다 크면 화면에 표시되는 GoogleMap 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 GoogleMap 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.

---

## minheight

GoogleMap 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_minheight(nMinHeight) // set
GoogleMap.minheight // get
```

**Setting Syntax**
```javascript
GoogleMap 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- height 속성값이 minheight 보다 작다면 화면에 표시되는 GoogleMap 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 GoogleMap 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.

---

## minwidth

GoogleMap 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_minwidth(nMinWidth) // set
GoogleMap.minwidth // get
```

**Setting Syntax**
```javascript
GoogleMap 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- width 속성값이 minwidth 보다 작으면 화면에 표시되는 GoogleMap 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 GoogleMap 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.

---

## name

GoogleMap 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_name(strName) // set
GoogleMap.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## parent

GoogleMap 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GoogleMap.parent
```

**Setting Syntax**
```javascript
var objParent = this.GoogleMap00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- GoogleMap 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## positionstep

부모 오브젝트가 화면분할기능을 사용할 때 GoogleMap 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_positionstep(nStep) // set
GoogleMap.positionstep // get
```

**Setting Syntax**
```javascript
GoogleMap 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 GoogleMap 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.
```

**Remark**
- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.

---

## region

GoogleMap 에 적용될 지역을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_region( strRegion ) // set 
GoogleMap.region // get
```

**Setting Syntax**
```javascript
GoogleMap 에 적용할 지역의 코드를 문자열로 설정합니다.

지역 코드는 ISO 3166-1 에서 정의하고 있는 2-알파벳 국가코드를 사용합니다.
```

**Remark**
- region 속성값을 설정하지 않으면 브라우저에 설정된 지역이 적용됩니다.

- 지역코드는 "Appendix > Locale Code List" 항목의 국가코드를 참고하세요.

---

## right

GoogleMap 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_right(nRight) // set
GoogleMap.right // get
```

**Setting Syntax**
```javascript
GoogleMap 의 우측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 right 속성값을 기준으로 GoogleMap 의 우측 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 GoogleMap 의 우측 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 left 속성값을 기준으로 GoogleMap 의 우측 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 GoogleMap 의 우측 위치가 결정됩니다.
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

## showzoom

GoogleMap 컴포넌트에 로드된 지도에 Zoom 관련 컨트롤의 표시여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_showzoom(bShowzoom) // set
GoogleMap.showzoom // get
```

**Setting Syntax**
```javascript
Zoom 을 조절할 수 있는 [+],[-] 버튼 컨트롤이 지도에 표시되지 않습니다.
```

**Remark**
- showzoom 속성값을 설정하지 않으면 "false"로 적용됩니다.

---

## tablecellarea

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**
```javascript
GoogleMap.set_tablecellarea(strArea) // set
GoogleMap.tablecellarea // get
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

탭키 입력으로 컴포넌트간 포커스를 이동할 때 GoogleMap 의 순서를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_taborder(nTabOrder) // set
GoogleMap.taborder // get
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

## top

GoogleMap 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_top(nTop) // set
GoogleMap.top // get
```

**Setting Syntax**
```javascript
GoogleMap 의 상단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 top 속성값을 기준으로 GoogleMap 의 상단 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 GoogleMap 의 상단 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 bottom 속성값을 기준으로 GoogleMap 의 상단 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 GoogleMap 의 상단 위치가 결정됩니다.
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

## viewmode

GoogleMap 에 로드된 지도의 표시모드값을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GoogleMap.viewmode
```

**Setting Syntax**
```javascript
일반 Google Map 형태로 표시될 경우 "0" 값을 갖습니다.
위성 이미지 형태로 표시될 경우 "1" 값을 갖습니다.
위성 이미지를 표시하고 주요거리의 투명레이어를 함께 표시할 경우 "2" 값을 갖습니다.
지형 및 초목과 같은 물리적인 지형지물과 주요거리 투명레이어를 함께 표시할 경우 "3" 값을 갖습니다.
```

---

## visible

GoogleMap 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_visible(bVisible) // set
GoogleMap.visible // get
```

**Setting Syntax**
```javascript
GoogleMap 을(를) 화면에 표시하지 않습니다.
```

**Remark**
- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.

---

## width

GoogleMap 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMap.set_width(nWidth) // set
GoogleMap.width // get
```

**Setting Syntax**
```javascript
GoogleMap 의 너비를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 설정값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 GoogleMap 의 너비가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 값은 무시되고 설정값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 GoogleMap 의 너비가 결정됩니다.
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

## zoomlevel

GoogleMap 에 로딩된 지도의 Zoom Level 값을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GoogleMap.zoomlevel
```

**Remark**
- 로딩된 지도의 Zoom Level 이 0 이상의 정수로 저장됩니다.

- 사용자에 의해 지도의 Zoom Level 이 변경될 때 속성값이 함께 변경됩니다.

---
