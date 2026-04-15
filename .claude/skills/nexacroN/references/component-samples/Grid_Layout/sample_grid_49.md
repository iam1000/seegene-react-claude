# sample_grid_49

**Category:** Grid Layout
**Keywords:** `getFormatString`

## Description

Checking Format Information

## Form Information

- **Form ID:** sample_grid_49
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | - |
| Button00 | Button | text="Button00" |
| TextArea00 | TextArea | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var parser, xmlDoc;
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(this.Grid00.getFormatString(), "text/xml");
	var formatList = xmlDoc.getElementsByTagName('Format');
	var formatStr = "== format info =="+"\n"
		+"format length: "+formatList.length+"\n"
		+"format id:"+this.getFormatid(formatList, formatList.length)+"\n"
		+"current format:"+this.Grid00.formatid;
	this.TextArea00.set_value(formatStr);
};

this.getFormatid = function(arr, length)
{
	var str = "";
	for(var i=0;i<length;i++)
	{
		str += arr[i].getAttribute("id");
		if(i!=length-1) str += ", ";
	}
	return str;
}
```

---

[Back to Grid Layout](./README.md) | [Back to Index](../INDEX.md)