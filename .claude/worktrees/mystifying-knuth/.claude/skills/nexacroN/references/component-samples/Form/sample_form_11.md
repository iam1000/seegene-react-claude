# sample_form_11

**Category:** Form
**Keywords:** `binds`

## Description

Checking Bind Item List

## Form Information

- **Form ID:** sample_form_11
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Button00 | Button | text="Button00" |
| Button01 | Button | text="binds check" |
| Spin00 | Spin | - |
| Grid00 | Grid | binddataset="Dataset01" |
| TextArea00 | TextArea | value="" |

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
    "Column1": "a"
  },
  {
    "Column0": 2,
    "Column1": "b"
  },
  {
    "Column0": 3,
    "Column1": "c"
  }
]
```

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "a",
    "Column1": 1
  },
  {
    "Column0": "b",
    "Column1": 2
  },
  {
    "Column0": "c",
    "Column1": 3
  }
]
```

## Source Code

```javascript
this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	for(var i = 0; i < this.binds.length; i++)
	{
		this.TextArea00.set_value(this.TextArea00.value+this.binds[i].compid+", "+ this.binds[i].propid+", "+ this.binds[i].datasetid + ", " + this.binds[i].columnid+"\n");
	}
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)