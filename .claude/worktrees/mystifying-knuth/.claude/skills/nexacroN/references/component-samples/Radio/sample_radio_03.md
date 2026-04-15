# sample_radio_03

**Category:** Radio
**Keywords:** `getInnerDataset`

## Description

Adding innerdataset Item

## Form Information

- **Form ID:** sample_radio_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Radio00 | Radio | - |
| Button00 | Button | text="Button00" |
| Edit00 | Edit | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var rtn = this.Radio00.getInnerDataset();
	var nindex = rtn.rowcount;
	rtn.insertRow(nindex);
	rtn.setColumn(nindex, "codecolumn", this.Edit00.value);
	rtn.setColumn(nindex, "datacolumn", this.Edit00.value);
	this.resetScroll();
};
```

---

[Back to Radio](./README.md) | [Back to Index](../INDEX.md)