# sample_grid_03

**Category:** Grid Basics
**Keywords:** `filter`

## Description

Filtering Records with Conditions

## Form Information

- **Form ID:** sample_grid_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| edit_keyword | Edit | value="Company == "1dollar" && Salary..." |
| btn_filter | Button | text="Filter" |
| btn_cancel_filter | Button | text="Cancel" |
| Static00 | Static | text="Conditional Expression:" |
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
this.btn_filter_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var strCondExpr = this.edit_keyword.value;
	
	this.Dataset00.filter(strCondExpr);
	
};

this.btn_cancel_filter_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.filter("");
	
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)