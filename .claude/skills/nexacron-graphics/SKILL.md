---
name: nexacron-graphics
description: >
  NexacroN 그래픽 컴포넌트(Graphics, Sketch)의 전체 API 레퍼런스.
  NexacroN Graphics, Sketch 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  graphics, sketch, ellipse, polyline, polygon, stroke 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-graphics

NexacroN 그래픽 컴포넌트(Graphics, Sketch)의 전체 API 레퍼런스.

## Graphics

- Properties: 31개
- Methods: 55개
- Events: 26개

### 주요 Properties
`-nexa-border`, `-nexa-rtl-background-image`, `background`, `border-radius`, `bottom`, `box-shadow`, `cssclass`, `enable`, `enableevent`, `flexgrow`, `flexshrink`, `height`, `id`, `initvalueid`, `layoutorder`
  외 16개 → `references/Graphics_properties.md` 참조

### 주요 Methods
`addChild`, `addEvent`, `addEventHandler`, `addEventHandlerLookup`, `bringToFront`, `bringToPrev`, `clear`, `clearEventHandler`, `destroy`, `findEventHandler`, `getAllObjects`, `getEventHandler`, `getFirstChild`, `getLastChild`, `getNextObject`
  외 40개 → `references/Graphics_methods.md` 참조

### 주요 Events
`onclick`, `ondblclick`, `ondevicebuttonup`, `ondrag`, `ondragenter`, `ondragleave`, `ondragmove`, `ondrop`, `onkeydown`, `onkeyup`
  외 16개 → `references/Graphics_events.md` 참조

### 하위 객체
- **GraphicsEllipse**: Properties 10, Methods 19, Events 0
- **GraphicsGroup**: Properties 5, Methods 28, Events 0
- **GraphicsImage**: Properties 11, Methods 20, Events 0
- **GraphicsLine**: Properties 12, Methods 19, Events 0
- **GraphicsPath**: Properties 11, Methods 30, Events 0
- **GraphicsPaths**: Properties 11, Methods 32, Events 0
- **GraphicsRect**: Properties 14, Methods 19, Events 0
- **GraphicsText**: Properties 13, Methods 19, Events 0
  → `references/Graphics_sub_objects.md` 참조

## Sketch

- Properties: 56개
- Methods: 58개
- Events: 29개

### 주요 Properties
`-nexa-border`, `-nexa-edge`, `-nexa-padding`, `-nexa-rtl-background-image`, `-nexa-rtl-edge-image`, `accessibilityaction`, `accessibilitydesclevel`, `accessibilitydescription`, `accessibilityenable`, `accessibilitylabel`, `accessibilityrole`, `background`, `border-radius`, `bottom`, `box-shadow`
  외 41개 → `references/Sketch_properties.md` 참조

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `bringToFront`, `bringToPrev`, `clear`, `clearEventHandler`, `destroy`, `drawErase`, `drawStroke`, `drawText`, `findEventHandler`, `getEventHandler`, `getOffsetBottom`, `getOffsetHeight`
  외 43개 → `references/Sketch_methods.md` 참조

### 주요 Events
`onclick`, `oncontextmenu`, `ondblclick`, `ondevicebuttonup`, `ondrag`, `ondragenter`, `ondragleave`, `ondragmove`, `ondrop`, `onerror`
  외 19개 → `references/Sketch_events.md` 참조

## 상세 레퍼런스

- `references/Graphics_properties.md` — Graphics 전체 Property 목록
- `references/Graphics_methods.md` — Graphics 전체 Method 목록
- `references/Graphics_events.md` — Graphics 전체 Event 목록
- `references/Sketch_properties.md` — Sketch 전체 Property 목록
- `references/Sketch_methods.md` — Sketch 전체 Method 목록
- `references/Sketch_events.md` — Sketch 전체 Event 목록
