import {useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Spacer from '../components/Spacer';
import Calendar from '../components/Calendar';
import Day from '../components/Day';
import Tables from '../components/Tables';
import MessageDialog from '../components/MessageDialog';
import {Context} from '../context/AuthContext';
import {Context as ApiContext} from '../context/ApiContext';



const Booking = () => {
  const {state:{authed}} = useContext(Context);
  const {clearBooking,state:{dayView,tableView,bookingMade}} = useContext(ApiContext);
  //const [showDiag,setShowDiag] = useState(false);

  console.log("Hello");

  // const cancelDialog = () => {
  //   clearBooking();
  //   setShowDiag(false);
  // }

  return (
      <>
        <MessageDialog
          show={bookingMade}
          cancelDialog={() => clearBooking(false)}
          message="You have successfully made a booking"
          title="Booking Success"
        />
        <p>Some text</p>
        {
          authed
          ? <>
            {
              !dayView
              ? <Calendar/>
              : <>
                {
                  !tableView
                  ? <Day/>
                  : <Tables/>
                }
                </>
            }
          </>
          : <>
            <Calendar/>
          </>
        }
      </>
  );
}

export default Booking;
