# GraphicsEllipse Methods

| Method | Description |
|--------|-------------|
| `destroy()` | GraphicsEllipse 를 메모리에서 완전히 삭제하는 메소드입니다. |
| `getBoundRect()` | GraphicsEllipse 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getNextSibling()` | GraphicsEllipse 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| `getOffsetBoundRect()` | GraphicsEllipse 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getOffsetRect()` | GraphicsEllipse 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| `getOffsetRegion()` | GraphicsEllipse 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `getPreviousSibling()` | GraphicsEllipse 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| `getRect()` | GraphicsEllipse 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| `getRegion()` | GraphicsEllipse 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `isEmptyRect()` | GraphicsEllipse 에 영역이 설정 되었는지 여부를 반환하는 메소드입니다. |
| `isHitTest()` | 인수로 전달된 좌표위치가 GraphicsEllipse 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `rotate()` | GraphicsEllipse 에 회전효과를 적용하는 메소드입니다. |
| `scale()` | GraphicsEllipse 에 확대/축소 효과를 적용하는 메소드입니다. |
| `setClipRect()` | GraphicsEllipse 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| `setTransform()` | GraphicsEllipse 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| `shear()` | GraphicsEllipse 에 비틀기 효과를 적용하는 메소드입니다. |
| `toString()` | GraphicsEllipse 의 타입을 문자열로 반환하는 메소드입니다. |
| `transform()` | GraphicsEllipse 에 Transform 관련 효과를 적용하는 메소드입니다. |
| `translate()` | GraphicsEllipse 의 위치가 이동되는 효과를 적용하는 메소드입니다. |

---

## destroy

GraphicsEllipse 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.destroy()
```

**Return**: `Boolean` — GraphicsEllipse 가 정상적으로 삭제되면 true 를 반환합니다.  GraphicsEllipse 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- destroy() 메소드로 GraphicsEllipse 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsEllipse 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.

---

## getBoundRect

GraphicsEllipse 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.getBoundRect( );
```

**Sample**
```javascript
var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getBoundRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다. strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getBoundRect() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getNextSibling

GraphicsEllipse 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.getNextSibling()
```

**Sample**
```javascript
var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objNext = objGraphicsEllipse.getNextSibling();

trace( objNext.toString() );
```

**Return**: `Object` — 부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.  다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**
- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.

---

## getOffsetBoundRect

GraphicsEllipse 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.getOffsetBoundRect( );
```

**Sample**
```javascript
var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsEllipse = objGroup.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getOffsetBoundRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — 부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다. strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getOffsetBoundRect() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getOffsetRect

GraphicsEllipse 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.getOffsetRect( );
```

**Sample**
```javascript
var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsEllipse = objGroup.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getOffsetRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — 부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsEllipse 오브젝트의 실제 영역이 반환됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getOffsetRect() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRect() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getOffsetRegion

GraphicsEllipse 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.getOffsetRegion( );
```

**Sample**
```javascript
var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsEllipse = objGroup.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getOffsetRegion();

trace( "left : " + objRect.left );
```

**Return**: `Object` — 부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getOffsetRegion() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getPreviousSibling

GraphicsEllipse 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.getPreviousSibling()
```

**Sample**
```javascript
var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objPrev = objGraphicsEllipse.getPreviousSibling();

trace( objPrev.toString() );
```

**Return**: `Object` — 부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.  이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**
- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.

---

## getRect

GraphicsEllipse 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.getRect( );
```

**Sample**
```javascript
var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsEllipse 오브젝트의 실제 영역이 반환됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getRect() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getRegion

GraphicsEllipse 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.getRegion( );
```

**Sample**
```javascript
var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getRegion();

trace( "left : " + objRect.left );
```

**Return**: `Object` — Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getRegion() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## isEmptyRect

GraphicsEllipse 에 영역이 설정 되었는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.isEmptyRect()
```

**Sample**
```javascript
var objGEllipse = new nexacro.GraphicsEllipse();

var bResult = objGEllipse.isEmptyRect() ;
```

**Return**: `Boolean` — GraphicsEllipse 에 영역이 설정되어 있지 않으면 true 를 반환합니다.  GraphicsEllipse 에 영역이 설정되어 있으면 false 를 반환합니다.

