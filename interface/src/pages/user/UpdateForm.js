import React, { useState, useEffect } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneUser, updateUser } from "../../fetchs/userFetch";



import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


function UpdateForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [updatedUser, setUpdatedUser] = useState({});
  
  useEffect(() => {
    getOneUser(params.id, (res) =>  setUpdatedUser(res));
  }, [params]);
  
  const handleUpdate = (updatedUser) => {
    console.log(updatedUser);
    updateUser(updatedUser, updatedUser.id, (res) => {
      console.log(res)
      MySwal.fire({
        title: <p>{res.message}</p>,
        text: `User has been updated!`,
        icon: 'success'
      })
      navigate("/dashboard/users");
    });
  }
  
  return (
    <>
      <Link to={`/dashboard/users`} type="button" className="btn btn-primary my-4 me-3"> 
        <i className="bi bi-arrow-left-square"></i> Back
      </Link>
      <div className="div border rounded mb-4">
        <Form className="my-4 mx-4">
          <div className="row mb-4">
            <h4>Update User</h4>
          </div>
          <Row className="mb-4">
              <Form.Label htmlFor="inputUsername" className="col-sm-1 col-form-label">
                Username
              </Form.Label>
              <div className="col-sm-4">
                <Form.Control
                  required
                  defaultValue={updatedUser.username}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, username: e.target.value, })}
                  name="username"
                  type="text"
                  className="form-control"
                  id="inputName"
                />
              </div>
              <Form.Label htmlFor="inputEmail" className="col-sm-1 col-form-label">
                Email
              </Form.Label>
              <div className="col-sm-4">
                <Form.Control
                  required
                  defaultValue={updatedUser.email}
                  onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value, })}
                  name="email"
                  type="text"
                  className="form-control"
                  id="inputName"
                />
              </div>
          </Row>
          <Row className="mb-4">
              <Form.Label htmlFor="inputPassword" className="col-sm-1 col-form-label">
                Password
              </Form.Label>
              <div className="col-sm-4">
                <Form.Control
                  required
                  onChange={(e) => setUpdatedUser({ ...updatedUser, password: e.target.value, })}
                  name="password"
                  type="password"
                  className="form-control"
                  id="inputName"
                />
              </div>
              <Form.Label htmlFor="levelInput" className="col-sm-1 col-form-label">
                Publishers
              </Form.Label>
              <div className="col-sm-4">
                <Form.Select required 
                defaultValue={"admin"}
                name="level" 
                type="text" 
                id="levelInput"
                  onChange={(e) => setUpdatedUser({ ...updatedUser, level: +e.target.value, })}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </Form.Select>
              </div>
          </Row>
          <Button className="btn btn-success me-1" onClick={() => handleUpdate(updatedUser)}>
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdateForm;
