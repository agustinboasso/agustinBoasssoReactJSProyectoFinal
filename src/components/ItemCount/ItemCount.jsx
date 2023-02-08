import swal from 'sweetalert';
import './ItemCount.css';


const ItemCount = ({contador, actualizaValor, stock, getNumeroCualquiera}) => {
  
  const numeroCualquiera = 10;//
  const onAdd = () => {
    if(stock === contador){
      swal({
        title:  "No hay stock",
        text:   "No tenemos mas unidades disponibles!",
        icon:   "warning",
        button: "ok",
      });
      return;
    }
    actualizaValor(contador + 1);
    getNumeroCualquiera(numeroCualquiera);//
  };
  const restar = () => {
    if(contador === 0){
      swal("", "No puedes comprar unidades negativas!", "error");
      return;
    }
    actualizaValor(contador -1)
  };
  
  return (
    <div className="counter">
      <div className="controllers">
        <button onClick={restar}>-</button>
        <div>
          <span style={{color:'black'}}>{contador}</span>
        </div>
        <button onClick={onAdd}>+</button>
      </div>
      
      
    </div>
  )
}

export default ItemCount;