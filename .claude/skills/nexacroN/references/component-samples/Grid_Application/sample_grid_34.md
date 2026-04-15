# sample_grid_34

**Category:** Grid Application
**Keywords:** `keystring, objects, getCellCount,getCellText, getCellProperty, setCellProperty, split, substr`

## Description

Sorting Using Header Event

## Form Information

- **Form ID:** sample_grid_34
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
this.Grid00_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var objDs = this.objects[obj.binddataset];
 										
	for (var i = 0; i < obj.getCellCount("head"); i++)
	{		
		var sHeadText = obj.getCellText(-1, i);
        var nLen      = sHeadText.length - 1;
		
		/* In case of the clicked head cell */
		if (i == e.cell)
		{
            var sColId = (obj.getCellProperty("body", e.col,"text")).toString().split(":");
			
			/* If the previous sort in ascending order, it will be sorted in descending order */
			if (sHeadText.substr(nLen) == "▲") 
			{
				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▼");
				objDs.set_keystring("S:-" + sColId[1]);
			}
			/* If the previous sort in descending order, it will be sorted in ascending order */
			else if (sHeadText.substr(nLen) == "▼") 
			{
				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▲");
				objDs.set_keystring("S:+" + sColId[1]);
			}
			/* If first sort, it will sort in ascending order */
			else 
			{
				obj.setCellProperty( "head", i, "text", sHeadText+"▲");
				objDs.set_keystring("S:+" + sColId[1]);
			}
		}
		/* In case of it's not the clicked head cell */
		else
		{

			/* Remove the arrow indication is displayed in the head cell which are arranged previously */
			if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼") 
			{
				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen));
			}

		}
	}		
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)