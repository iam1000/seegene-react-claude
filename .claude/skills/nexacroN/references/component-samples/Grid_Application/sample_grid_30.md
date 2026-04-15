# sample_grid_30

**Category:** Grid Application
**Keywords:** `navigatorname, setEventHandler, selectstartrow, selectendrow, selectstartcol, selectendcol, getFormatColCount, getCellText, setClipboard, clearClipboard, keycode, ctrlkey, shiftkey,altkey`

## Description

Copying/Pasting from Grid to Excel

## Form Information

- **Form ID:** sample_grid_30
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00", text="" |

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

## Source Code

```javascript
this.Form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	this.copyPaste.addGrid(this.Grid00);	
};

this.copyPaste = {	
	
	addGrid: function(grid)
	{
		if (system.navigatorname == "nexacro" || system.navigatorname == "IE" ) 
		{
			grid.setEventHandler("onkeydown", this.copyGridCellData1(this), this);
		}		
		else	// other browser
		{		
			//create an HTML DOM Textarea element and append it to the end of the body element of the HTML document
			var objTA = document.createElement("textarea");
			document.body.appendChild(objTA);
			
			grid.setEventHandler("onkeydown", this.copyGridCellData2(this, objTA), this);
		}

	},
	
	makeData: function(obj)
	{
		var sBody = "";
		var sSpr = "	";	//tab
		var nStartrow = obj.selectstartrow;
		var nEndrow = obj.selectendrow;
		var nStartCol = obj.selectstartcol;
		var nEndCol = obj.selectendcol;
						
		//case of selecttype is row or multirow
		var nLoop = nStartrow.length;
		
		if(nStartCol == -1 && nEndCol == -1)
		{
			nStartCol = 0;
			nEndCol = obj.getFormatColCount()-1;
		}
					
		//copy cell data from selected cell
		for(var k=0; k < nLoop; k++)
		{
		
			for (var i = nStartrow[k]; i <= nEndrow[k]; i++) 
			{			
				for (var j = nStartCol; j <= nEndCol; j++) 
				{
					if (j < nEndCol) 
					{
						sBody += obj.getCellText(i, j) + sSpr;
					} 
					else 
					{
						sBody += obj.getCellText(i, j) + "\r\n";
					}
				}
			}		
			
		}

		return sBody;
	},
	
	copyGridCellData1: function(pThis)
	{
		return function(obj, e) 
		{
			if (e.ctrlkey && !e.shiftkey && !e.altkey)
			{			
				if (e.keycode == 67)	//'c'
				{					
					var rtnStr = pThis.makeData(obj);
					
					//copy selected data to clipboard
					system.clearClipboard();						
					system.setClipboard("CF_TEXT", rtnStr); 
				} 
			}
		}
		
	},
	
	copyGridCellData2: function(pThis, objTA)
	{
		return function(obj, e) 
		{
			//ctrl=17, shift=16, alt=18
			//// alphabet "c"= 67
			if (e.ctrlkey && !e.shiftkey && !e.altkey)
			{			
				if (e.keycode == 67)	
				{
					var rtnStr = pThis.makeData(obj);
					
					//after copying the selected data to the textarea, select it.
					objTA.value = rtnStr;
					objTA.select();
				} 
			}
			
		}

	}//end of copyGridCellData2: function(pThis, objTA)	

}//end of this.copyPaste
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)