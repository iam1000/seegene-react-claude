# sample_animation_05

**Category:** Animation
**Keywords:** `easing, play`

## Description

Creating Expanding Menu Effect

## Form Information

- **Form ID:** sample_animation_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnPlay | Button | text="▶" |
| Div00 | Div | text="Menu Area" |

## Source Code

```javascript
this.sample_animation_01_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
    var aniObj00 = new nexacro.Animation("Ani00", this);
    this.addChild("Ani00", aniObj00);
	this.Ani00.addTarget("AniItem00", this.btnPlay, "width:20, left:329");
	this.Ani00.addTarget("AniItem01", this.Div00, "width:300, left:30");
	this.Ani00.setEventHandler("oncomplete", this.Ani00_oncomplete, this);
	this.Ani00.set_easing("easeInSine");

    var aniObj01 = new nexacro.Animation("Ani01", this);
    this.addChild("Ani01", aniObj01);
	this.Ani01.addTarget("AniItem00", this.btnPlay, "width:20, left:30");
	this.Ani01.addTarget("AniItem01", this.Div00, "width:1, left:30");
	this.Ani01.setEventHandler("oncomplete", this.Ani01_oncomplete, this);
	this.Ani01.set_easing("easeInSine");
};

this.btnPlay_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	if( obj.text == "▶")
	{		
		this.Ani00.play();
	} else {
		this.Ani01.play();
	}
};

this.Ani00_oncomplete = function(obj:nexacro.Animation,e:nexacro.AnimationEventInfo)
{  
  this.btnPlay.set_text("◀");
};

this.Ani01_oncomplete = function(obj:nexacro.Animation,e:nexacro.AnimationEventInfo)
{  
  this.btnPlay.set_text("▶");
};
```

---

[Back to Animation](./README.md) | [Back to Index](../INDEX.md)