---
name: nexacron-device
description: >
  NexacroN DeviceAPI(Camera, Geolocation, BluetoothLE 등 20개)의 전체 API 레퍼런스.
  NexacroN Acceleration, AudioPlayer, AudioRecorder, BluetoothLE, Camera, Contact, ContactSet, ExternalAPI, Geolocation, ImagePicker, LiteDBConnection, LiteDBStatement, Network, Phone, Sms, Vibrator 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  camera, geolocation, bluetooth, audioplayer, litedb, deviceapi 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-device

NexacroN DeviceAPI(Camera, Geolocation, BluetoothLE 등 20개)의 전체 API 레퍼런스.

## Acceleration

- Properties: 8개
- Methods: 3개
- Events: 2개

### 주요 Properties
`accuracy`, `id`, `name`, `parent`, `timestamp`, `xpos`, `ypos`, `zpos`

### 주요 Methods
`getCurrentAcceleration`, `watchStart`, `watchStop`

### 주요 Events
`onrecverror`, `onrecvsuccess`

## AudioPlayer

- Properties: 11개
- Methods: 6개
- Events: 6개

### 주요 Properties
`currentpos`, `duration`, `id`, `name`, `pan`, `parent`, `repeatcount`, `startpos`, `stoppos`, `url`, `volume`

### 주요 Methods
`load`, `movePos`, `pause`, `play`, `resume`, `stop`

### 주요 Events
`onerror`, `onload`, `onmovepos`, `onplay`, `onplaying`, `onstop`

## AudioRecorder

- Properties: 7개
- Methods: 4개
- Events: 3개

### 주요 Properties
`audiofile`, `audioformat`, `channelconfig`, `id`, `name`, `parent`, `samplerate`

### 주요 Methods
`pause`, `recordingStart`, `recordingStop`, `resume`

### 주요 Events
`onerror`, `onrecording`, `onstop`

## BluetoothLE

- Properties: 2개
- Methods: 9개
- Events: 4개

### 주요 Properties
`id`, `name`

### 주요 Methods
`connect`, `disconnect`, `discoverService`, `readCharacteristic`, `scanStart`, `scanStop`, `subscribe`, `unsubscribe`, `writeCharacteristic`

### 주요 Events
`onerror`, `onscanresult`, `onsubscriberesult`, `onsuccess`

## Camera

- Properties: 9개
- Methods: 1개
- Events: 2개

### 주요 Properties
`encodingtype`, `gettype`, `id`, `imageheight`, `imagequality`, `imagewidth`, `name`, `parent`, `usegallery`

### 주요 Methods
`takePicture`

### 주요 Events
`oncapture`, `onerror`

## Contact

- Properties: 15개
- Methods: 0개
- Events: 0개

### 주요 Properties
`addresses`, `birthday`, `categories`, `contactname`, `emails`, `id`, `ims`, `name`, `nickname`, `note`, `organizations`, `phonenumbers`, `photos`, `uniqueid`, `urls`

## ContactSet

- Properties: 3개
- Methods: 4개
- Events: 2개

### 주요 Properties
`id`, `name`, `parent`

### 주요 Methods
`append`, `query`, `remove`, `update`

### 주요 Events
`onerror`, `onsuccess`

## ExternalAPI

- Properties: 3개
- Methods: 2개
- Events: 3개

### 주요 Properties
`id`, `name`, `parent`

### 주요 Methods
`execExtAPI`, `isAccessible`

### 주요 Events
`onerror`, `onrecvdata`, `onsuccess`

## Geolocation

- Properties: 6개
- Methods: 3개
- Events: 2개

### 주요 Properties
`coords`, `id`, `name`, `parent`, `sourcetype`, `timestamp`

### 주요 Methods
`getCurrentPosition`, `watchStart`, `watchStop`

### 주요 Events
`onrecverror`, `onrecvsuccess`

## ImagePicker

- Properties: 8개
- Methods: 1개
- Events: 2개

### 주요 Properties
`encodingtype`, `gettype`, `id`, `imageheight`, `imagequality`, `imagewidth`, `name`, `parent`

### 주요 Methods
`open`

### 주요 Events
`onerror`, `onsuccess`

## LiteDBConnection

- Properties: 8개
- Methods: 6개
- Events: 2개

### 주요 Properties
`async`, `busytimeout`, `datasource`, `id`, `name`, `openflag`, `parent`, `preconnect`

### 주요 Methods
`begin`, `close`, `commit`, `isConnected`, `open`, `rollback`

### 주요 Events
`onerror`, `onsuccess`

## LiteDBStatement

- Properties: 7개
- Methods: 3개
- Events: 2개

### 주요 Properties
`async`, `id`, `ldbconnection`, `name`, `parameters`, `parent`, `query`

### 주요 Methods
`close`, `executeQuery`, `executeUpdate`

### 주요 Events
`onerror`, `onsuccess`

## Network

- Properties: 5개
- Methods: 3개
- Events: 2개

