# ExcelExportObject Properties

| Property | Description |
|----------|-------------|
| `commandversion` | Export 시 데이터 인코딩 방식을 설정하는 속성입니다. |
| `commcompress` | Export 를 위해 서버와 통신 시 PostData 를 압축할 지 설정하는 속성입니다. |
| `commdataformat` | Export를 위해 데이터를 서버에 전송 시 사용할 통신형식을 설정하는 속성입니다. |
| `exportactivemode` | Export 완료 후 생성된 파일을 자동으로 오픈할지 여부를 설정하는 속성입니다. |
| `exporteventtype` | Export 진행중 정보가 표시되는 방식과 onprogress 이벤트 발생 방식을 설정하는 속성입니다. |
| `exportfilename` | Export 완료 후 생성될 파일명을 설정하는 속성입니다. |
| `exportfilepassword` | Export 완료 후 생성될 파일에 적용될 암호를 설정하는 속성입니다. |
| `exportfilepath` | Export 완료 후 파일이 생성될 위치를 절대경로로 설정하는 속성입니다. |
| `exportmessagealert` | Export 전 표시되는 경고 대화상자에 출력될 텍스트를 설정하는 속성입니다. |
| `exportmessagecomplete` | exportuitype 속성값이 "exportprogress" 일 때 Export 가 완료되면 진행바에 표시될 텍스트를 설정하는 속성입니다. |
| `exportmessageprocess` | exportuitype 속성값이 "exportprogress" 일 때 Export 진행중 진행바에 표시될 텍스트의 형식을 설정하는 속성입니다. |
| `exportmessageready` | exportuitype 속성값이 "exportprogress" 일 때 Export 진행 전 진행바에 표시될 텍스트를 설정하는 속성입니다. |
| `exporttype` | ExcelExportObject 을 Export 하여 생성할 파일의 형식을 상수값으로 설정하는 속성입니다. |
| `exportuitype` | Export 시 진행상태를 표시하는 방식을 설정하는 속성입니다. |
| `exporturl` | ExcelExportObject 의 Export 를 수행할 서버의 URL을 설정하는 속성입니다. |
| `exportwordwrap` | Export 시 Cell 에 텍스트 줄바꿈 설정을 적용할지 여부를 설정하는 속성입니다. |
| `filefilter` | Export 시 생성될 파일을 설정하는 파일선택창에 적용될 파일형식을 설정하는 속성입니다. |
| `filefilterindex` | 파일선택창에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다. |
| `name` | ExcelExportObject 의 이름을 설정하는 속성입니다. |
| `quotechar` | Export 시 한정자로 사용할 값을 설정하는 속성입니다. |
| `separator` | Export 시 구분자로 사용할 값을 설정하는 속성입니다. |
| `transferrowcount` | Export 시 서버에 분할하여 전송할 Row 의 갯수를 설정하는 속성입니다. |

---

## commandversion

Export 시 데이터 인코딩 방식을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelExportObject.set_commandversion(enumVersion) // set 
ExcelExportObject.commandversion // get
```

**Setting Syntax**
```javascript
Base64로 인코딩합니다.
```

**Remark**
- commandversion 속성을 설정하지 않으면 "1.0"으로 적용됩니다.

---

## commcompress

Export 를 위해 서버와 통신 시 PostData 를 압축할 지 설정하는 속성입니다.

**Setting Syntax**
```javascript
통신 시 PostData 를 압축합니다.
```

**Remark**
- commcompress 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

---

## commdataformat

Export를 위해 데이터를 서버에 전송 시 사용할 통신형식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
Binary 형식으로 데이터를 전송합니다.

웹브라우저 환경에서는 지원하지 않습니다.
```

**Remark**
- commdataformat 속성값을 설정하지 않으면 "ssv" 로 적용됩니다.

---

## exportactivemode

Export 완료 후 생성된 파일을 자동으로 오픈할지 여부를 설정하는 속성입니다.

**Setting Syntax**
```javascript
Export 완료 후 생성된 파일을 자동으로 오픈합니다.

생성된 파일과 연결된 어플리케이션이 설치되어 있어야 합니다.
예를 들어 생성된 파일이 엑셀인 경우 MS Excel 이 설치되어 있어야 합니다.
```

**Remark**
- exportactivemode 속성값을 설정하지 않으면 "noactive" 로 적용됩니다.

---

## exporteventtype

Export 진행중 정보가 표시되는 방식과 onprogress 이벤트 발생 방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
각 Item의 Record 단위로 Export 가 완료되었을 때 onprogress 이벤트가 발생합니다.

