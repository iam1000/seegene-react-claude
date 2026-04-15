---
name: nexacron-script-objects
description: >
  NexacroN 스크립트 내장 객체(Date, Decimal, DomParser 등)의 전체 API 레퍼런스.
  NexacroN Date, Decimal, DomParser, Image, Point, Rect, XmlSerializer, PluginObject 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  decimal, domparser, xmlserializer, nexacro.Decimal, nexacro.Date 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-script-objects

NexacroN 스크립트 내장 객체(Date, Decimal, DomParser 등)의 전체 API 레퍼런스.

## Date

- Properties: 0개
- Methods: 53개
- Events: 0개

### 주요 Methods
`addDate`, `addHours`, `addMilliseconds`, `addMinutes`, `addMonth`, `addSeconds`, `addYear`, `getDate`, `getDay`, `getFullYear`, `getHours`, `getMilliseconds`, `getMinutes`, `getMonth`, `getSeconds`
  외 38개 → `references/Date_methods.md` 참조

## Decimal

- Properties: 0개
- Methods: 25개
- Events: 0개

### 주요 Methods
`abs`, `addDecimal`, `addDouble`, `ceil`, `divDecimal`, `divDouble`, `floor`, `isEqual`, `isInfinity`, `isNaN`, `isNaNOrInf`, `isNegative`, `isZero`, `modDecimal`, `modDouble`
  외 10개 → `references/Decimal_methods.md` 참조

## DomParser

- Properties: 1개
- Methods: 13개
- Events: 1개

### 주요 Properties
`name`

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `clearEventHandler`, `findEventHandler`, `getEventHandler`, `insertEventHandler`, `parseFromString`, `removeEvent`, `removeEventHandler`, `removeEventHandlerLookup`, `setEventHandler`, `setEventHandlerLookup`

### 주요 Events
`onerror`

## Image

- Properties: 3개
- Methods: 2개
- Events: 2개

### 주요 Properties
`height`, `src`, `width`

### 주요 Methods
`getBase64String`, `setBase64String`

### 주요 Events
`onerror`, `onload`

## Point

- Properties: 2개
- Methods: 3개
- Events: 0개

### 주요 Properties
`x`, `y`

### 주요 Methods
`clone`, `copy`, `equals`

## Rect

- Properties: 4개
- Methods: 7개
- Events: 0개

### 주요 Properties
`height`, `left`, `top`, `width`

### 주요 Methods
`clear`, `clone`, `copy`, `equals`, `getBottom`, `getRight`, `isSameSize`

## XmlSerializer

- Properties: 1개
- Methods: 1개
- Events: 0개

### 주요 Properties
`name`

### 주요 Methods
`serializeToString`

## PluginObject

- Properties: 0개
- Methods: 3개
- Events: 0개

### 주요 Methods
`callMethod`, `getProperty`, `setProperty`

## 상세 레퍼런스

- `references/Date_properties.md` — Date 전체 Property 목록
- `references/Date_methods.md` — Date 전체 Method 목록
- `references/Date_events.md` — Date 전체 Event 목록
- `references/Decimal_properties.md` — Decimal 전체 Property 목록
- `references/Decimal_methods.md` — Decimal 전체 Method 목록
- `references/Decimal_events.md` — Decimal 전체 Event 목록
- `references/DomParser_properties.md` — DomParser 전체 Property 목록
- `references/DomParser_methods.md` — DomParser 전체 Method 목록
- `references/DomParser_events.md` — DomParser 전체 Event 목록
- `references/Image_properties.md` — Image 전체 Property 목록
- `references/Image_methods.md` — Image 전체 Method 목록
- `references/Image_events.md` — Image 전체 Event 목록
- `references/Point_properties.md` — Point 전체 Property 목록
- `references/Point_methods.md` — Point 전체 Method 목록
- `references/Point_events.md` — Point 전체 Event 목록
- `references/Rect_properties.md` — Rect 전체 Property 목록
- `references/Rect_methods.md` — Rect 전체 Method 목록
- `references/Rect_events.md` — Rect 전체 Event 목록
- `references/XmlSerializer_properties.md` — XmlSerializer 전체 Property 목록
- `references/XmlSerializer_methods.md` — XmlSerializer 전체 Method 목록
- `references/XmlSerializer_events.md` — XmlSerializer 전체 Event 목록
- `references/PluginObject_properties.md` — PluginObject 전체 Property 목록
- `references/PluginObject_methods.md` — PluginObject 전체 Method 목록
- `references/PluginObject_events.md` — PluginObject 전체 Event 목록
