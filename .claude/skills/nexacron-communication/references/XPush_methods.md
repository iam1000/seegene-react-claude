# XPush Methods

| Method | Description |
|--------|-------------|
| `connect()` | X-PUSH 서버와 연결을 수행하는 메소드입니다. |
| `disconnect()` | X-PUSH 서버의 연결을 해제하는 메소드입니다. |
| `getCurrentIP()` | 현재 접속중인 X-PUSH 서버의 IP값을 반환하는 메소드입니다. |
| `getCurrentPort()` | 현재 접속중인 X-PUSH 서버의 Port 값을 반환하는 메소드입니다. |
| `getRegisteredTopics()` | 신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 등록한 Topic 정보를 요청하는 메소드입니다. |
| `getRegisteredTopicsWithUserID()` | 신뢰성 메시지가 특정 사용자에게 수신될 수 있도록 X-PUSH 서버에 등록한 Topic 정보를 요청하는 메소드입니다. |
| `registerDevice()` | 모바일에서 Notification 을 받기 위해 DeviceToken 값을 X-PUSH 서버에 등록하는 메소드입니다. |
| `registerTopic()` | 신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 Topic 을 등록하는 메소드입니다. |
| `registerTopicWithUserID()` | 신뢰성 메시지가 특정 사용자에게 수신될 수 있도록 X-PUSH 서버에 Topic 을 등록하는 메소드입니다. |
| `requestMessage()` | X-PUSH 서버에서 미수신한 신뢰성 메시지를 요청하는 메소드입니다. |
| `requestMessageCount()` | X-PUSH 서버에서 미수신한 신뢰성 메시지의 갯수를 요청하는 메소드입니다. |
| `requestMessageCountWithUserID()` | 특정 사용자가 미수신한 신뢰성 메시지의 갯수를 X-PUSH 서버에 요청하는 메소드입니다. |
| `sendResponse()` | X-PUSH 서버에서 수신한 신뢰성 메시지에 대한 수신응답을 보내는 메소드입니다. |
| `subscribe()` | 메시지를 받기 위해 연결된 X-PUSH 서버에 Topic 을 등록하는 메소드입니다. |
| `unregisterDevice()` | 모바일에서 Notification 을 받기 위해 X-PUSH 서버에 등록한 DeviceToken 값을 삭제하는 메소드입니다. |
| `unregisterTopic()` | 신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 등록한 Topic 을 삭제하는 메소드입니다. |
| `unregisterTopicWithUserID()` | 특정 사용자에게 수신되는 신뢰성 메시지의 Topic 을 X-PUSH 서버에서 삭제하는 메소드입니다. |
| `unsubscribe()` | 메시지를 받기 위해 X-PUSH 서버에 등록한 Topic 을 삭제하는 메소드입니다. |

---

## connect

X-PUSH 서버와 연결을 수행하는 메소드입니다.

**Syntax**
```javascript
XPush.connect( [strUserID [,strSessionID]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strUserID` | String | X-PUSH 서버에 연결 시 인증을 위한 User ID를 설정합니다.  값 생략 시 userid 속성값이 적용됩니다. |
| `strSessionID` | String | X-PUSH 서버에 연결 시 인증을 위한 Session ID 를 설정합니다.  값 생략 시 sessionid 속성값이 적용됩니다. |

**Remark**
- connect() 메소드는 iplist 속성에 설정된 서버를 무작위로 선택해서 접속을 시도합니다.  

- X-PUSH 서버 연결에 성공하면 onsuccess 이벤트가 실행됩니다.
   iplist 속성에 설정된 모든 Push 서버와 연결을 실패하면 onerror 이벤트가 실행됩니다.

- 네트워크에 연결되지 않은 경우는 timeout 속성값만큼 기다리지 않고 곧바로 onerror 이벤트가 발생합니다.

- protocolversion 속성값이 3 인 경우 서버와 연결 시 projectid 속성값이 자동으로 사용됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## disconnect

X-PUSH 서버의 연결을 해제하는 메소드입니다.

**Syntax**
```javascript
XPush.disconnect()
```

**Sample**
```javascript
this.XPush00.disconnect();
```

**Remark**
- X-PUSH 서버의 연결해제에 성공하면 onsuccess 이벤트가 실행됩니다.
   X-PUSH 서버의 연결해제에 실패하면 onerror 이벤트가 실행됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## getCurrentIP

