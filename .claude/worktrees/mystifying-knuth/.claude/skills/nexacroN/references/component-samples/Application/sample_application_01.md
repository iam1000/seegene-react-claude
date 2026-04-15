# sample_application_01

**Category:** Application
**Keywords:** `alert`

## Description

Displaying Alert & Confirmation Dialog Boxes

## Form Information

- **Form ID:** sample_application_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnAlert | Button | text="Alert TEST" |

## Source Code

```javascript
this.btnAlert_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	for(var i=0 ; i<10 ; i++)
	{
		nexacro.getApplication().alert(i);
	}
};
```

---

[Back to Application](./README.md) | [Back to Index](../INDEX.md)