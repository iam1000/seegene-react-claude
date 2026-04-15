# sample_form_03

**Category:** Form
**Keywords:** `go, hasOwnProperty`

## Description

Moving Screen

## Form Information

- **Form ID:** sample_form_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnGo | Button | text="Go TEST (MAIN)" |

## Source Code

```javascript
this.btnGo_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.go("Sample::sample_form_03_sub.xfdl");	
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)