# sample_application_06

**Category:** Application
**Keywords:** `getActiveForm`

## Description

Obtaining Enabled Screen (Form) Name (ID) Property Information

## Form Information

- **Form ID:** sample_application_06
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Edit02 | Edit | - |
| Button00 | Button | text="Check" |
| Div00 | Div | text="Div00" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.check_active_form();
};

this.Div00_Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.check_active_form();
};

this.check_active_form = function()
{
	var objApp = nexacro.getApplication(); 	
	var objForm = objApp.getActiveForm();
	
	this.Edit00.set_value(objForm.name);
	this.Edit01.set_value(objForm.titletext);
	this.Edit02.set_value(this.getFocus().parent.name);
}
```

---

[Back to Application](./README.md) | [Back to Index](../INDEX.md)