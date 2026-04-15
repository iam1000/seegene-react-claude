# Tray Events

| Event | Description |
|-------|-------------|
| `onballoontipclick` | Tray에 표시된 풍선팁을 클릭할 때 발생하는 이벤트입니다. |
| `onballoontiphide` | Tray에 표시된 풍선팁이 숨겨질 때 발생하는 이벤트입니다. |
| `onballoontipshow` | Tray에 풍선팁을 표시할 때 발생하는 이벤트입니다. |
| `ondblclick` | Tray 아이콘을 마우스 왼쪽버튼으로 더블클릭 했을 때 발생하는 이벤트입니다. |
| `oninnerdatachanged` | TrayPopupMenu 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다. |
| `onlbuttonup` | Tray 아이콘에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |
| `onmenuclick` | Tray 에서 메뉴 아이템을 마우스 왼쪽 버튼으로 클릭했을 때 발생하는 이벤트입니다. |
| `onrbuttonup` | Tray 아이콘에서 마우스 오른쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |

---

## onballoontipclick

Tray에 표시된 풍선팁을 클릭할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onballoontipclick(obj:nexacro.Tray,e:nexacro.ClickEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Tray | Event가 발생한 Object. |
| `e` | ClickEventInfo | Event Object. |

**Remark**
풍선팁 클릭 시 풍선팁은 자동으로 숨겨집니다.
풍선팁을 클릭해서 숨겨지는 경우에는 onballoontiphide 이벤트가 발생하지 않습니다.

---

## onballoontiphide

Tray에 표시된 풍선팁이 숨겨질 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onballoontiphide(obj:nexacro.Tray,e:nexacro.TrayBalloonTipHideEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Tray | Event가 발생한 Object. |
| `e` | TrayBalloonTipHideEventInfo | Event Object. |

**Remark**
hideBalloonTip 메소드를 호출하거나 timeout에 의해 풍선팁이 숨겨질 때 이벤트가 발생합니다.

---

## onballoontipshow

Tray에 풍선팁을 표시할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onballoontipshow(obj:nexacro.Tray,e:nexacro.EventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Tray | Event가 발생한 Object. |
| `e` | EventInfo | Event Object. |

---

## ondblclick

Tray 아이콘을 마우스 왼쪽버튼으로 더블클릭 했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondblclick(obj:nexacro.Tray,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Tray | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

**Remark**
- ondblclick 이벤트는 onlbuttonup -> onlbuttonup -> ondblclick 순서로 발생합니다.

---

## oninnerdatachanged

TrayPopupMenu 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
oninnerdatachanged(obj:nexacro.TrayPopupMenu,e:nexacro.InnerdataChangedEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | TrayPopupMenu | Event가 발생한 Object. |
| `e` | InnerdataChangedEventInfo | Event Object. |

**Remark**
- innerdataset 속성에 바인딩된 DataSet 의 Data 가 변경되면 oninnerdatachanged 이벤트가 발생합니다.
  일반적으로 DataSet 에서 onvaluechanged 이벤트가 발생한 후 변경된 값이 바인딩된 객체에 영향을 미칠때 이벤트가 발생합니다.
  예를 들어 DataSet 의 Data 변경에 의해 TrayPopupMenu 의 아이템 길이가 변경되면 이벤트가 발생합니다.

- 컴포넌트 크기가 innerdataset 속성에 바인딩된 DataSet 값에 의해 변경되어 화면의 재배열이 필요할 경우 해당 이벤트에 정의합니다.

---

## onlbuttonup

Tray 아이콘에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onlbuttonup(obj:nexacro.Tray,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Tray | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

---

## onmenuclick

Tray 에서 메뉴 아이템을 마우스 왼쪽 버튼으로 클릭했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onmenuclick(obj:nexacro.TrayPopupMenu,e:nexacro.MenuClickEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | TrayPopupMenu | Event가 발생한 Object. |
| `e` | MenuClickEventInfo | Event Object. |

**Remark**
- 메뉴 아이템 영역 내에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

- 하위 메뉴가 있는 아이템은 마우스 클릭을 해도 onmenuclick 이벤트가 발생되지 않습니다

---

## onrbuttonup

Tray 아이콘에서 마우스 오른쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrbuttonup(obj:nexacro.Tray,e:nexacro.MouseEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Tray | Event가 발생한 Object. |
| `e` | MouseEventInfo | Event Object. |

---
