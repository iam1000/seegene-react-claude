# sample_grid_80

**Category:** Grid Application
**Keywords:** `getTimezoneOffset`

## Description

Displaying World Time

## Form Information

- **Form ID:** sample_grid_80
- **Size:** 1000 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| timezone | STRING |
| timevalue | STRING |
| offset | INT |

**Sample Data:**

```json
[
  {
    "timezone": "KST (한국 표준시)",
    "offset": 9
  },
  {
    "timezone": "PST (태평양 표준시)",
    "offset": -8
  },
  {
    "timezone": "PDT (태평양 표준시/일광절약시간제)",
    "offset": -7
  },
  {
    "timezone": "EST (동부 표준시)",
    "offset": -5
  },
  {
    "timezone": "EDT (동부 표준시/일광절약시간제)",
    "offset": -4
  }
]
```

## Source Code

```javascript
this.sample_grid_80_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
{
	for(var i=0;i<this.Dataset00.getRowCount();i++)
	{
		this.Dataset00.setColumn(i, 1, this.getWorldTime(this.Dataset00.getColumn(i, 2)));
	}
};

this.getWorldTime = function(offSet)
{
	var objDate = new Date();
	var nTime = objDate.getTime() + (objDate.getTimezoneOffset() * 60000) + (offSet * 3600000);
	objDate.setTime(nTime);
	
	  var s =
    this.fn_getDate(objDate.getFullYear(), 4) + '-' +
    this.fn_getDate(objDate.getMonth() + 1, 2) + '-' +
    this.fn_getDate(objDate.getDate(), 2) + ' ' +

    this.fn_getDate(objDate.getHours(), 2) + ':' +
    this.fn_getDate(objDate.getMinutes(), 2) + ':' +
    this.fn_getDate(objDate.getSeconds(), 2);
	
  return s;
}

this.fn_getDate = function(n, digits) 
{
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

this.sample_grid_80_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	this.setTimer(0, 1000);
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)