import React, { useState }  from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createPublisher } from "../../fetchs/publisherFetch";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function CreateForm({publishersChange}) {
  const [validated, setValidated] = useState(false);
  const [newPublisher, setNewPublisher] = useState({})

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false); publishersChange(false)};
  const handleShow = () => {setShow(true); publishersChange(true)};

  function onSubmitForm(e) {
    e.preventDefault();
    handleClose();
    createPublisher(newPublisher, (res) => {
      MySwal.fire({
        title: <p>{res.message}</p>,
        text: `${res.newPublisher.name} has been added to Data!`,
        icon: 'success'
      })
    })

  }
  return (
    <>
      <Button className="btn btn-success my-4" onClick={handleShow}>
        <i className="bi bi-plus-lg"></i>Add Publisher
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form validated={validated} onSubmit={onSubmitForm}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new Publisher</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="inputName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                type="text"
                autoFocus
                onChange={(e) => setNewPublisher({...newPublisher, name: e.target.value})}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Publisher
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateForm;
