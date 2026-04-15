# Sms Methods

| Method | Description |
|--------|-------------|
| `deleteMessage()` | 모바일 기기에 저장되어 있는 SMS 에서 지정한 메시지를 삭제하는 메소드입니다. |
| `readMessageList()` | 모바일 기기에 저장되어 있는 SMS 목록을 반환하는 메소드입니다. |
| `recvStart()` | 모바일 기기에서 SMS 수신 시 이벤트를 발생시키도록 설정하는 메소드입니다. |
| `recvStop()` | recvStart() 메소드로 설정한 이벤트 발생 기능을 종료하는 메소드입니다. |
| `sendMessage()` | 모바일 기기에서 문자 메시지 전송을 위해 SMS 작성화면을 표시하는 메소드입니다. |

---

## deleteMessage

모바일 기기에 저장되어 있는 SMS 에서 지정한 메시지를 삭제하는 메소드입니다.

**Syntax**
```javascript
Sms.deleteMessage(nSmsid)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nSmsid` | Number | 저장되어 있는 SMS 에서 삭제할 메시지의 인덱스값을 설정합니다.  readMessageList() 메소드를 사용하여 반환되는 SMS 목록에서 인덱스값을 확인합니다. |

**Return**: `Boolean` — nSmsid 가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

- Android KitKat v4.4 버전 이상의 디바이스는 기본 SMS 앱에서만 SMS 메시지를 삭제할 수 있습니다.
   따라서 deleteMessage() 메소드는 Android KitKat v4.4 미만 버전까지 사용할 수 있습니다.

---

## readMessageList

모바일 기기에 저장되어 있는 SMS 목록을 반환하는 메소드입니다.

**Syntax**
```javascript
Sms.readMessageList()
```

**Sample**
```javascript
this.Sms00.readMessageList();
```

**Remark**
- readMessageList() 메소드가 정상적으로 수행되면 onreadmessagelist 이벤트가 발생합니다.

- 저장된 SMS 의 텍스트만 반환됩니다.

- Android NRE 는 기기에서 SMS 접근경로를 공개한 경우만 지원가능합니다.
  (지원되지 않는 기기의 경우 onreadmessagelist 이벤트에서 빈 값의 목록을 전달 받습니다)

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

---

## recvStart

모바일 기기에서 SMS 수신 시 이벤트를 발생시키도록 설정하는 메소드입니다.

**Syntax**
```javascript
Sms.recvStart()
```

**Sample**
```javascript
this.Sms00.recvStart();
```

**Remark**
- SMS 가 정상적으로 수신될 때마다 onrecvmessage 이벤트가 발생합니다.
   SMS 수신 시 에러가 발생하면 onerror 이벤트가 발생합니다.

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

---

## recvStop

recvStart() 메소드로 설정한 이벤트 발생 기능을 종료하는 메소드입니다.

**Syntax**
```javascript
Sms.recvStop()
```

**Sample**
```javascript
this.Sms00.recvStop()
```

**Remark**
- SMS 수신에 따른 이벤트 발생을 중지합니다.

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

---

## sendMessage

모바일 기기에서 문자 메시지 전송을 위해 SMS 작성화면을 표시하는 메소드입니다.

**Syntax**
```javascript
Sms.sendMessage([strNumber [,strMessage]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strNumber` | String | 메시지를 보낼 상대의 전화번호를 문자열로 설정합니다.  값 생략 시 phonenumber 속성값이 적용됩니다. |
| `strMessage` | String | 상대에게 전송할 메시지를 문자열로 설정합니다.  값 생략 시 message 속성값이 적용됩니다. |

**Return**: `Boolean` — 파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다. 그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- MMS 또는 이메일을 전송할 수 있습니다.

- sendMessage() 메소드 수행 시 모바일 기기의 SMS 작성화면이 호출되며, 메시지의 발송여부 또는 전달여부를 이벤트로 확인할 수 없습니다.

- iPad 계열의 디바이스에서는 지원하지 않는 메소드입니다.

---
