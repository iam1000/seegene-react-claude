# Decimal Methods

| Method | Description |
|--------|-------------|
| `abs()` | Decimal 오브젝트에 저장된 값을 절대값으로 변경하는 메소드입니다. |
| `addDecimal()` | Decimal 오브젝트에 저장된 값에 Decimal 형 값을 더하는 메소드입니다. |
| `addDouble()` | Decimal 오브젝트에 저장된 값에 숫자값을 더하는 메소드입니다. |
| `ceil()` | Decimal 오브젝트에 저장된 값을 소수점 기준으로 올림한 값으로 변경하는 메소드입니다. |
| `divDecimal()` | Decimal 오브젝트에 저장된 값을 Decimal 형 값으로 나누는 메소드입니다. |
| `divDouble()` | Decimal 오브젝트에 저장된 값을 숫자값으로 나누는 메소드입니다. |
| `floor()` | Decimal 오브젝트에 저장된 값을 소수점 기준으로 내림한 값으로 변경하는 메소드입니다. |
| `isEqual()` | Decimal 오브젝트에 저장된 값과 인수로 전달된 Decimal 오브젝트의 값이 일치하는 지 비교하는 메소드입니다. |
| `isInfinity()` | Decimal 오브젝트에 저장된 값이 Infinity 값인지 확인하는 메소드입니다. |
| `isNaN()` | Decimal 오브젝트에 저장된 값이 NaN 값인지 확인하는 메소드입니다. |
| `isNaNOrInf()` | Decimal 오브젝트에 저장된 값이 Infinity 또는 NaN 값인지 확인하는 메소드입니다. |
| `isNegative()` | Decimal 오브젝트에 저장된 값이 음수값인지 확인하는 메소드입니다. |
| `isZero()` | Decimal 오브젝트의 값의 Zero 여부를 반환하는 메소드입니다. |
| `modDecimal()` | Decimal 오브젝트에 저장된 값을 Decimal 형 값으로 나눈 나머지값으로 변경하는 메소드입니다. |
| `modDouble()` | Decimal 오브젝트에 저장된 값을 숫자값으로 나눈 나머지값으로 변경하는 메소드입니다. |
| `mulDecimal()` | Decimal 오브젝트에 저장된 값에 Decimal 형 값을 곱하는 메소드입니다. |
| `mulDouble()` | Decimal 오브젝트에 저장된 값에 숫자값을 곱하는 메소드입니다. |
| `round()` | Decimal 오브젝트에 저장된 값을 소수점 기준으로 반올림한 값으로 변경하는 메소드입니다. |
| `setDecimal()` | Decimal 오브젝트에 인수로 전달된 Decimal 오브젝트의 값을 저장하는 메소드입니다. |
| `setDouble()` | Decimal 오브젝트에 인수로 전달된 숫자값을 저장하는 메소드입니다. |
| `setString()` | Decimal 오브젝트에 숫자로 된 문자열을 저장하는 메소드입니다. |
| `subDecimal()` | Decimal 오브젝트에 저장된 값에서 Decimal 형 값을 빼는 메소드입니다. |
| `subDouble()` | Decimal 오브젝트에 저장된 값에서 숫자값을 빼는 메소드입니다. |
| `toString()` | Decimal 오브젝트에 저장된 값을 문자열로 반환하는 메소드입니다. |
| `trunc()` | Decimal 오브젝트에 저장된 값을 소수점 기준으로 버림한 값으로 변경하는 메소드입니다. |

---

## abs

Decimal 오브젝트에 저장된 값을 절대값으로 변경하는 메소드입니다.

**Syntax**
```javascript
Decimal.abs()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( -20 );

trace(objDec1.abs());
trace(objDec1);
```

**Return**: `Decimal` — 변경된 절대값을 반환합니다.

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## addDecimal

Decimal 오브젝트에 저장된 값에 Decimal 형 값을 더하는 메소드입니다.

**Syntax**
```javascript
Decimal.addDecimal( objDecimal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDecimal` | Decimal | Decimal 오브젝트에 더할 Decimal 오브젝트를 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## addDouble

Decimal 오브젝트에 저장된 값에 숫자값을 더하는 메소드입니다.

**Syntax**
```javascript
Decimal.addDouble( nValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nValue` | Number | Decimal 오브젝트에 더할 숫자값을 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## ceil

