# EventObject Methods

| Method | Description |
|--------|-------------|
| `fireEvent()` | 이벤트에 정의된 핸들러 함수를 호출하여 이벤트를 발생시키는 메소드입니다. |

---

## fireEvent

이벤트에 정의된 핸들러 함수를 호출하여 이벤트를 발생시키는 메소드입니다.

**Syntax**
```javascript
EventObject.fireEvent( objFireComp, objEventInfo [, bCancelable] )
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `objFireComp` | Object | 이벤트 핸들러 함수에 전달할 컴포넌트를 설정합니다.  일반적으로 이벤트가 발생할 컴포넌트를 동일하게 설정합니다. |
| `objEvent` | Object | 이벤트 핸들러 함수에 전달할 EventInfo 오브젝트를 설정합니다. |
| `bCancelable` | Boolean | 이벤트 핸들러 함수의 반환값에 따라 함수실행을 중지시킬 지 여부를 설정합니다.  true 설정 시 핸들러 함수에서 false 를 반환하면 핸들러 함수실행을 모두 중지합니다. true 설정 시 핸들러 함수에서 true 를 반환하면 다음 핸들러 함수를 실행합니다.  false 설정 시 핸들러 함수에서 true/false 값을 반환하면 다음 핸들러 함수를 실행합니다.  값 생략 시 false 로 적용됩니다. |

**Return**: `Boolean` — bCancelable 파라미터가 true 이고 핸들러 함수 실행중 false 가 반환되었다면 false 를 반환합니다. bCancelable 파라미터가 true 이고 핸들러 함수 실행중 false 가 반환되지 않았다면 true 를 반환합니다.  bCancelable 파라미터가 false 이면 마지막 핸들러 함수에서 반환한 값을 반환합니다. bCancelable 파라미터가 false 이고 마지막 핸들러 함수에서 값을 반환하지 않으면 빈값을 반환합니다.

**Remark**
- Composite Component 와 같은 사용자 컴포넌트에서 이벤트를 발생시킬 때 사용하는 메소드입니다.

- 이벤트에 두개 이상의 핸들러 함수가 정의되었다면 정의된 순서대로 핸들러 함수를 실행합니다.

- 일반적으로 fireEvent() 메소드의 반환값은 핸들러 함수에서 이벤트를 취소했다는 정보를 받으려 할 때 사용합니다.
   bCancelable 파라미터가 true 이고 핸들러 함수 실행중 false 가 반환되었을 경우입니다.

---
