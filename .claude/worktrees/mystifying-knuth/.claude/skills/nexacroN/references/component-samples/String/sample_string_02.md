# sample_string_02

**Category:** String
**Keywords:** `indexOf`

## Description

Verifying Email Address Value

## Form Information

- **Form ID:** sample_string_02
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Static00 | Static | text="e-mail" |
| Static01 | Static | text="result" |
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Button00 | Button | text="check" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var sRtn = this.fn_checkEmail(this.Edit00.value);
	this.Edit01.set_value(sRtn);
};

this.fn_checkEmail = function(sValue)
{
    var vChk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-._@";
    var i, pos, vEmailFirst, vEmailLast;

    if (this.fn_checkNull(sValue))
    {
        return false;
    }

    for (var i = 0 ; i < sValue.length ; i++)
    {
        if (vChk.indexOf(sValue.charAt(i)) < 0) 
        {
            return false;
        }
    }
    
    pos = this.fn_pos(sValue, "@");

    if (pos < 0)
    {
        return false;
    }
        
    vEmailFirst = sValue.substr(0, pos);
    vEmailLast  = sValue.substr(pos+1);

    if (vEmailFirst.length <= 0 || vEmailLast.length <= 0)
    {
        return false;
    }

    if (this.fn_pos(vEmailLast, ".") <= 0 
     || this.fn_pos(vEmailLast, "..") >= 0 
     || this.fn_right(vEmailLast, 1) == ".")
    {
        return false;
    }

    if (this.fn_pos(vEmailLast, "@") >= 0)
    {
        return false;
    }
        
    return true;
}

this.fn_checkNull = function(sValue)
{
    if (String(sValue).valueOf() == "undefined") 
    {
        return true;
    }

    if (sValue == null)
    {
        return true;
    }

    if (("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ))
    {
        return true;
    }

    if (sValue.length == 0)
    {
        return true;
    }

    return false;
}

this.fn_pos = function(sOrg, sFind, nStart)
{
    if (this.fn_checkNull(sOrg) || this.fn_checkNull(sFind))
    {
        return -1;
    }

    if (this.fn_checkNull(nStart))
    {
        nStart = 0;
    }
        
    return sOrg.indexOf(sFind, nStart);
}

this.fn_right = function(sOrg, nSize)
{
    if (this.fn_checkNull(sOrg) || this.fn_checkNull(nSize))		
    {
        return "";
    }

    if (sOrg.length < nSize)
    {
        return sOrg;
    }
    else
    {
        return sOrg.substr(sOrg.length-nSize, nSize);
    }
}
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)