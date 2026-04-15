declare global {
  interface Window {
    IBSheet: IBSheetStatic
  }

  interface IBSheetStatic {
    create(options: IBSheetCreateOptions): IBSheetInstance
    findById(id: string): IBSheetInstance | null
  }

  interface IBSheetCreateOptions {
    id: string
    el: HTMLElement
    options: {
      Cfg?: Record<string, unknown>
      Cols?: IBSheetCol[]
      [key: string]: unknown
    }
  }

  interface IBSheetCol {
    Header: string
    Name: string
    Type?: string
    Width?: number
    Align?: string
    EditType?: string
    [key: string]: unknown
  }

  interface IBSheetInstance {
    loadSearchData(data: unknown[]): void
    removeAll(): void
    dispose(): void
    getRowCount(): number
    getValue(row: number, col: string): unknown
    [key: string]: unknown
  }
}

export {}
