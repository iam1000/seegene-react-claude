# sample_textarea_01

**Category:** TextArea
**Keywords:** `wordwrap`

## Description

Automatic Line Break (wordwrap) Function

## Form Information

- **Form ID:** sample_textarea_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| textareaWordwarp | TextArea | value="Lorem ipsum dolor sit amet, co..." |
| radioWordwrap | Radio | - |

## Source Code

```javascript
this.radioWordwrap_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.textareaWordwarp.set_wordWrap(this.radioWordwrap.value);
};
```

---

[Back to TextArea](./README.md) | [Back to Index](../INDEX.md)