import React, { useState, useEffect } from "react";
import { detailGame, getGames } from "../../fetchs/gamesFetch";
import { useParams } from "react-router-dom";
import "./detail.css";

const DetailPage = () => {
  const [games, setGames] = useState([]);
  const [listGames, setListGames] = useState([]);
  const params = useParams();

  useEffect(() => {
    const { id } = params;
    detailGame(+id, (result) => {
      setGames(result);
    });

    return () => {};
  }, [params]);

  useEffect(() => {
    getGames((result) => setListGames(result));
    return () => {};
  }, []);

  let genre = [];
  games.genres?.map((e) => {
    return genre.push(e.name);
  });

  let platform = [];
  games.platforms?.map((e) => {
    return platform.push(e.name);
  });

  return (
    <>
      <div className="row">
        <div className="leftcolumn">
          <div className="cards">
            <h2>{games.title}</h2>
            <h5>{games.createdAt}</h5>
            <img className="gameimg" src={games.imageUrl}></img>
            <div className="description">{games.description}</div>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="cards">
            <h2>Detail</h2>
            <p> Release Year : {games.yearRelease} </p>
            <p>Publisher : {games.publisher?.name}</p>
            <p>Genres : {genre.join(", ")}</p>
            <p>Platforms : {platform.join(", ")}</p>
          </div>
          <div className="cards">
            <h3>Popular Post</h3>
            {listGames.map((e) => {
              return(
                <img className="anothers" src={e.imageUrl}></img>
               
              )
           
            })}
<br />
            
          </div>
          <div className="cards">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
