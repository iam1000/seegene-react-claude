# sample_button_08

**Category:** Button
**Keywords:** `getSelectStatus, setSelectStatus, toggleSelectStatus`

## Description

Creating Simple Toggle Button

## Form Information

- **Form ID:** sample_button_08
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |
| Button01 | Button | text="Button01" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	obj.setSelectStatus(!obj.getSelectStatus());
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	obj.toggleSelectStatus();
};
```

---

[Back to Button](./README.md) | [Back to Index](../INDEX.md)