# VideoPlayer Properties

| Property | Description |
|----------|-------------|
| `-nexa-border` | VideoPlayer 의 테두리를 설정하는 속성입니다. |
| `accessibilityaction` | VideoPlayer에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 a |
| `accessibilitydesclevel` | VideoPlayer 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| `accessibilitydescription` | VideoPlayer에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 d |
| `accessibilityenable` | VideoPlayer 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| `accessibilitylabel` | VideoPlayer에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 l |
| `accessibilityrole` | VideoPlayer에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| `aspectratio` | VideoPlayer 에 로드된 비디오 파일의 화면비율값을 갖는 읽기전용 속성입니다. |
| `autoplay` | VideoPlayer 에 파일을 로드 시 자동으로 재생시킬 지 여부를 설정하는 속성입니다. |
| `bottom` | VideoPlayer 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| `cssclass` | VideoPlayer 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| `currenttime` | VideoPlayer 에서 비디오의 재생위치를 설정하는 속성입니다. |
| `duration` | VideoPlayer 에 로드된 비디오 파일의 전체 재생시간을 갖는 읽기전용 속성입니다. |
| `enable` | VideoPlayer 의 사용가능 여부를 설정하는 속성입니다. |
| `enableevent` | VideoPlayer 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| `flexgrow` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `flexshrink` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `height` | VideoPlayer 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| `id` | VideoPlayer의 고유 식별자를 설정하는 속성입니다. |
| `layoutorder` | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축 |
| `left` | VideoPlayer 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| `maxheight` | VideoPlayer 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| `maxwidth` | VideoPlayer 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| `minheight` | VideoPlayer 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| `minwidth` | VideoPlayer 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| `mute` | VideoPlayer 에서 비디오 재생 시 음소거 여부를 설정하는 속성입니다. |
| `name` | VideoPlayer 의 이름을 설정하는 속성입니다. |
| `parent` | VideoPlayer 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `positionstep` | 부모 오브젝트가 화면분할기능을 사용할 때 VideoPlayer 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| `repeat` | VideoPlayer 에서 비디오를 반복재생할 지 여부를 설정하는 속성입니다. |
| `right` | VideoPlayer 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| `showcontrolbar` | VideoPlayer 에 기본 UI(ControlBar)를 표시할 지 여부를 설정하는 속성입니다. |
| `tablecellarea` | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| `taborder` | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 VideoPlayer 의 순서를 설정하는 속성입니다. |
| `tabstop` | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 VideoPlayer 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| `top` | VideoPlayer 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| `url` | VideoPlayer 에 재생시킬 비디오 파일을 설정하는 속성입니다. |
| `videosize` | VideoPlayer 에 로드된 비디오 파일의 실제 너비와 높이를 배열형태로 갖는 읽기전용 속성입니다. |
| `visible` | VideoPlayer 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| `volume` | VideoPlayer 의 음량을 설정하는 속성입니다. |
| `width` | VideoPlayer 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |

---

## -nexa-border

VideoPlayer 의 테두리를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_border(strborder) // set
VideoPlayer.border // get
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

- <line-style> 에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ WRE 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.

---

## accessibilityaction

VideoPlayer에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_accessibilityaction(strAction) // set
VideoPlayer.accessibilityaction // get
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

VideoPlayer 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_accessibilitydesclevel(enumLevel) // set
VideoPlayer.accessibilitydesclevel // get
```

**Setting Syntax**
```javascript
VideoPlayer 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.
```

**Remark**
- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 VideoPlayer 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.

---

## accessibilitydescription

VideoPlayer에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_accessibilitydescription(strDescription) // set
VideoPlayer.accessibilitydescription // get
```

**Setting Syntax**
```javascript
accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
```

**Remark**
- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

---

## accessibilityenable

