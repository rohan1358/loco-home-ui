import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import newPassword from "./components/newPassword"
import Login from "./components/login"
import Home from "./components/home"
import Admin from "./components/admin"
import Add from "./components/addRoom"
import Room from "./components/room"
import DetailRoom from "./components/detailRoom"
import ForgotPassword from './components/forgotPassword';
import EditRoom from './components/editRoom';
import History from './components/history';
import Booking from './components/booking';
import Cancel from './components/cancel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Navbar} from 'react-bootstrap';
// import logo from './assets/image/locoHome.png'

const AppWithRouter = () => (
    <BrowserRouter>
    <Fragment>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/" component={Home}/>
   <Route exact path="/newpassword" component={newPassword} />
   <Route exact path="/forgotpassword" component={ForgotPassword} />
   <Route exact path="/admin" component={Admin} />
   <Route exact path="/add" component={Add} />
   <Route exact path="/listroom" component={Room} />
   <Route exact path="/detailroom" component={DetailRoom} />
   <Route exact path="/updateroom" component={EditRoom} />
   <Route exact path="/history" component={History} />
   <Route exact path="/booking" component={Booking} />
   <Route exact path="/cancel" component={Cancel} />
    </Fragment>
       
       {/* <Route exact path="/add" component={AddProduct} />
       <Route path="/edit/:id" component={EditProduct} /> */}
     </BrowserRouter>
   )
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
