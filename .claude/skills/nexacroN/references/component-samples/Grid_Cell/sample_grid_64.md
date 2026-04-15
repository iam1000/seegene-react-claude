# sample_grid_64

**Category:** Grid Cell
**Keywords:** `getOrgColumn`

## Description

Changing & Displaying Cell Text Color for Data Change

## Form Information

- **Form ID:** sample_grid_64
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
| Column0 | STRING |
| Column1 | STRING |
| Column2 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "A",
    "Column1": "TEST",
    "Column2": ""
  },
  {
    "Column0": "B",
    "Column1": "TEST",
    "Column2": 1
  },
  {
    "Column0": "C",
    "Column1": "TEST",
    "Column2": ""
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var objGrid = new Grid();
	objGrid.init("GridNm", 30, 80, 350, 200,null,null);
	this.addChild("Grid00", objGrid);	
	objGrid.show();
	
	var objDs = new Dataset();
	objDs.set_name("ds_test");
	objDs.addColumn("no", "string");
	objDs.addColumn("name", "string");
	objDs.addColumn("age", "int");
	
	for (var i = 0; i < 5; i++) 
	{
		var nRow = objDs.addRow();
		
		objDs.setColumn(nRow, "no", i);
		objDs.setColumn(nRow, "name", 'employ_' + i);
		objDs.setColumn(nRow, "age", (10 + i));
	}

	objGrid.set_binddataset(objDs);

	objGrid.appendContentsRow("head");
	objGrid.appendContentsRow("body");
	objGrid.appendContentsRow("summ");
	
	objGrid.appendContentsCol();
	objGrid.appendContentsCol();
	
	objGrid.setFormatColProperty(0, "size", 100);
	objGrid.setFormatColProperty(1, "size", 100);
	objGrid.setFormatColProperty(2, "size", 100);

	for (var r = 0; r < objDs.getColCount(); r++) 
	{
		var colinfo = objDs.getColumnInfo(r);
		objGrid.setCellProperty("head", r, "text", colinfo.name);
		objGrid.setCellProperty("body", r, "text", "bind:" + colinfo.name);
		if (r == 2) 
		{
			objGrid.setCellProperty("summ", r, "text", "expr:dataset.getSum('" + colinfo.name + "')");
		}
		else if(r == 1)
		{
			objGrid.setCellProperty("summ", r, "text", "total");
		}
	}
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)