# sample_grid_35

**Category:** Grid Application
**Keywords:** `displaytype, edittype, onheadclick, getRowCount, setColumn, getCellProperty, setCellProperty`

## Description

Selecting/Deselecting All

## Form Information

- **Form ID:** sample_grid_35
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
| Check | STRING |

**Sample Data:**

```json
[
  {
    "Name": "John",
    "Address": "Seoul, KOREA",
    "Company": "1dollar",
    "Department": "Sales",
    "Salary": 15000,
    "Check": ""
  },
  {
    "Name": "James",
    "Address": "Barcelona, Spain",
    "Company": "EBOT",
    "Department": "Consulting",
    "Salary": 25000,
    "Check": ""
  },
  {
    "Name": "Donald",
    "Address": "Califonia, USA",
    "Company": "EBOT",
    "Department": "Research Institute",
    "Salary": 1000000,
    "Check": ""
  },
  {
    "Name": "Lisa",
    "Address": "London, United Kingdom",
    "Company": "1dollar",
    "Department": "Quality Assurance",
    "Salary": 3000,
    "Check": ""
  },
  {
    "Name": "Joe",
    "Address": "São Paulo, Brazil",
    "Company": "hangul",
    "Department": "R&D",
    "Salary": 8600,
    "Check": ""
  }
]
```

## Source Code

```javascript
this.Grid00_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if(e.cell == 0)
	{
		this.gf_setCheckAll(obj, e);
	}
	
};


this.gv_isCheckAll = 0;
this.gf_setCheckAll = function(obj:Grid, e:GridClickEventInfo)
{
	var strColID = obj.getCellProperty("body", e.cell, "text").replace(/bind:/i, "");
		
	//Uncheck the checkbox if it is checked
	//Check if it is not checked
	this.gv_isCheckAll = (this.gv_isCheckAll ? 0 : 1);
	
	//Turn off events in the dataset
	//this.Dataset00.enableevent = false;
	
	//check to body column
	for(var i=0; i< this.Dataset00.getRowCount(); i++)
	{
		this.Dataset00.setColumn(i, strColID, this.gv_isCheckAll);
	}
	
	//check to head column
	obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

	//Turn on events in the dataset
	//this.Dataset00.enableevent = true;

}
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)