import React, { useState, useEffect, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CreateForm from "./CreateForm";
import { deletePlatform, getPlatforms} from "../../fetchs/platformFetch";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Index() {
  const [platforms, setPlatforms] = useState([]);
  const [platformsChange, setPlatformsChange] = useState(false);
  const changePlatforms = (state) => setPlatformsChange(state)
  useEffect(() => {
    getPlatforms((result) => {
      setPlatforms(result.platforms)
      setPlatformsChange(true)
    });
  }, [platformsChange]);

  const handleDelete = (platformId) => {
    setPlatformsChange(true);
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
        deletePlatform(platformId, (res) => {
          setPlatformsChange(false);
          MySwal.fire({
            title: <p>Delete a Platform success</p>,
            text: `${res.deletedPlatform.title} has been deleted from Data!`,
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <>
      <CreateForm platformsChange={changePlatforms}/>
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
          {platforms.map((platform, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{platform.name}</td>
                <td>{platform.createdAt}</td>
                <td>{platform.updatedAt}</td>
                <td className="text-center">
                  <Link
                    to={`/dashboard/platforms/updateform/${platform.id}`}
                    type="button"
                    className="btn btn-warning me-1"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <Button
                    onClick={() => handleDelete(platform.id)}
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
