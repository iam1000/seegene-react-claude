# sample_grid_39

**Category:** Grid Basics
**Keywords:** `fastvscrolltype`

## Description

Using Smart Scroll Function

## Form Information

- **Form ID:** sample_grid_38
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| gridData | Grid | binddataset="dsTest" |
| cbType | Combo | text="default", value="default" |
| btnData | Button | text="Data Loading" |

## Datasets

### dsTest

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |
| Column2 | STRING |
| Column3 | STRING |
| Column4 | STRING |
| Column5 | STRING |

## Source Code

```javascript
this.btnData_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var rIdx;
	this.dsTest.set_enableevent(false);
	for(var i=0;i<1000000;i++)	{
		rIdx = this.dsTest.addRow();
		this.dsTest.setColumn(rIdx, "Column0", i);
		this.dsTest.setColumn(rIdx, "Column1", i);
		this.dsTest.setColumn(rIdx, "Column2", i);
		this.dsTest.setColumn(rIdx, "Column3", i);
		this.dsTest.setColumn(rIdx, "Column4", i);
		this.dsTest.setColumn(rIdx, "Column5", i);
	}
	this.dsTest.set_enableevent(true);
};

this.cbType_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
{
	this.gridData.set_fastvscrolltype(e.postvalue);
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)