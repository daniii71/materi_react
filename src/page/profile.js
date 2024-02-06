import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Profile() {
  return (
    <Container className="mt-4">
      <Row>
        <Col xl={4}>
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                src="https://cdn.idntimes.com/content-images/post/20230515/ejen-ali-f432f57b842618651da7d79da97640ea.jpg"
                alt="Profile Picture"
                className="img-fluid rounded-circle mb-4"
              />
              <p className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </p>
              <button className="btn btn-primary" type="button">
                Upload new image
              </button>
            </div>
          </div>
        </Col>
        <Col xl={8}>
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <Form>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <label className="small mb-3" htmlFor="inputNama">
                          Nama
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="inputNama"
                          value="Dhani"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="small mb-3" htmlFor="inputEmail">
                          Email
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail"
                          value="dani@gmail.com"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="small mb-3" htmlFor="inputPhone">
                          Phone number
                        </label>
                      </td>
                      <td>
                        <input
                          type="tel"
                          className="form-control"
                          id="inputPhone"
                          placeholder="Enter your phone number"
                          value="083-456-7890"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button className="btn btn-primary" type="button">
                  Save changes
                </button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
