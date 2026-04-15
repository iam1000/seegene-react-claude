# sample_progressbar_02

**Category:** ProgressBar
**Keywords:** `max, pos,step,smooth,stepIt,setTimer,killTimer`

## Description

Displaying Progress Status

## Form Information

- **Form ID:** sample_progressbar_02_nexacro16
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| ProgressBar00 | ProgressBar | text="ProgressBar00" |
| ProgressBar01 | ProgressBar | text="ProgressBar01" |
| btn_start | Button | text="Start" |
| btn_reset | Button | text="Reset" |

## Source Code

```javascript
this.btn_start_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.setTimer(0, 100);
	
};

this.Form_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
{
	var varProgressValue00 = (this.ProgressBar00.pos / this.ProgressBar00.max) * 100;
	var varProgressValue01 = (this.ProgressBar01.pos / this.ProgressBar01.max) * 100;

	if(e.timerid == 0)
	{
		if(this.ProgressBar00.pos == this.ProgressBar01.max && this.ProgressBar01.pos == this.ProgressBar01.max)
		{
			this.killTimer(0);
		}
		
		this.ProgressBar00.stepIt();
		this.ProgressBar00.set_text(parseInt(varProgressValue00) + " %");
		
		this.ProgressBar01.stepIt();
		this.ProgressBar01.set_text(parseInt(varProgressValue01) + " %");
	}
	
};

this.btn_reset_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.ProgressBar00.set_pos(0);
	this.ProgressBar00.set_text("ProgressBar00");
	
	this.ProgressBar01.set_pos(0);
	this.ProgressBar01.set_text("ProgressBar01");
	
	this.killTimer(0);
	
};
```

---

[Back to ProgressBar](./README.md) | [Back to Index](../INDEX.md)