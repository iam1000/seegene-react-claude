# sample_form_09

**Category:** Form
**Keywords:** `components, all`

## Description

Displaying Component List

## Form Information

- **Form ID:** sample_form_09
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="check list" |
| Button01 | Button | text="check all list" |
| Grid00 | Grid | binddataset="Dataset00" |
| Tab00 | Tab | - |
| Div00 | Div | text="Div00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |
| Column2 | STRING |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.clearData();
	this.get_com_info(this);
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.clearData();
    this.get_com_info(this, true);
};

this.get_com_info = function(obj, bAll, bRecursive)
{
	var i;
	var components = bAll?obj.all:obj.components;
	this.Dataset00.set_enableevent(false);
	
	for( i = 0 ; i < components.length ; i++ )
	{
	    var nRow = this.Dataset00.addRow();
	    this.Dataset00.setColumn(nRow,0,components[i].id);	
	    this.Dataset00.setColumn(nRow,1,bRecursive?obj.parent.valueOf():this.valueOf());
	    this.Dataset00.setColumn(nRow,2,this.get_url(components[i],""));
	    var strType = components[i].valueOf(); 
	    
		if(strType == "[object Div]" || strType == "[object Tab]"){			
			if (strType == "[object Tab]") {
				for(var j = 0 ; j < components[i].tabpages.length ; j++ )
				{
					var nRow = this.Dataset00.addRow();
					this.Dataset00.setColumn(nRow,0,components[i].tabpages[j].id);	
					this.Dataset00.setColumn(nRow,1,components[i].valueOf());
					this.Dataset00.setColumn(nRow,2,this.get_url(components[i].tabpages[j],""));				
					
					this.get_com_info(components[i].tabpages[j].form, bAll, true);				
				}				
			} else {
				this.get_com_info(components[i].form, bAll, true);
			}
		}		 
	}
	this.Dataset00.set_enableevent(true);
};

this.get_url = function(obj, str)
{
	if(obj == "[object Form]")
	{
		var s = "form";
		if(obj.name == "sample_form_09")
		{
			return str;
		}
	}	else	{
		var s = obj.name;
	}
	if(str != "")
	{
		s += "."+str;
	}
	return this.get_url(obj.parent, s);
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)