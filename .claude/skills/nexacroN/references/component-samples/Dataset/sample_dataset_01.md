# sample_dataset_01

**Category:** Dataset
**Keywords:** `getCaseSum`

## Description

Calculating Data Average & Sum by Conditions

## Form Information

- **Form ID:** sample_grid_55
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="Button00" |
| TextArea00 | TextArea | - |
| Edit00 | Edit | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | INT |

**Sample Data:**

```json
[
  {
    "Column0": 10
  },
  {
    "Column0": 20
  },
  {
    "Column0": 30
  },
  {
    "Column0": 40
  },
  {
    "Column0": 50
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var strCmpExpr = "Column0 > "+this.Edit00.value;
	var casesum = this.Dataset00.getCaseSum(strCmpExpr, "Column0");
	var caseavg = nexacro.round(this.Dataset00.getCaseAvg(strCmpExpr, "Column0"), 1);
	var casecount = this.Dataset00.getCaseCount(strCmpExpr, "Column0");
	this.TextArea00.set_value("getCaseSum: "+casesum+"\n"
		+"getCaseAvg: "+caseavg+"\n"
		+"getCaseCount: "+casecount);
};
```

---

[Back to Dataset](./README.md) | [Back to Index](../INDEX.md)