import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RevealExample from './Reveal.tsx'
import StackScroll from './stack.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RevealExample />
    <StackScroll />
  </StrictMode>,
)
