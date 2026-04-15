# sample_grid_82

**Category:** Grid Cell
**Keywords:** `getCellPropertyValue`

## Description

Importing Actual Cell Property Value

## Form Information

- **Form ID:** sample_grid_82
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

**Sample Data:**

```json
[
  {
    "Column1": "buttoncontrol"
  },
  {
    "Column1": "checkboxcontrol"
  },
  {
    "Column1": "combocontrol"
  },
  {
    "Column1": "calendarcontrol"
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{	
	this.TextArea00.set_value(obj.getCellPropertyValue(e.row, e.cell, "displaytype")+"\n"
		+obj.getCellProperty("body", e.cell, "displaytype"));
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)