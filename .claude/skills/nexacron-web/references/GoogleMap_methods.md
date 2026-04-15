# GoogleMap Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | GoogleMap 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | GoogleMap 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `addEventHandlerLookup()` | 함수를 검색하여 GoogleMap 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| `addItem()` | GoogleMap 위에 표시할 아이템을 추가하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 GoogleMap 을(를) 삭제하는 메소드입니다. |
| `findEventHandler()` | GoogleMap 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getAddress()` | GoogleMap 에서 특정 좌표(위도,경도)에 등록된 주소를 반환하는 메소드입니다. |
| `getCoordinates()` | GoogleMap 에서 특정 주소를 좌표(위도,경도)로 반환하는 메소드입니다. |
| `getEventHandler()` | GoogleMap 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetHeight()` | GoogleMap 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getOffsetWidth()` | GoogleMap 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| `getPixelBottom()` | GoogleMap 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelHeight()` | GoogleMap 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelLeft()` | GoogleMap 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelRight()` | GoogleMap 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelTop()` | GoogleMap 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `getPixelWidth()` | GoogleMap 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| `init()` | 스크립트로 GoogleMap 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| `insertEventHandler()` | GoogleMap 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `load()` | GoogleMap 에 지도를 로딩하는 메소드입니다. |
| `move()` | GoogleMap 의 위치와 크기를 변경하는 메소드입니다. |
| `removeEvent()` | GoogleMap 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | GoogleMap 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `removeEventHandlerLookup()` | GoogleMap 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| `removeItem()` | GoogleMap 위에 표시된 아이템을 제거하는 메소드입니다. |
| `resize()` | GoogleMap 의 크기를 변경하는 메소드입니다. |
| `setEventHandler()` | GoogleMap 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `setEventHandlerLookup()` | GoogleMap 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| `setOffsetBottom()` | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetHeight()` | GoogleMap 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetLeft()` | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetRight()` | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetTop()` | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| `setOffsetWidth()` | GoogleMap 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| `show()` | 스크립트로 동적 생성한 GoogleMap 을(를) 화면에 표시하는 메소드입니다. |

---

## addEvent

GoogleMap 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | GoogleMap 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- GoogleMap 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

GoogleMap 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 이벤트 발생 시 수행될 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 -1 을 반환합니다.

---

## addEventHandlerLookup

함수를 검색하여 GoogleMap 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.addEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 이벤트 발생 시 수행될 핸들러 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 핸들러 함수를 검색할 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**
- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
  검색된 함수가 있다면 이벤트에 핸들러 함수로 추가합니다.

---

## addItem

GoogleMap 위에 표시할 아이템을 추가하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.addItem( strItemID, objItem )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strItemID` | String | 각 아이템을 구분할 고유 식별자를 문자열로 설정합니다. |
| `objItem` | Object | GoogleMap 위에 표시할 아이템의 오브젝트를 설정합니다.  GoogleMapMarker, GoogleMapPolyline, GoogleMapPolygon 오브젝트를 설정할 수 있습니다. |

**Return**: `Boolean` — 파라미터를 잘못 설정하거나 중복된 ID가 존재할 경우 "false" 를 반환합니다. 그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**
- 아이템 추가에 실패하였을 경우 onerror 이벤트가 발생합니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## destroy

스크립트에서 동적으로 생성한 GoogleMap 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.destroy()
```

**Sample**
```javascript
var bSucc = this.GoogleMap00.destroy();
```

**Return**: `Boolean` — GoogleMap 이(가) 정상적으로 삭제되면 true 를 반환합니다.  GoogleMap 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 GoogleMap 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: init, show, removeChild, insertChild, addChild

---

## findEventHandler

GoogleMap 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 찾을 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 찾으려고 하는 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 찾으려고 하는 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 찾은 핸들러 함수의 인덱스를 반환합니다.  특정 이벤트에 찾으려는 핸들러 함수가 존재하지 않으면 -1 을 반환합니다.

**Remark**
- 핸들러 함수의 인덱스는 0 부터 시작합니다.

---

## getAddress

GoogleMap 에서 특정 좌표(위도,경도)에 등록된 주소를 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getAddress(nLatitude, nLongitude, [nMaxResultCount, [enumLocale]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLatitude` | Number | 주소를 검색할 위치의 위도를 숫자로 설정합니다. |
| `nLongitude` | Number | 주소를 검색할 위치의 경도를 숫자로 설정합니다. |
| `nMaxResultCount` | Number | 반환 받을 주소의 최대 갯수를 숫자로 설정합니다.  값 생략 시 "1" 로 적용됩니다. "0" 이하로 설정 시 에러가 발생합니다. |
| `enumLocale` | String | 반환 받을 주소의 언어를 설정합니다.  "ko" 설정 시 한국어로 된 주소를 반환합니다. "en" 설정 시 영어로 된 주소를 반환합니다. "ja" 설정 시 일본어로 된 주소를 반환합니다.  값 생략 시 시스템에 설정된 국가정보가 적용됩니다. |

