import './ItemCount.css';


const ItemCount = ({contador, actualizaValor, stock, getNumeroCualquiera}) => {
  
  const numeroCualquiera = 10;//
  const onAdd = () => {
    if(stock === contador){
      alert('No hay stock')
      return;
    }
    actualizaValor(contador + 1);
    getNumeroCualquiera(numeroCualquiera);//
  };
  const restar = () => {
    if(contador === 0){
      alert('No puedes comprar unidades negativas')
      return;
    }
    actualizaValor(contador -1)
  };
  
  return (
    <div className="counter">
      <div className="controllers">
        <button onClick={restar}>-</button>
        <div>
          <span>{contador}</span>
        </div>
        <button onClick={onAdd}>+</button>
      </div>
      
      
    </div>
  )
}

export default ItemCount;