# sample_grid_65

**Category:** Grid Application
**Keywords:** `getCellValue, getCellRect`

## Description

Moving String of Grid Component by Drag & Drop

## Form Information

- **Form ID:** sample_grid_65
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Edit02 | Edit | - |
| Edit03 | Edit | - |
| Static00 | Static | text="Static00", visible="false" |
| Static01 | Static | text="Drop is not allowed", visible="false" |

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
    "Column0": "apple",
    "Column1": "John",
    "Column2": 1
  },
  {
    "Column0": "pear",
    "Column1": "Donald",
    "Column2": 2
  },
  {
    "Column0": "walnut",
    "Column1": "Leo",
    "Column2": 3
  }
]
```

## Source Code

```javascript
var arr1 = [];
var arr2 = [];

this.sample_grid_65_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	// Drop unavailable
	arr1[0] = this.Edit00;
	arr1[1] = this.Edit02;

	// Drop possible
	arr2[0] = this.Edit01;
	arr2[1] = this.Edit03;
};

this.Grid00_ondrag = function(obj:nexacro.Grid, e:nexacro.GridDragEventInfo)
{
	if(e.row == -1 || e.row == -2)
	{
		return false;
	}	
	
	sTextDragData = obj.getCellValue(e.row, e.cell);

	var cell_rect = obj.getCellRect(e.row, e.cell);
	this.Static00.set_left(cell_rect.left);
	this.Static00.set_top(cell_rect.top);
	this.Static00.set_width(cell_rect.width);
	this.Static00.set_height(cell_rect.height);
	this.Static00.set_text(sTextDragData);
	this.Static00.set_visible(true);
	return true;
};

this.sample_grid_65_ondragmove = function(obj:nexacro.Form,e:nexacro.DragEventInfo)
{
	this.DragTextMove(obj, e);
};

this.DragTextMove = function(obj, e)
{
    if( this.Static00.visible == true )
    {	
		for(var i = 0; i < arr1.length; i++)
		{
			if(arr1[i].name == e.fromobject.name)
			{
				this.equal_Obj(obj, e);
				break;
			}	else	{
				this.different_Obj(obj, e);
			}
		}
		this.Static00.move(e.clientx+5, e.clienty-15);
    }
};

this.equal_Obj = function(obj, e)
{
	this.Static01.set_visible(true);
	this.Static01.move(e.clientx-10, e.clienty+5);
};

this.different_Obj = function(obj, e)
{
	this.Static01.set_visible(false);
};


this.sample_grid_65_ondrop = function(obj:nexacro.Form,e:nexacro.DragEventInfo)
{
	for(var i = 0; i < arr1.length; i++ )
	{
		if(e.fromobject != undefined && e.fromobject.name == arr1[i].name)
		{
			this.Static00.set_visible(false);
			this.Static01.set_visible(false);
			return false;
		}
	}

   for(var i = 0; i < arr2.length; i++ )
	{
		if(e.fromobject != undefined && e.fromobject.name == arr2[i].name)
		{
			e.fromobject.set_value(sTextDragData);
			this.Static00.set_visible(false);
		}
	}
	this.Static00.set_visible(false);
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)