# sample_grid_94

**Category:** Grid Basics
**Keywords:** `setRealRowSize, extendsizetype`

## Description

Directly Specifying Grid Component Row Height

## Form Information

- **Form ID:** sample_grid_94
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

**Sample Data:**

```json
[
  {
    "Column0": "",
    "Column1": "A"
  },
  {
    "Column0": 1,
    "Column1": "A-1"
  },
  {
    "Column0": 2,
    "Column1": "A-1-1"
  },
  {
    "Column0": 2,
    "Column1": "A-1-2"
  },
  {
    "Column0": 1,
    "Column1": "A-2"
  }
]
```

## Source Code

```javascript
this.Dataset00_onload = function(obj:nexacro.NormalDataset,e:nexacro.DSLoadEventInfo)
{
	var tempColValue;
	
	for(var i=0; i < this.Grid00.rowcount; i++)
	{
		tempColValue = this.Dataset00.getColumn(this.Grid00.getDatasetRow(i), "Column0");
		
		if(tempColValue==0) {
			this.Grid00.setRealRowSize(i,"60");
		}
		else if(tempColValue==1) {
			this.Grid00.setRealRowSize(i,"40");
		}
		else if(tempColValue==2) {
			this.Grid00.setRealRowSize(i,"25");
		}
	}
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)