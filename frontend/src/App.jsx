import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './screens/Home.screen'
import Layout from './components/Layout'
import NoElement from './components/NoElement'
import Shop from './screens/Shop.screen'

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path="*" element={<NoElement/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
