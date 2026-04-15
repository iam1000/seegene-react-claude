# Attribute Formula (attribute+Formula)

A feature that dynamically sets column attributes (`CanEdit`, `Color`, `TextColor`, `Format`, etc.) through Formulas.

## Required Settings

To use attribute Formulas, you must set `CanFormula` and `CalcOrder`.

```javascript
Def: {
  Row: {
    CanFormula: 1,
    // Format: columnName+attributeName, written without spaces
    CalcOrder: "yearSumColor,rateCanEdit"
  }
}
```

> **Note**: If there are spaces when writing names in `CalcOrder`, the Formula will not work correctly.

---

## Basic Syntax

Declare it as a column attribute in the format `attributeName + Formula`.

```javascript
Cols: [
  {
    Type: "Int", Name: "yearSum",
    ColorFormula: function(fr) {
      return fr.Value > 100 ? '#FF0000' : '#FFFFAA';
    }
  },
  {
    Type: "Text", Name: "Total",
    // Function method (param contents: Row, )
    FormatFormula: function(param) {
      if (param.Row["SaupJuminNo"].length == 10) {
        return "###-##-#####";
      } else {
        return "######-#######";
      }
    }
  }
]
```

### Formula Function Parameter Properties

| Type | Description |
|------|-------------|
| `Row` | The row object currently being calculated |
| `Col` | The column name currently being calculated |
| `Value` | The value of Row[Col] |
| `Attr` | The value set in CalcOrder (columnName+attributeName) |

> **Note**: It is recommended to use the function method rather than the string method (CSP issues).

---

## Key Attribute Formulas

### ColorFormula -- Background Color

```javascript
{
  Type: "Int", Name: "sCount",
  ColorFormula: function(fr) {
    if (fr.Value < 0) return "rgb(245, 226, 24)";
    if (fr.Value == 0) return "";
    return "rgb(11, 231, 109)";
  }
}
```

### TextColorFormula -- Text Color

```javascript
{
  Type: "Int", Name: "sMoney",
  TextColorFormula: function(fr) {
    return fr.Value < 3000 ? '#ff0000' : '#f0694e';
  }
}
```

### CanEditFormula -- Editable or Not

```javascript
{
  Type: "Text", Name: "Total",
  CanEditFormula: function(fr) {
    return fr.Row["CHK"] == 1 && fr.Row["AMT"] > 10 ? 1 : 0;
  }
}

{
  Type: "Float", Name: "rate",
  CanEditFormula: function(fr) {
    return fr.Row["CHK"] == 1 && fr.Row["yearSum"] > 150;
  }
}
```

### FormatFormula -- Display Format

```javascript
{
  Type: "Text", Name: "bizNo",
  FormatFormula: function(param) {
    if (param.Row["SaupJuminNo"].length == 10) {
      return "###-##-#####";
    } else {
      return "######-#######";
    }
  }
}
```

---

## Full Example

```javascript
var options = {};

options.Def = {
  Row: {
    CanFormula: 1,
    // Specify calculation order in columnName+attributeName format (no spaces allowed)
    CalcOrder: "sCountColor,sMoneyTextColor,sResult,yearSumColor,rateCanEdit"
  }
};

options.Cols = [
  { Type: "Bool", Name: "CHK" },
  {
    Type: "Int", Name: "sCount",
    // Change background color based on value
    ColorFormula: function(fr) {
      if (fr.Value < 0) return "rgb(245, 226, 24)";
      if (fr.Value == 0) return "";
      return "rgb(11, 231, 109)";
    }
  },
  {
    Type: "Int", Name: "sMoney",
    // Change text color based on value
    TextColorFormula: function(fr) {
      return fr.Value < 3000 ? '#ff0000' : '#f0694e';
    }
  },
  {
    Type: "Float", Name: "sResult",
    // Standard Formula (value calculation)
    Formula: function(fr) {
      return fr.Row["sCount"] * fr.Row["sPrice"] - (fr.Row["sCount"] * fr.Row["sPrice"] * fr.Row["sDiscount"]) / 100;
    }
  },
  {
    Type: "Int", Name: "yearSum",
    // Function method background color Formula
    ColorFormula: function(fr) {
      return fr.Value > 100 ? '#FF0000' : '#FFFFAA';
    }
  },
  {
    Type: "Float", Name: "rate",
    // Function method editable Formula
    CanEditFormula: function(fr) {
      return fr.Row["CHK"] == 1 && fr.Row["yearSum"] > 150;
    }
  }
];
```

---

## When Used Together with Standard Formula

When using attribute Formulas and standard Formulas together, the **column name** where the standard Formula is declared must also be included in `CalcOrder`.

```javascript
Def: {
  Row: {
    CanFormula: 1,
    // sResult: standard Formula, sCountColor: attribute Formula
    CalcOrder: "sResult,sCountColor,rateCanEdit"
  }
}

Cols: [
  {
    Type: "Float", Name: "sResult",
    Formula: function(fr) {                    // Standard Formula
      return fr.Row["sCount"] * fr.Row["sPrice"];
    }
  },
  {
    Type: "Int", Name: "sCount",
    ColorFormula: function(fr) {               // Attribute Formula
      return fr.Value < 0 ? '#FF0000' : '';
    }
  },
  {
    Type: "Float", Name: "rate",
    CanEditFormula: function(fr) {             // Attribute Formula
      return fr.Row["CHK"] == 1 ? 1 : 0;
    }
  }
]
```

---

## Checklist

- Whether `CanFormula: 1` is set
- Whether registered in `CalcOrder` in `columnName+attributeName` format
- Whether `CalcOrder` entries are written without spaces
- Whether the column name is included in `CalcOrder` when used together with standard Formulas
- Whether a value is always `return`ed when using the function method
