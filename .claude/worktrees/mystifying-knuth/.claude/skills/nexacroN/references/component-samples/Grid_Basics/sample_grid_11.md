# sample_grid_11

**Category:** Grid Basics
**Keywords:** `applyChange, reset`

## Description

Reflecting/Resetting Changes to Dataset

## Form Information

- **Form ID:** sample_grid_11
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btn_apply | Button | text="applyChange" |
| btn_reset | Button | text="Reset" |
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
this.btn_apply_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.applyChange();
};

this.btn_reset_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.reset();
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)