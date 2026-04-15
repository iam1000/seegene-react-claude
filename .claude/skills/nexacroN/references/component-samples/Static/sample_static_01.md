# sample_static_01

**Category:** Static
**Keywords:** `navigatorname, osversion, expr`

## Description

Displaying Text Dynamically

## Form Information

- **Form ID:** sample_static_01
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| staticExpr | Static | text="test" |
| radioExpr | Radio | - |

## Source Code

```javascript
this.fn_dateTostr = function()
{
	
	var objDate = new Date();
	var sRtn =  objDate.getFullYear()+"/"
		+ (objDate.getMonth()+1).toString().padLeft(2, "0")+"/"
		+ objDate.getDate().toString().padLeft(2, "0");
	return sRtn;
};

this.fn_checkBrowser = function()
{
	return system.navigatorname + " " + system.navigatorversion;
}

this.fn_checkOS = function()
{
	return system.osversion;
}

this.radioExpr_onitemchanged = function(obj:nexacro.Radio,e:nexacro.ItemChangeEventInfo)
{
	var todayExpr = "comp.parent.fn_dateTostr()";
	var browserExpr = "comp.parent.fn_checkBrowser()";
	var osExpr = "comp.parent.fn_checkOS()";
	if(obj.value == "Today")
		this.staticExpr.set_expr(todayExpr);		
	else if(obj.value == "Browser")
		this.staticExpr.set_expr(browserExpr);
	else if(obj.value == "OS")
		this.staticExpr.set_expr(osExpr);	
};
```

---

[Back to Static](./README.md) | [Back to Index](../INDEX.md)