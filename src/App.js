import React from 'react'
import Hook5 from './components/hooks/Hook5'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from "./logo.svg"

export default function App() {
  return (
    <div>
      <img src={img1} />
       <Hook5 />
    </div>
  )
}