VideoPlayer 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_accessibilityenable(bEnable) // set
VideoPlayer.accessibilityenable // get
```

**Setting Syntax**
```javascript
VideoPlayer 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 VideoPlayer 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 VideoPlayer 에 이동되지 않습니다.
```

**Remark**
- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : VideoPlayer 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 VideoPlayer 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 VideoPlayer 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ Mobile 제약

- 모바일 환경에서는 Div 와 같은 컨테이너 컴포넌트 자체에 선택상자가 이동하지 않습니다.

---

## accessibilitylabel

VideoPlayer에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_accessibilitylabel(strLabel) // set
VideoPlayer.accessibilitylabel // get
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

VideoPlayer에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_accessibilityrole(enumRole) // set
VideoPlayer.accessibilityrole // get
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

- accessibilityenable 속성값을 설정하지 않으면 VideoPlayer의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 VideoPlayer에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.

---

## aspectratio

VideoPlayer 에 로드된 비디오 파일의 화면비율값을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
VideoPlayer.aspectratio
```

**Setting Syntax**
```javascript
"가로:세로" 형식의 화면비율값을 갖습니다.
```

---

## autoplay

VideoPlayer 에 파일을 로드 시 자동으로 재생시킬 지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_autoplay(bAutoplay) // set
VideoPlayer.autoplay // get
```

**Setting Syntax**
```javascript
파일이 로드되어도 자동으로 재생시키지 않습니다.
```

**Remark**
- autoplay 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ Android WRE 제약

- Android 의 Chrome 웹브라우저는 지원하지 않는 속성입니다.

---

## bottom

VideoPlayer 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_bottom(nBottom) // set
VideoPlayer.bottom // get
```

**Setting Syntax**
```javascript
VideoPlayer 의 하단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 bottom 속성값을 기준으로 VideoPlayer 의 하단 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 VideoPlayer 의 하단 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 top 속성값을 기준으로 VideoPlayer 의 하단 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 VideoPlayer 의 하단 위치가 결정됩니다.
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

## cssclass

VideoPlayer 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_cssclass(strcssclass) // set
VideoPlayer.cssclass // get
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

## currenttime

VideoPlayer 에서 비디오의 재생위치를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_currenttime(nCurrenttime) // set
VideoPlayer.currenttime // get
```

**Setting Syntax**
```javascript
비디오의 재생위치를 밀리초(MilliSecond) 단위로 설정합니다.
```

**Remark**
- currenttime 속성값을 설정하면 oncurrenttimechanged 이벤트가 발생합니다.

- Web Runtime Environment는 비디오 재생 중 currenttime 속성값이 지속적으로 갱신됩니다.


◆ Nexacro Runtime Environment 제약

- 비디오 재생중 currenttime 속성값이 갱신되지 않습니다.

- currenttime 속성은 비디오의 재생위치를 스크립트로 변경시키고자 할 때 사용됩니다.

---

## duration

VideoPlayer 에 로드된 비디오 파일의 전체 재생시간을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
VideoPlayer.duration
```

**Setting Syntax**
```javascript
비디오의 전체 재생시간을 밀리초(MilliSecond) 단위로 갖습니다.
```

---

## enable

VideoPlayer 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_enable(benable) // set
VideoPlayer.enable // get
```

**Setting Syntax**
```javascript
VideoPlayer 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.
```

**Remark**
- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.

---

## enableevent

VideoPlayer 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_enableevent(bEvent) // set
VideoPlayer.enableevent // get
```

**Setting Syntax**
```javascript
VideoPlayer 에서 이벤트가 발생하지 않도록 설정합니다.
```

**Remark**
- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.

---

## flexgrow

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_flexgrow(fVal) // set
VideoPlayer.flexgrow // get
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
VideoPlayer.set_flexshrink(fVal) // set
VideoPlayer.flexshrink // get
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

VideoPlayer 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_height(nHeight) // set
VideoPlayer.height // get
```

**Setting Syntax**
```javascript
VideoPlayer 의 높이를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 설정값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 VideoPlayer 의 높이가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 값은 무시되고 설정값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 VideoPlayer 의 높이가 결정됩니다.
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

VideoPlayer의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.id
```

