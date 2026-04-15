# sample_combo_04

**Category:** Combo
**Keywords:** `type, onitemchanged`

## Description

Extracting Related Items through Keyword Search

## Form Information

- **Form ID:** sample_combo_04_nexacro16
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Combo00 | Combo | text="apple", value="00" |
| Static00 | Static | text="Search type:" |
| Radio00 | Radio | - |

## Datasets

### ds_combo

**Columns:**

| Column | Type |
|--------|------|
| CODE | STRING |
| DATA | STRING |

**Sample Data:**

```json
[
  {
    "CODE": "",
    "DATA": "apple"
  },
  {
    "DATA": "banana",
    "CODE": 1
  },
  {
    "DATA": "orange",
    "CODE": 2
  },
  {
    "DATA": "kiwi",
    "CODE": 3
  },
  {
    "DATA": "peach",
    "CODE": 4
  }
]
```

## Source Code

```javascript
this.Radio00_onitemchanged = function(obj:Radio,e:ItemChangeEventInfo)
{
	switch(e.postindex)
	{
		case 0:	/* DROPDOWN */
			this.Combo00.set_type("dropdown");
			break;
		case 1:	/* SEARCH */
			this.Combo00.set_type("search");
			break;
		case 2:	/* FILTER */
			this.Combo00.set_type("filter");
			break;
		case 3: /* FILTERLIKE: */
			this.Combo00.set_type("filterlike");
			break;
		default:
			trace("UNKNOWN TYPE");	
	}
	
};
```

---

[Back to Combo](./README.md) | [Back to Index](../INDEX.md)