# Sms Events

| Event | Description |
|-------|-------------|
| `cansendmessage` | 모바일 기기에서 SMS 메시지가 송신될 때 발생하는 이벤트입니다. |
| `ondeletemessage` | 모바일 기기에 저장되어 있는 SMS 가 삭제될 때 발생하는 이벤트입니다. |
| `onerror` | 모바일 기기에서 SMS 관련 처리가 실패했을 때 발생하는 이벤트입니다. |
| `onreadmessagelist` | 모바일 기기에 저장되어 있는 SMS 목록을 조회할 때 발생하는 이벤트입니다. |
| `onrecvmessage` | 모바일 기기에서 SMS 메시지가 수신될 때 발생하는 이벤트입니다. |
| `onsendmessage` | 모바일 기기에서 SMS 메시지가 송신된 후 발생하는 이벤트입니다. |

---

## cansendmessage

모바일 기기에서 SMS 메시지가 송신될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
cansendmessage(obj:nexacro.Sms,e:nexacro.SmsEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Sms | Event가 발생한 Object. |
| `e` | SmsEventInfo | Event Object. |

---

## ondeletemessage

모바일 기기에 저장되어 있는 SMS 가 삭제될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
ondeletemessage(obj:nexacro.Sms,e:nexacro.SmsEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Sms | Event가 발생한 Object. |
| `e` | SmsEventInfo | Event Object. |

**Remark**
- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

---

## onerror

모바일 기기에서 SMS 관련 처리가 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.Sms,e:nexacro.SmsErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Sms | Event가 발생한 Object. |
| `e` | SmsErrorEventInfo | Event Object. |

**Remark**
- iOS/iPadOS 는 메시지 발신 시 성공/실패 여부를 확인할 수 없어 발신에 실패하더라도 onerror 이벤트가 발생하지 않습니다.

---

## onreadmessagelist

모바일 기기에 저장되어 있는 SMS 목록을 조회할 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onreadmessagelist(obj:nexacro.Sms,e:nexacro.SmsMessageListEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Sms | Event가 발생한 Object. |
| `e` | SmsMessageListEventInfo | Event Object. |

**Remark**
- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

---

## onrecvmessage

모바일 기기에서 SMS 메시지가 수신될 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onrecvmessage(obj:nexacro.Sms,e:nexacro.SmsEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Sms | Event가 발생한 Object. |
| `e` | SmsEventInfo | Event Object. |

**Remark**
- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

---

## onsendmessage

모바일 기기에서 SMS 메시지가 송신된 후 발생하는 이벤트입니다.

**Syntax**
```javascript
onsendmessage(obj:nexacro.Sms,e:nexacro.SmsEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | Sms | Event가 발생한 Object. |
| `e` | SmsEventInfo | Event Object. |

---
