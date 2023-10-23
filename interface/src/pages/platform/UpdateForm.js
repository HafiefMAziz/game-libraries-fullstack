import React, { useState, useEffect } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOnePlatform, updatePlatform } from "../../fetchs/platformFetch";



import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


function UpdateForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [updatedPlatform, setUpdatedPlatform] = useState({});
  
  useEffect(() => {
    getOnePlatform(params.id, (res) =>  setUpdatedPlatform(res.getPlatform));
  }, [params]);
  
  const handleUpdate = (updatedPlatform) => {
    console.log(updatedPlatform);
    updatePlatform(updatedPlatform, updatedPlatform.id, (res) => {
      MySwal.fire({
        title: <p>{res.message}</p>,
        text: `${res.oldPlatform.name} has been updated!`,
        icon: 'success'
      })
      navigate("/dashboard/platforms");
    });
  }
  
  return (
    <>
      <div className="container-fluid px-5 pt-5">
        <Link to={`/dashboard/platforms`} type="button" className="btn btn-primary my-4 me-3"> 
          <i className="bi bi-arrow-left-square"></i> Back
        </Link>
        <div className="div border rounded mb-4">
          <Form className="my-4 mx-4">
            <div className="row mb-4">
              <h4>Update Platform</h4>
            </div>
            <Row className="mb-4">
                <Form.Label htmlFor="inputName" className="col-sm-1 col-form-label">
                  Name
                </Form.Label>
                <div className="col-sm-4">
                  <Form.Control
                    required
                    defaultValue={updatedPlatform.name}
                    onChange={(e) => setUpdatedPlatform({ ...updatedPlatform, name: e.target.value, })}
                    name="name"
                    type="text"
                    className="form-control"
                    id="inputName"
                  />
                </div>
            </Row>
            <Button className="btn btn-success me-1" onClick={() => handleUpdate(updatedPlatform)}>
              Update
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default UpdateForm;
