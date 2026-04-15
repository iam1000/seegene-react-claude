# sample_button_04

**Category:** Button
**Keywords:** `iconPosition, textPadding`

## Description

Changing Icon Location in Button

## Form Information

- **Form ID:** sample_button_03_nexacro16
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnIcon | Button | text="Button00", icon="URL("imagerc::img_sta_des.png"..." |
| editIconPosition | Edit | - |
| editTextPaddingTop | Edit | value="0" |
| editTextPaddingRight | Edit | value="0" |
| editTextPaddingBottom | Edit | value="0" |
| editTextPaddingLeft | Edit | value="0" |
| Static00 | Static | text="iconposition / left | top | ri..." |
| Static01 | Static | text="textpadding / top" |
| Static02 | Static | text="textpadding / right" |
| Static03 | Static | text="textpadding / bottom" |
| Static04 | Static | text="textpadding / left" |

## Source Code

```javascript
this.btnIcon_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	obj.set_iconPosition(this.editIconPosition.value);
	//obj.set_textPadding("20px");
	obj.set_textPadding(this.editTextPaddingTop.value+"px " 
		+this.editTextPaddingRight.value+"px "
		+this.editTextPaddingBottom.value+"px " 
		+this.editTextPaddingLeft.value+"px");
};

this.editTextPadding_onchanged = function(obj:nexacro.Edit,e:nexacro.ChangeEventInfo)
{
	if(!nexacro.isNumeric(obj.value))
	{
		obj.set_value(0);
	}
};
```

---

[Back to Button](./README.md) | [Back to Index](../INDEX.md)