**Return**: `Boolean` — 파라미터를 잘 못 설정하거나 0 이하로 설정 시 "false" 를 반환합니다. 그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**
- getAddress() 메소드 수행에 성공하면 onrecvsuccess 이벤트가 발생합니다.
  getAddress() 메소드 수행에 실패하면 onerror 이벤트가 발생합니다. 

- 아래 사이트를 참조하시기 바랍니다.
  "http://developer.android.com/reference/android/location/Geocoder.html#getFromLocation(double,double,int)"
  "http://developer.android.com/reference/android/location/Address.html"

---

## getCoordinates

GoogleMap 에서 특정 주소를 좌표(위도,경도)로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getCoordinates( strAddress )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strAddress` | String | 좌표(위도,경도)로 변환하려는 주소를 문자열로 설정합니다. |

**Return**: `Boolean` — 메소드 수행에 성공하면 "true" 를 반환합니다. 메소드 수행에 실패하면 "false" 를 반환합니다.

**Remark**
- 좌표(위도,경도) 변환에 성공하면 onrecvsuccess 이벤트가 발생합니다.
  좌표(위도,경도) 변환에 실패하면 onerror 이벤트가 발생합니다.

---

## getEventHandler

GoogleMap 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.  핸들러 함수의 인덱스는 0 부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.  지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.

---

## getOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getOffsetBottom();
```

**Sample**
```javascript
var nBottom = this.GoogleMap.getOffsetBottom();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 동적으로 계산합니다.

---

## getOffsetHeight

GoogleMap 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getOffsetHeight();
```

**Sample**
```javascript
var nHeight = this.GoogleMap.getOffsetHeight();
```

**Return**: `Number` — GoogleMap 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 GoogleMap 의 높이를 동적으로 계산합니다.

---

## getOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getOffsetLeft();
```

**Sample**
```javascript
var nleft = this.GoogleMap.getOffsetLeft();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 동적으로 계산합니다.

---

## getOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getOffsetRight();
```

**Sample**
```javascript
var nRight = this.GoogleMap.getOffsetRight();
```

**Return**: `Number` — 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 동적으로 계산합니다.

---

## getOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getOffsetTop();
```

**Sample**
```javascript
var nTop = this.GoogleMap.getOffsetTop();
```

**Return**: `Number` — 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**
- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 동적으로 계산합니다.

---

## getOffsetWidth

GoogleMap 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getOffsetWidth();
```

**Sample**
```javascript
var nWidth = this.GoogleMap.getOffsetWidth();
```

**Return**: `Number` — GoogleMap 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**
- 화면에 표시된 GoogleMap 의 너비를 동적으로 계산합니다.

---

## getPixelBottom

GoogleMap 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getPixelBottom();
```

**Sample**
```javascript
var nbottom = this.GoogleMap.getPixelBottom();
```

**Return**: `Number` — GoogleMap 의 bottom 속성값을 픽셀단위로 반환합니다.  bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelHeight

GoogleMap 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getPixelHeight();
```

**Sample**
```javascript
var nheight = this.GoogleMap.getPixelHeight();
```

**Return**: `Number` — GoogleMap 의 height 속성값을 픽셀단위로 반환합니다.  height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelLeft

GoogleMap 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getPixelLeft();
```

**Sample**
```javascript
var nleft = this.GoogleMap.getPixelLeft();
```

**Return**: `Number` — GoogleMap 의 left 속성값을 픽셀단위로 반환합니다.  left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelRight

GoogleMap 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getPixelRight();
```

**Sample**
```javascript
var nright = this.GoogleMap.getPixelRight();
```

**Return**: `Number` — GoogleMap 의 right 속성값을 픽셀단위로 반환합니다.  right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelTop

GoogleMap 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getPixelTop();
```

**Sample**
```javascript
var ntop = this.GoogleMap.getPixelTop();
```

**Return**: `Number` — GoogleMap 의 top 속성값을 픽셀단위로 반환합니다.  top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## getPixelWidth

