# Graphics Sub-Objects

## GraphicsEllipse

- Properties: 10개
- Methods: 19개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `fillstyle` | GraphicsEllipse 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다. |
| `height` | GraphicsEllipse 영역의 세로 지름을 설정하는 속성입니다. |
| `id` | GraphicsEllipse 의 고유 식별자를 설정하는 속성입니다. |
| `opacity` | GraphicsEllipse 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsEllipse 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `strokepen` | GraphicsEllipse 의 외곽선에 적용될 색과 형식을 설정하는 속성입니다. |
| `visible` | GraphicsEllipse 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `width` | GraphicsEllipse 영역의 가로 지름을 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsEllipse 가 표시될 x 축 중심좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsEllipse 가 표시될 y 축 중심좌표값을 설정하는 속성입니다. |

### Methods

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

## GraphicsGroup

- Properties: 5개
- Methods: 28개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `id` | GraphicsGroup 의 고유 식별자를 설정하는 속성입니다. |
| `parent` | GraphicsGroup 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `visible` | GraphicsGroup 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

### Methods

| Method | Description |
|--------|-------------|
| `addChild()` | Graphics 오브젝트를 GraphicsGroup 에 자식으로 추가하는 메소드입니다. |
| `clear()` | GraphicsGroup 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다. |
| `destroy()` | GraphicsGroup 를 메모리에서 완전히 삭제하는 메소드입니다. |
| `getBoundRect()` | GraphicsGroup 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getFirstChild()` | GraphicsGroup 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다. |
| `getLastChild()` | GraphicsGroup 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다. |
| `getNextSibling()` | GraphicsGroup 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| `getObjectByID()` | GraphicsGroup 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다. |
| `getObjects()` | GraphicsGroup 에 추가된 오브젝트를 배열로 반환하는 메소드입니다. |
| `getOffsetBoundRect()` | GraphicsGroup 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getOffsetRect()` | GraphicsGroup 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| `getOffsetRegion()` | GraphicsGroup 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `getPreviousSibling()` | GraphicsGroup 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| `getRect()` | GraphicsGroup 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| `getRegion()` | GraphicsGroup 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `hasChild()` | GraphicsGroup 에 Graphics 오브젝트가 추가 되었는지 여부를 반환하는 메소드입니다. |
| `indexOf()` | GraphicsGroup 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다. |
| `insertChild()` | Graphics 오브젝트를 GraphicsGroup 의 특정 위치에 자식으로 삽입하는 메소드입니다. |
| `isHitTest()` | 인수로 전달된 좌표위치가 GraphicsGroup 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `removeChild()` | GraphicsGroup 의 자식 오브젝트 중 특정 ID 의 Graphics 오브젝트를 제거하는 메소드입니다. |
| `rotate()` | GraphicsGroup 에 회전효과를 적용하는 메소드입니다. |
| `scale()` | GraphicsGroup 에 확대/축소 효과를 적용하는 메소드입니다. |
| `setClipRect()` | GraphicsGroup 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| `setTransform()` | GraphicsGroup 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| `shear()` | GraphicsGroup 에 비틀기 효과를 적용하는 메소드입니다. |
| `toString()` | GraphicsGroup 에 비틀기 효과를 적용하는 메소드입니다. |
| `transform()` | GraphicsGroup 에 Transform 관련 효과를 적용하는 메소드입니다. |
| `translate()` | GraphicsGroup 의 위치가 이동되는 효과를 적용하는 메소드입니다. |

## GraphicsImage

- Properties: 11개
- Methods: 20개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `height` | GraphicsImage 영역의 높이를 설정하는 속성입니다. |
| `id` | GraphicsImage 의 고유 식별자를 설정하는 속성입니다. |
| `image` | GraphicsImage 에 로드 할 이미지 파일의 위치 경로를 설정하는 속성입니다. |
| `imageheight` | GraphicsImage 에 로드된 이미지의 실제 높이값을 갖는 읽기전용 속성입니다. |
| `imagewidth` | GraphicsImage 에 로드된 이미지의 실제 너비값을 갖는 읽기전용 속성입니다. |
| `opacity` | GraphicsImage 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsImage 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `visible` | GraphicsImage 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `width` | GraphicsImage 영역의 너비를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsImage 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsImage 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

### Methods

