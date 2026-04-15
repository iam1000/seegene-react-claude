# sample_graphics_03

**Category:** Graphics
**Keywords:** `clear`

## Description

Creating Simple Paint

## Form Information

- **Form ID:** GrpTestDrawing
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="clear" |
| Radio00 | Radio | text="Line", value="Line" |

## Source Code

```javascript
var bMouseButtonPressed = false;
var preClientX;
var preClientY;
var nNUm = 0;
var temprectangle;
var tempellipse;
var drawType;
this.Graphics00_onlbuttondown = function(obj:nexacro.Graphics,e:nexacro.MouseEventInfo)
{
	trace("Graphics00_onlbuttondown");
	bMouseButtonPressed = true;
	preClientX = e.clientx;
	preClientY = e.clienty;
	drawType = this.Radio00.value;
};

this.Graphics00_onlbuttonup = function(obj:nexacro.Graphics,e:nexacro.MouseEventInfo)
{
	trace("Graphics00_onlbuttonup");
	bMouseButtonPressed = false;
	temprectangle = null;
	tempellipse = null;
};

this.Graphics00_onmousemove = function(obj:nexacro.Graphics,e:nexacro.MouseEventInfo)
{
	trace("Graphics00_onmousemove");
	switch(drawType) {
	case 'Line':
		this.fn_drawLine(e);
		break;
	case 'Rectangle':
		this.fn_drawRect(e);
		break;
	case 'Circle':
		this.fn_drawEllipse(e);
		break;		
	default:
	}
};

this.fn_drawLine = function(e:nexacro.MouseEventInfo)
{
	var nowClientX = e.clientx;
	var nowCLientY = e.clienty;
	if(bMouseButtonPressed)
	{
		var objGLine = new nexacro.GraphicsLine();
		objGLine.set_x1(preClientX);
		objGLine.set_x2(nowClientX);
		objGLine.set_y1(preClientY);
		objGLine.set_y2(nowCLientY);
		/*
		var colorCode = "#"+Math.round(Math.random()*0xffffff).toString(16);
		objGLine.set_strokepen('1px solid '+colorCode);
		*/
		objGLine.set_strokepen('1px solid red');
		this.Graphics00.addChild( "GraphicsControl_"+nNUm, objGLine );
		this.Graphics00.redraw();
		
		preClientX = nowClientX;
		preClientY = nowCLientY;
		nNUm++;
	}
};

this.fn_drawRect = function(e:nexacro.MouseEventInfo)
{
	var nowClientX = e.clientx;
	var nowCLientY = e.clienty;
	if(bMouseButtonPressed)
	{
		var objGRect = new nexacro.GraphicsRect();
		var left = preClientX;
		var top = preClientY;
		var width = nowClientX - preClientX;
        var height = nowCLientY - preClientY;
		
		if(nowClientX < preClientX)
		{
			left = nowClientX;
			width *= -1;
		}
		if(nowCLientY < preClientY)
		{
			top = nowCLientY;
			height *= -1;
		}
 
		objGRect.set_x(left);
		objGRect.set_y(top);
		objGRect.set_width(width);
		objGRect.set_height(height);
		objGRect.set_strokepen('1px solid red'); 
		if(temprectangle)
		{
			this.Graphics00.removeChild(temprectangle);
		}
		temprectangle = "GraphicsControl_"+nNUm;
		this.Graphics00.addChild("GraphicsControl_"+nNUm, objGRect );
		this.Graphics00.redraw();

		nNUm++;
	}
};

this.fn_drawEllipse = function(e:nexacro.MouseEventInfo)
{
	var nowClientX = e.clientx;
	var nowCLientY = e.clienty;
	if(bMouseButtonPressed)
	{
		var objGEllipse = new nexacro.GraphicsEllipse();
		var left = preClientX;
		var top = preClientY;
		var width = nowClientX - preClientX;
        var height = nowCLientY - preClientY;
		
		if(nowClientX < preClientX)
		{
			left = nowClientX;
			width *= -1;
		}
		if(nowCLientY < preClientY)
		{
			top = nowCLientY;
			height *= -1;
		}
 
		objGEllipse.set_x(left+(width/2));
		objGEllipse.set_y(top+(height/2));
		objGEllipse.set_width(width);
		objGEllipse.set_height(height);
		objGEllipse.set_strokepen('1px solid red'); 
		if(tempellipse)
		{
			this.Graphics00.removeChild(tempellipse);
		}
		tempellipse = "GraphicsControl_"+nNUm;
		this.Graphics00.addChild("GraphicsControl_"+nNUm, objGEllipse );
		this.Graphics00.redraw();

		nNUm++;
	}
};

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Graphics00.clear();
	this.Graphics00.redraw();
};
```

---

[Back to Graphics](./README.md) | [Back to Index](../INDEX.md)