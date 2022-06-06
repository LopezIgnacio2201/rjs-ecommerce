import "./Counter.css"
import { useState, useEffect } from "react"


const Counter = () => {

    const [contador, setContador] = useState({
        contador: 1,
        fyh: new Date()
    })

    const incrementar = () => {
        setContador( {
            contador: contador.contador + 1,
            fyh: new Date()
        } )
    }

    const decrementar = () => {
        setContador( {
            contador : contador.contador - 1,
            fyh: new Date()
        } )
    }
    
    useEffect(() => {
        console.log("Componente montado")
    }, [])

    useEffect(() => {
        console.log("Contador actualizado")
    }, [contador])

    return (
        <div className="container my-5">
            <h2>Counter</h2>
            <hr/>
            <div className="botoncontador">
            <button className="btn btn-primary" onClick={decrementar}>-</button>
            <button className="btn btn-primary" onClick={incrementar}>+</button>
            </div>
            <hr/>
            <h4>{contador.contador}</h4>
            {/* <p>FyH del último click: {new Date().toLocaleString()}</p> */}
            <p>Fecha y Hora del último click: {contador.fyh.toLocaleString()}</p>
        </div>
    )
}

export default Counter