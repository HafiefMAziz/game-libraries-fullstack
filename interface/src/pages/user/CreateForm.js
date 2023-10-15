import React, { useState }  from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createUser } from "../../fetchs/userFetch";
import Select from 'react-select';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function CreateForm({usersChange}) {
  const [validated, setValidated] = useState(false);
  const [newUser, setNewUser] = useState({})
  const [levelSelection, setLevelSelection] = useState([
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ])

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false); usersChange(false)};
  const handleShow = () => {setShow(true); usersChange(true)};

  function onSubmitForm(e) {
    e.preventDefault();
    handleClose();
    console.log(newUser)
    createUser(newUser, (res) => {
      console.log(res)
      // MySwal.fire({
      //   title: <p>{res}</p>,
      //   text: `${res} has been added to Data!`,
      //   icon: 'success'
      // })
    })

  }
  return (
    <>
      <Button className="btn btn-success my-4" onClick={handleShow}>
        <i className="bi bi-plus-lg"></i>Add User
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form validated={validated} onSubmit={onSubmitForm}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="inputUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                name="username"
                type="text"
                autoFocus
                onChange={(e) => setNewUser({...newUser, username: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                name="email"
                type="text"
                autoFocus
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                type="password"
                autoFocus
                onChange={(e) => setNewUser({...newUser, password: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputPublisher">
              <Form.Label>Level</Form.Label>
              <Select 
              required 
              name="level" type="text" 
              value={levelSelection[0]}
              options={levelSelection}
              onChange={(e) => setNewUser({...newUser, level: e.target.value})}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add User
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateForm;
