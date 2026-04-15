# sample_radio_02

**Category:** Radio
**Keywords:** `direction, columncount, rowcount`

## Description

Listing in Horizontal Direction

## Form Information

- **Form ID:** sample_radio_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| radioValue | Radio | - |
| radioDirection | Radio | - |
| staticDateformat | Static | text="rowcount:" |
| staticLocale | Static | text="columncount:" |
| staticDirection | Static | text="direction:" |
| editRowCount | Edit | - |
| editColumnCount | Edit | - |
| btnChange | Button | text="change direction" |

## Source Code

```javascript
this.btnChange_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	if(this.radioDirection.value != null)
	{
		this.radioValue.set_direction(this.radioDirection.value);
	}
	if(this.editRowCount.value != null)
	{
		this.radioValue.set_rowcount(this.editRowCount.value);
	}
	if(this.editColumnCount.value != null)
	{
		this.radioValue.set_columncount(this.editColumnCount.value);
	}
};
```

---

[Back to Radio](./README.md) | [Back to Index](../INDEX.md)