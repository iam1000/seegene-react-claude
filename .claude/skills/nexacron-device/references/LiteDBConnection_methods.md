# LiteDBConnection Methods

| Method | Description |
|--------|-------------|
| `begin()` | LiteDBConnection 에 연결된 데이터베이스에 트랜잭션을 설정하는 메소드입니다. |
| `close()` | LiteDBConnection 에 연결된 데이터베이스를 닫는 메소드입니다. |
| `commit()` | LiteDBConnection 에 연결된 데이터베이스에 트랜잭션 Commit 을 수행하는 메소드입니다. |
| `isConnected()` | LiteDBConnection 에 데이터베이스가 연결되어 있는지 확인하는 메소드입니다. |
| `open()` | LiteDBConnection 에 데이터베이스를 연결하는 메소드입니다. |
| `rollback()` | LiteDBConnection 에 연결된 데이터베이스에 트랜잭션 RollBack 을 수행하는 메소드입니다. |

---

## begin

LiteDBConnection 에 연결된 데이터베이스에 트랜잭션을 설정하는 메소드입니다.

**Syntax**
```javascript
LiteDBConnection.begin()
```

**Sample**
```javascript
this.LiteDBConnection00.begin();
```

**Remark**
- 트랜잭션 설정에 성공하면 onsuccess 이벤트가 발생합니다.
  트랜잭션 설정에 실패하면 onerror 이벤트가 발생합니다.

---

## close

LiteDBConnection 에 연결된 데이터베이스를 닫는 메소드입니다.

**Syntax**
```javascript
LiteDBConnection.close()
```

**Sample**
```javascript
this.LiteDBConnection00.close();
```

**Remark**
- 데이터베이스 닫기에 성공하면 onsuccess 이벤트가 발생합니다.
  데이터베이스 닫기에 실패하면 onerror 이벤트가 발생합니다.

- 이미 닫혀있는 데이터베이스에 close() 메소드 수행 시 정상으로 처리되어 onsuccess 이벤트가 발생합니다.

---

## commit

LiteDBConnection 에 연결된 데이터베이스에 트랜잭션 Commit 을 수행하는 메소드입니다.

**Syntax**
```javascript
LiteDBConnection.commit()
```

**Sample**
```javascript
this.LiteDBConnection00.commit();
```

**Remark**
- 트랜잭션 Commit 에 성공하면 onsuccess 이벤트가 발생합니다.
  트랜잭션 Commit 에 실패하면 onerror 이벤트가 발생합니다.

---

## isConnected

LiteDBConnection 에 데이터베이스가 연결되어 있는지 확인하는 메소드입니다.

**Syntax**
```javascript
LiteDBConnection.isConnected()
```

**Sample**
```javascript
this.LiteDBConnection00.isConnected();
```

**Remark**
- 데이터베이스가 연결되어 있으면 onsuccess 이벤트가 발생합니다.
  데이터베이스가 연결되어 있지 않으면 onerror 이벤트가 발생합니다.

---

## open

LiteDBConnection 에 데이터베이스를 연결하는 메소드입니다.

**Syntax**
```javascript
LiteDBConnection.open( [strDataSource [,constOpenFlag]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strDataSource` | String | 연결할 데이터베이스의 위치정보를 문자열로 설정합니다.  절대경로 또는 Alias 를 사용하여 설정합니다. 값 생략 시 datasource 속성값이 적용됩니다. |
| `constOpenFlag` | Constant | 데이터베이스와 연결하는 옵션을 설정합니다.  LiteDBConnection.openReadWrite 또는 0 설정 시 데이터베이스를 읽기/쓰기가 가능하도록 연결합니다. LiteDBConnection.openReadWriteCreate 또는 1  설정 시 데이터베이스를 읽기/쓰기/파일생성이 가능하도록 연결합니다.  값 생략 시 openflag 속성값이 적용됩니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 true 를 반환합니다.  파라미터값을 잘 못 설정하면 false 를 반환합니다.

**Remark**
- 데이터베이스 연결에 성공하면 onsuccess 이벤트가 발생합니다.
   데이터베이스 연결에 실패하면 onerror 이벤트가 발생합니다.

- 이미 연결되어 열려 있는 데이터베이스에 open() 메소드 수행 시 정상으로 처리되어 onsuccess 이벤트가 발생합니다.

- strDataSource 에 사용할 수 있는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---

## rollback

LiteDBConnection 에 연결된 데이터베이스에 트랜잭션 RollBack 을 수행하는 메소드입니다.

**Syntax**
```javascript
LiteDBConnection.rollback()
```

**Sample**
```javascript
this.LiteDBConnection00.rollback();
```

**Remark**
- 트랜잭션 RollBack 에 성공하면 onsuccess 이벤트가 발생합니다.
  트랜잭션 RollBack 에 실패하면 onerror 이벤트가 발생합니다.

- RollBack 을 수행할 대상이 없는 경우도 정상으로 처리되어 onsuccess 이벤트가 발생합니다.

---
