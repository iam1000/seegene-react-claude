# sample_grid_69

**Category:** Grid Application
**Keywords:** `scrollTo`

## Description

Moving Scroll of 2 Grid Components Simultaneously

## Form Information

- **Form ID:** sampla_grid_69
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset01" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": 1,
    "Column1": "A"
  },
  {
    "Column0": 2,
    "Column1": "B"
  },
  {
    "Column0": 3,
    "Column1": "C"
  },
  {
    "Column0": 4,
    "Column1": "D"
  },
  {
    "Column0": 5,
    "Column1": "E"
  }
]
```

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": 1,
    "Column1": "unus"
  },
  {
    "Column0": 2,
    "Column1": "duo"
  },
  {
    "Column0": 3,
    "Column1": "tria"
  },
  {
    "Column0": 4,
    "Column1": "quatuor"
  },
  {
    "Column0": 5,
    "Column1": "quinque"
  }
]
```

## Source Code

```javascript
this.Grid01_onvscroll = function(obj:nexacro.Grid,e:nexacro.ScrollEventInfo)
{
	this.Grid00.scrollTo(0,e.pos);
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)