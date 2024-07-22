import React from 'react'
import Hook5 from './components/hooks/Hook5'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from "./logo.svg"
import Nav1 from './components/hooks/Nav1'
import Products from './components/hooks/Products'

export default function App() {
  return (
    <div>
      <Nav1 />
      <img src={img1} />
      <Products />
       <Hook5 />
    </div>
  )
}
