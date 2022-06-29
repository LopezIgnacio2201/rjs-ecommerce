import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react';
import Navbar from "./components/Navbar"
import {Nosotros} from './components/Nosotros'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Contacto from './components/contacto/contacto';
import Catalogo from './components/Catalogo/Catalogo';
import Precios from './components/Precios/Precios';
import Registro from './components/Registro/Registro';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';



function App() {
 
  return (
  <CartProvider>

    <BrowserRouter>
      
      <Navbar />
      
      <Nosotros/>

      <Routes>
        <Route path='/' element={ <ItemListContainer/> } />
        <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<Navigate to ={"/"} /> } />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/catalogo' element={<Catalogo/>} />
        <Route path='/precios' element={<Precios/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/cart' element={<Cart/>} />



      </Routes>
      
      
      <Footer/>
    
    </BrowserRouter>
  
  </CartProvider>
  );
}

export default App;
