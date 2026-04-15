# sample_string_09

**Category:** String
**Keywords:** `trim`

## Description

Removing Blank Characters in the Front & Back

## Form Information

- **Form ID:** sample_string_09
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | enable="false" |
| Button00 | Button | text="Trim" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Edit01.set_value("*"+this.fn_trim(this.Edit00.value)+"*");
};

this.fn_trim = function(sValue)
{
    if (sValue == null)
    {
        return "";
    }
    if (new String(sValue).valueOf() == "undefined")
    {
        return "";
    }
    if (new String(sValue) == null)
    {
        return "";
    }

    var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');
    return retVal;
}
```

---

[Back to String](./README.md) | [Back to Index](../INDEX.md)