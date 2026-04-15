# sample_div_01

**Category:** Div
**Keywords:** `url`

## Description

Showing Different Screen

## Form Information

- **Form ID:** sample_div_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| divMain | Div | text="divMain" |
| btnLeft | Button | text="left top red" |
| btnRight | Button | text="right bottom blue" |
| btnInit | Button | text="Init" |

## Source Code

```javascript
this.btnLeft_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.divMain.set_url("Sample::sample_div_01_left.xfdl");
};


this.btnRight_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.divMain.set_url("Sample::sample_div_01_right.xfdl");
};

this.btnInit_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.divMain.set_url(null);
};
```

---

[Back to Div](./README.md) | [Back to Index](../INDEX.md)