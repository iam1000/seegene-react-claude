# sample_string_07

**Category:** String
**Keywords:** `substr`

## Description

Checking Validity of Resident Registration Number

## Form Information

- **Form ID:** sample_string_07
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Button00 | Button | text="Button00" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var arrChk = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
	var Sum = 0; 
	var sComp = this.Edit00.value;
	
	for (var i = 0; i < 12; i++) 
	{
		Sum += arrChk[i] * sComp.charAt(i);
		
    }

	Sum = Sum % 10;
	trace("substring : " + sComp.substring(12, 13));
	Sum = 10 - Sum; 

	if (Sum > 5 )
	{ 
		Sum = 0;
    }
	if (Sum == sComp.substring(12, 13)) 
	{
		this.Edit01.set_value(true);
	}	else	{
		this.Edit01.set_value(false);
	}
};
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)