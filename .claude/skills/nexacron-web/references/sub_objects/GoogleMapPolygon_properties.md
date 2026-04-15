# GoogleMapPolygon Properties

| Property | Description |
|----------|-------------|
| `fillbrushcolor` | GoogleMapPolygon 의 내부를 채울 색상을 설정하는 속성입니다. |
| `linecolor` | GoogleMapPolygon 의 locationdata 속성에 설정된 위치를 연결하는 선의 색상을 설정하는 속성입니다. |
| `linewidth` | GoogleMapPolygon 의 locationdata 속성에 설정된 위치를 연결하는 선의 너비를 설정하는 속성입니다. |
| `locationdata` | 지도에 표시할 GoogleMapPolygon 의 좌표를 설정하는 속성입니다. |
| `visible` | GoogleMapPolygon 을 지도에 표시할 지 여부를 설정하는 속성입니다. |

---

## fillbrushcolor

GoogleMapPolygon 의 내부를 채울 색상을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapPolygon.set_fillbrushcolor(strColor) // set
GoogleMapPolygon.fillbrushcolor // get
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
- fillbrushcolor 속성값을 설정하지 않으면 "black" 으로 적용됩니다.

- GoogleMapPolygon 오브젝트가 다각형일 때 다각형 내부가 지정된 색으로 표시됩니다.

---

## linecolor

GoogleMapPolygon 의 locationdata 속성에 설정된 위치를 연결하는 선의 색상을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapPolygon.set_linecolor(strColor) // set
GoogleMapPolygon.linecolor // get
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

- GoogleMapPolygon 오브젝트가 다각형일 때 다각형 외부의 선이 지정된 색으로 표시됩니다.

---

## linewidth

GoogleMapPolygon 의 locationdata 속성에 설정된 위치를 연결하는 선의 너비를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapPolygon.set_linewidth(nWidth) // set
GoogleMapPolygon.linewidth // get
```

**Setting Syntax**
```javascript
선의 너비를 pixel 단위의 숫자로 설정합니다.
```

---

## locationdata

지도에 표시할 GoogleMapPolygon 의 좌표를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapPolygon.set_locationdata(strData) // set
GoogleMapPolygon.locationdata // get
```

**Setting Syntax**
```javascript
GoogleMapPolygon 의 영역을 결정하기 위한 경도좌표를 설정합니다.
```

**Remark**
- 설정된 값의 첫좌표에서 다음좌표로 연속하여 선을 연결하고, 마지막좌표에서 첫좌표로 닫힌 형태의 다각형이 표시됩니다.

- locationdata 속성에 위치좌표는 2개 이상 설정할 수 있으며 갯수에 따라 다각형의 형태가 결정됩니다.

---

## visible

GoogleMapPolygon 을 지도에 표시할 지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapPolygon.set_visible(bVisible) // set
GoogleMapPolygon.visible // get
```

**Setting Syntax**
```javascript
지도에 추가된 GoogleMapPolygon 을 표시하지 않습니다.
```

**Remark**
- visible 속성값을 설정하지 않으면 "true" 로 적용됩니다.

---
