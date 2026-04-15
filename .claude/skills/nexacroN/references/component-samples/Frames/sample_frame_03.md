# sample_frame_03

**Category:** Frames
**Keywords:** `arrange, showtitlebar`

## Description

Arranging ChildFrame

## Form Information

- **Form ID:** sample_frame_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnCreate | Button | text="Create Frame" |
| btnAddChild | Button | text="Add ChildFrame" |
| radioArrange | Radio | - |

## Source Code

```javascript
var frameIdx = 0;

this.btnCreate_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var objFrameset = new FrameSet();  
	objFrameset.init("framesetNew", 30, 90, 400, 400);
	this.addChild("framesetNew", objFrameset);
	objFrameset.set_border("1px solid #999999");
	objFrameset.show();
};

this.btnAddChild_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var objChildFrame = new ChildFrame();  
	objChildFrame.init("childframe"+frameIdx, frameIdx, frameIdx, 40, 40);
	this.framesetNew.addChild("childframe"+frameIdx, objChildFrame);
	objChildFrame.set_border("1px solid #999999");
	objChildFrame.set_showtitlebar(false);
	objChildFrame.set_background('#'+Math.random().toString(16).slice(-6));
	objChildFrame.show();
	frameIdx = frameIdx + 10;
};

this.radioArrange_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.framesetNew.arrange(obj.value);
};
```

---

[Back to Frames](./README.md) | [Back to Index](../INDEX.md)