# Acceleration Methods

| Method | Description |
|--------|-------------|
| `getCurrentAcceleration()` | 모바일 기기의 가속도 정보를 반환하는 메소드입니다. |
| `watchStart()` | 모바일 기기의 가속도 정보를 일정 간격으로 수신하도록 설정하는 메소드입니다. |
| `watchStop()` | watchStart() 메소드로 설정한 주기적인 가속도 정보 수신을 종료하는 메소드입니다. |

---

## getCurrentAcceleration

모바일 기기의 가속도 정보를 반환하는 메소드입니다.

**Syntax**
```javascript
Acceleration.getCurrentAcceleration( [nAccuracy] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nAccuracy` | Number | 가속도 정보의 정확도를 "0~3" 범위의 숫자로 설정합니다. 값이 작을수록 반환되는 값의 정확도가 높아집니다.  값 생략 시 0 으로 적용됩니다. |

**Return**: `Boolean` — 가속도 정보 수신에 성공하면 true 를 반환하고, onrecvsuccess 이벤트가 발생합니다.  가속도 정보 수신에 실패하면 false 를 반환하고, onrecverror 이벤트가 발생합니다. nAccuracy 값이 "0~3" 값이 아니면 false 를 반환합니다.

---

## watchStart

모바일 기기의 가속도 정보를 일정 간격으로 수신하도록 설정하는 메소드입니다.

**Syntax**
```javascript
Acceleration.watchStart( nAccuracy, nIntervalTime )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nAccuracy` | Number | 가속도 정보 정확도를 "0~3"범위의 숫자로 설정합니다. 값이 작을수록 반환되는 값의 정확도가 높아집니다. |
| `nIntervalTime` | Number | 가속도 정보를 수신할 주기를 밀리초(milliseconds) 단위의 숫자로 설정합니다.  주기는 200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 "true"를 반환합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**
- nIntervalTime 간격으로 nAccuracy 정확도의 가속도 정보를 수신합니다.
  가속도 정보 수신에 성공하면 onrecvsuccess 이벤트가 발생합니다.
  가속도 정보 수신에 실패하면 onrecverror 이벤트가 발생합니다.

---

## watchStop

watchStart() 메소드로 설정한 주기적인 가속도 정보 수신을 종료하는 메소드입니다.

**Syntax**
```javascript
Acceleration.watchStop()
```

**Sample**
```javascript
Acceleration.watchStop();
```

---
