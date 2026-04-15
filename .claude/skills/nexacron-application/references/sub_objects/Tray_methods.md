# Tray Methods

| Method | Description |
|--------|-------------|
| `addItem()` | Tray 의 items 속성에 TrayPopupMenu 오브젝트를 추가하는 메소드입니다. |
| `deleteItem()` | Tray 의 items 속성에 등록된 TrayPopupMenu 오브젝트를 삭제하는 메소드입니다. |
| `destroy()` | 스크립트에서 동적으로 생성한 Tray 를 삭제하는 메소드입니다. |
| `findItem()` | Tray 의 items 속성에 등록된 특정 TrayPopupMenu 오브젝트의 인덱스를 반환하는 메소드입니다. |
| `getItemCount()` | Tray 의 items 속성에 등록된 TrayPopupMenu 오브젝트의 갯수를 반환하는 메소드입니다. |
| `hideBalloonTip()` | Tray에 표시된 풍선팁을 숨기는 메소드입니다. |
| `init()` | 스크립트로 Tray 를 동적 생성한 후에 초기화하는 메소드입니다. |
| `insertItem()` | Tray 의 items 속성의 특정 위치에 TrayPopupMenu 오브젝트를 추가하는 메소드입니다. |
| `show()` | 스크립트에서 동적으로 생성한 Tray 를 작업표시줄에 표시하는 메소드입니다. |
| `showBalloonTip()` | Tray 에 풍선팁을 표시하는 메소드입니다. |
| `trackPopup()` | Tray 의 팝업메뉴를 마우스 커서 위치에 표시하는 메소드입니다. |

---

## addItem

Tray 의 items 속성에 TrayPopupMenu 오브젝트를 추가하는 메소드입니다.

