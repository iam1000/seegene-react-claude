# sample_multicombo_01

**Category:** MultiCombo
**Keywords:** `filter,formatid,displaytype,edittype,onheadvaluechanged`

## Description

Adding a filter to the Grid component header area and showing only the items selected in the filter

## Form Information

- **Form ID:** sample_multicombo_01
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="dsGrid" |
| CheckBox00 | CheckBox | text="showFilter" |

## Datasets

### dsGrid

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "A",
    "Column1": "A-0"
  },
  {
    "Column0": "B",
    "Column1": "B-0"
  },
  {
    "Column0": "A",
    "Column1": "A-1"
  },
  {
    "Column0": "B",
    "Column1": "B-1"
  },
  {
    "Column0": "A",
    "Column1": "A-2"
  }
]
```

### dsCombo

**Columns:**

| Column | Type |
|--------|------|
| code | STRING |
| data | STRING |

## Source Code

```javascript
this.CheckBox00_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
{
	if(e.postvalue)
	{
		this.Grid00.set_formatid("multicombo_filter");
		this.setMultiComboFilter();	
	}
	else
	{
		this.Grid00.set_formatid("default");
		this.dsGrid.filter("");
	}
};

this.setMultiComboFilter = function()
{
	this.dsCombo.set_enableevent(false);
	this.dsCombo.deleteAll();
	for(var i=0, len=this.dsGrid.rowcount; i<len; i++)
	{
		tempvalue = this.dsGrid.getColumn(i, "Column0")
		if(!this.dsCombo.lookup("code", tempvalue, "code"))
		{
			this.dsCombo.addRow();
			this.dsCombo.setColumn(i, "code", tempvalue);
			this.dsCombo.setColumn(i, "data", tempvalue);
		}
	}
	//this.dsCombo.set_keystring("S:code");

	this.dsCombo.set_enableevent(true);
}

this.Grid00_onheadvaluechanged = function(obj:nexacro.Grid,e:nexacro.GridHeadValueChangedEventInfo)
{
	var array = (e.newvalue).split(",");
	var filterString = "";
	if(array) {
		filterString = array.map(function(item) {
			return "'" + item + "' == Column0";
		}).join("||");
		this.dsGrid.filter(filterString);
	}
};
```

---

[Back to MultiCombo](./README.md) | [Back to Index](../INDEX.md)