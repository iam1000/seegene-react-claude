# sample_grid_68

**Category:** Grid Cell
**Keywords:** `getEditValue, setEditValue`

## Description

Entering Only Specific Text in Grid

## Form Information

- **Form ID:** sampla_grid_68
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |

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
    "Column0": "apple",
    "Column1": "사과"
  },
  {
    "Column0": "car",
    "Column1": "자동차"
  },
  {
    "Column0": "water",
    "Column1": "물"
  }
]
```

## Source Code

```javascript
this.Grid00_oninput = function(obj:nexacro.Grid,e:nexacro.InputEventInfo)
{
	var strControlValue  = obj.getEditValue();
	if(strControlValue)
	{
		obj.setEditValue(strControlValue.replace(/[^\ㄱ-ㅎㅏ-ㅣ가-힣]/g, ""));
	}
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)