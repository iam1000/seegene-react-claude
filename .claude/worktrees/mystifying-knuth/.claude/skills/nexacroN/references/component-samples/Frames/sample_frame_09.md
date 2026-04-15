# sample_frame_09

**Category:** Frames
**Keywords:** `cx,cy`

## Description

Limiting Pop-up Window Size

## Form Information

- **Form ID:** sample_frame_04
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnPopup | Button | text="Create Popup" |

## Source Code

```javascript
this.btnPopup_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var objChildFrame = new ChildFrame();  
	objChildFrame.init("childframe00", 0, 0, 300, 300, null, null);
	objChildFrame.set_border("1px solid #999999");
	objChildFrame.set_showstatusbar(true);
	objChildFrame.set_openalign('center middle');
	objChildFrame.set_resizable(true);
	objChildFrame.set_background("#ffffff");
	objChildFrame.set_titletext(objChildFrame.width+"*"+objChildFrame.height);	
	objChildFrame.addEventHandler( "onsize", this.ChildFrame00_onsize, this);
	objChildFrame.showModal(this.getOwnerFrame(), {minsize:'150', maxsize:'400'});
};

this.ChildFrame00_onsize = function(obj:nexacro.ChildFrame, e:nexacro.SizeEventInfo)
{
	obj.set_titletext(obj.width+"*"+obj.height);	
	if(e.cx < obj.minsize) {
		obj.set_width(obj.minsize);
	}
	if(e.cx > obj.maxsize) {
		obj.set_width(obj.maxsize);
	}
	
	if(e.cy < obj.minsize){
		obj.set_height(obj.minsize);
	}
	if(e.cy > obj.maxsize){
		obj.set_height(obj.maxsize);
	}	
}
```

---

[Back to Frames](./README.md) | [Back to Index](../INDEX.md)