# VirtualFile Methods

| Method | Description |
|--------|-------------|
| `addEvent()` | VirtualFile 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| `addEventHandler()` | VirtualFile 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| `clearEventHandler()` | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| `close()` | VirtualFile 로 오픈한 파일을 닫는 메소드입니다. |
| `copy()` | VirtualFile 에서 특정 파일을 복사하는 메소드입니다. |
| `createDirectory()` | VirtualFile 에서 폴더를 생성하는 메소드입니다. |
| `deleteDirectory()` | VirtualFile 에서 폴더를 삭제하는 메소드입니다. |
| `findEventHandler()` | VirtualFile 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| `getEventHandler()` | VirtualFile 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| `getFileList()` | 특정 위치의 파일 또는 하위폴더를 목록으로 반환하는 메소드입니다. |
| `getFileSize()` | VirtualFile 에 오픈된 파일의 크기를 반환하는 메소드입니다. |
| `insertEventHandler()` | VirtualFile 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| `isExist()` | 지정된 파일 또는 폴더의 존재여부를 반환하는 메소드입니다. |
| `open()` | VirtualFile 에 로드된 파일을 조건에 맞게 오픈하는 메소드입니다. |
| `read()` | VirtualFile 에 오픈된 파일의 내용을 읽는 메소드입니다. |
| `readLine()` | VirtualFile 에 오픈된 파일의 내용을 특정 위치까지 읽는 메소드입니다. |
| `remove()` | VirtualFile 에 지정된 파일을 삭제하는 메소드입니다. |
| `removeEvent()` | VirtualFile 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| `removeEventHandler()` | VirtualFile 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| `rename()` | VirtualFile 에서 특정 파일의 위치를 이동하거나 파일명을 변경하는 메소드입니다. |
| `renameDirectory()` | VirtualFile 에서 폴더명을 변경하는 메소드입니다. |
| `seek()` | VirtualFile 에 오픈한 파일에서 파일포인터의 위치를 이동하는 메소드입니다. |
| `setEventHandler()` | VirtualFile 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| `write()` | VirtualFile 에 오픈된 파일에 데이터를 저장하는 메소드입니다. |

---

## addEvent

VirtualFile 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.addEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | VirtualFile 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 추가에 성공하면 true 를 반환합니다.  이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- VirtualFile 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.

---

## addEventHandler

VirtualFile 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 이벤트 발생 시 수행될 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다. 정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

---

