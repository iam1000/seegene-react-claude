# sample_combo_07

**Category:** Combo
**Keywords:** `type`

## Description

Searching or Filtering Case Insensitively

## Form Information

- **Form ID:** sample_combo_07
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Combo00 | Combo | text="apple", value="00" |
| Radio00 | Radio | text="search", value="search" |

## Source Code

```javascript
this.Radio00_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.Combo00.set_type(e.postvalue);
};
```

---

[Back to Combo](./README.md) | [Back to Index](../INDEX.md)