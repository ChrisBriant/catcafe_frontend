import {useContext, useState, useEffect} from 'react';
import {Context as ApiContext} from '../context/ApiContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import {transformTableData} from '../helpers/general';
//import floorplan from '../assets/cat_cafe_floor_plan.svg';
import FloorPlan from './FloorPlan';


const Tables = props => {
  const {state:{tables,displayTables}} = useContext(ApiContext);

  return (
    <Row>
      <Col>
        <FloorPlan tables={displayTables}/>
      </Col>
    </Row>
  )
}

//<img className="floorplan" alt="floor plan" src={floorplan}/>
export default Tables;
