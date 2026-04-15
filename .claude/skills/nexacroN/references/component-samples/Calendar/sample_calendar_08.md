# sample_calendar_08

**Category:** Calendar
**Keywords:** `value`

## Description

Correcting Entered Date

## Form Information

- **Form ID:** sample_calendar_08
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Calendar00 | Calendar | - |
| Calendar01 | Calendar | - |
| Calendar02 | Calendar | - |
| GroupBox00 | GroupBox | text="empty >> "01"" |
| GroupBox01 | GroupBox | text="00 >> -1" |
| GroupBox02 | GroupBox | text="over >> +x" |
| Radio00 | Radio | - |
| Radio01 | Radio | - |
| Radio02 | Radio | - |

## Source Code

```javascript
this.Radio_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this[obj.calendarId].set_value(e.postvalue);
};
```

---

[Back to Calendar](./README.md) | [Back to Index](../INDEX.md)