| Method | Description |
|--------|-------------|
| `destroy()` | GraphicsImage 를 메모리에서 완전히 삭제하는 메소드입니다. |
| `getBoundRect()` | GraphicsImage 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getNextSibling()` | GraphicsImage 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| `getOffsetBoundRect()` | GraphicsImage 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getOffsetRect()` | GraphicsImage 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| `getOffsetRegion()` | GraphicsImage 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `getPreviousSibling()` | GraphicsImage 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| `getRect()` | GraphicsImage 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| `getRegion()` | GraphicsImage 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `isEmptyRect()` | GraphicsImage 에 이미지의 로딩 여부를 반환하는 메소드입니다. |
| `isHitTest()` | 인수로 전달된 좌표위치가 GraphicsImage 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `rotate()` | GraphicsImage 에 회전효과를 적용하는 메소드입니다. |
| `scale()` | GraphicsImage 에 확대/축소 효과를 적용하는 메소드입니다. |
| `setClipRect()` | GraphicsImage 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| `setImageLoadEventHandler()` | GraphicsImage 에 이미지가 로딩되었을 때 CallBack 으로 실행할 함수를 설정하는 메소드입니다. |
| `setTransform()` | GraphicsImage 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| `shear()` | GraphicsImage 에 비틀기 효과를 적용하는 메소드입니다. |
| `toString()` | GraphicsImage 의 타입을 문자열로 반환하는 메소드입니다. |
| `transform()` | GraphicsImage 에 Transform 관련 효과를 적용하는 메소드입니다. |
| `translate()` | GraphicsImage 의 위치가 이동되는 효과를 적용하는 메소드입니다. |

## GraphicsLine

- Properties: 12개
- Methods: 19개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `id` | GraphicsLine 의 고유 식별자를 설정하는 속성입니다. |
| `opacity` | GraphicsLine 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsLine 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `strokecap` | GraphicsLIne 에 표시되는 직선의 양 끝 모양을 설정하는 속성입니다. |
| `strokepen` | GraphicsLine 에 표시되는 직선의 색과 형식을 설정하는 속성입니다. |
| `visible` | GraphicsLine 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsLine 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `x1` | 직선이 시작하는 위치의 x 좌표값을 설정하는 속성입니다. |
| `x2` | 직선이 끝나는 위치의 x 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsLine 가 표시될 y 축 좌표값을 설정하는 속성입니다. |
| `y1` | 직선이 시작하는 위치의 y 좌표값을 설정하는 속성입니다. |
| `y2` | 직선이 끝나는 위치의 y 좌표값을 설정하는 속성입니다. |

### Methods

| Method | Description |
|--------|-------------|
| `destroy()` | GraphicsLine 를 메모리에서 완전히 삭제하는 메소드입니다. |
| `getBoundRect()` | GraphicsLine 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getNextSibling()` | GraphicsLine 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| `getOffsetBoundRect()` | GraphicsLine 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getOffsetRect()` | GraphicsLine 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| `getOffsetRegion()` | GraphicsLine 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `getPreviousSibling()` | GraphicsLine 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| `getRect()` | GraphicsLine 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| `getRegion()` | GraphicsLine 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `isHitTest()` | 인수로 전달된 좌표위치가 GraphicsLine 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `isPointInPath()` | 특정 좌표위치가 GraphicsLine 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `rotate()` | GraphicsLine 에 회전효과를 적용하는 메소드입니다. |
| `scale()` | GraphicsLine 에 확대/축소 효과를 적용하는 메소드입니다. |
| `setClipRect()` | GraphicsLine 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| `setTransform()` | GraphicsLine 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| `shear()` | GraphicsLine 에 비틀기 효과를 적용하는 메소드입니다. |
| `toString()` | GraphicsLine 의 타입을 문자열로 반환하는 메소드입니다. |
| `transform()` | GraphicsLine 에 Transform 관련 효과를 적용하는 메소드입니다. |
| `translate()` | GraphicsLine 의 위치가 이동되는 효과를 적용하는 메소드입니다. |

## GraphicsPath

- Properties: 11개
- Methods: 30개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `fillstyle` | GraphicsPath 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다. |
| `id` | GraphicsPath 의 고유 식별자를 설정하는 속성입니다. |
| `miterlimit` | strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다. |
| `opacity` | GraphicsPath 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsPath 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `strokecap` | GraphicsPath 에 표시되는 경로의 양 끝 모양을 설정하는 속성입니다. |
| `strokejoin` | GraphicsPath 에 표시되는 경로의 연결점 모양을 설정하는 속성입니다. |
| `strokepen` | GraphicsPath 에 표시되는 경로의 색과 형식을 설정하는 속성입니다. |
| `visible` | GraphicsPath 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsPath 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsPath 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

### Methods

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

## GraphicsPaths

- Properties: 11개
- Methods: 32개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `fillstyle` | GraphicsPaths 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다. |
| `id` | GraphicsPaths 의 고유 식별자를 설정하는 속성입니다. |
| `miterlimit` | strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다. |
| `opacity` | GraphicsPaths 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsPaths 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `strokecap` | GraphicsPaths 에 표시되는 경로의 양 끝 모양을 설정하는 속성입니다. |
| `strokejoin` | GraphicsPaths 에 표시되는 경로의 연결점 모양을 설정하는 속성입니다. |
| `strokepen` | GraphicsPaths 에 표시되는 경로의 색과 형식을 설정하는 속성입니다. |
| `visible` | GraphicsPaths 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

### Methods

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

## GraphicsRect

