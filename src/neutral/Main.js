import {useState, useContext, useEffect} from 'react';
import paw from '../assets/paw.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Route, BrowserRouter } from 'react-router-dom';
import Booking from './Booking';
import MeetTheCats from '../unauthflow/MeetTheCats';
import Signin from '../unauthflow/Signin';
import Register from '../unauthflow/Register';
import Home from '../unauthflow/Home';
import MyBookings from '../authflow/MyBookings';
import PasswordReset from '../unauthflow/PasswordReset';
import ForgotPassword from '../unauthflow/ForgotPassword';
import {Context} from '../context/AuthContext';

const Main = () => {
    const {isAuthed,signout, state:{authed,isAdmin}} = useContext(Context);
    const [search,setSearch] = useState('');
    //const [authed,setAuthed] = useState(false);

    const logOut = (e) => {
      e.preventDefault();
      signout();
      console.log('Am I authed',authed);
    }

    useEffect(() => {
      isAuthed();
      console.log('Am I an admin?',isAdmin);
    },[]);


    return (
      <>
        <div className="main">
          <BrowserRouter>
            <Navbar expand="lg" className="navbar-custom">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto center-nav">
                  <img className="paw-img" alt="logo" src={paw}/>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/cats">Meet the Cats</Nav.Link>
                  {
                    authed
                    ? <>
                      <Nav.Link href="/book">Book Now</Nav.Link>
                      <Nav.Link href="/mybookings">My Bookings</Nav.Link>
                    </>
                    : <>
                      <Nav.Link href="/signin">Signin</Nav.Link>
                      <Nav.Link href="/register">Register</Nav.Link>
                    </>
                  }
                  <img className="paw-img" alt="logo" src={paw}/>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/cats">
                <MeetTheCats />
            </Route>
            {
              authed
              ? <>
                <Route exact path="/book">
                    <Booking/>
                </Route>
                <Route exact path="/mybookings">
                    <MyBookings/>
                </Route>
              </>
              : <>
                <Route exact path="/signin">
                    <Signin/>
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/forgotpassword/">
                    <ForgotPassword />
                </Route>
                <Route exact path="/passwordreset/:hash">
                  <PasswordReset/>
                </Route>
              </>
            }
          </BrowserRouter>
        </div>


        <footer>
          <h1>Footer content here</h1>
        </footer>
      </>
    )
}


export default Main;
