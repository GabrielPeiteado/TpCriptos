import React from 'react';
import NavBar from './NavBar.js';
import desventajas from '../assets/desventajaas.png';
import ventajas from '../assets/ventajas.png';
import Footer from './Footer.js';
export const Ventajas = () => {
    return (
        <>
            <NavBar/>
            <div className='div1'>
            <div className='ventajas'>
                <div className='titleDes'>
                    <h1>Ventajas</h1>
                    <img src={ventajas} alt="ventajas" className='desPH'/>
                </div>
                <h3>Las ventajas de las criptomonedas son las siguientes:</h3>
                <ul>
                    <li><h5>Transacciones rápidas: son más ágiles que las transferencias bancarias tradicionales.</h5></li>
                    <li><h5>Seguras: minimizan la posibilidad de fraude.</h5></li>
                    <li><h5>Sin intermediarios: no hay intermediarios en la transacción, solo la interacción entre usuario inicial y final.</h5></li>
                    <li><h5>Globales: se pueden utilizar desde cualquier país.</h5></li>
                    <li><h5>Bajas tasas e impuestos: las transacciones realizadas a través de monedas virtuales tienen un mínimo costo impositivo.</h5></li>
                </ul>
            </div>
            <div className='desventajas'>
                <div className='titleDes'>
                <h1>Desventajas</h1>
                <img src={desventajas} alt="desventajas" className='desPH'/>
                </div>
                <h3>Las desventajas de las criptomonedas son las siguientes:</h3>
                <ul>
                    <li><h5>Variabilidad en el precio: el precio está fijado únicamente por la oferta y demanda, lo que puede provocar fuertes cambios en su valor.</h5></li>
                    <li><h5>Pérdida de dinero: si se extravía la clave privada para acceder al wallet personal o billetera, es probable que se pierda todo el dinero virtual que se poseía.</h5></li>
                    <li><h5>Desconfianza: aunque la tendencia ha ido en aumento, muchas empresas aún no han incorporado las criptomonedas como medio de pago.</h5></li>
                    <li><h5>Conexión a internet: es necesario contar con una conexión a internet, dado que las transacciones solo pueden realizarse a través de la red.</h5></li>
                    <li><h5>Estafas: Como todo lo relacionado a internet, las criptomonedas no son la excepción a la hora de las estafas, y hay que tener mucho cuidado a la hora de manipularlas o donde tenerlas.</h5></li>
                    <li><h5>Gasto energético: La cantidad de energía consumida para minar criptomonedas es muy alta y esto tiene un claro impacto negativo en el medio ambiente.</h5></li>
                </ul>
            </div>
            </div>
            <Footer />
        </>

    )
}
export default Ventajas;