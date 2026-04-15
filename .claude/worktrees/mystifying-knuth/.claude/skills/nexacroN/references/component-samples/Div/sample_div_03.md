# sample_div_03

**Category:** Div
**Keywords:** `ondrag, cursor`

## Description

Implementing Simple splitter

## Form Information

- **Form ID:** test
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Div00 | Div | text="Div00" |

## Source Code

```javascript
this.Div00_ondragmove = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
{
	this.Div00.form.Div01.set_left(e.clientx);
	this.Div00.form.resetScroll();
};

this.Div00_Div01_ondrag = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
{
	return true;
};
```

---

[Back to Div](./README.md) | [Back to Index](../INDEX.md)