import { useNavigate } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";

const ItemDetail = ({item}) => {

    const navigate = useNavigate()

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
            <ItemCounter
            stock={item.stock}
            item={item}
            />
            
            <button className="btn btn-primary" onClick={handleVolver}>VOLVER</button>
        </div>
    )
}

export default ItemDetail