현재 접속중인 X-PUSH 서버의 IP값을 반환하는 메소드입니다.

**Syntax**
```javascript
XPush.getCurrentIP()
```

**Sample**
```javascript
var strIPAddress = this.XPush00.getCurrentIP();
```

**Return**: `String` — 현재 접속중인 X-PUSH 서버의 IP값을 반환합니다.

**Remark**
- 접속이 끊어진 경우에도 접속했던 X-PUSH 서버의 IP값을 반환합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## getCurrentPort

현재 접속중인 X-PUSH 서버의 Port 값을 반환하는 메소드입니다.

**Syntax**
```javascript
XPush.getCurrentPort()
```

**Sample**
```javascript
var nPort = this.XPush00.getCurrentPort();
```

**Return**: `Number` — 현재 접속중인 X-PUSH 서버의 Port 값을 반환합니다.

**Remark**
- 접속이 끊어진 경우에도 접속했던 X-PUSH 서버의 Port 값을 반환합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## getRegisteredTopics

신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 등록한 Topic 정보를 요청하는 메소드입니다.

**Syntax**
```javascript
XPush.getRegisteredTopics()
```

**Remark**
- 대상 Topic은 데이터베이스에 저장된 Topic 정보만 해당합니다
  (메모리에 저장된 정보는 해당되지 않음).

