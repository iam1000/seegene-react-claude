# sample_grid_89

**Category:** Grid Cell
**Keywords:** `TreeItemIconControl, isTreeLeafRow`

## Description

Expanding Child Nodes at Once

## Form Information

- **Form ID:** test3
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Level | STRING |
| MenuName | STRING |
| MenuID | STRING |
| Status | STRING |

**Sample Data:**

```json
[
  {
    "Level": "",
    "MenuName": "Menu 1",
    "MenuID": 1
  },
  {
    "Level": 1,
    "MenuName": "Menu 1-1",
    "MenuID": 2
  },
  {
    "Level": 2,
    "MenuName": "Menu 1-1-1",
    "MenuID": 3
  },
  {
    "Level": "",
    "MenuName": "Menu 2",
    "MenuID": 5,
    "Status": 1
  },
  {
    "Level": 1,
    "MenuName": "Menu 2-1",
    "MenuID": 6
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if(e.fromreferenceobject == "[object TreeItemIconControl]" && e.fromreferenceobject.id == "treeitembutton")
	{
		this.Dataset00.set_enableevent(false);
		if(this.Dataset00.getColumn(e.row,"Status") == null)
		{
			this.Dataset00.setColumn(e.row,"Status",1);
			for(var i=1; i < this.Dataset00.rowcount; i++)
			{
				if(obj.isTreeLeafRow(e.row+i) == false)
				{
					this.Dataset00.setColumn(e.row+i,"Status",1);
				} else {
					break;
				}
			}
		} else {
			this.Dataset00.setColumn(e.row,"Status",null);
			for(var i=1; i < this.Dataset00.rowcount; i++)
			{
				if(obj.isTreeRootRow(e.row+i) == false)
				{
					this.Dataset00.setColumn(e.row+i,"Status",null);
				} else {
					break;
				}
			}
		}
		this.Dataset00.set_enableevent(true);
	}
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)