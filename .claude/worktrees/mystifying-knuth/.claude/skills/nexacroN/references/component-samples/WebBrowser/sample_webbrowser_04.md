# sample_webbrowser_04

**Category:** WebBrowser
**Keywords:** `getProperty`

## Description

Importing Variable Value of Script

## Form Information

- **Form ID:** sample_webbrowser_04
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Button00 | Button | text="Get Variable" |
| Static00 | Static | - |
| WebBrowser00 | WebBrowser | - |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var _win = this.WebBrowser00.getProperty("window");
	
	var str = _win.getProperty("strHTML");
	
	trace("_win = " + _win);
	
	this.Static00.set_text(str);

	if(_win)
	{
		_win.destroy();
		_win = null;
	}	

};

this.sample_webbrowser_04_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
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