# sample_global_04

**Category:** Global
**Keywords:** `typeof`

## Description

Finding & Executing Function

## Form Information

- **Form ID:** sample_global_04
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |
| Edit00 | Edit | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var strfn = this.Edit00.value.toString();
	if(typeof(this[strfn])=='function')
	{
		this[strfn]();
	}
	else
	{
		this.Edit00.set_value(strfn+' is not Function. is '+typeof(this[strfn]));
	}
};

this.fn_test = function()
{
	this.Edit00.set_value(this.Edit00.value.toString()+' is Function');
}
this.Edit00_oneditclick = function(obj:nexacro.Edit,e:nexacro.EditClickEventInfo)
{
	this.Edit00.set_value();
};
```

---

[Back to Global](./README.md) | [Back to Index](../INDEX.md)