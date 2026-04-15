# sample_animation_03

**Category:** Animation
**Keywords:** `easing`

## Description

Creating Easing Effect

## Form Information

- **Form ID:** sample_animation_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="linear" |
| Button01 | Button | text="easeInSine" |
| btnPlay | Button | text="play" |
| btnInit | Button | text="pause" |
| btnStop | Button | text="stop" |
| Button02 | Button | text="easeOutSine" |
| Button03 | Button | text="easeInOutSine" |
| Static00 | Static | - |
| Static01 | Static | - |
| Radio00 | Radio | text="linear, easeinsine, easeoutsin...", value="linear, easeinsine, easeoutsin..." |

## Source Code

```javascript
this.sample_animation_03_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	this.initAnimation("Ani00", "linear", this.Button00);
	this.initAnimation("Ani01", "easeInSine", this.Button01);
	this.initAnimation("Ani02", "easeOutSine", this.Button02);
	this.initAnimation("Ani03", "easeInOutSine", this.Button03);
};

this.initAnimation = function(sId, sEasing, objButton)
{
    if(!this.all[sId])
	{
		var aniObj = new nexacro.Animation(sId, this);
		this.addChild(sId, aniObj);
		this.all[sId].addTarget("AniItem00", objButton, "left:300");		
		this.all[sId].set_direction("alternate");		
		this.all[sId].set_duration(3000);
		this.all[sId].set_direction("alternate");
		this.all[sId].set_loop(true);	
	}
	this.all[sId].set_easing(sEasing);
	objButton.set_text(sEasing);
}

this.btnPlay_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    this.Ani00.play();
    this.Ani01.play();
    this.Ani02.play();
    this.Ani03.play();	
};

this.btnPause_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    this.Ani00.pause();
    this.Ani01.pause();
    this.Ani02.pause();
    this.Ani03.pause();	
};

this.btnStop_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    this.Ani00.stop();
    this.Ani01.stop();
    this.Ani02.stop();
    this.Ani03.stop();
};


this.Radio00_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	var arr = e.postvalue.toString().split(",");
	this.initAnimation("Ani00", arr[0], this.Button00);
	this.initAnimation("Ani01", arr[1], this.Button01);
	this.initAnimation("Ani02", arr[2], this.Button02);
	this.initAnimation("Ani03", arr[3], this.Button03);
};
```

---

[Back to Animation](./README.md) | [Back to Index](../INDEX.md)