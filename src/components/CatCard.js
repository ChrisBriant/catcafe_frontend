import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

const CatCard = props => {
  return (
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <ListGroup variant="flush">
        <ListGroup.Item><strong>Age:</strong> {props.age}</ListGroup.Item>
        <ListGroup.Item><strong>Favourite Food:</strong> {props.food}</ListGroup.Item>
        <ListGroup.Item><strong>Favourite Toy:</strong> {props.toy}</ListGroup.Item>
        <ListGroup.Item><strong>Color:</strong> {props.color}</ListGroup.Item>
        <ListGroup.Item><strong>Breed:</strong> {props.breed}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CatCard;

/*

*/
