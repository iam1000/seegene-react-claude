# sample_button_03

**Category:** Button
**Keywords:** `background`

## Description

Creating Image Button

## Form Information

- **Form ID:** sample_button_03_nexacro16
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnLike | Button | text="like" |
| btnImage | Button | text="" |
| btnAngry | Button | text="angry" |

## Source Code

```javascript
this.btnLike_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.btnImage.set_background('url("imagerc::like50.png")');
};

this.btnAngry_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.btnImage.set_background('url("imagerc::angry50.png")');
};
```

---

[Back to Button](./README.md) | [Back to Index](../INDEX.md)