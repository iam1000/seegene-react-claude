---
name: nexacron-events
description: >
  NexacroN EventObject 및 주요 EventInfo 객체들의 전체 API 레퍼런스.
  NexacroN EventObject, BindItem, System 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  eventinfo, eventobject, binditem, system, e.fromrow, e.reason 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-events

NexacroN EventObject 및 주요 EventInfo 객체들의 전체 API 레퍼런스.

## EventObject

- Properties: 2개
- Methods: 1개
- Events: 0개

### 주요 Properties
`length`, `name`

### 주요 Methods
`fireEvent`

## BindItem

- Properties: 6개
- Methods: 3개
- Events: 0개

### 주요 Properties
`columnid`, `compid`, `datasetid`, `name`, `parent`, `propid`

### 주요 Methods
`bind`, `destroy`, `init`

## System

- Properties: 15개
- Methods: 31개
- Events: 0개

### 주요 Properties
`computername`, `cpuarchitecture`, `cpucount`, `cputype`, `locale`, `loginuser`, `mobileorientation`, `mobileproducttype`, `monitorcount`, `navigatorfullname`, `navigatorname`, `navigatorversion`, `notificationtoken`, `osversion`, `taskbarsize`

### 주요 Methods
`attachChildFrame`, `checkDevicePermission`, `clearClipboard`, `clientToScreenX`, `clientToScreenY`, `convertRealPath`, `execBrowser`, `execDefaultBrowser`, `execNexacro`, `execShell`, `exportPDF`, `getClipboard`, `getCursorX`, `getCursorY`, `getMonitorIndex`
  외 16개 → `references/System_methods.md` 참조

## 상세 레퍼런스

- `references/EventObject_properties.md` — EventObject 전체 Property 목록
- `references/EventObject_methods.md` — EventObject 전체 Method 목록
- `references/EventObject_events.md` — EventObject 전체 Event 목록
- `references/BindItem_properties.md` — BindItem 전체 Property 목록
- `references/BindItem_methods.md` — BindItem 전체 Method 목록
- `references/BindItem_events.md` — BindItem 전체 Event 목록
- `references/System_properties.md` — System 전체 Property 목록
- `references/System_methods.md` — System 전체 Method 목록
- `references/System_events.md` — System 전체 Event 목록
