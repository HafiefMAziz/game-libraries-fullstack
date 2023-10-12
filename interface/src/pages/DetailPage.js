import React,{useState,useEffect} from 'react'
import { DetailPage } from '../components'
import { Navbar,Footer } from '../helper'
const DetailPages = () => {
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
     <DetailPage></DetailPage>
     <Footer></Footer>
    </>
   
  )
}

export default DetailPages