### 주요 Properties
`availabletype`, `id`, `name`, `parent`, `timestamp`

### 주요 Methods
`isReachable`, `watchStart`, `watchStop`

### 주요 Events
`onrecverror`, `onrecvsuccess`

## Phone

- Properties: 0개
- Methods: 1개
- Events: 0개

### 주요 Methods
`makeCall`

## Sms

- Properties: 5개
- Methods: 5개
- Events: 6개

### 주요 Properties
`id`, `message`, `name`, `parent`, `phonenumber`

### 주요 Methods
`deleteMessage`, `readMessageList`, `recvStart`, `recvStop`, `sendMessage`

### 주요 Events
`cansendmessage`, `ondeletemessage`, `onerror`, `onreadmessagelist`, `onrecvmessage`, `onsendmessage`

## Vibrator

- Properties: 6개
- Methods: 3개
- Events: 3개

### 주요 Properties
`id`, `name`, `parent`, `patterns`, `repeatcount`, `startpos`

### 주요 Methods
`hasVibrator`, `play`, `stop`

### 주요 Events
`onerror`, `onplay`, `onstop`

## 상세 레퍼런스

- `references/Acceleration_properties.md` — Acceleration 전체 Property 목록
- `references/Acceleration_methods.md` — Acceleration 전체 Method 목록
- `references/Acceleration_events.md` — Acceleration 전체 Event 목록
- `references/AudioPlayer_properties.md` — AudioPlayer 전체 Property 목록
- `references/AudioPlayer_methods.md` — AudioPlayer 전체 Method 목록
- `references/AudioPlayer_events.md` — AudioPlayer 전체 Event 목록
- `references/AudioRecorder_properties.md` — AudioRecorder 전체 Property 목록
- `references/AudioRecorder_methods.md` — AudioRecorder 전체 Method 목록
- `references/AudioRecorder_events.md` — AudioRecorder 전체 Event 목록
- `references/BluetoothLE_properties.md` — BluetoothLE 전체 Property 목록
- `references/BluetoothLE_methods.md` — BluetoothLE 전체 Method 목록
- `references/BluetoothLE_events.md` — BluetoothLE 전체 Event 목록
- `references/Camera_properties.md` — Camera 전체 Property 목록
- `references/Camera_methods.md` — Camera 전체 Method 목록
- `references/Camera_events.md` — Camera 전체 Event 목록
- `references/Contact_properties.md` — Contact 전체 Property 목록
- `references/Contact_methods.md` — Contact 전체 Method 목록
- `references/Contact_events.md` — Contact 전체 Event 목록
- `references/ContactSet_properties.md` — ContactSet 전체 Property 목록
- `references/ContactSet_methods.md` — ContactSet 전체 Method 목록
- `references/ContactSet_events.md` — ContactSet 전체 Event 목록
- `references/ExternalAPI_properties.md` — ExternalAPI 전체 Property 목록
- `references/ExternalAPI_methods.md` — ExternalAPI 전체 Method 목록
- `references/ExternalAPI_events.md` — ExternalAPI 전체 Event 목록
- `references/Geolocation_properties.md` — Geolocation 전체 Property 목록
- `references/Geolocation_methods.md` — Geolocation 전체 Method 목록
- `references/Geolocation_events.md` — Geolocation 전체 Event 목록
- `references/ImagePicker_properties.md` — ImagePicker 전체 Property 목록
- `references/ImagePicker_methods.md` — ImagePicker 전체 Method 목록
- `references/ImagePicker_events.md` — ImagePicker 전체 Event 목록
- `references/LiteDBConnection_properties.md` — LiteDBConnection 전체 Property 목록
- `references/LiteDBConnection_methods.md` — LiteDBConnection 전체 Method 목록
- `references/LiteDBConnection_events.md` — LiteDBConnection 전체 Event 목록
- `references/LiteDBStatement_properties.md` — LiteDBStatement 전체 Property 목록
- `references/LiteDBStatement_methods.md` — LiteDBStatement 전체 Method 목록
- `references/LiteDBStatement_events.md` — LiteDBStatement 전체 Event 목록
- `references/Network_properties.md` — Network 전체 Property 목록
- `references/Network_methods.md` — Network 전체 Method 목록
- `references/Network_events.md` — Network 전체 Event 목록
- `references/Phone_properties.md` — Phone 전체 Property 목록
- `references/Phone_methods.md` — Phone 전체 Method 목록
- `references/Phone_events.md` — Phone 전체 Event 목록
- `references/Sms_properties.md` — Sms 전체 Property 목록
- `references/Sms_methods.md` — Sms 전체 Method 목록
- `references/Sms_events.md` — Sms 전체 Event 목록
- `references/Vibrator_properties.md` — Vibrator 전체 Property 목록
- `references/Vibrator_methods.md` — Vibrator 전체 Method 목록
- `references/Vibrator_events.md` — Vibrator 전체 Event 목록
