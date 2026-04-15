# 차트 유형별 데이터 형식

## 목차
1. [기본 데이터 형식 (line, area, areaspline, bar, column, spline, scatter)](#기본-데이터-형식)
2. [범위형 (arearange, columnrange)](#범위형)
3. [버블형 (bubble, packedbubble)](#버블형)
4. [박스플롯 (boxplot)](#박스플롯)
5. [파이/깔때기/피라미드 (pie, funnel, pyramid)](#파이깔때기피라미드)
6. [게이지 (gauge, solidgauge)](#게이지)
7. [히트맵/트리맵/타일맵 (heatmap, treemap, tilemap)](#히트맵트리맵타일맵)
8. [관계형 (sankey, dependencywheel, networkgraph)](#관계형)
9. [기타 (waterfall, wordcloud, errorbar)](#기타)
10. [JSON 조회 데이터 형식 (loadSearchData)](#json-조회-데이터-형식)
11. [XML 조회 데이터 형식](#xml-조회-데이터-형식)

---

## 기본 데이터 형식

line, area, areaspline, bar, column, spline, scatter 등 기본 차트는 동일한 3가지 데이터 형식을 지원합니다.

### 형식 1: 숫자 배열
y값으로 해석됩니다. x는 0부터 1씩 증가하거나 pointStart/pointInterval에 따라 자동 계산됩니다.
```javascript
series: [{ data: [0, 5, 3, 5] }]
```

### 형식 2: 2차원 배열
[x, y] 순서입니다. 첫번째 값이 문자열이면 포인트 이름으로 적용됩니다.
```javascript
series: [{ data: [[0, 1], [1, 2], [2, 8]] }]
// 문자열 이름 사용
series: [{ data: [["데이터1", 1], ["데이터2", 2], ["데이터3", 8]] }]
```

### 형식 3: 객체 배열
y값은 필수, x값은 선택입니다.
```javascript
series: [{
  data: [{
    x: 1, y: 9, name: "Point1", color: "#00FF00"
  }, {
    x: 2, y: 6, name: "Point2", color: "#FF00FF"
  }]
}]
```

> scatter는 형식 2에서 [x, y] 둘 다 필수입니다.

---

## 범위형

### arearange / columnrange
[x, low, high] 또는 {x, low, high} 형식입니다. x 생략 가능합니다.

```javascript
// 배열 형식
series: [{ data: [[0, 8, 3], [1, 1, 5], [2, 6, 8]] }]
// x 생략
series: [{ data: [[8, 3], [1, 5], [6, 8]] }]
// 객체 형식 (low, high 필수)
series: [{
  data: [{ x: 0, low: 9, high: 15 }, { x: 1, low: 3, high: 12 }]
}]
```

---

## 버블형

### bubble
[x, y, z] 형식입니다. z는 버블 크기입니다.
```javascript
series: [{
  data: [[94,74,60], [2,75,59], [20,12,4]]
}]
// 객체 형식
series: [{
  data: [{ x: 94, y: 74, z: 60, name: "Point1" }]
}]
```

### packedbubble
값 하나 또는 {name, value} 형식입니다.
```javascript
series: [{
  name: "그룹A",
  data: [{ name: "항목1", value: 100 }, { name: "항목2", value: 80 }]
}]
```

---

## 박스플롯

### boxplot
[x, low, q1, median, q3, high] 형식입니다. x 생략 가능합니다.
```javascript
series: [{
  data: [[1, 3, 5, 6, 8, 9], [2, 1, 3, 4, 7, 8]]
}]
// 객체 형식 (low, q1, median, q3, high 필수)
series: [{
  data: [{ x: 1, low: 3, q1: 5, median: 6, q3: 8, high: 9 }]
}]
```

---

## 파이/깔때기/피라미드

### pie
[이름, 값] 또는 {name, y} 형식입니다.
```javascript
series: [{
  data: [["축구", 44], ["농구", 26], ["배구", 20]]
}]
// 객체 형식 (y 필수)
series: [{
  data: [{
    name: "축구", y: 44.2, selected: true, sliced: true
  }, {
    name: "농구", y: 26.6
  }]
}]
```

### funnel / pyramid
pie와 동일한 형식입니다. 모듈 필요: `modules/funnel.js`

---

## 게이지

### gauge
y값만 필요합니다.
```javascript
series: [{ data: [80] }]
// 객체 형식
series: [{ data: [{ y: 80 }] }]
```

### solidgauge
gauge와 동일합니다. 추가 모듈: `highcharts-more.js` + `modules/solid-gauge.js`

---

## 히트맵/트리맵/타일맵

### heatmap
[x, y, value] 형식입니다. 모듈: `modules/heatmap.js`
```javascript
series: [{
  data: [[0, 0, 10], [0, 1, 19], [1, 0, 8], [1, 1, 24]]
}]
// 객체 형식 (x, y, value 필수)
series: [{
  data: [{ x: 0, y: 0, value: 10, name: "Point1" }]
}]
```

### treemap
{name, value} 또는 계층 구조({id, parent, name, value}) 형식입니다. 모듈: `modules/treemap.js`
```javascript
series: [{
  data: [
    { name: "항목A", value: 100 },
    { name: "항목B", value: 80 }
  ]
}]
// 계층 구조 (드릴다운 가능)
series: [{
  allowDrillToNode: true,
  data: [
    { id: "1.0", name: "상위1", value: 1000 },
    { id: "1.1", parent: "1.0", name: "하위1-1", value: 700 },
    { id: "1.2", parent: "1.0", name: "하위1-2", value: 300 }
  ]
}]
```

### tilemap
heatmap과 동일합니다. 모듈: `modules/tilemap.js` + `modules/heatmap.js`

---

## 관계형

### sankey
{from, to, weight} 형식입니다. 모듈: `modules/sankey.js`
```javascript
series: [{
  data: [
    { from: "A", to: "B", weight: 5 },
    { from: "A", to: "C", weight: 3 },
    { from: "B", to: "D", weight: 2 }
  ]
}]
```

### dependencywheel
sankey와 동일합니다. 모듈: `modules/sankey.js` + `modules/dependency-wheel.js`

### networkgraph
[from, to] 형식입니다. 모듈: `modules/networkgraph.js`
```javascript
series: [{
  data: [["A", "B"], ["A", "C"], ["B", "D"]]
}]
// 객체 형식
series: [{
  data: [{ from: "A", to: "B" }]
}]
```

---

## 기타

### waterfall
숫자 배열 + isSum/isIntermediateSum 플래그입니다. 모듈: `highcharts-more.js`
```javascript
series: [{
  data: [
    { name: "시작", y: 120 },
    { name: "증가", y: 50 },
    { name: "감소", y: -30 },
    { name: "합계", isSum: true }
  ]
}]
```

### wordcloud
{name, weight} 형식이거나 parseText()로 자동 추출합니다.
```javascript
series: [{
  data: [
    { name: "안녕", weight: 10 },
    { name: "세계", weight: 8 }
  ]
}]
// 또는 텍스트에서 자동 추출
var words = myChart.parseText("분석할 텍스트...", ["제외단어"], 100);
```

### errorbar
[x, low, high] 또는 {x, low, high} 형식입니다.
```javascript
series: [{
  type: "errorbar",
  data: [[0, 48, 53], [1, 53, 60], [2, 47, 58]]
}]
```

---

## JSON 조회 데이터 형식

`loadSearchData`에서 사용하는 IBChart 고유 JSON 형식입니다.

```javascript
{
  ibchart: {
    backgroundColor: "white",
    borderWidth: "1",
    title: "타이틀",
    subtitle: "부제목",
    etcData: [
      { key: "sname", value: "홍길동" },
      { key: "age", value: "20" }
    ],
    data: [{
      axisLabel: "1/4분기",
      series: [{
        seriesType: "line",
        seriesName: "중국",
        seriesColor: "blue",
        pointName: "하나",
        pointColor: "yellow",
        value: 220
      }, {
        seriesType: "column",
        seriesName: "호주",
        seriesColor: "#DDDDFF",
        value: 120
      }]
    }, {
      axisLabel: "2/4분기",
      series: [280, 256, 222]  // 값만 나열 가능
    }]
  }
}
```

### JSON 구성 요소
| name | required | description |
|------|----------|-------------|
| `ibchart` | 필수 | 최상위 요소 |
| `data` | 필수 | 데이터 시작 요소 |
| `series` | 필수 | 시리즈 포인트 |
| etcData | 선택 | 기타 데이터 |

### series 속성
| name | type | description |
|------|------|-------------|
| seriesType | string | 시리즈 차트 타입 |
| seriesName | string | 시리즈 이름 |
| seriesColor | string | 시리즈 색상 |
| pointName | string | 포인트 이름 |
| pointColor | string | 포인트 색상 |
| value | number | 포인트 값 |

---

## XML 조회 데이터 형식

```xml
<IBCHART TYPE="" BACKGROUNDCOLOR='#CCFFCC' TITLE='타이틀' SUBTITLE='부제목'>
  <ETC-DATA>
    <ETC key="sname">홍길동</ETC>
  </ETC-DATA>
  <DATA>
    <POINTSET AXISLABEL="1/4분기">
      <SERIES SERIESTYPE="line" SERIESNAME="중국" SERIESCOLOR="blue">50</SERIES>
      <SERIES SERIESTYPE="area" SERIESNAME="호주" SERIESCOLOR="red">48</SERIES>
    </POINTSET>
    <POINTSET AXISLABEL="2/4분기">
      <SERIES>22</SERIES>
      <SERIES>13</SERIES>
    </POINTSET>
  </DATA>
</IBCHART>
```

### XML 구성 요소
| name | required | description |
|------|----------|-------------|
| `IBCHART` | 필수 | 최상위 요소 |
| `DATA` | 필수 | 데이터 시작 요소 |
| `POINTSET` | 필수 | 포인트 집합 |
| `SERIES` | 필수 | 시리즈 포인트 |
| ETC-DATA | 선택 | 기타 데이터 |
