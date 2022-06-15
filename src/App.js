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


function App() {
  
  return (
    <BrowserRouter>
      
      <Navbar />
      
      <Nosotros/>

      <Routes>
        <Route path='/' element={ <ItemListContainer/> } />
        <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<Navigate to ={"/"} /> } />

      </Routes>
      
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
