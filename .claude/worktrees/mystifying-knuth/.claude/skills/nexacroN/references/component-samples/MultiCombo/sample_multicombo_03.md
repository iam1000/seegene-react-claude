# sample_multicombo_03

**Category:** MultiCombo
**Keywords:** `edittype,counttextformat,readonlycolumn`

## Description

Showing the information of the number of selected items

## Form Information

- **Form ID:** sample_multicombo_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Radio00 | Radio | - |

## Datasets

### dsMultiCombo

**Columns:**

| Column | Type |
|--------|------|
| code | STRING |
| data | STRING |
| readonly | STRING |

**Sample Data:**

```json
[
  {
    "code": 1,
    "data": "apple",
    "readonly": ""
  },
  {
    "code": 2,
    "data": "banana",
    "readonly": ""
  },
  {
    "code": 3,
    "data": "orange",
    "readonly": ""
  },
  {
    "code": 4,
    "data": "kiwi",
    "readonly": 1
  },
  {
    "code": 5,
    "data": "peach",
    "readonly": ""
  }
]
```

### dsCounttextformat

**Columns:**

| Column | Type |
|--------|------|
| code | STRING |

**Sample Data:**

```json
[
  {
    "code": "You have selected [#] items."
  },
  {
    "code": "You have selected [#] items from [*] items."
  },
  {
    "code": "You have selected [#] items."
  },
  {
    "code": "[#] / [*]"
  },
  {}
]
```

## Source Code

```javascript
this.Radio00_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.MultiCombo00.set_counttextformat(e.postvalue);
};
```

---

[Back to MultiCombo](./README.md) | [Back to Index](../INDEX.md)