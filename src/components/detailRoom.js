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
                  to="/add"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Add Room
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
                Search Room
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
          <div style={{marginTop:15}}>
            <label style={{fontSize:25, fontWeight:"bold"}}>List Room</label>
          </div>
            <div style={{ marginRight: 10 }}>
              <div>
                <div>
                <>
  <Card className="justify-content-center" style={{textAlign:"center"}}>
      <div>
          <h4 style={{textAlign:"left", paddingLeft:30, paddingTop:10, fonstSize:"300"}}>Name Room</h4>
    <Card.Img  variant="top" src={logo} style={{width:200}} />
      </div>
    <Card.Body>
      <Card.Text style={{textAlign:"left"}}>
          <table style={{borderBottom:1}}>
              <tr>
                  <td style
                  ={{width:250}}>Owner Name</td>
                  <td style={{width:20}}>:</td>
                  <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
              </tr>
              <tr>
                  <td style
                  ={{width:100}}>phone Number</td>
                  <td style={{width:20}}>:</td>
                  <td>lorem Ipsum</td>
              </tr>
              <tr>
                  <td style
                  ={{width:100}}>Address</td>
                  <td style={{width:20}}>:</td>
                  <td>lorem Ipsum</td>
              </tr>
              <tr>
                  <td style
                  ={{width:100}}>Long/Lat</td>
                  <td style={{width:20}}>:</td>
                  <td>lorem Ipsum</td>
              </tr>
              <tr>
                  <td style
                  ={{width:100}}>Action</td>
                  <td style={{width:20}}>:</td>
                  <td>lorem Ipsum</td>
              </tr>
          </table>
          <div style={{float:"right"}}>
          <>
          <br/>
  <Button style={{marginRight:20, backgroundColor:"#20a12b"}} ><Link to="/updateroom" style={{textDecoration:"none", color:"white"}}>Update Room</Link></Button>
  <Button variant="danger">Delete Room</Button>
</>
          </div>
      </Card.Text>
      
    </Card.Body>
  </Card>
</>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}
