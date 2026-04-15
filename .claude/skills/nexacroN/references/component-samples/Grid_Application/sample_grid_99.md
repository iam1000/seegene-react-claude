# sample_grid_99

**Category:** Grid Application
**Keywords:** `getBindCellIndex, getCellPos`

## Description

Displaying Clicked Cell

## Form Information

- **Form ID:** sample_grid_99
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

**Sample Data:**

```json
[
  {},
  {},
  {},
  {},
  {}
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	obj.redrawExprCell("body");
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)