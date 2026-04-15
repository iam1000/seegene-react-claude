# sample_dataset_08

**Category:** Dataset
**Keywords:** `filter`

## Description

Filtering without Case Sensitivity

## Form Information

- **Form ID:** sample_dataset_08
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="uppercase" |
| Button01 | Button | text="sensitive case" |
| Edit00 | Edit | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": 1,
    "Column1": "aaaa"
  },
  {
    "Column0": 2,
    "Column1": "Aaaa"
  },
  {
    "Column0": 3,
    "Column1": "aabb"
  },
  {
    "Column0": 4,
    "Column1": "aaBB"
  },
  {
    "Column0": 5,
    "Column1": "AaAa"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.filter();
	var sFilter = "Column1.toString().toUpperCase().indexOf('" + this.Edit00.value.toUpperCase() + "') >= 0";
	this.Dataset00.filter(sFilter);
}

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.filter();
	var sFilter = "Column1.toString().indexOf('" + this.Edit00.value + "') >= 0";
	this.Dataset00.filter(sFilter);
};
```

---

[Back to Dataset](./README.md) | [Back to Index](../INDEX.md)