GoogleMap 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.getPixelWidth();
```

**Sample**
```javascript
var nwidth = this.GoogleMap.getPixelWidth();
```

**Return**: `Number` — GoogleMap 의 width 속성값을 픽셀단위로 반환합니다.  width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**
- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.

---

## init

스크립트로 GoogleMap 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | GoogleMap 의 ID를 문자열로 설정합니다. |
| `vLeft` | String, Number | GoogleMap 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 GoogleMap 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 left 가 결정됩니다. |
| `vTop` | String, Number | GoogleMap 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 GoogleMap 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 top 이 결정됩니다. |
| `vWidth` | String, Number | GoogleMap 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GoogleMap 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 width 가 결정됩니다. |
| `vHeight` | String, Number | GoogleMap 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GoogleMap 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 height 가 결정됩니다. |
| `vRight` | String, Number | GoogleMap 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 GoogleMap 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 right 가 결정됩니다. |
| `vBottom` | String, Number | GoogleMap 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 GoogleMap 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 bottom 이 결정됩니다. |
| `vMinWidth` | String, Number | GoogleMap 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxWidth` | String, Number | GoogleMap 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.  vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| `vMinHeight` | String, Number | GoogleMap 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| `vMaxHeight` | String, Number | GoogleMap 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.  vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 GoogleMap 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 GoogleMap 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: destroy, show, removeChild, insertChild, addChild

---

## insertEventHandler

GoogleMap 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 삽입될 이벤트의 ID 를 설정합니다. |
| `nIndex` | Number | 핸들러 함수가 삽입될 위치를 인덱스로 설정합니다.  -1 값 설정 시 마지막에 추가됩니다. 이벤트에 설정된 핸들러 함수의 갯수보다 큰 값을 설정한 경우 마지막에 추가됩니다. NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 설정됩니다. |
| `objFunc` | Object | 이벤트 발생 시 수행될 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에 삽입된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.  핸들러 함수가 정상적으로 삽입되지 않은 경우에는 -1 을 반환합니다.

**Remark**
- 첫번째 핸들러 함수의 인덱스는 0 입니다.

---

## load