**Setting Syntax**
```javascript
VideoPlayer를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## layoutorder

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**
```javascript
VideoPlayer.set_layoutorder(nVal) // set
VideoPlayer.layoutorder // get
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

VideoPlayer 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_left(nLeft) // set
VideoPlayer.left // get
```

**Setting Syntax**
```javascript
VideoPlayer 의 좌측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 left 속성값을 기준으로 VideoPlayer 의 좌측 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 VideoPlayer 의 좌측 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 right 속성값을 기준으로 VideoPlayer 의 좌측 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 VideoPlayer 의 좌측 위치가 결정됩니다.
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

VideoPlayer 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_maxheight(nMaxHeight) // set
VideoPlayer.maxheight // get
```

**Setting Syntax**
```javascript
VideoPlayer 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- height 속성값이 maxheight 보다 크면 화면에 표시되는 VideoPlayer 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 VideoPlayer 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.

---

## maxwidth

VideoPlayer 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_maxwidth(nMaxWidth) // set
VideoPlayer.maxwidth // get
```

**Setting Syntax**
```javascript
VideoPlayer 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- width 속성값이 maxwidth 보다 크면 화면에 표시되는 VideoPlayer 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 VideoPlayer 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.

---

## minheight

VideoPlayer 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_minheight(nMinHeight) // set
VideoPlayer.minheight // get
```

**Setting Syntax**
```javascript
VideoPlayer 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- height 속성값이 minheight 보다 작다면 화면에 표시되는 VideoPlayer 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 VideoPlayer 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.

---

## minwidth

VideoPlayer 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_minwidth(nMinWidth) // set
VideoPlayer.minwidth // get
```

**Setting Syntax**
```javascript
VideoPlayer 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.
```

**Remark**
- width 속성값이 minwidth 보다 작으면 화면에 표시되는 VideoPlayer 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 VideoPlayer 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.

---

## mute

VideoPlayer 에서 비디오 재생 시 음소거 여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_mute(bMute) // set
VideoPlayer.mute // get
```

**Setting Syntax**
```javascript
비디오 재생 시 소리를 재생합니다.
```

**Remark**
- mute 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- 기본 UI(ControlBar)에서 음소거를 설정하여도 mute 속성값은 변경되지 않습니다.

---

## name

VideoPlayer 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_name(strName) // set
VideoPlayer.name // get
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

VideoPlayer 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
VideoPlayer.parent
```

**Setting Syntax**
```javascript
var objParent = this.VideoPlayer00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- VideoPlayer 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## positionstep

부모 오브젝트가 화면분할기능을 사용할 때 VideoPlayer 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_positionstep(nStep) // set
VideoPlayer.positionstep // get
```

**Setting Syntax**
```javascript
VideoPlayer 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 VideoPlayer 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.
```

**Remark**
- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.

---

## repeat

VideoPlayer 에서 비디오를 반복재생할 지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_repeat(bRepeat) // set
VideoPlayer.repeat // get
```

**Setting Syntax**
```javascript
비디오를 반복재생하지 않습니다.
```

**Remark**
- repeat 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- 컨트롤바에서 일시정지 버튼을 누르거나 pause(), stop() 메소드가 호출될 때까지 반복재생합니다.

---

## right

VideoPlayer 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_right(nRight) // set
VideoPlayer.right // get
```

**Setting Syntax**
```javascript
VideoPlayer 의 우측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 right 속성값을 기준으로 VideoPlayer 의 우측 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 VideoPlayer 의 우측 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 left 속성값을 기준으로 VideoPlayer 의 우측 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 VideoPlayer 의 우측 위치가 결정됩니다.
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

## showcontrolbar

VideoPlayer 에 기본 UI(ControlBar)를 표시할 지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_showcontrolbar(bShow) // set
VideoPlayer.showcontrolbar // get
```

**Setting Syntax**
```javascript
기본 UI(ControlBar)를 표시하지 않습니다.
```

**Remark**
- showcontrollbar 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- 기본 UI(ControlBar)에서는 최대화, 최소화 기능을 지원하지 않습니다.

- 기본 UI(ControlBar)에서 음량을 변경하여도 volume, mute 속성값은 변경되지 않습니다.

- 일부 환경에서 지원되지 않는 속성입니다.

---

## tablecellarea

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**
```javascript
VideoPlayer.set_tablecellarea(strArea) // set
VideoPlayer.tablecellarea // get
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