Decimal 오브젝트에 저장된 값을 소수점 기준으로 올림한 값으로 변경하는 메소드입니다.

**Syntax**
```javascript
Decimal.ceil()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( 30.555 );

trace(objDec1.ceil());
trace(objDec1);
```

**Return**: `Decimal` — 소수점을 기준으로 올림한 값을 반환합니다.

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## divDecimal

Decimal 오브젝트에 저장된 값을 Decimal 형 값으로 나누는 메소드입니다.

**Syntax**
```javascript
Decimal.divDecimal( objDecimal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDecimal` | Decimal | Decimal 오브젝트를 나눌 Decimal 오브젝트를 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## divDouble

Decimal 오브젝트에 저장된 값을 숫자값으로 나누는 메소드입니다.

**Syntax**
```javascript
Decimal.divDouble( nValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nValue` | Number | Decimal 오브젝트를 나눌 숫자값을 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## floor

Decimal 오브젝트에 저장된 값을 소수점 기준으로 내림한 값으로 변경하는 메소드입니다.

**Syntax**
```javascript
Decimal.floor()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( 30.555 );

trace(objDec1.floor());
trace(objDec1);
```

**Return**: `Decimal` — 소수점을 기준으로 내림한 값을 반환합니다.

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## isEqual

Decimal 오브젝트에 저장된 값과 인수로 전달된 Decimal 오브젝트의 값이 일치하는 지 비교하는 메소드입니다.

**Syntax**
```javascript
Decimal.isEqual( objDecimal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDecimal` | Decimal | 값을 비교할 Decimal 오브젝트를 설정합니다. |

**Return**: `Boolean` — 두 오브젝트의 값이 일치하면 "true" 를 반환합니다.  두 오브젝트의 값이 다르면 "false" 를 반환합니다.

---

## isInfinity

Decimal 오브젝트에 저장된 값이 Infinity 값인지 확인하는 메소드입니다.

**Syntax**
```javascript
Decimal.isInfinity()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( 1.55 );
var objDec2 = new nexacro.Decimal( Number.MAX_VALUE+1 );

trace(objDec1.isInfinity());
trace(objDec2.isInfinity());
```

**Return**: `Boolean` — Decimal 오브젝트의 값이 Infinity 값이면 "true" 를 반환합니다.  Decimal 오브젝트의 값이 Infinity 값이 아니면 "false" 를 반환합니다.

---

## isNaN

Decimal 오브젝트에 저장된 값이 NaN 값인지 확인하는 메소드입니다.

**Syntax**
```javascript
Decimal.isNaN()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( 30 );
var objDec2 = new nexacro.Decimal( ' ' );

trace(objDec1.isNaN());
trace(objDec2.isNaN());
```

**Return**: `Boolean` — Decimal 오브젝트의 값이 NaN 값이면 "true" 를 반환합니다.  Decimal 오브젝트의 값이 NaN 값이 아니면 "false" 를 반환합니다.

---

## isNaNOrInf

Decimal 오브젝트에 저장된 값이 Infinity 또는 NaN 값인지 확인하는 메소드입니다.

**Syntax**
```javascript
Decimal.isNaNOrInf()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( 30 );
var objDec2 = new nexacro.Decimal( ' ' );
var objDec3 = new nexacro.Decimal( Number.MAX_VALUE+1 );

trace(objDec1.isNaNOrInf());
trace(objDec2.isNaNOrInf());
trace(objDec3.isNaNOrInf());
```

**Return**: `Boolean` — Decimal 오브젝트의 값이 Infinity 또는 NaN 값이면 "true" 를 반환합니다.  Decimal 오브젝트의 값이 Infinity, NaN 값이 모두 아니면 "false" 를 반환합니다.

---

## isNegative

Decimal 오브젝트에 저장된 값이 음수값인지 확인하는 메소드입니다.

**Syntax**
```javascript
Decimal.isNegative()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( 0.01 );
var objDec2 = new nexacro.Decimal( -30 );

trace(objDec1.isNegative());
trace(objDec2.isNegative());
```

**Return**: `Boolean` — Decimal 오브젝트의 값이 음수값이면 "true" 를 반환합니다.  Decimal 오브젝트의 값이 음수값이 아니면 "false" 를 반환합니다.

---

## isZero

Decimal 오브젝트의 값의 Zero 여부를 반환하는 메소드입니다.

