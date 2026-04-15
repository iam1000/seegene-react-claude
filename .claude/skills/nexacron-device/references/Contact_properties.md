# Contact Properties

| Property | Description |
|----------|-------------|
| `addresses` | 연락처의 주소정보를 ContactAddress 객체의 배열로 설정하는 속성입니다. |
| `birthday` | 연락처의 생년월일을 설정하는 속성입니다. |
| `categories` | 연락처의 구분정보를 ContactField 객체의 배열로 설정하는 속성입니다. |
| `contactname` | 연락처의 이름을 하위속성으로 갖는 읽기전용 속성입니다. |
| `emails` | 연락처의 이메일정보를 ContactField 객체의 배열로 설정하는 속성입니다. |
| `id` | Contact의 고유 식별자를 설정하는 속성입니다. |
| `ims` | 연락처의 IM(Instant Messenger)정보를 ContactIM 객체의 배열로 설정하는 속성입니다. |
| `name` | Contact 의 이름을 설정하는 속성입니다. |
| `nickname` | 연락처의 별명을 설정하는 속성입니다. |
| `note` | 연락처의 메모정보를 설정하는 속성입니다. |
| `organizations` | 연락처의 회사정보를 ContactOrganization 객체의 배열로 설정하는 속성입니다. |
| `phonenumbers` | 연락처의 전화번호정보를 ContactField 객체의 배열로 설정하는 속성입니다. |
| `photos` | 연락처의 사진정보를 ContactPhoto 객체의 배열로 설정하는 속성입니다. |
| `uniqueid` | 연락처의 식별자(id) 값을 갖는 읽기전용 속성입니다. |
| `urls` | 연락처의 웹페이지주소정보를 ContactField 객체의 배열로 설정하는 속성입니다. |

---

## addresses

연락처의 주소정보를 ContactAddress 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
ContactAddress 객체의 배열을 설정합니다.
```

---

## birthday

연락처의 생년월일을 설정하는 속성입니다.

**Setting Syntax**
```javascript
Date 타입의 자료형으로 날짜를 설정합니다.
```

---

## categories

연락처의 구분정보를 ContactField 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
ContactField 객체의 배열을 설정합니다.
```

---

## contactname

연락처의 이름을 하위속성으로 갖는 읽기전용 속성입니다.

**Setting Syntax**
```javascript
familyname 하위속성에 이름의 "성"을 설정합니다.
givenname 하위속성에 "이름"을 설정합니다.
middlename 하위속성에 이름의 "중간이름"을 설정합니다.
prefix 하위속성에 이름 앞에 붙는 "호칭"을 설정합니다.
suffix 하위속성에 이름 뒤에 붙는 "호칭"을 설정합니다.

displayname 하위속성에 나머지 하위속성값이 조합되어 자동으로 설정됩니다.
```

**Remark**
- 모바일 기기에 따라 사용 가능한 하위속성이 다를 수 있습니다.
  또한, 모바일 기기에 따라 설정한 값이 표시되지 않을 수 있습니다.

---

## emails

연락처의 이메일정보를 ContactField 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
ContactField 객체의 배열을 설정합니다.
```

**Remark**
- 허용되는 타입에 한해서 1개 이상 중복하여 설정 및 조회가 가능합니다.
  단, 설정된 값을 모바일 기기의 기본 연락처 어플리케이션에서 조회시 기종에 따라 표현되는 방식은 상이할 수 있습니다.


◆ 사용가능한 타입

Android : 
0 TYPE_CUSTOM
4 TYPE_HOME
6 TYPE_MOBILE
7 TYPE_OTHER
10 TYPE_WORK

iOS :
0 TYPE_CUSTOM
2 TYPE_FAX_HOME
3 TYPE_FAX_WORK
4 TYPE_HOME
5 TYPE_MAIN
6 TYPE_MOBILE
7 TYPE_OTHER
8 TYPE_OTHER_FAX
9 TYPE_PAGER
10 TYPE_WORK
11 TYPE_IPHONE
12 TYPE_HOMEPAGE

---

## id

Contact의 고유 식별자를 설정하는 속성입니다.

**Syntax**
```javascript
Contact.id
```

**Setting Syntax**
```javascript
Contact를 구별할 수 있는 유일값을 갖습니다.
```

**Remark**
-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## ims

연락처의 IM(Instant Messenger)정보를 ContactIM 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
ContactIM 객체의 배열을 설정합니다.
```

