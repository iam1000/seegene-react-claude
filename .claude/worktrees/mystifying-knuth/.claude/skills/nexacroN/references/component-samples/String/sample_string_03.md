# sample_string_03

**Category:** String
**Keywords:** `charCodeAt, imemode`

## Description

Converting Full-width & Half-width Characters

## Form Information

- **Form ID:** sample_string_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Static00 | Static | text="Halfwidth to Fullwidth" |
| Static01 | Static | text="Fullwidth to Halfwidth" |
| Edit00 | Edit | value="ｎｅｘａｃｒｏ", text="ｎｅｘａｃｒｏ" |
| Edit01 | Edit | value="nexacro", text="nexacro" |
| Edit02 | Edit | enable="false" |
| Edit03 | Edit | enable="false" |
| Button00 | Button | text="change" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit02.set_value(this.fn_fullToHalf(this.Edit00.value));
	this.Edit03.set_value(this.fn_halfToFull(this.Edit01.value));
};

this.fn_fullToHalf = function(sFull)
{
	var sHalf = "";
	var sChar = "";
	
	for (var i = 0; i < sFull.length; i++)	{
		sChar = sFull.charCodeAt(i);
		if (sChar == 12288)		{
			sHalf += unescape("%20");
		}
		else if ((sChar >= 65281) && (sChar <= 65374))		{
			sHalf += unescape("%" + (sChar-65248).toString(16));
		} else {
			sHalf += sFull.charAt(i);
		}
	}	
	return  sHalf;
}

this.fn_halfToFull = function(sHalf)
{
    var sFull = "";
    var sChar = "";
	
    for (var i = 0; i < sHalf.length; i++) {
		if ((sHalf.charCodeAt(i) >= 32) && (sHalf.charCodeAt(i) <= 126)) {
            if (sHalf.charCodeAt(i) == 32) {
                sChar = unescape("%u"+(12288).toString(16));
            } else {
                sChar = sHalf.charCodeAt(i) + 65248;
            }
        } else {
            sChar = sHalf.charCodeAt(i);
        }    
        if (sHalf.charCodeAt(i) == 32) {
            sFull = sFull + (sChar);
        }  else  { 
            sFull = sFull + String.fromCharCode(sChar);
        }
    }
    return sFull;
}
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)