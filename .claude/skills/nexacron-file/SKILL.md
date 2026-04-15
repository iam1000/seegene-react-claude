---
name: nexacron-file
description: >
  NexacroN 파일 처리 컴포넌트(FileUpload, FileDownload, FileUpTransfer, FileDownTransfer, FileDialog, VirtualFile)의 전체 API 레퍼런스.
  NexacroN FileUpload, FileDownload, FileUpTransfer, FileDownTransfer, FileDialog, VirtualFile 컴포넌트의 Property, Method, Event 상세 API 레퍼런스.
  fileupload, filedownload, filetransfer, filedialog, virtualfile 키워드가 포함된 요청에서 트리거된다.
---

# nexacron-file

NexacroN 파일 처리 컴포넌트(FileUpload, FileDownload, FileUpTransfer, FileDownTransfer, FileDialog, VirtualFile)의 전체 API 레퍼런스.

## FileUpload

- Properties: 70개
- Methods: 53개
- Events: 26개

### 주요 Properties
`-nexa-border`, `-nexa-edge`, `-nexa-padding`, `-nexa-rtl-background-image`, `-nexa-rtl-edge-image`, `accessibilityaction`, `accessibilitydesclevel`, `accessibilitydescription`, `accessibilityenable`, `accessibilitylabel`, `accessibilityrole`, `background`, `border-radius`, `bottom`, `box-shadow`
  외 55개 → `references/FileUpload_properties.md` 참조

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `appendItem`, `bringToFront`, `bringToPrev`, `changeItem`, `clearEventHandler`, `deleteItem`, `destroy`, `findEventHandler`, `getEventHandler`, `getHScrollPos`, `getItemCount`, `getItemIndex`
  외 38개 → `references/FileUpload_methods.md` 참조

### 주요 Events
`onappenditem`, `oncontextmenu`, `ondeleteitem`, `ondevicebuttonup`, `onerror`, `onfindclick`, `onitemchanged`, `onitemclick`, `onkeydown`, `onkeyup`
  외 16개 → `references/FileUpload_events.md` 참조

### 하위 객체
- **FileUploadItemControl**: Properties 14, Methods 0, Events 0
  → `references/FileUpload_sub_objects.md` 참조

## FileDownload

- Properties: 63개
- Methods: 44개
- Events: 21개

### 주요 Properties
`-nexa-border`, `-nexa-edge`, `-nexa-icon`, `-nexa-icon-position`, `-nexa-padding`, `-nexa-rtl-background-image`, `-nexa-rtl-edge-image`, `-nexa-rtl-icon`, `-nexa-text-align`, `-nexa-text-decoration`, `-nexa-text-padding`, `-nexa-vertical-align`, `-nexa-word-wrap`, `accessibilityaction`, `accessibilitydesclevel`
  외 48개 → `references/FileDownload_properties.md` 참조

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `bringToFront`, `bringToPrev`, `clearEventHandler`, `destroy`, `download`, `findEventHandler`, `getDisplayText`, `getEventHandler`, `getOffsetBottom`, `getOffsetHeight`, `getOffsetLeft`, `getOffsetRight`
  외 29개 → `references/FileDownload_methods.md` 참조

### 주요 Events
`onclick`, `oncontextmenu`, `ondevicebuttonup`, `onerror`, `onkeydown`, `onkeyup`, `onkillfocus`, `onlbuttondown`, `onlbuttonup`, `onmouseenter`
  외 11개 → `references/FileDownload_events.md` 참조

## FileUpTransfer

- Properties: 5개
- Methods: 26개
- Events: 3개

### 주요 Properties
`filelist`, `id`, `name`, `postdatalist`, `url`

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `addFile`, `clearEventHandler`, `clearFileList`, `clearPostDataList`, `destroy`, `existFile`, `findEventHandler`, `getEventHandler`, `getFileArrayByFileName`, `getIndexArrayByFileName`, `getPostData`, `insertEventHandler`
  외 11개 → `references/FileUpTransfer_methods.md` 참조

### 주요 Events
`onerror`, `onprogress`, `onsuccess`

## FileDownTransfer

- Properties: 5개
- Methods: 18개
- Events: 2개

### 주요 Properties
`downloadfilename`, `id`, `name`, `postdatalist`, `url`

### 주요 Methods
`addEvent`, `addEventHandler`, `addEventHandlerLookup`, `clearEventHandler`, `clearPostDataList`, `destroy`, `download`, `findEventHandler`, `getEventHandler`, `getPostData`, `insertEventHandler`, `removeEvent`, `removeEventHandler`, `removeEventHandlerLookup`, `removePostData`
  외 3개 → `references/FileDownTransfer_methods.md` 참조

### 주요 Events
`onerror`, `onsuccess`

## FileDialog

- Properties: 7개
- Methods: 1개
- Events: 1개

### 주요 Properties
`accept`, `defaultextension`, `filter`, `filterindex`, `id`, `name`, `parent`

### 주요 Methods
`open`

### 주요 Events
`onclose`

## VirtualFile

- Properties: 7개
- Methods: 24개
- Events: 2개

### 주요 Properties
`async`, `filename`, `fullpath`, `id`, `name`, `parent`, `path`

### 주요 Methods
`addEvent`, `addEventHandler`, `clearEventHandler`, `close`, `copy`, `createDirectory`, `deleteDirectory`, `findEventHandler`, `getEventHandler`, `getFileList`, `getFileSize`, `insertEventHandler`, `isExist`, `open`, `read`
  외 9개 → `references/VirtualFile_methods.md` 참조

### 주요 Events
`onerror`, `onsuccess`

## 상세 레퍼런스

- `references/FileUpload_properties.md` — FileUpload 전체 Property 목록
- `references/FileUpload_methods.md` — FileUpload 전체 Method 목록
- `references/FileUpload_events.md` — FileUpload 전체 Event 목록
- `references/FileDownload_properties.md` — FileDownload 전체 Property 목록
- `references/FileDownload_methods.md` — FileDownload 전체 Method 목록
- `references/FileDownload_events.md` — FileDownload 전체 Event 목록
- `references/FileUpTransfer_properties.md` — FileUpTransfer 전체 Property 목록
- `references/FileUpTransfer_methods.md` — FileUpTransfer 전체 Method 목록
- `references/FileUpTransfer_events.md` — FileUpTransfer 전체 Event 목록
- `references/FileDownTransfer_properties.md` — FileDownTransfer 전체 Property 목록
- `references/FileDownTransfer_methods.md` — FileDownTransfer 전체 Method 목록
- `references/FileDownTransfer_events.md` — FileDownTransfer 전체 Event 목록
- `references/FileDialog_properties.md` — FileDialog 전체 Property 목록
- `references/FileDialog_methods.md` — FileDialog 전체 Method 목록
- `references/FileDialog_events.md` — FileDialog 전체 Event 목록
- `references/VirtualFile_properties.md` — VirtualFile 전체 Property 목록
- `references/VirtualFile_methods.md` — VirtualFile 전체 Method 목록
- `references/VirtualFile_events.md` — VirtualFile 전체 Event 목록
