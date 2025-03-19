import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {splitIntoWords} from "./l1/01";
import {sum} from "./l1/03";

const sentence = "dasdfsdfsd  sdf sdaffsd"
const result=splitIntoWords(sentence)
console.log(result[0]==="hello")
console.log(result[0]==="my")
console.log(result[0]==="friend")

var a=sum(1,2)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
