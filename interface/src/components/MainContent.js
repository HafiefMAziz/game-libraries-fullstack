import React from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage,AboutPage } from '../pages';
const MainContent = () => {
  return (
   <>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/about" element={<AboutPage></AboutPage>} />
    </Routes>
   </>
  )
}

export default MainContent