# AudioRecorder Methods

| Method | Description |
|--------|-------------|
| `pause()` | 모바일 기기에서 오디오 데이터의 녹음을 일시중지시키는 메소드입니다. |
| `recordingStart()` | 모바일 기기에서 오디오 데이터의 녹음을 시작하는 메소드입니다. |
| `recordingStop()` | 모바일 기기에서 오디오 데이타의 녹음을 중지하는 메소드입니다 |
| `resume()` | 모바일 기기에서 일시중지 된 녹음을 다시 진행하는 메소드입니다. |

---

## pause

모바일 기기에서 오디오 데이터의 녹음을 일시중지시키는 메소드입니다.

**Syntax**
```javascript
AudioRecord.pause()
```

**Sample**
```javascript
this.AudioRecord00.pause();
```

**Remark**
- pause() 메소드 수행이 완료되면 onstop 이벤트가 발생합니다.
   이 때, onstop 이벤트의 e.reason 속성값은 6 이 됩니다.

- iOS/iPadOS NRE 만 지원되는 메소드입니다.

---

## recordingStart

모바일 기기에서 오디오 데이터의 녹음을 시작하는 메소드입니다.

**Syntax**
```javascript
AudioRecord.recordingStart( [nIntervalTime] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIntervalTime` | Number | 오디오 데이터 녹음 중 onrecording 이벤트가 발생하는 주기를 밀리초(milliseconds) 단위의 숫자로 설정합니다.  주기는 200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다. 값을 생략하거나 200ms 미만으로 설정 시 onrecording 이벤트가 발생하지 않습니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 "true"를 반환합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**
- audiofile, audioformat, samplerate, channelconfig 속성에 유효하지 않은 값이 설정된 경우 녹음이 시작되지 않고, onerror 이벤트가 발생합니다.

- 파일을 생성할 수 없을 경우 녹음이 시작되지 않고, onerror 이벤트가 발생합니다.

---

## recordingStop

모바일 기기에서 오디오 데이타의 녹음을 중지하는 메소드입니다

**Syntax**
```javascript
AudioRecord.recordingStop()
```

**Sample**
```javascript
this.AudioRecord00.recordingStop();
```

---

## resume

모바일 기기에서 일시중지 된 녹음을 다시 진행하는 메소드입니다.

**Syntax**
```javascript
AudioRecord.resume()
```

**Sample**
```javascript
this.AudioRecord00.resume();
```

**Remark**
- iOS/iPadOS NRE 만 지원되는 메소드입니다.

---
