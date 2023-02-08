import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import{cartContext} from '../../context/cartContext'

const ItemDetail = ({product}) => {
  const {addItem} = useContext(cartContext);
  const [contador, setContador] = useState(0);
  const stock = 10;
  
  const getNumeroCualquiera = (numero) => {
    console.log('El numero es ' + numero);
  }
  
  return (
    <div>
      <Card style={{ width: '18rem', }}>
        <Card.Img variant="top" src={`/images/${product.imageId}`} alt={product.title} width="200"/>
        <Card.Body>
          <Card.Title style={{color:'black'}} >{product.title}</Card.Title>
          <Card.Text style={{color:'black'}} >
          
            <h3>{product.description}</h3>
            
            <h3> Cantidad: {product.stock}</h3>
          </Card.Text>
          <ItemCount 
          contador = {contador} 
          actualizaValor = {setContador} 
          stock = {product.stock}
          getNumeroCualquiera = {getNumeroCualquiera} //nueva prop para ejecutar funcion que obtiene el numero cualquiera...
          />
          <Button style={{marginLeft: '45px'}} onClick={() => addItem(product, contador)}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail;