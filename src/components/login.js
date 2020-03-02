/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Form, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/image/locoHome.png";
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      hidden:true
    }
  }
  toggleShow=()=> {
    this.setState({ hidden: !this.state.hidden });
  }
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt="loco home"
        src={logo}
        width="45"
        className="d-inline-block align-top"
      />
      <label style={{marginLeft:20}}><Link style={{textDecoration:"none"}} to="#">LocoHome</Link></label>
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
        <button style={{marginRight:10}}><Link style={{color:"black", textDecoration:"none"}} to="/login">Login</Link></button>
        <button>Register</button>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
      <div className="container" style={{ marginTop: 100, width: 350 }}>
        <Form>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <img style={{ marginBottom: 25 }} src={logo} width="250" />
            <h2>Welcome Back</h2>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group>
            <Form.Label >Password</Form.Label>
            <Form.Control  type={this.state.hidden ? "password" : "text"} placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" inline>
            <label></label>
            <div inline style={{display:"flex"}}>
              <Form.Check type="checkbox" onClick={this.toggleShow} />
              <Link style={{ position: "relative",
    marginLeft: 80 }} to="/forgotpassword">
                Forgot Password
              </Link>
            </div>
          </Form.Group>
          <div>
            <Button
              style={{ marginTop: 20,textAlign: "center", width: '100%' }}
              variant="primary"
              type="submit"
            >
              <Link to="/" style={{color:"#fff", textDecoration:"none"}}>Login</Link>
            </Button>
          </div>
        </Form>
      </div>
      </div>
    );
  }
}
