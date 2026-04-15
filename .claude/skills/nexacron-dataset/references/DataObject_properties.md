# DataObject Properties

| Property | Description |
|----------|-------------|
| `data` | 데이터 정보를 갖는 오브젝트 형태의 속성입니다. |
| `enableevent` | DataObject 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| `id` | DataObject의 고유 식별자를 설정하는 속성입니다. |
| `name` | DataObject 의 이름을 설정하는 속성입니다. |
| `parent` | DataObject 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `preload` | url 속성값을 설정한 경우 데이터를 로드하는 시점을 설정하는 속성입니다. |
| `url` | 데이터를 호출할 URL을 설정하는 속성입니다. |

---

## data

데이터 정보를 갖는 오브젝트 형태의 속성입니다.

**Syntax**
```javascript
DataObject.set_data(objData) // set 
DataObject.data // get
```

**Setting Syntax**
```javascript
데이터를 문자열 또는 오브젝트 형태로 설정할 수 있습니다.
```

**Remark**
- 넥사크로 스튜디오 Json Contents Editor를 사용하는 경우 콘텐츠 조회 또는 편집 후 저장 시 data 속성값을 설정합니다.

- load, request 메소드 실행 후 받은 데이터는 data 속성값에 반영되고 onload 이벤트가 발생합니다.
  속성값이 유효하지 않은 경우에는 속성값을 undefined로 설정하고 onload 이벤트가 발생합니다.

---

## enableevent

DataObject 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
DataObject.set_enableevent(bEvent) // set
DataObject.enableevent // get
```

**Setting Syntax**
```javascript
DataObject 에서 이벤트가 발생하지 않도록 설정합니다.
```

**Remark**
- enableevent 속성값을 설정하지 않으면 true로 적용됩니다.

- enableevent 속성값이 true일 때 많은 양의 데이터를 변경할 경우 DataObject에 작업을 할 때마다 이벤트가 발생합니다.
  이 경우 enableevent 속성값을 false로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.

- enableevent 속성값을 true로 변경하면 ondatachanged 이벤트가 발생합니다.

---

## id

DataObject의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
DataObject.id
```

**Setting Syntax**
```javascript
DataObject를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

DataObject 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
DataObject.set_name(strName) // set
DataObject.name // get
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

DataObject 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
DataObject.parent
```

**Setting Syntax**
```javascript
var objParent = this.DataObject00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- DataObject 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## preload

url 속성값을 설정한 경우 데이터를 로드하는 시점을 설정하는 속성입니다.

**Syntax**
```javascript
DataObject.set_preload([bPreload]) // set 
DataObject.preload // get
```

**Setting Syntax**
```javascript
데이터를 자동으로 로드하지 않습니다.  preload 속성값이 false 인 경우에는 load 메소드를 호출해야 데이터를 로드합니다.
```

**Remark**
속성값을 설정하지 않으면 false로 적용됩니다.

---

## url

데이터를 호출할 URL을 설정하는 속성입니다.

**Syntax**
```javascript
DataObject.set_url(strUrl) // set 
DataObject.url // get
```

**Setting Syntax**
```javascript
TypeDefinition 영역의 Services 에 정의된 Prefix를 사용한 형식으로 설정합니다.

또는 현재 위치를 기준으로 한 상대경로를 사용하여 설정합니다.
```

**Remark**
- preload 속성이 false로 설정되어도 load() 메소드를 수행하면 url 속성값에 설정된 서비스에서 데이터를 호출합니다.

◆ 서비스(Service Prefix)
- Service 를 호출하기 위해 공통되는 접근경로를 TypeDefinition 에 정의하고, 
  컴포넌트의 속성이나 스크립트에 TypeDefinition에 정의된 Preifx를 기술하여 경로 정보를 간단히 표현할 수 있는 기능입니다.

---