- Topic 정보 조회 성공 시 onsuccess 이벤트가 발생합니다.
  XPushEventInfo 오브젝트의 action 속성값은 11이며 
  returnvalue 속성값에서 아래와 같은 형태로  값을 확인할 수 있습니다.
{
  "topic_A" : ["id_a", "id_b", id_c"],
  "topic_B" : ["id_a"],
  "topic_C" : ["id_a", "id_b"]
};

- Topic 정보 조회 실패 시 onerror 이벤트가 발생합니다.

---

## getRegisteredTopicsWithUserID

신뢰성 메시지가 특정 사용자에게 수신될 수 있도록 X-PUSH 서버에 등록한 Topic 정보를 요청하는 메소드입니다.

**Syntax**
```javascript
XPush.getRegisteredTopicsWithUserID(strUserID [, strProjectID] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strUserID` | String | 신뢰성 메시지를 수신할 사용자의 ID를 문자열로 설정합니다. |
| `strProjectID` | String | 신뢰성 메시지를 수신할 프로젝트의 ID를 문자열로 설정합니다. 값 생략 시 projectid 속성값이 적용됩니다.  * protocolversion 속성값이 3 인 경우만 적용됩니다. |

**Remark**
- 대상 Topic은 데이터베이스에 저장된 Topic 정보만 해당합니다
  (메모리에 저장된 정보는 해당되지 않음).

- Topic 정보 조회 성공 시 onsuccess 이벤트가 발생합니다.
  XPushEventInfo 오브젝트의 action 속성값은 11이며 
  returnvalue 속성값에서 아래와 같은 형태로  값을 확인할 수 있습니다.
{
  "topic_A" : ["id_a", "id_b", id_c"],
  "topic_B" : ["id_a"],
  "topic_C" : ["id_a", "id_b"]
};

- Topic 정보 조회 실패 시 onerror 이벤트가 발생합니다.

---

## registerDevice

모바일에서 Notification 을 받기 위해 DeviceToken 값을 X-PUSH 서버에 등록하는 메소드입니다.

**Syntax**
```javascript
XPush.registerDevice()
```

**Sample**
```javascript
this.XPush00.registerDevice()
```

**Remark**
- 모바일 환경만 지원하는 기능입니다.

---

## registerTopic

신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 Topic 을 등록하는 메소드입니다.

**Syntax**
```javascript
this.XPush00.registerTopic(strMessageType, strMessgageKey);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMessageType` | String | Message Layout 파일에 정의된 메시지 타입 중 수신 받을 메시지 타입을 설정합니다. |
| `strMessgageKey` | String | 수신 받을 메세지의 Key 값을 설정합니다. |

**Remark**
- 신뢰성 메시지 Topic 등록에 성공하면 onsuccess 이벤트가 실행됩니다.
  신뢰성 메시지 Topic 등록에 실패하면 onerror 이벤트가 실행됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## registerTopicWithUserID

신뢰성 메시지가 특정 사용자에게 수신될 수 있도록 X-PUSH 서버에 Topic 을 등록하는 메소드입니다.

**Syntax**
```javascript
this.XPush00.registerTopicWithUserID( strMessageType, strMessgageKey, strUserID [, strProjectID] );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMessageType` | String | Message Layout 파일에 정의된 메시지 타입 중 수신 받을 메시지 타입을 문자열로 설정합니다. |
| `strMessgageKey` | String | 수신 받을 메시지의 Key 값을 문자열로 설정합니다. |
| `strUserID` | String | 신뢰성 메시지를 수신할 사용자의 ID 를 문자열로 설정합니다. |
| `strProjectID` | String | 신뢰성 메시지를 수신할 프로젝트의 ID 를 문자열로 설정합니다.  값 생략 시 projectid 속성값이 적용됩니다.  * protocolversion 속성값이 3 인 경우만 적용됩니다. |

**Remark**
- 신뢰성 메시지 Topic 등록에 성공하면 onsuccess 이벤트가 실행됩니다.
   신뢰성 메시지 Topic 등록에 실패하면 onerror 이벤트가 실행됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## requestMessage

X-PUSH 서버에서 미수신한 신뢰성 메시지를 요청하는 메소드입니다.

**Syntax**
```javascript
requestMessage ( strMsgType, strMsgKeys );
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMsgType` | String | Message Layout 파일에 정의된 메시지 타입 중 수신 받을 메시지 타입을 설정합니다. |
| `strMsgKeys` | String | 수신 받을 메세지의 Key 값을 설정합니다.  수신 받을 메세지가 여러개일 경우 콤마(",")로 구분하여  여러개의 Key 값을 설정할 수 있습니다. |

**Remark**
- 미수신 메시지 요청에 성공하면 onsuccess 이벤트가 발생합니다.
   미수신 메시지 요청에 실패하면 onerror 이벤트가 발생합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## requestMessageCount

X-PUSH 서버에서 미수신한 신뢰성 메시지의 갯수를 요청하는 메소드입니다.

**Syntax**
```javascript
XPush.requestMessageCount(strMessageType, strMessgageKey)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMessageType` | String | Message Layout 파일에 정의된 메시지 타입 중 갯수를 수신 받을 메시지의 타입을 설정합니다. |
| `strMessgageKey` | String | 미수신된 신뢰성 메세지의 Key 값을 설정합니다. |

**Remark**
- 미수신 메시지 갯수 요청에 성공하면 onsuccess 이벤트가 발생합니다.
   미수신 메시지 갯수 요청에 실패하면 onerror 이벤트가 발생합니다.

- 미수신 메시지 갯수는 onsuccess 이벤트에서 "e" 오브젝트(XPushEventInfo)의 returnvalue 속성값으로 전달됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## requestMessageCountWithUserID

특정 사용자가 미수신한 신뢰성 메시지의 갯수를 X-PUSH 서버에 요청하는 메소드입니다.

**Syntax**
```javascript
XPush.requestMessageCountWithUserID( strMessageType, strMessgageKey, strUserID [, strProjectID] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMessageType` | String | Message Layout 파일에 정의된 메시지 타입 중 갯수를 수신 받을 메시지의 타입을 문자열로 설정합니다. |
| `strMessgageKey` | String | 미수신한 신뢰성 메시지의 Key 값을 문자열로 설정합니다. |
| `strUserID` | String | 미수신한 신뢰성 메시지의 갯수를 확인할 사용자의 ID 를 문자열로 설정합니다. |
| `strProjectID` | String | 미수신한 신뢰성 메시지의 갯수를 확인할 프로젝트의 ID 를 문자열로 설정합니다.  값 생략 시 projectid 속성값이 적용됩니다.  * protocolversion 속성값이 3 인 경우만 적용됩니다. |

**Remark**
- 미수신 메시지 갯수 요청에 성공하면 onsuccess 이벤트가 발생합니다.
   미수신 메시지 갯수 요청에 실패하면 onerror 이벤트가 발생합니다.

- 미수신 메시지 갯수는 onsuccess 이벤트에서 e 오브젝트(XPushEventInfo)의 returnvalue 속성값으로 전달됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## sendResponse

X-PUSH 서버에서 수신한 신뢰성 메시지에 대한 수신응답을 보내는 메소드입니다.

**Syntax**
```javascript
XPush.sendResponse(strmsgid)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strmsgid` | String | 수신된 신뢰성 메시지의 ID를 설정합니다.  메시지 수신 시 발생하는 CallBack 함수에 "msgid" 파라미터의 값으로 ID가 전달됩니다. |

**Remark**
- 메시지 수신응답에 성공하면 onsuccess 이벤트가 발생합니다.
   메시지 수신응답에 실패하면 onerror 이벤트가 발생합니다.

- 메시지 수신응답에 실패한 경우 requestMessage() 메소드 수행 시 해당 메시지가 존재합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## subscribe

메시지를 받기 위해 연결된 X-PUSH 서버에 Topic 을 등록하는 메소드입니다.

**Syntax**
```javascript
XPush.subscribe(strMsgType, strMsgKey, objForm, objDataset, strType, strCallBack[, nRow[, strCheck[, bUseActiveFormCallBack]]])
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMsgType` | String | Message Layout 파일에 정의된 메시지 타입 중 수신 받을 메시지 타입을 설정합니다. |
| `strMsgKey` | String | 수신 받을 메세지의 Key 값을 설정합니다. |
| `objForm` | Object | 메시지를 수신 받을 Form 의 오브젝트를 설정합니다. |
| `objDataset` | Object | 수신 받은 메시지를 저장할 DataSet 의 오브젝트를 설정합니다. |
| `strType` | String | 수신 된 메시지를 DataSet 에 저장하는 방법을 설정합니다.  "append" 설정 시 DataSet 의 마지막 Row 로 수신된 메시지를 추가합니다.  "insert" 설정 시 nRow 파라미터로 설정한 위치에 수신된 메시지를 추가합니다. nRow 파라미터를 설정하지 않으면 0 으로 적용됩니다.  "replace" 설정 시 첫번째 Row 가 수신된 메시지로 대체됩니다. Row 가 없을 경우 메시지가 DataSet 에 추가되지 않습니다.  "update" 설정 시 DataSet 의 Row 중 Key 값이 동일한 첫번째 Row 에 수신된 메시지를 업데이트 합니다. 업데이트할 Row가 없다면 콜백함수는 호출되지 않습니다.  "allUpdate" 설정 시 DataSet 의 Row 중 Key 값이 동일한 모든 Row 에 수신된 메시지를 업데이트 합니다.  "updateorappend" 설정 시 "update" 설정과 동일하게 동작하지만 Key 값이 동일한 Row 가 없을 경우 "append" 로 동작합니다.  * Key 값이 동일한 Row 는 아래 순서로 찾습니다.   a) Message Layout 파일에서 "key" 속성값이 "true" 로 설정된 필드(Field)의 이름을 확인   b) a) 에서 확인한 필드(Field) 이름과 동일한 이름의 Column 을 확인   c) b) 에서 확인한 Column 에서 메시지에 포함된 Key 값과 동일값을 갖는 Row  를 확인 |
| `strCallBack` | String | 수신된 메시지를 DataSet 에 저장 후 호출할 CallBack 함수명을 문자열로 설정합니다.  CallBack 함수는 CallBackName ( ChangeRow, ChangeCol, ColList, strMsgType, strActionType, strMsgID ) 형태로 정의하며 strType 파라미터와 조건에 따라 파라미터의 의미가 다르므로  하단 리마크를 참조하시기 바랍니다. |
| `nRow` | Number | strType 값이 "insert" 일 경우 DataSet 에 삽입할 Row 의 인덱스를 설정합니다.  값 생략 시 0 으로 적용됩니다. |
| `strCheck` | String | "0" 설정 시 DataSet 에 메시지를 무조건 반영합니다. strCheck 에 설정한 값이 Message Layout 파일에 "check" 속성값이 "true" 로 설정된 필드(Field)값과 일치할 경우만 DataSet 에 메시지를 반영합니다.  값 생략 시 "0" 으로 적용됩니다. |
| `bUseActiveFormCallBack` | Boolean | true 설정 시 활성화된 Form 에서만 CallBack 함수를 호출합니다. false 설정 시 활성화 되지 않은 Form 에서도 CallBack 함수를 호출합니다.  값 생략 시 false 로 적용됩니다. |

