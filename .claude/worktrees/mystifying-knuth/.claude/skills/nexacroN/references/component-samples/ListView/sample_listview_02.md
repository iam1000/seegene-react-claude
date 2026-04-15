# sample_listview_02

**Category:** ListView
**Keywords:** `formatid`

## Description

Representing Data in Different Formats by Width

## Form Information

- **Form ID:** sample_listview_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Div00 | Div | text="Div00" |
| Radio00 | Radio | text="320", value="320" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| title | STRING |
| cover | STRING |

**Sample Data:**

```json
[
  {
    "title": "The Freewheelin' Bob Dylan",
    "cover": "imagerc::Bob_Dylan_-_The_Freewheelin'_Bob_Dylan.jpg"
  },
  {
    "title": "Highway 61 Revisited",
    "cover": "imagerc::Bob_Dylan_-_Highway_61_Revisited.jpg"
  },
  {
    "title": "Blood on the Tracks",
    "cover": "imagerc::Bob_Dylan_-_Blood_on_the_Tracks.jpg"
  },
  {
    "title": "Blonde on Blonde",
    "cover": "imagerc::Bob_Dylan_-_Blonde_on_Blonde.jpg"
  },
  {
    "title": "Bringing It All Back Home",
    "cover": "imagerc::Bob_Dylan_-_Bringing_It_All_Back_Home.jpg"
  }
]
```

## Source Code

```javascript
this.Radio00_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.Div00.set_width(e.postvalue);
	if(e.postvalue == 640)
	{
		this.Div00.form.ListView00.set_formatid("format00");
	}
	else if(e.postvalue == 180)
	{
		this.Div00.form.ListView00.set_formatid("format01");
	}
	else
	{
		this.Div00.form.ListView00.set_formatid("default");
	}
};
```

---

[Back to ListView](./README.md) | [Back to Index](../INDEX.md)