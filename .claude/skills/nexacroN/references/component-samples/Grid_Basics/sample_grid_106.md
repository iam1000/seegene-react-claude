# sample_grid_106

**Category:** Grid Basics
**Keywords:** `moveRow`

## Description

Changing Row Position

## Form Information

- **Form ID:** sample_grid_106
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Static00 | Static | visible="false" |

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
    "Column0": 1,
    "Column1": "test1"
  },
  {
    "Column0": 2,
    "Column1": "test2"
  },
  {
    "Column0": 3,
    "Column1": "test3"
  },
  {
    "Column0": 4,
    "Column1": "test4"
  }
]
```

## Source Code

```javascript
this.Grid00_ondrag = function(obj:nexacro.Grid,e:nexacro.GridDragEventInfo)
{
	e.set_userdata(e.row);
	var strVal = this.Dataset00.getColumn(e.row, "Column0");
		strVal += " : " + this.Dataset00.getColumn(e.row, "Column1");
	this.Static00.set_text(strVal);
	this.Static00.set_visible(true);
	var nL = obj.getOffsetLeft() + e.clientx;
	var nT = obj.getOffsetTop() + e.clienty;
	this.Static00.move(nL, nT);
	return true;
};

this.sample_grid_106_ondragmove = function(obj:nexacro.Form,e:nexacro.DragEventInfo)
{
	this.Static00.move(e.clientx, e.clienty + 10);
};


this.Grid00_ondrop = function(obj:nexacro.Grid,e:nexacro.GridDragEventInfo)
{
	this.Static00.set_visible(false);
	var nRow = e.userdata;
	this.Dataset00.moveRow(nRow, e.row);	
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)