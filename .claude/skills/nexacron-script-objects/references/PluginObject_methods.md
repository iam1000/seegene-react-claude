# PluginObject Methods

| Method | Description |
|--------|-------------|
| `callMethod()` | PluginObject 로 Wrapping 된 객체에 정의된 메소드를 호출하는 메소드입니다. |
| `getProperty()` | PluginObject 로 Wrapping 된 객체에 정의된 속성의 값을 반환하는 메소드입니다. |
| `setProperty()` | PluginObject 로 Wrapping 된 객체에 정의된 속성에 값을 설정하는 메소드입니다. |

---

## callMethod

PluginObject 로 Wrapping 된 객체에 정의된 메소드를 호출하는 메소드입니다.

**Syntax**
```javascript
PluginObject.callMethod( strMethodID [, varArg1 [, varArg2 ]]);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMethodID` | String | 호출할 메소드의 이름을 문자열로 설정합니다. |
| `varArg1` | Object | 호출할 메소드에 전달될 인수를 설정합니다. |
| `varArg2` | Object | 호출할 메소드에 전달될 인수를 설정합니다. |

**Remark**
- Cross Domain 상황이면 사용에 제한이 있습니다.

---

## getProperty

PluginObject 로 Wrapping 된 객체에 정의된 속성의 값을 반환하는 메소드입니다.

**Syntax**
```javascript
PluginObject.getProperty( strPropID );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPropID` | String | PluginObject 로 Wrapping 된 객체에 정의된 속성명을 문자열로 설정합니다. |

**Return**: `Object` — strPropID 가 객체를 가질 경우 해당 객체를 Wrapping 한 PluginObject 객체를 반환합니다.  strPropID 가 속성일 경우 속성값을 반환합니다.

**Remark**
- Cross Domain 상황이면 사용에 제한이 있습니다.

- 반환된 PluginObject 객체에서 getProperty(), setProperty(), callMethod() 메소드를 사용할 수 있습니다.
   각 메소드로 하위 객체나 속성에 접근하고, 메소드를 실행 할 수 있습니다.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.


◆ Android NRE 제약

- Android NRE 는 WebKit Library 에서 document 객체의 접근을 제공하지 않아 사용할 수 없는 메소드입니다.

---

## setProperty

PluginObject 로 Wrapping 된 객체에 정의된 속성에 값을 설정하는 메소드입니다.

**Syntax**
```javascript
PluginObject.setProperty( strPropID, varValue );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPropID` | String | PluginObject 로 Wrapping 된 객체에 정의된 속성명을 문자열로 설정합니다. |
| `varValue` | Variant | strPropID 속성에 저장할 값을 설정합니다. |

---
