# sample_math_01

**Category:** Math
**Keywords:** `round`

## Description

Finding Percentage

## Form Information

- **Form ID:** sample_math_01
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Edit02 | Edit | - |
| Edit03 | Edit | - |
| Static01 | Static | text="is what percent of" |
| Static02 | Static | text="?" |
| Static03 | Static | text="FractionDigit" |
| Static00 | Static | text="%" |
| Button00 | Button | text="CHECK" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    var nRtn = this.fn_percent(this.Edit00.value, this.Edit01.value, this.Edit03.value);
    this.Edit02.set_value(nRtn);
};

this.fn_percent = function(nTop, nBottom , nFractionDigit)
{
    var nRtn;
	if (nBottom == 0)
    {
        nBottom = 1;
    }
	
    if (nFractionDigit == null || nFractionDigit == "" || nFractionDigit == "undefined")
    {
		nRtn = Math.round(nTop/nBottom*100);
    } else {
		nRtn = nexacro.round(nTop/nBottom*100, Number(nFractionDigit));
	}
	
    return nRtn;
}
```

---

[Back to Math](./README.md) | [Back to Index](../INDEX.md)