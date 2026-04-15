# sample_grid_60

**Category:** Grid Cell
**Keywords:** `treeitemtext`

## Description

Changing & Displaying Text Color by Tree Level

## Form Information

- **Form ID:** sample_grid_60
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
| label | STRING |
| level | STRING |

**Sample Data:**

```json
[
  {
    "level": "",
    "label": "A"
  },
  {
    "level": 1,
    "label": "B"
  },
  {
    "level": 2,
    "label": "C"
  },
  {
    "level": 2,
    "label": "D"
  },
  {
    "level": 2,
    "label": "E"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Grid00.setCellProperty("body", 0, "cssclass", 
		"expr:level == 0?'sample_grid_60_font_lightgreen':level==1?'sample_grid_60_font_red':'sample_grid_60_font_blue'");
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)