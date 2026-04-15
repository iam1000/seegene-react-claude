# System Methods

| Method | Description |
|--------|-------------|
| `attachChildFrame()` | 웹브라우저에서 넥사크로 스튜디오로 Generate 된 "xfdl" 파일을 사용자 DOM 에 로드하는 메소드입니다. |
| `checkDevicePermission()` | 권한 설정 여부를 확인하는 메소드입니다. |
| `clearClipboard()` | 시스템의 클립보드에 저장된 내용을 삭제하는 메소드입니다. |
| `clientToScreenX()` | 컴포넌트의 클라이언트 기준의 x 좌표값을 스크린 기준의 x 좌표값으로 반환하는 메소드입니다. |
| `clientToScreenY()` | 컴포넌트의 클라이언트 기준의 y 좌표값을 스크린 기준의 y 좌표값으로 반환하는 메소드입니다. |
| `convertRealPath()` | Alias 가 포함된 경로를 실제 절대경로로 변환하는 메소드입니다. |
| `execBrowser()` | 전달된 문자열 정보에 따라 브라우저(또는 앱)를 실행하는 메소드입니다. |
| `execDefaultBrowser()` | 전달된 URL을 기본앱으로 지정한 웹브라우저에서 실행하는 메소드입니다. |
| `execNexacro()` | 전달된 실행경로와 인수값으로 넥사크로를 실행하는 메소드입니다. |
| `execShell()` | 윈도우 셸(Shell)에 설정한 값을 전달하는 메소드입니다. |
| `exportPDF()` | 지정한 컴포넌트의 이미지를 PDF 파일로 출력하는 메소드입니다. |
| `getClipboard()` | 시스템의 클립보드에 저장된 데이터를 지정된 형식으로 반환하는 메소드입니다. |
| `getCursorX()` | 마우스 커서가 위치한 곳의 x 좌표값을 반환하는 메소드입니다. |
| `getCursorY()` | 마우스 커서가 위치한 곳의 y 좌표값을 반환하는 메소드입니다. |
| `getMonitorIndex()` | 다중 모니터 일 때 전달된 좌표값에 가장 가까운 모니터의 번호를 반환하는 메소드입니다. |
| `getPackageVersion()` | 앱 버전 정보를 반환하는 메소드입니다. |
| `getScreenHeight()` | 어플리케이션이 실행된 스크린의 높이를 반환하는 메소드입니다. |
| `getScreenPrintString()` | 지정한 컴포넌트를 HTML 문자열 형태로 출력하는 메소드입니다. |
| `getScreenRect()` | 지정한 모니터의 스크린정보를 Rect 오브젝트로 반환하는 메소드입니다. |
| `getScreenResolution()` | 지정한 모니터의 해상도를 반환하는 메소드입니다. |
| `getScreenWidth()` | 어플리케이션이 실행된 스크린의 너비를 반환하는 메소드입니다. |
| `isPrimaryMonitor()` | 다중 모니터 일 때, 지정한 모니터가 주 모니터인지 반환하는 메소드입니다. |
| `print()` | 지정한 컴포넌트의 이미지를 프린터로 출력하는 메소드입니다. |
| `requestDevicePermission()` | 설정한 권한을 요청하는 메소드입니다. |
| `saveToImageBase64String()` | 지정한 컴포넌트의 이미지를 Base64 로 인코딩 된 String 으로 반환하는 메소드입니다. |
| `saveToImageFile()` | 지정한 컴포넌트의 이미지를 파일로 출력하는 메소드입니다. |
| `screenToClientX()` | 스크린 기준의 x 좌표값을 컴포넌트의 클라이언트 기준 x 좌표값으로 반환하는 메소드입니다. |
| `screenToClientY()` | 스크린 기준의 y 좌표값을 컴포넌트의 클라이언트 기준 y 좌표값으로 반환하는 메소드입니다. |
| `setClipboard()` | 시스템의 클립보드에 지정된 형식으로 데이터를 저장하는 메소드입니다. |
| `showModalSync()` | 동적으로 생성한 ChildFrame 을 Sync 로 동작하는 Modal 형태로 표시하는 메소드입니다. |
| `showModalWindow()` | 동적으로 생성한 ChildFrame 을 별도의 Modal Window 로 표시하는 메소드입니다. |

---

## attachChildFrame

웹브라우저에서 넥사크로 스튜디오로 Generate 된 "xfdl" 파일을 사용자 DOM 에 로드하는 메소드입니다.

**Syntax**
```javascript
system.attachChildFrame(window, document, strKey, stradlurl, strDivId, strxfdlurl)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `window` | Object | window 객체를 설정합니다. |
| `document` | Object | document 객체를 설정합니다. |
| `strKey` | String | Application 의 AppVariables 에 등록할때 사용할 Key 값을 문자열로 설정합니다. |
| `stradlurl` | String | Generate 된 "xadl" 파일의 이름을 문자열로 설정합니다. |
| `strDivId` | String | Generate 된 "xfdl" 파일이 로드될 사용자 Division 의 ID 를 설정합니다. |
| `strxfdlurl` | String | Generate 된 "xfdl" 파일의 이름을 설정합니다. |

**Remark**
- 스크립트에서 mainframe 을 사용하여 접근할 수 없습니다.

- 넥사크로 스튜디오로 개발된 xfdl 파일을 웹브라우저에서 사용할 수 있도록 제공되는 메소드입니다.

---

## checkDevicePermission

권한 설정 여부를 확인하는 메소드입니다.

**Syntax**
```javascript
system.checkDevicePermission(arrPermissiontypes);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrPermissiontypes` | Array | 설정 여부를 확인할 수 있는 권한 목록을 배열 형식으로 설정합니다. 지정할 수 있는 값은 아래와 같습니다.  // 공통  nexacro.DevicePermissionType.CALENDAR: "calendar"  nexacro.DevicePermissionType.CAMERA: "camera"  nexacro.DevicePermissionType.CONTACTS: "contacts"  nexacro.DevicePermissionType.LOCATION: "location"  nexacro.DevicePermissionType.MICROPHONE: "microphone"   // Android  nexacro.DevicePermissionType.PHONE: "phone"  nexacro.DevicePermissionType.SMS: "sms"  nexacro.DevicePermissionType.STORAGE: "storage"  nexacro.DevicePermissionType.NOTIFICATIONS: "notifications"  // iOS  nexacro.DevicePermissionType.PHOTO: "photo"  nexacro.DevicePermissionType.REMINDERS: "reminders" |

**Remark**
- 설정 여부는 Environment의 ondevicepermission 이벤트에서 확인할 수 있습니다.

---

## clearClipboard

시스템의 클립보드에 저장된 내용을 삭제하는 메소드입니다.

**Syntax**
```javascript
system.clearClipboard()
```

**Sample**
```javascript
system.clearClipboard();
```

**Remark**
◆ WRE 제약 

- Edge, Chrome, FireFox, Opera 브라우저는 https 또는 localhost 통신 인 경우만 clearClipboard() 메소드가 정상동작 합니다.

---

## clientToScreenX

컴포넌트의 클라이언트 기준의 x 좌표값을 스크린 기준의 x 좌표값으로 반환하는 메소드입니다.

**Syntax**
```javascript
system.clientToScreenX(objComp, nPosX)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 변환할 x 좌표값의 기준이 되는 컴포넌트를 설정합니다. |
| `nPosX` | Number | 변환할 컴포넌트 기준의 x 좌표값을 설정합니다. |

