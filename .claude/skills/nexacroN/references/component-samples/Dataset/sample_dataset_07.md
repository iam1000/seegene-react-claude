# sample_dataset_07

**Category:** Dataset
**Keywords:** `updatecontrol`

## Description

Changing RowType

## Form Information

- **Form ID:** sample_dataset_07
- **Size:** 1280 x 720

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

**Sample Data:**

```json
[
  {
    "Column0": 1,
    "Column1": "a"
  },
  {
    "Column0": 2,
    "Column1": "b"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var rowcnt = this.Dataset00.getRowCount();
	for(var i=0;i<rowcnt;i++)
	{
		if(this.Dataset00.getRowType(i)==4)
		{
			this.fn_addvalue("index:"+i+" getOrgColumn: "+this.Dataset00.getOrgColumn(i,0));
			this.fn_addvalue("index:"+i+" getColumn: "+this.Dataset00.getColumn(i,0));
			this.Dataset00.set_updatecontrol(false);
			this.Dataset00.setRowType(i,Dataset.ROWTYPE_NORMAL);
			this.Dataset00.set_updatecontrol(true);
			this.fn_addvalue("index:"+i+" ROWTYPE_NORMAL_getOrgColumn: "+this.Dataset00.getOrgColumn(i,0));	
		}
	}
}

this.fn_addvalue = function(str:String)
{
	if(this.TextArea00.value)
	{
		this.TextArea00.set_value(this.TextArea00.value+"\n"+str);
	} else {
		this.TextArea00.set_value(str);
	}
}
```

---

[Back to Dataset](./README.md) | [Back to Index](../INDEX.md)