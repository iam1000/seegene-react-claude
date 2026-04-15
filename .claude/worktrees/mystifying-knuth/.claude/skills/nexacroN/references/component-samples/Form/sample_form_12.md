# sample_form_12

**Category:** Form
**Keywords:** `instanceof`

## Description

Modifying All Component Properties

## Form Information

- **Form ID:** sample_form_12
- **Size:** 770 x 540

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Edit00 | Edit | value="Edit", text="Edit" |
| Edit01 | Edit | value="Edit", text="Edit" |
| Edit02 | Edit | value="Edit", text="Edit" |
| Edit03 | Edit | value="Edit", text="Edit" |
| Edit04 | Edit | value="Edit", text="Edit" |
| Combo00 | Combo | text="Combo", value="" |
| Combo01 | Combo | text="Combo", value="" |
| Combo02 | Combo | text="Combo", value="" |
| Combo03 | Combo | text="Combo", value="" |
| Combo04 | Combo | text="Combo", value="" |
| Button00 | Button | text="Check" |
| Button01 | Button | text="Button" |
| Button02 | Button | text="Button" |
| Button03 | Button | text="Button" |
| Button04 | Button | text="Button" |
| Button05 | Button | text="Button" |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	for(var i = 0; i < this.components.length; i++)
	{
		if(this.components[i] instanceof nexacro.Edit)
		{
			this.components[i].set_background("lavenderblush");
		}
		else if(this.components[i] instanceof nexacro.Combo)
		{
			this.components[i].set_background("beige");
		}
		else if(this.components[i] instanceof nexacro.Button)
		{
			if(this.components[i].id != obj.id)
				this.components[i].set_background("lightgreen");
		}
	}
};
```

---

[Back to Form](./README.md) | [Back to Index](../INDEX.md)