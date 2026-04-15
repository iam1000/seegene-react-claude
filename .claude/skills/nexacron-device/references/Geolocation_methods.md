# Geolocation Methods

| Method | Description |
|--------|-------------|
| `getCurrentPosition()` | 모바일 기기의 위치정보를 반환하는 메소드입니다. |
| `watchStart()` | 모바일 기기의 위치정보를 일정 간격으로 수신하도록 설정하는 메소드입니다. |
| `watchStop()` | watchStart() 메소드로 설정한 주기적인 위치정보 수신을 종료하는 메소드입니다. |

---

## getCurrentPosition

모바일 기기의 위치정보를 반환하는 메소드입니다.

**Syntax**
```javascript
Geolocation.getCurrentPosition ( nAccuracy, nTimeout )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nAccuracy` | Number | 위치 정보의 정확도를 숫자로 설정합니다. 값이 작을수록 반환되는 값의 정확도가 높아집니다.  Android NRE 는 0~2 범위의 값(ACCURACY_0~ACCURACY_2)을 설정합니다. iOS/iPadOS NRE 는 0~4 범위의 값(ACCURACY_0~ACCURACY_4)을 설정합니다. |
| `nTimeout` | Number | 위치 정보를 수신할 제한시간을 밀리초(milliseconds) 단위의 숫자로 설정합니다.  200ms~86,400,000ms 사이의 값을 설정할 수 있습니다. 제한시간을 초과할 때까지 응답이 없는 경우 onrecverror 이벤트가 발생합니다. |

**Return**: `Boolean` — 위치 정보 수신에 성공하면 true 를 반환하고, onrecvsuccess 이벤트가 발생합니다. 위치 정보 수신에 실패하면  false 를 반환하고, onrecverror 이벤트가 발생합니다.  nAccuracy 값이 0~4 값이 아니면 false 를 반환합니다.

**Remark**
- Android NRE 는 어플리케이션 설치시 GPS 사용허가를 획득한 경우에만 사용가능합니다.

- iOS/iPadOS NRE 는 기기가 Airplane 모드일 때 GPS 기능을 사용할 수 없습니다.

---

## watchStart

모바일 기기의 위치정보를 일정 간격으로 수신하도록 설정하는 메소드입니다.

**Syntax**
```javascript
Geolocation.watchStart(nAccuracy, nIntervalTime)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nAccuracy` | Number | 위치 정보의 정확도를 숫자로 설정합니다. 값이 작을수록 반환되는 값의 정확도가 높아집니다.  Android 일 경우 "0~2"(ACCURACY_0~ACCURACY_2) 범위의 값을 설정합니다. iOS 일 경우 "0~4"(ACCURACY_0 ~ ACCURACY_4) 범위의 값을 설정합니다. |
| `nIntervalTime` | Number | 위치 정보를 수신할 주기를 밀리초(milliseconds) 단위의 숫자로 설정합니다.  주기는 200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다 |

**Return**: `Boolean` — 메소드 실행에 성공하면 "true"를 반환합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**
- nIntervalTime 간격으로 nAccuracy 정확도의 위치 정보를 수신합니다.
  위치 정보 수신에 성공하면 onrecvsuccess 이벤트가 발생합니다.
  위치 정보 수신에 실패하면 onrecverror 이벤트가 발생합니다.

---

## watchStop

watchStart() 메소드로 설정한 주기적인 위치정보 수신을 종료하는 메소드입니다.

**Syntax**
```javascript
Geolocation.watchStop()
```

**Remark**
- Android 일 경우 watchStop() 메소드 수행으로 GPS 사용을 변경하지 않습니다.
  환경설정에서 GPS 사용 여부를 변경 해야 합니다.

---
