# sample_nexacro_decimal_02

**Category:** nexacroObject
**Keywords:** `addDecimal, subDecimal, mulDecimal, divDecimal`

## Description

Calculating Value Greater than 10q

## Form Information

- **Form ID:** DecimalPlus
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | - |
| Edit01 | Edit | - |
| Edit02 | Edit | - |
| Radio00 | Radio | text="add", value="add" |
| Button00 | Button | text="Calculate" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	var a = nexacro.Decimal(this.Edit00.value.toString());
	var b = nexacro.Decimal(this.Edit01.value.toString());
	
	switch(this.Radio00.value) {
	case 'add':
		a.addDecimal(b);
		break;
	case 'sub':
		a.subDecimal(b);
		break;
	case 'mul':
		a.mulDecimal(b);
		break;
	case 'div':
		a.divDecimal(b);
		break;		
	default:
	}
	
	this.Edit02.set_value(a.toString());
};
```

---

[Back to nexacroObject](./README.md) | [Back to Index](../INDEX.md)