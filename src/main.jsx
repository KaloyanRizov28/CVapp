import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  App  from "./app"
import "./index.css"
import {NextUIProvider} from '@nextui-org/react'
import Layout from './components/Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <NextUIProvider>
        <main className="dark text-foreground bg-background">
        <Layout>
        <App/>
        </Layout>
        
        </main>
        </NextUIProvider>
      
  </StrictMode>,
)
