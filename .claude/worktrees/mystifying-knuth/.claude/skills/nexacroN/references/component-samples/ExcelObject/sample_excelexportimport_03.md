# sample_excelexportimport_03

**Category:** ExcelObject
**Keywords:** `getExportItem, setExportItem, exportimage`

## Description

Exporting Grid Image as Excel File

## Form Information

- **Form ID:** sample_excelexportimport_03
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Export image" |
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
| Image | STRING |

**Sample Data:**

```json
[
  {
    "Name": "John",
    "Address": "Seoul, KOREA",
    "Company": "1dollar",
    "Department": "Sales",
    "Salary": 15000,
    "Image": "http://demo.nexacro.com/developer_guide/17/Image/img_sta_des.png"
  },
  {
    "Name": "James",
    "Address": "Barcelona, Spain",
    "Company": "EBOT",
    "Department": "Consulting",
    "Salary": 25000,
    "Image": "http://demo.nexacro.com/developer_guide/17/Image/launch_2.png"
  },
  {
    "Name": "Donald",
    "Address": "Califonia, USA",
    "Company": "EBOT",
    "Department": "Research Institute",
    "Salary": 1000000,
    "Image": "http://demo.nexacro.com/developer_guide/17/Image/img_sta_des.png"
  },
  {
    "Name": "Lisa",
    "Address": "London, United Kingdom",
    "Company": "1dollar",
    "Department": "Quality Assurance",
    "Salary": 3000,
    "Image": "http://demo.nexacro.com/developer_guide/17/Image/img_sta_des.png"
  },
  {
    "Name": "Joe",
    "Address": "São Paulo, Brazil",
    "Company": "hangul",
    "Department": "R&D",
    "Salary": 8600,
    "Image": "http://demo.nexacro.com/developer_guide/17/Image/launch_2.png"
  }
]
```

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.exportObj = new ExcelExportObject("Export00", this);
	
	this.exportObj.set_exportfilename("ExcelExportFile");
	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	this.exportObj.set_exporturl("http://demo.nexacro.com/developer_guide/XExportImport");
	
	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1");
	
	var objExportItem = this.exportObj.getExportItem(nexacro.ExportItemTypes.GRID, 0);
	objExportItem.set_exportimage("image");	
	
	this.exportObj.setExportItem(nexacro.ExportItemTypes.GRID, 0, objExportItem);

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