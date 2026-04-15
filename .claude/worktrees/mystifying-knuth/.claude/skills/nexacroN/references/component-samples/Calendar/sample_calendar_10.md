# sample_calendar_10

**Category:** Calendar
**Keywords:** `getDayOfWeek`

## Description

Setting Next Day as Weekday

## Form Information

- **Form ID:** sample_calendar_10
- **Size:** 590 x 300

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Calendar00 | Calendar | - |
| Calendar01 | Calendar | - |

## Source Code

```javascript
this.Calendar00_onchanged = function(obj:nexacro.Calendar,e:nexacro.ChangeEventInfo)
{
	var nWeek = obj.getDayOfWeek();
	if(nWeek == 5)
	{
		this.Calendar01.set_value (this.AddDateOffset(e.postvalue, 3));
	}
	else if(nWeek == 6)
	{
		this.Calendar01.set_value (this.AddDateOffset(e.postvalue, 2));
	}
	else 
	{
		this.Calendar01.set_value (this.AddDateOffset(e.postvalue, 1));
	}
	this.setFocus(true, false);
};

this.AddDateOffset = function(sDate, nOffset)
{
    var nYear = parseInt(sDate.substr(0, 4));
    var nMonth = parseInt(sDate.substr(4, 2));
    var nDate = parseInt(sDate.substr(6, 2)) + nOffset;

    return this.MakeDate(nYear, nMonth, nDate);
}

this.MakeDate = function(nYear, nMonth, nDate)
{
    var objDate = new Date(nYear, nMonth-1, nDate);

	var sYear   = objDate.getFullYear().toString();
	var sMonth  = (objDate.getMonth() + 1).toString().padLeft(2, "0");
	var sDate   = (objDate.getDate()).toString().padLeft(2, "0");

	return sYear + sMonth + sDate;
}
```

---

[Back to Calendar](./README.md) | [Back to Index](../INDEX.md)