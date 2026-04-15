# sample_dataobject_02

**Category:** DataObject
**Keywords:** `data,dataobjectpath`

## Description

Displaying Button Label in Multiple Languages

## Form Information

- **Form ID:** sample_dataobject_02
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Button00" |
| Button00_00 | Button | text="Button00" |
| Button00_00_00 | Button | text="Button00" |
| Combo00 | Combo | text="Korean", value="ko" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| locale | STRING |
| label | STRING |

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| btn_submit | STRING |
| btn_save | STRING |
| btn_cancel | STRING |

## Source Code

```javascript
this.Combo00_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
{
	this.Dataset01.set_dataobjectpath("$.data."+e.postvalue);
};
```

---

[Back to DataObject](./README.md) | [Back to Index](../INDEX.md)