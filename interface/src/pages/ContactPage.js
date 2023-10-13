import React,{useState,useEffect} from 'react'
import ContactPage from '../components/ContactPage/ContactPage'

import { Navbar,Footer } from '../helper'

const Contact = () => {
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
    <ContactPage></ContactPage>
    <Footer></Footer>
    </>

  )
}

export default Contact