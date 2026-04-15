# Dataset Properties

| Property | Description |
|----------|-------------|
| `arguments` | DataSet 의 url 속성에 설정된 Business Service 에 전달할 인수를 설정하는 속성입니다. |
| `binddataobject` | Dataset 오브젝트와 바인드되는 DataObject 오브젝트의 ID를 설정하는 속성입니다. |
| `colcount` | DataSet 에 정의된 Column 의 갯수를 갖는 읽기전용 속성입니다. |
| `colinfos` | DataSet 에 정의된 Column 정보를 Collection 형태로 갖는 읽기전용 속성입니다. |
| `collation` | 데이터 정렬 방식을 결정하는 유형을 설정하는 속성입니다. |
| `constcount` | DataSet 에 정의된 Const Column (상수 컬럼)의 갯수를 갖는 읽기전용 속성업니다. |
| `dataobjectbindmode` | 바인딩된 DataObject 오브젝트와의 통신 방식을 설정하는 속성입니다. |
| `dataobjectpath` | 바인딩된 DataObject 오브젝트의 전체 데이터 경로에서 새로운 루트 정보를 지정합니다. |
| `enableevent` | DataSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| `filterstr` | DataSet 에 로드된 데이터를 필터링할 조건식을 설정하는 속성입니다. |
| `keystring` | Dataset 오브젝트에 로드된 데이터를 그룹화 하거나 정렬할 기준이 되는 조건식을 설정하는 속성입니다. |
| `loadfiltermode` | DataSet 에 데이터를 로드하거나 트랜잭션을 수행할 때 filterstr 속성값의 적용방법을 설정하는 속성입니다. |
| `loadkeymode` | DataSet 에 데이터를 로드하거나 트랜잭션을 수행할 때 keystring 속성값의 적용방법을 설정하는 속성입니다. |
| `name` | Dataset 의 이름을 설정하는 속성입니다. |
| `preload` | DataSet 의 url 속성을 설정한 경우 DataSet 에 데이터를 로드하는 시점을 설정하는 속성입니다. |
| `progressload` | 서버로부터 데이터를 Chunked 방식으로 여러번에 걸쳐서 받을 경우에 대한 처리방법을 설정하는 속성입니다. |
| `reversesubsum` | DataSet 이 keystring 속성에 의해 그룹핑 되었을 때 그룹소계가 표시될 위치를 설정하는 속성입니다. |
| `rowcount` | DataSet 에 로드된 데이터의 갯수를 갖는 읽기전용 속성입니다. |
| `rowposition` | DataSet 에서 현재 선택된 데이터의 Row 인덱스를 갖는 속성입니다. |
| `saveinfinity` | DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 처리 방법을 설정하는 속성입 |
| `saveinvaliddate` | DataSet 에서 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 처리 방법을 설정하는 속성입니다. |
| `savenan` | DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 처리 방법을 설정하는 속성입니다. |
| `serverdatasetid` | DataSet 의 url 속성에 설정된 Business Service 를 통해 전달된 DataSet 중 실제 사용될 DataSet 의 ID를 설 |
| `updatecontrol` | DataSet 의 데이터가 Insert/Update/Delete 되었을 경우 각 RowType 을 자동으로 변경할 지 설정하는 속성입니다. |
| `url` | DataSet 에 Business Service 를 연결하는 경우 해당 서비스의 경로(URL)을 설정하는 속성입니다. |
| `useclientlayout` | 트랜잭션을 수행하여 수신된 DataSet 의 Column Layout 을 적용할 지 설정하는 속성입니다. |

---

## arguments

DataSet 의 url 속성에 설정된 Business Service 에 전달할 인수를 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_arguments(strArgument) // set
Dataset.arguments // get
```

**Setting Syntax**
```javascript
Business Service 에 보낼 정보를 문자열로 설정합니다.
"변수ID=변수값" 형식으로 설정하며 빈칸으로 구분하여 여러개의 인수값을 보낼 수 있습니다.

