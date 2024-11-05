import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyForm from './components/basicInf'
import EducationInf from './components/educationInf'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyForm/>
    <EducationInf/>
  </StrictMode>,
)
