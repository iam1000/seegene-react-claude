# sample_grid_63

**Category:** Grid Application
**Keywords:** `appendContentsRow, appendContentsCol`

## Description

Dynamically Creating Grid Component & Binding Data

## Form Information

- **Form ID:** sample_grid_63
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |

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

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)