# sample_checkboxset_01

**Category:** CheckBoxSet
**Keywords:** `readonlycolumn,editautoselect,editinputtype`

## Description

Setting non-selectable items

## Form Information

- **Form ID:** sample_checkboxset_01
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="dsGrid" |

## Datasets

### dsCheckBoxSet

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
    "readonly": ""
  },
  {
    "code": 5,
    "data": "peach",
    "readonly": ""
  }
]
```

### dsGrid

**Columns:**

| Column | Type |
|--------|------|
| code | STRING |
| data | STRING |
| stock | INT |

**Sample Data:**

```json
[
  {
    "code": 1,
    "data": "apple",
    "stock": 10
  },
  {
    "code": 2,
    "data": "banana",
    "stock": 10
  },
  {
    "code": 3,
    "data": "orange",
    "stock": 10
  },
  {
    "code": 4,
    "data": "kiwi",
    "stock": 10
  },
  {
    "code": 5,
    "data": "peach",
    "stock": 10
  }
]
```

## Source Code

```javascript
this.dsGrid_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo) {
  if (e.columnid === 'stock') {
    var targetRow = this.dsCheckBoxSet.findRow("code", obj.getColumn(e.row, 0));
    var newValue = e.newvalue;
    var readonlyValue = (newValue === 0) ? 1 : 0;
    this.dsCheckBoxSet.setColumn(targetRow, "readonly", readonlyValue);
  }
};
```

---

[Back to CheckBoxSet](./README.md) | [Back to Index](../INDEX.md)