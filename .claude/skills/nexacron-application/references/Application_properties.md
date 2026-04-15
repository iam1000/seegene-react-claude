# Application Properties

| Property | Description |
|----------|-------------|
| `all` | Application 에 등록된 모든 오브젝트를 갖는 읽기전용 속성입니다. |
| `licenseurl` | 라이선스 정보를 가지고 있는 파일의 경로를 설정하는 속성입니다. |
| `mainframe` | Application 하위에 속한 MainFrame 을 갖는 읽기전용 속성입니다. |
| `name` | Application 의 이름을 설정하는 속성입니다. |
| `screenid` | Application 이 실행되는 스크린의 ID 를 설정하는 속성입니다. |
| `trays` | Application 에 등록된 Tray 오브젝트의 정보를 갖는 읽기전용 속성입니다. |
| `version` | Application 의 버전을 설정하는 속성입니다. |

---

## all

Application 에 등록된 모든 오브젝트를 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var objApp = nexacro.getApplication() ;
var objItem0 = objApp.all[0] ;
```

**Remark**
- all 속성을 사용하면 Application 에 속한 mainframe, Variables, DataSet, Objects 정보에 접근할 수 있습니다.

- all 속성은 Collection 접근방식을 사용할 수 있습니다.
  Application.all[0], Application.all["MainFrame"], Application.all.length 등의 방법을 사용합니다.

---

## licenseurl

라이선스 정보를 가지고 있는 파일의 경로를 설정하는 속성입니다.

**Syntax**
```javascript
application.licenseurl
```

**Setting Syntax**
```javascript
라이선스 정보를 가진 파일의 경로를 설정합니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 라이선스 경로가 서버인 경우에는 ADL과 같은 도메인 경로(D Class까지)만 허용합니다.

---

## mainframe

Application 하위에 속한 MainFrame 을 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var objApp = nexacro.getApplication() ;
var objMainframe = objApp.mainframe ;
```

**Remark**
- MainFrame 의 ID 를 사용하여 접근할 수 있습니다.

---

## name

Application 의 이름을 설정하는 속성입니다.

**Setting Syntax**
```javascript
Application 의 이름을 설정합니다.
```

**Remark**
- 넥사크로 스튜디오에서 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## screenid

Application 이 실행되는 스크린의 ID 를 설정하는 속성입니다.

**Syntax**
```javascript
application.screenid
```

**Setting Syntax**
```javascript
ScreenDefinition 영역에 정의된 스크린 항목을 콤마(",")로 구분하여 여러개 설정할 수 있습니다.
```

**Remark**
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 동일 프로젝트에서 하나의 스크린 ID는 하나의 Application 에만 등록될 수 있습니다.

---

## trays

Application 에 등록된 Tray 오브젝트의 정보를 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var objApp = nexacro.getApplication() ;
var objTray0 = objApp.trays[0] ;
```

**Remark**
- trays 속성은 Collection 접근방식을 사용할 수 있습니다.
  objApp.trays[0], objApp.trays["Tray00"], objApp.trays.length 등의 방법을 사용합니다.

---

## version

Application 의 버전을 설정하는 속성입니다.

**Setting Syntax**
```javascript
Application 의 버전을 설정합니다.
```

---
