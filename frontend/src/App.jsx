import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Homes from './component/Routes/Homes'
import Courses from './component/Routes/Courses.jsx'
import SignUp from './component/Home/SignUp'
import Contact from './component/Routes/Contact'

function App() {

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Homes/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
