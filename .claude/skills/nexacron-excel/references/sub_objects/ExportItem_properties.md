# ExportItem Properties

| Property | Description |
|----------|-------------|
| `exceptstyle` | Grid 에 적용된 CSS 관련 속성 중 Export 시 제외할 속성을 설정하는 속성입니다. |
| `exporthead` | Grid 의 Head, Summary 영역에 대한 Export 방식을 설정하는 속성입니다. |
| `exportimage` | Grid 의 Cell 에 설정된 이미지의 Export 방식을 설정하는 속성입니다. |
| `exportmerge` | Grid 에서 포맷과 관계없이 논리적으로 병합된 Cell 의 Export 방식을 설정하는 속성입니다. |
| `exportselect` | Grid 에서 Export 시킬 영역을 설정하는 속성입니다. |
| `exportvalue` | 엑셀 파일로 Export 시킬 경우 Export 되는 내용과 형식을 설정하는 속성입니다. |
| `range` | 엑셀 또는 한셀 파일에 Export 되는 위치를 설정하는 속성입니다. |
| `source` | Export 대상이 되는 오브젝트를 설정하는 속성입니다. |
| `type` | Export 대상이 되는 오브젝트의 종류를 상수값으로 설정하는 속성입니다. |
| `valuetypebandid` | valuetypecellindex 속성값을 적용할 Band를 설정하는 속성입니다. |
| `valuetypecellindex` | Export 시 바인드된 Column 값을 적용할 Cell 의 인덱스를 배열로 설정하는 속성입니다. |

---

## exceptstyle

Grid 에 적용된 CSS 관련 속성 중 Export 시 제외할 속성을 설정하는 속성입니다.

**Setting Syntax**
```javascript
-nexa-border 속성값이 Export 에서 제외됩니다.
```

**Remark**
- exceptstyle 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

---

## exporthead

Grid 의 Head, Summary 영역에 대한 Export 방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
Grid 의 Head, Summary 영역을 모두 Export 하지 않습니다.
```

**Remark**
- exporthead 속성값을 설정하지 않으면 ExportItem 의 exportselect 속성값이 "allrecord" 인 경우 "allband" 로 적용됩니다.
   exporthead 속성값을 설정하지 않으면 ExportItem 의 exportselect 속성값이 "selectrecord" 인 경우 "nohead,nosumm" 으로 적용됩니다.

- Grid 의 selecttype 속성값이 "area", "multiarea" 인 경우 exporthead 속성값 설정여부와 관계없이 항상 "nohead,nosumm" 으로 적용됩니다.

---

## exportimage

Grid 의 Cell 에 설정된 이미지의 Export 방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
설정된 이미지의 위치가 "http://", "https://" 로 시작하는 인터넷 URL 경로일 경우만 이미지를 그대로 Export 합니다.
```

**Remark**
- exportimage 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

---

## exportmerge

Grid 에서 포맷과 관계없이 논리적으로 병합된 Cell 의 Export 방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
논리적으로 병합된 결과에 맞게 Cell 을 병합하여 Export 합니다.

논리적으로 병합된 결과에 맞게 1개 Cell 로 값을 Export 합니다.
```

**Remark**
- exportmerge 속성값을 설정하지 않으면 "suppress" 로 적용됩니다.
   exportselect 속성값을 "selectrecord" 로 설정한 경우는 항상 "nosuppress" 로 적용됩니다.

- 논리적인 병합이란 suppress 속성 또는 mergeCell() 메소드에 의해 Grid 에 표시된 데이터가 병합된 것을 의미합니다.

- suppresshorzcell 속성으로 병합된 Cell 은 항상 "suppress" 형태로 Export 됩니다.

- mergeContentsCell() 메소드 또는 Grid Contents Editor 의 Merge Cells 기능으로 포맷이 병합된 Cell 은 exportmerge 속성이 적용되지 않습니다.

---

## exportselect

Grid 에서 Export 시킬 영역을 설정하는 속성입니다.

**Setting Syntax**
```javascript
Grid 에서 선택된 Row 또는 Cell 만 Export 합니다.

