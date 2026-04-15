# sample_grid_78

**Category:** Grid Cell
**Keywords:** `selectstartcol, selectendcol, selectstartrow, selectendrow`

## Description

Displaying Cells of Selected Area as One Cell

## Form Information

- **Form ID:** sample_grid_78
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="mergeCell" |
| Button01 | Button | text="splitCell" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| type | STRING |
| lunch | INT |
| dinner | INT |
| weekend | INT |

**Sample Data:**

```json
[
  {
    "type": "adult",
    "lunch": 14900,
    "dinner": 23900,
    "weekend": 23900
  },
  {
    "type": "student",
    "lunch": 10900,
    "dinner": 10900,
    "weekend": 20000
  },
  {
    "type": "infant",
    "lunch": 7500,
    "dinner": 7500,
    "weekend": 20000
  }
]
```

## Source Code

```javascript
this.Button_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	if(obj.text == 'mergeCell')
	{
		this.Grid00.mergeCell(this.Grid00.selectstartcol[0], 
			this.Grid00.selectendcol[0],
			this.Grid00.selectstartrow[0],
			this.Grid00.selectendrow[0]);
	}
	else if(obj.text == 'splitCell')
	{
		this.Grid00.splitCell(this.Grid00.selectstartcol[0], 
			this.Grid00.selectendcol[0],
			this.Grid00.selectstartrow[0],
			this.Grid00.selectendrow[0]);
	}
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)