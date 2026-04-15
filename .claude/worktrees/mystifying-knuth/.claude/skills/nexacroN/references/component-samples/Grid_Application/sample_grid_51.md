# sample_grid_51

**Category:** Grid Application
**Keywords:** `treeinitstatus, setTreeStatus`

## Description

Expanding Only Parent Tree of Specific Location

## Form Information

- **Form ID:** sample_grid_51
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset00" |

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
    "Column1": ""
  },
  {
    "Column0": 2,
    "Column1": 1
  },
  {
    "Column0": 3,
    "Column1": 1
  },
  {
    "Column0": 4,
    "Column1": 2
  },
  {
    "Column0": 5,
    "Column1": 2
  }
]
```

## Source Code

```javascript
this.Grid01_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	this.Grid00.set_treeinitstatus("collapse,all");
	
	var path_Arr = this.findParentArr(this.Grid00, e.row);
	for(var i =  path_Arr.length -1  ; i > 0 ; i--) // Should be expanded in reverse.
	{
		path_Arr[i], this.Grid00.setTreeStatus(this.Grid00.getTreeRow(path_Arr[i]), true);
	}
	this.Dataset00.set_rowposition(path_Arr[0]);
};

this.findParentArr = function (obj, idx)
{
	var arr = [];
	arr[arr.length] = idx;
	for(;;)
	{	
		var _p = obj.getTreeParentRow(arr[arr.length-1]);
		if(_p < 0){return arr;}
		arr[arr.length] = _p; 	
	}
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)