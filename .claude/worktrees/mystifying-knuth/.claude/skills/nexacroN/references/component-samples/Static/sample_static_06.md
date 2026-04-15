# sample_static_06

**Category:** Static
**Keywords:** `fromCharCode`

## Description

Displaying Strings in Multiple Lines

## Form Information

- **Form ID:** sample_static_06
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Button00 | Button | text="Button00" |
| Static00 | Static | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Static00.set_text(this.Edit00.value
		+String.fromCharCode(10)
		+this.Edit01.value);
};
```

---

[Back to Static](./README.md) | [Back to Index](../INDEX.md)