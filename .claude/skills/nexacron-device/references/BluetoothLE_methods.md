# BluetoothLE Methods

| Method | Description |
|--------|-------------|
| `connect()` | Peripheral 디바이스와 연결을 수행하는 메소드입니다. |
| `disconnect()` | Peripheral 디바이스와의 연결을 해제하는 메소드입니다. |
| `discoverService()` | 연결된 Peripheral 디바이스가 제공하는 서비스 UUID 를 요청하는 메소드입니다. |
| `readCharacteristic()` | 연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값을 요청하는 메소드입니다. |
| `scanStart()` | 게시(Advertisement)중인 Peripheral 디바이스의 검색을 시작하는 메소드입니다. |
| `scanStop()` | 게시(Advertisement)중인 Peripheral 디바이스의 검색을 종료하는 메소드입니다. |
| `subscribe()` | 연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값이 변경될 때 Notification 을 요청하는 메소드입니다. |
| `unsubscribe()` | 연결된 Peripheral 디바이스에 Notification 해지를 요청하는 메소드입니다. |
| `writeCharacteristic()` | 연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값을 저장하는 메소드입니다. |

---

## connect

Peripheral 디바이스와 연결을 수행하는 메소드입니다.

**Syntax**
```javascript
BluetoothLE.connect( strAddress )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strAddress` | String | Peripheral 디바이스의 주소를 문자열로 설정합니다.  Windows NRE 와 Android NRE 는 MAC Address 를 사용합니다. macOS NRE 는 OS 가 부여한 UUID 를 사용합니다. iOS/iPadOS NRE 는 검색된 디바이스 목록의 Index 를 사용합니다. |

**Remark**
- Peripheral 디바이스와 연결에 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스와 연결에 실패하면 onerror 이벤트가 발생합니다.

- Peripheral 디바이스의 주소는 scanStart() 메소드 실행 시 발생하는 onscanresult 이벤트에서 확인할 수 있습니다.


◆  Windows NRE 제약

- Windows OS 는 "Bluetooth 및 기타 디바이스" 화면을 통해서만 Peripheral 디바이스와 명시적 연결을 제공합니다.
   OS 를 통한 명시적 연결이 제공되지 않은 상태에서 connect() 메소드를 사용하면 에러가 발생할 수 있습니다.

---

## disconnect

Peripheral 디바이스와의 연결을 해제하는 메소드입니다.

**Syntax**
```javascript
BluetoothLE.disconnect()
```

**Sample**
```javascript
this.BluetoothLE00.disconnect();
```

**Remark**
- Peripheral 디바이스와 연결 해제에 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스와 연결 해제에 실패하면 onerror 이벤트가 발생합니다.


◆  Windows NRE 제약

- Windows OS 는 "Bluetooth 및 기타 디바이스" 화면을 통해서만 Peripheral 디바이스와의 명시적 연결 해제를 제공합니다.
   disconnect() 메소드로 디바이스와 연결을 해제해도 실제로 연결이 해제되지 않습니다.

---

## discoverService

연결된 Peripheral 디바이스가 제공하는 서비스 UUID 를 요청하는 메소드입니다.

**Syntax**
```javascript
BluetoothLE.discoverService()
```

**Sample**
```javascript
this.BluetoothLE00.discoverService();
```

**Remark**
- 연결된 Peripheral 디바이스에 서비스 UUID 요청을 성공하면 onsuccess 이벤트가 발생합니다.
   연결된 Peripheral 디바이스에 서비스 UUID 요청을 실패하면 onerror 이벤트가 발생합니다.

- 연결된 Peripheral 디바이스에서 제공하는 서비스 UUID 갯수만큼 onsuccess 이벤트가 발생합니다.

---

## readCharacteristic

연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값을 요청하는 메소드입니다.

**Syntax**
```javascript
BluetoothLE.readCharacteristic( strSvcUUID, strCharUUID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSvcUUID` | String | Characteristic 이 정의된 서비스의 UUID 를 문자열로 설정합니다. |
| `strCharUUID` | String | 값을 가져오려는 Characteristic 의 UUID 를 문자열로 설정합니다. |

