# sample_animation_04

**Category:** Animation
**Keywords:** `oncomplete`

## Description

Processing Animation in Order

## Form Information

- **Form ID:** sample_animation_04
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
this.sample_animation_04_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
    var aniObj00 = new nexacro.Animation("Ani00", this);
    this.addChild("Ani00", aniObj00);
    this.Ani00.addTarget("AniItem00", this.Button00, "left:300");
	this.Ani00.setEventHandler("oncomplete", this.Ani00_oncomplete, this);
	this.Ani00.set_loop(true);
	this.Ani00.set_loopcount(2);
	
    var aniObj01 = new nexacro.Animation("Ani01", this);
    this.addChild("Ani01", aniObj01);
    this.Ani01.addTarget("AniItem00", this.Button01, "left:300");   
};

this.btnPlay_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    this.Ani00.play();
};

this.btnInit_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Button00.set_left(20);
	this.Button01.set_left(20);
};

this.Ani00_oncomplete = function(obj:nexacro.Animation,e:nexacro.AnimationEventInfo)
{
	this.Ani01.play();
};
```

---

[Back to Animation](./README.md) | [Back to Index](../INDEX.md)