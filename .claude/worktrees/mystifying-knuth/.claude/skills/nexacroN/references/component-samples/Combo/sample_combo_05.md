# sample_combo_05

**Category:** Combo
**Keywords:** `ondropdown`

## Description

Implementing Multi Combo

## Form Information

- **Form ID:** sample_combo_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Combo00 | Combo | text="Combo00" |
| Grid00 | Grid | binddataset="Dataset00", visible="false" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| CODE | STRING |
| DATA | STRING |

**Sample Data:**

```json
[
  {
    "CODE": 1,
    "DATA": "CODE01"
  },
  {
    "CODE": 2,
    "DATA": "CODE02"
  },
  {
    "CODE": 3,
    "DATA": "CODE03"
  },
  {
    "CODE": 4,
    "DATA": "CODE04"
  }
]
```

## Source Code

```javascript
this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	this.Grid00.set_visible(false);
	this.Combo00.set_value(this.Dataset00.getColumn(e.row, "CODE"));
};

this.Combo00_ondropdown = function(obj:nexacro.Combo,e:nexacro.EventInfo)
{
	this.Grid00.set_visible(true);
	return false;
};
```

---

[Back to Combo](./README.md) | [Back to Index](../INDEX.md)