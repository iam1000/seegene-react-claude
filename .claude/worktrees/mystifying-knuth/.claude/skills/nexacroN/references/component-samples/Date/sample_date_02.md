# sample_date_02

**Category:** Date
**Keywords:** `addDate, getDay`

## Description

Getting Information from Date Entered

## Form Information

- **Form ID:** sample_date_02
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |
| TextArea00 | TextArea | - |
| MaskEdit00 | MaskEdit | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.TextArea00.set_value("lastDay: "+this.fn_lastDay(this.MaskEdit00.value)+"\n"
		+"day of the week: "+this.fn_hanGulWeek(this.MaskEdit00.value));
};

this.fn_lastDay = function(sDate) 
{
    var dDate = "";
	
	if (sDate == null || sDate == "" || sDate == "undefined")  
	{
		dDate = (new Date()).addMonth(1);
	    dDate.addDate((new Date(dDate)).getDate()*-1);
    }
    else 
    {
	    dDate = new Date(parseInt(sDate.substr(0,4)), parseInt(sDate.substr(4,2)), 1);
	    dDate.addDate(-1);	
    }
	
    var sRtn =  dDate.getFullYear()
	+ (dDate.getMonth()+1).toString().padLeft(2, "0")
	+ dDate.getDate().toString().padLeft(2, "0");  
	
	return sRtn;
};

this.fn_hanGulWeek = function(sDate) 
{
    var dDate    = new Date(parseInt(sDate.substr(0,4))
		, parseInt(sDate.substr(4,2))-1
		, parseInt(sDate.substr(6,2)));
    var sDay     = dDate.getDay();
	var arrweek  = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");		
	var sRtn     = arrweek[sDay];
	
	return sRtn;
};
```

---

[Back to Date](./README.md) | [Back to Index](../INDEX.md)