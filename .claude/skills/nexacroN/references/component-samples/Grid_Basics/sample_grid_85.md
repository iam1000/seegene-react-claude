# sample_grid_85

**Category:** Grid Basics
**Keywords:** `getRealRowFullSize, autosizingtype, extendsizetype`

## Description

Adjusting Grid Component Height to Avoid Scrollbar

## Form Information

- **Form ID:** sample_grid_85
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="getRealRowFullSize" |
| Button01 | Button | text="Set Text" |
| TextArea00 | TextArea | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |
| Column2 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": 1,
    "Column1": "one",
    "Column2": "I"
  },
  {
    "Column0": 2,
    "Column1": "two",
    "Column2": "II"
  },
  {
    "Column0": 3,
    "Column1": "three",
    "Column2": "III"
  },
  {
    "Column0": 4,
    "Column1": "four",
    "Column2": "IV"
  },
  {
    "Column0": 5,
    "Column1": "five",
    "Column2": "V"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var nH = this.Grid00.getRealRowFullSize();
	//computed style (border-top + border-bottom = 3)
	this.Grid00.set_height(nH + 3);
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.setColumn(this.Grid00.selectstartrow[0], this.Grid00.selectstartcol[0], this.TextArea00.value);
};
```

---

[Back to Grid Basics](./README.md) | [Back to Index](../INDEX.md)