# GraphicsPaths Methods

| Method | Description |
|--------|-------------|
| `addChild()` | GraphicsPath 오브젝트를 GraphicsPaths 에 추가하는 메소드입니다. |
| `clear()` | GraphicsPaths 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다. |
| `closePath()` | GraphicsPaths 에 추가된 마지막 GraphicsPath 오브젝트의 끝점과 시작점을 직선으로 연결하는 메소드입니다. |
| `destroy()` | GraphicsPaths 를 메모리에서 완전히 삭제하는 메소드입니다. |
| `getBoundRect()` | GraphicsPaths 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getChildByIndex()` | GraphicsPaths 에서 특정 인덱스의 GraphicsPath 오브젝트를 반환하는 메소드입니다. |
| `getFirstChild()` | GraphicsPaths 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다. |
| `getLastChild()` | GraphicsPaths 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다. |
| `getNextSibling()` | GraphicsPaths 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| `getObjectByID()` | GraphicsPaths 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다. |
| `getObjects()` | GraphicsPaths 에 추가된 오브젝트를 배열로 반환하는 메소드입니다. |
| `getOffsetBoundRect()` | GraphicsPaths 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getOffsetRect()` | GraphicsPaths 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| `getOffsetRegion()` | GraphicsPaths 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `getPathData()` | GraphicsPaths 에 설정된 경로 데이터를 SVG 형식의 문자열로 반환하는 메소드입니다. |
| `getPreviousSibling()` | GraphicsPaths 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| `getRect()` | GraphicsPaths 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| `getRegion()` | GraphicsPaths 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `hasChild()` | GraphicsPaths 에 GraphicsPath 오브젝트가 추가 되었는지 여부를 반환하는 메소드입니다. |
| `indexOf()` | GraphicsPaths 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다. |
| `insertChild()` | GraphicPath 오브젝트를 GraphicsPaths 의 특정 위치에 삽입하는 메소드입니다. |
| `isHitTest()` | 인수로 전달된 좌표위치가 GraphicsPaths 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `removeChild()` | GraphicsPaths 에서 특정 ID 의 GraphicsPath 오브젝트를 제거하는 메소드입니다. |
| `rotate()` | GraphicsPaths 에 회전효과를 적용하는 메소드입니다. |
| `scale()` | GraphicsPaths 에 확대/축소 효과를 적용하는 메소드입니다. |
| `setClipRect()` | GraphicsPaths 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| `setPathData()` | GraphicsPaths 에 SVG 형식으로 경로 데이터를 설정하는 메소드입니다. |
| `setTransform()` | GraphicsPaths 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| `shear()` | GraphicsPaths 에 비틀기 효과를 적용하는 메소드입니다. |
| `toString()` | GraphicsPaths 의 타입을 문자열로 반환하는 메소드입니다. |
| `transform()` | GraphicsPaths 에 Transform 관련 효과를 적용하는 메소드입니다. |
| `translate()` | GraphicsPaths 의 위치가 이동되는 효과를 적용하는 메소드입니다. |

---

## addChild

GraphicsPath 오브젝트를 GraphicsPaths 에 추가하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.addChild( strID, objGPath )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 추가하려는 GraphicsPath 오브젝트의 ID 를 문자열로 설정합니다. |
| `objGPath` | Object | 추가하려는 GraphicsPath 오브젝트를 설정합니다. |

**Return**: `Number` — GraphicsPaths 에 추가된 GraphicsPath 오브젝트의 인덱스를 반환합니다.

**Remark**
- addChild() 메소드로 GraphicsPath 오브젝트가 추가되어도 화면에 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- addChild() 로 추가된 GraphicsPath 오브젝트는 순서상 마지막에 위치합니다.

- GraphicsPath 오브젝트는 GraphicsPaths 에 추가된 순서대로 화면에 표시됩니다.
   따라서 GraphicsPath 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

**See Also**: insertChild, removeChild

---

## clear

GraphicsPaths 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.clear()
```

**Remark**
- GraphicsPaths 에 추가된 오브젝트만 삭제되고 GraphicsPaths 는 삭제되지 않습니다.

- clear() 메소드로 오브젝트가 삭제되어도 화면에서 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

---

## closePath

GraphicsPaths 에 추가된 마지막 GraphicsPath 오브젝트의 끝점과 시작점을 직선으로 연결하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.closePath()
```

**Remark**
- GraphicsPaths 에 추가된 GraphicsPath 오브젝트 중 마지막 오브젝트에 적용됩니다.

- 끝점과 시작점을 연결하여 닫힌경로로 만드는 메소드입니다.

- 마지막 GraphicsPath 오브젝트에 경로 데이터가 없을 경우 closePath() 메소드는 수행되지 않습니다.

---

## destroy

