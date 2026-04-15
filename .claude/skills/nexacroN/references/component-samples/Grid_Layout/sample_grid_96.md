# sample_grid_96

**Category:** Grid Layout
**Keywords:** `getCellCount, getHeadValue`

## Description

Getting Column Title Text of Merged Head Area

## Form Information

- **Form ID:** sample_grid_96
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |
| Column2 | STRING |
| Column3 | STRING |
| Column4 | STRING |

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var str = this.fn_getHeadText(obj, e.cell);
	obj.setCellProperty("body", e.cell, "text", str);
};

this.fn_getHeadText = function(obj, nCell)
{
	for(j=nCell; j>=0; j--) {
		var nCellColIndex = obj.getCellProperty("Body", j, "col");
		var icell = obj.getCellCount("Head");
	
		for(i=icell; i>=0; i--) {
			if(obj.getCellProperty("Head", i, "row")==0 && nCellColIndex == obj.getCellProperty("Head", i, "col")) {
				return obj.getHeadValue(i);
			} else if(obj.getCellProperty("Head", i, "row")==1 && nCellColIndex == obj.getCellProperty("Head", i, "col")) {
				return obj.getHeadValue(i);
			}
		}
	}
}
```

---

[Back to Grid Layout](./README.md) | [Back to Index](../INDEX.md)