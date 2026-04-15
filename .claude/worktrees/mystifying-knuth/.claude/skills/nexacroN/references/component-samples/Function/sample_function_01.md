# sample_function_01

**Category:** Function
**Keywords:** `arguments`

## Description

Implementing DECODE, IIF Functions

## Form Information

- **Form ID:** sample_function_01
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Edit02 | Edit | enable="false" |
| Edit03 | Edit | enable="false" |
| Button00 | Button | text="decode" |
| Button01 | Button | text="iif" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit02.set_value(this.fn_decode(this.Edit00.value, '0', 'SUN', '1', 'MON', '2', 'TUE', '3', 'WED', '4', 'THU', '5', 'FRI', '6', 'SAT', 'OTHERS'));
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit03.set_value(this.fn_iif(this.Edit01.value, 'Yes', 'No'));
};

this.fn_decode = function()
{
    var sRtnValue = null;
    var arrArgument = this.fn_decode.arguments;
    var sValue = arrArgument[0];
    var bIsDefault = false;
    var nCount = 0;
	
    if ((arrArgument.length % 2) == 0) 
    {
        nCount = arrArgument.length - 1;
        bIsDefault = true;
    } 
    else 
    {
        nCount = arrArgument.length;
        bIsDefault = false;
    }
	
    for (var i = 1; i < nCount; i+=2) 
    {
        if(sValue == arrArgument[i]) 
        {
            sRtnValue = arrArgument[i+1];
            i = nCount;
        }
    }
	
    if (sRtnValue == null && bIsDefault==true) 
    {
        sRtnValue = arrArgument[arrArgument.length-1];
    }
	
    return sRtnValue;
};

this.fn_iif = function()
{
    var arrArgument = this.fn_iif.arguments;
	
    if (arrArgument[0]) 
    {
		return arrArgument[1];
    } 
    else 
    {
        return arrArgument[2];
    }
};
```

---

[Back to Function](./README.md) | [Back to Index](../INDEX.md)