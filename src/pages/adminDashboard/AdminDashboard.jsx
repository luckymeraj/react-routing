import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const AdminDashboard = (props) => {
  console.log('props',props)
  const navigate=useNavigate()
  const {userRole,allowedRoles}=props
//   useEffect(()=>{
// console.log('runing')
// if(!allowedRoles?.includes(userRole)){
// navigate('/unauthorized')
// }

//   },[])
  return (
    <>
    {
allowedRoles?.includes(userRole)?
<Outlet/>
:
<Navigate to={'/unauthorized'} />
    }
    </>
  )
}

export default AdminDashboard