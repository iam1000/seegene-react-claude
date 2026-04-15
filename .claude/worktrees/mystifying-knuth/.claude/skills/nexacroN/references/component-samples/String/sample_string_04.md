# sample_string_04

**Category:** String
**Keywords:** `padLeft, pdfRight`

## Description

Filling with Other Characters to Specified Length

## Form Information

- **Form ID:** sample_string_04
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="change" |
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Edit02 | Edit | - |
| Spin00 | Spin | value="20" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit01.set_value(this.Edit00.value.padLeft(this.Spin00.value, "*"));
	this.Edit02.set_value(this.Edit00.value.padRight(this.Spin00.value, "*"));
};
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)