GoogleMap 에 지도를 로딩하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.load( [bUseSensor[, nLatitude, nLongitude[, constViewMode[, nZoomLevel]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bUseSensor` | Boolean | GPS 사용 여부를 설정합니다.  true 설정 시 GPS 정보를 기준으로 로딩될 지도의 위치를 결정합니다. false 설정 시 GPS 정보를 사용하지 않습니다.  값 생략 시 false 로 적용됩니다.  * 모바일 기기에서 GPS 사용이 허가되지 않은 경우에 true 를 설정하면 onerror 이벤트가 발생합니다.    모바일 기기에서 GPS 사용이 허가된 상태일때 true 를 설정하면 사용허가 확인창이 1회 이상 표시될 수 있습니다. |
| `nLatitude` | Number | 로딩될 지도의 위치정보 중 위도를 숫자로 설정합니다.  값 생략 시 0 으로 적용됩니다. |
| `nLongitude` | Number | 로딩될 지도의 위치정보 중 경도를 숫자로 설정합니다.  값 생략 시 0 으로 적용됩니다. |
| `constViewMode` | Number | 로딩되는 지도의 모드를 설정합니다.  0 설정 시 일반 Google Map 형태로 표시합니다. 1 설정 시 위성 이미지를 표시합니다. 2 설정 시 위성 이미지를 표시하고 주요거리의 투명레이어를 함께 표시합니다. 3 설정 시 지형 및 초목과 같은 물리적인 지형지물과 주요거리 투명레이어를 함께 표시합니다.  값 생략 시 0 으로 적용됩니다. |
| `nZoomLevel` | Number | 로딩될 지도의 Zoom Level 을 0 이상의 정수로 설정합니다. |

**Return**: `Boolean` — 파라미터를 잘 못 설정할 경우 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- 지도가 정상적으로 로딩되면 onload 이벤트가 발생합니다.
   지도가 정상적으로 로딩되지 않으면 onerror 이벤트가 발생합니다.

- GoogleMap 에 지도가 로딩되어 있을 때 load() 메소드를 수행하면 지도를 재로딩합니다.

- 지도 로딩 후 중앙좌표(centerlocation), 지도표시모드(viewmode), 줌레벨(zoomlevel) 속성값이 설정됩니다.

- 표시되는 지역에 따라 지도표시모드와 줌레벨의 범위가 달라지며 해당 지역에서 허용되지 않는 값을 설정할 경우 지도가 정상적으로 표시되지 않을 수 있습니다. 
  지역에 따른 GoogleMap 의 최대 줌값은 아래의 샘플 사이트에서 확인이 가능합니다.
  "https://google-developers.appspot.com/maps/documentation/javascript/examples/control-positioning?hl=ko"

- Android NRE 에서 GoogleMap 을 사용하려면 "build.gradle" 에 아래와 같이 정의하여야 합니다.
  implementation 'com.google.android.gms:play-services-maps:16.0.0'
  implementation 'com.google.android.gms:play-services-location:16.0.0'

---

## move

GoogleMap 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vLeft` | String, Number | GoogleMap 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 GoogleMap 의 left 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 left 가 결정됩니다. |
| `vTop` | String, Number | GoogleMap 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 GoogleMap 의 top 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 top 이 결정됩니다. |
| `vWidth` | String, Number | GoogleMap 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GoogleMap 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 width 가 결정됩니다. |
| `vHeight` | String, Number | GoogleMap 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GoogleMap 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 height 가 결정됩니다. |
| `vRight` | String, Number | GoogleMap 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 GoogleMap 의 right 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 right 가 결정됩니다. |
| `vBottom` | String, Number | GoogleMap 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.  vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 GoogleMap 의 bottom 이 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 bottom 이 결정됩니다. |

**Remark**
- 인수값에 기준 컴포넌트를 포함하면 GoogleMap 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 GoogleMap 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## removeEvent

GoogleMap 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | GoogleMap 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- GoogleMap 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- GoogleMap 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

GoogleMap 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 제거할 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 1 을 반환합니다.  핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**
- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## removeEventHandlerLookup

GoogleMap 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `strFunc` | String | 제거할 핸들러 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 1 을 반환합니다.  핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**
- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## removeItem

GoogleMap 위에 표시된 아이템을 제거하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.removeItem(strItemID)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strItemID` | String | 제거할 아이템의 ID 를 설정합니다. |

**Return**: `Boolean` — 파라미터를 잘 못 설정할 경우 "false" 를 반환합니다. 그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**
- 아이템 제거에 실패했을 경우 onerror 이벤트가 발생합니다.

---

## resize

GoogleMap 의 크기를 변경하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.resize( vWidth, vHeight )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `vWidth` | String, Number | GoogleMap 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GoogleMap 의 width 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 width 가 결정됩니다. |
| `vHeight` | String, Number | GoogleMap 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다. 음수값을 설정할 수 없습니다.  * 값에 기준 컴포넌트를 포함하여 설정했을 때 : pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GoogleMap 의 height 가 결정됩니다. 비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 height 가 결정됩니다. |

**Remark**
- GoogleMap 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 GoogleMap 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- GoogleMap 의 left 속성값이 null 이면 resize() 메소드 실행 후 GoogleMap 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- GoogleMap 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 GoogleMap 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- GoogleMap 의 top 속성값이 null 이면 resize() 메소드 실행 후 GoogleMap 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 GoogleMap 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 GoogleMap 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

---

## setEventHandler

GoogleMap 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 기존 핸들러 함수를 대체할 함수를 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.  첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**
- 인덱스가 0 번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.

---

## setEventHandlerLookup

GoogleMap 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `strFunc` | Object | 기존 핸들러 함수를 대체할 함수의 이름을 문자열로 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수를 검색할 영역을 설정합니다. 해당 영역에 함수가 정의되지 않았다면 상위 영역으로 올라가며 검색을 합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.  첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**
- 인덱스가 0 번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.

---

## setOffsetBottom

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.setOffsetBottom( nBottom );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nBottom` | Number | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetHeight

GoogleMap 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.setOffsetHeight( nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nHeight` | Number | GoogleMap 의 높이를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.

---

## setOffsetLeft

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.setOffsetLeft( nLeft );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLeft` | Number | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위의 숫자로 설정합니다 |

**Remark**
- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > GoogleMap 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.

---

## setOffsetRight

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.setOffsetRight( nRight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRight` | Number | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## setOffsetTop

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.setOffsetTop( nTop );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTop` | Number | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > GoogleMap 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.

---

## setOffsetWidth

GoogleMap 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.setOffsetWidth( nWidth );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nWidth` | Number | GoogleMap 의 너비를 픽셀단위의 숫자로 설정합니다. |

**Remark**
- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.

---

## show

스크립트로 동적 생성한 GoogleMap 을(를) 화면에 표시하는 메소드입니다.

**Syntax**
```javascript
GoogleMap.show()
```

**Sample**
```javascript
this.GoogleMap00.show();
```

**Remark**
- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**: destroy, init, removeChild, insertChild, addChild

---
