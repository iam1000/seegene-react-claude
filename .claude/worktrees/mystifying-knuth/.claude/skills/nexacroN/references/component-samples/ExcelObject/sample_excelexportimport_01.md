# sample_excelexportimport_01

**Category:** ExcelObject
**Keywords:** `exportfilename,exporturl,addExportItem,addEventHandler,exportData,importData`

## Description

Exporting Grid as Excel File (Export)

## Form Information

- **Form ID:** sample_excelexportimport_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Export" |
| Grid00 | Grid | binddataset="Dataset00", text="" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Name | STRING |
| Address | STRING |
| Company | STRING |
| Department | STRING |
| Salary | STRING |

**Sample Data:**

```json
[
  {
    "Name": "John",
    "Address": "Seoul, KOREA",
    "Company": "1dollar",
    "Department": "Sales",
    "Salary": 15000
  },
  {
    "Name": "James",
    "Address": "Barcelona, Spain",
    "Company": "EBOT",
    "Department": "Consulting",
    "Salary": 25000
  },
  {
    "Name": "Donald",
    "Address": "Califonia, USA",
    "Company": "EBOT",
    "Department": "Research Institute",
    "Salary": 1000000
  },
  {
    "Name": "Lisa",
    "Address": "London, United Kingdom",
    "Company": "1dollar",
    "Department": "Quality Assurance",
    "Salary": 3000
  },
  {
    "Name": "Joe",
    "Address": "São Paulo, Brazil",
    "Company": "hangul",
    "Department": "R&D",
    "Salary": 8600
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.exportObj = new ExcelExportObject("Export00", this);
	
	this.exportObj.set_exportfilename("ExcelExportFile");
	this.exportObj.set_exporturl("http://demo.nexacro.com/developer_guide/XExportImport");
	
	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1");
	
	this.addEventHandler("onsuccess", this.Export00_onsuccess, this);
	this.addEventHandler("onerror", this.Export00_onerror, this);
	
	var intExportedItem = this.exportObj.exportData();
	
	trace("Number of Exported Item: " + intExportedItem);
	
};


this.Export00_onsuccess = function(obj:ExcelExportObject, e:nexacro.ExcelExportEventInfo)
{
	trace("Export00_onsuccess");	
}

this.Export00_onerror = function(obj:ExcelExportObject, e:nexacro.ExcelExportEventInfo)
{
	trace("Export00_onerror");
}
```

---

[Back to ExcelObject](./README.md) | [Back to Index](../INDEX.md)