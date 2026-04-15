# sample_grid_44

**Category:** Grid Cell
**Keywords:** `screenToClientX , screenToClientY, trackPopupByComponent, closePopup`

## Description

Entering Selected Value as Data in PopupDiv

## Form Information

- **Form ID:** sample_grid_44
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset01" |
| PopupDiv00 | PopupDiv | text="PopupDiv00", visible="false" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| code | STRING |
| item | STRING |

**Sample Data:**

```json
[
  {
    "code": 1,
    "item": "apple"
  },
  {
    "code": 2,
    "item": "pear"
  },
  {
    "code": 3,
    "item": "walnut"
  },
  {
    "code": 4,
    "item": "acorn"
  },
  {
    "code": 5,
    "item": "strawberry"
  }
]
```

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| name | STRING |
| Item | STRING |

**Sample Data:**

```json
[
  {
    "name": "John"
  },
  {
    "name": "James"
  },
  {
    "name": "Donald"
  },
  {
    "name": "Lisa"
  },
  {
    "name": "Leo"
  }
]
```

## Source Code

```javascript
this.col;
this.row;

this.Grid00_onexpandup = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
{
	this.col = e.cell;
	this.row = e.row;
	var nX = system.screenToClientX(this, e.screenx);
	var nY = system.screenToClientY(this, e.screeny);		
	this.PopupDiv00.trackPopupByComponent(this, nX, nY, null, null, "call_back");
};

this.call_back = function (strId,str)
{
	this.Dataset01.setColumn( this.row, this.col , str)
};

this.PopupDiv00_Grid00_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var value = this.Dataset00.getColumn(e.row , 1);
	this.PopupDiv00.closePopup(value);
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)