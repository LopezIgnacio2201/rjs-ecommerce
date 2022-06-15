import './Navbar2.css'
import { Dropdown } from 'bootstrap'

export const menuDesplegable = () => {

    return (
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Buzos</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Remeras</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Pantalones</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    )
}

export default menuDesplegable