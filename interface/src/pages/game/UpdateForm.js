import React, { useState, useEffect } from "react";
import { Form, Button, Row } from "react-bootstrap";
import MultiSelect from 'react-select'
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneGame, updateGame } from "../../fetchs/gameFetch";
import { getPublishers } from "../../fetchs/publisherFetch";
import { getGenres } from "../../fetchs/genreFetch";
import { getPlatforms } from "../../fetchs/platformFetch";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


function UpdateForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [updatedGame, setUpdatedGame] = useState({});
  const [publishers, setPublishers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState()
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  
  useEffect(() => {
    getOneGame(params.id, (result) => {
      let genreLists = []
      result.getGame.genres.forEach(genre => {
        genreLists.push(genre)
      });
      let platformLists = []
      result.getGame.platforms.forEach(platform => {
        platformLists.push(platform)
      });
      setUpdatedGame({
        id: result.getGame.id,
        title : result.getGame.title,
        imageUrl : result.getGame.imageUrl,
        description : result.getGame.description,
        publisherId : result.getGame.publisherId,
        yearRelease : result.getGame.yearRelease,
        genreIds: genreLists.map(genre => genre.id),
        platformIds: platformLists.map(platform => platform.id),
      });
      setSelectedGenres(genreLists)
      setSelectedPlatforms(platformLists)
    });
    getPublishers((result) => setPublishers(result.publishers));
    getGenres((result) => setGenres(result.genres));
    getPlatforms((result) => setPlatforms(result.platforms));
  }, [params]);
  
  const handleUpdate = (updatedGame) => {
    updateGame(updatedGame, updatedGame.id, (res) => {
      MySwal.fire({
        title: <p>{res.message}</p>,
        text: `${res.oldGame.title} has been updated!`,
        icon: 'success'
      })
      navigate("/dashboard/games");
    });
  }
  
  return (
    <>
      <div className="container-fluid px-5 pt-5">
        <Link to={`/dashboard/games`} type="button" className="btn btn-primary my-4 me-3"> 
          <i className="bi bi-arrow-left-square"></i> Back
        </Link>
        <div className="div border rounded mb-4">
          <Form className="my-4 mx-4">
            <div className="row mb-4">
              <h4>Update Game</h4>
            </div>
            <Row className="mb-4">
                <Form.Label htmlFor="inputTitle" className="col-sm-1 col-form-label">
                  Title
                </Form.Label>
                <div className="col-sm-4">
                  <Form.Control
                    required
                    defaultValue={updatedGame.title}
                    onChange={(e) => setUpdatedGame({ ...updatedGame, title: e.target.value, })}
                    name="title"
                    type="text"
                    className="form-control"
                    id="inputTitle"
                  />
                </div>
                <Form.Label htmlFor="inputImageURL" className="col-sm-1 col-form-label">
                  Image URL
                </Form.Label>
                <div className="col-sm-4">
                  <Form.Control
                    defaultValue={updatedGame.imageUrl}
                    onChange={(e) => setUpdatedGame({ ...updatedGame, imageUrl: e.target.value, })}
                    name="imageUrl"
                    type="url"
                    className="form-control"
                    id="inputImageURL"
                  />
                </div>
            </Row>
            <Row className="mb-4">
                <Form.Label htmlFor="inputyearRelease" className="col-sm-1 col-form-label">
                  Release Year
                </Form.Label>
                <div className="col-sm-4">
                  <Form.Control
                    required
                    defaultValue={updatedGame.yearRelease}
                    onChange={(e) => setUpdatedGame({ ...updatedGame, yearRelease: e.target.value, })}
                    name="yearRelease"
                    type="number"
                    className="form-control"
                    id="inputyearRelease"
                    min="1900"
                    max="2099"
                  />
                </div>
                <Form.Label htmlFor="publisherIdInput" className="col-sm-1 col-form-label">
                  Publishers
                </Form.Label>
                <div className="col-sm-4">
                  <Form.Select required name="publisherId" type="number" id="publisherIdInput"
                    onChange={(e) => setUpdatedGame({ ...updatedGame, publisherId: +e.target.value, })}>
                    {publishers.map((publisher, index) => {
                      if (updatedGame.publisherId === publisher.id) {
                        return (
                          <option selected key={index} value={publisher.id}>
                            {publisher.name}
                          </option>
                        );
                      }else{                 
                        return (
                          <option  key={index} value={publisher.id}>
                            {publisher.name}
                          </option>
                        );
                      }
                    })}
                  </Form.Select>
                </div>
              <div className="row mb-4"></div>
              <label htmlFor="genreIdsInput" className="col-sm-1 col-form-label">
                Genres
              </label>
              <div className="col-sm-4">
                <MultiSelect className="basic-multi-select" id="genreIdsInput" name="genres" isMulti type="number" 
                    options = {genres} 
                    getOptionValue = {(option) => option.id}
                    getOptionLabel = {(option) => option.name}
                    value = {selectedGenres}
                    onChange={e => {
                      setUpdatedGame({...updatedGame, genreIds: e.map(genre => genre.id)})
                      setSelectedGenres(e)
                    }}
                  />
              </div>
              <label htmlFor="platformIdsInput" className="col-sm-1 col-form-label">
                Platforms
              </label>
              <div className="col-sm-4">
              <MultiSelect className="basic-multi-select" id="platformIdsInput" name="platforms" isMulti type="number" 
                    options = {platforms} 
                    getOptionValue = {(option) => option.id}
                    getOptionLabel = {(option) => option.name}
                    value = {selectedPlatforms}
                    onChange={e => {
                      setUpdatedGame({...updatedGame, platformIds: e.map(platform => platform.id)})
                      setSelectedPlatforms(e)
                    }}
                  />
              </div>
            </Row>
            <Row className="mb-4">
                <Form.Label htmlFor="inputDescription" className="col-sm-1 col-form-label">
                  Description
                </Form.Label>
                <div className="col-sm-6">
                  <Form.Control
                    required
                    onChange={(e) => setUpdatedGame({ ...updatedGame, description: e.target.value, })}
                    defaultValue={updatedGame.description}
                    name="description"
                    type="text"
                    as="textarea"
                    className="form-control"
                    id="inputDescription"
                    rows="5"
                  ></Form.Control>
                </div>
            </Row>
            <Button className="btn btn-success me-1" onClick={() => handleUpdate(updatedGame)}>
              Update
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default UpdateForm;
