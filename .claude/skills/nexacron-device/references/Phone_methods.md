# Phone Methods

| Method | Description |
|--------|-------------|
| `makeCall()` | 모바일 기기에서 인수로 전달된 번호로 전화연결 화면을 표시하는 정적 메소드입니다. |

---

## makeCall

모바일 기기에서 인수로 전달된 번호로 전화연결 화면을 표시하는 정적 메소드입니다.

**Syntax**
```javascript
Phone.makeCall( strPhoneNumber [, bAutoDialing] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strPhoneNumber` | String | 전화를 연결할 상대방의 전화번호를 문자열로 설정합니다. |
| `bAutoDialing` | Boolean | true 설정 시 전화연결화면으로 전환 후 전화걸기가 자동으로 진행됩니다. false 설정 시 전화연결화면으로 전환만 되고 전화걸기가 자동으로 진행되지 않습니다.  값 생략 시 false 로 적용됩니다. iOS/iPadOS NRE 는 설정값에 관계없이 false 로 적용됩니다. |

**Return**: `Boolean` — strPhoneNumber 가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.  그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**
- 통화기능이 없는 모바일 기기에서 makeCall() 메소드를 수행하거나 전화걸기가 실패하는 경우에는 모바일 기기의 오류 처리 방식을 따릅니다.

---
