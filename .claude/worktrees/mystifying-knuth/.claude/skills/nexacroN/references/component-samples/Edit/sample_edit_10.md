# sample_edit_10

**Category:** Edit
**Keywords:** `oninput`

## Description

Allowing Only Korean Input

## Form Information

- **Form ID:** sample_edit_10
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |

## Source Code

```javascript
this.Edit00_oninput = function(obj:nexacro.Edit,e:nexacro.InputEventInfo)
{
	obj.set_value(obj.value.replace(/[^\ㄱ-ㅎㅏ-ㅣ가-힣]/g, ""));
};
```

---

[Back to Edit](./README.md) | [Back to Index](../INDEX.md)