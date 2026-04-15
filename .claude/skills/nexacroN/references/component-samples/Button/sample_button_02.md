# sample_button_02

**Category:** Button
**Keywords:** `icon`

## Description

Putting Icon on Button

## Form Information

- **Form ID:** sample_button_02_nexacro16
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btn_ok | Button | text="OK", icon="URL("imagerc::img_sta_des.png"..." |

## Source Code

```javascript
this.btn_ok_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{	
	var strMsg = "[" +e.eventid + " event] " + this.btn_ok.text + " button clicked.";
	
	alert(strMsg);

};
```

---

[Back to Button](./README.md) | [Back to Index](../INDEX.md)