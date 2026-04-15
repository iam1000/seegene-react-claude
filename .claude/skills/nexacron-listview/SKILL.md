---
name: nexacron-listview
description: >
  NexacroN ListView 컴포넌트의 전체 API 레퍼런스. 밴드 구성, 셀 바인딩, 편집 등을 다룬다.
  NexacroN ListView 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  listview, lsv_, listviewband, oncellclick 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-listview

NexacroN ListView 컴포넌트의 전체 API 레퍼런스. 밴드 구성, 셀 바인딩, 편집 등을 다룬다.

## ListView

- Properties: 85개
- Methods: 87개
- Events: 43개

### 주요 Properties
`-nexa-border`, `-nexa-edge`, `-nexa-rtl-background-image`, `-nexa-rtl-edge-image`, `accessibilityaction`, `accessibilitydesclevel`, `accessibilitydescription`, `accessibilityenable`, `accessibilitylabel`, `accessibilityrole`, `autoenter`, `autoupdatetype`, `background`, `bandexpandtype`, `bandindentsize`
  외 70개 → `references/ListView_properties.md` 참조

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `bringToFront`, `bringToPrev`, `clearEventHandler`, `clearSelect`, `createFormat`, `destroy`, `dropdown`, `dropdownCalendar`, `dropdownCombo`, `findEventHandler`, `getBandExpandStatus`, `getBandProperty`
  외 72개 → `references/ListView_methods.md` 참조

### 주요 Events
`onbandclick`, `onbanddblclick`, `onbandexpandclick`, `onbandstatuschanged`, `oncellclick`, `oncelldblclick`, `oncellexpandclick`, `oncellimeaction`, `onclick`, `oncloseup`
  외 33개 → `references/ListView_events.md` 참조

### 하위 객체
- **ListViewBandControl**: Properties 26, Methods 0, Events 0
- **ListViewBandExpandbarControl**: Properties 22, Methods 0, Events 0
- **ListViewCellControl**: Properties 135, Methods 0, Events 0
- **ListViewDetailBandControl**: Properties 24, Methods 0, Events 0
  → `references/ListView_sub_objects.md` 참조

## 상세 레퍼런스

- `references/ListView_properties.md` — ListView 전체 Property 목록
- `references/ListView_methods.md` — ListView 전체 Method 목록
- `references/ListView_events.md` — ListView 전체 Event 목록