**Return**: `Number` — 스크린 기준의 x 좌표값을 반환합니다.

**Remark**
- 컴포넌트의 클라이언트 기준 좌표이므로 border 속성과 같이 클라이언트 영역이 아닌 부분은 계산에서 제외됩니다.
  예를 들어 클라이언트 기준 좌표계에서 좌표값(0,0)은 border 내부의 왼쪽상단 영역을 의미합니다.

◆ WRE 제약

- Form 오브젝트의 onload 이벤트 발생 후 마우스 이벤트 발생 전에 메소드가 실행되면 변환되지 않은 컴포넌트 좌표값을 그대로 반환합니다. 
  WRE 환경에서는 마우스 이벤트가 발생하기 전에 정확한 브라우저 영역 계산을 할 수 없습니다. 이 때문에 부정확한 변환값을 반환하지 않고 컴포넌트 좌표값을 반환합니다.
  마우스 이벤트(사용자의 컴포넌트 클릭, 마우스 이동 등의 동작)가 발생하지 않은 경우에는 WRE 환경에서 해당 메소드를 사용하지 않을 것을 권장합니다.

---

## clientToScreenY

컴포넌트의 클라이언트 기준의 y 좌표값을 스크린 기준의 y 좌표값으로 반환하는 메소드입니다.

