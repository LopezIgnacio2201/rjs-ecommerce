import { Link } from "react-router-dom"
const Item = ({item}) => {

    return (
        <div>
            
            <h2>{item.nombre}</h2>
            <img src={item.img} alt="NO IMAGEN"/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
            <hr/>
            <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary my-2">Ver más</button>
            </Link>
            
        </div>
    ) 
}

export default Item