# sample_grid_95

**Category:** Grid Basics
**Keywords:** `getTextSize, getFormatColSize`

## Description

Displaying with Tooltip for Text Larger than Column Width

## Form Information

- **Form ID:** Grid_CellTooltip
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
| Column0 | STRING |
| Column1 | STRING |
| Column2 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": 1,
    "Column1": "test test test test 123",
    "Column2": "abc"
  },
  {
    "Column0": 2,
    "Column1": "test1",
    "Column2": "nexacro font size test"
  },
  {
    "Column0": 3,
    "Column1": "test2345678901234567890",
    "Column2": "abcdefghijklmnopstuvwxyz"
  }
]
```

## Source Code

```javascript
this.Grid00_onmousemove = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
{
	var nCellSize = obj.getFormatColSize(e.cell);
	var strText   = obj.getCellText(e.row, e.cell);
	var nTextLen  = nexacro.getTextSize( strText, obj.font );
	
	this.TextArea00.set_value("strText: "+strText+"\n");
	this.TextArea00.insertText("nCellSize: "+nCellSize+"\n");
	this.TextArea00.insertText("nTextLen: "+nTextLen.nx+"\n");

	if( nCellSize < nTextLen.nx){
		obj.setCellProperty( "Body", e.cell, "tooltiptext", strText);
	} else {
		obj.setCellProperty( "Body", e.cell, "tooltiptext", "");
	}	
};

trace(nexacro.getProjectPath());
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)