import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Item.css';

const Item = ({producto}) => {
  return (
   /* <Row xs={1} md={4} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={`/images/${producto.imageId}`} alt={producto.title} width="200" />
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>
              <h3>{producto.categoryId}</h3>
              <h3>{producto.description}</h3>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      

    ))}
  </Row>*/    
    
      <Card className='card'  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`/images/${producto.imageId}`} alt={producto.title} width="200"/>
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>
            <h3>{producto.categoryId}</h3>
            <h3>{producto.description}</h3>
         
          
          </Card.Text>
        
        
        </Card.Body>
      </Card>
   
    
    
    
    /*<li key={producto.id} width="200" className="product" >
        <img src={`/images/${producto.imageId}`} alt={producto.title} width="200"/>
        <h2>{producto.title}</h2>
        <h3>{producto.categoryId}</h3>
        <h3>{producto.description}</h3>
    </li>*/
  );
};

export default Item;