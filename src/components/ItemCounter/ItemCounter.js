import { useState } from "react"
import Item from "../Item/Item"

const ItemCounter = ( {stock,item} ) => {
   
    const [counter, setCounter] = useState(0)

    const handleSumar = () => {
        
        counter < stock && setCounter(counter + 1)
    }

    const handleRestar = () => {
        
        counter > 1 && setCounter(counter - 1)
    }

    const handleAgregar = () => {
        console.log(item)

        const ItemToCart = {
            item,
            cantidad:counter
        }
        
        stock > 1 && console.log("Item agregado con exito")
        stock < 1 && console.log("Item no se ha podido agregar")

        console.log(ItemToCart)
        
    }

    return (
        <div className="my-5">
            <button onClick={handleRestar}  className="btn btn-primary">-</button>
            <span className="mx-3">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <hr/>

            <button onClick={handleAgregar} className="btn btn-success my-2">Agregar al carrito</button>    
    
        </div>
    )
}

export default ItemCounter