import React, { useState, useEffect, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CreateForm from "./CreateForm";
import { deleteGenre, getGenres} from "../../fetchs/genreFetch";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Index() {
  const [genres, setGenres] = useState([]);
  const [genresChange, setGenresChange] = useState(false);
  const changeGenres = (state) => setGenresChange(state)
  useEffect(() => {
    getGenres((result) => {
      setGenres(result.genres)
      setGenresChange(true)
    });
  }, [genresChange]);

  const handleDelete = (genreId) => {
    setGenresChange(true);
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
        deleteGenre(genreId, (res) => {
          setGenresChange(false);
          MySwal.fire({
            title: <p>Delete a Genre success</p>,
            text: `${res.deletedGenre.title} has been deleted from Data!`,
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <>
      <CreateForm genresChange={changeGenres}/>
      <table className="table table-striped border mb-4 align-middle">
        <thead>
          <tr>
            <th className="col-md-1">No</th>
            <th className="col-md-3">Name</th>
            <th className="col-md-2">Created At</th>
            <th className="col-md-2">Updated At</th>
            <th className="col-md-3 text-center">Options</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{genre.name}</td>
                <td>{genre.createdAt}</td>
                <td>{genre.updatedAt}</td>
                <td className="text-center">
                  <Link
                    to={`/dashboard/genres/updateform/${genre.id}`}
                    type="button"
                    className="btn btn-warning me-1"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <Button
                    onClick={() => handleDelete(genre.id)}
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
