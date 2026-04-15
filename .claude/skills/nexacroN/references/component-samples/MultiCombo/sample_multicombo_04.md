# sample_multicombo_04

**Category:** MultiCombo
**Keywords:** `edittype`

## Description

Setting the style when the edittype property value is "count"

## Form Information

- **Form ID:** TEST
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| CheckBox00 | CheckBox | text="dropdown" |

## Source Code

```javascript
// edittype 속성값이 "count"일 때 스타일 설정하기

this.CheckBox00_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
{
	if(e.postvalue)
	{
		this.MultiCombo00.set_type('dropdown');
		this.MultiCombo00.set_cssclass("");	
	}
	else
	{
		this.MultiCombo00.set_type('search')
		this.MultiCombo00.set_cssclass("test");	
	}
};

/**
.MultiCombo.sample_multicombo_04 .multicombotext
{
	-nexa-border : 0px  none, 0px  none, 1px solid #d5d5d5;
}
**/
```

---

[Back to MultiCombo](./README.md) | [Back to Index](../INDEX.md)