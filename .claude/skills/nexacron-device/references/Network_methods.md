# Network Methods

| Method | Description |
|--------|-------------|
| `isReachable()` | 모바일 기기에서 특정 URL 의 접속 가능 여부를 반환하는 메소드입니다. |
| `watchStart()` | 모바일 기기에서 네트워크 상태를 일정 간격으로 수신하도록 설정하는 메소드입니다. |
| `watchStop()` | watchStart() 메소드로 설정한 주기적인 네트워크 상태확인을 종료하는 메소드입니다. |

---

## isReachable

모바일 기기에서 특정 URL 의 접속 가능 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
Network.isReachable(strURL)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strURL` | String | 접속 가능 여부를 확인하려는 URL을 문자열로 설정합니다. |

**Return**: `Boolean` — strURL 이 생략되거나 허용되지 않는 문자가 사용된 경우에는 "false" 를 반환합니다. 그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**
- 지정된 URL 에 접근이 가능하면 onrecvsuccess 이벤트가 발생합니다.
  지정된 URL 에 접근이 불가능하면 onrecverror 이벤트가 발생합니다.

- 지정된 URL 로 접근 시 일정시간 내에 응답이 없으면 onrecverror 이벤트가 발생합니다.

---

## watchStart

모바일 기기에서 네트워크 상태를 일정 간격으로 수신하도록 설정하는 메소드입니다.

**Syntax**
```javascript
Network.watchStart(nIntervalTime)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIntervalTime` | Number | 네트워크 상태를 수신할 주기를 밀리초(milliseconds) 단위의 숫자로 설정합니다.  주기는 200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다. |

**Return**: `Boolean` — nIntervalTime 이 생략되거나 허용되지 않는 문자가 사용된 경우에는 "false" 를 반환합니다. 그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**
- 네트워크 상태가 확인되면 onrecvsuccess 이벤트가 발생합니다.
  네트워크 상태가 확인되지 않으면 onrecverror 이벤트가 발생합니다.

- onrecvsuccess 이벤트가 발생하면 네트워크 정보를 availabletype, timestamp 속성에 저장합니다.

---

## watchStop

watchStart() 메소드로 설정한 주기적인 네트워크 상태확인을 종료하는 메소드입니다.

**Syntax**
```javascript
Network.watchStop()
```

---
