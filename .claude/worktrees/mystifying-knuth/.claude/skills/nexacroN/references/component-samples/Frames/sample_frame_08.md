# sample_frame_08

**Category:** Frames
**Keywords:** `titlebar, titleicon, maxbutton, minbutton`

## Description

Changing Title Bar Area

## Form Information

- **Form ID:** sample_frame_08
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnCreate | Button | text="Create Frame" |

## Source Code

```javascript
this.btnCreate_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	if(this.parent.id=="TEST")
	{
		this.parent.titlebar.titleicon.set_font("20pt 'Arial'");
		this.parent.titlebar.titleicon.set_color("pink");
		this.parent.titlebar.minbutton.set_visible(false);
		this.parent.titlebar.maxbutton.set_visible(false);
		this.parent.set_titlebarheight(40);	
	}
	else
	{
		var objHFrameset = new HFrameSet();  
		objHFrameset.init("hframesetNew", 30, 90, 400, 200);
		this.addChild("hframesetNew", objHFrameset);
		objHFrameset.set_border("1px solid #999999");
		objHFrameset.show();
		
		var objChildFrame = new ChildFrame();  
		objChildFrame.init("TEST", 0, 0, 0, 0);
		objHFrameset.addChild("TEST", objChildFrame);
		objChildFrame.set_border("1px solid #999999");
		objChildFrame.set_formurl("Sample::sample_frame_08.xfdl");
		objChildFrame.show();
	}
};

this.sample_frame_08_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	if(this.parent.id=="TEST")
	{
		this.btnCreate.set_text('Set TitleBar');
	}
};
```

---

[Back to Frames](./README.md) | [Back to Index](../INDEX.md)