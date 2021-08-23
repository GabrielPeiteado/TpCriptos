import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
export const Historia = () => {
    return (
        <>
            <NavBar/>
            <div className='wall'>
            <div className='historiaCripto'>
                <h1>¿Que son las Criptomonedas?</h1> 
                <p>
                Las criptomonedas son monedas digitales también denominadas como activos financieros digitales o cripto activos. Creadas para funcionar como medio de intercambio en el que los propios poseedores de la moneda crean su valor, este tipo de monedas alternativas tienen características tecnológicas basadas en el uso de la criptografía. Esta consiste en la aplicación de diferentes técnicas de cifrado o codificado de la información con el fin de hacerla ininteligible a receptores no autorizados.
                </p>
                <p>Se puede decir que el Bitcoin (BTC) es el origen y máximo representante de las criptomonedas, con protocolo de código abierto y red entre iguales. Nació a raíz del artículo de Satoshi Nakamoto (hasta ahora desconocido), publicado en 2008. Al comienzo de su desarrollo solo algunos geeks de la tecnología lo conocían y era considerado casi inútil y carente de valor. Sin embargo, su valor ha alcanzado cifras nunca imaginadas para este tipo de activo. Es la base para entender cómo nacen las criptomonedas. Aunque la historia de las criptomonedas comenzó en 2008, el primer Bitcoin o criptomoneda que se emitió vio la luz el 3 de enero de 2009 a las 18:15 horas, como parte de un bloque de 50 BTC llamado génesis. Sin embargo, sus raíces están mucho más atrás en el pasado. Para conocer su historia real y entender cómo nacen las criptomonedas debemos empezar por remontarnos unos años atrás hasta dar con la primera idea de activos digitales y sus creadores.</p>
                <p>Sus verdaderas raíces se remontan a años atrás, en la década de los 80. Más específicamente en el año 1983 cuando el criptógrafo estadounidense David Chaum desarrolló un primer sistema criptográfico denominado eCash.  Fue concebido como una especie de dinero electrónico criptográfico anónimo o un sistema de efectivo electrónico. Y se utilizó como sistema de micropagos en un banco de EEUU de 1995 a 1998.</p>
                <p>Este software se encarga de almacenar cantidades de dinero en un formato digital firmado criptográficamente por el banco. El usuario puede gastar este dinero digital en cualquier comercio que acepte eCash, sin tener que abrir una cuenta con el proveedor o transmitir números de tarjetas de crédito. La seguridad de este sistema se basaba en firmas digitales de clave pública. En 1995, desarrolló un nuevo sistema llamado DigiCash, que utilizaba la criptografía para mantener confidenciales los datos de quienes realizaban las transacciones económicas. De hecho, se puede decir que así fue como nacieron las criptomonedas.</p>
                <p>Posteriormente en el año 1998 Wei Dai, ingeniero informático especialista en criptografía, hizo público un ensayo en el que presentó el concepto de “b-money“, un sistema de efectivo electrónico distribuido y anónimo. En este documento, Dai describe el conjunto de características básicas inherentes a todos los sistemas de criptomonedas existentes en la actualidad. Dai lo definió como “un esquema para un grupo de seudónimos digitales imposibles de rastrear, para pagarse entre sí con dinero y hacer cumplir los contratos entre ellos sin ayuda externa“.</p>
            </div>
            <div className='historiaCripto2'>
                <p>En su ensayo sobre “b-money” Dai incluye una serie de características particulares y específicas que hoy en día están presentes como parte fundamental de las criptomonedas que circulan en la actualidad. Tenía entre sus principales características la necesidad de verificación por parte de la comunidad en un libro contable colectivo del trabajo computacional necesario y que facilitaría la generación de la criptomoneda. Además de la correspondiente recompensa a quienes se encargaban de realizar este trabajo.</p>
                {/* <img src={bitcoin} alt="bitcoin" className='bitcoinPhHistoria' /> */}
                <p> Adicionalmente, Dai especifica en su ensayo lo indispensable de mantener la contabilidad colectiva con protocolos criptográficos, que se encargarían de autenticar las transacciones y, a la vez, servirían como garantía de que se mantuvieran organizadas. Con esta propuesta Dai se adelanta y da los primeros pasos en el camino hacia lo que hoy en día conocemos como la tecnología Blockchain. También sugiere la implementación del uso de claves públicas o firmas digitales para la ejecución de contratos y autenticación de las transacciones.</p>
                <p>10 años más tarde, en 2008, durante la gran crisis financiera mundial, una persona o un grupo de personas cuya verdadera identidad aún es desconocida se presentó con el seudónimo de Satoshi Nakamoto.  Nakamoto, el 1 de noviembre, publicó un documento técnico de lo que llamó Bitcoin en el sitio web de la fundación P2P (Peer to Peer). En ‘Bitcoin: un sistema de efectivo electrónico de igual a igual’ puso de manifiesto su nueva visión del dinero electrónico.</p>
                <p>De esta manera, se presenta por primera vez el concepto de Bitcoin al mundo y es así como nacen las criptomonedas. Después, el 3 de enero de 2009 se da su nacimiento oficial cuando el primer Bitcoin sale a la luz como parte del primer bloque de 50 BTC llamado “Génesis”. De acuerdo con las ideas de Satoshi Nakamoto, el software de código abierto fue diseñado y lanzado y la red P2P se construyó sobre él. Lo que convierte al Bitcoin en una moneda digital encriptada en el formato P2P.</p>
                <p>Este formato de transmisión de punto a punto indica que es un sistema de pago descentralizado. Lo que quiere decir que, a diferencia de las otras monedas tradicionales de circulación legal llamadas dinero fiduciario, Bitcoin no tiene un emisor centralizado, sino que se genera mediante cálculos basados ​​en algoritmos específicos de los nodos de la red. De esta manera, puede circular por todo el mundo, estar en cualquier ordenador conectado y cualquiera puede participar en su fabricación o “minado“.</p>
                <p>No importa dónde se encuentre, cualquiera puede extraer, comprar, vender o recibir Bitcoins. Utilizando una base de datos distribuida y formada por nodos a lo largo de la red P2P. De esta forma permite registrar y confirmar todas las transacciones utilizando el diseño criptográfico con el fin de garantizar la seguridad en todos los aspectos de la operación. Bitcoin es una moneda digital que se compone de una serie de códigos complejos generados por un ordenador.</p>

            </div>
            </div>
            <Footer />
        </>

    )
}
export default Historia;
