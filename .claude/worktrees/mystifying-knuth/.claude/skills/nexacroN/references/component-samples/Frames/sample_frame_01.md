# sample_frame_01

**Category:** Frames
**Keywords:** `dragmovetype, replace`

## Description

Creating ChildFrame

## Form Information

- **Form ID:** sample_frame_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnCreate | Button | text="Create Frame" |
| btnBorder | Button | text="Draw Border" |
| btnDrag | Button | text="dragmovetype:&#13;&#10;normal" |

## Source Code

```javascript
this.btnCreate_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var objChildFrame = new ChildFrame();  
	objChildFrame.init("childframeNew", 30, 90, 200, 150, null, null);
	this.addChild("childframeNew", objChildFrame);
	objChildFrame.show();
};

this.btnBorder_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	if(this.childframeNew) {
		this.childframeNew.set_border("1px solid blue");
	} else {
		trace("childframeNew undefined");
	}
};

this.btnDrag_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	if(this.childframeNew.dragmovetype == "normal") {
		this.childframeNew.set_dragmovetype("none");
		obj.set_text(obj.text.replace("normal","none"));
	} else {
		this.childframeNew.set_dragmovetype("normal");
		obj.set_text(obj.text.replace("none","normal"));
	}
};
```

---

[Back to Frames](./README.md) | [Back to Index](../INDEX.md)