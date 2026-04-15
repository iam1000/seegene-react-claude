# sample_webbrowser_09

**Category:** WebBrowser
**Keywords:** `url`

## Description

Using MS Office Viewer

## Form Information

- **Form ID:** sample_webbrowser_09
- **Size:** 1280 x 720

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| WebBrowser00 | WebBrowser | - |
| Grid00 | Grid | binddataset="Dataset00" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Column0 | STRING |

**Sample Data:**

```json
[
  {
    "Column0": "http://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx"
  },
  {
    "Column0": "http://file-examples.com/wp-content/uploads/2017/02/file_example_XLSX_10.xlsx"
  },
  {
    "Column0": "http://file-examples.com/wp-content/uploads/2017/08/file_example_PPT_250kB.ppt"
  },
  {
    "Column0": "http://file-examples.com/wp-content/uploads/2017/10/file-sample_100kB.odt"
  }
]
```

## Source Code

```javascript
this.Grid00_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
{
	this.WebBrowser00.set_url("https://view.officeapps.live.com/op/embed.aspx?src="+encodeURI(this.Dataset00.getColumn(e.row,0)));
};
```

---

[Back to WebBrowser](./README.md) | [Back to Index](../INDEX.md)