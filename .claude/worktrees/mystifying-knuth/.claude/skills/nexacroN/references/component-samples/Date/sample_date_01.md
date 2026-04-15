# sample_date_01

**Category:** Date

## Description

Implementing Timer

## Form Information

- **Form ID:** sample_date_01
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Combo00 | Combo | text="Combo00" |
| Button00 | Button | text="Button00" |
| Static00 | Static | text="Static00" |

## Source Code

```javascript
this.session_Endtime= null;
this.curTime = null;

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var holding_time = this.Combo00.value*60*1000;
	this.session_time = new Date().valueOf();
	this.session_Endtime = new Date(this.session_time + holding_time);  
	var millis = this.session_Endtime- this.session_time;
	var t = this.millisToTime(millis);
	this.Static00.set_text("It will be logout after " + t[1]+"Minute and "+t[2]+ " Seconds automatically.");     
	this.setTimer(100,1000);
	
};

this.sample_date_01_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
{
	if(e.timerid == 100)
	{
		this.session_time = new Date().valueOf();
		var millis = this.session_Endtime- this.session_time;
		var t = this.millisToTime(millis);
		if(t[2] <= 0 )
		{
			this.Static00.set_text("Session is terminated, it is logout automatically. ");
			return;
		}
		this.Static00.set_text("It will be logout after " + t[1]+" Minute and "+t[2]+ " Seconds automatically.");
	}
};

this.millisToTime =  function (millis)
{
	//Hour
	var hours = Math.floor(millis/(1000*60*60), 0);
	//Minute
	var minutes = Math.floor(millis/(1000*60) % 60, 0);
	//Seconds
	var seconds = Math.floor((millis/1000) % 60, 0);
	return [hours,minutes,seconds];
};
```

---

[Back to Date](./README.md) | [Back to Index](../INDEX.md)