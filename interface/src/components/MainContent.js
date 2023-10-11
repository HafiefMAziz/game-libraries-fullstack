import React from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage,AboutPage,DetailPage } from '../pages';
const MainContent = () => {
  return (
   <>
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
         
    </Routes>
   </>
  )
}

export default MainContent