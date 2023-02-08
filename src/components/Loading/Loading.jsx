import Spinner from 'react-bootstrap/Spinner';
import { useEffect } from "react";


const Loading = () => {
  useEffect(()=>{
    return() =>{
        console.log('La lista ya cargo')
    }
  },[]);
    return (
    
    <Spinner className="spinner" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Loading