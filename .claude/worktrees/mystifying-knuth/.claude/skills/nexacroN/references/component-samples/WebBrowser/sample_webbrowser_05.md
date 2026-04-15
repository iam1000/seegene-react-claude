# sample_webbrowser_05

**Category:** WebBrowser
**Keywords:** `getProperty, callMethod`

## Description

Calling Function of Script

## Form Information

- **Form ID:** sample_webbrowser_05
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| WebBrowser00 | WebBrowser | - |
| Button00 | Button | text="Call Function" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var _win = this.WebBrowser00.getProperty("window");
	
	_win.callMethod("colorFunction", "red");
	
	if(_win)
	{
		_win.destroy();
		_win = null;
	}	
};

this.sample_webbrowser_05_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
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