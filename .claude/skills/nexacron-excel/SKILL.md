---
name: nexacron-excel
description: >
  NexacroN Excel 연동 객체(ExcelExportObject, ExcelImportObject)의 전체 API 레퍼런스.
  NexacroN ExcelExportObject, ExcelImportObject 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  excel, excelexport, excelimport, exportData, importData 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-excel

NexacroN Excel 연동 객체(ExcelExportObject, ExcelImportObject)의 전체 API 레퍼런스.

## ExcelExportObject

- Properties: 22개
- Methods: 24개
- Events: 3개

### 주요 Properties
`commandversion`, `commcompress`, `commdataformat`, `exportactivemode`, `exporteventtype`, `exportfilename`, `exportfilepassword`, `exportfilepath`, `exportmessagealert`, `exportmessagecomplete`, `exportmessageprocess`, `exportmessageready`, `exporttype`, `exportuitype`, `exporturl`
  외 7개 → `references/ExcelExportObject_properties.md` 참조

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `addExportItem`, `clear`, `clearEventHandler`, `clearExportItems`, `count`, `countExportItems`, `delExportItem`, `destroy`, `exportData`, `exportDataEx`, `exportItems`, `findEventHandler`
  외 9개 → `references/ExcelExportObject_methods.md` 참조

### 주요 Events
`onerror`, `onprogress`, `onsuccess`

### 하위 객체
- **ExportItem**: Properties 11, Methods 0, Events 0
- **ExportItemTypes**: Properties 1, Methods 0, Events 0
- **ExportTypes**: Properties 6, Methods 0, Events 0
  → `references/ExcelExportObject_sub_objects.md` 참조

## ExcelImportObject

- Properties: 12개
- Methods: 15개
- Events: 2개

### 주요 Properties
`commandversion`, `commdataformat`, `filefilter`, `filefilterindex`, `importfilemode`, `importtype`, `importurl`, `name`, `quotechar`, `separator`, `userawdatevalue`, `userawnumbervalue`

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `clearEventHandler`, `destroy`, `findEventHandler`, `getEventHandler`, `importData`, `importDataEx`, `insertEventHandler`, `removeEvent`, `removeEventHandler`, `removeEventHandlerLookup`, `setEventHandler`, `setEventHandlerLookup`

### 주요 Events
`onerror`, `onsuccess`

### 하위 객체
- **ImportTypes**: Properties 5, Methods 0, Events 0
  → `references/ExcelImportObject_sub_objects.md` 참조

## 상세 레퍼런스

- `references/ExcelExportObject_properties.md` — ExcelExportObject 전체 Property 목록
- `references/ExcelExportObject_methods.md` — ExcelExportObject 전체 Method 목록
- `references/ExcelExportObject_events.md` — ExcelExportObject 전체 Event 목록
- `references/ExcelImportObject_properties.md` — ExcelImportObject 전체 Property 목록
- `references/ExcelImportObject_methods.md` — ExcelImportObject 전체 Method 목록
- `references/ExcelImportObject_events.md` — ExcelImportObject 전체 Event 목록
