# sample_combo_08

**Category:** Combo
**Keywords:** `isDropdown, dropdown`

## Description

Expanding Items on Mouse Over

## Form Information

- **Form ID:** sample_combo_08
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Combo00 | Combo | text="apple", value="00" |

## Source Code

```javascript
this.Combo00_onmouseenter = function(obj:nexacro.Combo,e:nexacro.MouseEventInfo)
{
	if(!obj.isDropdown()) {
		obj.dropdown();
	}
};

/*
this.Combo00_onmouseleave = function(obj:nexacro.Combo,e:nexacro.MouseEventInfo)
{
	if(obj.isDropdown()) {
		obj.dropdown();
	}
};
*/
```

---

[Back to Combo](./README.md) | [Back to Index](../INDEX.md)