# sample_grid_54

**Category:** Grid Layout
**Keywords:** `oncolresized`

## Description

Limiting Column Resizing Function

## Form Information

- **Form ID:** sample_grid_54
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |

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
  {},
  {}
]
```

## Source Code

```javascript
this.Grid00_oncolresized = function(obj:nexacro.Grid,e:nexacro.GridSizeChangedEventInfo)
{
	this.Grid00.setFormatColProperty(e.formatindex,"size",e.newvalue);
	if( e.newvalue < 70 ){
		this.Grid00.setFormatColProperty(e.formatindex,"size",70);
		this.Grid00.formats = "<Formats>"+this.Grid00.getCurFormatString()+"</Formats>";
		obj.setFocus();
	}
};
```

---

[Back to Grid Layout](./README.md) | [Back to Index](../INDEX.md)