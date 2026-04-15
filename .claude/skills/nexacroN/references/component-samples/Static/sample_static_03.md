# sample_static_03

**Category:** Static
**Keywords:** `usedecorate`

## Description

Text Decoration

## Form Information

- **Form ID:** sample_static_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| staticDecorate | Static | text="My name is" |
| staticText | Static | text="text" |
| staticFont | Static | text="font size / color / family" |
| staticBold | Static | text="bold" |
| staticItalic | Static | text="italic" |
| staticUnderline | Static | text="underline" |
| staticStrike | Static | text="strike" |
| editText | Edit | - |
| spinFontSize | Spin | value="10" |
| comboFontColor | Combo | text="red", value="red" |
| comboFontFamily | Combo | text="Arial", value="Arial" |
| radioBold | Radio | - |
| radioItalic | Radio | - |
| radioUnderline | Radio | - |
| radioStrike | Radio | - |
| btnText | Button | text="input text" |
| textareaDecorate | TextArea | - |

## Source Code

```javascript
this.defaultValue = "My name is ";
this.addFrontValue = "";
this.addBackValue = "";

this.fn_initValue = function()
{
    this.addFrontValue = "";
    this.addBackValue = "";
}

this.btnText_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.fn_initValue();
	this.addValue("fs", this.spinFontSize.value);
	this.addValue("fc", this.comboFontColor.value);
	this.addValue("ff", this.comboFontFamily.value);
	this.addValue("b", this.radioBold.value);
	this.addValue("i", this.radioItalic.value);
	this.addValue("u", this.radioUnderline.value);
	this.addValue("s", this.radioStrike.value);
	this.staticDecorate.set_text(this.defaultValue + this.addFrontValue + this.editText.value + this.addBackValue);
	this.textareaDecorate.set_value(this.staticDecorate.text);
};

this.addValue = function(tag:String, value:String) {
	if(value) {
		this.addFrontValue += "<"+tag+" v='"+value+"'>";
		this.addBackValue = "</"+tag+">"+this.addBackValue ;
	}
};
```

---

[Back to Static](./README.md) | [Back to Index](../INDEX.md)