import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicOnlyRoute = () => {
    const currentUser=useSelector(selectCurrentUser)

 
   return (
    <div>
        currentUser ?  <Navigate to="/stock" replace/>  : <Outlet/>
    </div>
  )
}

export default PublicOnlyRoute