# Plugin Methods

| Method | Description |
|--------|-------------|
| `callMethod()` | Plugin 에 연결된 객체의 메소드를 호출하는 메소드입니다. |
| `getOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetHeight()` | Plugin 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | Plugin 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getPixelBottom()` | Plugin 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelHeight()` | Plugin 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelLeft()` | Plugin 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelRight()` | Plugin 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelTop()` | Plugin 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelWidth()` | Plugin 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getProperty()` | Plugin 에 연결된 객체에 정의된 속성의 값을 반환하는 메소드입니다. |
| `init()` | 스크립트로 Plugin 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| `install()` | Plugin 에 연결할 객체를 설치하는 메소드입니다. |
| `isInstalled()` | Plugin 에 연결된 객체가 시스템에 설치되어 있는지를 확인하는 메소드입니다. |
| `isLoaded()` | Plugin 에 객체가 정상적으로 생성 및 로드했는지 확인하는 메소드입니다. |
| `move()` | Plugin 의 위치와 크기를 변경하는 메소드입니다. |
| `moveToNext()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Plugin 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `moveToPrev()` | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Plugin 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| `sendToBack()` | 부모가 동일한 컴포넌트 중 Plugin 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| `sendToNext()` | 부모가 동일한 컴포넌트 중 Plugin 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| `setFocus()` | Plugin 에 포커스를 주는 메소드입니다. |
| `setOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetHeight()` | Plugin 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | Plugin 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| `setProperty()` | Plugin 에 연결된 객체에 정의된 속성의 값을 설정하는 메소드입니다. |
| `show()` | 스크립트로 동적 생성한 Plugin 을(를) 화면에 표시하는 메소드입니다. |

---

## callMethod

Plugin 에 연결된 객체의 메소드를 호출하는 메소드입니다.

**Syntax**
```javascript
Plugin.callMethod( strMethodID, [varArg1, [varArg2...]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMethodID` | String | 호출할 메소드의 이름을 문자열로 설정합니다. |
| `varArgN` | Object | 호출할 메소드에 전달될 인수를 설정합니다. |

**Return**: `Variant` — 객체의 메소드에서 리턴값이 있을 경우 해당값을 반환합니다.  객체의 메소드에서 오브젝트를 리턴한 경우 PluginObject 로 Wrapping 되어 반환될 수 있습니다.

**Remark**
- Plugin 에 연결된 객체가 가지고 있는 속성, 메소드, 이벤트 중 같은 이름이 있는 경우 명시적으로 메소드를 호출하기 위해 사용합니다.
- 보안취약점을 가진 객체를 classid 속성값으로 지정하고 callMethod 메소드 실행시 확인 대화 상자를 표시해 안전하지 않은 객체임을 사용자에게 알리고 사용자가 사용에 동의한 경우에만 동작합니다.

- Plugin 에 연결된 메소드에 따라 필요한 인자를 설정합니다.

- 반환된 PluginObject 객체에서 getProperty(), setProperty(), callMethod() 메소드를 사용할 수 있습니다.
   각 메소드로 하위 객체나 속성에 접근하고, 메소드를 실행 할 수 있습니다.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.

---

## getOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getOffsetBottom();
```

**Sample**
```javascript
var nBottom = this.Plugin.getOffsetBottom();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 동적으로 계산합니다.

---

## getOffsetHeight

Plugin 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getOffsetHeight();
```

**Sample**
```javascript
var nHeight = this.Plugin.getOffsetHeight();
```

**Return**: `Number` — Plugin 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Plugin 의 높이를 동적으로 계산합니다.

---

## getOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getOffsetLeft();
```

**Sample**
```javascript
var nleft = this.Plugin.getOffsetLeft();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 동적으로 계산합니다.

---

## getOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getOffsetRight();
```

**Sample**
```javascript
var nRight = this.Plugin.getOffsetRight();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 동적으로 계산합니다.

---

## getOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getOffsetTop();
```

**Sample**
```javascript
var nTop = this.Plugin.getOffsetTop();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 동적으로 계산합니다.

---

## getOffsetWidth

Plugin 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getOffsetWidth();
```

**Sample**
```javascript
var nWidth = this.Plugin.getOffsetWidth();
```

**Return**: `Number` — Plugin 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 Plugin 의 너비를 동적으로 계산합니다.

---

## getPixelBottom

Plugin 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getPixelBottom();
```

**Sample**
```javascript
var nbottom = this.Plugin.getPixelBottom();
```

**Return**: `Number` — Plugin 의 bottom 속성값을 픽셀단위로 반환합니다.  bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelHeight

Plugin 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getPixelHeight();
```

**Sample**
```javascript
var nheight = this.Plugin.getPixelHeight();
```

**Return**: `Number` — Plugin 의 height 속성값을 픽셀단위로 반환합니다.  height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelLeft

