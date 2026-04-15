# sample_videoplayer_02

**Category:** VideoPlayer
**Keywords:** `play,pause,stop,currenttime,duration,mute,oncurrenttimechanged,onplaystatuschanged,newstate`

## Description

Creating Control Function

## Form Information

- **Form ID:** sample_videoplayer_02
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| VideoPlayer00 | VideoPlayer | - |
| btn_play | Button | text="Play" |
| btn_pause | Button | text="Pause" |
| btn_stop | Button | text="Stop" |
| btn_forward | Button | text="Forward" |
| btn_rewind | Button | text="Rewind" |
| stt_playtime | Static | enable="false" |
| stt_playtime_title | Static | text="Play Time:", enable="false" |
| chk_mute | CheckBox | text="Mute" |

## Source Code

```javascript
this.btn_play_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.VideoPlayer00.set_url("https://github.com/mediaelement/mediaelement-files/blob/master/big_buck_bunny.mp4?raw=true"); //http://www.mediaelementjs.com/
	this.VideoPlayer00.play();
};

this.btn_pause_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.VideoPlayer00.pause();
};

this.btn_stop_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.VideoPlayer00.stop();
};

this.btn_forward_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.VideoPlayer00.set_currenttime(this.VideoPlayer00.currenttime + 2000);
};

this.btn_rewind_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.VideoPlayer00.set_currenttime(this.VideoPlayer00.currenttime - 2000);
};

this.chk_mute_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
{
	if(e.postvalue)
	{	
		this.VideoPlayer00.set_mute(true);
	}
	else
	{
		this.VideoPlayer00.set_mute(false);
	}	
};

this.VideoPlayer00_oncurrenttimechanged = function(obj:nexacro.VideoPlayer,e:nexacro.VideoCurrentTimeChangedEventInfo)
{
	var strPlayTime = nexacro.round(this.VideoPlayer00.currenttime / 1000) + " / " + nexacro.round(this.VideoPlayer00.duration / 1000);
		
	this.stt_playtime.set_text(strPlayTime);
};

this.VideoPlayer00_onplaystatuschanged = function(obj:nexacro.VideoPlayer,e:nexacro.VideoPlayStateChangedEventInfo)
{
	switch(e.newstate)
	{	
		case "stop":
				this.stt_playtime.set_text(" ");
		case "pause":
		case "play":
		case "buffer":
		case "ended":
		default:
			trace("state: "+ e.newstate);
	}
};
```

---

[Back to VideoPlayer](./README.md) | [Back to Index](../INDEX.md)