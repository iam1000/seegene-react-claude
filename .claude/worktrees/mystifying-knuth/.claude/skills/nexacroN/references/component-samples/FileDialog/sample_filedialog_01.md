# sample_filedialog_01

**Category:** FileDialog
**Keywords:** `open, virtualfiles, accept`

## Description

Running FileDialog & Displaying Selected File

## Form Information

- **Form ID:** sample_filedialog_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="open" |
| Radio00 | Radio | text="FileDialog.LOAD", value="0" |
| Radio01 | Radio | text="none", value="" |
| TextArea00 | TextArea | - |

## Source Code

```javascript
var constOpenMode = FileDialog.LOAD;

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.FileDialog00.open('Nexacro N', constOpenMode);
};

this.Radio00_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	if(e.postvalue==0)
	{
		constOpenMode = FileDialog.LOAD;
	}
	else
	{
		constOpenMode = FileDialog.MULTILOAD;
	}
};

this.Radio01_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	this.FileDialog00.set_accept(e.postvalue);
};

this.FileDialog00_onclose = function(obj:nexacro.FileDialog,e:nexacro.FileDialogEventInfo)
{
	this.TextArea00.set_value("selectfiles: "+e.virtualfiles.length+"\n");
	for (var i = 0, len = e.virtualfiles.length, vFile; i < len; i++)
	{
		vFile = e.virtualfiles[i];
		vFile.addEventHandler("onsuccess", this.FileDialog_VirtualFile_onsuccess, this);
		
		vFile.open(null, VirtualFile.openRead);
		//vFile.getFileSize();
	}
	
};

this.FileDialog_VirtualFile_onsuccess = function(obj:nexacro.VirtualFile, e:nexacro.VirtualFileEventInfo)
{
	switch (e.reason)
	{
		case 1:
			obj.getFileSize();
			break;
		case 9:
			this.TextArea00.set_value(this.TextArea00.value+obj.filename+"("+e.filesize+")\n");
			obj.close();
			break;
	}
}
```

---

[Back to FileDialog](./README.md) | [Back to Index](../INDEX.md)