**Remark**
- subscribe() 메소드 실행 전 X-PUSH 서버에 연결되어 있어야 합니다.

- CallBack 함수는 CallBackName ( ChangeRow, ChangeCol, ColList, strMsgType, strActionType, strMsgID ) 형태로 구성되며 각 파라미터는 아래 조건에 따라 다른 의미를 갖습니다.

   a) strType 파라미터값이 "allUpdate" 값이고 데이터를 받았을 경우
       > ChangeRow : 변경된 Row 들의 인덱스가 "," 로 구분되어 설정됩니다.
       > ChangeCol : Null 값이 설정됩니다.
       > ColList : 변경된 Row 와 Column 의 ID 가 배열로 설정됩니다.
                      하나의 원소에는 변경된 Row 의 인덱스와 변경된 Column 의 ID 가 "," 로 구분되어 설정됩니다.
       > strMsgType : "DATA" 값이 설정됩니다.

   b) strType 파라미터값이 "allUpdate" 이 외의 값이고 데이터를 받았을 경우
       > ChangeRow : 변경된 Row 의 인덱스가 설정됩니다.
       > ChangeCol : 변경된 Column ID 가 "," 로 구분되어 설정됩니다.
       > ColList : 모든 Column ID 가 "," 로 구분되어 설정됩니다.
       > strMsgType : "DATA" 값이 설정됩니다.

   c) Recovery 메시지를 받았을 경우
       > ChangeRow : -1 값이 설정됩니다.
       > ChangeCol : 빈 문자열이 설정됩니다.
       > ColList : 빈 문자열이 설정됩니다.
       > strMsgType : "RECOVERY" 값이 설정됩니다.
  
   d) 공통값을 갖는 파라미터
       > strActionType : 일반 메시지를 수신했을 경우 "PUSH" 값이 설정됩니다.
                               신뢰성 메시지를 수신했을 경우 "RECT" 값이 설정됩니다.
       > strMsgID : 메시지를 구분할 수 있는 값이 설정됩니다.
                        sendResponse() 메소드에서 파라미터값으로 사용됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## unregisterDevice

