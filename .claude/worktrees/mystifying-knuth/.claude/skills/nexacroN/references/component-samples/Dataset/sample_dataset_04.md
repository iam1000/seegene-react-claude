# sample_dataset_04

**Category:** Dataset
**Keywords:** `getRowType, getOrgColumn, getDeletedRowCount, getDeletedColumn`

## Description

Checking Deleted Row Information

## Form Information

- **Form ID:** sample_dataset_04
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset01" |
| Button00 | Button | text="delete" |
| Button01 | Button | text="execute" |
| Button02 | Button | text="add" |

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
    "Column0": "AAA",
    "Column1": 111
  },
  {
    "Column0": "BBB",
    "Column1": 222
  },
  {
    "Column0": "CCC",
    "Column1": 333
  },
  {
    "Column0": "DDD",
    "Column1": 444
  },
  {
    "Column0": "EEE",
    "Column1": 555
  }
]
```

### Dataset01

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.deleteRow(this.Dataset00.rowposition)
};

this.Button02_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
		this.Dataset00.addRow();
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset01.addColumn("COL_TYPE", "STRING");
	for(var i=0;i<this.Dataset00.colcount;i++)
	{
		this.Dataset01.addColumn(this.Dataset00.getColID(i), "STRING");
	}
	this.fn_orgDataset();
};

this.fn_orgDataset = function()
{
	var sOrgCol = "";
	var sOrgVal = "";
	this.Dataset01.clearData(); 
	
	for (var i = 0; i < this.Dataset00.rowcount; i++) 
	{
		var nRowType = this.Dataset00.getRowType(i);
		if (nRowType == Dataset.ROWTYPE_INSERT || nRowType == Dataset.ROWTYPE_UPDATE)
		{
			this.Dataset01.addRow();
			this.Dataset01.setColumn(this.Dataset01.rowposition, "COL_TYPE", nRowType);
			for (var j = 0; j < this.Dataset00.colcount; j++) 
			{
				sOrgCol = this.Dataset00.getColID(j);
				sOrgVal = this.Dataset00.getOrgColumn(i, sOrgCol);

				this.Dataset01.setColumn(this.Dataset01.rowposition, sOrgCol, sOrgVal);
			}
		}
	}
	
	trace(this.Dataset00.getDeletedRowset().length);
	for (var i = 0; i < this.Dataset00.getDeletedRowCount(); i++) 
	{
		this.Dataset01.addRow();
		this.Dataset01.setColumn(this.Dataset01.rowposition, "COL_TYPE", Dataset.ROWTYPE_DELETE);
		for (var j = 0; j < this.Dataset00.colcount; j++) 
		{
			sOrgCol = this.Dataset00.getColID(j);
			sOrgVal = this.Dataset00.getDeletedColumn(i, sOrgCol);
			this.Dataset01.setColumn(this.Dataset01.rowposition, sOrgCol, sOrgVal);
		}
	}
	
	this.Grid01.createFormat();
};
```

---

[Back to Dataset](./README.md) | [Back to Index](../INDEX.md)