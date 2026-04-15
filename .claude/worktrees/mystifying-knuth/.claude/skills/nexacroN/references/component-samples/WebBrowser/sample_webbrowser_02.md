# sample_webbrowser_02

**Category:** WebBrowser
**Keywords:** `getProperty,callMethod,getElementById`

## Description

Importing Element Property Value

## Form Information

- **Form ID:** sample_webbrowser_02
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| WebBrowser00 | WebBrowser | - |
| Button00 | Button | text="Get input value" |
| Static00 | Static | - |

## Source Code

```javascript
/*
  call getInputValue method and get the value of input element in html page.
*/
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var _doc = this.WebBrowser00.getProperty("document");

	var dom = _doc.callMethod("getElementById", "inputText");

	var str = dom.getProperty("value");
	
	this.Static00.set_text(str);

	if(_doc && dom)
	{
		_doc.destroy();
		_doc = null;

		dom.destroy();
		dom = null;
	}
};

this.sample_webbrowser_02_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
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