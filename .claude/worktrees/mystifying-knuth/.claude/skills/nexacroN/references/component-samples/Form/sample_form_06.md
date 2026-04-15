# sample_form_06

**Category:** Form
**Keywords:** `setTimer, ontimer, killTimer`

## Description

Displaying Time with Timer

## Form Information

- **Form ID:** sample_form_06
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnStart | Button | text="Time Start" |
| btnEnd | Button | text="Time Stop" |
| btnStart00 | Button | text="Time Start" |
| btnEnd00 | Button | text="Time Stop" |
| staticTime | Static | text="READY" |
| staticTime01 | Static | text="READY" |

## Source Code

```javascript
this.btnStart_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.setTimer(obj.timekey, 1000);
};

this.Form_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
{
	if(e.timerid == 1)
	{
		this.staticTime.set_text(this.Clock());
	} else if(e.timerid == 2) {
		this.staticTime01.set_text(this.Clock());
	}
};

this.Clock = function()
{
	var objDate = new Date();
	return objDate.toLocaleTimeString();
}

this.btnEnd_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.killTimer(obj.timekey);
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)