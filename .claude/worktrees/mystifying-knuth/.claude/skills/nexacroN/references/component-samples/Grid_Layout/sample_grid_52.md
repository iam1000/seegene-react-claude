# sample_grid_52

**Category:** Grid Layout
**Keywords:** `setFormatColProperty`

## Description

Frame Fixing - Selected Column

## Form Information

- **Form ID:** sample_grid_52
- **Size:** 1280 x 720

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
| Column3 | STRING |
| Column4 | STRING |
| Column5 | STRING |
| Column6 | STRING |
| Column7 | STRING |

**Sample Data:**

```json
[
  {},
  {},
  {},
  {}
]
```

## Source Code

```javascript
this.Grid00_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var iCnt=0;
	
	for (var j = e.cell; j >= 0; j--)
	{
		var iColCur = this.Grid00.getCellProperty("Head", j, "col");
		var iCell = e.cell;
		
		for (var i = iCell; i >= 0; i--)
		{
			if (this.Grid00.getCellProperty("Head", i, "row") == 0 
				&& iColCur == this.Grid00.getCellProperty("Head", i, "col"))
			{
				if (iCnt==0)
				{
					var iCol = this.Grid00.getCellProperty("Head", i, "col");
					var iSpan = this.Grid00.getCellProperty("Head", i, "colspan")-1;
					var iTotCol = iCol + iSpan;
					for (var k = 0; k <= iTotCol; k++)
					{
						this.Grid00.setFormatColProperty(k, "band", "left");
					}
					for(var l = iTotCol;l<this.Grid00.getCellCount("head"); l++)
					{
						this.Grid00.setFormatColProperty(k, "band", "body");
					}
				}
				iCnt++;
			}
		}
	}
};
```

---

[Back to Grid Layout](./README.md) | [Back to Index](../INDEX.md)