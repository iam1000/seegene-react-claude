# sample_grid_76

**Category:** Grid Application
**Keywords:** `displaytype`

## Description

Displaying Radio Button

## Form Information

- **Form ID:** sample_grid_76
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |

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
    "Column0": "",
    "Column1": "A",
    "Column2": 1
  },
  {
    "Column0": "",
    "Column1": "B",
    "Column2": 2
  },
  {
    "Column0": "",
    "Column1": "C",
    "Column2": 3
  },
  {
    "Column0": "",
    "Column1": "D",
    "Column2": 4
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if (e.cell == 0)
	{
		this.Dataset00.set_enableevent(false);
		for(var i=0; i<this.Dataset00.rowcount; i++)
		{
			if (e.row == i)
			{
				this.Dataset00.setColumn(e.row,"Column0","1");
			}else{
				this.Dataset00.setColumn(i,"Column0","0");
			}	
		}
		this.Dataset00.set_enableevent(true);
	}
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)