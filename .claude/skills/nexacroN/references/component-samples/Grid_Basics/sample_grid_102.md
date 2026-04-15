# sample_grid_102

**Category:** Grid Basics
**Keywords:** `wheelscrollrow, scrollpixel`

## Description

Scrolling Line by Line

## Form Information

- **Form ID:** TEST_08_27_scrollpixel
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="inc", icon="url('theme://images/btn_WF_Spi..." |
| Button00_00 | Button | text="dec", icon="url('theme://images/btn_WF_Spi..." |

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
    "Column0": 1
  },
  {
    "Column0": 2
  },
  {
    "Column0": 3
  },
  {
    "Column0": 4
  },
  {
    "Column0": 5
  }
]
```

## Source Code

```javascript
this.Btn_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Grid00.scrollBy(0,this.Grid00.getRealRowSize(0)*obj.nVoffsetpos);
	this.Grid01.scrollBy(0,this.Grid01.getRealRowSize(0)*obj.nVoffsetpos);
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)