# sample_grid_87

**Category:** Grid Application
**Keywords:** `copyRow`

## Description

Displaying null Value on Top when Sorting Data

## Form Information

- **Form ID:** sample_grid_87
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Button00 | Button | text="S:-Column0" |
| Button01 | Button | text="null check" |

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
  {
    "Column0": 1,
    "Column1": "A"
  },
  {
    "Column1": "B"
  },
  {
    "Column0": 2,
    "Column1": "C"
  },
  {
    "Column1": "D"
  },
  {
    "Column0": 4,
    "Column1": "E"
  }
]
```

### dsTemp

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |
| Column1 | STRING |

## Source Code

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.Dataset00.set_keystring("S:-Column0");
};

this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	this.dsTemp.clearData();
	
	for(var i=0 ; i < this.Dataset00.rowcount; i++){
		if(this.Dataset00.getColumn(i,"Column0") == null){
			var nRow = this.dsTemp.addRow();
			this.dsTemp.copyRow(nRow,this.Dataset00,i);
		}
	}
	
	for(var k=this.Dataset00.rowcount-1 ; k >= 0; k--){
		if(this.Dataset00.getColumn(k,"Column0") == null){
			this.Dataset00.deleteRow(k);
		}
	}

	this.Dataset00.set_keystring( "S:-Column0" );
	
	for(var l=0; l < this.dsTemp.rowcount; l++){
		this.Dataset00.insertRow(l);
		this.Dataset00.copyRow(l,this.dsTemp,l);
	}
};
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)