# sample_string_08

**Category:** String
**Keywords:** `undefined`

## Description

Checking NULL Value

## Form Information

- **Form ID:** sample_string_08
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Button00 | Button | text="NULL check" |
| Button01 | Button | text="set NULL" |
| Button02 | Button | text="set """ |
| Button03 | Button | text="set undefined" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit01.set_value(this.fn_checkNull(this.Edit00.value));
};

this.fn_checkNull = function(sValue)
{
	if (new String(sValue).valueOf() == "undefined")
	{
        return true;
    }
	
    if (sValue == null) 
    {
        return true;
    }
    
    var sChkStr = new String(sValue);
	
    if (sChkStr == null)
    {
        return true;
    }
	
    if (sChkStr.toString().length == 0 ) 
    {	
        return true;
    }
	
    return false;
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit00.set_value(null);
};

this.Button02_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit00.set_value("");
};

this.Button03_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit00.set_value(undefined);
	trace(this.Edit00.hasOwnProperty('value'));	
};
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)