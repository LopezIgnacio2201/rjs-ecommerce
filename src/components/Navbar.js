import React, { Component } from "react";
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Button} from "./Button"
import CartWidget from "./CartWidget/CartWidget"
import "./CartWidget/CartWidget.css"
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'


class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {
        return(
        <header>
            

            <nav className="NavbarItems">
            <Link to={"/"}> <h1 className="navbar-logo">StreetMe   <i class="fa-solid fa-hat-cowboy"></i></h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <CartWidget/> 
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (

                            <li key={index}>
                                <Link className={item.cName} to={item.url} >
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button>Registrarme</Button>  
                          
            </nav>
        </header>
        )
    }
}

export default Navbar