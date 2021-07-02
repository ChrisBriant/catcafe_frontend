import {useContext, useState, useEffect} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookingDialog from './BookingDialog';
import MessageDialog from './MessageDialog';
//import {transformTableData} from '../helpers/general';
//import floorplan from '../assets/cat_cafe_floor_plan.svg';
import FloorPlan from './FloorPlan';


const Tables = props => {
  const {clearError,changeView,
    state:{tables,displayTables,errorState,errorMessage}} = useContext(ApiContext);

  const [bookingDate,setBookingDate] = useState(null);
  const [tableNumber,setTableNumber] = useState(0);
  const [showBookingDiag,setShowBookingDiag] = useState(false);

  const bookTable = (tableNo) => {
    if(!displayTables[tableNo].booked) {
      let bookDate = new Date(`${tables.dateStr} ${tables.timeStr}`);
      setBookingDate(bookDate);
      setTableNumber(tableNo);
      setShowBookingDiag(true);
    }
    console.log('want to book',displayTables[tableNo].booked);
  }

  const cancelDialog = () => {
    setShowBookingDiag(false);
  }

  console.log('ERROR', tables, displayTables);

  return (
    <>
      <MessageDialog
        show={errorState}
        cancelDialog={()=>clearError()}
        message={errorMessage}
        title='Unable to Book Table'
      />
      <BookingDialog
        show={showBookingDiag}
        tableNo={tableNumber}
        bookingDate={bookingDate}
        cancelDialog={cancelDialog}
      />
      <Row>
        <Col md={3}></Col>
        <Col md={6}><button onClick={() => changeView('slots')} className="std-btn" title="Change">{tables.dateStr} {tables.timeStr.time}</button></Col>
        <Col md={3}></Col>
      </Row>
      <h2>Book a Table</h2>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <FloorPlan tables={displayTables} bookTable={bookTable}/>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  )
}

//<img className="floorplan" alt="floor plan" src={floorplan}/>
export default Tables;
