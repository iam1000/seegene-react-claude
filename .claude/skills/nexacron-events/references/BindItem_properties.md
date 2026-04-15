# BindItem Properties

| Property | Description |
|----------|-------------|
| `columnid` | 바인딩할 Dataset 의 Column ID 를 설정하는 속성입니다. |
| `compid` | 바인딩할 컴포넌트 ID를 설정하는 속성입니다. |
| `datasetid` | 바인딩할 Dataset ID를 설정하는 속성입니다. |
| `name` | BindItem 의 이름을 설정하는 속성입니다. |
| `parent` | BindItem 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `propid` | 바인딩할 컴포넌트의 속성을 설정하는 속성입니다. |

---

## columnid

바인딩할 Dataset 의 Column ID 를 설정하는 속성입니다.

**Syntax**
```javascript
BindItem.set_columnid(strColumnID) // set 
BindItem.columnid // get
```

**Setting Syntax**
```javascript
Dataset의 Column ID
```

---

## compid

바인딩할 컴포넌트 ID를 설정하는 속성입니다.

**Syntax**
```javascript
BindItem.set_compid(strCompID) // set 
BindItem.compid // get
```

**Setting Syntax**
```javascript
바인딩할 컴포넌트 ID
```

---

## datasetid

바인딩할 Dataset ID를 설정하는 속성입니다.

**Syntax**
```javascript
BindItem.set_datasetid(strDatasetID) // set 
BindItem.datasetid // get
```

**Setting Syntax**
```javascript
바인딩할 Dataset ID
```

---

## name

BindItem 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
BindItem.set_name(strName) // set
BindItem.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## parent

BindItem 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
BindItem.parent
```

**Setting Syntax**
```javascript
var objParent = this.BindItem00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- BindItem 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## propid

바인딩할 컴포넌트의 속성을 설정하는 속성입니다.

**Syntax**
```javascript
BindItem.set_propid(strPropertyID) // set 
BindItem.propid // get
```

**Setting Syntax**
```javascript
바인딩할 컴포넌트의 속성
```

**Remark**
- 컴포넌트의 속성이 value 로 지정된 경우에는 바인딩된 Dataset 에서 데이터를 가져오고(get) 수정된 데이터를 다시 Dataset 에 반영(set)할 수 있습니다.

- value 이외의 속성으로 지정된 경우에는 데이터를 가져오는(get) 작업만 가능합니다.

---
