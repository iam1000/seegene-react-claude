# FileDialog Methods

| Method | Description |
|--------|-------------|
| `open()` | FileDialog 를 표시하는 메소드입니다. |

---

## open

FileDialog 를 표시하는 메소드입니다.

**Syntax**
```javascript
FileDialog.open( strTitle, constOpenMode [, strInitialPath [, strFileName [, nWidth [, nHeight ]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strTitle` | String | File Dialog 의 TitleBar 에 표시할 문자열을 나타냅니다.  * macOS NRE 와 web runtime environment 는 설정값이 적용되지 않습니다. |
| `constOpenMode` | Constant | 표시되는 FileDialog 의 종류를 설정합니다.  "FileDialog.LOAD" 또는 1 설정 시 한 개 파일을 읽을 수 있는 FileDialog 가 표시됩니다. "FileDialog.SAVE" 또는 2 설정 시 한 개 파일을 쓸 수 있는 FileDialog 가 표시됩니다. "FileDialog.MULTILOAD" 또는 3 설정 시 여러개의 파일을 읽을 수 있는 FileDialog 가 표시됩니다. "FileDialog.SELFOLDER" 또는 4 설정 시 폴더를 선택할 수 있는 FileDialog 가 표시됩니다.  잘못된 값 설정 시 "FileDialog.LOAD" 로 적용됩니다.  * Desktop WRE 는 "FileDialog.LOAD" 와 "FileDialog.MULTILOAD" 만 설정할 수 있습니다. * Mobile 인 경우 iOS/iPadOS WRE 또는 iOS/iPad NRE(iOS/iPadOS 14 이상) 만 "FileDialog.MULTILOAD" 를 설정할 수 있습니다. |
| `strInitialPath` | String | FileDialog 가 표시될 때 기본으로 선택될 폴더를 설정합니다. 절대경로 또는 Alias 를 사용하여 설정합니다.  * 모바일 NRE는 설정값이 적용되지 않습니다. * WRE는 설정값이 적용되지 않습니다. |
| `strFileName` | String | FileDialog 가 표시될 때 기본으로 지정될 파일명을 설정합니다.  constOpenMode 값이 "FileDialog.SELFOLDER" 이면 이 파라미터는 무시됩니다.  * web runtime environment 는 설정값이 적용되지 않습니다. |
| `nWidth` | Number | FileDialog 의 너비를 pixel 단위의 숫자로 설정합니다.  값을 설정하지 않거나 648 보다 작은 값을 설정하면 648 또는 마지막에 표시된 너비로 적용됩니다. 모니터의 너비보다 큰 값을 설정하면 모니터의 너비값으로 적용됩니다.  * Windows NRE 만 설정값이 적용됩니다. |
| `nHeight` | Number | FileDialog 의 높이를 pixel 단위의 숫자로 설정합니다.  값을 설정하지 않거나 356 보다 작은 값을 설정하면 356 또는 마지막에 표시된 높이로 적용됩니다. 모니터의 높이보다 큰 값을 설정하면 모니터의 높이값으로 적용됩니다.  * Windows NRE 만 설정값이 적용됩니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 true 를 반환합니다.  파라미터값을 잘 못 설정하거나 메소드 실행에 실패하면 false 를 반환합니다.

**Remark**
- open() 메소드 실행 후 다음 스크립트가 바로 실행되며, 파일 선택 후 FileDialog를 닫으면 onclose 이벤트가 발생합니다.

- FileDialog 에 적용될 파일형식은 환경에 따라 filter 또는 accept 속성으로 설정할 수 있습니다.

- nWidth, nHeight 를 설정한 경우 FileDialog 가 모니터의 중앙에 표시됩니다.

- strInitialPath 에 사용할 수 있는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---
