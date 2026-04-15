import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { Maximize2, Minus } from 'lucide-react'
import { useState } from 'react'
import apiClient from '#/api/client'
import DateRangePicker from '#/components/date/DateRangePicker'
import IBSheet from '#/components/grid/IBSheet'

const COLUMNS: IBSheetCol[] = [
  { Header: '순번', Name: 'rowNum', Type: 'Int', Width: 40, Align: 'center' },
  { Header: '부서', Name: 'deptNm', Width: 200 },
  { Header: '구분', Name: 'chngDiv', Width: 80, Align: 'center' },
  { Header: '변경이력', Name: 'chgFullHist', Width: 180 },
  { Header: '상위부서코드', Name: 'upprDeptCd', Width: 100, Align: 'center' },
  { Header: '부서코드', Name: 'deptCd', Width: 100, Align: 'center' },
  { Header: '부서약명', Name: 'deptAbbrNm', Width: 100 },
  { Header: '업문약어', Name: 'deptEngAbbrNm', Width: 80 },
  { Header: '부서대별', Name: 'deptLvl', Width: 80, Align: 'center' },
  { Header: '정렬순서', Name: 'sortSeq', Width: 65, Align: 'center' },
  { Header: '부서유형', Name: 'deptTypeCd', Width: 65, Align: 'center' },
  { Header: '부서장아이디', Name: 'deplUserId', Width: 120 },
  { Header: '센타구분', Name: 'cntrDivCd', Width: 100, Align: 'center' },
  { Header: '부서구분', Name: 'deptDivCd', Width: 100, Align: 'center' },
  { Header: '지역구분', Name: 'locDivCd', Width: 100, Align: 'center' },
  { Header: 'MCLIS', Name: 'mclsDeptCd', Width: 100 },
  { Header: '개설일', Name: 'deptEstlDt', Width: 100, Align: 'center' },
  { Header: '폐쇄일', Name: 'deptClsDt', Width: 100, Align: 'center' },
  { Header: '사용여부', Name: 'useYn', Width: 80, Align: 'center' },
  { Header: '등록자', Name: 'rgurId', Width: 100 },
  { Header: '일시', Name: 'regDtm', Width: 200 },
]

interface SearchParams {
  gubun: 'all' | 'org'
  deptText: string
  srchStDate: string
  srchEdDate: string
  srchChngDiv: string
}

export default function LA0024M0() {
  const today = dayjs().format('YYYY-MM-DD')
  const [params, setParams] = useState<SearchParams>({
    gubun: 'all',
    deptText: '',
    srchStDate: today,
    srchEdDate: today,
    srchChngDiv: '',
  })
  const [searchTrigger, setSearchTrigger] = useState<SearchParams | null>(null)

  const { data = [] } = useQuery({
    queryKey: ['la', 'department', 'history', searchTrigger],
    queryFn: () =>
      apiClient
        .get('/la/department/history', {
          params: {
            srchText: searchTrigger!.deptText,
            srchChngDiv: searchTrigger!.srchChngDiv,
            srchStDate: searchTrigger!.srchStDate,
            srchEdDate: searchTrigger!.srchEdDate,
            pageIndex: 1,
            pageSize: 50,
            clsYn: 'Y',
          },
        })
        .then((res) => res.data.result ?? []),
    enabled: !!searchTrigger,
  })

  const handleSearch = () => setSearchTrigger({ ...params })

  return (
    <div className="flex flex-col h-full bg-white text-xs">
      {/* 타이틀 바 */}
      <div className="flex items-center justify-between h-7 px-2 bg-white border-b border-gray-200 shrink-0">
        <span className="text-gray-700">□ 부서이력조회 (LA0024M0)</span>
        <div className="flex items-center gap-1">
          <button className="w-5 h-5 flex items-center justify-center hover:bg-gray-100 rounded">
            <Minus size={11} />
          </button>
          <button className="w-5 h-5 flex items-center justify-center hover:bg-gray-100 rounded">
            <Maximize2 size={11} />
          </button>
        </div>
      </div>

      {/* 검색 영역 */}
      <div className="flex items-center gap-3 px-3 py-2 bg-[#f5f5f5] border-b border-gray-300 shrink-0">
        {/* 구분 */}
        <div className="flex items-center gap-1 text-xs">
          <span className="mr-1 text-gray-600">구분</span>
          <label className="flex items-center gap-0.5 cursor-pointer">
            <input
              type="radio"
              name="gubun"
              value="all"
              checked={params.gubun === 'all'}
              onChange={() => setParams((p) => ({ ...p, gubun: 'all' }))}
            />
            <span>전체</span>
          </label>
          <label className="flex items-center gap-0.5 cursor-pointer ml-1">
            <input
              type="radio"
              name="gubun"
              value="org"
              checked={params.gubun === 'org'}
              onChange={() => setParams((p) => ({ ...p, gubun: 'org' }))}
            />
            <span>조직/기준일</span>
          </label>
        </div>

        {/* 부서 */}
        <div className="flex items-center gap-1">
          <span className="text-gray-600 whitespace-nowrap">부서</span>
          <input
            type="text"
            placeholder="부서명, 코드"
            value={params.deptText}
            onChange={(e) => setParams((p) => ({ ...p, deptText: e.target.value }))}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="border border-gray-300 h-6 px-2 w-36 text-xs outline-none focus:border-blue-400"
          />
        </div>

        {/* 적용일자 */}
        <div className="flex items-center gap-1">
          <span className="text-gray-600 whitespace-nowrap">적용일자</span>
          <DateRangePicker
            fromDate={params.srchStDate}
            toDate={params.srchEdDate}
            onChange={(from, to) => setParams((p) => ({ ...p, srchStDate: from, srchEdDate: to }))}
          />
        </div>

        {/* 변경구분 */}
        <div className="flex items-center gap-1">
          <span className="text-gray-600 whitespace-nowrap">변경구분</span>
          <select
            value={params.srchChngDiv}
            onChange={(e) => setParams((p) => ({ ...p, srchChngDiv: e.target.value }))}
            className="border border-gray-300 h-6 px-1 text-xs outline-none focus:border-blue-400 w-24"
          >
            <option value="">전체</option>
          </select>
        </div>

        <div className="flex-1" />

        {/* 조회 버튼 */}
        <button
          onClick={handleSearch}
          className="h-7 px-5 bg-[#2d3748] text-white text-xs hover:bg-[#1a202c] active:bg-black"
        >
          조회
        </button>
      </div>

      {/* 그리드 영역 */}
      <div className="flex flex-col flex-1 overflow-hidden px-2 pt-2 pb-2">
        <div className="text-[11px] text-gray-700 font-medium mb-1">• 부서 이력 조회</div>
        <div className="flex-1 overflow-hidden">
          <IBSheet id="grd_deptHistList" columns={COLUMNS} data={data} height="100%" />
        </div>
      </div>
    </div>
  )
}
