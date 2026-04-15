# sample_excelexportimport_04

**Category:** ExcelObject
**Keywords:** `clearExportItems, addExportItem`

## Description

Exporting Multiple Grid Data as Excel File

## Form Information

- **Form ID:** sample_excelexportimport_04
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00", text="" |
| Grid01 | Grid | binddataset="Dataset00", text="" |
| Button00 | Button | text="Export to 1 sheet" |
| Button01 | Button | text="Export to 2 sheets" |

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

	this.exportObj.set_exporturl("http://demo.nexacro.com/developer_guide/XExportImport");
	this.exportObj.set_exportfilename("ExcelExportFile00");
	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	this.exportObj.clearExportItems(nexacro.ExportItemTypes.GRID);

	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1" );
	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet1!A11" );

	var nCount = this.exportObj.exportData();
	trace("Export00: " + nCount);
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.exportObj1 = new ExcelExportObject("Export01", this);

	this.exportObj1.set_exporturl("http://demo.nexacro.com/developer_guide/XExportImport");
	this.exportObj1.set_exportfilename("ExcelExportFile01");
	this.exportObj1.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	this.exportObj1.clearExportItems(nexacro.ExportItemTypes.GRID);

	this.exportObj1.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1" );
	this.exportObj1.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet2!A1" );

	var nCount = this.exportObj1.exportData();
	trace("Export01: " + nCount);
};
```

---

[Back to ExcelObject](./README.md) | [Back to Index](../INDEX.md)