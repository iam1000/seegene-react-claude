# sample_grid_100

**Category:** Grid Application
**Keywords:** `getRealRowSize, getTreeRow`

## Description

Showing Lower-level Data when Expanding/Collapsing Tree

## Form Information

- **Form ID:** Grid_Tree_Scroll
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset01" |

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
    "Column1": "ROOT"
  },
  {
    "Column0": 1,
    "Column1": 1
  },
  {
    "Column0": 2,
    "Column1": "1-2"
  },
  {
    "Column0": 2,
    "Column1": "1-3"
  },
  {
    "Column0": 2,
    "Column1": "1-4"
  }
]
```

### Dataset01

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
    "Column1": "ROOT"
  },
  {
    "Column0": 1,
    "Column1": 1
  },
  {
    "Column0": 2,
    "Column1": "1-2"
  },
  {
    "Column0": 2,
    "Column1": "1-3"
  },
  {
    "Column0": 2,
    "Column1": "1-4"
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if(obj.getBindDataset().getColumn(e.row, "Column0" ) == '1')
	{
		var nRowSize = obj.getRealRowSize(0);
		var nPos = obj.getTreeRow(e.row) * nRowSize;
		trace(e.row);
		trace(obj.getTreeRow(e.row));
		obj.vscrollbar.set_pos(nPos);
	}	
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)