# sample_application_04

**Category:** Application
**Keywords:** `setPrivateProfile, getPrivateProfile`

## Description

Saving User Information

## Form Information

- **Form ID:** sample_application_04
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnSet | Button | text="SET DATA" |
| btnGet | Button | text="GET DATA" |
| editSet | Edit | - |
| Edit00 | Edit | - |

## Source Code

```javascript
this.btnSet_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit00.set_value(nexacro.setPrivateProfile('TEST', this.editSet.value))
};

this.btnGet_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit00.set_value(nexacro.getPrivateProfile('TEST'))
};
```

---

[Back to Application](./README.md) | [Back to Index](../INDEX.md)