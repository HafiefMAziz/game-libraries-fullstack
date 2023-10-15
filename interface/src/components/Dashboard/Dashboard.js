import React from 'react'
import { Route, Routes} from "react-router-dom";
import "./dashboard.css";
import Game from "../../pages/game/Index"
import UpdateFormGame from "../../pages/game/UpdateForm"
import Publisher from "../../pages/publisher/Index"
import UpdateFormPublisher from "../../pages/publisher/UpdateForm"
import Genre from "../../pages/genre/Index"
import UpdateFormGenre from "../../pages/genre/UpdateForm"
import Platform from "../../pages/platform/Index"
import UpdateFormPlatform from "../../pages/platform/UpdateForm"
import User from "../../pages/user/Index"
import UpdateFormUser from "../../pages/user/UpdateForm"
import 'bootstrap/dist/css/bootstrap.css';

function Dashboard() {
  return (
    <>
      <div className="container-fluid px-5 py-5">
      <Routes>
        <Route exact path="/dashboard/games" element={<Game />}></Route>
        <Route exact path="/dashboard/games/updateform/:id" element={<UpdateFormGame />}></Route>
        <Route exact path="/dashboard/publishers" element={<Publisher />}></Route>
        <Route exact path="/dashboard/publishers/updateform/:id" element={<UpdateFormPublisher />}></Route>
        <Route exact path="/dashboard/genres" element={<Genre />}></Route>
        <Route exact path="/dashboard/genres/updateform/:id" element={<UpdateFormGenre />}></Route>
        <Route exact path="/dashboard/platforms" element={<Platform />}></Route>
        <Route exact path="/dashboard/platforms/updateform/:id" element={<UpdateFormPlatform />}></Route>
        <Route exact path="/dashboard/users" element={<User />}></Route>
        <Route exact path="/dashboard/users/updateform/:id" element={<UpdateFormUser />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default Dashboard