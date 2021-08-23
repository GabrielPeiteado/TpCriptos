import React from 'react';
import NavBar from './NavBar.js';
import Paginate from './Paginate.js';
import Footer from './Footer.js';
export const Caracteristicas = () => {
    return (
        <>
            <NavBar/>
            <div className='div1'>
            <div className='caracteristicasCripto'>
                <h1>Características</h1>
                <h3>Las principales características de las criptomonedas son las siguientes:</h3>
                <ul>
                    <li><h5>Seguridad en las transacciones: se utilizan técnicas de cifrado o codificación (criptografía) que llevan tranquilidad a las partes involucradas durante la transferencia de activos, dado que evitan la falsificación o duplicación de la moneda digital.</h5></li>
                    <li><h5>Intercambiables: al igual que las monedas tradicionales, se pueden cambiar por otras divisas.</h5></li>
                    <li><h5>Sin intermediación: el contacto es de persona a persona, por lo que se evitan los costos que cobran las entidades financieras.</h5></li>
                    <li><h5>Privacidad: las transacciones con criptomonedas no requieren la declaración de identidad de ninguna de las partes intervinientes.</h5></li>
                    <li><h5>Tiempos reducidos: las liquidaciones de su compraventa se resuelven en cuestión de minutos. Si bien los pagos por internet en general son rápidos, algunas transacciones online tradicionales llevan su tiempo.</h5></li>
                </ul>
            </div>
            <div className='photoCriptos1'>
            <img src="https://www.rentafija.com/wp-content/uploads/2021/04/tipos-de-criptomonedas.jpg" alt="criptos" className='photoCriptos' />
            </div>
            </div>
            <Footer />
        </>

    )
}
export default Caracteristicas;