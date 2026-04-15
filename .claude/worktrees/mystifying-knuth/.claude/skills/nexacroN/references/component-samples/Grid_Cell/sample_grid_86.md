# sample_grid_86

**Category:** Grid Cell
**Keywords:** `getEditingValue, getEditingText, setEditingValue`

## Description

Importing Value Being Edited

## Form Information

- **Form ID:** sample_grid_86
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| TextArea00 | TextArea | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| text | STRING |
| mask | STRING |
| date | DATE |

**Sample Data:**

```json
[
  {
    "text": "TEST",
    "mask": 123456,
    "date": 20190218
  },
  {},
  {},
  {}
]
```

## Source Code

```javascript
this.Grid00_oninput = function(obj:nexacro.Grid,e:nexacro.InputEventInfo)
{
	this.TextArea00.set_value("getCurEditType: "+obj.getCurEditType()+"\n"
		+"getEditValue: "+obj.getEditValue()+"\n"
		+"getEditText: "+obj.getEditText()+"\n"
		+"getEditingValue: "+obj.getEditingValue()+"\n"
		+"getEditingText: "+obj.getEditingText());
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)