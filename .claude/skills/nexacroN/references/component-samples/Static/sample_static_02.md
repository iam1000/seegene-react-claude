# sample_static_02

**Category:** Static
**Keywords:** `wordwrap`

## Description

Automatic Line Break (wordwrap) Function

## Form Information

- **Form ID:** sample_static_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| radioWordwrap | Radio | - |
| staticWordWrap | Static | text="Lorem ipsum dolor sit amet, co..." |

## Source Code

```javascript
this.radioWordwrap_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.staticWordWrap.set_wordWrap(this.radioWordwrap.value);
};
```

---

[Back to Static](./README.md) | [Back to Index](../INDEX.md)