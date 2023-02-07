import './style.css'
import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Link  } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [singleProduct,setSingleProduct] =useState({});
  const {id} = useParams();
  
  
  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "items", id);
    getDoc(querySnapshot)
      .then((response)=>{
          console.log(response.id);
          
          setSingleProduct({id: response.id, ...response.data()});
      })
      .catch((error)=>{console.log(error)})
  };
  
  /*const getProduct = fetch(`https://fakestoreapi.com/products/${id}`, {
    method:'GET',
  });*/

  useEffect(()=>{
    getProduct();
     
  },[]);
  
  return (
    
 
    <div>
      <Link to="/"> VOLVER </Link>
      <ItemDetail product = {singleProduct} />
    </div>
  )
}

export default ItemDetailContainer