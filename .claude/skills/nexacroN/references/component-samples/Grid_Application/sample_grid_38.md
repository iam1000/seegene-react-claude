# sample_grid_38

**Category:** Grid Application
**Keywords:** `visible, filter,clearData,copyData,getRowcount`

## Description

Implementing Page Function

## Form Information

- **Form ID:** sample_grid_38
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="ds_client", text="" |
| div_page | Div | text="Div00", visible="false" |
| Button00 | Button | text="Inquire" |

## Datasets

### ds_server

**Columns:**

| Column | Type |
|--------|------|
| BOOK_NM | STRING |
| EDITOR_NM | STRING |
| PRESS_NM | STRING |
| PRICE | INT |
| ROWNO | INT |

**Sample Data:**

```json
[
  {
    "BOOK_NM": "ABSENT ONE; TRANS. BY K.E. SEMMEL.",
    "EDITOR_NM": "ADLER-OLSEN, JUSSI.",
    "PRESS_NM": "DUTTON",
    "PRICE": "",
    "ROWNO": 1
  },
  {
    "BOOK_NM": "ABSOLUTIST. (EXPORT/IRE)",
    "EDITOR_NM": "JOHN BOYNE.",
    "PRESS_NM": "DOUBLEDAY",
    "PRICE": "",
    "ROWNO": 2
  },
  {
    "BOOK_NM": "ACAPULCO: NEW AND SELECTED POEMS.",
    "EDITOR_NM": "MURRAY, NICHOLAS.",
    "PRESS_NM": "MELOS PRESS",
    "PRICE": "",
    "ROWNO": 3
  },
  {
    "BOOK_NM": "ACROSS A BRIDGE OF DREAMS.",
    "EDITOR_NM": "DOWNER, LESLEY.",
    "PRESS_NM": "BANTAM",
    "PRICE": "",
    "ROWNO": 4
  },
  {
    "BOOK_NM": "ADRIFT IN SOHO: A NOVEL.",
    "EDITOR_NM": "WILSON, COLIN, 1931-",
    "PRESS_NM": "FIVE LEAVES",
    "PRICE": "",
    "ROWNO": 5
  }
]
```

### ds_client

**Columns:**

| Column | Type |
|--------|------|
| BOOK_NM | STRING |
| EDITOR_NM | STRING |
| PRESS_NM | STRING |
| PRICE | INT |
| ROWNO | INT |

**Sample Data:**

```json
[
  {
    "BOOK_NM": "",
    "EDITOR_NM": "",
    "PRESS_NM": "",
    "PRICE": "",
    "ROWNO": ""
  }
]
```

## Source Code

```javascript
this.gv_iStartPageNo    = 0;		/* current page number */
this.gv_iUnitSelRowNo   = 100;	/* number of rows to retrieve when server is called once */
this.gv_iStartSelRowNo  = 1;		/* row number to start when calling server */
this.gv_iMaxPageNum     = 10;	/* maximum page number to display on screen */
this.gv_iServerRowCount = 0;	/* number of rows retrieved from the server */

/*
list inquire
*/
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro .ClickEventInfo)
{
	obj.set_visible(false);
	this.div_page.set_visible(true);
	
	/* transaction call */
	
	this.fn_callback("tr1", 0, "success");	
};

/*
callback function
*/
this.fn_callback = function(sTrId, ErrorCode, ErrorMsg)
{
	if (sTrId == "tr1")	
	{
		if (ErrorCode < 0)
		{
			trace("Error");
		}
		else
		{
			var iLastRow = this.gv_iStartPageNo * this.gv_iUnitSelRowNo;
			this.ds_server.filter("ROWNO >= "+(iLastRow + this.gv_iStartSelRowNo)+" && ROWNO <= "+(iLastRow + this.gv_iUnitSelRowNo));
		
			if (this.ds_server.getRowCount() == 0)
			{
				alert("No more data to view.");
				this.ds_server.filter("");
				return;
			}
			else
			{
				/* if transaction call using, delete the three lines below */
				this.ds_client.clearData();
				this.ds_client.copyData(this.ds_server, true);
				this.ds_client.filter("ROWNO >= "+(iLastRow + this.gv_iStartSelRowNo)+" && ROWNO <= "+(iLastRow + this.gv_iMaxPageNum));
								
				this.gv_iServerRowCount = this.ds_server.getRowCount();
				this.fn_SetStyle();
				this.fn_SetPageNo();
				
				this.div_page.form.stt_0.set_color("red");
			}
		}
	}
}

/*
click event function for page number
*/
this.div_page_stt_onclick = function(obj:Static,  e:nexacro.ClickEventInfo)
{
	var iNo = new Number(obj.text);
	var iFirstNum = (iNo-1) * this.gv_iMaxPageNum + 1;
	var iLastNum = iFirstNum + this.gv_iMaxPageNum;

	this.fn_SetStyle();
	obj.set_color("red");
	
	this.ds_client.filter("");
	this.ds_client.filter("ROWNO >= " + iFirstNum+" && ROWNO < " + iLastNum);
}

/*
click event function for prev
*/
this.div_page_stt_prev_onclick = function(obj:Static,  e:nexacro.ClickEventInfo)
{

	this.gv_iStartPageNo = this.gv_iStartPageNo - 1;
	
	/* transaction function call */
	
	this.fn_callback("tr1", 0, "success");
}

/*
click event function for next
*/
this.div_page_stt_next_onclick = function(obj:Static,  e:nexacro.ClickEventInfo)
{

	this.gv_iStartPageNo = this.gv_iStartPageNo + 1;
	
	/* transaction function call */
	
	this.fn_callback("tr1", 0, "success");
}

/*
page number setting
*/
this.fn_SetPageNo = function()
{
	var sPage = this.gv_iStartPageNo * this.gv_iMaxPageNum;
	
	/* prev button setting */
	if (this.gv_iStartPageNo < 1)
	{
		this.div_page.form.stt_prev.set_visible(false);
	} 
	else 
	{
		this.div_page.form.stt_prev.set_visible(true);
	}

	/* next button setting */
	if (this.gv_iServerRowCount < this.gv_iUnitSelRowNo)
	{
		this.div_page.form.stt_next.set_visible(false);
	}
	else
	{
		this.div_page.form.stt_next.set_visible(true);
	}

	/* page button setting */
	for (var i = 0; i < this.gv_iMaxPageNum; i++)
	{
		this.div_page.form.components["stt_"+i].set_visible(true);
		
		this.div_page.form.components["stt_"+i].set_text(sPage+i+1);
		
		if (this.gv_iServerRowCount < (i * this.gv_iMaxPageNum))
		{
			this.div_page.form.components["stt_"+i].set_visible(false);
		} 
		else 
		{
			this.div_page.form.components["stt_"+i].set_visible(true);
		}
	}	
}

/*
style settings
*/
this.fn_SetStyle = function()
{
	for (var i = 0; i < this.gv_iMaxPageNum; i++)
	{
		this.div_page.form.components["stt_"+i].set_color("blue");			
	}	
}
```

---

[Back to Grid Application](./README.md) | [Back to Index](../INDEX.md)