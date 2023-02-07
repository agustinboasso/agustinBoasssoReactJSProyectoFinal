import { Link } from "react-router-dom";
import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <ul>
    {productos.map((producto) => (
      <Link key={producto.id} to={`/item/${producto.id}`}>
        <Item producto = {producto}/>
      </Link>
      
    ))}
  </ul>
  )
}

export default ItemList;
