import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import {collection, addDoc, getFirestore, doc, updateDoc}   from "firebase/firestore"
import swal from 'sweetalert'

const Cart = () => {
    const {cart, removeItem, clear} = useContext(cartContext);
    const [formValue,setFormValue] = useState({
        name:'',
        phone:'',
        email:'',
    })
    const [order, setOrder] =useState({});
    const db = getFirestore();
    
    useEffect(()=>{
        setOrder(
            {
                buyer:{
                    name:'',
                    phone:'',
                    email:'',
    
                },
                item: cart.map((product)=>{
                    return {
                        name: product.name,
                        price: product.price,
                        id: product.id,
                    }
                }),
                total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity,0 ),
            }    
        )
    },[])
    
    if(cart.length === 0){
        return (
            <h1>No hay productos en el carrito</h1>
        )
    }
    
    const createOrder = (event) => {
        event.preventDefault();
        const querySnapshot = collection (db,'orders')
        
        const currentOrder = {
            ...order,
            buyer: formValue,
        }

        addDoc(querySnapshot, currentOrder)
            .then((response)=>{
                updateStockProducts();
                
                swal("Orden creada con exito!", "ID: " + response.id , "success");
        })
        .catch(error => console.log(error))    };

    
    const updateStockProducts = ()=> {
        
        cart.forEach((product)=> {
            const querySnapshot = doc(db, 'items', product.id)
            
            updateDoc(querySnapshot, {   
                stock: product.stock - product.quantity,
            })
            .then(()=>{

            })
            .catch((error)=> console.log(error))
        })
    };

    const handleInput = (event)=>{
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
            [event.target.phone]: event.target.value,
            [event.target.email]: event.target.value,
        })
    }
    
    return (

     <div style={{display:'flex', flexDirection:'row'}}>

       
        <div style={{width:'500px', marginRight:'450px'}}>
            <ul>

                {cart.map((product)=>(
                    <li key={product?.id} style={{listStyle:"none"}}>
                
                    <div className="cartStyle" 
                        style={{                                                                    
                            
                            display:'flex',                         
                            flexDirection:'row', 
                            justifyContent:'space-between',
                            textDecoration:'none',
                            padding:'15px',
                            flexBasis:'auto',
                            

                        }}
                    >
                        <img 
                            alt={product.id} 
                            src={` /images/${product.image}`} 
                            width="90px" 
                            style={{textDecoration:'none'}}
                        />
                        
                        <h3>{product.name}&nbsp;&nbsp;&nbsp;</h3>
                        
                        <h4>Cantidad:&nbsp;{product.quantity}&nbsp;&nbsp;&nbsp;</h4>
                        
                        <h4>$$:&nbsp;{product.price}&nbsp;&nbsp;</h4>
                        <button onClick={()=> removeItem(product.id)} style={{height:'150px',}}> Eliminar del carrito </button>
                    </div>
                </li>
            ))}
        </ul>
        <div style = {{padding:'15px',marginTop:'150px'}}>
            <button onClick={() => clear()}>Vaciar carrito</button>
            <br />
            
        </div>  
    </div>
    <div style={{padding:'70px'}}>
        <form style={{display:'flex', flexDirection:'column'}}>
            <input name='name' type="text" placeholder="name" 
            value={formValue.name}
            onChange={handleInput}
            style={{margin:'10px'}}/>
            <input name='phone' type="text" placeholder="phone" 
            value={formValue.phone}
            onChange={handleInput}
            style={{margin:'10px'}}/>
            <input name='email' type="text" placeholder="email" 
            value={formValue.email}
            onChange={handleInput}
            style={{margin:'10px'}}/>
            <div>
                <button onClick={createOrder} style={{marginLeft:'75px'}}>Crear una orden</button>
            </div>
        </form>
    </div>
  </div>
  )
}

export default Cart;

//Clase