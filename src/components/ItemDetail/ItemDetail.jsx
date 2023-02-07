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
      <Card style={{ width: '18rem', marginLeft:'750px' }}>
        <Card.Img variant="top" src={`/images/${product.imageId}`} alt={product.title} width="200"/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          
            <h3>{product.description}</h3>
            <br />
            <h3> Cantidad: {product.stock}</h3>
          </Card.Text>
          <ItemCount 
          contador = {contador} 
          actualizaValor = {setContador} 
          stock = {product.stock}
          getNumeroCualquiera = {getNumeroCualquiera} //nueva prop para ejecutar funcion que obtiene el numero cualquiera...
          />
          <Button onClick={() => addItem(product, contador)}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
    
    
    
    
    
    
    /*<div width="200" className="product" >
        <img src={`/images/${product.imageId}`} alt={product.title} width="200" />
        <h2>Estos productos estan listos para tu carrito {contador} </h2>
        <h2>{product.title}</h2>
        <h3>{product.categoryId}</h3>
        <h3>{product.description}</h3>
        <h3> Cantidad: {product.stock}</h3>
        <ItemCount 
        contador = {contador} 
        actualizaValor = {setContador} 
        stock = {product.stock}
        getNumeroCualquiera = {getNumeroCualquiera} //nueva prop para ejecutar funcion que obtiene el numero cualquiera...
        />
        <div>
          <button onClick={() => addItem(product, contador)}>Agregar al carrito</button>
        </div>
    </div>*/
    
  )
}

export default ItemDetail;