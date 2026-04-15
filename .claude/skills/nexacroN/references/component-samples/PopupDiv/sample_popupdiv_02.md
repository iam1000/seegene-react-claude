# sample_popupdiv_02

**Category:** PopupDiv
**Keywords:** `trackPopupByComponent, getOffsetHeight, getOffsetWidth`

## Description

Placing PopupDiv

## Form Information

- **Form ID:** sample_popupdiv_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |
| PopupDiv00 | PopupDiv | text="PopupDiv00", visible="false" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.PopupDiv00.trackPopupByComponent(obj, obj.getOffsetWidth(), obj.getOffsetHeight(), 160, 240);

};
```

---

[Back to PopupDiv](./README.md) | [Back to Index](../INDEX.md)