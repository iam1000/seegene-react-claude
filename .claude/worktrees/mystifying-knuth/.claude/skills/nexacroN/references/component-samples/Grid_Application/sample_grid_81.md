# sample_grid_81

**Category:** Grid Application
**Keywords:** `getCellRect, trackPopupByComponent`

## Description

Displaying Selected Cell Borders Using PopupDiv Component

## Form Information

- **Form ID:** sample_grid_81
- **Size:** 1000 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| PopupDiv00 | PopupDiv | visible="false" |

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
    "Column1": "A"
  },
  {
    "Column0": 2,
    "Column1": "B"
  },
  {
    "Column0": 3,
    "Column1": "C"
  },
  {
    "Column0": 4,
    "Column1": "D"
  },
  {
    "Column0": 5,
    "Column1": "E"
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var aryRect = this.Grid00.getCellRect(e.row, e.cell);
	
	var nX = aryRect.left;	
	var nW = aryRect.width;
	var nH = aryRect.height;
	var nY = nY = aryRect.top + 2;
	
	this.PopupDiv00.trackPopupByComponent(this.Grid00, nX, nY, nW, nH, "", false);
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)