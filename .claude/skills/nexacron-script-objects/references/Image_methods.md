# Image Methods

| Method | Description |
|--------|-------------|
| `getBase64String()` | Image 오브젝트에 저장된 Base64 인코딩 데이터를 반환하는 메소드입니다. |
| `setBase64String()` | Image 오브젝트에 Base64 로 인코딩 된 데이터를 저장하는 메소드입니다. |

---

## getBase64String

Image 오브젝트에 저장된 Base64 인코딩 데이터를 반환하는 메소드입니다.

**Syntax**
```javascript
Image.getBase64String([bOnlydata]);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `bOnlydata` | Boolean | false: Data URI 형태로 반환 true: Data URI 형태 중 Base64 인코딩 데이터만 반환  값을 설정하지 않으면 false로 설정됩니다. |

**Return**: `String` — Image 오브젝트에 저장된 Base64 데이터를 반환합니다.

**Remark**
- src 속성에 설정된 이미지정보와 별개로 Image 오브젝트에 저장된 Base64 인코딩 데이터를 반환합니다.

- src 속성에 설정된 이미지를 Base64 인코딩 데이터로 반환하는 메소드가 아닙니다.
  setBase64String 메소드를 실행해 저장했거나 Sketch 컴포넌트의 value 속성 등에 저장된 Base64 데이터를 반환하는 메소드입니다.

---

## setBase64String

Image 오브젝트에 Base64 로 인코딩 된 데이터를 저장하는 메소드입니다.

**Syntax**
```javascript
Image.setBase64String(strBase64);
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `strBase64` | String | Base64 로 인코딩 된 이미지 데이터를 설정합니다. |

**Remark**
- Image 오브젝트의 src 속성에 설정된 이미지정보와 별개로 Base64 인코딩 데이터를 저장하는 메소드입니다.

---
