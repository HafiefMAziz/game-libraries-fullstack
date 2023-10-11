import React, { useState, useEffect } from "react";
import { detailGame, getGames } from "../../fetchs/gamesFetch";
import {
  useParams,

  useNavigate,
} from "react-router-dom";

import "./detail.css";

const DetailPage = () => {
  const [games, setGames] = useState([]);
  const [listGames, setListGames] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
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
  const limitItems = listGames.slice(0, 3);

  const handleLinkClick = () => {
    const { id } = params;

    navigate(`/games/detail/${id}`, { replace: true });
  };

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
            <h3>Random Post</h3>
            {limitItems.map((e) => {
              return (
                <a href={`${e.id}`} onClick={handleLinkClick}>
                  <img className="anothers" src={e.imageUrl}></img>
                </a>
              );
            })}
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
