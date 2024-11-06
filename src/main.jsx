import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles/mian.css'
import MyForm from './components/basicInf'
import EducationInf from './components/educationInf'
import PracticalExperience from './components/koki';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="app-container">
      <div className="grid-container">
        <MyForm />
        <EducationInf />
        <PracticalExperience />
      </div>
    </div>
  </StrictMode>,
)
