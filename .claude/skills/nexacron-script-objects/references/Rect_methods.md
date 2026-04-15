# Rect Methods

| Method | Description |
|--------|-------------|
| `clear()` | Rect 오브젝트의 모든 속성값을 0 으로 초기화하는 메소드입니다. |
| `clone()` | Rect 오브젝트의 속성값을 복사하여 새로운 Rect 오브젝트를 반환하는 메소드입니다. |
| `copy()` | 인수로 전달된 Rect 오브젝트의 속성값을 현재 Rect 오브젝트의 속성값으로 복사하는 메소드입니다. |
| `equals()` | 현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 속성값 일치여부를 반환하는 메소드입니다. |
| `getBottom()` | Rect 오브젝트의 하단 좌표값을 반환하는 메소드입니다. |
| `getRight()` | Rect 오브젝트의 우측 좌표값을 반환하는 메소드입니다. |
| `isSameSize()` | 현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 넓이와 높이가 일치하는지 반환하는 메소드입니다. |

---

## clear

Rect 오브젝트의 모든 속성값을 0 으로 초기화하는 메소드입니다.

**Sample**
```javascript
var objRect = new nexacro.Rect( 10,10,100,100 );

objRect.clear()
```

**Remark**
- Rect 오브젝트는 left, top, width, height 속성을 갖습니다.

---

## clone

Rect 오브젝트의 속성값을 복사하여 새로운 Rect 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
Rect.clone()
```

**Sample**
```javascript
var objRect1 = new nexacro.Rect(10,10,100,100);

var objRect2 = objRect1.clone();
```

**Return**: `Object` — 현재 Rect 오브젝트의 값을 복사한 새로운 Rect 오브젝트를 반환합니다.

---

## copy

인수로 전달된 Rect 오브젝트의 속성값을 현재 Rect 오브젝트의 속성값으로 복사하는 메소드입니다.

**Syntax**
```javascript
Rect.copy( objRect )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objRect` | Object | 현재 Rect 오브젝트의 속성에 복사될 값을 Rect 오브젝트 형태로 설정합니다. |

**Remark**
- 인수로 전달된 Rect 오브젝트의 속성값이 left, top, width, height 속성에 각각 복사됩니다.

---

## equals

현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 속성값 일치여부를 반환하는 메소드입니다.

**Syntax**
```javascript
Rect.equals( objRect )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objRect` | Object | 현재 Rect 오브젝트의 속성값과 비교할 값을 Rect 오브젝트 형태로 설정합니다. |

**Return**: `Boolean` — 현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 속성값이 모두 일치하면 "true" 를 반환합니다.  현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 속성값이 하나라도 다르면 "false" 를 반환합니다.

**Remark**
- Rect 오브젝트의 left, top, width, height 속성을 각각 비교합니다.

---

## getBottom

Rect 오브젝트의 하단 좌표값을 반환하는 메소드입니다.

**Syntax**
```javascript
Rect.getBottom()
```

**Sample**
```javascript
var objRect1 = new nexacro.Rect( 10,10,100,100 );

alert(objRect1.getBottom());
```

**Return**: `Number` — Rect 오브젝트의 하단 좌표값을 pixel 단위의 정수로 반환합니다.

---

## getRight

Rect 오브젝트의 우측 좌표값을 반환하는 메소드입니다.

**Syntax**
```javascript
Rect.getRight()
```

**Sample**
```javascript
var objRect1 = new nexacro.Rect( 10,10,100,100 );

alert(objRect1.getRight());
```

**Return**: `Number` — Rect 오브젝트의 우측 좌표값을 pixel 단위의 정수로 반환합니다.

---

## isSameSize

현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 넓이와 높이가 일치하는지 반환하는 메소드입니다.

**Syntax**
```javascript
Rect.isSameSize( objRect )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objRect` | Object | 현재 Rect 오브젝트의 넓이, 높이와 비교할 Rect 오브젝트를 설정합니다. |

**Return**: `Boolean` — 현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 넓이와 높이가 일치하면 "true" 를 반환합니다.  현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 넓이 또는 높이가 다르면 "false" 를 반환합니다.

**Remark**
- Rect 오브젝트의 width, height 속성을 각각 비교합니다.

---
