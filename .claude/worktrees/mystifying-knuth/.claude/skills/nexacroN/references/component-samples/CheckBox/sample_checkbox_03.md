# sample_checkbox_03

**Category:** CheckBox
**Keywords:** `isChecked, onbindingvaluechanged`

## Description

Checking whether Checked or Not

## Form Information

- **Form ID:** sample_checkbox_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| CheckBox00 | CheckBox | text="CheckBox00" |
| CheckBox01 | CheckBox | text="CheckBox01" |
| CheckBox02 | CheckBox | text="CheckBox02" |
| Grid00 | Grid | binddataset="Dataset00" |
| TextArea00 | TextArea | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| CheckBox00 | STRING |
| CheckBox01 | STRING |
| CheckBox02 | STRING |

**Sample Data:**

```json
[
  {
    "CheckBox00": "",
    "CheckBox01": true,
    "CheckBox02": "A"
  },
  {
    "CheckBox00": 1,
    "CheckBox01": "",
    "CheckBox02": "B"
  },
  {
    "CheckBox00": "TEST",
    "CheckBox01": "TRUE",
    "CheckBox02": "C"
  },
  {
    "CheckBox00": "TRUE",
    "CheckBox01": "FALSE",
    "CheckBox02": "D"
  }
]
```

## Source Code

```javascript
this.sample_checkbox_03_onbindingvaluechanged = function(obj:nexacro.Form,e:nexacro.BindingValueChangedEventInfo)
{
	this.TextArea00.set_value("CheckBox00: "+this.CheckBox00.isChecked()+" / "+this.CheckBox00.value);
	this.TextArea00.insertText("\nCheckBox01: "+this.CheckBox01.isChecked()+" / "+this.CheckBox01.value);
	this.TextArea00.insertText("\nCheckBox02: "+this.CheckBox02.isChecked()+" / "+this.CheckBox02.value);
};
```

---

[Back to CheckBox](./README.md) | [Back to Index](../INDEX.md)