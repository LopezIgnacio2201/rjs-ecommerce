const ItemCounter = ( {stock, setCounter, counter, handleAgregar} ) => {
   
    const handleSumar = () => {
        
        counter < stock && setCounter(counter + 1)
    }

    const handleRestar = () => {
        
        counter > 1 && setCounter(counter - 1)
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