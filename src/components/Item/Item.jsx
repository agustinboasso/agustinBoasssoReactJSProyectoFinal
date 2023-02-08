import Card from 'react-bootstrap/Card';
import './Item.css';

const Item = ({producto}) => {
  return (
 
      
      
      
      
      <Card className="container"  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`/images/${producto.imageId}`} alt={producto.title} width="200"/>
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text className='CardText'>
            
            <h3>{producto.description}</h3>
            <h3> U$D : {producto.price}</h3>
          </Card.Text>
        
        
        </Card.Body>
      </Card>
   
    
    
  );
};

export default Item;