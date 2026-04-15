# sample_imageviewer_01

**Category:** ImageViewer
**Keywords:** `image`

## Description

Showing Image in Image Folder

## Form Information

- **Form ID:** sample_imageviewer_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| imageviewerMain | ImageViewer | text="" |
| btn320 | Button | text="320x480" |
| btn160 | Button | text="160x240" |

## Source Code

```javascript
this.btn320_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.imageviewerMain.set_image("imagerc::320px-Bob_Dylan_1978.jpg");
};



this.btn160_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.imageviewerMain.set_image("imagerc::160px-Bob_Dylan_1978.jpg");
};
```

---

[Back to ImageViewer](./README.md) | [Back to Index](../INDEX.md)