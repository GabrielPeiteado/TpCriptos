import React from 'react'
import {Nav, NavDropdown} from 'react-bootstrap';
export const NavBar = () => {
    return (
        <div className='navBar'>
        <Nav className="mr-auto">
            <Nav.Link href="/" className='hometp'>Home</Nav.Link>
            <span>Criptomonedas</span>
            <NavDropdown title="&#9776;" id="basic-nav-dropdown" className='desplegabletp'>
                <NavDropdown.Item href="/historia">Historia</NavDropdown.Item>
                <NavDropdown.Item href="/caracteristicas">Características</NavDropdown.Item>
                <NavDropdown.Item href="/ventajas&desventajas">Ventajas y desventajas</NavDropdown.Item>
                <NavDropdown.Item href="/tipos">Tipos de Criptomonedas</NavDropdown.Item>
                <NavDropdown.Item href="/wallets">Hardware Wallets</NavDropdown.Item>
                <NavDropdown.Item href="/minado">Minado de Criptomonedas</NavDropdown.Item>
                <NavDropdown.Item href="/conclusion">Conclusión</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
            </Nav>
        </div>
    )
}
export default NavBar;