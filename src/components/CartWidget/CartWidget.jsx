import {useContext, useState,useEffect} from 'react';
import { cartContext } from '../../context/cartContext';

export const CartWidget = () => {
  const {cart} =useContext(cartContext);
  const [ total , setTotal ] =useState(0);

  useEffect(()=>{
    const totalProducts =
    setTotal(cart?.reduce((prev,curr) => {
      console.log(prev,curr)
      return prev + curr.quantity;
    },0))
  },[cart])
  
 
  return (
    <div>
        {total}
        <img src="/images/cart.png" alt="cart" width="30px" />
    </div>
  )
};

export default CartWidget;