# sample_grid_91

**Category:** Grid Cell
**Keywords:** `setCellProperty`

## Description

Applying Padding Property in Tree Format

## Form Information

- **Form ID:** sample_grid_91
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
| level | STRING |
| Column0 | STRING |

**Sample Data:**

```json
[
  {
    "level": "",
    "Column0": "Menu"
  },
  {
    "level": 1,
    "Column0": "Menu - 1"
  },
  {
    "level": 2,
    "Column0": "Menu - 1-1"
  },
  {
    "level": 2,
    "Column0": "Menu - 1-2"
  },
  {
    "level": 1,
    "Column0": "Menu - 2"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Grid00.setCellProperty("body", 0, "cssclass", "expr:level==1?'sample_grid_91_padding1':level==2?'sample_grid_91_padding2':''");
	//this.Grid00.setFormatColProperty(0, "cssclass", "sample_grid_91_padding1");
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)