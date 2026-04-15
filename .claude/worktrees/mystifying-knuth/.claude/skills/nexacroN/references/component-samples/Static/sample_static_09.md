# sample_static_09

**Category:** Static
**Keywords:** `expr`

## Description

Replacing Specific Separators with Line Break Characters

## Form Information

- **Form ID:** sample_static_09
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Static00 | Static | text="Static00" |

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
    "Column0": "ABC,A,B,C,D,E"
  },
  {
    "Column0": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "Column0": "1,2,3,4,5"
  }
]
```

## Source Code

```javascript
this.setWordWrap = function(sValue)
{
	return nexacro.replaceAll(sValue, ",", "\n").replace(/^\s+/gm,'');
}
```

---

[Back to Static](./README.md) | [Back to Index](../INDEX.md)