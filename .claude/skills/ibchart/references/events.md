# IBChart 이벤트 레퍼런스

## 이벤트 등록 방법

3가지 방법으로 이벤트를 등록할 수 있습니다. 등록 후 `draw()` 호출이 필요합니다.

```javascript
// 방법 1: setEventListener (단일)
myChart.setEventListener("eventType", function(event) { ... });

// 방법 2: setEvents (다중)
myChart.setEvents({
  eventType1: function(event) { ... },
  eventType2: function(event) { ... }
});

// 방법 3: setOptions 내 events
myChart.setOptions({
  events: {
    eventType: function(event) { ... }
  }
});
```

---

## 차트 이벤트

### searchEnd
데이터 조회 완료 시점에 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| event.code | number | 결과 코드 (-1: 에러) |
| event.msg | string | 결과 메시지 ("OK" 등) |
| event.type | string | 이벤트 타입 |

```javascript
myChart.setEventListener("searchEnd", function(event) {
  if (event.code === -1 || event.msg !== "OK") {
    return -1;  // -1 반환 시 처리 중단
  }
  console.log("데이터 " + event.type + " 완료!");
});
```

### click
차트 영역 클릭 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| event.x | number | 클릭 x좌표 (컨테이너 기준) |
| event.y | number | 클릭 y좌표 (컨테이너 기준) |

```javascript
myChart.setEventListener("click", function(event) {
  console.log("클릭 좌표:", event.x, event.y);
});
```

### addSeries
시리즈 추가 완료 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| event.type | string | 이벤트 타입 ("add") |

### addPoint
포인트 추가 완료 시 발생합니다.

### redraw
차트가 다시 그려질 때 발생합니다.

### selection
마우스 드래그로 영역 선택 시 발생합니다 (zoomType 설정 필요).

### beforePrint / afterPrint
`doPrint()` 호출 시 인쇄 직전/직후에 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| event.type | string | "print" |

---

## 드릴다운 이벤트

### drilldown
드릴다운 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| event.x | number | 클릭 x좌표 |
| event.y | number | 클릭 y좌표 |
| this.category | string/number | 카테고리(axisLabel) |
| this.x | number | 포인트 x값 |
| this.y | number | 포인트 y값 |

```javascript
myChart.setEventListener("drilldown", function(event) {
  console.log("드릴다운:", this.category);
});
```

### drillup
드릴업 시 발생합니다.

### drillupAll
최상단까지 드릴업 시 발생합니다.

---

## 포인트 이벤트

### pointClick
시리즈의 포인트 클릭 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| event.point | object | 클릭된 포인트 객체 |
| event.point.x | number | x값 |
| event.point.y | number | y값 |
| event.point.name | string | 포인트 이름 |
| event.point.category | string | 카테고리 |
| this.series.name | string | 시리즈 이름 |

```javascript
myChart.setEventListener("pointClick", function(event) {
  console.log("시리즈:", this.series.name);
  console.log("값:", event.point.y);
});
// 또는 setOptions 내 events로 등록
myChart.setOptions({
  events: {
    pointClick: function() {
      alert("pointClick: " + this.series.name);
    }
  }
});
```

### pointMouseOver
포인트에 마우스 오버 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| this.x | number | x값 |
| this.y | number | y값 |
| this.name | string | 포인트 이름 |
| this.series.name | string | 시리즈 이름 |

### pointMouseOut
포인트에서 마우스 아웃 시 발생합니다. (pointMouseOver와 동일 속성)

### pointSelect
포인트 선택 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| this.x | number | x값 |
| this.y | number | y값 |
| this.name | string | 포인트 이름 |
| this.series.name | string | 시리즈 이름 |

### pointUnselect
포인트 선택 해제 시 발생합니다. (pointSelect와 동일 속성)

### pointUpdate
포인트 값 변경 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| event.options | object | 업데이트된 값 |
| this.x | number | x값 |
| this.y | number | y값 |

---

## 시리즈 이벤트

### seriesClick
시리즈 클릭 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| this.name | string | 시리즈 이름 |
| this.data | array | 시리즈 데이터 |
| this.index | number | 시리즈 인덱스 |
| event.point | object | 클릭된 포인트 |

```javascript
myChart.setEventListener("seriesClick", function(event) {
  console.log("시리즈:", this.name);
});
```

### seriesHide
시리즈 숨김 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| this.name | string | 시리즈 이름 |
| this.index | number | 시리즈 인덱스 |

### seriesShow
시리즈 표시 시 발생합니다. (seriesHide와 동일 속성)

### seriesMouseOver
시리즈에 마우스 오버 시 발생합니다.

### seriesMouseOut
시리즈에서 마우스 아웃 시 발생합니다.

### seriesLegendItemClick
범례 항목 클릭 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| this.name | string | 시리즈 이름 |
| this.index | number | 시리즈 인덱스 |
| this.visible | boolean | 현재 표시 상태 |

```javascript
myChart.setEventListener("seriesLegendItemClick", function(event) {
  console.log("범례 클릭:", this.name, "visible:", this.visible);
});
```

### seriesAfterAnimate
시리즈 애니메이션 완료 후 발생합니다.

### seriesCheckBoxClick
시리즈 체크박스 클릭 시 발생합니다.
| 속성 | 타입 | 설명 |
|------|------|------|
| event.checked | boolean | 체크 상태 |
| this.name | string | 시리즈 이름 |

---

## 이벤트 유형 전체 목록

| 이벤트 | 분류 | 설명 |
|--------|------|------|
| searchEnd | 차트 | 데이터 조회 완료 |
| click | 차트 | 차트 영역 클릭 |
| addSeries | 차트 | 시리즈 추가 완료 |
| addPoint | 차트 | 포인트 추가 완료 |
| redraw | 차트 | 다시 그리기 |
| selection | 차트 | 영역 선택(줌) |
| beforePrint | 차트 | 인쇄 직전 |
| afterPrint | 차트 | 인쇄 직후 |
| drilldown | 드릴 | 드릴다운 |
| drillup | 드릴 | 드릴업 |
| drillupAll | 드릴 | 최상단 드릴업 |
| pointClick | 포인트 | 포인트 클릭 |
| pointMouseOver | 포인트 | 포인트 마우스 오버 |
| pointMouseOut | 포인트 | 포인트 마우스 아웃 |
| pointSelect | 포인트 | 포인트 선택 |
| pointUnselect | 포인트 | 포인트 선택 해제 |
| pointUpdate | 포인트 | 포인트 업데이트 |
| seriesClick | 시리즈 | 시리즈 클릭 |
| seriesHide | 시리즈 | 시리즈 숨김 |
| seriesShow | 시리즈 | 시리즈 표시 |
| seriesMouseOver | 시리즈 | 시리즈 마우스 오버 |
| seriesMouseOut | 시리즈 | 시리즈 마우스 아웃 |
| seriesLegendItemClick | 시리즈 | 범례 항목 클릭 |
| seriesAfterAnimate | 시리즈 | 애니메이션 완료 |
| seriesCheckBoxClick | 시리즈 | 체크박스 클릭 |
| load | 차트 | 차트 완성 (setEvents에서만 사용) |
