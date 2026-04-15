# sample_animationtimeline_01

**Category:** AnimationTimeline
**Keywords:** `addTarget`

## Description

Processing Animation in Order

## Form Information

- **Form ID:** sample_animationtimeline_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |
| Button01 | Button | text="Button01" |
| btnPlay | Button | text="play" |
| btnInit | Button | text="init" |

## Source Code

```javascript
this.sample_animationtimeline_01_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	var anitimeObj = new nexacro.AnimationTimeline("Anitime00", this);
	this.addChild("Anitime00", anitimeObj);
	
	var aniObj00 = new nexacro.Animation("Ani00", this);
	this.addChild("Ani00", aniObj00);
	this.Ani00.addTarget("AniItem00", this.Button00, "left:300");
	
	var aniObj01 = new nexacro.Animation("Ani01", this);
	this.addChild("Ani01", aniObj01);
	this.Ani01.addTarget("AniItem00", this.Button01, "left:300");
	
	this.Anitime00.addTarget("AniTimeItem00", aniObj00);
	this.Anitime00.addTarget("AniTimeItem01", aniObj01);
};

this.btnPlay_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Anitime00.play();
};

this.btnInit_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Button00.set_left(20);
	this.Button01.set_left(20);
};
```

---

[Back to AnimationTimeline](./README.md) | [Back to Index](../INDEX.md)