# sample_array_03

**Category:** Array
**Keywords:** `sort`

## Description

Sorting Number Array

## Form Information

- **Form ID:** sample_array_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Edit02 | Edit | - |
| Button00 | Button | text="Button00" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var arrNo = this.Edit00.value.split(",");
	this.fn_arrayNoSort(arrNo);	
 	this.fn_arrayStringSort(arrNo);
};

this.fn_arrayStringSort = function(arrNo)
{
    this.Edit01.set_value(arrNo.sort());
};

this.fn_arrayNoSort = function(arrNo)
{
	this.Edit02.set_value(arrNo.sort(function(a, b){return a-b}));
};
```

---

[Back to Array](./README.md) | [Back to Index](../INDEX.md)