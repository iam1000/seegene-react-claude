# sample_frame_04

**Category:** Frames
**Keywords:** `openalign, resizable`

## Description

Creating ChildFrame as Modal Window

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
	objChildFrame.set_overlaycolor("rgba(255,0,0,0.3)");
	objChildFrame.set_background("#ffffff");
	objChildFrame.showModal(this.getOwnerFrame());
};
```

---

[Back to Frames](./README.md) | [Back to Index](../INDEX.md)