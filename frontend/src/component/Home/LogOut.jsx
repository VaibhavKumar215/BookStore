import React from 'react'
import { userAuth } from '../Context/Authentication'
import toast from 'react-hot-toast'

const LogOut = () => {
    const [authUser,setAuthUser]=userAuth()

    const handleLogout=()=>{
        try {
            setAuthUser({...authUser,UserId:null})
            localStorage.removeItem("UserId");
            toast.success("Logout Successfully")
            setTimeout(() => {
                window.location.reload()
            },1000);
            
        } catch (error) {
            toast.error("Error:",error.message)
        }
    }
  return (
    <>
      <button className="bg-black text-white px-3 py-1 rounded-md hover:bg-slate-600 duration-300 cursor-pointer dark:bg-pink-500 dark:hover:bg-pink-600" onClick={handleLogout}>Logout</button>
    </>
  )
}

export default LogOut
