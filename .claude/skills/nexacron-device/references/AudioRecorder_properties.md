# AudioRecorder Properties

| Property | Description |
|----------|-------------|
| `audiofile` | 모바일 기기에서 녹음 시 오디오 데이터를 저장 할 파일명을 설정하는 속성입니다. |
| `audioformat` | 모바일 기기에서 녹음 시 오디오 데이타의 포맷을 설정하는 속성입니다. |
| `channelconfig` | 모바일 기기에서 녹음 시 오디오 채널의 종류를 설정하는 속성입니다. |
| `id` | AudioRecorder의 고유 식별자를 설정하는 속성입니다. |
| `name` | AudioRecorder 의 이름을 설정하는 속성입니다. |
| `parent` | AudioRecorder 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `samplerate` | 모바일 기기에서 녹음 시 오디오 데이터의 샘플비율을 설정하는 속성입니다. |

---

## audiofile

모바일 기기에서 녹음 시 오디오 데이터를 저장 할 파일명을 설정하는 속성입니다.

**Setting Syntax**
```javascript
오디오 데이터를 저장 할 파일명을 문자열로 설정합니다.
```

**Remark**
- audiofile 속성값에 확장자를 설정하지 않으면 audioformat 속성값에 따라 자동으로 적용됩니다.

- 확장자는 audioformat 속성값에 맞게 설정해야 정상적인 재생이 가능합니다.

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

## audioformat

모바일 기기에서 녹음 시 오디오 데이타의 포맷을 설정하는 속성입니다.

**Setting Syntax**
```javascript
오디오 데이터의 포맷을 설정합니다.

"WAV", "OGG", "MP3", "AMR_NB", "AMR_WB" 중 하나의 값을 설정합니다.
```

**Remark**
- audioformat 속성값을 설정하지 않으면 Android NRE 는 "MP3" 로 적용되고, iOS/iPadOS NRE 는 "WAV" 로 적용됩니다.

- 파일포맷에 따른 샘플비율 범위입니다.

	
		File Format
		Extension
		Sample Rate
		Android
		iOS
	

	
		WAV
		*.wav
		8000 ~ 96000
		X
		O
	

	
		OGG
		*.ogg
		8000, 11025, 16000, 22050, 32000, 44100
		O
		X
	

	
		MP3
		*.mp3
		8000, 11025, 16000
		O
		X
	

	
		AMR_NB
		*.mp3
		8000
		O
		X
	

	
		AMR_WB
		*.mp3
		16000
		O
		X

---

## channelconfig

모바일 기기에서 녹음 시 오디오 채널의 종류를 설정하는 속성입니다.

**Setting Syntax**
```javascript
"1" 설정 시 Mono 로 녹음이 됩니다.
"2" 설정 시 Stereo 로 녹음이 됩니다.
```

**Remark**
- channelconfig 속성값을 설정하지 않으면 "1" 로 적용됩니다.

- audioformat 속성값이 "AMR_NB" 인 경우는 channelconfig 속성값을 "1" 만 설정할 수 있습니다.

---

## id

AudioRecorder의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
AudioRecorder.id
```

**Setting Syntax**
```javascript
AudioRecorder를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

AudioRecorder 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
AudioRecorder.set_name(strName) // set
AudioRecorder.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## parent

AudioRecorder 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
AudioRecorder.parent
```

**Setting Syntax**
```javascript
var objParent = this.AudioRecorder00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- AudioRecorder 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## samplerate

모바일 기기에서 녹음 시 오디오 데이터의 샘플비율을 설정하는 속성입니다.

**Setting Syntax**
```javascript
샘플비율을 숫자로 설정합니다.

audioformat 속성값에 따라 설정할 수 있는 범위가 달라집니다.
```

**Remark**
- samplerate 속성값을 설정하지 않으면 "8000" 으로 적용됩니다.

- 파일포맷에 따른 샘플비율 범위입니다.

	
		File Format
		Extension
		Sample Rate
		Android
		iOS
	

	
		WAV
		*.wav
		8000 ~ 96000
		X
		O
	

	
		OGG
		*.ogg
		8000, 11025, 16000, 22050, 32000, 44100
		O
		X
	

	
		MP3
		*.mp3
		8000, 11025, 16000
		O
		X
	

	
		AMR_NB
		*.mp3
		8000
		O
		X
	

	
		AMR_WB
		*.mp3
		16000
		O
		X

---
