# sample_graphics_01

**Category:** Graphics
**Keywords:** `strokepen`

## Description

Drawing Lines

## Form Information

- **Form ID:** GrpLine
- **Size:** 1280 x 720

## Source Code

```javascript
this.GrpLine_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	var objGLine = new nexacro.GraphicsLine();
	this.Graphics00.addChild( "GraphicsLine00", objGLine );
	objGLine.set_x(10);
	objGLine.set_y(10);	
	objGLine.set_x2(50);
	objGLine.set_y2(50);
	objGLine.set_strokepen('1px solid red');
	this.Graphics00.redraw();
};
```

---

[Back to Graphics](./README.md) | [Back to Index](../INDEX.md)