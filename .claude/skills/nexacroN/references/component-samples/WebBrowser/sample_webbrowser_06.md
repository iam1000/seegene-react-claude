# sample_webbrowser_06

**Category:** WebBrowser
**Keywords:** `onusernotify, userdata`

## Description

Transmitting User Data Using usernotify Event

## Form Information

- **Form ID:** sample_webbrowser_06
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| WebBrowser00 | WebBrowser | - |
| TextArea00 | TextArea | - |

## Source Code

```javascript
this.WebBrowser00_onusernotify = function(obj:nexacro.WebBrowser,e:nexacro.WebUserNotifyEventInfo)
{	
	if(e.userdata)
	{
		var str = this.WebBrowser00.id + "_onusernotify: " + e.userdata;

		this.TextArea00.set_value(str);
	}
};

this.sample_webbrowser_06_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	var domain = document.location.href;
	var arrdomain = domain.split('/');
	var currentfile = arrdomain.pop();
	domain = domain.replace(currentfile, "Service/webbrowser.html")
	this.WebBrowser00.set_url(domain);
};
```

---

[Back to WebBrowser](./README.md) | [Back to Index](../INDEX.md)