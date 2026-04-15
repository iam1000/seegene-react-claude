# sample_form_05

**Category:** Form
**Keywords:** `onkeydown, getFocus, getNextComponent, setFocus`

## Description

Moving Component with Enter Key

## Form Information

- **Form ID:** sample_form_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| edit01 | Edit | - |
| edit02 | Edit | - |
| btnSubmit | Button | text="SUBMIT" |

## Source Code

```javascript
this.Form_onkeydown = function(obj:nexacro.Form,e:nexacro.KeyEventInfo)
{
	if(e.keycode == 13)
	{
		var objFocus = this.getFocus();
		var objComp = obj.getNextComponent(objFocus, true);
		objComp.setFocus();
	}
};

this.btnSubmit_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.edit01.set_value('');
	this.edit02.set_value('');
};

this.btnSubmit_onkeydown = function(obj:nexacro.Button,e:nexacro.KeyEventInfo)
{
	return true;
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)