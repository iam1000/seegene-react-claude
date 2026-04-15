# sample_dataset_03

**Category:** Dataset
**Keywords:** `getColumnInfo`

## Description

Checking Column Information & Changing type Property Value

## Form Information

- **Form ID:** sample_dataset_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="getColumnInfo" |
| Button01 | Button | text="set_type" |
| TextArea00 | TextArea | - |
| Spin00 | Spin | - |
| Combo00 | Combo | text="Combo00" |

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

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var strText = new String();
	for (var i = 0; i < this.Dataset00.getColCount(); i++) 
	{
		var objColInfo = this.Dataset00.getColumnInfo(i);
		strText += "ID = " + objColInfo.name;
		strText += " SIZE = " + objColInfo.size;
		strText += " type = " + objColInfo.type;
		strText += "\n";
	}
	this.TextArea00.set_value(strText);
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var objColInfo = this.Dataset00.getColumnInfo(this.Spin00.value);
	objColInfo.set_type(this.Combo00.value);
};

this.sample_dataset_03_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	this.Spin00.set_max(this.Dataset00.getColCount()-1);
};
```

---

[Back to Dataset](./README.md) | [Back to Index](../INDEX.md)