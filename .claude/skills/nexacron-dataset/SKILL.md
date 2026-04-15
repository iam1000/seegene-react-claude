---
name: nexacron-dataset
description: >
  NexacroN Dataset/DataObject의 전체 API 레퍼런스. 행 추가/삭제, 검색, 필터, 정렬, 집계 등 데이터 처리 전반을 다룬다.
  NexacroN Dataset, DataObject, ColumnInfo 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  dataset, ds_, addRow, deleteRow, getColumn, setColumn, findRow, filter, keystring, getSum, oncolumnchanged, onrowposchanged 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-dataset

NexacroN Dataset/DataObject의 전체 API 레퍼런스. 행 추가/삭제, 검색, 필터, 정렬, 집계 등 데이터 처리 전반을 다룬다.

## Dataset

- Properties: 26개
- Methods: 125개
- Events: 7개

### 주요 Properties
`arguments`, `binddataobject`, `colcount`, `colinfos`, `collation`, `constcount`, `dataobjectbindmode`, `dataobjectpath`, `enableevent`, `filterstr`, `keystring`, `loadfiltermode`, `loadkeymode`, `name`, `preload`
  외 11개 → `references/Dataset_properties.md` 참조

### 주요 Methods
`addColumn`, `addColumnInfo`, `addConstColumn`, `addEvent`, `addEventHandler`, `addEventHandlerLookup`, `addRow`, `append`, `appendData`, `applyChange`, `assign`, `clear`, `clearData`, `clearEventHandler`, `copyData`
  외 110개 → `references/Dataset_methods.md` 참조

### 주요 Events
`cancolumnchange`, `canrowposchange`, `oncolumnchanged`, `onload`, `onrowposchanged`, `onrowsetchanged`, `onvaluechanged`

## DataObject

- Properties: 7개
- Methods: 23개
- Events: 6개

### 주요 Properties
`data`, `enableevent`, `id`, `name`, `parent`, `preload`, `url`

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `clearChangedInfo`, `clearEventHandler`, `destroy`, `findEventHandler`, `getAllResponseHeaders`, `getChangedInfo`, `getEventHandler`, `getObjectByPath`, `getResponse`, `getResponseHeader`, `insertEventHandler`, `load`
  외 8개 → `references/DataObject_methods.md` 참조

### 주요 Events
`ondatachanged`, `onerror`, `onload`, `onloaddatasets`, `onsuccess`, `onvaluechanged`

## ColumnInfo

- Properties: 6개
- Methods: 0개
- Events: 0개

### 주요 Properties
`datapath`, `name`, `prop`, `size`, `sumtext`, `type`

## 상세 레퍼런스

- `references/Dataset_properties.md` — Dataset 전체 Property 목록
- `references/Dataset_methods.md` — Dataset 전체 Method 목록
- `references/Dataset_events.md` — Dataset 전체 Event 목록
- `references/DataObject_properties.md` — DataObject 전체 Property 목록
- `references/DataObject_methods.md` — DataObject 전체 Method 목록
- `references/DataObject_events.md` — DataObject 전체 Event 목록
- `references/ColumnInfo_properties.md` — ColumnInfo 전체 Property 목록
- `references/ColumnInfo_methods.md` — ColumnInfo 전체 Method 목록
- `references/ColumnInfo_events.md` — ColumnInfo 전체 Event 목록
