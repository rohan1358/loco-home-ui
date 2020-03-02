/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import {button} from 'react'
import logo from "../assets/image/locoHome.png";
import { Link } from "react-router-dom";
import logout from '../assets/image/logOut.png'

export default class Home extends Component {
  render() {
    return (
        <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
            <Link to="/">
          <img
            alt="loco home"
            src={logo}
            width="45"
            className="d-inline-block align-top"
          /></Link>
          <label style={{ marginLeft: 10 }}>
            <Link style={{ textDecoration: "none" }} to="/">
              LocoHome
            </Link>
          </label>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          
            {/* <Nav.Link href="#link">About</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
          
          <Form inline>
      {/* <FormControl style={{marginRight:5,width:300, height:30}} type="text" placeholder="Search"  /> */}
      {/* <button style={{marginRight:5, height:30, boxDirection:"none", boxShadow:"none",borderRadius:5, backgroundColor:"lightblue"}}>Search Home</button> */}
    </Form>
    <Nav>
            <Nav.Link style={{ float: "right" }}>
              <img src={logout} alt="logout" style={{width:45, borderRadius:50}} /><Link to="/admin" style={{textDecoration:"none", color:"white"}}><label>nama Admin</label></Link>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
          <h1 style={{fontFamily:"cursive", fontWeight:"bold"}}>My Profile</h1>
          <div style={{ textAlign:"center"}}>
          <img  src={logout} style={{width:150, borderRadius:70}}></img><br/>
          <label style={{fontSize:30, fontWeight:"bold"}}>Nama Admin</label>
          </div>
          <hr/>
          <div >
              <table style={{border:1, borderColor:"green", width:400, height:200, fontWeight:"bold", fontSize:20, fontFamily:"cursive"}}>
                  <tr>
                      <td>Phone Number</td>
                      <td style={{width:25}}>:</td>
                      <td>Phone Number</td>
                  </tr>
                  <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>Address</td>
                  </tr>
                  <tr>
                      <td>Long/Lat</td>
                      <td>:</td>
                      <td>Long/Lat</td>
                  </tr>
                  <tr>
                      <td>Action</td>
                      <td>:</td>
                      <td>Action</td>
                  </tr>
              </table>
              
          </div>
      </div><br/><br/>
      <div style={{textAlign:"center"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0138111182823!2d106.82366891525675!3d-6.3922189953748045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebe4c3b5345b%3A0xf01a3030786bdc69!2sPlaza%20Depok%2C%20Jl.%20Margonda%20Raya%2C%20Depok%2C%20Kec.%20Pancoran%20Mas%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016431!5e0!3m2!1sid!2sid!4v1583058128570!5m2!1sid!2sid" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
      </div>
      <div style={{ textAlign: "center", }}>
            <Button
              style={{ marginTop: 20,textAlign: "center", width: 100, marginBottom:50 }}
              variant="primary"
              type="submit"
            >
              <Link to="/login" style={{textDecoration:"none", color:"black"}}>Logout</Link>
            </Button>
          </div>
      </div>
    );
  }
}
