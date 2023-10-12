import React, { useState , useEffect }  from "react";
import { Button, Form, Modal } from "react-bootstrap";
import MultiSelect from 'react-select'
import { createGame } from "../../fetchs/gameFetch";
import { getPublishers } from "../../fetchs/publisherFetch";
import { getGenres } from "../../fetchs/genreFetch";
import { getPlatforms } from "../../fetchs/platformFetch";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function CreateForm({gamesChange}) {
  const [validated, setValidated] = useState(false);
  const [newGame, setNewGame] = useState({
    title: "",
    imageUrl: null,
    description: "",
    yearRelease: 0,
    publisherId: 0,
    genreIds: [],
    platformIds: []
  })
  const [publishers, setPublishers] = useState([])
  const [genres, setGenres] = useState([])
  const [platforms, setPlatforms] = useState([])

  useEffect(() => {
    getPublishers(result => setPublishers(result.publishers));
    getGenres(result => setGenres(result.genres));
    getPlatforms(result => setPlatforms(result.platforms));
  }, []);

  
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false); gamesChange(false)};
  const handleShow = () => {setShow(true); gamesChange(true)};

  function onSubmitForm(e) {
    e.preventDefault();
    handleClose();
    createGame(newGame, (res) => {
      MySwal.fire({
        title: <p>{res.message}</p>,
        text: `${res.newGame.title} has been added to Data!`,
        icon: 'success'
      })
    })

  }
  return (
    <>
      <Button className="btn btn-success my-4" onClick={handleShow}>
        <i className="bi bi-plus-lg"></i>Add Game
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form validated={validated} onSubmit={onSubmitForm}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="inputTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                name="title"
                type="text"
                placeholder="The Witcher"
                autoFocus
                onChange={(e) => setNewGame({...newGame, title: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control required name="title" type="text" as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputImageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="imageUrl"
                type="url"
                placeholder="https://placehold.co/600x400/png"
                onChange={(e) => setNewGame({...newGame, imageUrl: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputYearRelease">
              <Form.Label>Year Release</Form.Label>
              <Form.Control
                required
                name="yearRelease"
                type="number"
                defaultValue={2023}
                min="1900"
                max="2100"
                onChange={(e) => setNewGame({...newGame, yearRelease: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputPublisher">
              <Form.Label>Publishers</Form.Label>
              <Form.Select required name="publisherId" type="number"
                onChange={(e) => setNewGame({...newGame, publisherId: e.target.value})}
              >
                {
                  publishers.map((publisher, index) => {
                    return(
                      <option key={index} value={publisher.id}>{publisher.name}</option>
                    )
                  })
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputGenre">
              <Form.Label>Genres</Form.Label>
              <MultiSelect className="basic-multi-select" name="genres" isMulti multiple type="number" 
                options = {genres} 
                getOptionValue = {(option) => option.id}
                getOptionLabel = {(option) => option.name}
                onChange={e => setNewGame({...newGame, genreIds: e.map(genre => genre.id)})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputPlatform">
              <Form.Label>Platforms</Form.Label>
              <MultiSelect className="basic-multi-select" name="platforms" isMulti  multiple type="number" 
                options = {platforms} 
                getOptionValue = {(option) => option.id}
                getOptionLabel = {(option) => option.name}
                onChange={e => setNewGame({...newGame, genreIds: e.map(platform => platform.id)})}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Game
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateForm;