**Syntax**
```javascript
system.clientToScreenY(objComp, nPosY)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 변환할 y 좌표값의 기준이 되는 컴포넌트를 설정합니다. |
| `nPosY` | Number | 변환할 컴포넌트 기준의 y 좌표값을 설정합니다. |

**Return**: `Number` — 스크린 기준의 y 좌표값을 반환합니다.

**Remark**
- 컴포넌트의 클라이언트 기준 좌표이므로 border 속성과 같이 클라이언트 영역이 아닌 부분은 계산에서 제외됩니다.
  예를 들어 클라이언트 기준 좌표계에서 좌표값(0,0)은 border 내부의 왼쪽상단 영역을 의미합니다.

◆ WRE 제약

- Form 오브젝트의 onload 이벤트 발생 후 마우스 이벤트 발생 전에 메소드가 실행되면 변환되지 않은 컴포넌트 좌표값을 그대로 반환합니다. 
  WRE 환경에서는 마우스 이벤트가 발생하기 전에 정확한 브라우저 영역 계산을 할 수 없습니다. 이 때문에 부정확한 변환값을 반환하지 않고 컴포넌트 좌표값을 반환합니다.
  마우스 이벤트(사용자의 컴포넌트 클릭, 마우스 이동 등의 동작)가 발생하지 않은 경우에는 WRE 환경에서 해당 메소드를 사용하지 않을 것을 권장합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.

---

## convertRealPath

Alias 가 포함된 경로를 실제 절대경로로 변환하는 메소드입니다.

**Syntax**
```javascript
system.convertRealPath(strAlias)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strAlias` | String | 절대경로로 변환하려는 Alias 가 포함된 경로를 문자열로 설정합니다. |

**Return**: `String` — 실제 절대경로를 반환합니다.

**Remark**
- 경로에 사용되는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%

---

## execBrowser

전달된 문자열 정보에 따라 브라우저(또는 앱)를 실행하는 메소드입니다.

**Syntax**
```javascript
system.execBrowser( strUrl )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strUrl` | String | URL 경로 또는 전화 걸기, 메일 보내기 기능을 실행하기 위한 정보를 문자열로 설정합니다. Android NRE, iOS/iPadOS NRE에서는 파일 또는 앱을 실행하기 위한 문자열을 설정할 수 있습니다. Remark 항목을 참고하세요. |

**Remark**
- 윈도우 운영체제 NRE에서는 시스템에 설정된 기본 브라우저가 아닌 인터넷 익스플로러가 실행됩니다.
 시스템에 설정된 기본 브라우저를 실행하려면 execDefaultBrowser 메소드를 사용합니다.

- WRE에서 메소드 실행 시 해당 웹브라우저에 새 탭(또는 새 창)으로 실행됩니다.

- Android NRE, iOS/iPadOS NRE에서 아래와 같은 문자열을 사용해 특정 파일에 접근하거나 설치된 앱을 실행할 수 있습니다. 
  URL Scheme은 운영체제에 따라 지원하는 항목이 다르며 연결된 앱에 따라 다를 수 있습니다. 운영체제 또는 해당 앱 가이드 문서를 참고하세요.
  특정 앱에서 지원하는 Custom URL Scheme은 앱이 설치되지 않았다면 동작하지 않습니다.
  
  // 상대경로
  system.execBrowser("/storage/emulated/0/Download/test.mp3");

  // 프로토콜 (ftp, file 등)
  system.execBrowser("file:///storage/emulated/0/Download/test.mp3");

  // URL Scheme
  system.execBrowser("Intent://command?parameter=option&version=1");
  system.execBrowser("android-app://com.android.chrome"); 
  system.execBrowser( "fb://profile" );
  system.execBrowser( "twitter://user?screen_name=unity3d" );

---

## execDefaultBrowser

전달된 URL을 기본앱으로 지정한 웹브라우저에서 실행하는 메소드입니다.

**Syntax**
```javascript
system.execDefaultBrowser( strUrl, [bNewWindow] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strUrl` | String | 웹페이지 URL 경로를 문자열로 설정합니다. |
| `bNewWindow` | Boolean | 설정한 URL을 새창으로 열지 설정합니다. 값을 설정하지 않으면 false로 설정됩니다.  윈도우 운영체제 NRE만 지원합니다. |

**Remark**
- NRE에서 메소드 실행 시 시스템에 설정된 기본 브라우저가 실행됩니다. 
- Desktop WRE 에서 메소드 실행 시 해당 웹브라우저에 새탭(또는 새창)으로 실행됩니다.

◆ Windows NRE 제약

- 윈도우 운영체제 NRE에서는 strUrl 파라미터값이 "http://", "https://"로 시작하지 않을 경우 execShell 메소드와 같은 수준의 실행 제약을 적용합니다. 
  자세한 내용은 execShell 도움말을 참고하세요.

---

## execNexacro

전달된 실행경로와 인수값으로 넥사크로를 실행하는 메소드입니다.

**Syntax**
```javascript
system.execNexacro(strCommand)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strCommand` | String | 옵션예약어와 옵션값을 쌍으로 하여 실행옵션을 설정합니다. 옵션값에 빈칸이 포함된 경우는 따옴표(") 로 묶어야 합니다.  -K : 어플리케이션을 구별하기 위한 키값을 문자열로 설정합니다. -S : 부트스트랩 경로를 설정합니다. -C : 컴포넌트가 설치된 경로를 설정합니다. -THR : 엔진 내부 통신 및 기타 Manager 의 쓰레드 수를 숫자로 설정합니다.           쓰레드의 갯수는 최소 3개, 최대 10개이며 기본값은 3 입니다. -SP : Splash Image 의 경로를 설정합니다. -SM : Splash Image 에 시스템 메시지가 표시되지 않도록 "none" 값을 설정합니다.          어플리케이션 실행 시 에러가 발생하면 "none" 값을 설정해도 에러 메시지가 표시됩니다. - LF : 어플리케이션의 Left 위치 좌표값을 설정합니다. -TP : 어플리케이션의 Top 위치 좌표값을 설정합니다. -WD : 어플리케이션의 너비를 픽셀단위 숫자로 설정합니다. -HT : 어플리케이션의 높이를 픽셀단위 숫자로 설정합니다. -LG : Loading Image 의 경로를 설정합니다. -TW : 엔진 내부 Manager 의 쓰레드가 대기할 최대시간을 설정합니다. -OO : 동일한 키의 어플리케이션의 실행을 한개만 허용할 지 Boolean 으로 설정합니다. -V : 어플리케이션이 실행될 때 추가될 Global 변수를 "변수명:타입=값 변수명:타입=값" 형식으로 설정합니다.        각 변수는 콤마(",")문자로 구분하여 설정합니다.        "타입"에 "ev"를 설정 시 Environment 의 Variables 영역에 변수가 추가됩니다.        "타입"에 "ec"를 설정 시 Environment 의 Cookies 영역에 변수가 추가됩니다.        "타입"을 설정하지 않거나 "av"를 설정 시 Application 의 Variables 영역에 변수가 추가됩니다. -SIE : 어플리케이션 실행 시 에러가 발생하면 에러 메시지를 표시하고 종료할 지 Boolean 으로 설정합니다.          옵션값 생략 시 false 로 적용됩니다. -CT : 초기 네트워크가 연결되어 있는지 체크하는 최대 대기시간을 설정합니다.          네트워크가 연결되어 있는지 여부를 어플리케이션이 구동되기 전에 체크합니다.          대기시간동안 네트워크가 연결여부가 확인되지 않으면 어플리케이션이 종료됩니다. -SCR : LayoutManager 에서 사용하기 위한 ScreenID 를 설정합니다. -CC : V8 엔진의 CodeCache 기능을 비활성화 하기위해 설정합니다.          "NO" 설정 시 CodeCache 기능을 사용하지 않습니다.          "AL" 설정 또는 옵션값 생략 시 CodeCache 기능이 활성화 됩니다. -AU : 어플리케이션이 실행될 때 엔진의 업데이트 여부를 설정합니다.          "auto" 설정 시 엔진을 최신버전으로 업데이트합니다.          "manual" 설정 시 엔진을 업데이트 하지 않습니다. -NC : 어플리케이션이 실행될 때 적용될 Config 파일의 경로와 파일명을 설정합니다.          Local 경로에 위치한 XML 형식의 파일만 설정할 수 있습니다.          파일명만 설정할 경우 nexacro.exe 위치와 동일한 경로에서 파일을 찾습니다.          옵션값 생략 시 "%USERAPP%\config\"+[Key] 경로에서 "nexacro_config.xml" 파일을 찾습니다. |

**Remark**
- "실행경로 + 인수의 길이"가 256 자리를 넘는 경우 뒷부분이 짤려 정상적으로 적용되지 않기 때문에 꼭 필요한 옵션만 사용하도록 주의해야 합니다.

- "-AU" 옵션을 설정하면 Build App 과정에서 설정할 수 있는 "Auto Update" 옵션값이 적용되지 않습니다.

- 어플리케이션 실행 시 적용된 Config 파일에 tracemode, loglevel 속성이 정의되어 있지 않으면 Environment 에 설정된 해당 속성값이 적용됩니다.

---

## execShell

윈도우 셸(Shell)에 설정한 값을 전달하는 메소드입니다.

**Syntax**
```javascript
system.execShell( strShellCmd )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strShellCmd` | String | 윈도우 셸에 전달할 값을 설정합니다. 사용할 수 있는 형식은 아래와 같습니다.  (1) 파일 경로+파일명 사용자 PC의 파일 경로와 파일명을 지정하고 연결된 앱에서 실행됩니다. Alias로 설정하거나 직접 파일 경로를 지정할 수 있습니다.  (2) URL "http://", "https://"로 시작하는 문자열은 URL 값으로 전달되며 기본 웹 브라우저에서 실행됩니다.  (3) 이메일 "mailto:"로 시작하는 문자열은 기본 이메일 앱에서 실행됩니다. |

**Remark**
- execShell 메소드는 설정한 값을 윈도우 셸에 전달할 뿐 직접 특정 프로그램을 실행하지 않습니다.
때문에 사용자 PC 환경 설정에 따라 다르게 동작할 수 있습니다.

- 보안상의 이유로 아래와 같은 경우 설정한 값을 윈도우 셸에 전달하지 않습니다.

(1) 특정 실행 파일 확장자 (38종)
사용자 PC에 악성 코드를 설치하거나 실행할 수 있는 확장자를 제한합니다.
해당 확장자를 가진 파일명으로 설정한 값을 윈도우 셸에 전달하지 않습니다.
bat, bin, cmd, com, cpl, dll, exe, gadget, hta, inf1,
ins, inx, isu, job, js, jse, lnk, msc, msi, msp,
mst, paf, pif, ps1, reg, rgs, scr, sct, shb, shs,
u3p, vb, vbe, vbs, vbscript, ws, wsf, wsh

(2) 사용자 PC에 파일이 없는 경우
파라미터값으로 파일명을 설정한 경우 사용자 PC에 해당 파일이 있는지 확인하고 없으면 설정한 값을 윈도우 셸에 전달하지 않습니다.

(3) 확장자가 없는 경우
아래와 같이 확장자 없는 파일명 또는 시스템 등록 프로그램명을 파라미터값으로 전달해서 실행할 수 없습니다.
(X) system.execShell("notepad")

---

## exportPDF

지정한 컴포넌트의 이미지를 PDF 파일로 출력하는 메소드입니다.

**Syntax**
```javascript
system.exportPDF(objComponent, strFileName)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComponent` | Object | PDF 파일로 출력할 컴포넌트를 오브젝트로 설정합니다. |
| `strFileName` | String | 출력할 PDF 파일명을 확장자를 포함해 설정합니다. 운영체제 보안정책에 따라 설정할 수 있는 파일명에 제약이 있을 수 있습니다. |

**Return**: `Boolean` — 이미지 출력에 성공하면 true를 반환하고 실패하면 false를 반환합니다.

**Remark**
- 파일 저장 시 애플리케이션 샌드박스 정책이 적용됩니다.
- 운영체제별 PDF 파일 저장 위치는 아래와 같습니다.
  - Windows NRE: 내문서
  - macOS NRE: 내문서
  - Android NRE:
     - targetSdkVersion 29 이하: /storage/emulated/0/
     - targetSdkVersion 30 이상: /storage/emulated/0/Documents/

---

## getClipboard

시스템의 클립보드에 저장된 데이터를 지정된 형식으로 반환하는 메소드입니다.

**Syntax**
```javascript
system.getClipboard( strFormat [, objCallBackFunc [, objTarget]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strFormat` | String | 시스템 클립보드에 데이터를 저장할 때 적용할 형식을 문자열로 설정합니다.  "CF_TEXT" 설정 시 데이터를 텍스트 형식으로 저장합니다. "CF_UNICODETEXT" 설정 시 데이터를 유니코드 텍스트 형식으로 저장합니다. "CF_CSV" 설정 시 데이터를 CSV 형식으로 저장합니다. |
| `objCallBackFunc` | Object | 시스템 클립보드의 데이터가 반환될 CallBack 함수를 오브젝트 형태로 설정합니다.  * Chrome, Opera 브라우저인 경우만 적용되는 파라미터입니다. |
| `objTarget` | Object | CallBack 함수가 정의된 영역을 오브젝트 형태로 설정합니다.  값 생략 시 window 로 적용됩니다.  * Chrome, Opera 브라우저인 경우만 적용되는 파라미터입니다. |

**Return**: `Variant` — 시스템 클립보드의 데이터를 지정된 형식으로 반환합니다.  * Chrome, Opera 브라우저는 undefined 를 반환합니다.

**Remark**
◆ NRE 제약 
- 모바일 NRE는 "CF_TEXT" 형식만 지원합니다.

◆ WRE 제약 
- web runtime environment 는 "CF_TEXT" 형식만 지원합니다.
- Edge, Chrome, Opera 브라우저는 Async 방식으로 클립보드의 데이터를 반환합니다.
  따라서 objCallBackFunc, objTarget 파라미터를 설정하여 CallBack 함수로 데이터를 반환받아야 합니다.
- Edge, Chrome, Opera 브라우저는 https 또는 localhost 통신 인 경우만 getClipboard() 메소드가 정상동작 합니다.
- FireFox 브라우저는 보안 정책상 getClipboard() 메소드를 지원하지 않습니다.
  단, 클립보드의 데이터를 붙여넣기는 가능합니다.

---

## getCursorX

마우스 커서가 위치한 곳의 x 좌표값을 반환하는 메소드입니다.

**Syntax**
```javascript
system.getCursorX()
```

**Sample**
```javascript
system.getCursorX()
```

**Return**: `Number` — 마우스 커서가 위치한 곳의 x 좌표값을 반환합니다.

**Remark**
- ontimer 이벤트에서 getCursorX() 메소드 실행 시 정상적인 좌표값을 반환하지 못합니다.

---

## getCursorY

마우스 커서가 위치한 곳의 y 좌표값을 반환하는 메소드입니다.

**Syntax**
```javascript
system.getCursorY()
```

**Sample**
```javascript
system.getCursorY()
```

**Return**: `Number` — 마우스 커서가 위치한 곳의 y 좌표값을 반환합니다.

**Remark**
- ontimer 이벤트에서 getCursorY() 메소드 실행 시 정상적인 좌표값을 반환하지 못합니다.

---

## getMonitorIndex

다중 모니터 일 때 전달된 좌표값에 가장 가까운 모니터의 번호를 반환하는 메소드입니다.

**Syntax**
```javascript
system.getMonitorIndex(nCursorX, nCursorY)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nCursorX` | Number | 스크린의 x 좌표 값을 설정합니다. |
| `nCursorY` | Number | 스크린의 y 좌표 값을 설정합니다. |

**Return**: `Number` — 좌표에 해당하는 모니터 번호를 반환합니다.

**Remark**
- 모니터의 번호는 1 부터 시작합니다.

- 웹브라우저 환경에서는 지원하지 않는 메소드입니다.

---

## getPackageVersion

앱 버전 정보를 반환하는 메소드입니다.

**Syntax**
```javascript
system.getPackageVersion()
```

**Return**: `Array` — Package version code, Package version name을 배열로 반환합니다.  [0] Package version code [1] Package version name

---

## getScreenHeight

어플리케이션이 실행된 스크린의 높이를 반환하는 메소드입니다.

**Syntax**
```javascript
system.getScreenHeight()
```

**Sample**
```javascript
system.getScreenHeight()
```

**Return**: `Number` — 스크린의 높이를 반환합니다.

---

## getScreenPrintString

지정한 컴포넌트를 HTML 문자열 형태로 출력하는 메소드입니다.

**Syntax**
```javascript
system.getScreenPrintString(objComponent)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComponent` | Object | 출력할 컴포넌트를 오브젝트로 설정합니다. |

**Return**: `String` — HTML 문자열을 반환합니다. 실행 환경에 따라 반환되는 HTML 변환 방식이 다릅니다. - WRE: 컴포넌트를 HTML 형태로 변환해 출력 - NRE: 컴포넌트를 Base64 인코딩 데이터로 변환해 img 태그로 출력  출력할 내용이 없거나 objComponet가 잘못 설정된 경우 빈 문자열을 반환합니다.

**Remark**
- WebBrowser, WebView 컴포넌트를 objComponent 파라미터로 설정한 경우 로딩된 콘텐츠가 출력되지 않습니다.

- 컴포넌트에 스크롤바가 활성화된 경우에 화면에 표시되지 않는 영역은 처리되지 않습니다.

◆ 윈도우 운영체제 NRE 제약

- VideoPlayer, Plugin 컴포넌트를 objComponent 파라미터로 설정한 경우 로딩된 콘텐츠가 출력되지 않습니다.

---

## getScreenRect

지정한 모니터의 스크린정보를 Rect 오브젝트로 반환하는 메소드입니다.

**Syntax**
```javascript
system.getScreenRect(nMonitorIndex)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nMonitorIndex` | Number | 스크린정보를 가져올 모니터의 번호를 설정합니다. |

**Return**: `Object` — 인수로 전달된 모니터의 스크린정보를 갖는 Rect 오브젝트를 반환합니다.  Rect 오브젝트는 "left", "top", "right", "bottom", "width", "height" 속성을 갖습니다.

**Remark**
- 모니터의 번호는 1 부터 시작합니다.

---

## getScreenResolution

지정한 모니터의 해상도를 반환하는 메소드입니다.

**Syntax**
```javascript
system.getScreenResolution(nMonitorIndex)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nMonitorIndex` | Number | 해상도를 가져올 모니터의 번호를 설정합니다. |

**Return**: `String` — 지정된 모니터의 해상도값을 문자열로 반환합니다.  잘못된 모니터 번호를 입력 시 "0" 을 반환합니다.

**Remark**
- 모니터의 번호는 1 부터 시작합니다.

---

## getScreenWidth

어플리케이션이 실행된 스크린의 너비를 반환하는 메소드입니다.

**Syntax**
```javascript
system.getScreenWidth()
```

**Sample**
```javascript
system.getScreenWidth()
```

**Return**: `Number` — 스크린의 너비를 반환합니다.

---

## isPrimaryMonitor

다중 모니터 일 때, 지정한 모니터가 주 모니터인지 반환하는 메소드입니다.

**Syntax**
```javascript
system.isPrimaryMonitor(nMonitorIndex)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nMonitorIndex` | Number | 주 모니터 여부를 판단할 모니터의 번호를 설정합니다. |

**Return**: `Boolean` — 지정한 모니터가 주 모니터이면 "true" 를 반환합니다. 지정한 모니터가 주 모니터가 아니면 "false" 를 반환합니다.

**Remark**
- 모니터의 번호는 1 부터 시작합니다.

---

## print

지정한 컴포넌트의 이미지를 프린터로 출력하는 메소드입니다.

**Syntax**
```javascript
system.print( objComponent [, bHideDialog [, strVAlign [, strHAlign [, bFitOnePage [, strOrientation]]]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComponent` | Object | 프린터로 출력할 컴포넌트를 오브젝트로 설정합니다. |
| `bHideDialog` | Boolean | true 설정 시 프린터 설정창으로 표시하지 않고 출력합니다. false 설정 시 프린터로 출력 전에 프린터 설정창을 표시합니다.  값 생략 시 true 로 적용됩니다.  * Desktop WRE 는 지원하지 않으며 항상 false 로 적용됩니다. |
| `strVAlign` | String | 이미지가 용지에 출력될 수직위치를 설정합니다.  "top" 설정 시 이미지가 용지의 상단에 출력됩니다. "middle" 설정 시 이미지가 용지의 중앙에 출력됩니다. "bottom" 설정 시 이미지가 용지의 하단에 출력됩니다.  값 생략 시 "middle" 로 적용됩니다.  * Desktop WRE 는 지원하지 않으며 항상 "top" 으로 적용됩니다. |
| `strHAlign` | String | 이미지가 용지에 출력될 수평위치를 설정합니다.  "left" 설정 시 이미지가 용지의 좌측에 출력됩니다. "center" 설정 시 이미지가 용지의 중앙에 출력됩니다. "right" 설정 시 이미지가 용지의 우측에 출력됩니다.  값 생략 시 "center" 로 적용됩니다.  * Desktop WRE 는 지원하지 않으며 항상 "left" 로 적용됩니다. |
| `bFitOnePage` | Boolean | true 설정 시 이미지가 한페이지를 초과하는 경우 축소하여 한페이지로 출력합니다. true 설정 시 이미지가 한페이지보다 작은 경우 비율에 맞게 확대하여 한페이지로 출력합니다.  false 설정 시 이미지 크기에 맞게 여러페이지로 출력합니다. false 설정 시 strVAlign 은 "top" 으로 적용되고, strHAlign 은 "left" 로 적용됩니다.  값 생략 시 false 로 적용됩니다.  * Desktop WRE 는 지원하지 않으며 항상 false 로 적용됩니다. |
| `strOrientation` | String | 용지가 출력되는 방향을 설정합니다.  "portrait" 설정 시 용지에 세로 방향으로 출력됩니다. "landscape" 설정 시 용지에 가로 방향으로 출력됩니다.  설정값은 bHideDialog 파라미터를 true 로 설정했을 때만 적용됩니다. 값 생략 시 "portrait" 로 적용됩니다.  * Windows NRE 만 지원하는 파라미터입니다. |

**Return**: `Boolean` — 이미지 출력 요청에 성공하면 true 를 반환합니다. 이미지 출력 요청에 실패하면 false 를 반환합니다.  실제 프린트 성공과 관계없이 메소드 호출 성공유무를 반환합니다.

**Remark**
- Grid, ListView 컴포넌트에 표시할 데이터가 많으면 스크롤바가 활성화되고 일부 데이터가 화면에 표시되지 않습니다. 이때 print 메소드의  objComponent 파라미터로 Grid, ListView 컴포넌트를 설정하고 실행하면 화면에 보이는 컴포넌트 영역만 출력합니다.
  Grid, ListView 컴포넌트의 전체 내용을 출력하기 위해서는 컴포넌트의 크기를 데이터에 맞추어 조정해야 합니다. 데이터가 많은 경우에는 ExcelExportObject 오브젝트를 사용해 출력할 파일을 따로 생성하거나 리포팅 툴을 사용해야 합니다.

◆ Desktop WRE 제약

- objComponent 파라미터로 설정된 컴포넌트에 WebBrowser 컴포넌트가 포함되어 있을 경우
   화면에 표시된 Form 전체가 출력되며 스크롤로 가려진 부분은 출력되지 않습니다.

---

## requestDevicePermission

설정한 권한을 요청하는 메소드입니다.

**Syntax**
```javascript
system.requestDevicePermission(arrPermissionTypes[, strDescription])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arrPermissionTypes` | Array | 요청할 권한 목록을 배열 형식으로 설정합니다. 지정할 수 있는 값은 아래와 같습니다.  // 공통  nexacro.DevicePermissionType.CALENDAR: "calendar"  nexacro.DevicePermissionType.CAMERA: "camera"  nexacro.DevicePermissionType.CONTACTS: "contacts"  nexacro.DevicePermissionType.LOCATION: "location"  nexacro.DevicePermissionType.MICROPHONE: "microphone"   // Android  nexacro.DevicePermissionType.PHONE: "phone"  nexacro.DevicePermissionType.SMS: "sms"  nexacro.DevicePermissionType.STORAGE: "storage"  nexacro.DevicePermissionType.NOTIFICATIONS: "notifications"  // iOS  nexacro.DevicePermissionType.PHOTO: "photo"  nexacro.DevicePermissionType.REMINDERS: "reminders" |
| `strDescription` | String | 요청 권한에 대한 설명을 설정합니다. 사용자에 의해 거부된 권한을 요청하는 경우 대화상자에 표시합니다. iOS 운영체제에서는 지원하지 않습니다. |

**Remark**
- 설정 결과는 Environment의 ondevicepermission 이벤트에서 확인할 수 있습니다.
- 메소드를 호출했지만 권한 설정 화면을 볼 수 없을 수가 있습니다.
- iOS는 사용자가 거부한 권한에 대해 요청을 할 수 없습니다.
- 안드로이드는 사용자가 "다시 묻지 않기"를 선택한 후 거부한 권한은 요청할 수 없습니다. 해당 권한은 시스템 설정에서만 변경 가능합니다.

---

## saveToImageBase64String

지정한 컴포넌트의 이미지를 Base64 로 인코딩 된 String 으로 반환하는 메소드입니다.

**Syntax**
```javascript
system.saveToImageBase64String( objComponent [, bWholeForm [,strImageType [,strOptions]]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComponent` | Object | 이미지로 출력할 컴포넌트를 오브젝트 형태로 설정합니다. |
| `bWholeForm` | Boolean | 컴포넌트가 Form 형태인 경우만 설정한 값이 적용됩니다.  true 설정 시 스크롤에 의해 화면에 표시되지 않는 영역을 포함하여 전체 Form 을 이미지로 출력합니다. false 설정 시 현재 화면에 표시된 Form 영역만 이미지로 출력합니다.  값을 설정하지 않으면 false 로 적용됩니다. |
| `strImageType` | String | 출력할 이미지 파일의 형식을 설정합니다. 기본값은 "JPG"로 설정합니다.  "BMP", "BMP_MONO", "JPG", "TIF", "TIF_24", "TIF_MONO", "GIF", "PNG" 를 설정할 수 있습니다. |
| `strOptions` | String | 출력할 이미지 파일의 이미지 압축률, 이미지 압축방식, DPI 해상도를 설정합니다.  압축률은 이미지 형식이 "JPG" 일 때만 지원하며 "Compress:압축비율" 형식으로 설정합니다. 압축비율은 "0~100" 범위의 정수값으로 설정합니다. 이미지 형식이 "JPG" 일 때 값을 설정하지 않으면 50 으로 적용됩니다.  압축방식은 이미지 형식이 "TIF" 일 때만 지원하며 "Compress:압축종류" 형식으로 설정합니다. 압축종류는 "NONE", "LZW", "CCITT3", "CCITT4" 중 하나를 설정합니다. 이미지 형식이 "TIF" 일 때 값을 설정하지 않으면 "LZW" 가 적용됩니다.  DPI 해상도는 가로는 "ResolutionX:해상도" 형식으로, 세로는 "ResolutionY:해상도" 형식으로 설정합니다. 해상도는 정수값으로 설정합니다. 해상도를 설정하지 않으면 가로/세로 모두 96 으로 적용됩니다.  각 옵션은 "Compress:95;ResolutionX:300"와 같이 ";" 문자로 구분하여 설정합니다. |

**Return**: `String` — - 컴포넌트의 이미지를 Base64 로 인코딩 된 문자열로 반환합니다.   인코딩에 실패하였을 경우 빈문자열을 반환합니다.

**Remark**
- 알파(alpha) 채널값을 유지하여 반투명값을 저장하기 위해서는 이미지 형식이 "PNG" 이어야 합니다.
   단, "PNG" 파일의 알파(alpha) 채널값 처리 특성상 배경색이 "black" 이 아닌 경우 이미지에 일부 변형이 있을 수 있습니다.

- 컴포넌트의 모습에 따라 차이가 있으나 대체적으로 각 이미지 형식별 특징은 다음과 같습니다.
   용량 : BMP > TIF > PNG > JPG(100) > GIF > JPG(0)
   품질 : (BMP = PNG) > TIF > JPG(100) > GIF > JPG(0)

- 이미지 압축방식이 "CCITT3"나 "CCITT4"인 경우 ColorDepth 는 무조건 1bit 모노크롬으로 저장됩니다.

- "BMP_MONO", "TIF_MONO" 이미지 형식은 1bit 흑백 모노크롬 이미지로 저장됩니다.

- "TIF_24" 이미지 형식은 24bit RGB 이미지로 저장됩니다.

---

## saveToImageFile

지정한 컴포넌트의 이미지를 파일로 출력하는 메소드입니다.

**Syntax**
```javascript
system.saveToImageFile(objComponent, strFileName, strImageType[,strOptions [,bWholeForm]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComponent` | Object | 이미지 파일로 출력할 컴포넌트를 오브젝트 형태로 설정합니다. |
| `strFileName` | String | 출력할 이미지 파일의 이름을 설정합니다. |
| `strImageType` | String | 출력할 이미지 파일의 형식을 설정합니다. "BMP", "BMP_MONO", "JPG", "TIF", "TIF_24", "TIF_MONO", "GIF", "PNG" 를 설정할 수 있습니다.  안드로이드 NRE에서는 "JPG", "PNG" 형식만 지원합니다. |
| `strOptions` | String | 출력할 이미지 파일의 이미지 압축률, 이미지 압축방식, DPI 해상도를 설정합니다.  압축률은 이미지 형식이 "JPG" 일 때만 지원하며 "Compress:압축비율" 형식으로 설정합니다. 압축비율은 "0~100" 범위의 정수값으로 설정합니다. 이미지 형식이 "JPG" 일 때 값을 설정하지 않으면 50 으로 적용됩니다.  압축방식은 이미지 형식이 "TIF" 일 때만 지원하며 "Compress:압축종류" 형식으로 설정합니다. 압축종류는 "NONE", "LZW", "CCITT3", "CCITT4" 중 하나를 설정합니다. 이미지 형식이 "TIF" 일 때 값을 설정하지 않으면 "LZW" 가 적용됩니다.  DPI 해상도는 가로는 "ResolutionX:해상도" 형식으로, 세로는 "ResolutionY:해상도" 형식으로 설정합니다. 해상도는 정수값으로 설정합니다. 해상도를 설정하지 않으면 가로/세로 모두 96 으로 적용됩니다.  각 옵션은 "Compress:95;ResolutionX:300"와 같이 ";" 문자로 구분하여 설정합니다. |
| `bWholeForm` | Boolean | 컴포넌트가 Form 형태인 경우만 설정한 값이 적용됩니다.  true 설정 시 스크롤에 의해 화면에 표시되지 않는 영역을 포함하여 전체 Form 을 이미지로 출력합니다. false 설정 시 현재 화면에 표시된 Form 영역만 이미지로 출력합니다.  값을 설정하지 않으면 false 로 적용됩니다. |

**Return**: `Boolean` — 이미지 출력에 성공하면 true 를 반환합니다.  이미지 출력에 실패하면 false 를 반환합니다.

**Remark**
- strFileName 에 설정할 수 있는 값은 OS 의 보안정책에 따라 달라집니다.

- 알파(alpha) 채널값을 유지하여 반투명값을 저장하기 위해서는 이미지 형식이 "PNG" 이어야 합니다.
   단, "PNG" 파일의 알파(alpha) 채널값 처리 특성상 배경색이 "black" 이 아닌 경우 이미지에 일부 변형이 있을 수 있습니다.

- 컴포넌트의 모습에 따라 차이가 있으나 대체적으로 각 이미지 형식별 특징은 다음과 같습니다.
   용량 : BMP > TIF > PNG > JPG(100) > GIF > JPG(0)
   품질 : (BMP = PNG) > TIF > JPG(100) > GIF > JPG(0)

- 이미지 압축방식이 "CCITT3"나 "CCITT4"인 경우 ColorDepth 는 무조건 1bit 모노크롬으로 저장됩니다.

- "BMP_MONO", "TIF_MONO" 이미지 형식은 1bit 흑백 모노크롬 이미지로 저장됩니다.

- "TIF_24" 이미지 형식은 24bit RGB 이미지로 저장됩니다.

- 파일 저장 시 애플리케이션 샌드박스 정책이 적용됩니다.
- 운영체제별 이미지 파일 저장 위치는 아래와 같습니다.
  - Windows NRE: 내문서
  - macOS NRE: 내문서
  - Android NRE:
     - targetSdkVersion 29 이하: /storage/emulated/0/
     - targetSdkVersion 30 이상: /storage/emulated/0/Pictures/

---

## screenToClientX

스크린 기준의 x 좌표값을 컴포넌트의 클라이언트 기준 x 좌표값으로 반환하는 메소드입니다.

**Syntax**
```javascript
system.screenToClientX(objComp, nPosX)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 변환될 x 좌표값의 기준이 되는 컴포넌트를 설정합니다. |
| `nPosX` | Number | 변환할 스크린 기준의 x 좌표값을 설정합니다. |

**Return**: `Number` — 컴포넌트의 클라이언트 기준 x 좌표값을 반환합니다.

**Remark**
- 컴포넌트의 클라이언트 기준 좌표이므로 border 속성과 같이 클라이언트 영역이 아닌 부분은 계산에서 제외됩니다.
  예를 들어 클라이언트 기준 좌표계에서 좌표값(0,0)은 border 내부의 왼쪽상단 영역을 의미합니다.

---

## screenToClientY

스크린 기준의 y 좌표값을 컴포넌트의 클라이언트 기준 y 좌표값으로 반환하는 메소드입니다.

**Syntax**
```javascript
system.screenToClientY(objComp, nPosY)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objComp` | Object | 변환될 y 좌표값의 기준이 되는 컴포넌트를 설정합니다. |
| `nPosY` | Number | 변환할 스크린 기준의 y 좌표값을 설정합니다. |

**Return**: `Number` — 컴포넌트의 클라이언트 기준 y 좌표값을 반환합니다.

**Remark**
- 컴포넌트의 클라이언트 기준 좌표이므로 border 속성과 같이 클라이언트 영역이 아닌 부분은 계산에서 제외됩니다.
  예를 들어 클라이언트 기준 좌표계에서 좌표값(0,0)은 border 내부의 왼쪽상단 영역을 의미합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다. 
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.

---

## setClipboard

시스템의 클립보드에 지정된 형식으로 데이터를 저장하는 메소드입니다.

**Syntax**
```javascript
system.setClipboard( strFormat, varData )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strFormat` | String | 시스템 클립보드에 데이터를 저장할 때 적용할 형식을 문자열로 설정합니다.  "CF_TEXT" 설정 시 데이터를 텍스트 형식으로 저장합니다. "CF_UNICODETEXT" 설정 시 데이터를 유니코드 텍스트 형식으로 저장합니다. "CF_CSV" 설정 시 데이터를 CSV 형식으로 저장합니다. |
| `varData` | String | 저장할 데이터를 설정합니다. |

**Remark**
◆ NRE 제약 
- 모바일 NRE는 "CF_TEXT" 형식만 지원합니다.

◆ WRE 제약 
- web runtime environment 는 "CF_TEXT" 형식만 지원합니다.
- Edge, Chrome, FireFox, Opera 브라우저는 https 또는 localhost 통신 인 경우만 setClipboard() 메소드가 정상동작 합니다.

---

## showModalSync

동적으로 생성한 ChildFrame 을 Sync 로 동작하는 Modal 형태로 표시하는 메소드입니다.

**Syntax**
```javascript
system.showModalSync( objChildframe [, strID ] , objParentFrame, [{objArguList} [, objOpener]] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objChildframe` | Object | Modal 로 표시할 ChildFrame 을 오브젝트로 설정합니다. |
| `strID` | String | Modal 로 표시할 ChildFrame 의 ID 를 문자열로 설정합니다.  값 생략 시 objChildFrame 에 설정된 ChildFrame 의 name 속성값이 설정됩니다. |
| `objParentFrame` | Object | Modal 로 표시할 ChildFrame 의 부모 Frame 을 Object 형태로 설정합니다.  null 설정 시 MainFrame 이 부모로 설정됩니다. |
| `objArguList` | Object | Modal 로 표시할 ChildFrame 에 추가될 변수리스트를 "{변수명:변수값 , 변수명:변수값}" 형식으로 설정합니다. |
| `objOpener` | Object | Modal 로 표시할 ChildFrame 의 Opener 로 설정될 Form 을 오브젝트로 설정합니다.  값 생략 시 objParentFrame 파라미터에 설정된 Frame 의 Form 이 설정됩니다. objParentFrame 파라미터를 null 로 설정하면 undefined 가 설정됩니다. |

**Return**: `Boolean` — Modal 로 표시된 ChildFrame 이 종료된 후 성공/실패 여부를 반환합니다.

**Remark**
* 동적 생성 처리 방식

- showModalSync() 메소드는 스크립트에서 동적으로 생성한 ChildFrame 만 사용할 수 있습니다.
   동적으로 생성한 ChildFrame 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 ChildFrame 은 autosize 속성값에 따라 표시되는 Modal 의 크기가 결정됩니다.
   autosize 속성값을 설정하지 않으면 true 로 적용됩니다.


* 파라미터 설정 시 참고사항

- objArguList 파라미터로 설정한 변수값은 Modal 로 표시된 ChildFrame 에서 "this.parent.[변수명]" 형태로 접근할 수 있습니다.

- strID 파라미터는 getPopupFrames() 메소드에서 결과값으로 받은 Collection 에 인자로 사용할 수 있습니다.


* 기타 참고사항

- showModalSync() 는 메소드 호출 위치에서 스크립트가 중지되었다가 Modal 종료 후 다음 스크립트가 수행됩니다.
   Modal 의 표시와 관계없이 메소드 호출 이후의 스크립트를 계속해서 수행하려면 showModal() 메소드를 사용하여야 합니다.

- showModalSync() 메소드 실행 시 objParentFrame 파라미터에 설정한 Frame 이 속한 Window 의 팝업 리스트에 Modal 로 표시된 ChildFrame 이 추가됩니다.
   또한, Modal 로 표시된 ChildFrame 이 종료되면 자동으로 팝업 리스트에서 제거되고 내부적으로 destroy 까지 수행됩니다.

- Modal 로 표시될 ChildFrame 의 left, top 속성값이 음수일 경우 0 으로 적용됩니다.
   또한, Modal 창이 표시될 공간이 부족한 경우 TitleBar 가 표시되도록 left, top 위치가 보정됩니다.

- objParentFrame 파라미터에 설정한 Frame 이 속한 window 영역을 기준으로 Modal 이 표시됩니다.
   objParentFrame 파라미터에 설정한 Frame 이 Modeless 인 경우 해당 Frame 이 포함된 Window 를 기준으로 표시됩니다.
   objParentFrame 파라미터에 null 이 설정된 경우 MainFrame 을 기준으로 표시됩니다.

- Modal 로 표시될 ChildFrame 의 openstatus 속성값을 "minimize" 로 설정해도 "normal" 로 표시됩니다.

---

## showModalWindow

동적으로 생성한 ChildFrame 을 별도의 Modal Window 로 표시하는 메소드입니다.

**Syntax**
```javascript
system.showModalWindow( objChildFrame [, strID] , objParentFrame[, {objArguList} [, objOpener]] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objChildFrame` | Object | Modal Window 로 표시할 ChildFrame 을 오브젝트로 설정합니다. |
| `strID` | String | Modal Window 로 표시할 ChildFrame 의 ID 를 문자열로 설정합니다.  값 생략 시 objChildFrame 에 설정된 ChildFrame 의 name 속성값이 설정됩니다. |
| `objParentFrame` | Object | Modal Window 로 표시할 ChildFrame 의 부모 Frame 을 Object 형태로 설정합니다.  null 설정 시 부모가 설정되지 않습니다.  ChildFrame 이외의 Object 설정 시 부모 Frame 을 사용할 수 없다는 의미의 OverLay Color 가 표시되지 않습니다. |
| `objArguList` | Object | Modal Window 로 표시할 ChildFrame 에 추가될 변수리스트를 "{변수명:변수값 , 변수명:변수값}" 형식으로 설정합니다. |
| `objOpener` | Object | Modal Window 로 표시할 ChildFrame 의 Opener 로 설정될 Form 을 오브젝트로 설정합니다.  값 생략 시 objParentFrame 에 설정된 Frame 의 Form 오브젝트가 설정됩니다. objParentFrame 파라미터를 null 로 설정하면 undefined 가 설정됩니다. |

**Return**: `String` — Modal Window 로 표시된 ChildFrame 에서 close() 메소드에 설정한 파라미터값을 반환합니다.

**Remark**
- showModalWindow() 메소드는 Sync 로 동작합니다.
   따라서 메소드 실행 시 스크립트 수행이 일시 중지되었다가 Modal Window 종료 시 다음 스크립트가 수행됩니다.

- showModalWindow() 메소드는 Modal Window 를 표시하므로 메소드 실행 이전에 열려있는 화면은 모두 사용불가 상태가 됩니다.

- showModalWindow() 메소드로 표시된 Modal Window 는 부모영역과 관계없이 스크린 내에서 이동이 가능합니다.
   showModal() 메소드로 표시된 Modal 은 부모 영역 내에서만 이동이 가능합니다.

- objArguList 파라미터로 설정한 변수값은 Modal Window 로 표시된 ChildFrame 에서 "this.parent.[변수명]" 형태로 접근할 수 있습니다.

---