Plugin 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getPixelLeft();
```

**Sample**
```javascript
var nleft = this.Plugin.getPixelLeft();
```

**Return**: `Number` — Plugin 의 left 속성값을 픽셀단위로 반환합니다.  left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelRight

Plugin 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getPixelRight();
```

**Sample**
```javascript
var nright = this.Plugin.getPixelRight();
```

**Return**: `Number` — Plugin 의 right 속성값을 픽셀단위로 반환합니다.  right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelTop

Plugin 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getPixelTop();
```

**Sample**
```javascript
var ntop = this.Plugin.getPixelTop();
```

**Return**: `Number` — Plugin 의 top 속성값을 픽셀단위로 반환합니다.  top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelWidth

Plugin 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getPixelWidth();
```

**Sample**
```javascript
var nwidth = this.Plugin.getPixelWidth();
```

**Return**: `Number` — Plugin 의 width 속성값을 픽셀단위로 반환합니다.  width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getProperty

Plugin 에 연결된 객체에 정의된 속성의 값을 반환하는 메소드입니다.

**Syntax**
```javascript
Plugin.getProperty( strPropID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPropID` | String | Plugin 에 연결된 객체에 정의된 속성명을 문자열로 설정합니다. |

**Return**: `Variant` — 객체의 속성이 가지고 있는 값을 반환합니다.  객체의 속성값이 오브젝트인  경우 PluginObject 로 Wrapping 되어 반환될 수 있습니다.

**Remark**
- Plugin 에 연결된 객체가 가지고 있는 속성, 메소드, 이벤트 중 같은 이름이 있는 경우 명시적으로 속성값을 얻어오기 위해 사용합니다.

- 반환된 PluginObject 객체에서 getProperty(), setProperty(), callMethod() 메소드를 사용할 수 있습니다.
   각 메소드로 하위 객체나 속성에 접근하고, 메소드를 실행 할 수 있습니다.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.

---

## init

스크립트로 Plugin 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
Plugin.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | Plugin 의 ID를 문자열로 설정합니다. |
| `vLeft` | String, Number | Plugin 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Plugin 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 left 가 결정됩니다. |
| `vTop` | String, Number | Plugin 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Plugin 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Plugin 의 top 이 결정됩니다. |
| `vWidth` | String, Number | Plugin 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Plugin 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Plugin 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Plugin 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Plugin 의 height 가 결정됩니다. |
| `vRight` | String, Number | Plugin 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Plugin 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 right 가 결정됩니다. |
| `vBottom` | String, Number | Plugin 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Plugin 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Plugin 의 bottom 이 결정됩니다. |
| `vMinWidth` | String, Number | Plugin 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxWidth` | String, Number | Plugin 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.  vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| `vMinHeight` | String, Number | Plugin 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxHeight` | String, Number | Plugin 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.  vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 Plugin 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Plugin 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: show, removeChild, destroy, insertChild, addChild

---

## install

Plugin 에 연결할 객체를 설치하는 메소드입니다.

**Syntax**
```javascript
Plugin.install();
```

**Sample**
```javascript
this.Plugin00.set_classid("{D27CDB6E-AE6D-11cf-96B8-444553540000}");
this.Plugin00.set_codebase("http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab");
var bSucc = Plugin00.install();
```

**Return**: `Boolean` — 객체 설치에 성공하면 "true"를 반환합니다.  객체가 이미 설치되어 있거나 설치에 실패하면 "false"를 반환합니다.

**Remark**
- 객체가 ActiveX 이면 codebase 와 classid 속성이 설정되어 있어야 합니다.

- 객체가 플러그인 이면 mimetype 과 pluginpage 속성이 설정되어 있어야 합니다.

---

## isInstalled

Plugin 에 연결된 객체가 시스템에 설치되어 있는지를 확인하는 메소드입니다.

**Syntax**
```javascript
plugin.isInstalled();
```

**Sample**
```javascript
var bRet = this.Plugin00.isInstalled();
```

**Return**: `Boolean` — 객체가 시스템에 설치되어 있으면 "true"를 반환합니다.  객체가 시스템에 설치되어 있지 않으면 "false"를 반환합니다.

**Remark**
- 객체가 ActiveX 이면 codebase 와 classid 속성이 설정되어 있어야 합니다.

- 객체가 플러그인 이면 mimetype 과 pluginpage 속성이 설정되어 있어야 합니다.

---

## isLoaded

Plugin 에 객체가 정상적으로 생성 및 로드했는지 확인하는 메소드입니다.

**Syntax**
```javascript
Plugin.isLoaded();
```

**Sample**
```javascript
var bRet = this.Plugin00.isLoaded();
```

**Return**: `Boolean` — 객체가 Plugin 컴포넌트에 정상적으로 로드 되었으면 "true"를 반환합니다.  객체가 Plugin 컴포넌트에 정상적으로 로드 되지 않았으면 "false"를 반환합니다.

---

## move

