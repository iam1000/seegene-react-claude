# sample_div_02

**Category:** Div
**Keywords:** `form`

## Description

Accessing Div Contents

## Form Information

- **Form ID:** sample_div_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| divMain | Div | text="divMain" |
| btnInput | Button | text="input text" |
| editInput | Edit | - |

## Source Code

```javascript
this.btnInput_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.divMain.form.staticInput.set_text(this.editInput.value);
};
```

---

[Back to Div](./README.md) | [Back to Index](../INDEX.md)