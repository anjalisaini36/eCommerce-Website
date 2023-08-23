import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from '../component/Layout'
import HomePage from '../pages/Home'
import ContactPage from '../pages/Contact'

function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  )
}

export default Routing
