# sample_application_05

**Category:** Application

## Description

Checking Cookie Information

## Form Information

- **Form ID:** sample_application_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Cookie check" |
| TextArea00 | TextArea | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var arrCookie = window.document.cookie;
	arrCookie = arrCookie.split(";");
	var arrTempCookie;
	this.TextArea00.set_value("");
	for(var i=0; i<arrCookie.length; i++)
	{
		arrTempCookie = arrCookie[i].split("=");
		this.TextArea00.set_value(this.TextArea00.value 
			+ ( arrTempCookie[0].trim() + " : " + arrTempCookie[1] ) + "\n");
	}  
};
```

---

[Back to Application](./README.md) | [Back to Index](../INDEX.md)