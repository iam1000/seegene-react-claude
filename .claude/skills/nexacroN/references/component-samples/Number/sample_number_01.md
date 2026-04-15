# sample_number_01

**Category:** Number

## Description

Checking Number Range

## Form Information

- **Form ID:** sample_number_01
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Static00 | Static | text="FROM" |
| Static01 | Static | text="TO" |
| Static02 | Static | text="INPUT" |
| Static03 | Static | text="RESULT" |
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Edit02 | Edit | - |
| Edit03 | Edit | - |
| Button00 | Button | text="CHECK" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    var nRtn = this.fn_isNumArea(this.Edit02.value, this.Edit00.value, this.Edit01.value);
    this.Edit03.set_value(nRtn);
};

this.fn_isNumArea = function(sValue, sArea1, sArea2)
{   
    var nValue = Number(sValue);
    var nArea1 = Number(sArea1);
    var nArea2 = Number(sArea2);
    
    if (nArea1 > nArea2) 
    {
        return false;
    }
    
    if (nValue >= nArea1 && nValue <= nArea2) 
    {
        return true;
    } 
    else 
    {
        return false;        
    }
}
```

---

[Back to Number](./README.md) | [Back to Index](../INDEX.md)