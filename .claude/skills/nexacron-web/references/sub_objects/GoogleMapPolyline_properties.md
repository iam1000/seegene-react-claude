# GoogleMapPolyline Properties

| Property | Description |
|----------|-------------|
| `linecolor` | GoogleMapPolyline 의 locationdata 속성에 설정된 위치를 연결하는 선의 색상을 설정하는 속성입니다. |
| `linewidth` | GoogleMapPolyline 의 locationdata 속성에 설정된 위치를 연결하는 선의 너비를 설정하는 속성입니다. |
| `locationdata` | 지도에 표시할 GoogleMapPolyline 의 좌표를 설정하는 속성입니다. |
| `visible` | GoogleMapPolyline 을 지도에 표시할 지 여부를 설정하는 속성입니다. |

---

## linecolor

GoogleMapPolyline 의 locationdata 속성에 설정된 위치를 연결하는 선의 색상을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapPolyline.set_linecolor(strColor) // set
GoogleMapPolyline.linecolor // get
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
- linecolor 속성값을 설정하지 않으면 "black" 으로 적용됩니다.

- GoogleMapPolyline 오브젝트의 선이 지정된 색으로 표시됩니다.

---

## linewidth

GoogleMapPolyline 의 locationdata 속성에 설정된 위치를 연결하는 선의 너비를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapPolyline.set_linewidth(nWidth) // set
GoogleMapPolyline.linewidth // get
```

**Setting Syntax**
```javascript
선의 너비를 pixel 단위의 숫자로 설정합니다.
```

---

## locationdata

지도에 표시할 GoogleMapPolyline 의 좌표를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapPolyline.set_locationdata(strData) // set
GoogleMapPolyline.locationdata // get
```

**Setting Syntax**
```javascript
GoogleMapPolyline 의 선을 결정하기 위한 경도좌표를 설정합니다.
```

**Remark**
- 설정된 값의 첫좌표에서 다음좌표로 연속하여 연결한 선이 표시됩니다.

- locationdata 속성에 위치좌표는 2개 이상 설정할 수 있으며 갯수에 따라 선의 형태가 결정됩니다.

---

## visible

GoogleMapPolyline 을 지도에 표시할 지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapPolyline.set_visible(bVisible) // set
GoogleMapPolyline.visible // get
```

**Setting Syntax**
```javascript
지도에 추가된 GoogleMapPolyline 를 표시하지 않습니다.
```

**Remark**
- visible 속성값을 설정하지 않으면 "true" 로 적용됩니다.

---
