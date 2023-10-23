import React, { useEffect, useState} from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage,AboutPage,DetailPage,ContactPage,Login } from '../pages';
import  Dashboard from "./Dashboard/Dashboard.js";
import { Navbar,Footer } from '../helper'

const MainContent = () => {
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
      {loginStatus ? (
        <Navbar loginStatus={loginStatus} loginCbHandler={loginCbHandler}></Navbar>
      ) : (
        <Navbar loginCbHandler={loginCbHandler}></Navbar>
      )}
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/about" element={<AboutPage></AboutPage>} />
      <Route path="/games">
      <Route path="detail">
          <Route path=":id" element={
           <DetailPage></DetailPage>
          }>
            </Route>
          </Route>
         </Route>
         <Route path="/contact" element={<ContactPage></ContactPage>} />
         <Route path="/login" element={<Login></Login>} />
    </Routes>
    <Dashboard></Dashboard>
    <Footer></Footer>
   </>
  )
}

export default MainContent