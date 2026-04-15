# Environment Events

| Event | Description |
|-------|-------------|
| `onaccessibilitykey` | 접근성 기능이 활성화됐을 때 키 입력 시 제일 먼저 발생하는 이벤트입니다. |
| `ondevicepermission` | 권한 요청 또는 확인 시 발생하는 이벤트입니다. |
| `onerror` | Form 또는 Application 오브젝트의 transaction 메서드, DataObject 오브젝트의 load, request 메서드 실행 |
| `onextendedcommand` | DeviceAdaptors 에 정의된 디바이스에서 이벤트가 전달되었을 때 발생하는 이벤트입니다. |
| `onload` | 넥사크로 엔진이 로드된 후 발생하는 이벤트입니다. |
| `onuserhotkey` | 전역 단축키 입력 시 발생하는 이벤트입니다. |

---

## onaccessibilitykey

접근성 기능이 활성화됐을 때 키 입력 시 제일 먼저 발생하는 이벤트입니다.

**Syntax**
```javascript
onaccessibilitykey(obj:nexacro.Environment,e:nexacro.KeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Environment | Event가 발생한 Object. |
| `e` | KeyEventInfo | Event Object. |

**Remark**
- enableaccessibility 속성값이 true이고 userhotkey 속성값을 설정하지 않은 경우 모든 키 입력 시 onaccessibilitykey 이벤트가 제일 먼저 발생합니다.

- userhotkey 속성값으로 설정한 단축키 입력 시에는 onaccessibilitykey 이벤트가 발생하지 않으며 onuserhotkey 이벤트가 발생합니다.

---

## ondevicepermission

권한 요청 또는 확인 시 발생하는 이벤트입니다.

**Syntax**
```javascript
ondevicepermission(obj:nexacro.Environment,e:nexacro.DevicePermissionEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Environment | Event가 발생한 Object. |
| `e` | DevicePermissionEventInfo | Event Object. |

**Remark**
system.requestDevicePermission 메소드 또는 system.checkDevicePermission 메소드 실행 시 결과를 확인하기 위해 발생하는 이벤트입니다.

---

## onerror

Form 또는 Application 오브젝트의 transaction 메서드, DataObject 오브젝트의 load, request 메서드 실행 중 사용자 입력, 통신 실패 시 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.Environment,e:nexacro.ErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Environment | Event가 발생한 Object. |
| `e` | ErrorEventInfo | Event Object. |

**Remark**
- Form 또는 Application의 transaction 메서드 실행 중 사용자가 ESC 키 입력 시 onerror 이벤트가 발생합니다.
   onerror 이벤트 핸들러 함수 내에서 true 값을 반환하지 않은 경우 Environment 오브젝트의 onerror 이벤트가 발생합니다.
  Environment 오브젝트의 onerror 이벤트 핸들러 함수 내에서 transaction 메서드 실행 상태 유지 여부를 결정할 수 있습니다.

---

## onextendedcommand

DeviceAdaptors 에 정의된 디바이스에서 이벤트가 전달되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onextendedcommand(obj:nexacro.Environment,e:nexacro.ExtendedCommandEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Environment | Event가 발생한 Object. |
| `e` | ExtendedCommandEventInfo | Event Object. |

**Remark**
- Form 의 onextendedcommand 이벤트가 전파되어 Environment 의 onextendedcommand 이벤트가 발생합니다.
   이벤트 전파를 막으려면 Form 의 onextendedcommand 이벤트에서 stopPropagation() 메소드를 사용하여야 합니다.

---

## onload

넥사크로 엔진이 로드된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onload(obj:nexacro.Environment,e:nexacro.LoadEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Environment | Event가 발생한 Object. |
| `e` | LoadEventInfo | Event Object. |

**Remark**
- Application 과 Form 이 로드되기 전에 발생하는 이벤트입니다.
   화면 크기 및 기타 환경변수를 변경할 수 있습니다.

---

## onuserhotkey

전역 단축키 입력 시 발생하는 이벤트입니다.

**Syntax**
```javascript
onuserhotkey(obj:nexacro.Environment,e:nexacro.EnvironmentUserHotkeyEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Environment | Event가 발생한 Object. |
| `e` | EnvironmentUserHotkeyEventInfo | Event Object. |

**Remark**
전역 단축키 입력 시 onkeydown 이벤트 발생 전에 발생하는 이벤트입니다.

---