Export 진행율이 "진행중인 Item 의 Record 인덱스 / 진행중인 Item 의 Record 갯수" 로 진행바에 표시됩니다.
한 개 Item 의 Export 가 완료되면 진행율이 100%로 표시되었다가 다음 Item 이 Export 되면 0% 로 변경됩니다.
```

**Remark**
- exporteventtype 속성값을 설정하지 않으면 "itemrecord" 로 적용됩니다.

- exportuitype 속성값이 "statusbar" 이면 StatusBar 의 ProgressBar 를 사용합니다.
  exportuitype 속성값이 "exportprogress" 이면 화면 중앙에 표시되는 ProgressBar 를 사용합니다.

---

## exportfilename

Export 완료 후 생성될 파일명을 설정하는 속성입니다.

**Setting Syntax**
```javascript
저장될 파일명을 설정합니다.

파일명으로 사용할 수 없는 "\", "/", "*", """, "'", "<", ">", "|" 등의 문자는 설정할 수 없습니다.
```

**Remark**
- exportfilename 속성값을 설정하지 않으면 ExcelExportObject 에 추가된 Item 중 첫번째 Grid 의 id 값이 적용됩니다.

- Windows NRE 환경일 때 exportfilepath 속성값을 설정하면 경로선택 팝업창이 표시되지 않습니다.

---

## exportfilepassword

Export 완료 후 생성될 파일에 적용될 암호를 설정하는 속성입니다.

**Setting Syntax**
```javascript
생성될 파일에 적용할 암호를 문자열로 설정합니다.
```

---

## exportfilepath

Export 완료 후 파일이 생성될 위치를 절대경로로 설정하는 속성입니다.

**Setting Syntax**
```javascript
파일이 저장될 위치를 절대경로 또는 Alias 를 사용하여 설정합니다.

Environment 의 filesecurelevel 속성으로 접근이 허용된 경로만 설정할 수 있습니다.
접근이 허용되지 않은 경로 또는 존재하지 않는 경로일 경우 파일이 생성되지 않으므로 주의하여야 합니다.
```

**Remark**
- exportfilepath 속성값 설정 시 경로선택 팝업창 없이 exportfilename 속성값을 파일명으로 해당 위치에 Excel 파일을 Export 합니다.

- 샌드박스(SandBox) 옵션인 Environment 의 filesecurelevel 속성값이 "all" 인 경우는 모든 경로에 접근을 허용합니다.
   이 경우 사용자에게 접근 허용 여부를 확인 한 후 사용자가 승인한 경우에만 파일이 생성됩니다.

- strFilePath 에 사용할 수 있는 Alias 의 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%
%INSTALLROOT%

---

## exportmessagealert

Export 전 표시되는 경고 대화상자에 출력될 텍스트를 설정하는 속성입니다.

**Setting Syntax**
```javascript
경고 대화상자에 출력될 텍스트를 설정합니다.
```

**Remark**
- exportmessagealert 속성값을 설정하지 않으면 경고 대화상자가 표시되지 않습니다.

---

## exportmessagecomplete

exportuitype 속성값이 "exportprogress" 일 때 Export 가 완료되면 진행바에 표시될 텍스트를 설정하는 속성입니다.

**Setting Syntax**
```javascript
Export 완료 시 진행바에 표시될 텍스트를 설정합니다.
```

**Remark**
- 모든 Item 의 Export 가 완료되어 onsuccess 이벤트가 발생되기 전에 표시됩니다.

- exportuitype 속성값이 "exportprogress" 일 때만 진행바에 표시됩니다.

---

## exportmessageprocess

exportuitype 속성값이 "exportprogress" 일 때 Export 진행중 진행바에 표시될 텍스트의 형식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
진행중인 Export 정보를 표시하도록 "%d" 와 텍스트를 조합하여 설정합니다.
"%d" 는 3 개까지 설정할 수 있으며, 각 "%d" 는 아래와 같이 대체되어 표시됩니다.
"%d" 를 3 개 이상 설정하면 오동작 할 수 있습니다.

1) 첫번째 "%d"
   Export 중인 Item 의 인덱스값으로 대체됩니다.

2) 두번째 "%d"
   exporteventtype 속성값이 "item", "totalrecord" 이면 모든 Item 의 전체 Record 에서 출력중인 Record 인덱스값으로 대체됩니다.
   exporteventtype 속성값이 "itemrecord" 이면 현재 Item 에서 출력중인 Record 인덱스값으로 대체됩니다.

3) 세번째 "%d"
   exporteventtype 속성값이 "item", "totalrecord" 이면 모든 Item 의 전체 Record 갯수로 대체됩니다.
   exporteventtype 속성값이 "itemrecord" 이면 해당 Item 의 Record 갯수로 대체됩니다.
```

