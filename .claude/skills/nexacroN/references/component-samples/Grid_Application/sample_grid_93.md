# sample_grid_93

**Category:** Grid Application
**Keywords:** `getSum, getCellCount`

## Description

Adding Total Row for Specific Grid Component Only

## Form Information

- **Form ID:** sample_grid_93
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset01" |
| Grid02 | Grid | binddataset="Dataset02" |
| Button00 | Button | text="Add sum row" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | INT |
| Column1 | INT |
| Column2 | INT |

**Sample Data:**

```json
[
  {
    "Column0": 1,
    "Column1": 1,
    "Column2": 2
  },
  {
    "Column0": 2,
    "Column1": 3,
    "Column2": 3
  },
  {
    "Column0": 3,
    "Column1": 4,
    "Column2": 5
  }
]
```

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| Column0 | INT |
| Column1 | INT |
| Column2 | INT |

**Sample Data:**

```json
[
  {
    "Column0": 4,
    "Column1": 5,
    "Column2": 3
  },
  {
    "Column0": 2,
    "Column1": 6,
    "Column2": 3
  },
  {
    "Column0": 9,
    "Column1": 7,
    "Column2": 5
  }
]
```

### Dataset02

**Columns:**

| Column | Type |
|--------|------|
| Column0 | INT |
| Column1 | INT |
| Column2 | INT |

**Sample Data:**

```json
[
  {
    "Column0": 41,
    "Column1": 5,
    "Column2": 31
  },
  {
    "Column0": 2,
    "Column1": 61,
    "Column2": 3
  },
  {
    "Column0": 9,
    "Column1": 7,
    "Column2": 5
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.fn_setSumm(this);
};

this.fn_setSumm = function(obj)
{
	var colNm;
	var objGrd;
	var objDs;
	for(var i=0; i<obj.all.length; i++){
		if( obj.all[i].toString() == "[object Grid]" ){
			objGrd = obj.all[i];
			if( objGrd.summ == "Y"){
				objDs = obj.all[objGrd.binddataset];	
				var idx = objDs.addRow();
				for(var j=0; j<objGrd.getCellCount("body"); j++){
					colNm = objGrd.getCellProperty("body", j, "text").split(":");
					objDs.setColumn(idx, colNm[1], objDs.getSum(colNm[1], 0, objDs.rowcount-1));
				}
			}	
		}
	}
}
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)