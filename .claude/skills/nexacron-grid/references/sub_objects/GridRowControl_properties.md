# GridRowControl Properties

| Property | Description |
|----------|-------------|
| `band` | Grid 에서 Row 가 소속된 밴드명을 갖는 읽기전용 속성입니다. |
| `size` | Row 의 높이를 설정하는 속성입니다. |

---

## band

Grid 에서 Row 가 소속된 밴드명을 갖는 읽기전용 속성입니다.

**Syntax**
```javascript
GridRowControl.band
```

**Setting Syntax**
```javascript
var strBand = this.Grid00.getFormatRowProperty( 1, "band" );
```

**Remark**
- Row 의 band 속성에 접근하려면 getFormatRowProperty() 메소드를 사용하여야 합니다.

- Head/Summary 밴드는 기본적으로 각각 Grid의 상단/하단 고정영역에 표시되며 스크롤 시 고정되어 움직이지 않습니다.

**See Also**: getFormatRowProperty

---

## size

Row 의 높이를 설정하는 속성입니다.

**Syntax**
```javascript
GridRowControl.size
```

**Setting Syntax**
```javascript
Row 의 높이를 pixel 단위의 숫자로 설정합니다.

디자인 시 정의된 포맷의 속성값은 변경되지 않고, 화면에 표시되는 포맷의 속성값만 변경됩니다.
```

**Remark**
- Grid 의 포맷을 동적으로 변경하여도 디자인 시 설정된 속성값은 변경되지 않고, 화면에 표시되는 포맷만 변경됩니다.

- 화면에 표시되는 Row 의 size 속성값을 설정하려면 setFormatRowProperty() 메소드를 사용하여야 합니다.

- 화면에 표시되는 Row 의 size 속성값을 가져오려면 getRealRowSize() 메소드를 사용하여야 합니다.

- 디자인 시 정의된 Row 의 size 속성값을 가져오려면 getFormatRowProperty(), getFormatRowSize() 메소드를 사용하여야 합니다.

- 디자인 시 정의된 포맷 또는 화면에 표시되는 포맷 정보를 가져오려면 getCurFormatString() 메소드를 사용하여야 합니다.

**See Also**: getCurFormatString, getFormatRowProperty, getRealRowSize, getFormatRowSize, setFormatRowProperty

---