## clearEventHandler

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.clearEventHandler( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Return**: `Number` — 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**
- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.

---

## close

VirtualFile 로 오픈한 파일을 닫는 메소드입니다.

**Syntax**
```javascript
VirtualFile.close()
```

**Sample**
```javascript
this.VirtualFile00.close();
```

**Remark**
- 파일 닫기에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 닫기에 실패하면 onerror 이벤트가 발생합니다.


◆ web runtime environment 제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

- Safari 브라우저에서는 지원되지 않는 메소드입니다.

---

## copy

VirtualFile 에서 특정 파일을 복사하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.copy( strSrc, strDest );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSrc` | String | 복사할 원본 파일명을 경로와 함께 설정합니다.  절대경로 또는 Alias 를 사용하여 설정합니다. |
| `strDest` | String | 복사하여 생성될 파일명을 경로와 함께 설정합니다.  절대경로 또는 Alias 를 사용하여 설정합니다. |

**Return**: `Boolean` — 파라미터가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- 파일 복사에 성공하면 onsuccess 이벤트가 발생합니다.
  파일 복사에 실패하면 onerror 이벤트가 발생합니다.

◆ Windows NRE 제약
- Environment.filesecurelevel 속성값을 "all"로 설정한 경우에는 모든 경로에 접근을 허용합니다. 
  단, strDest 파라미터로 설정한 경로 중 %MYDOCUMENT% 경로를 제외한 모든 경로에 대해 사용자에게 접근 허용 여부를 확인한 후 사용자가 승인한 경우에만 메소드를 실행합니다.

◆ Alias
- strSrc 와 strDest 에 사용할 수 있는 Alias 실제경로입니다.
	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---

## createDirectory

VirtualFile 에서 폴더를 생성하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.createDirectory( strPath, [bAllCreate] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPath` | String | 생성할 폴더명을 경로와 함께 설정합니다.  "C:\\TobeSoft\\TestFolder" 와 같이 절대경로를 설정 시 해당 위치에 폴더가 생성됩니다. "My_Folder" 와 같이 디렉토리명만 설정할 경우 "내문서" 위치에 폴더가 생성됩니다. |
| `bAllCreate` | Boolean | true 설정 시 중간의 경로를 모두 생성한 후 폴더가 생성됩니다. false 설정 시 중간의 경로가 존재할 경우만 폴더가 생성됩니다.  값 생략 시 false 로 적용됩니다. |

**Return**: `Boolean` — 폴더 생성여부와 관계없이 메소드 수행 여부를 반환합니다.

**Remark**
- 폴더 생성에 성공하면 onsuccess 이벤트가 발생합니다.
   폴더 생성에 실패하면 onerror 이벤트가 발생합니다.

---

## deleteDirectory

VirtualFile 에서 폴더를 삭제하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.deleteDirectory( strPath [, bAllChild] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPath` | String | 삭제할 폴더명을 경로와 함께 설정합니다.  "C:\\TobeSoft\\TestFolder" 와 같이 절대경로를 설정 시 해당 위치의 폴더가 삭제됩니다. "My_Folder" 와 같이 폴더명만 설정할 경우 "내문서" 위치의 폴더가 삭제됩니다. |
| `bAllChild` | Boolean | true 설정 시 삭제되는 폴더의 하위 폴더와 파일이 모두 삭제됩니다. false 설정 시 삭제되는 폴더의 하위 폴더와 파일을 삭제하지 않습니다.  값 생략 시 false 로 적용됩니다. |

**Return**: `Boolean` — 폴더 삭제여부와 관계없이 메소드 수행 여부를 반환합니다.

**Remark**
- 폴더 삭제에 성공하면 onsuccess 이벤트가 발생합니다.
   폴더 삭제에 실패하면 onerror 이벤트가 발생합니다.

---

## findEventHandler

VirtualFile 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 찾을 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 찾으려고 하는 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 찾으려고 하는 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에서 찾으려고 하는 핸들러 함수의 인덱스를 반환합니다. 찾으려고 하는 핸들러 함수가 존재하지 않는다면 "-1"을 반환합니다.

**Remark**
- 인덱스는 "0"부터 시작합니다.

---

## getEventHandler

VirtualFile 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| `nIdx` | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다. 인덱스는 "0"부터 시작합니다. |

**Return**: `Object` — 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다. 지정된 인덱스에 핸들러 함수가 존재하지 않는다면 "null"을 반환합니다.

---

## getFileList

특정 위치의 파일 또는 하위폴더를 목록으로 반환하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.getFileList( strPath, strSearchExpr [, constOption] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPath` | String | 파일 또는 폴더 목록을 가져올 대상 폴더를 설정합니다.  절대경로 또는 Alias 를 사용하여 설정합니다. |
| `strSearchExpr` | String | 반환되는 목록에 포함시킬 파일 또는 폴더의 검색조건을 정규표현식으로 설정합니다. 설정한 정규표현식을 파일명 또는 폴더명과 매칭시킵니다.  정규표현식에서 Escape 문자("\") 사용 시 두번("\\") 설정하여야 합니다. ex) "Text" 뒤에 숫자가 붙은 파일명 또는 폴더명 검색 시 "Text\\d" 형태로 설정  정규표현식에서 "." 문자는 개행문자 이외의 모든 문자와 매칭되므로 "." 문자 자체를 매칭하려면 "\\." 로 설정하여야 합니다. ex) 확장자가 "txt" 인 파일명 검색 시 "\\.txt$" 형태로 설정 |
| `constOption` | Constant | 반환되는 파일목록을 구성하는 검색옵션을 상수값으로 설정합니다.  "VirtualFile.findAll" 또는 1 (0x01) 설정 시 strPath 위치에 속한 파일과 폴더를 대상으로 검색합니다. "VirtualFile.findFileOnly" 또는 2 (0x02) 설정 시 strPath 위치에 속한 파일을 대상으로 검색합니다. "VirtualFile.findDirectoryOnly" 또는 4 (0x04) 설정 시 strPath 위치에 속한 폴더를 대상으로 검색합니다.  "VirtualFile.findRecursive" 또는 8 (0x08) 설정 시 하위 폴더에 대한 재귀검색을 합니다. "VirtualFile.findCaseless" 또는 16 (0x10) 설정 시 대소문자를 구분하지 않고 검색합니다.  "VirtualFile.findRecursive" 와 "VirtualFile.findCaseless" 값은 다른 옵션과 "|" 문자로 구분하여 함께 설정할 수 있습니다.  값 생략 시 "VirtualFile.findAll" 로 적용됩니다. |

**Return**: `Boolean` — 메소드 실행에 성공하면 true 를 반환합니다. 메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 false 를 반환합니다.  파일 또는 폴더 목록의 반환여부와 관계없이 메소드 실행여부를 반환합니다.

**Remark**
- 파일 또는 폴더 목록 반환에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 또는 폴더 목록 반환에 실패하면 onerror 이벤트가 발생합니다.

- onsuccess 이벤트에서 e 오브젝트(VirtualFileEventInfo)의 fileattributelist 속성으로 파일 또는 폴더 목록이 전달됩니다.

- strPath 파라미터에 사용할 수 있는 Alias 의 실제경로는 아래와 같습니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---

## getFileSize

VirtualFile 에 오픈된 파일의 크기를 반환하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.getFileSize()
```

**Sample**
```javascript
this.VirtualFile00.getFileSize();
```

**Return**: `Boolean` — 파일 크기의 반환여부와 관계없이 메소드의 수행여부를 반환합니다.  메소드 수행에 성공하면 true 를 반환합니다. 메소드 수행에 실패하면 false 를 반환합니다.

**Remark**
- VirtualFile 의 open() 메소드를 사용하여 크기를 구할 파일을 먼저 오픈한 후 getFileSize() 메소드를 수행하여야 합니다.

- 파일크기 조회에 성공하면 onsuccess 이벤트가 발생합니다.
   파일크기 조회에 실패하면 onerror 이벤트가 발생합니다.

- 파일의 크기는 onsuccess 이벤트에서 "e" 오브젝트(VirtualFileEventInfo)의 filesize 속성값으로 전달됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

- Safari 브라우저에서는 지원되지 않는 메소드입니다.

---

## insertEventHandler

VirtualFile 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수가 삽입될 이벤트의 ID 를 설정합니다. |
| `nIndex` | Number | 핸들러 함수가 삽입될 위치를 인덱스로 설정합니다.  -1 값 설정 시 마지막에 추가됩니다. 이벤트에 설정된 핸들러 함수의 갯수보다 큰 값을 설정한 경우 마지막에 추가됩니다. NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 설정됩니다. |
| `objFunc` | Object | 이벤트 발생 시 수행될 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 이벤트에 삽입된 핸들러 함수의 인덱스를 반환합니다. 동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.  핸들러 함수가 정상적으로 삽입되지 않은 경우에는 -1 을 반환합니다.

**Remark**
- 첫번째 핸들러 함수의 인덱스는 0 입니다.

---

## isExist

지정된 파일 또는 폴더의 존재여부를 반환하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.isExist(strPath)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPath` | String | 존재여부를 확인할 파일 또는 폴더를 설정합니다.  절대경로 또는 Alias 를 사용하여 설정합니다. |

**Return**: `Boolean` — 파라미터가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- 존재여부 반환에 성공하면 onsuccess 이벤트가 발생합니다.
   존재여부 반환에 실패하면 onerror 이벤트가 발생합니다.

- 검색된 파일목록은 onsuccess 이벤트에서 "e" 오브젝트(VirtualFileEventInfo)의 fileisexist 속성값으로 전달됩니다.

- strPath 에 사용할 수 있는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---

## open

VirtualFile 에 로드된 파일을 조건에 맞게 오픈하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.open( strFileName ,constOptions )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strFileName` | String | 오픈할 파일명을 절대경로 또는 Alias 를 사용하여 설정합니다.  * FileUpload, FileUpTransfer, FileDialog 또는 Drag&Drop 으로 전달된 VirtualFile 오브젝트일 때만 strFileName 파라미터값을 null 또는 빈값으로 설정할 수 있습니다. |
| `constOptions` | Object | 파일을 오픈하는 옵션을 상수값으로 설정합니다. 각 옵션값들은 OR("|") 연산자를 사용하여 중복하여 설정할 수 있습니다.  VirtualFile.openRead 또는 1 설정 시 읽기전용으로 파일을 오픈합니다. 파일이 존재하지 않으면 에러가 발생합니다.  VirtualFile.openWrite 또는 2 설정 시 쓰기전용으로 파일을 오픈합니다. 파일이 존재하지 않으면 파일을 생성합니다.  VirtualFile.openAppend 또는 16 설정 시 읽기/쓰기 용도로 파일을 오픈합니다. 파일이 존재하면 오픈된 파일에서 파일포인터가 제일 마지막에 위치하게 됩니다. 파일이 존재하지 않으면 파일을 생성합니다.  VirtualFile.openCreate 또는 4096 설정 시 파일을 생성하며 오픈합니다. 파일이 존재하면 onerror 이벤트가 발생합니다.  VirtualFile.openText 또는 256 설정 시 파일을 텍스트모드로 오픈합니다.  VirtualFile.openBinary 또는 512 설정 시 파일을 이진모드로 오픈합니다. |

**Return**: `Boolean` — 파일의 오픈 여부와 관계없이 메소드 실행에 성공하면 true 를 반환합니다.  파일의 오픈 여부와 관계없이 메소드 실행에 실패하면 false 를 반환합니다. 파라미터를 생략하거나 잘못된 문자가 설정된 경우 false 를 반환합니다.

**Remark**
- 파일 오픈에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 오픈에 실패하면 onerror 이벤트가 발생합니다.

- VirtualFile 오브젝트에서 한 번에 할당받을 수 있는 메모리 크기 제약으로 2GB 이상 크기의 파일을 처리할 수 없습니다.

- strFileName 에 사용할 수 있는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---

## read

VirtualFile 에 오픈된 파일의 내용을 읽는 메소드입니다.

**Syntax**
```javascript
VirtualFile.read([nLength [, strCharset]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nLength` | Number | 파일에서 읽어 올 길이를 Byte 단위의 숫자로 설정합니다.  값 생략 시 전체 파일을 읽어옵니다. |
| `strCharset` | String | 파일에서 읽어올 내용에 적용할 CharSet 을 설정합니다.  Windows NRE 만 적용되고 모바일은 "UTF-8" 로 동작합니다. |

**Return**: `Boolean` — 파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- 파일 읽기에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 읽기에 실패하면 onerror 이벤트가 발생합니다.

- 읽어온 파일 내용은 onsuccess 이벤트에서 "e" 오브젝트(VirtualFileEventInfo)의 binarydata 또는 textdata 속성값으로 전달됩니다.

- Text 파일의 경우 첫부분에 문자셋정보(BOM:Byte Order Mark)가 포함되어 있다면  해당 부분을 제외하고 nLength 길이만큼 파일을 읽어들입니다.

- 파일의 내용을 읽은 후에는 파일포인터의 위치가 이동됩니다.


◆ Windows NRE 제약

- 파일 크기가 200MB 이상인 경우 nLength 파라미터 값을 지정하지 않거나 nLength 파라미터 값을 209,715,200Byte 이상으로 설정한 경우 onerror 이벤트가 발생합니다.
  (V8 엔진에서는 268,435,440Byte까지 지원하지만 내부적으로 인코딩 처리를 하면서 늘어나는 크기를 고려해 약 200MB 정도 크기까지 권장합니다).

---

## readLine

VirtualFile 에 오픈된 파일의 내용을 특정 위치까지 읽는 메소드입니다.

**Syntax**
```javascript
VirtualFile.readLine([strDelimeter[, strCharset]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strDelimeter` | String | 파일에서 읽기를 멈추는 구분자를 설정합니다.  값 생략 시 "\n" 으로 적용됩니다. |
| `strCharset` | String | 파일에서 읽어올 내용에 적용할 CharSet 을 설정합니다.  Windows NRE 만 적용되고 모바일은 "UTF-8" 로 동작합니다. |

**Return**: `Boolean` — 파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- 파일 읽기에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 읽기에 실패하면 onerror 이벤트가 발생합니다.

- 읽어온 파일 내용에서 strDelimeter 문자는 제외됩니다.

- 파일의 내용을 읽은 후에는 파일포인터의 위치가 이동됩니다.

- Binary 모드로 오픈된 파일인 경우 readLine() 메소드를 사용할 수 없습니다.
   읽어온 파일 내용은 onsuccess 이벤트에서 "e" 오브젝트(VirtualFileEventInfo)의 textdata 속성값으로 전달됩니다.

---

## remove

VirtualFile 에 지정된 파일을 삭제하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.remove( strFilePath )
VirtualFile.remove( objVirtualFile )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strFilePath` | String | 삭제할 파일명을 경로와 함께 설정합니다.  절대경로 또는 Alias 를 사용하여 설정합니다. |
| `objVirtualFile` | Object | FileDialog 오브젝트에서 반환받은 삭제할 VirtualFile 오브젝트를 설정합니다.  메소드를 수행하는 VirtualFile 객체 자신을 설정할 수 없습니다. 자신을 설정하는 경우 onerror 이벤트가 발생합니다. |

**Return**: `Boolean` — 파라미터가 생략되거나 허용되지 않는 문자가 사용된 경우에는 "false" 를 반환합니다. 그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**
- 파일 삭제에 성공하면 onsuccess 이벤트가 발생합니다.
  파일이 존재하지 않거나 파일 삭제에 실패하면 onerror 이벤트가 발생합니다.

- sttrFilePath 에 사용할 수 있는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---

## removeEvent

VirtualFile 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.removeEvent( strEventID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | VirtualFile 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Return**: `Boolean` — 이벤트 삭제에 성공하면 true 를 반환합니다.  이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- VirtualFile 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- VirtualFile 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.

---

## removeEventHandler

VirtualFile 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 제거할 핸들러 함수를 설정합니다. |
| `objTarget` | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 핸들러 함수 제거에 성공하면 "1"을 반환합니다. 핸들러 함수 제거에 실패하면 "0"을 반환합니다.

**Remark**
- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0"번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.

---

## rename

VirtualFile 에서 특정 파일의 위치를 이동하거나 파일명을 변경하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.rename( strOldname, strNewname );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strOldname` | String | 위치를 이동하거나 이름을 변경할 파일명을 경로와 함께 설정합니다.  절대경로 또는 Alias 를 사용하여 설정합니다. |
| `strNewname` | String | 새로 이동될 위치와 파일명을 경로와 함께 설정합니다.  절대경로 또는 Alias 를 사용하여 설정합니다. |

**Return**: `Boolean` — 파라미터가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- 파일 이동에 성공하면 onsuccess 이벤트가 발생합니다.
  파일 이동에 실패하면 onerror 이벤트가 발생합니다.

◆ Windows NRE 제약
- Environment.filesecurelevel 속성값을 "all"로 설정한 경우에는 모든 경로에 접근을 허용합니다. 
  단, strNewname 파라미터로 설정한 경로 중 %MYDOCUMENT% 경로를 제외한 모든 경로에 대해 사용자에게 접근 허용 여부를 확인한 후 사용자가 승인한 경우에만 메소드를 실행합니다.

◆ Alias
- strOldname 과 strNewname 에 사용할 수 있는 Alias 실제경로입니다.
	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---

## renameDirectory

VirtualFile 에서 폴더명을 변경하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.renameDirectory( strOldName, strNewName )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strOldName` | String | 변경할 폴더명을 경로와 함께 설정합니다.  "C:\\TobeSoft\\TestFolder" 와 같이 절대경로를 설정 시 해당 위치의 폴더명이 변경됩니다. "My_Folder" 와 같이 폴더명만 설정할 경우 "내문서" 위치의 폴더명이 변경됩니다. |
| `strNewName` | String | 경로를 포함하지 않은 새로운 폴더명을 문자열로 설정합니다. |

**Return**: `Boolean` — 폴더명 변경여부와 관계없이 메소드 수행 여부를 반환합니다.

**Remark**
- 폴더명 변경에 성공하면 onsuccess 이벤트가 발생합니다.
   폴더명 변경에 실패하면 onerror 이벤트가 발생합니다.

---

## seek

VirtualFile 에 오픈한 파일에서 파일포인터의 위치를 이동하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.seek(nOffset[, constOption])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nOffset` | Number | 현재 위치에서 파일포인터를 이동시킬 위치를 Byte 단위의 숫자로 설정합니다.  음수값 설정 시 현재 위치에서 시작위치 방향으로 포인터가 이동합니다. |
| `constOption` | Constant | 파일 포인터를 이동시킬때 적용할 옵션을 상수값으로 설정합니다.  "VirtualFile.seekBegin" 또는 0 설정 시 파일의 시작위치를 기준으로 파일포인터가 이동합니다. "VirtualFile.seekCurrent" 또는 1 설정 시 현재 파일포인터 위치를 기준으로 이동합니다. "VirtualFile.seekEnd" 또는 2 설정 시 파일의 마지막위치를 기준으로 파일포인터가 이동합니다.  값 생략 시 "VirtualFile.seekCurrent" 로 적용됩니다. |

**Return**: `Boolean` — 파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- 파일포인터 이동에 성공하면 onsuccess 이벤트가 발생합니다.
   파일포인터 이동에 실패하면 onerror 이벤트가 발생합니다.

---

## setEventHandler

VirtualFile 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strEventID` | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| `objFunc` | Object | 기존 핸들러 함수를 대체할 함수를 설정합니다. |
| `objTarget` | Object | 대체할 핸들러 함수가 정의된 영역을 설정합니다. |

**Return**: `Number` — 첫번째 핸들러 함수 변경에 성공하면 "0"을 반환합니다. 첫번째 핸들러 함수 변경에 실패하면 "-1"을 반환합니다.

**Remark**
- 인덱스가 "0"번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 "0"번인 핸들러 함수가 없다면 "0"번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.

---

## write

VirtualFile 에 오픈된 파일에 데이터를 저장하는 메소드입니다.

**Syntax**
```javascript
VirtualFile.write( varData [, strCharset] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `varData` | Variant | 오픈된 파일에 저장할 데이터를 문자열 또는 Buffer 오브젝트 형태로 설정합니다. |
| `strCharset` | String | 오픈된 파일에서 저장할 내용에 적용할 CharSet 을 설정합니다.  Windows NRE 만 적용되고 모바일은 "UTF-8" 로 동작합니다. |

**Return**: `Boolean` — 필수 파라미터가 생략되거나 파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- 파일 저장에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 저장에 실패하면 onerror 이벤트가 발생합니다.

- 오픈된 파일의 형태에 따라 Text 또는 Binary 데이터로 변환되어 저장하며 저장된 후 파일포인터가 이동합니다.

- write() 메소드가 수행되려면 파일을 오픈할 때 "VirtualFile.openWrite"  모드가 포함되어 있어야 합니다.

- 파일을 오픈할때 "VirtualFile.openAppend" 가 포함된 경우에는 무조건 파일의 마지막 위치에 데이터를 추가합니다.

- strCharset 에 "euc-kr", "Shift-JIS" 등 ANSI CodePage 로도 인코딩이 가능합니다.


◆ Windows NRE 제약

- varData 파라미터 값으로 지정한 문자열 또는 오브젝트 크기가 200MB 이상인 경우 onerror 이벤트가 발생합니다.
  (V8 엔진에서는 268,435,440Byte까지 지원하지만 내부적으로 인코딩 처리를 하면서 늘어나는 크기를 고려해 약 200MB 정도 크기까지 권장합니다).

---
