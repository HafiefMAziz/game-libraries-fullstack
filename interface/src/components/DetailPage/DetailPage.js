import React, { useState, useEffect } from "react";
import { detailGame, getGames } from "../../fetchs/gamesFetch";
import { useParams, useNavigate } from "react-router-dom";

import "./detail.css";
import Loading from "../../helper/Loading/loading";

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

  const isoDate = new Date(games.createdAt)

  const year = isoDate.getFullYear()
  const month = isoDate.getMonth() +1
  const date = isoDate.getDate()

  function getMonth(mth) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    if (mth >= 0 && mth <= 11) {
      return months[mth];
    } else {
      return 'Invalid Month Index';
    }
  }
  return (
    <>
      <div className="row-detail">
        <div className="leftcolumn">
          <div className="cards">
            <h2>{games.title}</h2>
            <h5>{date} {getMonth(month)} {year}</h5>
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
            {limitItems.length > 0 ? (
              limitItems.map((e) => {
                return (
                  <a href={`${e.id}`} onClick={handleLinkClick}>
                    <img className="anothers" src={e.imageUrl}></img>
                  </a>
                );
              })
            ) : (
              <Loading></Loading>
            )}
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
