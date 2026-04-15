# sample_static_07

**Category:** Static
**Keywords:** `components`

## Description

Creating Bar Chart

## Form Information

- **Form ID:** sample_static_07
- **Size:** 760 x 430

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| divChart1 | Div | - |
| Button00 | Button | text="start" |

## Datasets

### ds_Chart01

**Columns:**

| Column | Type |
|--------|------|
| Lable | STRING |
| Value | STRING |

**Sample Data:**

```json
[
  {
    "Lable": "item1",
    "Value": 12
  },
  {
    "Lable": "item2",
    "Value": 22
  },
  {
    "Lable": "item3",
    "Value": 43
  }
]
```

## Source Code

```javascript
this.nTimerIdx = 0;
this.nTimerMax = 20;

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.setTimer(1, 50);
};

this.BarChart_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
{
	if(e.timerid==1)
	{
		this.nTimerIdx++;
		this.fn_Chart01();
		this.divChart1.form.resetScroll();
		if(this.nTimerIdx==this.nTimerMax)
		{
			this.nTimerIdx = 0;
			this.killTimer(1);
		}
	}
};

this.fn_Chart01 = function ()
{
	var i;
	var nLeft;
	var nTop;
	var nWidth;
	var nHeight;
	var objBar;
	var objValue;
	var nValue;
	
	for(i=0;i<this.ds_Chart01.rowcount;i++)
	{
		objBar = this.divChart1.form.components["stBar0"+(i+1)];	
		objValue = this.divChart1.form.components["stValue0"+(i+1)];

		nValue = Math.round(this.ds_Chart01.getColumn(i, "Value")*5.4);
		objValue.set_text(this.ds_Chart01.getColumn(i, "Value"));

		nLeft = objBar.left;
		nTop = objBar.top;
		nWidth = this.fn_move(this.nTimerIdx, 0, nValue, this.nTimerMax);
		nHeight = objBar.height;
		
		objBar.move(nLeft, nTop, nWidth, nHeight);
	}
};

this.fn_move = function(t, b, c, d)
{
	t /= d/2;
	if (t < 1) return Math.round(c/2*t*t + b);
	t--;
	return Math.round(-c/2 * (t*(t-2) - 1) + b);
};
```

---

[Back to Static](./README.md) | [Back to Index](../INDEX.md)