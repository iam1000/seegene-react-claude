---
name: ibchart
description: IBChart 차트 컴포넌트 개발 지원 스킬. IBChart(Highcharts 기반 JavaScript 차트 라이브러리)를 사용한 차트 생성, 옵션 설정, 데이터 로딩, 이벤트 처리, 시리즈 조작 등을 도와줍니다. 사용자가 차트 코드를 작성하거나, ibchart/IBChart 관련 질문을 하거나, setOptions/loadSearchData/addSeries 등 IBChart API를 사용하거나, 웹에서 데이터 시각화 차트를 만들려고 할 때 이 스킬을 사용하세요. ibchart, 차트 만들기, 차트 옵션, 시리즈 추가, 데이터 로드, 차트 이벤트, Highcharts 설정 등의 키워드에 반응합니다.
---

# IBChart 개발 지원 스킬

IBChart는 Highcharts를 내부에 포함한 웹 차트 컴포넌트로, 순수 JavaScript 기반입니다.

## 핵심 워크플로우

IBChart로 차트를 만드는 기본 단계:

1. **HTML에 스크립트 포함**
2. **차트 객체 생성** — `createIBChart(id, divId, width, height)`
3. **옵션 설정** — `myChart.setOptions({...})`
4. **데이터 로드** — `myChart.loadSearchData({...})`
5. **이벤트 등록** (필요시) — `myChart.setEventListener(type, func)`

## 차트 객체 생성

```javascript
// 기본 생성
var myChart = createIBChart("chart1", "chartDiv", 800, 400);

// jQuery 사용 시
$(document).ready(function() {
  var myChart = createIBChart("chart1", "chartDiv", 800, 400);
});
```

## setOptions — 차트 속성 설정

`setOptions`는 차트의 모든 속성을 설정하는 핵심 메서드입니다.

```javascript
myChart.setOptions({
  chart: {
    type: "column",           // 차트 유형
    backgroundColor: "#fff",  // 배경색
    zoomType: "x"             // 줌 방식: "x", "y", "xy"
  },
  title: {
    text: "매출 현황"
  },
  subtitle: {
    text: "2024년 분기별"
  },
  xAxis: {
    categories: ["1분기", "2분기", "3분기", "4분기"],
    title: { text: "분기" }
  },
  yAxis: {
    title: { text: "매출액(억원)" },
    tickInterval: 100
  },
  legend: {
    layout: "horizontal",    // "horizontal" | "vertical"
    align: "center",         // "left" | "center" | "right"
    verticalAlign: "bottom"  // "top" | "middle" | "bottom"
  },
  tooltip: {
    shared: true,
    valueSuffix: "억원"
  },
  plotOptions: {
    series: {
      dataLabels: { enabled: true },
      shadow: false
    },
    column: {
      pointPadding: 0.02,
      stacking: "normal"     // "normal" | "percent"
    }
  },
  colors: ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c"]
});
```

### setOptions 두 번째 인자 (opt)

```javascript
myChart.setOptions({...}, {
  append: true,      // 이전 설정과 병합 (기본: false)
  redraw: true,      // 즉시 다시 그리기 (기본: false)
  resetData: true,   // 데이터 초기화 여부
  mergeData: false,  // 데이터 덮어쓰기 여부
  deepCopy: false    // 깊은 복사 여부
});
```

## 지원 차트 유형

| type | 차트명 | 추가 모듈 필요 |
|------|--------|----------------|
| `line` | 꺾은선 (기본값) | - |
| `spline` | 부드러운선 | - |
| `area` | 영역 | - |
| `areaspline` | 부드러운선 영역 | - |
| `arearange` | 영역 범위 | highcharts-more.js |
| `column` | 세로 막대 | - |
| `columnrange` | 세로 막대 범위 | highcharts-more.js |
| `bar` | 가로 막대 | - |
| `pie` | 파이 | - |
| `scatter` | 산점 | - |
| `bubble` | 버블 | highcharts-more.js |
| `packedbubble` | 조밀 버블 | highcharts-more.js |
| `boxplot` | 박스플롯 | highcharts-more.js |
| `gauge` | 게이지 | highcharts-more.js |
| `solidgauge` | 솔리드 게이지 | highcharts-more.js + modules/solid-gauge.js |
| `heatmap` | 히트맵 | modules/heatmap.js |
| `treemap` | 트리맵 | modules/treemap.js |
| `tilemap` | 타일맵 | modules/tilemap.js + modules/heatmap.js |
| `waterfall` | 폭포형 | highcharts-more.js |
| `funnel` | 깔때기 | modules/funnel.js |
| `pyramid` | 피라미드 | modules/funnel.js |
| `sankey` | 생키 | modules/sankey.js |
| `dependencywheel` | 의존 바퀴 | modules/sankey.js + modules/dependency-wheel.js |
| `networkgraph` | 네트워크 | modules/networkgraph.js |
| `wordcloud` | 워드클라우드 | - |
| `polar` | 방사형 (chart.polar: true) | highcharts-more.js |

## loadSearchData — 데이터 로드

### JSON 형식 (권장)

```javascript
myChart.loadSearchData({
  ibchart: {
    title: "매출 현황",
    data: [{
      axisLabel: "1분기",
      series: [{
        seriesType: "column",
        seriesName: "국내",
        seriesColor: "#7cb5ec",
        value: 220
      }, {
        seriesType: "line",
        seriesName: "해외",
        seriesColor: "#f7a35c",
        value: 180
      }]
    }, {
      axisLabel: "2분기",
      series: [280, 250]  // 값만 나열 가능
    }]
  }
});
```

