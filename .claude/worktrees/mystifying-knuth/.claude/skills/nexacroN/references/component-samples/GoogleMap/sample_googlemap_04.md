# sample_googlemap_04

**Category:** GoogleMap
**Keywords:** `language, region`

## Description

Setting Language & Regional Characteristics Displayed on Map

## Form Information

- **Form ID:** sample_googlemap_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="ko / KR" |
| GoogleMap00 | GoogleMap | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.GoogleMap00.set_showzoom(true);
	this.GoogleMap00.set_apikey(nexacro.getApplication().googleMapAPIKey);	
	this.GoogleMap00.set_language('ko');
	this.GoogleMap00.set_region('KR');
	this.GoogleMap00.load(false, 37.243158, 131.869202, 3, 15);
};
```

---

[Back to GoogleMap](./README.md) | [Back to Index](../INDEX.md)