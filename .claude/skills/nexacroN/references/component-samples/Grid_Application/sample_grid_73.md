# sample_grid_73

**Category:** Grid Application
**Keywords:** `filter`

## Description

Searching by Like Condition

## Form Information

- **Form ID:** sample_grid_73
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00", text="" |
| Edit00 | Edit | - |
| Button00 | Button | text="%Like%" |
| Button01 | Button | text="Like%" |
| Button02 | Button | text="Init" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Name | STRING |

**Sample Data:**

```json
[
  {
    "Name": "john"
  },
  {
    "Name": "james"
  },
  {
    "Name": "donald"
  },
  {
    "Name": "lisa"
  },
  {
    "Name": "joe"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.filter("String(Name).indexOf('"+this.Edit00.value+"')>=0");
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.filter("String(Name).indexOf('"+this.Edit00.value+"')==0");
};

this.Button02_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.set_filterstr();
	this.Dataset00.filter();
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)