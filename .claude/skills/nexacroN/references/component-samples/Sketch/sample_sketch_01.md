# sample_sketch_01

**Category:** Sketch
**Keywords:** `setBrushColor, setBrushSize, editmode`

## Description

Adding Sketch Options

## Form Information

- **Form ID:** sample_sketch_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| sketchMain | Sketch | - |
| Static00 | Static | text="Color" |
| Static01 | Static | text="Size" |
| cmbColor | Combo | text="Black", value="Black" |
| spinSize | Spin | value="1" |
| radioEditmode | Radio | - |

## Source Code

```javascript
this.cmbColor_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
{
	this.sketchMain.setBrushColor(obj.value);
};

this.spinSize_onchanged = function(obj:nexacro.Spin,e:nexacro.ChangeEventInfo)
{
	this.sketchMain.setBrushSize(obj.value);
};

this.Radio00_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.sketchMain.set_editmode(obj.value);
};
```

---

[Back to Sketch](./README.md) | [Back to Index](../INDEX.md)