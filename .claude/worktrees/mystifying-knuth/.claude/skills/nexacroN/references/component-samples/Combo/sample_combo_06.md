# sample_combo_06

**Category:** Combo
**Keywords:** `getColumn`

## Description

Implementing Multiple Selection Combo

## Form Information

- **Form ID:** sample_combo_06
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Combo00 | Combo | text="" |
| Grid00 | Grid | binddataset="Dataset00", visible="false" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| check | STRING |
| CODE | STRING |
| DATA | STRING |

**Sample Data:**

```json
[
  {
    "CODE": 1,
    "DATA": "CODE01"
  },
  {
    "CODE": 2,
    "DATA": "CODE02"
  },
  {
    "CODE": 3,
    "DATA": "CODE03"
  },
  {
    "CODE": 4,
    "DATA": "CODE04"
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if(e.col!=0)
	{
		this.Grid00.set_visible(false);
		this.fn_comboEdit_set();
	}
};

this.Combo00_ondropdown = function(obj:nexacro.Combo,e:nexacro.EventInfo)
{
	this.Grid00.set_visible(true);
	return false;
};

this.fn_comboEdit_set = function()
{
	var str_txt = "";
	
	for (i=0;i<this.Dataset00.getRowCount();i++)
	{
		if (this.Dataset00.getColumn(i, "check")==1)
		{
			str_txt += this.Dataset00.getColumn(i,"DATA") + ",";
			
		}
	}	
	this.Combo00.set_text(str_txt.substr(0, str_txt.length-1));
};
```

---

[Back to Combo](./README.md) | [Back to Index](../INDEX.md)