import React,{createContext,useState,useContext} from 'react'

export const AuthContext = createContext()


export const Authentication = ({children}) => {
    const auth = localStorage.getItem("UserId")
    const [authUser,setAuthUser]=useState(auth ? JSON.parse(auth):undefined)
  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export const userAuth = () => useContext(AuthContext)

