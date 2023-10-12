import React, { useState, useEffect, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CreateForm from "./CreateForm";
import { deleteGame, getGames} from "../../fetchs/gameFetch";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Index() {
  const [games, setGames] = useState([]);
  const [gamesChange, setGamesChange] = useState(false);
  const changeGames = (state) => setGamesChange(state)
  useEffect(() => {
    getGames((result) => {
      setGames(result.games)
      setGamesChange(true)
    });
    console.log(gamesChange)
  }, [gamesChange]);

  const handleDelete = (gameId) => {
    setGamesChange(true);
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteGame(gameId, (res) => {
          setGamesChange(false);
          MySwal.fire({
            title: <p>Delete a Game success</p>,
            text: `${res.deletedGame.title} has been deleted from Data!`,
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <>
      <CreateForm gamesChange={changeGames}/>
      <table className="table table-striped border mb-4 align-middle">
        <thead>
          <tr>
            <th className="col-md-1">No</th>
            <th className="col-md-2">Title</th>
            <th className="col-md-2">Genres</th>
            <th className="col-md-2">Release Year</th>
            <th className="col-md-2">Publisher</th>
            <th className="col-md-3 text-center">Options</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{game.title}</td>
                <td>
                  {game.genres.map((genre, index) => {
                    return game.genres.length === index + 1 ? (
                      <Fragment key={index}>{genre.name}.</Fragment>
                    ) : (
                      <Fragment key={index}>{genre.name}, </Fragment>
                    );
                  })}
                </td>
                <td>{game.yearRelease}</td>
                <td>{game.publisher ? game.publisher.name : "-"}</td>
                <td className="text-center">
                  <Link
                    to={`/dashboard/games/detail/${game.id}`}
                    type="button"
                    className="btn btn-primary me-1"
                  >
                    <i className="bi bi-info-square"></i>
                  </Link>
                  <Link
                    to={`/dashboard/games/updateform/${game.id}`}
                    type="button"
                    className="btn btn-warning me-1"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <Button
                    onClick={() => handleDelete(game.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Index;
