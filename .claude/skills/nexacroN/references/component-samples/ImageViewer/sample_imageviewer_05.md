# sample_imageviewer_05

**Category:** ImageViewer
**Keywords:** `imagewidth, imageheight`

## Description

Processing Scroll for Image Larger than ImageViewer

## Form Information

- **Form ID:** sample_imageviewer_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btn320 | Button | text="320x480" |
| btn160 | Button | text="160x240" |
| Div00 | Div | text="Div00" |

## Source Code

```javascript
this.btn320_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Div00.form.imageviewerMain.set_image("imagerc::320px-Bob_Dylan_1978.jpg");
};

this.btn160_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Div00.form.imageviewerMain.set_image("imagerc::160px-Bob_Dylan_1978.jpg");
};

this.Div00_imageviewerMain_onload = function(obj:nexacro.ImageViewer,e:nexacro.LoadEventInfo)
{
	var nHeight = obj.imageheight;
	var nWidth = obj.imagewidth;
	
	obj.set_height(nHeight);
	obj.set_width(nWidth);
	
	this.Div00.form.resetScroll();
};
```

---

[Back to ImageViewer](./README.md) | [Back to Index](../INDEX.md)