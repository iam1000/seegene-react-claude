# React Integration

This explains how to use IBSheet8 in a React environment.

## Requirements

- **Node.js**: v18 or higher
- **React**: v18 or higher

## Development Steps

1. Load IBSheet JS files using `@ibsheet/loader`
2. Create ibsheet8 via the `@ibsheet/react` component
3. Utilize interfaces when using TypeScript

---

## 1. ibsheet-loader Configuration

IBSheet.js files are not distributed directly via npm, so place the files in the `public` folder and load them through the loader.

> **Note**: If you include ibsheet.js directly via `<script>` tags in the entry point HTML file, the loader is not needed.

### 1.1 Installation

```bash
npm i @ibsheet/loader
```

### 1.2 Loader Configuration and Loading

```js
import loader from '@ibsheet/loader';

const loaderOption = {
  name: 'ibsheet',
  baseUrl: '/ibsheet', // Based on the public/ibsheet folder
  // theme: 'mint',    // CSS theme (default if omitted)
  locales: ['en', 'ko'],
  plugins: ['dialog', 'common', 'excel'],
  license: 'YOUR_LICENSE_KEY'
};

loader.load(loaderOption);
```

**Notes**:
- `loader.load()` should be called **only once** at the app's entry point
- ibsheet.js, css, locale, and plugin files must exist at the `baseUrl` location

---

## 2. IBSheetReact Component

### 2.1 Installation

```bash
npm i @ibsheet/react
```

### 2.2 Basic Usage (JavaScript)

```jsx
import { IBSheetReact, IB_Preset } from '@ibsheet/react';
import { useRef } from 'react';

function App() {
  const mySheet = useRef(null);

  const options = {
    Cfg: { SearchMode: 0 },
    Cols: [
      { Header: 'No', Type: 'Int', Name: 'SEQ' },
      { Header: 'Name', Type: 'Text', Name: 'name' },
      { Header: 'Age', Type: 'Int', Name: 'age' },
      { Header: 'Date', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 }
    ],
    Events: {
      onBeforeChange: (evt) => {
        console.log(`${evt.oldval} → ${evt.val}`);
      }
    }
  };

  const data = [
    { name: 'John Doe', age: 30, sDate_Ymd: '20250922' },
    { name: 'Jane Smith', age: 25, sDate_Ymd: '20241108' }
  ];

  const customStyle = {
    width: '700px',
    height: '600px',
    border: '1px solid #ccc'
  };

  const handleAddRow = () => {
    mySheet.current.addRow();
  };

  return (
    <>
      <button onClick={handleAddRow}>Add Row</button>
      <IBSheetReact
        ref={mySheet}
        options={options}
        data={data}
        style={customStyle}
      />
    </>
  );
}

export default App;
```

### 2.3 IBSheetReact Props

| Prop | Type | Description |
|------|------|-------------|
| `ref` | `useRef` | ibsheet8 instance reference object |
| `options` | `object` | ibsheet8 initialization options (Cfg, Cols, Events, etc.) |
| `data` | `array` | Initial data (optional) |
| `style` | `object` | ibsheet8 container style (width, height, etc.) |

---

## 3. TypeScript Usage

You can utilize the TypeScript interfaces included in `@ibsheet/react`.

### 3.1 Type Import

```tsx
import {
  IBSheetReact,
  IB_Preset,
  type IBSheetInstance,  // ibsheet8 object type
  type IBSheetOptions,   // ibsheet8 initialization options type
  type IBSheetEvents     // Event parameter type
} from '@ibsheet/react';
```

### 3.2 TypeScript Example

```tsx
import {
  IBSheetReact,
  IB_Preset,
  type IBSheetInstance,
  type IBSheetOptions,
  type IBSheetEvents
} from '@ibsheet/react';
import { useRef } from 'react';

function App() {
  const mySheet = useRef<IBSheetInstance | null>(null);

  const handleAfterChange: IBSheetEvents['onAfterChange'] = (evt) => {
    const headerRow = evt.sheet.getRowById('Header');
    const colName = evt.sheet.getString(headerRow, evt.col);
    alert(`The value of column '${colName}' has been changed to ${evt.val}.`);
  };

  const options: IBSheetOptions = {
    Cfg: { SearchMode: 0 },
    Cols: [
      { Header: 'No', Type: 'Text', Name: 'SEQ', Width: 60 },
      { Header: 'Name', Type: 'Text', Name: 'name', Width: 120, RelWidth: 1 },
      { Header: 'Age', Type: 'Int', Name: 'age', Width: 80 },
      { Header: 'Hire Date', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 },
      { Header: '', Type: 'Button', Name: 'confirm', DefaultValue: 'Confirm' }
    ],
    Events: {
      onAfterChange: handleAfterChange
    }
  };

  const data = [
    { id: '1', name: 'John Doe', age: 30, sDate_Ymd: '20250923' },
    { id: '2', name: 'Jane Smith', age: 25, sDate_Ymd: '20251002' }
  ];

  const addRow = () => {
    mySheet.current?.addRow();
  };

  const exportXls = () => {
    mySheet.current?.exportData({ fileName: 'export.xlsx' });
  };

  const customStyle = {
    width: '800px',
    height: '600px',
    border: '1px solid #ccc'
  };

  return (
    <div>
      <div>
        <button onClick={addRow}>Add Row</button>
        <button onClick={exportXls}>Export Excel</button>
      </div>
      <IBSheetReact
        ref={mySheet}
        options={options}
        data={data}
        style={customStyle}
      />
    </div>
  );
}

export default App;
```

---

## Supported Versions

| Product | Version | Notes |
|---------|---------|-------|
| IBSheet Core | 8.3.0.0 | Added React component support |
