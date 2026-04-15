# sample_dataset_05

**Category:** Dataset
**Keywords:** `addVariable`

## Description

Creating Dataset with Script

## Form Information

- **Form ID:** sample_dataset_05
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | - |
| Grid01 | Grid | - |
| TextArea00 | TextArea | - |
| Button00 | Button | text="Button00" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var objApp = nexacro.getApplication();
	var objGdS = new Dataset;	
	objApp.addVariable("gds_data", objGdS);
	objApp.gds_data.addColumn("COL0","String");
	objApp.gds_data.addColumn("COL1","String");
	objApp.gds_data.addRow();
	objApp.gds_data.setColumn(objApp.gds_data.rowposition,"COL0","global COL0");
	objApp.gds_data.setColumn(objApp.gds_data.rowposition,"COL1","global COL1");
	this.Grid00.set_binddataset("gds_data");
	this.Grid00.createFormat();
	
	var objLdS = new Dataset;
	objLdS.set_name("ds_data");
	this.addChild("ds_data", objLdS);  
	this.ds_data.addColumn("COL0","String");
	this.ds_data.addColumn("COL1","String");
	this.ds_data.addRow();
	this.ds_data.setColumn(this.ds_data.rowposition,"COL0","1");
	this.ds_data.setColumn(this.ds_data.rowposition,"COL1","first");
	this.ds_data.addRow();
	this.ds_data.setColumn(this.ds_data.rowposition,"COL0","2");
	this.ds_data.setColumn(this.ds_data.rowposition,"COL1","second");
	this.Grid01.set_binddataset("ds_data");	
	this.Grid01.createFormat();
	
    this.TextArea00.set_value('global dataset rowcount : ' + objApp.all["gds_data"].rowcount+'\n'
		+'local  dataset rowcount : ' + this.all["ds_data"].rowcount);
};
```

---

[Back to Dataset](./README.md) | [Back to Index](../INDEX.md)