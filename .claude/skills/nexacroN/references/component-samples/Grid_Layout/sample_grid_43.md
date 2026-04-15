# sample_grid_43

**Category:** Grid Layout
**Keywords:** `formats, getCurFormatString`

## Description

Copying Format of Changed Column

## Form Information

- **Form ID:** sample_grid_43
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="Change" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Name | STRING |
| Department | STRING |
| Vacation | STRING |

**Sample Data:**

```json
[
  {
    "Name": "John",
    "Department": "Sales",
    "Vacation": 1
  },
  {
    "Name": "James",
    "Department": "IT",
    "Vacation": ""
  },
  {
    "Name": "Donald",
    "Department": "Education",
    "Vacation": ""
  },
  {
    "Name": "Lisa",
    "Department": "Marketing",
    "Vacation": 1
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var sFormatContents = this.Grid00.getCurFormatString();
	this.Grid01.set_formats("<Formats> "+sFormatContents+" </Formats>");
	
};
```

---

[Back to Grid Layout](./README.md) | [Back to Index](../INDEX.md)