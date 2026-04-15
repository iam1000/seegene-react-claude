# sample_grid_08

**Category:** Grid Basics
**Keywords:** `appendData`

## Description

Adding Records of Other Datasets

## Form Information

- **Form ID:** sample_grid_08
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btn_appendData | Button | text="Append dataset" |
| btn_appendDataCol | Button | text="Append dataset&#13;&#10;with c..." |
| Grid00 | Grid | binddataset="Dataset00", text="" |
| Grid01 | Grid | binddataset="Dataset01", text="" |

## Datasets

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| Name | STRING |
| Addr | STRING |
| Comp | STRING |
| Dept | STRING |
| Mail | STRING |
| Salary | INT |

**Sample Data:**

```json
[
  {
    "Name": "Muhammad",
    "Addr": "Syria",
    "Comp": "alzazeera",
    "Salary": 37000,
    "Mail": "muhammad@alzazeera.com"
  },
  {
    "Name": "Gosling",
    "Addr": "Busan, KOREA",
    "Comp": "java",
    "Salary": 20000,
    "Mail": "gosling@java.com"
  },
  {
    "Name": "Jisung",
    "Addr": "Seoul, KOREA",
    "Comp": "apple",
    "Salary": 840000,
    "Mail": "jisung@apple.com"
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
this.btn_appendData_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var nRowCnt = this.Dataset00.appendData(this.Dataset01);
};

this.btn_appendDataCol_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var nRowCnt = this.Dataset00.appendData(this.Dataset01, true);
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)