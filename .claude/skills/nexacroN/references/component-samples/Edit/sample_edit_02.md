# sample_edit_02

**Category:** Edit
**Keywords:** `length, onkeyup`

## Description

Getting String Length

## Form Information

- **Form ID:** sample_edit_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Static00 | Static | text="String:" |
| Static01 | Static | text="Length:" |
| Static03 | Static | text="number of character" |
| edit_input | Edit | value="" |
| edit_length | Edit | - |

## Source Code

```javascript
this.edit_input_onkeyup = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
{
	this.edit_length.set_value(this.edit_input.value.length);
	
};
```

---

[Back to Edit](./README.md) | [Back to Index](../INDEX.md)