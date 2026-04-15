# sample_grid_77

**Category:** Grid Cell
**Keywords:** `mergeCell, splitCell`

## Description

Displaying Cells of Desired Area as One Cell

## Form Information

- **Form ID:** sample_grid_77
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
		this.Grid00.mergeCell(2, 3, 0, 0); // 23900
		this.Grid00.mergeCell(1, 2, 1, 1); // 10900
		this.Grid00.mergeCell(1, 2, 2, 2); // 7500
		trace(this.Grid00.mergeCell(0, 1, 0, 0)); // adult, 14900
	}
	else if(obj.text == 'splitCell')
	{
		this.Grid00.splitCell(2, 3, 0, 0);
	}
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)