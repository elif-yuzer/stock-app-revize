import React from 'react'

import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom';
import { Spinner } from "@/components/ui/spinner"




const AuthGuard = () => {

const {token,loading}=useSelector((state)=>state.authSlice)

if(loading) {
    
    return <Spinner/>
}
  return token ? (
    <Outlet/>
  ):(
    <Navigate to="/sign-in" replace={true} />
  )
}

export default AuthGuard