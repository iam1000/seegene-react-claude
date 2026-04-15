# sample_grid_10

**Category:** Grid Basics
**Keywords:** `getRowType, getRowCount, edittype`

## Description

Checking for Changed Data

## Form Information

- **Form ID:** sample_grid_10
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btn_getRowType | Button | text="Get row type" |
| Grid00 | Grid | binddataset="Dataset00", text="" |
| TextArea00 | TextArea | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Name | STRING |
| Address | STRING |
| Company | STRING |
| Department | STRING |
| Salary | INT |

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
    "Department": "Quality Assurance",
    "Salary": 8600
  }
]
```

## Source Code

```javascript
this.btn_getRowType_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var bChangedData = false;
	var nRowCnt = this.Dataset00.getRowCount();
	
	var strResult = "";
	
	for(var i=0; i<nRowCnt; i++)
	{

		switch( this.Dataset00.getRowType(i) )
		{
			case 0:
				strResult += "Row [" + i +"] is not exist.\n";
				break;
			case 1:
			case 16:
				strResult += "Row [" + i +"] is not changed.\n";
				break;
			case 2: 
			case 4:
			case 8:
				strResult += "Row [" + i +"] is changed.\n";
				bChangedData = true;
				break;
			default:
				strResult += "Row [" + i +"] Unknown status\n";				
		}

	}
	
	if(bChangedData == true)
		strResult += "\nGrid is changed.";
	else
		strResult += "\nGrid is not changed.";
		
	// alert(strResult);
	this.TextArea00.set_value(strResult);
	
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)