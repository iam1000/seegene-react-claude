# sample_grid_104

**Category:** Grid Cell
**Keywords:** `getDisplayText`

## Description

Applying Mask Character to Tree Format

## Form Information

- **Form ID:** sample_grid_104
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| MaskEdit00 | MaskEdit | visible="false" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| code | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "",
    "code": 111111111111
  },
  {
    "Column0": "",
    "code": 222222222222
  },
  {
    "Column0": 1,
    "code": 333333333333
  },
  {
    "Column0": 1,
    "code": 444444444444
  },
  {
    "Column0": "",
    "code": 555555555555
  }
]
```

## Source Code

```javascript
this.fn_getMaskString = function(nRow)
{
	var nStr = this.Dataset00.getColumn(nRow,"code");
	this.MaskEdit00.set_value(nStr);
	var rtn = this.MaskEdit00.getDisplayText();
	return rtn;
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)