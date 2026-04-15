# sample_grid_58

**Category:** Grid Cell
**Keywords:** `suppress`

## Description

Applying Suppress Property with Script

## Form Information

- **Form ID:** sample_grid_58
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
| Column1 | STRING |
| Column2 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": 1,
    "Column1": "1-1",
    "Column2": "A"
  },
  {
    "Column0": 1,
    "Column1": "1-1",
    "Column2": "B"
  },
  {
    "Column0": 1,
    "Column1": "1-2",
    "Column2": "C"
  },
  {
    "Column0": 1,
    "Column1": "1-3",
    "Column2": "D"
  },
  {
    "Column0": 2,
    "Column1": "2-1",
    "Column2": "E"
  }
]
```

## Source Code

```javascript
this.Grid00_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var sCol = e.col;
	if(sCol==0)
	{
		this.Grid00.setCellProperty("Body", 0, "suppress", 1);
	} else if(sCol==1)	{
		this.Grid00.setCellProperty("Body", 0, "suppress", 1);
		this.Grid00.setCellProperty("Body", 1, "suppress", 2);
	}
};

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
		this.Grid00.setCellProperty("Body", 0, "suppress", 0);
		this.Grid00.setCellProperty("Body", 1, "suppress", 0);
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)