# ExternalAPI Methods

| Method | Description |
|--------|-------------|
| `execExtAPI()` | 특정 외부 앱에 정의된 API 모듈을 실행하는 메소드입니다. |
| `isAccessible()` | 특정 외부 앱에 접근이 가능한지 확인하는 메소드입니다. |

---

## execExtAPI

특정 외부 앱에 정의된 API 모듈을 실행하는 메소드입니다.

**Syntax**
```javascript
ExternalAPI.execExtAPI( strRecvID, strAppID, strAPI [, strParams] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strRecvID` | String | 실행한 메소드를 구분하기 위한 ID 를 문자열로 설정합니다.  onsuccess, onrecvdata 이벤트에서 ExternalAPIEventIfo 오브젝트의 recvid 속성에 설정한 값이 전달됩니다. |
| `strAppID` | String | 실행하려는 API 모듈이 정의된 외부 앱의 ID 를 문자열로 설정합니다. |
| `strAPI` | String | 실행하려는 API 모듈의 이름을 문자열로 설정합니다. |
| `strParams` | String | 실행할 API 모듈에 전달할 파라미터를 문자열로 설정합니다.  파라미터가 여러개일 경우 각 파라미터는 공백으로 구분합니다. 파라미터값에 공백이 포함된 경우는 " ' " (홑따옴표) 를 사용하여야 합니다. |

**Return**: `Boolean` — API 모듈의 실행여부와 관계없이 메소드 실행에 성공하면 true 를 반환합니다.  API 모듈의 실행여부와 관계없이 메소드 실행에 실패하면 false 를 반환합니다.

**Remark**
- 외부 앱에 정의된 API 모듈 실행에 성공하면 onsuccess 이벤트가 발생합니다.
   외부 앱에 정의된 API 모듈 실행에 실패하면 onerror 이벤트가 발생합니다.

---

## isAccessible

특정 외부 앱에 접근이 가능한지 확인하는 메소드입니다.

**Syntax**
```javascript
ExternalAPI.isAccessible ( strAppID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strAppID` | String | 접근 가능여부를 확인하려는 외부 앱의 ID 를 문자열로 설정합니다.  Android 는 Domain 형태로 설정합니다. ("com.nexacro.testmodule") iOS 는 URL Scheme 형태로 설정합니다. ("TestApp://") |

**Return**: `Boolean` — 외부 앱의 접근 가능여부와 관계없이 메소드 실행에 성공하면 true 를 반환합니다.  외부 앱의 접근 가능여부와 관계없이 메소드 실행에 실패하면 false 를 반환합니다.

**Remark**
- 특정 외부 앱에 접근이 가능하면 onsuccess 이벤트가 발생합니다.
   특정 외부 앱에 접근이 불가능하면 onerror 이벤트가 발생합니다.

---