탭키 입력으로 컴포넌트간 포커스를 이동할 때 VideoPlayer 의 순서를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_taborder(nTabOrder) // set
VideoPlayer.taborder // get
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

탭키 입력으로 컴포넌트간 포커스를 이동할 때 VideoPlayer 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_tabstop(bTabStop) // set
VideoPlayer.tabstop // get
```

**Setting Syntax**
```javascript
VideoPlayer 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.
```

**Remark**
- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.

---

## top

VideoPlayer 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_top(nTop) // set
VideoPlayer.top // get
```

**Setting Syntax**
```javascript
VideoPlayer 의 상단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 부모(Parent)의 top 속성값을 기준으로 VideoPlayer 의 상단 위치가 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 height 속성값을 기준으로 VideoPlayer 의 상단 위치가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 의 bottom 속성값을 기준으로 VideoPlayer 의 상단 위치가 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 height 속성값을 기준으로 VideoPlayer 의 상단 위치가 결정됩니다.
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

## url

VideoPlayer 에 재생시킬 비디오 파일을 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_url(strUrl) // set
VideoPlayer.url // get
```

**Setting Syntax**
```javascript
TypeDefinition 영역의 Services 에 정의된 Prefix 를 사용하여 파일의 위치를 설정합니다.

현재 Form의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.
```

**Remark**
- Windows NRE 에서 지원하는 포맷은 "https://support.microsoft.com/en-us/kb/245608" 사이트를 참조하세요.

- Android NRE 에서 지원하는 포맷은 "https://developer.android.com/guide/appendix/media-formats.html" 사이트를 참조하세요.

- iOS/iPadOS NRE, IE, Chrome 에서 지원하는 포맷은 "https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats" 사이트를 참조하세요.

---

## videosize

VideoPlayer 에 로드된 비디오 파일의 실제 너비와 높이를 배열형태로 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
VideoPlayer.videosize
```

**Setting Syntax**
```javascript
비디오 파일의 너비를 배열의 첫번째 원소값으로 갖습니다.
비디오 파일의 높이를 배열의 두번째 원소값으로 갖습니다.
```

---

## visible

VideoPlayer 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_visible(bVisible) // set
VideoPlayer.visible // get
```

**Setting Syntax**
```javascript
VideoPlayer 을(를) 화면에 표시하지 않습니다.
```

**Remark**
- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.

---

## volume

VideoPlayer 의 음량을 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_volume(nVolume) // set
VideoPlayer.volume // get
```

**Setting Syntax**
```javascript
음량을 0 ~ 100 사이의 숫자값으로 설정합니다.

음수로 설정 시 0 으로 적용됩니다.
100 초과값을 설정 시 100 으로 적용됩니다.
```

**Remark**
- 기본 UI(ControlBar)에서 음량을 변경하여도 volume 속성값은 변경되지 않습니다.


◆ iOS/iPadOS 제약

- iOS/iPadOS 환경에서는 시스템 음량을 기준으로 동작하며 음량값을 수정할 수 없습니다.

---

## width

VideoPlayer 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**
```javascript
VideoPlayer.set_width(nWidth) // set
VideoPlayer.width // get
```

**Setting Syntax**
```javascript
VideoPlayer 의 너비를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
pixel 단위로 설정 시 설정값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 부모(Parent)의 width 속성값을 기준으로 VideoPlayer 의 너비가 결정됩니다.

* <strCompID> 값을 설정했을 때 :
pixel 단위로 설정 시 <strCompID> 값은 무시되고 설정값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 <strCompID> 의 width 속성값을 기준으로 VideoPlayer 의 너비가 결정됩니다.
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
