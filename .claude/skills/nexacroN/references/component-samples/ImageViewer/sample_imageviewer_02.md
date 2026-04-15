# sample_imageviewer_02

**Category:** ImageViewer
**Keywords:** `stretch`

## Description

Resizing Image

## Form Information

- **Form ID:** sample_imageviewer_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| imageviewerMain | ImageViewer | text="" |
| Button00 | Button | text="fixaspectratio" |
| Button01 | Button | text="fit" |
| Button02 | Button | text="none" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.imageviewerMain.set_stretch('fixaspectratio');
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.imageviewerMain.set_stretch('fit');
};

this.Button02_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.imageviewerMain.set_stretch('none');
};
```

---

[Back to ImageViewer](./README.md) | [Back to Index](../INDEX.md)