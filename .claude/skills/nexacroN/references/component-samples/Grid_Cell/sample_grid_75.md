# sample_grid_75

**Category:** Grid Cell
**Keywords:** `suppresshorzcell`

## Description

Displaying Cells with Same Horizontal Value as One Cell

## Form Information

- **Form ID:** sample_grid_75
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00", text="" |
| Button00 | Button | text="Button00" |

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
    "Column0": "a",
    "Column1": "a",
    "Column2": "a"
  },
  {
    "Column0": "a",
    "Column1": "b",
    "Column2": "b"
  },
  {
    "Column0": "a",
    "Column1": "a",
    "Column2": "a"
  },
  {
    "Column0": "b",
    "Column1": "b",
    "Column2": "b"
  },
  {
    "Column0": "b",
    "Column1": "b",
    "Column2": "a"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Grid00.setCellProperty("body", 1, "suppress", "0");
	this.Grid00.setCellProperty("body", 2, "suppress", "0");
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)