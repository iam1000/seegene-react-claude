# sample_edit_08

**Category:** Edit
**Keywords:** `trackPopupByComponent, oncellclick, getColumn`

## Description

Entering Selected Value from List into Multiple Edit Components

## Form Information

- **Form ID:** sample_edit_08
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| editCode | Edit | - |
| editData | Edit | - |
| popupdivList | PopupDiv | text="PopupDiv00", visible="false" |
| staticCode | Static | text="CODE" |
| staticData | Static | text="DATA" |

## Datasets

### dsList

**Columns:**

| Column | Type |
|--------|------|
| CODE | STRING |
| DATA | STRING |

**Sample Data:**

```json
[
  {
    "CODE": 1,
    "DATA": "apple"
  },
  {
    "CODE": 2,
    "DATA": "pear"
  },
  {
    "CODE": 3,
    "DATA": "walnut"
  },
  {
    "CODE": 4,
    "DATA": "acorn"
  },
  {
    "CODE": 5,
    "DATA": "stawberry"
  }
]
```

## Source Code

```javascript
this.editCode_oneditclick = function(obj:nexacro.Edit,e:nexacro.EditClickEventInfo)
{
	this.popupdivList.trackPopupByComponent(this.editCode, 0, parseInt(this.editCode.height));
};

this.popupdivList_gridList_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	this.popupdivList.closePopup();
	this.editCode.set_value(this.dsList.getColumn(e.row, "CODE"));
	this.editData.set_value(this.dsList.getColumn(e.row, "DATA"));
};
```

---

[Back to Edit](./README.md) | [Back to Index](../INDEX.md)