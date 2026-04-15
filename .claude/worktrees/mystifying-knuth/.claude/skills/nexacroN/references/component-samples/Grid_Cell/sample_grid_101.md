# sample_grid_101

**Category:** Grid Cell
**Keywords:** `getEditingText, getCellText`

## Description

Displaying String Length Entered in Cell

## Form Information

- **Form ID:** sample_grid_101
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Static00 | Static | text="0 / 10", visible="false" |

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
  {},
  {},
  {}
]
```

## Source Code

```javascript
var maxlength = 0;

this.Grid00_oninput = function(obj:nexacro.Grid,e:nexacro.InputEventInfo)
{
	this.fn_checklength();
};

this.fn_checklength = function(row, cell)
{
	var length = 0;
	if(this.Grid00.getEditingText())
		length = this.Grid00.getEditingText().length;
	else if(this.Grid00.getCellText(row, cell))
		length = this.Grid00.getCellText(row, cell).length;
	this.Static00.set_text(length + " / "+maxlength);
}

this.Grid00_oncellposchanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
{
	if(this.Grid00.getCellProperty("body", e.cell, "edittype") == "textarea")
	{
		maxlength = this.Grid00.getCellProperty("body", e.cell, "textareamaxlength");
		if(maxlength == -1)
		{
			this.Static00.set_visible(false);
		}
		else
		{
			var objRet = this.Grid00.getCellRect(e.row, e.cell);
			var vL = this.Grid00.getOffsetLeft() + objRet.left + objRet.width;
			var vT = this.Grid00.getOffsetTop() + objRet.top;	
			
			this.Static00.move(vL, vT + 1);
			this.fn_checklength(e.row, e.cell);
			this.Static00.set_visible(true);		
		}
	}
	else 
		this.Static00.set_visible(false);
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)