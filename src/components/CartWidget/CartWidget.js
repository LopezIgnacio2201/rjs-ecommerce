import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


const CartWidget = (() => {
   
    const {totalQuantity} = useCartContext()

    return (
        <Link to="/cart" className='widget'>
            <i class="fa-solid fa-cart-arrow-down"></i>
            <span>{totalQuantity()}</span>
        </Link>
    )

})

export default CartWidget