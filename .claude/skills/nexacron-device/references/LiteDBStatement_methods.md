# LiteDBStatement Methods

| Method | Description |
|--------|-------------|
| `close()` | LiteDBStatement 에서 수행중이던 동작을 중단하는 메소드입니다. |
| `executeQuery()` | Select 쿼리를 수행하는 메소드입니다. |
| `executeUpdate()` | Insert, Update, Delete 쿼리문을 수행하는 메소드입니다. |

---

## close

LiteDBStatement 에서 수행중이던 동작을 중단하는 메소드입니다.

**Syntax**
```javascript
LiteDBStatement.close()
```

**Sample**
```javascript
this.LiteDBStatement00.close();
```

**Remark**
- 수행중이던 동작 중단에 성공하면 onsuccess 이벤트가 발생합니다.
  수행중이던 동작 중단에 실패하면 onerror 이벤트가 발생합니다.

---

## executeQuery

Select 쿼리를 수행하는 메소드입니다.

**Syntax**
```javascript
LiteDBStatement.executeQuery([strQuery])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strQuery` | String | 수행할 Select 쿼리문을 문자열로 설정합니다.  값 생략 시 query 속성에 설정된 쿼리문이 적용됩니다. |

**Return**: `Boolean` — strQuery 파라미터값(또는 LiteDBStatement 오브젝트의 query 속성값)이 null이거나 String 타입이 아닌 경우 false를 반환합니다.

**Remark**
- SQL문이 에러 없이 실행된 경우 onsuccess 이벤트가 발생합니다.
  onsuccess 이벤트 발생 시 LiteDBEventInfo 오브젝트의 returnvalue 속성값에서 SQL문 실행 결과 데이터를 Dataset 오브젝트로 확인할 수 있습니다.

---

## executeUpdate

Insert, Update, Delete 쿼리문을 수행하는 메소드입니다.

**Syntax**
```javascript
LiteDBStatement.executeUpdate([strQuery])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strQuery` | String | 수행할 Insert, Update, Delete 쿼리문을 문자열로 설정합니다.  값 생략 시 query 속성에 설정된 쿼리문이 적용됩니다. |

**Return**: `Boolean` — strQuery 파라미터값(또는 LiteDBStatement 오브젝트의 query 속성값)이 null이거나 String 타입이 아닌 경우 false를 반환합니다.

**Remark**
- SQL문이 에러 없이 실행된 경우 onsuccess 이벤트가 발생합니다.
  onsuccess 이벤트 발생 시 LiteDBEventInfo 오브젝트의 returnvalue 속성값에서 SQL문 실행으로 처리된 Row 숫자를 확인할 수 있습니다.

---
