import {useContext} from 'react';
import cafelogo from '../assets/catcafelogo.svg';
import catface from '../assets/cat_face.svg';
import catCafePicture from '../assets/cat-cafe-shop.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spacer from '../components/Spacer';
import {Context} from '../context/AuthContext';


const Home = () => {
  const {state:{authed}} = useContext(Context);

  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.0391274071358!2d-1.8945556300330004!3d52.4840319870263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc855c50db93%3A0xced36d3f85cb1eec!2s206%20Corporation%20St%2C%20Birmingham%20B4%206QD!5e0!3m2!1sen!2suk!4v1623907652718!5m2!1sen!2suk" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  return (
    <>
      <header className ="header" >
        <Spacer height="1rem"/>
        <div><img className="logo-image" alt="logo" src={cafelogo}/></div>
        <Spacer height="2rem"/>
        <div><img alt="hero" src={catface}/></div>
        <a href="#smashups">See the latest here</a>
      </header>
      <section id="about">
        <Spacer height="1rem"/>
        <h1>About Us</h1>
        <p>We are one of the first cat cafes to open in the UK, located in the
        heart of the country, in Birmingham.</p>
        <p>We welcome all cat lovers to come and join us and meet the cats!</p>
        <p>Come and visit our beautiful Cafe located at: </p>
        <p><strong>206 Corporation St, Birmingham B4 6QD</strong></p>
        <Row>
          <Col md="6"><img className="page-img" alt="cafe" src={catCafePicture}/></Col>
          <Col md="6">
            <div  className="page-img" dangerouslySetInnerHTML={{ __html: iframe }} />
          </Col>
        </Row>
      </section>

      <section id="howitworks">
        <h1>How It Works</h1>
        <h2>Booking is Required</h2>
        <p>To get the most out of our cafe experience, we recommend that you book online to
          avoid dissapointment. You are welcome to drop in, but our cafe tends to be extremely
          popular so we recommend making a booking to avoid disappointment.</p>

      </section>

      <section id="pricing">
        <h1>Pricing</h1>
        <p>La la di da</p>

      </section>
    </>
  );
}

export default Home;
