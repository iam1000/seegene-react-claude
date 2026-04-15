# sample_fileuptransfer_01

**Category:** FileUpTransfer
**Keywords:** `datatype, filelist, addFile, upload`

## Description

Uploading Selected File

## Form Information

- **Form ID:** sample_fileuptransfer_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Static00 | Static | text="Drop Files Here", visible="true" |
| Button00 | Button | text="open" |
| Button01 | Button | text="upload" |
| Grid00 | Grid | binddataset="Dataset00" |
| TextArea00 | TextArea | - |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| name | STRING |
| size | STRING |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.FileDialog00.open('Nexacro N', FileDialog.MULTILOAD);
};

this.FileDialog00_onclose = function(obj:nexacro.FileDialog,e:nexacro.FileDialogEventInfo)
{
	this.addFileList(e.virtualfiles);
};

this.addFileList = function(filelist)
{
	for (var i = 0, len = filelist.length, vFile; i < len; i++)
	{
		vFile = filelist[i];
		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
		vFile.addEventHandler("onerror", this.FileList_onerror , this);
		
		vFile.open(null, 1);
	}
}

this.FileList_onsuccess = function(obj:nexacro.VirtualFile, e:nexacro.VirtualFileEventInfo)
{
	switch (e.reason)
	{
		case 1:
			obj.getFileSize();
			break;
		case 9:
			var nRowIdx = this.Dataset00.addRow();
			this.Dataset00.setColumn(nRowIdx, 0, obj.filename);
			this.Dataset00.setColumn(nRowIdx, 1, this.cutFileSize(e.filesize));
			this.FileUpTransfer00.addFile(obj.filename, obj);
			break;
	}
}

this.FileList_onerror = function(obj:nexacro.VirtualFile, e:nexacro.VirtualFileErrorEventInfo)
{
	trace("errortype: "+e.errortype);
	trace("errormsg: "+e.errormsg);
	trace("statuscode: "+e.statuscode);
}

// https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
this.cutFileSize = function(filesize)
{
	var sOutput = filesize + " bytes";
	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) 
	{
		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
	}
	return sOutput;
};
this.Grid00_ondragenter = function(obj:nexacro.Grid,e:nexacro.DragEventInfo)
{
	if(e.datatype == "file")
	{
		this.Grid00.set_opacity(0.5);
	}
};

this.Grid00_ondragleave = function(obj:nexacro.Grid,e:nexacro.DragEventInfo)
{
	this.Grid00.set_opacity(1);
};

this.Grid00_ondrop = function(obj:nexacro.Grid,e:nexacro.GridDragEventInfo)
{
	this.Grid00.set_opacity(1);
	if(e.datatype == "file")
	{
		this.addFileList(e.filelist);
	}
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.TextArea00.set_value("");
	this.FileUpTransfer00.upload('http://demo.nexacro.com/developer_guide/17/Service/fileupload.jsp');
};

this.FileUpTransfer00_onprogress = function(obj:nexacro.FileUploadTransfer,e:nexacro.FileUploadTransferProgressEventInfo)
{
	this.fn_addlog(e.loaded+"/"+e.total);
};

this.FileUpTransfer00_onsuccess = function(obj:nexacro.FileUploadTransfer,e:nexacro.FileUploadTransferEventinfo)
{
	this.fn_addlog(e.code);
	this.fn_addlog(e.message);
};

this.FileUpTransfer00_onerror = function(obj:nexacro.FileUploadTransfer,e:nexacro.FileUploadTransferErrorEventInfo)
{
	this.fn_addlog(e.errormsg);
	this.fn_addlog(e.statuscode);
};

this.fn_addlog = function(strMessage)
{
	this.TextArea00.insertText(strMessage + '\n');
	
}
```

---

[Back to FileUpTransfer](./README.md) | [Back to Index](../INDEX.md)