import { useEffect } from "react";


const Loading = () => {
  useEffect(()=>{
    return() =>{
        console.log('La lista ya cargo')
    }
  },[]);
    return (
    
    //generar un spinner con css o react bootstrap

    <div>Cargando...</div>
  )
}

export default Loading