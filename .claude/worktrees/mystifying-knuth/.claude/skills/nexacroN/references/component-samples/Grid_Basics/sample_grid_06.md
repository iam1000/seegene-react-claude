# sample_grid_06

**Category:** Grid Basics
**Keywords:** `selecttype, posttext`

## Description

Selecting Multiple Records

## Form Information

- **Form ID:** sample_grid_06
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| combo_selecttype | Combo | text="row", value="00" |
| Static00 | Static | text="Select type:" |
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
this.combo_selecttype_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
{
	var strSelectType = e.posttext;
	
	this.Grid00.set_selecttype(strSelectType);
	
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)