GraphicsPaths 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.destroy()
```

**Return**: `Boolean` — GraphicsPaths 가 정상적으로 삭제되면 true 를 반환합니다.  GraphicsPaths 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- destroy() 메소드로 GraphicsPaths 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsPaths 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.

---

## getBoundRect

GraphicsPaths 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getBoundRect( );
```

**Sample**
```javascript
var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getBoundRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다. strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getBoundRect() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getChildByIndex

GraphicsPaths 에서 특정 인덱스의 GraphicsPath 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getChildByIndex( nIndex )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIndex` | Number | 얻으려 하는 GraphicsPath 오브젝트의 인덱스를 숫자로 설정합니다. |

**Return**: `Object` — GraphicsPaths 에서 nIndex 에 해당하는 GraphicsPath 오브젝트를 반환합니다.

---

## getFirstChild

GraphicsPaths 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getFirstChild()
```

**Return**: `Object` — GraphicsPaths 에 추가된 첫번째 오브젝트를 반환합니다.

**Remark**
- GraphicsPaths 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

---

## getLastChild

GraphicsPaths 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getLastChild()
```

**Return**: `Object` — GraphicsPaths 에 추가된 마지막 오브젝트를 반환합니다.

**Remark**
- GraphicsPaths 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

---

## getNextSibling

GraphicsPaths 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getNextSibling()
```

**Sample**
```javascript
var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objNext = objGraphicsPaths.getNextSibling();

trace( objNext.toString() );
```

**Return**: `Object` — 부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.  다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**
- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.

---

## getObjectByID

GraphicsPaths 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getObjectByID( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다. |

**Return**: `Object` — strID 에 해당하는 오브젝트를 반환합니다.

---

## getObjects

GraphicsPaths 에 추가된 오브젝트를 배열로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getObjects()
```

**Return**: `Array` — GraphicsPaths 에 추가된 순서대로 오브젝트를 배열로 반환합니다.

**Remark**
- GraphicsPaths 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

---

## getOffsetBoundRect

GraphicsPaths 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getOffsetBoundRect( );
```

**Sample**
```javascript
var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPaths = objGroup.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getOffsetBoundRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — 부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다. strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getOffsetBoundRect() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getOffsetRect

GraphicsPaths 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getOffsetRect( );
```

**Sample**
```javascript
var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPaths = objGroup.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getOffsetRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — 부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsPaths 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsPaths 오브젝트의 실제 영역이 반환됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getOffsetRect() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRect() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getOffsetRegion

GraphicsPaths 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getOffsetRegion( );
```

**Sample**
```javascript
var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPaths = objGroup.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getOffsetRegion();

trace( "left : " + objRect.left );
```

**Return**: `Object` — 부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsPaths 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getOffsetRegion() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getPathData

GraphicsPaths 에 설정된 경로 데이터를 SVG 형식의 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getPathData()
```

**Return**: `String` — 경로 데이터를 SVG 형식의 문자열로 반환합니다.

**Remark**
- 경로 데이터는 공백문자로 구분됩니다.

**See Also**: setPathData

---

## getPreviousSibling

GraphicsPaths 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getPreviousSibling()
```

**Sample**
```javascript
var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objPrev = objGraphicsPaths.getPreviousSibling();

trace( objPrev.toString() );
```

**Return**: `Object` — 부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.  이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**
- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.

---

## getRect

GraphicsPaths 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getRect( );
```

**Sample**
```javascript
var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getRect();

trace( "left : " + objRect.left );
```

**Return**: `Object` — Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsPaths 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsPaths 오브젝트의 실제 영역이 반환됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getRect() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## getRegion

GraphicsPaths 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.getRegion( );
```

**Sample**
```javascript
var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getRegion();

trace( "left : " + objRect.left );
```

**Return**: `Object` — Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.  GraphicsPaths 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.  * Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**
- getRegion() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

---

## hasChild

GraphicsPaths 에 GraphicsPath 오브젝트가 추가 되었는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.hasChild()
```

**Return**: `Boolean` — GraphicsPath 오브젝트가 한 개 이상 추가되어 있으면 true 를 반환합니다.  GraphicsPath 오브젝트가 추가되어 있지 않으면 false 를 반환합니다.

---

## indexOf

