# sample_grid_48

**Category:** Grid Application
**Keywords:** `getRowType, getGroupRangeCount`

## Description

Deleting Subtotal with Only 1 Item

## Form Information

- **Form ID:** sample_grid_48
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="Button00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | INT |
| rowcnt | INT |

**Sample Data:**

```json
[
  {
    "Column0": "A01",
    "Column1": 10
  },
  {
    "Column0": "A01",
    "Column1": 20
  },
  {
    "Column0": "A02",
    "Column1": 15
  },
  {
    "Column0": "A03",
    "Column1": 12
  },
  {
    "Column0": "A03",
    "Column1": 25
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	for(var i=this.Dataset00.getRowCount()-1; i>=0 ;i-- )
	{		
		if( this.Dataset00.getRowType(i) == Dataset.ROWTYPE_GROUP 
			&&  this.Dataset00.getGroupRangeCount(i) < 2){
			this.Dataset00.deleteRow(i);
		}
	}
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)