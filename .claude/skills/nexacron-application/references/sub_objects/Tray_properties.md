# Tray Properties

| Property | Description |
|----------|-------------|
| `captioncolumn` | innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 텍스트가 정의된 Column 을 설정하는 속성입니다. |
| `checkboxcolumn` | 체크이미지를 서브메뉴 아이템에 표시할지 여부가 정의된 Column 을 설정하는 속성입니다. |
| `enablecolumn` | innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 활성화 여부가 정의된 Column을 설정하는 속성입니다 |
| `hotkeycolumn` | innerdataset 속성에 설정된 DataSet 의 Column 중 메뉴 아이템의 단축키가 정의된 Column을 설정하는 속성입니다. |
| `icon` | 작업표시줄에 표시되는 Tray 의 아이콘 이미지를 설정하는 속성입니다. |
| `iconcolumn` | 팝업메뉴 아이템에 표시되는 아이콘의 정보가 정의된 Column 을 설정하는 속성입니다. |
| `id` | TrayPopupMenu의 고유 식별자를 설정하는 속성입니다. |
| `idcolumn` | innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 ID가 정의된 Column을 설정하는 속성입니다. |
| `innerdataset` | Tray 의 팝업메뉴 아이템이 정의된 DataSet 의 ID를 설정하는 속성입니다. |
| `items` | Tray 에 등록된 TrayPopupMenu 오브젝트의 정보를 갖는 읽기전용 속성입니다. |
| `levelcolumn` | innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 상/하위 관계가 정의된 Column을 설정하는 속성입니 |
| `name` | Tray 의 이름을 설정하는 속성입니다. |
| `tooltip` | Tray 아이콘에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| `userdatacolumn` | innerdataset 속성에 설정된 DataSet의 Column 중 사용자 데이터를 처리하기 위한 Column을 설정하는 속성입니다. |

---

## captioncolumn

innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 텍스트가 정의된 Column 을 설정하는 속성입니다.

**Setting Syntax**
```javascript
Tray 팝업메뉴에 아이템으로 표시될 텍스트가 정의된 Column 의 ID 를 문자열로 설정합니다.
```

**Remark**
- innerdataset 속성에 설정된 DataSet 의 Column 만 설정할 수 있습니다.

- captioncolumn 속성에 설정된 Column 의 데이터가 각 팝업메뉴 아이템에 텍스트로 표시됩니다.

- 설정된 Column 의 데이터값이 "-" 이면 아이템 간의 구분선으로 처리되며, 구분선은 CSS 관련 속성이 적용되지 않습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.

---

## checkboxcolumn

체크이미지를 서브메뉴 아이템에 표시할지 여부가 정의된 Column 을 설정하는 속성입니다.

**Setting Syntax**
```javascript
체크이미지 표시 여부가 정의된 Column 의 ID 를 문자열로 설정합니다.
```

**Remark**
- innerdataset 속성에 설정된 DataSet 의 Column 만 설정할 수 있습니다.

- Column 의 데이터가 true 로 처리되면 체크이미지가 표시됩니다.

- Column 에 데이터가 없거나 false 로 처리되면 체크이미지가 표시되지 않습니다.
   이 때, iconcolumn 속성이 설정되어 있다면 아이콘이 표시됩니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.

	
		true / false
		Column type
		Row data
	

	
		false

---

## enablecolumn

innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 활성화 여부가 정의된 Column을 설정하는 속성입니다.

**Setting Syntax**
```javascript
팝업메뉴 아이템의 활성화 여부가 정의된 Column의 ID를 문자열로 설정합니다.
```

**Remark**
- enablecolumn 속성에 설정된 Column의 데이터가 "false"이면 팝업메뉴 아이템이 비활성화 되어 선택할 수 없습니다.

- enablecolumn 속성에 설정된 Column에 데이터가 없거나 enablecolumn 속성값을 설정하지 않으면 팝업메뉴 아이템이 활성화 됩니다.

- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.

---

## hotkeycolumn

innerdataset 속성에 설정된 DataSet 의 Column 중 메뉴 아이템의 단축키가 정의된 Column을 설정하는 속성입니다.

**Setting Syntax**
```javascript
메뉴 아이템의 단축키가 정의된 Column의 ID를 문자열로 설정합니다.
```

**Remark**
- hotkeycolumn 속성에 설정된 Column 에 정의된 단축키가 입력되면 onmenuclick 이벤트가 발생합니다.
  단축키 입력 시 수행할 동작을 onmenuclick 이벤트에 정의하여야 합니다.

- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.

---

## icon

작업표시줄에 표시되는 Tray 의 아이콘 이미지를 설정하는 속성입니다.

**Syntax**
```javascript
Tray.set_icon(strIcon) // set
Tray.icon // get
```

**Setting Syntax**
```javascript
확장자가 "*.ico" 인 아이콘 파일을 설정합니다.
```

**Remark**
- 아이콘 파일의 경로는 시스템 제공 아이콘이나 Web 경로에 있는 ico 파일이 아니면 등록되지 않습니다.

---

## iconcolumn

팝업메뉴 아이템에 표시되는 아이콘의 정보가 정의된 Column 을 설정하는 속성입니다.

**Setting Syntax**
```javascript
아이콘의 정보가 정의된 Column 의 ID 를 설정합니다.
```

**Remark**
- 시스템에서 지원하는 아이콘 이미지 파일 형식은 비트맵(*.bmp) 입니다.
   Column 에 정의된 값으로 URL 경로의 웹이미지만 사용할 수 있습니다.

- innerdataset 속성에 설정된 DataSet 의 Column 만 설정할 수 있습니다.

- checkboxcolumn 속성이 설정되지 않았거나 false 로 처리될 때 아이템에 아이콘이 표시됩니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.

---

## id

TrayPopupMenu의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
TrayPopupMenu.id
```

**Setting Syntax**
```javascript
TrayPopupMenu를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## idcolumn

innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 ID가 정의된 Column을 설정하는 속성입니다.

**Setting Syntax**
```javascript
팝업메뉴 아이템의 ID가 정의된 Column의 ID를 문자열로 설정합니다.
```

**Remark**
- 시스템이 제공하는 API Menu 를 사용하기 때문에 id 는 innerdataset 의 Row 인덱스로 설정됩니다.
  값을 설정할 수는 있으나 실제 id 로 동작하지는 않습니다.

- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.

---

## innerdataset

Tray 의 팝업메뉴 아이템이 정의된 DataSet 의 ID를 설정하는 속성입니다.

**Setting Syntax**
```javascript
팝업메뉴 아이템이 정의된 DataSet의 ID를 문자열로 설정합니다.
```

**Remark**
- innerdataset 속성값에 해당하는 DataSet 이 존재하지 않으면 메뉴 아이템이 표시되지 않습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.

---

## items

Tray 에 등록된 TrayPopupMenu 오브젝트의 정보를 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
Tray.items
```

**Setting Syntax**
```javascript
var objApp = nexacro.getApplication() ;
var objItem0 = objApp.trays[0].items[0] ;
```

**Remark**
- Tray 에서 사용하기위해 만들어 놓은 팝업메뉴는 Tray 에서 이벤트를 받았을때 스크립트를 통해 제어합니다.

---

## levelcolumn

innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 상/하위 관계가 정의된 Column을 설정하는 속성입니다.

**Setting Syntax**
```javascript
각 팝업메뉴 아이템의 상/하위 관계가 정의된 Column의 ID를 문자열로 설정합니다.
```

**Remark**
- 서브메뉴가 표시되기 위해서는 levelcolumn 에 설정된 Column의 데이터가 트리구조로 정의되어 있어야 합니다.
  최상위 메뉴 아이템은 "0" 레벨로 시작하며 레벨값이 증가하면 단계적으로 하위 메뉴로 표시됩니다.
  즉, "0" 레벨 데이터는 다음에 "0" 레벨 데이터가 정의될 때까지 정의된 모든 데이터의 상위메뉴가 됩니다.

- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.

---

## name

Tray 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Tray.set_name(strName) // set
Tray.name // get
```

**Setting Syntax**
```javascript
Tray 의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

---

## tooltip

Tray 아이콘에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**
```javascript
Tray.set_tooltip(strTooltip) // set
Tray.tooltip // get
```

**Setting Syntax**
```javascript
풍선도움말에 표시할 텍스트를 설정합니다.

"null"값 설정 시 풍선도움말이 표시되지 않습니다.
```

**Remark**
- 마우스 포인터가 Tray 아이콘 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

---

## userdatacolumn

innerdataset 속성에 설정된 DataSet의 Column 중 사용자 데이터를 처리하기 위한 Column을 설정하는 속성입니다.

**Setting Syntax**
```javascript
사용자 데이터를 처리할 Column의 ID를 문자열로 설정합니다.
```

**Remark**
- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- 팝업메뉴 아이템 별로 처리해야 하는 데이터를 저장하기 위해 사용합니다.

---
