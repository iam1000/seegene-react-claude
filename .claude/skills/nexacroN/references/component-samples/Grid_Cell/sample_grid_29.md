# sample_grid_29

**Category:** Grid Cell
**Keywords:** `getSubCellProperty, setSubCellProperty`

## Description

Setting Sub-cell Properties

## Form Information

- **Form ID:** sample_grid_29
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00", text="" |
| btn_getCellProperty | Button | text="getCellProperty" |
| btn_setCellProperty00 | Button | text="setCellProperty" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| ID | STRING |
| First | STRING |
| Middle | STRING |
| Last | STRING |
| Mail_P | STRING |
| Mail_S | STRING |
| Tel_M | STRING |
| Tel_O | STRING |

**Sample Data:**

```json
[
  {
    "ID": "JOHNSON",
    "First": "John",
    "Middle": "",
    "Last": "Doe",
    "Mail_P": "john@email.com",
    "Mail_S": "john@email.org",
    "Tel_M": 1012345678,
    "Tel_O": ""
  },
  {
    "ID": "JJ",
    "First": "Jane",
    "Middle": "",
    "Last": "Roe",
    "Tel_M": 1056781234,
    "Tel_O": 256781234,
    "Mail_P": "jane@email.com",
    "Mail_S": ""
  },
  {
    "First": "Dick",
    "Last": "Public",
    "Middle": "Fitzgerald",
    "Tel_M": 1012345678,
    "Tel_O": 212345678,
    "Mail_P": "dick@email.com",
    "Mail_S": "dick@email.org",
    "ID": "jaspers"
  },
  {
    "First": "Robert",
    "Last": "Smith",
    "Middle": "Walker",
    "Tel_M": "",
    "Tel_O": 256781234,
    "Mail_P": "robert@email.com",
    "Mail_S": "robert@email.org",
    "ID": "son"
  },
  {
    "First": "Jack",
    "Last": "Robertson",
    "Tel_M": 1012345678,
    "Tel_O": 212345678,
    "Mail_P": "jack@email.com",
    "Mail_S": "",
    "ID": "Daniel"
  }
]
```

## Source Code

```javascript
this.btn_getCellProperty_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    var varProperty = this.Grid00.getSubCellProperty("body", 5, 0, "background");    
    
    alert("Background value of first name sub cell: " + varProperty);
};


this.btn_setCellProperty_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
    var bRet = this.Grid00.setSubCellProperty("body", 5, 0, "background", "khaki");
};
```

---

[Back to Grid Cell](./README.md) | [Back to Index](../INDEX.md)