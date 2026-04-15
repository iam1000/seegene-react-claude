import { type KeyboardEvent, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { Button, Input } from '#/components/common'
import { useNxDataset } from '#/hooks/useNxDataset'
import { getApiErrorMessage, useNxMutation } from '#/hooks/useNxRequest'
import type { SvcDefinition } from '#/types/dataobject'
import { isEmpty } from '#/utils/common'

/**
 * 아이디 찾기 — UILA0002M.xfdl → LA_0002M.tsx
 *
 * 원본 경로: LA/LOGIN/UILA0002M.xfdl
 * 기능: 이름 + 휴대폰번호로 사용자 아이디를 찾아 SMS 발송
 */

// 원본: this.SVC_SEARCH = { svcId:"login", url:"POST::la::login/find-user-id", inDs:"ds_findUserId:0" }
const SVC_FIND_USER_ID: SvcDefinition = {
  svcId: 'login',
  url: 'POST::la::login/find-user-id',
  inDs: 'ds_findUserId:0',
}

export default function LA_0002M() {
  const navigate = useNavigate()
  const userNmRef = useRef<HTMLInputElement>(null)
  const moblPhonRef = useRef<HTMLInputElement>(null)

  // sta_messge: 하단 경고 메시지 (원본 visible=false 기본)
  const [message, setMessage] = useState('')
  const [messageVisible, setMessageVisible] = useState(false)
  // edt_userNm / edt_moblPhon 의 "Error" cssclass 대응
  const [userNmError, setUserNmError] = useState(false)
  const [moblPhonError, setMoblPhonError] = useState(false)

  // ds_findUserId — 원본 <Dataset> + <Rows> 기본값 그대로
  const { dataset: dsFindUserId, rows } = useNxDataset({
    id: 'ds_findUserId',
    columns: [
      { id: 'userNm', type: 'string', size: 50 },
      { id: 'bzMoblPhno', type: 'string', size: 15 },
      { id: 'userId', type: 'string', size: 256 },
    ],
    initialRows: [{ userId: 'required' }],
  })

  // BindItem: edt_userNm.value ↔ ds_findUserId.userNm
  //           edt_moblPhon.value ↔ ds_findUserId.bzMoblPhno
  const userNm = (rows[0]?.userNm as string | undefined) ?? ''
  const bzMoblPhno = (rows[0]?.bzMoblPhno as string | undefined) ?? ''

  // fn_find_user_id + fn_apiCallback
  const { mutate: findUserId } = useNxMutation({
    onSuccess: (result) => {
      // 원본: else if (objResolveData.data.httpStatus == "BAD_REQUEST") { alert(...); return; }
      if (result.data.httpStatus === 'BAD_REQUEST') {
        toast.error(getApiErrorMessage(result))
        return
      }
      // 원본: if(objResolveData.data.result == null) → 경고 메시지 표시
      if (result.data.result == null) {
        setMessageVisible(true)
        setMessage((result.data.messageContent as string | undefined) ?? '')
      } else {
        // 원본: SMS 발송 안내 후 로그인 화면으로 이동
        setMessageVisible(false)
        toast.success('사용자 아이디를 문자로 발송하였습니다.')
        navigate('/login')
      }
    },
    onError: (result) => {
      // 원본: if (nErrorCode < 0) return; (통신 에러 silent)
      if ((result.errorCode ?? 0) < 0) return
      toast.error(getApiErrorMessage(result))
    },
  })

  // fn_post — 유효성 검증 후 API 호출
  const handleSubmit = () => {
    if (isEmpty(userNm)) {
      setUserNmError(true)
      setMessageVisible(true)
      setMessage('이름을 입력해주세요.') // gfn_getLablNm('이름을 입력해주세요.', 'LA000713')
      userNmRef.current?.focus()
      return
    }
    if (isEmpty(bzMoblPhno)) {
      setMoblPhonError(true)
      setMessageVisible(true)
      setMessage('휴대폰번호를 입력해주세요.') // gfn_getLablNm('휴대폰번호를 입력해주세요.', 'LA000714')
      moblPhonRef.current?.focus()
      return
    }
    setMessageVisible(false)
    setMessage('')
    setUserNmError(false)
    setMoblPhonError(false)
    findUserId({
      svc: SVC_FIND_USER_ID,
      datasetMap: { ds_findUserId: dsFindUserId },
    })
  }

  // divLogin_edt_input_onkillfocus — 값이 있으면 Error 해제
  const handleUserNmBlur = () => {
    if (!isEmpty(userNm)) setUserNmError(false)
  }
  const handleMoblPhonBlur = () => {
    if (!isEmpty(bzMoblPhno)) setMoblPhonError(false)
  }

  // div_login_edt_*_onkeyup — Enter: 제출 / 그 외: 메시지 숨김
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    } else {
      setMessageVisible(false)
    }
  }

  // btn_cancle_onclick — go('frame::login.xfdl')
  const handleCancel = () => navigate('/login')

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* div_login — 612 x 520, top 120 (fn_divLogin_onsize: 가로 중앙 정렬) */}
      <div
        className="-translate-x-1/2 absolute top-[120px] left-1/2"
        style={{ width: 612, height: 520 }}
      >
        {/* sta_LOGIN_Logo — 152 x 34, top 0 */}
        <div
          className="absolute top-0 left-0 flex items-center font-bold text-sky-700 text-xl tracking-tight"
          style={{ width: 152, height: 34 }}
        >
          Seegene
        </div>

        {/* sta_LOGIN_Line — 610 x 440, top 44 (= Static01:10) */}
        <div
          className="absolute left-0 rounded-sm border border-gray-200 bg-white shadow-sm"
          style={{ top: 44, width: 610, height: 440 }}
        >
          {/* Static03 — "아이디 찾기" top 99 (div_login 기준) */}
          <h1
            className="absolute right-0 left-0 text-center font-bold text-[22px] text-gray-800"
            style={{ top: 99 - 44, height: 30, lineHeight: '30px' }}
          >
            아이디 찾기
          </h1>

          {/* Static02 — "이름" label */}
          <label
            htmlFor="edt_userNm"
            className="absolute font-semibold text-gray-800 text-sm"
            style={{ left: 115, top: 164 - 44, width: 120, height: 18 }}
          >
            이름
          </label>
          {/* edt_userNm — top 187, 360 x 30, maxlength 10 */}
          <Input
            id="edt_userNm"
            ref={userNmRef}
            className={`absolute h-[30px] rounded-none px-3 text-sm ${
              userNmError ? 'border-red-500 focus-visible:ring-red-200' : ''
            }`}
            style={{ left: 115, top: 187 - 44, width: 360 }}
            placeholder="이름을 입력해주세요"
            maxLength={10}
            value={userNm}
            onChange={(v) => dsFindUserId.setColumn(0, 'userNm', v)}
            onBlur={handleUserNmBlur}
            onKeyUp={handleKeyUp}
          />

          {/* Static02_00 — "휴대폰번호" label */}
          <label
            htmlFor="edt_moblPhon"
            className="absolute font-semibold text-gray-800 text-sm"
            style={{ left: 115, top: 237 - 44, width: 120, height: 18 }}
          >
            휴대폰번호
          </label>
          {/* edt_moblPhon — top 259, 360 x 30, maxlength 13 */}
          <Input
            id="edt_moblPhon"
            ref={moblPhonRef}
            className={`absolute h-[30px] rounded-none px-3 text-sm ${
              moblPhonError ? 'border-red-500 focus-visible:ring-red-200' : ''
            }`}
            style={{ left: 115, top: 259 - 44, width: 360 }}
            placeholder="휴대폰번호를 입력해주세요"
            maxLength={13}
            value={bzMoblPhno}
            onChange={(v) => dsFindUserId.setColumn(0, 'bzMoblPhno', v)}
            onBlur={handleMoblPhonBlur}
            onKeyUp={handleKeyUp}
          />

          {/* sta_messge — top 328, 359 x 26, cssclass="sta_WF_NotiWarning" (경고) */}
          {messageVisible && (
            <div
              className="absolute flex items-center text-red-600 text-sm"
              style={{ left: 116, top: 328 - 44, width: 359, height: 26 }}
              role="alert"
            >
              {message}
            </div>
          )}

          {/* btn_cancle — "취소" left 215, top 400, 80 x 34 (DarkGrayLine) */}
          <Button
            className="absolute h-[34px] rounded-none border-gray-400 text-gray-700 text-sm"
            style={{ left: 215, top: 400 - 44, width: 80 }}
            variant="default"
            onClick={handleCancel}
          >
            취소
          </Button>

          {/* btn_submit — "확인" right 227 (= left 305), bottom 86 (= top 400), 80 x 34 (Secondary) */}
          <Button
            className="absolute h-[34px] rounded-none text-sm"
            style={{ left: 305, top: 400 - 44, width: 80 }}
            variant="primary"
            onClick={handleSubmit}
          >
            확인
          </Button>

          {/* btn_tigrison — 원본 visible="false" 이므로 렌더하지 않음 */}
        </div>
      </div>

      {/* Static01 (sta_LOGIN_Bg) — bottom 0, height 366, 좌우 전체 */}
      <div
        className="absolute right-0 bottom-0 left-0 bg-gradient-to-b from-gray-50 to-gray-100"
        style={{ height: 366 }}
        aria-hidden="true"
      />

      {/* Static00 (sta_LOGIN_Copyright) — bottom 20, height 20 */}
      <div
        className="absolute right-0 left-0 text-center text-gray-500 text-xs"
        style={{ bottom: 20, height: 20, lineHeight: '20px' }}
      >
        Copyright ⓒ Seegene Medical Foundation. All Rights Reserved.
      </div>
    </div>
  )
}
