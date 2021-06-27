import {useContext} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import {transformDayData} from '../helpers/general';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Day = props => {
  const {state:{day}} = useContext(ApiContext);

  console.log('DAY',Object.keys(day.times));
  transformDayData(day);

  return (
    <Row>
      <Col>
        {
          Object.keys(day.times).map((time) => (
            <div key={time}>
              {time}
            </div>
          ))
        }
      </Col>
    </Row>
  );
}

export default Day;
