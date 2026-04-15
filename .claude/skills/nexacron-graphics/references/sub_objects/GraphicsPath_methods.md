# GraphicsPath Methods

| Method | Description |
|--------|-------------|
| `arcTo()` | 현재위치에서 인수로 전달된 위치까지 타원호 경로를 GraphicsPath 에 추가하는 메소드입니다. |
| `bezierCurveTo()` | 현재위치에서 인수로 전달된 위치까지 cubic Bezier 곡선경로를 GraphicsPath 에 추가하는 메소드입니다. |
| `clear()` | GraphicsPath 에 설정된 경로 데이터를 모두 삭제하는 메소드입니다. |
| `closePath()` | GraphicsPath 에 설정된 경로의 끝점과 시작점을 직선으로 연결하는 메소드입니다. |
| `destroy()` | GraphicsPath 를 메모리에서 완전히 삭제하는 메소드입니다. |
| `getBoundRect()` | GraphicsPath 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getNextSibling()` | GraphicsPath 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| `getOffsetBoundRect()` | GraphicsPath 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getOffsetRect()` | GraphicsPath 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getOffsetRegion()` | GraphicsPath 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `getPathData()` | GraphicsPath 에 설정된 경로 데이터를 SVG 형식의 문자열로 반환하는 메소드입니다. |
| `getPreviousSibling()` | GraphicsPath 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| `getRect()` | GraphicsPath 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| `getRegion()` | GraphicsPath 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `hasSegments()` | GraphicsPath 에 경로 데이터가 설정되어 있는지 여부를 반환하는 메소드입니다. |
| `isHitTest()` | 인수로 전달된 좌표위치가 GraphicsPath 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `isPointInPath()` | 특정 좌표위치가 GraphicsPath 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `lineTo()` | 현재위치에서 인수로 전달된 위치까지 직선 경로를 GraphicsPath 에 추가하는 메소드입니다. |
| `moveBy()` | GraphicsPath 의 시작위치를 이동하는 메소드입니다. |
| `moveTo()` | GraphicsPath 의 시작위치를 설정하는 메소드입니다. |
| `quadraticCurveTo()` | 현재위치에서 인수로 전달된 위치까지 quadratic Bezier 곡선 경로를 GraphicsPath 에 추가하는 메소드입니다. |
| `rotate()` | GraphicsPath 에 회전효과를 적용하는 메소드입니다. |
| `scale()` | GraphicsPath 에 확대/축소 효과를 적용하는 메소드입니다. |
| `setClipRect()` | GraphicsPath 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| `setPathData()` | GraphicsPath 에 SVG 형식으로 경로 데이터를 설정하는 메소드입니다. |
| `setTransform()` | GraphicsPath 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| `shear()` | GraphicsPath 에 비틀기 효과를 적용하는 메소드입니다. |
| `toString()` | GraphicsPath 의 타입을 문자열로 반환하는 메소드입니다. |
| `transform()` | GraphicsPath 에 Transform 관련 효과를 적용하는 메소드입니다. |
| `translate()` | GraphicsPath 의 위치가 이동되는 효과를 적용하는 메소드입니다. |

---

## arcTo

현재위치에서 인수로 전달된 위치까지 타원호 경로를 GraphicsPath 에 추가하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.arcTo(  nX, nY, nRadiusX, nRadiusY, nRotation, bClockwise, bLarge )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | 추가할 타원호 경로의 x 좌표 위치를 pixel 단위의 숫자로 설정합니다.  설정값은 GrpahicsPath 의 x 속성값을 기준으로 처리됩니다. |
| `nY` | Number | 추가할 타원호 경로의 y 좌표 위치를 pixel 단위의 숫자로 설정합니다.  설정값은 GrpahicsPath 의 y 속성값을 기준으로 처리됩니다. |
| `nRadiusX` | Number | 표시할 타원호의 가로 반지름을 pixel 단위의 숫자로 설정합니다. |
| `nRadiusY` | Number | 표시할 타원호의 세로 반지름을 pixel 단위의 숫자로 설정합니다. |
| `nRotation` | Number | 표시할 타원호의 x 축이 회전할 각도를 설정합니다.  180 도를 설정하면 0 도와 같은 모양으로 표시됩니다. |
| `bClockwise` | Boolean | 타원호 경로의 시작점과 끝점을 기준으로 표시될 타원호를 설정합니다.  true 또는 1 설정 시 현재위치에서 nX, nY 까지의 직선을 기준으로 시계방향에 위치한 타원호를 표시합니다. false 또는 0 설정 시 현재위치에서 nX, nY 까지의 직선을 기준으로 반시계방향에 위치한 타원호를 표시합니다. |
| `bLarge` | Boolean | 타원호 경로의 시작점과 끝점을 기준으로 표시될 타원호를 설정합니다.  true 또는 1 설정 시 bClockwise 방향에 위치한 타원호 중 큰 타원호를 표시합니다. false 또는 0 설정 시 bClockwise 방향에 위치한 타원호 중 작은 타원호를 표시합니다. |

**Remark**
- arcTo() 메소드 실행 후 현재위치가 nX, nY 로 변경됩니다.

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

- 타원호 경로는 아래와 같은 절차에 의해 결정됩니다.
  1. 타원호는 현재위치에서 시작하여 nX, nY 위치에서 끝납니다.
  2. 타원은 nRadiusX, nRadiusY 값을 가로,세로 반지름으로 갖습니다.
  3. 타원의 x 축은 nRotation 값만큼 회전합니다.
  4. 1~3번 조건에 의해 2개 또는 4개의 타원호 경로가 존재하게 됩니다.
  5. bClockwise 와 bLarge 값에 의해 4번의 타원호 중 1개의 타원호가 경로로 결정됩니다.

**See Also**: bezierCurveTo, lineTo, moveTo, quadraticCurveTo, setPathData

---

## bezierCurveTo

현재위치에서 인수로 전달된 위치까지 cubic Bezier 곡선경로를 GraphicsPath 에 추가하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.bezierCurveTo( nCBeginX, nCBeginY, nCEndX, nCEndY, nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCBeginX` | Number | cubic Bezier 곡선을 결정할 컨트롤 포인트의 시작점 x 좌표 위치를 pixel 단위의 숫자로 설정합니다. |
| `nCBeginY` | Number | cubic Bezier 곡선을 결정할 컨트롤 포인트의 시작점 y 좌표 위치를 pixel 단위의 숫자로 설정합니다. |
| `nCEndX` | Number | cubic Bezier 곡선을 결정할 컨트롤 포인트의 끝점 x 좌표 위치를 pixel 단위의 숫자로 설정합니다. |
| `nCEndY` | Number | cubic Bezier 곡선을 결정할 컨트롤 포인트의 끝점 y 좌표 위치를 pixel 단위의 숫자로 설정합니다. |
| `nX` | Number | 추가할 cubic Bezier 곡선의 x 좌표 위치를 pixel 단위의 숫자로 설정합니다. |
| `nY` | Number | 추가할 cubic Bezier 곡선의 y 좌표 위치를 pixel 단위의 숫자로 설정합니다. |

