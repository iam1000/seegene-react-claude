# sample_imageviewer_03

**Category:** ImageViewer
**Keywords:** `imagewidth, imageheight`

## Description

Displaying Base64-encoded Image

## Form Information

- **Form ID:** sample_imageviewer_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Button00 | Button | text="Button00" |
| ImageViewer00 | ImageViewer | - |
| Static00 | Static | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.ImageViewer00.set_image(this.Edit00.value);
};

this.ImageViewer00_onload = function(obj:nexacro.ImageViewer,e:nexacro.LoadEventInfo)
{
	this.Static00.set_text(this.ImageViewer00.imagewidth + " x " + this.ImageViewer00.imageheight);
	this.resetScroll();
};
```

---

[Back to ImageViewer](./README.md) | [Back to Index](../INDEX.md)