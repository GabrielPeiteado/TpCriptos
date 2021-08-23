import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Paginate from './Paginate.js';
import bitcoin from '../assets/Bitcoin-Logo.png';
import xrp from '../assets/xrp-icon-freelogovectors.net_.png';
import ethereum from '../assets/Ethereum-Logo.png';
import litecoin from '../assets/logo.png';
export const TiposDeCriptos = () => {
    return (
        <>
            <NavBar/>

            <h1 className='titleTipos'>Tipos de Criptomonedas</h1>

            <div className='div1'>

                <div className='divTipos'>

                    <h2>Entre los principales tipos de criptomonedas podemos encontrar:</h2>

                    <div className='criptosPH'>
                        <div className='Bitcoin'>
                            <h3>Bitcoin</h3>
                            <p className='pBit'>Se la considera la primera criptomoneda que estuvo disponible en el mercado. Fue creada en 2008 bajo el seudónimo de Satoshi Nakamoto. Cada unidad de bitcoin se compone de 100 millones de satoshis. La tramitación de pagos puede realizarse a través de redes o canales bidireccionales, como Lightning Network. Existen diversas aplicaciones para esta criptomoneda en diversos campos de negocio.</p>
                        </div>
                        <img src={bitcoin} alt="bitcoin" className='bitcoinPH'/>
                    </div>

                    <div className='criptosPH'>
                        <div className='BitcoinXRP'>
                            <h3>XRP</h3>
                            <p className='pBit'>Esta moneda virtual fue creada por Ripple Labs para ayudar a que diferentes entidades financieras pudieran utilizar el poder de esta tecnología en sus sistemas de transacciones internacionales. Conocida como la criptomoneda de los bancos, no requiere de tantas confirmaciones para su uso como el Bitcoin.</p>
                        </div>
                        <img src={xrp} alt="bitcoin" className='xrpPH'/>
                    </div>

                    <div className='criptosPH'>
                        <div className='Bitcoin'>
                            <h3>Ethereum</h3>
                            <p className='pBit'>El protocolo ETH fue concebido como una versión mejorada del Bitcoin que proporcionó diversos avances, tales como límites de retiro, contratos financieros o mercados de juegos de azar, a través de un lenguaje de programación muy difundido. El protocolo ETH se mueve más rápido que su moneda virtual y ha permitido aumentar la eficiencia de la industria computacional.</p>
                        </div>
                        <img src={ethereum} alt="bitcoin" className='ethPH'/>
                    </div>

                    <div className='criptosPH'>
                        <div className='Bitcoin1'>
                            <h3>Litecoin</h3>
                            <p className='pBit'>Red de pagos globales y código abierto completamente descentralizada. Permite tiempos de confirmación de transacciones más rápidos y eficiencia de almacenamiento mejorada, por lo que se considera como complementaria a Bitcoin.</p>
                        </div>
                       <img src={litecoin} alt="bitcoin" className='litecoinPH'/>
                    </div>

                </div>
                
            </div>

            <Footer />
        </>

    )
}
export default TiposDeCriptos;