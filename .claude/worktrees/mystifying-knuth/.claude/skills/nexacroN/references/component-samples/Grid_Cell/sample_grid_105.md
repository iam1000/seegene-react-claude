# sample_grid_105

**Category:** Grid Cell
**Keywords:** `fromreferenceobject`

## Description

Checking Merged Cell Checkbox

## Form Information

- **Form ID:** sample_grid_105
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid01 | Grid | binddataset="Dataset00" |
| Grid02 | Grid | binddataset="Dataset00" |
| Grid03 | Grid | binddataset="Dataset00" |

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
    "Column1": "test1",
    "Column0": 1
  },
  {
    "Column1": "test2",
    "Column0": ""
  },
  {
    "Column1": "test3",
    "Column0": ""
  },
  {
    "Column1": "test4",
    "Column0": 1
  }
]
```

## Source Code

```javascript
this.Grid02_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if(this.Dataset00.getColumn(e.row, "Column0") == 1) 
		this.Dataset00.setColumn(e.row, "Column0", 0);
	else 
		this.Dataset00.setColumn(e.row, "Column0", 1);
};

this.Grid03_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if(e.fromreferenceobject == "[object CheckBoxControl]")
	{
		if(this.Dataset00.getColumn(e.row, "Column0") == 1) 
			this.Dataset00.setColumn(e.row, "Column0", 0);
		else 
			this.Dataset00.setColumn(e.row, "Column0", 1);
	}
};

this.Dataset00_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
{
	trace('test');
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)