# sample_grid_27

**Category:** Grid Cell
**Keywords:** `getCellProperty, setCellProperty, currentcell`

## Description

Setting Cell Property

## Form Information

- **Form ID:** sample_grid_27
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00", text="" |
| btn_getCellProperty | Button | text="getCellProperty" |
| btn_setCellProperty | Button | text="setCellProperty" |

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
this.btn_getCellProperty_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	//Getting index of selected cell
	var nCellIdx = this.Grid00.currentcell;

	//Getting displaytype property of selected cell
	var varCellProp = this.Grid00.getCellProperty("body", nCellIdx, "displaytype");
	
	alert("displaytype of selected cell is " + varCellProp);
	
};

this.btn_setCellProperty_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	//Getting index of selected cell
	var nCellIdx = this.Grid00.currentcell;

	//Setting displaytype property of selected cell
	var bRet = this.Grid00.setCellProperty("body", nCellIdx, "displaytype", "buttoncontrol");
	
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)