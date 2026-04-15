# sample_calendar_05

**Category:** Calendar
**Keywords:** `getDay, addDate, parseInt`

## Description

Calculating Date Intervals by Year & Week

## Form Information

- **Form ID:** sample_calendar_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnCal | Button | text="Calculate" |
| editYear | Edit | - |
| editWeek | Edit | - |
| staYear | Static | text="Year" |
| staWeek | Static | text="Week" |
| calWeek | Calendar | - |

## Source Code

```javascript
this.btnCal_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var dDate = new Date(parseInt(this.editYear.value),0,1);
	var nDay = dDate.getDay();
	
	if(nDay != 0) {
		// dDate = new Date(dDate.addDate(-nDay));
		dDate.addDate(-nDay);
	}
	
	// var nWeekS = new Date(dDate.addDate(7 * (parseInt(this.editWeek.value)-1)));
	dDate.addDate(7 * (parseInt(this.editWeek.value)-1));
	
	this.calWeek.set_value(dDate.getFullYear()
		+(dDate.getMonth()+1).toString().padLeft(2, "0")
		+dDate.getDate().toString().padLeft(2, "0")
	);
}
```

---

[Back to Calendar](./README.md) | [Back to Index](../INDEX.md)