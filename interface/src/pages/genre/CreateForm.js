import React, { useState }  from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createGenre } from "../../fetchs/genreFetch";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function CreateForm({genresChange}) {
  const [validated, setValidated] = useState(false);
  const [newGenre, setNewGenre] = useState({})

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false); genresChange(false)};
  const handleShow = () => {setShow(true); genresChange(true)};

  function onSubmitForm(e) {
    e.preventDefault();
    handleClose();
    createGenre(newGenre, (res) => {
      MySwal.fire({
        title: <p>{res.message}</p>,
        text: `${res.newGenre.name} has been added to Data!`,
        icon: 'success'
      })
    })

  }
  return (
    <>
      <Button className="btn btn-success my-4" onClick={handleShow}>
        <i className="bi bi-plus-lg"></i>Add Genre
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form validated={validated} onSubmit={onSubmitForm}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new Genre</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="inputName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                type="text"
                autoFocus
                onChange={(e) => setNewGenre({...newGenre, name: e.target.value})}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Genre
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateForm;
