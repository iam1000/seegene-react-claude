# sample_div_07

**Category:** Div
**Keywords:** `horizontalgap, verticalgap, flexmainaxisalign, flexcrossaxisalign`

## Description

Placing buttons by privileges

## Form Information

- **Form ID:** sample_div_07
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Div00 | Div | text="Div00" |
| Div00_00 | Div | text="Div00" |
| CheckBox00 | CheckBox | text="Button B enable", value="true" |

## Source Code

```javascript
this.CheckBox00_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
{
	var bCheck = obj.value;
	this.Div00.form.Button01.set_visible(bCheck);
	this.Div00_00.form.Button01.set_visible(bCheck);
};
```

---

[Back to Div](./README.md) | [Back to Index](../INDEX.md)