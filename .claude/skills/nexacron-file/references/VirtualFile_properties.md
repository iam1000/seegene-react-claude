# VirtualFile Properties

| Property | Description |
|----------|-------------|
| `async` | VirtualFile 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다. |
| `filename` | VirtualFile 에 로드된 파일의 이름을 갖는 읽기전용 속성입니다. |
| `fullpath` | VirtualFile 에 오픈된 파일의 전체 경로정보를 갖는 읽기전용 속성입니다. |
| `id` | VirtualFile의 고유 식별자를 설정하는 속성입니다. |
| `name` | VirtualFile 의 이름을 설정하는 속성입니다. |
| `parent` | VirtualFile 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| `path` | VirtualFile 에 오픈된 파일의 경로정보를 갖는 읽기전용 속성입니다. |

---

## async

VirtualFile 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
VirtualFile 에 요청된 작업이 동기(Sync) 로 동작됩니다.
```

**Remark**
- async 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Mobile 제약

- 모바일 환경에서는 항상 비동기(Async) 로 동작합니다.

---

## filename

VirtualFile 에 로드된 파일의 이름을 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
VirtualFile 에 오픈된 파일의 이름만 갖습니다.
```

**Remark**
◆ web runtime environment 제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

---

## fullpath

VirtualFile 에 오픈된 파일의 전체 경로정보를 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
VirtualFile 에 오픈된 파일의 이름을 포함한 전체경로를 갖습니다.
```

**Remark**
- 웹브라우저 환경에서는 파일의 경로가 실제경로가 아닌 "FakePath" 형태의 가상경로로 지원됩니다.
   따라서, 웹브라우저 환경일 때는 지원되지 않는 속성입니다.

---

## id

VirtualFile의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
VirtualFile.id
```

**Setting Syntax**
```javascript
VirtualFile를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

VirtualFile 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
VirtualFile.set_name(strName) // set
VirtualFile.name // get
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

VirtualFile 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
VirtualFile.parent
```

**Setting Syntax**
```javascript
var objParent = this.VirtualFile00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- VirtualFile 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---

## path

VirtualFile 에 오픈된 파일의 경로정보를 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
VirtualFile 에 오픈된 파일의 이름을 제외한 경로정보를 갖습니다.
```

**Remark**
- 웹브라우저 환경에서는 파일의 경로가 실제경로가 아닌 "FakePath" 형태의 가상경로로 지원됩니다.
   따라서, 웹브라우저 환경일 때는 지원되지 않는 속성입니다.

---