ex) "argu0=test argu1=30"
```

**Remark**
- arguments 속성값은 Business Service 호출시 통신 DataSet 레이아웃의 Param 정보로 들어갑니다.

---

## binddataobject

Dataset 오브젝트와 바인드되는 DataObject 오브젝트의 ID를 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_binddataobject(strDataobject) // set 
Dataset.binddataobject // get
```

**Setting Syntax**
```javascript
바인딩할 DataObject 오브젝트의 ID를 문자열로 설정합니다.
```

---

## colcount

DataSet 에 정의된 Column 의 갯수를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
Dataset.colcount
```

**Setting Syntax**
```javascript
var n = this.Dataset00.colcount
```

**Remark**
- DataSet 에 Constant Column (상수 컬럼) 이 정의되어 있다면 Constant Column 갯수도 포함됩니다.

---

## colinfos

DataSet 에 정의된 Column 정보를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
Dataset.colinfos
```

**Setting Syntax**
```javascript
var objCol0 = this.Dataset00.colinfos[0].name;
```

**Remark**
- colinofs 속성은 Collection 접근방식을 사용할 수 있습니다.
  this.Dataset00.colinfos[0], this.Dataset00.colinfos["ColID"], this.Dataset00.colinfos.length 등의 방법을 사용합니다.

---

## collation

데이터 정렬 방식을 결정하는 유형을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_collation(strCollation) // set 
Dataset.collation // get
```

**Setting Syntax**
```javascript
- "none" : 기존 정렬 방식을 그대로 사용합니다.
- "systemlanguage" : 운영체제 또는 브라우저 설정 언어 정보를 기반으로 정렬 방식을 결정합니다.
- "currentlocale" : 컴포넌트, 폼, Environment에 설정된 locale 정보를 기반으로 정렬 방식을 결정합니다.
- [localecode] : ISO 639-1에서 정의하고 있는 2-알파벳 언어 코드와 ISO 3166-1에서 정의하고 있는 2-알파벳 국가 코드를 조합하여 "언어[_국가]" 또는 "언어[-국가]" 형식의 문자열로 설정합니다.
```

**Remark**
- Dataset 오브젝트의 Column type이 "String"일 경우에 적용됩니다.

◆ WRE 제약
- IE10 이하 버전에서는 "currentlocale"은 설정할 수 없습니다.

---

## constcount

DataSet 에 정의된 Const Column (상수 컬럼)의 갯수를 갖는 읽기전용 속성업니다.

**Syntax**
```javascript
Dataset.constcount
```

**Setting Syntax**
```javascript
var count = this.Dataset00.constcount;
```

---

## dataobjectbindmode

바인딩된 DataObject 오브젝트와의 통신 방식을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_dataobjectbindmode(strDataobjectbindmode) // set 
Dataset.dataobjectbindmode // get
```

**Setting Syntax**
```javascript
"oneway" 단방향 통신. DataObject 오브젝트의 데이터를 로드하는 동작만 지원합니다.
"twoway" 양방향 통신. Dataset 오브젝트 설정에 따라 데이터 변경 시 DataObject 오브젝트에 변경 정보를 전달합니다.
```

**Remark**
- 속성값을 설정하지 않으면 "oneway"로 동작합니다.

- dataobjectbindmode 속성값을 "twoway"로 설정하고 Dataset 오브젝트 데이터 변경 시 아래와 같이 바인딩 된 DataObject의 이벤트가 발생합니다.

 * 데이터 추가, 삭제, 위치 변경 등 Row 단위 변경
    ondatachanged 이벤트가 발생합니다.
    - updatecontrol = true
        applyChange 메소드 실행 시 이벤트 발생
    - updatecontrol = false
        Row 단위 변경 발생 시 이벤트 발생
        여러 Row를 변경하는 메소드 실행 시에는 2번 이상 이벤트가 발생합니다.
        예를 들어 exchangeRow 메소드 실행 시 메소드는 한 번 실행되지만 2개 Row의 위치가 변경되어 2개 Row 데이터가 변경되는 것이므로 ondatachanged 이벤트는 2번 발생합니다.

 * 특정 Row의 Column 값 변경
    updatecontrol 속성값에 따라 발생하는 이벤트가 달라집니다.
    - updatecontrol = true
        Column 값 변경 후 applyChange 메소드 실행 시 ondatachanged 이벤트가 발생합니다.
        특정 Column 값만 변경하고 applyChange 메소드를 실행했더라도 Row 단위 변경으로 처리하기 때문에 onvaluechanged 이벤트가 아닌 ondatachanged 이벤트가 발생합니다.
    - updatecontrol = false
        Column 값 변경 시 onvaluechanged 이벤트가 발생합니다.

