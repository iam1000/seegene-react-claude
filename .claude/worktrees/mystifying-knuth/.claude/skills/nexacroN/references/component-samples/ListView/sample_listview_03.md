# sample_listview_03

**Category:** ListView
**Keywords:** `cellid`

## Description

Processing Button Click Event

## Form Information

- **Form ID:** sample_listview_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| ListView00 | ListView | binddataset="Dataset00" |
| Grid00 | Grid | binddataset="Dataset00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| title | STRING |
| cover | STRING |
| price | FLOAT |
| amount | INT |

**Sample Data:**

```json
[
  {
    "title": "The Freewheelin' Bob Dylan",
    "cover": "imagerc::Bob_Dylan_-_The_Freewheelin'_Bob_Dylan.jpg",
    "price": 7.98,
    "amount": ""
  },
  {
    "title": "Highway 61 Revisited",
    "cover": "imagerc::Bob_Dylan_-_Highway_61_Revisited.jpg",
    "price": 7.29,
    "amount": ""
  },
  {
    "title": "Blood on the Tracks",
    "cover": "imagerc::Bob_Dylan_-_Blood_on_the_Tracks.jpg",
    "price": 9.98,
    "amount": ""
  },
  {
    "title": "Blonde on Blonde",
    "cover": "imagerc::Bob_Dylan_-_Blonde_on_Blonde.jpg",
    "price": 9.98,
    "amount": ""
  },
  {
    "title": "Bringing It All Back Home",
    "cover": "imagerc::Bob_Dylan_-_Bringing_It_All_Back_Home.jpg",
    "price": 7.29,
    "amount": ""
  }
]
```

## Source Code

```javascript
this.ListView00_oncellclick = function(obj:nexacro.ListView,e:nexacro.ListViewClickEventInfo)
{
		var cur_amount = this.Dataset00.getColumn(e.row, "amount");
		if(e.cellid == 'Cell04')
		{
			if(cur_amount != 0)
			{
				this.Dataset00.setColumn(e.row, "amount", --cur_amount);
			}
		}
		else if(e.cellid == 'Cell02')
		{
			this.Dataset00.setColumn(e.row, "amount", ++cur_amount);
		}
};
```

---

[Back to ListView](./README.md) | [Back to Index](../INDEX.md)