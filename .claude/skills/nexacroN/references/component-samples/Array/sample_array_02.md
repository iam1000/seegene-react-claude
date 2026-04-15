# sample_array_02

**Category:** Array
**Keywords:** `split`

## Description

Removing Duplicate Elements

## Form Information

- **Form ID:** sample_array_02
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
	var aRtn = this.fn_distinct(this.Edit00.value);
	this.Edit01.set_value(aRtn);
};

this.fn_distinct = function(sParam)
{
    var aData = new Array();
    aData = sParam.split(",");
	
    var aRtn = new Array();
    var bFlag;
    var vDist;
    
    for (var i = 0; i < aData.length; i++)
    {
        vDist = aData[i];
        bFlag = false;
        for (var j = 0; j < aRtn.length; j++)
        {
			if (aRtn[j] == vDist)
            {
                bFlag = true;
                break;
            }
        }
        if (bFlag == false)
        {
			aRtn[aRtn.length] = vDist;            
        }
    }
    return aRtn;  
}
```

---

[Back to Array](./README.md) | [Back to Index](../INDEX.md)