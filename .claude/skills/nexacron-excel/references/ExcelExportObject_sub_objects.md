# ExcelExportObject Sub-Objects

## ExportItem

- Properties: 11개
- Methods: 0개
- Events: 0개

### Properties

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

## ExportItemTypes

- Properties: 1개
- Methods: 0개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `GRID` | Grid 를 외부 파일로 변환할 때 사용하는 상수 속성입니다. |

## ExportTypes

- Properties: 6개
- Methods: 0개
- Events: 0개

### Properties

| Property | Description |
|----------|-------------|
| `CSV` | 지정된 객체를 CSV 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| `EXCEL` | 지정된 객체를 엑셀 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| `EXCEL2007` | 지정된 객체를 엑셀 2007 XML 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| `EXCEL97` | 지정된 객체를 엑셀 97-2003 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| `HANCELL2010` | 지정된 객체를 Hancell2010 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| `HANCELL2014` | 지정된 객체를 Hancell2014 형식으로 Export 할 때 사용하는 상수 속성입니다. |
