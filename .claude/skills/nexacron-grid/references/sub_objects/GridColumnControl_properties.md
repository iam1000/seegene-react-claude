# GridColumnControl Properties

| Property | Description |
|----------|-------------|
| `band` | Grid 에서 Column 이 소속 될 밴드영역을 설정하는 속성입니다. |
| `size` | Column 의 너비를 설정하는 속성입니다. |

---

## band

Grid 에서 Column 이 소속 될 밴드영역을 설정하는 속성입니다.

**Syntax**
```javascript
GridColumnControl.band
```

**Setting Syntax**
```javascript
해당 Column 이 Right 밴드에 속하게 됩니다.
```

**Remark**
- band 속성값을 설정하지 않으면 "body" 로 적용됩니다.

- Column 의 band 속성값을 설정하려면 setFormatColProperty() 메소드를 사용하여야 합니다.
  Column 의 band 속성값을 가져오려면 getFormatColProperty() 메소드를 사용하여야 합니다.

- Left/Right 밴드는 기본적으로 각각 Grid의 왼쪽/오른쪽 고정영역에 표시되며 스크롤 시 고정되어 움직이지 않습니다.

**See Also**: setFormatColProperty, getFormatColProperty

---

## size

Column 의 너비를 설정하는 속성입니다.

**Syntax**
```javascript
GridColumnControl.size
```

**Setting Syntax**
```javascript
Column 의 너비를 pixel 단위의 숫자로 설정합니다.

디자인 시 정의된 포맷의 속성값은 변경되지 않고, 화면에 표시되는 포맷의 속성값만 변경됩니다.
```

**Remark**
- Grid 의 포맷을 동적으로 변경하여도 디자인 시 설정된 속성값은 변경되지 않고, 화면에 표시되는 포맷만 변경됩니다.

- 화면에 표시되는 Column 의 size 속성값을 설정하려면 setFormatColProperty() 메소드를 사용하여야 합니다.

- 화면에 표시되는 Column 의 size 속성값을 가져오려면 getRealColSize() 메소드를 사용하여야 합니다.

- 디자인 시 정의된 Column 의 size 속성값을 가져오려면 getFormatColProperty(), getFormatColSize() 메소드를 사용하여야 합니다.

- 디자인 시 정의된 포맷 또는 화면에 표시되는 포맷 정보를 가져오려면 getCurFormatString() 메소드를 사용하여야 합니다.

**See Also**: getRealColSize, getCurFormatString, getFormatColProperty, setFormatColProperty, getFormatColSize

---
