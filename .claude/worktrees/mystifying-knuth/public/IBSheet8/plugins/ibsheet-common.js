/**
 * 제 품: IBSheet8 - Common Plugin
 * 버 전: v1.0.33 (20260319-14)
 * 회 사: (주)아이비리더스
 * 주 소: https://www.ibsheet.com
 * 전 화: 1644-5615
 */
;((window, document) => {
  /*CommonOptions 설정
   * 모든 시트에 동일하게 적용하고자 하는 설정을 CommonOptions에 등록합니다.
   * 해당 파일은 반드시 ibsheet.js 파일보다 뒤에 include 되어야 합니다.
   */
  var _IBSheet = window['IBSheet']
  if (_IBSheet == null) {
    throw new Error('[ibsheet-common] undefined global object: IBSheet')
  }

  // IBSheet Plugins Object
  var Fn = _IBSheet['Plugins']

  if (!Fn.PluginVers) Fn.PluginVers = {}
  Fn.PluginVers.ibcommon = {
    name: 'ibcommon',
    version: '1.0.33-20260319-14',
  }

  _IBSheet.CommonOptions = {
    Cfg: {
      Export: {
        Url: '../assets/ibsheet/jsp/',
      }, // 엑셀다운 URL
      Alternate: 2, // 홀짝 행에 대한 배경색 설정
      InfoRowConfig: {
        Visible: 1,
        Layout: ['Count'],
        Space: 'Top',
      }, // 건수 정보 표시
      GroupFormat: " <span style='color:red'>{%s}</span> <span style='color:blue'>({%c}건)</span>", // 그룹핑 컬럼명은 빨강색, 건수는 파란색으로 표시
      HeaderSortMode: 1, // 클릭한 순서의 역순으로 대분류/중분류/소분류가 되며, 마지막으로 클릭하는 헤더가 대분류가 되고 기존의 소분류였던 컬럼은 소팅 취소
      HeaderMerge: 1, // 헤더영역 자동 병합
      PrevColumnMerge: 1, // 앞컬럼 기준 병합 사용 여부

      SearchCells: 1, // 찾기 기능 셀단위/행단위 선택
      ShowHint: 0, //마우스 hover시 hint 표시기능

      MaxPages: 6, // SearchMode:2인 경우 한번에 갖고 있는 페이지 수(클수록 브라우져의 부담이 커짐)
      MaxSort: 3, // 최대 소팅 가능 컬럼수(4개 이상인 경우 느려질 수 있음)

      StorageSession: 1, // 개인화 기능(컬럼정보 저장) 사용 여부
      MsgLocale: 'Ko', // 언어 메시지 파일 기본 설정 값
      PasteStrictMode: 1, // 숫자 컬럼에 Ctrl + v 붙여넣기 시 엄격하게 체크하여 붙여넣기
      StorageKeyPrefix: window['sampleName'] ? window['sampleName'] : document.URL, // 저장 키 prefix 설정
    },
    Def: {
      Header: {
        //헤더 영역 행에 대한 설정
        Menu: {
          Items: [
            {
              Name: 'ColDisplayMenu',
            },
            {
              Name: '컬럼 정보 저장',
            },
            {
              Name: '컬럼 정보 저장 취소',
            },
            {
              Name: '*-',
            },
            {
              Name: '필터행 생성',
            },
            {
              Name: '필터 감추기',
            },
          ],
          OnSave: function (item, data) {
            if (item) {
              switch (item.Name) {
                case '컬럼 정보 저장':
                  this.Sheet.saveCurrentInfo()
                  break
                case '컬럼 정보 저장 취소':
                  this.Sheet.clearCurrentInfo()
                  this.Sheet.showMessageTime({
                    message:
                      '컬럼 정보를 삭제하였습니다.<br>새로고침하시면 초기 설정의 시트를 확인하실 수 있습니다.',
                  })
                  break
                case '필터행 생성':
                  this.Sheet.showFilterRow()
                  break
                case '필터 감추기':
                  this.Sheet.hideFilterRow()
                  break
              }
            }
          },
        },
      },

      //데이터 영역 모든 행에 대한 설정
      Row: {},
    },
    Events: {
      onKeyDown: (evtParam) => {
        if (evtParam.prefix === 'CtrlAlt' && evtParam.key == 84) {
          evtParam.sheet.createPivotDialog()
        }
      },
    },
  }
  /**
   * 컬럼 표시 여부 컨텍스트 메뉴 동작을 제어하는 데 사용됩니다.
   * 시트 외부 요소에 아래 함수들을 사용하여 컬럼 표시 여부 컨텍스트 메뉴를 사용할 수 있습니다.
   *
   * getContextMenu: 시트의 보여지는 컬럼을 기준으로 메뉴 아이템을 생성합니다.
   * setItemBool: 컬럼 표시 여부 메뉴의 체크박스의 체크 여부를 해당 시트에서 표시된 열과 동기화합니다.
   * toggleCols: 시트에 표시되는 열을 설정합니다.
   */
  _IBSheet.MenuFunctions = {
    getContextMenu: (sheet) => {
      if (sheet) return sheet.getColDisplayMenu()
    },
    setItemBool: (items, sheet) => {
      if (items && sheet) sheet.syncDisplayBool(items)
    },
    toggleCols: (sheet, cols) => {
      if (sheet && cols) sheet.toggleColDisplay(cols)
    },
  }

  window.IB_Preset = {
    // 날짜 시간 포멧
    YMD: {
      Type: 'Date',
      Align: 'Center',
      Width: 110,
      Format: 'yyyy/MM/dd',
      DataFormat: 'yyyyMMdd',
      EditFormat: 'yyyyMMdd',
      EmptyValue: "<span style='color:#AAA'>년,월,일 순으로 숫자만 입력해 주세요.</span>",
    },
    YM: {
      Type: 'Date',
      Align: 'Center',
      Width: 80,
      Format: 'yyyy/MM',
      DataFormat: 'yyyyMM',
      EditFormat: 'yyyyMM',
      EmptyValue: "<span style='color:#AAA'>년,월 순으로 숫자만 입력해 주세요.</span>",
    },
    MD: {
      Type: 'Date',
      Align: 'Center',
      Width: 60,
      Format: 'MM/dd',
      EditFormat: 'MMdd',
      DataFormat: 'MMdd',
      EmptyValue: "<span style='color:#AAA'>월,일 순으로 숫자만 입력해 주세요.</span>",
    },
    HMS: {
      Type: 'Date',
      Align: 'Center',
      Width: 70,
      Format: 'HH:mm:ss',
      EditFormat: 'HHmmss',
      DataFormat: 'HHmmss',
      EmptyValue: "<span style='color:#AAA'>시,분,초 순으로 8개 숫자만 입력해 주세요.</span>",
    },
    HM: {
      Type: 'Date',
      Align: 'Center',
      Width: 70,
      Format: 'HH:mm',
      EditFormat: 'HHmm',
      DataFormat: 'HHmm',
      EmptyValue: "<span style='color:#AAA'>시,분 순으로 4개 숫자만 입력해 주세요.</span>",
    },
    YMDHMS: {
      Type: 'Date',
      Align: 'Center',
      Format: 'yyyy/MM/dd HH:mm:ss',
      Width: 150,
      EditFormat: 'yyyyMMddHHmmss',
      DataFormat: 'yyyyMMddHHmmss',
      EmptyValue: "<span style='color:#AAA'>숫자만 입력(ex:20190514153020)</span>",
    },
    YMDHM: {
      Type: 'Date',
      Align: 'Center',
      Format: 'yyyy/MM/dd HH:mm',
      Width: 150,
      EditFormat: 'yyyyMMddHHmm',
      DataFormat: 'yyyyMMddHHmm',
      EmptyValue: "<span style='color:#AAA'>숫자만 입력(ex:201905141530)</span>",
    },
    MDY: {
      Type: 'Date',
      Align: 'Center',
      Format: 'MM-dd-yyyy',
      Width: 110,
      EditFormat: 'MMddyyyy',
      DataFormat: 'yyyyMMdd',
      EmptyValue: "<span style='color:#AAA'>월,일,년 순으로 숫자만 입력해 주세요.</span>",
    },
    DMY: {
      Type: 'Date',
      Align: 'Center',
      Format: 'dd-MM-yyyy',
      Width: 110,
      EditFormat: 'ddMMyyyy',
      DataFormat: 'yyyyMMdd',
      EmptyValue: "<span style='color:#AAA'>일,월,년 순으로 숫자만 입력해 주세요.</span>",
    },

    // 숫자 포멧
    Integer: {
      Type: 'Int',
      Align: 'Right',
      Format: '#,##0',
      Width: 100,
    },
    NullInteger: {
      Type: 'Int',
      Align: 'Right',
      Format: '#,###',
      Width: 100,
    },
    Float: {
      Type: 'Float',
      Align: 'Right',
      Format: '#,##0.######',
      Width: 100,
    },
    NullFloat: {
      Type: 'Float',
      Align: 'Right',
      Format: '#,###.######',
      Width: 100,
    },

    // 기타포멧
    IdNo: {
      Type: 'Text',
      Align: 'Center',
      CustomFormat: 'IdNo',
    },
    SaupNo: {},
    PostNo: {},
    CardNo: {},
    PhoneNo: {},
    Number: {},

    // ibsheet7 migration
    // Popup,PopupEdit
    Popup: {
      Type: 'Text',
      Width: 100,
      Align: 'Center',
      ButtonFormula: (fr) =>
        fr.Sheet.getCanEdit(fr.Row, fr.Col) ? fr.Sheet.Cols[fr.Col].Button : '',
      Button:
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgNjQwIDY0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1Ij48ZGVmcz48cGF0aCBkPSJNMjc5LjczIDM0LjdMMjg5LjAxIDM1LjY0TDI5OC4xNyAzNi45NUwzMDcuMjIgMzguNjFMMzE2LjEzIDQwLjYyTDMyNC45MiA0Mi45OEwzMzMuNTYgNDUuNjZMMzQyLjA1IDQ4LjY4TDM1MC4zOCA1Mi4wMUwzNTguNTUgNTUuNjZMMzY2LjU1IDU5LjYxTDM3NC4zNyA2My44NkwzODIuMDEgNjguMzlMMzg5LjQ1IDczLjIxTDM5Ni42OCA3OC4zMUw0MDMuNzEgODMuNjdMNDEwLjUzIDg5LjNMNDE3LjEyIDk1LjE3TDQyMy40OCAxMDEuMjlMNDI5LjYgMTA3LjY1TDQzNS40OCAxMTQuMjRMNDQxLjEgMTIxLjA2TDQ0Ni40NiAxMjguMDlMNDUxLjU2IDEzNS4zM0w0NTYuMzggMTQyLjc3TDQ2MC45MiAxNTAuNEw0NjUuMTcgMTU4LjIyTDQ2OS4xMiAxNjYuMjJMNDcyLjc2IDE3NC4zOUw0NzYuMSAxODIuNzJMNDc5LjExIDE5MS4yMkw0ODEuOCAxOTkuODZMNDg0LjE1IDIwOC42NEw0ODYuMTYgMjE3LjU2TDQ4Ny44MiAyMjYuNkw0ODkuMTMgMjM1Ljc2TDQ5MC4wNyAyNDUuMDRMNDkwLjY0IDI1NC40Mkw0OTAuODMgMjYzLjlMNDkwLjY0IDI3My4zOEw0OTAuMDcgMjgyLjc2TDQ4OS4xMyAyOTIuMDRMNDg3LjgyIDMwMS4yTDQ4Ni4xNiAzMTAuMjVMNDg0LjE1IDMxOS4xNkw0ODEuOCAzMjcuOTVMNDc5LjExIDMzNi41OUw0NzYuMSAzNDUuMDhMNDcyLjc2IDM1My40MUw0NjkuMTIgMzYxLjU4TDQ2NS4xNyAzNjkuNThMNDYwLjkyIDM3Ny40TDQ1Ni4zOCAzODUuMDRMNDUxLjczIDM5Mi4yMkw1OTYuOTcgNTM3LjQ2TDUzNC40MyA2MDBMMzg5LjE5IDQ1NC43NkwzODIuMDEgNDU5LjQxTDM3NC4zNyA0NjMuOTVMMzY2LjU1IDQ2OC4yTDM1OC41NSA0NzIuMTVMMzUwLjM4IDQ3NS43OUwzNDIuMDUgNDc5LjEzTDMzMy41NiA0ODIuMTRMMzI0LjkyIDQ4NC44M0wzMTYuMTMgNDg3LjE4TDMwNy4yMiA0ODkuMTlMMjk4LjE3IDQ5MC44NUwyODkuMDEgNDkyLjE2TDI3OS43MyA0OTMuMUwyNzAuMzUgNDkzLjY3TDI2MC44NyA0OTMuODZMMjUxLjM5IDQ5My42N0wyNDIuMDEgNDkzLjFMMjMyLjczIDQ5Mi4xNkwyMjMuNTcgNDkwLjg1TDIxNC41MyA0ODkuMTlMMjA1LjYxIDQ4Ny4xOEwxOTYuODMgNDg0LjgzTDE4OC4xOSA0ODIuMTRMMTc5LjY5IDQ3OS4xM0wxNzEuMzYgNDc1Ljc5TDE2My4xOSA0NzIuMTVMMTU1LjE5IDQ2OC4yTDE0Ny4zNyA0NjMuOTVMMTM5Ljc0IDQ1OS40MUwxMzIuMyA0NTQuNTlMMTI1LjA2IDQ0OS40OUwxMTguMDMgNDQ0LjEzTDExMS4yMSA0MzguNTFMMTA0LjYyIDQzMi42M0w5OC4yNiA0MjYuNTFMOTIuMTQgNDIwLjE1TDg2LjI3IDQxMy41Nkw4MC42NCA0MDYuNzRMNzUuMjggMzk5LjcxTDcwLjE4IDM5Mi40OEw2NS4zNiAzODUuMDRMNjAuODIgMzc3LjRMNTYuNTggMzY5LjU4TDUyLjYzIDM2MS41OEw0OC45OCAzNTMuNDFMNDUuNjUgMzQ1LjA4TDQyLjYzIDMzNi41OUwzOS45NSAzMjcuOTVMMzcuNTkgMzE5LjE2TDM1LjU4IDMxMC4yNUwzMy45MiAzMDEuMkwzMi42MSAyOTIuMDRMMzEuNjcgMjgyLjc2TDMxLjEgMjczLjM4TDMwLjkxIDI2My45TDMxLjEgMjU0LjQyTDMxLjY3IDI0NS4wNEwzMi42MSAyMzUuNzZMMzMuOTIgMjI2LjZMMzUuNTggMjE3LjU2TDM3LjU5IDIwOC42NEwzOS45NSAxOTkuODZMNDIuNjMgMTkxLjIyTDQ1LjY1IDE4Mi43Mkw0OC45OCAxNzQuMzlMNTIuNjMgMTY2LjIyTDU2LjU4IDE1OC4yMkw2MC44MiAxNTAuNEw2NS4zNiAxNDIuNzdMNzAuMTggMTM1LjMzTDc1LjI4IDEyOC4wOUw4MC42NCAxMjEuMDZMODYuMjcgMTE0LjI0TDkyLjE0IDEwNy42NUw5OC4yNiAxMDEuMjlMMTA0LjYyIDk1LjE3TDExMS4yMSA4OS4zTDExOC4wMyA4My42N0wxMjUuMDYgNzguMzFMMTMyLjMgNzMuMjFMMTM5Ljc0IDY4LjM5TDE0Ny4zNyA2My44NkwxNTUuMTkgNTkuNjFMMTYzLjE5IDU1LjY2TDE3MS4zNiA1Mi4wMUwxNzkuNjkgNDguNjhMMTg4LjE5IDQ1LjY2TDE5Ni44MyA0Mi45OEwyMDUuNjEgNDAuNjJMMjE0LjUzIDM4LjYxTDIyMy41NyAzNi45NUwyMzIuNzMgMzUuNjRMMjQyLjAxIDM0LjdMMjUxLjM5IDM0LjEzTDI2MC44NyAzMy45NEwyNzAuMzUgMzQuMTNMMjc5LjczIDM0LjdaTTI0OS4yMyAxMjIuNDhMMjQzLjUxIDEyMy4wNkwyMzcuODYgMTIzLjg3TDIzMi4yOCAxMjQuODlMMjI2Ljc3IDEyNi4xM0wyMjEuMzUgMTI3LjU5TDIxNi4wMiAxMjkuMjRMMjEwLjc4IDEzMS4xTDIwNS42NCAxMzMuMTZMMjAwLjYgMTM1LjQxTDE5NS42NiAxMzcuODVMMTkwLjg0IDE0MC40N0wxODYuMTMgMTQzLjI3TDE4MS41NCAxNDYuMjRMMTc3LjA3IDE0OS4zOUwxNzIuNzMgMTUyLjdMMTY4LjUzIDE1Ni4xN0wxNjQuNDYgMTU5Ljc5TDE2MC41NCAxNjMuNTdMMTU2Ljc2IDE2Ny40OUwxNTMuMTQgMTcxLjU2TDE0OS42NyAxNzUuNzZMMTQ2LjM2IDE4MC4xTDE0My4yMSAxODQuNTdMMTQwLjI0IDE4OS4xNkwxMzcuNDQgMTkzLjg3TDEzNC44MiAxOTguNjlMMTMyLjM4IDIwMy42M0wxMzAuMTMgMjA4LjY3TDEyOC4wNyAyMTMuODFMMTI2LjIxIDIxOS4wNUwxMjQuNTYgMjI0LjM4TDEyMy4xIDIyOS44TDEyMS44NiAyMzUuMzFMMTIwLjg0IDI0MC44OUwxMjAuMDMgMjQ2LjU0TDExOS40NSAyNTIuMjZMMTE5LjEgMjU4LjA1TDExOC45OCAyNjMuOUwxMTkuMSAyNjkuNzVMMTE5LjQ1IDI3NS41NEwxMjAuMDMgMjgxLjI2TDEyMC44NCAyODYuOTJMMTIxLjg2IDI5Mi41TDEyMy4xIDI5OEwxMjQuNTYgMzAzLjQyTDEyNi4yMSAzMDguNzVMMTI4LjA3IDMxMy45OUwxMzAuMTMgMzE5LjEzTDEzMi4zOCAzMjQuMTdMMTM0LjgyIDMyOS4xMUwxMzcuNDQgMzMzLjkzTDE0MC4yNCAzMzguNjRMMTQzLjIxIDM0My4yM0wxNDYuMzYgMzQ3LjdMMTQ5LjY3IDM1Mi4wNEwxNTMuMTQgMzU2LjI0TDE1Ni43NiAzNjAuMzFMMTYwLjU0IDM2NC4yM0wxNjQuNDYgMzY4LjAxTDE2OC41MyAzNzEuNjRMMTcyLjczIDM3NS4xMUwxNzcuMDcgMzc4LjQyTDE4MS41NCAzODEuNTZMMTg2LjEzIDM4NC41M0wxOTAuODQgMzg3LjMzTDE5NS42NiAzODkuOTZMMjAwLjYgMzkyLjM5TDIwNS42NCAzOTQuNjRMMjEwLjc4IDM5Ni43TDIxNi4wMiAzOTguNTZMMjIxLjM1IDQwMC4yMkwyMjYuNzcgNDAxLjY3TDIzMi4yOCA0MDIuOTFMMjM3Ljg2IDQwMy45NEwyNDMuNTEgNDA0Ljc0TDI0OS4yMyA0MDUuMzJMMjU1LjAyIDQwNS42N0wyNjAuODcgNDA1Ljc5TDI2Ni43MiA0MDUuNjdMMjcyLjUxIDQwNS4zMkwyNzguMjMgNDA0Ljc0TDI4My44OSA0MDMuOTRMMjg5LjQ3IDQwMi45MUwyOTQuOTcgNDAxLjY3TDMwMC4zOSA0MDAuMjJMMzA1LjcyIDM5OC41NkwzMTAuOTYgMzk2LjdMMzE2LjEgMzk0LjY0TDMyMS4xNCAzOTIuMzlMMzI2LjA4IDM4OS45NkwzMzAuOSAzODcuMzNMMzM1LjYxIDM4NC41M0wzNDAuMiAzODEuNTZMMzQ0LjY3IDM3OC40MkwzNDkuMDEgMzc1LjExTDM1My4yMSAzNzEuNjRMMzU3LjI4IDM2OC4wMUwzNjEuMiAzNjQuMjNMMzY0Ljk4IDM2MC4zMUwzNjguNjEgMzU2LjI0TDM3Mi4wOCAzNTIuMDRMMzc1LjM5IDM0Ny43TDM3OC41MyAzNDMuMjNMMzgxLjUgMzM4LjY0TDM4NC4zIDMzMy45M0wzODYuOTMgMzI5LjExTDM4OS4zNiAzMjQuMTdMMzkxLjYxIDMxOS4xM0wzOTMuNjcgMzEzLjk5TDM5NS41MyAzMDguNzVMMzk3LjE5IDMwMy40MkwzOTguNjQgMjk4TDM5OS44OCAyOTIuNUw0MDAuOTEgMjg2LjkyTDQwMS43MSAyODEuMjZMNDAyLjI5IDI3NS41NEw0MDIuNjQgMjY5Ljc1TDQwMi43NiAyNjMuOUw0MDIuNjQgMjU4LjA1TDQwMi4yOSAyNTIuMjZMNDAxLjcxIDI0Ni41NEw0MDAuOTEgMjQwLjg5TDM5OS44OCAyMzUuMzFMMzk4LjY0IDIyOS44TDM5Ny4xOSAyMjQuMzhMMzk1LjUzIDIxOS4wNUwzOTMuNjcgMjEzLjgxTDM5MS42MSAyMDguNjdMMzg5LjM2IDIwMy42M0wzODYuOTMgMTk4LjY5TDM4NC4zIDE5My44N0wzODEuNSAxODkuMTZMMzc4LjUzIDE4NC41N0wzNzUuMzkgMTgwLjFMMzcyLjA4IDE3NS43NkwzNjguNjEgMTcxLjU2TDM2NC45OCAxNjcuNDlMMzYxLjIgMTYzLjU3TDM1Ny4yOCAxNTkuNzlMMzUzLjIxIDE1Ni4xN0wzNDkuMDEgMTUyLjdMMzQ0LjY3IDE0OS4zOUwzNDAuMiAxNDYuMjRMMzM1LjYxIDE0My4yN0wzMzAuOSAxNDAuNDdMMzI2LjA4IDEzNy44NUwzMjEuMTQgMTM1LjQxTDMxNi4xIDEzMy4xNkwzMTAuOTYgMTMxLjFMMzA1LjcyIDEyOS4yNEwzMDAuMzkgMTI3LjU5TDI5NC45NyAxMjYuMTNMMjg5LjQ3IDEyNC44OUwyODMuODkgMTIzLjg3TDI3OC4yMyAxMjMuMDZMMjcyLjUxIDEyMi40OEwyNjYuNzIgMTIyLjEzTDI2MC44NyAxMjIuMDFMMjU1LjAyIDEyMi4xM0wyNDkuMjMgMTIyLjQ4WiIgaWQ9ImJpVVlobFRwNiI+PC9wYXRoPjwvZGVmcz48Zz48Zz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiaVVZaGxUcDYiIG9wYWNpdHk9IjEiIGZpbGw9IiM1OTU5NTkiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjwvZz48L2c+PC9zdmc+',
    },
    // Status Type
    STATUS: {
      Type: 'Text',
      Align: 'Center',
      Width: 50,
      Formula: "Row.Deleted ? 'D' : Row.Added ? 'I' : Row.Changed ? 'U' : 'R'",
      Format: {
        I: '입력',
        U: '수정',
        D: '삭제',
        R: '',
      },
    },
    // DelCheck Type
    DelCheck: {
      Type: 'Bool',
      Width: 50,
      OnClick: (evtParam) => {
        if (evtParam.row.Kind === 'Data') evtParam.sheet._dataDelCheckClick = true
      },
      OnChange: (evtParam) => {
        var chked = evtParam.row[evtParam.col]
        //신규행에 대해서는 즉시 삭제한다.
        if (evtParam.row.Added) {
          setTimeout(() => {
            evtParam.sheet.removeRow(evtParam.row)
          }, 30)
        } else {
          //행을 삭제 상태로 변경
          function toggleCheck(row, changeValue, render) {
            row.Deleted = chked
            row.CanEdit = !evtParam.row[evtParam.col]
            if (!row[evtParam.col + 'CanEdit']) row[evtParam.col + 'CanEdit'] = true

            if (changeValue)
              evtParam.sheet.setValue(row, evtParam.col, chked, 0, {
                OnChange: true,
                OnEdit: true,
                OnSame: true,
              })
            if (render) evtParam.sheet.refreshRow(row)
          }

          // 체크 해제일 경우 부모행도 해제
          if (evtParam.sheet.MainCol && chked === 0 && evtParam.row.Level > 0) {
            var prow = evtParam.sheet.getParentRows(evtParam.row)
            for (var j = 0; j < prow.length; j++) {
              var parent = prow[j]
              if (!!parent[evtParam.col] === !!chked) continue
              toggleCheck(parent, true, true)
            }
          }
          //자식행 추출
          var rows = evtParam.sheet.getChildRows(evtParam.row)
          rows.push(evtParam.row)
          var render = evtParam.sheet._dataDelCheckClick || rows.length > 1
          //모두 체크하고 편집 불가로 변경
          for (var i = 0; i < rows.length; i++) {
            var row = rows[i]
            var changeValue = row.id != evtParam.row.id && row[evtParam.col] != chked
            if (row.id == evtParam.row.id || changeValue) toggleCheck(row, changeValue, render)
          }
          if (evtParam.sheet._dataDelCheckClick) delete evtParam.sheet._dataDelCheckClick
        }
      },
    },
    TreeSumFormula: (fr) => {
      var sum = 0

      if (fr.Row.childNodes.length) {
        for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
          sum += r[fr.Col] // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
        }
      } else {
        fr.Row[fr.Col + 'CanEdit'] = 1

        return fr.Row[fr.Col]
      }

      return sum
    },
    TreeAvgFormula: (fr) => {
      var avg = 0,
        sum = 0,
        count = 0

      if (fr.Row.childNodes.length) {
        for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
          // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
          sum += r[fr.Col]
          count++
          avg = count && sum / count
        }
      } else {
        fr.Row[fr.Col + 'CanEdit'] = 1

        return fr.Row[fr.Col]
      }

      return avg
    },
    TreeCountFormula: (fr) => {
      var count = 0

      if (fr.Row.childNodes.length) {
        for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
          // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
          fr.Row[fr.Col + 'Format'] = '#,##0' // 포맷 변경
          count++
        }
      } else {
        fr.Row[fr.Col + 'CanEdit'] = 1

        return fr.Row[fr.Col]
      }

      return count
    },
    TreeMaxFormula: (fr) => {
      var max = Number.MIN_VALUE

      if (fr.Row.childNodes.length) {
        for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
          // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
          if (max < r[fr.Col]) {
            max = r[fr.Col]
          }
        }
      } else {
        fr.Row[fr.Col + 'CanEdit'] = 1

        return fr.Row[fr.Col]
      }

      return max
    },
    TreeMinFormula: (fr) => {
      var min = Number.MAX_VALUE

      if (fr.Row.childNodes.length) {
        for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
          // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
          if (min > r[fr.Col]) {
            min = r[fr.Col]
          }
        }
      } else {
        fr.Row[fr.Col + 'CanEdit'] = 1

        return fr.Row[fr.Col]
      }

      return min
    },
  }

  function clone(obj) {
    if (obj === null || typeof obj !== 'object') return obj
    var copy = obj.constructor()
    for (var attr in obj) {
      if (Object.hasOwn(obj, attr)) {
        copy[attr] = clone(obj[attr])
      }
    }
    return copy
  }

  /*
ibsheet7 migration functions
*/
  if (!_IBSheet.v7) _IBSheet.v7 = {}

  /* ibsheet7의 Tree 구조 Json 데이터를 ibsheet8 형식에 맞게 파싱해주는 메소드 */
  _IBSheet.v7.convertTreeData = (data7) => {
    var targetArr
    var toString = Object.prototype.toString
    switch (toString.call(data7)) {
      case '[object Object]':
        if (
          !(data7['data'] || data7['Data']) ||
          toString.call(data7['data'] || data7['Data']) !== '[object Array]'
        )
          return false
        targetArr = data7['data'] || data7['Data']
        break
      case '[object Array]':
        targetArr = data7
        break
      default:
        return false
    }

    var P = null,
      N = null,
      c_level = 0,
      p_level = 0
    targetArr = targetArr.reduce((accum, currentVal, curretIndex, array) => {
      var cloneObj = clone(currentVal)

      if (P == null && N == null) P = N = accum
      cloneObj['Level'] = cloneObj['level'] ? cloneObj['level'] : cloneObj['Level']
      cloneObj['HaveChild'] = cloneObj['haveChild'] ? cloneObj['haveChild'] : cloneObj['HaveChild']
      cloneObj['Level'] = cloneObj['Level'] - 0 ? cloneObj['Level'] - 0 : 0

      if (accum.length == 0) {
        p_level = parseInt(cloneObj['Level']) + 1
        delete cloneObj['Level']
        cloneObj.pData = accum
        accum.push(cloneObj)
        P = accum
      } else {
        c_level = parseInt(cloneObj['Level']) + 1
        if (p_level == 0 || p_level < c_level) {
          if (p_level != 0) {
            P = N
          }
          p_level = c_level
        } else if (p_level > c_level) {
          for (var k = 0; k < p_level - c_level; k++) {
            if (P.pData) {
              P = P.pData
            }
            if (P['Level'] < c_level - 1) {
              break
            }
          }
          p_level = c_level
        }

        if (P !== accum && !P.Items) {
          P.Items = []
        }
        delete cloneObj['Level']
        cloneObj.pData = P
        if (P === accum) P.push(cloneObj)
        else P.Items.push(cloneObj)
      }
      N = cloneObj

      return accum
    }, [])

    delete data7['Data']
    data7['data'] = targetArr

    function removePData(arr) {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i]
        delete item.pData
        if (item.Items) removePData(item.Items)
      }
    }
    removePData(data7.data)
    return data7
  }
  /**
   * Format Value로 들어온 데이터를 Key 값으로 변경하는 API
   * 아래의 @param 인자들은 필수값입니다.
   * @method     convertData2FormatKey
   * @param      datas              변경할 data object
   * @param      cols               변경할 컬럼 list
   * @return     object
   */
  Fn.convertData2FormatKey = function (datas, cols) {
    var row, format

    for (var j = 0; j < cols.length; j++) {
      for (var i = 0; i < datas.length; i++) {
        row = datas[i]
        format = this.Cols[cols[j]].Format

        if (row[cols[j]]) {
          for (const key in format) {
            if (format[key] === row[cols[j]]) {
              row[cols[j]] = key
            }
          }
        }
      }
    }

    return datas // 변경된 데이터 return
  }

  /**
   * IBSheet8 사용자 함수
   * @description     IBSheet8의 기능을 사용하여 사용자 함수를 제공합니다.
   */
  // ---------------------------------------------------------------------------------------------------------------------------
  /**
   * 여러 개의 행을 한번에 hideRow 하는 API
   * @method     hideRows
   * @param      array[row objct]    rows   데이터 로우 객체를 담고있는 배열
   * @return     none
   */
  Fn.hideRows = function (rows) {
    if (!Array.isArray(rows)) return

    for (var i = 0; i < rows.length; i++) {
      this.hideRow(rows[i], 0, 1, 1)
    }
    this.renderBody()
  }

  /**
   * 시트에서 보여지는 데이터 로우 객체만을 반환하는 API
   * @method     getDataVisibleRows
   * @param      boolean   noSubTotal   소계/누계 행을 제외할지 여부
   * @return     array[row object]
   */
  Fn.getDataVisibleRows = function (noSubTotal) {
    var row = this.getFirstVisibleRow()
    var rows = []

    while (row) {
      if (row.Kind === 'Data') {
        if ((noSubTotal && row.Name !== 'SubSum') || !noSubTotal) {
          rows[rows.length] = row
        }
      }
      row = this.getNextVisibleRow(row)
    }

    return rows
  }

  /**
   * 푸터 영역에 있는 포터 로우 객체들의 배열을 반환합니다.
   * @method     getFooterRows
   * @return     array[row object]
   */
  Fn.getFooterRows = function () {
    if (!this.Foot) return

    var rows = []
    var row = this.Foot.firstChild

    while (row) {
      rows.push(row)
      row = row.nextSibling
    }

    return rows
  }

  /**
   * 현재 포커스 되어있는 시트 객체를 반환합니다.
   * @method     getSheetFocused
   * @return     object
   */
  Fn.getSheetFocused = () => _IBSheet.Focused

  /**
   * 소계에 설정된 옵션을 배열 형태로 반환합니다.
   * @method     getSubSumOptions
   * @return     array[option]
   */
  Fn.getSubSumOptions = function () {
    return this.SubSumRowOptions
  }

  /**
   * 시트의 태그를 반환합니다. 기본으로 div 태그, 인자 사용시 table 태그를 반환할 수 있습니다.
   * @method     getSubSumOptions
   * @param      boolean   tableTag   시트의 테이블 태그를 가져올지 여부
   * @return     element
   */
  Fn.getSheetTag = function (tableTag) {
    return tableTag ? this.MainTable : this.MainTag
  }

  /**
   * 시트의 높이를 반환합니다.
   * @method     getSheetHeight
   * @return     number
   */
  Fn.getSheetHeight = function () {
    return this.MainTag && this.MainTag.offsetHeight
  }

  /**
   * 시트의 너비를 반환합니다.
   * @method     getSheetWidth
   * @return     number
   */
  Fn.getSheetWidth = function () {
    return this.MainTag && this.MainTag.offsetWidth
  }

  /**
   * 시트의 태그 사이즈를 조정합니다. 해당 기능은 시트를 감싸고 있는 div 크기를 변화시킵니다.
   * number 입력시 px 로 자동으로 치환합니다.
   * 단위를 붙여서 입력시 그대로 입력됩니다.
   * @method     setSheetSize
   * @param      number @param string width   시트 태그의 width
   * @param      string @param string height  시트 태그의 height
   * @return     none
   */
  Fn.setSheetSize = function (width, height) {
    if (!this.MainTag) return

    if (typeof width === 'number') {
      width += 'px'
    }
    if (width) {
      this.MainTag.style.width = width
    }
    if (typeof height === 'number') {
      height += 'px'
    }
    if (height) {
      this.MainTag.style.height = height
    }
  }

  /**
   * fitSize 를 이용하여 전체 컬럼의 너비를 조정합니다.
   * @method     setAllFitSize
   * @return     none
   */
  Fn.setAllFitSize = function () {
    var cols = this.getCols('Visible')

    for (var i = 0; i < cols.length; i++) {
      this.fitSize(cols[i])
    }
  }

  /**
   *  setValue를 이용하여 하나 컬럼의 전체 데이터행 값을 일괄적으로 변경합니다.
   *  @method     setAllColValue
   *  @return     boolean
   */
  Fn.setAllColValue = function (colName, value) {
    var dataRows = this.getDataRows()
    if (!colName || typeof value == undefined || !dataRows) return false
    var isLarge = dataRows.length > 10000

    for (var i = 0; i < dataRows.length; i++) {
      if (dataRows[i].Name != 'SubSum')
        this.setValue({ row: dataRows[i], col: colName, val: value, render: isLarge ? 0 : 1 })
    }

    if (isLarge) this.rerender()

    return true
  }
  // ---------------------------------------------------------------------------------------------------------------------------
  Fn.getAllRows = function () {
    var dataRows = this.getDataRows()
    var headerRows = this.getHeaderRows()
    if (this.Filter && this.Filter.Visible) headerRows.push(this.Filter)
    return headerRows.concat(dataRows)
  }

  /**
   * setAttribute를 이용하여 범위 내의 속성 값을 일괄적으로 설정합니다.
   * @method     setRangeAttribute
   * @param      object @param string startRow  속성값 일괄 설정 시작 데이터 로우 객체
   * @param      string @param string startCol  속성값 일괄 설정 시작 열이름
   * @param      object @param string endRow   속성값 일괄 설정 종료 데이터 로우 객체
   * @param      string @param string endCol  속성값 일괄 설정 종료 열이름
   * @param      string @param string attr   설정하고자 하는 속성명
   * @param      mixed @param mixed val  설정하고자 하는 속성 값
   * @return     boolean
   */
  Fn.setRangeAttribute = function (startRow, startCol, endRow, endCol, attr, val) {
    var allRows = this.getAllRows(),
      startRowIdx = allRows.indexOf(startRow),
      endRowIdx = allRows.indexOf(endRow),
      startColIdx = this.getColIndex(startCol, 1),
      endColIdx = this.getColIndex(endCol, 1)

    if (startRowIdx < 0 || startColIdx < 0 || endRowIdx < 0 || endColIdx < 0) return false
    if (startRowIdx > endRowIdx || startColIdx > endColIdx) return false
    if (val == undefined || attr == undefined) return false

    var lastRowIndex = this.getRowIndex(this.getLastRow())
    var colCount = this.getCols('Visible')
    if (lastRowIndex > -1 && (startRowIdx > lastRowIndex || endRowIdx > lastRowIndex)) return false
    if (startColIdx > colCount - 1 || endColIdx > colCount - 1) return false

    for (
      var row = startRow;
      row && row != this.getNextRow(endRow);
      row =
        this.getNextRow(row) == null && row.Fixed == 'Head'
          ? this.getFirstRow()
          : this.getNextRow(row)
    ) {
      for (
        var col = startCol;
        col && col != this.getNextCol(endCol, 1);
        col = this.getNextCol(col, 1)
      ) {
        this.setAttribute(row, col, attr, val, 0)
      }
    }

    this.rerender()

    return true
  }

  /**
   * setValue, 혹은 setString를 이용하여 범위 내의 셀 값을 일괄적으로 변경합니다.
   * @method     setRangeValue
   * @param      mixed @param mixed val  설정하고자 하는 값
   * @param      object @param string startRow  값 일괄 변경 시작 데이터 로우 객체
   * @param      string @param string startCol  값 일괄 변경 시작 열이름
   * @param      object @param string endRow   값 일괄 변경 종료 데이터 로우 객체
   * @param      string @param string endCol  값 일괄 변경 종료 열이름
   * @param      string @param string colSeparator 컬럼 구분자 사용시 사용할 컬럼 구분자
   * @param      string @param string rowSeparator 행 구분자 사용시 사용할 행 구분자
   * @param      string @param string type setValue를 사용할지, setString을 사용할지 여부 1: setValue 사용 2: setString 사용
   * @return     boolean
   */
  Fn.setRangeValue = function (
    val,
    startRow,
    startCol,
    endRow,
    endCol,
    colSeparator,
    rowSeparator,
    type,
  ) {
    var allRows = this.getAllRows(),
      startRowIdx = allRows.indexOf(startRow),
      endRowIdx = allRows.indexOf(endRow),
      startColIdx = this.getColIndex(startCol, 1),
      endColIdx = this.getColIndex(endCol, 1)

    if (val == undefined) return false
    if (startRowIdx > endRowIdx || startColIdx > endColIdx) return false

    var lastRowIndex = this.getRowIndex(this.getLastRow())
    var colCount = this.getCols('Visible')
    if (lastRowIndex > -1 && (startRowIdx > lastRowIndex || endRowIdx > lastRowIndex)) return false
    if (startColIdx > colCount - 1 || endColIdx > colCount - 1) return false

    if (colSeparator == undefined) colSeparator = '|'
    if (rowSeparator == undefined) rowSeparator = '^'

    var rowIdx = 0
    var rowData
    var colData
    var isSeparat = false

    if (
      val &&
      typeof val == 'string' &&
      (val.indexOf(colSeparator) > -1 || val.indexOf(rowSeparator) > -1)
    ) {
      isSeparat = true
      rowData = val.split(rowSeparator)
    }

    for (
      var row = startRow;
      row && row != this.getNextRow(endRow);
      row =
        this.getNextRow(row) == null && row.Fixed == 'Head'
          ? this.getFirstRow()
          : this.getNextRow(row)
    ) {
      var colIdx = 0

      for (
        var col = startCol;
        col && col != this.getNextCol(endCol, 1);
        col = this.getNextCol(col, 1)
      ) {
        var v = null

        if (!isSeparat) v = val
        else {
          if (rowData[rowIdx]) {
            colData = rowData[rowIdx].split(colSeparator)
            if (colData[colIdx]) v = colData[colIdx]
          }
        }

        if (v == undefined || v == null) {
          colIdx++
          continue
        }

        type ? this.setString(row, col, v, 0) : this.setValue(row, col, v, 0)

        colIdx++
      }
      rowIdx++
    }

    this.rerender()

    return true
  }

  /**
   * 특정 행의 상태값을 반환합니다.
   * 상태값 반환 우선순위는 아래와 같습니다.
   *
   * 1. 행 상태에 Added가 포함된 경우 우선 무조건적으로 Added를 반환합니다.
   * 2. 행 상태에 Deleted가 포함된 경우 그 다음 무조건적으로 Deleted를 반환합니다.
   * 3. 그 이외의 경우에는 Changed를 반환합니다.
   * 4. 상태가 없는 경우에는 ""를 반환합니다.
   * @method     getRowStatus
   * @param      object @param row  상태값을 확인할 데이터 로우 객체
   */
  Fn.getRowStatus = function (row) {
    if (row == null || typeof row != 'object') return false

    if (row.Deleted) return this.Lang.Text.ReqStatusDeleted
    if (row.Added) return this.Lang.Text.ReqStatusAdded
    if (row.Changed) return this.Lang.Text.ReqStatusChanged
    return ''
  }

  /**
   * 시트에 표시되는 열을 설정합니다.
   * arr 입력된 열들을 제외하고, 모든 열들을 숨깁니다.
   *
   * @param {array} arr // 표시할 열의 이름 배열
   * @return {void}
   */
  Fn.toggleColDisplay = function (arr) {
    if (!arr) return

    if (arr.length > 0) {
      var cols = this.getCols()
      var version = this.IBSheetVersion.split('-')[0].split('.')
      var render =
        this.GroupMain ||
        (parseInt(version[1]) <= 1 && parseInt(version[2]) == 0 && parseInt(version[3]) < 65)
          ? 1
          : 0

      for (var i = 0, len = cols.length; i < len; i++) {
        var col = cols[i]
        if (arr.indexOf(col) != -1 || arr.indexOf(col + '_item') != -1) {
          this.showCol(col, null, render)
          delete this.Cols[col].UserHidden
        } else this.hideCol(col, 1, null, render)
      }

      if (!render) this.rerender()
    } else this.showMessageTime(this.getMessage('AtLeastOneColumn', 'DisplayMenu'))
  }

  /**
   * ColDisplayMenu 메뉴의 체크박스의 체크 여부를 해당 시트에서 표시된 열과 동기화합니다.
   *
   * @param {array} items // 메뉴 아이템 배열
   * @return {void}
   */
  Fn.syncDisplayBool = function (items) {
    if (!items) return
    for (var i = 0, len = items.length; i < len; i++) {
      var currentItem = items[i]
      if (currentItem.Items) this.syncDisplayBool(currentItem.Items)
      currentItem.Value = this.getAttribute(null, currentItem.sName, 'Visible')
    }
  }
})(window, document)
