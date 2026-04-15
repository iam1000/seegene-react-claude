# sample_grid_103

**Category:** Grid Application
**Keywords:** `getCaseCountNF`

## Description

Creating Calendar-type Schedule with Grid Component

## Form Information

- **Form ID:** sample_grid_103
- **Size:** 340 x 390

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="ds_calendar" |
| Button01 | Button | text=">" |
| Button02 | Button | text=">>" |
| Button03 | Button | text="<" |
| Button00 | Button | text="<<" |
| Combo00 | Combo | text="Combo00" |
| Combo01 | Combo | text="Combo00" |
| ListBox00 | ListBox | - |

## Datasets

### ds_calendar

**Columns:**

| Column | Type |
|--------|------|
| cal0 | STRING |
| cal1 | STRING |
| cal2 | STRING |
| cal3 | STRING |
| cal4 | STRING |
| cal5 | STRING |
| cal6 | STRING |

**Sample Data:**

```json
[
  {},
  {},
  {},
  {},
  {}
]
```

### ds_Year

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |

### ds_Month

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| date | STRING |
| title | STRING |

**Sample Data:**

```json
[
  {
    "date": 20200912,
    "title": "Burnley FC vs Manchester United"
  },
  {
    "date": 20200912,
    "title": "Manchester City vs Aston Villa"
  },
  {
    "date": 20200912,
    "title": "Fulham FC vs Arsenal FC"
  },
  {
    "date": 20200912,
    "title": "Crystal Palace vs Southampton FC"
  },
  {
    "date": 20200912,
    "title": "West Ham United vs Newcastle United"
  }
]
```

## Source Code

```javascript
this.minYear = -100;
this.maxYear = 100;

this.sample_grid_103_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	var date = new nexacro.Date(2020,8,1);
	this.fn_setYear(date.getFullYear());
	this.fn_setMonth(date.getMonth());
	this.fn_setCalendar();	
};

this.fn_setYear = function(numCurrentYear)
{
	this.ds_Year.set_enableevent(false);
	for(var i=numCurrentYear+this.minYear ; i<=numCurrentYear+this.maxYear ; i++)
	{
		var nRow = this.ds_Year.addRow();
		this.ds_Year.setColumn(nRow, 0, i);
		this.ds_Year.setColumn(nRow, 1, i);
	}
	this.ds_Year.set_enableevent(true);
	this.Combo00.set_value(numCurrentYear);
}

this.fn_setMonth = function(numCurrentMonth)
{
	this.ds_Month.set_enableevent(false);
	for(var i=0 ; i<12 ; i++)
	{
		var nRow = this.ds_Month.addRow();
		this.ds_Month.setColumn(nRow, 0, i);
		this.ds_Month.setColumn(nRow, 1, i+1);
	}
	this.ds_Month.set_enableevent(true);
	this.Combo01.set_value(numCurrentMonth);
}

this.Button_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
{
	if(obj.dataType == "month")
	{
		var numMonth = nexacro.toNumber(this.Combo01.value)+nexacro.toNumber(obj.dataValue);
		var value = (numMonth%12)!=0 ? (numMonth%12) : 0;
		trace(value);
		this.Combo01.set_value(value);
	} 
	else if(obj.dataType == "year") 
	{
		var numYear = nexacro.toNumber(this.Combo00.value)+nexacro.toNumber(obj.dataValue);
		this.Combo00.set_value(numYear);
	}
	this.fn_setCalendar();
}

this.Combo_onitemchanged = function(obj:Combo, e:nexacro.ItemChangeEventInfo)
{
	this.fn_setCalendar();
}

this.fn_setCalendar = function()
{
	var y = nexacro.toNumber(this.Combo00.value);	
	var m = nexacro.toNumber(this.Combo01.value);
	
	var arr = this.getCalendarArr(y,m);

	this.ds_calendar.set_enableevent(false);
	this.ds_calendar.clearData();
	for(var i = 0 ; i < arr.length ; i++){
		this.ds_calendar.addRow();
		for(var y = 0 ; y < arr[i].length; y++)
		{
			if(arr[i][y] != null){ this.ds_calendar.setColumn(i,y, arr[i][y]); }
		}
	}
	this.ds_calendar.set_enableevent(true);
	this.Dataset00.filter("date == '00000000'");
	this.Grid00.clearSelect();
}

this.Grid00_oncellclick = function(obj:Grid, e:nexacro.GridClickEventInfo)
{
	this.Dataset00.filter("date == '"+this.fn_getDateString(this.ds_calendar.getColumn(e.row,e.cell))+"'");
}

this.fn_getDateString = function(strDay)
{
	return new nexacro.Date(this.Combo00.value ,this.Combo01.value ,strDay).toString();
}

this.fn_checkTable = function(strDay)
{
	return this.Dataset00.getCaseCountNF("date == '"+this.fn_getDateString(strDay)+"'");
}

this.getCalendarArr = function(y,m,d)
{
	var date = new nexacro.Date();
	date.setFullYear(y, m , 1);
	return this.get_DateArr(date, new Array(), m);
}

this.get_DateArr = function(date, arr , month)
{
	if(month != date.getMonth())
		return arr;
		
	var idx = date.getDay();
	if(arr.length == 0 ) {
		arr[0] = new Array();
	} else {
		if(idx == 0) {
			arr[arr.length] = new Array();
		}
	}
	arr[arr.length-1][idx] = date.getDate();
	date.addDate(1);
	return this.get_DateArr(date, arr, month);
}
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)