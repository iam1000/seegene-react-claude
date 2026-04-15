# sample_tab_03

**Category:** Tab
**Keywords:** `tabposition`

## Description

Adjusting Tab Button Location

## Form Information

- **Form ID:** sample_tab_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Tab00 | Tab | - |
| GroupBox00 | GroupBox | text="tabposition property" |
| Radio00 | Radio | - |

## Source Code

```javascript
this.Radio00_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.Tab00.set_tabposition(e.postvalue);

};
```

---

[Back to Tab](./README.md) | [Back to Index](../INDEX.md)