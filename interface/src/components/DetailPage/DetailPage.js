import React, { useState, useEffect } from "react";
import { detailGame } from "../../fetchs/gamesFetch";
import { useParams } from "react-router-dom";
import "./detail.css";

const DetailPage = () => {
  const [games, setGames] = useState([]);
  const params = useParams();

  useEffect(() => {
    const { id } = params;
    detailGame(+id, (result) => {
      setGames(result       
      );
    });
   
    return () => {};
  }, [params]);

  return (
    <>
      <div className="row">
        <div className="leftcolumn">
          <div className="cards">
            <h2>{games.title}</h2>
            <h5>{games.createdAt}</h5>
            <img className="fakeimg" src={games.imageUrl}></img>
            <p>{games.description}</p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="cards">
            <h2>About Me</h2>
            <div className="fakeimg">Image</div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div className="cards">
            <h3>Popular Post</h3>
            <div className="fakeimg">Image</div>
            <br />
            <div className="fakeimg">Image</div>
            <br />
            <div className="fakeimg">Image</div>
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
