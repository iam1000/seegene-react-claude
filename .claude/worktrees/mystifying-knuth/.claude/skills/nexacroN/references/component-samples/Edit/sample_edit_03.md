# sample_edit_03

**Category:** Edit
**Keywords:** `autoskip, maxlength, taborder`

## Description

Shifting Auto Focus

## Form Information

- **Form ID:** sample_edit_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| edit_first | Edit | - |
| edit_second | Edit | - |
| edit_third | Edit | - |
| Button00 | Button | text="OK" |
| Static00 | Static | text="Enter your phone number." |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var strPhoneNumber = this.edit_first.value + "-" + this.edit_second.value + "-" + this.edit_third.value;
	
	confirm("Your phone number is " + strPhoneNumber, "Phone Number");	
	
};
```

---

[Back to Edit](./README.md) | [Back to Index](../INDEX.md)