# Environment Methods

| Method | Description |
|--------|-------------|
| `findAccessibility()` | 파라미터로 전달된 텍스트가 접근성 관련 속성값에 설정된 오브젝트를 특정범위에서 검색하여 반환하는 메소드입니다. |
| `getDeviceAdaptor()` | DeviceAdaptors 영역에 정의된 디바이스를 반환하는 메소드입니다. |
| `playAccessibility()` | 파라미터로 전달된 오브젝트의 접근성을 실행하는 메소드입니다. |
| `userNotify()` | 넥사크로가 다른 어플리케이션에 포함되어 있을 때 상위 어플리케이션으로 정보를 전달하는 메소드입니다. |

---

## findAccessibility

파라미터로 전달된 텍스트가 접근성 관련 속성값에 설정된 오브젝트를 특정범위에서 검색하여 반환하는 메소드입니다.

**Syntax**
```javascript
Environment.findAccessibility( objParent, objStartComp, strFindText [, strProp [, strDirection [, strScope]]] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objParent` | Object | 검색하려는 범위의 기준이 되는 오브젝트를 설정합니다.  MainFrame, ChildFrame, Form 또는 Container Component 만 설정할 수 있습니다. 설정된 오브젝트의 하위만 검색범위로 적용됩니다. |
| `objStartComp` | Object | objParent 하위의 오브젝트 중 검색을 시작하는 오브젝트를 설정합니다.  잘못된 값이나 null 을 설정하면 objParent 의 첫번째 오브젝트부터 검색합니다. |
| `strFindText` | String | 오브젝트의 접근성 속성에서 검색하려는 텍스트를 설정합니다.  검색 시 대소문자를 구분하지 않으며 설정값이 속성값의 일부분이어도 검색됩니다. |
| `strProp` | String | 검색대상이 되는 접근성 속성을 설정합니다.  "all" 설정 시 accessibilitylabel 과 accessibilitydescription 속성에서 strFindText 값을 검색합니다. "label" 설정 시 accessibilitylabel 속성에서 strFindText 값을 검색합니다. "desc" 설정 시 accessibilitydescription 속성에서 strFindText 값을 검색합니다.  값을 설정하지 않으면 "all" 로 적용됩니다. |
| `strDirection` | String | 검색방향을 설정합니다.  "next" 설정 시 objStartComp 오브젝트에서 탭오더 방향으로 검색합니다. "prev" 설정 시 objStartComp 오브젝트에서 탭오더 반대 방향으로 검색합니다.  값을 설정하지 않으면 "next" 로 적용됩니다. |
| `strScope` | String | 검색범위를 설정합니다.  "all" 설정 시 objParent 하위에 속한 모든 오브젝트에서 검색합니다. "child" 설정 시 objParent 를 부모로 갖는 오브젝트만 검색합니다.  값을 설정하지 않으면 "all" 로 적용됩니다. |

**Return**: `Object` — 파라미터로 전달된 텍스트가 접근성 관련 속성값으로 설정된 오브젝트를 검색하여 반환합니다.

**Remark**
- enableaccessibility 속성값이 true 인 경우만 실행되는 메소드입니다.

- accessibilityenable 속성과 visible 속성값이 true 인 컴포넌트만 검색대상이 됩니다.

- findAccessibility() 메소드를 위해 별도의 HotKey 나 UI 를 제공하지 않습니다.

---

## getDeviceAdaptor

DeviceAdaptors 영역에 정의된 디바이스를 반환하는 메소드입니다.

**Syntax**
```javascript
Environment.getDeviceAdaptor( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 가져올 디바이스의 ID 를 문자열로 설정합니다. |

**Return**: `Object` — TypeDefinition 의 DeviceAdaptors 영역에 정의된 디바이스를 반환합니다.

---

## playAccessibility

파라미터로 전달된 오브젝트의 접근성을 실행하는 메소드입니다.

**Syntax**
```javascript
Environment.playAccessibility( objComp  );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 접근성을 실행할 오브젝트를 설정합니다. |

**Return**: `Boolean` — 오브젝트의 접근성을 정상적으로 실행하면 true 를 반환합니다.  오브젝트의 접근성을 정상적으로 실행하지 못하면 false 를 반환합니다.

**Remark**
- enableaccessibility 속성값이 true 인 경우만 실행되는 메소드입니다.

- objComp 에 잘못된 값을 설정 시 접근성이 실행되지 않습니다.


◆ Mobile 제약

- Mobile 환경은 지원하지 않는 메소드입니다.

---

## userNotify

넥사크로가 다른 어플리케이션에 포함되어 있을 때 상위 어플리케이션으로 정보를 전달하는 메소드입니다.

**Syntax**
```javascript
Environment.userNotify( nNotifyID, strMessage )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nNotifyID` | Number | Notification 을 구별하기 위한 ID 를 숫자로 설정합니다. |
| `strMessage` | String | 상위 어플리케이션으로 전달할 정보를 문자열로 설정합니다. |

---