모바일에서 Notification 을 받기 위해 X-PUSH 서버에 등록한 DeviceToken 값을 삭제하는 메소드입니다.

**Syntax**
```javascript
XPush.unregisterDevice()
```

**Sample**
```javascript
this.XPush00.unregisterDevice()
```

**Remark**
- 모바일 환경만 지원하는 기능입니다.

---

## unregisterTopic

신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 등록한 Topic 을 삭제하는 메소드입니다.

**Syntax**
```javascript
XPush.unregisterTopic(strMessageType, strMessgageKey)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMessageType` | String | Message Layout 파일에 정의된 메시지 타입 중 수신을 중지할 메시지 타입을 설정합니다. |
| `strMessgageKey` | String | 수신을 중지할 메세지의 Key 값을 설정합니다. |

**Remark**
◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## unregisterTopicWithUserID

특정 사용자에게 수신되는 신뢰성 메시지의 Topic 을 X-PUSH 서버에서 삭제하는 메소드입니다.

**Syntax**
```javascript
XPush.unregisterTopicWithUserID( strMessageType, strMessgageKey, strUserID [, strProjectID] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMessageType` | String | Message Layout 파일에 정의된 메시지 타입 중 수신을 중지할 메시지 타입을 문자열로 설정합니다. |
| `strMessgageKey` | String | 수신을 중지할 메시지의 Key 값을 문자열로 설정합니다. |
| `strUserID` | String | 신뢰성 메시지의 수신을 중지할 사용자의 ID 를 문자열로 설정합니다. |
| `strProjectID` | String | 신뢰성 메시지의 수신을 중지할 프로젝트의 ID 를 문자열로 설정합니다.  값 생략 시 projectid 속성값이 적용됩니다.  * protocolversion 속성값이 3 인 경우만 적용됩니다. |

**Remark**
◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---

## unsubscribe

메시지를 받기 위해 X-PUSH 서버에 등록한 Topic 을 삭제하는 메소드입니다.

**Syntax**
```javascript
XPush.unsubscribe(strMsgType, strMsgKey, objForm, objDataset, strType, strCallBack)
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strMessageType` | String | Message Layout 파일에 정의된 메시지 타입 중 수신을 중지할 Topic 의 메시지 타입을 설정합니다. |
| `strMessgageKey` | String | 수신을 중지할 Topic 의 Key 값을 설정합니다. |
| `objForm` | Object | Topic 등록 시 설정한 Form 오브젝트를 설정합니다. |
| `objDataset` | Object | Topic 등록 시 설정한 DataSet 오브젝트를 설정합니다. |
| `strType` | String | Topic 등록 시 설정한 메시지 저장 방법을 설정합니다. |
| `strCallBack` | String | Topic 등록 시 설정한 CallBack 함수명을 설정합니다. |

**Remark**
◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

---
