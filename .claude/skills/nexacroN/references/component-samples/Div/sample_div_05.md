# sample_div_05

**Category:** Div
**Keywords:** `pos, onvscroll`

## Description

Creating Back to Top Button

## Form Information

- **Form ID:** sample_div_05
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Div00 | Div | text="Div00" |

## Source Code

```javascript
var nTop = this.Div00.form.Button00.top;

this.Div00_onvscroll = function(obj:nexacro.Div,e:nexacro.ScrollEventInfo)
{
	if( e.pos > 0 ) {
		this.Div00.form.Button00.set_visible(true);
		this.Div00.form.Button00.set_top(nexacro.toNumber(nTop)+ nexacro.toNumber(e.pos));
	} else {
		this.Div00.form.Button00.set_visible(false);
	}
};

this.Div00_Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Div00.form.vscrollbar.set_pos(0);
};
```

---

[Back to Div](./README.md) | [Back to Index](../INDEX.md)