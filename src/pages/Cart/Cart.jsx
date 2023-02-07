import { useContext } from "react";
import { cartContext } from "../../context/cartContext";


const Cart = () => {
    const {cart, removeItem, clear} = useContext(cartContext);
    console.log(cart);
    if(cart.length === 0){
        return (
            <h1>No hay productos en tu carrito</h1>
        )
    }
    
    return (
    <div>
        <ul>

            {cart.map((product)=>(
                <li key={product?.id}>{product?.name}
                
                    <div 
                        style={{                                                                    
                            display:'flex',                         
                            flexDirection:'row', 
                            justifyContent:'space-between'
                        }}
                    >
                        <img 
                            alt={product.id} 
                            src={` /images/${product.image}`} 
                            width="50px" 
                        />
                        <h3>{product.name}</h3>
                        <h4>{product.category}</h4>
                        <h4>{product.quantity}</h4>
                        <h4>{product.price}</h4>
                        <button onClick={()=> removeItem(product.id)} style={{height:'20px'}}> Eliminar del carrito </button>
                    </div>
                </li>
            ))}
        </ul>
        <div style = {{marginTop:'150px'}}>
            <button onClick={() => clear()}>Vaciar carrito</button>
        </div>  
    </div>
  )
}

export default Cart;

//Clase