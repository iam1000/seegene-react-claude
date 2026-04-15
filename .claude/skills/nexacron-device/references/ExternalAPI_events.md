# ExternalAPI Events

| Event | Description |
|-------|-------------|
| `onerror` | ExternalAPI 오브젝트에서 요청한 작업이 실패했을 때 발생하는 이벤트입니다. |
| `onrecvdata` | 외부 앱에서 데이터(문자열)를 전달받았을 때 발생하는 이벤트입니다. |
| `onsuccess` | ExternalAPI 오브젝트에서 요청한 작업이 성공했을 때 발생하는 이벤트입니다. |

---

## onerror

ExternalAPI 오브젝트에서 요청한 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.ExternalAPI,e:nexacro.ExternalAPIErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ExternalAPI | Event가 발생한 Object. |
| `e` | ExternalAPIErrorEventInfo | Event Object. |

---

## onrecvdata

외부 앱에서 데이터(문자열)를 전달받았을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecvdata(obj:nexacro.ExternalAPI,e:nexacro.ExternalAPIEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ExternalAPI | Event가 발생한 Object. |
| `e` | ExternalAPIEventInfo | Event Object. |

**Remark**
- ExternalAPI 에서 execExtAPI() 메소드로 외부 앱의 API 모듈을 실행한 결과가 전달되었을 때 발생하는 이벤트입니다.

---

## onsuccess

ExternalAPI 오브젝트에서 요청한 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.ExternalAPI,e:nexacro.ExternalAPIEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | ExternalAPI | Event가 발생한 Object. |
| `e` | ExternalAPIEventInfo | Event Object. |

---
