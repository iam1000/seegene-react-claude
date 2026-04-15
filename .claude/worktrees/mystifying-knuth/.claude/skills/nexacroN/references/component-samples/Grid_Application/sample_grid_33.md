# sample_grid_33

**Category:** Grid Application
**Keywords:** `edittype, setCellProperty, editautoselect, autoenter, setCellPos`

## Description

Editing in Tree

## Form Information

- **Form ID:** sample_grid_33
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | text="", binddataset="Dataset00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Label | STRING |
| Level | STRING |

**Sample Data:**

```json
[
  {
    "Label": "1dollar",
    "Level": ""
  },
  {
    "Label": "Sales",
    "Level": 1
  },
  {
    "Level": 2,
    "Label": "James"
  },
  {
    "Label": "Donald",
    "Level": 2
  },
  {
    "Label": "Lisa",
    "Level": 2
  }
]
```

## Source Code

```javascript
this.Grid00_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	//if tree cell column	
	if(e.col == 0)
	{
		var nCellIdx = this.Grid00.currentcell;
		this.Grid00.setCellProperty("body", nCellIdx, "edittype", "normal");
		this.Grid00.setCellPos(nCellIdx);
	}

};

this.Grid00_onselectchanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
{
	var nCellIdx = this.Grid00.currentcell;
	this.Grid00.setCellProperty("body", nCellIdx, "edittype", "tree");

};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)