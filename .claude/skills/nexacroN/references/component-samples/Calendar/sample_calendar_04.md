# sample_calendar_04

**Category:** Calendar
**Keywords:** `getFullYear, getMonth, getDay, getTime, abs`

## Description

Calculating Difference between Dates

## Form Information

- **Form ID:** sample_calendar_04
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| calFrom | Calendar | - |
| calTo | Calendar | - |
| staFrom | Static | text="From" |
| staTo | Static | text="To" |
| staDay | Static | text="day" |
| btnCal | Button | text="Calculate" |
| editDay | Edit | - |

## Source Code

```javascript
this.btnCal_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var fromDate = new Date();
	var toDate = new Date();
	var calDate;
	var day = 1000*60*60*24;
	
	fromDate.setFullYear(this.calFrom.getYear());
	fromDate.setMonth(this.calFrom.getMonth()-1);
	fromDate.setDate(this.calFrom.getDay());
	
	toDate.setFullYear(this.calTo.getYear());
	toDate.setMonth(this.calTo.getMonth()-1);
	toDate.setDate(this.calTo.getDay());
	
	calDate = fromDate.getTime() - toDate.getTime();
	
	this.editDay.set_value(Math.abs(calDate/day));
}
```

---

[Back to Calendar](./README.md) | [Back to Index](../INDEX.md)