---

## name

Contact 의 이름을 설정하는 속성입니다.

**Syntax**
```javascript
Contact.set_name(strName) // set
Contact.name // get
```

**Setting Syntax**
```javascript
컴포넌트의 이름을 설정합니다.
```

**Remark**
- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.

---

## nickname

연락처의 별명을 설정하는 속성입니다.

**Setting Syntax**
```javascript
연락처의 별명으로 사용될 텍스트를 설정합니다.
```

---

## note

연락처의 메모정보를 설정하는 속성입니다.

**Setting Syntax**
```javascript
연락처의 메모정보를 문자열로 설정합니다.
```

---

## organizations

연락처의 회사정보를 ContactOrganization 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
ContactOrganization 객체의 배열을 설정합니다.
```

**Remark**
- 허용되는 타입에 한해서 1개 이상 중복하여 설정 및 조회가 가능합니다.
  단, 설정된 값을 모바일 기기의 기본 연락처 어플리케이션에서 조회시 기종에 따라 표현되는 방식은 상이할 수 있습니다.


◆ 사용가능한 타입

Android : 
0 TYPE_CUSTOM
7 TYPE_OTHER
10 TYPE_WORK

iOS :
10 TYPE_WORK

---

## phonenumbers

연락처의 전화번호정보를 ContactField 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
ContactField 객체의 배열을 설정합니다.
```

**Remark**
- 허용되는 타입에 한해서 1개 이상 중복하여 설정 및 조회가 가능합니다.
  단, 설정된 값을 모바일 기기의 기본 연락처 어플리케이션에서 조회시 기종에 따라 표현되는 방식은 상이할 수 있습니다.


◆ 사용가능한 타입

Android : 
0 TYPE_CUSTOM
1 TYPE_CALLBACK
2 TYPE_FAX_HOME
3 TYPE_FAX_WORK
4 TYPE_HOME
6 TYPE_MOBILE
7 TYPE_OTHER
9 TYPE_PAGER
10 TYPE_WORK

iOS :
0 TYPE_CUSTOM
2 TYPE_FAX_HOME
3 TYPE_FAX_WORK
4 TYPE_HOME
5 TYPE_MAIN
6 TYPE_MOBILE
7 TYPE_OTHER
8 TYPE_OTHER_FAX
9 TYPE_PAGER
10 TYPE_WORK
11 TYPE_IPHONE
12 TYPE_HOMEPAGE

---

## photos

연락처의 사진정보를 ContactPhoto 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
ContactPhotos 객체의 배열을 설정합니다.
```

**Remark**
- 현재 출시된 iOS와 Android 버젼에서는 1개의 사진만 사용이 가능합니다.
  모바일 기기의 확장 가능성을 고려하여 배열구조로 설정하도록 되어 있습니다.

---

## uniqueid

연락처의 식별자(id) 값을 갖는 읽기전용 속성입니다.

**Remark**
- 모바일 기기의 연락처 종류에 따라 저장되는 값이 다릅니다.

---

## urls

연락처의 웹페이지주소정보를 ContactField 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**
```javascript
ContactField 객체의 배열을 설정합니다.
```

**Remark**
- 허용되는 타입에 한해서 1개 이상 중복하여 설정 및 조회가 가능합니다.
  단, 설정된 값을 모바일 기기의 기본 연락처 어플리케이션에서 조회시 기종에 따라 표현되는 방식은 상이할 수 있습니다.

- Android에서는 ContactField 객체의 type 속성에 "12"(TYPE_HOMEPAGE) 만 설정이 가능합니다.

---
