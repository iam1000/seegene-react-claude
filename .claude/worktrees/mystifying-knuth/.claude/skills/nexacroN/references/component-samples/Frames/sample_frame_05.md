# sample_frame_05

**Category:** Frames
**Keywords:** `open`

## Description

Transmitting Property Value with Open Method

## Form Information

- **Form ID:** sample_frame_05
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnPopup | Button | text="Create Popup" |
| btnShow | Button | text="show property" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |

**Sample Data:**

```json
[
  {},
  {},
  {}
]
```

## Source Code

```javascript
this.btnPopup_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	nexacro.open("POPUP FRAME", "Sample::sample_frame_05.xfdl", nexacro.getApplication().getActiveFrame(), {name:"POPUP FRAME RENAME", uname:"TEST", db:this.Dataset00, up:this.parent});
};


this.btnShow_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
		this.alert(this.parent.name + "\n" + this.parent.uname + "\n" + this.parent.db.getRowCount());
		this.parent.up.set_titletext("TEST");
};
```

---

[Back to Frames](./README.md) | [Back to Index](../INDEX.md)