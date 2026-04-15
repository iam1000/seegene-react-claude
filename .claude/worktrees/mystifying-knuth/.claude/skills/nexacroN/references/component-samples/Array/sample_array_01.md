# sample_array_01

**Category:** Array
**Keywords:** `push`

## Description

Dividing String into Array

## Form Information

- **Form ID:** sample_array_01
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Button00 | Button | text="Button00" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var arrArray = new Array();
	var sString = this.Edit00.value;
	var nSize = 3;
    for (var i = 0; i < sString.length; i+=nSize)
    {        
        arrArray.push(sString.substr(i, nSize)); 
    }
	this.Edit01.set_value(arrArray);
};
```

---

[Back to Array](./README.md) | [Back to Index](../INDEX.md)