# sample_dataset_09

**Category:** Dataset
**Keywords:** `getGroupRangeStart, getGroupRangeCount`

## Description

Getting Calculation Values Related to Grouped Data

## Form Information

- **Form ID:** sample_dataset_09
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
| Column1 | INT |

**Sample Data:**

```json
[
  {
    "Column0": "A",
    "Column1": 10
  },
  {
    "Column0": "A",
    "Column1": 20
  },
  {
    "Column0": "A",
    "Column1": 30
  },
  {
    "Column0": "B",
    "Column1": 20
  },
  {
    "Column0": "B",
    "Column1": 30
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var temp_str;
	var nStartIdx ;
	var nEndIdx ;
	if(this.Dataset00.getRowLevel(e.row)==0)
	{
		temp_str = "CLICK SUBTOTAL ROW";
	}
	else
	{
		nStartIdx = this.Dataset00.getGroupRangeStart(e.row);
		nEndIdx = this.Dataset00.getGroupRangeStart(e.row)+this.Dataset00.getGroupRangeCount(e.row);
		temp_str = "keystring: "+this.Dataset00.getColumn(e.row, "Column0")+"\n";
		temp_str += "getAvg: "+nexacro.round(this.Dataset00.getAvg("Column1", nStartIdx, nEndIdx),2)+"\n";
		temp_str += "getMax: "+this.Dataset00.getMax("Column1", nStartIdx, nEndIdx)+"\n";
		temp_str += "getMin: "+this.Dataset00.getMin("Column1", nStartIdx, nEndIdx)+"\n";
		temp_str += "getSum: "+this.Dataset00.getSum("Column1", nStartIdx, nEndIdx)+"\n";
		temp_str += "getCount: "+this.Dataset00.getCount("Column1", nStartIdx, nEndIdx);
	}
	this.TextArea00.set_value(temp_str);
};
```

---

[Back to Dataset](./README.md) | [Back to Index](../INDEX.md)