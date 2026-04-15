# sample_grid_72

**Category:** Grid Application
**Keywords:** `redrawExprCell`

## Description

Returning Checked Row Number

## Form Information

- **Form ID:** sampla_grid_71
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="Button00" |
| TextArea00 | TextArea | - |

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
  {},
  {},
  {}
]
```

## Source Code

```javascript
this.ck_arr = [];

this.ck_func = function(nRow)
{	
	return this.ck_arr[nRow] == null ? 0 :  this.ck_arr[nRow];
}

this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if(e.cell == 0 )
	{
		this.ck_arr[e.row] = this.ck_arr[e.row] == null ? 1 : this.ck_arr[e.row]^1;
		this.Grid00.redrawExprCell('body');
	}
	
};

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var cnt = 0;
	for(var i = 0 ; i < this.ck_arr.length ; i++)
	{
		if(this.ck_arr[i])
		{
			cnt = cnt + 1;
		}	
	}
	
	this.TextArea00.set_value("No. of selected rows : " + cnt);
	
	if(cnt == 0){
		this.TextArea00.set_value("There is no selected row " );
	}
	
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)