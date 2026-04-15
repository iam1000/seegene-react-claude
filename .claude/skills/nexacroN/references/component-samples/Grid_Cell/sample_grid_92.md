# sample_grid_92

**Category:** Grid Cell
**Keywords:** `suppress`

## Description

Merging & Displaying Checkboxes

## Form Information

- **Form ID:** sample_grid_92
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid01 | Grid | binddataset="Dataset00" |

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
    "Column0": "",
    "Column1": "Apple"
  },
  {
    "Column0": "",
    "Column1": "Apple"
  },
  {
    "Column0": "",
    "Column1": "Banana"
  },
  {
    "Column0": "",
    "Column1": "Banana"
  },
  {
    "Column0": "",
    "Column1": "Banana"
  }
]
```

## Source Code

```javascript
this.Dataset00_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
{
	if( e.columnid == "Column0" ){
		obj.set_enableevent(false);
		for(var i=0; i<obj.rowcount; i++)
		{
			if( obj.getColumn(e.row,"Column1") == obj.getColumn(i,"Column1"))
				obj.setColumn(i,e.columnid, e.newvalue);
		}	
		obj.set_enableevent(true);
	}
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)