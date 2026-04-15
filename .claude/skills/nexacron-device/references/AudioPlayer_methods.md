# AudioPlayer Methods

| Method | Description |
|--------|-------------|
| `load()` | AudioPlayer 에 오디오파일을 로딩하는 메소드입니다. |
| `movePos()` | 모바일 기기에서 오디오파일의 재생위치를 특정 부분으로 이동하는 메소드입니다. |
| `pause()` | 모바일기기에서 오디오파일의 재생을 일시중지하는 메소드입니다. |
| `play()` | 모바일기기에서 로딩 된 오디오파일을 재생하는 메소드입니다. |
| `resume()` | 모바일 기기에서 일시중지 상태의 오디오파일을 재생상태로 전환하는 메소드입니다. |
| `stop()` | 모바일 기기에서 오디오파일의 재생을 중지하는 메소드입니다. |

---

## load

AudioPlayer 에 오디오파일을 로딩하는 메소드입니다.

**Syntax**
```javascript
AudioPlayer.load(strUrl)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strUrl` | String | 로딩할 오디오 파일의 위치를 URL 형식의 문자열로 설정합니다.  모바일 기기에 저장된 오디오 파일은 Alias 를 사용하여 문자열로 설정합니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 "true"를 반환하고, onload 이벤트가 발생합니다. 메소드 실행에 실패하면 "true"를 반환하고, onerror 이벤트가 발생합니다.  strUrl 값이 생략된 경우 "false"를 반환합니다.

**Remark**
- 오디오 파일을 정상적으로 로딩하면 오디오파일 위치가 url 속성에 저장됩니다.

- 모바일 기기의 경로에 사용되는 Alias 실제경로입니다.

	
		OS
		Alias
		Path
	

	
		Android
		%USERAPP%
		/data/data/{PackageName}/files/NEXACRO/
	

	
		%SD_CARD%
		/mnt/sdcard                (Android v4.0 이하)
/storage/emulated/0    (Android v4.1 이상)
	

	
		%INSTALLROOT%
		%USERAPP%
	

	
		iOS
		%USERAPP%
		/Library/Caches/nexacro/
	

	
		%SD_CARD%
		미지원
	

	
		%INSTALLROOT%
		%USERAPP%
	


  * %USERAPP% : 애플리케이션에서 할당받은 공간, 다른 애플리케이션 접근불가
  * %SD_CARD% : 모바일 기기의 SD카드 메모리 공간, 다른 애플리케이션 접근가능

---

## movePos

모바일 기기에서 오디오파일의 재생위치를 특정 부분으로 이동하는 메소드입니다.

**Syntax**
```javascript
AudioPlayer.movePos(nPos)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nPos` | Number | 오디오파일의 재생 위치를 밀리초(milliseconds) 단위의 숫자로 설정합니다.  이동 위치는 "0ms ~ duration속성값" 사이의 값을 설정할 수 있습니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 "true"를 반환하고, onmovepos 이벤트가 발생합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환하고, onerror 이벤트가 발생합니다.

---

## pause

모바일기기에서 오디오파일의 재생을 일시중지하는 메소드입니다.

**Syntax**
```javascript
AudioPlayer.pause()
```

**Sample**
```javascript
this.AudioPlayer00.pause();
```

**Remark**
- pause() 메소드 수행이 완료되면  onstop 이벤트가 발생합니다.
  이 때, onstop 이벤트의 e.reason 속성값은 "6" 이 됩니다.

---

## play

모바일기기에서 로딩 된 오디오파일을 재생하는 메소드입니다.

**Syntax**
```javascript
AudioPlayer.play( [nIntervalTime] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIntervalTime` | Object | 오디오 파일 재생 중 onplaying 이벤트가 발생하는 주기를 밀리초(milliseconds) 단위의 숫자로 설정합니다.  주기는 200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다. 값을 생략하거나 200ms 미만으로 설정 시 onplaying 이벤트가 발생하지 않습니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 true 를 반환합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 false 를 반환합니다.

**Remark**
- 오디오파일 재생에 성공하면 onplay 이벤트 발생 후 onplaying 이벤트가 설정된 주기만큼 반복 발생합니다.
   오디오파일 재생에 실패하면 onerror 이벤트가 발생합니다.

---

## resume

모바일 기기에서 일시중지 상태의 오디오파일을 재생상태로 전환하는 메소드입니다.

**Syntax**
```javascript
AudioPlayer.resume()
```

**Remark**
- resume() 메소드 수행이 완료되면  onplay 이벤트가 발생합니다.
   이 때, onplay 이벤트의 e.reason 속성값은 2 가 됩니다.

---

## stop

모바일 기기에서 오디오파일의 재생을 중지하는 메소드입니다.

**Syntax**
```javascript
AudioPlayer.stop()
```

**Sample**
```javascript
this.AudioPlayer00.stop();
```

**Remark**
- stop() 메소드 수행이 완료되면  onstop 이벤트가 발생합니다.
  이 때, onstop 이벤트의 e.reason 속성값은 "5" 가 됩니다.

---
