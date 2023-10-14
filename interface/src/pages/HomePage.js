import React,{useState,useEffect} from 'react'
import { Home,Carousels} from '../components'
import { Navbar,Footer } from '../helper'
const HomePage = () => {
 const [loginStatus, setLoginStatus] = useState(false)

 const loginCbHandler = (result) => {
  setLoginStatus(result)
 }
 useEffect(() => {
   if(localStorage.getItem('access_token')) {
    setLoginStatus(true)
   } else{
    setLoginStatus(false)
   }
 
   return () => {
     
   }
 }, [loginStatus])
 
  return (
 <>


{loginStatus ? 
 <Navbar loginStatus={loginStatus} loginCbHandler={loginCbHandler}></Navbar> :
 <Navbar loginCbHandler={loginCbHandler}></Navbar>
 
}
 
 <Carousels></Carousels>
<Home></Home>
<Footer></Footer>
 </>
  )
}

export default HomePage