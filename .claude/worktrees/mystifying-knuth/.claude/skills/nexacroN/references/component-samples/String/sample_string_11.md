# sample_string_11

**Category:** String
**Keywords:** `charCodeAt`

## Description

Checking for English or Numeric

## Form Information

- **Form ID:** sample_string_11
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | enable="false" |
| Button00 | Button | text="isAlphanumeric" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var bRtn = this.fn_checkAlpaNum(this.Edit00.value);	
    this.Edit01.set_value(bRtn);
};

this.fn_checkAlpaNum = function(sString) 
{
    var sVal = "";
	var bVal = false;
	
    for (var i = 0; i < sString.length; i++) 
    {
		var sVal = sString.charCodeAt(i);
        if ((sVal >= 48 && sVal <=57) || (sVal >=65 && sVal <= 90) || (sVal >= 97 && sVal <= 122)) 
        {
            bVal = true;	
        }
        else
        {
            bVal = false;
            break;
        }
    }
	return bVal;
}
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)