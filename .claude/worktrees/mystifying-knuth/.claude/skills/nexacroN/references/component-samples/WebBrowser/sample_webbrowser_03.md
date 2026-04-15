# sample_webbrowser_03

**Category:** WebBrowser
**Keywords:** `setProperty,getProperty,callMethod,getElementById`

## Description

Setting Element Property Value

## Form Information

- **Form ID:** sample_webbrowser_03
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| WebBrowser00 | WebBrowser | - |
| Button00 | Button | text="Set input value" |
| Edit00 | Edit | value="This is a value from Nexacro", text="This is a value from Nexacro" |

## Source Code

```javascript
/*
  call setInputValue method and set the value of input element in html page.
*/
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var _doc = this.WebBrowser00.getProperty("document");

	var dom = _doc.callMethod("getElementById", "inputText");

	dom.setProperty("value", this.Edit00.text);
	
	if(_doc && dom)
	{
		_doc.destroy();
		_doc = null;

		dom.destroy();
		dom = null;
	}	
};

this.sample_webbrowser_03_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
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