Grid 의 selecttype 속성값이 "row" 또는 "multirow" 일 경우 선택된 Row 만 Export 됩니다.
Grid 의 selecttype 속성값이 "cell", "area", "multiarea" 일 경우 선택된 Cell 만 Export 됩니다.
```

**Remark**
- exportselect 속성값을 설정하지 않으면 "allrecord" 로 적용됩니다.

- exportselect 속성값을 "allrecord" 로 지정시, ExportItem 의 exporthead 속성값이 설정되지 않으면 "allband" 로 적용됩니다.
   exportselect 속성값을 "selectrecord" 로 지정시, ExportItem 의 exporthead 속성값이 설정되지 않으면 "nohead,nosumm" 으로 적용됩니다.

- Grid 의 selecttype 속성값이 "area", "multiarea" 인 경우 ExportItem 의 exporthead 속성값 설정여부와 관계없이 항상 "nohead,nosumm" 으로 적용됩니다.

---

## exportvalue

엑셀 파일로 Export 시킬 경우 Export 되는 내용과 형식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
value, format, calendardateformat, font, color, background(color), -nexa-text-aign, -nexa-vertical-align, -nexa-border 속성의 설정이 모두 Export 됩니다.

선택된 영역이 있을 경우 선택에 의해 변경된 설정도 Export 됩니다.
```

**Remark**
- exportvalue 속성값을 설정하지 않으면 "allstyle" 로 적용됩니다.

- background 속성에 Gradation 이 지정된 경우 Gradation의 중간값(50%위치값) 색상으로 Export 됩니다.

- GridCellControl 에 설정한 CSS 관련 속성값만 Export 시 적용됩니다.

---

## range

엑셀 또는 한셀 파일에 Export 되는 위치를 설정하는 속성입니다.

**Setting Syntax**
```javascript
"시트명!셀영역" 또는 "셀영역" 형태로 오브젝트 내용이 Export 되는 위치를 지정합니다.
```

---

## source

Export 대상이 되는 오브젝트를 설정하는 속성입니다.

**Setting Syntax**
```javascript
Export 대상이 되는 컴포넌트를 오브젝트로 설정합니다.

현재 Grid 만 Export 할 수 있으며 "this.Grid00" 형태로 설정하여야 합니다.
```

---

## type

Export 대상이 되는 오브젝트의 종류를 상수값으로 설정하는 속성입니다.

**Setting Syntax**
```javascript
Export 대상이 되는 컴포넌트의 종류를 상수값으로 설정합니다.

현재 Grid 만 Export 할 수 있으며 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다.
```

---

## valuetypebandid

valuetypecellindex 속성값을 적용할 Band를 설정하는 속성입니다.

**Setting Syntax**
```javascript
valuetypecellindex 속성값을 summary band에만 적용합니다.
```

**Remark**
- valuetypecellindex 속성으로 설정한 값을 적용할 Band를 설정하는 속성입니다.
  valuetypecellindex 속성과 같이 설정해야 합니다.

- valuetypebandid 속성값을 설정하지 않으면 모든 Band를 대상으로 적용됩니다.

---

## valuetypecellindex

Export 시 바인드된 Column 값을 적용할 Cell 의 인덱스를 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
바인드된 Column 값을 적용할 Cell 의 인덱스를 배열로 설정합니다.

인덱스가 설정된 Cell 은 표시된 텍스트값이 아닌 바인드된 Column 값을 Export 합니다.

인덱스가 설정되지 않은 Cell 은 사용 메소드에 따라 결과가 달라질 수 있습니다.
* exportData() : nOrgValue 파라미터값에 따라 Export 값이 결정됩니다.
* exportDataEx() : Cell 에 표시된 텍스트값이 Export 됩니다.
```

**Remark**
- valuetypecellindex 속성값 설정 시 Export 결과의 일관성을 위하여 exportDataEx() 메소드를 사용하는 것을 권장합니다.

- Cell 의 displaytype 속성값이 "decoratetext" 일 때 설정된 Tag 는 HTML 형식이므로 Export 시 Decorate 효과가 적용되지 않습니다.
   valuetypecellindex 속성값과 사용 메소드에 따라 Tag 가 텍스트로 Export 되거나 Tag 가 제거된 텍스트가 Export 됩니다.

---
