# FileDialog Properties

| Property | Description |
|----------|-------------|
| `accept` | FileDialog 에 적용될 파일형식을 설정하는 속성입니다. |
| `defaultextension` | FileDialog 에 선택되어 있는 파일형식의 확장자를 파일명에 포함시킬지 설정하는 속성입니다. |
| `filter` | FileDialog 에 적용될 파일형식을 설정하는 속성입니다. |
| `filterindex` | FileDialog 에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다. |
| `id` | FileDialog의 고유 식별자를 설정하는 속성입니다. |
| `name` | FileDialog 의 이름을 설정하는 속성입니다. |
| `parent` | FileDialog 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |

---

## accept

FileDialog 에 적용될 파일형식을 설정하는 속성입니다.

**Syntax**
```javascript
FileDialog.set_accept(strAccept) // set
FileDialog.accept // get
```

**Setting Syntax**
```javascript
FileDialog 에 적용될 파일형식을 확장자 또는 MIME 형태로 설정합니다.

".png", ".exe", ".png, .exe" 형식의 확장자 형태로 파일형식을 설정합니다.
"image/png", "application/*", "audio" 형식의 MIME 형태로 파일형식을 설정합니다.

"audio/*, .png, .exe" 와 같이 "," 문자를 구분자로 하여 확장자, MIME 구분없이 여러개의 파일형식을 설정할 수 있습니다.

* Mobile WRE 는 MIME 형태만 설정할 수 있습니다.
```

**Remark**
◆ 데스크탑 NRE 제약
- FileDialog 에 파일형식을 적용하려면 filter 속성을 설정하여야 합니다.

◆ IE 브라우저 제약
- accept 속성에 설정한 파일형식 외에 브라우저가 기본으로 지원하는 파일형식이 표시될 수 있습니다.

◆ Mobile WRE 제약
- MIME 으로 "image", "video", "audio" 값만 설정할 수 있습니다.
   "image/png" 와 같은 형식의 확장자 제한방식은 적용되지 않습니다.
- MIME 으로 "image", "video", "audio" 설정 시 각각 메모리에 로드된 "이미지", "비디오", "오디오" 파일이 있는 폴더만 접근할 수 있습니다.
- 구글드라이브, NAS 와 같이 외부영역에 위치한 파일은 설정한 파일형식이 적용되지 않습니다.

◆ iOS/iPadOS Default Web Browser 제약
- 사진보관함은 설정한 파일형식이 적용되지 않습니다.

---

## defaultextension

FileDialog 에 선택되어 있는 파일형식의 확장자를 파일명에 포함시킬지 설정하는 속성입니다.

**Syntax**
```javascript
FileDialog.set_defaultextension(bExtension) // set
FileDialog.defaultextension // get
```

**Setting Syntax**
```javascript
FileDialog 에서 기본선택 확장자를 적용하지 않습니다.
```

**Remark**
- Nexacro Runtime Environment에서 FileDialog 를 "SAVE" 옵션으로 오픈했을 경우만 적용되는 속성입니다.

- defaultextension 속성값을 설정하지 않으면 true 로 적용됩니다.

- FileDialog 에 적용될 파일형식은 filter, filterindex 속성으로 설정합니다.

---

## filter

FileDialog 에 적용될 파일형식을 설정하는 속성입니다.

**Syntax**
```javascript
FileDialog.set_filter(strFilter) // set
FileDialog.filter // get
```

**Setting Syntax**
```javascript
FileDialog 에 적용될 파일형식을 "설명|확장자" 형식으로 설정합니다.

"|" 문자를 구분자로 하여 설명과 실제 확장자를 쌍으로 여러개의 파일형식을 설정할 수 있습니다.
한 개의 파일형식내에서 복수개의 확장자를 지정할 때는 "*.xlsx;*.xls" 와 같이 ";" 문자로 구분하여 설정합니다.
```

**Remark**
- filter 속성값을 설정하지 않으면 빈문자열이 설정되고, "All(*.*)|*.*|" 로 동작합니다.

- FileDialog 가 표시될 때 선택될 필터는 filterindex 속성에 설정합니다.

- 웹브라우저 환경일 때 FileDialog 에 파일형식을 적용하려면 accept 속성을 설정하여야 합니다.

---

## filterindex

FileDialog 에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다.

**Syntax**
```javascript
FileDialog.set_filterindex(nFilterIndex) // set
FileDialog.filterindex // get
```

**Setting Syntax**
```javascript
FileDialog 에 설정된 파일형식 중 기본으로 표시될 파일형식의 인덱스를 숫자로 설정합니다.
```

**Remark**
- filterindex 속성값을 설정하지 않으면 0 으로 적용됩니다.

- FileDialog 에 표시될 파일형식은 filter 속성을 설정하여야 합니다.
   파일형식의 인덱스는 0 부터 시작하며 첫번째 파일형식부터 차례로 인덱스가 설정됩니다.

- 화면에 표시된 FileDialog 의 파일형식을 변경하면 filterindex 속성에 반영됩니다.

- 웹브라우저 환경일 때 FileDialog 에 파일형식을 적용하려면 accept 속성을 설정하여야 합니다.

---

## id

FileDialog의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
FileDialog.id
```

**Setting Syntax**
```javascript
FileDialog를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## name

FileDialog 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
FileDialog.set_name(strName) // set
FileDialog.name // get
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

FileDialog 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
FileDialog.parent
```

**Setting Syntax**
```javascript
var objParent = this.FileDialog00.parent;
```

**Remark**
- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- FileDialog 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.

---
