import React from 'react'
import {Route,Routes, Navigate} from 'react-router-dom'
import Homes from './component/Routes/Homes'
import Courses from './component/Routes/Courses.jsx'
import SignUp from './component/Home/SignUp'
import Contact from './component/Routes/Contact'
import {Toaster} from 'react-hot-toast'
import { userAuth } from './component/Context/Authentication.jsx';

function App() {
  const [authUser,setAuthUser]=userAuth()

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Homes/>}/>
          <Route path="/Courses" element={authUser?<Courses/> : <Navigate to="/SignUp"/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
