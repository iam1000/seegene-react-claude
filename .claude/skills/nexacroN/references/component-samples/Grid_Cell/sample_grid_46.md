# sample_grid_46

**Category:** Grid Cell
**Keywords:** `setCellProperty`

## Description

Changing displaytype Property Value by Conditions

## Form Information

- **Form ID:** sample_grid_46
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
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
    "Column0": 1,
    "Column1": "test1",
    "Column2": "Y"
  },
  {
    "Column0": 1,
    "Column1": "test2",
    "Column2": "Y"
  },
  {
    "Column0": 1,
    "Column1": "test3",
    "Column2": "N"
  },
  {
    "Column0": 1,
    "Column1": "test4",
    "Column2": "Y"
  },
  {
    "Column0": 1,
    "Column1": "test5",
    "Column2": "N"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Grid00.setCellProperty("body", 0, "displaytype", 
		"expr:Column2=='Y'?'checkboxcontrol':'normal'");
	this.Grid00.setCellProperty("body", 0, "edittype", 
		"expr:Column2=='Y'?'checkbox':'none'")
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)