Plugin 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
Plugin.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vLeft` | String, Number | Plugin 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Plugin 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 left 가 결정됩니다. |
| `vTop` | String, Number | Plugin 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Plugin 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Plugin 의 top 이 결정됩니다. |
| `vWidth` | String, Number | Plugin 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Plugin 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 width 가 결정됩니다. |
| `vHeight` | String, Number | Plugin 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Plugin 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Plugin 의 height 가 결정됩니다. |
| `vRight` | String, Number | Plugin 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Plugin 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 right 가 결정됩니다. |
| `vBottom` | String, Number | Plugin 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Plugin 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Plugin 의 bottom 이 결정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 Plugin 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Plugin 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## moveToNext

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Plugin 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
Plugin.moveToNext( objComp )
Plugin.moveToNext( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 Plugin 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 Plugin 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.

---

## moveToPrev

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Plugin 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**
```javascript
Plugin.moveToPrev( objComp )
Plugin.moveToPrev( strComp )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 기준이 되는 컴포넌트를 오브젝트로 설정합니다. |
| `strComp` | String | 기준이 되는 컴포넌트의 ID를 문자열로 설정합니다. |

**Remark**
- 인수로 전달되는 기준 컴포넌트와 Plugin 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 Plugin 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.

---

## sendToBack

부모가 동일한 컴포넌트 중 Plugin 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**
```javascript
Plugin.sendToBack()
```

**Sample**
```javascript
this.Plugin.sendToBack();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 Plugin 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다

---

## sendToNext

부모가 동일한 컴포넌트 중 Plugin 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**
```javascript
Plugin.sendToNext()
```

**Sample**
```javascript
this.Plugin.sendToNext();
```

**Remark**
- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 Plugin 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.

---

## setFocus

Plugin 에 포커스를 주는 메소드입니다.

**Syntax**
```javascript
Plugin.setFocus( [bMoveScroll [, bInnerFocus]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bMoveScroll` | Boolean | 부모 컴포넌트에 스크롤이 있을 경우 Plugin 기준으로 스크롤을 이동할지 설정합니다.  true 설정 시 Plugin 이(가) 화면에 표시되도록 스크롤을 이동시킵니다. false 설정 시 Plugin 의 위치에 관계없이 스크롤을 이동시키지 않습니다.  값을 설정하지 않으면 true 로 동작합니다. |
| `bInnerFocus` | Boolean | Plugin 이(가) 컨테이너 컴포넌트 일 때 자식 컴포넌트에게 포커스를 이동할지 설정합니다.  true 설정 시 자식 컴포넌트 중 포커스를 받을 수 있는 첫번째 컴포넌트가 포커스 됩니다. false 설정 시 Plugin 에 포커스 됩니다.  Plugin 이(가) 컨테이너 컴포넌트 일 때 값을 설정하지 않으면 true 로 동작합니다. |

**Return**: `Object` — Plugin 이(가) 포커스되기 전에 포커스를 가졌던 컴포넌트를 반환합니다.  포커스를 가진 컴포넌트가 없었거나 메소드 수행이 실패하는 경우에는 null 을 반환합니다.

**Remark**
- setFocus() 메소드는 enableaccessibility 속성값에 관계없이 파라미터값을 기준으로 동작합니다.

- Plugin 이(가) 컨테이너 컴포넌트가 아니거나 자식 컴포넌트 중 포커스를 가질 수 있는 컴포넌트가
   존재하지 않을 경우에는 bInnerFocus 파라미터값에 관계없이 Plugin 에 포커스 됩니다.

---

## setOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Plugin.setOffsetBottom( nBottom );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBottom` | Number | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetHeight

Plugin 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Plugin.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | Plugin 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Plugin.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위의 숫자로 설정합니다 |

**Remark**
- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > Plugin 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.

---

## setOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Plugin.setOffsetRight( nRight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRight` | Number | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Plugin.setOffsetTop( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > Plugin 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.

---

## setOffsetWidth

Plugin 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
Plugin.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | Plugin 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setProperty

Plugin 에 연결된 객체에 정의된 속성의 값을 설정하는 메소드입니다.

**Syntax**
```javascript
Plugin.setProeprty( strPropID, varVal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPropID` | String | Plugin 에 연결된 객체에 정의된 속성명을 문자열로 설정합니다. |
| `varVal` | String | strPropID 값에 해당하는 속성에 설정할 값을 설정합니다. |

**Remark**
- Plugin 에 연결된 객체가 가지고 있는 속성, 메소드, 이벤트 명 중 같은 이름을 가진 경우 명시적으로 속성값을 설정하기 위해 사용합니다.

---

## show

스크립트로 동적 생성한 Plugin 을(를) 화면에 표시하는 메소드입니다.

**Syntax**
```javascript
Plugin.show()
```

**Sample**
```javascript
this.Plugin00.show();
```

**Remark**
- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: init, removeChild, destroy, insertChild, addChild

---
