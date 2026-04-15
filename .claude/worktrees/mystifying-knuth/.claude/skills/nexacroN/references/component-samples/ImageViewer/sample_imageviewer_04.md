# sample_imageviewer_04

**Category:** ImageViewer
**Keywords:** `imagewidth, imageheight`

## Description

Showing Alternative Image for No Image Found

## Form Information

- **Form ID:** sample_imageviewer_04
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| ImageViewer00 | ImageViewer | - |
| ImageViewer01 | ImageViewer | - |
| Button00 | Button | text="set_Image" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.ImageViewer00.set_image("https://dummy/Jack_Black_2007.jpg");
	this.ImageViewer01.set_image("https://dummy/Jack_Black_2007.jpg");
};

// https://commons.wikimedia.org/wiki/File:2016_RiP_Tenacious_D_-_Jack_Black_-_by_2eight_-_8SC8891.jpg
this.ImageViewer00_onload = function(obj:nexacro.ImageViewer,e:nexacro.LoadEventInfo)
{
	if(obj.imageheight == 0 && obj.imagewidth == 0)
	{
		this.ImageViewer00.set_image("https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/2016_RiP_Tenacious_D_-_Jack_Black_-_by_2eight_-_8SC8891.jpg/160px-2016_RiP_Tenacious_D_-_Jack_Black_-_by_2eight_-_8SC8891.jpg");
	}
};
```

---

[Back to ImageViewer](./README.md) | [Back to Index](../INDEX.md)