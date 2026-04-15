# sample_calendar_11

**Category:** Calendar
**Keywords:** `datepickerchangetype`

## Description

Delivering the information of selected year and month

## Form Information

- **Form ID:** sample_calendar_11
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Calendar00 | Calendar | - |
| Calendar00_00 | Calendar | - |

## Source Code

```javascript
this.Calendar00_onlbuttonup = function(obj:nexacro.Calendar,e:nexacro.MouseEventInfo)
{
	var yeartext;
	var monthtext;
	if(e.fromreferenceobject.id.includes("yearitem")) {
		yeartext = e.fromreferenceobject.text;
		this.Calendar00_00.set_value(yeartext);
	}
	if(e.fromreferenceobject.id.includes("monthitem")) {
		yeartext = this.Calendar00.datepicker.head.yearstatic.text;
		monthtext = e.fromreferenceobject.text;
		this.Calendar00_00.set_value(yeartext+this.addZero(monthtext));
	}
};

this.Calendar00_ondayclick = function(obj:nexacro.Calendar,e:nexacro.CalendarDayClickEventInfo)
{
	this.Calendar00_00.set_value(e.date);
};

this.addZero = function(string) {
  if (string.length === 1) {
    return "0" + string;
  } else {
    return string;
  }
}
```

---

[Back to Calendar](./README.md) | [Back to Index](../INDEX.md)