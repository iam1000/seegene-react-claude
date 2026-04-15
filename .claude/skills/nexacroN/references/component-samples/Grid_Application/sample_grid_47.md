# sample_grid_47

**Category:** Grid Application
**Keywords:** `filter, onvscroll`

## Description

Paging Processing Using Mouse Wheel Motion

## Form Information

- **Form ID:** sample_grid_47
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset01" |
| Button00 | Button | text="Button00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| COL0 | INT |
| COL1 | STRING |

**Sample Data:**

```json
[
  {
    "COL0": 1,
    "COL1": "data1"
  },
  {
    "COL0": 2,
    "COL1": "data2"
  },
  {
    "COL0": 3,
    "COL1": "data3"
  },
  {
    "COL0": 4,
    "COL1": "data4"
  },
  {
    "COL0": 5,
    "COL1": "data5"
  }
]
```

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| COL0 | INT |
| COL1 | STRING |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.fn_retrieve(false);
};

this.fv_nTotCount = 0;
this.fv_nNowPage = 0;
this.fv_nPageSize = 10;
this.fv_bNext = true;
this.fn_retrieve = function(bNext)
{		
	if (bNext == false)
	{
        this.fv_nTotCount  = this.Dataset00.getRowCount();
    }
    
    if (this.Dataset01.rowcount >= this.fv_nTotCount)
    {
        this.fv_bNext = false;
        return;
    }
	
    var nStrat = this.fv_nNowPage * this.fv_nPageSize + 1;
    var nEnd   = this.fv_nNowPage * this.fv_nPageSize + this.fv_nPageSize;
    this.Dataset00.filter("COL0 >= " + nStrat + " && COL0 <= " + nEnd);		
    this.Dataset01.appendData(this.Dataset00);	
    this.Dataset01.set_rowposition(this.Dataset01.rowcount - 1);
    this.fv_nNowPage++;   	
}

this.Grid00_onvscroll = function(obj:nexacro.Grid,e:nexacro.ScrollEventInfo)
{
	if (e.type == "wheellastover") 
	{
		if (this.fv_bNext)
		{  
			this.fn_retrieve(true);
        }
	}
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)