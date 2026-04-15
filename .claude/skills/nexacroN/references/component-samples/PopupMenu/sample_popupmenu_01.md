# sample_popupmenu_01

**Category:** PopupMenu
**Keywords:** `trackPopupByComponent, trackPopupByComponent`

## Description

Changing Pop-up Location

## Form Information

- **Form ID:** sample_popupmenu_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| popupmenuABC | PopupMenu | - |
| radioAlign | Radio | - |
| divClick | Div | text="Div00" |

## Source Code

```javascript
var align;
this.divClick_onclick = function(obj:nexacro.Div,e:nexacro.ClickEventInfo)
{
	var targetX = obj.width;
	var targetY = obj.height;
	if(align) {
		this.popupmenuABC.trackPopupByComponent(obj, targetX, targetY, align);
	} else {
		this.popupmenuABC.trackPopupByComponent(obj, targetX, targetY);
	}
};

this.radioAlign_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
		align = obj.value;
};
```

---

[Back to PopupMenu](./README.md) | [Back to Index](../INDEX.md)