# sample_popupmenu_02

**Category:** PopupMenu
**Keywords:** `iconcolumn`

## Description

Adding Divider Lines

## Form Information

- **Form ID:** sample_popupmenu_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| popupmenu00 | PopupMenu | - |
| Button00 | Button | text="trackPopupByComponent" |

## Source Code

```javascript
// this.sample_popupmenu_02_onclick = function(obj:nexacro.Form,e:nexacro.ClickEventInfo)
// {
// 	this.popupmenu00.trackPopupByComponent(this, e.clientx, e.clienty);
// };

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.popupmenu00.trackPopupByComponent(this, e.clientx, e.clienty);
};
```

---

[Back to PopupMenu](./README.md) | [Back to Index](../INDEX.md)