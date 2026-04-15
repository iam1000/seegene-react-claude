# sample_div_04

**Category:** Div
**Keywords:** `getOffsetWidth, getOffsetHeight, getInnerDataset, clientx, clienty`

## Description

Processing Last Coordinate Value

## Form Information

- **Form ID:** sample_div_04
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Div00 | Div | text="Div00" |
| ListBox00 | ListBox | - |

## Source Code

```javascript
var nButtonX;
var nButtonY;
var btnOrgW;
var btnOrgH;

this.Div00_ondrag = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
{
	return true;
};

this.Div00_ondragmove = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
{
	var nLeft = e.clientx-nButtonX;
	var nTop = e.clienty-nButtonY;
	this.Div00.form.Button00.move(nLeft,nTop, btnOrgW, btnOrgH);
};

this.Div00_ondrop = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
{
	trace("Left >> " + e.clientx + "  Top >>> " + e.clienty);
	var tempDS = this.ListBox00.getInnerDataset();
	var nIndex = tempDS.rowcount;
	tempDS.insertRow(nIndex);
    tempDS.setColumn(nIndex, "codecolumn", (e.clientx-nButtonX)+","+(e.clienty-nButtonY));
    tempDS.setColumn(nIndex, "datacolumn", "Left >> " + (e.clientx-nButtonX) + "  Top >>> " + (e.clienty-nButtonY));
    this.resetScroll();
};

this.Div00_Button00_onlbuttondown = function(obj:nexacro.Button,e:nexacro.MouseEventInfo)
{
	nButtonX = e.clientx;
	nButtonY = e.clienty;
};

this.ListBox00_onitemchanged = function(obj:nexacro.ListBox,e:nexacro.ItemChangeEventInfo)
{
	if(e.postindex!=-1)
	{
		var tempArray = e.postvalue.split(',');
		var nLeft = tempArray[0];
		var nTop = tempArray[1];
		this.Div00.form.Button00.move(nLeft,nTop, btnOrgW, btnOrgH);
	}
};

this.ListBox00_onkillfocus = function(obj:nexacro.ListBox,e:nexacro.KillFocusEventInfo)
{
	obj.setSelect(-1);
};

this.sample_div_04_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	var btnOrgW = this.Div00.form.Button00.getOffsetWidth();
	var btnOrgH = this.Div00.form.Button00.getOffsetHeight();
};
```

---

[Back to Div](./README.md) | [Back to Index](../INDEX.md)