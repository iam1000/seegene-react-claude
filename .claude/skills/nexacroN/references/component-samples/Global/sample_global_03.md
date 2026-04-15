# sample_global_03

**Category:** Global
**Keywords:** `escape, decodeURI`

## Description

Converting Unicode

## Form Information

- **Form ID:** sample_global_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | text="ｎｅｘａｃｒｏ" |
| Edit01 | Edit | text="nexacro" |
| Edit02 | Edit | enable="false" |
| Button00 | Button | text="change" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit01.set_value(escape(this.Edit00.value));
	this.Edit02.set_value(unescape(this.Edit01.value));
};
```

---

[Back to Global](./README.md) | [Back to Index](../INDEX.md)