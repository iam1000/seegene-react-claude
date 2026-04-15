# sample_grid_98

**Category:** Grid Application
**Keywords:** `getSum`

## Description

Displaying Total of Selected Area

## Form Information

- **Form ID:** sample_grid_98
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| PopupDiv00 | PopupDiv | text="PopupDiv00", visible="false" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | INT |
| Column1 | INT |

**Sample Data:**

```json
[
  {
    "Column0": 2500,
    "Column1": 2500
  },
  {
    "Column0": 3600,
    "Column1": 3600
  },
  {
    "Column0": 500,
    "Column1": 500
  },
  {
    "Column0": 2400,
    "Column1": 2400
  },
  {
    "Column0": 12500,
    "Column1": 12500
  }
]
```

## Source Code

```javascript
this.nShift = 0;
this.Grid00_onkeydown = function(obj:nexacro.Grid,e:nexacro.KeyEventInfo)
{
	if(e.keycode == 16) {
		this.nShift = 1;
	} else {
		this.nShift = 0;
	}
};

this.Grid00_onlbuttonup = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
{
	if(this.nShift == 1) {
		var strColExpr;
		if(obj.selectstartcol==0) {
			if(obj.selectendcol==1) {
				strColExpr = "Column0+Column1";
			} else {
				strColExpr = "Column0";
			}
		} else {
			strColExpr = "Column1";
		}
		
		var nTot = this.Dataset00.getSum(strColExpr, obj.selectstartrow, Number(obj.selectendrow)+1);
		
		this.PopupDiv00.form.Static00.set_text("SUM : "+nTot);
		this.PopupDiv00.form.Static00.set_fittocontents('width');
		this.PopupDiv00.form.resetScroll();
		this.PopupDiv00.trackPopupByComponent(obj,e.canvasx,e.canvasy);
		this.nShift = 0;
	}
};

this.PopupDiv00_oncloseup = function(obj:nexacro.PopupDiv,e:nexacro.EventInfo)
{
	obj.form.Static00.set_text("");
};

this.PopupDiv00_Static00_onclick = function(obj:nexacro.Static,e:nexacro.ClickEventInfo)
{
	
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)