# IBChart 함수 레퍼런스

## 목차
1. [ChartObject 메서드](#chartobject-메서드)
2. [Series 메서드](#series-메서드)

---

## ChartObject 메서드

### setOptions(prop, [opt])
차트의 모든 속성을 설정합니다.
```javascript
myChart.setOptions({
  chart: { type: "column" },
  title: { text: "제목" },
  xAxis: { categories: ["A", "B", "C"] },
  yAxis: { title: { text: "값" } },
  legend: { layout: "horizontal" },
  tooltip: { shared: true },
  plotOptions: { series: { dataLabels: { enabled: true } } },
  colors: ["#7cb5ec", "#434348"],
  series: [{ data: [10, 20, 30] }]
}, {
  append: true,       // 이전 설정과 병합 (기본: false)
  redraw: true,       // 즉시 다시 그리기 (기본: false)
  resetData: true,    // 데이터 초기화 여부
  mergeData: false,   // 데이터 덮어쓰기 여부
  mergeColors: false,  // 색상값 병합 여부
  resetColors: false,  // 색상값 덮어쓰기 여부
  deepCopy: false      // 깊은 복사 여부
});
```

### loadSearchData(data, [opt])
데이터 객체 또는 문자열을 차트에 로드합니다.
```javascript
myChart.loadSearchData({
  ibchart: {
    data: [{
      axisLabel: "1분기",
      series: [{ seriesType: "column", seriesName: "매출", value: 200 }]
    }]
  }
}, {
  append: true,       // 기존 데이터에 병합 (기본: false)
  resetData: true,    // 데이터 초기화 여부 (기본: true)
  mergeData: false,   // 데이터 덮어쓰기 여부 (기본: false)
  deepCopy: false      // 깊은 복사 (기본: false)
});
```

### draw([callback])
차트의 최신 상태를 반영하여 다시 그립니다.
```javascript
myChart.draw();
myChart.draw(function() {
  console.log("렌더링 완료");
});
```

### addSeries(prop, [opt])
시리즈를 동적으로 추가합니다.
```javascript
myChart.addSeries({
  data: [10, 20, 30],
  type: "line",
  name: "신규 시리즈"
}, {
  redraw: true  // 추가 후 다시 그릴지 여부
});
```

### removeSeries(index)
특정 시리즈를 삭제합니다.
```javascript
myChart.removeSeries(0);  // 첫번째 시리즈 삭제
```

### removeAll()
모든 시리즈를 삭제합니다.
```javascript
myChart.removeAll();
```

### series(index)
특정 시리즈 객체에 접근합니다. (0-based index)
```javascript
var s = myChart.series(0);  // 첫번째 시리즈
s.setData([10, 20, 30]);
```

### getSeries(index)
특정 시리즈의 옵션 정보를 가져옵니다.
```javascript
var seriesInfo = myChart.getSeries(0);
```

### setSize(width, height)
차트의 너비 및 높이를 동적으로 변경합니다.
```javascript
myChart.setSize(800, 400);  // 800px x 400px
```

### setEventListener(eventType, func)
특정 이벤트를 추가합니다. 추가 후 `draw()` 호출 필요합니다.
```javascript
myChart.setEventListener("pointClick", function(event) {
  console.log("클릭된 값:", event.point.y);
});
myChart.draw();
```

### setEvents(opt)
여러 이벤트를 한번에 추가합니다. 추가 후 `draw()` 호출 필요합니다.
```javascript
myChart.setEvents({
  searchEnd: function(event) {
    if (event.code === -1 || event.msg !== "OK") return -1;
    console.log("조회 완료");
  },
  pointClick: function(event) {
    console.log(event.point.name);
  }
});
myChart.draw();
```

### getData()
차트의 모든 옵션 객체를 반환합니다.
```javascript
var data = myChart.getData();
```

### getOptions()
차트의 현재 옵션을 반환합니다.
```javascript
var options = myChart.getOptions();
```

### getId()
차트의 ID를 반환합니다.
```javascript
var id = myChart.getId();
```

### getSVGString()
차트를 SVG 문자열로 반환합니다.
```javascript
var svg = myChart.getSVGString();
```

### doPrint()
차트를 인쇄합니다. 브라우저 인쇄 기능을 사용합니다.
```javascript
myChart.doPrint();
```

### down2Image(opt)
차트를 이미지로 다운로드합니다.
```javascript
myChart.down2Image({
  fileName: "ChartImage",    // 파일명 (기본: "chart")
  type: "jpg",               // 형식: "jpg", "png", "pdf", "svg"
  width: 800,                // 이미지 너비(px)
  url: "../Chart/Down2Image.jsp",  // 서버 URL (필수)
  sourceWidth: undefined,    // 변환 대상 차트 너비
  sourceHeight: undefined    // 변환 대상 차트 높이
});
```

### setLang(locale)
차트 언어를 설정합니다.
```javascript
myChart.setLang("kr");  // 한국어
myChart.setLang("en");  // 영어
myChart.setLang("jp");  // 일본어
myChart.setLang("cn");  // 중국어
```

### getLang()
현재 언어 코드를 반환합니다.
```javascript
var lang = myChart.getLang();  // "kr"
```

### getAlertText(str)
언어 설정에 담긴 문자열을 반환합니다. `.format()`으로 인자 치환 가능합니다.
```javascript
myChart.getAlertText("경고입니다!");
// "경고입니다!"

myChart.getAlertText("${0}는 ${1}이다.").format("사과", "과일");
// "사과는 과일이다."

myChart.getAlertText(IBLANG["ko"].alert.chartData);
// "데이터가 잘못되었습니다!"
```

### parseText(text, ignore, max)
문장에서 단어를 추출하고 빈도수를 계산합니다. (빈도수 기준 내림차순 정렬)
```javascript
var words = myChart.parseText("분석할 텍스트 내용...", ["제외", "단어"], 100);
// words를 워드클라우드 series.data로 사용
```

### updateWords(data, opt)
워드클라우드 차트의 데이터를 업데이트합니다.
```javascript
myChart.updateWords(newWordsData, { redraw: true });
```

### version()
IBChart 버전을 반환합니다.
```javascript
var ver = myChart.version();
```

---

## Series 메서드

`myChart.series(index)`로 접근한 시리즈 객체에서 사용합니다.

### getData()
시리즈 데이터를 가져옵니다.
```javascript
var data = myChart.series(0).getData();
```

### setData(data, [opt])
시리즈 데이터를 설정합니다.
```javascript
myChart.series(0).setData([20, 30, 50, 80, 90], {
  append: false,     // 기존 데이터에 append (기본: false)
  redraw: true,      // 다시 그릴지 (기본: true)
  animation: true    // 애니메이션 (기본: true)
});
```

### addPoint(prop, [opt])
포인트를 동적으로 추가합니다.
```javascript
// 값만
myChart.series(0).addPoint(50);
// 객체
myChart.series(0).addPoint({ name: "A", x: 2, y: 3 }, {
  redraw: true,   // 다시 그릴지 (기본: true)
  shift: false     // 좌측 포인트 제거하며 흐름 표현 (기본: false)
});
```

### removePoint(index, redraw)
특정 포인트를 삭제합니다.
```javascript
myChart.series(0).removePoint(0, true);  // 첫번째 포인트 삭제 후 다시 그림
```

### setOptions(prop, [opt])
시리즈 속성을 설정합니다.
```javascript
myChart.series(0).setOptions({
  type: "line",       // 시리즈 타입 변경
  name: "새 이름",    // 시리즈 이름
  yAxis: 1,          // 보조 Y축 연결
  xAxis: 0,          // X축 번호
  stack: "group1",   // 스택 그룹
  legendIndex: 0,    // 범례 순서
  zindex: 3          // z-index
}, {
  append: true,      // 이전 설정과 병합 (기본: false)
  redraw: true       // 다시 그릴지 (기본: false)
});
```

### hide()
시리즈를 숨깁니다.
```javascript
myChart.series(0).hide();
```

### show()
시리즈를 보이게 합니다.
```javascript
myChart.series(0).show();
```

### remove()
시리즈를 삭제합니다.
```javascript
myChart.series(0).remove();
```
