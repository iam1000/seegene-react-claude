# sample_combo_09

**Category:** Combo
**Keywords:** `fireEvent`

## Description

Processing Event when Property Value Changes in Script

## Form Information

- **Form ID:** sample_combo_09
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Combo00 | Combo | text="1", value="1" |
| Button00 | Button | text="set_index" |
| Button01 | Button | text="set_index&#13;&#10;fireEvent" |
| TextArea00 | TextArea | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Combo00.set_index(3);
	this.TextArea00.set_value("Button00_onclick");
};


this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var preindex = this.Combo00.index;
	var pretext = this.Combo00.text;
	var prevalue = "";
	this.Combo00.set_index(3);
	var postindex = this.Combo00.index;
	var posttext = this.Combo00.text;
	var postvalue = "";
	this.TextArea00.set_value("Button01_onclick");
	
	var evt = new nexacro.ItemChangeEventInfo(this, "canitemchange", preindex, pretext, prevalue, postindex, posttext, postvalue);
	this.Combo00.canitemchange.fireEvent(this.Combo00, evt, true);

};

this.Combo00_canitemchange = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
{
	this.TextArea00.insertText(" -> canitemchange");
};
```

---

[Back to Combo](./README.md) | [Back to Index](../INDEX.md)