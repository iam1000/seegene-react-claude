# Camera Methods

| Method | Description |
|--------|-------------|
| `takePicture()` | 모바일 기기의 카메라 앱을 구동시켜 이미지를 얻는 메소드입니다. |

---

## takePicture

모바일 기기의 카메라 앱을 구동시켜 이미지를 얻는 메소드입니다.

**Syntax**
```javascript
Camera.takePicture()
```

**Sample**
```javascript
this.Camera00.takePicture();
```

**Remark**
- 이미지가 전달에 성공하면 oncapture 이벤트가 발생합니다.
  이미지가 전달에 실패하면 onerror 이벤트가 발생합니다.

---
