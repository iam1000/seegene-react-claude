# sample_grid_79

**Category:** Grid Application
**Keywords:** `getTreeChildCount, getCellText, treeusebutton, treeuseline`

## Description

Checking Child Information in Tree Structure

## Form Information

- **Form ID:** sample_grid_79
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| TextArea00 | TextArea | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| label | STRING |
| level | STRING |

**Sample Data:**

```json
[
  {
    "level": "",
    "label": "A"
  },
  {
    "level": 1,
    "label": "B"
  },
  {
    "level": 2,
    "label": "C"
  },
  {
    "level": 2,
    "label": "D"
  },
  {
    "level": 2,
    "label": "E"
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var numChildcount = this.Grid00.getTreeChildCount(this.Dataset00.rowposition);
	var strChildInfo = "ChildCount = "+numChildcount+"\n";

	for(var i=0; i<numChildcount; i++)
	{
		var numChildRow = this.Grid00.getTreeChildRow(this.Dataset00.rowposition, i, false);
		strChildInfo += "Row = "+numChildRow+", RowText = "+this.Grid00.getCellText(numChildRow, 0)+"\n";
	}
	this.TextArea00.set_value(strChildInfo);
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)