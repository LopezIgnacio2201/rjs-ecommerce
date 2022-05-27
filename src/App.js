import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react';
import Navbar from "./components/Navbar"
import {Nosotros} from './components/Nosotros'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'



function App() {
  
  return (
    <div className="App">
      
      <Navbar />
      
      <Nosotros/>

     

      <ItemListContainer/>

    </div>
  );
}

export default App;
