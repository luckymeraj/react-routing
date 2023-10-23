import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserList, getUserList, signIn, signOut } from '../../Redux/Actions'
import toast from 'react-hot-toast'

const LandingPage = () => {
    const Store=useSelector((state)=>state)
    console.log('Store',Store)
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(fetchUserList())
    },[dispatch])
    const logIn=()=>{
      dispatch(signIn())
      // console.log('Store after login',Store)
    }

const logOut=()=>{
  dispatch(signOut())
}

  return (
    <div>
<h1>Landing Page</h1>
<button onClick={logIn}>
  Signin
</button>
<button onClick={logOut}>
  Logout
</button>
{
  Store.auth.loading&&
  <h1>Please Wait....</h1>
}

{
  Store.userList.loading?
  <h4>Loading....</h4>
  :
  Store.userList.userList.data.map((item,idx)=>(
    <h3 key={idx}>
      {item.title}

    </h3>
  ))
}

    </div>
  )
}

export default LandingPage