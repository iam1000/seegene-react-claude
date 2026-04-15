# sample_edit_09

**Category:** Edit
**Keywords:** `updateToDataset`

## Description

Updating Bound Value Immediately upon Key Input

## Form Information

- **Form ID:** sample_edit_08
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Edit00 | Edit | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "Mango"
  },
  {
    "Column0": "Bananas"
  },
  {
    "Column0": "Coconuts‎"
  },
  {
    "Column0": "Orange"
  }
]
```

## Source Code

```javascript
this.Edit00_onkeyup = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
{
	this.Edit00.updateToDataset();
};
```

---

[Back to Edit](./README.md) | [Back to Index](../INDEX.md)