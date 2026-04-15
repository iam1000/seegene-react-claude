# sample_grid_70

**Category:** Grid Cell
**Keywords:** `row`

## Description

Checking Selected Cell Property

## Form Information

- **Form ID:** sampla_grid_69
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| TextArea00 | TextArea | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| A | STRING |
| B | STRING |
| C | STRING |
| D | STRING |

**Sample Data:**

```json
[
  {
    "A": 1,
    "B": 1,
    "C": 1,
    "D": 1
  },
  {
    "A": 2,
    "B": 2,
    "C": 2,
    "D": 2
  },
  {
    "A": 3,
    "B": 3,
    "C": 3,
    "D": 3
  },
  {
    "A": 4,
    "B": 4,
    "C": 4,
    "D": 4
  }
]
```

## Source Code

```javascript
this.Grid00_onlbuttondown = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
{
	var strRow;
	switch(e.row) {
		case -1:
			strRow = 'Head Band';
			break;
		case -2:
			strRow = 'Summary Band';
			break;
		case -9:
			strRow = 'Blank Body';
			break;		
		default:
			strRow = 'Body Band';
	}
	this.TextArea00.set_value(strRow+'\n'+'row: '+e.row+'\n'+'subrow: '+e.subrow)
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)