import {useContext, useState, useEffect} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookingDialog from './BookingDialog';
//import {transformTableData} from '../helpers/general';
//import floorplan from '../assets/cat_cafe_floor_plan.svg';
import FloorPlan from './FloorPlan';


const Tables = props => {
  const {state:{tables,displayTables}} = useContext(ApiContext);

  const [bookingDate,setBookingDate] = useState(null);
  const [tableNumber,setTableNumber] = useState(0);
  const [showBookingDiag,setShowBookingDiag] = useState(false);

  const bookTable = (tableNo) => {
    let bookDate = new Date(`${tables.dateStr} ${tables.timeStr}`);
    setBookingDate(bookDate);
    setTableNumber(tableNo);
    setShowBookingDiag(true);
    console.log('want to book',bookingDate);
  }

  const cancelDialog = () => {
    setShowBookingDiag(false);
  }

  return (
    <>
      <BookingDialog
        show={showBookingDiag}
        tableNo={tableNumber}
        bookingDate={bookingDate}
        cancelDialog={cancelDialog}
      />
      <Row>
        <Col>
          <FloorPlan tables={displayTables} bookTable={bookTable}/>
        </Col>
      </Row>
    </>
  )
}

//<img className="floorplan" alt="floor plan" src={floorplan}/>
export default Tables;
