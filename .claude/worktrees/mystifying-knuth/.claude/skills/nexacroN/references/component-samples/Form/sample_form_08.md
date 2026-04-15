# sample_form_08

**Category:** Form
**Keywords:** `setStepIndex, getStepIndex`

## Description

Creating Slideshow with Step Function

## Form Information

- **Form ID:** sample_form_08
- **Size:** 200 x 300

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Static01 | Static | text="MANNERS&#13;&#13;&#10;MAKETH" |
| Static00 | Static | text="MANNERS" |
| Static02 | Static | text="MANNERS&#13;&#10;MAKETH&#13;&#..." |

## Source Code

```javascript
this.sample_form_08_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	this.setTimer(1, 2000);
};

this.sample_form_08_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
{
	if(e.timerid == 1){
		var bSucc = this.setStepIndex(this.getStepIndex()+1);
		if(!bSucc)
			this.setStepIndex(0);
	}
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)