# sample_grid_90

**Category:** Grid Application
**Keywords:** `getOffsetWidth, setFormatColProperty`

## Description

Adjusting Column Width to Data Width

## Form Information

- **Form ID:** sample_grid_90
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| staTemp | Static | text="TEST", visible="false" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |
| Column2 | STRING |
| Column3 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "ABCDEFGHIJK",
    "Column1": "ABC",
    "Column2": "ABC",
    "Column3": "ABCD"
  },
  {
    "Column1": "ABCD",
    "Column2": "ABC",
    "Column0": "ABC",
    "Column3": "AB"
  },
  {
    "Column2": "ABCDEFGHIJK",
    "Column1": "ABC",
    "Column0": "ABCD",
    "Column3": "ABCD"
  },
  {
    "Column0": "ABCDEFGHIJK",
    "Column1": "ABC",
    "Column2": "ABC",
    "Column3": "ABCDEFGHIJKLM"
  },
  {
    "Column0": "ABCDEFGHIJK",
    "Column1": "AB",
    "Column2": "ABC",
    "Column3": ""
  }
]
```

## Source Code

```javascript
this.Grid00_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var nMaxVal = 0;
	var nCurrVal = 0;
	var sMaxText = null;
	for(var i=0; i<this.Dataset00.rowcount; i++) {		
		nCurrVal = this.Dataset00.getColumn(i, e.col).length;
		if(nCurrVal > nMaxVal) {
			nMaxVal = nCurrVal;
			sMaxText = this.Dataset00.getColumn(i, e.col);
		}
	}
	this.staTemp.set_text(sMaxText);
	this.resetScroll();
	this.Grid00.setFormatColProperty(e.col, "size", this.staTemp.getOffsetWidth()+10);
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)