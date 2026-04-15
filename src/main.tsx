import dayjs from 'dayjs'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'dayjs/locale/ko'
import 'dayjs/locale/en'
import localeData from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'
import './index.css'
import App from './App'

dayjs.extend(localeData)
dayjs.extend(weekday)
dayjs.locale('ko')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
