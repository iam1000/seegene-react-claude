# sample_string_05

**Category:** String
**Keywords:** `replace`

## Description

Removing Hyphens (-) in Strings

## Form Information

- **Form ID:** sample_string_04
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Button00 | Button | text="Button00" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var sRtn = this.Edit00.value;
	var sRomoveHyphen = sRtn.toString().replace(/[-]/g,"");
	//var sRomoveHyphen = nexacro.replaceAll(sRtn, "-", "");
	this.Edit01.set_value(sRomoveHyphen);
};
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)