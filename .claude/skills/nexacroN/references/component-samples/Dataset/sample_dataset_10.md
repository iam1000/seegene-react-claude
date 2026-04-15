# sample_dataset_10

**Category:** Dataset
**Keywords:** `keystring`

## Description

정렬 옵션 설정하기

## Form Information

- **Form ID:** sample_dataset_10
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset01" |
| Static00 | Static | text="locale code" |
| Static00_00 | Static | text="caseFirst" |
| Static00_00_00 | Static | text="numeric" |
| Static00_00_00_00 | Static | text="keystring" |
| Combo_localeCode | Combo | text="none", value="none" |
| Combo_caseFirst | Combo | text="none", value="none" |
| Combo_numeric | Combo | text="none", value="none" |
| Edit00 | Edit | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "aaaa"
  },
  {
    "Column0": "äaaa"
  },
  {
    "Column0": "aabb"
  },
  {
    "Column0": "AaAa"
  },
  {
    "Column0": "AABB"
  }
]
```

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "aaaa"
  },
  {
    "Column0": "äaaa"
  },
  {
    "Column0": "aabb"
  },
  {
    "Column0": "AaAa"
  },
  {
    "Column0": "AABB"
  }
]
```

## Source Code

```javascript
this.Combo_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
{
	if(this.Combo_localeCode.value!="none")
	{
		//S:Column0,O:Column0[en-US]
		var localeOption = {};
		if(this.Combo_caseFirst.value!="none")
			localeOption["caseFirst"] = this.Combo_caseFirst.value;
		if(this.Combo_numeric.value!="none")
			localeOption["numeric"] = Boolean(this.Combo_numeric.value);
			
		var strKeyString = "S:Column0,O:Column0["+this.Combo_localeCode.value+"]"+JSON.stringify(localeOption);
		this.Dataset00.set_keystring(strKeyString);
		this.Edit00.set_value(strKeyString);
	}
};
```

---

[Back to Dataset](./README.md) | [Back to Index](../INDEX.md)