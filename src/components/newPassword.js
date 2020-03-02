/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Form, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/image/locoHome.png";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      password2: "",
      hidden: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handleChange(event) {
    this.setState({ password: event.target.value });
  }
  handleChange2(event) {
    this.setState({ password2: event.target.value });
  }

  handleSubmit(event) {
    const pass1 = this.state.password;
    const pass2 = this.state.password2;
    if (pass1 === pass2) {
      alert("A name was submitted: "+ this.state.password);
      event.preventDefault();
    } else {
      alert("password tidak sama");
    }
  }
  toggleShow() {
    const pass1 = this.state.password
    const pass2 = this.state.password2
    if(pass1.typeof && pass2.typeof === "password"){
      pass1.typeof = "text";
      pass2.typeof = "text"
    }else{
      pass1.typeof = "password"
      pass2.typeof = "password"
    }
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <image
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
            <image style={{ marginBottom: 25 }} src={logo} width="250" />
            <h3>Change New Password</h3>
          </div>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              id="myInput"
              type="password"
              onChange={this.handleChange}
              placeholder="New Password"
            /><br/>
            <Form.Label>Confirm Your Password</Form.Label>
            <Form.Control
            id="myInput"
              type="password"
              onChange={this.handleChange2}
              placeholder="Confirm Password"
            />
            <input
              type="checkbox"
              style={{width:20,}}
              onClick={this.toggleShow}
            />
            <label>show password</label>
          </Form.Group>
          <div style={{ textAlign: "center", marginLeft: 13 }}>
            <Button
              onClick={this.handleSubmit}
              style={{ marginTop: 30, textAlign: "center", width: 200 }}
              variant="primary"
              type="submit"
            >
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/newpassword"
              >
                Forgot My Password
              </Link>
            </Button>
          </div>
        </Form>
      </div>
      </div>
    );
  }
}
