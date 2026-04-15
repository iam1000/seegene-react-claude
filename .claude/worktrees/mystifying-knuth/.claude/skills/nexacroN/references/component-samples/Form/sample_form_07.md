# sample_form_07

**Category:** Form
**Keywords:** `onlayoutchanged`

## Description

Changing Grid Format according to Screen Size

## Form Information

- **Form ID:** sample_form_07
- **Size:** 600 x 600

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnOpen | Button | text="OPEN" |
| Grid00 | Grid | binddataset="Dataset00" |
| Grid00 | Grid | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |
| Column2 | STRING |
| Column3 | STRING |
| Column4 | STRING |
| Column5 | STRING |

**Sample Data:**

```json
[
  {},
  {},
  {},
  {},
  {}
]
```

## Source Code

```javascript
this.btnOpen_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	nexacro.open("TEST", "Sample::sample_form_07.xfdl", this.getOwnerFrame());
};

this.Form_onlayoutchanged = function(obj:nexacro.Form,e:nexacro.LayoutChangeEventInfo)
{
	trace(this.parent.name);
	if(e.newlayout == 'default') {
		this.Grid00.set_formatid("default");
	} else if(e.newlayout == 'Layout0') {
		this.Grid00.set_formatid("default_00");
	}	
};


this.sample_form_07_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	if(this.parent.name == "TEST") {
		this.Grid00.set_visible(true);
		this.btnOpen.set_visible(false);
	} else {
		this.Grid00.set_visible(false);
		this.btnOpen.set_visible(true);
	}
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)