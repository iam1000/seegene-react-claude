# ExcelImportObject Properties

| Property | Description |
|----------|-------------|
| `commandversion` | Import 시 데이터 인코딩 방식을 설정하는 속성입니다. |
| `commdataformat` | Import를 위해 데이터를 서버에 전송 시 사용할 통신형식을 설정하는 속성입니다. |
| `filefilter` | Import 할 파일을 선택하는 파일선택창에 적용될 파일형식을 설정하는 속성입니다. |
| `filefilterindex` | 파일선택창에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다. |
| `importfilemode` | Import 할 파일의 위치와 처리방식을 설정하는 속성입니다. |
| `importtype` | ExcelImportObject 가 Import 할 파일의 형식을 상수값으로 설정하는 속성입니다. |
| `importurl` | ExcelImportObject 가 Import 를 수행할 서버의 URL 을 설정하는 속성입니다. |
| `name` | ExcelImportObject 의 이름을 설정하는 속성입니다. |
| `quotechar` | Import 시 한정자로 사용할 값을 설정하는 속성입니다. |
| `separator` | Import 시 구분자로 사용할 값을 설정하는 속성입니다. |
| `userawdatevalue` | 엑셀의 셀값이 날짜 또는 시간 계열일 때 원본값 그대로 Import 할지 여부를 설정하는 속성입니다. |
| `userawnumbervalue` | 엑셀의 셀값이 숫자계열일 때 원본값 그대로 Import 할지 여부를 설정하는 속성입니다. |

---

## commandversion

Import 시 데이터 인코딩 방식을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelImportObject.set_commandversion(enumVersion) // set 
ExcelImportObject.commandversion // get
```

**Setting Syntax**
```javascript
Base64로 인코딩합니다.
```

**Remark**
- commandversion 속성을 설정하지 않으면 "1.0"으로 적용됩니다.

---

## commdataformat

Import를 위해 데이터를 서버에 전송 시 사용할 통신형식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
JSON 형식으로 데이터를 전송합니다.
```

**Remark**
- commdataformat 속성값을 설정하지 않으면 "xml" 로 적용됩니다.

---

## filefilter

Import 할 파일을 선택하는 파일선택창에 적용될 파일형식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
파일선택창에 적용될 파일형식을 "설명|확장자" 형식으로 설정합니다.

"|" 문자를 구분자로 하여 설명과 실제 확장자를 쌍으로 여러개의 파일형식을 설정할 수 있습니다.
한 개의 파일형식내에서 복수개의 확장자를 지정할 때는 "*.xlsx;*.xls" 와 같이 ";" 문자로 구분하여 설정합니다.
```

**Remark**
- filefilter 속성값을 설정하지 않으면 빈문자열이 설정되고, "All(*.*)|*.*|" 로 동작합니다.

- importfilemode 속성값이 "local" 이거나 importData(), importDataEx() 메소드의 strSource 파라미터값을 설정하지 않았을 경우 파일선택창이 표시됩니다.

- 파일형식이 여러개 일 경우 파일선택창에 기본으로 표시될 파일형식을 filefilterindex 속성에 인덱스값으로 설정합니다.
   인덱스는 0 부터 시작하며 첫번째 파일형식부터 차례로 설정됩니다.

---

## filefilterindex

파일선택창에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다.

**Syntax**
```javascript
ExcelImportObject.set_filefilterindex(nIndex) // set
ExcelImportObject.filefilterindex // get
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

## importfilemode

Import 할 파일의 위치와 처리방식을 설정하는 속성입니다.

**Setting Syntax**
```javascript
파일 대화 상자(File Dialog)를 표시해 로컬에 위치한 파일을 선택합니다.
로컬에 위치한 파일을 서버로 전송해 Import 처리하며 Import 처리 후에 서버에 생성된 파일은 삭제됩니다.
```

**Remark**
- importfilemode 속성값을 설정하지 않으면 "local" 로 적용됩니다.

---

## importtype

ExcelImportObject 가 Import 할 파일의 형식을 상수값으로 설정하는 속성입니다.

**Setting Syntax**
```javascript
Import 할 파일의 형식을 상수값으로 설정합니다.

256 (0x0100) 또는 nexacro.ImportTypes.EXCEL 설정 시 엑셀 97 형식으로 Import 합니다.
272 (0x0110) 또는 nexacro.ImportTypes.EXCEL97 설정 시 엑셀 97~2003 형식으로 Import 합니다.
288 (0x0120) 또는 nexacro.ImportTypes.EXCEL2007 설정 시 엑셀 2007 XML 형식으로 Import 합니다.
1040 (0x0410) 또는 nexacro.ImportTypes.HANCELL2014 설정 시 한셀 2014 형식으로 Import 합니다.
1280 (0x0500) 또는 nexacro.ImportTypes.CSV 설정 시 CSV 형식으로 Import 합니다.
1296 (0x0510) 또는 nexacro.ImportTypes.TXT 설정 시 TXT 형식으로 Import 합니다.
```

**Remark**
- importtype 속성값을 설정하지 않거나 null 설정 시 256 (0x0100) 으로 적용됩니다.

- 한셀 2010 형식은 현재 지원되지 않습니다. Excel 2007 파일로 저장해서 사용하시기 바랍니다.

---

## importurl

ExcelImportObject 가 Import 를 수행할 서버의 URL 을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelImportObject.set_importurl(strImporturl) // set 
ExcelImportObject.importurl // get
```

**Setting Syntax**
```javascript
현재 Form 위치를 기준으로 한 상대경로를 사용하여 설정합니다.
```

**Remark**
- importurl 속성값을 설정하지 않으면 Import 가 수행되지 않습니다.

---

## name

ExcelImportObject 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelImportObject.set_name(strName) // set
ExcelImportObject.name // get
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

Import 시 한정자로 사용할 값을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelImportObject.set_quotechar(strQuotechar)
ExcelImportObject.quotechar
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

Import 시 구분자로 사용할 값을 설정하는 속성입니다.

**Syntax**
```javascript
ExcelImportObject.set_separator(strSeparator)
ExcelImportObject.separator
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
- importtype 속성값이 nexacro.ImportTypes.TXT 인 경우에만 유효합니다.

---

## userawdatevalue

엑셀의 셀값이 날짜 또는 시간 계열일 때 원본값 그대로 Import 할지 여부를 설정하는 속성입니다.

**Setting Syntax**
```javascript
엑셀의 셀에 표시된 값을 Import 합니다.

셀의 표시형식에 따른 서식을 반영하여 Import 합니다.
```

**Remark**
- userawnumbervalue 속성을 설정하지 않으면 false 로 적용됩니다.

- userawnumbervalue 속성은 엑셀의 셀 표시형식이 "날짜", "시간" 형식인 경우에 적용되는 속성입니다.

---

## userawnumbervalue

엑셀의 셀값이 숫자계열일 때 원본값 그대로 Import 할지 여부를 설정하는 속성입니다.

**Setting Syntax**
```javascript
엑셀의 셀에 표시된 값을 Import 합니다.

셀의 표시형식에 따른 서식을 반영하여 Import 합니다.
셀의 표시형식이 "통화", "회계" 이면 통화기호, 회계기호를 포함하여 Import 합니다.
셀의 표시형식이 "백분율" 이면 "%" 기호를 포함하지 않고 Import 합니다.
```

**Remark**
- userawnumbervalue 속성을 설정하지 않으면 true 로 적용됩니다.

- userawnumbervalue 속성은 엑셀의 셀 표시형식이 "숫자", "통화", "회계", "백분율" 등 숫자형식인 경우에 적용되는 속성입니다.

---
