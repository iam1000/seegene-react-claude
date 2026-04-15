# sample_string_12

**Category:** String
**Keywords:** `substr`

## Description

Checking Validity of Date & Time

## Form Information

- **Form ID:** sample_string_11
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | enable="false" |
| Edit02 | Edit | - |
| Button00 | Button | text="isDate" |
| Button01 | Button | text="isTime" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var bRtn = this.fn_checkDate(this.Edit00.value);	
    this.Edit01.set_value(bRtn);
};

this.fn_checkDate = function(sDate) 
{
    var nYear  = Number(sDate.toString().substr(0,4));
    var nMonth = Number(sDate.toString().substr(5,2));
    var nDate  = Number(sDate.toString().substr(8,2));
	
    if ( nMonth > 12 || nMonth < 1)
    {
		return false;
    }
    
    switch (nMonth) 
    {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			if (nDate > 31 || nDate < 1)
			{
				return false;
			}
			break;
		case 4: 
		case 6: 
		case 9: 
		case 11:  
			if (nDate > 30 || nDate < 1)
			{
				return false;
			}                               
			break;
		case 2:   
			if (((nYear % 4 == 0) && (nYear % 100 != 0)) || (nYear % 400 == 0))
			{
				if (nDate > 29 || nDate < 1)
				{
					return false;
				}
			}
			else
			{
				if (nDate > 28 || nDate < 1)
				{
					return false;
				}
			}                              
			break;            
		default:
			break;
    }    
    return true;
}

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var bRtn = this.fn_checkTime(this.Edit02.value);	
    this.Edit01.set_value(bRtn);
};

this.fn_checkTime = function(sTime) 
{
    var nHH = Number(sTime.toString().substr(0,2));
    var nMM = Number(sTime.toString().substr(3,2));
    var nSS = Number(sTime.toString().substr(6,2));
	
    if (nHH > 24 || nHH < 0)
    {
		return false;
    }    
    
    if (nMM > 59 || nMM < 0)
    {
		return false;
    }
    
    if (nSS > 59 || nSS < 0)
    {
		return false;
    }  
    return true;
}
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)