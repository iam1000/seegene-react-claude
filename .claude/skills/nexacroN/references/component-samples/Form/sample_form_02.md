# sample_form_02

**Category:** Form
**Keywords:** `stepcount, positionstep, setStepIndex`

## Description

Dividing Screen into Steps

## Form Information

- **Form ID:** sample_form_02
- **Size:** 200 x 300

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| btnStep1 | Button | text="STEP1" |
| btnStep2 | Button | text="STEP2" |
| btnStep3 | Button | text="STEP3" |
| btnGoStep3 | Button | text="Go STEP3" |

## Source Code

```javascript
this.btnGoStep3_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
		this.setStepIndex(2);
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)