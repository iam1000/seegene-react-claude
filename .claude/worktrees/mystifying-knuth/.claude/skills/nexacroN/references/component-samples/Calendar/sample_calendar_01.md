# sample_calendar_01

**Category:** Calendar
**Keywords:** `locale, dateformat`

## Description

Changing Date Format

## Form Information

- **Form ID:** sample_calendar_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| staticDateformat | Static | text="dateformat:" |
| staticLocale | Static | text="locale:" |
| btnChange | Button | text="change dateformat" |
| editLocale | Edit | - |
| editDateformat | Edit | - |
| calDisplay | Calendar | value="20160601" |

## Source Code

```javascript
this.btnChange_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.calDisplay.set_locale(this.editLocale.value);
	this.calDisplay.set_dateformat(this.editDateformat.value);
};
```

---

[Back to Calendar](./README.md) | [Back to Index](../INDEX.md)