- dataobjectpath 속성 설정 시 필터 스크립트를 적용한 경우에는 양방향 통신을 지원하지 않습니다. 예를 들어 dataobjectpath 속성값 설정 시 "$.data[?(@.employee_age==31)]" 형식으로 필터 스크립트를 적용한 경우입니다. 
  양방향 통신을 하면서 데이터 필터링이 필요한 경우에는 filterstr 속성을 사용해주세요.

---

## dataobjectpath

바인딩된 DataObject 오브젝트의 전체 데이터 경로에서 새로운 루트 정보를 지정합니다.

**Syntax**
```javascript
Dataset.set_dataobjectpath(strDataobjectpath) // set 
Dataset.dataobjectpath // get
```

**Setting Syntax**
```javascript
바인딩된 DataObject 오브젝트의 전체 데이터 경로에서 새로운 루트 정보를 지정합니다.
```

**Remark**
- strDataobjectpath 파라미터의 상세한 문법은 아래 링크를 참고하세요.
https://github.com/dchester/jsonpath#jsonpath-syntax

---

## enableevent

DataSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_enableevent(bEvent) // set
Dataset.enableevent // get
```

**Setting Syntax**
```javascript
DataSet 에서 이벤트가 발생하지 않도록 설정합니다.
```

**Remark**
- enableevent 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableevent 속성값이 true 일 때 많은 양의 데이터를 변경할 경우 DataSet 에 작업을 할 때마다 이벤트가 발생합니다.
  이 경우 enableevent 속성값을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.

- enableevent 속성값을 true로 변경하면 onrowsetchanged, onvaluechanged 이벤트가 발생합니다.

---

## filterstr

DataSet 에 로드된 데이터를 필터링할 조건식을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_filterstr(strFilter) // set
Dataset.filterstr // get
```

**Setting Syntax**
```javascript
DataSet 의 데이터를 필터링 할 조건을 문자열로 설정합니다.
```

**Remark**
- 조건식에 해당하는 데이터만 DataSet 에 필터링되어 로드됩니다.
  필터링이 완료된 후에는 onrowsetchanged 이벤트가 발생하며 e.reason 값은 "REASON_FILTER" 가 됩니다.

- 이미 필터링된 데이터셋의 filterstr을 재설정하면 전체 데이터를 다시 필터링하여 기존에 필터링된 내역은 유지되지 않습니다.

- DataSet 을 다시 로드하거나 트랜잭션을 수행할 때 filterstr 속성은 loadfiltermode 속성의 영향을 받습니다.
  자세한 내용은 loadfiltermode 속성 설명을 참조하시기 바랍니다.

---

## keystring

Dataset 오브젝트에 로드된 데이터를 그룹화 하거나 정렬할 기준이 되는 조건식을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_keystring(strKeystring) // set
Dataset.keystring // get
```

**Setting Syntax**
```javascript
설정 언어에 따라 상세 옵션을 JSON 형태로 설정할 수 있습니다.
- sensitivity: 문자열 정렬에 대한 옵션을 설정합니다. default 값은 "variant"입니다.
  * "base": 기본 문자가 다른 문자열만 다른 것으로 처리합니다.
  * "accent": 기본 문자는 같지만, accent 부호가 있는 경우 다른 것으로 처리합니다.
  * "case": 기본 문자나 대소문자가 다른 경우 다른 것으로 처리합니다.
  * "variant": 기본 문자는 같지만 accent 부호가 있는 경우와 대소문자가 다른 경우 다른 것으로 처리합니다.
