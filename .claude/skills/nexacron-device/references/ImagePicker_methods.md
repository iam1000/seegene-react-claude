# ImagePicker Methods

| Method | Description |
|--------|-------------|
| `open()` | 모바일 기기의 사진앨범이나 카메라 앱 또는 연결된 다른 앱을 구동시켜 이미지를 가져오는 메소드입니다. |

---

## open

모바일 기기의 사진앨범이나 카메라 앱 또는 연결된 다른 앱을 구동시켜 이미지를 가져오는 메소드입니다.

**Syntax**
```javascript
ImagePicker.open( enumGettype, enumEncodingype )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `enumGettype` | String | 이미지가 전달되는 방식을 설정합니다.  "url" 설정 시 이미지의 위치정보가 "URL" 형태로 전달됩니다. "imagedata" 설정 시 이미지가 오브젝트 형태로 전달됩니다.  메소드 수행 후 gettype 속성에 파라미터값이 저장됩니다. |
| `enumEncodingtype` | String | 이미지가 전달되는 파일 형식을 설정합니다.  "JPEG" 설정 시 이미지가 "JPEG" 파일로 전달됩니다. "PNG" 설정 시 이미지가 "PNG" 파일로 전달됩니다.  메소드 수행 후 encodingtype 속성에 파라미터값이 저장됩니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 true 를 반환합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 false 를 반환합니다.

**Remark**
- 앱에서 이미지 선택에 성공하면 onsuccess 이벤트가 발생합니다.
  앱에서 이미지 선택에 실패하면 onerror 이벤트가 발생합니다.

- 선택된 이미지는 파라미터값과 속성값에 맞게 변형된 후 "%USERAPP%/_resource_/_devicepics_" 위치에 저장됩니다.
   "%USERAPP%/_resource_/_devicepics_" 에 저장된 이미지의 위치정보 또는 오브젝트가 최종적으로 전달됩니다.


◆ Android NRE 제약
- enumEncodingtype 파라미터에 "PNG" 만 설정할 수 있습니다.
- Android 일부 기종의 사진앨범 앱에서 이미지 선택 후 자동으로 앱이 닫히지 않습니다.
   이런 경우에는 사용자가 직접 닫기를 수행하여야 합니다.

---
