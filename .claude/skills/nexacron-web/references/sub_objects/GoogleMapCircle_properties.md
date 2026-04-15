# GoogleMapCircle Properties

| Property | Description |
|----------|-------------|
| `latitude` | GoogleMapCircle 이 표시될 위치의 위도값을 설정하는 속성입니다. |
| `longitude` | GoogleMapCircle 이 표시될 위치의 경도값을 설정하는 속성입니다. |
| `radius` | GoogleMapCircle 이 표시될 반지름 값을 설정하는 속성입니다 |
| `visible` | GoogleMapCircle 을 지도에 표시할 지 여부를 설정하는 속성입니다. |

---

## latitude

GoogleMapCircle 이 표시될 위치의 위도값을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapCircle.set_latitude(nLatitude) // set
GoogleMapCircle.latitude // get
```

**Setting Syntax**
```javascript
지도에 GoogleMapCircle 이 표시될 위치의 위도값을 숫자로 설정합니다.
```

---

## longitude

GoogleMapCircle 이 표시될 위치의 경도값을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapCircle.set_longitude(nLongitude) // set
GoogleMapCircle.longitude // get
```

**Setting Syntax**
```javascript
지도에 GoogleMapCircle 이 표시될 위치의 경도값을 숫자로 설정합니다.
```

---

## radius

GoogleMapCircle 이 표시될 반지름 값을 설정하는 속성입니다

**Syntax**
```javascript
GoogleMapCircle.set_radius(nRadius) // set
GoogleMapCircle.radius // get
```

**Setting Syntax**
```javascript
GoogleMapCircle 의 반지름 값을 미터단위의 숫자로 설정합니다.
```

**Remark**
- radius 속성값을 설정하지 않으면 100 으로 적용됩니다.

---

## visible

GoogleMapCircle 을 지도에 표시할 지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapCircle.set_visible(bVisible) // set
GoogleMapCircle.visible // get
```

**Setting Syntax**
```javascript
지도에 추가된 GoogleMapCircle 을 표시하지 않습니다.
```

**Remark**
- visible 속성값을 설정하지 않으면 "true" 로 적용됩니다.

---
