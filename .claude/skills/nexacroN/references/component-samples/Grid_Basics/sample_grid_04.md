# sample_grid_04

**Category:** Grid Basics
**Keywords:** `findRow, findRowExpr`

## Description

Searching for Specific Records with Conditions

## Form Information

- **Form ID:** sample_grid_04
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btn_fildRow | Button | text="findRow" |
| btn_fildRowExpr | Button | text="findRowExpr" |
| edit_keyword | Edit | value="Lisa" |
| edit_condexpr | Edit | value="Company == "1dollar" && Salary..." |
| combo_category | Combo | text="Name", value="00" |
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
this.btn_fildRow_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var strCategory = this.combo_category.text;
	var strKeyword = this.edit_keyword.value;
	
	trace("strCategory: " + strCategory + ", " + "strKeyword: " + strKeyword);
	
	var nRow = this.Dataset00.findRow(strCategory, strKeyword);
	
	trace("nRow: " + nRow);
	
	this.Grid00.selectRow(nRow, true);
	
	if(nRow == -1)
		alert("\"" + strKeyword + "\" not found.");

};


this.btn_fildRowExpr_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var strKeyword = this.edit_condexpr.value;
	
	trace("strKeyword: " + strKeyword);
	
	var nRow = this.Dataset00.findRowExpr(strKeyword);
	
	trace("nRow: " + nRow);
	
	this.Grid00.selectRow(nRow, true);
	
	if(nRow == -1)
		alert("\"" + strKeyword + "\" not found.");	
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)