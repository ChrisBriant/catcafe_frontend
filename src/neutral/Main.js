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
import Contact from './Contact';
import MeetTheCats from '../unauthflow/MeetTheCats';
import Signin from '../unauthflow/Signin';
import Register from '../unauthflow/Register';
import Home from '../unauthflow/Home';
import MyBookings from '../authflow/MyBookings';
import PasswordReset from '../unauthflow/PasswordReset';
import ForgotPassword from '../unauthflow/ForgotPassword';
import TermsDialog from '../components/TermsDialog';
import CookiesDialog from '../components/CookiesDialog';
import {Context} from '../context/AuthContext';

const Main = () => {
    const {isAuthed,signout,hasAcceptedCookies, state:{authed,isAdmin,cookiesAccepted}} = useContext(Context);
    const [search,setSearch] = useState('');
    const [showTandC,setShowTandC] = useState(false);


    const logOut = (e) => {
      e.preventDefault();
      signout();
    }

    useEffect(() => {
      isAuthed();
      hasAcceptedCookies();
    },[]);

    const launchTandC = () => {
      setShowTandC(true);
    }

    const cancelDialog = () => {
      setShowTandC(false);
    }


    return (
      <>
        <TermsDialog show={showTandC} cancelDialog={cancelDialog} />
        <CookiesDialog show={!cookiesAccepted} />
        <div className="main">
          <BrowserRouter>
            <Navbar expand="lg" className="navbar-custom">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto center-nav">
                  <div className="men-img-cont"><img className="paw-img" alt="logo" src={paw}/></div>
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
                <Route exact path="/contact">
                  <Contact/>
                </Route>
              </>
            }
          </BrowserRouter>
        </div>


        <footer>
          <a href="#" onClick={launchTandC}>Terms and Conditions</a>&nbsp;|
          <a href="https://github.com/ChrisBriant/catcafe_frontend" target="_blank"> Git Hub</a>&nbsp;|
          <a href="/contact" target="_blank"> Contact</a>
        </footer>
      </>
    )
}


export default Main;
