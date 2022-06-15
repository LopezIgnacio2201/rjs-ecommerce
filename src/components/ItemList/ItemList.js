import Item from "../Item/Item"
import "./ItemList.css"



const ItemList = ( {items} ) => {

    return (
        <div>
            <h2>Nuestro productos</h2>
            
        <div className="listaDeItems">
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
        </div>
        </div>
    )
}

export default ItemList