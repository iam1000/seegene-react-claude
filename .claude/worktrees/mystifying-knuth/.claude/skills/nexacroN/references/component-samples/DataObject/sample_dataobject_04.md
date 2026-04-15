# sample_dataobject_04

**Category:** DataObject
**Keywords:** `ondatachanged,dataobjectbindmode`

## Description

Applying two-way communication

## Form Information

- **Form ID:** sample_dataobject_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btn_Apply | Button | text="Apply" |
| btn_Search | Button | text="Search" |
| btn_Delete | Button | text="Delete" |
| edituserId | Edit | - |
| edittitle | Edit | - |
| editid | Edit | - |
| Grid00 | Grid | binddataset="Dataset00" |
| TextArea00 | TextArea | - |
| textAreabody | TextArea | - |
| CheckBox00 | CheckBox | text="updatecontrol", value="true" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| userId | STRING |
| id | STRING |
| title | STRING |
| body | STRING |

## Source Code

```javascript
// https://github.com/typicode/jsonplaceholder

// Getting resources
// https://jsonplaceholder.typicode.com/guide/
this.btn_Search_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.DataObject00.load();
};

this.btn_Apply_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.TextArea00.deleteText();
	this.Dataset00.applyChange();
};

var serviceid;
this.DataObject00_onsuccess = function(obj:nexacro.DataObject,e:nexacro.DataObjectEventInfo)
{
	serviceid = e.serviceid;
	trace(e.serviceid + ":" + e.statuscode);

    if (e.statuscode == 200 && (e.method == "POST" || e.method == "GET"))
        trace("getAllResponseHeaders:"+ obj.getAllResponseHeaders());
	else
    {
        e.preventDefault();
		this.TextArea00.insertText("=================="+"\n");
		this.TextArea00.insertText(e.serviceid + ":" + e.statuscode+"\n");
		this.TextArea00.insertText(obj.getResponse()+"\n");		
    }
};

this.DataObject00_onerror = function(obj:nexacro.DataObject,e:nexacro.DataObjectErrorEventInfo)
{
	trace(e.statuscode +":"+e.errormsg);
	this.TextArea00.deleteText();
	this.TextArea00.insertText("=================="+"\n");
	this.TextArea00.insertText(e.statuscode +":"+e.errormsg+"\n");
};

// Deleting a resource, Updating a resource
// https://jsonplaceholder.typicode.com/guide/
this.DataObject00_ondatachanged = function(obj:nexacro.DataObject,e:nexacro.DataObjectDataChangedEventInfo)
{
   var updatelist = e.infoarray;
   for (var i =0; i<updatelist.length; i++)
   {
		var item = updatelist[i];
		var uid = item.uid;
		var method = (item.type == "update")?"PUT":"DELETE";
		var senddata = JSON.stringify(item.data);	
		var id = item.data.id;
		var param = {
			'httpheader' : {'Content-Type': 'application/json; charset=UTF-8'}, 
			'postdata' : senddata 
		}
		if(method == "PUT")
		{
			this.DataObject00.request(uid, method, this.DataObject00.url+"/"+id, param);
		} else {
			this.DataObject00.request(uid, method, this.DataObject00.url+"/"+id);
		}
	}
};

this.btn_Delete_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.deleteRow(this.Dataset00.rowposition);
};

this.CheckBox00_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
{
	this.Dataset00.set_updatecontrol(e.postvalue);
};

// Patching a resource
// https://jsonplaceholder.typicode.com/guide/
this.DataObject00_onvaluechanged = function(obj:nexacro.DataObject, e:nexacro.DataObjectValueChangedEventInfo)
{
	var id = obj.getObjectByPath(e.dataobjectpath)[e.index]["id"];
	var uid = e.uid;
	var method = "PATCH";
	var objddata = {};
	objddata[e.key] = e.value;
	var senddata = JSON.stringify(objddata);
	
    var param = {
		'httpheader' : {'Content-Type': 'application/json; charset=UTF-8'}, 
		'postdata' : senddata 
	}
	this.TextArea00.deleteText();
	this.DataObject00.request(uid, method, this.DataObject00.url+"/"+id, param);
};
```

---

[Back to DataObject](./README.md) | [Back to Index](../INDEX.md)