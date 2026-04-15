---
name: nexacron-communication
description: >
  NexacroN 통신 객체(TCPClientSocket, XPush)와 NexacroAPI의 전체 API 레퍼런스.
  NexacroN TCPClientSocket, XPush, NexacroAPI 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  tcpclientsocket, xpush, nexacroapi, subscribe, socket 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-communication

NexacroN 통신 객체(TCPClientSocket, XPush)와 NexacroAPI의 전체 API 레퍼런스.

## TCPClientSocket

- Properties: 6개
- Methods: 17개
- Events: 3개

### 주요 Properties
`address`, `errorcode`, `errormsg`, `isopen`, `name`, `port`

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `clearEventHandler`, `close`, `findEventHandler`, `getEventHandler`, `insertEventHandler`, `open`, `read`, `readLine`, `removeEvent`, `removeEventHandler`, `removeEventHandlerLookup`, `setEventHandler`
  외 2개 → `references/TCPClientSocket_methods.md` 참조

### 주요 Events
`ondataarrived`, `onerror`, `onsuccess`

## XPush

- Properties: 15개
- Methods: 18개
- Events: 3개

### 주요 Properties
`controlretry`, `debug`, `errorcode`, `errormsg`, `iplist`, `keepalivetime`, `keeptimeout`, `layouturl`, `name`, `projectid`, `protocolversion`, `retry`, `sessionid`, `timeout`, `userid`

### 주요 Methods
`connect`, `disconnect`, `getCurrentIP`, `getCurrentPort`, `getRegisteredTopics`, `getRegisteredTopicsWithUserID`, `registerDevice`, `registerTopic`, `registerTopicWithUserID`, `requestMessage`, `requestMessageCount`, `requestMessageCountWithUserID`, `sendResponse`, `subscribe`, `unregisterDevice`
  외 3개 → `references/XPush_methods.md` 참조

### 주요 Events
`onerror`, `onkeepalive`, `onsuccess`

### 하위 객체
- **PushMessageObject**: Properties 3, Methods 0, Events 0
  → `references/XPush_sub_objects.md` 참조

## NexacroAPI

- Properties: 0개
- Methods: 51개
- Events: 0개

### 주요 Methods
`addErrorMessage`, `base64Decode`, `base64Encode`, `ceil`, `deleteCacheDB`, `flashWindow`, `floor`, `gc`, `getApplication`, `getCookieVariable`, `getEnableWheelZoom`, `getEnvironment`, `getEnvironmentVariable`, `getHTTPHeaderVariable`, `getLogFilePath`
  외 36개 → `references/NexacroAPI_methods.md` 참조

## 상세 레퍼런스

- `references/TCPClientSocket_properties.md` — TCPClientSocket 전체 Property 목록
- `references/TCPClientSocket_methods.md` — TCPClientSocket 전체 Method 목록
- `references/TCPClientSocket_events.md` — TCPClientSocket 전체 Event 목록
- `references/XPush_properties.md` — XPush 전체 Property 목록
- `references/XPush_methods.md` — XPush 전체 Method 목록
- `references/XPush_events.md` — XPush 전체 Event 목록
- `references/NexacroAPI_properties.md` — NexacroAPI 전체 Property 목록
- `references/NexacroAPI_methods.md` — NexacroAPI 전체 Method 목록
- `references/NexacroAPI_events.md` — NexacroAPI 전체 Event 목록
