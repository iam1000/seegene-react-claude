# sample_static_05

**Category:** Static
**Keywords:** `fittocontents, left`

## Description

Placing according to Character Length

## Form Information

- **Form ID:** sample_static_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| radioLang | Radio | text="한국어", value="KOR" |
| staticWorkplace | Static | text="2. 직장" |
| staticName | Static | text="1. 이름" |
| checkboxFit | CheckBox | text="Fit To Contents" |
| editName | Edit | - |
| editWorkplace | Edit | - |

## Source Code

```javascript
this.radioLang_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	trace(e.postindex, e.posttext, e.postvalue);
	if(e.postvalue == "KOR")	{
		this.staticName.set_text("1. 이름");
		this.staticWorkplace.set_text("2. 직장");
	} else if(e.postvalue == "ENG")	{
		this.staticName.set_text("1. First name");
		this.staticWorkplace.set_text("2. place of work");
	}
	this.resetScroll();
};

this.checkboxFit_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
{
	if(e.postvalue == true)	{
		this.staticName.set_fittocontents('width');
		this.staticWorkplace.set_fittocontents('width');
	} else if(e.postvalue == false)	{
		this.staticName.set_fittocontents('none');
		this.staticWorkplace.set_fittocontents('none');
	}
	this.resetScroll();
};
```

---

[Back to Static](./README.md) | [Back to Index](../INDEX.md)