# sample_edit_07

**Category:** Edit
**Keywords:** `filter, oninput`

## Description

Presenting Keyword with Autocomplete Function

## Form Information

- **Form ID:** sample_edit_07
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| edit_input | Edit | - |
| list_output | ListBox | visible="false" |
| btn_list | Button | text="▼" |

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
this.edit_input_oninput = function(obj:nexacro.Edit,e:nexacro.InputEventInfo)
{
	var strLength = this.edit_input.getLength();

	this.list_output.set_visible(true);
		
	if(strLength > 0)
	{
		this.ds_data.filter("DATA.toString().search('"+this.edit_input.value+"') >= 0");
			
		if(this.ds_data.rowcount == 0)
		{
			this.list_output.set_visible(false);
		}
		
	}
	else
	{
		this.list_output.set_visible(false);	
	}
	
};


this.edit_input_onkeydown = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
{
	this.list_output.set_visible(true);    
	
	switch(e.keycode)
	{
		case 13:	//ENTER KEY
			if (this.list_output.index != -1)
			{			
				this.edit_input.set_value(this.list_output.text)
			}
			
			this.list_output.set_visible(false);
			
			break;
			
		case 27:	//ESC KEY
			this.list_output.set_visible(false);
			
			break;
			
		case 38:	//UP KEY
			if (this.list_output.index > 0)
			{
				this.list_output.set_index(this.list_output.index - 1);
			}
			
			break;
			
		case 40:	//DOWN KEY
			this.list_output.set_index(this.list_output.index + 1);
			
			break;
			
		default:
			//trace("keycode = " + e.keycode);
	}
	
};

this.btn_list_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	if(this.list_output.visible == false)
	{
		if(!this.edit_input.getLength())
		{
			this.ds_data.filter("");
		}		

		this.list_output.set_visible(true);	
	}
	else
	{
		this.list_output.set_visible(false);
	}
	
};

this.list_output_onitemclick = function(obj:nexacro.ListBox,e:nexacro.ClickEventInfo)
{	
	this.edit_input.set_value(obj.text);
	this.list_output.set_visible(false);
	
};
```

---

[Back to Edit](./README.md) | [Back to Index](../INDEX.md)