# sample_dataobject_03

**Category:** DataObject
**Keywords:** `request`

## Description

Executing the request method by specifying method parameters

## Form Information

- **Form ID:** sample_dataobject_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btn_Create | Button | text="Create" |
| btn_Search | Button | text="Search" |
| edituserId | Edit | - |
| editid | Edit | - |
| edittitle | Edit | - |
| Grid00 | Grid | - |
| TextArea00 | TextArea | - |
| textAreabody | TextArea | - |

## Datasets

### Dataset00

## Source Code

```javascript
// Getting resources
// https://jsonplaceholder.typicode.com/guide/
this.btn_Search_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var strId = this.editid.value;
	this.DataObject00.request("SEARCH", "GET", "https://jsonplaceholder.typicode.com/posts"+(strId?"/"+strId:""));
};

// Creating a resource
// https://jsonplaceholder.typicode.com/guide/
this.btn_Create_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var header = {"Content-Type" : "application/json; charset=UTF-8"};
	var strPostdata = JSON.stringify(
		{
			"userId":this.edituserId.value,
			"title":this.edittitle.value,
			"body":this.textAreabody.value
		}
	);
	this.DataObject00.request("CREATE", "POST", "https://jsonplaceholder.typicode.com/posts", 
		{
			"httpheader":header, 
			"postdata":strPostdata
		}
	);
};

var serviceid;
this.DataObject00_onsuccess = function(obj:nexacro.DataObject,e:nexacro.DataObjectEventInfo)
{
	serviceid = e.serviceid;
	trace(e.serviceid + ":" + e.statuscode);

    if (e.statuscode == 200)
        trace("getAllResponseHeaders:"+ obj.getAllResponseHeaders())
    else if(e.statuscode > 200)
    {
        e.preventDefault();
		this.TextArea00.set_value(obj.getResponse());
    }
};

this.DataObject00_onload = function(obj:nexacro.DataObject,e:nexacro.DataObjectLoadEventInfo)
{
	if(e.reason == 2)
	{
		this.Dataset00.clear();
		var objData;
		var strDataobjectpath;
		if(serviceid == "SEARCH")
		{
			if(obj.data.length > 1)
			{
				objData = obj.data[0];
				strDataobjectpath = "$[*]";
			} else {
				objData = obj.data;
				strDataobjectpath = "$";			
			}
		}
		for(var key in objData)
		{
			var objColinfo = new ColumnInfo();
			objColinfo.set_type("String");
			objColinfo.set_datapath("@."+key);
			this.Dataset00.addColumnInfo(key, objColinfo);
		}
		this.Dataset00.set_binddataobject(obj.id);
		this.Dataset00.set_dataobjectpath(strDataobjectpath);
		this.Grid00.set_binddataset(this.Dataset00.name);
		this.Grid00.createFormat();
		this.TextArea00.set_value("");
	}
};

this.DataObject00_onerror = function(obj:nexacro.DataObject,e:nexacro.DataObjectErrorEventInfo)
{
	trace(e.statuscode +":"+e.errormsg);
	this.TextArea00.set_value(e.statuscode +":"+e.errormsg);
};
```

---

[Back to DataObject](./README.md) | [Back to Index](../INDEX.md)