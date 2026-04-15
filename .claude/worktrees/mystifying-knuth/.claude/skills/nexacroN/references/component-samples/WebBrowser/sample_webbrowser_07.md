# sample_webbrowser_07

**Category:** WebBrowser
**Keywords:** `setProperty`

## Description

Displaying Data with innerHTML

## Form Information

- **Form ID:** sample_webbrowser_07
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| WebBrowser00 | WebBrowser | - |
| Edit00 | Edit | - |
| Button00 | Button | text="Button00" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var vHtml = this.WebBrowser00.getProperty("document").getProperty("body");
	vHtml.setProperty("innerHTML", this.Edit00.value);	
};
```

---

[Back to WebBrowser](./README.md) | [Back to Index](../INDEX.md)