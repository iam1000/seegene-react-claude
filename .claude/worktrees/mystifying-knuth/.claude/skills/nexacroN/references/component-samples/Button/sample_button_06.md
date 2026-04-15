# sample_button_06

**Category:** Button
**Keywords:** `button`

## Description

Distinguishing onclick Event Occurring from Keyboard Input

## Form Information

- **Form ID:** sample_button_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |
| Static00 | Static | text="WAIT" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Static00.set_text('SPACE OR ENTER KEY');
	if(e.button!='none')
	{
		this.Static00.set_text('CLICK');
	}
};
```

---

[Back to Button](./README.md) | [Back to Index](../INDEX.md)