**Syntax**
```javascript
Tray.addItem(strID,objPopupMenu)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | Tray 의 Items 속성에 추가될 TrayPopupMenu 오브젝트의 ID 를 설정합니다. |
| `objPopupMenu` | Object | Tray 의 items 속성에 추가할 TrayPopupMenu 오브젝트를 설정합니다. |

**Return**: `Number` — items 속성에 추가된 TrayPopupMenu 오브젝트의 인덱스를 반환합니다.  TrayPopupMenu 오브젝트 추가에 실패했을 경우 "-1" 을 반환합니다.

**Remark**
- 이미 등록된 ID 를 추가시키려 할 경우 추가 되지 않습니다.

---

## deleteItem

Tray 의 items 속성에 등록된 TrayPopupMenu 오브젝트를 삭제하는 메소드입니다.

**Syntax**
```javascript
Tray.deleteItem( strID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | Tray 의 Items 속성에서 삭제될 TrayPopupMenu 오브젝트의 ID 를 설정합니다. |

**Return**: `Number` — items 속성에서 삭제된 TrayPopupMenu 오브젝트의 인덱스를 반환합니다.  TrayPopupMenu 오브젝트 삭제에 실패했을 경우 -1 을 반환합니다.

---

## destroy

스크립트에서 동적으로 생성한 Tray 를 삭제하는 메소드입니다.

**Syntax**
```javascript
Tray.destroy()
```

**Sample**
```javascript
objTray.destroy();
```

**Return**: `Boolean` — Tray 가 정상적으로 삭제되면 "true"를 반환합니다. Tray 가 정상적으로 삭제되지 않으면 "false"를 반환합니다.

**Remark**
- 동적으로 생성한 Tray 를 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

---

## findItem

Tray 의 items 속성에 등록된 특정 TrayPopupMenu 오브젝트의 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
Tray.findItem(strID)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | items 속성에 등록된 TrayPopupMenu 오브젝트의 ID 를 설정합니다. |

**Return**: `Number` — items 속성에 등록된 strID 의 인덱스를 반환합니다.

---

## getItemCount

Tray 의 items 속성에 등록된 TrayPopupMenu 오브젝트의 갯수를 반환하는 메소드입니다.

**Syntax**
```javascript
Tray.getItemCount()
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;
var nItemCnt = objApp.trays["Tray0"].getItemCount();
```

**Return**: `Number` — items 속성에 등록된 TrayPopupMenu 오브젝트의 갯수를 반환합니다.

---

## hideBalloonTip

Tray에 표시된 풍선팁을 숨기는 메소드입니다.

**Syntax**
```javascript
Tray.hideBalloonTip()
```

**Remark**
메소드 호출 시 onballoontiphide 이벤트가 발생합니다.

---

## init

스크립트로 Tray 를 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**
```javascript
Tray.init(strID, icon, tooltip);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strID` | String | 동적 생성된 Tray 의 ID 를 설정합니다. |
| `icon` | String | Tray 에서 사용할 Icon 을 설정합니다. |
| `tooltip` | String | Tray 의 풍선도움말에 표시될 문자열로 설정합니다. |

**Remark**
- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 스크립트에서 동적으로 Tray를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 Tray가 아닌 경우에는 오동작이 발생할수 있습니다.

- 동적으로 Tray 를 생성 시 초기값을 설정한 경우에는 init() 메소드를 다시 호출할 필요가 없습니다.

---

## insertItem

Tray 의 items 속성의 특정 위치에 TrayPopupMenu 오브젝트를 추가하는 메소드입니다.

**Syntax**
```javascript
Tray.insertItem(nIndex, strID, objPopupMenu)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nIndex` | Number | TrayPopupMenu 오브젝트가 추가될 위치의 인덱스를 설정합니다. |
| `strID` | String | TrayPopupMenu 오브젝트의 ID 를 설정합니다. |
| `objPopupMenu` | Object | 추가될 TrayPopupMenu 오브젝트를 설정합니다. |

**Return**: `Number` — TrayPopupMenu 오브젝트가 추가된 위치의 인덱스를 반환합니다.  TrayPopupMenu 오브젝트 추가에 실패했을 경우 "-1" 을 반환합니다.

**Remark**
- 이미 등록된 ID 를 추가시키려 할 경우 추가 되지 않습니다.

---

## show

스크립트에서 동적으로 생성한 Tray 를 작업표시줄에 표시하는 메소드입니다.

**Syntax**
```javascript
Tray.show()
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;
var objTray = new nexacro.Tray("Tray00", objApp);

objTray.init("Tray00", "information", "Tray Tooltip");
var nIndex = objApp.addTray("Tray00", objTray);

objApp.trays["Tray00"].show();
```

**Remark**
- 스크립트에서 Tray 를 동적으로 생성한 후에만 사용이 가능합니다.
   동적으로 생성한 Tray 가 아닌 경우에는 오동작이 발생할 수 있습니다.

- Application 의 addTray() 메소드를 사용하여 동적으로 생성한 Tray 를 추가한 후에 show() 메소드를 수행하여야 합니다.

- 동적으로 Tray 를 생성 시 초기값을 설정한 경우에는 init() 메소드를 다시 호출할 필요가 없습니다.

---

## showBalloonTip

Tray 에 풍선팁을 표시하는 메소드입니다.

**Syntax**
```javascript
Tray.showBalloonTip(strTitleIcon, strTitle, strText [, bNoSound])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strTitleIcon` | String | 풍선팁의 타이틀 왼편에 나타나는 아이콘의 이름 및 경로를 설정합니다.  아이콘으로 사용 가능한 시스템 아이콘은 "information", "warning", "error", "none" 입니다. |
| `strTitle` | String | 풍선팁에 나타나는 제목을 설정합니다. 48자 미만으로 설정할 수 있습니다. |
| `strText` | String | 풍선팁에 표시할 텍스트를 설정합니다. 200자 미만으로 설정할 수 있습니다. |
| `bNoSound` | Boolean | true 설정 시 풍선팁이 나타날 때 소리가 나오지 않습니다. false 설정 시 풍선팁이 나타날 때 소리가 나옵니다.  값 생략 시 false로 적용됩니다. |

**Remark**
풍선팁이 표시된 상태에서 showBalloonTip 메소드를 실행하면 기존 풍선팁이 숨겨지고 새로운 풍선팁이 표시됩니다.

---

## trackPopup

Tray 의 팝업메뉴를 마우스 커서 위치에 표시하는 메소드입니다.

**Syntax**
```javascript
TrayPopupMenu.trackPopup()
```

**Sample**
```javascript
var objApp = nexacro.getApplication() ;
objApp.trays["Tray0"].items["item00"].trackPopup();
```

---
