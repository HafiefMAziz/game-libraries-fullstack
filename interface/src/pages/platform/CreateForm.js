import React, { useState }  from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createPlatform } from "../../fetchs/platformFetch";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function CreateForm({platformsChange}) {
  const [validated, setValidated] = useState(false);
  const [newPlatform, setNewPlatform] = useState({})

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false); platformsChange(false)};
  const handleShow = () => {setShow(true); platformsChange(true)};

  function onSubmitForm(e) {
    e.preventDefault();
    handleClose();
    createPlatform(newPlatform, (res) => {
      MySwal.fire({
        title: <p>{res.message}</p>,
        text: `${res.newPlatform.name} has been added to Data!`,
        icon: 'success'
      })
    })

  }
  return (
    <>
      <Button className="btn btn-success my-4" onClick={handleShow}>
        <i className="bi bi-plus-lg"></i>Add Platform
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form validated={validated} onSubmit={onSubmitForm}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new Platform</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="inputTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                name="name"
                type="text"
                autoFocus
                onChange={(e) => setNewPlatform({...newPlatform, name: e.target.value})}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Platform
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateForm;
