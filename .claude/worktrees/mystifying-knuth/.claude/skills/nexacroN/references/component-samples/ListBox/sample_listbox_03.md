# sample_listbox_03

**Category:** ListBox
**Keywords:** `multiselect, getSelectedCount, getSelectedItems, getCount, setSelect`

## Description

Multiple Selection

## Form Information

- **Form ID:** sample_listbox_01_nexacro16
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| ListBox00 | ListBox | - |
| btn_selected_record | Button | text="Selected record&#13;&#10;infor..." |
| btn_select_all | Button | text="Select all" |
| TextArea00 | TextArea | - |

## Datasets

### ds_data

**Columns:**

| Column | Type |
|--------|------|
| CODE | STRING |
| DATA | STRING |

**Sample Data:**

```json
[
  {
    "CODE": "",
    "DATA": "static"
  },
  {
    "CODE": 1,
    "DATA": "dataset"
  },
  {
    "CODE": 2,
    "DATA": "button"
  },
  {
    "CODE": 3,
    "DATA": "calendar"
  },
  {
    "CODE": 4,
    "DATA": "checkbox"
  }
]
```

## Source Code

```javascript
this.btn_selected_record_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var sMsg  = "Selected Record is\n";	
	var arrSelectedItems = this.ListBox00.getSelectedItems();
	
	for(var i=0;i<arrSelectedItems.length;i++)
	{
			sMsg += "- Row : "+ arrSelectedItems[i] +"\n";
	}

	sMsg += "\nNumber of selected record: " + this.ListBox00.getSelectedCount();	
	
	// this.alert(sMsg);
	this.TextArea00.set_value(sMsg);
	
};


this.btn_select_all_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	for(i=0;i<this.ListBox00.getCount();i++)
	{
		this.ListBox00.setSelect(i, true);
	}
	
};
```

---

[Back to ListBox](./README.md) | [Back to Index](../INDEX.md)