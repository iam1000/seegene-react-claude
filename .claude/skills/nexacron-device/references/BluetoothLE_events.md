# BluetoothLE Events

| Event | Description |
|-------|-------------|
| `onerror` | BluetoothLE 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| `onscanresult` | scanStart() 메소드로 특정 서비스가 제공되는 디바이스를 찾았을 때 발생하는 이벤트입니다. |
| `onsubscriberesult` | BluetoothLE 와 연결된 디바이스에서 Notification 이 전달되었을 때 발생하는 이벤트입니다. |
| `onsuccess` | BluetoothLE 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |

---

## onerror

BluetoothLE 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onerror(obj:nexacro.BluetoothLE,e:nexacro.BluetoothLEErrorEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | BluetoothLE | Event가 발생한 Object. |
| `e` | BluetoothLEErrorEventInfo | Event Object. |

**Remark**
- 이벤트가 발생한 원인은 e 오브젝트(BluetoothLEErrorEventinfo) 의 reason 속성값을 참조하시기 바랍니다.

---

## onscanresult

scanStart() 메소드로 특정 서비스가 제공되는 디바이스를 찾았을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onscanresult(obj:nexacro.BluetoothLE,e:nexacro.BluetoothLEScanDeviceEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | BluetoothLE | Event가 발생한 Object. |
| `e` | BluetoothLEScanDeviceEventInfo | Event Object. |

**Remark**
- 특정 서비스가 제공되는 디바이스를 찾을 때마다 발생하는 이벤트입니다.

- 찾아낸 디바이스에 대한 정보는 e 오브젝트(BluetoothLEScanDeviceEventInfo) 의 devicename, deviceaddress 속성을 참조하시기 바랍니다.

---

## onsubscriberesult

BluetoothLE 와 연결된 디바이스에서 Notification 이 전달되었을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsubscriberesult(obj:nexacro.BluetoothLE,e:nexacro.BluetoothLEEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | BluetoothLE | Event가 발생한 Object. |
| `e` | BluetoothLEEventInfo | Event Object. |

**Remark**
- subscribe() 메소드로 요청한 Notification 이 수신되었을 때 발생하는 이벤트입니다.

---

## onsuccess

BluetoothLE 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**
```javascript
onsuccess(obj:nexacro.BluetoothLE,e:nexacro.BluetoothLEEventInfo);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `obj` | BluetoothLE | Event가 발생한 Object. |
| `e` | BluetoothLEEventInfo | Event Object. |

**Remark**
- 이벤트가 발생한 원인은 e 오브젝트(BluetoothLEEventinfo) 의 reason 속성값을 참조하시기 바랍니다.

---