**Remark**
- exportuitype 속성값이 "exportprogress" 일 때만 표시됩니다.

- exportmessageprocess 속성값을 설정하지 않으면 진행바에 텍스트가 표시되지 않습니다.

- onprogress 이벤트가 정의되지 않아도 exporteventtype 속성값 기준으로 onprogress 이벤트 발생시점에 텍스트가 업데이트 됩니다.

---

## exportmessageready

exportuitype 속성값이 "exportprogress" 일 때 Export 진행 전 진행바에 표시될 텍스트를 설정하는 속성입니다.

**Setting Syntax**
```javascript
Export 진행 전 진행바에 표시될 텍스트를 설정합니다.
```

**Remark**
- exportuitype 속성값이 "exportprogress" 일 때만 진행바에 표시됩니다.

---

## exporttype

ExcelExportObject 을 Export 하여 생성할 파일의 형식을 상수값으로 설정하는 속성입니다.

**Setting Syntax**
```javascript
Export 하여 생성할 파일의 형식을 상수값으로 설정합니다.

256 (0x0100) 또는 nexacro.ExportTypes.EXCEL 설정 시 엑셀 97 형식으로 Export 합니다.
272 (0x0110) 또는 nexacro.ExportTypes.EXCEL97 설정 시 엑셀 97~2003 형식으로 Export 합니다.
288 (0x0120) 또는 nexacro.ExportTypes.EXCEL2007 설정 시 엑셀 2007 XML 형식으로 Export 합니다.
1024 (0x0400) 또는 nexacro.ExportTypes.HANCELL2010 설정 시 한셀 2010 형식으로 Export 합니다.
1040 (0x0410) 또는 nexacro.ExportTypes.HANCELL2014 설정 시 한셀 2014 형식으로 Export 합니다.
1280 (0x0500) 또는 nexacro.ExportTypes.CSV 설정 시 CSV 형식으로 Export 합니다.
1296 (0x0510) 또는 nexacro.ExportTypes.TXT 설정 시 TXT 형식으로 Export 합니다.
```

**Remark**
- exporttype 속성값을 설정하지 않거나 null 설정 시 256 (0x0100) 으로 적용됩니다.

- 설정된 파일형식에 맞게 ExportItem 객체의 range 속성값을 설정하여야 합니다.

---

## exportuitype

Export 시 진행상태를 표시하는 방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
Export 시 진행상태를 표시할 ProgressBar 가 화면 중앙에 출력됩니다.
```

**Remark**
- exportuitype 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- Export 시 ProgressBar 에 표시되는 내용은 exporteventtype 속성값에 따라 달라집니다.

---

## exporturl

ExcelExportObject 의 Export 를 수행할 서버의 URL을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelExportObject.set_exporturl(strExporturl) // set 
ExcelExportObject.exporturl // get
```

**Setting Syntax**
```javascript
현재 Form 위치를 기준으로 한 상대경로를 사용하여 설정합니다.
```

**Remark**
- exporturl 속성값을 설정하지 않으면 Export 가 수행되지 않습니다.

---

## exportwordwrap

Export 시 Cell 에 텍스트 줄바꿈 설정을 적용할지 여부를 설정하는 속성입니다.

**Setting Syntax**
```javascript
Export 시 Cell 에 텍스트 줄바꿈 설정을 하지 않습니다.
```

**Remark**
- exportwordwrap 속성을 설정하지 않으면 true 로 적용됩니다.

---

## filefilter

Export 시 생성될 파일을 설정하는 파일선택창에 적용될 파일형식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
파일선택창에 적용될 파일형식을 "설명|확장자" 형식으로 설정합니다.

