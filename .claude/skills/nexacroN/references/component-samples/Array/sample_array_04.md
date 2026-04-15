# sample_array_04

**Category:** Array

## Description

Creating 2D Array

## Form Information

- **Form ID:** sample_array_04
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Button00 | Button | text="Button00" |
| TextArea00 | TextArea | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var arrValue = [];
	var nLen1 = this.Edit00.value;
	var nLen2 = this.Edit01.value;
	for (var i = 0; i < nLen1; i++)
	{
		arrValue[i] = new Array();
		for (var j = 0; j < nLen2; j++)
		{
			arrValue[i][j] = " [" + i + "][" + j + "]";
		}
	}
	var sRtn = "";
    for (var i = 0; i < nLen1; i++)
    {
        sRtn += arrValue[i] + "\n";
    }	
	this.TextArea00.set_value(sRtn);
};
```

---

[Back to Array](./README.md) | [Back to Index](../INDEX.md)