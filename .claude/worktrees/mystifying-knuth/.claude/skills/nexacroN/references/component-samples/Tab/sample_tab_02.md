# sample_tab_02

**Category:** Tab
**Keywords:** `multiline`

## Description

Configuring Multiline Tab

## Form Information

- **Form ID:** sample_tab_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Tab00 | Tab | - |
| btnInsert | Button | text="insert tabpage" |

## Source Code

```javascript
this.btnInsert_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var i = this.Tab00.getTabpageCount()+1;
	this.Tab00.insertTabpage("TabPage"+i, -1);
};
```

---

[Back to Tab](./README.md) | [Back to Index](../INDEX.md)