GraphicsPaths 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.indexOf( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 인덱스를 얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다. |

**Return**: `Number` — strID 에 해당하는 오브젝트의 인덱스를 반환합니다.

---

## insertChild

GraphicPath 오브젝트를 GraphicsPaths 의 특정 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.insertChild( nIdx, strID, objGPath )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIdx` | Number | GraphicsPath 오브젝트가 삽입될 위치의 인덱스를 숫자로 설정합니다. |
| `strID` | String | 삽입하려는 GraphicsPath 오브젝트의 ID 를 문자열로 설정합니다. |
| `objGPath` | Object | 삽입하려는 GraphicsPath 오브젝트를 설정합니다. |

**Return**: `Number` — GraphicsPaths 에 삽입된 GraphicsPath 오브젝트의 인덱스를 반환합니다.

**Remark**
- insertChild() 메소드로 GraphicsPath 오브젝트가 추가되어도 화면에 오브젝트가 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsPath 오브젝트는 GraphicsPaths 에 추가된 순서대로 화면에 표시됩니다.
   따라서 GraphicsPath 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

**See Also**: addChild, removeChild

---

## isHitTest

인수로 전달된 좌표위치가 GraphicsPaths 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.isHitTest( nX, nY )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | 확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |
| `nY` | Number | 확인할 위치의 y 좌표값을 pixel 단위의 숫자로 설정합니다.  설정값은 Graphics 컴포넌트를 기준으로 처리됩니다. |

**Return**: `Boolean` — 인수로 전달된 좌표위치가 GraphicsPaths 영역에 포함되면 true 를 반환합니다.  인수로 전달된 좌표위치가 GraphicsPaths 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**
- 일반적으로 GraphicsPaths 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsPaths 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.

---

## removeChild

GraphicsPaths 에서 특정 ID 의 GraphicsPath 오브젝트를 제거하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.removeChild( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 제거하려는 GraphicsPath 오브젝트의 ID 를 문자열로 설정합니다. |

**Return**: `Object` — GraphicsPaths 에서 제거된 GraphicsPath 오브젝트를 반환합니다.

**Remark**
- removeChild() 메소드로 GraphicsPath 오브젝트가 제거되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- removeChild() 메소드로 제거된 GraphicsPath 오브젝트를 메모리에서 삭제하려면 destroy() 메소드를 사용해야 합니다.

**See Also**: addChild, insertChild

---

## rotate

GraphicsPaths 에 회전효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.rotate( nAngle [, nCenterX, nCenterY] );
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

- rotate() 메소드는 GraphicsPaths 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.

---

## scale

GraphicsPaths 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nScaleX` | Number | 현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsPaths 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsPaths 가 축소됩니다. |
| `nScaleY` | Number | 현재 크기에서 확대/축소 될 세로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsPaths 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsPaths 가 축소됩니다. |
| `nCenterX` | Number | 확대/축소의 중심이 되는 x 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |
| `nCenterY` | Number | 확대/축소의 중심이 되는 y 좌표를 숫자로 설정합니다. 설정값은 부모 오브젝트를 기준으로 처리됩니다.  값 생략 시 0 값이 적용됩니다. |

**Remark**
- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsPaths 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.

---

## setClipRect

GraphicsPaths 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nX` | Number | Clipping 할 영역의 x 좌표를 숫자로 설정합니다.  설정값은 GraphicsPaths 의 x 속성값 위치를 0 으로 가정하고 처리됩니다. |
| `nY` | Number | Clipping 할 영역의 y 좌표를 숫자로 설정합니다.  설정값은 GraphicsPaths 의 y 속성값 위치를 0 으로 가정하고 처리됩니다. |
| `nWidth` | Number | Clipping 할 영역의 너비를 숫자로 설정합니다.  설정값은 nX 파라미터값을 기준으로 처리됩니다. |
| `nHeight` | Number | Clipping 할 영역의 높이를 숫자로 설정합니다.  설정값은 nY 파라미터값을 기준으로 처리됩니다. |

**Remark**
- GraphicsPaths 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsPaths 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsPaths 의 Position 관련 속성값은 변경되지 않습니다.

---

## setPathData

GraphicsPaths 에 SVG 형식으로 경로 데이터를 설정하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.setPathData( strPath )
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

GraphicsPaths 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.setTransform( strMethod );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMethod` | String | GraphicsPaths 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다. translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다. null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다. |

**Remark**
- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsPaths 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.

---

## shear

GraphicsPaths 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
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

- shear() 메소드는 GraphicsPaths 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.

---

## toString

GraphicsPaths 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.toString();
```

**Return**: `String` — 일반적으로 "[object GraphicsPaths]" 형태의 문자열을 반환합니다.

---

## transform

GraphicsPaths 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nScaleX` | Number | 현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsPaths 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsPaths 가 축소됩니다. |
| `nShearX` | Number | 현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다. |
| `nShearY` | Number | 현재 모습에서 y 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다. |
| `nScaleY` | Number | 현재 크기에서 확대/축소 될 세로 배율을 실수로 설정합니다.  1.0 보다 큰값을 설정하면 GraphicsPaths 가 확대됩니다. 1.0 보다 작은값을 설정하면 GraphicsPaths 가 축소됩니다. |
| `nTransX` | Number | 현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |
| `nTransY` | Number | 현재 위치에서 y 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |

**Remark**
- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsPaths 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.

---

## translate

GraphicsPaths 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**
```javascript
GraphicsPaths.translate( nTransX, nTransY );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nTransX` | Number | 현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |
| `nTransY` | Number | 현재 위치에서 y 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다. |

**Remark**
- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsPaths 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.

---
