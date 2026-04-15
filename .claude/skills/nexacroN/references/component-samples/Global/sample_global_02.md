# sample_global_02

**Category:** Global
**Keywords:** `encodeURI, decodeURI`

## Description

Converting URI

## Form Information

- **Form ID:** sample_global_02
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Static00 | Static | text="encodeURI" |
| Static01 | Static | text="decodeURI" |
| Edit00 | Edit | text="ｎｅｘａｃｒｏ" |
| Edit01 | Edit | text="nexacro" |
| Edit02 | Edit | enable="false" |
| Edit03 | Edit | enable="false" |
| Button00 | Button | text="change" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit02.set_value(encodeURI(this.Edit00.value));
	try	{
		this.Edit03.set_value(decodeURI(this.Edit01.value));
	}	catch (e)	{
		this.Edit03.set_value(e.name+": "+e.message);
	}
};
```

---

[Back to Global](./README.md) | [Back to Index](../INDEX.md)