import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react';
import Navbar from "./components/Navbar"
import {Nosotros} from './components/Nosotros'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'



function App() {
  
  const usuario = {
    nombre: 'usuario',
    rol: 'usuario'
  }

  
  return (
    <div className="App">
      
      <Navbar />
      
      <Nosotros/>

      <ItemListContainer nombre={usuario.nombre}/>

    </div>
  );
}

export default App;
