# GoogleMapMarker Properties

| Property | Description |
|----------|-------------|
| `draggable` | GoogleMapMarker 를 드래그로 움직일 수 있는지 여부를 설정하는 속성입니다. |
| `imageurl` | 지도에 GoogleMapMarker 로 표시될 이미지의 경로를 설정하는 속성입니다. |
| `latitude` | GoogleMapMarker 가 표시될 위치의 위도값을 설정하는 속성입니다. |
| `longitude` | GoogleMapMarker 가 표시될 위치의 경도값을 설정하는 속성입니다. |
| `text` | GoogleMapMaker 위에 표시될 설명을 설정하는 속성입니다. |
| `visible` | GoogleMapMaker 를 지도에 표시할 지 여부를 설정하는 속성입니다. |

---

## draggable

GoogleMapMarker 를 드래그로 움직일 수 있는지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapMarker.set_draggable(bDraggable) // set
GoogleMapMarker.draggable // get
```

**Setting Syntax**
```javascript
GoogleMapMarker 를 드래그로 움직일 수 없게 설정합니다.
```

**Remark**
- draggable 속성값을 설정하지 않으면 "true" 로 적용됩니다.

---

## imageurl

지도에 GoogleMapMarker 로 표시될 이미지의 경로를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapMarker.set_imageurl(strImageurl) // set
GoogleMapMarker.imageurl // get
```

**Setting Syntax**
```javascript
폼의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.
```

**Remark**
- 설정된 이미지는 GoogleMapMarker 가 표시될 위치의 상단에 중앙정렬되어 표시됩니다.

- 모바일기기의 경로로 접근하는 경우 Alias 를 사용할 수 있습니다.

	
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

◆ Android NRE 제약

- svg 파일은 지원하지 않습니다. svg 파일 설정 시 설정값을 무시하고 기본 이미지를 표시합니다.

---

## latitude

GoogleMapMarker 가 표시될 위치의 위도값을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapMarker.set_latitude(nLatitude) // set
GoogleMapMarker.latitude // get
```

**Setting Syntax**
```javascript
지도에 GoogleMapMarker 가 표시될 위치의 위도값을 숫자로 설정합니다.
```

---

## longitude

GoogleMapMarker 가 표시될 위치의 경도값을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapMarker.set_longitude(nLongitude) // set
GoogleMapMarker.longitude // get
```

**Setting Syntax**
```javascript
지도에 GoogleMapMarker 가 표시될 위치의 경도값을 숫자로 설정합니다.
```

---

## text

GoogleMapMaker 위에 표시될 설명을 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapMarker.set_text(strText) // set
GoogleMapMarker.text // get
```

**Setting Syntax**
```javascript
지도에 추가된 GoogleMapMarker 위에 표시될 설명을 문자열로 설정합니다.

설정값에 개행문자("\n")가 있을 경우 줄바꿈되어 표시됩니다.
```

---

## visible

GoogleMapMaker 를 지도에 표시할 지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
GoogleMapMarker.set_visible(bVisible) // set
GoogleMapMarker.visible // get
```

**Setting Syntax**
```javascript
지도에 추가된 GoogleMapMarker 를 표시하지 않습니다.
```

**Remark**
- visible 속성값을 설정하지 않으면 "true" 로 적용됩니다.

---
