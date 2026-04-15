# Application Sub-Objects

## Tray

- Properties: 14개
- Methods: 11개
- Events: 8개

### Properties

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

### Methods

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

### Events

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
