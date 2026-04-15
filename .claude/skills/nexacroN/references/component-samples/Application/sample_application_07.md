# sample_application_07

**Category:** Application
**Keywords:** `userfontid`

## Description

Using Google Font

## Form Information

- **Form ID:** sample_application_07
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Lobster" |
| Button01 | Button | text="Chilanka" |
| TextArea00 | TextArea | value="Lorem ipsum dolor sit amet, co..." |
| Static00 | Static | text="nexacro platform" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.set_font("24px/normal 'Lobster'");
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.set_font("24px/normal 'Chilanka'");
};
```

---

[Back to Application](./README.md) | [Back to Index](../INDEX.md)