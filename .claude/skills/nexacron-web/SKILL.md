---
name: nexacron-web
description: >
  NexacroN 웹/미디어 컴포넌트(WebBrowser, WebView, GoogleMap, VideoPlayer, Plugin)의 전체 API 레퍼런스.
  NexacroN WebBrowser, WebView, GoogleMap, VideoPlayer, Plugin 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  webbrowser, webview, googlemap, videoplayer, plugin, callMethod 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-web

NexacroN 웹/미디어 컴포넌트(WebBrowser, WebView, GoogleMap, VideoPlayer, Plugin)의 전체 API 레퍼런스.

## WebBrowser

- Properties: 34개
- Methods: 45개
- Events: 5개

### 주요 Properties
`-nexa-border`, `accessibilityaction`, `accessibilitydesclevel`, `accessibilitydescription`, `accessibilityenable`, `accessibilitylabel`, `accessibilityleavemessage`, `accessibilityrole`, `bottom`, `cssclass`, `enable`, `flexgrow`, `flexshrink`, `height`, `id`
  외 19개 → `references/WebBrowser_properties.md` 참조

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `bringToFront`, `bringToPrev`, `callMethod`, `clearEventHandler`, `destroy`, `findEventHandler`, `getEventHandler`, `getOffsetBottom`, `getOffsetHeight`, `getOffsetLeft`, `getOffsetRight`, `getOffsetTop`
  외 30개 → `references/WebBrowser_methods.md` 참조

### 주요 Events
`ondevicebuttonup`, `onloadcompleted`, `onmove`, `onsize`, `onusernotify`

## WebView

- Properties: 34개
- Methods: 45개
- Events: 5개

### 주요 Properties
`-nexa-border`, `accessibilityaction`, `accessibilitydesclevel`, `accessibilitydescription`, `accessibilityenable`, `accessibilitylabel`, `accessibilityleavemessage`, `accessibilityrole`, `bottom`, `cssclass`, `enable`, `flexgrow`, `flexshrink`, `height`, `id`
  외 19개 → `references/WebView_properties.md` 참조

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `bringToFront`, `bringToPrev`, `callScript`, `clearEventHandler`, `destroy`, `findEventHandler`, `getEventHandler`, `getOffsetBottom`, `getOffsetHeight`, `getOffsetLeft`, `getOffsetRight`, `getOffsetTop`
  외 30개 → `references/WebView_methods.md` 참조

### 주요 Events
`ondevicebuttonup`, `onloadcompleted`, `onmove`, `onsize`, `onusernotify`

## GoogleMap

- Properties: 38개
- Methods: 40개
- Events: 7개

### 주요 Properties
`-nexa-border`, `accessibilityaction`, `accessibilitydesclevel`, `accessibilitydescription`, `accessibilityenable`, `accessibilitylabel`, `accessibilityrole`, `apikey`, `bottom`, `enable`, `flexgrow`, `flexshrink`, `height`, `id`, `initvalueid`
  외 23개 → `references/GoogleMap_properties.md` 참조

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `addItem`, `clearEventHandler`, `destroy`, `findEventHandler`, `getAddress`, `getCoordinates`, `getEventHandler`, `getOffsetBottom`, `getOffsetHeight`, `getOffsetLeft`, `getOffsetRight`, `getOffsetTop`
  외 25개 → `references/GoogleMap_methods.md` 참조

### 주요 Events
`onclick`, `onerror`, `onload`, `onmapdrag`, `onmapdragend`, `onmapdragstart`, `onrecvsuccess`

### 하위 객체
- **GoogleMapCircle**: Properties 4, Methods 0, Events 0
- **GoogleMapMarker**: Properties 6, Methods 0, Events 0
- **GoogleMapPolygon**: Properties 5, Methods 0, Events 0
- **GoogleMapPolyline**: Properties 4, Methods 0, Events 0
  → `references/GoogleMap_sub_objects.md` 참조

## VideoPlayer

- Properties: 41개
- Methods: 39개
- Events: 5개

### 주요 Properties
`-nexa-border`, `accessibilityaction`, `accessibilitydesclevel`, `accessibilitydescription`, `accessibilityenable`, `accessibilitylabel`, `accessibilityrole`, `aspectratio`, `autoplay`, `bottom`, `cssclass`, `currenttime`, `duration`, `enable`, `enableevent`
  외 26개 → `references/VideoPlayer_properties.md` 참조

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `clearEventHandler`, `destroy`, `findEventHandler`, `getEventHandler`, `getOffsetBottom`, `getOffsetHeight`, `getOffsetLeft`, `getOffsetRight`, `getOffsetTop`, `getOffsetWidth`, `getPixelBottom`, `getPixelHeight`
  외 24개 → `references/VideoPlayer_methods.md` 참조

### 주요 Events
`oncurrenttimechanged`, `onerror`, `onmove`, `onplaystatuschanged`, `onsize`

## Plugin

- Properties: 39개
- Methods: 32개
- Events: 0개

### 주요 Properties
`-nexa-border`, `adjustalpha`, `archive`, `bottom`, `classid`, `classid64`, `code`, `codebase`, `contents`, `enable`, `flexgrow`, `flexshrink`, `height`, `id`, `initvalueid`
  외 24개 → `references/Plugin_properties.md` 참조

### 주요 Methods
`callMethod`, `getOffsetBottom`, `getOffsetHeight`, `getOffsetLeft`, `getOffsetRight`, `getOffsetTop`, `getOffsetWidth`, `getPixelBottom`, `getPixelHeight`, `getPixelLeft`, `getPixelRight`, `getPixelTop`, `getPixelWidth`, `getProperty`, `init`
  외 17개 → `references/Plugin_methods.md` 참조

## 상세 레퍼런스

- `references/WebBrowser_properties.md` — WebBrowser 전체 Property 목록
- `references/WebBrowser_methods.md` — WebBrowser 전체 Method 목록
- `references/WebBrowser_events.md` — WebBrowser 전체 Event 목록
- `references/WebView_properties.md` — WebView 전체 Property 목록
- `references/WebView_methods.md` — WebView 전체 Method 목록
- `references/WebView_events.md` — WebView 전체 Event 목록
- `references/GoogleMap_properties.md` — GoogleMap 전체 Property 목록
- `references/GoogleMap_methods.md` — GoogleMap 전체 Method 목록
- `references/GoogleMap_events.md` — GoogleMap 전체 Event 목록
- `references/VideoPlayer_properties.md` — VideoPlayer 전체 Property 목록
- `references/VideoPlayer_methods.md` — VideoPlayer 전체 Method 목록
- `references/VideoPlayer_events.md` — VideoPlayer 전체 Event 목록
- `references/Plugin_properties.md` — Plugin 전체 Property 목록
- `references/Plugin_methods.md` — Plugin 전체 Method 목록
- `references/Plugin_events.md` — Plugin 전체 Event 목록
