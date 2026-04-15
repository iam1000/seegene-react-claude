# sample_form_01

**Category:** Form
**Keywords:** `onlayoutchanged`

## Description

Changing Layout According to Screen Size

## Form Information

- **Form ID:** sample_form_01
- **Size:** 600 x 600

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnOpen | Button | text="OPEN" |
| Button01 | Button | text="Button01" |
| Button02 | Button | text="Button02" |
| staticLayoutInfo | Static | text="" |
| Button01 | Button | - |
| Button02 | Button | - |

## Source Code

```javascript
this.btnOpen_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	nexacro.open("TEST", "Sample::sample_form_01.xfdl", this.getOwnerFrame());
};

this.Form_onlayoutchanged = function(obj:nexacro.Form,e:nexacro.LayoutChangeEventInfo)
{
	this.staticLayoutInfo.set_text(e.oldlayout + "->" + e.newlayout + " (" + this.width + "x" + this.height + ")");
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)