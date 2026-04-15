# sample_menu_01

**Category:** Menu
**Keywords:** `innderdataset, checkboxcolumn, enablecolumn, idcolumn, userdatacolumn, findRow`

## Description

Configuring Menu

## Form Information

- **Form ID:** sample_menu_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| staticExpr | Static | text="test" |
| menuOption | Menu | - |

## Datasets

### datasetMenu

**Columns:**

| Column | Type |
|--------|------|
| captioncolumn | STRING |
| checkboxcolumn | STRING |
| enablecolumn | STRING |
| idcolumn | STRING |
| levelcolumn | STRING |
| userdatacolumn | STRING |

**Sample Data:**

```json
[
  {
    "captioncolumn": "Wines",
    "levelcolumn": "",
    "idcolumn": "A",
    "userdatacolumn": 19
  },
  {
    "captioncolumn": "White Wines",
    "levelcolumn": 1,
    "idcolumn": "A-1"
  },
  {
    "captioncolumn": "Red Wines",
    "levelcolumn": 1,
    "idcolumn": "A-2"
  },
  {
    "captioncolumn": "Spirits",
    "levelcolumn": "",
    "idcolumn": "B",
    "userdatacolumn": 19
  },
  {
    "captioncolumn": "Vodka",
    "levelcolumn": 1,
    "idcolumn": "B-1"
  }
]
```

## Source Code

```javascript
this.menuOption_onmenuclick = function(obj:nexacro.Menu,e:nexacro.MenuClickEventInfo)
{
	var d1ColumnRow = this.datasetMenu.findRow("idcolumn", "D-1");
	var d2ColumnRow = this.datasetMenu.findRow("idcolumn", "D-2");
	
	if(e.id == "D-1") {
		this.datasetMenu.setColumn(d1ColumnRow, "checkboxcolumn", true);
		this.datasetMenu.setColumn(d2ColumnRow, "checkboxcolumn", false);
		
		var currentAgeColumnRow = -1;
		do {
			currentAgeColumnRow++;
			currentAgeColumnRow = this.datasetMenu.findRow("userdatacolumn", "19", currentAgeColumnRow);
			this.datasetMenu.setColumn(currentAgeColumnRow, "enablecolumn", false);
		} while (currentAgeColumnRow != -1);
	} else if(e.id == "D-2") {
		this.datasetMenu.setColumn(d1ColumnRow, "checkboxcolumn", false);
		this.datasetMenu.setColumn(d2ColumnRow, "checkboxcolumn", true);
		
		var currentAgeColumnRow = -1;
		do {
			currentAgeColumnRow++;
			currentAgeColumnRow = this.datasetMenu.findRow("userdatacolumn", "19", currentAgeColumnRow);
			this.datasetMenu.setColumn(currentAgeColumnRow, "enablecolumn", true);
		} while (currentAgeColumnRow != -1);
	}
};
```

---

[Back to Menu](./README.md) | [Back to Index](../INDEX.md)