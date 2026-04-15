# sample_edit_06

**Category:** Edit

## Description

Binding Dataset to Edit

## Form Information

- **Form ID:** sample_edit_06
- **Size:** 1024 x 768

## Components

| ID | Type | Key Properties |
|----|------|----------------|
| edit_name | Edit | value="" |
| edit_addr | Edit | - |
| edit_company | Edit | value="" |
| edit_dept | Edit | value="" |
| edit_mail | Edit | value="" |
| Grid00 | Grid | binddataset="Dataset00" |
| Static00 | Static | text="Name:" |
| Static01 | Static | text="Address:" |
| Static02 | Static | text="Company:" |
| Static03 | Static | text="Department:" |
| Static04 | Static | text="E-Mail:" |

## Datasets

### Dataset00

**Columns:**

| Column | Type |
|--------|------|
| Name | STRING |
| Address | STRING |
| Company | STRING |
| Department | STRING |
| EMail | STRING |

**Sample Data:**

```json
[
  {
    "Name": "john",
    "Address": "Califonia, USA",
    "Company": "1dollar",
    "Department": "Pre-sales",
    "EMail": "pre-sales@1dollar.com"
  },
  {
    "Name": "james",
    "Address": "Seoul, KOREA",
    "Company": "EBOT",
    "Department": "Consulting",
    "EMail": "consulting@ebot.com"
  },
  {
    "Name": "donald",
    "Address": "Barcelona, Spain",
    "Company": "EBOT",
    "Department": "Research Institute",
    "EMail": "research@ebot.co.kr"
  },
  {
    "Name": "lisa",
    "Address": "London, UK",
    "Company": "1dollar",
    "Department": "Quality Assurance",
    "EMail": "quality@1dollar.co.jp"
  }
]
```

---

[Back to Edit](./README.md) | [Back to Index](../INDEX.md)