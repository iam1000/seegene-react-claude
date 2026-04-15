# sample_nexacro_domparser_01

**Category:** nexacroObject
**Keywords:** `onreadystatechange, parseFromString`

## Description

onnecting XML Format Open API & Displaying in Grid Component

## Form Information

- **Form ID:** xmlSample
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| Grid00 | Grid | binddataset="Dataset00" |
| Grid01 | Grid | binddataset="Dataset01" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| date | STRING |
| status | STRING |
| temperature | STRING |
| pressure | STRING |
| humidity | STRING |
| icon | STRING |

### Dataset01

**Columns:**

| Column | Type |
|--------|------|
| country | STRING |
| city | STRING |
| id | STRING |
| locale | STRING |
| lang | STRING |

**Sample Data:**

```json
[
  {
    "country": "KR",
    "city": "Seoul",
    "id": 1835848,
    "locale": "ko-KR",
    "lang": "kr"
  },
  {
    "country": "KR",
    "city": "Incheon",
    "id": 1843564,
    "locale": "ko-KR",
    "lang": "kr"
  },
  {
    "country": "JP",
    "city": "Tokyo",
    "id": 1850147,
    "locale": "ja-JP",
    "lang": "ja"
  },
  {
    "country": "JP",
    "city": "Nagoya",
    "id": 1856057,
    "locale": "ja-JP",
    "lang": "ja"
  },
  {
    "country": "US",
    "city": "New York",
    "id": 5128581,
    "locale": "en-US",
    "lang": "en"
  }
]
```

## Source Code

```javascript
var that = this;
var appid = "7533cbd205a94e397ac3a01258c3fd4c";
/*
lang
English - en, Japanese - ja, Korean - kr
*/

this.fn_getWeatherInfo = function(id, lang)
{
	var objXhr = new XMLHttpRequest();
	objXhr.onreadystatechange = this.XHR_onreadystatechange;
	objXhr.open("POST", "https://api.openweathermap.org/data/2.5/forecast?mode=xml&units=metric&appid="+appid+"&id="+id+"&lang="+lang);
	objXhr.send();
};

this.XHR_onreadystatechange = function()
{
	if(this.readyState == 4)
	{
		that.fn_setData(this.responseText);
	}
}

/*
this.XHR_onload = function()
{
	trace("XHR_onload"+this.responseXML);
	if(this.status==200)
	{
		var objSerializer = new nexacro.XmlSerializer();
		var strXML = objSerializer.serializeToString(this.responseXML);
		that.strXML = strXML;
		that.TextArea00.set_value(strXML);

	}
}
*/

this.fn_setData = function(strXML)
{
	// Parsing
	var domDoc;
	var objDom = new nexacro.DomParser();
	domDoc = objDom.parseFromString(strXML);

	// Node value
	var timezone = domDoc.getElementsByTagName("timezone")[0].childNodes[0].data;
	var domElement = domDoc.getElementsByTagName("forecast")[0].childNodes;
	var domCnt = domElement.length;
	var msg="";
	
	this.Dataset00.set_enableevent(false);
	this.Dataset00.clearData();
	for(var i=0;i<domCnt;i++)
	{
		var rIdx = this.Dataset00.addRow();
		var domElement = domDoc.getElementsByTagName("forecast")[0].childNodes[i];

		this.Dataset00.setColumn(rIdx, 0, this.fn_localDate(domElement.getAttribute("to"), timezone)); // from date
		this.Dataset00.setColumn(rIdx, 1, domElement.getElementsByTagName("symbol")[0].getAttribute("name")); // status
		this.Dataset00.setColumn(rIdx, 2, domElement.getElementsByTagName("temperature")[0].getAttribute("value")); // temperature 
		this.Dataset00.setColumn(rIdx, 3, domElement.getElementsByTagName("pressure")[0].getAttribute("value")); // pressure  
		this.Dataset00.setColumn(rIdx, 4, domElement.getElementsByTagName("humidity")[0].getAttribute("value")); // humidity  
		this.Dataset00.setColumn(rIdx, 5, "http://openweathermap.org/img/wn/"+domElement.getElementsByTagName("symbol")[0].getAttribute("var")+".png");
	}
	this.Dataset00.set_enableevent(true);
	this.Grid00.scrollTo(0,0);
	
};

this.fn_localDate = function(strDate, timezone)
{
	/*var year = strDate.substring(0,4);
	var month = strDate.substring(5,7);
	var day = strDate.substring(8,10);
	var time = strDate.substring(11,13);*/
	var d = new nexacro.Date(strDate);
	d.addSeconds(Number(timezone));
	//return d.toLocaleString(this.locale, { hour12: false });
    var year = d.getFullYear().toString().padLeft(4, "0");
    var month = (d.getMonth()+1).toString().padLeft(2, "0");
    var day = d.getDate().toString().padLeft(2, "0");
	var hour = d.getHours().toString().padLeft(2, "0");
	var minute = d.getMinutes().toString().padLeft(2, "0");
	return year+"/"+month+"/"+day+" "+hour+":"+minute;
}

this.Grid01_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	var id = this.Dataset01.getColumn(e.row, 2);
	var locale = this.Dataset01.getColumn(e.row, 3);
	var lang = this.Dataset01.getColumn(e.row, 4);
	this.locale = locale;
	this.fn_getWeatherInfo(id, lang);
};
```

---

[Back to nexacroObject](./README.md) | [Back to Index](../INDEX.md)