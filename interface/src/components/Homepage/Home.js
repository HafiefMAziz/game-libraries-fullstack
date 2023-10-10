import React, { useState, useEffect } from "react";

import { getGames } from "../../fetchs/gamesFetch";
import "./home.css";
const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGames((result) => setGames(result));

    return () => {};
  }, []);
  return (
    <div className="container">
      {games.map((e) => {
        return (
          <a href="#">
             <div className="card">
            <div className="card-header">
              <img src={e.imageUrl} alt="rover" />
            </div>
            <div className="card-body">
              {e.genres.map((el) => {
                return <span className="tag tag-teal">{el.name}</span>;
              })}

              <h4>{e.title}</h4>
              <p>{e.description}</p>
            </div>
          </div>
          </a>
         
        );
      })}
    </div>
  );
};

export default Home;
