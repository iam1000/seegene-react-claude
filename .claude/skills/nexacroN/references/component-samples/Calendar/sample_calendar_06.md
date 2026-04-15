# sample_calendar_06

**Category:** Calendar
**Keywords:** `innerdataset, backgroundcolumn, textcolorcolumn, bordercolumn`

## Description

Specifying Holidays

## Form Information

- **Form ID:** sample_calendar_06
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnCal | Button | text="Public holiday" |
| calHoliday | Calendar | value="" |

## Datasets

### dsHoliday

**Columns:**

| Column | Type |
|--------|------|
| backgroundcolumn | STRING |
| bordercolumn | STRING |
| datecolumn | STRING |
| textcolorcolumn | STRING |

## Source Code

```javascript
this.btnCal_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.dsHoliday.clearData();
	
	var colorBordercolumn = "1px solid green";
	var colorBackgroundcolumn = "yellow";
	var colorTextcolorcolumn = "red";
	
	var currDate = new Date();
	var year = currDate.getFullYear().toString().padLeft(4, "0");	
	
	for(var i=1;i<13;i++) {
		var rIdx = this.dsHoliday.addRow();
		this.dsHoliday.setColumn(rIdx, "backgroundcolumn", colorBackgroundcolumn);
		this.dsHoliday.setColumn(rIdx, "textcolorcolumn", colorTextcolorcolumn);
		this.dsHoliday.setColumn(rIdx, "bordercolumn", colorBordercolumn);
		this.dsHoliday.setColumn(rIdx, "datecolumn", (year+i.toString().padLeft(2, "0"))+"01");	
		
	}
}
```

---

[Back to Calendar](./README.md) | [Back to Index](../INDEX.md)