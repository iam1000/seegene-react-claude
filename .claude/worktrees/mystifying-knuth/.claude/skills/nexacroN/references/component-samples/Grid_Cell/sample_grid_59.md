# sample_grid_59

**Category:** Grid Cell
**Keywords:** `fillareatype`

## Description

Filling Areas with No Data

## Form Information

- **Form ID:** sample_grid_59
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Combo00 | Combo | text="Combo00" |

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
    "Column0": "",
    "Column1": 1,
    "Column2": 1
  },
  {
    "Column0": 1,
    "Column1": 2,
    "Column2": 2
  },
  {
    "Column0": 1,
    "Column1": 3,
    "Column2": 3
  },
  {
    "Column0": "",
    "Column1": 4,
    "Column2": 4
  },
  {
    "Column0": "",
    "Column1": 5,
    "Column2": 5
  }
]
```

## Source Code

```javascript
this.Combo00_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
{
	this.Grid00.set_fillareatype(e.posttext);
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)