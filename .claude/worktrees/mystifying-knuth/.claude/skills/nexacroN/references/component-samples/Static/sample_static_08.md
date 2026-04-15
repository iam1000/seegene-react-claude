# sample_static_08

**Category:** Static
**Keywords:** `fittocontents`

## Description

Creating Accordion UI

## Form Information

- **Form ID:** sample_static_08
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Show Accordion Menu" |

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
    "Column0": "Menu 1",
    "Column1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "Column0": "Menu 2",
    "Column1": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Column1": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Column0": "Menu 3"
  },
  {
    "Column1": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Column0": "Menu 4"
  },
  {
    "Column1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Column0": "Menu 5"
  }
]
```

## Source Code

```javascript
this.preObj = "";

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var nTop = 100;
	
	for(var i = 0; i < this.Dataset00.rowcount; i++)
	{
		var objStatic = new Static();  
		objStatic.init("Static"+i, 30, 70, 300, 30);				
		this.addChild("Static"+i, objStatic); 	
		objStatic.set_border("1px solid darkgray");
		objStatic.set_padding("0px 0px 0px 5px");
		objStatic.show(); 
		
		objStatic.addEventHandler("onclick", this.StaticAll_onclick, this);
		objStatic.set_text(this.Dataset00.getColumn(i, "Column0"));
		
		if(i != 0)
		{
			var imgID = "Static"+(i-1)+"_1";
			objStatic.set_top(imgID+":-1");
		}
		
		var objStatic1 = new Static();  
		objStatic1.init("Static"+i + "_1", 30, nTop+60, 300, 0, null, null);				
		this.addChild("Static"+i + "_1", objStatic1); 	
		objStatic1.set_border("1px solid darkred, 1px solid darkgray, 1px solid darkgray");
		objStatic1.set_background("yellow");
		objStatic1.set_wordWrap("char");
		objStatic1.show(); 		
		
		objStatic1.set_text(this.Dataset00.getColumn(i, "Column1"));
		objStatic1.set_top(objStatic.id+":0px");	
		nTop += 40;

	}
};


this.StaticAll_onclick = function(obj:nexacro.Static,e:nexacro.ClickEventInfo)
{
	if(this.preObj != "")
	{
		var objID = this.preObj + "_1";
		this.components[objID].set_fittocontents("none");		
		this.components[objID].set_height(0);	
	}
		
	if(obj.id == this.preObj)
	{
		this.preObj = "";
		this.resetScroll();
		return;
	}
	else 
	{
		var objID1 = obj.id + "_1";
		this.components[objID1].set_fittocontents("height");
		this.components[objID1].set_padding("10px 5px");	
		this.resetScroll();
	}
	this.preObj = obj.id;
};
```

---

[Back to Static](./README.md) | [Back to Index](../INDEX.md)