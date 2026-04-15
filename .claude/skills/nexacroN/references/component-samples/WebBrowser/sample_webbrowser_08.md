# sample_webbrowser_08

**Category:** WebBrowser
**Keywords:** `callMethod`

## Description

Using External Web Editor

## Form Information

- **Form ID:** sample_webbrowser_08
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| WebBrowser00 | WebBrowser | - |
| Button00 | Button | text="setData" |
| Button01 | Button | text="getData" |
| TextArea00 | TextArea | - |

## Source Code

```javascript
var _win;
this.sample_webbrowser_08_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
{
	var domain = document.location.href;
	var arrdomain = domain.split('/');
	var currentfile = arrdomain.pop();
	domain = domain.replace(currentfile, "Service/sample_webbrowser_08.html")
	this.WebBrowser00.set_url(domain);
};

this.WebBrowser00_onloadcompleted = function(obj:nexacro.WebBrowser,e:nexacro.WebLoadCompEventInfo)
{
	_win = this.WebBrowser00.getProperty('window');
};

this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	_win.callMethod("setData", "<p><strong>Nexacro N</strong></p><p><em>Nexacro programming is divided into two parts</em></p><p>one to define user-visible screens visible and a second used for the scripts that implement business logic. Additionally, Nexacro provides capabilities for applying and managing styles and themes in screens.</p>");
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.TextArea00.set_value(_win.callMethod("getData"));
};
```

---

[Back to WebBrowser](./README.md) | [Back to Index](../INDEX.md)