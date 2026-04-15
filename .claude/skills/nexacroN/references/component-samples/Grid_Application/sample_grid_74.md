# sample_grid_74

**Category:** Grid Application
**Keywords:** `findRowExpr`

## Description

Removing Duplicates

## Form Information

- **Form ID:** sample_grid_73
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00", text="" |
| Button00 | Button | text="Column0" |
| Button01 | Button | text="Column1 && Column2" |
| Button02 | Button | text="Init" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |
| Column2 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": 1,
    "Column1": 1,
    "Column2": "a"
  },
  {
    "Column0": 2,
    "Column1": 1,
    "Column2": "b"
  },
  {
    "Column0": 1,
    "Column1": 1,
    "Column2": "a"
  },
  {
    "Column0": 4,
    "Column1": 2,
    "Column2": "d"
  },
  {
    "Column0": 5,
    "Column1": 2,
    "Column2": "e"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var sExpr	= "rowidx==dataset.findRowExpr(\"Column0=='\" + Column0 + \"'\")";		
	this.Dataset00.filter(sExpr);   
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.gf_distincDsFilter(this.Dataset00, "Column1,Column2");
};

this.gf_distincDsFilter = function(objDs, sColID)
{
	var arrArgs	= sColID.split(",");
	var sFilterExpr		= "";
	var sFindRowExpr	= "";
	
	for (var i=0; i<arrArgs.length; i++)
	{
		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;
		
		sFindRowExpr	+= (sFindRowExpr) ? " && " : "";
		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
	}
	
	if (sFindRowExpr) {
		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
	}
	objDs.filter(sFilterExpr);
};

this.Button02_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.filter("");
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)