- Properties: 14개
- Methods: 19개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `fillstyle` | GraphicsRect 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다. |
| `height` | GraphicsRect 영역의 높이를 설정하는 속성입니다. |
| `id` | GraphicsRect 의 고유 식별자를 설정하는 속성입니다. |
| `miterlimit` | strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다. |
| `opacity` | GraphicsRect 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsRect 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `radiusx` | GraphicsRect 의 모서리를 둥글게 표시하기 위해 x 축의 반경을 설정하는 속성입니다. |
| `radiusy` | GraphicsRect 의 모서리를 둥글게 표시하기 위해 y 축의 반경을 설정하는 속성입니다. |
| `strokejoin` | GraphicsRect 의 모서리 모양을 설정하는 속성입니다. |
| `strokepen` | GraphicsRect 의 외곽선에 적용될 색과 형식을 설정하는 속성입니다. |
| `visible` | GraphicsRect 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `width` | GraphicsRect 영역의 너비를 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsRect 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsRect 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

### Methods

| Method | Description |
|--------|-------------|
| `destroy()` | GraphicsRect 를 메모리에서 완전히 삭제하는 메소드입니다. |
| `getBoundRect()` | GraphicsRect 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getNextSibling()` | GraphicsRect 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| `getOffsetBoundRect()` | GraphicsRect 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getOffsetRect()` | GraphicsRect 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| `getOffsetRegion()` | GraphicsRect 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `getPreviousSibling()` | GraphicsRect 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| `getRect()` | GraphicsRect 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| `getRegion()` | GraphicsRect 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `isEmptyRect()` | GraphicsRect 에 영역이 설정 되었는지 여부를 반환하는 메소드입니다. |
| `isHitTest()` | 인수로 전달된 좌표위치가 GraphicsRect 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `rotate()` | GraphicsRect 에 회전효과를 적용하는 메소드입니다. |
| `scale()` | GraphicsRect 에 확대/축소 효과를 적용하는 메소드입니다. |
| `setClipRect()` | GraphicsRect 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| `setTransform()` | GraphicsRect 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| `shear()` | GraphicsRect 에 비틀기 효과를 적용하는 메소드입니다. |
| `toString()` | GraphicsRect 의 타입을 문자열로 반환하는 메소드입니다. |
| `transform()` | GraphicsRect 에 Transform 관련 효과를 적용하는 메소드입니다. |
| `translate()` | GraphicsRect 의 위치가 이동되는 효과를 적용하는 메소드입니다. |

## GraphicsText

- Properties: 13개
- Methods: 19개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `color` | GraphicsText 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| `font` | GraphicsText 에서 사용하는 폰트를 설정하는 속성입니다. |
| `id` | GraphicsText 의 고유 식별자를 설정하는 속성입니다. |
| `opacity` | GraphicsText 영역의 투명도를 설정하는 속성입니다. |
| `parent` | GraphicsText 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `text` | GraphicsText 에 표시될 텍스트를 설정하는 속성입니다. |
| `textAlign` | GraphicsText 의 x 속성값 위치를 기준으로 텍스트가 표시되는 가로위치를 설정하는 속성입니다. |
| `textwidth` | wordWrap 속성값이 "char" 일 때 GraphicsText 에 텍스트가 표시되는 영역의 너비를 설정하는 속성입니다. |
| `verticalAlign` | GraphicsText 의 y 속성값 위치를 기준으로 텍스트가 표시되는 세로위치를 설정하는 속성입니다. |
| `visible` | GraphicsText 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| `wordWrap` | GraphicsText 에 표시되는 텍스트가 textwidth 속성값보다 길 경우 줄바꿈 되도록 설정하는 속성입니다. |
| `x` | 부모 오브젝트를 기준으로 GraphicsText 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| `y` | 부모 오브젝트를 기준으로 GraphicsText 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

### Methods

| Method | Description |
|--------|-------------|
| `destroy()` | GraphicsText 를 메모리에서 완전히 삭제하는 메소드입니다. |
| `getBoundRect()` | GraphicsText 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getNextSibling()` | GraphicsText 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| `getOffsetBoundRect()` | GraphicsText 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| `getOffsetRect()` | GraphicsText 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| `getOffsetRegion()` | GraphicsText 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `getPreviousSibling()` | GraphicsText 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| `getRect()` | GraphicsText 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| `getRegion()` | GraphicsText 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| `isEmptyRect()` | GraphicsText 에 설정된 텍스트의 존재여부를 반환하는 메소드입니다. |
| `isHitTest()` | 인수로 전달된 좌표위치가 GraphicsText 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| `rotate()` | GraphicsText 에 회전효과를 적용하는 메소드입니다. |
| `scale()` | GraphicsText 에 확대/축소 효과를 적용하는 메소드입니다. |
| `setClipRect()` | GraphicsText 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| `setTransform()` | GraphicsText 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| `shear()` | GraphicsText 에 비틀기 효과를 적용하는 메소드입니다. |
| `toString()` | GraphicsText 의 타입을 문자열로 반환하는 메소드입니다. |
| `transform()` | GraphicsText 에 Transform 관련 효과를 적용하는 메소드입니다. |
| `translate()` | GraphicsText 의 위치가 이동되는 효과를 적용하는 메소드입니다. |
