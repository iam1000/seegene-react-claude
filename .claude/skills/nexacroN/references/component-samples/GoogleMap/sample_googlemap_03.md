# sample_googlemap_03

**Category:** GoogleMap
**Keywords:** `load, showzoom, addItem, removeItem`

## Description

Adding/Removing Circle on Map

## Form Information

- **Form ID:** sample_googlemap_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| GoogleMap00 | GoogleMap | - |
| Button00 | Button | text="Show Map" |
| Button01 | Button | text="Add Circle", enable="false" |
| Button02 | Button | text="Del Circle", enable="false" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.GoogleMap00.set_showzoom(true);
	this.GoogleMap00.set_apikey(nexacro.getApplication().googleMapAPIKey);	
	this.GoogleMap00.load(false, 11.96832946, 121.922996308, 0, 13);
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var objGoogleMapCircle = new nexacro.GoogleMapCircle();
	
	objGoogleMapCircle.set_latitude(11.96832946);
	objGoogleMapCircle.set_longitude(121.922996308);
	objGoogleMapCircle.set_radius(1000);
	objGoogleMapCircle.set_visible(true);	
	
	this.GoogleMap00.addItem("MapCircle", objGoogleMapCircle);
	
	this.Button01.set_enable(false);
	this.Button02.set_enable(true);			
};

this.Button02_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.GoogleMap00.removeItem("MapCircle");
	
	this.Button01.set_enable(true);
	this.Button02.set_enable(false);			
};

this.GoogleMap00_onerror = function(obj:nexacro.GoogleMap,e:nexacro.GoogleMapErrorEventInfo)
{
	trace("error: " + e.errormsg);
};

 this.GoogleMap00_onload = function(obj:nexacro.GoogleMap,e:nexacro.GoogleMapEventInfo)
{
	trace("loading succeed");
	
	if(this.GoogleMap00.items[0])
	{
		this.GoogleMap00.removeItem(this.GoogleMap00.items[0]);
	}
	
	this.Button01.set_enable(true);
	this.Button02.set_enable(false);	
};
```

---

[Back to GoogleMap](./README.md) | [Back to Index](../INDEX.md)