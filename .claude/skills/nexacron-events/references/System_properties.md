# System Properties

| Property | Description |
|----------|-------------|
| `computername` | 어플리케이션이 실행된 컴퓨터의 NetBIOS 이름을 갖는 읽기전용 속성입니다. |
| `cpuarchitecture` | 어플리케이션이 실행된 컴퓨터의 CPU 제조사 이름을 갖는 읽기전용 속성입니다. |
| `cpucount` | 어플리케이션이 실행된 컴퓨터의 CPU 갯수를 갖는 읽기전용 속성입니다. |
| `cputype` | 어플리케이션이 실행된 컴퓨터의 CPU 종류 정보를 갖는 읽기전용 속성입니다. |
| `locale` | 어플리케이션이 실행된 컴퓨터의 locale 코드값을 갖는 읽기전용 속성입니다. |
| `loginuser` | 어플리케이션이 실행된 컴퓨터에 로그인된 사용자의 ID 를 갖는 읽기전용 속성입니다. |
| `mobileorientation` | 어플리케이션이 실행된 모바일 기기의 현재 방향정보를 갖는 읽기전용 속성입니다. |
| `mobileproducttype` | 어플리케이션이 실행된 모바일 기기의 기종명을 갖는 읽기전용 속성입니다. |
| `monitorcount` | 어플리케이션이 실행된 컴퓨터의 모니터 갯수를 갖는 읽기전용 속성입니다. |
| `navigatorfullname` | 어플리케이션이 실행된 Windows 넥사크로의 엔진종류를 갖는 읽기전용 속성입니다. |
| `navigatorname` | 어플리케이션이 실행된 브라우저 정보를 갖는 읽기전용 속성입니다. |
| `navigatorversion` | 어플리케이션이 실행된 브라우저의 버전을 갖는 읽기전용 속성입니다. |
| `notificationtoken` | 어플리케이션이 실행된 모바일 기기에서 Push 알림을 받기 위한 Device Token 값을 갖는 읽기전용 속성입니다. |
| `osversion` | 어플리케이션이 실행된 환경의 운영체제 명칭과 버전을 갖는 읽기전용 속성입니다. |
| `taskbarsize` | 어플리케이션이 실행된 모바일 기기의 TaskBar(Android 는 IndicatorBar)의 크기를 갖는 읽기전용 속성입니다. |

---

## computername

어플리케이션이 실행된 컴퓨터의 NetBIOS 이름을 갖는 읽기전용 속성입니다.

**Remark**
- 어플리케이션이 시작될 때 레지스트리에서 정보를 읽어와 저장합니다.

---

## cpuarchitecture

어플리케이션이 실행된 컴퓨터의 CPU 제조사 이름을 갖는 읽기전용 속성입니다.

**Remark**
- CPU 제조사 얻기에 실패했을 경우 "UNKNOWN" 값을 갖습니다.

---

## cpucount

어플리케이션이 실행된 컴퓨터의 CPU 갯수를 갖는 읽기전용 속성입니다.

---

## cputype

어플리케이션이 실행된 컴퓨터의 CPU 종류 정보를 갖는 읽기전용 속성입니다.

**Remark**
- Processor Architecture, Processor Level, Processor Revision 정보가 순서대로 공백으로 구분되어 저장됩니다.

- CPU 종류 정보얻기에 실패했을 경우 "UNKNOWN PROCESSOR" 값을 갖습니다.

---

## locale

어플리케이션이 실행된 컴퓨터의 locale 코드값을 갖는 읽기전용 속성입니다.

**Remark**
- locale은 "language[_country]"  형식으로 작성된 문자열입니다.
  "language" 는 ISO 639-1에서 정의하고 있는 2-알파벳 Language 코드이고,
  "country" 는 ISO 3166-1에서 정의하고 있는 2-알파벳 Country 코드입니다.

