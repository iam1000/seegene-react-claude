# sample_grid_26

**Category:** Grid Cell
**Keywords:** `suppress`

## Description

Displaying Cells with Same Value as One Cell - Suppress

## Form Information

- **Form ID:** sample_grid_26
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00", text="" |
| btn_suppress | Button | text="Suppress" |

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
this.btn_suppress_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	//Sorting records
	this.Dataset00.set_keystring("S:Company+Department");

	//Suppressing cells
	var retVal = this.Grid00.setCellProperty("body", 2, "suppress", "1");
	var retVal = this.Grid00.setCellProperty("body", 3, "suppress", "2");

};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)