import swal from 'sweetalert';
import { useState } from "react";
import {cartContext} from "./cartContext";

const CartProvider = ({children}) => {
  const [cart, setCart] = useState ([]);
  
  const addItem = (item,quantity) => {
    let newCart;
    let product = cart.find((prod) => prod.id === item.id);
    if (product){
      product.quantity += quantity;

      if(product.quantity > product.stock){
        swal("No hay stock!","", "warning");
        return;
      }
      
      newCart = [...cart];

    } else {
    
    product ={
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: quantity,
      description:item.description,
      category: item.categoryId,
      image: item.imageId,
      stock: item.stock,

    };
    newCart = [...cart, product]
    console.log(cart)
  }
  setCart(newCart);
};

  const removeItem = (productId)=>{
    setCart(cart.filter((product) => product.id !== productId));

  }
  
  

  const clear = () =>{
    
    
    setCart([]);
  }
  
  
  return (
    <cartContext.Provider value={{cart, addItem, removeItem,clear}}>
        {/*app.js */}
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider;