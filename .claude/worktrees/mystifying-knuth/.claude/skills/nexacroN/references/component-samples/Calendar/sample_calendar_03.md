# sample_calendar_03

**Category:** Calendar
**Keywords:** `usetrailingday, type`

## Description

Displaying Trailing Day

## Form Information

- **Form ID:** sample_calendar_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| calToday | Calendar | - |
| radioTrailingday | Radio | value="true" |

## Source Code

```javascript
this.radioTrailingday_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.calToday.set_usetrailingday(Boolean(this.radioTrailingday.value));
};
```

---

[Back to Calendar](./README.md) | [Back to Index](../INDEX.md)