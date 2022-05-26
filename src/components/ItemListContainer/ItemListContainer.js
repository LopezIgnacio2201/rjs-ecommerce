import './ItemListContainer.css'

export const ItemListContainer = ({nombre}) => {
    return(
        <section className="ItemList">
            <h2>Nuestros productos</h2>
            <hr/>

            <p>Bienvenido {nombre}</p>
        </section>
    )
}