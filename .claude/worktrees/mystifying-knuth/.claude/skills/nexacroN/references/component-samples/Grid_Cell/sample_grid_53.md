# sample_grid_53

**Category:** Grid Cell
**Keywords:** `displaytype, execBrowser`

## Description

Moving to Site when Clicking URL Link

## Form Information

- **Form ID:** sample_grid_53
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
| site | STRING |
| url | STRING |
| bLink | STRING |

**Sample Data:**

```json
[
  {
    "url": "http://codeschool.com",
    "site": "codeschool",
    "bLink": "Y"
  },
  {
    "url": "https://www.codecademy.com",
    "site": "codecademy",
    "bLink": "Y"
  },
  {
    "url": "-",
    "site": "khanacademy",
    "bLink": "N"
  },
  {
    "url": "https://www.udacity.com",
    "site": "udacity",
    "bLink": "Y"
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	if( e.cell == 1 ){
		if( this.Dataset00.getColumn(e.row, "bLink") == "Y")		
			system.execBrowser(this.Dataset00.getColumn(e.row, 1));
	}
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)