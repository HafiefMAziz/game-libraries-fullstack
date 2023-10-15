import React, { useState, useEffect, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CreateForm from "./CreateForm";
import { deletePublisher, getPublishers} from "../../fetchs/publisherFetch";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Index() {
  const [publishers, setPublishers] = useState([]);
  const [publishersChange, setPublishersChange] = useState(false);
  const changePublishers = (state) => setPublishersChange(state)
  useEffect(() => {
    getPublishers((result) => {
      setPublishers(result.publishers)
      setPublishersChange(true)
    });
  }, [publishersChange]);

  const handleDelete = (publisherId) => {
    setPublishersChange(true);
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
        deletePublisher(publisherId, (res) => {
          setPublishersChange(false);
          MySwal.fire({
            title: <p>Delete a Publisher success</p>,
            text: `${res.deletedPublisher.title} has been deleted from Data!`,
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <>
      <CreateForm publishersChange={changePublishers}/>
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
          {publishers.map((publisher, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{publisher.name}</td>
                <td>{publisher.createdAt}</td>
                <td>{publisher.updatedAt}</td>
                <td className="text-center">
                  <Link
                    to={`/dashboard/publishers/updateform/${publisher.id}`}
                    type="button"
                    className="btn btn-warning me-1"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <Button
                    onClick={() => handleDelete(publisher.id)}
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
