# sample_combo_03

**Category:** Combo
**Keywords:** `codecolumn, datacolumn, innerdataset`

## Description

Configuring Combo - Dynamic Item List

## Form Information

- **Form ID:** sample_combo_03_nexacro16
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Combo00 | Combo | text="male", value="00" |
| Grid00 | Grid | binddataset="ds_grid" |
| Grid01 | Grid | binddataset="ds_grid" |

## Datasets

### ds_combo

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
    "CODE": 1,
    "DATA": "banana"
  },
  {
    "CODE": 2,
    "DATA": "orange"
  },
  {
    "CODE": 3,
    "DATA": "kiwi"
  },
  {
    "CODE": 4,
    "DATA": "peach"
  }
]
```

### ds_grid

**Columns:**

| Column | Type |
|--------|------|
| CODE | STRING |

**Sample Data:**

```json
[
  {
    "CODE": ""
  },
  {
    "CODE": 1
  },
  {
    "CODE": 3
  },
  {
    "CODE": 1
  },
  {
    "CODE": 2
  }
]
```

---

[Back to Combo](./README.md) | [Back to Index](../INDEX.md)