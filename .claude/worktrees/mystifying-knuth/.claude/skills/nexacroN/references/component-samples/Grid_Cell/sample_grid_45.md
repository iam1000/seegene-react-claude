# sample_grid_45

**Category:** Grid Cell
**Keywords:** `calendardisplaynulltext, calendardisplaynulltype`

## Description

Displaying Alternative Text Instead of Calendar for No Data

## Form Information

- **Form ID:** sample_grid_45
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| text | STRING |
| date | DATE |

**Sample Data:**

```json
[
  {
    "text": "TEST",
    "date": 20180301
  },
  {
    "text": "NULL TEST"
  },
  {
    "date": "",
    "text": "EMPTY TEST"
  }
]
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)