**Syntax**
```javascript
Decimal.isZero()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( 30 );
var objDec2 = new nexacro.Decimal( 0.0 );

trace(objDec1.isZero());
trace(objDec2.isZero());
```

**Return**: `Boolean` — Decimal 오브젝트의 값이 0 값이면 "true" 를 반환합니다.  Decimal 오브젝트의 값이 0 값이 아니면 "false" 를 반환합니다.

---

## modDecimal

Decimal 오브젝트에 저장된 값을 Decimal 형 값으로 나눈 나머지값으로 변경하는 메소드입니다.

**Syntax**
```javascript
Decimal.modDecimal( objDecimal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDecimal` | Decimal | Decimal 오브젝트를 나눌 Decimal 오브젝트를 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## modDouble

Decimal 오브젝트에 저장된 값을 숫자값으로 나눈 나머지값으로 변경하는 메소드입니다.

**Syntax**
```javascript
Decimal.modDouble( nValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nValue` | Number | Decimal 오브젝트를 나눌 숫자값을 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## mulDecimal

Decimal 오브젝트에 저장된 값에 Decimal 형 값을 곱하는 메소드입니다.

**Syntax**
```javascript
Decimal.mulDecimal( objDecimal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDecimal` | Decimal | Decimal 오브젝트에 곱할 Decimal 오브젝트를 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## mulDouble

Decimal 오브젝트에 저장된 값에 숫자값을 곱하는 메소드입니다.

**Syntax**
```javascript
Decimal.mulDouble( nValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nValue` | Number | Decimal 오브젝트에 곱할 숫자값을 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## round

Decimal 오브젝트에 저장된 값을 소수점 기준으로 반올림한 값으로 변경하는 메소드입니다.

**Syntax**
```javascript
Decimal.round()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( 30.555 );

trace(objDec1.round());
trace(objDec1);
```

**Return**: `Decimal` — 소수점을 기준으로 반올림한 값을 반환합니다.

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## setDecimal

Decimal 오브젝트에 인수로 전달된 Decimal 오브젝트의 값을 저장하는 메소드입니다.

**Syntax**
```javascript
Decimal.setDecimal( objDecimal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDecimal` | Decimal | Decimal 오브젝트에 저장할 다른 Decimal 오브젝트를 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## setDouble

Decimal 오브젝트에 인수로 전달된 숫자값을 저장하는 메소드입니다.

**Syntax**
```javascript
Decimal.setDouble( nValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nValue` | Number | Decimal 오브젝트에 저장할 숫자값을 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## setString

Decimal 오브젝트에 숫자로 된 문자열을 저장하는 메소드입니다.

**Syntax**
```javascript
Decimal.setString( strValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strValue` | String | Decimal 오브젝트에 저장할 숫자로 된 문자열을 설정합니다.  숫자가 아닌 문자가 포함되어 있을 경우 정상적으로 저장되지 않습니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## subDecimal

Decimal 오브젝트에 저장된 값에서 Decimal 형 값을 빼는 메소드입니다.

**Syntax**
```javascript
Decimal.subDecimal( objDecimal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objDecimal` | Decimal | Decimal 오브젝트에서 값을 빼려는 Decimal 오브젝트를 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## subDouble

Decimal 오브젝트에 저장된 값에서 숫자값을 빼는 메소드입니다.

**Syntax**
```javascript
Decimal.subDouble( nValue )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nValue` | Number | Decimal 오브젝트에서 값을 빼려는 숫자값을 설정합니다. |

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---

## toString

Decimal 오브젝트에 저장된 값을 문자열로 반환하는 메소드입니다.

**Syntax**
```javascript
Decimal.toString()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( "1234567890123456789012345" );

trace(objDec1.toString());
```

**Return**: `String` — Decimal 오브젝트에 저장된 값을 문자열로 반환합니다.

---

## trunc

Decimal 오브젝트에 저장된 값을 소수점 기준으로 버림한 값으로 변경하는 메소드입니다.

**Syntax**
```javascript
Decimal.trunc()
```

**Sample**
```javascript
var objDec1 = new nexacro.Decimal( 30.555 );

trace(objDec1.trunc());
trace(objDec1);
```

**Return**: `Decimal` — 소수점을 기준으로 버림한 값을 반환합니다.

**Remark**
- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.

---
