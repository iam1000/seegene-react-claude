# sample_combo_10

**Category:** Combo
**Keywords:** `buttonsize`

## Description

Resizing dropbutton

## Form Information

- **Form ID:** sample_combo_10
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Combo00 | Combo | text="1", value="1" |
| Button00 | Button | text="buttonsize=40 20" |
| Button01 | Button | text="buttonsize=0" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Combo00.set_buttonsize("40 20");
};


this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Combo00.set_buttonsize(0);
};

this.sample_combo_10_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	this.Combo00.dropbutton.set_background("cornflowerblue");
};
```

---

[Back to Combo](./README.md) | [Back to Index](../INDEX.md)