---
name: nexacron-form
description: >
  NexacroN Form 객체의 전체 API 레퍼런스. 생명주기, 컴포넌트 접근, alert/confirm 등을 다룬다.
  NexacroN Form 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  form, onload, onbeforeclose, lookupAll, getOwnerFrame 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-form

NexacroN Form 객체의 전체 API 레퍼런스. 생명주기, 컴포넌트 접근, alert/confirm 등을 다룬다.

## Form

- Properties: 56개
- Methods: 50개
- Events: 42개

### 주요 Properties
`-nexa-border`, `-nexa-edge`, `-nexa-rtl-background-image`, `-nexa-rtl-edge-image`, `accessibilityaction`, `accessibilitydesclevel`, `accessibilitydescription`, `accessibilityenable`, `accessibilitylabel`, `accessibilityrole`, `all`, `background`, `binds`, `border-radius`, `color`
  외 41개 → `references/Form_properties.md` 참조

### 주요 Methods
`addChild`, `addEventHandler`, `addEventHandlerLookup`, `alert`, `cancelTransaction`, `clearEventHandler`, `close`, `confirm`, `findEventHandler`, `getCurrentLayoutID`, `getEventHandler`, `getFirstAccessibilityComponent`, `getFirstComponent`, `getFocus`, `getHScrollPos`
  외 35개 → `references/Form_methods.md` 참조

### 주요 Events
`canlayoutchange`, `canstepchange`, `onactivate`, `onbeforeclose`, `onbindingvaluechanged`, `onclick`, `onclose`, `oncontextmenu`, `ondeactivate`, `ondevicebuttonup`
  외 32개 → `references/Form_events.md` 참조

### 하위 객체
- **Layout**: Properties 22, Methods 0, Events 0
- **StepControl**: Properties 8, Methods 0, Events 0
  → `references/Form_sub_objects.md` 참조

## 상세 레퍼런스

- `references/Form_properties.md` — Form 전체 Property 목록
- `references/Form_methods.md` — Form 전체 Method 목록
- `references/Form_events.md` — Form 전체 Event 목록