**Remark**
- cubicCurveTo() 메소드 실행 후 현재위치가 nX, nY 로 변경됩니다.

- 인수로 전달된 좌표는 GrpahicsPath 의 x, y 속성값을 기준으로 처리됩니다.

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

**See Also**: arcTo, lineTo, moveTo, quadraticCurveTo, setPathData

---

## clear

GraphicsPath 에 설정된 경로 데이터를 모두 삭제하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.clear()
```

---

## closePath

GraphicsPath 에 설정된 경로의 끝점과 시작점을 직선으로 연결하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.closePath()
```

**Sample**
```javascript
var objGPath = new nexacro.GraphicsPath();

objGPath.setPathData("M200,40 L100,160 L300,160");
objGPath.closePath();
```

**Remark**
- 끝점과 시작점을 연결하여 닫힌경로로 만드는 메소드입니다.

- GraphicPath 에 경로 데이터가 없을 경우 closePath() 메소드는 수행되지 않습니다.

---

## destroy

GraphicsPath 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.destroy()
```

**Return**: `Boolean` — GraphicsPath 가 정상적으로 삭제되면 true 를 반환합니다.  GraphicsPath 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- destroy() 메소드로 GraphicsPath 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsPath 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.

---

## getBoundRect

GraphicsPath 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.getBoundRect( );
```

