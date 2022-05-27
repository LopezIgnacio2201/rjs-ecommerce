import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { Spinner } from "react-bootstrap"
import { pedirDatos } from '../mock/pedirDatos'
import ItemList from '../ItemList/ItemList'



export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        
        pedirDatos()
            .then((resp) => {
                setItems(resp)       
        })
        .catch((error) => {
            console.log("Error", error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return(
        <section className="ItemList">
            
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemList items={items}/>
            }
          
           
        </section>
    )
}