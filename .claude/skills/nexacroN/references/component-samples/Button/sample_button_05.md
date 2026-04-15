# sample_button_05

**Category:** Button

## Description

Checking Properties, Methods, & Events of Component

## Form Information

- **Form ID:** sample_button_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |
| TextArea00 | TextArea | - |
| TextArea01 | TextArea | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.TextArea00.set_value(this.checkList(obj));
	this.TextArea01.set_value(this.checkList(e));
};

this.checkList = function(obj)
{
	var strReturn = "";
	for(var x in obj)
	{
		if(x.substring(0,1)!="_")
		{
			if(obj[x]!=null && obj[x].toString().indexOf("function")>-1)	{
				strReturn += x+": "+"function()"+"\n";
			}	else	{
				strReturn += x+": "+obj[x]+"\n";
			}
		}
	}
	return strReturn;
}
```

---

[Back to Button](./README.md) | [Back to Index](../INDEX.md)