**Sample**
```javascript
var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getBoundRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다. strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getBoundRect() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getNextSibling

GraphicsPath 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.getNextSibling()
```

**Sample**
```javascript
var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objNext = objGraphicsPath.getNextSibling();

trace( objNext.toString() );
```

**Return**: `Object` — 부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.  다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**
- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.

---

## getOffsetBoundRect

GraphicsPath 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.getOffsetBoundRect( );
```

**Sample**
```javascript
var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPath = objGroup.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getOffsetBoundRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — 부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다. strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getOffsetBoundRect() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getOffsetRect

GraphicsPath 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.getOffsetBoundRect( );
```

**Sample**
```javascript
var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPath = objGroup.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getOffsetBoundRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — 부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다. strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getOffsetBoundRect() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getOffsetRegion

GraphicsPath 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.getOffsetRegion( );
```

**Sample**
```javascript
var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPath = objGroup.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getOffsetRegion();

trace( "left : " + objRect.left );
```

**Return**: `Object` — 부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsPath 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getOffsetRegion() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getPathData

GraphicsPath 에 설정된 경로 데이터를 SVG 형식의 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.getPathData()
```

**Return**: `String` — 경로 데이터를 SVG 형식의 문자열로 반환합니다.

**Remark**
- 경로 데이터는 공백문자로 구분됩니다.

**See Also**: setPathData

---

## getPreviousSibling

GraphicsPath 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.getPreviousSibling()
```

**Sample**
```javascript
var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objPrev = objGraphicsPath.getPreviousSibling();

trace( objPrev.toString() );
```

**Return**: `Object` — 부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.  이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**
- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.

---

## getRect

GraphicsPath 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.getRect( );
```

**Sample**
```javascript
var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsPath 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsPath 오브젝트의 실제 영역이 반환됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getRect() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getRegion

GraphicsPath 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.getRegion( );
```

**Sample**
```javascript
var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getRegion();

trace( "left : " + objRect.left );
```

**Return**: `Object` — Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsPath 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getRegion() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## hasSegments

GraphicsPath 에 경로 데이터가 설정되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.hasSegments()
```

**Sample**
```javascript
var objGPath = new nexacro.GraphicsPath();

objGPath.setPathData("M 15,0 L 0,30 L 30,30Z");
var bResult = objGPath.hasSegments() ;
```

**Return**: `Boolean` — GraphicsPath 에 경로 데이터가 설정되어 있으면 true 를 반환합니다.  GraphicsPath 에 경로 데이터가 설정되어 있지 않으면 false 를 반환합니다.

**Remark**
- moveTo(), lineTo(), arcTo() 와 같은 메소드를 사용하여 경로를 추가합니다.

---

## isHitTest

인수로 전달된 좌표위치가 GraphicsPath 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.isHitTest( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | 확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |
| `nY` | Number | 확인할 위치의 y 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |

**Return**: `Boolean` — 인수로 전달된 좌표위치가 GraphicsPath 영역에 포함되면 true 를 반환합니다.  인수로 전달된 좌표위치가 GraphicsPath 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**
- 일반적으로 GraphicsPath 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsPath 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.

---

## isPointInPath

특정 좌표위치가 GraphicsPath 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.isPointInPath( objPoint [, nTolerance] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objPoint` | Object | GraphicsPath 영역에 포함되는지 확인할 좌표값을 nexacro.Point 오브젝트로 설정합니다.  설정한 좌표값은 Graphics 컴포넌트를 기준으로 처리됩니다. |
| `nTolerance` | Number | objPoint 위치가 GraphicsPath 영역에 포함되었다고 판단할 최대거리를 숫자로 설정합니다.  objPoint 위치와 GraphicsPath 영역의 거리가 설정값보다 작으면 포함되었다고 판단합니다. |

