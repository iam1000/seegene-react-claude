# sample_animation_01

**Category:** Animation
**Keywords:** `loop`

## Description

Changing Size & Position

## Form Information

- **Form ID:** sample_animation_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |
| Button01 | Button | text="Button01" |
| btnPlay | Button | text="play" |
| btnPause | Button | text="pause" |
| btnStop | Button | text="stop" |

## Source Code

```javascript
this.sample_animation_01_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
    var aniObj = new nexacro.Animation("Ani00", this);
    this.addChild("Ani00", aniObj); 
    
    this.Ani00.set_loop(true);
    this.Ani00.set_direction("alternate");
    
    this.Ani00.addTarget("AniItem00", this.Button00, "width:200, left:300");
    this.Ani00.addTarget("AniItem01", this.Button01, "width:50, left:200");    
};

this.btnPlay_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    this.Ani00.play();
};

this.btnPause_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
  this.Ani00.pause();
};

this.btnStop_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    this.Ani00.stop();
};
```

---

[Back to Animation](./README.md) | [Back to Index](../INDEX.md)