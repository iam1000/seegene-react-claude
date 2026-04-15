# sample_excelexportimport_02

**Category:** ExcelObject
**Keywords:** `importtype, importurl, addEventHandler, importData`

## Description

Reading Excel File to Show on Grid (Import)

## Form Information

- **Form ID:** sample_excelexportimport_02
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Import" |
| Grid00 | Grid | binddataset="Dataset00", text="" |

## Datasets

### Dataset00

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.importObj = new ExcelImportObject("Import00", this);
	
	this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
	this.importObj.set_importurl("http://demo.nexacro.com/developer_guide/XImport");
	
	this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
	this.importObj.addEventHandler("onerror", this.Import00_onerror, this);
	
	this.importObj.importData("", "Sheet1!A1:E7", "Dataset00");
	
};

this.Import00_onsuccess = function(obj:ExcelImportObject, e:nexacro.ExcelImportEventInfo)
{
	trace("Import00_onsuccess");
	
	this.Grid00.createFormat();
}

this.Import00_onerror = function(obj:ExcelImportObject, e:nexacro.ExcelImportErrorEventInfo)
{
	trace("Import00_onerror");	
}
```

---

[Back to ExcelObject](./README.md) | [Back to Index](../INDEX.md)