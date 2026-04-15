# sample_string_10

**Category:** String
**Keywords:** `isNumeric, charAt`

## Description

Checking for Number Format

## Form Information

- **Form ID:** sample_string_10
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | enable="false" |
| Button00 | Button | text="isNumber" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var strchecknumber = this.fn_checkNumber(this.Edit00.value);
	var strisNumeric = nexacro.isNumeric(this.Edit00.value);
	this.Edit01.set_value(strchecknumber+', '+strisNumeric);
};

this.fn_checkNumber = function(sNum)
{
	var sChar;
	var nCnt = 0;
	var bRtn;
	
    for (var i = 0; i < sNum.length; i++) 
    {
        sChar = sNum.charAt(i);
		
        if (i == 0 && (sChar == "+" || sChar == "-" )) 
        {
            bRtn = true;
        } 
        else if (sChar >= "0" && sChar <= "9") 
        {
            bRtn = true;
        } 
        else if (sChar == ".") 
        {
            nCnt++;
            if (nCnt > 1)	
            {
                bRtn = false;
                break;
            }
        } 
        else 
        {
            bRtn = false;
            break;
        }
    }
	
    return bRtn;
}
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)