# ContactSet Methods

| Method | Description |
|--------|-------------|
| `append()` | 모바일 기기에 연락처정보를 추가하는 메소드입니다. |
| `query()` | 모바일 기기에서 연락처정보 중 조건에 맞는 연락처를 조회하는 메소드입니다. |
| `remove()` | 모바일 기기에서 연락처정보를 삭제하는 메소드입니다. |
| `update()` | 모바일 기기에서 연락처정보를 갱신하는 메소드입니다. |

---

## append

모바일 기기에 연락처정보를 추가하는 메소드입니다.

**Syntax**
```javascript
ContactSet.append(objContact)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objContact` | Object | 추가할 연락처 정보를 Contact 객체 형태로 설정합니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 "true"를 반환합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**
- 모바일 기기에 연락처정보 추가에 성공하면 onsuccess 이벤트가 발생합니다.
  모바일 기기에 연락처정보 추가에 실패하면 onerror 이벤트가 발생합니다.

---

## query

모바일 기기에서 연락처정보 중 조건에 맞는 연락처를 조회하는 메소드입니다.

**Syntax**
```javascript
ContactSet.query( strQueryInfo [, nResultCnt] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strQueryInfo` | String | 연락처정보 중 조회할 연락처의 조건을 문자열로 설정합니다.  "필드이름:검색어;필드이름:검색어;..." 형태로 설정하여야 합니다. 검색어에는 "?", "*" 와 같은 와일드카드 문자를 사용할 수 있습니다. |
| `nResultCnt` | Number | 조건에 맞는 연락처 중 반환받을 연락처정보 갯수를 설정합니다.  "-1" 설정 시 조건에 맞는 연락처를 모두 조회합니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 "true"를 반환합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**
- 모바일 기기에서 연락처정보 조회에 성공하면 onsuccess 이벤트가 발생합니다.
  모바일 기기에서 연락처정보 조회에 실패하면 onerror 이벤트가 발생합니다.

- 조건문 예제입니다.

	
		Field Name
		Example
		Remark
	

	
		all
		 
		모든 필드
	

	
		uniqueid
		352, 3??, 3*
		 
	

	
		categories
		회사, 회*, ?? 
		 
	

	
		birthday
		20120305, 2012*, ????03*
		yyyyMMdd의 형태로 검색어 입력
	

	
		contactname
		홍길동, *동, 홍??
		하위 프로퍼티를 모두 검색
	

	
		nickname
		개발자, *자, 개*
		 
	

	
		note
		노트, *노*, ????트* 
		 
	

	
		phonenumbers
		01012345678, *5678* 
		 
	

	
		emails
		tobe@naver.com, *naver.com 
		 
	

	
		ims
		testid, *st* 
		 
	

	
		urls
		naver.com, naver* 
		 
	

	
		addresses
		강남구, 강*
		하위 프로퍼티를 모두 검색
	

	
		organizations
		투비소프트, *투비*
		하위 프로퍼티를 모두 검색

---

## remove

모바일 기기에서 연락처정보를 삭제하는 메소드입니다.

**Syntax**
```javascript
ContactSet.remove(strUniqueID)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strUniqueID` | String | 삭제할 연락처정보의 Contact 객체의 uniqueid 속성값을 설정합니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 "true"를 반환합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**
- 모바일 기기에서 연락처정보 삭제에 성공하면 onsuccess 이벤트가 발생합니다.
  모바일 기기에서 연락처정보 삭제에 실패하면 onerror 이벤트가 발생합니다.

---

## update

모바일 기기에서 연락처정보를 갱신하는 메소드입니다.

**Syntax**
```javascript
ContactSet.update(objContact)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objContact` | Object | 수정할 연락처 정보의 Contact 객체를 설정합니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 "true"를 반환합니다.  메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**
- 모바일 기기에서 연락처정보 수정에 성공하면 onsuccess 이벤트가 발생합니다.
  모바일 기기에서 연락처정보 수정에 실패하면 onerror 이벤트가 발생합니다.

- ContactSet 에서 query() 메소드를 통해 연락처정보를 조회한 후 update() 메소드를 실행합니다.

---