- ignorePunctuation: 구두점을 무시할지 여부를 설정합니다. default 값은 false입니다.
- numeric: 문자열 타입의 숫자인 경우 숫자로 처리할지 여부를 설정합니다. default 값은 false입니다.
- caseFirst: 대소문자 정렬 옵션을 설정합니다. default 값은 "false"입니다.
  * "upper": 대문자의 우선순위가 높습니다.
  * "lower": 소문자의 우선순위가 높습니다.
  * "false": 로케일 기본 설정에 따라 처리합니다.
```

**Remark**
- keystring 속성이 설정되면 설정된 조건으로 그룹화/정렬이 수행된 후 onrowsetchanged 이벤트가 발생합니다.
   이때 onrowsetchanged 이벤트의 e.reason 속성값은 "REASON_SORTGROUP" 이 됩니다.

- keystring 속성을 설정 시 아래와 같은 방법을 사용할 수 있습니다.
"," 를 이용하면 그룹에 레벨을 줄 수 있습니다.
예를 들어, "G:column1,column2" 은 데이터를 column1 으로 그룹화한 후 그룹 내에서 column2 로 다시 그룹화한다는 의미입니다.
컬럼명에는 공백이 포함할 수 있으므로 "," 의 앞과 뒤에는 공백이 없어야 합니다.
"," 를 사용하지 않으면 두 개 이상의 열을 하나의 그룹키(Group Key)로 병합하여 사용할 수 있습니다.
예를 들어, "G:+column1-column2" 형식으로 입력하면 column1 과 column2 의 값을 합쳐 그룹화 값으로 사용하겠다는 뜻이 됩니다.
첫 글자로 "S:" 를 사용하면 그룹화 없이 정렬(Sorting)만 할 수 있습니다.
예를 들어 "S:+column1-column2" 형식으로 입력하면 column1 을 오름차순으로 정렬하고, column1 이 같은 레코드들은 column2 를 내림차순으로 정렬하겠다는 뜻이 됩니다.
만약, <group-type> 이 생략되면 "G" 옵션이 적용됩니다.
- 그룹화되면 Dataset 오브젝트에 논리적 레코드(Logical Record)가 생성됩니다.
   논리적 레코드는 Dataset 오브젝트에 열을 구성할 경우 prop 속성을 통해서 그룹화한 레코드들이 어떤 값을 가질지 설정할 수 있습니다.
   prop 속성값으로는 Count, Sum, Max, Min, Avg, Text 가 있습니다.
   keystring 으로 설정된 열은 prop 속성값의 대상에서 제외됩니다.

- Dataset 오브젝트를 로드하거나 트랜잭션을 수행할 경우 적용할 keystring 값은 loadkeymode 의 영향을 받습니다.
   자세한 사항은 loadkeymode 속성의 설명을 참조하시기 바랍니다.

- datatyperule 속성값이 "2.0" 인 경우 정렬 시 변경된 Data Validation 규칙이 적용되므로 주의하여야 합니다.
Column 타입이 "STRING" 이면 EmptyString("") < [Value] < undefined==null==NaN 순서로 정렬됩니다.
Column 타입이 "INT", "FLOAT", "BIGDECIMAL" 이면 -Infinity < [-Number] < 0 < [+Number] < Infinity < EmptyString("") < undefined==null==NaN 순서로 정렬됩니다.
Column 타입이 "DATE", "TIME", "DATETIME" 이면 EmptyString("") < [Date] < [Invalid Date] < undefined==null==NaN 순서로 정렬됩니다.
- OrderKey 설정 시에는 아래와 같은 제약이 있습니다.
locale code로 설정한 값을 브라우저에서 지원하지 않을 경우 운영체제 또는 브라우저 설정 언어 정보를 기반으로 동작하고 경고 메시지를 출력합니다.
locale code에서 설정한 속성 중 locale option에서 설정한 속성과 중복되는 속성이 있으면 locale option 설정값이 적용됩니다.
collation 속성을 설정했더라도 해당 컬럼 처리 시에는 locale code 설정값이 적용됩니다.
예를 들어 collation 속성값은 "en-US"으로 설정하고 keystring 속성값은 ""S:column0,O:column0['ja-JP']"으로 설정한 경우에는 keystring에서 설정한 "ja-JP" locale code가 적용됩니다.
IE10 이하는 지원하지 않습니다.

**See Also**: loadkeymode

---

## loadfiltermode

DataSet 에 데이터를 로드하거나 트랜잭션을 수행할 때 filterstr 속성값의 적용방법을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_loadfiltermode(enumMode) // set
Dataset.loadfiltermode // get
```

