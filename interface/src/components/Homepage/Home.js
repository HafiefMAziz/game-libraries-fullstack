import React, { useState, useEffect } from "react";

import { getGames } from "../../fetchs/gamesFetch";
import { Link } from "react-router-dom";
import "./home.css";
import Loading from "../../helper/Loading/loading";
const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGames((result) => setGames(result));

    return () => {};
  }, []);


  return (
    <div className="container">

      {games.length > 0 ?
      games.map((e) => {
     
        return (
          <Link to={`games/detail/${e.id}`}>
             <div className="card-home">
            <div className="card-home-header">
              <img src={e.imageUrl} alt="rover" />
            </div>
            <div className="card-home-body">
              {/* {e.genres.map((el) => {
                return <span className="tag tag-teal">{el.name}</span>;
              })} */}
              <span className="tag tag-teal">{e.yearRelease}</span>

              <h4>{e.title}</h4>
              <p>{e.description}</p>
            </div>
          </div>
          </Link>
         
        );
      }) : <Loading></Loading>}
    </div>
  );
};

export default Home;
