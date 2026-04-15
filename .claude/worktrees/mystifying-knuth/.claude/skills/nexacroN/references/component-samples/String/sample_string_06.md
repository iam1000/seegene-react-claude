# sample_string_06

**Category:** String
**Keywords:** `substr`

## Description

Checking Validity of Corporate Registration Number

## Form Information

- **Form ID:** sample_string_06
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
	var sJuminNo = this.Edit00.value;
	var returnValue = true;
	
	var arrChk  = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
	var sFNum 	= sJuminNo.substr(0,6).toString();
	var sLNum 	= sJuminNo.substr(6).toString();
	var sYY     = sFNum.substr(0,2);
	var sMM 	= sFNum.substr(2,2);
	var sDD 	= sFNum.substr(4,2);
	var sGenda 	= sLNum.substr(0,1);
	var nSum    = 0; 
	var sCC     = "20";
	
	if (sYY < "00" || sYY > "99" || sMM < "01" || sMM > "12" || sDD < "01" || sDD > "31") 
	{
		returnValue = false;
	}    
	
	if (sGenda < "1" || sGenda > "4") 
	{
		returnValue = false;
	}      
	
	if (sGenda == "1" || sGenda == "2")
	{
		sCC = "19"; 
	}
	
	if (this.fn_isYYYYMMDD(parseInt(sCC + sYY), parseInt(sMM), parseInt(sDD)) == false) 
	{
		returnValue = false;
	}          
	
	for (var i = 0; i < 12 ; i++)
	{
        nSum += parseInt(sJuminNo.substr(i, 1)) * arrChk[i];
		
	}
	
	nSum = 11 - (nSum % 11);
	nSum = nSum % 10;
	
	if (nSum != parseInt(sJuminNo.substr(12, 1)))
	{
		returnValue = false;
	}
	
	var sRtn;
	if(returnValue)
	{
		var vGender = sJuminNo.substr(6, 1);
		if (vGender == '1' || vGender == '3' || vGender == '5' || vGender == '7') 
		{
			sRtn = "M";
		} 
		else if (vGender == '2' || vGender == '4' || vGender == '6' || vGender == '8') 
		{
			sRtn = "W";
		} 
		else 
		{
			sRtn = "X";
		}
	}	else	{
		sRtn = "X";	
	}

    this.Edit01.set_value(sRtn);
};

this.fn_isYYYYMMDD = function(nYY, nMM, nDD) 
{
	switch (nMM) 
	{
		case 2:
			if (nDD > 29) 
			{
                return false;
            }
			if (nDD == 29) 
			{
                if ((nYY % 4) == 0) 
                {
                    if ((nYY % 100) != 0 || (nYY % 400) == 0) 
                    {
                        return false;
                    }
                } 
			}			
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			if (nDD == 31) 
			{
                return false;
			}
			break;
	}
	if(nMM > 12) return false;

	return true;
};
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)