**Setting Syntax**
```javascript
데이터 로드 시 filterstr 속성에 디자인 시 설정된 값이 적용됩니다.

변경된 filterstr 속성값은 무시되고 초기값이 적용됩니다.
```

**Remark**
- loadfiltermode 속성값을 설정하지 않으면 "keep"으로 적용됩니다.

- filterstr 속성의 초기값은 DataSet이 생성될 때 filterstr 의 값으로 설정됩니다.

- filterstr 속성은 스크립트 등에 의해 사용 중 계속 변경이 발생할 수 있습니다.
  변경이 발생한 상태에서 트랜잭션 등을 사용하여 다시 로드하는 경우 filterstr 초기값이 적용된 것과는 다른 결과가 발생할 수 있습니다.
  만약, 데이터셋을 다시 로드할 때 filterstr 초기값이 적용되기를 원한다면 이 속성의 값을 'reset'으로 설정합니다.

---

## loadkeymode

DataSet 에 데이터를 로드하거나 트랜잭션을 수행할 때 keystring 속성값의 적용방법을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_loadkeymode(enumMode) // set
Dataset.loadkeymode // get
```

**Setting Syntax**
```javascript
데이터 로드 시 keystring 속성에 디자인 시 설정된 값이 적용됩니다.

변경된 keystring 속성값은 무시되고 초기값이 적용됩니다.
```

**Remark**
- loadfiltermode 속성값을 설정하지 않으면 "keep"으로 적용됩니다.

- keystring 속성의 초기값은 DataSet 이 생성될 때 keystring 의 값으로 설정됩니다.

- keystring 속성은 스크립트 등에 의해 사용 중 계속 변경이 발생할 수 있습니다.
  변경이 발생한 상태에서 트랜잭션 등을 사용하여 다시 로드하는 경우 keystring 초기값이 적용된 것과는 다른 결과가 발생할 수 있습니다.
  만약, 데이터셋을 다시 로드할 때 keystring 초기값이 적용되기를 원한다면 이 속성의 값을 'reset'으로 설정합니다.

---

## name

Dataset 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_name(strName) // set
Dataset.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## preload

DataSet 의 url 속성을 설정한 경우 DataSet 에 데이터를 로드하는 시점을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_preload(bPreload) // set
Dataset.preload // get
```

**Setting Syntax**
```javascript
DataSet 의 url 에 설정된 서비스로 데이터를 자동으로 로드하지 않습니다.

데이터 로드를 하려면 DataSet 의 load() 메소드나 transaction() 메소드를 호출하여야 합니다.
```

**Remark**
- preload 속성값을 설정하지 않으면 "false"로 적용됩니다.

---

## progressload

서버로부터 데이터를 Chunked 방식으로 여러번에 걸쳐서 받을 경우에 대한 처리방법을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_progressload(bPLoad) // set
Dataset.progressload // get
```

**Setting Syntax**
```javascript
Chunked 된 데이터가 마지막까지 모두 수신되면 DataSet 에 데이터를 로드 합니다.

