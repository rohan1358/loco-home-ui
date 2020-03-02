import React, { Component } from "react";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/image/locoHome.png";
import logout from "../assets/image/logOut.png";
import "../assets/css/style.css";
// import background from '../assets/image/background-image.png'

export default class addRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.inputElement = React.createRef();
  }
  render() {
    return (
      <div class="hero-text">
        <Navbar bg="dark" style={{ height: 50 }} variant="dark">
          <Navbar.Brand href="/">
            <img
              alt="loco home"
              src={logo}
              width="40"
              className="d-inline-block align-top"
            />
            <label style={{ marginLeft: 10 }}>
              <Link style={{ textDecoration: "none" }} to="/">
                LocoHome
              </Link>
            </label>
          </Navbar.Brand>
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            {/* <Nav.Link href="#link">About</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}

            {/* <Form inline>
              
              
            </Form> */}

            <Nav>
              <Nav.Link style={{ float: "right" }}>
                <Link
                  to="/admin"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <img
                    src={logout}
                    alt="logout"
                    style={{ width: 45, borderRadius: 50 }}
                  />
                  <label>nama Admin</label>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <section className="grad1">
          <div className="container" style={{ width: 600 }}>
            <h1
              style={{
                fontFamily: "cursive",
                fontWeight: "bold",
                textAlign: "center",
                color: "#69824d"
              }}
            >
              Edit Room
            </h1>
            <Form style={{ padding: 40, height: 1000 }}>
              <div>
                <Form.Group>
                  <Form.Label>Home Name</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#545c4b", color: "white" }}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Owner Name</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#545c4b", color: "white" }}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Provinsi</Form.Label>
                  <select
                    name="lokasi"
                    id="lokasi"
                    class="form-control"
                    style={{ backgroundColor: "#545c4b", color: "white" }}
                  >
                    <option value="0" selected="selected">
                      Semua Lokasi
                    </option>
                    <option class="level-0" value="aceh">
                      Aceh
                    </option>
                    <option class="level-1" value="blangpidie">
                      Bali
                    </option>
                    <option class="level-1" value="Banten">
                      Banten
                    </option>
                    <option class="level-0" value="Bengkulu">
                      Bengkulu
                    </option>
                    <option class="level-1" value="DKI Jakarta">
                      DKI Jakarta
                    </option>
                    <option class="level-1" value="Gorontalo">
                      Gorontalo
                    </option>
                    <option class="level-1" value="Jambi">
                      Jambi
                    </option>
                    <option class="level-1" value="Jawa Barat">
                      Jawa Barat
                    </option>
                    <option class="level-1" value="Jawa Tengah">
                      Jawa Tengah
                    </option>
                    <option class="level-1" value="Jawa Timur">
                      Jawa Timur
                    </option>
                    <option class="level-0" value="Kalimantan Barat">
                      Kalimantan Barat
                    </option>
                    <option class="level-1" value="Kalimantan Selatan">
                      Kalimantan Selatan
                    </option>
                    <option class="level-1" value="Kalimantan-Tengah">
                      Kalimantan Tengah
                    </option>
                    <option class="level-1" value="Kalimantan Timur">
                      Kalimantan Timur
                    </option>
                    <option class="level-1" value="Kalimantan Utara">
                      Kalimantan Utara
                    </option>
                    <option class="level-1" value="Kepulauan Bangka Belitung">
                      Kepulauan Bangka Belitung
                    </option>
                    <option class="level-1" value="Kepulauan-Riau">
                      Kepulauan Riau
                    </option>
                    <option class="level-0" value="Lampung">
                      Lampung
                    </option>
                    <option class="level-0" value="Maluku">
                      Maluku
                    </option>
                    <option class="level-1" value="Maluku Utara">
                      Maluku Utara
                    </option>
                    <option class="level-1" value="Nusa-Tenggara-Barat">
                      Nusa Tenggara Barat
                    </option>
                    <option class="level-1" value="Nusa-Tenggara-Timur">
                      Nusa Tenggara Timur
                    </option>
                    <option class="level-1" value="Papua">
                      Papua
                    </option>
                    <option class="level-1" value="Riau">
                      Riau
                    </option>
                    <option class="level-0" value="Sulawesi-Selatan">
                      Sulawesi Selatan
                    </option>
                    <option class="level-0" value="Sulawesi-Tengah">
                      Sulawesi Tengah
                    </option>
                    <option class="level-1" value="Sulawesi Tenggara">
                      Sulawesi Tenggara
                    </option>
                    <option class="level-0" value="Sulawesi Utara">
                      Sulawesi Utara
                    </option>
                    <option class="level-1" value="Sumatera-Barat">
                      Sumatera Barat
                    </option>
                    <option class="level-1" value="Sumatera-Selatan">
                      Sumatera Selatan
                    </option>
                    <option class="level-1" value="Sumatera-Utara">
                      Sumatera Utara
                    </option>
                    <option class="level-1" value="Yogyakarta">
                      Yogyakarta
                    </option>
                  </select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kota Kabupaten</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#545c4b", color: "white" }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kecamatan</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#545c4b", color: "white" }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Detail Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    style={{
                      backgroundColor: "#545c4b",
                      color: "white",
                      height: 80
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#545c4b", color: "white" }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Long</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#545c4b", color: "white" }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Lat</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#545c4b", color: "white" }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" inline>
                  {/* <div inline>
              <Form.Check type="checkbox" label="Check me out" />
              <Link style={{ float: "right" }} to="/forgotpassword">
                Forgot Password
              </Link>
            </div> */}
                </Form.Group>
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      marginTop: 20,
                      textAlign: "center",
                      width: 100,
                      width: 200,
                      backgroundColor: "#69824d"
                    }}
                    type="submit"
                  >
                    <Link
                      to="/"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Edit
                    </Link>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </section>
      </div>
    );
  }
}