"|" 문자를 구분자로 하여 설명과 실제 확장자를 쌍으로 여러개의 파일형식을 설정할 수 있습니다.
한 개의 파일형식내에서 복수개의 확장자를 지정할 때는 "*.xlsx;*.xls" 와 같이 ";" 문자로 구분하여 설정합니다.
```

**Remark**
- filefilter 속성값을 설정하지 않으면 exporttype 속성에 설정된 파일형식과 "All" 형식이 적용됩니다.

- exportfilepath 속성을 설정하지 않아야 파일선택창이 표시됩니다.
   exportfilepath 속성 설정 시 파일선택창이 표시되지 않고 속성값에 맞게 파일이 Export 됩니다.

- 파일형식이 여러개 일 경우 파일선택창에 기본으로 표시될 파일형식을 filefilterindex 속성에 인덱스값으로 설정합니다.
   인덱스는 0 부터 시작하며 첫번째 파일형식부터 차례로 설정됩니다.

---

## filefilterindex

파일선택창에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다.

**Syntax**
```javascript
ExcelExportObject.set_filefilterindex(nIndex) // set
ExcelExportObject.filefilterindex // get
```

**Setting Syntax**
```javascript
파일선택창에 설정된 파일형식 중 기본으로 표시될 파일형식의 인덱스를 숫자로 설정합니다.
```

**Remark**
- filefilterindex 속성값을 설정하지 않으면 0 으로 적용됩니다.

- 파일선택창에 표시되는 파일형식은 filefilter 속성에 설정합니다.
   파일형식의 인덱스는 0 부터 시작하며 첫번째 파일형식부터 차례로 인덱스가 설정됩니다.

---

## name

ExcelExportObject 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelExportObject.set_name(strName) // set
ExcelExportObject.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## quotechar

Export 시 한정자로 사용할 값을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelExportObject.set_quotechar(strQuotechar)
ExcelExportObject.quotechar
```

**Setting Syntax**
```javascript
구분자로 분리되는 항목 중 분리하지 않을 부분을 처리하기 위한 텍스트 한정자를 설정합니다.
" (quotation mark), ' (apostrophe), "none", "default" 값을 설정할 수 있습니다.
```

**Remark**
- default 값은 "default" 입니다.
  유효하지 않은 값을 입력할 경우에는 속성값은 "default" 값으로 처리합니다.
  "default" 값으로 설정한 경우에는 XENI 텍스트 한정자 설정값에 따라 동작합니다.

---

## separator

Export 시 구분자로 사용할 값을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelExportObject.set_separator(strSeparator)
ExcelExportObject.separator
```

**Setting Syntax**
```javascript
컬럼을 구분을 문자를 설정합니다.
10진수 또는 16진수로 설정할 수 있습니다.
(16진수인 경우에는 0xXX, 0XXX의 형태로 입력해야 합니다).

0x00(0) ~ 0x7F(127) 범위의 ASCII 문자를 하나만 설정할 수 있습니다.
단, 아래 문자는 설정할 수 없습니다.

0x0A(10) - LF(Line Feed)
0x0D(13) - CR(Carriage Return)
0x22(34) - " (quotation mark)
0x27(39) - ' (apostrophe)
0x00(00) - NUL (Null char.)
0x03(03) - ETX (End of Text)
0x1D(29) - GS (Group Separator)
0x28(40) - ( (left opening parenthesis)
0x29(41) - ) (right closing parenthesis)
0x3A(58) - : (colon)
0x3D(61) - = (equal sign)
```

**Remark**
- default 값은 ","로 처리합니다.
  유효하지 않은 값을 입력할 경우에도 default 값으로 처리합니다.
- exporttype 속성값이 nexacro.ExportTypes.TXT 인 경우에만 유효합니다.

---

## transferrowcount

Export 시 서버에 분할하여 전송할 Row 의 갯수를 설정하는 속성입니다.

**Setting Syntax**
```javascript
전체 데이터에서 분할하여 전송할 Row 의 갯수를 숫자로 설정합니다.

설정한 Row 갯수만큼 분할하여 데이터를 서버로 전송합니다.
0 또는 전체 Row 수보다 크게 설정할 경우 모든 데이터를 한번에 전송합니다.
```

**Remark**
- transferrowcount 속성값을 설정하지 않으면 500 으로 적용됩니다.

- 모든 데이터를 한번에 전송하면 일시적인 화면멈춤 현상이나 진행상태 ProgressBar 의 불규칙한 갱신 현상이 발생할 수 있습니다.

- transferrowcount 속성값은 동일해도 Grid 의 Column 갯수에 따라 한번에 전송하는 데이터의 크기가 달라집니다.
   따라서, 한번에 전송할 데이터의 크기를 고려하여 transferrowcount 속성을 설정하여야 합니다.

- 동일한 데이터일 때 transferrowcount 속성값에 따라 Export 시 성능차이가 발생할 수 있습니다.

- transferrowcount 속성을 설정하면 비동기 방식으로 분할 전송이 진행됩니다.
   분할 전송이 진행되는 동안 Grid 속성이나 Dataset 의 데이터 변경 시 Export 데이터에 반영될 수 있으므로 주의하여야 합니다.
   예를 들어 exportData(), exportDataEx() 메소드 다음에 Grid 의 formatid 속성 변경 시 분할된 데이터의 포맷이 변경될 수 있습니다.

---
