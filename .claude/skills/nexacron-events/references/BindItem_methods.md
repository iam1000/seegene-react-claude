# BindItem Methods

| Method | Description |
|--------|-------------|
| `bind()` | 스크립트에서 동적으로 생성된 BindItem을 실행시키는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 BindItem 을(를) 삭제하는 메소드입니다. |
| `init()` | 스크립트에서 동적으로 생성된 BindItem을 초기화시키는 메소드입니다. |

---

## bind

스크립트에서 동적으로 생성된 BindItem을 실행시키는 메소드입니다.

**Syntax**
```javascript
BindItem.bind()
```

**Sample**
```javascript
BindItem.bind();
```

**Remark**
생성된 BindItem을 Form에 추가하고 사용할 수 있습니다.

---

## destroy

스크립트에서 동적으로 생성한 BindItem 을(를) 삭제하는 메소드입니다.

**Syntax**
```javascript
BindItem.destroy()
```

**Sample**
```javascript
var bSucc = this.BindItem00.destroy();
```

**Return**: `Boolean` — BindItem 이(가) 정상적으로 삭제되면 true 를 반환합니다.  BindItem 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**
- 동적으로 생성한 BindItem 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**: init, removeChild, show, addChild, insertChild

---

## init

스크립트에서 동적으로 생성된 BindItem을 초기화시키는 메소드입니다.

**Syntax**
```javascript
BindItem.init(strName[,strCompID,strPropertyID,strDatasetID,strColumnID])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strName` | String | BindItem을 구별할 수 있는 이름 |
| `strCompID` | String | 바인딩할 컴포넌트의 ID |
| `strPropertyID` | String | 바인딩할 컴포넌트의 PropertyID |
| `strDatasetID` | String | 바인딩할 Dataset ID |
| `strColumnID` | String | 바인딩할 Dataset Column ID |

---
