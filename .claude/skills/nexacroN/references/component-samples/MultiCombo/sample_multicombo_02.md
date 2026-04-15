# sample_multicombo_02

**Category:** MultiCombo
**Keywords:** `selecttype,onselectchanged,edittype,index`

## Description

Displaying selected items in the Grid component in the form of tags

## Form Information

- **Form ID:** sample_multicombo_02
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="dsMultiCombo" |

## Datasets

### dsMultiCombo

**Columns:**

| Column | Type |
|--------|------|
| code | STRING |

**Sample Data:**

```json
[
  {
    "code": "Basil Rivera"
  },
  {
    "code": "Clayton Chandler"
  },
  {
    "code": "Constance Trevino"
  },
  {
    "code": "Raymond Lara"
  },
  {
    "code": "Hayfa Rodgers"
  }
]
```

## Source Code

```javascript
this.Grid00_onselectchanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
{
	var arrayStatrRow = e.selectstartrow;
	var arrayEndRow = e.selectendrow;
	var selectedIndexes = [];

	for (var i = 0; i < arrayStatrRow.length; i++) {
		for (var j = arrayStatrRow[i]; j <= arrayEndRow[i]; j++) {
			selectedIndexes.push(j);
		}
	}

	var result = selectedIndexes.join(",");
	this.MultiCombo00.set_index(result);
};
```

---

[Back to MultiCombo](./README.md) | [Back to Index](../INDEX.md)