# Vibrator Methods

| Method | Description |
|--------|-------------|
| `hasVibrator()` | 모바일 기기에서 진동 기능을 사용할 수 있는지 확인하는 메소드입니다. |
| `play()` | 모바일 기기에서 진동을 발생시키는 메소드입니다. |
| `stop()` | 모바일 기기에서 진동을 중지하는 메소드입니다. |

---

## hasVibrator

모바일 기기에서 진동 기능을 사용할 수 있는지 확인하는 메소드입니다.

**Syntax**
```javascript
Vibrator.hasVibrator()
```

**Sample**
```javascript
this.Vibrator00.hasVibrator();
```

**Return**: `Boolean` — 기기에서 진동기능을 사용할수 있으면 "true" 를 반환합니다. 기기에서 진동기능을 사용할 수 없으면 "false" 를 반환합니다.

---

## play

모바일 기기에서 진동을 발생시키는 메소드입니다.

**Syntax**
```javascript
Vibrator.play()
```

**Sample**
```javascript
this.Vibrator00.play();
```

**Remark**
- Android NRE 는 patterns 속성값에 설정된 순서대로 repeatCount 속성값만큼 반복하여 진동기능을 수행합니다.

- iOS/iPadOS NRE 는 patterns 속성값을 사용할 수 없고, 디바이스가 제공하는 진동을 repeatCount 속성값만큼 반복하여 진동기능을 수행합니다.

---

## stop

모바일 기기에서 진동을 중지하는 메소드입니다.

**Syntax**
```javascript
Vibrator.stop()
```

**Sample**
```javascript
this.Vibrator00.stop();
```

---
