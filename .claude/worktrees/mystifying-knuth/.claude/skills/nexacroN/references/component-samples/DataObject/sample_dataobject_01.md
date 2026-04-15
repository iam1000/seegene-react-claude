# sample_dataobject_01

**Category:** DataObject
**Keywords:** `binddataobject, dataobjectpath`

## Description

Displaying Simple Data

## Form Information

- **Form ID:** sample_dataobject_01
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="Button00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| id | STRING |
| employee_name | STRING |
| employee_salary | STRING |
| employee_age | STRING |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.DataObject00.load();
};
```

---

[Back to DataObject](./README.md) | [Back to Index](../INDEX.md)