# sample_grid_22

**Category:** Grid Cell
**Keywords:** `displaytype`

## Description

Representing Data in Various Formats

## Form Information

- **Form ID:** sample_grid_22
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="ds_data", text="" |
| Grid01 | Grid | binddataset="ds_data", text="" |

## Datasets

### ds_data

**Columns:**

| Column | Type |
|--------|------|
| normal | STRING |
| none | STRING |
| bar | STRING |
| button | STRING |
| checkbox | STRING |
| combo | STRING |
| currency | STRING |
| date | STRING |
| image | STRING |
| number | STRING |
| text | STRING |
| tree | STRING |

**Sample Data:**

```json
[
  {
    "normal": "John",
    "none": "Korea",
    "bar": 20,
    "checkbox": 1,
    "combo": "M",
    "button": "Profile",
    "currency": 15000,
    "date": 20160105,
    "image": "imagerc::component_Button.png",
    "tree": "",
    "text": "1dollar",
    "number": 15000
  },
  {
    "normal": "James",
    "bar": 40,
    "button": "Profile",
    "checkbox": "",
    "combo": "M",
    "currency": 25000,
    "date": 20100826,
    "image": "imagerc::component_Grid.png",
    "tree": 1,
    "text": "EBOT",
    "number": 25000,
    "none": "Spain"
  },
  {
    "normal": "Donald",
    "none": "USA",
    "bar": 80,
    "checkbox": "",
    "combo": "M",
    "button": "Profile",
    "currency": 1000000,
    "date": 20120321,
    "image": "imagerc::component_MaskEdit.png",
    "tree": 1,
    "text": "EBOT",
    "number": 1000000
  },
  {
    "normal": "Lisa",
    "none": "United Kingdom",
    "bar": 100,
    "checkbox": 1,
    "combo": "W",
    "button": "Profile",
    "currency": 3000,
    "date": 20101225,
    "image": "imagerc::component_Static.png",
    "tree": 2,
    "text": "1dollar",
    "number": 3000
  },
  {
    "normal": "Joe",
    "none": "Brazil",
    "bar": 30,
    "checkbox": 1,
    "combo": "W",
    "button": "Profile",
    "currency": 8600,
    "date": 19190301,
    "image": "imagerc::component_Tab.png",
    "tree": 2,
    "text": "hangul",
    "number": 8600
  }
]
```

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

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)