DataSet 에 데이터가 로드되면 onload 이벤트가 한번 발생합니다.
```

**Remark**
- progressload 속성값을 설정하지 않으면 false 로 적용됩니다.

- 성능 문제로 인하여 DataSet 에서 onload 가 발생하는 횟수는 Chunked 데이터가 로딩된 횟수와 다를 수 있습니다.
   또한, 브라우저에 따라 onload 이벤트가 발생하는 횟수가 달라질 수 있습니다.

- Chunked 된 데이터를 수신중에 onload 이벤트가 발생하면 DSLoadEventInfo 의 reason 속성값에 1 이 전달됩니다.
   데이터를 모두 수신하여 onload 이벤트가 발생하면 DSLoadEventInfo 의 reason 속성값에 0 이 전달됩니다.

- Chunked 된 첫번째 데이터를 수신하면 rowposition 속성값이 변경되고 onrowposchanged 이벤트가 발생합니다.
   이후 Chunked 된 나머지 데이터를 수신할 때는 rowposition 속성이 변경되지 않습니다.

◆ 제약

- 서버에서 받는 데이터 형식이 JSON인 경우에는 progressload 속성이 적용되지 않습니다.

---

## reversesubsum

DataSet 이 keystring 속성에 의해 그룹핑 되었을 때 그룹소계가 표시될 위치를 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_reversesubsum(bSubsum) // set
Dataset.reversesubsum // get
```

**Setting Syntax**
```javascript
그룹 소계가 그룹의 마지막 Row 아래에 표시됩니다.
```

**Remark**
- reversesubsum 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- getGroupRangeStart() 메소드에 의해 반환되는 그룹 범위의 시작위치는 이 속성과 무관합니다.

---

## rowcount

DataSet 에 로드된 데이터의 갯수를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
Dataset.rowcount
```

**Setting Syntax**
```javascript
var n = this.Dataset00.rowcount;
```

**Remark**
- 필터링 되거나 삭제된 데이터(Row)는 제외됩니다.

---

## rowposition

DataSet 에서 현재 선택된 데이터의 Row 인덱스를 갖는 속성입니다.

**Syntax**
```javascript
Dataset.set_rowposition(nRow) // set
Dataset.rowposition // get
```

**Setting Syntax**
```javascript
DataSet 에 로드된 데이터 중 선택할 데이터의 Row 인덱스를 설정합니다.

첫번째 Row 의 인덱스는 0 입니다.
```

**Remark**
- DataSet 에 데이터가 없을 경우에는 -1 값을 갖습니다.

- rowposition 속성을 변경시키면 DataSet 에서 canrowposchange 이벤트가 발생합니다.
  만약 canrowposchange 이벤트의 반환값을 false 로 설정하면 rowposition 속성값을 변경하지 않습니다.
  canrowposchange 이벤트의 반환값을 true 로 설정하거나 반환값이 없는 경우에는 rowposition 속성값을 변경하고 onrowposchanged 이벤트가 발생합니다.

- Grid 의 selectype 속성값이 "row" 또는 "cell" 일 때 바인드 된 DataSet 의 rowposition 속성값을 변경하면 Grid 의 해당 Row 가 선택처리됩니다.

- Grid 의 selecttype 속성값이 "row", "cell" 이외의 값일 때는 바인드 된 DataSet 의 rowposition 속성값을 변경해도 Grid 의 선택이 변경되지 않고 기존값을 유지합니다.
   이 때, DataSet 의 rowposition 값과 Grid 에 표시된 선택의 위치가 달라지므로 사용에 주의하여야 합니다.

---

## saveinfinity

DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 처리 방법을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_saveinfinity( enumSave ) // set 
Dataset.saveinfinity // get
```

**Setting Syntax**
```javascript
saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 빈문자열("")로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 빈문자열("")로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 빈문자열("")로 처리합니다.
```

**Remark**
- saveinfinity 속성값을 설정하지 않으면 undefined 가 설정되고 Environment 의 datasetsaveinfinity 속성값으로 동작합니다.

---

## saveinvaliddate

