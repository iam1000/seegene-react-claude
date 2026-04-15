# sample_frame_02

**Category:** Frames
**Keywords:** `addChild, separatesize`

## Description

Creating FrameSet

## Form Information

- **Form ID:** sample_frame_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnCreate | Button | text="Create Frame" |
| radioSeparate | Radio | - |

## Source Code

```javascript
this.sample_frame_02_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	var objHFrameset = new HFrameSet();  
	objHFrameset.init("hframesetNew", 30, 90, 400, 200);
	this.addChild("hframesetNew", objHFrameset);
	objHFrameset.set_border("1px solid #999999");
	objHFrameset.show();
};

this.btnCreate_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.addChildFrame(this.hframesetNew, "childFrame00");
	this.addChildFrame(this.hframesetNew, "childFrame01");
	this.addChildFrame(this.hframesetNew, "childFrame02");
};

this.addChildFrame = function(obj, strId:String)
{
	var objChildFrame = new ChildFrame();  
	objChildFrame.init(strId, 0, 0, 0, 0);
	obj.addChild(strId, objChildFrame);
	objChildFrame.set_border("1px solid #999999");
	objChildFrame.show();
}

this.radioSeparate_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.hframesetNew.set_separatesize(obj.value);
};
```

---

[Back to Frames](./README.md) | [Back to Index](../INDEX.md)