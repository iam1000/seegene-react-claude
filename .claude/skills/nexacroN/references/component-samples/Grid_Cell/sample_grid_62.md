# sample_grid_62

**Category:** Grid Cell
**Keywords:** `cellexprupdatecondition, blinkCell, blinkCellByInterval`

## Description

Displaying Specific Row to Blink

## Form Information

- **Form ID:** sample_grid_62
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="blinkCell" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| label | STRING |
| level | STRING |
| flag | STRING |

**Sample Data:**

```json
[
  {
    "level": "",
    "label": "A",
    "flag": ""
  },
  {
    "level": 1,
    "label": "B",
    "flag": ""
  },
  {
    "level": 2,
    "label": "C",
    "flag": 2
  },
  {
    "level": 2,
    "label": "D",
    "flag": 3
  }
]
```

## Source Code

```javascript
this.styleArr = ["sample_grid_62_blink2", "sample_grid_62_blink1", "sample_grid_62_blinkcell"];
this.idx = 0 ;
this.blinkRow = 0 ;

this.sample_grid_62_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	this.setTimer(1, 1000);
	trace(1^1);//0
	trace(0^1);//1
};

this.sample_grid_62_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
{
	var v = this.Dataset00.getColumn(e.timerid,2)^1;
	this.Dataset00.setColumn(e.timerid, 2, v);
	
	this.idx = v;
	this.blinkRow = e.timerid;
};

this.setblink = function (nRow)
{
	if(nRow >= 2)
	{
		return this.styleArr[2];
	}
	else if(this.blinkRow == nRow)
	{
		return this.styleArr[this.idx ];
	}
	return "";
};

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Grid00.blinkCell(2, "label, level, flag", 5000, 5);
	this.Grid00.blinkCellByInterval(3, "label, level, flag", 500, 5);
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)