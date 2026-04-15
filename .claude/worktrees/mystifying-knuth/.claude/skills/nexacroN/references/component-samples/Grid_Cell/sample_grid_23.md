# sample_grid_23

**Category:** Grid Cell
**Keywords:** `edittype, autoenter, wordwrap`

## Description

Editing Data in Various Formats

## Form Information

- **Form ID:** sample_grid_23
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="ds_data", text="" |

## Datasets

### ds_combo

**Columns:**

| Column | Type |
|--------|------|
| CODE | STRING |
| VALUE | STRING |

**Sample Data:**

```json
[
  {
    "CODE": "M",
    "VALUE": "Male"
  },
  {
    "CODE": "W",
    "VALUE": "Female"
  }
]
```

### ds_data

**Columns:**

| Column | Type |
|--------|------|
| normal | STRING |
| none | STRING |
| button | STRING |
| checkbox | STRING |
| combo | STRING |
| date | STRING |
| mask | STRING |
| readonly | STRING |
| text | STRING |
| textarea | STRING |
| tree | STRING |

**Sample Data:**

```json
[
  {
    "normal": "John",
    "none": "Korea",
    "checkbox": 1,
    "combo": "M",
    "button": "Profile",
    "date": 20160105,
    "readonly": "secret",
    "tree": "",
    "text": "1dollar",
    "textarea": "Seoul, KOREA",
    "mask": "AA105"
  },
  {
    "normal": "James",
    "button": "Profile",
    "checkbox": "",
    "combo": "M",
    "date": 20100826,
    "readonly": "secret",
    "tree": 1,
    "text": "EBOT",
    "none": "Spain",
    "textarea": "Barcelona, Spain",
    "mask": "CA826"
  },
  {
    "normal": "Donald",
    "none": "USA",
    "checkbox": "",
    "combo": "M",
    "button": "Profile",
    "date": 20120321,
    "readonly": "secret",
    "tree": 1,
    "text": "EBOT",
    "textarea": "Califonia, USA",
    "mask": "CA321"
  },
  {
    "normal": "Lisa",
    "none": "United Kingdom",
    "checkbox": 1,
    "combo": "W",
    "button": "Profile",
    "date": 20101225,
    "readonly": "secret",
    "tree": 2,
    "text": "1dollar",
    "textarea": "London, United Kingdom",
    "mask": "AA225"
  },
  {
    "normal": "Joe",
    "none": "Brazil",
    "checkbox": 1,
    "combo": "W",
    "button": "Profile",
    "date": 19190301,
    "readonly": "secret",
    "tree": 2,
    "text": "hangul",
    "textarea": "São Paulo, Brazil",
    "mask": "AA301"
  }
]
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)