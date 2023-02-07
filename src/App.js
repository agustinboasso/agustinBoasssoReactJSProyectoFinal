
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer.jsx/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';
function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="category/:category" element={<ItemListContainer/>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>} />
          <Route path="cart" element={<Cart/>}/>
        
        </Routes> 
        <div>Este es el footer</div>
          
      </BrowserRouter>
    </CartProvider>
  );
}
    
export default App;
