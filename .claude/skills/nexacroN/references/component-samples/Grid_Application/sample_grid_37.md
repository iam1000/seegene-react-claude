# sample_grid_37

**Category:** Grid Application
**Keywords:** `selectstartrow, selectendrow, selectstartcol, selectendcol, getCellValue, getCellCount, getCellPos, getCellProperty, getRowCount, deleteRow, rowposition, setColumn, keycode, ctrlkey, split, substr`

## Description

Copying/Pasting between Grids

## Form Information

- **Form ID:** sample_grid_37
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00", text="" |
| Grid01 | Grid | binddataset="Dataset01", text="" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Name | STRING |
| Address | STRING |
| Company | STRING |
| Department | STRING |
| Salary | STRING |

**Sample Data:**

```json
[
  {
    "Name": "John",
    "Address": "Seoul, KOREA",
    "Company": "1dollar",
    "Department": "Sales",
    "Salary": 15000
  },
  {
    "Name": "James",
    "Address": "Barcelona, Spain",
    "Company": "EBOT",
    "Department": "Consulting",
    "Salary": 25000
  },
  {
    "Name": "Donald",
    "Address": "Califonia, USA",
    "Company": "EBOT",
    "Department": "Research Institute",
    "Salary": 1000000
  },
  {
    "Name": "Lisa",
    "Address": "London, United Kingdom",
    "Company": "1dollar",
    "Department": "Quality Assurance",
    "Salary": 3000
  },
  {
    "Name": "Joe",
    "Address": "São Paulo, Brazil",
    "Company": "hangul",
    "Department": "R&D",
    "Salary": 8600
  }
]
```

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| Name | STRING |
| Address | STRING |
| Company | STRING |
| Department | STRING |
| Salary | STRING |

**Sample Data:**

```json
[
  {},
  {},
  {},
  {},
  {}
]
```

## Source Code

```javascript
var Buff = null;

this.Grid_onkeydown = function(obj:nexacro.Grid,e:nexacro.KeyEventInfo)
{	
	if (e.ctrlkey)
	{
		//Ctrl + c key
		if (e.keycode == 67)
		{
			var nStartrow = obj.selectstartrow;
			var nEndrow = obj.selectendrow;
			var nStartCol = obj.selectstartcol;
			var nEndCol = obj.selectendcol;
			
			var sClip = "";
			var sSpr  = "	";
				
			//case of selecttype is row or multirow	
			var nLoopCnt = nStartrow.length;
			
			if(nStartCol == -1 && nEndCol == -1)
			{
				var objDs    = this.objects[obj.binddataset];	
				
				nStartCol = 0;
				nEndCol = objDs.colcount-1;
			}

			//abstract data from selected row
			for(var k=0; k < nLoopCnt; k++)
			{
				for (var i = nStartrow[k]; i <= nEndrow[k]; i++) 
				{
					for (var j = nStartCol; j <= nEndCol; j++) 
					{				
						if (j < nEndCol) 
						{
							sClip += obj.getCellValue(i, j) + sSpr;
						} 
						else 
						{
							sClip = sClip + obj.getCellValue(i, j) +  "\n";
						}
					}
				}
			
			}

			//copy from selected row to Buff variable
			Buff = sClip.substr(0, sClip.length-1);			
		}
		
		//Ctrl + v key
		else if (e.keycode == 86)
		{
			var nIndex = 0;
			var objDs = this.objects[obj.binddataset];
			var nCellCnt = obj.getCellCount("body");
			var nCellPos = obj.getCellPos();
			var nRowPos = objDs.rowposition;
			var sClip = Buff;
			var arrRow = sClip.split("\n");
			var arrCol = new Array();
			
			for (var i = 0; i <arrRow.length; i++) 
			{				
				arrCol = arrRow[i].split("	"); //tab

				if (objDs.getRowCount() <= nRowPos) 
				{
					objDs.addRow();
				}

				for (var j = 0; j < objDs.getColCount(); j++) 
				{	
					objDs.setColumn(nRowPos, j, arrCol[nIndex++]);
				}	
	
				nRowPos++;
				objDs.set_rowposition(nRowPos);
				nIndex = 0;
			}			
		}
	}
		
	//Delete key
	if (e.keycode == 46)
	{
		var objDs = this.objects[obj.binddataset];
		var nRowPos = objDs.rowposition;
		
		var nStartrow = obj.selectstartrow;
		var nEndrow = obj.selectendrow;

		var nLoopCnt = nStartrow.length;

		for(var k=nLoopCnt; k >= 0; k--)
		{
			for (var i = nEndrow[k]; i >= nStartrow[k]; i--) 
			{				
				objDs.deleteRow(i);
			}		
		}
	}
	
}
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)