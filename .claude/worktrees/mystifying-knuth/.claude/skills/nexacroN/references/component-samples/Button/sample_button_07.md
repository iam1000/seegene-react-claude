# sample_button_07

**Category:** Button
**Keywords:** `defaultbutton, escapebutton, hotkey`

## Description

Processing onclick Event for Specific Key Input

## Form Information

- **Form ID:** sample_button_07
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Button00 | Button | text="Button00" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit00.set_value('KEY PRESS CHECK');
};
```

---

[Back to Button](./README.md) | [Back to Index](../INDEX.md)