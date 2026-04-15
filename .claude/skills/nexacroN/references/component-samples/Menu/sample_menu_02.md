# sample_menu_02

**Category:** Menu
**Keywords:** `autohotkey, hotkeycolumn`

## Description

Executing Menu with Shortcut Keys

## Form Information

- **Form ID:** sample_menu_02
- **Size:** 670 x 200

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Menu00 | Menu | - |
| Button00 | Button | text="Button00" |

## Source Code

```javascript
this.Menu00_onmenuclick = function(obj:nexacro.Menu,e:nexacro.MenuClickEventInfo)
{
	if(e.id == "1")
		this.Button00.set_visible(true);
	else if(e.id == "2")
		this.Button00.set_visible(false);
};
```

---

[Back to Menu](./README.md) | [Back to Index](../INDEX.md)