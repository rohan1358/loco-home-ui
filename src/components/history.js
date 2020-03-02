import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Card,
  Button
} from "react-bootstrap";
import { button } from "react";
import logo from "../assets/image/locoHome.png";
import { Link } from "react-router-dom";
import logout from "../assets/image/logOut.png";
import localtion from "../assets/image/location.png";
import "../assets/css/style.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" style={{height:50}} variant="dark">
          <Navbar.Brand href="/">
            <img
              alt="loco home"
              src={logo}
              width="45"
              className="d-inline-block align-top"
            />
            <label style={{ marginLeft: 10 }}>
              <Link style={{ textDecoration: "none" }} to="#">
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

            <Form inline>
            <button
                style={{
                  marginRight: 5,
                  height: 30,
                  boxDirection: "none",
                  boxShadow: "none",
                  borderRadius: 5,
                  backgroundColor: "lightblue"
                }}
              >
                <Link
                  to="/booking"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Booking
                </Link>
              </button>
              <button
                style={{
                  marginRight: 5,
                  height: 30,
                  boxDirection: "none",
                  boxShadow: "none",
                  borderRadius: 5,
                  backgroundColor: "lightblue"
                }}
              >
                <Link
                  to="/cancel"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Cancel
                </Link>
              </button>
              <FormControl
                style={{ marginRight: 5, width: 300, height: 30 }}
                type="text"
                placeholder="Search"
              />
              <button
                style={{
                  marginRight: 5,
                  height: 30,
                  boxDirection: "none",
                  boxShadow: "none",
                  borderRadius: 5,
                  backgroundColor: "lightblue"
                }}
              >
                Search Home
              </button>
            </Form>
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
        <div className="container">
            <h1 style={{textAlign:"center",height:100, backgroundColor:"lightgreen", padding:20 }}>History</h1>
            <div>
                <table>
                    <tr style={{color:"green", fontWeight:"bold",  backgroundColor:"lightblue"}}>
                        <td>Id Transaction</td>
                        <td>Name Room</td>
                        <td>Date</td>
                        <td>Method</td>
                        <td>Amount</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>A1</td>
                        <td>03-01-2020</td>
                        <td>Pulsa</td>
                        <td>7000</td>
                        <td style={{textAlign:"center"}}><button>Delete</button></td>
                    </tr>
                </table>
            </div>
        </div>
      </div>
    );
  }
}