**Remark**
- GraphicsEllipse 의 height, width 속성에 모두 0 보다 큰 값이 설정되어 있으면 영역이 설정된 것으로 판단합니다.

---

## isHitTest

인수로 전달된 좌표위치가 GraphicsEllipse 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.isHitTest( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | 확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |
| `nY` | Number | 확인할 위치의 y 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |

**Return**: `Boolean` — 인수로 전달된 좌표위치가 GraphicsEllipse 영역에 포함되면 true 를 반환합니다.  인수로 전달된 좌표위치가 GraphicsEllipse 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**
- 일반적으로 GraphicsEllipse 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsEllipse 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.

---

## rotate

GraphicsEllipse 에 회전효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.rotate( nAngle [, nCenterX, nCenterY] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nAngle` | Number | 현재 모습에서 회전될 각도를 숫자로 설정합니다.  양수로 설정 시 시계방향으로 회전합니다. 음수로 설정 시 반시계방향으로 회전합니다. |
| `nCenterX` | Number | 회전의 중심이 되는 x 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |
| `nCenterY` | Number | 회전의 중심이 되는 y 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |

**Remark**
- rotate() 메소드 수행 시 Position 과 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 rotate() 메소드가 적용된 영역정보를 반환합니다.

- rotate() 메소드는 GraphicsEllipse 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.

---

## scale

GraphicsEllipse 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nScaleX` | Number | 현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsEllipse 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsEllipse 가 축소됩니다. |
| `nScaleY` | Number | 현재 크기에서 확대/축소 될 세로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsEllipse 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsEllipse 가 축소됩니다. |
| `nCenterX` | Number | 확대/축소의 중심이 되는 x 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |
| `nCenterY` | Number | 확대/축소의 중심이 되는 y 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |

**Remark**
- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsEllipse 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.

---

## setClipRect

GraphicsEllipse 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | Clipping 할 영역의 x 좌표를 숫자로 설정합니다.  설정값은 GraphicsEllipse 의 x 속성값 위치를 0 으로 가정하고 처리됩니다. |
| `nY` | Number | Clipping 할 영역의 y 좌표를 숫자로 설정합니다.  설정값은 GraphicsEllipse 의 y 속성값 위치를 0 으로 가정하고 처리됩니다. |
| `nWidth` | Number | Clipping 할 영역의 너비를 숫자로 설정합니다.  설정값은 nX 파라미터값을 기준으로 처리됩니다. |
| `nHeight` | Number | Clipping 할 영역의 높이를 숫자로 설정합니다.  설정값은 nY 파라미터값을 기준으로 처리됩니다. |

**Remark**
- GraphicsEllipse 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsEllipse 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsEllipse 의 Position 관련 속성값은 변경되지 않습니다.

---

## setTransform

GraphicsEllipse 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.setTransform( strMethod );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMethod` | String | GraphicsEllipse 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다. translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다. null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다. |

**Remark**
- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsEllipse 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.

---

## shear

GraphicsEllipse 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nRadianX` | Number | 현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다. |
| `nRadianY` | Number | 현재 모습에서 y 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다. |
| `nCenterX` | Number | 비틀기의 중심이 되는 x 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |
| `nCenterY` | Number | 비틀기의 중심이 되는 y 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |

**Remark**
- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsEllipse 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.

---

## toString

GraphicsEllipse 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.toString();
```

**Return**: `String` — 일반적으로 "[object GraphicsEllipse]" 형태의 문자열을 반환합니다.

---

## transform

GraphicsEllipse 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nScaleX` | Number | 현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsEllipse 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsEllipse 가 축소됩니다. |
| `nShearX` | Number | 현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다. |
| `nShearY` | Number | 현재 모습에서 y 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다. |
| `nScaleY` | Number | 현재 크기에서 확대/축소 될 세로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsEllipse 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsEllipse 가 축소됩니다. |
| `nTransX` | Number | 현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |
| `nTransY` | Number | 현재 위치에서 y 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |

**Remark**
- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsEllipse 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.

---

## translate

GraphicsEllipse 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsEllipse.translate( nTransX, nTransY );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTransX` | Number | 현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |
| `nTransY` | Number | 현재 위치에서 y 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |

**Remark**
- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsEllipse 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.

---
