import { useNavigate } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'



const ItemDetail = ({item}) => {

    const {addItem, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const navigate = useNavigate()

    const handleAgregar = () => {
        if (cantidad === 0) return

        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>

            <hr/>

            {
                isInCart(item.id)
                ?  <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>
                : 
                    <ItemCounter
                    stock={item.stock}
                    counter={cantidad}
                    setCounter={setCantidad}
                    handleAgregar={handleAgregar}
                    />
            }
            

    
            <br></br>
            <button className="btn btn-primary" onClick={handleVolver}>VOLVER</button>
        </div>
    )
}

export default ItemDetail