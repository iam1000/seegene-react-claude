# sample_grid_40

**Category:** Grid Application
**Keywords:** `setColumn, currow`

## Description

Implementing Simple Survey in Grid

## Form Information

- **Form ID:** test
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Restaurant | STRING |
| Service | STRING |
| Value | STRING |

**Sample Data:**

```json
[
  {
    "Restaurant": "Burgerking",
    "Service": 2,
    "Value": 3
  },
  {
    "Restaurant": "McDonald's",
    "Value": 2,
    "Service": 1
  },
  {
    "Restaurant": "SHAKE SHACK",
    "Value": 2,
    "Service": 2
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if(e.col>0 && e.col<4)
	{
		this.Dataset00.setColumn(e.row, "Service", e.col);
	}	else
	if(e.col>=4 && e.col<7)
	{
		this.Dataset00.setColumn(e.row, "Value", e.col-3);
	}	
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)