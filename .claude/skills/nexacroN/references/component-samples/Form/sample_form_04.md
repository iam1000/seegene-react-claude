# sample_form_04

**Category:** Form
**Keywords:** `components, objects, all`

## Description

Accessing Object

## Form Information

- **Form ID:** sample_form_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnCount | Button | text="Count" |
| btnAddbutton | Button | text="Add Button" |
| btnHide | Button | text="Hide Button" |
| TextArea00 | TextArea | - |

## Datasets

### Dataset00

### Dataset01

## Source Code

```javascript
this.btnCount_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.TextArea00.set_value("components.length: "+this.components.length+"\n"
		+"objects.length: "+this.objects.length+"\n"
		+"all.length: "+this.all.length);
};

var i=0;
this.btnAddbutton_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var btnobj = new Button();
	this.addChild("btn"+i, btnobj);
	i++;
};

this.btnHide_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var tempobj;
	for(var j=0;j<this.components.length;j++)
	{
		tempobj = this.components[j];
		if(tempobj.visible == true && tempobj != obj)	{
			tempobj.set_visible(false);
		} else {
			tempobj.set_visible(true);
		}
	}
	
	if(obj.text == "Hide Button")
	{
		obj.set_text("Show Button");
	} else {
		obj.set_text("Hide Button");
	}
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)