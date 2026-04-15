# sample_div_06

**Category:** Div
**Keywords:** `fromobject, userdata`

## Description

Implementing Portlet Screen

## Form Information

- **Form ID:** sample_div_06
- **Size:** 660 x 540

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Div00 | Div | - |
| Div01 | Div | - |
| Div02 | Div | - |
| Div03 | Div | - |
| Div04 | Div | - |
| Div05 | Div | - |
| Div06 | Div | - |
| Div07 | Div | - |
| Div08 | Div | - |
| divMove | Div | visible="false" |

## Source Code

```javascript
this.fv_objFrom;
this.fv_objTo;

this.sample_div_06_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	var aniObj = new nexacro.Animation("Ani00", this);
	this.addChild("Ani00", aniObj);
};

this.Div_ondrag = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
{
		e.userdata = obj;
		this.fn_makeDragObj(obj);
		return true;
};

this.fn_makeDragObj = function (obj)
{	
	this.divMove.set_background(obj.background);
	this.divMove.set_visible(true);
};

this.form_ondragmove = function(obj:nexacro.Form,e:nexacro.DragEventInfo)
{
	this.divMove.move(e.clientx + 10, e.clienty + 10);
};
		
this.form_ondrop = function(obj:nexacro.Form,e:nexacro.DragEventInfo)
{
	this.divMove.set_visible(false);
	this.fv_objFrom = e.userdata;
	this.fv_objTo = e.fromobject.parent;							
	if (this.fv_objTo != "[object Div]") 
	{
		
		return;
	}
	this.Ani00.addTarget("AniItem00", this.fv_objFrom, "left:"+this.fv_objTo.left+", top:"+this.fv_objTo.top);
	this.Ani00.addTarget("AniItem01", this.fv_objTo, "left:"+this.fv_objFrom.left+", top:"+this.fv_objFrom.top);
	this.Ani00.play();
	this.Ani00.removeTarget("AniItem00");
	this.Ani00.removeTarget("AniItem01");
};
```

---

[Back to Div](./README.md) | [Back to Index](../INDEX.md)