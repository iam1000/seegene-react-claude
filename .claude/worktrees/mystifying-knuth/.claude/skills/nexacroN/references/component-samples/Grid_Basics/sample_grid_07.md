# sample_grid_07

**Category:** Grid Basics
**Keywords:** `selecttype, getSelectedDatasetRows, deleteMultiRows`

## Description

Deleting Multiple Records

## Form Information

- **Form ID:** sample_grid_07
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btn_deleteRows | Button | text="Delete" |
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
this.btn_deleteRows_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var arrSelectedRow = this.Grid00.getSelectedDatasetRows();
	
	this.Dataset00.deleteMultiRows(arrSelectedRow);
	
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)