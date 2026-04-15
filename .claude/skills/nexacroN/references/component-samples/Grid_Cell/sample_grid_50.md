# sample_grid_50

**Category:** Grid Cell
**Keywords:** `oncolumnchanged`

## Description

Using checkboxcontrol when Column Value is "Y", "N"

## Form Information

- **Form ID:** sample_grid_50
- **Size:** 1280 x 720

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

**Sample Data:**

```json
[
  {
    "Column0": "Y"
  },
  {
    "Column0": "N"
  },
  {
    "Column0": "N"
  },
  {
    "Column0": "Y"
  }
]
```

## Source Code

```javascript
this.Dataset00_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
{
	if(e.columnid == "Column0")
	{
		obj.set_enableevent(false);
		if(e.newvalue == '1')
		{
			obj.setColumn(e.row,"Column0",'Y');
		} else if(e.newvalue == '0')
		{
			
			obj.setColumn(e.row,"Column0",'N');  
		}
		obj.set_enableevent(true);
	}
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)