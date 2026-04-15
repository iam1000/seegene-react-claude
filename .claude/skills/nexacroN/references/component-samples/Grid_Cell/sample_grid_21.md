# sample_grid_21

**Category:** Grid Cell
**Keywords:** `createFormat, binddataset`

## Description

Creating & Showing Format of Bound Dataset Object

## Form Information

- **Form ID:** sample_grid_21
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Static00 | Static | text="Select dataset:" |
| Combo00 | Combo | text="Dataset00", value="0" |
| Grid00 | Grid | binddataset="Dataset00", text="" |

## Datasets

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| CODE | STRING |
| DATA | STRING |

**Sample Data:**

```json
[
  {
    "CODE": "",
    "DATA": "apple"
  },
  {
    "DATA": "banana",
    "CODE": 1
  },
  {
    "DATA": "orange",
    "CODE": 2
  },
  {
    "DATA": "kiwi",
    "CODE": 3
  },
  {
    "DATA": "peach",
    "CODE": 4
  }
]
```

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
this.Combo00_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
{
	//Binding selected dataset
	this.Grid00.set_binddataset(e.posttext);

	//Creating new format for bound dataset
	this.Grid00.createFormat();	
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)