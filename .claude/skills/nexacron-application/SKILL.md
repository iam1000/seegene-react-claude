---
name: nexacron-application
description: >
  NexacroN Application, Environment, Screen 객체의 전체 API 레퍼런스.
  NexacroN Application, Environment, Screen 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  application, environment, screen, mainframe, onerror, onexit 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-application

NexacroN Application, Environment, Screen 객체의 전체 API 레퍼런스.

## Application

- Properties: 7개
- Methods: 25개
- Events: 10개

### 주요 Properties
`all`, `licenseurl`, `mainframe`, `name`, `screenid`, `trays`, `version`

### 주요 Methods
`addEventHandler`, `addEventHandlerLookup`, `addTray`, `addVariable`, `alert`, `cancelTransaction`, `clearEventHandler`, `confirm`, `exit`, `findEventHandler`, `getActiveForm`, `getActiveFrame`, `getEventHandler`, `insertEventHandler`, `isExistVariable`
  외 10개 → `references/Application_methods.md` 참조

### 주요 Events
`onafteruserconfirm`, `onbeforeexit`, `onbeforeuserconfirm`, `onduplicateexecution`, `onerror`, `onexit`, `onload`, `onloadforms`, `onloadingappvariables`, `onnotification`

### 하위 객체
- **Tray**: Properties 14, Methods 11, Events 8
  → `references/Application_sub_objects.md` 참조

## Environment

- Properties: 57개
- Methods: 4개
- Events: 6개

### 주요 Properties
`accessibilitybackwardkey`, `accessibilitydescreadtype`, `accessibilityfirstovermessage`, `accessibilityforwardkey`, `accessibilityheadingnexthotkey`, `accessibilityheadingprevhotkey`, `accessibilityhistorycount`, `accessibilitylastovermessage`, `accessibilityreplayhotkey`, `accessibilitytype`, `accessibilitywholereadhotkey`, `accessibilitywholereadtype`, `addcookietovariable`, `checkversion`, `datasetloadtype`
  외 42개 → `references/Environment_properties.md` 참조

### 주요 Methods
`findAccessibility`, `getDeviceAdaptor`, `playAccessibility`, `userNotify`

### 주요 Events
`onaccessibilitykey`, `ondevicepermission`, `onerror`, `onextendedcommand`, `onload`, `onuserhotkey`

## Screen

- Properties: 6개
- Methods: 0개
- Events: 0개

### 주요 Properties
`id`, `specifiedlocale`, `specifiedos`, `type`, `userzoom`, `zoomfactortype`

## 상세 레퍼런스

- `references/Application_properties.md` — Application 전체 Property 목록
- `references/Application_methods.md` — Application 전체 Method 목록
- `references/Application_events.md` — Application 전체 Event 목록
- `references/Environment_properties.md` — Environment 전체 Property 목록
- `references/Environment_methods.md` — Environment 전체 Method 목록
- `references/Environment_events.md` — Environment 전체 Event 목록
- `references/Screen_properties.md` — Screen 전체 Property 목록
- `references/Screen_methods.md` — Screen 전체 Method 목록
- `references/Screen_events.md` — Screen 전체 Event 목록
