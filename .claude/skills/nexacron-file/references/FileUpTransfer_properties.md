# FileUpTransfer Properties

| Property | Description |
|----------|-------------|
| `filelist` | FileUpTransfer 에서 서버로 업로드할 파일의 정보를 Collection 형태로 갖는 읽기전용 속성입니다. |
| `id` | FileUpTransfer의 고유 식별자를 설정하는 속성입니다. |
| `name` | FileUpTransfer 의 이름을 설정하는 속성입니다. |
| `postdatalist` | 파일을 업로드할 때 서버로 전송할 데이터를 Collection 형태로 갖는 읽기전용 속성입니다. |
| `url` | FileUpTransfer 에서 업로드 한 파일을 수신할 서버페이지 정보를 설정하는 속성입니다. |

---

## filelist

FileUpTransfer 에서 서버로 업로드할 파일의 정보를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
FileUpTransfer.filelist
```

**Setting Syntax**
```javascript
var objFile0 = this.FileUpTransfer00.filelist[0];
var objFile0 = this.FileUpTransfer00.filelist["id"];
```

**Remark**
- filelist 속성은 "{ ID : VirtualFile }" 형태의 Collection 으로 addFile(), setFile() 메소드를 사용하여 설정할 수 있습니다.

- filelist 속성은 Collection 접근방식을 사용할 수 있습니다.
   filelist[0], filelist["id"], filelist.length 등의 방법을 사용합니다.

---

## id

FileUpTransfer의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
FileUpTransfer.id
```

**Setting Syntax**
```javascript
FileUpTransfer를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

FileUpTransfer 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
FileUpTransfer.set_name(strName) // set
FileUpTransfer.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## postdatalist

파일을 업로드할 때 서버로 전송할 데이터를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
FileUpTransfer.postdatalist
```

**Setting Syntax**
```javascript
this.FileUpTransfer00.postdatalist["Key"];
```

**Remark**
- 서버로 데이터 전송 시 HTTP/HTTPS 프로토콜을 사용하여 POST 방식으로 전송합니다.

- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 으로 setPostData() 메소드를 사용하여 설정할 수 있습니다.

- postdatalist 속성은 Collection 접근방식을 사용할 수 잇습니다.
   postdatalist[0], postdatalist["strKey"], postdatalist.length 등의 방법을 사용합니다.

---

## url

FileUpTransfer 에서 업로드 한 파일을 수신할 서버페이지 정보를 설정하는 속성입니다.

**Syntax**
```javascript
FileUpTransfer.set_url(strURL) // set
FileUpTransfer.url // get
```

**Setting Syntax**
```javascript
업로드 한 파일을 수신할 서버페이지 정보를 문자열로 설정합니다.
```

**Remark**
- upload() 메소드 실행 시 서버페이지 파라미터를 설정하지 않으면 url 속성에 설정된 값이 적용됩니다.
   upload() 메소드 실행 시 서버페이지 파라미터를 설정하면 url 속성에 설정된 값은 무시됩니다.

- 파일 업로드의 결과를 onsuccess 이벤트의 "e.datasets" 속성으로 전달할 수 있습니다.
   "e.datasets" 속성은 XML 또는 SSV 형식의 DataSet 으로 구성되어야 합니다.

- 어플리케이션의 Domain 과 파일을 수신 할 서버페이지의 Domain 이 다를 경우 Cross Domain 문제로 에러가 발생할 수 있습니다.

---
