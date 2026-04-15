# Point Methods

| Method | Description |
|--------|-------------|
| `clone()` | Point 오브젝트의 속성값을 복사하여 새로운 Point 오브젝트를 반환하는 메소드입니다. |
| `copy()` | 인수로 전달된 값을 Point 오브젝트의 x, y 속성값으로 복사하는 메소드입니다. |
| `equals()` | 현재 Point 오브젝트의 속성값과 인수로 전달된 값의 일치여부를 반환하는 메소드입니다. |

---

## clone

Point 오브젝트의 속성값을 복사하여 새로운 Point 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
Point.clone()
```

**Sample**
```javascript
var objPoint1 = new nexacro.Point(10,10);

var objPoint2 = objPoint1.clone();
```

**Return**: `Object` — 현재 Point 오브젝트의 값을 복사한 새로운 Point 오브젝트를 반환합니다.

---

## copy

인수로 전달된 값을 Point 오브젝트의 x, y 속성값으로 복사하는 메소드입니다.

**Syntax**
```javascript
Point.copy( objPoint )
Point.copy( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objPoint` | Object | 현재 Point 오브젝트의 x, y 속성값에 복사될 값을 Point 오브젝트 형태로 설정합니다. |
| `nX` | Number | Point 오브젝트의 x 속성값에 복사할 값을 숫자 형태로 설정합니다. |
| `nY` | Number | Point 오브젝트의 y 속성값에 복사할 값을 숫자 형태로 설정합니다. |

**Remark**
- 인수가 Point 오브젝트일 때 속성값이 x, y 속성에 각각 복사됩니다.

---

## equals

현재 Point 오브젝트의 속성값과 인수로 전달된 값의 일치여부를 반환하는 메소드입니다.

**Syntax**
```javascript
Point.equals( objPoint )
Point.equals( arrVal )
Point.equals( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objPoint` | Object | Point 오브젝트의 x, y 속성값과 비교할 값을 Point 오브젝트 형태로 설정합니다. |
| `arrVal` | Array | Point 오브젝트의 x, y 속성값과 비교할 값을 배열 형태로 설정합니다.  x, y 속성값을 각각 첫번째, 두번째 원소와 비교합니다. |
| `nX` | Number | Point 오브젝트의 x 속성값과 비교할 값을 숫자 형태로 설정합니다. |
| `nY` | Number | Point 오브젝트의 y 속성값과 비교할 값을 숫자 형태로 설정합니다. |

**Return**: `Boolean` — Point 오브젝트에 저장된 x, y 속성값과 인수로 전달된 값이 모두 일치하면 "true" 를 반환합니다.  Point 오브젝트에 저장된 x, y 속성값과 인수로 전달된 값이 하나라도 다르면 "false" 를 반환합니다.

**Remark**
- 인수가 Point 오브젝트일 때 x, y 속성을 각각 비교합니다.

---
