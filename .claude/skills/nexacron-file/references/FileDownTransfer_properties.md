# FileDownTransfer Properties

| Property | Description |
|----------|-------------|
| `downloadfilename` | 파일 다운로드 시 표시되는 FileDialog 에 기본으로 표시될 파일명을 설정합니다. |
| `id` | FileDownTransfer의 고유 식별자를 설정하는 속성입니다. |
| `name` | FileDownTransfer 의 이름을 설정하는 속성입니다. |
| `postdatalist` | 파일을 다운로드할 때 서버로 전송할 데이터를 Collection 형태로 갖는 읽기전용 속성입니다. |
| `url` | FileDownTransfer 에서 다운로드 받을 파일의 서버경로와 파일명을 설정하는 속성입니다. |

---

## downloadfilename

파일 다운로드 시 표시되는 FileDialog 에 기본으로 표시될 파일명을 설정합니다.

**Syntax**
```javascript
FileDownTransfer.set_downloadfilename(strFileName) // set
FileDownTransfer.downloadfilename // get
```

**Setting Syntax**
```javascript
다운로드를 위한 FileDialog 에 기본으로 표시될 파일명을 설정합니다.

값을 설정하지 않으면 FileDialog 에 빈값이 표시됩니다.
파일명으로 사용할 수 없는 "\", "/", "*", """, "'", "<", ">", "|" 등의 문자는 설정할 수 없습니다.
```

**Remark**
- Windows NRE 환경만 지원하는 속성입니다.

- download() 메소드에서 strTargetpath 파라미터를 설정했을 경우 다운로드를 위한 FileDialog 는 표시되지 않습니다.

---

## id

FileDownTransfer의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
FileDownTransfer.id
```

**Setting Syntax**
```javascript
FileDownTransfer를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

FileDownTransfer 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
FileDownTransfer.set_name(strName) // set
FileDownTransfer.name // get
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

파일을 다운로드할 때 서버로 전송할 데이터를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
FileDownTransfer.postdatalist
```

**Setting Syntax**
```javascript
this.FileDownTransfer00.postdatalist["Key"];
```

**Remark**
- 서버로 데이터 전송 시 HTTP/HTTPS 프로토콜을 사용하여 POST 방식으로 전송합니다.

- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 으로 setPostData() 메소드를 사용하여 설정할 수 있습니다.

- postdatalist 속성은 Collection 접근방식을 사용할 수 잇습니다.
   postdatalist[0], postdatalist["strKey"], postdatalist.length 등의 방법을 사용합니다.

---

## url

FileDownTransfer 에서 다운로드 받을 파일의 서버경로와 파일명을 설정하는 속성입니다.

**Syntax**
```javascript
FileDownTransfer.set_url(strURL) // set
FileDownTransfer.url // get
```

**Setting Syntax**
```javascript
다운로드 받을 파일의 서버경로와 파일명을 문자열로 설정합니다.
```

**Remark**
- download() 메소드 실행 시 다운로드 경로 파라미터를 설정하지 않으면 url 속성에 설정된 값이 적용됩니다.
   download() 메소드 실행 시 다운로드 경로 파라미터를 설정하면 url 속성에 설정된 값은 무시됩니다.


◆ web runtime environment 제약

- Image, PDF 와 같은 특정 컨텐츠는 다운로드 시 웹브라우저가 파일을 수신하여 오픈 할 수 있습니다.
   웹브라우저의 파일 수신을 막으려면 url 속성에 다운로드를 위한 모듈경로를 설정하고 
   실제 파일정보는 PostData 에 설정하여 다운로드 모듈에서 파일을 전송하는 방법을 사용하여야 합니다.

---