### loadSearchData 옵션

```javascript
myChart.loadSearchData(data, {
  append: true,       // 기존 데이터에 병합
  resetData: false,   // 데이터 초기화 여부
  mergeData: true,    // 기존 데이터 위에 덮어쓰기
  deepCopy: false     // 깊은 복사
});
```

## 이벤트 처리

세 가지 방법으로 이벤트를 등록할 수 있습니다:

```javascript
// 방법 1: setEventListener (단일 이벤트)
myChart.setEventListener("pointClick", function(event) {
  console.log("클릭된 값:", event.point.y);
});

// 방법 2: setEvents (다중 이벤트)
myChart.setEvents({
  searchEnd: function(event) {
    if (event.code === -1) return -1;
    console.log("조회 완료");
  },
  pointClick: function(event) {
    console.log(event.point.name);
  }
});

// 방법 3: setOptions 내 events
myChart.setOptions({
  events: {
    click: function(event) { /* 차트 영역 클릭 */ }
  }
});
```

이벤트 등록 후 반드시 `myChart.draw()`를 호출해야 반영됩니다.

### 주요 이벤트 유형

| 이벤트 | 설명 |
|--------|------|
| `searchEnd` | 데이터 조회 완료 |
| `click` | 차트 영역 클릭 |
| `pointClick` | 포인트 클릭 |
| `pointMouseOver/Out` | 포인트 마우스 오버/아웃 |
| `seriesClick` | 시리즈 클릭 |
| `seriesHide/Show` | 시리즈 숨김/표시 |
| `seriesLegendItemClick` | 범례 항목 클릭 |
| `drilldown/drillup` | 드릴다운/드릴업 |
| `selection` | 영역 선택 (줌) |
| `redraw` | 다시 그리기 |

## 시리즈 조작

```javascript
// 시리즈 추가
myChart.addSeries({ data: [10, 20, 30] });

// 시리즈 접근 (0-based index)
var s = myChart.series(0);

// 시리즈 메서드
s.getData();                          // 데이터 가져오기
s.setData([20, 30, 50, 80]);          // 데이터 설정
s.addPoint({ x: 2, y: 3 });          // 포인트 추가
s.removePoint(0, true);              // 포인트 제거
s.setOptions({ yAxis: 1 }, { append: true }); // 옵션 변경
s.hide();                            // 숨기기
s.show();                            // 보이기
s.remove();                          // 삭제

// 시리즈 전체 삭제
myChart.removeAll();

// 특정 시리즈 삭제
myChart.removeSeries(0);
```

## 기타 유용한 메서드

```javascript
myChart.draw();                      // 차트 다시 그리기
myChart.draw(function() { /* 콜백 */ });
myChart.setSize(800, 400);           // 크기 변경
myChart.doPrint();                   // 인쇄
myChart.down2Image({                 // 이미지 다운로드
  fileName: "chart", type: "jpg",
  width: 800, url: "../Chart/Down2Image.jsp"
});
myChart.getSVGString();              // SVG 문자열
myChart.getOptions();                // 현재 옵션
myChart.getData();                   // 모든 데이터
myChart.getSeries(0);                // 시리즈 옵션 정보
myChart.setLang("kr");               // 언어 설정
myChart.version();                   // 버전 확인
```

## 자주 사용하는 패턴

### 복합 차트 (Mixed Chart)

```javascript
myChart.setOptions({
  chart: { type: "column" },
  yAxis: [
    { title: { text: "매출" } },
    { title: { text: "성장률" }, opposite: true }
  ]
});

myChart.loadSearchData({
  ibchart: {
    data: [{
      axisLabel: "1분기",
      series: [
        { seriesType: "column", seriesName: "매출", value: 200 },
        { seriesType: "line", seriesName: "성장률", value: 15 }
      ]
    }]
  }
});
// 성장률 시리즈를 보조 Y축에 연결
myChart.series(1).setOptions({ yAxis: 1 }, { append: true });
```

### 파이/도넛 차트

```javascript
myChart.setOptions({
  chart: { type: "pie" },
  plotOptions: {
    pie: {
      innerSize: "50%",        // 도넛 (0이면 일반 파이)
      dataLabels: {
        enabled: true,
        format: "{point.name}: {point.percentage:.1f}%"
      }
    }
  }
});
```

### 스택 차트

```javascript
myChart.setOptions({
  chart: { type: "column" },
  plotOptions: {
    column: {
      stacking: "normal"       // "normal" | "percent"
    }
  },
  yAxis: {
    stackLabels: { enabled: true }
  }
});
```

### 실시간 업데이트 (shift)

```javascript
setInterval(function() {
  myChart.series(0).addPoint(
    Math.random() * 100,
    { redraw: true, shift: true }
  );
}, 1000);
```

## 상세 레퍼런스

더 자세한 정보가 필요하면 아래 레퍼런스 파일을 참고하세요:

- `references/chart-types-data.md` — 차트 유형별 데이터 형식 상세
- `references/properties.md` — chart, xAxis, yAxis, legend, tooltip, plotOptions 속성 상세
- `references/functions.md` — ChartObject 및 Series 전체 메서드 레퍼런스
- `references/events.md` — 이벤트 종류별 상세 사용법과 event 객체
- `docs/merged_ibchart.md` — ibchart 전체 메뉴얼 
