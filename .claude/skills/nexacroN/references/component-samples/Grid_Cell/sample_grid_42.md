# sample_grid_42

**Category:** Grid Cell
**Keywords:** `comp.parent`

## Description

Converting Entire Column of Selected Row to Input State

## Form Information

- **Form ID:** sample_grid_42
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Name | STRING |
| Department | STRING |
| Vacation | STRING |

**Sample Data:**

```json
[
  {
    "Name": "John",
    "Department": 1,
    "Vacation": 1
  },
  {
    "Name": "James",
    "Department": 2,
    "Vacation": ""
  },
  {
    "Name": "Donald",
    "Department": 3,
    "Vacation": ""
  },
  {
    "Name": "Lisa",
    "Department": 4,
    "Vacation": 1
  }
]
```

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| code | STRING |
| text | STRING |

**Sample Data:**

```json
[
  {
    "code": 1,
    "text": "Sales"
  },
  {
    "code": 2,
    "text": "IT"
  },
  {
    "code": 3,
    "text": "Education"
  },
  {
    "code": 4,
    "text": "Marketing"
  },
  {
    "code": 5,
    "text": "HR"
  }
]
```

## Source Code

```javascript
this.Dataset00_onrowposchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo)
{
	this.iCurrow = e.newrow;
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)