**Return**: `Boolean` — objPoint 좌표위치가 GraphicsPath 영역에 포함되면 true 를 반환합니다.  objPoint 좌표위치가 GraphicsPath 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**
- GraphicsPath 의 영역은 경로를 모두 포함하는 최소 크기의 사각형입니다.

---

## lineTo

현재위치에서 인수로 전달된 위치까지 직선 경로를 GraphicsPath 에 추가하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.lineTo( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | 추가할 직선경로의 x 좌표 위치를 pixel 단위의 숫자로 설정합니다.  설정값은 GrpahicsPath 의 x 속성값을 기준으로 처리됩니다. |
| `nY` | Number | 추가할 직선경로의 y 좌표 위치를 pixel 단위의 숫자로 설정합니다.  설정값은 GrpahicsPath 의 y 속성값을 기준으로 처리됩니다. |

**Remark**
- lineTo() 메소드 실행 후 현재위치가 nX, nY 로 변경됩니다.

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

**See Also**: arcTo, bezierCurveTo, moveTo, quadraticCurveTo, setPathData

---

## moveBy

GraphicsPath 의 시작위치를 이동하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.moveBy( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | 현재 시작위치에서 x 좌표가 이동할 거리를 pixel 단위의 숫자로 설정합니다.  설정값은 현재 시작위치의 x 좌표값을 기준으로 처리됩니다. |
| `nY` | Number | 현재 시작위치에서 y 좌표가 이동할 거리를 pixel 단위의 숫자로 설정합니다.  설정값은 현재 시작위치의 y 좌표값을 기준으로 처리됩니다. |

**Remark**
- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

- moveBy() 메소드는 경로의 시작점을 설정할 때 외에는 무시됩니다.

**See Also**: arcTo, bezierCurveTo, lineTo, quadraticCurveTo, setPathData

---

## moveTo

GraphicsPath 의 시작위치를 설정하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.moveTo( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | GraphicsPath 의 시작위치 중 x 좌표 위치를 pixel 단위의 숫자로 설정합니다.  설정값은 GrpahicsPath 의 x 속성값을 기준으로 처리됩니다. |
| `nY` | Number | GraphicsPath 의 시작위치 중 y 좌표 위치를 pixel 단위의 숫자로 설정합니다.  설정값은 GrpahicsPath 의 y 속성값을 기준으로 처리됩니다. |

**Remark**
- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

- moveTo() 메소드는 경로의 시작점을 설정할 때 외에는 무시됩니다.

**See Also**: arcTo, bezierCurveTo, lineTo, quadraticCurveTo, setPathData

---

## quadraticCurveTo

현재위치에서 인수로 전달된 위치까지 quadratic Bezier 곡선 경로를 GraphicsPath 에 추가하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.quadraticCurveTo( nControlX, nControlY, nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nControlX` | Number | quadratic Bezier 곡선을 결정할 컨트롤 포인트의 x 좌표 위치를 pixel 단위의 숫자로 설정합니다. |
| `nControlY` | Number | quadratic Bezier 곡선을 결정할 컨트롤 포인트의 y 좌표 위치를 pixel 단위의 숫자로 설정합니다. |
| `nX` | Number | 추가할 quadratic Bezier 곡선의 x 좌표 위치를 pixel 단위의 숫자로 설정합니다. |
| `nY` | Number | 추가할 quadratic Bezier 곡선의 y 좌표 위치를 pixel 단위의 숫자로 설정합니다. |

**Remark**
- quadraticCurveTo() 메소드 실행 후 현재위치가 nX, nY 로 변경됩니다.

- 인수로 전달된 좌표는 GrpahicsPath 의 x, y 속성값을 기준으로 처리됩니다.

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

**See Also**: arcTo, bezierCurveTo, lineTo, moveTo, setPathData

---

## rotate

GraphicsPath 에 회전효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.rotate( nAngle [, nCenterX, nCenterY] );
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

- rotate() 메소드는 GraphicsPath 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.

---

## scale

GraphicsPath 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nScaleX` | Number | 현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsPath 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsPath 가 축소됩니다. |
| `nScaleY` | Number | 현재 크기에서 확대/축소 될 세로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsPath 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsPath 가 축소됩니다. |
| `nCenterX` | Number | 확대/축소의 중심이 되는 x 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |
| `nCenterY` | Number | 확대/축소의 중심이 되는 y 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |

**Remark**
- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsPath 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.

---

## setClipRect

GraphicsPath 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | Clipping 할 영역의 x 좌표를 숫자로 설정합니다.  설정값은 GraphicsPath 의 x 속성값 위치를 0 으로 가정하고 처리됩니다. |
| `nY` | Number | Clipping 할 영역의 y 좌표를 숫자로 설정합니다.  설정값은 GraphicsPath 의 y 속성값 위치를 0 으로 가정하고 처리됩니다. |
| `nWidth` | Number | Clipping 할 영역의 너비를 숫자로 설정합니다.  설정값은 nX 파라미터값을 기준으로 처리됩니다. |
| `nHeight` | Number | Clipping 할 영역의 높이를 숫자로 설정합니다.  설정값은 nY 파라미터값을 기준으로 처리됩니다. |

**Remark**
- GraphicsPath 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsPath 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsPath 의 Position 관련 속성값은 변경되지 않습니다.

---

## setPathData

GraphicsPath 에 SVG 형식으로 경로 데이터를 설정하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.setPathData( strPath )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPath` | String | 경로 데이터를 SVG 형식의 문자열로 설정합니다.  설정할 수 있는 SVG 형식입니다. - "M x,y" : 시작위치를 x,y 좌표위치로 설정합니다. - "L x,y" : 현재 위치에서 x,y 좌표위치까지 선을 표시합니다. - "H x" : 현재 위치에서 x 좌표위치까지 가로선을 표시합니다. - "V y" : 현재 위치에서 y 좌표위치까지 세로선을 표시합니다. - "Z" : 현재 위치에서 시작점까지 선을 표시합니다. - "C x1,y1 x2,y2 x,y" : 현재 위치에서 x,y 좌표위치까지 cubic Bezier 곡선을 표시합니다. - "S x2,y2 x,y" : 현재 위치에서 x,y 좌표위치까지 cubic Bezier 곡선을 표시합니다. - "Q x1,y1 x,y" : 현재 위치에서 x,y 좌표위치까지 quadratic Bezier 곡선을 표시합니다. - "T x,y" : 현재 위치에서 x,y 좌표위치까지 quadratic Bezier 곡선을 표시합니다. - "A rx,ry rotation large clockwise x,y" : 현재 위치에서 x,y 좌표위치까지 타원호를 표시합니다. |

**Remark**
- "M" 명령어는 경로의 시작점을 설정할 때 외에는 무시됩니다.
   경로를 그리기 시작한 후 입력되는 "M" 명령어는 처리되지 않습니다.

- 경로 데이터는 공백문자로 구분됩니다.

**See Also**: getPathData

---

## setTransform

GraphicsPath 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.setTransform( strMethod );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMethod` | String | GraphicsPath 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다. translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다. null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다. |

**Remark**
- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsPath 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.

---

## shear

GraphicsPath 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
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

- shear() 메소드는 GraphicsPath 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.

---

## toString

GraphicsPath 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.toString();
```

**Return**: `String` — 일반적으로 "[object GraphicsPath]" 형태의 문자열을 반환합니다.

---

## transform

GraphicsPath 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nScaleX` | Number | 현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsPath 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsPath 가 축소됩니다. |
| `nShearX` | Number | 현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다. |
| `nShearY` | Number | 현재 모습에서 y 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다. |
| `nScaleY` | Number | 현재 크기에서 확대/축소 될 세로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsPath 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsPath 가 축소됩니다. |
| `nTransX` | Number | 현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |
| `nTransY` | Number | 현재 위치에서 y 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |

**Remark**
- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsPath 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.

---

## translate

GraphicsPath 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPath.translate( nTransX, nTransY );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTransX` | Number | 현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |
| `nTransY` | Number | 현재 위치에서 y 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |

**Remark**
- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsPath 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.

---
