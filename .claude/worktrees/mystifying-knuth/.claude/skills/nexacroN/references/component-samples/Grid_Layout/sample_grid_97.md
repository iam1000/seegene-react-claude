# sample_grid_97

**Category:** Grid Layout
**Keywords:** `getSubCellProperty`

## Description

Specifying Child Cell Property of Merged Cell

## Form Information

- **Form ID:** sample_grid_97
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Edit00 | Edit | - |

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
    "Column0": 1,
    "Column1": "A",
    "Column2": "ONE",
    "Column3": "a"
  },
  {
    "Column0": 2,
    "Column1": "B",
    "Column2": "TWO",
    "Column3": "b"
  },
  {
    "Column0": 3,
    "Column1": "C",
    "Column2": "THREE",
    "Column3": "c"
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	this.Edit00.set_value(obj.getSubCellProperty("body", e.cell, 1, "color"))
};
```

---

[Back to Grid Layout](./README.md) | [Back to Index](../INDEX.md)