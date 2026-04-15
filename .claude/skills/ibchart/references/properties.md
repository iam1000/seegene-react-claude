# IBChart 속성 레퍼런스

## 목차
1. [chart — 기본 속성](#chart)
2. [title / subtitle — 제목 속성](#title--subtitle)
3. [xAxis — X축 속성](#xaxis)
4. [yAxis — Y축 속성](#yaxis)
5. [legend — 범례 속성](#legend)
6. [tooltip — 툴팁 속성](#tooltip)
7. [plotOptions — 구성 옵션](#plotoptions)
8. [colorAxis — 색상 축 속성](#coloraxis)
9. [pane — 게이지/polar 전용](#pane)
10. [exporting — 보조메뉴 속성](#exporting)
11. [colors — 색상 배열](#colors)

---

## chart

차트 기본 옵션을 설정합니다. `setOptions`의 `chart` 프로퍼티로 설정합니다.

| name | type | default | description |
|------|------|---------|-------------|
| type | `string` | "line" | 차트 유형 (line, column, bar, pie, area 등) |
| backgroundColor | `color` | #ffffff | 컨테이너 배경색 |
| borderColor | `color` | #334eff | 컨테이너 border 색상 |
| borderWidth | `number` | 0 | 컨테이너 border 너비 |
| borderRadius | `number` | 0 | 컨테이너 radius 값 |
| shadow | `boolean` | false | 컨테이너 그림자 여부 |
| margin | `number/Array` | undefined | 컨테이너 margin |
| plotBackgroundColor | `color` | undefined | 차트 영역 배경색 |
| plotBorderColor | `color` | #cccccc | 차트 영역 border 색상 |
| plotBorderWidth | `number` | 0 | 차트 영역 border 너비 |
| plotShadow | `boolean` | false | 차트 영역 그림자 여부 |
| inverted | `boolean` | false | X축/Y축 반전 |
| polar | `boolean` | false | polar(방사형) 차트 구성 |
| zoomType | `string` | undefined | 줌 방법: "x", "y", "xy", "none" |

---

## title / subtitle

### title
| name | type | default | description |
|------|------|---------|-------------|
| text | `string` | "" | 제목 텍스트 |
| align | `string` | "center" | 좌우정렬: "left", "center", "right" |
| verticalAlign | `string` | undefined | 상하정렬: "top", "middle", "bottom" |
| style | `object` | {} | CSS 스타일 (color, fontSize, fontWeight) |
| useHTML | `boolean` | false | HTML 태그 사용 여부 |
| x | `number` | 0 | 좌우 위치 조정 |
| y | `number` | undefined | 상하 위치 조정 |

### subtitle
title과 동일한 속성을 가집니다.

---

## xAxis

| name | type | default | description |
|------|------|---------|-------------|
| categories | `Array` | undefined | 카테고리 배열 |
| title.text | `string` | "" | 축 제목 |
| labels.enabled | `boolean` | true | 레이블 표시 여부 |
| labels.rotation | `number` | 0 | 레이블 기울기 (0~360) |
| labels.format | `string` | "{value}" | 레이블 포맷 |
| labels.formatter | `function` | undefined | 레이블 포맷 콜백 |
| labels.style | `object` | {} | 레이블 CSS 스타일 |
| labels.staggerLines | `number` | 0 | 레이블 다단 |
| labels.step | `number` | undefined | 레이블 표시 단계 |
| tickInterval | `number` | undefined | 눈금 간격 |
| tickLength | `number` | 10 | 눈금 길이 |
| tickWidth | `number` | 1 | 눈금 너비 |
| tickPosition | `string` | "outside" | 눈금 위치: "outside", "inside" |
| min | `number` | undefined | 축 최솟값 |
| max | `number` | undefined | 축 최댓값 |
| reversed | `boolean` | false | 축 반전 |
| opposite | `boolean` | false | 반대편 축 |
| offset | `number` | undefined | 축 오프셋 |
| gridLineWidth | `number` | 0 | 그리드선 너비 |
| gridLineColor | `color` | #e6e6e6 | 그리드선 색상 |
| gridLineDashStyle | `string` | "Solid" | 그리드선 스타일 |
| gridZIndex | `number` | 1 | 그리드선 z-index |
| lineColor | `color` | #ccd6eb | 축 선 색상 |
| lineWidth | `number` | 1 | 축 선 너비 |
| crosshair | `boolean/object` | false | 크로스헤어 표시 |
| allowDecimals | `boolean` | true | 소수점 허용 |
| alternateGridColor | `color` | undefined | 그리드 교차 배경색 |
| endOnTick | `boolean` | false | 눈금에 맞춰 끝 |
| startOnTick | `boolean` | false | 눈금에 맞춰 시작 |
| showFirstLabel | `boolean` | true | 첫 레이블 표시 |
| showLastLabel | `boolean` | true | 마지막 레이블 표시 |
| dynamicAxisMax | `boolean` | false | 동적 최대 축값 |
| visible | `boolean` | true | 축 표시 여부 |
| plotBands | `Array[object]` | undefined | 구간 밴드 |
| minorGridLineColor | `color` | #f2f2f2 | 보조 그리드 색상 |
| minorGridLineDashStyle | `string` | "Solid" | 보조 그리드 스타일 |
| minorGridLineWidth | `number` | 1 | 보조 그리드 너비 |
| minorTickColor | `color` | #999999 | 보조 눈금 색상 |
| minorTickInterval | `number` | undefined | 보조 눈금 간격 |
| minorTickLength | `number` | 2 | 보조 눈금 길이 |
| minorTickWidth | `number` | 0 | 보조 눈금 너비 |

### plotBands 속성
```javascript
xAxis: {
  plotBands: [{
    from: 1,          // 시작 값
    to: 3,            // 끝 값
    color: "#eeeeee", // 영역 색상
    label: {
      text: "구간",
      style: { color: "#666" }
    }
  }]
}
```

---

## yAxis

xAxis와 동일한 속성을 대부분 가지며, 추가 속성:

| name | type | default | description |
|------|------|---------|-------------|
| stackLabels.enabled | `boolean` | false | 스택 레이블 표시 |
| stackLabels.align | `string` | undefined | 스택 레이블 정렬 |
| stackLabels.style | `object` | {} | 스택 레이블 스타일 |
| gridLineInterpolation | `string` | undefined | 그리드 보간 (polar용): "circle", "polygon" |
| stops | `Array` | undefined | Y축 색상 구간 (solidgauge용) |

### 보조 Y축 (Secondary Y축) 사용
```javascript
yAxis: [{
  title: { text: "왼쪽 축" }
}, {
  title: { text: "오른쪽 축" },
  opposite: true  // 오른쪽에 배치
}]
// 시리즈에서 yAxis: 1 로 보조 축 연결
```

---

## legend

| name | type | default | description |
|------|------|---------|-------------|
| enabled | `boolean` | true | 범례 사용 여부 |
| layout | `string` | "horizontal" | 배치: "horizontal", "vertical" |
| align | `string` | "center" | 좌우정렬: "left", "center", "right" |
| verticalAlign | `string` | "bottom" | 상하정렬: "top", "middle", "bottom" |
| floating | `boolean` | false | 플로팅 여부 |
| backgroundColor | `color` | undefined | 배경색 |
| borderColor | `color` | #999999 | 테두리 색상 |
| borderWidth | `number` | 0 | 테두리 너비 |
| borderRadius | `number` | 0 | 테두리 radius |
| shadow | `boolean` | false | 그림자 여부 |
| padding | `number` | 8 | 내부 여백 |
| itemDistance | `number` | 20 | 항목 간 거리 |
| itemWidth | `number` | undefined | 항목 너비 |
| itemStyle | `object` | {} | 항목 CSS 스타일 |
| itemHoverStyle | `object` | {} | 호버 시 스타일 |
| labelFormat | `string` | "{name}" | 레이블 포맷 |
| labelFormatter | `function` | undefined | 레이블 포맷 콜백 |
| reversed | `boolean` | false | 항목 순서 반전 |
| rtl | `boolean` | false | RTL 레이아웃 |
| symbolHeight | `number` | undefined | 심볼 높이 |
| symbolWidth | `number` | undefined | 심볼 너비 |
| symbolPadding | `number` | 5 | 심볼 여백 |
| symbolRadius | `number` | undefined | 심볼 radius |
| title.text | `string` | "" | 범례 제목 |
| width | `number` | undefined | 범례 너비 |
| x | `number` | 0 | 좌우 위치 조정 |
| y | `number` | 0 | 상하 위치 조정 |

---

## tooltip

| name | type | default | description |
|------|------|---------|-------------|
| enabled | `boolean` | true | 툴팁 사용 여부 |
| animation | `boolean` | true | 애니메이션 여부 |
| backgroundColor | `color` | rgba(247,247,247,0.85) | 배경색 |
| borderColor | `color` | undefined | 테두리 색상 |
| borderRadius | `number` | 3 | 테두리 radius |
| borderWidth | `number` | 1 | 테두리 너비 |
| distance | `number` | 16 | 포인트와의 거리 |
| shadow | `boolean` | true | 그림자 여부 |
| padding | `number` | 8 | 내부 여백 |
| hideDelay | `number` | 500 | 숨김 딜레이(ms) |
| shared | `boolean` | false | 공유 툴팁 여부 |
| useHTML | `boolean` | false | HTML 사용 여부 |
| style | `object` | {} | CSS 스타일 |
| headerFormat | `string` | ... | 헤더 포맷 |
| pointFormat | `string` | ... | 포인트 포맷 |
| formatter | `function` | undefined | 포맷 콜백 함수 |
| valuePrefix | `string` | "" | 값 접두사 |
| valueSuffix | `string` | "" | 값 접미사 |

### formatter 사용 예
```javascript
tooltip: {
  formatter: function() {
    return '<b>' + this.x + '</b><br/>' +
           this.series.name + ': ' + this.y + '원';
  }
}
```

### 포맷 변수
| 변수 | 설명 |
|------|------|
| {point.x} | x값 |
| {point.y} | y값 |
| {point.name} | 포인트 이름 |
| {point.percentage} | 퍼센트 (파이차트) |
| {series.name} | 시리즈 이름 |
| {series.color} | 시리즈 색상 |

---

## plotOptions

시리즈별 공통 옵션을 설정합니다. `plotOptions.series`는 전체 시리즈에, `plotOptions.column`은 column 시리즈에만 적용됩니다.

| name | type | default | description |
|------|------|---------|-------------|
| animation | `boolean` | true | 애니메이션 여부 |
| cursor | `string` | undefined | 마우스 커서: "pointer", "default" 등 |
| dashStyle | `string` | "Solid" | 선 스타일 |
| shadow | `boolean/object` | false | 그림자 |
| visible | `boolean` | true | 표시 여부 |
| showInLegend | `boolean` | true | 범례 표시 여부 |
| stacking | `string` | undefined | 스택: "normal", "percent" |
| colorByPoint | `boolean` | false | 포인트별 색상 지정 |
| borderColor | `color` | "#ffffff" | 테두리 색상 |
| borderWidth | `number` | 1 | 테두리 너비 |
| borderRadius | `number` | 0 | 테두리 radius |
| pointPadding | `number` | 0.1 | 포인트 간 여백 |
| pointWidth | `number` | undefined | 포인트 너비(px) |
| groupPadding | `number` | 0.2 | 그룹 간 여백 |
| pointPlacement | `string/number` | undefined | 포인트 배치: "on", "between" |
| pointStart | `number` | 0 | x축 시작값 |
| negativeColor | `color` | undefined | 음수값 색상 |
| fillColor | `color` | undefined | 영역 채우기 색상 |
| fillOpacity | `number` | 0.75 | 영역 불투명도 |
| lineColor | `color` | undefined | 선 색상 |
| lineWidth | `number` | 2 | 선 너비 |
| step | `string` | undefined | 계단형: "left", "center", "right" |
| connectEnds | `boolean` | true | polar 차트 끝점 연결 |
| turboThreshold | `number` | 1000 | 1000개 이상 데이터 시 증가 필요 |

### dataLabels
```javascript
plotOptions: {
  series: {
    dataLabels: {
      enabled: true,
      format: "{y}",           // 포맷 문자열
      formatter: function() {}, // 포맷 콜백
      align: "center",         // 좌우정렬
      verticalAlign: "top",    // 상하정렬
      rotation: 0,             // 기울기
      style: { fontSize: "11px", fontWeight: "bold", color: "contrast" },
      inside: false,           // 포인트 내부 여부
      distance: 30,            // 파이차트 거리
      useHTML: false
    }
  }
}
```

### marker
```javascript
plotOptions: {
  series: {
    marker: {
      enabled: true,
      radius: 4,
      symbol: "circle",  // "circle", "square", "diamond", "triangle"
      fillColor: undefined,
      lineWidth: 0,
      lineColor: undefined,
      states: {
        hover: { enabled: true, radiusPlus: 2 }
      }
    }
  }
}
```

### 파이차트 전용
| name | type | description |
|------|------|-------------|
| center | `Array` | 중심 좌표 ["50%", "50%"] |
| innerSize | `string/number` | 도넛 내부 크기 ("50%"이면 도넛) |
| startAngle | `number` | 시작 각도 |
| endAngle | `number` | 끝 각도 |
| size | `string/number` | 파이 크기 |
| slicedOffset | `number` | 이격 거리 |

### 네트워크그래프 전용 (layoutAlgorithm)
| name | type | description |
|------|------|-------------|
| layoutAlgorithm.enableSimulation | `boolean` | 시뮬레이션 사용 |
| layoutAlgorithm.linkLength | `number` | 링크 길이 |
| layoutAlgorithm.gravitationalConstant | `number` | 중력 상수 |
| layoutAlgorithm.friction | `number` | 마찰력 |
| layoutAlgorithm.integration | `string` | 적분 방법: "euler", "verlet" |

### states (hover, select, inactive)
```javascript
plotOptions: {
  series: {
    states: {
      hover: { enabled: true, lineWidth: 3 },
      select: { enabled: true, color: "#ff0000" },
      inactive: { opacity: 0.2 }
    }
  }
}
```

---

## colorAxis

히트맵 등에서 데이터 값에 따른 색상을 설정합니다. gauge, solidgauge, wordcloud, sankey, dependencywheel에서는 작동하지 않습니다.

| name | type | default | description |
|------|------|---------|-------------|
| min | `number` | undefined | minColor 표시 값 |
| max | `number` | undefined | maxColor 표시 값 |
| minColor | `color` | #e6e9ff | 최솟값 색상 |
| maxColor | `color` | #0022ff | 최댓값 색상 |
| ceiling | `number` | undefined | 최대 표시 값 |
| floor | `number` | undefined | 최소 표시 값 |
| reversed | `boolean` | false | 축 반전 |
| layout | `string` | undefined | "horizontal", "vertical" |
| stops | `Array` | undefined | 색상 구간 [[0.1, "#0000ff"], [1, "#ff0000"]] |
| dataClasses | `Array[object]` | undefined | 데이터 클래스별 색상 |
| gridLineColor | `color` | #ffffff | 그리드 색상 |
| gridLineDashStyle | `string` | "Solid" | 그리드 스타일 |
| gridLineWidth | `number` | 1 | 그리드 너비 |
| lineColor | `color` | #333333 | 테두리 색상 |
| labels | `object` | {} | 레이블 속성 |
| marker | `object/null` | {} | 마커 속성 (null이면 비활성) |

---

## pane

gauge, polar 차트에서 사용합니다.

| name | type | default | description |
|------|------|---------|-------------|
| center | `Array` | ["50%", "50%"] | 중심 좌표 |
| size | `string/number` | "85%" | 크기 |
| startAngle | `number` | undefined | 시작 각도 |
| endAngle | `number` | undefined | 끝 각도 |
| background | `Array[object]` | undefined | 배경 속성 배열 |

### background 속성
```javascript
pane: {
  background: [{
    backgroundColor: { linearGradient: {x1:0,y1:0,x2:0,y2:1}, stops: [[0,"#fff"],[1,"#ddd"]] },
    borderWidth: 0,
    outerRadius: "109%",
    innerRadius: "0%",
    shape: "arc"  // "arc", "circle", "solid"
  }]
}
```

---

## exporting

보조메뉴(컨텍스트 메뉴) 설정입니다.

| name | type | default | description |
|------|------|---------|-------------|
| buttons.contextButton.enabled | `boolean` | true | 버튼 표시 여부 |
| buttons.contextButton.menuItems | `Array` | [...] | 메뉴 항목 |

---

## colors

시리즈별 기본 색상 배열입니다.

```javascript
myChart.setOptions({
  colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
           '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
});
```
