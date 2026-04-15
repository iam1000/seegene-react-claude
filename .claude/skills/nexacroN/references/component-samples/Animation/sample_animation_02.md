# sample_animation_02

**Category:** Animation
**Keywords:** `easing, duration, onrun`

## Description

Creating Number Counter Effect

## Form Information

- **Form ID:** sample_animation_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnPlay | Button | text="play" |
| btnInit | Button | text="init" |
| Edit00 | Edit | - |
| Static00 | Static | text="0" |

## Source Code

```javascript
this.sample_animation_02_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
    var aniObj = new nexacro.Animation("Ani00", this);
    this.addChild("Ani00", aniObj);
    
    this.Ani00.set_easing("linear");
	this.Ani00.set_duration("5000");
	
    this.Ani00.addTarget("AniItem00", this.Static00, "text:100");
	this.Ani00.setEventHandler("onrun", this.Ani00_onrun, this);
};

this.btnPlay_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	if(this.Edit00.value > 0)
	{
		this.Ani00.items.AniItem00.props = "text:"+this.Edit00.value;
	}
    this.Ani00.play();
};

this.btnInit_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Static00.set_text(0);
};

this.Ani00_onrun = function(obj:nexacro.Animation,e:nexacro.AnimationEventInfo)
{
	this.Static00.set_text(nexacro.round(this.Static00.text));
};
```

---

[Back to Animation](./README.md) | [Back to Index](../INDEX.md)