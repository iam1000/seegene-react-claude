# sample_dataset_06

**Category:** Dataset
**Keywords:** `getColCount`

## Description

Restoring Changed Column Information

## Form Information

- **Form ID:** sample_dataset_06
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
| Column3 | STRING |
| Column4 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "",
    "Column1": 1,
    "Column2": 2,
    "Column3": 3,
    "Column4": 5
  },
  {
    "Column0": "",
    "Column1": "a",
    "Column2": "b",
    "Column3": "c",
    "Column4": "d"
  },
  {
    "Column0": "",
    "Column1": "data1",
    "Column2": "data2",
    "Column3": "data3",
    "Column4": "data4"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var iRowCount = this.Dataset00.getRowCount();
	var iColCount = this.Dataset00.getColCount();
	
	for (var i = 0; i < iRowCount; i++)
	{
        if (this.Dataset00.getRowType(i) != "1")
        {
            for (var j = 0; j < iColCount; j++)
            {   
                if (this.Dataset00.getColumn(i, j) != this.Dataset00.getOrgColumn(i, j))
                {
                    this.Dataset00.setColumn(i, j, this.Dataset00.getOrgColumn(i, j));
                }
            }
        }
	}
}
```

---

[Back to Dataset](./README.md) | [Back to Index](../INDEX.md)