- 국가 및 언어 코드는 "Appendix > Locale Code List" 항목을 참고하세요.

---

## loginuser

어플리케이션이 실행된 컴퓨터에 로그인된 사용자의 ID 를 갖는 읽기전용 속성입니다.

---

## mobileorientation

어플리케이션이 실행된 모바일 기기의 현재 방향정보를 갖는 읽기전용 속성입니다.

**Remark**
- "Portrait" 일 경우 "0" 값을 갖습니다.
  "Reverse Portrait" 일 경우 "1" 값을 갖습니다.
  "LandScape Left" 일 경우 "2" 값을 갖습니다.
  "LandScape Right" 일 경우 "3" 값을 갖습니다.

---

## mobileproducttype

어플리케이션이 실행된 모바일 기기의 기종명을 갖는 읽기전용 속성입니다.

**Remark**
- 모바일 기기의 기종명 또는 제조코드를 반환하며 형식은 각 제조사에 따라 다를 수 있습니다.
  예) "SHV-E160K", "iPhone"

- PC에서 실행하는 경우에는 빈값을 반환합니다.

---

## monitorcount

어플리케이션이 실행된 컴퓨터의 모니터 갯수를 갖는 읽기전용 속성입니다.

---

## navigatorfullname

어플리케이션이 실행된 Windows 넥사크로의 엔진종류를 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
Windows 넥사크로가 64bit 버전일 때 "Nexacro N Engine (x64)" 값을 갖습니다.
```

**Remark**
- Windows NRE 만 지원하는 속성입니다.

---

## navigatorname

어플리케이션이 실행된 브라우저 정보를 갖는 읽기전용 속성입니다.

**Remark**
- "nexacro", "IE", "Chrome", "Gecko" 등의 값을 갖습니다.

---

## navigatorversion

어플리케이션이 실행된 브라우저의 버전을 갖는 읽기전용 속성입니다.

**Remark**
- 버전명 전체를 반환하지 않고 메이저 버전만 반환합니다.
  예를 들어 사용하는 웹브라우저가 구글 크롬이고 버전이 '28.0.1500.95'라면 '28'만 반환합니다.

---

## notificationtoken

어플리케이션이 실행된 모바일 기기에서 Push 알림을 받기 위한 Device Token 값을 갖는 읽기전용 속성입니다.

---

## osversion

어플리케이션이 실행된 환경의 운영체제 명칭과 버전을 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var osVersion = system.osversion;
```

**Remark**
- "Android 2.3", "iOS 6", "Windows 7", "Windows Vista" 등의 값을 갖습니다.

◆ WRE 제약

- WRE 실행 시 Chromium 기반 브라우저(Edge, Chrome, Opera)의 User-Agent Reduction 반영에 따라 최신 버전에서는 실행 환경과 통신 프로토콜에 따라 실제 운영체제와 다른 값이 속성값으로 처리되며 정상적인 동작을 보장하지 못할 수 있습니다.
  * 참고: https://www.chromium.org/updates/ua-reduction/

  - HTTPS 통신: 실제 운영체제 정보가 포함된 문자열을 속성값으로 가집니다.
  - HTTP 통신: 실제 운영체제 버전 정보가 아닌 고정된 문자열을 속성값으로 가집니다.
     Windows(Edge, Chrome, Opera): "Windows 10"
     macOS(Chrome): "Mac OS 10.15.7"
     Android(Chrome, Opera): "Android 10"
        * HTTP 통신 시 Android 운영체제에서 화면 로딩, 화면 회전 시 화면 비율이 확대 또는 축소될 수 있습니다.

---

## taskbarsize

어플리케이션이 실행된 모바일 기기의 TaskBar(Android 는 IndicatorBar)의 크기를 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
var nTask = system.taskbarsize;
```

**Remark**
- Taskbar(IndicatorBar) 의 표시 유무와 상관없이 기본 TaskBar 의 크기를 갖습니다.

---
