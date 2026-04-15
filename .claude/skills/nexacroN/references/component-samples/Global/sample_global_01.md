# sample_global_01

**Category:** Global
**Keywords:** `parseInt`

## Description

Changing RGB Color Code

## Form Information

- **Form ID:** sample_global_01
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Edit02 | Edit | - |
| Edit03 | Edit | - |
| Edit04 | Edit | - |
| Edit05 | Edit | - |
| Edit06 | Edit | - |
| Edit07 | Edit | - |
| Button00 | Button | text="HEX to RGB" |
| Button01 | Button | text="RGB to HEX" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.fn_hexToDec(this.Edit00.value);
};

this.fn_hexToDec = function(sHex)
{
	sHex = sHex.toUpperCase();
	var nRed   = parseInt(sHex.substring(0,2),16);
	var nGreen = parseInt(sHex.substring(2,4),16);
	var nBlue  = parseInt(sHex.substring(4),16);

	this.Edit01.set_value(nRed);
	this.Edit02.set_value(nGreen);
	this.Edit03.set_value(nBlue);

	this.set_background("#" + sHex);
}

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.fn_decToHex(this.Edit04.value, this.Edit05.value, this.Edit06.value); 
};

this.fn_decToHex = function(nRed, nGreen, nBlue)
{
	var sHexRed = nexacro.toNumber(nRed).toString(16);
	var sHexGreen = nexacro.toNumber(nGreen).toString(16);
	var sHexBlue = nexacro.toNumber(nBlue).toString(16);
	
	sHexRed = sHexRed.length<2?"0"+sHexRed:sHexRed;
	sHexGreen = sHexGreen.length<2?"0"+sHexGreen:sHexGreen;
	sHexBlue = sHexBlue.length<2?"0"+sHexBlue:sHexBlue;
	
	var sHex = sHexRed.toUpperCase() + sHexGreen.toUpperCase() + sHexBlue.toUpperCase();
    this.Edit07.set_value(sHex);
	this.set_background("#" + sHex);
}
```

---

[Back to Global](./README.md) | [Back to Index](../INDEX.md)