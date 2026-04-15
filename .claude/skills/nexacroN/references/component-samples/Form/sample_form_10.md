# sample_form_10

**Category:** Form
**Keywords:** `transaction`

## Description

Processing transaction with Server

## Form Information

- **Form ID:** sample_application_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnTransaction | Button | text="Transaction TEST" |
| radioTransaction | Radio | - |
| TextArea00 | TextArea | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| id | STRING |
| name | STRING |

## Source Code

```javascript
var bAsync = true;
this.btnTransaction_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.TextArea00.set_value("");
	this.fn_addlog("Before Transaction");
	this.transaction("TEST","FileSample::sample_form_10_file.xml", null, "Dataset00=TEST", null, "fn_test", bAsync);
	this.fn_addlog("After Transaction");
};

this.fn_test = function(strSvcID, nErrorCode, strErrorMag)
{
	this.fn_addlog("Transaction rowcount: "+this.Dataset00.rowcount);
}

this.radioTransaction_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	bAsync = obj.value;
};

this.fn_addlog = function(strMessage)
{
	this.TextArea00.set_value(this.TextArea00.text + strMessage + '\n');
}
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)