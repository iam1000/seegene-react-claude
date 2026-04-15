# sample_edit_05

**Category:** Edit
**Keywords:** `password, RegExp, exec`

## Description

Checking Password Format Using Regular Expression

## Form Information

- **Form ID:** sample_edit_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Static00 | Static | text="Password:" |
| Static01 | Static | - |
| edit_password | Edit | value="nexacro17", text="nexacro17" |
| Button00 | Button | text="Confirm" |
| CheckBox00 | CheckBox | text="Unmasking" |

## Source Code

```javascript
/*
Event Handler
*/
this.Button00_onclick = function(obj:Button,e:ClickEventInfo)
{
    var sRtn = fn_checkPassword(this.edit_password.value);
    
	if(sRtn ==='Y')
		// alert("Password correct");	
		this.Static01.set_text("Password correct");
	else
		// alert("Password incorrect");		
		this.Static01.set_text("Password incorrect");

};

this.CheckBox00_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
{
	if(e.postvalue == 1) 
	{
		this.edit_password.set_password("false");
	}
	else
	{
		this.edit_password.set_password("true");
	}
	
};

function fn_checkPassword(sValue)
{
    var sRtn = "N";
    var sRegExp = "[a-z0-9]{8,10}";
    var objRegExp = new RegExp(sRegExp, "i"); 
    var objResult = objRegExp.exec(sValue);
	
    if (objResult == null)
    {
        sRtn = "N";
    }
    else
    {
        if ((objResult.index == 0) && (objResult == sValue))
            sRtn = "Y";
        else
            sRtn = "N";
    }

    return sRtn;
}
```

---

[Back to Edit](./README.md) | [Back to Index](../INDEX.md)