DataSet 에서 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 처리 방법을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_saveinvaliddate( enumSave ) // set 
Dataset.saveinvaliddate // get
```

**Setting Syntax**
```javascript
saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 빈문자열("")로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 빈문자열("")로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 빈문자열("")로 처리합니다.
```

**Remark**
- saveinvaliddate 속성값을 설정하지 않으면 undefined 가 설정되고 Environment 의 datasetsaveinvaliddate 속성값으로 동작합니다.

---

## savenan

DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 처리 방법을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_savenan( enumSave ) // set 
Dataset.savenan // get
```

**Setting Syntax**
```javascript
saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 빈문자열("")로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 빈문자열("")로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 빈문자열("")로 처리합니다.
```

**Remark**
- savenan 속성값을 설정하지 않으면 undefined 가 설정되고 Environment 의 datasetsavenan 속성값으로 동작합니다.

---

## serverdatasetid

DataSet 의 url 속성에 설정된 Business Service 를 통해 전달된 DataSet 중 실제 사용될 DataSet 의 ID를 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_serverdatasetid(strDatasetID) // set
Dataset.serverdatasetid // get
```

**Setting Syntax**
```javascript
Business Service 를 통해 전달된 DataSet 중 실제로 사용할 DataSet 의 ID를 문자열로 설정합니다.
```

**Remark**
- DataSet 을 선택하기 위해서는 Business Service 에 기술되어 있는 DataSet ID를 지정해야 합니다.
  설정된 ID가 Business Service 내에 존재하지 않는다면 데이터가 로드되지 않습니다.

---

## updatecontrol

DataSet 의 데이터가 Insert/Update/Delete 되었을 경우 각 RowType 을 자동으로 변경할 지 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_updatecontrol(bUpdatecontrol) // set
Dataset.updatecontrol // get
```

**Setting Syntax**
```javascript
변경된 데이터(Row)에 대해 RowType 을 자동으로 변경하지 않습니다.
```

**Remark**
- updatecontrol 속성값을 설정하지 않으면 true 로 적용됩니다.

- updatecontrol 속성값이 false 일 경우만 setRowType() 메소드를 사용할 수 있습니다.

- updatecontrol 속성값을 false 로 사용하다가 true 로 변경하면 DataSet 이 오동작 할 수 있습니다.
   따라서 updatecontrol 속성값의 변경은 true 에서 false 로만 변경해 사용하여야 합니다.

---

## url

DataSet 에 Business Service 를 연결하는 경우 해당 서비스의 경로(URL)을 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_url(strUrl) // set
Dataset.url // get
```

**Setting Syntax**
```javascript
TypeDefinition 영역의 Services 에 정의된 Prefix를 사용한 형식으로 설정합니다.

또는 현재 위치를 기준으로 한 상대경로를 사용하여 설정합니다.
```

**Remark**
- DataSet 의 preload 속성이 "false"로 설정되어도 DataSet 의 load() 메소드를 수행하면 url 속성값에 설정된 서비스로 DataSet 을 로드합니다.

- DataSet 에 데이터가 로드되면 DataSet 에서 onload 이벤트가 발생합니다.


◆ 서비스(Service Prefix)

- Business Service 를 호출하기 위해 공통되는 접근경로를 TypeDefinition 에 정의하고, 
  컴포넌트의 속성이나 스크립트에 TypeDefinition에 정의된 Preifx를 기술하여 경로 정보를 간단히 표현할 수 있는 기능입니다.

---

## useclientlayout

트랜잭션을 수행하여 수신된 DataSet 의 Column Layout 을 적용할 지 설정하는 속성입니다.

**Syntax**
```javascript
Dataset.set_useclientlayout(bUseclient) // set
Dataset.useclientlayout // get
```

**Setting Syntax**
```javascript
서버로부터 수신된 DataSet 의 레이아웃과 데이터를 모두 로드합니다.

클라이언트 DataSet 에 존재하던 레이아웃은 삭제됩니다.
```

**Remark**
- useclientlayout 속성값을 설정하지 않으면 "false" 로 적용됩니다.

---
