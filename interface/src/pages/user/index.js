import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CreateForm from "./CreateForm";
import { deleteUser, getUsers} from "../../fetchs/userFetch";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Index() {
  const [users, setUsers] = useState([]);
  const [usersChange, setUsersChange] = useState(false);
  const changeUsers = (state) => setUsersChange(state)
  useEffect(() => {
    getUsers((result) => {
      setUsers(result)
      setUsersChange(true)
    });
  }, [usersChange]);

  const handleDelete = (userId) => {
    setUsersChange(true);
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
        deleteUser(userId, (res) => {
          setUsersChange(false);
          MySwal.fire({
            title: <p>Delete a User success</p>,
            text: `${res.deletedUser.title} has been deleted from Data!`,
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <>
      <CreateForm usersChange={changeUsers}/>
      <table className="table table-striped border mb-4 align-middle">
        <thead>
          <tr>
            <th className="col-md-1">No</th>
            <th className="col-md-2">Username</th>
            <th className="col-md-2">Email</th>
            <th className="col-md-2">Level</th>
            <th className="col-md-3 text-center">Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.level}</td>
                <td className="text-center">
                  <Link
                    to={`/dashboard/users/updateform/${user.id}`}
                    type="button"
                    className="btn btn-warning me-1"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <Button
                    onClick={() => handleDelete(user.id)}
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
