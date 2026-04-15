# sample_calendar_02

**Category:** Calendar
**Keywords:** `getFullYear, getMonth, getDate, padLeft, value`

## Description

Getting Today's Date

## Form Information

- **Form ID:** sample_calendar_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| calToday | Calendar | - |
| btnToday | Button | text="Today" |

## Source Code

```javascript
this.btnToday_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var currDate = new Date();
	var year = currDate.getFullYear().toString().padLeft(4, "0");
	var month = (currDate.getMonth()+1).toString().padLeft(2, "0");
	var day = currDate.getDate().toString().padLeft(2, "0");

	this.calToday.set_value(year+month+day);
};
```

---

[Back to Calendar](./README.md) | [Back to Index](../INDEX.md)