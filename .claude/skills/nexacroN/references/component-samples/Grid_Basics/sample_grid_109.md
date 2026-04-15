# sample_grid_109

**Category:** Grid Basics
**Keywords:** `selectMultiRow`

## Description

Selecting multiple consecutive rows

## Form Information

- **Form ID:** sample_grid_109
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button01 | Button | text="clearSelect" |
| Button00 | Button | text="selectMultiRow" |
| Grid00 | Grid | binddataset="Dataset00", text="" |
| Edit00 | Edit | - |
| Static00_00 | Static | text="selectMultiRow(nStrarRow, nEnd..." |

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
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Grid00.selectMultiRow.apply(this.Grid00, (this.Edit00.value).split(","));
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Grid00.clearSelect();
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)