**Remark**
- Peripheral 디바이스에 Characteristic 값 요청을 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스에 Characteristic 값 요청을 실패하면 onerror 이벤트가 발생합니다.

---

## scanStart

게시(Advertisement)중인 Peripheral 디바이스의 검색을 시작하는 메소드입니다.

**Syntax**
```javascript
BluetoothLE.scanStart( [nDuration [, strSvcUUID]] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `nDuration` | Number | 검색을 지속할 시간을 밀리초(Millisecond) 단위의 숫자로 설정합니다.  값 생략 시 2000 으로 적용됩니다. |
| `strSvcUUID` | String | 찾으려고 하는 특정 서비스의 UUID 를 문자열로 설정합니다.  값 생략 시 게시(Advertiesement)중인 모든 Peripheral 디바이스를 검색합니다. |

**Remark**
- 검색이 정상적으로 시작되거나 종료되면 onsuccess 이벤트가 발생합니다.
   게시(Advertisement)중인 디바이스를 찾을 때마다 onscanresult 이벤트가 발생합니다.
   검색이 정상적으로 시작되지 않았거나 오류가 생기면 onerror 이벤트가 발생합니다.


◆  Windows NRE 제약

- Windows OS 는 "Bluetooth 및 기타 디바이스" 화면을 통해서만 Peripheral 디바이스와 명시적 연결을 제공합니다.
   따라서 scanStart() 메소드 실행 시 "Bluetooth 및 기타 디바이스" 화면에 게시된 디바이스가 검색됩니다.

---

## scanStop

게시(Advertisement)중인 Peripheral 디바이스의 검색을 종료하는 메소드입니다.

**Syntax**
```javascript
BluetoothLE.scanStop()
```

**Remark**
- 검색이 정상적으로 종료되면 onsuccess 이벤트가 발생합니다.
   검색 종료에 실패하면 onerror 이벤트가 발생합니다.

---

## subscribe

연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값이 변경될 때 Notification 을 요청하는 메소드입니다.

**Syntax**
```javascript
BluetoothLE.subscribe( strSvcUUID, strCharUUID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSvcUUID` | String | Characteristic 이 정의된 서비스의 UUID 를 문자열로 설정합니다. |
| `strCharUUID` | String | Notification 을 요청할 Characteristic 의 UUID 를 문자열로 설정합니다.  Characteristic 의 값이 변경되면 서버로 부터 Notification 이 전달됩니다. |

**Remark**
- Peripheral 디바이스에 Notification 요청을 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스에 Notification 요청을 실패하면 onerror 이벤트가 발생합니다.

- Peripheral 디바이스에서 Notification 이 전달되면 onsubscriberesult 이벤트가 발생합니다.

---

## unsubscribe

연결된 Peripheral 디바이스에 Notification 해지를 요청하는 메소드입니다.

**Syntax**
```javascript
BluetoothLE.unsubscribe( strSvcUUID, strCharUUID )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSvcUUID` | String | Characteristic 이 정의된 서비스의 UUID 를 문자열로 설정합니다. |
| `strCharUUID` | String | Notification 해제를 요청할 Characteristic 의 UUID 를 문자열로 설정합니다. |

**Remark**
- Peripheral 디바이스에 Notification 해제 요청을 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스에 Notification 해제 요청을 실패하면 onerror 이벤트가 발생합니다.

---

## writeCharacteristic

연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값을 저장하는 메소드입니다.

**Syntax**
```javascript
BluetoothLE.writeCharacteristic( strSvcUUID, strCharUUID, strVal )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strSvcUUID` | String | Characteristic 이 정의된 서비스의 UUID 를 문자열로 설정합니다. |
| `strCharUUID` | String | 값을 저장하려는 Characteristic 의 UUID 를 문자열로 설정합니다. |
| `strVal` | String | Characteristic 에 저장할 값을 문자열로 설정합니다. |

**Remark**
- Peripheral 디바이스에 Characteristic 값 저장에 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스에 Characteristic 값 저장에 실패하면 onerror 이벤트가 발생합니다.

---
